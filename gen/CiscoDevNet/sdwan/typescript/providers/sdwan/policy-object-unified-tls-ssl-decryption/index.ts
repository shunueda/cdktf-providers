// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectUnifiedTlsSslDecryptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#bundle_string PolicyObjectUnifiedTlsSslDecryption#bundle_string}
  */
  readonly bundleString?: string;
  /**
  * If you have vManage as CA or vManage as intermediate CA, this value should be 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#certificate_lifetime PolicyObjectUnifiedTlsSslDecryption#certificate_lifetime}
  */
  readonly certificateLifetime: string;
  /**
  * If value is none unknown status not required, if value is ocsp then unknown status is required
  *   - Choices: `ocsp`, `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#certificate_revocation_status PolicyObjectUnifiedTlsSslDecryption#certificate_revocation_status}
  */
  readonly certificateRevocationStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#default_ca_certificate_bundle PolicyObjectUnifiedTlsSslDecryption#default_ca_certificate_bundle}
  */
  readonly defaultCaCertificateBundle?: boolean | cdktf.IResolvable;
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#description PolicyObjectUnifiedTlsSslDecryption#description}
  */
  readonly description?: string;
  /**
  * 
  *   - Choices: `P256`, `P384`, `P521`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#ec_key_type PolicyObjectUnifiedTlsSslDecryption#ec_key_type}
  */
  readonly ecKeyType: string;
  /**
  * 
  *   - Choices: `decrypt`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#expired_certificate PolicyObjectUnifiedTlsSslDecryption#expired_certificate}
  */
  readonly expiredCertificate: string;
  /**
  * 
  *   - Choices: `close`, `open`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#failure_mode PolicyObjectUnifiedTlsSslDecryption#failure_mode}
  */
  readonly failureMode: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#feature_profile_id PolicyObjectUnifiedTlsSslDecryption#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#file_name PolicyObjectUnifiedTlsSslDecryption#file_name}
  */
  readonly fileName?: string;
  /**
  * 
  *   - Choices: `TLSv1`, `TLSv1.1`, `TLSv1.2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#minimal_tls_ver PolicyObjectUnifiedTlsSslDecryption#minimal_tls_ver}
  */
  readonly minimalTlsVer: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#name PolicyObjectUnifiedTlsSslDecryption#name}
  */
  readonly name: string;
  /**
  * 
  *   - Choices: `1024`, `2048`, `4096`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#rsa_keypair_modules PolicyObjectUnifiedTlsSslDecryption#rsa_keypair_modules}
  */
  readonly rsaKeypairModules: string;
  /**
  * Only required if certificateRevocationStatus is oscp, if value is none then field shouldn't be here, Attribute conditional on `certificate_revocation_status` being equal to `ocsp`
  *   - Choices: `decrypt`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#unknown_revocation_status PolicyObjectUnifiedTlsSslDecryption#unknown_revocation_status}
  */
  readonly unknownRevocationStatus?: string;
  /**
  * 
  *   - Choices: `no-decrypt`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#unsupported_cipher_suites PolicyObjectUnifiedTlsSslDecryption#unsupported_cipher_suites}
  */
  readonly unsupportedCipherSuites: string;
  /**
  * 
  *   - Choices: `no-decrypt`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#unsupported_protocol_versions PolicyObjectUnifiedTlsSslDecryption#unsupported_protocol_versions}
  */
  readonly unsupportedProtocolVersions: string;
  /**
  * 
  *   - Choices: `decrypt`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#untrusted_certificate PolicyObjectUnifiedTlsSslDecryption#untrusted_certificate}
  */
  readonly untrustedCertificate: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption sdwan_policy_object_unified_tls_ssl_decryption}
*/
export class PolicyObjectUnifiedTlsSslDecryption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_unified_tls_ssl_decryption";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectUnifiedTlsSslDecryption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectUnifiedTlsSslDecryption to import
  * @param importFromId The id of the existing PolicyObjectUnifiedTlsSslDecryption that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectUnifiedTlsSslDecryption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_unified_tls_ssl_decryption", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_unified_tls_ssl_decryption sdwan_policy_object_unified_tls_ssl_decryption} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectUnifiedTlsSslDecryptionConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectUnifiedTlsSslDecryptionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_unified_tls_ssl_decryption',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundleString = config.bundleString;
    this._certificateLifetime = config.certificateLifetime;
    this._certificateRevocationStatus = config.certificateRevocationStatus;
    this._defaultCaCertificateBundle = config.defaultCaCertificateBundle;
    this._description = config.description;
    this._ecKeyType = config.ecKeyType;
    this._expiredCertificate = config.expiredCertificate;
    this._failureMode = config.failureMode;
    this._featureProfileId = config.featureProfileId;
    this._fileName = config.fileName;
    this._minimalTlsVer = config.minimalTlsVer;
    this._name = config.name;
    this._rsaKeypairModules = config.rsaKeypairModules;
    this._unknownRevocationStatus = config.unknownRevocationStatus;
    this._unsupportedCipherSuites = config.unsupportedCipherSuites;
    this._unsupportedProtocolVersions = config.unsupportedProtocolVersions;
    this._untrustedCertificate = config.untrustedCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_string - computed: false, optional: true, required: false
  private _bundleString?: string; 
  public get bundleString() {
    return this.getStringAttribute('bundle_string');
  }
  public set bundleString(value: string) {
    this._bundleString = value;
  }
  public resetBundleString() {
    this._bundleString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleStringInput() {
    return this._bundleString;
  }

  // certificate_lifetime - computed: false, optional: false, required: true
  private _certificateLifetime?: string; 
  public get certificateLifetime() {
    return this.getStringAttribute('certificate_lifetime');
  }
  public set certificateLifetime(value: string) {
    this._certificateLifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateLifetimeInput() {
    return this._certificateLifetime;
  }

  // certificate_revocation_status - computed: false, optional: false, required: true
  private _certificateRevocationStatus?: string; 
  public get certificateRevocationStatus() {
    return this.getStringAttribute('certificate_revocation_status');
  }
  public set certificateRevocationStatus(value: string) {
    this._certificateRevocationStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRevocationStatusInput() {
    return this._certificateRevocationStatus;
  }

  // default_ca_certificate_bundle - computed: false, optional: true, required: false
  private _defaultCaCertificateBundle?: boolean | cdktf.IResolvable; 
  public get defaultCaCertificateBundle() {
    return this.getBooleanAttribute('default_ca_certificate_bundle');
  }
  public set defaultCaCertificateBundle(value: boolean | cdktf.IResolvable) {
    this._defaultCaCertificateBundle = value;
  }
  public resetDefaultCaCertificateBundle() {
    this._defaultCaCertificateBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCaCertificateBundleInput() {
    return this._defaultCaCertificateBundle;
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

  // ec_key_type - computed: false, optional: false, required: true
  private _ecKeyType?: string; 
  public get ecKeyType() {
    return this.getStringAttribute('ec_key_type');
  }
  public set ecKeyType(value: string) {
    this._ecKeyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecKeyTypeInput() {
    return this._ecKeyType;
  }

  // expired_certificate - computed: false, optional: false, required: true
  private _expiredCertificate?: string; 
  public get expiredCertificate() {
    return this.getStringAttribute('expired_certificate');
  }
  public set expiredCertificate(value: string) {
    this._expiredCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredCertificateInput() {
    return this._expiredCertificate;
  }

  // failure_mode - computed: false, optional: false, required: true
  private _failureMode?: string; 
  public get failureMode() {
    return this.getStringAttribute('failure_mode');
  }
  public set failureMode(value: string) {
    this._failureMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureModeInput() {
    return this._failureMode;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimal_tls_ver - computed: false, optional: false, required: true
  private _minimalTlsVer?: string; 
  public get minimalTlsVer() {
    return this.getStringAttribute('minimal_tls_ver');
  }
  public set minimalTlsVer(value: string) {
    this._minimalTlsVer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalTlsVerInput() {
    return this._minimalTlsVer;
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

  // rsa_keypair_modules - computed: false, optional: false, required: true
  private _rsaKeypairModules?: string; 
  public get rsaKeypairModules() {
    return this.getStringAttribute('rsa_keypair_modules');
  }
  public set rsaKeypairModules(value: string) {
    this._rsaKeypairModules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaKeypairModulesInput() {
    return this._rsaKeypairModules;
  }

  // unknown_revocation_status - computed: false, optional: true, required: false
  private _unknownRevocationStatus?: string; 
  public get unknownRevocationStatus() {
    return this.getStringAttribute('unknown_revocation_status');
  }
  public set unknownRevocationStatus(value: string) {
    this._unknownRevocationStatus = value;
  }
  public resetUnknownRevocationStatus() {
    this._unknownRevocationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownRevocationStatusInput() {
    return this._unknownRevocationStatus;
  }

  // unsupported_cipher_suites - computed: false, optional: false, required: true
  private _unsupportedCipherSuites?: string; 
  public get unsupportedCipherSuites() {
    return this.getStringAttribute('unsupported_cipher_suites');
  }
  public set unsupportedCipherSuites(value: string) {
    this._unsupportedCipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedCipherSuitesInput() {
    return this._unsupportedCipherSuites;
  }

  // unsupported_protocol_versions - computed: false, optional: false, required: true
  private _unsupportedProtocolVersions?: string; 
  public get unsupportedProtocolVersions() {
    return this.getStringAttribute('unsupported_protocol_versions');
  }
  public set unsupportedProtocolVersions(value: string) {
    this._unsupportedProtocolVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedProtocolVersionsInput() {
    return this._unsupportedProtocolVersions;
  }

  // untrusted_certificate - computed: false, optional: false, required: true
  private _untrustedCertificate?: string; 
  public get untrustedCertificate() {
    return this.getStringAttribute('untrusted_certificate');
  }
  public set untrustedCertificate(value: string) {
    this._untrustedCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedCertificateInput() {
    return this._untrustedCertificate;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_string: cdktf.stringToTerraform(this._bundleString),
      certificate_lifetime: cdktf.stringToTerraform(this._certificateLifetime),
      certificate_revocation_status: cdktf.stringToTerraform(this._certificateRevocationStatus),
      default_ca_certificate_bundle: cdktf.booleanToTerraform(this._defaultCaCertificateBundle),
      description: cdktf.stringToTerraform(this._description),
      ec_key_type: cdktf.stringToTerraform(this._ecKeyType),
      expired_certificate: cdktf.stringToTerraform(this._expiredCertificate),
      failure_mode: cdktf.stringToTerraform(this._failureMode),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      file_name: cdktf.stringToTerraform(this._fileName),
      minimal_tls_ver: cdktf.stringToTerraform(this._minimalTlsVer),
      name: cdktf.stringToTerraform(this._name),
      rsa_keypair_modules: cdktf.stringToTerraform(this._rsaKeypairModules),
      unknown_revocation_status: cdktf.stringToTerraform(this._unknownRevocationStatus),
      unsupported_cipher_suites: cdktf.stringToTerraform(this._unsupportedCipherSuites),
      unsupported_protocol_versions: cdktf.stringToTerraform(this._unsupportedProtocolVersions),
      untrusted_certificate: cdktf.stringToTerraform(this._untrustedCertificate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_string: {
        value: cdktf.stringToHclTerraform(this._bundleString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_lifetime: {
        value: cdktf.stringToHclTerraform(this._certificateLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_revocation_status: {
        value: cdktf.stringToHclTerraform(this._certificateRevocationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ca_certificate_bundle: {
        value: cdktf.booleanToHclTerraform(this._defaultCaCertificateBundle),
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
      ec_key_type: {
        value: cdktf.stringToHclTerraform(this._ecKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expired_certificate: {
        value: cdktf.stringToHclTerraform(this._expiredCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_mode: {
        value: cdktf.stringToHclTerraform(this._failureMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimal_tls_ver: {
        value: cdktf.stringToHclTerraform(this._minimalTlsVer),
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
      rsa_keypair_modules: {
        value: cdktf.stringToHclTerraform(this._rsaKeypairModules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_revocation_status: {
        value: cdktf.stringToHclTerraform(this._unknownRevocationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsupported_cipher_suites: {
        value: cdktf.stringToHclTerraform(this._unsupportedCipherSuites),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsupported_protocol_versions: {
        value: cdktf.stringToHclTerraform(this._unsupportedProtocolVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      untrusted_certificate: {
        value: cdktf.stringToHclTerraform(this._untrustedCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
