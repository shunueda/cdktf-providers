// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/kms_key_material_parameters_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudKmsKeyMaterialParametersV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/kms_key_material_parameters_v1#id DataOpentelekomcloudKmsKeyMaterialParametersV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/kms_key_material_parameters_v1#key_id DataOpentelekomcloudKmsKeyMaterialParametersV1#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/kms_key_material_parameters_v1#sequence DataOpentelekomcloudKmsKeyMaterialParametersV1#sequence}
  */
  readonly sequence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/kms_key_material_parameters_v1#wrapping_algorithm DataOpentelekomcloudKmsKeyMaterialParametersV1#wrapping_algorithm}
  */
  readonly wrappingAlgorithm: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/kms_key_material_parameters_v1 opentelekomcloud_kms_key_material_parameters_v1}
*/
export class DataOpentelekomcloudKmsKeyMaterialParametersV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_kms_key_material_parameters_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudKmsKeyMaterialParametersV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudKmsKeyMaterialParametersV1 to import
  * @param importFromId The id of the existing DataOpentelekomcloudKmsKeyMaterialParametersV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/kms_key_material_parameters_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudKmsKeyMaterialParametersV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_kms_key_material_parameters_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/kms_key_material_parameters_v1 opentelekomcloud_kms_key_material_parameters_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudKmsKeyMaterialParametersV1Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudKmsKeyMaterialParametersV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_kms_key_material_parameters_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.53',
        providerVersionConstraint: '1.36.53'
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
    this._sequence = config.sequence;
    this._wrappingAlgorithm = config.wrappingAlgorithm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getNumberAttribute('expiration_time');
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

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // sequence - computed: false, optional: true, required: false
  private _sequence?: string; 
  public get sequence() {
    return this.getStringAttribute('sequence');
  }
  public set sequence(value: string) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      sequence: cdktf.stringToTerraform(this._sequence),
      wrapping_algorithm: cdktf.stringToTerraform(this._wrappingAlgorithm),
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
      sequence: {
        value: cdktf.stringToHclTerraform(this._sequence),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
