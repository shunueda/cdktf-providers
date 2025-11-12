// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/blueprints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraBlueprintsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional filter to select only Blueprints matching the specified Reference Design.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/blueprints#reference_design DataApstraBlueprints#reference_design}
  */
  readonly referenceDesign?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/blueprints apstra_blueprints}
*/
export class DataApstraBlueprints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_blueprints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraBlueprints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraBlueprints to import
  * @param importFromId The id of the existing DataApstraBlueprints that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/blueprints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraBlueprints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_blueprints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/blueprints apstra_blueprints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraBlueprintsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraBlueprintsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_blueprints',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._referenceDesign = config.referenceDesign;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // reference_design - computed: false, optional: true, required: false
  private _referenceDesign?: string; 
  public get referenceDesign() {
    return this.getStringAttribute('reference_design');
  }
  public set referenceDesign(value: string) {
    this._referenceDesign = value;
  }
  public resetReferenceDesign() {
    this._referenceDesign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceDesignInput() {
    return this._referenceDesign;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      reference_design: cdktf.stringToTerraform(this._referenceDesign),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      reference_design: {
        value: cdktf.stringToHclTerraform(this._referenceDesign),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
