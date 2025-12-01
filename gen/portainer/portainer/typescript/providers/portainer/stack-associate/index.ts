// https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/stack_associate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackAssociateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/stack_associate#endpoint_id StackAssociate#endpoint_id}
  */
  readonly endpointId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/stack_associate#id StackAssociate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/stack_associate#orphaned_running StackAssociate#orphaned_running}
  */
  readonly orphanedRunning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/stack_associate#stack_id StackAssociate#stack_id}
  */
  readonly stackId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/stack_associate#swarm_id StackAssociate#swarm_id}
  */
  readonly swarmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/stack_associate portainer_stack_associate}
*/
export class StackAssociate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_stack_associate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackAssociate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackAssociate to import
  * @param importFromId The id of the existing StackAssociate that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/stack_associate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackAssociate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_stack_associate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/stack_associate portainer_stack_associate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackAssociateConfig
  */
  public constructor(scope: Construct, id: string, config: StackAssociateConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_stack_associate',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.20.0',
        providerVersionConstraint: '1.20.0'
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
    this._id = config.id;
    this._orphanedRunning = config.orphanedRunning;
    this._stackId = config.stackId;
    this._swarmId = config.swarmId;
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

  // orphaned_running - computed: false, optional: true, required: false
  private _orphanedRunning?: boolean | cdktf.IResolvable; 
  public get orphanedRunning() {
    return this.getBooleanAttribute('orphaned_running');
  }
  public set orphanedRunning(value: boolean | cdktf.IResolvable) {
    this._orphanedRunning = value;
  }
  public resetOrphanedRunning() {
    this._orphanedRunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanedRunningInput() {
    return this._orphanedRunning;
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

  // swarm_id - computed: false, optional: false, required: true
  private _swarmId?: string; 
  public get swarmId() {
    return this.getStringAttribute('swarm_id');
  }
  public set swarmId(value: string) {
    this._swarmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get swarmIdInput() {
    return this._swarmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      orphaned_running: cdktf.booleanToTerraform(this._orphanedRunning),
      stack_id: cdktf.numberToTerraform(this._stackId),
      swarm_id: cdktf.stringToTerraform(this._swarmId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      orphaned_running: {
        value: cdktf.booleanToHclTerraform(this._orphanedRunning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stack_id: {
        value: cdktf.numberToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      swarm_id: {
        value: cdktf.stringToHclTerraform(this._swarmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
