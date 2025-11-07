// https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/app_env
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsAppEnvConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the application in nullstone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/app_env#app_id DataNsAppEnv#app_id}
  */
  readonly appId: number;
  /**
  * The ID of the environment in nullstone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/app_env#env_id DataNsAppEnv#env_id}
  */
  readonly envId: number;
  /**
  * The ID of the owning stack for the application in nullstone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/app_env#stack_id DataNsAppEnv#stack_id}
  */
  readonly stackId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/app_env ns_app_env}
*/
export class DataNsAppEnv extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns_app_env";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsAppEnv resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsAppEnv to import
  * @param importFromId The id of the existing DataNsAppEnv that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/app_env#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsAppEnv to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns_app_env", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/app_env ns_app_env} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsAppEnvConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsAppEnvConfig) {
    super(scope, id, {
      terraformResourceType: 'ns_app_env',
      terraformGeneratorMetadata: {
        providerName: 'ns',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._envId = config.envId;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: number; 
  public get appId() {
    return this.getNumberAttribute('app_id');
  }
  public set appId(value: number) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // commit_sha - computed: true, optional: false, required: false
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: number; 
  public get envId() {
    return this.getNumberAttribute('env_id');
  }
  public set envId(value: number) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: number; 
  public get stackId() {
    return this.getNumberAttribute('stack_id');
  }
  public set stackId(value: number) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.numberToTerraform(this._appId),
      env_id: cdktf.numberToTerraform(this._envId),
      stack_id: cdktf.numberToTerraform(this._stackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.numberToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      env_id: {
        value: cdktf.numberToHclTerraform(this._envId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stack_id: {
        value: cdktf.numberToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
