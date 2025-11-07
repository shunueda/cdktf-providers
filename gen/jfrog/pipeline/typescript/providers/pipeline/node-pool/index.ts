// https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the architecture. This is currently limited to x86_64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool#architecture NodePool#architecture}
  */
  readonly architecture: string;
  /**
  * In a project, an array of environment names in which this pipeline source will be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool#environments NodePool#environments}
  */
  readonly environments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool#id NodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set to true for dynamic node pool. Set to false for static node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool#is_on_demand NodePool#is_on_demand}
  */
  readonly isOnDemand: boolean | cdktf.IResolvable;
  /**
  * The name of the node pool. Should be prefixed with the project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool#name NodePool#name}
  */
  readonly name: string;
  /**
  * Number of minutes a node can be idle before it is destroyed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool#node_idle_interval_in_mins NodePool#node_idle_interval_in_mins}
  */
  readonly nodeIdleIntervalInMins?: number;
  /**
  * Max number of nodes available in the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool#number_of_nodes NodePool#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * Operating systems supported for the selected architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool#operating_system NodePool#operating_system}
  */
  readonly operatingSystem: string;
  /**
  * Id of the project where the node pool will live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool#project_id NodePool#project_id}
  */
  readonly projectId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool pipeline_node_pool}
*/
export class NodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipeline_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NodePool to import
  * @param importFromId The id of the existing NodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipeline_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node_pool pipeline_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: NodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'pipeline_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'pipeline',
        providerVersion: '1.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._architecture = config.architecture;
    this._environments = config.environments;
    this._id = config.id;
    this._isOnDemand = config.isOnDemand;
    this._name = config.name;
    this._nodeIdleIntervalInMins = config.nodeIdleIntervalInMins;
    this._numberOfNodes = config.numberOfNodes;
    this._operatingSystem = config.operatingSystem;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: false, optional: false, required: true
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // environments - computed: false, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
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

  // is_on_demand - computed: false, optional: false, required: true
  private _isOnDemand?: boolean | cdktf.IResolvable; 
  public get isOnDemand() {
    return this.getBooleanAttribute('is_on_demand');
  }
  public set isOnDemand(value: boolean | cdktf.IResolvable) {
    this._isOnDemand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isOnDemandInput() {
    return this._isOnDemand;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_idle_interval_in_mins - computed: false, optional: true, required: false
  private _nodeIdleIntervalInMins?: number; 
  public get nodeIdleIntervalInMins() {
    return this.getNumberAttribute('node_idle_interval_in_mins');
  }
  public set nodeIdleIntervalInMins(value: number) {
    this._nodeIdleIntervalInMins = value;
  }
  public resetNodeIdleIntervalInMins() {
    this._nodeIdleIntervalInMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdleIntervalInMinsInput() {
    return this._nodeIdleIntervalInMins;
  }

  // number_of_nodes - computed: false, optional: true, required: false
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  public resetNumberOfNodes() {
    this._numberOfNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architecture: cdktf.stringToTerraform(this._architecture),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      id: cdktf.stringToTerraform(this._id),
      is_on_demand: cdktf.booleanToTerraform(this._isOnDemand),
      name: cdktf.stringToTerraform(this._name),
      node_idle_interval_in_mins: cdktf.numberToTerraform(this._nodeIdleIntervalInMins),
      number_of_nodes: cdktf.numberToTerraform(this._numberOfNodes),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      project_id: cdktf.numberToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      architecture: {
        value: cdktf.stringToHclTerraform(this._architecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_on_demand: {
        value: cdktf.booleanToHclTerraform(this._isOnDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_idle_interval_in_mins: {
        value: cdktf.numberToHclTerraform(this._nodeIdleIntervalInMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_nodes: {
        value: cdktf.numberToHclTerraform(this._numberOfNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      operating_system: {
        value: cdktf.stringToHclTerraform(this._operatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
