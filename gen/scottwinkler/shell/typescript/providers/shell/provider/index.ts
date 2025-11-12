// https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShellProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs#enable_parallelism ShellProvider#enable_parallelism}
  */
  readonly enableParallelism?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs#environment ShellProvider#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs#interpreter ShellProvider#interpreter}
  */
  readonly interpreter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs#sensitive_environment ShellProvider#sensitive_environment}
  */
  readonly sensitiveEnvironment?: { [key: string]: string };
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs#alias ShellProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs shell}
*/
export class ShellProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shell";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ShellProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShellProvider to import
  * @param importFromId The id of the existing ShellProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShellProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shell", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scottwinkler/shell/1.7.10/docs shell} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShellProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ShellProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'shell',
      terraformGeneratorMetadata: {
        providerName: 'shell',
        providerVersion: '1.7.10',
        providerVersionConstraint: '1.7.10'
      },
      terraformProviderSource: 'scottwinkler/shell'
    });
    this._enableParallelism = config.enableParallelism;
    this._environment = config.environment;
    this._interpreter = config.interpreter;
    this._sensitiveEnvironment = config.sensitiveEnvironment;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_parallelism - computed: false, optional: true, required: false
  private _enableParallelism?: boolean | cdktf.IResolvable; 
  public get enableParallelism() {
    return this._enableParallelism;
  }
  public set enableParallelism(value: boolean | cdktf.IResolvable | undefined) {
    this._enableParallelism = value;
  }
  public resetEnableParallelism() {
    this._enableParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableParallelismInput() {
    return this._enableParallelism;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: { [key: string]: string } | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string[]; 
  public get interpreter() {
    return this._interpreter;
  }
  public set interpreter(value: string[] | undefined) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // sensitive_environment - computed: false, optional: true, required: false
  private _sensitiveEnvironment?: { [key: string]: string }; 
  public get sensitiveEnvironment() {
    return this._sensitiveEnvironment;
  }
  public set sensitiveEnvironment(value: { [key: string]: string } | undefined) {
    this._sensitiveEnvironment = value;
  }
  public resetSensitiveEnvironment() {
    this._sensitiveEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveEnvironmentInput() {
    return this._sensitiveEnvironment;
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
      enable_parallelism: cdktf.booleanToTerraform(this._enableParallelism),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      interpreter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interpreter),
      sensitive_environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._sensitiveEnvironment),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_parallelism: {
        value: cdktf.booleanToHclTerraform(this._enableParallelism),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      interpreter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interpreter),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sensitive_environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sensitiveEnvironment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
