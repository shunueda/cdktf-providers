// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/idp_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZitadelIdpSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/idp_saml#id DataZitadelIdpSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/idp_saml zitadel_idp_saml}
*/
export class DataZitadelIdpSaml extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_idp_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZitadelIdpSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZitadelIdpSaml to import
  * @param importFromId The id of the existing DataZitadelIdpSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/idp_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZitadelIdpSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_idp_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/idp_saml zitadel_idp_saml} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZitadelIdpSamlConfig
  */
  public constructor(scope: Construct, id: string, config: DataZitadelIdpSamlConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_idp_saml',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_linking - computed: true, optional: false, required: false
  public get autoLinking() {
    return this.getStringAttribute('auto_linking');
  }

  // binding - computed: true, optional: false, required: false
  public get binding() {
    return this.getStringAttribute('binding');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_auto_creation - computed: true, optional: false, required: false
  public get isAutoCreation() {
    return this.getBooleanAttribute('is_auto_creation');
  }

  // is_auto_update - computed: true, optional: false, required: false
  public get isAutoUpdate() {
    return this.getBooleanAttribute('is_auto_update');
  }

  // is_creation_allowed - computed: true, optional: false, required: false
  public get isCreationAllowed() {
    return this.getBooleanAttribute('is_creation_allowed');
  }

  // is_linking_allowed - computed: true, optional: false, required: false
  public get isLinkingAllowed() {
    return this.getBooleanAttribute('is_linking_allowed');
  }

  // metadata_xml - computed: true, optional: false, required: false
  public get metadataXml() {
    return this.getStringAttribute('metadata_xml');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // with_signed_request - computed: true, optional: false, required: false
  public get withSignedRequest() {
    return this.getStringAttribute('with_signed_request');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
