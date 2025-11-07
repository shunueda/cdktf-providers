// https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/letsencrypt_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LetsencryptCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set Yes, Private Key gets downloaded along with the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/letsencrypt_certificate#allow_private_key_export LetsencryptCertificate#allow_private_key_export}
  */
  readonly allowPrivateKeyExport?: string;
  /**
  * Auto Renew Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/letsencrypt_certificate#auto_renew_cert LetsencryptCertificate#auto_renew_cert}
  */
  readonly autoRenewCert?: string;
  /**
  * Common Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/letsencrypt_certificate#common_name LetsencryptCertificate#common_name}
  */
  readonly commonName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/letsencrypt_certificate#id LetsencryptCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Service Name for LetsEncrypt certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/letsencrypt_certificate#multi_cert_trusted_service LetsencryptCertificate#multi_cert_trusted_service}
  */
  readonly multiCertTrustedService: string;
  /**
  * Policy Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/letsencrypt_certificate#name LetsencryptCertificate#name}
  */
  readonly name: string;
  /**
  * Subject Alternative Names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/letsencrypt_certificate#san_cert LetsencryptCertificate#san_cert}
  */
  readonly sanCert?: string[];
  /**
  * Renew Certificate days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/letsencrypt_certificate#schedule_renewal_day LetsencryptCertificate#schedule_renewal_day}
  */
  readonly scheduleRenewalDay?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/letsencrypt_certificate barracudawaf_letsencrypt_certificate}
*/
export class LetsencryptCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "barracudawaf_letsencrypt_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LetsencryptCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LetsencryptCertificate to import
  * @param importFromId The id of the existing LetsencryptCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/letsencrypt_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LetsencryptCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "barracudawaf_letsencrypt_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/letsencrypt_certificate barracudawaf_letsencrypt_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LetsencryptCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: LetsencryptCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'barracudawaf_letsencrypt_certificate',
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
    this._autoRenewCert = config.autoRenewCert;
    this._commonName = config.commonName;
    this._id = config.id;
    this._multiCertTrustedService = config.multiCertTrustedService;
    this._name = config.name;
    this._sanCert = config.sanCert;
    this._scheduleRenewalDay = config.scheduleRenewalDay;
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

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
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

  // multi_cert_trusted_service - computed: false, optional: false, required: true
  private _multiCertTrustedService?: string; 
  public get multiCertTrustedService() {
    return this.getStringAttribute('multi_cert_trusted_service');
  }
  public set multiCertTrustedService(value: string) {
    this._multiCertTrustedService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiCertTrustedServiceInput() {
    return this._multiCertTrustedService;
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

  // san_cert - computed: false, optional: true, required: false
  private _sanCert?: string[]; 
  public get sanCert() {
    return this.getListAttribute('san_cert');
  }
  public set sanCert(value: string[]) {
    this._sanCert = value;
  }
  public resetSanCert() {
    this._sanCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanCertInput() {
    return this._sanCert;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_private_key_export: cdktf.stringToTerraform(this._allowPrivateKeyExport),
      auto_renew_cert: cdktf.stringToTerraform(this._autoRenewCert),
      common_name: cdktf.stringToTerraform(this._commonName),
      id: cdktf.stringToTerraform(this._id),
      multi_cert_trusted_service: cdktf.stringToTerraform(this._multiCertTrustedService),
      name: cdktf.stringToTerraform(this._name),
      san_cert: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sanCert),
      schedule_renewal_day: cdktf.stringToTerraform(this._scheduleRenewalDay),
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
      auto_renew_cert: {
        value: cdktf.stringToHclTerraform(this._autoRenewCert),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_cert_trusted_service: {
        value: cdktf.stringToHclTerraform(this._multiCertTrustedService),
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
      san_cert: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sanCert),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      schedule_renewal_day: {
        value: cdktf.stringToHclTerraform(this._scheduleRenewalDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
