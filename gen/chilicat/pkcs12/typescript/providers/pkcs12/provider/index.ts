// https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Pkcs12ProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs#alias Pkcs12Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs pkcs12}
*/
export class Pkcs12Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pkcs12";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pkcs12Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pkcs12Provider to import
  * @param importFromId The id of the existing Pkcs12Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pkcs12Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pkcs12", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs pkcs12} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Pkcs12ProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Pkcs12ProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pkcs12',
      terraformGeneratorMetadata: {
        providerName: 'pkcs12',
        providerVersion: '0.2.5'
      },
      terraformProviderSource: 'chilicat/pkcs12'
    });
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
