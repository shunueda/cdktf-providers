// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ssl_download_certificate_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslDownloadCertificateOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ssl_download_certificate_operation#certificate_id SslDownloadCertificateOperation#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ssl_download_certificate_operation#id SslDownloadCertificateOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ssl_download_certificate_operation#output_path SslDownloadCertificateOperation#output_path}
  */
  readonly outputPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ssl_download_certificate_operation tencentcloud_ssl_download_certificate_operation}
*/
export class SslDownloadCertificateOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_download_certificate_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslDownloadCertificateOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslDownloadCertificateOperation to import
  * @param importFromId The id of the existing SslDownloadCertificateOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ssl_download_certificate_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslDownloadCertificateOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_download_certificate_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ssl_download_certificate_operation tencentcloud_ssl_download_certificate_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslDownloadCertificateOperationConfig
  */
  public constructor(scope: Construct, id: string, config: SslDownloadCertificateOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_download_certificate_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._outputPath = config.outputPath;
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

  // output_path - computed: false, optional: false, required: true
  private _outputPath?: string; 
  public get outputPath() {
    return this.getStringAttribute('output_path');
  }
  public set outputPath(value: string) {
    this._outputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPathInput() {
    return this._outputPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      id: cdktf.stringToTerraform(this._id),
      output_path: cdktf.stringToTerraform(this._outputPath),
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
      output_path: {
        value: cdktf.stringToHclTerraform(this._outputPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
