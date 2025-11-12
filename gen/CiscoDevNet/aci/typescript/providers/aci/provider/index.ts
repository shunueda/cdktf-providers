// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AciProviderConfig {
  /**
  * Allow existing objects to be managed. This can also be set as the ACI_ALLOW_EXISTING_ON_CREATE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#allow_existing_on_create AciProvider#allow_existing_on_create}
  */
  readonly allowExistingOnCreate?: boolean | cdktf.IResolvable;
  /**
  * Global annotation for the provider. This can also be set as the ACI_ANNOTATION environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#annotation AciProvider#annotation}
  */
  readonly annotation?: string;
  /**
  * Certificate name for the User in Cisco ACI. This can also be set as the ACI_CERT_NAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#cert_name AciProvider#cert_name}
  */
  readonly certName?: string;
  /**
  * Allow insecure HTTPS client. This can also be set as the ACI_INSECURE environment variable. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#insecure AciProvider#insecure}
  */
  readonly insecure?: string;
  /**
  * Password for the APIC Account. This can also be set as the ACI_PASSWORD environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#password AciProvider#password}
  */
  readonly password?: string;
  /**
  * Private key path for signature calculation. This can also be set as the ACI_PRIVATE_KEY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#private_key AciProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * Proxy server credentials in the form of username:password. This can also be set as the ACI_PROXY_CREDS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#proxy_creds AciProvider#proxy_creds}
  */
  readonly proxyCreds?: string;
  /**
  * Proxy Server URL with port number. This can also be set as the ACI_PROXY_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#proxy_url AciProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Number of retries for REST API calls. This can also be set as the ACI_RETRIES environment variable. Defaults to `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#retries AciProvider#retries}
  */
  readonly retries?: string;
  /**
  * URL of the Cisco ACI web interface. This can also be set as the ACI_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#url AciProvider#url}
  */
  readonly url?: string;
  /**
  * Username for the APIC Account. This can also be set as the ACI_USERNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#username AciProvider#username}
  */
  readonly username?: string;
  /**
  * Flag to validate if a object with entered relation Dn exists in the APIC. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#validate_relation_dn AciProvider#validate_relation_dn}
  */
  readonly validateRelationDn?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#alias AciProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs aci}
*/
export class AciProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AciProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AciProvider to import
  * @param importFromId The id of the existing AciProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AciProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs aci} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AciProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AciProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      terraformProviderSource: 'CiscoDevNet/aci'
    });
    this._allowExistingOnCreate = config.allowExistingOnCreate;
    this._annotation = config.annotation;
    this._certName = config.certName;
    this._insecure = config.insecure;
    this._password = config.password;
    this._privateKey = config.privateKey;
    this._proxyCreds = config.proxyCreds;
    this._proxyUrl = config.proxyUrl;
    this._retries = config.retries;
    this._url = config.url;
    this._username = config.username;
    this._validateRelationDn = config.validateRelationDn;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_existing_on_create - computed: false, optional: true, required: false
  private _allowExistingOnCreate?: boolean | cdktf.IResolvable; 
  public get allowExistingOnCreate() {
    return this._allowExistingOnCreate;
  }
  public set allowExistingOnCreate(value: boolean | cdktf.IResolvable | undefined) {
    this._allowExistingOnCreate = value;
  }
  public resetAllowExistingOnCreate() {
    this._allowExistingOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExistingOnCreateInput() {
    return this._allowExistingOnCreate;
  }

  // annotation - computed: false, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this._annotation;
  }
  public set annotation(value: string | undefined) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // cert_name - computed: false, optional: true, required: false
  private _certName?: string; 
  public get certName() {
    return this._certName;
  }
  public set certName(value: string | undefined) {
    this._certName = value;
  }
  public resetCertName() {
    this._certName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certNameInput() {
    return this._certName;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: string; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: string | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // proxy_creds - computed: false, optional: true, required: false
  private _proxyCreds?: string; 
  public get proxyCreds() {
    return this._proxyCreds;
  }
  public set proxyCreds(value: string | undefined) {
    this._proxyCreds = value;
  }
  public resetProxyCreds() {
    this._proxyCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCredsInput() {
    return this._proxyCreds;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this._proxyUrl;
  }
  public set proxyUrl(value: string | undefined) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: string; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: string | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // validate_relation_dn - computed: false, optional: true, required: false
  private _validateRelationDn?: string; 
  public get validateRelationDn() {
    return this._validateRelationDn;
  }
  public set validateRelationDn(value: string | undefined) {
    this._validateRelationDn = value;
  }
  public resetValidateRelationDn() {
    this._validateRelationDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRelationDnInput() {
    return this._validateRelationDn;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_existing_on_create: cdktf.booleanToTerraform(this._allowExistingOnCreate),
      annotation: cdktf.stringToTerraform(this._annotation),
      cert_name: cdktf.stringToTerraform(this._certName),
      insecure: cdktf.stringToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      private_key: cdktf.stringToTerraform(this._privateKey),
      proxy_creds: cdktf.stringToTerraform(this._proxyCreds),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      retries: cdktf.stringToTerraform(this._retries),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      validate_relation_dn: cdktf.stringToTerraform(this._validateRelationDn),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_existing_on_create: {
        value: cdktf.booleanToHclTerraform(this._allowExistingOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_name: {
        value: cdktf.stringToHclTerraform(this._certName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.stringToHclTerraform(this._insecure),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_creds: {
        value: cdktf.stringToHclTerraform(this._proxyCreds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.stringToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
      validate_relation_dn: {
        value: cdktf.stringToHclTerraform(this._validateRelationDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
