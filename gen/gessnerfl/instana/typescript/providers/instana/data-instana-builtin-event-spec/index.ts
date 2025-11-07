// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/builtin_event_spec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstanaBuiltinEventSpecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/builtin_event_spec#id DataInstanaBuiltinEventSpec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the builtin event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/builtin_event_spec#name DataInstanaBuiltinEventSpec#name}
  */
  readonly name: string;
  /**
  * The plugin id for which the builtin event is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/builtin_event_spec#short_plugin_id DataInstanaBuiltinEventSpec#short_plugin_id}
  */
  readonly shortPluginId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/builtin_event_spec instana_builtin_event_spec}
*/
export class DataInstanaBuiltinEventSpec extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_builtin_event_spec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstanaBuiltinEventSpec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstanaBuiltinEventSpec to import
  * @param importFromId The id of the existing DataInstanaBuiltinEventSpec that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/builtin_event_spec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstanaBuiltinEventSpec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_builtin_event_spec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/builtin_event_spec instana_builtin_event_spec} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstanaBuiltinEventSpecConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstanaBuiltinEventSpecConfig) {
    super(scope, id, {
      terraformResourceType: 'instana_builtin_event_spec',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0'
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
    this._name = config.name;
    this._shortPluginId = config.shortPluginId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

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

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // severity_code - computed: true, optional: false, required: false
  public get severityCode() {
    return this.getNumberAttribute('severity_code');
  }

  // short_plugin_id - computed: false, optional: false, required: true
  private _shortPluginId?: string; 
  public get shortPluginId() {
    return this.getStringAttribute('short_plugin_id');
  }
  public set shortPluginId(value: string) {
    this._shortPluginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortPluginIdInput() {
    return this._shortPluginId;
  }

  // triggering - computed: true, optional: false, required: false
  public get triggering() {
    return this.getBooleanAttribute('triggering');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      short_plugin_id: cdktf.stringToTerraform(this._shortPluginId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_plugin_id: {
        value: cdktf.stringToHclTerraform(this._shortPluginId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
