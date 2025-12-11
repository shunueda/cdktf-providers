// https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortLabsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs#base_url PortLabsProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Protects you from accidentally changing the property type of blueprints which will delete the property before recreating it with the new type. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs#blueprint_property_type_change_protection PortLabsProvider#blueprint_property_type_change_protection}
  */
  readonly blueprintPropertyTypeChangeProtection?: boolean | cdktf.IResolvable;
  /**
  * Client ID for Port-labs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs#client_id PortLabsProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * When set to `false` disables the default HTML escaping of json.Marshal when reading data from Port. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs#json_escape_html PortLabsProvider#json_escape_html}
  */
  readonly jsonEscapeHtml?: boolean | cdktf.IResolvable;
  /**
  * Client Secret for Port-labs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs#secret PortLabsProvider#secret}
  */
  readonly secret?: string;
  /**
  * Token for Port-labs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs#token PortLabsProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs#alias PortLabsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs port-labs}
*/
export class PortLabsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port-labs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortLabsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortLabsProvider to import
  * @param importFromId The id of the existing PortLabsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortLabsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port-labs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs port-labs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortLabsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PortLabsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'port-labs',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.17.2',
        providerVersionConstraint: '2.17.2'
      },
      terraformProviderSource: 'port-labs/port-labs'
    });
    this._baseUrl = config.baseUrl;
    this._blueprintPropertyTypeChangeProtection = config.blueprintPropertyTypeChangeProtection;
    this._clientId = config.clientId;
    this._jsonEscapeHtml = config.jsonEscapeHtml;
    this._secret = config.secret;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // blueprint_property_type_change_protection - computed: false, optional: true, required: false
  private _blueprintPropertyTypeChangeProtection?: boolean | cdktf.IResolvable; 
  public get blueprintPropertyTypeChangeProtection() {
    return this._blueprintPropertyTypeChangeProtection;
  }
  public set blueprintPropertyTypeChangeProtection(value: boolean | cdktf.IResolvable | undefined) {
    this._blueprintPropertyTypeChangeProtection = value;
  }
  public resetBlueprintPropertyTypeChangeProtection() {
    this._blueprintPropertyTypeChangeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintPropertyTypeChangeProtectionInput() {
    return this._blueprintPropertyTypeChangeProtection;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // json_escape_html - computed: false, optional: true, required: false
  private _jsonEscapeHtml?: boolean | cdktf.IResolvable; 
  public get jsonEscapeHtml() {
    return this._jsonEscapeHtml;
  }
  public set jsonEscapeHtml(value: boolean | cdktf.IResolvable | undefined) {
    this._jsonEscapeHtml = value;
  }
  public resetJsonEscapeHtml() {
    this._jsonEscapeHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonEscapeHtmlInput() {
    return this._jsonEscapeHtml;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this._secret;
  }
  public set secret(value: string | undefined) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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
      base_url: cdktf.stringToTerraform(this._baseUrl),
      blueprint_property_type_change_protection: cdktf.booleanToTerraform(this._blueprintPropertyTypeChangeProtection),
      client_id: cdktf.stringToTerraform(this._clientId),
      json_escape_html: cdktf.booleanToTerraform(this._jsonEscapeHtml),
      secret: cdktf.stringToTerraform(this._secret),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blueprint_property_type_change_protection: {
        value: cdktf.booleanToHclTerraform(this._blueprintPropertyTypeChangeProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_escape_html: {
        value: cdktf.booleanToHclTerraform(this._jsonEscapeHtml),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
