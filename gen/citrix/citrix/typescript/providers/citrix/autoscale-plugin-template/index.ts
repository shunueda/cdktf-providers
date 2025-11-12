// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/autoscale_plugin_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalePluginTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Date range for the autoscale holiday plugin template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/autoscale_plugin_template#dates AutoscalePluginTemplate#dates}
  */
  readonly dates?: string[];
  /**
  * Name of the autoscale plugin template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/autoscale_plugin_template#name AutoscalePluginTemplate#name}
  */
  readonly name: string;
  /**
  * Type of the autoscale plugin template. Only template type `Holiday` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/autoscale_plugin_template#type AutoscalePluginTemplate#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/autoscale_plugin_template citrix_autoscale_plugin_template}
*/
export class AutoscalePluginTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_autoscale_plugin_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoscalePluginTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoscalePluginTemplate to import
  * @param importFromId The id of the existing AutoscalePluginTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/autoscale_plugin_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoscalePluginTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_autoscale_plugin_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/autoscale_plugin_template citrix_autoscale_plugin_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalePluginTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalePluginTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_autoscale_plugin_template',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dates = config.dates;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dates - computed: false, optional: true, required: false
  private _dates?: string[]; 
  public get dates() {
    return cdktf.Fn.tolist(this.getListAttribute('dates'));
  }
  public set dates(value: string[]) {
    this._dates = value;
  }
  public resetDates() {
    this._dates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datesInput() {
    return this._dates;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dates),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
