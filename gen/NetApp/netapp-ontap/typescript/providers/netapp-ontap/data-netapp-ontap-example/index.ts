// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/example
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapExampleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Example configurable attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/example#configurable_attribute DataNetappOntapExample#configurable_attribute}
  */
  readonly configurableAttribute?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/example netapp-ontap_example}
*/
export class DataNetappOntapExample extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_example";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapExample resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapExample to import
  * @param importFromId The id of the existing DataNetappOntapExample that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/example#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapExample to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_example", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/example netapp-ontap_example} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapExampleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapExampleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_example',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
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
    this._configurableAttribute = config.configurableAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configurable_attribute - computed: false, optional: true, required: false
  private _configurableAttribute?: string; 
  public get configurableAttribute() {
    return this.getStringAttribute('configurable_attribute');
  }
  public set configurableAttribute(value: string) {
    this._configurableAttribute = value;
  }
  public resetConfigurableAttribute() {
    this._configurableAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurableAttributeInput() {
    return this._configurableAttribute;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configurable_attribute: cdktf.stringToTerraform(this._configurableAttribute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configurable_attribute: {
        value: cdktf.stringToHclTerraform(this._configurableAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
