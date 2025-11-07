// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RotatedSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * API ID to rotate (relevant only for rotator-type=api-key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#api_id RotatedSecret#api_id}
  */
  readonly apiId?: string;
  /**
  * API key to rotate (relevant only for rotator-type=api-key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#api_key RotatedSecret#api_key}
  */
  readonly apiKey?: string;
  /**
  * The credentials to connect with use-user-creds/use-target-creds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#authentication_credentials RotatedSecret#authentication_credentials}
  */
  readonly authenticationCredentials?: string;
  /**
  * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#auto_rotate RotatedSecret#auto_rotate}
  */
  readonly autoRotate?: string;
  /**
  * Secret payload to be sent with rotation request (relevant only for rotator-type=custom)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#custom_payload RotatedSecret#custom_payload}
  */
  readonly customPayload?: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#description RotatedSecret#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#id RotatedSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Retrieve the Secret value without checking the Gateway's cache [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#ignore_cache RotatedSecret#ignore_cache}
  */
  readonly ignoreCache?: string;
  /**
  * The name of a key that is used to encrypt the secret value (if empty, the account default protectionKey key will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#key RotatedSecret#key}
  */
  readonly key?: string;
  /**
  * Secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#name RotatedSecret#name}
  */
  readonly name: string;
  /**
  * rotated-username password (relevant only for rotator-type=password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#rotated_password RotatedSecret#rotated_password}
  */
  readonly rotatedPassword?: string;
  /**
  * username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it's own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type=password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#rotated_username RotatedSecret#rotated_username}
  */
  readonly rotatedUsername?: string;
  /**
  * The Hour of the rotation in UTC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#rotation_hour RotatedSecret#rotation_hour}
  */
  readonly rotationHour?: number;
  /**
  * The number of days to wait between every automatic rotation (1-365),custom rotator interval will be set in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#rotation_interval RotatedSecret#rotation_interval}
  */
  readonly rotationInterval?: string;
  /**
  * Custom rotation command (relevant only for ssh target)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#rotator_custom_cmd RotatedSecret#rotator_custom_cmd}
  */
  readonly rotatorCustomCmd?: string;
  /**
  * The rotator type password/target/api-key/ldap/custom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#rotator_type RotatedSecret#rotator_type}
  */
  readonly rotatorType: string;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#tags RotatedSecret#tags}
  */
  readonly tags?: string[];
  /**
  * The target name to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#target_name RotatedSecret#target_name}
  */
  readonly targetName: string;
  /**
  * LDAP User Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#user_attribute RotatedSecret#user_attribute}
  */
  readonly userAttribute?: string;
  /**
  * Base DN to Perform User Search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#user_dn RotatedSecret#user_dn}
  */
  readonly userDn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret akeyless_rotated_secret}
*/
export class RotatedSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_rotated_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RotatedSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RotatedSecret to import
  * @param importFromId The id of the existing RotatedSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RotatedSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_rotated_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/rotated_secret akeyless_rotated_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RotatedSecretConfig
  */
  public constructor(scope: Construct, id: string, config: RotatedSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_rotated_secret',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiId = config.apiId;
    this._apiKey = config.apiKey;
    this._authenticationCredentials = config.authenticationCredentials;
    this._autoRotate = config.autoRotate;
    this._customPayload = config.customPayload;
    this._description = config.description;
    this._id = config.id;
    this._ignoreCache = config.ignoreCache;
    this._key = config.key;
    this._name = config.name;
    this._rotatedPassword = config.rotatedPassword;
    this._rotatedUsername = config.rotatedUsername;
    this._rotationHour = config.rotationHour;
    this._rotationInterval = config.rotationInterval;
    this._rotatorCustomCmd = config.rotatorCustomCmd;
    this._rotatorType = config.rotatorType;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._userAttribute = config.userAttribute;
    this._userDn = config.userDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: true, optional: true, required: false
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  public resetApiId() {
    this._apiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

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

  // ignore_cache - computed: false, optional: true, required: false
  private _ignoreCache?: string; 
  public get ignoreCache() {
    return this.getStringAttribute('ignore_cache');
  }
  public set ignoreCache(value: string) {
    this._ignoreCache = value;
  }
  public resetIgnoreCache() {
    this._ignoreCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCacheInput() {
    return this._ignoreCache;
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

  // rotated_password - computed: true, optional: true, required: false
  private _rotatedPassword?: string; 
  public get rotatedPassword() {
    return this.getStringAttribute('rotated_password');
  }
  public set rotatedPassword(value: string) {
    this._rotatedPassword = value;
  }
  public resetRotatedPassword() {
    this._rotatedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotatedPasswordInput() {
    return this._rotatedPassword;
  }

  // rotated_username - computed: true, optional: true, required: false
  private _rotatedUsername?: string; 
  public get rotatedUsername() {
    return this.getStringAttribute('rotated_username');
  }
  public set rotatedUsername(value: string) {
    this._rotatedUsername = value;
  }
  public resetRotatedUsername() {
    this._rotatedUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotatedUsernameInput() {
    return this._rotatedUsername;
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

  // rotator_custom_cmd - computed: false, optional: true, required: false
  private _rotatorCustomCmd?: string; 
  public get rotatorCustomCmd() {
    return this.getStringAttribute('rotator_custom_cmd');
  }
  public set rotatorCustomCmd(value: string) {
    this._rotatorCustomCmd = value;
  }
  public resetRotatorCustomCmd() {
    this._rotatorCustomCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotatorCustomCmdInput() {
    return this._rotatorCustomCmd;
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

  // user_attribute - computed: true, optional: true, required: false
  private _userAttribute?: string; 
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
  public set userAttribute(value: string) {
    this._userAttribute = value;
  }
  public resetUserAttribute() {
    this._userAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeInput() {
    return this._userAttribute;
  }

  // user_dn - computed: true, optional: true, required: false
  private _userDn?: string; 
  public get userDn() {
    return this.getStringAttribute('user_dn');
  }
  public set userDn(value: string) {
    this._userDn = value;
  }
  public resetUserDn() {
    this._userDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDnInput() {
    return this._userDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      api_key: cdktf.stringToTerraform(this._apiKey),
      authentication_credentials: cdktf.stringToTerraform(this._authenticationCredentials),
      auto_rotate: cdktf.stringToTerraform(this._autoRotate),
      custom_payload: cdktf.stringToTerraform(this._customPayload),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ignore_cache: cdktf.stringToTerraform(this._ignoreCache),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      rotated_password: cdktf.stringToTerraform(this._rotatedPassword),
      rotated_username: cdktf.stringToTerraform(this._rotatedUsername),
      rotation_hour: cdktf.numberToTerraform(this._rotationHour),
      rotation_interval: cdktf.stringToTerraform(this._rotationInterval),
      rotator_custom_cmd: cdktf.stringToTerraform(this._rotatorCustomCmd),
      rotator_type: cdktf.stringToTerraform(this._rotatorType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      user_attribute: cdktf.stringToTerraform(this._userAttribute),
      user_dn: cdktf.stringToTerraform(this._userDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      ignore_cache: {
        value: cdktf.stringToHclTerraform(this._ignoreCache),
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
      rotated_password: {
        value: cdktf.stringToHclTerraform(this._rotatedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotated_username: {
        value: cdktf.stringToHclTerraform(this._rotatedUsername),
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
      rotator_custom_cmd: {
        value: cdktf.stringToHclTerraform(this._rotatorCustomCmd),
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
      user_attribute: {
        value: cdktf.stringToHclTerraform(this._userAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_dn: {
        value: cdktf.stringToHclTerraform(this._userDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
