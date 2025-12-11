// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ssm_secret_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmSecretVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ssm_secret_version#id SsmSecretVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The base64-encoded binary secret. secret_binary and secret_string must be set only one, and the maximum support is 4096 bytes. When secret status is `Disabled`, this field will not update anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ssm_secret_version#secret_binary SsmSecretVersion#secret_binary}
  */
  readonly secretBinary?: string;
  /**
  * Name of secret which cannot be repeated in the same region. The maximum length is 128 bytes. The name can only contain English letters, numbers, underscore and hyphen '-'. The first character must be a letter or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ssm_secret_version#secret_name SsmSecretVersion#secret_name}
  */
  readonly secretName: string;
  /**
  * The string text of secret. secret_binary and secret_string must be set only one, and the maximum support is 4096 bytes. When secret status is `Disabled`, this field will not update anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ssm_secret_version#secret_string SsmSecretVersion#secret_string}
  */
  readonly secretString?: string;
  /**
  * Version of secret. The maximum length is 64 bytes. The version_id can only contain English letters, numbers, underscore and hyphen '-'. The first character must be a letter or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ssm_secret_version#version_id SsmSecretVersion#version_id}
  */
  readonly versionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ssm_secret_version tencentcloud_ssm_secret_version}
*/
export class SsmSecretVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssm_secret_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsmSecretVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmSecretVersion to import
  * @param importFromId The id of the existing SsmSecretVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ssm_secret_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmSecretVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssm_secret_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ssm_secret_version tencentcloud_ssm_secret_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmSecretVersionConfig
  */
  public constructor(scope: Construct, id: string, config: SsmSecretVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssm_secret_version',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._secretBinary = config.secretBinary;
    this._secretName = config.secretName;
    this._secretString = config.secretString;
    this._versionId = config.versionId;
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

  // secret_binary - computed: false, optional: true, required: false
  private _secretBinary?: string; 
  public get secretBinary() {
    return this.getStringAttribute('secret_binary');
  }
  public set secretBinary(value: string) {
    this._secretBinary = value;
  }
  public resetSecretBinary() {
    this._secretBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretBinaryInput() {
    return this._secretBinary;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
  }

  // version_id - computed: false, optional: false, required: true
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      secret_binary: cdktf.stringToTerraform(this._secretBinary),
      secret_name: cdktf.stringToTerraform(this._secretName),
      secret_string: cdktf.stringToTerraform(this._secretString),
      version_id: cdktf.stringToTerraform(this._versionId),
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
      secret_binary: {
        value: cdktf.stringToHclTerraform(this._secretBinary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_string: {
        value: cdktf.stringToHclTerraform(this._secretString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_id: {
        value: cdktf.stringToHclTerraform(this._versionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
