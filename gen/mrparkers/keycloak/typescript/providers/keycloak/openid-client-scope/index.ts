// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenidClientScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_scope#consent_screen_text OpenidClientScope#consent_screen_text}
  */
  readonly consentScreenText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_scope#description OpenidClientScope#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_scope#gui_order OpenidClientScope#gui_order}
  */
  readonly guiOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_scope#id OpenidClientScope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_scope#include_in_token_scope OpenidClientScope#include_in_token_scope}
  */
  readonly includeInTokenScope?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_scope#name OpenidClientScope#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_scope#realm_id OpenidClientScope#realm_id}
  */
  readonly realmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_scope keycloak_openid_client_scope}
*/
export class OpenidClientScope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_openid_client_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenidClientScope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenidClientScope to import
  * @param importFromId The id of the existing OpenidClientScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenidClientScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_openid_client_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_scope keycloak_openid_client_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenidClientScopeConfig
  */
  public constructor(scope: Construct, id: string, config: OpenidClientScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_openid_client_scope',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0',
        providerVersionConstraint: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consentScreenText = config.consentScreenText;
    this._description = config.description;
    this._guiOrder = config.guiOrder;
    this._id = config.id;
    this._includeInTokenScope = config.includeInTokenScope;
    this._name = config.name;
    this._realmId = config.realmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consent_screen_text - computed: false, optional: true, required: false
  private _consentScreenText?: string; 
  public get consentScreenText() {
    return this.getStringAttribute('consent_screen_text');
  }
  public set consentScreenText(value: string) {
    this._consentScreenText = value;
  }
  public resetConsentScreenText() {
    this._consentScreenText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentScreenTextInput() {
    return this._consentScreenText;
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

  // gui_order - computed: false, optional: true, required: false
  private _guiOrder?: number; 
  public get guiOrder() {
    return this.getNumberAttribute('gui_order');
  }
  public set guiOrder(value: number) {
    this._guiOrder = value;
  }
  public resetGuiOrder() {
    this._guiOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiOrderInput() {
    return this._guiOrder;
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

  // include_in_token_scope - computed: false, optional: true, required: false
  private _includeInTokenScope?: boolean | cdktf.IResolvable; 
  public get includeInTokenScope() {
    return this.getBooleanAttribute('include_in_token_scope');
  }
  public set includeInTokenScope(value: boolean | cdktf.IResolvable) {
    this._includeInTokenScope = value;
  }
  public resetIncludeInTokenScope() {
    this._includeInTokenScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInTokenScopeInput() {
    return this._includeInTokenScope;
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

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consent_screen_text: cdktf.stringToTerraform(this._consentScreenText),
      description: cdktf.stringToTerraform(this._description),
      gui_order: cdktf.numberToTerraform(this._guiOrder),
      id: cdktf.stringToTerraform(this._id),
      include_in_token_scope: cdktf.booleanToTerraform(this._includeInTokenScope),
      name: cdktf.stringToTerraform(this._name),
      realm_id: cdktf.stringToTerraform(this._realmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consent_screen_text: {
        value: cdktf.stringToHclTerraform(this._consentScreenText),
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
      gui_order: {
        value: cdktf.numberToHclTerraform(this._guiOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_in_token_scope: {
        value: cdktf.booleanToHclTerraform(this._includeInTokenScope),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
