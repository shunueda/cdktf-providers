// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_exec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalExecConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that represents a script body to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_exec#content LocalExec#content}
  */
  readonly content?: string;
  /**
  * A map of key/value pairs to set as environment variable before running the commands or scripts. These values will be exported as environment variables when the commands are executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_exec#environment LocalExec#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Whether to inherit the all the environment variables of the current shell when running the local exec script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_exec#inherit_environment LocalExec#inherit_environment}
  */
  readonly inheritEnvironment?: boolean | cdktf.IResolvable;
  /**
  * An array of commands to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_exec#inline LocalExec#inline}
  */
  readonly inline?: string[];
  /**
  * An array of paths to scripts to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_exec#scripts LocalExec#scripts}
  */
  readonly scripts?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_exec enos_local_exec}
*/
export class LocalExec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_local_exec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalExec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalExec to import
  * @param importFromId The id of the existing LocalExec that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_exec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalExec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_local_exec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_exec enos_local_exec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalExecConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LocalExecConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'enos_local_exec',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._environment = config.environment;
    this._inheritEnvironment = config.inheritEnvironment;
    this._inline = config.inline;
    this._scripts = config.scripts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherit_environment - computed: false, optional: true, required: false
  private _inheritEnvironment?: boolean | cdktf.IResolvable; 
  public get inheritEnvironment() {
    return this.getBooleanAttribute('inherit_environment');
  }
  public set inheritEnvironment(value: boolean | cdktf.IResolvable) {
    this._inheritEnvironment = value;
  }
  public resetInheritEnvironment() {
    this._inheritEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritEnvironmentInput() {
    return this._inheritEnvironment;
  }

  // inline - computed: false, optional: true, required: false
  private _inline?: string[]; 
  public get inline() {
    return this.getListAttribute('inline');
  }
  public set inline(value: string[]) {
    this._inline = value;
  }
  public resetInline() {
    this._inline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline;
  }

  // scripts - computed: false, optional: true, required: false
  private _scripts?: string[]; 
  public get scripts() {
    return this.getListAttribute('scripts');
  }
  public set scripts(value: string[]) {
    this._scripts = value;
  }
  public resetScripts() {
    this._scripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptsInput() {
    return this._scripts;
  }

  // stderr - computed: true, optional: false, required: false
  public get stderr() {
    return this.getStringAttribute('stderr');
  }

  // stdout - computed: true, optional: false, required: false
  public get stdout() {
    return this.getStringAttribute('stdout');
  }

  // sum - computed: true, optional: false, required: false
  public get sum() {
    return this.getStringAttribute('sum');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      inherit_environment: cdktf.booleanToTerraform(this._inheritEnvironment),
      inline: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inline),
      scripts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scripts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      inherit_environment: {
        value: cdktf.booleanToHclTerraform(this._inheritEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inline: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inline),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scripts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scripts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
