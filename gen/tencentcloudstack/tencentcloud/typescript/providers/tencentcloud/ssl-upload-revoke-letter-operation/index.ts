// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_upload_revoke_letter_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslUploadRevokeLetterOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_upload_revoke_letter_operation#certificate_id SslUploadRevokeLetterOperation#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_upload_revoke_letter_operation#id SslUploadRevokeLetterOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The format of the base64-encoded certificate confirmation letter file should be jpg, jpeg, png, or pdf, and the size should be between 1kb and 1.4M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_upload_revoke_letter_operation#revoke_letter SslUploadRevokeLetterOperation#revoke_letter}
  */
  readonly revokeLetter: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_upload_revoke_letter_operation tencentcloud_ssl_upload_revoke_letter_operation}
*/
export class SslUploadRevokeLetterOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_upload_revoke_letter_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslUploadRevokeLetterOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslUploadRevokeLetterOperation to import
  * @param importFromId The id of the existing SslUploadRevokeLetterOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_upload_revoke_letter_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslUploadRevokeLetterOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_upload_revoke_letter_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_upload_revoke_letter_operation tencentcloud_ssl_upload_revoke_letter_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslUploadRevokeLetterOperationConfig
  */
  public constructor(scope: Construct, id: string, config: SslUploadRevokeLetterOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_upload_revoke_letter_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._id = config.id;
    this._revokeLetter = config.revokeLetter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
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

  // revoke_letter - computed: false, optional: false, required: true
  private _revokeLetter?: string; 
  public get revokeLetter() {
    return this.getStringAttribute('revoke_letter');
  }
  public set revokeLetter(value: string) {
    this._revokeLetter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeLetterInput() {
    return this._revokeLetter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      id: cdktf.stringToTerraform(this._id),
      revoke_letter: cdktf.stringToTerraform(this._revokeLetter),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoke_letter: {
        value: cdktf.stringToHclTerraform(this._revokeLetter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
