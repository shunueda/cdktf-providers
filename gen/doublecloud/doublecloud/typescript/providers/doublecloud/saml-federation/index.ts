// https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlFederationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable auto creation of accounts on login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation#auto_create_account_on_login SamlFederation#auto_create_account_on_login}
  */
  readonly autoCreateAccountOnLogin?: boolean | cdktf.IResolvable;
  /**
  * Should use insensitive name ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation#case_insensitive_name_ids SamlFederation#case_insensitive_name_ids}
  */
  readonly caseInsensitiveNameIds?: boolean | cdktf.IResolvable;
  /**
  * Max age for cookies in federation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation#cookie_max_age SamlFederation#cookie_max_age}
  */
  readonly cookieMaxAge?: string;
  /**
  * Organization group description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation#description SamlFederation#description}
  */
  readonly description?: string;
  /**
  * Enable auto creation of accounts on login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation#issuer SamlFederation#issuer}
  */
  readonly issuer?: string;
  /**
  * Organization group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation#name SamlFederation#name}
  */
  readonly name: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation#organization_id SamlFederation#organization_id}
  */
  readonly organizationId: string;
  /**
  * SSO Binding for federation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation#sso_binding SamlFederation#sso_binding}
  */
  readonly ssoBinding?: string;
  /**
  * URL for SSO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation#sso_url SamlFederation#sso_url}
  */
  readonly ssoUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation doublecloud_saml_federation}
*/
export class SamlFederation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doublecloud_saml_federation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlFederation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlFederation to import
  * @param importFromId The id of the existing SamlFederation that should be imported. Refer to the {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlFederation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doublecloud_saml_federation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/saml_federation doublecloud_saml_federation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlFederationConfig
  */
  public constructor(scope: Construct, id: string, config: SamlFederationConfig) {
    super(scope, id, {
      terraformResourceType: 'doublecloud_saml_federation',
      terraformGeneratorMetadata: {
        providerName: 'doublecloud',
        providerVersion: '0.1.26',
        providerVersionConstraint: '0.1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreateAccountOnLogin = config.autoCreateAccountOnLogin;
    this._caseInsensitiveNameIds = config.caseInsensitiveNameIds;
    this._cookieMaxAge = config.cookieMaxAge;
    this._description = config.description;
    this._issuer = config.issuer;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._ssoBinding = config.ssoBinding;
    this._ssoUrl = config.ssoUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_account_on_login - computed: true, optional: true, required: false
  private _autoCreateAccountOnLogin?: boolean | cdktf.IResolvable; 
  public get autoCreateAccountOnLogin() {
    return this.getBooleanAttribute('auto_create_account_on_login');
  }
  public set autoCreateAccountOnLogin(value: boolean | cdktf.IResolvable) {
    this._autoCreateAccountOnLogin = value;
  }
  public resetAutoCreateAccountOnLogin() {
    this._autoCreateAccountOnLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateAccountOnLoginInput() {
    return this._autoCreateAccountOnLogin;
  }

  // case_insensitive_name_ids - computed: true, optional: true, required: false
  private _caseInsensitiveNameIds?: boolean | cdktf.IResolvable; 
  public get caseInsensitiveNameIds() {
    return this.getBooleanAttribute('case_insensitive_name_ids');
  }
  public set caseInsensitiveNameIds(value: boolean | cdktf.IResolvable) {
    this._caseInsensitiveNameIds = value;
  }
  public resetCaseInsensitiveNameIds() {
    this._caseInsensitiveNameIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveNameIdsInput() {
    return this._caseInsensitiveNameIds;
  }

  // cookie_max_age - computed: true, optional: true, required: false
  private _cookieMaxAge?: string; 
  public get cookieMaxAge() {
    return this.getStringAttribute('cookie_max_age');
  }
  public set cookieMaxAge(value: string) {
    this._cookieMaxAge = value;
  }
  public resetCookieMaxAge() {
    this._cookieMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMaxAgeInput() {
    return this._cookieMaxAge;
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // sso_binding - computed: true, optional: true, required: false
  private _ssoBinding?: string; 
  public get ssoBinding() {
    return this.getStringAttribute('sso_binding');
  }
  public set ssoBinding(value: string) {
    this._ssoBinding = value;
  }
  public resetSsoBinding() {
    this._ssoBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoBindingInput() {
    return this._ssoBinding;
  }

  // sso_url - computed: true, optional: true, required: false
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  public resetSsoUrl() {
    this._ssoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUrlInput() {
    return this._ssoUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_account_on_login: cdktf.booleanToTerraform(this._autoCreateAccountOnLogin),
      case_insensitive_name_ids: cdktf.booleanToTerraform(this._caseInsensitiveNameIds),
      cookie_max_age: cdktf.stringToTerraform(this._cookieMaxAge),
      description: cdktf.stringToTerraform(this._description),
      issuer: cdktf.stringToTerraform(this._issuer),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      sso_binding: cdktf.stringToTerraform(this._ssoBinding),
      sso_url: cdktf.stringToTerraform(this._ssoUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_account_on_login: {
        value: cdktf.booleanToHclTerraform(this._autoCreateAccountOnLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      case_insensitive_name_ids: {
        value: cdktf.booleanToHclTerraform(this._caseInsensitiveNameIds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cookie_max_age: {
        value: cdktf.stringToHclTerraform(this._cookieMaxAge),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_binding: {
        value: cdktf.stringToHclTerraform(this._ssoBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_url: {
        value: cdktf.stringToHclTerraform(this._ssoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
