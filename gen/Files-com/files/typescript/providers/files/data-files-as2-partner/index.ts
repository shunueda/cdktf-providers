// https://registry.terraform.io/providers/files-com/files/0.1.419/docs/data-sources/as2_partner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesAs2PartnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the AS2 Partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/data-sources/as2_partner#id DataFilesAs2Partner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/data-sources/as2_partner files_as2_partner}
*/
export class DataFilesAs2Partner extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_as2_partner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesAs2Partner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesAs2Partner to import
  * @param importFromId The id of the existing DataFilesAs2Partner that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/data-sources/as2_partner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesAs2Partner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_as2_partner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/data-sources/as2_partner files_as2_partner} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesAs2PartnerConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesAs2PartnerConfig) {
    super(scope, id, {
      terraformResourceType: 'files_as2_partner',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.419',
        providerVersionConstraint: '0.1.419'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_http_headers - computed: true, optional: false, required: false
  private _additionalHttpHeaders = new cdktf.AnyMap(this, "additional_http_headers");
  public get additionalHttpHeaders() {
    return this._additionalHttpHeaders;
  }

  // as2_station_id - computed: true, optional: false, required: false
  public get as2StationId() {
    return this.getNumberAttribute('as2_station_id');
  }

  // default_mime_type - computed: true, optional: false, required: false
  public get defaultMimeType() {
    return this.getStringAttribute('default_mime_type');
  }

  // enable_dedicated_ips - computed: true, optional: false, required: false
  public get enableDedicatedIps() {
    return this.getBooleanAttribute('enable_dedicated_ips');
  }

  // hex_public_certificate_serial - computed: true, optional: false, required: false
  public get hexPublicCertificateSerial() {
    return this.getStringAttribute('hex_public_certificate_serial');
  }

  // http_auth_username - computed: true, optional: false, required: false
  public get httpAuthUsername() {
    return this.getStringAttribute('http_auth_username');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mdn_validation_level - computed: true, optional: false, required: false
  public get mdnValidationLevel() {
    return this.getStringAttribute('mdn_validation_level');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_certificate - computed: true, optional: false, required: false
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }

  // public_certificate_issuer - computed: true, optional: false, required: false
  public get publicCertificateIssuer() {
    return this.getStringAttribute('public_certificate_issuer');
  }

  // public_certificate_md5 - computed: true, optional: false, required: false
  public get publicCertificateMd5() {
    return this.getStringAttribute('public_certificate_md5');
  }

  // public_certificate_not_after - computed: true, optional: false, required: false
  public get publicCertificateNotAfter() {
    return this.getStringAttribute('public_certificate_not_after');
  }

  // public_certificate_not_before - computed: true, optional: false, required: false
  public get publicCertificateNotBefore() {
    return this.getStringAttribute('public_certificate_not_before');
  }

  // public_certificate_serial - computed: true, optional: false, required: false
  public get publicCertificateSerial() {
    return this.getStringAttribute('public_certificate_serial');
  }

  // public_certificate_subject - computed: true, optional: false, required: false
  public get publicCertificateSubject() {
    return this.getStringAttribute('public_certificate_subject');
  }

  // server_certificate - computed: true, optional: false, required: false
  public get serverCertificate() {
    return this.getStringAttribute('server_certificate');
  }

  // signature_validation_level - computed: true, optional: false, required: false
  public get signatureValidationLevel() {
    return this.getStringAttribute('signature_validation_level');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
