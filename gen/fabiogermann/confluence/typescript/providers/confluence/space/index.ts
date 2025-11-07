// https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The space key of the confluence space (all caps)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space#key Space#key}
  */
  readonly key: string;
  /**
  * The name of the confluence space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space#name Space#name}
  */
  readonly name?: string;
  /**
  * The URL for the space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space#url Space#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space confluence_space}
*/
export class Space extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluence_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Space resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Space to import
  * @param importFromId The id of the existing Space that should be imported. Refer to the {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Space to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluence_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space confluence_space} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpaceConfig
  */
  public constructor(scope: Construct, id: string, config: SpaceConfig) {
    super(scope, id, {
      terraformResourceType: 'confluence_space',
      terraformGeneratorMetadata: {
        providerName: 'confluence',
        providerVersion: '0.2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._key = config.key;
    this._name = config.name;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
