// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationIdpSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * The web address of an IdP SAML Metadata XML document. Conflicts with `idp_metadata_xml`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml#idp_metadata_url IntegrationIdpSaml#idp_metadata_url}
  */
  readonly idpMetadataUrl?: string;
  /**
  * Full SAML metadata XML document. Must be base64 encoded. Conflicts with `idp_metadata_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml#idp_metadata_xml IntegrationIdpSaml#idp_metadata_xml}
  */
  readonly idpMetadataXml?: string;
  /**
  * A valid id for a SAML Draft. Must be at least 5 character long. See attribute `id` in resource `cyral_integration_idp_saml_draft`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml#saml_draft_id IntegrationIdpSaml#saml_draft_id}
  */
  readonly samlDraftId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml cyral_integration_idp_saml}
*/
export class IntegrationIdpSaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_integration_idp_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationIdpSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationIdpSaml to import
  * @param importFromId The id of the existing IntegrationIdpSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationIdpSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_integration_idp_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_saml cyral_integration_idp_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationIdpSamlConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationIdpSamlConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_integration_idp_saml',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._idpMetadataUrl = config.idpMetadataUrl;
    this._idpMetadataXml = config.idpMetadataXml;
    this._samlDraftId = config.samlDraftId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_metadata_url - computed: false, optional: true, required: false
  private _idpMetadataUrl?: string; 
  public get idpMetadataUrl() {
    return this.getStringAttribute('idp_metadata_url');
  }
  public set idpMetadataUrl(value: string) {
    this._idpMetadataUrl = value;
  }
  public resetIdpMetadataUrl() {
    this._idpMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataUrlInput() {
    return this._idpMetadataUrl;
  }

  // idp_metadata_xml - computed: false, optional: true, required: false
  private _idpMetadataXml?: string; 
  public get idpMetadataXml() {
    return this.getStringAttribute('idp_metadata_xml');
  }
  public set idpMetadataXml(value: string) {
    this._idpMetadataXml = value;
  }
  public resetIdpMetadataXml() {
    this._idpMetadataXml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataXmlInput() {
    return this._idpMetadataXml;
  }

  // saml_draft_id - computed: false, optional: false, required: true
  private _samlDraftId?: string; 
  public get samlDraftId() {
    return this.getStringAttribute('saml_draft_id');
  }
  public set samlDraftId(value: string) {
    this._samlDraftId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlDraftIdInput() {
    return this._samlDraftId;
  }

  // single_sign_on_service_url - computed: true, optional: false, required: false
  public get singleSignOnServiceUrl() {
    return this.getStringAttribute('single_sign_on_service_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      idp_metadata_url: cdktf.stringToTerraform(this._idpMetadataUrl),
      idp_metadata_xml: cdktf.stringToTerraform(this._idpMetadataXml),
      saml_draft_id: cdktf.stringToTerraform(this._samlDraftId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      idp_metadata_url: {
        value: cdktf.stringToHclTerraform(this._idpMetadataUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_metadata_xml: {
        value: cdktf.stringToHclTerraform(this._idpMetadataXml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_draft_id: {
        value: cdktf.stringToHclTerraform(this._samlDraftId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
