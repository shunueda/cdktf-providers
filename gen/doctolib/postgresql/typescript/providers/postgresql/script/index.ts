// https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of seconds between two tries of the batch of commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/script#backoff_delay Script#backoff_delay}
  */
  readonly backoffDelay?: number;
  /**
  * List of SQL commands to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/script#commands Script#commands}
  */
  readonly commands: string[];
  /**
  * The database to execute commands in (defaults to provider's configured database)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/script#database Script#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/script#id Script#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of seconds for a batch of command to timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/script#timeout Script#timeout}
  */
  readonly timeout?: number;
  /**
  * Number of tries for a failing command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/script#tries Script#tries}
  */
  readonly tries?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/script postgresql_script}
*/
export class Script extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "postgresql_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Script resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Script to import
  * @param importFromId The id of the existing Script that should be imported. Refer to the {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Script to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "postgresql_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doctolib/postgresql/2.26.2/docs/resources/script postgresql_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScriptConfig
  */
  public constructor(scope: Construct, id: string, config: ScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_script',
      terraformGeneratorMetadata: {
        providerName: 'postgresql',
        providerVersion: '2.26.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backoffDelay = config.backoffDelay;
    this._commands = config.commands;
    this._database = config.database;
    this._id = config.id;
    this._timeout = config.timeout;
    this._tries = config.tries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backoff_delay - computed: false, optional: true, required: false
  private _backoffDelay?: number; 
  public get backoffDelay() {
    return this.getNumberAttribute('backoff_delay');
  }
  public set backoffDelay(value: number) {
    this._backoffDelay = value;
  }
  public resetBackoffDelay() {
    this._backoffDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffDelayInput() {
    return this._backoffDelay;
  }

  // commands - computed: false, optional: false, required: true
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // shasum - computed: true, optional: false, required: false
  public get shasum() {
    return this.getStringAttribute('shasum');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tries - computed: false, optional: true, required: false
  private _tries?: number; 
  public get tries() {
    return this.getNumberAttribute('tries');
  }
  public set tries(value: number) {
    this._tries = value;
  }
  public resetTries() {
    this._tries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triesInput() {
    return this._tries;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backoff_delay: cdktf.numberToTerraform(this._backoffDelay),
      commands: cdktf.listMapper(cdktf.stringToTerraform, false)(this._commands),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      timeout: cdktf.numberToTerraform(this._timeout),
      tries: cdktf.numberToTerraform(this._tries),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backoff_delay: {
        value: cdktf.numberToHclTerraform(this._backoffDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      commands: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._commands),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tries: {
        value: cdktf.numberToHclTerraform(this._tries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
