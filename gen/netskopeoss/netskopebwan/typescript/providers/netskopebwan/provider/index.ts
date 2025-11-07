// https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetskopebwanProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs#apitoken NetskopebwanProvider#apitoken}
  */
  readonly apitoken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs#baseurl NetskopebwanProvider#baseurl}
  */
  readonly baseurl: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs#alias NetskopebwanProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs netskopebwan}
*/
export class NetskopebwanProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskopebwan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetskopebwanProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetskopebwanProvider to import
  * @param importFromId The id of the existing NetskopebwanProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetskopebwanProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskopebwan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs netskopebwan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetskopebwanProviderConfig
  */
  public constructor(scope: Construct, id: string, config: NetskopebwanProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'netskopebwan',
      terraformGeneratorMetadata: {
        providerName: 'netskopebwan',
        providerVersion: '0.0.2'
      },
      terraformProviderSource: 'netskopeoss/netskopebwan'
    });
    this._apitoken = config.apitoken;
    this._baseurl = config.baseurl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apitoken - computed: false, optional: false, required: true
  private _apitoken?: string; 
  public get apitoken() {
    return this._apitoken;
  }
  public set apitoken(value: string | undefined) {
    this._apitoken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apitokenInput() {
    return this._apitoken;
  }

  // baseurl - computed: false, optional: false, required: true
  private _baseurl?: string; 
  public get baseurl() {
    return this._baseurl;
  }
  public set baseurl(value: string | undefined) {
    this._baseurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseurlInput() {
    return this._baseurl;
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
      apitoken: cdktf.stringToTerraform(this._apitoken),
      baseurl: cdktf.stringToTerraform(this._baseurl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apitoken: {
        value: cdktf.stringToHclTerraform(this._apitoken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      baseurl: {
        value: cdktf.stringToHclTerraform(this._baseurl),
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
