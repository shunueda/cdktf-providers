// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OtherAgentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#id OtherAgents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource name to create other agents in duplo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#name OtherAgents#name}
  */
  readonly name: string;
  /**
  * agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#agent OtherAgents#agent}
  */
  readonly agent: OtherAgentsAgent[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#timeouts OtherAgents#timeouts}
  */
  readonly timeouts?: OtherAgentsTimeouts;
}
export interface OtherAgentsAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#agent_linux_package_path OtherAgents#agent_linux_package_path}
  */
  readonly agentLinuxPackagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#agent_name OtherAgents#agent_name}
  */
  readonly agentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#agent_windows_package_path OtherAgents#agent_windows_package_path}
  */
  readonly agentWindowsPackagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#linux_agent_install_status_cmd OtherAgents#linux_agent_install_status_cmd}
  */
  readonly linuxAgentInstallStatusCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#linux_agent_service_name OtherAgents#linux_agent_service_name}
  */
  readonly linuxAgentServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#linux_agent_uninstall_status_cmd OtherAgents#linux_agent_uninstall_status_cmd}
  */
  readonly linuxAgentUninstallStatusCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#linux_install_cmd OtherAgents#linux_install_cmd}
  */
  readonly linuxInstallCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#windows_agent_service_name OtherAgents#windows_agent_service_name}
  */
  readonly windowsAgentServiceName?: string;
}

export function otherAgentsAgentToTerraform(struct?: OtherAgentsAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_linux_package_path: cdktf.stringToTerraform(struct!.agentLinuxPackagePath),
    agent_name: cdktf.stringToTerraform(struct!.agentName),
    agent_windows_package_path: cdktf.stringToTerraform(struct!.agentWindowsPackagePath),
    linux_agent_install_status_cmd: cdktf.stringToTerraform(struct!.linuxAgentInstallStatusCmd),
    linux_agent_service_name: cdktf.stringToTerraform(struct!.linuxAgentServiceName),
    linux_agent_uninstall_status_cmd: cdktf.stringToTerraform(struct!.linuxAgentUninstallStatusCmd),
    linux_install_cmd: cdktf.stringToTerraform(struct!.linuxInstallCmd),
    windows_agent_service_name: cdktf.stringToTerraform(struct!.windowsAgentServiceName),
  }
}


export function otherAgentsAgentToHclTerraform(struct?: OtherAgentsAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_linux_package_path: {
      value: cdktf.stringToHclTerraform(struct!.agentLinuxPackagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_name: {
      value: cdktf.stringToHclTerraform(struct!.agentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_windows_package_path: {
      value: cdktf.stringToHclTerraform(struct!.agentWindowsPackagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux_agent_install_status_cmd: {
      value: cdktf.stringToHclTerraform(struct!.linuxAgentInstallStatusCmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux_agent_service_name: {
      value: cdktf.stringToHclTerraform(struct!.linuxAgentServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux_agent_uninstall_status_cmd: {
      value: cdktf.stringToHclTerraform(struct!.linuxAgentUninstallStatusCmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux_install_cmd: {
      value: cdktf.stringToHclTerraform(struct!.linuxInstallCmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    windows_agent_service_name: {
      value: cdktf.stringToHclTerraform(struct!.windowsAgentServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OtherAgentsAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OtherAgentsAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentLinuxPackagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentLinuxPackagePath = this._agentLinuxPackagePath;
    }
    if (this._agentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentName = this._agentName;
    }
    if (this._agentWindowsPackagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentWindowsPackagePath = this._agentWindowsPackagePath;
    }
    if (this._linuxAgentInstallStatusCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxAgentInstallStatusCmd = this._linuxAgentInstallStatusCmd;
    }
    if (this._linuxAgentServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxAgentServiceName = this._linuxAgentServiceName;
    }
    if (this._linuxAgentUninstallStatusCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxAgentUninstallStatusCmd = this._linuxAgentUninstallStatusCmd;
    }
    if (this._linuxInstallCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxInstallCmd = this._linuxInstallCmd;
    }
    if (this._windowsAgentServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsAgentServiceName = this._windowsAgentServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtherAgentsAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentLinuxPackagePath = undefined;
      this._agentName = undefined;
      this._agentWindowsPackagePath = undefined;
      this._linuxAgentInstallStatusCmd = undefined;
      this._linuxAgentServiceName = undefined;
      this._linuxAgentUninstallStatusCmd = undefined;
      this._linuxInstallCmd = undefined;
      this._windowsAgentServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentLinuxPackagePath = value.agentLinuxPackagePath;
      this._agentName = value.agentName;
      this._agentWindowsPackagePath = value.agentWindowsPackagePath;
      this._linuxAgentInstallStatusCmd = value.linuxAgentInstallStatusCmd;
      this._linuxAgentServiceName = value.linuxAgentServiceName;
      this._linuxAgentUninstallStatusCmd = value.linuxAgentUninstallStatusCmd;
      this._linuxInstallCmd = value.linuxInstallCmd;
      this._windowsAgentServiceName = value.windowsAgentServiceName;
    }
  }

  // agent_linux_package_path - computed: true, optional: true, required: false
  private _agentLinuxPackagePath?: string; 
  public get agentLinuxPackagePath() {
    return this.getStringAttribute('agent_linux_package_path');
  }
  public set agentLinuxPackagePath(value: string) {
    this._agentLinuxPackagePath = value;
  }
  public resetAgentLinuxPackagePath() {
    this._agentLinuxPackagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentLinuxPackagePathInput() {
    return this._agentLinuxPackagePath;
  }

  // agent_name - computed: false, optional: false, required: true
  private _agentName?: string; 
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string) {
    this._agentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName;
  }

  // agent_windows_package_path - computed: true, optional: true, required: false
  private _agentWindowsPackagePath?: string; 
  public get agentWindowsPackagePath() {
    return this.getStringAttribute('agent_windows_package_path');
  }
  public set agentWindowsPackagePath(value: string) {
    this._agentWindowsPackagePath = value;
  }
  public resetAgentWindowsPackagePath() {
    this._agentWindowsPackagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentWindowsPackagePathInput() {
    return this._agentWindowsPackagePath;
  }

  // execution_count - computed: true, optional: false, required: false
  public get executionCount() {
    return this.getNumberAttribute('execution_count');
  }

  // linux_agent_install_status_cmd - computed: true, optional: true, required: false
  private _linuxAgentInstallStatusCmd?: string; 
  public get linuxAgentInstallStatusCmd() {
    return this.getStringAttribute('linux_agent_install_status_cmd');
  }
  public set linuxAgentInstallStatusCmd(value: string) {
    this._linuxAgentInstallStatusCmd = value;
  }
  public resetLinuxAgentInstallStatusCmd() {
    this._linuxAgentInstallStatusCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxAgentInstallStatusCmdInput() {
    return this._linuxAgentInstallStatusCmd;
  }

  // linux_agent_service_name - computed: true, optional: true, required: false
  private _linuxAgentServiceName?: string; 
  public get linuxAgentServiceName() {
    return this.getStringAttribute('linux_agent_service_name');
  }
  public set linuxAgentServiceName(value: string) {
    this._linuxAgentServiceName = value;
  }
  public resetLinuxAgentServiceName() {
    this._linuxAgentServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxAgentServiceNameInput() {
    return this._linuxAgentServiceName;
  }

  // linux_agent_uninstall_status_cmd - computed: true, optional: true, required: false
  private _linuxAgentUninstallStatusCmd?: string; 
  public get linuxAgentUninstallStatusCmd() {
    return this.getStringAttribute('linux_agent_uninstall_status_cmd');
  }
  public set linuxAgentUninstallStatusCmd(value: string) {
    this._linuxAgentUninstallStatusCmd = value;
  }
  public resetLinuxAgentUninstallStatusCmd() {
    this._linuxAgentUninstallStatusCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxAgentUninstallStatusCmdInput() {
    return this._linuxAgentUninstallStatusCmd;
  }

  // linux_install_cmd - computed: true, optional: true, required: false
  private _linuxInstallCmd?: string; 
  public get linuxInstallCmd() {
    return this.getStringAttribute('linux_install_cmd');
  }
  public set linuxInstallCmd(value: string) {
    this._linuxInstallCmd = value;
  }
  public resetLinuxInstallCmd() {
    this._linuxInstallCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxInstallCmdInput() {
    return this._linuxInstallCmd;
  }

  // user_request_reset_is_pending - computed: true, optional: false, required: false
  public get userRequestResetIsPending() {
    return this.getBooleanAttribute('user_request_reset_is_pending');
  }

  // windows_agent_service_name - computed: true, optional: true, required: false
  private _windowsAgentServiceName?: string; 
  public get windowsAgentServiceName() {
    return this.getStringAttribute('windows_agent_service_name');
  }
  public set windowsAgentServiceName(value: string) {
    this._windowsAgentServiceName = value;
  }
  public resetWindowsAgentServiceName() {
    this._windowsAgentServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsAgentServiceNameInput() {
    return this._windowsAgentServiceName;
  }
}

export class OtherAgentsAgentList extends cdktf.ComplexList {
  public internalValue? : OtherAgentsAgent[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OtherAgentsAgentOutputReference {
    return new OtherAgentsAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OtherAgentsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#create OtherAgents#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#delete OtherAgents#delete}
  */
  readonly delete?: string;
}

export function otherAgentsTimeoutsToTerraform(struct?: OtherAgentsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function otherAgentsTimeoutsToHclTerraform(struct?: OtherAgentsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OtherAgentsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OtherAgentsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtherAgentsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents duplocloud_other_agents}
*/
export class OtherAgents extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_other_agents";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OtherAgents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OtherAgents to import
  * @param importFromId The id of the existing OtherAgents that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OtherAgents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_other_agents", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/other_agents duplocloud_other_agents} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OtherAgentsConfig
  */
  public constructor(scope: Construct, id: string, config: OtherAgentsConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_other_agents',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.31',
        providerVersionConstraint: '0.11.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._agent.internalValue = config.agent;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // agent - computed: false, optional: false, required: true
  private _agent = new OtherAgentsAgentList(this, "agent", false);
  public get agent() {
    return this._agent;
  }
  public putAgent(value: OtherAgentsAgent[] | cdktf.IResolvable) {
    this._agent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OtherAgentsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OtherAgentsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      agent: cdktf.listMapper(otherAgentsAgentToTerraform, true)(this._agent.internalValue),
      timeouts: otherAgentsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent: {
        value: cdktf.listMapperHcl(otherAgentsAgentToHclTerraform, true)(this._agent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OtherAgentsAgentList",
      },
      timeouts: {
        value: otherAgentsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OtherAgentsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
