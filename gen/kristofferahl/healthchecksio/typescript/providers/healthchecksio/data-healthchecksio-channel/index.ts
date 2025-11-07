// https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/data-sources/channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHealthchecksioChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Kind of channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/data-sources/channel#kind DataHealthchecksioChannel#kind}
  */
  readonly kind: string;
  /**
  * Name of the channel to search for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/data-sources/channel#name DataHealthchecksioChannel#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/data-sources/channel healthchecksio_channel}
*/
export class DataHealthchecksioChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "healthchecksio_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHealthchecksioChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHealthchecksioChannel to import
  * @param importFromId The id of the existing DataHealthchecksioChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/data-sources/channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHealthchecksioChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "healthchecksio_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kristofferahl/healthchecksio/2.3.0/docs/data-sources/channel healthchecksio_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHealthchecksioChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataHealthchecksioChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'healthchecksio_channel',
      terraformGeneratorMetadata: {
        providerName: 'healthchecksio',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._kind = config.kind;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
