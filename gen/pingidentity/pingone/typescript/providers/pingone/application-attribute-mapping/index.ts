// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationAttributeMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the application to create the attribute mapping for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping#application_id ApplicationAttributeMapping#application_id}
  */
  readonly applicationId: string;
  /**
  * The ID of the environment to create the application attribute mapping in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping#environment_id ApplicationAttributeMapping#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the name of attribute and must be unique within an application. For SAML applications, the `saml_subject` name is a case-insensitive name which indicates the mapping to be used for the subject in an assertion and can be overridden. For OpenID Connect applications, the `sub` name indicates the mapping to be used for the subject in the token and can be overridden.  The following OpenID Connect names are reserved and cannot be used: `acr`, `amr`, `at_hash`, `aud`, `auth_time`, `azp`, `client_id`, `exp`, `iat`, `iss`, `jti`, `nbf`, `nonce`, `org`, `scope`, `sid`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping#name ApplicationAttributeMapping#name}
  */
  readonly name: string;
  /**
  * Whether the attribute mapping should be available in the ID Token. This property is applicable only when the application's `protocol` property is `OPENID_CONNECT`. If omitted, the default is `true`. Note that the `id_token_enabled` and `userinfo_enabled` properties cannot both be set to `false`. At least one of these properties must have a value of `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping#oidc_id_token_enabled ApplicationAttributeMapping#oidc_id_token_enabled}
  */
  readonly oidcIdTokenEnabled?: boolean | cdktf.IResolvable;
  /**
  * OIDC resource scope IDs that this attribute mapping is available for exclusively. This setting overrides any global OIDC resource scopes that contain an attribute mapping with the same name. The list can contain only scope IDs that have been granted for the application through the `/grants` endpoint. At least one scope ID is expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping#oidc_scopes ApplicationAttributeMapping#oidc_scopes}
  */
  readonly oidcScopes?: string[];
  /**
  * Whether the attribute mapping should be available through the `/as/userinfo` endpoint. This property is applicable only when the application's protocol property is `OPENID_CONNECT`. If omitted, the default is `true`. Note that the `id_token_enabled` and `userinfo_enabled` properties cannot both be set to `false`. At least one of these properties must have a value of `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping#oidc_userinfo_enabled ApplicationAttributeMapping#oidc_userinfo_enabled}
  */
  readonly oidcUserinfoEnabled?: boolean | cdktf.IResolvable;
  /**
  * A boolean to specify whether a mapping value is required for this attribute. If `true`, a value must be set and a non-empty value must be available in the SAML assertion or ID token. If overriding a core attribute mapping (`saml_subject` for SAML applications and `sub` for OpenID Connect applications), then this value must be set to `true`.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping#required ApplicationAttributeMapping#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * A URI reference representing the classification of the attribute, which helps the service provider interpret the attribute format.  This property is applicable only when the application's protocol property is `SAML` and the name is the `saml_subject` core attribute.  Examples include `urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified`, `urn:oasis:names:tc:SAML:2.0:attrname-format:uri`, `urn:oasis:names:tc:SAML:2.0:attrname-format:basic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping#saml_subject_nameformat ApplicationAttributeMapping#saml_subject_nameformat}
  */
  readonly samlSubjectNameformat?: string;
  /**
  * A string that specifies the string constants or expression for mapping the attribute path against a specific source. The expression format is `${<source>.<attribute_path>}`. The only supported source is user (for example, `${user.id}`).  When defining attribute mapping values in Terraform, the expression must be escaped (for example `value = "$${user.id}}"`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping#value ApplicationAttributeMapping#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping pingone_application_attribute_mapping}
*/
export class ApplicationAttributeMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_application_attribute_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationAttributeMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationAttributeMapping to import
  * @param importFromId The id of the existing ApplicationAttributeMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationAttributeMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_application_attribute_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_attribute_mapping pingone_application_attribute_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationAttributeMappingConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationAttributeMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_application_attribute_mapping',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._environmentId = config.environmentId;
    this._name = config.name;
    this._oidcIdTokenEnabled = config.oidcIdTokenEnabled;
    this._oidcScopes = config.oidcScopes;
    this._oidcUserinfoEnabled = config.oidcUserinfoEnabled;
    this._required = config.required;
    this._samlSubjectNameformat = config.samlSubjectNameformat;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mapping_type - computed: true, optional: false, required: false
  public get mappingType() {
    return this.getStringAttribute('mapping_type');
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

  // oidc_id_token_enabled - computed: true, optional: true, required: false
  private _oidcIdTokenEnabled?: boolean | cdktf.IResolvable; 
  public get oidcIdTokenEnabled() {
    return this.getBooleanAttribute('oidc_id_token_enabled');
  }
  public set oidcIdTokenEnabled(value: boolean | cdktf.IResolvable) {
    this._oidcIdTokenEnabled = value;
  }
  public resetOidcIdTokenEnabled() {
    this._oidcIdTokenEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcIdTokenEnabledInput() {
    return this._oidcIdTokenEnabled;
  }

  // oidc_scopes - computed: true, optional: true, required: false
  private _oidcScopes?: string[]; 
  public get oidcScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oidc_scopes'));
  }
  public set oidcScopes(value: string[]) {
    this._oidcScopes = value;
  }
  public resetOidcScopes() {
    this._oidcScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcScopesInput() {
    return this._oidcScopes;
  }

  // oidc_userinfo_enabled - computed: true, optional: true, required: false
  private _oidcUserinfoEnabled?: boolean | cdktf.IResolvable; 
  public get oidcUserinfoEnabled() {
    return this.getBooleanAttribute('oidc_userinfo_enabled');
  }
  public set oidcUserinfoEnabled(value: boolean | cdktf.IResolvable) {
    this._oidcUserinfoEnabled = value;
  }
  public resetOidcUserinfoEnabled() {
    this._oidcUserinfoEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcUserinfoEnabledInput() {
    return this._oidcUserinfoEnabled;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // saml_subject_nameformat - computed: false, optional: true, required: false
  private _samlSubjectNameformat?: string; 
  public get samlSubjectNameformat() {
    return this.getStringAttribute('saml_subject_nameformat');
  }
  public set samlSubjectNameformat(value: string) {
    this._samlSubjectNameformat = value;
  }
  public resetSamlSubjectNameformat() {
    this._samlSubjectNameformat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSubjectNameformatInput() {
    return this._samlSubjectNameformat;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      oidc_id_token_enabled: cdktf.booleanToTerraform(this._oidcIdTokenEnabled),
      oidc_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oidcScopes),
      oidc_userinfo_enabled: cdktf.booleanToTerraform(this._oidcUserinfoEnabled),
      required: cdktf.booleanToTerraform(this._required),
      saml_subject_nameformat: cdktf.stringToTerraform(this._samlSubjectNameformat),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      oidc_id_token_enabled: {
        value: cdktf.booleanToHclTerraform(this._oidcIdTokenEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oidcScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      oidc_userinfo_enabled: {
        value: cdktf.booleanToHclTerraform(this._oidcUserinfoEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      saml_subject_nameformat: {
        value: cdktf.stringToHclTerraform(this._samlSubjectNameformat),
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
