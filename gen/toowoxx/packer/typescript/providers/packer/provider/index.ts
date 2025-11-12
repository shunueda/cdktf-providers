// https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackerProviderConfig {
  /**
  * Optional path to a Packer binary to use instead of the embedded one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs#packer_binary PackerProvider#packer_binary}
  */
  readonly packerBinary?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs#alias PackerProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs packer}
*/
export class PackerProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackerProvider to import
  * @param importFromId The id of the existing PackerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs packer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackerProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PackerProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'packer',
      terraformGeneratorMetadata: {
        providerName: 'packer',
        providerVersion: '0.17.2',
        providerVersionConstraint: '0.17.2'
      },
      terraformProviderSource: 'toowoxx/packer'
    });
    this._packerBinary = config.packerBinary;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // packer_binary - computed: false, optional: true, required: false
  private _packerBinary?: string; 
  public get packerBinary() {
    return this._packerBinary;
  }
  public set packerBinary(value: string | undefined) {
    this._packerBinary = value;
  }
  public resetPackerBinary() {
    this._packerBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packerBinaryInput() {
    return this._packerBinary;
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
      packer_binary: cdktf.stringToTerraform(this._packerBinary),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      packer_binary: {
        value: cdktf.stringToHclTerraform(this._packerBinary),
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
