// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiCertIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, clients can request certificates for any CN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#allow_any_name PkiCertIssuer#allow_any_name}
  */
  readonly allowAnyName?: boolean | cdktf.IResolvable;
  /**
  * If set, will allow copying the extra extensions from the csr file (if given)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#allow_copy_ext_from_csr PkiCertIssuer#allow_copy_ext_from_csr}
  */
  readonly allowCopyExtFromCsr?: boolean | cdktf.IResolvable;
  /**
  * If set, clients can request certificates for subdomains and wildcard subdomains of the allowed domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#allow_subdomains PkiCertIssuer#allow_subdomains}
  */
  readonly allowSubdomains?: boolean | cdktf.IResolvable;
  /**
  * A list of the allowed domains that clients can request to be included in the certificate (in a comma-delimited list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#allowed_domains PkiCertIssuer#allowed_domains}
  */
  readonly allowedDomains?: string;
  /**
  * A json string that defines the allowed extra extensions for the pki cert issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#allowed_extra_extensions PkiCertIssuer#allowed_extra_extensions}
  */
  readonly allowedExtraExtensions?: string;
  /**
  * A list of the allowed CIDRs for IPs that clients can request to be included in the certificate as part of the IP Subject Alternative Names (in a comma-delimited list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#allowed_ip_sans PkiCertIssuer#allowed_ip_sans}
  */
  readonly allowedIpSans?: string;
  /**
  * A list of the allowed URIs that clients can request to be included in the certificate as part of the URI Subject Alternative Names (in a comma-delimited list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#allowed_uri_sans PkiCertIssuer#allowed_uri_sans}
  */
  readonly allowedUriSans?: string;
  /**
  * Automatically renew certificates before expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#auto_renew PkiCertIssuer#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * The name of an existing CA target to attach this PKI Certificate Issuer to, required in Public CA mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#ca_target PkiCertIssuer#ca_target}
  */
  readonly caTarget?: string;
  /**
  * If set, certificates will be flagged for client auth use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#client_flag PkiCertIssuer#client_flag}
  */
  readonly clientFlag?: boolean | cdktf.IResolvable;
  /**
  * If set, certificates will be flagged for code signing use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#code_signing_flag PkiCertIssuer#code_signing_flag}
  */
  readonly codeSigningFlag?: boolean | cdktf.IResolvable;
  /**
  * A comma-separated list of countries that will be set in the issued certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#country PkiCertIssuer#country}
  */
  readonly country?: string;
  /**
  * Set this to allow the issuer will expose a CRL endpoint in the Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#create_private_crl PkiCertIssuer#create_private_crl}
  */
  readonly createPrivateCrl?: boolean | cdktf.IResolvable;
  /**
  * Set this to allow the cert issuer will expose a public CRL endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#create_public_crl PkiCertIssuer#create_public_crl}
  */
  readonly createPublicCrl?: boolean | cdktf.IResolvable;
  /**
  * Mark key usage as critical [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#critical_key_usage PkiCertIssuer#critical_key_usage}
  */
  readonly criticalKeyUsage?: string;
  /**
  * Protection from accidental deletion of this item, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#delete_protection PkiCertIssuer#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#description PkiCertIssuer#description}
  */
  readonly description?: string;
  /**
  * A path in Akeyless which to save generated certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#destination_path PkiCertIssuer#destination_path}
  */
  readonly destinationPath?: string;
  /**
  * If set, the cert issuer will support the acme protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#enable_acme PkiCertIssuer#enable_acme}
  */
  readonly enableAcme?: boolean | cdktf.IResolvable;
  /**
  * How many days before the expiration of the certificate would you like to be notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#expiration_event_in PkiCertIssuer#expiration_event_in}
  */
  readonly expirationEventIn?: string[];
  /**
  * The GW cluster URL to issue the certificate from, required in Public CA mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#gw_cluster_url PkiCertIssuer#gw_cluster_url}
  */
  readonly gwClusterUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#id PkiCertIssuer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If set, the basic constraints extension will be added to certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#is_ca PkiCertIssuer#is_ca}
  */
  readonly isCa?: boolean | cdktf.IResolvable;
  /**
  * A comma-separated string or list of key usages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#key_usage PkiCertIssuer#key_usage}
  */
  readonly keyUsage?: string;
  /**
  * A comma-separated list of localities that will be set in the issued certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#locality PkiCertIssuer#locality}
  */
  readonly locality?: string;
  /**
  * PKI certificate issuer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#name PkiCertIssuer#name}
  */
  readonly name: string;
  /**
  * If set, any names are allowed for CN and SANs in the certificate and not only a valid host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#not_enforce_hostnames PkiCertIssuer#not_enforce_hostnames}
  */
  readonly notEnforceHostnames?: boolean | cdktf.IResolvable;
  /**
  * If set, clients can request certificates without a CN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#not_require_cn PkiCertIssuer#not_require_cn}
  */
  readonly notRequireCn?: boolean | cdktf.IResolvable;
  /**
  * A comma-separated list of organizational units (OU) that will be set in the issued certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#organizational_units PkiCertIssuer#organizational_units}
  */
  readonly organizationalUnits?: string;
  /**
  * A comma-separated list of organizations (O) that will be set in the issued certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#organizations PkiCertIssuer#organizations}
  */
  readonly organizations?: string;
  /**
  * A comma-separated list of postal codes that will be set in the issued certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#postal_code PkiCertIssuer#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Whether to protect generated certificates from deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#protect_certificates PkiCertIssuer#protect_certificates}
  */
  readonly protectCertificates?: boolean | cdktf.IResolvable;
  /**
  * A comma-separated list of provinces that will be set in the issued certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#province PkiCertIssuer#province}
  */
  readonly province?: string;
  /**
  * Number of days before expiration to renew certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#scheduled_renew PkiCertIssuer#scheduled_renew}
  */
  readonly scheduledRenew?: number;
  /**
  * If set, certificates will be flagged for server auth use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#server_flag PkiCertIssuer#server_flag}
  */
  readonly serverFlag?: boolean | cdktf.IResolvable;
  /**
  * A key to sign the certificate with, required in Private CA mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#signer_key_name PkiCertIssuer#signer_key_name}
  */
  readonly signerKeyName?: string;
  /**
  * A comma-separated list of street addresses that will be set in the issued certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#street_address PkiCertIssuer#street_address}
  */
  readonly streetAddress?: string;
  /**
  * List of the tags attached to this key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#tags PkiCertIssuer#tags}
  */
  readonly tags?: string[];
  /**
  * The maximum requested Time To Live for issued certificate by default in seconds, supported formats are s,m,h,d. In case of Public CA, this is based on the CA target's supported maximum TTLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#ttl PkiCertIssuer#ttl}
  */
  readonly ttl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer akeyless_pki_cert_issuer}
*/
export class PkiCertIssuer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_pki_cert_issuer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiCertIssuer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiCertIssuer to import
  * @param importFromId The id of the existing PkiCertIssuer that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiCertIssuer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_pki_cert_issuer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/pki_cert_issuer akeyless_pki_cert_issuer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiCertIssuerConfig
  */
  public constructor(scope: Construct, id: string, config: PkiCertIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_pki_cert_issuer',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAnyName = config.allowAnyName;
    this._allowCopyExtFromCsr = config.allowCopyExtFromCsr;
    this._allowSubdomains = config.allowSubdomains;
    this._allowedDomains = config.allowedDomains;
    this._allowedExtraExtensions = config.allowedExtraExtensions;
    this._allowedIpSans = config.allowedIpSans;
    this._allowedUriSans = config.allowedUriSans;
    this._autoRenew = config.autoRenew;
    this._caTarget = config.caTarget;
    this._clientFlag = config.clientFlag;
    this._codeSigningFlag = config.codeSigningFlag;
    this._country = config.country;
    this._createPrivateCrl = config.createPrivateCrl;
    this._createPublicCrl = config.createPublicCrl;
    this._criticalKeyUsage = config.criticalKeyUsage;
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._destinationPath = config.destinationPath;
    this._enableAcme = config.enableAcme;
    this._expirationEventIn = config.expirationEventIn;
    this._gwClusterUrl = config.gwClusterUrl;
    this._id = config.id;
    this._isCa = config.isCa;
    this._keyUsage = config.keyUsage;
    this._locality = config.locality;
    this._name = config.name;
    this._notEnforceHostnames = config.notEnforceHostnames;
    this._notRequireCn = config.notRequireCn;
    this._organizationalUnits = config.organizationalUnits;
    this._organizations = config.organizations;
    this._postalCode = config.postalCode;
    this._protectCertificates = config.protectCertificates;
    this._province = config.province;
    this._scheduledRenew = config.scheduledRenew;
    this._serverFlag = config.serverFlag;
    this._signerKeyName = config.signerKeyName;
    this._streetAddress = config.streetAddress;
    this._tags = config.tags;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_any_name - computed: false, optional: true, required: false
  private _allowAnyName?: boolean | cdktf.IResolvable; 
  public get allowAnyName() {
    return this.getBooleanAttribute('allow_any_name');
  }
  public set allowAnyName(value: boolean | cdktf.IResolvable) {
    this._allowAnyName = value;
  }
  public resetAllowAnyName() {
    this._allowAnyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnyNameInput() {
    return this._allowAnyName;
  }

  // allow_copy_ext_from_csr - computed: false, optional: true, required: false
  private _allowCopyExtFromCsr?: boolean | cdktf.IResolvable; 
  public get allowCopyExtFromCsr() {
    return this.getBooleanAttribute('allow_copy_ext_from_csr');
  }
  public set allowCopyExtFromCsr(value: boolean | cdktf.IResolvable) {
    this._allowCopyExtFromCsr = value;
  }
  public resetAllowCopyExtFromCsr() {
    this._allowCopyExtFromCsr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCopyExtFromCsrInput() {
    return this._allowCopyExtFromCsr;
  }

  // allow_subdomains - computed: false, optional: true, required: false
  private _allowSubdomains?: boolean | cdktf.IResolvable; 
  public get allowSubdomains() {
    return this.getBooleanAttribute('allow_subdomains');
  }
  public set allowSubdomains(value: boolean | cdktf.IResolvable) {
    this._allowSubdomains = value;
  }
  public resetAllowSubdomains() {
    this._allowSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubdomainsInput() {
    return this._allowSubdomains;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string; 
  public get allowedDomains() {
    return this.getStringAttribute('allowed_domains');
  }
  public set allowedDomains(value: string) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // allowed_extra_extensions - computed: false, optional: true, required: false
  private _allowedExtraExtensions?: string; 
  public get allowedExtraExtensions() {
    return this.getStringAttribute('allowed_extra_extensions');
  }
  public set allowedExtraExtensions(value: string) {
    this._allowedExtraExtensions = value;
  }
  public resetAllowedExtraExtensions() {
    this._allowedExtraExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExtraExtensionsInput() {
    return this._allowedExtraExtensions;
  }

  // allowed_ip_sans - computed: false, optional: true, required: false
  private _allowedIpSans?: string; 
  public get allowedIpSans() {
    return this.getStringAttribute('allowed_ip_sans');
  }
  public set allowedIpSans(value: string) {
    this._allowedIpSans = value;
  }
  public resetAllowedIpSans() {
    this._allowedIpSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpSansInput() {
    return this._allowedIpSans;
  }

  // allowed_uri_sans - computed: false, optional: true, required: false
  private _allowedUriSans?: string; 
  public get allowedUriSans() {
    return this.getStringAttribute('allowed_uri_sans');
  }
  public set allowedUriSans(value: string) {
    this._allowedUriSans = value;
  }
  public resetAllowedUriSans() {
    this._allowedUriSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUriSansInput() {
    return this._allowedUriSans;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // ca_target - computed: false, optional: true, required: false
  private _caTarget?: string; 
  public get caTarget() {
    return this.getStringAttribute('ca_target');
  }
  public set caTarget(value: string) {
    this._caTarget = value;
  }
  public resetCaTarget() {
    this._caTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caTargetInput() {
    return this._caTarget;
  }

  // client_flag - computed: false, optional: true, required: false
  private _clientFlag?: boolean | cdktf.IResolvable; 
  public get clientFlag() {
    return this.getBooleanAttribute('client_flag');
  }
  public set clientFlag(value: boolean | cdktf.IResolvable) {
    this._clientFlag = value;
  }
  public resetClientFlag() {
    this._clientFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFlagInput() {
    return this._clientFlag;
  }

  // code_signing_flag - computed: false, optional: true, required: false
  private _codeSigningFlag?: boolean | cdktf.IResolvable; 
  public get codeSigningFlag() {
    return this.getBooleanAttribute('code_signing_flag');
  }
  public set codeSigningFlag(value: boolean | cdktf.IResolvable) {
    this._codeSigningFlag = value;
  }
  public resetCodeSigningFlag() {
    this._codeSigningFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningFlagInput() {
    return this._codeSigningFlag;
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

  // create_private_crl - computed: false, optional: true, required: false
  private _createPrivateCrl?: boolean | cdktf.IResolvable; 
  public get createPrivateCrl() {
    return this.getBooleanAttribute('create_private_crl');
  }
  public set createPrivateCrl(value: boolean | cdktf.IResolvable) {
    this._createPrivateCrl = value;
  }
  public resetCreatePrivateCrl() {
    this._createPrivateCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPrivateCrlInput() {
    return this._createPrivateCrl;
  }

  // create_public_crl - computed: false, optional: true, required: false
  private _createPublicCrl?: boolean | cdktf.IResolvable; 
  public get createPublicCrl() {
    return this.getBooleanAttribute('create_public_crl');
  }
  public set createPublicCrl(value: boolean | cdktf.IResolvable) {
    this._createPublicCrl = value;
  }
  public resetCreatePublicCrl() {
    this._createPublicCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPublicCrlInput() {
    return this._createPublicCrl;
  }

  // critical_key_usage - computed: false, optional: true, required: false
  private _criticalKeyUsage?: string; 
  public get criticalKeyUsage() {
    return this.getStringAttribute('critical_key_usage');
  }
  public set criticalKeyUsage(value: string) {
    this._criticalKeyUsage = value;
  }
  public resetCriticalKeyUsage() {
    this._criticalKeyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalKeyUsageInput() {
    return this._criticalKeyUsage;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // destination_path - computed: false, optional: true, required: false
  private _destinationPath?: string; 
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }
  public set destinationPath(value: string) {
    this._destinationPath = value;
  }
  public resetDestinationPath() {
    this._destinationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPathInput() {
    return this._destinationPath;
  }

  // enable_acme - computed: false, optional: true, required: false
  private _enableAcme?: boolean | cdktf.IResolvable; 
  public get enableAcme() {
    return this.getBooleanAttribute('enable_acme');
  }
  public set enableAcme(value: boolean | cdktf.IResolvable) {
    this._enableAcme = value;
  }
  public resetEnableAcme() {
    this._enableAcme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAcmeInput() {
    return this._enableAcme;
  }

  // expiration_event_in - computed: false, optional: true, required: false
  private _expirationEventIn?: string[]; 
  public get expirationEventIn() {
    return cdktf.Fn.tolist(this.getListAttribute('expiration_event_in'));
  }
  public set expirationEventIn(value: string[]) {
    this._expirationEventIn = value;
  }
  public resetExpirationEventIn() {
    this._expirationEventIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationEventInInput() {
    return this._expirationEventIn;
  }

  // gw_cluster_url - computed: false, optional: true, required: false
  private _gwClusterUrl?: string; 
  public get gwClusterUrl() {
    return this.getStringAttribute('gw_cluster_url');
  }
  public set gwClusterUrl(value: string) {
    this._gwClusterUrl = value;
  }
  public resetGwClusterUrl() {
    this._gwClusterUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwClusterUrlInput() {
    return this._gwClusterUrl;
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

  // is_ca - computed: false, optional: true, required: false
  private _isCa?: boolean | cdktf.IResolvable; 
  public get isCa() {
    return this.getBooleanAttribute('is_ca');
  }
  public set isCa(value: boolean | cdktf.IResolvable) {
    this._isCa = value;
  }
  public resetIsCa() {
    this._isCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaInput() {
    return this._isCa;
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage?: string; 
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }
  public set keyUsage(value: string) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
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

  // not_enforce_hostnames - computed: false, optional: true, required: false
  private _notEnforceHostnames?: boolean | cdktf.IResolvable; 
  public get notEnforceHostnames() {
    return this.getBooleanAttribute('not_enforce_hostnames');
  }
  public set notEnforceHostnames(value: boolean | cdktf.IResolvable) {
    this._notEnforceHostnames = value;
  }
  public resetNotEnforceHostnames() {
    this._notEnforceHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEnforceHostnamesInput() {
    return this._notEnforceHostnames;
  }

  // not_require_cn - computed: false, optional: true, required: false
  private _notRequireCn?: boolean | cdktf.IResolvable; 
  public get notRequireCn() {
    return this.getBooleanAttribute('not_require_cn');
  }
  public set notRequireCn(value: boolean | cdktf.IResolvable) {
    this._notRequireCn = value;
  }
  public resetNotRequireCn() {
    this._notRequireCn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notRequireCnInput() {
    return this._notRequireCn;
  }

  // organizational_units - computed: false, optional: true, required: false
  private _organizationalUnits?: string; 
  public get organizationalUnits() {
    return this.getStringAttribute('organizational_units');
  }
  public set organizationalUnits(value: string) {
    this._organizationalUnits = value;
  }
  public resetOrganizationalUnits() {
    this._organizationalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitsInput() {
    return this._organizationalUnits;
  }

  // organizations - computed: false, optional: true, required: false
  private _organizations?: string; 
  public get organizations() {
    return this.getStringAttribute('organizations');
  }
  public set organizations(value: string) {
    this._organizations = value;
  }
  public resetOrganizations() {
    this._organizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsInput() {
    return this._organizations;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // protect_certificates - computed: false, optional: true, required: false
  private _protectCertificates?: boolean | cdktf.IResolvable; 
  public get protectCertificates() {
    return this.getBooleanAttribute('protect_certificates');
  }
  public set protectCertificates(value: boolean | cdktf.IResolvable) {
    this._protectCertificates = value;
  }
  public resetProtectCertificates() {
    this._protectCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectCertificatesInput() {
    return this._protectCertificates;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // scheduled_renew - computed: false, optional: true, required: false
  private _scheduledRenew?: number; 
  public get scheduledRenew() {
    return this.getNumberAttribute('scheduled_renew');
  }
  public set scheduledRenew(value: number) {
    this._scheduledRenew = value;
  }
  public resetScheduledRenew() {
    this._scheduledRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledRenewInput() {
    return this._scheduledRenew;
  }

  // server_flag - computed: false, optional: true, required: false
  private _serverFlag?: boolean | cdktf.IResolvable; 
  public get serverFlag() {
    return this.getBooleanAttribute('server_flag');
  }
  public set serverFlag(value: boolean | cdktf.IResolvable) {
    this._serverFlag = value;
  }
  public resetServerFlag() {
    this._serverFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFlagInput() {
    return this._serverFlag;
  }

  // signer_key_name - computed: false, optional: true, required: false
  private _signerKeyName?: string; 
  public get signerKeyName() {
    return this.getStringAttribute('signer_key_name');
  }
  public set signerKeyName(value: string) {
    this._signerKeyName = value;
  }
  public resetSignerKeyName() {
    this._signerKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerKeyNameInput() {
    return this._signerKeyName;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_any_name: cdktf.booleanToTerraform(this._allowAnyName),
      allow_copy_ext_from_csr: cdktf.booleanToTerraform(this._allowCopyExtFromCsr),
      allow_subdomains: cdktf.booleanToTerraform(this._allowSubdomains),
      allowed_domains: cdktf.stringToTerraform(this._allowedDomains),
      allowed_extra_extensions: cdktf.stringToTerraform(this._allowedExtraExtensions),
      allowed_ip_sans: cdktf.stringToTerraform(this._allowedIpSans),
      allowed_uri_sans: cdktf.stringToTerraform(this._allowedUriSans),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      ca_target: cdktf.stringToTerraform(this._caTarget),
      client_flag: cdktf.booleanToTerraform(this._clientFlag),
      code_signing_flag: cdktf.booleanToTerraform(this._codeSigningFlag),
      country: cdktf.stringToTerraform(this._country),
      create_private_crl: cdktf.booleanToTerraform(this._createPrivateCrl),
      create_public_crl: cdktf.booleanToTerraform(this._createPublicCrl),
      critical_key_usage: cdktf.stringToTerraform(this._criticalKeyUsage),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      destination_path: cdktf.stringToTerraform(this._destinationPath),
      enable_acme: cdktf.booleanToTerraform(this._enableAcme),
      expiration_event_in: cdktf.listMapper(cdktf.stringToTerraform, false)(this._expirationEventIn),
      gw_cluster_url: cdktf.stringToTerraform(this._gwClusterUrl),
      id: cdktf.stringToTerraform(this._id),
      is_ca: cdktf.booleanToTerraform(this._isCa),
      key_usage: cdktf.stringToTerraform(this._keyUsage),
      locality: cdktf.stringToTerraform(this._locality),
      name: cdktf.stringToTerraform(this._name),
      not_enforce_hostnames: cdktf.booleanToTerraform(this._notEnforceHostnames),
      not_require_cn: cdktf.booleanToTerraform(this._notRequireCn),
      organizational_units: cdktf.stringToTerraform(this._organizationalUnits),
      organizations: cdktf.stringToTerraform(this._organizations),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      protect_certificates: cdktf.booleanToTerraform(this._protectCertificates),
      province: cdktf.stringToTerraform(this._province),
      scheduled_renew: cdktf.numberToTerraform(this._scheduledRenew),
      server_flag: cdktf.booleanToTerraform(this._serverFlag),
      signer_key_name: cdktf.stringToTerraform(this._signerKeyName),
      street_address: cdktf.stringToTerraform(this._streetAddress),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      ttl: cdktf.stringToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_any_name: {
        value: cdktf.booleanToHclTerraform(this._allowAnyName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_copy_ext_from_csr: {
        value: cdktf.booleanToHclTerraform(this._allowCopyExtFromCsr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_subdomains: {
        value: cdktf.booleanToHclTerraform(this._allowSubdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_domains: {
        value: cdktf.stringToHclTerraform(this._allowedDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_extra_extensions: {
        value: cdktf.stringToHclTerraform(this._allowedExtraExtensions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_ip_sans: {
        value: cdktf.stringToHclTerraform(this._allowedIpSans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_uri_sans: {
        value: cdktf.stringToHclTerraform(this._allowedUriSans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ca_target: {
        value: cdktf.stringToHclTerraform(this._caTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_flag: {
        value: cdktf.booleanToHclTerraform(this._clientFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      code_signing_flag: {
        value: cdktf.booleanToHclTerraform(this._codeSigningFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_private_crl: {
        value: cdktf.booleanToHclTerraform(this._createPrivateCrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_public_crl: {
        value: cdktf.booleanToHclTerraform(this._createPublicCrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      critical_key_usage: {
        value: cdktf.stringToHclTerraform(this._criticalKeyUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.booleanToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_path: {
        value: cdktf.stringToHclTerraform(this._destinationPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_acme: {
        value: cdktf.booleanToHclTerraform(this._enableAcme),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiration_event_in: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._expirationEventIn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      gw_cluster_url: {
        value: cdktf.stringToHclTerraform(this._gwClusterUrl),
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
      is_ca: {
        value: cdktf.booleanToHclTerraform(this._isCa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_usage: {
        value: cdktf.stringToHclTerraform(this._keyUsage),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      not_enforce_hostnames: {
        value: cdktf.booleanToHclTerraform(this._notEnforceHostnames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      not_require_cn: {
        value: cdktf.booleanToHclTerraform(this._notRequireCn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organizational_units: {
        value: cdktf.stringToHclTerraform(this._organizationalUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizations: {
        value: cdktf.stringToHclTerraform(this._organizations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postal_code: {
        value: cdktf.stringToHclTerraform(this._postalCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_certificates: {
        value: cdktf.booleanToHclTerraform(this._protectCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      province: {
        value: cdktf.stringToHclTerraform(this._province),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_renew: {
        value: cdktf.numberToHclTerraform(this._scheduledRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_flag: {
        value: cdktf.booleanToHclTerraform(this._serverFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      signer_key_name: {
        value: cdktf.stringToHclTerraform(this._signerKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      street_address: {
        value: cdktf.stringToHclTerraform(this._streetAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
