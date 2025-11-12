// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable if users should get prompted to link an existing ZITADEL user to an external account if the selected attribute matches, supported values: AUTO_LINKING_OPTION_UNSPECIFIED, AUTO_LINKING_OPTION_USERNAME, AUTO_LINKING_OPTION_EMAIL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml#auto_linking IdpSaml#auto_linking}
  */
  readonly autoLinking?: string;
  /**
  * The binding, supported values: SAML_BINDING_UNSPECIFIED, SAML_BINDING_POST, SAML_BINDING_REDIRECT, SAML_BINDING_ARTIFACT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml#binding IdpSaml#binding}
  */
  readonly binding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml#id IdpSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * enable if a new account in ZITADEL should be created automatically on login with an external account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml#is_auto_creation IdpSaml#is_auto_creation}
  */
  readonly isAutoCreation: boolean | cdktf.IResolvable;
  /**
  * enable if a the ZITADEL account fields should be updated automatically on each login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml#is_auto_update IdpSaml#is_auto_update}
  */
  readonly isAutoUpdate: boolean | cdktf.IResolvable;
  /**
  * enable if users should be able to create a new account in ZITADEL when using an external account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml#is_creation_allowed IdpSaml#is_creation_allowed}
  */
  readonly isCreationAllowed: boolean | cdktf.IResolvable;
  /**
  * enable if users should be able to link an existing ZITADEL user with an external account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml#is_linking_allowed IdpSaml#is_linking_allowed}
  */
  readonly isLinkingAllowed: boolean | cdktf.IResolvable;
  /**
  * The metadata XML as plain string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml#metadata_xml IdpSaml#metadata_xml}
  */
  readonly metadataXml: string;
  /**
  * Name of the IDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml#name IdpSaml#name}
  */
  readonly name?: string;
  /**
  * Whether the SAML IDP requires signed requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml#with_signed_request IdpSaml#with_signed_request}
  */
  readonly withSignedRequest?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml zitadel_idp_saml}
*/
export class IdpSaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_idp_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpSaml to import
  * @param importFromId The id of the existing IdpSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_idp_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/idp_saml zitadel_idp_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpSamlConfig
  */
  public constructor(scope: Construct, id: string, config: IdpSamlConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_idp_saml',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoLinking = config.autoLinking;
    this._binding = config.binding;
    this._id = config.id;
    this._isAutoCreation = config.isAutoCreation;
    this._isAutoUpdate = config.isAutoUpdate;
    this._isCreationAllowed = config.isCreationAllowed;
    this._isLinkingAllowed = config.isLinkingAllowed;
    this._metadataXml = config.metadataXml;
    this._name = config.name;
    this._withSignedRequest = config.withSignedRequest;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_linking - computed: false, optional: true, required: false
  private _autoLinking?: string; 
  public get autoLinking() {
    return this.getStringAttribute('auto_linking');
  }
  public set autoLinking(value: string) {
    this._autoLinking = value;
  }
  public resetAutoLinking() {
    this._autoLinking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLinkingInput() {
    return this._autoLinking;
  }

  // binding - computed: false, optional: true, required: false
  private _binding?: string; 
  public get binding() {
    return this.getStringAttribute('binding');
  }
  public set binding(value: string) {
    this._binding = value;
  }
  public resetBinding() {
    this._binding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding;
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

  // is_auto_creation - computed: false, optional: false, required: true
  private _isAutoCreation?: boolean | cdktf.IResolvable; 
  public get isAutoCreation() {
    return this.getBooleanAttribute('is_auto_creation');
  }
  public set isAutoCreation(value: boolean | cdktf.IResolvable) {
    this._isAutoCreation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoCreationInput() {
    return this._isAutoCreation;
  }

  // is_auto_update - computed: false, optional: false, required: true
  private _isAutoUpdate?: boolean | cdktf.IResolvable; 
  public get isAutoUpdate() {
    return this.getBooleanAttribute('is_auto_update');
  }
  public set isAutoUpdate(value: boolean | cdktf.IResolvable) {
    this._isAutoUpdate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoUpdateInput() {
    return this._isAutoUpdate;
  }

  // is_creation_allowed - computed: false, optional: false, required: true
  private _isCreationAllowed?: boolean | cdktf.IResolvable; 
  public get isCreationAllowed() {
    return this.getBooleanAttribute('is_creation_allowed');
  }
  public set isCreationAllowed(value: boolean | cdktf.IResolvable) {
    this._isCreationAllowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isCreationAllowedInput() {
    return this._isCreationAllowed;
  }

  // is_linking_allowed - computed: false, optional: false, required: true
  private _isLinkingAllowed?: boolean | cdktf.IResolvable; 
  public get isLinkingAllowed() {
    return this.getBooleanAttribute('is_linking_allowed');
  }
  public set isLinkingAllowed(value: boolean | cdktf.IResolvable) {
    this._isLinkingAllowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isLinkingAllowedInput() {
    return this._isLinkingAllowed;
  }

  // metadata_xml - computed: false, optional: false, required: true
  private _metadataXml?: string; 
  public get metadataXml() {
    return this.getStringAttribute('metadata_xml');
  }
  public set metadataXml(value: string) {
    this._metadataXml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataXmlInput() {
    return this._metadataXml;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // with_signed_request - computed: false, optional: true, required: false
  private _withSignedRequest?: boolean | cdktf.IResolvable; 
  public get withSignedRequest() {
    return this.getBooleanAttribute('with_signed_request');
  }
  public set withSignedRequest(value: boolean | cdktf.IResolvable) {
    this._withSignedRequest = value;
  }
  public resetWithSignedRequest() {
    this._withSignedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSignedRequestInput() {
    return this._withSignedRequest;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_linking: cdktf.stringToTerraform(this._autoLinking),
      binding: cdktf.stringToTerraform(this._binding),
      id: cdktf.stringToTerraform(this._id),
      is_auto_creation: cdktf.booleanToTerraform(this._isAutoCreation),
      is_auto_update: cdktf.booleanToTerraform(this._isAutoUpdate),
      is_creation_allowed: cdktf.booleanToTerraform(this._isCreationAllowed),
      is_linking_allowed: cdktf.booleanToTerraform(this._isLinkingAllowed),
      metadata_xml: cdktf.stringToTerraform(this._metadataXml),
      name: cdktf.stringToTerraform(this._name),
      with_signed_request: cdktf.booleanToTerraform(this._withSignedRequest),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_linking: {
        value: cdktf.stringToHclTerraform(this._autoLinking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binding: {
        value: cdktf.stringToHclTerraform(this._binding),
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
      is_auto_creation: {
        value: cdktf.booleanToHclTerraform(this._isAutoCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_auto_update: {
        value: cdktf.booleanToHclTerraform(this._isAutoUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_creation_allowed: {
        value: cdktf.booleanToHclTerraform(this._isCreationAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_linking_allowed: {
        value: cdktf.booleanToHclTerraform(this._isLinkingAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata_xml: {
        value: cdktf.stringToHclTerraform(this._metadataXml),
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
      with_signed_request: {
        value: cdktf.booleanToHclTerraform(this._withSignedRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
