// https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HelmfileProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs#max_diff_output_len HelmfileProvider#max_diff_output_len}
  */
  readonly maxDiffOutputLen?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs#alias HelmfileProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs helmfile}
*/
export class HelmfileProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "helmfile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HelmfileProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HelmfileProvider to import
  * @param importFromId The id of the existing HelmfileProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HelmfileProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "helmfile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs helmfile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HelmfileProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HelmfileProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'helmfile',
      terraformGeneratorMetadata: {
        providerName: 'helmfile',
        providerVersion: '0.14.1',
        providerVersionConstraint: '0.14.1'
      },
      terraformProviderSource: 'mumoshu/helmfile'
    });
    this._maxDiffOutputLen = config.maxDiffOutputLen;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // max_diff_output_len - computed: false, optional: true, required: false
  private _maxDiffOutputLen?: number; 
  public get maxDiffOutputLen() {
    return this._maxDiffOutputLen;
  }
  public set maxDiffOutputLen(value: number | undefined) {
    this._maxDiffOutputLen = value;
  }
  public resetMaxDiffOutputLen() {
    this._maxDiffOutputLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiffOutputLenInput() {
    return this._maxDiffOutputLen;
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
      max_diff_output_len: cdktf.numberToTerraform(this._maxDiffOutputLen),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_diff_output_len: {
        value: cdktf.numberToHclTerraform(this._maxDiffOutputLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
