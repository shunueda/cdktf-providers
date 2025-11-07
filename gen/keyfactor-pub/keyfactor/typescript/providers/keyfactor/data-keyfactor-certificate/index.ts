// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeyfactorCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional: The output format to return the enrolled certificate in. Valid options are: `PEM, PFX, JKS, Zip` Defaults to: `PEM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#certificate_format DataKeyfactorCertificate#certificate_format}
  */
  readonly certificateFormat?: string;
  /**
  * Optional certificate collection identifier used to ensure user access to the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#collection_id DataKeyfactorCertificate#collection_id}
  */
  readonly collectionId?: number;
  /**
  * Number of days before expiry to warn about the certificate. Defaults to 30 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#expiry_warn_days DataKeyfactorCertificate#expiry_warn_days}
  */
  readonly expiryWarnDays?: number;
  /**
  * Only applicable for PFX enrollments. A friendly name for the certificate. If not provided, the common name will be used unless `use_cn_as_friendly_name` is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#friendly_name DataKeyfactorCertificate#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Keyfactor certificate identifier. This can be any of the following values: thumbprint, CN, or Keyfactor Command Certificate ID. If using CN to lookup the last issued certificate, the CN must be an exact match and if multiple certificates are returned the certificate that was most recently issued will be returned. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#identifier DataKeyfactorCertificate#identifier}
  */
  readonly identifier: string;
  /**
  * Password used to recover the private key from Keyfactor Command. NOTE: If no value is provided a random password will be generated for key recovery. This value is not stored and does not encrypt the private key in Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#key_password DataKeyfactorCertificate#key_password}
  */
  readonly keyPassword?: string;
  /**
  * Metadata key-value pairs to be attached to certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#metadata DataKeyfactorCertificate#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Configuration for certificate auto renewal. Includes whether auto-renewal is enabled and the number of days before expiry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#renewal_config DataKeyfactorCertificate#renewal_config}
  */
  readonly renewalConfig?: DataKeyfactorCertificateRenewalConfig;
  /**
  * Only applicable for PFX enrollments. Use the common name as the friendly name for the certificate. Defaults to `true`. NOTE: Keyfactor Command must be configured to `allow custom friendly name` for this to work under `Application Settings > Enrollment > PFX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#use_cn_as_friendly_name DataKeyfactorCertificate#use_cn_as_friendly_name}
  */
  readonly useCnAsFriendlyName?: boolean | cdktf.IResolvable;
}
export interface DataKeyfactorCertificateRenewalConfig {
  /**
  * Will force certificate to be renewed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#force_renewal DataKeyfactorCertificate#force_renewal}
  */
  readonly forceRenewal?: boolean | cdktf.IResolvable;
  /**
  * The number of days before the certificate expires to renew.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#renew_days DataKeyfactorCertificate#renew_days}
  */
  readonly renewDays: number;
  /**
  * Whether the existing certificate should be revoked on renewal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#revoke_on_renew DataKeyfactorCertificate#revoke_on_renew}
  */
  readonly revokeOnRenew?: boolean | cdktf.IResolvable;
}

export function dataKeyfactorCertificateRenewalConfigToTerraform(struct?: DataKeyfactorCertificateRenewalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_renewal: cdktf.booleanToTerraform(struct!.forceRenewal),
    renew_days: cdktf.numberToTerraform(struct!.renewDays),
    revoke_on_renew: cdktf.booleanToTerraform(struct!.revokeOnRenew),
  }
}


export function dataKeyfactorCertificateRenewalConfigToHclTerraform(struct?: DataKeyfactorCertificateRenewalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_renewal: {
      value: cdktf.booleanToHclTerraform(struct!.forceRenewal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    renew_days: {
      value: cdktf.numberToHclTerraform(struct!.renewDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revoke_on_renew: {
      value: cdktf.booleanToHclTerraform(struct!.revokeOnRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeyfactorCertificateRenewalConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyfactorCertificateRenewalConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceRenewal !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRenewal = this._forceRenewal;
    }
    if (this._renewDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewDays = this._renewDays;
    }
    if (this._revokeOnRenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokeOnRenew = this._revokeOnRenew;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyfactorCertificateRenewalConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceRenewal = undefined;
      this._renewDays = undefined;
      this._revokeOnRenew = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceRenewal = value.forceRenewal;
      this._renewDays = value.renewDays;
      this._revokeOnRenew = value.revokeOnRenew;
    }
  }

  // force_renewal - computed: false, optional: true, required: false
  private _forceRenewal?: boolean | cdktf.IResolvable; 
  public get forceRenewal() {
    return this.getBooleanAttribute('force_renewal');
  }
  public set forceRenewal(value: boolean | cdktf.IResolvable) {
    this._forceRenewal = value;
  }
  public resetForceRenewal() {
    this._forceRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRenewalInput() {
    return this._forceRenewal;
  }

  // renew_days - computed: false, optional: false, required: true
  private _renewDays?: number; 
  public get renewDays() {
    return this.getNumberAttribute('renew_days');
  }
  public set renewDays(value: number) {
    this._renewDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renewDaysInput() {
    return this._renewDays;
  }

  // renew_eligible - computed: true, optional: false, required: false
  public get renewEligible() {
    return this.getBooleanAttribute('renew_eligible');
  }

  // revoke_on_renew - computed: false, optional: true, required: false
  private _revokeOnRenew?: boolean | cdktf.IResolvable; 
  public get revokeOnRenew() {
    return this.getBooleanAttribute('revoke_on_renew');
  }
  public set revokeOnRenew(value: boolean | cdktf.IResolvable) {
    this._revokeOnRenew = value;
  }
  public resetRevokeOnRenew() {
    this._revokeOnRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeOnRenewInput() {
    return this._revokeOnRenew;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate keyfactor_certificate}
*/
export class DataKeyfactorCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeyfactorCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeyfactorCertificate to import
  * @param importFromId The id of the existing DataKeyfactorCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeyfactorCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate keyfactor_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeyfactorCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeyfactorCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_certificate',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateFormat = config.certificateFormat;
    this._collectionId = config.collectionId;
    this._expiryWarnDays = config.expiryWarnDays;
    this._friendlyName = config.friendlyName;
    this._identifier = config.identifier;
    this._keyPassword = config.keyPassword;
    this._metadata = config.metadata;
    this._renewalConfig.internalValue = config.renewalConfig;
    this._useCnAsFriendlyName = config.useCnAsFriendlyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // certificate_authority - computed: true, optional: false, required: false
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }

  // certificate_chain - computed: true, optional: false, required: false
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // certificate_enrollment_pattern - computed: true, optional: false, required: false
  public get certificateEnrollmentPattern() {
    return this.getStringAttribute('certificate_enrollment_pattern');
  }

  // certificate_format - computed: false, optional: true, required: false
  private _certificateFormat?: string; 
  public get certificateFormat() {
    return this.getStringAttribute('certificate_format');
  }
  public set certificateFormat(value: string) {
    this._certificateFormat = value;
  }
  public resetCertificateFormat() {
    this._certificateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFormatInput() {
    return this._certificateFormat;
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }

  // certificate_pem - computed: true, optional: false, required: false
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }

  // certificate_template - computed: true, optional: false, required: false
  public get certificateTemplate() {
    return this.getStringAttribute('certificate_template');
  }

  // collection_id - computed: false, optional: true, required: false
  private _collectionId?: number; 
  public get collectionId() {
    return this.getNumberAttribute('collection_id');
  }
  public set collectionId(value: number) {
    this._collectionId = value;
  }
  public resetCollectionId() {
    this._collectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // command_request_id - computed: true, optional: false, required: false
  public get commandRequestId() {
    return this.getNumberAttribute('command_request_id');
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // dns_sans - computed: true, optional: false, required: false
  public get dnsSans() {
    return this.getListAttribute('dns_sans');
  }

  // enrollment_password - computed: true, optional: false, required: false
  public get enrollmentPassword() {
    return this.getStringAttribute('enrollment_password');
  }

  // expiry_warn_days - computed: false, optional: true, required: false
  private _expiryWarnDays?: number; 
  public get expiryWarnDays() {
    return this.getNumberAttribute('expiry_warn_days');
  }
  public set expiryWarnDays(value: number) {
    this._expiryWarnDays = value;
  }
  public resetExpiryWarnDays() {
    this._expiryWarnDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryWarnDaysInput() {
    return this._expiryWarnDays;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // ip_sans - computed: true, optional: false, required: false
  public get ipSans() {
    return this.getListAttribute('ip_sans');
  }

  // is_expired - computed: true, optional: false, required: false
  public get isExpired() {
    return this.getBooleanAttribute('is_expired');
  }

  // is_pending_revocation - computed: true, optional: false, required: false
  public get isPendingRevocation() {
    return this.getBooleanAttribute('is_pending_revocation');
  }

  // is_revoked - computed: true, optional: false, required: false
  public get isRevoked() {
    return this.getBooleanAttribute('is_revoked');
  }

  // issuer_dn - computed: true, optional: false, required: false
  public get issuerDn() {
    return this.getStringAttribute('issuer_dn');
  }

  // jks - computed: true, optional: false, required: false
  public get jks() {
    return this.getStringAttribute('jks');
  }

  // key_password - computed: false, optional: true, required: false
  private _keyPassword?: string; 
  public get keyPassword() {
    return this.getStringAttribute('key_password');
  }
  public set keyPassword(value: string) {
    this._keyPassword = value;
  }
  public resetKeyPassword() {
    this._keyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordInput() {
    return this._keyPassword;
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // owner_role_name - computed: true, optional: false, required: false
  public get ownerRoleName() {
    return this.getStringAttribute('owner_role_name');
  }

  // pfx - computed: true, optional: false, required: false
  public get pfx() {
    return this.getStringAttribute('pfx');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // renewal_config - computed: false, optional: true, required: false
  private _renewalConfig = new DataKeyfactorCertificateRenewalConfigOutputReference(this, "renewal_config");
  public get renewalConfig() {
    return this._renewalConfig;
  }
  public putRenewalConfig(value: DataKeyfactorCertificateRenewalConfig) {
    this._renewalConfig.internalValue = value;
  }
  public resetRenewalConfig() {
    this._renewalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalConfigInput() {
    return this._renewalConfig.internalValue;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // uri_sans - computed: true, optional: false, required: false
  public get uriSans() {
    return this.getListAttribute('uri_sans');
  }

  // use_cn_as_friendly_name - computed: true, optional: true, required: false
  private _useCnAsFriendlyName?: boolean | cdktf.IResolvable; 
  public get useCnAsFriendlyName() {
    return this.getBooleanAttribute('use_cn_as_friendly_name');
  }
  public set useCnAsFriendlyName(value: boolean | cdktf.IResolvable) {
    this._useCnAsFriendlyName = value;
  }
  public resetUseCnAsFriendlyName() {
    this._useCnAsFriendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCnAsFriendlyNameInput() {
    return this._useCnAsFriendlyName;
  }

  // zip - computed: true, optional: false, required: false
  public get zip() {
    return this.getStringAttribute('zip');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_format: cdktf.stringToTerraform(this._certificateFormat),
      collection_id: cdktf.numberToTerraform(this._collectionId),
      expiry_warn_days: cdktf.numberToTerraform(this._expiryWarnDays),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      identifier: cdktf.stringToTerraform(this._identifier),
      key_password: cdktf.stringToTerraform(this._keyPassword),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      renewal_config: dataKeyfactorCertificateRenewalConfigToTerraform(this._renewalConfig.internalValue),
      use_cn_as_friendly_name: cdktf.booleanToTerraform(this._useCnAsFriendlyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_format: {
        value: cdktf.stringToHclTerraform(this._certificateFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_id: {
        value: cdktf.numberToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expiry_warn_days: {
        value: cdktf.numberToHclTerraform(this._expiryWarnDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_password: {
        value: cdktf.stringToHclTerraform(this._keyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      renewal_config: {
        value: dataKeyfactorCertificateRenewalConfigToHclTerraform(this._renewalConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeyfactorCertificateRenewalConfig",
      },
      use_cn_as_friendly_name: {
        value: cdktf.booleanToHclTerraform(this._useCnAsFriendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
