// https://registry.terraform.io/providers/rancher/rke/1.7.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RkeProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs#debug RkeProvider#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs#log_file RkeProvider#log_file}
  */
  readonly logFile?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs#alias RkeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs rke}
*/
export class RkeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rke";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RkeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RkeProvider to import
  * @param importFromId The id of the existing RkeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RkeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rke", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rke/1.7.5/docs rke} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RkeProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RkeProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rke',
      terraformGeneratorMetadata: {
        providerName: 'rke',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      terraformProviderSource: 'rancher/rke'
    });
    this._debug = config.debug;
    this._logFile = config.logFile;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this._debug;
  }
  public set debug(value: boolean | cdktf.IResolvable | undefined) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // log_file - computed: false, optional: true, required: false
  private _logFile?: string; 
  public get logFile() {
    return this._logFile;
  }
  public set logFile(value: string | undefined) {
    this._logFile = value;
  }
  public resetLogFile() {
    this._logFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileInput() {
    return this._logFile;
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
      debug: cdktf.booleanToTerraform(this._debug),
      log_file: cdktf.stringToTerraform(this._logFile),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_file: {
        value: cdktf.stringToHclTerraform(this._logFile),
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
