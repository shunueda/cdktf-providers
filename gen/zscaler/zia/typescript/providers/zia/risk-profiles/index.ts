// https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RiskProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filters applications based on their support for logging and tracking all administrative activities to identify potential security threats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#admin_audit_logs RiskProfiles#admin_audit_logs}
  */
  readonly adminAuditLogs?: string;
  /**
  * List of certifications to be included or excluded for the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#certifications RiskProfiles#certifications}
  */
  readonly certifications?: string[];
  /**
  * Filters applications based on their history of reported data breaches in the last three years.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#data_breach RiskProfiles#data_breach}
  */
  readonly dataBreach?: string;
  /**
  * Filters applications based on their support for encrypting data in transit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#data_encryption_in_transit RiskProfiles#data_encryption_in_transit}
  */
  readonly dataEncryptionInTransit?: string[];
  /**
  * Filters applications based on their implementation of the DNS Certification Authority Authorization (CAA) policy that helps prevent unauthorized SSL certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#dns_caa_policy RiskProfiles#dns_caa_policy}
  */
  readonly dnsCaaPolicy?: string;
  /**
  * Filters applications based on their support for Domain-Based Message Authentication, Reporting, and Conformance (DMARC), which helps prevent email spoofing and phishing attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#domain_based_message_auth RiskProfiles#domain_based_message_auth}
  */
  readonly domainBasedMessageAuth?: string;
  /**
  * Filters applications based on their support for DomainKeys Identified Mail (DKIM) authentication, which helps prevent email tampering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#domain_keys_identified_mail RiskProfiles#domain_keys_identified_mail}
  */
  readonly domainKeysIdentifiedMail?: string;
  /**
  * Filters applications based on their support for anonymous access without requiring user authentication that can increase the risk of malicious activity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#evasive RiskProfiles#evasive}
  */
  readonly evasive?: string;
  /**
  * Indicates if the certificates are included or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#exclude_certificates RiskProfiles#exclude_certificates}
  */
  readonly excludeCertificates?: number;
  /**
  * Filters applications based on their support for file sharing features that can increase the risk of data exfiltration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#file_sharing RiskProfiles#file_sharing}
  */
  readonly fileSharing?: string;
  /**
  * Filters applications based on their implementation of all security headers (X-XSS-Protection, X-Frame-Options, Strict-Transport-Security, Content-Security-Policy, and X-Content-Type-Options) to protect against common web attacks. This field is not applicable to the Lite API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#http_security_headers RiskProfiles#http_security_headers}
  */
  readonly httpSecurityHeaders?: string;
  /**
  * Filters applications based on their support for content malware scanning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#malware_scanning_for_content RiskProfiles#malware_scanning_for_content}
  */
  readonly malwareScanningForContent?: string;
  /**
  * Filters applications based on their support for multi-factor authentication to enhance user account security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#mfa_support RiskProfiles#mfa_support}
  */
  readonly mfaSupport?: string;
  /**
  * Filters applications based on their password strength requirements under Hosting Info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#password_strength RiskProfiles#password_strength}
  */
  readonly passwordStrength?: string;
  /**
  * Filters applications based on the presence of questionable terms and conditions in their legal agreements, such as sharing customer data with third-party applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#poor_items_of_service RiskProfiles#poor_items_of_service}
  */
  readonly poorItemsOfService?: string;
  /**
  * Cloud application risk profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#profile_name RiskProfiles#profile_name}
  */
  readonly profileName: string;
  /**
  * Risk profile type. The default profile type is CLOUD_APPLICATIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#profile_type RiskProfiles#profile_type}
  */
  readonly profileType?: string;
  /**
  * Filters applications based on their support for remote access screen sharing, which can increase the risk of data exfiltration if not properly secured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#remote_screen_sharing RiskProfiles#remote_screen_sharing}
  */
  readonly remoteScreenSharing?: string;
  /**
  * The risk index number of the cloud applications. It represents the risk score assigned to each cloud application based on the risk attribute values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#risk_index RiskProfiles#risk_index}
  */
  readonly riskIndex?: number[];
  /**
  * Filters applications based on their support for sender policy framework (SPF) authentication, which helps prevent email spoofing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#sender_policy_framework RiskProfiles#sender_policy_framework}
  */
  readonly senderPolicyFramework?: string;
  /**
  * Filters applications based on their ability to restrict access to specific IP addresses, reducing the attack surface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#source_ip_restrictions RiskProfiles#source_ip_restrictions}
  */
  readonly sourceIpRestrictions?: string;
  /**
  * Filters applications based on the key size of their SSL certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#ssl_cert_key_size RiskProfiles#ssl_cert_key_size}
  */
  readonly sslCertKeySize?: string;
  /**
  * Filters applications based on the validity period of their SSL certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#ssl_cert_validity RiskProfiles#ssl_cert_validity}
  */
  readonly sslCertValidity?: string;
  /**
  * Filters applications based on their use of pinned SSL certificates, making it difficult for attackers to decrypt and validate traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#ssl_pinned RiskProfiles#ssl_pinned}
  */
  readonly sslPinned?: string;
  /**
  * Status of the applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#status RiskProfiles#status}
  */
  readonly status?: string;
  /**
  * Filters applications based on their support for web application firewalls (WAFs) to protect against common web attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#support_for_waf RiskProfiles#support_for_waf}
  */
  readonly supportForWaf?: string;
  /**
  * Filters applications based on their published CVE vulnerabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#vulnerability RiskProfiles#vulnerability}
  */
  readonly vulnerability?: string;
  /**
  * Filters applications based on their policy for disclosing known vulnerabilities, allowing ethical hackers to report potential security threats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#vulnerability_disclosure RiskProfiles#vulnerability_disclosure}
  */
  readonly vulnerabilityDisclosure?: string;
  /**
  * Filters applications based on their vulnerability to the Heartbleed attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#vulnerable_to_heart_bleed RiskProfiles#vulnerable_to_heart_bleed}
  */
  readonly vulnerableToHeartBleed?: string;
  /**
  * Filters applications based on their vulnerability to the Logjam attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#vulnerable_to_log_jam RiskProfiles#vulnerable_to_log_jam}
  */
  readonly vulnerableToLogJam?: string;
  /**
  * Filters applications based on their vulnerability to the POODLE attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#vulnerable_to_poodle RiskProfiles#vulnerable_to_poodle}
  */
  readonly vulnerableToPoodle?: string;
  /**
  * Filters applications based on their support for weak ciphers with key sizes less than 128 bits that can compromise SSL connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#weak_cipher_support RiskProfiles#weak_cipher_support}
  */
  readonly weakCipherSupport?: string;
  /**
  * custom_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#custom_tags RiskProfiles#custom_tags}
  */
  readonly customTags?: RiskProfilesCustomTags;
}
export interface RiskProfilesCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#id RiskProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number[];
}

export function riskProfilesCustomTagsToTerraform(struct?: RiskProfilesCustomTagsOutputReference | RiskProfilesCustomTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function riskProfilesCustomTagsToHclTerraform(struct?: RiskProfilesCustomTagsOutputReference | RiskProfilesCustomTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskProfilesCustomTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RiskProfilesCustomTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskProfilesCustomTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number[]; 
  public get id() {
    return this.getNumberListAttribute('id');
  }
  public set id(value: number[]) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles zia_risk_profiles}
*/
export class RiskProfiles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_risk_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RiskProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RiskProfiles to import
  * @param importFromId The id of the existing RiskProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RiskProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_risk_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/risk_profiles zia_risk_profiles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RiskProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: RiskProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_risk_profiles',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.2',
        providerVersionConstraint: '4.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminAuditLogs = config.adminAuditLogs;
    this._certifications = config.certifications;
    this._dataBreach = config.dataBreach;
    this._dataEncryptionInTransit = config.dataEncryptionInTransit;
    this._dnsCaaPolicy = config.dnsCaaPolicy;
    this._domainBasedMessageAuth = config.domainBasedMessageAuth;
    this._domainKeysIdentifiedMail = config.domainKeysIdentifiedMail;
    this._evasive = config.evasive;
    this._excludeCertificates = config.excludeCertificates;
    this._fileSharing = config.fileSharing;
    this._httpSecurityHeaders = config.httpSecurityHeaders;
    this._malwareScanningForContent = config.malwareScanningForContent;
    this._mfaSupport = config.mfaSupport;
    this._passwordStrength = config.passwordStrength;
    this._poorItemsOfService = config.poorItemsOfService;
    this._profileName = config.profileName;
    this._profileType = config.profileType;
    this._remoteScreenSharing = config.remoteScreenSharing;
    this._riskIndex = config.riskIndex;
    this._senderPolicyFramework = config.senderPolicyFramework;
    this._sourceIpRestrictions = config.sourceIpRestrictions;
    this._sslCertKeySize = config.sslCertKeySize;
    this._sslCertValidity = config.sslCertValidity;
    this._sslPinned = config.sslPinned;
    this._status = config.status;
    this._supportForWaf = config.supportForWaf;
    this._vulnerability = config.vulnerability;
    this._vulnerabilityDisclosure = config.vulnerabilityDisclosure;
    this._vulnerableToHeartBleed = config.vulnerableToHeartBleed;
    this._vulnerableToLogJam = config.vulnerableToLogJam;
    this._vulnerableToPoodle = config.vulnerableToPoodle;
    this._weakCipherSupport = config.weakCipherSupport;
    this._customTags.internalValue = config.customTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_audit_logs - computed: false, optional: true, required: false
  private _adminAuditLogs?: string; 
  public get adminAuditLogs() {
    return this.getStringAttribute('admin_audit_logs');
  }
  public set adminAuditLogs(value: string) {
    this._adminAuditLogs = value;
  }
  public resetAdminAuditLogs() {
    this._adminAuditLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAuditLogsInput() {
    return this._adminAuditLogs;
  }

  // certifications - computed: false, optional: true, required: false
  private _certifications?: string[]; 
  public get certifications() {
    return cdktf.Fn.tolist(this.getListAttribute('certifications'));
  }
  public set certifications(value: string[]) {
    this._certifications = value;
  }
  public resetCertifications() {
    this._certifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificationsInput() {
    return this._certifications;
  }

  // data_breach - computed: false, optional: true, required: false
  private _dataBreach?: string; 
  public get dataBreach() {
    return this.getStringAttribute('data_breach');
  }
  public set dataBreach(value: string) {
    this._dataBreach = value;
  }
  public resetDataBreach() {
    this._dataBreach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBreachInput() {
    return this._dataBreach;
  }

  // data_encryption_in_transit - computed: false, optional: true, required: false
  private _dataEncryptionInTransit?: string[]; 
  public get dataEncryptionInTransit() {
    return cdktf.Fn.tolist(this.getListAttribute('data_encryption_in_transit'));
  }
  public set dataEncryptionInTransit(value: string[]) {
    this._dataEncryptionInTransit = value;
  }
  public resetDataEncryptionInTransit() {
    this._dataEncryptionInTransit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEncryptionInTransitInput() {
    return this._dataEncryptionInTransit;
  }

  // dns_caa_policy - computed: false, optional: true, required: false
  private _dnsCaaPolicy?: string; 
  public get dnsCaaPolicy() {
    return this.getStringAttribute('dns_caa_policy');
  }
  public set dnsCaaPolicy(value: string) {
    this._dnsCaaPolicy = value;
  }
  public resetDnsCaaPolicy() {
    this._dnsCaaPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCaaPolicyInput() {
    return this._dnsCaaPolicy;
  }

  // domain_based_message_auth - computed: false, optional: true, required: false
  private _domainBasedMessageAuth?: string; 
  public get domainBasedMessageAuth() {
    return this.getStringAttribute('domain_based_message_auth');
  }
  public set domainBasedMessageAuth(value: string) {
    this._domainBasedMessageAuth = value;
  }
  public resetDomainBasedMessageAuth() {
    this._domainBasedMessageAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainBasedMessageAuthInput() {
    return this._domainBasedMessageAuth;
  }

  // domain_keys_identified_mail - computed: false, optional: true, required: false
  private _domainKeysIdentifiedMail?: string; 
  public get domainKeysIdentifiedMail() {
    return this.getStringAttribute('domain_keys_identified_mail');
  }
  public set domainKeysIdentifiedMail(value: string) {
    this._domainKeysIdentifiedMail = value;
  }
  public resetDomainKeysIdentifiedMail() {
    this._domainKeysIdentifiedMail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainKeysIdentifiedMailInput() {
    return this._domainKeysIdentifiedMail;
  }

  // evasive - computed: false, optional: true, required: false
  private _evasive?: string; 
  public get evasive() {
    return this.getStringAttribute('evasive');
  }
  public set evasive(value: string) {
    this._evasive = value;
  }
  public resetEvasive() {
    this._evasive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evasiveInput() {
    return this._evasive;
  }

  // exclude_certificates - computed: false, optional: true, required: false
  private _excludeCertificates?: number; 
  public get excludeCertificates() {
    return this.getNumberAttribute('exclude_certificates');
  }
  public set excludeCertificates(value: number) {
    this._excludeCertificates = value;
  }
  public resetExcludeCertificates() {
    this._excludeCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCertificatesInput() {
    return this._excludeCertificates;
  }

  // file_sharing - computed: false, optional: true, required: false
  private _fileSharing?: string; 
  public get fileSharing() {
    return this.getStringAttribute('file_sharing');
  }
  public set fileSharing(value: string) {
    this._fileSharing = value;
  }
  public resetFileSharing() {
    this._fileSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSharingInput() {
    return this._fileSharing;
  }

  // http_security_headers - computed: false, optional: true, required: false
  private _httpSecurityHeaders?: string; 
  public get httpSecurityHeaders() {
    return this.getStringAttribute('http_security_headers');
  }
  public set httpSecurityHeaders(value: string) {
    this._httpSecurityHeaders = value;
  }
  public resetHttpSecurityHeaders() {
    this._httpSecurityHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSecurityHeadersInput() {
    return this._httpSecurityHeaders;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // malware_scanning_for_content - computed: false, optional: true, required: false
  private _malwareScanningForContent?: string; 
  public get malwareScanningForContent() {
    return this.getStringAttribute('malware_scanning_for_content');
  }
  public set malwareScanningForContent(value: string) {
    this._malwareScanningForContent = value;
  }
  public resetMalwareScanningForContent() {
    this._malwareScanningForContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareScanningForContentInput() {
    return this._malwareScanningForContent;
  }

  // mfa_support - computed: false, optional: true, required: false
  private _mfaSupport?: string; 
  public get mfaSupport() {
    return this.getStringAttribute('mfa_support');
  }
  public set mfaSupport(value: string) {
    this._mfaSupport = value;
  }
  public resetMfaSupport() {
    this._mfaSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaSupportInput() {
    return this._mfaSupport;
  }

  // password_strength - computed: false, optional: true, required: false
  private _passwordStrength?: string; 
  public get passwordStrength() {
    return this.getStringAttribute('password_strength');
  }
  public set passwordStrength(value: string) {
    this._passwordStrength = value;
  }
  public resetPasswordStrength() {
    this._passwordStrength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordStrengthInput() {
    return this._passwordStrength;
  }

  // poor_items_of_service - computed: false, optional: true, required: false
  private _poorItemsOfService?: string; 
  public get poorItemsOfService() {
    return this.getStringAttribute('poor_items_of_service');
  }
  public set poorItemsOfService(value: string) {
    this._poorItemsOfService = value;
  }
  public resetPoorItemsOfService() {
    this._poorItemsOfService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poorItemsOfServiceInput() {
    return this._poorItemsOfService;
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // profile_type - computed: false, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // remote_screen_sharing - computed: false, optional: true, required: false
  private _remoteScreenSharing?: string; 
  public get remoteScreenSharing() {
    return this.getStringAttribute('remote_screen_sharing');
  }
  public set remoteScreenSharing(value: string) {
    this._remoteScreenSharing = value;
  }
  public resetRemoteScreenSharing() {
    this._remoteScreenSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteScreenSharingInput() {
    return this._remoteScreenSharing;
  }

  // risk_index - computed: false, optional: true, required: false
  private _riskIndex?: number[]; 
  public get riskIndex() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('risk_index')));
  }
  public set riskIndex(value: number[]) {
    this._riskIndex = value;
  }
  public resetRiskIndex() {
    this._riskIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskIndexInput() {
    return this._riskIndex;
  }

  // sender_policy_framework - computed: false, optional: true, required: false
  private _senderPolicyFramework?: string; 
  public get senderPolicyFramework() {
    return this.getStringAttribute('sender_policy_framework');
  }
  public set senderPolicyFramework(value: string) {
    this._senderPolicyFramework = value;
  }
  public resetSenderPolicyFramework() {
    this._senderPolicyFramework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderPolicyFrameworkInput() {
    return this._senderPolicyFramework;
  }

  // source_ip_restrictions - computed: false, optional: true, required: false
  private _sourceIpRestrictions?: string; 
  public get sourceIpRestrictions() {
    return this.getStringAttribute('source_ip_restrictions');
  }
  public set sourceIpRestrictions(value: string) {
    this._sourceIpRestrictions = value;
  }
  public resetSourceIpRestrictions() {
    this._sourceIpRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpRestrictionsInput() {
    return this._sourceIpRestrictions;
  }

  // ssl_cert_key_size - computed: false, optional: true, required: false
  private _sslCertKeySize?: string; 
  public get sslCertKeySize() {
    return this.getStringAttribute('ssl_cert_key_size');
  }
  public set sslCertKeySize(value: string) {
    this._sslCertKeySize = value;
  }
  public resetSslCertKeySize() {
    this._sslCertKeySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertKeySizeInput() {
    return this._sslCertKeySize;
  }

  // ssl_cert_validity - computed: false, optional: true, required: false
  private _sslCertValidity?: string; 
  public get sslCertValidity() {
    return this.getStringAttribute('ssl_cert_validity');
  }
  public set sslCertValidity(value: string) {
    this._sslCertValidity = value;
  }
  public resetSslCertValidity() {
    this._sslCertValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertValidityInput() {
    return this._sslCertValidity;
  }

  // ssl_pinned - computed: false, optional: true, required: false
  private _sslPinned?: string; 
  public get sslPinned() {
    return this.getStringAttribute('ssl_pinned');
  }
  public set sslPinned(value: string) {
    this._sslPinned = value;
  }
  public resetSslPinned() {
    this._sslPinned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPinnedInput() {
    return this._sslPinned;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // support_for_waf - computed: false, optional: true, required: false
  private _supportForWaf?: string; 
  public get supportForWaf() {
    return this.getStringAttribute('support_for_waf');
  }
  public set supportForWaf(value: string) {
    this._supportForWaf = value;
  }
  public resetSupportForWaf() {
    this._supportForWaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportForWafInput() {
    return this._supportForWaf;
  }

  // vulnerability - computed: false, optional: true, required: false
  private _vulnerability?: string; 
  public get vulnerability() {
    return this.getStringAttribute('vulnerability');
  }
  public set vulnerability(value: string) {
    this._vulnerability = value;
  }
  public resetVulnerability() {
    this._vulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityInput() {
    return this._vulnerability;
  }

  // vulnerability_disclosure - computed: false, optional: true, required: false
  private _vulnerabilityDisclosure?: string; 
  public get vulnerabilityDisclosure() {
    return this.getStringAttribute('vulnerability_disclosure');
  }
  public set vulnerabilityDisclosure(value: string) {
    this._vulnerabilityDisclosure = value;
  }
  public resetVulnerabilityDisclosure() {
    this._vulnerabilityDisclosure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityDisclosureInput() {
    return this._vulnerabilityDisclosure;
  }

  // vulnerable_to_heart_bleed - computed: false, optional: true, required: false
  private _vulnerableToHeartBleed?: string; 
  public get vulnerableToHeartBleed() {
    return this.getStringAttribute('vulnerable_to_heart_bleed');
  }
  public set vulnerableToHeartBleed(value: string) {
    this._vulnerableToHeartBleed = value;
  }
  public resetVulnerableToHeartBleed() {
    this._vulnerableToHeartBleed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerableToHeartBleedInput() {
    return this._vulnerableToHeartBleed;
  }

  // vulnerable_to_log_jam - computed: false, optional: true, required: false
  private _vulnerableToLogJam?: string; 
  public get vulnerableToLogJam() {
    return this.getStringAttribute('vulnerable_to_log_jam');
  }
  public set vulnerableToLogJam(value: string) {
    this._vulnerableToLogJam = value;
  }
  public resetVulnerableToLogJam() {
    this._vulnerableToLogJam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerableToLogJamInput() {
    return this._vulnerableToLogJam;
  }

  // vulnerable_to_poodle - computed: false, optional: true, required: false
  private _vulnerableToPoodle?: string; 
  public get vulnerableToPoodle() {
    return this.getStringAttribute('vulnerable_to_poodle');
  }
  public set vulnerableToPoodle(value: string) {
    this._vulnerableToPoodle = value;
  }
  public resetVulnerableToPoodle() {
    this._vulnerableToPoodle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerableToPoodleInput() {
    return this._vulnerableToPoodle;
  }

  // weak_cipher_support - computed: false, optional: true, required: false
  private _weakCipherSupport?: string; 
  public get weakCipherSupport() {
    return this.getStringAttribute('weak_cipher_support');
  }
  public set weakCipherSupport(value: string) {
    this._weakCipherSupport = value;
  }
  public resetWeakCipherSupport() {
    this._weakCipherSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weakCipherSupportInput() {
    return this._weakCipherSupport;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags = new RiskProfilesCustomTagsOutputReference(this, "custom_tags");
  public get customTags() {
    return this._customTags;
  }
  public putCustomTags(value: RiskProfilesCustomTags) {
    this._customTags.internalValue = value;
  }
  public resetCustomTags() {
    this._customTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_audit_logs: cdktf.stringToTerraform(this._adminAuditLogs),
      certifications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certifications),
      data_breach: cdktf.stringToTerraform(this._dataBreach),
      data_encryption_in_transit: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataEncryptionInTransit),
      dns_caa_policy: cdktf.stringToTerraform(this._dnsCaaPolicy),
      domain_based_message_auth: cdktf.stringToTerraform(this._domainBasedMessageAuth),
      domain_keys_identified_mail: cdktf.stringToTerraform(this._domainKeysIdentifiedMail),
      evasive: cdktf.stringToTerraform(this._evasive),
      exclude_certificates: cdktf.numberToTerraform(this._excludeCertificates),
      file_sharing: cdktf.stringToTerraform(this._fileSharing),
      http_security_headers: cdktf.stringToTerraform(this._httpSecurityHeaders),
      malware_scanning_for_content: cdktf.stringToTerraform(this._malwareScanningForContent),
      mfa_support: cdktf.stringToTerraform(this._mfaSupport),
      password_strength: cdktf.stringToTerraform(this._passwordStrength),
      poor_items_of_service: cdktf.stringToTerraform(this._poorItemsOfService),
      profile_name: cdktf.stringToTerraform(this._profileName),
      profile_type: cdktf.stringToTerraform(this._profileType),
      remote_screen_sharing: cdktf.stringToTerraform(this._remoteScreenSharing),
      risk_index: cdktf.listMapper(cdktf.numberToTerraform, false)(this._riskIndex),
      sender_policy_framework: cdktf.stringToTerraform(this._senderPolicyFramework),
      source_ip_restrictions: cdktf.stringToTerraform(this._sourceIpRestrictions),
      ssl_cert_key_size: cdktf.stringToTerraform(this._sslCertKeySize),
      ssl_cert_validity: cdktf.stringToTerraform(this._sslCertValidity),
      ssl_pinned: cdktf.stringToTerraform(this._sslPinned),
      status: cdktf.stringToTerraform(this._status),
      support_for_waf: cdktf.stringToTerraform(this._supportForWaf),
      vulnerability: cdktf.stringToTerraform(this._vulnerability),
      vulnerability_disclosure: cdktf.stringToTerraform(this._vulnerabilityDisclosure),
      vulnerable_to_heart_bleed: cdktf.stringToTerraform(this._vulnerableToHeartBleed),
      vulnerable_to_log_jam: cdktf.stringToTerraform(this._vulnerableToLogJam),
      vulnerable_to_poodle: cdktf.stringToTerraform(this._vulnerableToPoodle),
      weak_cipher_support: cdktf.stringToTerraform(this._weakCipherSupport),
      custom_tags: riskProfilesCustomTagsToTerraform(this._customTags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_audit_logs: {
        value: cdktf.stringToHclTerraform(this._adminAuditLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certifications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certifications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      data_breach: {
        value: cdktf.stringToHclTerraform(this._dataBreach),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_encryption_in_transit: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataEncryptionInTransit),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_caa_policy: {
        value: cdktf.stringToHclTerraform(this._dnsCaaPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_based_message_auth: {
        value: cdktf.stringToHclTerraform(this._domainBasedMessageAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_keys_identified_mail: {
        value: cdktf.stringToHclTerraform(this._domainKeysIdentifiedMail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evasive: {
        value: cdktf.stringToHclTerraform(this._evasive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_certificates: {
        value: cdktf.numberToHclTerraform(this._excludeCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_sharing: {
        value: cdktf.stringToHclTerraform(this._fileSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_security_headers: {
        value: cdktf.stringToHclTerraform(this._httpSecurityHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malware_scanning_for_content: {
        value: cdktf.stringToHclTerraform(this._malwareScanningForContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mfa_support: {
        value: cdktf.stringToHclTerraform(this._mfaSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_strength: {
        value: cdktf.stringToHclTerraform(this._passwordStrength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poor_items_of_service: {
        value: cdktf.stringToHclTerraform(this._poorItemsOfService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_type: {
        value: cdktf.stringToHclTerraform(this._profileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_screen_sharing: {
        value: cdktf.stringToHclTerraform(this._remoteScreenSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk_index: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._riskIndex),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      sender_policy_framework: {
        value: cdktf.stringToHclTerraform(this._senderPolicyFramework),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_restrictions: {
        value: cdktf.stringToHclTerraform(this._sourceIpRestrictions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert_key_size: {
        value: cdktf.stringToHclTerraform(this._sslCertKeySize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert_validity: {
        value: cdktf.stringToHclTerraform(this._sslCertValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_pinned: {
        value: cdktf.stringToHclTerraform(this._sslPinned),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_for_waf: {
        value: cdktf.stringToHclTerraform(this._supportForWaf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vulnerability: {
        value: cdktf.stringToHclTerraform(this._vulnerability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vulnerability_disclosure: {
        value: cdktf.stringToHclTerraform(this._vulnerabilityDisclosure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vulnerable_to_heart_bleed: {
        value: cdktf.stringToHclTerraform(this._vulnerableToHeartBleed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vulnerable_to_log_jam: {
        value: cdktf.stringToHclTerraform(this._vulnerableToLogJam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vulnerable_to_poodle: {
        value: cdktf.stringToHclTerraform(this._vulnerableToPoodle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weak_cipher_support: {
        value: cdktf.stringToHclTerraform(this._weakCipherSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_tags: {
        value: riskProfilesCustomTagsToHclTerraform(this._customTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RiskProfilesCustomTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
