// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kms_get_parameters_for_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudKmsGetParametersForImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kms_get_parameters_for_import#id DataTencentcloudKmsGetParametersForImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * CMK unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kms_get_parameters_for_import#key_id DataTencentcloudKmsGetParametersForImport#key_id}
  */
  readonly keyId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kms_get_parameters_for_import#result_output_file DataTencentcloudKmsGetParametersForImport#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Specifies the algorithm for encrypting key material, currently supports RSAES_PKCS1_V1_5, RSAES_OAEP_SHA_1, RSAES_OAEP_SHA_256.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kms_get_parameters_for_import#wrapping_algorithm DataTencentcloudKmsGetParametersForImport#wrapping_algorithm}
  */
  readonly wrappingAlgorithm: string;
  /**
  * Specifies the type of encryption key material, currently only supports RSA_2048.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kms_get_parameters_for_import#wrapping_key_spec DataTencentcloudKmsGetParametersForImport#wrapping_key_spec}
  */
  readonly wrappingKeySpec: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kms_get_parameters_for_import tencentcloud_kms_get_parameters_for_import}
*/
export class DataTencentcloudKmsGetParametersForImport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kms_get_parameters_for_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudKmsGetParametersForImport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudKmsGetParametersForImport to import
  * @param importFromId The id of the existing DataTencentcloudKmsGetParametersForImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kms_get_parameters_for_import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudKmsGetParametersForImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kms_get_parameters_for_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/kms_get_parameters_for_import tencentcloud_kms_get_parameters_for_import} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudKmsGetParametersForImportConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudKmsGetParametersForImportConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kms_get_parameters_for_import',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._keyId = config.keyId;
    this._resultOutputFile = config.resultOutputFile;
    this._wrappingAlgorithm = config.wrappingAlgorithm;
    this._wrappingKeySpec = config.wrappingKeySpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // import_token - computed: true, optional: false, required: false
  public get importToken() {
    return this.getStringAttribute('import_token');
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // parameters_valid_to - computed: true, optional: false, required: false
  public get parametersValidTo() {
    return this.getNumberAttribute('parameters_valid_to');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // wrapping_algorithm - computed: false, optional: false, required: true
  private _wrappingAlgorithm?: string; 
  public get wrappingAlgorithm() {
    return this.getStringAttribute('wrapping_algorithm');
  }
  public set wrappingAlgorithm(value: string) {
    this._wrappingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappingAlgorithmInput() {
    return this._wrappingAlgorithm;
  }

  // wrapping_key_spec - computed: false, optional: false, required: true
  private _wrappingKeySpec?: string; 
  public get wrappingKeySpec() {
    return this.getStringAttribute('wrapping_key_spec');
  }
  public set wrappingKeySpec(value: string) {
    this._wrappingKeySpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappingKeySpecInput() {
    return this._wrappingKeySpec;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      wrapping_algorithm: cdktf.stringToTerraform(this._wrappingAlgorithm),
      wrapping_key_spec: cdktf.stringToTerraform(this._wrappingKeySpec),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wrapping_algorithm: {
        value: cdktf.stringToHclTerraform(this._wrappingAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wrapping_key_spec: {
        value: cdktf.stringToHclTerraform(this._wrappingKeySpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
