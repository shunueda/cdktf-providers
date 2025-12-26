// https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment_scheduling
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentSchedulingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cron expression for scheduled deploy of the environment. Destroy and Deploy cron expressions must not be the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment_scheduling#deploy_cron EnvironmentScheduling#deploy_cron}
  */
  readonly deployCron?: string;
  /**
  * Cron expression for scheduled destroy of the environment. Destroy and Deploy cron expressions must not be the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment_scheduling#destroy_cron EnvironmentScheduling#destroy_cron}
  */
  readonly destroyCron?: string;
  /**
  * The environment's id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment_scheduling#environment_id EnvironmentScheduling#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment_scheduling#id EnvironmentScheduling#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment_scheduling env0_environment_scheduling}
*/
export class EnvironmentScheduling extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_environment_scheduling";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentScheduling resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentScheduling to import
  * @param importFromId The id of the existing EnvironmentScheduling that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment_scheduling#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentScheduling to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_environment_scheduling", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/environment_scheduling env0_environment_scheduling} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentSchedulingConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentSchedulingConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_environment_scheduling',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.8',
        providerVersionConstraint: '1.29.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deployCron = config.deployCron;
    this._destroyCron = config.destroyCron;
    this._environmentId = config.environmentId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy_cron - computed: false, optional: true, required: false
  private _deployCron?: string; 
  public get deployCron() {
    return this.getStringAttribute('deploy_cron');
  }
  public set deployCron(value: string) {
    this._deployCron = value;
  }
  public resetDeployCron() {
    this._deployCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployCronInput() {
    return this._deployCron;
  }

  // destroy_cron - computed: false, optional: true, required: false
  private _destroyCron?: string; 
  public get destroyCron() {
    return this.getStringAttribute('destroy_cron');
  }
  public set destroyCron(value: string) {
    this._destroyCron = value;
  }
  public resetDestroyCron() {
    this._destroyCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyCronInput() {
    return this._destroyCron;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy_cron: cdktf.stringToTerraform(this._deployCron),
      destroy_cron: cdktf.stringToTerraform(this._destroyCron),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy_cron: {
        value: cdktf.stringToHclTerraform(this._deployCron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_cron: {
        value: cdktf.stringToHclTerraform(this._destroyCron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
