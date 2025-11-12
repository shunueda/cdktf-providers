// https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OciProviderConfig {
  /**
  * Default timeout for exec tests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs#default_exec_timeout_seconds OciProvider#default_exec_timeout_seconds}
  */
  readonly defaultExecTimeoutSeconds?: number;
  /**
  * If true, skip oci_exec_test tests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs#skip_exec_tests OciProvider#skip_exec_tests}
  */
  readonly skipExecTests?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs#alias OciProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs oci}
*/
export class OciProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OciProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OciProvider to import
  * @param importFromId The id of the existing OciProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OciProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs oci} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OciProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OciProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '0.0.25',
        providerVersionConstraint: '0.0.25'
      },
      terraformProviderSource: 'chainguard-dev/oci'
    });
    this._defaultExecTimeoutSeconds = config.defaultExecTimeoutSeconds;
    this._skipExecTests = config.skipExecTests;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_exec_timeout_seconds - computed: false, optional: true, required: false
  private _defaultExecTimeoutSeconds?: number; 
  public get defaultExecTimeoutSeconds() {
    return this._defaultExecTimeoutSeconds;
  }
  public set defaultExecTimeoutSeconds(value: number | undefined) {
    this._defaultExecTimeoutSeconds = value;
  }
  public resetDefaultExecTimeoutSeconds() {
    this._defaultExecTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExecTimeoutSecondsInput() {
    return this._defaultExecTimeoutSeconds;
  }

  // skip_exec_tests - computed: false, optional: true, required: false
  private _skipExecTests?: boolean | cdktf.IResolvable; 
  public get skipExecTests() {
    return this._skipExecTests;
  }
  public set skipExecTests(value: boolean | cdktf.IResolvable | undefined) {
    this._skipExecTests = value;
  }
  public resetSkipExecTests() {
    this._skipExecTests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipExecTestsInput() {
    return this._skipExecTests;
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
      default_exec_timeout_seconds: cdktf.numberToTerraform(this._defaultExecTimeoutSeconds),
      skip_exec_tests: cdktf.booleanToTerraform(this._skipExecTests),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_exec_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._defaultExecTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_exec_tests: {
        value: cdktf.booleanToHclTerraform(this._skipExecTests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
