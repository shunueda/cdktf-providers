// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/cm_certificate_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexCmCertificateContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/cm_certificate_content#certificate_id DataYandexCmCertificateContent#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/cm_certificate_content#folder_id DataYandexCmCertificateContent#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/cm_certificate_content#id DataYandexCmCertificateContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Certificate name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/cm_certificate_content#name DataYandexCmCertificateContent#name}
  */
  readonly name?: string;
  /**
  * Format in which you want to export the private_key: `"PKCS1"` or `"PKCS8"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/cm_certificate_content#private_key_format DataYandexCmCertificateContent#private_key_format}
  */
  readonly privateKeyFormat?: string;
  /**
  * If `true`, the operation won't be completed while the certificate is in `VALIDATING`. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/cm_certificate_content#wait_validation DataYandexCmCertificateContent#wait_validation}
  */
  readonly waitValidation?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/cm_certificate_content yandex_cm_certificate_content}
*/
export class DataYandexCmCertificateContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_cm_certificate_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexCmCertificateContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexCmCertificateContent to import
  * @param importFromId The id of the existing DataYandexCmCertificateContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/cm_certificate_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexCmCertificateContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_cm_certificate_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/cm_certificate_content yandex_cm_certificate_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexCmCertificateContentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexCmCertificateContentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_cm_certificate_content',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
    this._privateKeyFormat = config.privateKeyFormat;
    this._waitValidation = config.waitValidation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // certificates - computed: true, optional: false, required: false
  public get certificates() {
    return this.getListAttribute('certificates');
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_format - computed: false, optional: true, required: false
  private _privateKeyFormat?: string; 
  public get privateKeyFormat() {
    return this.getStringAttribute('private_key_format');
  }
  public set privateKeyFormat(value: string) {
    this._privateKeyFormat = value;
  }
  public resetPrivateKeyFormat() {
    this._privateKeyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFormatInput() {
    return this._privateKeyFormat;
  }

  // wait_validation - computed: false, optional: true, required: false
  private _waitValidation?: boolean | cdktf.IResolvable; 
  public get waitValidation() {
    return this.getBooleanAttribute('wait_validation');
  }
  public set waitValidation(value: boolean | cdktf.IResolvable) {
    this._waitValidation = value;
  }
  public resetWaitValidation() {
    this._waitValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitValidationInput() {
    return this._waitValidation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_key_format: cdktf.stringToTerraform(this._privateKeyFormat),
      wait_validation: cdktf.booleanToTerraform(this._waitValidation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_format: {
        value: cdktf.stringToHclTerraform(this._privateKeyFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_validation: {
        value: cdktf.booleanToHclTerraform(this._waitValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
