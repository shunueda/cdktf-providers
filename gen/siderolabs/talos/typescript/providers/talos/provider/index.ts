// https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TalosProviderConfig {
  /**
  * The URL of Image Factory to generate schematics. If not set defaults to https://factory.talos.dev.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs#image_factory_url TalosProvider#image_factory_url}
  */
  readonly imageFactoryUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs#alias TalosProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs talos}
*/
export class TalosProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "talos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TalosProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TalosProvider to import
  * @param importFromId The id of the existing TalosProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TalosProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "talos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs talos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TalosProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TalosProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'talos',
      terraformGeneratorMetadata: {
        providerName: 'talos',
        providerVersion: '0.9.0',
        providerVersionConstraint: '0.9.0'
      },
      terraformProviderSource: 'siderolabs/talos'
    });
    this._imageFactoryUrl = config.imageFactoryUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // image_factory_url - computed: false, optional: true, required: false
  private _imageFactoryUrl?: string; 
  public get imageFactoryUrl() {
    return this._imageFactoryUrl;
  }
  public set imageFactoryUrl(value: string | undefined) {
    this._imageFactoryUrl = value;
  }
  public resetImageFactoryUrl() {
    this._imageFactoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFactoryUrlInput() {
    return this._imageFactoryUrl;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_factory_url: cdktf.stringToTerraform(this._imageFactoryUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      image_factory_url: {
        value: cdktf.stringToHclTerraform(this._imageFactoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
