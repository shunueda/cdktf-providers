// https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagConfig extends cdktf.TerraformMetaArguments {
  /**
  * A valid hex color code in 6-digit format with # prefix (e.g., '#abc0ff'). 
  * Must be lowercase and include the # symbol followed by exactly 6 hexadecimal characters (0-9, a-f).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/tag#color_hex Tag#color_hex}
  */
  readonly colorHex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/tag#tag Tag#tag}
  */
  readonly tag: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/tag uptime_tag}
*/
export class Tag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tag to import
  * @param importFromId The id of the existing Tag that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/tag uptime_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagConfig
  */
  public constructor(scope: Construct, id: string, config: TagConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_tag',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.17.1',
        providerVersionConstraint: '2.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._colorHex = config.colorHex;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color_hex - computed: true, optional: true, required: false
  private _colorHex?: string; 
  public get colorHex() {
    return this.getStringAttribute('color_hex');
  }
  public set colorHex(value: string) {
    this._colorHex = value;
  }
  public resetColorHex() {
    this._colorHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorHexInput() {
    return this._colorHex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color_hex: cdktf.stringToTerraform(this._colorHex),
      tag: cdktf.stringToTerraform(this._tag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color_hex: {
        value: cdktf.stringToHclTerraform(this._colorHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
