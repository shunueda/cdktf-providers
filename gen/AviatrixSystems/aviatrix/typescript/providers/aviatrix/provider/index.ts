// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AviatrixProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs#controller_ip AviatrixProvider#controller_ip}
  */
  readonly controllerIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs#password AviatrixProvider#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs#path_to_ca_certificate AviatrixProvider#path_to_ca_certificate}
  */
  readonly pathToCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs#skip_version_validation AviatrixProvider#skip_version_validation}
  */
  readonly skipVersionValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs#username AviatrixProvider#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs#verify_ssl_certificate AviatrixProvider#verify_ssl_certificate}
  */
  readonly verifySslCertificate?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs#alias AviatrixProvider#alias}
  */
  readonly alias?: string;
  /**
  * ignore_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs#ignore_tags AviatrixProvider#ignore_tags}
  */
  readonly ignoreTags?: AviatrixProviderIgnoreTags;
}
export interface AviatrixProviderIgnoreTags {
  /**
  * Tag key prefixes to ignore across all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs#key_prefixes AviatrixProvider#key_prefixes}
  */
  readonly keyPrefixes?: string[];
  /**
  * Tag keys to ignore across all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs#keys AviatrixProvider#keys}
  */
  readonly keys?: string[];
}

export function aviatrixProviderIgnoreTagsToTerraform(struct?: AviatrixProviderIgnoreTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyPrefixes),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function aviatrixProviderIgnoreTagsToHclTerraform(struct?: AviatrixProviderIgnoreTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs aviatrix}
*/
export class AviatrixProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AviatrixProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AviatrixProvider to import
  * @param importFromId The id of the existing AviatrixProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AviatrixProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs aviatrix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AviatrixProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AviatrixProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      terraformProviderSource: 'AviatrixSystems/aviatrix'
    });
    this._controllerIp = config.controllerIp;
    this._password = config.password;
    this._pathToCaCertificate = config.pathToCaCertificate;
    this._skipVersionValidation = config.skipVersionValidation;
    this._username = config.username;
    this._verifySslCertificate = config.verifySslCertificate;
    this._alias = config.alias;
    this._ignoreTags = config.ignoreTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // controller_ip - computed: false, optional: false, required: true
  private _controllerIp?: string; 
  public get controllerIp() {
    return this._controllerIp;
  }
  public set controllerIp(value: string | undefined) {
    this._controllerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIpInput() {
    return this._controllerIp;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // path_to_ca_certificate - computed: false, optional: true, required: false
  private _pathToCaCertificate?: string; 
  public get pathToCaCertificate() {
    return this._pathToCaCertificate;
  }
  public set pathToCaCertificate(value: string | undefined) {
    this._pathToCaCertificate = value;
  }
  public resetPathToCaCertificate() {
    this._pathToCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathToCaCertificateInput() {
    return this._pathToCaCertificate;
  }

  // skip_version_validation - computed: false, optional: true, required: false
  private _skipVersionValidation?: boolean | cdktf.IResolvable; 
  public get skipVersionValidation() {
    return this._skipVersionValidation;
  }
  public set skipVersionValidation(value: boolean | cdktf.IResolvable | undefined) {
    this._skipVersionValidation = value;
  }
  public resetSkipVersionValidation() {
    this._skipVersionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVersionValidationInput() {
    return this._skipVersionValidation;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // verify_ssl_certificate - computed: false, optional: true, required: false
  private _verifySslCertificate?: boolean | cdktf.IResolvable; 
  public get verifySslCertificate() {
    return this._verifySslCertificate;
  }
  public set verifySslCertificate(value: boolean | cdktf.IResolvable | undefined) {
    this._verifySslCertificate = value;
  }
  public resetVerifySslCertificate() {
    this._verifySslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySslCertificateInput() {
    return this._verifySslCertificate;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // ignore_tags - computed: false, optional: true, required: false
  private _ignoreTags?: AviatrixProviderIgnoreTags; 
  public get ignoreTags() {
    return this._ignoreTags;
  }
  public set ignoreTags(value: AviatrixProviderIgnoreTags | undefined) {
    this._ignoreTags = value;
  }
  public resetIgnoreTags() {
    this._ignoreTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagsInput() {
    return this._ignoreTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      controller_ip: cdktf.stringToTerraform(this._controllerIp),
      password: cdktf.stringToTerraform(this._password),
      path_to_ca_certificate: cdktf.stringToTerraform(this._pathToCaCertificate),
      skip_version_validation: cdktf.booleanToTerraform(this._skipVersionValidation),
      username: cdktf.stringToTerraform(this._username),
      verify_ssl_certificate: cdktf.booleanToTerraform(this._verifySslCertificate),
      alias: cdktf.stringToTerraform(this._alias),
      ignore_tags: aviatrixProviderIgnoreTagsToTerraform(this._ignoreTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      controller_ip: {
        value: cdktf.stringToHclTerraform(this._controllerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_to_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._pathToCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_version_validation: {
        value: cdktf.booleanToHclTerraform(this._skipVersionValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_ssl_certificate: {
        value: cdktf.booleanToHclTerraform(this._verifySslCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_tags: {
        value: aviatrixProviderIgnoreTagsToHclTerraform(this._ignoreTags),
        isBlock: true,
        type: "list",
        storageClassType: "AviatrixProviderIgnoreTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
