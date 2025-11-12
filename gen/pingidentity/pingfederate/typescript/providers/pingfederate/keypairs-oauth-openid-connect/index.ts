// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeypairsOauthOpenidConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The attributes used to configure an OAuth/OpenID Connect Dynamic key signing certificate. Supported in PingFederate 12.3 and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#dynamic_key_certificate_information KeypairsOauthOpenidConnect#dynamic_key_certificate_information}
  */
  readonly dynamicKeyCertificateInformation?: KeypairsOauthOpenidConnectDynamicKeyCertificateInformation;
  /**
  * Reference to the P-256 key currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p256_active_cert_ref KeypairsOauthOpenidConnect#p256_active_cert_ref}
  */
  readonly p256ActiveCertRef?: KeypairsOauthOpenidConnectP256ActiveCertRef;
  /**
  * Key Id for currently active P-256 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p256_active_key_id KeypairsOauthOpenidConnect#p256_active_key_id}
  */
  readonly p256ActiveKeyId?: string;
  /**
  * Reference to the P-256 decryption key currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p256_decryption_active_cert_ref KeypairsOauthOpenidConnect#p256_decryption_active_cert_ref}
  */
  readonly p256DecryptionActiveCertRef?: KeypairsOauthOpenidConnectP256DecryptionActiveCertRef;
  /**
  * Key Id for currently active P-256 decryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p256_decryption_active_key_id KeypairsOauthOpenidConnect#p256_decryption_active_key_id}
  */
  readonly p256DecryptionActiveKeyId?: string;
  /**
  * Reference to the P-256 decryption key previously active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p256_decryption_previous_cert_ref KeypairsOauthOpenidConnect#p256_decryption_previous_cert_ref}
  */
  readonly p256DecryptionPreviousCertRef?: KeypairsOauthOpenidConnectP256DecryptionPreviousCertRef;
  /**
  * Key Id for previously active P-256 decryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p256_decryption_previous_key_id KeypairsOauthOpenidConnect#p256_decryption_previous_key_id}
  */
  readonly p256DecryptionPreviousKeyId?: string;
  /**
  * Enable publishing of the P-256 certificate chain associated with the active key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p256_decryption_publish_x5c_parameter KeypairsOauthOpenidConnect#p256_decryption_publish_x5c_parameter}
  */
  readonly p256DecryptionPublishX5CParameter?: boolean | cdktf.IResolvable;
  /**
  * Reference to the P-256 key previously active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p256_previous_cert_ref KeypairsOauthOpenidConnect#p256_previous_cert_ref}
  */
  readonly p256PreviousCertRef?: KeypairsOauthOpenidConnectP256PreviousCertRef;
  /**
  * Key Id for previously active P-256 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p256_previous_key_id KeypairsOauthOpenidConnect#p256_previous_key_id}
  */
  readonly p256PreviousKeyId?: string;
  /**
  * Enable publishing of the P-256 certificate chain associated with the active key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p256_publish_x5c_parameter KeypairsOauthOpenidConnect#p256_publish_x5c_parameter}
  */
  readonly p256PublishX5CParameter?: boolean | cdktf.IResolvable;
  /**
  * Reference to the P-384 key currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p384_active_cert_ref KeypairsOauthOpenidConnect#p384_active_cert_ref}
  */
  readonly p384ActiveCertRef?: KeypairsOauthOpenidConnectP384ActiveCertRef;
  /**
  * Key Id for currently active P-384 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p384_active_key_id KeypairsOauthOpenidConnect#p384_active_key_id}
  */
  readonly p384ActiveKeyId?: string;
  /**
  * Reference to the P-384 decryption key currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p384_decryption_active_cert_ref KeypairsOauthOpenidConnect#p384_decryption_active_cert_ref}
  */
  readonly p384DecryptionActiveCertRef?: KeypairsOauthOpenidConnectP384DecryptionActiveCertRef;
  /**
  * Key Id for currently active P-384 decryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p384_decryption_active_key_id KeypairsOauthOpenidConnect#p384_decryption_active_key_id}
  */
  readonly p384DecryptionActiveKeyId?: string;
  /**
  * Reference to the P-384 decryption key previously active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p384_decryption_previous_cert_ref KeypairsOauthOpenidConnect#p384_decryption_previous_cert_ref}
  */
  readonly p384DecryptionPreviousCertRef?: KeypairsOauthOpenidConnectP384DecryptionPreviousCertRef;
  /**
  * Key Id for previously active P-384 decryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p384_decryption_previous_key_id KeypairsOauthOpenidConnect#p384_decryption_previous_key_id}
  */
  readonly p384DecryptionPreviousKeyId?: string;
  /**
  * Enable publishing of the P-384 certificate chain associated with the active key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p384_decryption_publish_x5c_parameter KeypairsOauthOpenidConnect#p384_decryption_publish_x5c_parameter}
  */
  readonly p384DecryptionPublishX5CParameter?: boolean | cdktf.IResolvable;
  /**
  * Reference to the P-384 key previously active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p384_previous_cert_ref KeypairsOauthOpenidConnect#p384_previous_cert_ref}
  */
  readonly p384PreviousCertRef?: KeypairsOauthOpenidConnectP384PreviousCertRef;
  /**
  * Key Id for previously active P-384 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p384_previous_key_id KeypairsOauthOpenidConnect#p384_previous_key_id}
  */
  readonly p384PreviousKeyId?: string;
  /**
  * Enable publishing of the P-384 certificate chain associated with the active key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p384_publish_x5c_parameter KeypairsOauthOpenidConnect#p384_publish_x5c_parameter}
  */
  readonly p384PublishX5CParameter?: boolean | cdktf.IResolvable;
  /**
  * Reference to the P-521 key currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p521_active_cert_ref KeypairsOauthOpenidConnect#p521_active_cert_ref}
  */
  readonly p521ActiveCertRef?: KeypairsOauthOpenidConnectP521ActiveCertRef;
  /**
  * Key Id for currently active P-521 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p521_active_key_id KeypairsOauthOpenidConnect#p521_active_key_id}
  */
  readonly p521ActiveKeyId?: string;
  /**
  * Reference to the P-521 decryption key currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p521_decryption_active_cert_ref KeypairsOauthOpenidConnect#p521_decryption_active_cert_ref}
  */
  readonly p521DecryptionActiveCertRef?: KeypairsOauthOpenidConnectP521DecryptionActiveCertRef;
  /**
  * Key Id for currently active P-521 decryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p521_decryption_active_key_id KeypairsOauthOpenidConnect#p521_decryption_active_key_id}
  */
  readonly p521DecryptionActiveKeyId?: string;
  /**
  * Reference to the P-521 decryption key previously active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p521_decryption_previous_cert_ref KeypairsOauthOpenidConnect#p521_decryption_previous_cert_ref}
  */
  readonly p521DecryptionPreviousCertRef?: KeypairsOauthOpenidConnectP521DecryptionPreviousCertRef;
  /**
  * Key Id for previously active P-521 decryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p521_decryption_previous_key_id KeypairsOauthOpenidConnect#p521_decryption_previous_key_id}
  */
  readonly p521DecryptionPreviousKeyId?: string;
  /**
  * Enable publishing of the P-521 certificate chain associated with the active key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p521_decryption_publish_x5c_parameter KeypairsOauthOpenidConnect#p521_decryption_publish_x5c_parameter}
  */
  readonly p521DecryptionPublishX5CParameter?: boolean | cdktf.IResolvable;
  /**
  * Reference to the P-521 key previously active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p521_previous_cert_ref KeypairsOauthOpenidConnect#p521_previous_cert_ref}
  */
  readonly p521PreviousCertRef?: KeypairsOauthOpenidConnectP521PreviousCertRef;
  /**
  * Key Id for previously active P-521 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p521_previous_key_id KeypairsOauthOpenidConnect#p521_previous_key_id}
  */
  readonly p521PreviousKeyId?: string;
  /**
  * Enable publishing of the P-521 certificate chain associated with the active key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#p521_publish_x5c_parameter KeypairsOauthOpenidConnect#p521_publish_x5c_parameter}
  */
  readonly p521PublishX5CParameter?: boolean | cdktf.IResolvable;
  /**
  * Enable publishing of the dynamic key x5c parameters. Supported in PingFederate 12.3 and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#publish_dynamic_key_x5cs KeypairsOauthOpenidConnect#publish_dynamic_key_x5cs}
  */
  readonly publishDynamicKeyX5Cs?: boolean | cdktf.IResolvable;
  /**
  * Reference to the RSA key currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_active_cert_ref KeypairsOauthOpenidConnect#rsa_active_cert_ref}
  */
  readonly rsaActiveCertRef?: KeypairsOauthOpenidConnectRsaActiveCertRef;
  /**
  * Key Id for currently active RSA key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_active_key_id KeypairsOauthOpenidConnect#rsa_active_key_id}
  */
  readonly rsaActiveKeyId?: string;
  /**
  * PingFederate uses the same RSA key for all RSA signing algorithms. To enable active RSA JWK entry to have unique single valued ''alg'' parameter, use this list to set a key identifier for each RSA algorithm (`RS256`, `RS384`, `RS512`, `PS256`, `PS384` and `PS512`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_algorithm_active_key_ids KeypairsOauthOpenidConnect#rsa_algorithm_active_key_ids}
  */
  readonly rsaAlgorithmActiveKeyIds?: KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIds[] | cdktf.IResolvable;
  /**
  * PingFederate uses the same RSA key for all RSA signing algorithms. To enable previously active RSA JWK entry to have unique single valued ''alg'' parameter, use this list to set a key identifier for each RSA algorithm (`RS256`, `RS384`, `RS512`, `PS256`, `PS384` and `PS512`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_algorithm_previous_key_ids KeypairsOauthOpenidConnect#rsa_algorithm_previous_key_ids}
  */
  readonly rsaAlgorithmPreviousKeyIds?: KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIds[] | cdktf.IResolvable;
  /**
  * Reference to the RSA decryption key currently active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_decryption_active_cert_ref KeypairsOauthOpenidConnect#rsa_decryption_active_cert_ref}
  */
  readonly rsaDecryptionActiveCertRef?: KeypairsOauthOpenidConnectRsaDecryptionActiveCertRef;
  /**
  * Key Id for currently active RSA decryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_decryption_active_key_id KeypairsOauthOpenidConnect#rsa_decryption_active_key_id}
  */
  readonly rsaDecryptionActiveKeyId?: string;
  /**
  * Reference to the RSA decryption key previously active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_decryption_previous_cert_ref KeypairsOauthOpenidConnect#rsa_decryption_previous_cert_ref}
  */
  readonly rsaDecryptionPreviousCertRef?: KeypairsOauthOpenidConnectRsaDecryptionPreviousCertRef;
  /**
  * Key Id for previously active RSA decryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_decryption_previous_key_id KeypairsOauthOpenidConnect#rsa_decryption_previous_key_id}
  */
  readonly rsaDecryptionPreviousKeyId?: string;
  /**
  * Enable publishing of the RSA certificate chain associated with the active key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_decryption_publish_x5c_parameter KeypairsOauthOpenidConnect#rsa_decryption_publish_x5c_parameter}
  */
  readonly rsaDecryptionPublishX5CParameter?: boolean | cdktf.IResolvable;
  /**
  * Reference to the RSA key previously active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_previous_cert_ref KeypairsOauthOpenidConnect#rsa_previous_cert_ref}
  */
  readonly rsaPreviousCertRef?: KeypairsOauthOpenidConnectRsaPreviousCertRef;
  /**
  * Key Id for previously active RSA key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_previous_key_id KeypairsOauthOpenidConnect#rsa_previous_key_id}
  */
  readonly rsaPreviousKeyId?: string;
  /**
  * Enable publishing of the RSA certificate chain associated with the active key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_publish_x5c_parameter KeypairsOauthOpenidConnect#rsa_publish_x5c_parameter}
  */
  readonly rsaPublishX5CParameter?: boolean | cdktf.IResolvable;
  /**
  * Enable static keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#static_jwks_enabled KeypairsOauthOpenidConnect#static_jwks_enabled}
  */
  readonly staticJwksEnabled: boolean | cdktf.IResolvable;
}
export interface KeypairsOauthOpenidConnectDynamicKeyCertificateInformation {
  /**
  * The city name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#city KeypairsOauthOpenidConnect#city}
  */
  readonly city?: string;
  /**
  * The country name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#country KeypairsOauthOpenidConnect#country}
  */
  readonly country?: string;
  /**
  * The organization name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#organization KeypairsOauthOpenidConnect#organization}
  */
  readonly organization?: string;
  /**
  * The organization unit name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#organization_unit KeypairsOauthOpenidConnect#organization_unit}
  */
  readonly organizationUnit?: string;
  /**
  * The state name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#state KeypairsOauthOpenidConnect#state}
  */
  readonly state?: string;
}

export function keypairsOauthOpenidConnectDynamicKeyCertificateInformationToTerraform(struct?: KeypairsOauthOpenidConnectDynamicKeyCertificateInformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    organization: cdktf.stringToTerraform(struct!.organization),
    organization_unit: cdktf.stringToTerraform(struct!.organizationUnit),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function keypairsOauthOpenidConnectDynamicKeyCertificateInformationToHclTerraform(struct?: KeypairsOauthOpenidConnectDynamicKeyCertificateInformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeypairsOauthOpenidConnectDynamicKeyCertificateInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectDynamicKeyCertificateInformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationUnit = this._organizationUnit;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeypairsOauthOpenidConnectDynamicKeyCertificateInformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._city = undefined;
      this._country = undefined;
      this._organization = undefined;
      this._organizationUnit = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._city = value.city;
      this._country = value.country;
      this._organization = value.organization;
      this._organizationUnit = value.organizationUnit;
      this._state = value.state;
    }
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organization_unit - computed: true, optional: true, required: false
  private _organizationUnit?: string; 
  public get organizationUnit() {
    return this.getStringAttribute('organization_unit');
  }
  public set organizationUnit(value: string) {
    this._organizationUnit = value;
  }
  public resetOrganizationUnit() {
    this._organizationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUnitInput() {
    return this._organizationUnit;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface KeypairsOauthOpenidConnectP256ActiveCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectP256ActiveCertRefToTerraform(struct?: KeypairsOauthOpenidConnectP256ActiveCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectP256ActiveCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectP256ActiveCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectP256ActiveCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectP256ActiveCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectP256ActiveCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectP256DecryptionActiveCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectP256DecryptionActiveCertRefToTerraform(struct?: KeypairsOauthOpenidConnectP256DecryptionActiveCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectP256DecryptionActiveCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectP256DecryptionActiveCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectP256DecryptionActiveCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectP256DecryptionActiveCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectP256DecryptionActiveCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectP256DecryptionPreviousCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectP256DecryptionPreviousCertRefToTerraform(struct?: KeypairsOauthOpenidConnectP256DecryptionPreviousCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectP256DecryptionPreviousCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectP256DecryptionPreviousCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectP256DecryptionPreviousCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectP256DecryptionPreviousCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectP256DecryptionPreviousCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectP256PreviousCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectP256PreviousCertRefToTerraform(struct?: KeypairsOauthOpenidConnectP256PreviousCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectP256PreviousCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectP256PreviousCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectP256PreviousCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectP256PreviousCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectP256PreviousCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectP384ActiveCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectP384ActiveCertRefToTerraform(struct?: KeypairsOauthOpenidConnectP384ActiveCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectP384ActiveCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectP384ActiveCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectP384ActiveCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectP384ActiveCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectP384ActiveCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectP384DecryptionActiveCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectP384DecryptionActiveCertRefToTerraform(struct?: KeypairsOauthOpenidConnectP384DecryptionActiveCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectP384DecryptionActiveCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectP384DecryptionActiveCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectP384DecryptionActiveCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectP384DecryptionActiveCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectP384DecryptionActiveCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectP384DecryptionPreviousCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectP384DecryptionPreviousCertRefToTerraform(struct?: KeypairsOauthOpenidConnectP384DecryptionPreviousCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectP384DecryptionPreviousCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectP384DecryptionPreviousCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectP384DecryptionPreviousCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectP384DecryptionPreviousCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectP384DecryptionPreviousCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectP384PreviousCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectP384PreviousCertRefToTerraform(struct?: KeypairsOauthOpenidConnectP384PreviousCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectP384PreviousCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectP384PreviousCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectP384PreviousCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectP384PreviousCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectP384PreviousCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectP521ActiveCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectP521ActiveCertRefToTerraform(struct?: KeypairsOauthOpenidConnectP521ActiveCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectP521ActiveCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectP521ActiveCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectP521ActiveCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectP521ActiveCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectP521ActiveCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectP521DecryptionActiveCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectP521DecryptionActiveCertRefToTerraform(struct?: KeypairsOauthOpenidConnectP521DecryptionActiveCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectP521DecryptionActiveCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectP521DecryptionActiveCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectP521DecryptionActiveCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectP521DecryptionActiveCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectP521DecryptionActiveCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectP521DecryptionPreviousCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectP521DecryptionPreviousCertRefToTerraform(struct?: KeypairsOauthOpenidConnectP521DecryptionPreviousCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectP521DecryptionPreviousCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectP521DecryptionPreviousCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectP521DecryptionPreviousCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectP521DecryptionPreviousCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectP521DecryptionPreviousCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectP521PreviousCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectP521PreviousCertRefToTerraform(struct?: KeypairsOauthOpenidConnectP521PreviousCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectP521PreviousCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectP521PreviousCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectP521PreviousCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectP521PreviousCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectP521PreviousCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectRsaActiveCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectRsaActiveCertRefToTerraform(struct?: KeypairsOauthOpenidConnectRsaActiveCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectRsaActiveCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectRsaActiveCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectRsaActiveCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectRsaActiveCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectRsaActiveCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIds {
  /**
  * Unique key identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#key_id KeypairsOauthOpenidConnect#key_id}
  */
  readonly keyId: string;
  /**
  * The RSA signing algorithm type. The supported RSA signing algorithm types are `RS256`, `RS384`, `RS512`, `PS256`, `PS384` and `PS512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_alg_type KeypairsOauthOpenidConnect#rsa_alg_type}
  */
  readonly rsaAlgType: string;
}

export function keypairsOauthOpenidConnectRsaAlgorithmActiveKeyIdsToTerraform(struct?: KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    rsa_alg_type: cdktf.stringToTerraform(struct!.rsaAlgType),
  }
}


export function keypairsOauthOpenidConnectRsaAlgorithmActiveKeyIdsToHclTerraform(struct?: KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_alg_type: {
      value: cdktf.stringToHclTerraform(struct!.rsaAlgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._rsaAlgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaAlgType = this._rsaAlgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._rsaAlgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._rsaAlgType = value.rsaAlgType;
    }
  }

  // key_id - computed: true, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // rsa_alg_type - computed: true, optional: false, required: true
  private _rsaAlgType?: string; 
  public get rsaAlgType() {
    return this.getStringAttribute('rsa_alg_type');
  }
  public set rsaAlgType(value: string) {
    this._rsaAlgType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaAlgTypeInput() {
    return this._rsaAlgType;
  }
}

export class KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIdsList extends cdktf.ComplexList {
  public internalValue? : KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIds[] | cdktf.IResolvable

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
  public get(index: number): KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIdsOutputReference {
    return new KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIds {
  /**
  * Unique key identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#key_id KeypairsOauthOpenidConnect#key_id}
  */
  readonly keyId: string;
  /**
  * The RSA signing algorithm type. The supported RSA signing algorithm types are `RS256`, `RS384`, `RS512`, `PS256`, `PS384` and `PS512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#rsa_alg_type KeypairsOauthOpenidConnect#rsa_alg_type}
  */
  readonly rsaAlgType: string;
}

export function keypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIdsToTerraform(struct?: KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    rsa_alg_type: cdktf.stringToTerraform(struct!.rsaAlgType),
  }
}


export function keypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIdsToHclTerraform(struct?: KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_alg_type: {
      value: cdktf.stringToHclTerraform(struct!.rsaAlgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._rsaAlgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaAlgType = this._rsaAlgType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._rsaAlgType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._rsaAlgType = value.rsaAlgType;
    }
  }

  // key_id - computed: true, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // rsa_alg_type - computed: true, optional: false, required: true
  private _rsaAlgType?: string; 
  public get rsaAlgType() {
    return this.getStringAttribute('rsa_alg_type');
  }
  public set rsaAlgType(value: string) {
    this._rsaAlgType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaAlgTypeInput() {
    return this._rsaAlgType;
  }
}

export class KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIdsList extends cdktf.ComplexList {
  public internalValue? : KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIds[] | cdktf.IResolvable

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
  public get(index: number): KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIdsOutputReference {
    return new KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeypairsOauthOpenidConnectRsaDecryptionActiveCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectRsaDecryptionActiveCertRefToTerraform(struct?: KeypairsOauthOpenidConnectRsaDecryptionActiveCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectRsaDecryptionActiveCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectRsaDecryptionActiveCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectRsaDecryptionActiveCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectRsaDecryptionActiveCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectRsaDecryptionActiveCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectRsaDecryptionPreviousCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectRsaDecryptionPreviousCertRefToTerraform(struct?: KeypairsOauthOpenidConnectRsaDecryptionPreviousCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectRsaDecryptionPreviousCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectRsaDecryptionPreviousCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectRsaDecryptionPreviousCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectRsaDecryptionPreviousCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectRsaDecryptionPreviousCertRef | cdktf.IResolvable | undefined) {
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
export interface KeypairsOauthOpenidConnectRsaPreviousCertRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#id KeypairsOauthOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function keypairsOauthOpenidConnectRsaPreviousCertRefToTerraform(struct?: KeypairsOauthOpenidConnectRsaPreviousCertRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function keypairsOauthOpenidConnectRsaPreviousCertRefToHclTerraform(struct?: KeypairsOauthOpenidConnectRsaPreviousCertRef | cdktf.IResolvable): any {
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

export class KeypairsOauthOpenidConnectRsaPreviousCertRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsOauthOpenidConnectRsaPreviousCertRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeypairsOauthOpenidConnectRsaPreviousCertRef | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect pingfederate_keypairs_oauth_openid_connect}
*/
export class KeypairsOauthOpenidConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_keypairs_oauth_openid_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeypairsOauthOpenidConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeypairsOauthOpenidConnect to import
  * @param importFromId The id of the existing KeypairsOauthOpenidConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeypairsOauthOpenidConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_keypairs_oauth_openid_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_oauth_openid_connect pingfederate_keypairs_oauth_openid_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeypairsOauthOpenidConnectConfig
  */
  public constructor(scope: Construct, id: string, config: KeypairsOauthOpenidConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_keypairs_oauth_openid_connect',
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
    this._dynamicKeyCertificateInformation.internalValue = config.dynamicKeyCertificateInformation;
    this._p256ActiveCertRef.internalValue = config.p256ActiveCertRef;
    this._p256ActiveKeyId = config.p256ActiveKeyId;
    this._p256DecryptionActiveCertRef.internalValue = config.p256DecryptionActiveCertRef;
    this._p256DecryptionActiveKeyId = config.p256DecryptionActiveKeyId;
    this._p256DecryptionPreviousCertRef.internalValue = config.p256DecryptionPreviousCertRef;
    this._p256DecryptionPreviousKeyId = config.p256DecryptionPreviousKeyId;
    this._p256DecryptionPublishX5CParameter = config.p256DecryptionPublishX5CParameter;
    this._p256PreviousCertRef.internalValue = config.p256PreviousCertRef;
    this._p256PreviousKeyId = config.p256PreviousKeyId;
    this._p256PublishX5CParameter = config.p256PublishX5CParameter;
    this._p384ActiveCertRef.internalValue = config.p384ActiveCertRef;
    this._p384ActiveKeyId = config.p384ActiveKeyId;
    this._p384DecryptionActiveCertRef.internalValue = config.p384DecryptionActiveCertRef;
    this._p384DecryptionActiveKeyId = config.p384DecryptionActiveKeyId;
    this._p384DecryptionPreviousCertRef.internalValue = config.p384DecryptionPreviousCertRef;
    this._p384DecryptionPreviousKeyId = config.p384DecryptionPreviousKeyId;
    this._p384DecryptionPublishX5CParameter = config.p384DecryptionPublishX5CParameter;
    this._p384PreviousCertRef.internalValue = config.p384PreviousCertRef;
    this._p384PreviousKeyId = config.p384PreviousKeyId;
    this._p384PublishX5CParameter = config.p384PublishX5CParameter;
    this._p521ActiveCertRef.internalValue = config.p521ActiveCertRef;
    this._p521ActiveKeyId = config.p521ActiveKeyId;
    this._p521DecryptionActiveCertRef.internalValue = config.p521DecryptionActiveCertRef;
    this._p521DecryptionActiveKeyId = config.p521DecryptionActiveKeyId;
    this._p521DecryptionPreviousCertRef.internalValue = config.p521DecryptionPreviousCertRef;
    this._p521DecryptionPreviousKeyId = config.p521DecryptionPreviousKeyId;
    this._p521DecryptionPublishX5CParameter = config.p521DecryptionPublishX5CParameter;
    this._p521PreviousCertRef.internalValue = config.p521PreviousCertRef;
    this._p521PreviousKeyId = config.p521PreviousKeyId;
    this._p521PublishX5CParameter = config.p521PublishX5CParameter;
    this._publishDynamicKeyX5Cs = config.publishDynamicKeyX5Cs;
    this._rsaActiveCertRef.internalValue = config.rsaActiveCertRef;
    this._rsaActiveKeyId = config.rsaActiveKeyId;
    this._rsaAlgorithmActiveKeyIds.internalValue = config.rsaAlgorithmActiveKeyIds;
    this._rsaAlgorithmPreviousKeyIds.internalValue = config.rsaAlgorithmPreviousKeyIds;
    this._rsaDecryptionActiveCertRef.internalValue = config.rsaDecryptionActiveCertRef;
    this._rsaDecryptionActiveKeyId = config.rsaDecryptionActiveKeyId;
    this._rsaDecryptionPreviousCertRef.internalValue = config.rsaDecryptionPreviousCertRef;
    this._rsaDecryptionPreviousKeyId = config.rsaDecryptionPreviousKeyId;
    this._rsaDecryptionPublishX5CParameter = config.rsaDecryptionPublishX5CParameter;
    this._rsaPreviousCertRef.internalValue = config.rsaPreviousCertRef;
    this._rsaPreviousKeyId = config.rsaPreviousKeyId;
    this._rsaPublishX5CParameter = config.rsaPublishX5CParameter;
    this._staticJwksEnabled = config.staticJwksEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_key_certificate_information - computed: true, optional: true, required: false
  private _dynamicKeyCertificateInformation = new KeypairsOauthOpenidConnectDynamicKeyCertificateInformationOutputReference(this, "dynamic_key_certificate_information");
  public get dynamicKeyCertificateInformation() {
    return this._dynamicKeyCertificateInformation;
  }
  public putDynamicKeyCertificateInformation(value: KeypairsOauthOpenidConnectDynamicKeyCertificateInformation) {
    this._dynamicKeyCertificateInformation.internalValue = value;
  }
  public resetDynamicKeyCertificateInformation() {
    this._dynamicKeyCertificateInformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyCertificateInformationInput() {
    return this._dynamicKeyCertificateInformation.internalValue;
  }

  // p256_active_cert_ref - computed: false, optional: true, required: false
  private _p256ActiveCertRef = new KeypairsOauthOpenidConnectP256ActiveCertRefOutputReference(this, "p256_active_cert_ref");
  public get p256ActiveCertRef() {
    return this._p256ActiveCertRef;
  }
  public putP256ActiveCertRef(value: KeypairsOauthOpenidConnectP256ActiveCertRef) {
    this._p256ActiveCertRef.internalValue = value;
  }
  public resetP256ActiveCertRef() {
    this._p256ActiveCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256ActiveCertRefInput() {
    return this._p256ActiveCertRef.internalValue;
  }

  // p256_active_key_id - computed: false, optional: true, required: false
  private _p256ActiveKeyId?: string; 
  public get p256ActiveKeyId() {
    return this.getStringAttribute('p256_active_key_id');
  }
  public set p256ActiveKeyId(value: string) {
    this._p256ActiveKeyId = value;
  }
  public resetP256ActiveKeyId() {
    this._p256ActiveKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256ActiveKeyIdInput() {
    return this._p256ActiveKeyId;
  }

  // p256_decryption_active_cert_ref - computed: false, optional: true, required: false
  private _p256DecryptionActiveCertRef = new KeypairsOauthOpenidConnectP256DecryptionActiveCertRefOutputReference(this, "p256_decryption_active_cert_ref");
  public get p256DecryptionActiveCertRef() {
    return this._p256DecryptionActiveCertRef;
  }
  public putP256DecryptionActiveCertRef(value: KeypairsOauthOpenidConnectP256DecryptionActiveCertRef) {
    this._p256DecryptionActiveCertRef.internalValue = value;
  }
  public resetP256DecryptionActiveCertRef() {
    this._p256DecryptionActiveCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256DecryptionActiveCertRefInput() {
    return this._p256DecryptionActiveCertRef.internalValue;
  }

  // p256_decryption_active_key_id - computed: false, optional: true, required: false
  private _p256DecryptionActiveKeyId?: string; 
  public get p256DecryptionActiveKeyId() {
    return this.getStringAttribute('p256_decryption_active_key_id');
  }
  public set p256DecryptionActiveKeyId(value: string) {
    this._p256DecryptionActiveKeyId = value;
  }
  public resetP256DecryptionActiveKeyId() {
    this._p256DecryptionActiveKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256DecryptionActiveKeyIdInput() {
    return this._p256DecryptionActiveKeyId;
  }

  // p256_decryption_previous_cert_ref - computed: false, optional: true, required: false
  private _p256DecryptionPreviousCertRef = new KeypairsOauthOpenidConnectP256DecryptionPreviousCertRefOutputReference(this, "p256_decryption_previous_cert_ref");
  public get p256DecryptionPreviousCertRef() {
    return this._p256DecryptionPreviousCertRef;
  }
  public putP256DecryptionPreviousCertRef(value: KeypairsOauthOpenidConnectP256DecryptionPreviousCertRef) {
    this._p256DecryptionPreviousCertRef.internalValue = value;
  }
  public resetP256DecryptionPreviousCertRef() {
    this._p256DecryptionPreviousCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256DecryptionPreviousCertRefInput() {
    return this._p256DecryptionPreviousCertRef.internalValue;
  }

  // p256_decryption_previous_key_id - computed: false, optional: true, required: false
  private _p256DecryptionPreviousKeyId?: string; 
  public get p256DecryptionPreviousKeyId() {
    return this.getStringAttribute('p256_decryption_previous_key_id');
  }
  public set p256DecryptionPreviousKeyId(value: string) {
    this._p256DecryptionPreviousKeyId = value;
  }
  public resetP256DecryptionPreviousKeyId() {
    this._p256DecryptionPreviousKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256DecryptionPreviousKeyIdInput() {
    return this._p256DecryptionPreviousKeyId;
  }

  // p256_decryption_publish_x5c_parameter - computed: true, optional: true, required: false
  private _p256DecryptionPublishX5CParameter?: boolean | cdktf.IResolvable; 
  public get p256DecryptionPublishX5CParameter() {
    return this.getBooleanAttribute('p256_decryption_publish_x5c_parameter');
  }
  public set p256DecryptionPublishX5CParameter(value: boolean | cdktf.IResolvable) {
    this._p256DecryptionPublishX5CParameter = value;
  }
  public resetP256DecryptionPublishX5CParameter() {
    this._p256DecryptionPublishX5CParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256DecryptionPublishX5CParameterInput() {
    return this._p256DecryptionPublishX5CParameter;
  }

  // p256_previous_cert_ref - computed: false, optional: true, required: false
  private _p256PreviousCertRef = new KeypairsOauthOpenidConnectP256PreviousCertRefOutputReference(this, "p256_previous_cert_ref");
  public get p256PreviousCertRef() {
    return this._p256PreviousCertRef;
  }
  public putP256PreviousCertRef(value: KeypairsOauthOpenidConnectP256PreviousCertRef) {
    this._p256PreviousCertRef.internalValue = value;
  }
  public resetP256PreviousCertRef() {
    this._p256PreviousCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256PreviousCertRefInput() {
    return this._p256PreviousCertRef.internalValue;
  }

  // p256_previous_key_id - computed: false, optional: true, required: false
  private _p256PreviousKeyId?: string; 
  public get p256PreviousKeyId() {
    return this.getStringAttribute('p256_previous_key_id');
  }
  public set p256PreviousKeyId(value: string) {
    this._p256PreviousKeyId = value;
  }
  public resetP256PreviousKeyId() {
    this._p256PreviousKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256PreviousKeyIdInput() {
    return this._p256PreviousKeyId;
  }

  // p256_publish_x5c_parameter - computed: true, optional: true, required: false
  private _p256PublishX5CParameter?: boolean | cdktf.IResolvable; 
  public get p256PublishX5CParameter() {
    return this.getBooleanAttribute('p256_publish_x5c_parameter');
  }
  public set p256PublishX5CParameter(value: boolean | cdktf.IResolvable) {
    this._p256PublishX5CParameter = value;
  }
  public resetP256PublishX5CParameter() {
    this._p256PublishX5CParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p256PublishX5CParameterInput() {
    return this._p256PublishX5CParameter;
  }

  // p384_active_cert_ref - computed: false, optional: true, required: false
  private _p384ActiveCertRef = new KeypairsOauthOpenidConnectP384ActiveCertRefOutputReference(this, "p384_active_cert_ref");
  public get p384ActiveCertRef() {
    return this._p384ActiveCertRef;
  }
  public putP384ActiveCertRef(value: KeypairsOauthOpenidConnectP384ActiveCertRef) {
    this._p384ActiveCertRef.internalValue = value;
  }
  public resetP384ActiveCertRef() {
    this._p384ActiveCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384ActiveCertRefInput() {
    return this._p384ActiveCertRef.internalValue;
  }

  // p384_active_key_id - computed: false, optional: true, required: false
  private _p384ActiveKeyId?: string; 
  public get p384ActiveKeyId() {
    return this.getStringAttribute('p384_active_key_id');
  }
  public set p384ActiveKeyId(value: string) {
    this._p384ActiveKeyId = value;
  }
  public resetP384ActiveKeyId() {
    this._p384ActiveKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384ActiveKeyIdInput() {
    return this._p384ActiveKeyId;
  }

  // p384_decryption_active_cert_ref - computed: false, optional: true, required: false
  private _p384DecryptionActiveCertRef = new KeypairsOauthOpenidConnectP384DecryptionActiveCertRefOutputReference(this, "p384_decryption_active_cert_ref");
  public get p384DecryptionActiveCertRef() {
    return this._p384DecryptionActiveCertRef;
  }
  public putP384DecryptionActiveCertRef(value: KeypairsOauthOpenidConnectP384DecryptionActiveCertRef) {
    this._p384DecryptionActiveCertRef.internalValue = value;
  }
  public resetP384DecryptionActiveCertRef() {
    this._p384DecryptionActiveCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384DecryptionActiveCertRefInput() {
    return this._p384DecryptionActiveCertRef.internalValue;
  }

  // p384_decryption_active_key_id - computed: false, optional: true, required: false
  private _p384DecryptionActiveKeyId?: string; 
  public get p384DecryptionActiveKeyId() {
    return this.getStringAttribute('p384_decryption_active_key_id');
  }
  public set p384DecryptionActiveKeyId(value: string) {
    this._p384DecryptionActiveKeyId = value;
  }
  public resetP384DecryptionActiveKeyId() {
    this._p384DecryptionActiveKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384DecryptionActiveKeyIdInput() {
    return this._p384DecryptionActiveKeyId;
  }

  // p384_decryption_previous_cert_ref - computed: false, optional: true, required: false
  private _p384DecryptionPreviousCertRef = new KeypairsOauthOpenidConnectP384DecryptionPreviousCertRefOutputReference(this, "p384_decryption_previous_cert_ref");
  public get p384DecryptionPreviousCertRef() {
    return this._p384DecryptionPreviousCertRef;
  }
  public putP384DecryptionPreviousCertRef(value: KeypairsOauthOpenidConnectP384DecryptionPreviousCertRef) {
    this._p384DecryptionPreviousCertRef.internalValue = value;
  }
  public resetP384DecryptionPreviousCertRef() {
    this._p384DecryptionPreviousCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384DecryptionPreviousCertRefInput() {
    return this._p384DecryptionPreviousCertRef.internalValue;
  }

  // p384_decryption_previous_key_id - computed: false, optional: true, required: false
  private _p384DecryptionPreviousKeyId?: string; 
  public get p384DecryptionPreviousKeyId() {
    return this.getStringAttribute('p384_decryption_previous_key_id');
  }
  public set p384DecryptionPreviousKeyId(value: string) {
    this._p384DecryptionPreviousKeyId = value;
  }
  public resetP384DecryptionPreviousKeyId() {
    this._p384DecryptionPreviousKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384DecryptionPreviousKeyIdInput() {
    return this._p384DecryptionPreviousKeyId;
  }

  // p384_decryption_publish_x5c_parameter - computed: true, optional: true, required: false
  private _p384DecryptionPublishX5CParameter?: boolean | cdktf.IResolvable; 
  public get p384DecryptionPublishX5CParameter() {
    return this.getBooleanAttribute('p384_decryption_publish_x5c_parameter');
  }
  public set p384DecryptionPublishX5CParameter(value: boolean | cdktf.IResolvable) {
    this._p384DecryptionPublishX5CParameter = value;
  }
  public resetP384DecryptionPublishX5CParameter() {
    this._p384DecryptionPublishX5CParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384DecryptionPublishX5CParameterInput() {
    return this._p384DecryptionPublishX5CParameter;
  }

  // p384_previous_cert_ref - computed: false, optional: true, required: false
  private _p384PreviousCertRef = new KeypairsOauthOpenidConnectP384PreviousCertRefOutputReference(this, "p384_previous_cert_ref");
  public get p384PreviousCertRef() {
    return this._p384PreviousCertRef;
  }
  public putP384PreviousCertRef(value: KeypairsOauthOpenidConnectP384PreviousCertRef) {
    this._p384PreviousCertRef.internalValue = value;
  }
  public resetP384PreviousCertRef() {
    this._p384PreviousCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384PreviousCertRefInput() {
    return this._p384PreviousCertRef.internalValue;
  }

  // p384_previous_key_id - computed: false, optional: true, required: false
  private _p384PreviousKeyId?: string; 
  public get p384PreviousKeyId() {
    return this.getStringAttribute('p384_previous_key_id');
  }
  public set p384PreviousKeyId(value: string) {
    this._p384PreviousKeyId = value;
  }
  public resetP384PreviousKeyId() {
    this._p384PreviousKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384PreviousKeyIdInput() {
    return this._p384PreviousKeyId;
  }

  // p384_publish_x5c_parameter - computed: true, optional: true, required: false
  private _p384PublishX5CParameter?: boolean | cdktf.IResolvable; 
  public get p384PublishX5CParameter() {
    return this.getBooleanAttribute('p384_publish_x5c_parameter');
  }
  public set p384PublishX5CParameter(value: boolean | cdktf.IResolvable) {
    this._p384PublishX5CParameter = value;
  }
  public resetP384PublishX5CParameter() {
    this._p384PublishX5CParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p384PublishX5CParameterInput() {
    return this._p384PublishX5CParameter;
  }

  // p521_active_cert_ref - computed: false, optional: true, required: false
  private _p521ActiveCertRef = new KeypairsOauthOpenidConnectP521ActiveCertRefOutputReference(this, "p521_active_cert_ref");
  public get p521ActiveCertRef() {
    return this._p521ActiveCertRef;
  }
  public putP521ActiveCertRef(value: KeypairsOauthOpenidConnectP521ActiveCertRef) {
    this._p521ActiveCertRef.internalValue = value;
  }
  public resetP521ActiveCertRef() {
    this._p521ActiveCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521ActiveCertRefInput() {
    return this._p521ActiveCertRef.internalValue;
  }

  // p521_active_key_id - computed: false, optional: true, required: false
  private _p521ActiveKeyId?: string; 
  public get p521ActiveKeyId() {
    return this.getStringAttribute('p521_active_key_id');
  }
  public set p521ActiveKeyId(value: string) {
    this._p521ActiveKeyId = value;
  }
  public resetP521ActiveKeyId() {
    this._p521ActiveKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521ActiveKeyIdInput() {
    return this._p521ActiveKeyId;
  }

  // p521_decryption_active_cert_ref - computed: false, optional: true, required: false
  private _p521DecryptionActiveCertRef = new KeypairsOauthOpenidConnectP521DecryptionActiveCertRefOutputReference(this, "p521_decryption_active_cert_ref");
  public get p521DecryptionActiveCertRef() {
    return this._p521DecryptionActiveCertRef;
  }
  public putP521DecryptionActiveCertRef(value: KeypairsOauthOpenidConnectP521DecryptionActiveCertRef) {
    this._p521DecryptionActiveCertRef.internalValue = value;
  }
  public resetP521DecryptionActiveCertRef() {
    this._p521DecryptionActiveCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521DecryptionActiveCertRefInput() {
    return this._p521DecryptionActiveCertRef.internalValue;
  }

  // p521_decryption_active_key_id - computed: false, optional: true, required: false
  private _p521DecryptionActiveKeyId?: string; 
  public get p521DecryptionActiveKeyId() {
    return this.getStringAttribute('p521_decryption_active_key_id');
  }
  public set p521DecryptionActiveKeyId(value: string) {
    this._p521DecryptionActiveKeyId = value;
  }
  public resetP521DecryptionActiveKeyId() {
    this._p521DecryptionActiveKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521DecryptionActiveKeyIdInput() {
    return this._p521DecryptionActiveKeyId;
  }

  // p521_decryption_previous_cert_ref - computed: false, optional: true, required: false
  private _p521DecryptionPreviousCertRef = new KeypairsOauthOpenidConnectP521DecryptionPreviousCertRefOutputReference(this, "p521_decryption_previous_cert_ref");
  public get p521DecryptionPreviousCertRef() {
    return this._p521DecryptionPreviousCertRef;
  }
  public putP521DecryptionPreviousCertRef(value: KeypairsOauthOpenidConnectP521DecryptionPreviousCertRef) {
    this._p521DecryptionPreviousCertRef.internalValue = value;
  }
  public resetP521DecryptionPreviousCertRef() {
    this._p521DecryptionPreviousCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521DecryptionPreviousCertRefInput() {
    return this._p521DecryptionPreviousCertRef.internalValue;
  }

  // p521_decryption_previous_key_id - computed: false, optional: true, required: false
  private _p521DecryptionPreviousKeyId?: string; 
  public get p521DecryptionPreviousKeyId() {
    return this.getStringAttribute('p521_decryption_previous_key_id');
  }
  public set p521DecryptionPreviousKeyId(value: string) {
    this._p521DecryptionPreviousKeyId = value;
  }
  public resetP521DecryptionPreviousKeyId() {
    this._p521DecryptionPreviousKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521DecryptionPreviousKeyIdInput() {
    return this._p521DecryptionPreviousKeyId;
  }

  // p521_decryption_publish_x5c_parameter - computed: true, optional: true, required: false
  private _p521DecryptionPublishX5CParameter?: boolean | cdktf.IResolvable; 
  public get p521DecryptionPublishX5CParameter() {
    return this.getBooleanAttribute('p521_decryption_publish_x5c_parameter');
  }
  public set p521DecryptionPublishX5CParameter(value: boolean | cdktf.IResolvable) {
    this._p521DecryptionPublishX5CParameter = value;
  }
  public resetP521DecryptionPublishX5CParameter() {
    this._p521DecryptionPublishX5CParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521DecryptionPublishX5CParameterInput() {
    return this._p521DecryptionPublishX5CParameter;
  }

  // p521_previous_cert_ref - computed: false, optional: true, required: false
  private _p521PreviousCertRef = new KeypairsOauthOpenidConnectP521PreviousCertRefOutputReference(this, "p521_previous_cert_ref");
  public get p521PreviousCertRef() {
    return this._p521PreviousCertRef;
  }
  public putP521PreviousCertRef(value: KeypairsOauthOpenidConnectP521PreviousCertRef) {
    this._p521PreviousCertRef.internalValue = value;
  }
  public resetP521PreviousCertRef() {
    this._p521PreviousCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521PreviousCertRefInput() {
    return this._p521PreviousCertRef.internalValue;
  }

  // p521_previous_key_id - computed: false, optional: true, required: false
  private _p521PreviousKeyId?: string; 
  public get p521PreviousKeyId() {
    return this.getStringAttribute('p521_previous_key_id');
  }
  public set p521PreviousKeyId(value: string) {
    this._p521PreviousKeyId = value;
  }
  public resetP521PreviousKeyId() {
    this._p521PreviousKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521PreviousKeyIdInput() {
    return this._p521PreviousKeyId;
  }

  // p521_publish_x5c_parameter - computed: true, optional: true, required: false
  private _p521PublishX5CParameter?: boolean | cdktf.IResolvable; 
  public get p521PublishX5CParameter() {
    return this.getBooleanAttribute('p521_publish_x5c_parameter');
  }
  public set p521PublishX5CParameter(value: boolean | cdktf.IResolvable) {
    this._p521PublishX5CParameter = value;
  }
  public resetP521PublishX5CParameter() {
    this._p521PublishX5CParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p521PublishX5CParameterInput() {
    return this._p521PublishX5CParameter;
  }

  // publish_dynamic_key_x5cs - computed: true, optional: true, required: false
  private _publishDynamicKeyX5Cs?: boolean | cdktf.IResolvable; 
  public get publishDynamicKeyX5Cs() {
    return this.getBooleanAttribute('publish_dynamic_key_x5cs');
  }
  public set publishDynamicKeyX5Cs(value: boolean | cdktf.IResolvable) {
    this._publishDynamicKeyX5Cs = value;
  }
  public resetPublishDynamicKeyX5Cs() {
    this._publishDynamicKeyX5Cs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishDynamicKeyX5CsInput() {
    return this._publishDynamicKeyX5Cs;
  }

  // rsa_active_cert_ref - computed: false, optional: true, required: false
  private _rsaActiveCertRef = new KeypairsOauthOpenidConnectRsaActiveCertRefOutputReference(this, "rsa_active_cert_ref");
  public get rsaActiveCertRef() {
    return this._rsaActiveCertRef;
  }
  public putRsaActiveCertRef(value: KeypairsOauthOpenidConnectRsaActiveCertRef) {
    this._rsaActiveCertRef.internalValue = value;
  }
  public resetRsaActiveCertRef() {
    this._rsaActiveCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaActiveCertRefInput() {
    return this._rsaActiveCertRef.internalValue;
  }

  // rsa_active_key_id - computed: false, optional: true, required: false
  private _rsaActiveKeyId?: string; 
  public get rsaActiveKeyId() {
    return this.getStringAttribute('rsa_active_key_id');
  }
  public set rsaActiveKeyId(value: string) {
    this._rsaActiveKeyId = value;
  }
  public resetRsaActiveKeyId() {
    this._rsaActiveKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaActiveKeyIdInput() {
    return this._rsaActiveKeyId;
  }

  // rsa_algorithm_active_key_ids - computed: true, optional: true, required: false
  private _rsaAlgorithmActiveKeyIds = new KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIdsList(this, "rsa_algorithm_active_key_ids", true);
  public get rsaAlgorithmActiveKeyIds() {
    return this._rsaAlgorithmActiveKeyIds;
  }
  public putRsaAlgorithmActiveKeyIds(value: KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIds[] | cdktf.IResolvable) {
    this._rsaAlgorithmActiveKeyIds.internalValue = value;
  }
  public resetRsaAlgorithmActiveKeyIds() {
    this._rsaAlgorithmActiveKeyIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaAlgorithmActiveKeyIdsInput() {
    return this._rsaAlgorithmActiveKeyIds.internalValue;
  }

  // rsa_algorithm_previous_key_ids - computed: true, optional: true, required: false
  private _rsaAlgorithmPreviousKeyIds = new KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIdsList(this, "rsa_algorithm_previous_key_ids", true);
  public get rsaAlgorithmPreviousKeyIds() {
    return this._rsaAlgorithmPreviousKeyIds;
  }
  public putRsaAlgorithmPreviousKeyIds(value: KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIds[] | cdktf.IResolvable) {
    this._rsaAlgorithmPreviousKeyIds.internalValue = value;
  }
  public resetRsaAlgorithmPreviousKeyIds() {
    this._rsaAlgorithmPreviousKeyIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaAlgorithmPreviousKeyIdsInput() {
    return this._rsaAlgorithmPreviousKeyIds.internalValue;
  }

  // rsa_decryption_active_cert_ref - computed: false, optional: true, required: false
  private _rsaDecryptionActiveCertRef = new KeypairsOauthOpenidConnectRsaDecryptionActiveCertRefOutputReference(this, "rsa_decryption_active_cert_ref");
  public get rsaDecryptionActiveCertRef() {
    return this._rsaDecryptionActiveCertRef;
  }
  public putRsaDecryptionActiveCertRef(value: KeypairsOauthOpenidConnectRsaDecryptionActiveCertRef) {
    this._rsaDecryptionActiveCertRef.internalValue = value;
  }
  public resetRsaDecryptionActiveCertRef() {
    this._rsaDecryptionActiveCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaDecryptionActiveCertRefInput() {
    return this._rsaDecryptionActiveCertRef.internalValue;
  }

  // rsa_decryption_active_key_id - computed: false, optional: true, required: false
  private _rsaDecryptionActiveKeyId?: string; 
  public get rsaDecryptionActiveKeyId() {
    return this.getStringAttribute('rsa_decryption_active_key_id');
  }
  public set rsaDecryptionActiveKeyId(value: string) {
    this._rsaDecryptionActiveKeyId = value;
  }
  public resetRsaDecryptionActiveKeyId() {
    this._rsaDecryptionActiveKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaDecryptionActiveKeyIdInput() {
    return this._rsaDecryptionActiveKeyId;
  }

  // rsa_decryption_previous_cert_ref - computed: false, optional: true, required: false
  private _rsaDecryptionPreviousCertRef = new KeypairsOauthOpenidConnectRsaDecryptionPreviousCertRefOutputReference(this, "rsa_decryption_previous_cert_ref");
  public get rsaDecryptionPreviousCertRef() {
    return this._rsaDecryptionPreviousCertRef;
  }
  public putRsaDecryptionPreviousCertRef(value: KeypairsOauthOpenidConnectRsaDecryptionPreviousCertRef) {
    this._rsaDecryptionPreviousCertRef.internalValue = value;
  }
  public resetRsaDecryptionPreviousCertRef() {
    this._rsaDecryptionPreviousCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaDecryptionPreviousCertRefInput() {
    return this._rsaDecryptionPreviousCertRef.internalValue;
  }

  // rsa_decryption_previous_key_id - computed: false, optional: true, required: false
  private _rsaDecryptionPreviousKeyId?: string; 
  public get rsaDecryptionPreviousKeyId() {
    return this.getStringAttribute('rsa_decryption_previous_key_id');
  }
  public set rsaDecryptionPreviousKeyId(value: string) {
    this._rsaDecryptionPreviousKeyId = value;
  }
  public resetRsaDecryptionPreviousKeyId() {
    this._rsaDecryptionPreviousKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaDecryptionPreviousKeyIdInput() {
    return this._rsaDecryptionPreviousKeyId;
  }

  // rsa_decryption_publish_x5c_parameter - computed: true, optional: true, required: false
  private _rsaDecryptionPublishX5CParameter?: boolean | cdktf.IResolvable; 
  public get rsaDecryptionPublishX5CParameter() {
    return this.getBooleanAttribute('rsa_decryption_publish_x5c_parameter');
  }
  public set rsaDecryptionPublishX5CParameter(value: boolean | cdktf.IResolvable) {
    this._rsaDecryptionPublishX5CParameter = value;
  }
  public resetRsaDecryptionPublishX5CParameter() {
    this._rsaDecryptionPublishX5CParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaDecryptionPublishX5CParameterInput() {
    return this._rsaDecryptionPublishX5CParameter;
  }

  // rsa_previous_cert_ref - computed: false, optional: true, required: false
  private _rsaPreviousCertRef = new KeypairsOauthOpenidConnectRsaPreviousCertRefOutputReference(this, "rsa_previous_cert_ref");
  public get rsaPreviousCertRef() {
    return this._rsaPreviousCertRef;
  }
  public putRsaPreviousCertRef(value: KeypairsOauthOpenidConnectRsaPreviousCertRef) {
    this._rsaPreviousCertRef.internalValue = value;
  }
  public resetRsaPreviousCertRef() {
    this._rsaPreviousCertRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPreviousCertRefInput() {
    return this._rsaPreviousCertRef.internalValue;
  }

  // rsa_previous_key_id - computed: false, optional: true, required: false
  private _rsaPreviousKeyId?: string; 
  public get rsaPreviousKeyId() {
    return this.getStringAttribute('rsa_previous_key_id');
  }
  public set rsaPreviousKeyId(value: string) {
    this._rsaPreviousKeyId = value;
  }
  public resetRsaPreviousKeyId() {
    this._rsaPreviousKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPreviousKeyIdInput() {
    return this._rsaPreviousKeyId;
  }

  // rsa_publish_x5c_parameter - computed: true, optional: true, required: false
  private _rsaPublishX5CParameter?: boolean | cdktf.IResolvable; 
  public get rsaPublishX5CParameter() {
    return this.getBooleanAttribute('rsa_publish_x5c_parameter');
  }
  public set rsaPublishX5CParameter(value: boolean | cdktf.IResolvable) {
    this._rsaPublishX5CParameter = value;
  }
  public resetRsaPublishX5CParameter() {
    this._rsaPublishX5CParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPublishX5CParameterInput() {
    return this._rsaPublishX5CParameter;
  }

  // static_jwks_enabled - computed: false, optional: false, required: true
  private _staticJwksEnabled?: boolean | cdktf.IResolvable; 
  public get staticJwksEnabled() {
    return this.getBooleanAttribute('static_jwks_enabled');
  }
  public set staticJwksEnabled(value: boolean | cdktf.IResolvable) {
    this._staticJwksEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticJwksEnabledInput() {
    return this._staticJwksEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_key_certificate_information: keypairsOauthOpenidConnectDynamicKeyCertificateInformationToTerraform(this._dynamicKeyCertificateInformation.internalValue),
      p256_active_cert_ref: keypairsOauthOpenidConnectP256ActiveCertRefToTerraform(this._p256ActiveCertRef.internalValue),
      p256_active_key_id: cdktf.stringToTerraform(this._p256ActiveKeyId),
      p256_decryption_active_cert_ref: keypairsOauthOpenidConnectP256DecryptionActiveCertRefToTerraform(this._p256DecryptionActiveCertRef.internalValue),
      p256_decryption_active_key_id: cdktf.stringToTerraform(this._p256DecryptionActiveKeyId),
      p256_decryption_previous_cert_ref: keypairsOauthOpenidConnectP256DecryptionPreviousCertRefToTerraform(this._p256DecryptionPreviousCertRef.internalValue),
      p256_decryption_previous_key_id: cdktf.stringToTerraform(this._p256DecryptionPreviousKeyId),
      p256_decryption_publish_x5c_parameter: cdktf.booleanToTerraform(this._p256DecryptionPublishX5CParameter),
      p256_previous_cert_ref: keypairsOauthOpenidConnectP256PreviousCertRefToTerraform(this._p256PreviousCertRef.internalValue),
      p256_previous_key_id: cdktf.stringToTerraform(this._p256PreviousKeyId),
      p256_publish_x5c_parameter: cdktf.booleanToTerraform(this._p256PublishX5CParameter),
      p384_active_cert_ref: keypairsOauthOpenidConnectP384ActiveCertRefToTerraform(this._p384ActiveCertRef.internalValue),
      p384_active_key_id: cdktf.stringToTerraform(this._p384ActiveKeyId),
      p384_decryption_active_cert_ref: keypairsOauthOpenidConnectP384DecryptionActiveCertRefToTerraform(this._p384DecryptionActiveCertRef.internalValue),
      p384_decryption_active_key_id: cdktf.stringToTerraform(this._p384DecryptionActiveKeyId),
      p384_decryption_previous_cert_ref: keypairsOauthOpenidConnectP384DecryptionPreviousCertRefToTerraform(this._p384DecryptionPreviousCertRef.internalValue),
      p384_decryption_previous_key_id: cdktf.stringToTerraform(this._p384DecryptionPreviousKeyId),
      p384_decryption_publish_x5c_parameter: cdktf.booleanToTerraform(this._p384DecryptionPublishX5CParameter),
      p384_previous_cert_ref: keypairsOauthOpenidConnectP384PreviousCertRefToTerraform(this._p384PreviousCertRef.internalValue),
      p384_previous_key_id: cdktf.stringToTerraform(this._p384PreviousKeyId),
      p384_publish_x5c_parameter: cdktf.booleanToTerraform(this._p384PublishX5CParameter),
      p521_active_cert_ref: keypairsOauthOpenidConnectP521ActiveCertRefToTerraform(this._p521ActiveCertRef.internalValue),
      p521_active_key_id: cdktf.stringToTerraform(this._p521ActiveKeyId),
      p521_decryption_active_cert_ref: keypairsOauthOpenidConnectP521DecryptionActiveCertRefToTerraform(this._p521DecryptionActiveCertRef.internalValue),
      p521_decryption_active_key_id: cdktf.stringToTerraform(this._p521DecryptionActiveKeyId),
      p521_decryption_previous_cert_ref: keypairsOauthOpenidConnectP521DecryptionPreviousCertRefToTerraform(this._p521DecryptionPreviousCertRef.internalValue),
      p521_decryption_previous_key_id: cdktf.stringToTerraform(this._p521DecryptionPreviousKeyId),
      p521_decryption_publish_x5c_parameter: cdktf.booleanToTerraform(this._p521DecryptionPublishX5CParameter),
      p521_previous_cert_ref: keypairsOauthOpenidConnectP521PreviousCertRefToTerraform(this._p521PreviousCertRef.internalValue),
      p521_previous_key_id: cdktf.stringToTerraform(this._p521PreviousKeyId),
      p521_publish_x5c_parameter: cdktf.booleanToTerraform(this._p521PublishX5CParameter),
      publish_dynamic_key_x5cs: cdktf.booleanToTerraform(this._publishDynamicKeyX5Cs),
      rsa_active_cert_ref: keypairsOauthOpenidConnectRsaActiveCertRefToTerraform(this._rsaActiveCertRef.internalValue),
      rsa_active_key_id: cdktf.stringToTerraform(this._rsaActiveKeyId),
      rsa_algorithm_active_key_ids: cdktf.listMapper(keypairsOauthOpenidConnectRsaAlgorithmActiveKeyIdsToTerraform, false)(this._rsaAlgorithmActiveKeyIds.internalValue),
      rsa_algorithm_previous_key_ids: cdktf.listMapper(keypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIdsToTerraform, false)(this._rsaAlgorithmPreviousKeyIds.internalValue),
      rsa_decryption_active_cert_ref: keypairsOauthOpenidConnectRsaDecryptionActiveCertRefToTerraform(this._rsaDecryptionActiveCertRef.internalValue),
      rsa_decryption_active_key_id: cdktf.stringToTerraform(this._rsaDecryptionActiveKeyId),
      rsa_decryption_previous_cert_ref: keypairsOauthOpenidConnectRsaDecryptionPreviousCertRefToTerraform(this._rsaDecryptionPreviousCertRef.internalValue),
      rsa_decryption_previous_key_id: cdktf.stringToTerraform(this._rsaDecryptionPreviousKeyId),
      rsa_decryption_publish_x5c_parameter: cdktf.booleanToTerraform(this._rsaDecryptionPublishX5CParameter),
      rsa_previous_cert_ref: keypairsOauthOpenidConnectRsaPreviousCertRefToTerraform(this._rsaPreviousCertRef.internalValue),
      rsa_previous_key_id: cdktf.stringToTerraform(this._rsaPreviousKeyId),
      rsa_publish_x5c_parameter: cdktf.booleanToTerraform(this._rsaPublishX5CParameter),
      static_jwks_enabled: cdktf.booleanToTerraform(this._staticJwksEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_key_certificate_information: {
        value: keypairsOauthOpenidConnectDynamicKeyCertificateInformationToHclTerraform(this._dynamicKeyCertificateInformation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectDynamicKeyCertificateInformation",
      },
      p256_active_cert_ref: {
        value: keypairsOauthOpenidConnectP256ActiveCertRefToHclTerraform(this._p256ActiveCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectP256ActiveCertRef",
      },
      p256_active_key_id: {
        value: cdktf.stringToHclTerraform(this._p256ActiveKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p256_decryption_active_cert_ref: {
        value: keypairsOauthOpenidConnectP256DecryptionActiveCertRefToHclTerraform(this._p256DecryptionActiveCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectP256DecryptionActiveCertRef",
      },
      p256_decryption_active_key_id: {
        value: cdktf.stringToHclTerraform(this._p256DecryptionActiveKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p256_decryption_previous_cert_ref: {
        value: keypairsOauthOpenidConnectP256DecryptionPreviousCertRefToHclTerraform(this._p256DecryptionPreviousCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectP256DecryptionPreviousCertRef",
      },
      p256_decryption_previous_key_id: {
        value: cdktf.stringToHclTerraform(this._p256DecryptionPreviousKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p256_decryption_publish_x5c_parameter: {
        value: cdktf.booleanToHclTerraform(this._p256DecryptionPublishX5CParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      p256_previous_cert_ref: {
        value: keypairsOauthOpenidConnectP256PreviousCertRefToHclTerraform(this._p256PreviousCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectP256PreviousCertRef",
      },
      p256_previous_key_id: {
        value: cdktf.stringToHclTerraform(this._p256PreviousKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p256_publish_x5c_parameter: {
        value: cdktf.booleanToHclTerraform(this._p256PublishX5CParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      p384_active_cert_ref: {
        value: keypairsOauthOpenidConnectP384ActiveCertRefToHclTerraform(this._p384ActiveCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectP384ActiveCertRef",
      },
      p384_active_key_id: {
        value: cdktf.stringToHclTerraform(this._p384ActiveKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p384_decryption_active_cert_ref: {
        value: keypairsOauthOpenidConnectP384DecryptionActiveCertRefToHclTerraform(this._p384DecryptionActiveCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectP384DecryptionActiveCertRef",
      },
      p384_decryption_active_key_id: {
        value: cdktf.stringToHclTerraform(this._p384DecryptionActiveKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p384_decryption_previous_cert_ref: {
        value: keypairsOauthOpenidConnectP384DecryptionPreviousCertRefToHclTerraform(this._p384DecryptionPreviousCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectP384DecryptionPreviousCertRef",
      },
      p384_decryption_previous_key_id: {
        value: cdktf.stringToHclTerraform(this._p384DecryptionPreviousKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p384_decryption_publish_x5c_parameter: {
        value: cdktf.booleanToHclTerraform(this._p384DecryptionPublishX5CParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      p384_previous_cert_ref: {
        value: keypairsOauthOpenidConnectP384PreviousCertRefToHclTerraform(this._p384PreviousCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectP384PreviousCertRef",
      },
      p384_previous_key_id: {
        value: cdktf.stringToHclTerraform(this._p384PreviousKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p384_publish_x5c_parameter: {
        value: cdktf.booleanToHclTerraform(this._p384PublishX5CParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      p521_active_cert_ref: {
        value: keypairsOauthOpenidConnectP521ActiveCertRefToHclTerraform(this._p521ActiveCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectP521ActiveCertRef",
      },
      p521_active_key_id: {
        value: cdktf.stringToHclTerraform(this._p521ActiveKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p521_decryption_active_cert_ref: {
        value: keypairsOauthOpenidConnectP521DecryptionActiveCertRefToHclTerraform(this._p521DecryptionActiveCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectP521DecryptionActiveCertRef",
      },
      p521_decryption_active_key_id: {
        value: cdktf.stringToHclTerraform(this._p521DecryptionActiveKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p521_decryption_previous_cert_ref: {
        value: keypairsOauthOpenidConnectP521DecryptionPreviousCertRefToHclTerraform(this._p521DecryptionPreviousCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectP521DecryptionPreviousCertRef",
      },
      p521_decryption_previous_key_id: {
        value: cdktf.stringToHclTerraform(this._p521DecryptionPreviousKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p521_decryption_publish_x5c_parameter: {
        value: cdktf.booleanToHclTerraform(this._p521DecryptionPublishX5CParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      p521_previous_cert_ref: {
        value: keypairsOauthOpenidConnectP521PreviousCertRefToHclTerraform(this._p521PreviousCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectP521PreviousCertRef",
      },
      p521_previous_key_id: {
        value: cdktf.stringToHclTerraform(this._p521PreviousKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p521_publish_x5c_parameter: {
        value: cdktf.booleanToHclTerraform(this._p521PublishX5CParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      publish_dynamic_key_x5cs: {
        value: cdktf.booleanToHclTerraform(this._publishDynamicKeyX5Cs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rsa_active_cert_ref: {
        value: keypairsOauthOpenidConnectRsaActiveCertRefToHclTerraform(this._rsaActiveCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectRsaActiveCertRef",
      },
      rsa_active_key_id: {
        value: cdktf.stringToHclTerraform(this._rsaActiveKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_algorithm_active_key_ids: {
        value: cdktf.listMapperHcl(keypairsOauthOpenidConnectRsaAlgorithmActiveKeyIdsToHclTerraform, false)(this._rsaAlgorithmActiveKeyIds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KeypairsOauthOpenidConnectRsaAlgorithmActiveKeyIdsList",
      },
      rsa_algorithm_previous_key_ids: {
        value: cdktf.listMapperHcl(keypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIdsToHclTerraform, false)(this._rsaAlgorithmPreviousKeyIds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KeypairsOauthOpenidConnectRsaAlgorithmPreviousKeyIdsList",
      },
      rsa_decryption_active_cert_ref: {
        value: keypairsOauthOpenidConnectRsaDecryptionActiveCertRefToHclTerraform(this._rsaDecryptionActiveCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectRsaDecryptionActiveCertRef",
      },
      rsa_decryption_active_key_id: {
        value: cdktf.stringToHclTerraform(this._rsaDecryptionActiveKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_decryption_previous_cert_ref: {
        value: keypairsOauthOpenidConnectRsaDecryptionPreviousCertRefToHclTerraform(this._rsaDecryptionPreviousCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectRsaDecryptionPreviousCertRef",
      },
      rsa_decryption_previous_key_id: {
        value: cdktf.stringToHclTerraform(this._rsaDecryptionPreviousKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_decryption_publish_x5c_parameter: {
        value: cdktf.booleanToHclTerraform(this._rsaDecryptionPublishX5CParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rsa_previous_cert_ref: {
        value: keypairsOauthOpenidConnectRsaPreviousCertRefToHclTerraform(this._rsaPreviousCertRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeypairsOauthOpenidConnectRsaPreviousCertRef",
      },
      rsa_previous_key_id: {
        value: cdktf.stringToHclTerraform(this._rsaPreviousKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_publish_x5c_parameter: {
        value: cdktf.booleanToHclTerraform(this._rsaPublishX5CParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      static_jwks_enabled: {
        value: cdktf.booleanToHclTerraform(this._staticJwksEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
