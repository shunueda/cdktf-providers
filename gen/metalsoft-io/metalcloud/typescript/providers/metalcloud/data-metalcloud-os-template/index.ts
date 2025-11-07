// https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/data-sources/os_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMetalcloudOsTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * OS template label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/data-sources/os_template#label DataMetalcloudOsTemplate#label}
  */
  readonly label: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/data-sources/os_template metalcloud_os_template}
*/
export class DataMetalcloudOsTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metalcloud_os_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMetalcloudOsTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMetalcloudOsTemplate to import
  * @param importFromId The id of the existing DataMetalcloudOsTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/data-sources/os_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMetalcloudOsTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metalcloud_os_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/data-sources/os_template metalcloud_os_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMetalcloudOsTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataMetalcloudOsTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'metalcloud_os_template',
      terraformGeneratorMetadata: {
        providerName: 'metalcloud',
        providerVersion: '7.0.10'
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

  // os_template_id - computed: true, optional: false, required: false
  public get osTemplateId() {
    return this.getStringAttribute('os_template_id');
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
