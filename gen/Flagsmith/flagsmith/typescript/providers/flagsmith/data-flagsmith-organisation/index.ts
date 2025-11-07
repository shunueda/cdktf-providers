// https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/data-sources/organisation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFlagsmithOrganisationConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the organisation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/data-sources/organisation#uuid DataFlagsmithOrganisation#uuid}
  */
  readonly uuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/data-sources/organisation flagsmith_organisation}
*/
export class DataFlagsmithOrganisation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flagsmith_organisation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFlagsmithOrganisation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFlagsmithOrganisation to import
  * @param importFromId The id of the existing DataFlagsmithOrganisation that should be imported. Refer to the {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/data-sources/organisation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFlagsmithOrganisation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flagsmith_organisation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/data-sources/organisation flagsmith_organisation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFlagsmithOrganisationConfig
  */
  public constructor(scope: Construct, id: string, config: DataFlagsmithOrganisationConfig) {
    super(scope, id, {
      terraformResourceType: 'flagsmith_organisation',
      terraformGeneratorMetadata: {
        providerName: 'flagsmith',
        providerVersion: '0.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force_2fa - computed: true, optional: false, required: false
  public get force2Fa() {
    return this.getBooleanAttribute('force_2fa');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // persist_trait_data - computed: true, optional: false, required: false
  public get persistTraitData() {
    return this.getBooleanAttribute('persist_trait_data');
  }

  // restrict_project_create_to_admin - computed: true, optional: false, required: false
  public get restrictProjectCreateToAdmin() {
    return this.getBooleanAttribute('restrict_project_create_to_admin');
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
