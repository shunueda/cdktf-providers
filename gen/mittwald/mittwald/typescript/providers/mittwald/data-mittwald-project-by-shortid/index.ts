// https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/data-sources/project_by_shortid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMittwaldProjectByShortidConfig extends cdktf.TerraformMetaArguments {
  /**
  * The project short ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/data-sources/project_by_shortid#short_id DataMittwaldProjectByShortid#short_id}
  */
  readonly shortId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/data-sources/project_by_shortid mittwald_project_by_shortid}
*/
export class DataMittwaldProjectByShortid extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mittwald_project_by_shortid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMittwaldProjectByShortid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMittwaldProjectByShortid to import
  * @param importFromId The id of the existing DataMittwaldProjectByShortid that should be imported. Refer to the {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/data-sources/project_by_shortid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMittwaldProjectByShortid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mittwald_project_by_shortid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/data-sources/project_by_shortid mittwald_project_by_shortid} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMittwaldProjectByShortidConfig
  */
  public constructor(scope: Construct, id: string, config: DataMittwaldProjectByShortidConfig) {
    super(scope, id, {
      terraformResourceType: 'mittwald_project_by_shortid',
      terraformGeneratorMetadata: {
        providerName: 'mittwald',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._shortId = config.shortId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // short_id - computed: false, optional: false, required: true
  private _shortId?: string; 
  public get shortId() {
    return this.getStringAttribute('short_id');
  }
  public set shortId(value: string) {
    this._shortId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortIdInput() {
    return this._shortId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      short_id: cdktf.stringToTerraform(this._shortId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      short_id: {
        value: cdktf.stringToHclTerraform(this._shortId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
