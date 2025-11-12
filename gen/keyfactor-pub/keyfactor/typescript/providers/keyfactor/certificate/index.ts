// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of certificate authority to deploy certificate with Ex: Example Company CA 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#certificate_authority Certificate#certificate_authority}
  */
  readonly certificateAuthority: string;
  /**
  * Either the `name` or internal `ID` (integer) indicating the enrollment pattern to use when requesting the certificate. If this value is not provided, the default enrollment pattern defined for the template provided in the request (see the Template parameter) will be used.
  * 
  * One of either the Template or the EnrollmentPatternId is required unless the enrollment is being done against a standalone CA. If both the Template and EnrollmentPatternId are provided, the settings from the enrollment pattern take precedence. If both are specified, the enrollment will fail if the Template does not match the one defined by the specified enrollment pattern. IMPORTANT: Requires Keyfactor Command v25.1.0+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#certificate_enrollment_pattern Certificate#certificate_enrollment_pattern}
  */
  readonly certificateEnrollmentPattern?: string;
  /**
  * Optional: The output format to return the enrolled certificate in. Valid PFX enrollment options are: `PEM, PFX, JKS, Zip`. Valid CSR enrollment options are `PEM, DER`. Defaults to: `PEM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#certificate_format Certificate#certificate_format}
  */
  readonly certificateFormat?: string;
  /**
  * A string that sets the name of the certificate template that should be used to issue the certificate. The template short name should be used. See also EnrollmentPatternId.
  * 
  * One of either the Template or the EnrollmentPatternId is required unless the enrollment is being done against a standalone CA. If both the Template and EnrollmentPatternId are provided, the settings from the enrollment pattern take precedence. If both are specified, the enrollment will fail if the Template does not match the one defined by the specified enrollment pattern.
  * 
  * Important:  The template must be configured with at least one enrollment pattern in order to be used for enrollment (see POST Enrollment Patterns).
  * Note:  This parameter is considered deprecated as for Keyfactor Command v25.1.0 and may be removed in a future release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#certificate_template Certificate#certificate_template}
  */
  readonly certificateTemplate?: string;
  /**
  * Optional certificate collection ID. This is required if enrollment permissions have been granted at the collection level. NOTE: This will *not* assign the cert to the specified collection ID; assignment is based the collection's associated query. For more information on collection permissions see the Keyfactor Command docs: https://software.keyfactor.com/Core-OnPrem/Current/Content/ReferenceGuide/CertificatePermissions.htm?Highlight=collection%20permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#collection_id Certificate#collection_id}
  */
  readonly collectionId?: number;
  /**
  * Subject common name (CN) of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#common_name Certificate#common_name}
  */
  readonly commonName?: string;
  /**
  * Subject country of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#country Certificate#country}
  */
  readonly country?: string;
  /**
  * Base-64 encoded certificate signing request (CSR)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#csr Certificate#csr}
  */
  readonly csr?: string;
  /**
  * List of DNS names to use as subjects of the certificate. NOTE: This field **does not work with CSR enrollments**, all SANs should be included in the CSR. Additional SANs added by the CA during enrollment **will not** be reflected in this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#dns_sans Certificate#dns_sans}
  */
  readonly dnsSans?: string[];
  /**
  * Number of days before expiry to warn about the certificate. Defaults to 30 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#expiry_warn_days Certificate#expiry_warn_days}
  */
  readonly expiryWarnDays?: number;
  /**
  * Only applicable for PFX enrollments. A friendly name for the certificate. If not provided, the common name will be used unless `use_cn_as_friendly_name` is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#friendly_name Certificate#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * List of DNS names to use as subjects of the certificate. NOTE: This field **does not work with CSR enrollments**, all SANs should be included in the CSR. Additional SANs added by the CA during enrollment **will not** be reflected in this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#ip_sans Certificate#ip_sans}
  */
  readonly ipSans?: string[];
  /**
  * Password used to recover the private key from Keyfactor Command. NOTE: If no value is provided a random password will be generated for key recovery. This value is not stored and does not encrypt the private key in Terraform state. Also note that if a password is provided it must meet any password complexity requirements enforced by the CA template or creation will fail. Auto-generated passwords will be of length 32 and contain a minimum of 4 of the following: uppercase, lowercase, numeric, and special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#key_password Certificate#key_password}
  */
  readonly keyPassword?: string;
  /**
  * Subject locality (L) of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#locality Certificate#locality}
  */
  readonly locality?: string;
  /**
  * Metadata key-value pairs to be attached to certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#metadata Certificate#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Subject organization (O) of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#organization Certificate#organization}
  */
  readonly organization?: string;
  /**
  * Subject organizational unit (OU) of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#organizational_unit Certificate#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * 
  * A string containing the name of the security role assigned as the certificate owner. This name must match the existing name of the security role.
  * 
  * Expanded Change Owner Permission: A user who holds the Certificates > Expanded Change Owner permission can set the certificate owner to any role within the permission sets they are a member of. This permission setting overrides the Certificates > Collections > Change Owner permission (both Global and Collection-level) if both are set.
  * 
  * Collections > Change Owner Permission:
  * 
  * Global or Collection Level—No Default Value: A user who holds only the Certificates > Collections > Change Owner permission at either the Global or Collection level can set the certificate owner to any role they belong to if there is not a default value populated from the enrollment pattern or existing certificate on a renewal.
  * Global or Collection Level—Default Value: A user who holds only the Certificates > Collections > Change Owner permission at either the Global or Collection level can change the default certificate owner to any role they belong to. If the default value populated from the enrollment pattern or existing certificate on a renewal is not a role held by the acting user, the this value will not be populated in the Certificate Owner Role field. The user will still be allowed to add a new owner value.
  * Note:  To assign a certificate owner, one of OwnerRoleId or OwnerRoleName is required, not both. A certificate owner is required if the enrollment pattern or system-wide settings Certificate Owner Role policy has been configured as Required.
  * 
  * > [!IMPORTANT]
  * > Only compatible with Keyfactor Command versions v12.3.0 and later.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#owner_role_name Certificate#owner_role_name}
  */
  readonly ownerRoleName?: string;
  /**
  * Configuration for certificate renewal.
  * > [!IMPORTANT]
  * > This does not deploy the updated certificate to associated certificate store locations. To deploy the updated 
  * > certificate you must define a "keyfactor_certificate_deployment" Terraform resource that references this
  * > certificate or deploy via the Command UI.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#renewal_config Certificate#renewal_config}
  */
  readonly renewalConfig?: CertificateRenewalConfig;
  /**
  * Whether to revoke the certificate on resource `destroy`. IMPORTANT: If set to `false` the certificate will not be revoked on `destroy`ing operations. This means the certificate will need to be revoked outside of Terraform. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#revoke_on_destroy Certificate#revoke_on_destroy}
  */
  readonly revokeOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Subject state (ST) of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#state Certificate#state}
  */
  readonly state?: string;
  /**
  * List of URIs to use as subjects of the certificate. NOTE: This field **does not work with CSR enrollments**, all SANs should be included in the CSR. Additional SANs added by the CA during enrollment **will not** be reflected in this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#uri_sans Certificate#uri_sans}
  */
  readonly uriSans?: string[];
  /**
  * Only applicable for PFX enrollments. Use the common name as the friendly name for the certificate. Defaults to `true`. NOTE: Keyfactor Command must be configured to `allow custom friendly name` for this to work under `Application Settings > Enrollment > PFX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#use_cn_as_friendly_name Certificate#use_cn_as_friendly_name}
  */
  readonly useCnAsFriendlyName?: boolean | cdktf.IResolvable;
}
export interface CertificateRenewalConfig {
  /**
  * Will force certificate to be renewed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#force_renewal Certificate#force_renewal}
  */
  readonly forceRenewal?: boolean | cdktf.IResolvable;
  /**
  * The number of days before the certificate expires to trigger renewal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#renew_days Certificate#renew_days}
  */
  readonly renewDays: number;
  /**
  * Whether the existing certificate should be revoked on renewal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#revoke_on_renew Certificate#revoke_on_renew}
  */
  readonly revokeOnRenew?: boolean | cdktf.IResolvable;
}

export function certificateRenewalConfigToTerraform(struct?: CertificateRenewalConfig | cdktf.IResolvable): any {
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


export function certificateRenewalConfigToHclTerraform(struct?: CertificateRenewalConfig | cdktf.IResolvable): any {
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

export class CertificateRenewalConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateRenewalConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateRenewalConfig | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate keyfactor_certificate}
*/
export class Certificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Certificate to import
  * @param importFromId The id of the existing Certificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Certificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate keyfactor_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_certificate',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.7.0',
        providerVersionConstraint: '2.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateAuthority = config.certificateAuthority;
    this._certificateEnrollmentPattern = config.certificateEnrollmentPattern;
    this._certificateFormat = config.certificateFormat;
    this._certificateTemplate = config.certificateTemplate;
    this._collectionId = config.collectionId;
    this._commonName = config.commonName;
    this._country = config.country;
    this._csr = config.csr;
    this._dnsSans = config.dnsSans;
    this._expiryWarnDays = config.expiryWarnDays;
    this._friendlyName = config.friendlyName;
    this._ipSans = config.ipSans;
    this._keyPassword = config.keyPassword;
    this._locality = config.locality;
    this._metadata = config.metadata;
    this._organization = config.organization;
    this._organizationalUnit = config.organizationalUnit;
    this._ownerRoleName = config.ownerRoleName;
    this._renewalConfig.internalValue = config.renewalConfig;
    this._revokeOnDestroy = config.revokeOnDestroy;
    this._state = config.state;
    this._uriSans = config.uriSans;
    this._useCnAsFriendlyName = config.useCnAsFriendlyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // certificate_authority - computed: false, optional: false, required: true
  private _certificateAuthority?: string; 
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }
  public set certificateAuthority(value: string) {
    this._certificateAuthority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority;
  }

  // certificate_chain - computed: true, optional: false, required: false
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // certificate_enrollment_pattern - computed: false, optional: true, required: false
  private _certificateEnrollmentPattern?: string; 
  public get certificateEnrollmentPattern() {
    return this.getStringAttribute('certificate_enrollment_pattern');
  }
  public set certificateEnrollmentPattern(value: string) {
    this._certificateEnrollmentPattern = value;
  }
  public resetCertificateEnrollmentPattern() {
    this._certificateEnrollmentPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateEnrollmentPatternInput() {
    return this._certificateEnrollmentPattern;
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

  // certificate_template - computed: false, optional: true, required: false
  private _certificateTemplate?: string; 
  public get certificateTemplate() {
    return this.getStringAttribute('certificate_template');
  }
  public set certificateTemplate(value: string) {
    this._certificateTemplate = value;
  }
  public resetCertificateTemplate() {
    this._certificateTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTemplateInput() {
    return this._certificateTemplate;
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

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
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

  // csr - computed: false, optional: true, required: false
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
  }

  // dns_sans - computed: false, optional: true, required: false
  private _dnsSans?: string[]; 
  public get dnsSans() {
    return this.getListAttribute('dns_sans');
  }
  public set dnsSans(value: string[]) {
    this._dnsSans = value;
  }
  public resetDnsSans() {
    this._dnsSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSansInput() {
    return this._dnsSans;
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

  // friendly_name - computed: false, optional: true, required: false
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // ip_sans - computed: false, optional: true, required: false
  private _ipSans?: string[]; 
  public get ipSans() {
    return this.getListAttribute('ip_sans');
  }
  public set ipSans(value: string[]) {
    this._ipSans = value;
  }
  public resetIpSans() {
    this._ipSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSansInput() {
    return this._ipSans;
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

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
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

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // organization - computed: false, optional: true, required: false
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

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // owner_role_name - computed: false, optional: true, required: false
  private _ownerRoleName?: string; 
  public get ownerRoleName() {
    return this.getStringAttribute('owner_role_name');
  }
  public set ownerRoleName(value: string) {
    this._ownerRoleName = value;
  }
  public resetOwnerRoleName() {
    this._ownerRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerRoleNameInput() {
    return this._ownerRoleName;
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
  private _renewalConfig = new CertificateRenewalConfigOutputReference(this, "renewal_config");
  public get renewalConfig() {
    return this._renewalConfig;
  }
  public putRenewalConfig(value: CertificateRenewalConfig) {
    this._renewalConfig.internalValue = value;
  }
  public resetRenewalConfig() {
    this._renewalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalConfigInput() {
    return this._renewalConfig.internalValue;
  }

  // revocation_effective_date - computed: true, optional: false, required: false
  public get revocationEffectiveDate() {
    return this.getStringAttribute('revocation_effective_date');
  }

  // revoke_on_destroy - computed: false, optional: true, required: false
  private _revokeOnDestroy?: boolean | cdktf.IResolvable; 
  public get revokeOnDestroy() {
    return this.getBooleanAttribute('revoke_on_destroy');
  }
  public set revokeOnDestroy(value: boolean | cdktf.IResolvable) {
    this._revokeOnDestroy = value;
  }
  public resetRevokeOnDestroy() {
    this._revokeOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeOnDestroyInput() {
    return this._revokeOnDestroy;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // state - computed: false, optional: true, required: false
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

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // uri_sans - computed: false, optional: true, required: false
  private _uriSans?: string[]; 
  public get uriSans() {
    return this.getListAttribute('uri_sans');
  }
  public set uriSans(value: string[]) {
    this._uriSans = value;
  }
  public resetUriSans() {
    this._uriSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriSansInput() {
    return this._uriSans;
  }

  // use_cn_as_friendly_name - computed: false, optional: true, required: false
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
      certificate_authority: cdktf.stringToTerraform(this._certificateAuthority),
      certificate_enrollment_pattern: cdktf.stringToTerraform(this._certificateEnrollmentPattern),
      certificate_format: cdktf.stringToTerraform(this._certificateFormat),
      certificate_template: cdktf.stringToTerraform(this._certificateTemplate),
      collection_id: cdktf.numberToTerraform(this._collectionId),
      common_name: cdktf.stringToTerraform(this._commonName),
      country: cdktf.stringToTerraform(this._country),
      csr: cdktf.stringToTerraform(this._csr),
      dns_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSans),
      expiry_warn_days: cdktf.numberToTerraform(this._expiryWarnDays),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      ip_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipSans),
      key_password: cdktf.stringToTerraform(this._keyPassword),
      locality: cdktf.stringToTerraform(this._locality),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      organization: cdktf.stringToTerraform(this._organization),
      organizational_unit: cdktf.stringToTerraform(this._organizationalUnit),
      owner_role_name: cdktf.stringToTerraform(this._ownerRoleName),
      renewal_config: certificateRenewalConfigToTerraform(this._renewalConfig.internalValue),
      revoke_on_destroy: cdktf.booleanToTerraform(this._revokeOnDestroy),
      state: cdktf.stringToTerraform(this._state),
      uri_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uriSans),
      use_cn_as_friendly_name: cdktf.booleanToTerraform(this._useCnAsFriendlyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_authority: {
        value: cdktf.stringToHclTerraform(this._certificateAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_enrollment_pattern: {
        value: cdktf.stringToHclTerraform(this._certificateEnrollmentPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_format: {
        value: cdktf.stringToHclTerraform(this._certificateFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_template: {
        value: cdktf.stringToHclTerraform(this._certificateTemplate),
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
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr: {
        value: cdktf.stringToHclTerraform(this._csr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSans),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      ip_sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipSans),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key_password: {
        value: cdktf.stringToHclTerraform(this._keyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locality: {
        value: cdktf.stringToHclTerraform(this._locality),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit: {
        value: cdktf.stringToHclTerraform(this._organizationalUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_role_name: {
        value: cdktf.stringToHclTerraform(this._ownerRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renewal_config: {
        value: certificateRenewalConfigToHclTerraform(this._renewalConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateRenewalConfig",
      },
      revoke_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._revokeOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri_sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uriSans),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
