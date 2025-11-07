// https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/organisation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBridgecrewOrganisationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/organisation#id DataBridgecrewOrganisation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/organisation bridgecrew_organisation}
*/
export class DataBridgecrewOrganisation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bridgecrew_organisation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBridgecrewOrganisation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBridgecrewOrganisation to import
  * @param importFromId The id of the existing DataBridgecrewOrganisation that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/organisation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBridgecrewOrganisation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bridgecrew_organisation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/organisation bridgecrew_organisation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBridgecrewOrganisationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBridgecrewOrganisationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bridgecrew_organisation',
      terraformGeneratorMetadata: {
        providerName: 'bridgecrew',
        providerVersion: '0.3.7'
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

  // organisation - computed: true, optional: false, required: false
  public get organisation() {
    return this.getStringAttribute('organisation');
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
