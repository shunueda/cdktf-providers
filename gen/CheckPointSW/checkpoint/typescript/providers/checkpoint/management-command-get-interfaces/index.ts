// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_get_interfaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCommandGetInterfacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify whether to group the cluster interfaces by a subnet. Otherwise, group the cluster interfaces by their names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_get_interfaces#group_interfaces_by_subnet ManagementCommandGetInterfaces#group_interfaces_by_subnet}
  */
  readonly groupInterfacesBySubnet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_get_interfaces#id ManagementCommandGetInterfaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_get_interfaces#target_name ManagementCommandGetInterfaces#target_name}
  */
  readonly targetName?: string;
  /**
  * Target unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_get_interfaces#target_uid ManagementCommandGetInterfaces#target_uid}
  */
  readonly targetUid?: string;
  /**
  * Specify whether to configure the topology "Defined by Routes" where applicable. Otherwise, configure the topology to "This Network" as default for internal interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_get_interfaces#use_defined_by_routes ManagementCommandGetInterfaces#use_defined_by_routes}
  */
  readonly useDefinedByRoutes?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to fetch the interfaces with their topology. Otherwise, the Management Server fetches the interfaces without their topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_get_interfaces#with_topology ManagementCommandGetInterfaces#with_topology}
  */
  readonly withTopology?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_get_interfaces checkpoint_management_command_get_interfaces}
*/
export class ManagementCommandGetInterfaces extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_command_get_interfaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCommandGetInterfaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCommandGetInterfaces to import
  * @param importFromId The id of the existing ManagementCommandGetInterfaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_get_interfaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCommandGetInterfaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_command_get_interfaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_get_interfaces checkpoint_management_command_get_interfaces} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCommandGetInterfacesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementCommandGetInterfacesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_command_get_interfaces',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupInterfacesBySubnet = config.groupInterfacesBySubnet;
    this._id = config.id;
    this._targetName = config.targetName;
    this._targetUid = config.targetUid;
    this._useDefinedByRoutes = config.useDefinedByRoutes;
    this._withTopology = config.withTopology;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_interfaces_by_subnet - computed: false, optional: true, required: false
  private _groupInterfacesBySubnet?: boolean | cdktf.IResolvable; 
  public get groupInterfacesBySubnet() {
    return this.getBooleanAttribute('group_interfaces_by_subnet');
  }
  public set groupInterfacesBySubnet(value: boolean | cdktf.IResolvable) {
    this._groupInterfacesBySubnet = value;
  }
  public resetGroupInterfacesBySubnet() {
    this._groupInterfacesBySubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInterfacesBySubnetInput() {
    return this._groupInterfacesBySubnet;
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

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // target_uid - computed: false, optional: true, required: false
  private _targetUid?: string; 
  public get targetUid() {
    return this.getStringAttribute('target_uid');
  }
  public set targetUid(value: string) {
    this._targetUid = value;
  }
  public resetTargetUid() {
    this._targetUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUidInput() {
    return this._targetUid;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // use_defined_by_routes - computed: false, optional: true, required: false
  private _useDefinedByRoutes?: boolean | cdktf.IResolvable; 
  public get useDefinedByRoutes() {
    return this.getBooleanAttribute('use_defined_by_routes');
  }
  public set useDefinedByRoutes(value: boolean | cdktf.IResolvable) {
    this._useDefinedByRoutes = value;
  }
  public resetUseDefinedByRoutes() {
    this._useDefinedByRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefinedByRoutesInput() {
    return this._useDefinedByRoutes;
  }

  // with_topology - computed: false, optional: true, required: false
  private _withTopology?: boolean | cdktf.IResolvable; 
  public get withTopology() {
    return this.getBooleanAttribute('with_topology');
  }
  public set withTopology(value: boolean | cdktf.IResolvable) {
    this._withTopology = value;
  }
  public resetWithTopology() {
    this._withTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withTopologyInput() {
    return this._withTopology;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_interfaces_by_subnet: cdktf.booleanToTerraform(this._groupInterfacesBySubnet),
      id: cdktf.stringToTerraform(this._id),
      target_name: cdktf.stringToTerraform(this._targetName),
      target_uid: cdktf.stringToTerraform(this._targetUid),
      use_defined_by_routes: cdktf.booleanToTerraform(this._useDefinedByRoutes),
      with_topology: cdktf.booleanToTerraform(this._withTopology),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_interfaces_by_subnet: {
        value: cdktf.booleanToHclTerraform(this._groupInterfacesBySubnet),
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
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_uid: {
        value: cdktf.stringToHclTerraform(this._targetUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_defined_by_routes: {
        value: cdktf.booleanToHclTerraform(this._useDefinedByRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      with_topology: {
        value: cdktf.booleanToHclTerraform(this._withTopology),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
