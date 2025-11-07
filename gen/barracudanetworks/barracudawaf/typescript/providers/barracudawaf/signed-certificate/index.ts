// https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignedCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#allow_private_key_export SignedCertificate#allow_private_key_export}
  */
  readonly allowPrivateKeyExport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#assign_associated_key SignedCertificate#assign_associated_key}
  */
  readonly assignAssociatedKey?: string;
  /**
  * None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#auto_renew_cert SignedCertificate#auto_renew_cert}
  */
  readonly autoRenewCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#certificate_key SignedCertificate#certificate_key}
  */
  readonly certificateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#certificate_password SignedCertificate#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#certificate_type SignedCertificate#certificate_type}
  */
  readonly certificateType?: string;
  /**
  * Common Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#common_name SignedCertificate#common_name}
  */
  readonly commonName?: string;
  /**
  * A Certificate Signing Request (CSR) and/or Certificate can be downloaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#download_type SignedCertificate#download_type}
  */
  readonly downloadType?: string;
  /**
  * Encryption Password is used to extract the private key from PKCS #12 token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#encrypt_password SignedCertificate#encrypt_password}
  */
  readonly encryptPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#expiry SignedCertificate#expiry}
  */
  readonly expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#id SignedCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Intermediary Certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#intermediary_certificates SignedCertificate#intermediary_certificates}
  */
  readonly intermediaryCertificates?: string[];
  /**
  * Select Key Type:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#key_type SignedCertificate#key_type}
  */
  readonly keyType?: string;
  /**
  * Certificate Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#name SignedCertificate#name}
  */
  readonly name?: string;
  /**
  * None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#schedule_renewal_day SignedCertificate#schedule_renewal_day}
  */
  readonly scheduleRenewalDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#serial SignedCertificate#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#signed_certificate SignedCertificate#signed_certificate}
  */
  readonly signedCertificate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate barracudawaf_signed_certificate}
*/
export class SignedCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "barracudawaf_signed_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SignedCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SignedCertificate to import
  * @param importFromId The id of the existing SignedCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SignedCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "barracudawaf_signed_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/signed_certificate barracudawaf_signed_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignedCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SignedCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'barracudawaf_signed_certificate',
      terraformGeneratorMetadata: {
        providerName: 'barracudawaf',
        providerVersion: '1.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowPrivateKeyExport = config.allowPrivateKeyExport;
    this._assignAssociatedKey = config.assignAssociatedKey;
    this._autoRenewCert = config.autoRenewCert;
    this._certificateKey = config.certificateKey;
    this._certificatePassword = config.certificatePassword;
    this._certificateType = config.certificateType;
    this._commonName = config.commonName;
    this._downloadType = config.downloadType;
    this._encryptPassword = config.encryptPassword;
    this._expiry = config.expiry;
    this._id = config.id;
    this._intermediaryCertificates = config.intermediaryCertificates;
    this._keyType = config.keyType;
    this._name = config.name;
    this._scheduleRenewalDay = config.scheduleRenewalDay;
    this._serial = config.serial;
    this._signedCertificate = config.signedCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_private_key_export - computed: false, optional: true, required: false
  private _allowPrivateKeyExport?: string; 
  public get allowPrivateKeyExport() {
    return this.getStringAttribute('allow_private_key_export');
  }
  public set allowPrivateKeyExport(value: string) {
    this._allowPrivateKeyExport = value;
  }
  public resetAllowPrivateKeyExport() {
    this._allowPrivateKeyExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivateKeyExportInput() {
    return this._allowPrivateKeyExport;
  }

  // assign_associated_key - computed: false, optional: true, required: false
  private _assignAssociatedKey?: string; 
  public get assignAssociatedKey() {
    return this.getStringAttribute('assign_associated_key');
  }
  public set assignAssociatedKey(value: string) {
    this._assignAssociatedKey = value;
  }
  public resetAssignAssociatedKey() {
    this._assignAssociatedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignAssociatedKeyInput() {
    return this._assignAssociatedKey;
  }

  // auto_renew_cert - computed: false, optional: true, required: false
  private _autoRenewCert?: string; 
  public get autoRenewCert() {
    return this.getStringAttribute('auto_renew_cert');
  }
  public set autoRenewCert(value: string) {
    this._autoRenewCert = value;
  }
  public resetAutoRenewCert() {
    this._autoRenewCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewCertInput() {
    return this._autoRenewCert;
  }

  // certificate_key - computed: false, optional: true, required: false
  private _certificateKey?: string; 
  public get certificateKey() {
    return this.getStringAttribute('certificate_key');
  }
  public set certificateKey(value: string) {
    this._certificateKey = value;
  }
  public resetCertificateKey() {
    this._certificateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateKeyInput() {
    return this._certificateKey;
  }

  // certificate_password - computed: false, optional: true, required: false
  private _certificatePassword?: string; 
  public get certificatePassword() {
    return this.getStringAttribute('certificate_password');
  }
  public set certificatePassword(value: string) {
    this._certificatePassword = value;
  }
  public resetCertificatePassword() {
    this._certificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePasswordInput() {
    return this._certificatePassword;
  }

  // certificate_type - computed: false, optional: true, required: false
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  public resetCertificateType() {
    this._certificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
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

  // download_type - computed: false, optional: true, required: false
  private _downloadType?: string; 
  public get downloadType() {
    return this.getStringAttribute('download_type');
  }
  public set downloadType(value: string) {
    this._downloadType = value;
  }
  public resetDownloadType() {
    this._downloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadTypeInput() {
    return this._downloadType;
  }

  // encrypt_password - computed: false, optional: true, required: false
  private _encryptPassword?: string; 
  public get encryptPassword() {
    return this.getStringAttribute('encrypt_password');
  }
  public set encryptPassword(value: string) {
    this._encryptPassword = value;
  }
  public resetEncryptPassword() {
    this._encryptPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptPasswordInput() {
    return this._encryptPassword;
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
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

  // intermediary_certificates - computed: false, optional: true, required: false
  private _intermediaryCertificates?: string[]; 
  public get intermediaryCertificates() {
    return this.getListAttribute('intermediary_certificates');
  }
  public set intermediaryCertificates(value: string[]) {
    this._intermediaryCertificates = value;
  }
  public resetIntermediaryCertificates() {
    this._intermediaryCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediaryCertificatesInput() {
    return this._intermediaryCertificates;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schedule_renewal_day - computed: false, optional: true, required: false
  private _scheduleRenewalDay?: string; 
  public get scheduleRenewalDay() {
    return this.getStringAttribute('schedule_renewal_day');
  }
  public set scheduleRenewalDay(value: string) {
    this._scheduleRenewalDay = value;
  }
  public resetScheduleRenewalDay() {
    this._scheduleRenewalDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleRenewalDayInput() {
    return this._scheduleRenewalDay;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // signed_certificate - computed: false, optional: true, required: false
  private _signedCertificate?: string; 
  public get signedCertificate() {
    return this.getStringAttribute('signed_certificate');
  }
  public set signedCertificate(value: string) {
    this._signedCertificate = value;
  }
  public resetSignedCertificate() {
    this._signedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedCertificateInput() {
    return this._signedCertificate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_private_key_export: cdktf.stringToTerraform(this._allowPrivateKeyExport),
      assign_associated_key: cdktf.stringToTerraform(this._assignAssociatedKey),
      auto_renew_cert: cdktf.stringToTerraform(this._autoRenewCert),
      certificate_key: cdktf.stringToTerraform(this._certificateKey),
      certificate_password: cdktf.stringToTerraform(this._certificatePassword),
      certificate_type: cdktf.stringToTerraform(this._certificateType),
      common_name: cdktf.stringToTerraform(this._commonName),
      download_type: cdktf.stringToTerraform(this._downloadType),
      encrypt_password: cdktf.stringToTerraform(this._encryptPassword),
      expiry: cdktf.stringToTerraform(this._expiry),
      id: cdktf.stringToTerraform(this._id),
      intermediary_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intermediaryCertificates),
      key_type: cdktf.stringToTerraform(this._keyType),
      name: cdktf.stringToTerraform(this._name),
      schedule_renewal_day: cdktf.stringToTerraform(this._scheduleRenewalDay),
      serial: cdktf.stringToTerraform(this._serial),
      signed_certificate: cdktf.stringToTerraform(this._signedCertificate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_private_key_export: {
        value: cdktf.stringToHclTerraform(this._allowPrivateKeyExport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assign_associated_key: {
        value: cdktf.stringToHclTerraform(this._assignAssociatedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew_cert: {
        value: cdktf.stringToHclTerraform(this._autoRenewCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_key: {
        value: cdktf.stringToHclTerraform(this._certificateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_password: {
        value: cdktf.stringToHclTerraform(this._certificatePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_type: {
        value: cdktf.stringToHclTerraform(this._certificateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_type: {
        value: cdktf.stringToHclTerraform(this._downloadType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_password: {
        value: cdktf.stringToHclTerraform(this._encryptPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry: {
        value: cdktf.stringToHclTerraform(this._expiry),
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
      intermediary_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intermediaryCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
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
      schedule_renewal_day: {
        value: cdktf.stringToHclTerraform(this._scheduleRenewalDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signed_certificate: {
        value: cdktf.stringToHclTerraform(this._signedCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
