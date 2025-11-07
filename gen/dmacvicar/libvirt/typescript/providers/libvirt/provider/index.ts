// https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LibvirtProviderConfig {
  /**
  * libvirt connection URI for operations. See https://libvirt.org/uri.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs#uri LibvirtProvider#uri}
  */
  readonly uri: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs#alias LibvirtProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs libvirt}
*/
export class LibvirtProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LibvirtProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LibvirtProvider to import
  * @param importFromId The id of the existing LibvirtProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LibvirtProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs libvirt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LibvirtProviderConfig
  */
  public constructor(scope: Construct, id: string, config: LibvirtProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'libvirt',
      terraformGeneratorMetadata: {
        providerName: 'libvirt',
        providerVersion: '0.8.3'
      },
      terraformProviderSource: 'dmacvicar/libvirt'
    });
    this._uri = config.uri;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this._uri;
  }
  public set uri(value: string | undefined) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
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
      uri: cdktf.stringToTerraform(this._uri),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
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
