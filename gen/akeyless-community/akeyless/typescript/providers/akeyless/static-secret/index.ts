// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StaticSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional custom fields to associate with the item (e.g fieldName1=value1) (relevant only for type 'password')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#custom_field StaticSecret#custom_field}
  */
  readonly customField?: { [key: string]: string };
  /**
  * Protection from accidental deletion of this auth method, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#delete_protection StaticSecret#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#description StaticSecret#description}
  */
  readonly description?: string;
  /**
  * Secret format [text/json/key-value] (relevant only for type 'generic')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#format StaticSecret#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#id StaticSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Retrieve the Secret value without checking the Gateway's cache [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#ignore_cache StaticSecret#ignore_cache}
  */
  readonly ignoreCache?: string;
  /**
  * List of URLs associated with the item (relevant only for type 'password')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#inject_url StaticSecret#inject_url}
  */
  readonly injectUrl?: string[];
  /**
  * Whether to keep previous version [true/false]. If not set, use default according to account settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#keep_prev_version StaticSecret#keep_prev_version}
  */
  readonly keepPrevVersion?: string;
  /**
  * The provided value is a multiline value (separated by '
  * ')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#multiline_value StaticSecret#multiline_value}
  */
  readonly multilineValue?: boolean | cdktf.IResolvable;
  /**
  * Password value (relevant only for type 'password')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#password StaticSecret#password}
  */
  readonly password?: string;
  /**
  * The path where the secret will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#path StaticSecret#path}
  */
  readonly path: string;
  /**
  * The name of a key that is used to encrypt the secret value (if empty, the account default protectionKey key will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#protection_key StaticSecret#protection_key}
  */
  readonly protectionKey?: string;
  /**
  * Path to the SSH Certificate Issuer for your Akeyless Secure Access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#secure_access_bastion_issuer StaticSecret#secure_access_bastion_issuer}
  */
  readonly secureAccessBastionIssuer?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#secure_access_enable StaticSecret#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Target servers for connections., For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#secure_access_host StaticSecret#secure_access_host}
  */
  readonly secureAccessHost?: string[];
  /**
  * Static-Secret values contains SSH Credentials, either Private Key or Password [password/private-key]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#secure_access_ssh_creds StaticSecret#secure_access_ssh_creds}
  */
  readonly secureAccessSshCreds?: string;
  /**
  * Override the SSH username as indicated in SSH Certificate Issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#secure_access_ssh_user StaticSecret#secure_access_ssh_user}
  */
  readonly secureAccessSshUser?: string;
  /**
  * Destination URL to inject secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#secure_access_url StaticSecret#secure_access_url}
  */
  readonly secureAccessUrl?: string;
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#secure_access_web StaticSecret#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * Secure browser via Akeyless's Secure Remote Access (SRA)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#secure_access_web_browsing StaticSecret#secure_access_web_browsing}
  */
  readonly secureAccessWebBrowsing?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#tags StaticSecret#tags}
  */
  readonly tags?: string[];
  /**
  * Secret type [generic/password]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#type StaticSecret#type}
  */
  readonly type?: string;
  /**
  * Username value (relevant only for type 'password')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#username StaticSecret#username}
  */
  readonly username?: string;
  /**
  * The secret content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#value StaticSecret#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret akeyless_static_secret}
*/
export class StaticSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_static_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StaticSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StaticSecret to import
  * @param importFromId The id of the existing StaticSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StaticSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_static_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/static_secret akeyless_static_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StaticSecretConfig
  */
  public constructor(scope: Construct, id: string, config: StaticSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_static_secret',
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
    this._customField = config.customField;
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._format = config.format;
    this._id = config.id;
    this._ignoreCache = config.ignoreCache;
    this._injectUrl = config.injectUrl;
    this._keepPrevVersion = config.keepPrevVersion;
    this._multilineValue = config.multilineValue;
    this._password = config.password;
    this._path = config.path;
    this._protectionKey = config.protectionKey;
    this._secureAccessBastionIssuer = config.secureAccessBastionIssuer;
    this._secureAccessEnable = config.secureAccessEnable;
    this._secureAccessHost = config.secureAccessHost;
    this._secureAccessSshCreds = config.secureAccessSshCreds;
    this._secureAccessSshUser = config.secureAccessSshUser;
    this._secureAccessUrl = config.secureAccessUrl;
    this._secureAccessWeb = config.secureAccessWeb;
    this._secureAccessWebBrowsing = config.secureAccessWebBrowsing;
    this._tags = config.tags;
    this._type = config.type;
    this._username = config.username;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_field - computed: false, optional: true, required: false
  private _customField?: { [key: string]: string }; 
  public get customField() {
    return this.getStringMapAttribute('custom_field');
  }
  public set customField(value: { [key: string]: string }) {
    this._customField = value;
  }
  public resetCustomField() {
    this._customField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldInput() {
    return this._customField;
  }

  // delete_protection - computed: true, optional: true, required: false
  private _deleteProtection?: string; 
  public get deleteProtection() {
    return this.getStringAttribute('delete_protection');
  }
  public set deleteProtection(value: string) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // inject_url - computed: false, optional: true, required: false
  private _injectUrl?: string[]; 
  public get injectUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('inject_url'));
  }
  public set injectUrl(value: string[]) {
    this._injectUrl = value;
  }
  public resetInjectUrl() {
    this._injectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectUrlInput() {
    return this._injectUrl;
  }

  // keep_prev_version - computed: false, optional: true, required: false
  private _keepPrevVersion?: string; 
  public get keepPrevVersion() {
    return this.getStringAttribute('keep_prev_version');
  }
  public set keepPrevVersion(value: string) {
    this._keepPrevVersion = value;
  }
  public resetKeepPrevVersion() {
    this._keepPrevVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepPrevVersionInput() {
    return this._keepPrevVersion;
  }

  // multiline_value - computed: false, optional: true, required: false
  private _multilineValue?: boolean | cdktf.IResolvable; 
  public get multilineValue() {
    return this.getBooleanAttribute('multiline_value');
  }
  public set multilineValue(value: boolean | cdktf.IResolvable) {
    this._multilineValue = value;
  }
  public resetMultilineValue() {
    this._multilineValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineValueInput() {
    return this._multilineValue;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protection_key - computed: true, optional: true, required: false
  private _protectionKey?: string; 
  public get protectionKey() {
    return this.getStringAttribute('protection_key');
  }
  public set protectionKey(value: string) {
    this._protectionKey = value;
  }
  public resetProtectionKey() {
    this._protectionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionKeyInput() {
    return this._protectionKey;
  }

  // secure_access_bastion_issuer - computed: false, optional: true, required: false
  private _secureAccessBastionIssuer?: string; 
  public get secureAccessBastionIssuer() {
    return this.getStringAttribute('secure_access_bastion_issuer');
  }
  public set secureAccessBastionIssuer(value: string) {
    this._secureAccessBastionIssuer = value;
  }
  public resetSecureAccessBastionIssuer() {
    this._secureAccessBastionIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessBastionIssuerInput() {
    return this._secureAccessBastionIssuer;
  }

  // secure_access_enable - computed: false, optional: true, required: false
  private _secureAccessEnable?: string; 
  public get secureAccessEnable() {
    return this.getStringAttribute('secure_access_enable');
  }
  public set secureAccessEnable(value: string) {
    this._secureAccessEnable = value;
  }
  public resetSecureAccessEnable() {
    this._secureAccessEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessEnableInput() {
    return this._secureAccessEnable;
  }

  // secure_access_host - computed: false, optional: true, required: false
  private _secureAccessHost?: string[]; 
  public get secureAccessHost() {
    return cdktf.Fn.tolist(this.getListAttribute('secure_access_host'));
  }
  public set secureAccessHost(value: string[]) {
    this._secureAccessHost = value;
  }
  public resetSecureAccessHost() {
    this._secureAccessHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessHostInput() {
    return this._secureAccessHost;
  }

  // secure_access_ssh_creds - computed: false, optional: true, required: false
  private _secureAccessSshCreds?: string; 
  public get secureAccessSshCreds() {
    return this.getStringAttribute('secure_access_ssh_creds');
  }
  public set secureAccessSshCreds(value: string) {
    this._secureAccessSshCreds = value;
  }
  public resetSecureAccessSshCreds() {
    this._secureAccessSshCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessSshCredsInput() {
    return this._secureAccessSshCreds;
  }

  // secure_access_ssh_user - computed: false, optional: true, required: false
  private _secureAccessSshUser?: string; 
  public get secureAccessSshUser() {
    return this.getStringAttribute('secure_access_ssh_user');
  }
  public set secureAccessSshUser(value: string) {
    this._secureAccessSshUser = value;
  }
  public resetSecureAccessSshUser() {
    this._secureAccessSshUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessSshUserInput() {
    return this._secureAccessSshUser;
  }

  // secure_access_url - computed: false, optional: true, required: false
  private _secureAccessUrl?: string; 
  public get secureAccessUrl() {
    return this.getStringAttribute('secure_access_url');
  }
  public set secureAccessUrl(value: string) {
    this._secureAccessUrl = value;
  }
  public resetSecureAccessUrl() {
    this._secureAccessUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessUrlInput() {
    return this._secureAccessUrl;
  }

  // secure_access_web - computed: true, optional: true, required: false
  private _secureAccessWeb?: boolean | cdktf.IResolvable; 
  public get secureAccessWeb() {
    return this.getBooleanAttribute('secure_access_web');
  }
  public set secureAccessWeb(value: boolean | cdktf.IResolvable) {
    this._secureAccessWeb = value;
  }
  public resetSecureAccessWeb() {
    this._secureAccessWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessWebInput() {
    return this._secureAccessWeb;
  }

  // secure_access_web_browsing - computed: false, optional: true, required: false
  private _secureAccessWebBrowsing?: boolean | cdktf.IResolvable; 
  public get secureAccessWebBrowsing() {
    return this.getBooleanAttribute('secure_access_web_browsing');
  }
  public set secureAccessWebBrowsing(value: boolean | cdktf.IResolvable) {
    this._secureAccessWebBrowsing = value;
  }
  public resetSecureAccessWebBrowsing() {
    this._secureAccessWebBrowsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessWebBrowsingInput() {
    return this._secureAccessWebBrowsing;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_field: cdktf.hashMapper(cdktf.stringToTerraform)(this._customField),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      ignore_cache: cdktf.stringToTerraform(this._ignoreCache),
      inject_url: cdktf.listMapper(cdktf.stringToTerraform, false)(this._injectUrl),
      keep_prev_version: cdktf.stringToTerraform(this._keepPrevVersion),
      multiline_value: cdktf.booleanToTerraform(this._multilineValue),
      password: cdktf.stringToTerraform(this._password),
      path: cdktf.stringToTerraform(this._path),
      protection_key: cdktf.stringToTerraform(this._protectionKey),
      secure_access_bastion_issuer: cdktf.stringToTerraform(this._secureAccessBastionIssuer),
      secure_access_enable: cdktf.stringToTerraform(this._secureAccessEnable),
      secure_access_host: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secureAccessHost),
      secure_access_ssh_creds: cdktf.stringToTerraform(this._secureAccessSshCreds),
      secure_access_ssh_user: cdktf.stringToTerraform(this._secureAccessSshUser),
      secure_access_url: cdktf.stringToTerraform(this._secureAccessUrl),
      secure_access_web: cdktf.booleanToTerraform(this._secureAccessWeb),
      secure_access_web_browsing: cdktf.booleanToTerraform(this._secureAccessWebBrowsing),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_field: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customField),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      delete_protection: {
        value: cdktf.stringToHclTerraform(this._deleteProtection),
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
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      inject_url: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._injectUrl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      keep_prev_version: {
        value: cdktf.stringToHclTerraform(this._keepPrevVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiline_value: {
        value: cdktf.booleanToHclTerraform(this._multilineValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_key: {
        value: cdktf.stringToHclTerraform(this._protectionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_bastion_issuer: {
        value: cdktf.stringToHclTerraform(this._secureAccessBastionIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_enable: {
        value: cdktf.stringToHclTerraform(this._secureAccessEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_host: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secureAccessHost),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secure_access_ssh_creds: {
        value: cdktf.stringToHclTerraform(this._secureAccessSshCreds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_ssh_user: {
        value: cdktf.stringToHclTerraform(this._secureAccessSshUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_url: {
        value: cdktf.stringToHclTerraform(this._secureAccessUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_web: {
        value: cdktf.booleanToHclTerraform(this._secureAccessWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secure_access_web_browsing: {
        value: cdktf.booleanToHclTerraform(this._secureAccessWebBrowsing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
