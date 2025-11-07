// https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/data-sources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMultipassInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/data-sources/instance#name DataMultipassInstance#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/data-sources/instance multipass_instance}
*/
export class DataMultipassInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "multipass_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMultipassInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMultipassInstance to import
  * @param importFromId The id of the existing DataMultipassInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/data-sources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMultipassInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "multipass_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/data-sources/instance multipass_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMultipassInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataMultipassInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'multipass_instance',
      terraformGeneratorMetadata: {
        providerName: 'multipass',
        providerVersion: '1.4.2'
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

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_hash - computed: true, optional: false, required: false
  public get imageHash() {
    return this.getStringAttribute('image_hash');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
