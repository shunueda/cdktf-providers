// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RotatedSecretGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * The credentials to connect with [use-self-creds/use-target-creds]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#authentication_credentials RotatedSecretGcp#authentication_credentials}
  */
  readonly authenticationCredentials?: string;
  /**
  * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#auto_rotate RotatedSecretGcp#auto_rotate}
  */
  readonly autoRotate?: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#description RotatedSecretGcp#description}
  */
  readonly description?: string;
  /**
  * Base64-encoded service account private key text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#gcp_key RotatedSecretGcp#gcp_key}
  */
  readonly gcpKey?: string;
  /**
  * The email of the gcp service account to rotate (relevant only when rotator-type=servcie-account-rotator)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#gcp_service_account_email RotatedSecretGcp#gcp_service_account_email}
  */
  readonly gcpServiceAccountEmail?: string;
  /**
  * The key id of the gcp service account to rotate (relevant only when rotator-type=servcie-account-rotator)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#gcp_service_account_key_id RotatedSecretGcp#gcp_service_account_key_id}
  */
  readonly gcpServiceAccountKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#id RotatedSecretGcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of a key that is used to encrypt the secret value (if empty, the account default protectionKey key will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#key RotatedSecretGcp#key}
  */
  readonly key?: string;
  /**
  * Secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#name RotatedSecretGcp#name}
  */
  readonly name: string;
  /**
  * The length of the password to be generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#password_length RotatedSecretGcp#password_length}
  */
  readonly passwordLength?: string;
  /**
  * The Hour of the rotation in UTC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#rotation_hour RotatedSecretGcp#rotation_hour}
  */
  readonly rotationHour?: number;
  /**
  * The number of days to wait between every automatic rotation (1-365),custom rotator interval will be set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#rotation_interval RotatedSecretGcp#rotation_interval}
  */
  readonly rotationInterval?: string;
  /**
  * The rotator type [target/service-account-rotator]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#rotator_type RotatedSecretGcp#rotator_type}
  */
  readonly rotatorType: string;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#tags RotatedSecretGcp#tags}
  */
  readonly tags?: string[];
  /**
  * The target name to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#target_name RotatedSecretGcp#target_name}
  */
  readonly targetName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp akeyless_rotated_secret_gcp}
*/
export class RotatedSecretGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_rotated_secret_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RotatedSecretGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RotatedSecretGcp to import
  * @param importFromId The id of the existing RotatedSecretGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RotatedSecretGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_rotated_secret_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret_gcp akeyless_rotated_secret_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RotatedSecretGcpConfig
  */
  public constructor(scope: Construct, id: string, config: RotatedSecretGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_rotated_secret_gcp',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationCredentials = config.authenticationCredentials;
    this._autoRotate = config.autoRotate;
    this._description = config.description;
    this._gcpKey = config.gcpKey;
    this._gcpServiceAccountEmail = config.gcpServiceAccountEmail;
    this._gcpServiceAccountKeyId = config.gcpServiceAccountKeyId;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._passwordLength = config.passwordLength;
    this._rotationHour = config.rotationHour;
    this._rotationInterval = config.rotationInterval;
    this._rotatorType = config.rotatorType;
    this._tags = config.tags;
    this._targetName = config.targetName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_credentials - computed: false, optional: true, required: false
  private _authenticationCredentials?: string; 
  public get authenticationCredentials() {
    return this.getStringAttribute('authentication_credentials');
  }
  public set authenticationCredentials(value: string) {
    this._authenticationCredentials = value;
  }
  public resetAuthenticationCredentials() {
    this._authenticationCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCredentialsInput() {
    return this._authenticationCredentials;
  }

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

  // gcp_key - computed: true, optional: true, required: false
  private _gcpKey?: string; 
  public get gcpKey() {
    return this.getStringAttribute('gcp_key');
  }
  public set gcpKey(value: string) {
    this._gcpKey = value;
  }
  public resetGcpKey() {
    this._gcpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpKeyInput() {
    return this._gcpKey;
  }

  // gcp_service_account_email - computed: false, optional: true, required: false
  private _gcpServiceAccountEmail?: string; 
  public get gcpServiceAccountEmail() {
    return this.getStringAttribute('gcp_service_account_email');
  }
  public set gcpServiceAccountEmail(value: string) {
    this._gcpServiceAccountEmail = value;
  }
  public resetGcpServiceAccountEmail() {
    this._gcpServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountEmailInput() {
    return this._gcpServiceAccountEmail;
  }

  // gcp_service_account_key_id - computed: false, optional: true, required: false
  private _gcpServiceAccountKeyId?: string; 
  public get gcpServiceAccountKeyId() {
    return this.getStringAttribute('gcp_service_account_key_id');
  }
  public set gcpServiceAccountKeyId(value: string) {
    this._gcpServiceAccountKeyId = value;
  }
  public resetGcpServiceAccountKeyId() {
    this._gcpServiceAccountKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountKeyIdInput() {
    return this._gcpServiceAccountKeyId;
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

  // rotator_type - computed: false, optional: false, required: true
  private _rotatorType?: string; 
  public get rotatorType() {
    return this.getStringAttribute('rotator_type');
  }
  public set rotatorType(value: string) {
    this._rotatorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotatorTypeInput() {
    return this._rotatorType;
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
      authentication_credentials: cdktf.stringToTerraform(this._authenticationCredentials),
      auto_rotate: cdktf.stringToTerraform(this._autoRotate),
      description: cdktf.stringToTerraform(this._description),
      gcp_key: cdktf.stringToTerraform(this._gcpKey),
      gcp_service_account_email: cdktf.stringToTerraform(this._gcpServiceAccountEmail),
      gcp_service_account_key_id: cdktf.stringToTerraform(this._gcpServiceAccountKeyId),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      password_length: cdktf.stringToTerraform(this._passwordLength),
      rotation_hour: cdktf.numberToTerraform(this._rotationHour),
      rotation_interval: cdktf.stringToTerraform(this._rotationInterval),
      rotator_type: cdktf.stringToTerraform(this._rotatorType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_credentials: {
        value: cdktf.stringToHclTerraform(this._authenticationCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_rotate: {
        value: cdktf.stringToHclTerraform(this._autoRotate),
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
      gcp_key: {
        value: cdktf.stringToHclTerraform(this._gcpKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_service_account_email: {
        value: cdktf.stringToHclTerraform(this._gcpServiceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_service_account_key_id: {
        value: cdktf.stringToHclTerraform(this._gcpServiceAccountKeyId),
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
      rotator_type: {
        value: cdktf.stringToHclTerraform(this._rotatorType),
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
