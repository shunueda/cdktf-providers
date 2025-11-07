// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/kms_key_material_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyMaterialV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/kms_key_material_v1#encrypted_key_material KmsKeyMaterialV1#encrypted_key_material}
  */
  readonly encryptedKeyMaterial: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/kms_key_material_v1#expiration_time KmsKeyMaterialV1#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/kms_key_material_v1#id KmsKeyMaterialV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/kms_key_material_v1#import_token KmsKeyMaterialV1#import_token}
  */
  readonly importToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/kms_key_material_v1#key_id KmsKeyMaterialV1#key_id}
  */
  readonly keyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/kms_key_material_v1 opentelekomcloud_kms_key_material_v1}
*/
export class KmsKeyMaterialV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_kms_key_material_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsKeyMaterialV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsKeyMaterialV1 to import
  * @param importFromId The id of the existing KmsKeyMaterialV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/kms_key_material_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsKeyMaterialV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_kms_key_material_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/kms_key_material_v1 opentelekomcloud_kms_key_material_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsKeyMaterialV1Config
  */
  public constructor(scope: Construct, id: string, config: KmsKeyMaterialV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_kms_key_material_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._encryptedKeyMaterial = config.encryptedKeyMaterial;
    this._expirationTime = config.expirationTime;
    this._id = config.id;
    this._importToken = config.importToken;
    this._keyId = config.keyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encrypted_key_material - computed: false, optional: false, required: true
  private _encryptedKeyMaterial?: string; 
  public get encryptedKeyMaterial() {
    return this.getStringAttribute('encrypted_key_material');
  }
  public set encryptedKeyMaterial(value: string) {
    this._encryptedKeyMaterial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedKeyMaterialInput() {
    return this._encryptedKeyMaterial;
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
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

  // import_token - computed: false, optional: false, required: true
  private _importToken?: string; 
  public get importToken() {
    return this.getStringAttribute('import_token');
  }
  public set importToken(value: string) {
    this._importToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importTokenInput() {
    return this._importToken;
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

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encrypted_key_material: cdktf.stringToTerraform(this._encryptedKeyMaterial),
      expiration_time: cdktf.stringToTerraform(this._expirationTime),
      id: cdktf.stringToTerraform(this._id),
      import_token: cdktf.stringToTerraform(this._importToken),
      key_id: cdktf.stringToTerraform(this._keyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encrypted_key_material: {
        value: cdktf.stringToHclTerraform(this._encryptedKeyMaterial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_time: {
        value: cdktf.stringToHclTerraform(this._expirationTime),
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
      import_token: {
        value: cdktf.stringToHclTerraform(this._importToken),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
