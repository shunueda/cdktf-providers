// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/idp_metadata_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaIdpMetadataSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/idp_metadata_saml#id DataOktaIdpMetadataSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The id of the IdP to retrieve metadata for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/idp_metadata_saml#idp_id DataOktaIdpMetadataSaml#idp_id}
  */
  readonly idpId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/idp_metadata_saml okta_idp_metadata_saml}
*/
export class DataOktaIdpMetadataSaml extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_idp_metadata_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaIdpMetadataSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaIdpMetadataSaml to import
  * @param importFromId The id of the existing DataOktaIdpMetadataSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/idp_metadata_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaIdpMetadataSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_idp_metadata_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/idp_metadata_saml okta_idp_metadata_saml} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaIdpMetadataSamlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaIdpMetadataSamlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_idp_metadata_saml',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._idpId = config.idpId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assertions_signed - computed: true, optional: false, required: false
  public get assertionsSigned() {
    return this.getBooleanAttribute('assertions_signed');
  }

  // authn_request_signed - computed: true, optional: false, required: false
  public get authnRequestSigned() {
    return this.getBooleanAttribute('authn_request_signed');
  }

  // encryption_certificate - computed: true, optional: false, required: false
  public get encryptionCertificate() {
    return this.getStringAttribute('encryption_certificate');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // http_post_binding - computed: true, optional: false, required: false
  public get httpPostBinding() {
    return this.getStringAttribute('http_post_binding');
  }

  // http_redirect_binding - computed: true, optional: false, required: false
  public get httpRedirectBinding() {
    return this.getStringAttribute('http_redirect_binding');
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

  // idp_id - computed: false, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // signing_certificate - computed: true, optional: false, required: false
  public get signingCertificate() {
    return this.getStringAttribute('signing_certificate');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      idp_id: cdktf.stringToTerraform(this._idpId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_id: {
        value: cdktf.stringToHclTerraform(this._idpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
