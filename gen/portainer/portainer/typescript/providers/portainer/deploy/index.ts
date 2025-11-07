// https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeployConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy#endpoint_id Deploy#endpoint_id}
  */
  readonly endpointId: number;
  /**
  * If true, call Portainer forceupdateservice endpoint for each updated service (after optional wait).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy#force_update Deploy#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy#id Deploy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target image tag/revision to set on services and optionally on stack ENV in stack_env_var.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy#revision Deploy#revision}
  */
  readonly revision: string;
  /**
  * Comma-separated list of service names (without stack prefix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy#services_list Deploy#services_list}
  */
  readonly servicesList: string;
  /**
  * Name of stack environment variable to update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy#stack_env_var Deploy#stack_env_var}
  */
  readonly stackEnvVar: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy#stack_name Deploy#stack_name}
  */
  readonly stackName: string;
  /**
  * If true, also update stack ENV variable in stack_env_var to the provided revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy#update_revision Deploy#update_revision}
  */
  readonly updateRevision?: boolean | cdktf.IResolvable;
  /**
  * Seconds to wait before force-updating a service (only when force_update = true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy#wait Deploy#wait}
  */
  readonly wait?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy portainer_deploy}
*/
export class Deploy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_deploy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Deploy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Deploy to import
  * @param importFromId The id of the existing Deploy that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Deploy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_deploy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/deploy portainer_deploy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeployConfig
  */
  public constructor(scope: Construct, id: string, config: DeployConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_deploy',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpointId = config.endpointId;
    this._forceUpdate = config.forceUpdate;
    this._id = config.id;
    this._revision = config.revision;
    this._servicesList = config.servicesList;
    this._stackEnvVar = config.stackEnvVar;
    this._stackName = config.stackName;
    this._updateRevision = config.updateRevision;
    this._wait = config.wait;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: number; 
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }
  public set endpointId(value: number) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
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

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // services_list - computed: false, optional: false, required: true
  private _servicesList?: string; 
  public get servicesList() {
    return this.getStringAttribute('services_list');
  }
  public set servicesList(value: string) {
    this._servicesList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesListInput() {
    return this._servicesList;
  }

  // stack_env_var - computed: false, optional: false, required: true
  private _stackEnvVar?: string; 
  public get stackEnvVar() {
    return this.getStringAttribute('stack_env_var');
  }
  public set stackEnvVar(value: string) {
    this._stackEnvVar = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackEnvVarInput() {
    return this._stackEnvVar;
  }

  // stack_name - computed: false, optional: false, required: true
  private _stackName?: string; 
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }
  public set stackName(value: string) {
    this._stackName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackNameInput() {
    return this._stackName;
  }

  // update_revision - computed: false, optional: true, required: false
  private _updateRevision?: boolean | cdktf.IResolvable; 
  public get updateRevision() {
    return this.getBooleanAttribute('update_revision');
  }
  public set updateRevision(value: boolean | cdktf.IResolvable) {
    this._updateRevision = value;
  }
  public resetUpdateRevision() {
    this._updateRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateRevisionInput() {
    return this._updateRevision;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: number; 
  public get wait() {
    return this.getNumberAttribute('wait');
  }
  public set wait(value: number) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      id: cdktf.stringToTerraform(this._id),
      revision: cdktf.stringToTerraform(this._revision),
      services_list: cdktf.stringToTerraform(this._servicesList),
      stack_env_var: cdktf.stringToTerraform(this._stackEnvVar),
      stack_name: cdktf.stringToTerraform(this._stackName),
      update_revision: cdktf.booleanToTerraform(this._updateRevision),
      wait: cdktf.numberToTerraform(this._wait),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_id: {
        value: cdktf.numberToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_update: {
        value: cdktf.booleanToHclTerraform(this._forceUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision: {
        value: cdktf.stringToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services_list: {
        value: cdktf.stringToHclTerraform(this._servicesList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_env_var: {
        value: cdktf.stringToHclTerraform(this._stackEnvVar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_name: {
        value: cdktf.stringToHclTerraform(this._stackName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_revision: {
        value: cdktf.booleanToHclTerraform(this._updateRevision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait: {
        value: cdktf.numberToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
