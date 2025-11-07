// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/quickdeploy_template_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixQuickdeployTemplateImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/quickdeploy_template_image#name DataCitrixQuickdeployTemplateImage#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/quickdeploy_template_image citrix_quickdeploy_template_image}
*/
export class DataCitrixQuickdeployTemplateImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_quickdeploy_template_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixQuickdeployTemplateImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixQuickdeployTemplateImage to import
  * @param importFromId The id of the existing DataCitrixQuickdeployTemplateImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/quickdeploy_template_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixQuickdeployTemplateImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_quickdeploy_template_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/quickdeploy_template_image citrix_quickdeploy_template_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixQuickdeployTemplateImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataCitrixQuickdeployTemplateImageConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_quickdeploy_template_image',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machine_generation - computed: true, optional: false, required: false
  public get machineGeneration() {
    return this.getStringAttribute('machine_generation');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // os_platform - computed: true, optional: false, required: false
  public get osPlatform() {
    return this.getStringAttribute('os_platform');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secure_boot_enabled - computed: true, optional: false, required: false
  public get secureBootEnabled() {
    return this.getBooleanAttribute('secure_boot_enabled');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_name - computed: true, optional: false, required: false
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }

  // vtpm_enabled - computed: true, optional: false, required: false
  public get vtpmEnabled() {
    return this.getBooleanAttribute('vtpm_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
