// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tag label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/tag#label DataRadarrTag#label}
  */
  readonly label: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/tag radarr_tag}
*/
export class DataRadarrTag extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrTag to import
  * @param importFromId The id of the existing DataRadarrTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/tag radarr_tag} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrTagConfig
  */
  public constructor(scope: Construct, id: string, config: DataRadarrTagConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_tag',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._label = config.label;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      label: cdktf.stringToTerraform(this._label),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
