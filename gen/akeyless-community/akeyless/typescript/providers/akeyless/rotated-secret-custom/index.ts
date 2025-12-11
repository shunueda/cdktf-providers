// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RotatedSecretCustomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom#auto_rotate RotatedSecretCustom#auto_rotate}
  */
  readonly autoRotate?: string;
  /**
  * Secret payload to be sent with rotation request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom#custom_payload RotatedSecretCustom#custom_payload}
  */
  readonly customPayload?: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom#description RotatedSecretCustom#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom#id RotatedSecretCustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of a key that is used to encrypt the secret value (if empty, the account default protectionKey key will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom#key RotatedSecretCustom#key}
  */
  readonly key?: string;
  /**
  * Secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom#name RotatedSecretCustom#name}
  */
  readonly name: string;
  /**
  * The length of the password to be generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom#password_length RotatedSecretCustom#password_length}
  */
  readonly passwordLength?: string;
  /**
  * The Hour of the rotation in UTC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom#rotation_hour RotatedSecretCustom#rotation_hour}
  */
  readonly rotationHour?: number;
  /**
  * The number of days to wait between every automatic rotation (1-365),custom rotator interval will be set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom#rotation_interval RotatedSecretCustom#rotation_interval}
  */
  readonly rotationInterval?: string;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom#tags RotatedSecretCustom#tags}
  */
  readonly tags?: string[];
  /**
  * The target name to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom#target_name RotatedSecretCustom#target_name}
  */
  readonly targetName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom akeyless_rotated_secret_custom}
*/
export class RotatedSecretCustom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_rotated_secret_custom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RotatedSecretCustom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RotatedSecretCustom to import
  * @param importFromId The id of the existing RotatedSecretCustom that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RotatedSecretCustom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_rotated_secret_custom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/rotated_secret_custom akeyless_rotated_secret_custom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RotatedSecretCustomConfig
  */
  public constructor(scope: Construct, id: string, config: RotatedSecretCustomConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_rotated_secret_custom',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRotate = config.autoRotate;
    this._customPayload = config.customPayload;
    this._description = config.description;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._passwordLength = config.passwordLength;
    this._rotationHour = config.rotationHour;
    this._rotationInterval = config.rotationInterval;
    this._tags = config.tags;
    this._targetName = config.targetName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_rotate - computed: false, optional: true, required: false
  private _autoRotate?: string; 
  public get autoRotate() {
    return this.getStringAttribute('auto_rotate');
  }
  public set autoRotate(value: string) {
    this._autoRotate = value;
  }
  public resetAutoRotate() {
    this._autoRotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRotateInput() {
    return this._autoRotate;
  }

  // custom_payload - computed: true, optional: true, required: false
  private _customPayload?: string; 
  public get customPayload() {
    return this.getStringAttribute('custom_payload');
  }
  public set customPayload(value: string) {
    this._customPayload = value;
  }
  public resetCustomPayload() {
    this._customPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // password_length - computed: false, optional: true, required: false
  private _passwordLength?: string; 
  public get passwordLength() {
    return this.getStringAttribute('password_length');
  }
  public set passwordLength(value: string) {
    this._passwordLength = value;
  }
  public resetPasswordLength() {
    this._passwordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLengthInput() {
    return this._passwordLength;
  }

  // rotation_hour - computed: false, optional: true, required: false
  private _rotationHour?: number; 
  public get rotationHour() {
    return this.getNumberAttribute('rotation_hour');
  }
  public set rotationHour(value: number) {
    this._rotationHour = value;
  }
  public resetRotationHour() {
    this._rotationHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationHourInput() {
    return this._rotationHour;
  }

  // rotation_interval - computed: false, optional: true, required: false
  private _rotationInterval?: string; 
  public get rotationInterval() {
    return this.getStringAttribute('rotation_interval');
  }
  public set rotationInterval(value: string) {
    this._rotationInterval = value;
  }
  public resetRotationInterval() {
    this._rotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInput() {
    return this._rotationInterval;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_rotate: cdktf.stringToTerraform(this._autoRotate),
      custom_payload: cdktf.stringToTerraform(this._customPayload),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      password_length: cdktf.stringToTerraform(this._passwordLength),
      rotation_hour: cdktf.numberToTerraform(this._rotationHour),
      rotation_interval: cdktf.stringToTerraform(this._rotationInterval),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_rotate: {
        value: cdktf.stringToHclTerraform(this._autoRotate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_payload: {
        value: cdktf.stringToHclTerraform(this._customPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      password_length: {
        value: cdktf.stringToHclTerraform(this._passwordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_hour: {
        value: cdktf.numberToHclTerraform(this._rotationHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotation_interval: {
        value: cdktf.stringToHclTerraform(this._rotationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
