import * as cdktf from 'cdktf';
import { EnvironmentTemplateSpecHooksOnSuccessAgentPools,
environmentTemplateSpecHooksOnSuccessAgentPoolsToTerraform,
environmentTemplateSpecHooksOnSuccessAgentPoolsToHclTerraform,
EnvironmentTemplateSpecHooksOnSuccessAgentPoolsList,
EnvironmentTemplateSpecHooksOnSuccessAgents,
environmentTemplateSpecHooksOnSuccessAgentsToTerraform,
environmentTemplateSpecHooksOnSuccessAgentsToHclTerraform,
EnvironmentTemplateSpecHooksOnSuccessAgentsList,
EnvironmentTemplateSpecHooksOnSuccessDriver,
environmentTemplateSpecHooksOnSuccessDriverToTerraform,
environmentTemplateSpecHooksOnSuccessDriverToHclTerraform,
EnvironmentTemplateSpecHooksOnSuccessDriverOutputReference,
EnvironmentTemplateSpecHooksOnInit,
environmentTemplateSpecHooksOnInitToTerraform,
environmentTemplateSpecHooksOnInitToHclTerraform,
EnvironmentTemplateSpecHooksOnInitList } from './structs3200'
import { EnvironmentTemplateSpecHooksOnSuccessOptions,
environmentTemplateSpecHooksOnSuccessOptionsToTerraform,
environmentTemplateSpecHooksOnSuccessOptionsToHclTerraform,
EnvironmentTemplateSpecHooksOnSuccessOptionsOutputReference,
EnvironmentTemplateSpecHooksOnSuccessSkipConfig,
environmentTemplateSpecHooksOnSuccessSkipConfigToTerraform,
environmentTemplateSpecHooksOnSuccessSkipConfigToHclTerraform,
EnvironmentTemplateSpecHooksOnSuccessSkipConfigOutputReference,
EnvironmentTemplateSpecHooksOnSuccessWorkflowHandler,
environmentTemplateSpecHooksOnSuccessWorkflowHandlerToTerraform,
environmentTemplateSpecHooksOnSuccessWorkflowHandlerToHclTerraform,
EnvironmentTemplateSpecHooksOnSuccessWorkflowHandlerOutputReference } from './structs3600'
import { EnvironmentTemplateSpecHooksOnCompletion,
environmentTemplateSpecHooksOnCompletionToTerraform,
environmentTemplateSpecHooksOnCompletionToHclTerraform,
EnvironmentTemplateSpecHooksOnCompletionList } from './structs1600'
import { EnvironmentTemplateSpecHooksOnFailure,
environmentTemplateSpecHooksOnFailureToTerraform,
environmentTemplateSpecHooksOnFailureToHclTerraform,
EnvironmentTemplateSpecHooksOnFailureList } from './structs2400'
export interface EnvironmentTemplateSpecHooksOnSuccess {
  /**
  * specify hook dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#depends_on EnvironmentTemplate#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * description of hook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#description EnvironmentTemplate#description}
  */
  readonly description?: string;
  /**
  * Hook are executed only once for all runs combined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#execute_once EnvironmentTemplate#execute_once}
  */
  readonly executeOnce?: boolean | cdktf.IResolvable;
  /**
  * name of the hook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Specify the on failure action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#on_failure EnvironmentTemplate#on_failure}
  */
  readonly onFailure?: string;
  /**
  * Specify the timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#timeout_seconds EnvironmentTemplate#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Specify the type of hook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#type EnvironmentTemplate#type}
  */
  readonly type?: string;
  /**
  * agent_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#agent_pools EnvironmentTemplate#agent_pools}
  */
  readonly agentPools?: EnvironmentTemplateSpecHooksOnSuccessAgentPools[] | cdktf.IResolvable;
  /**
  * agents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#agents EnvironmentTemplate#agents}
  */
  readonly agents?: EnvironmentTemplateSpecHooksOnSuccessAgents[] | cdktf.IResolvable;
  /**
  * driver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#driver EnvironmentTemplate#driver}
  */
  readonly driver?: EnvironmentTemplateSpecHooksOnSuccessDriver;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#options EnvironmentTemplate#options}
  */
  readonly options?: EnvironmentTemplateSpecHooksOnSuccessOptions;
  /**
  * skip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#skip_config EnvironmentTemplate#skip_config}
  */
  readonly skipConfig?: EnvironmentTemplateSpecHooksOnSuccessSkipConfig;
  /**
  * workflow_handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#workflow_handler EnvironmentTemplate#workflow_handler}
  */
  readonly workflowHandler?: EnvironmentTemplateSpecHooksOnSuccessWorkflowHandler;
}

export function environmentTemplateSpecHooksOnSuccessToTerraform(struct?: EnvironmentTemplateSpecHooksOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    description: cdktf.stringToTerraform(struct!.description),
    execute_once: cdktf.booleanToTerraform(struct!.executeOnce),
    name: cdktf.stringToTerraform(struct!.name),
    on_failure: cdktf.stringToTerraform(struct!.onFailure),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    agent_pools: cdktf.listMapper(environmentTemplateSpecHooksOnSuccessAgentPoolsToTerraform, true)(struct!.agentPools),
    agents: cdktf.listMapper(environmentTemplateSpecHooksOnSuccessAgentsToTerraform, true)(struct!.agents),
    driver: environmentTemplateSpecHooksOnSuccessDriverToTerraform(struct!.driver),
    options: environmentTemplateSpecHooksOnSuccessOptionsToTerraform(struct!.options),
    skip_config: environmentTemplateSpecHooksOnSuccessSkipConfigToTerraform(struct!.skipConfig),
    workflow_handler: environmentTemplateSpecHooksOnSuccessWorkflowHandlerToTerraform(struct!.workflowHandler),
  }
}


export function environmentTemplateSpecHooksOnSuccessToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depends_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execute_once: {
      value: cdktf.booleanToHclTerraform(struct!.executeOnce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_failure: {
      value: cdktf.stringToHclTerraform(struct!.onFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_pools: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnSuccessAgentPoolsToHclTerraform, true)(struct!.agentPools),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnSuccessAgentPoolsList",
    },
    agents: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnSuccessAgentsToHclTerraform, true)(struct!.agents),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnSuccessAgentsList",
    },
    driver: {
      value: environmentTemplateSpecHooksOnSuccessDriverToHclTerraform(struct!.driver),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnSuccessDriverList",
    },
    options: {
      value: environmentTemplateSpecHooksOnSuccessOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnSuccessOptionsList",
    },
    skip_config: {
      value: environmentTemplateSpecHooksOnSuccessSkipConfigToHclTerraform(struct!.skipConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnSuccessSkipConfigList",
    },
    workflow_handler: {
      value: environmentTemplateSpecHooksOnSuccessWorkflowHandlerToHclTerraform(struct!.workflowHandler),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnSuccessWorkflowHandlerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnSuccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnSuccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._executeOnce !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOnce = this._executeOnce;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._agentPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentPools = this._agentPools?.internalValue;
    }
    if (this._agents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agents = this._agents?.internalValue;
    }
    if (this._driver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._skipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipConfig = this._skipConfig?.internalValue;
    }
    if (this._workflowHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowHandler = this._workflowHandler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnSuccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependsOn = undefined;
      this._description = undefined;
      this._executeOnce = undefined;
      this._name = undefined;
      this._onFailure = undefined;
      this._timeoutSeconds = undefined;
      this._type = undefined;
      this._agentPools.internalValue = undefined;
      this._agents.internalValue = undefined;
      this._driver.internalValue = undefined;
      this._options.internalValue = undefined;
      this._skipConfig.internalValue = undefined;
      this._workflowHandler.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependsOn = value.dependsOn;
      this._description = value.description;
      this._executeOnce = value.executeOnce;
      this._name = value.name;
      this._onFailure = value.onFailure;
      this._timeoutSeconds = value.timeoutSeconds;
      this._type = value.type;
      this._agentPools.internalValue = value.agentPools;
      this._agents.internalValue = value.agents;
      this._driver.internalValue = value.driver;
      this._options.internalValue = value.options;
      this._skipConfig.internalValue = value.skipConfig;
      this._workflowHandler.internalValue = value.workflowHandler;
    }
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // execute_once - computed: false, optional: true, required: false
  private _executeOnce?: boolean | cdktf.IResolvable; 
  public get executeOnce() {
    return this.getBooleanAttribute('execute_once');
  }
  public set executeOnce(value: boolean | cdktf.IResolvable) {
    this._executeOnce = value;
  }
  public resetExecuteOnce() {
    this._executeOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnceInput() {
    return this._executeOnce;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string; 
  public get onFailure() {
    return this.getStringAttribute('on_failure');
  }
  public set onFailure(value: string) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // agent_pools - computed: false, optional: true, required: false
  private _agentPools = new EnvironmentTemplateSpecHooksOnSuccessAgentPoolsList(this, "agent_pools", false);
  public get agentPools() {
    return this._agentPools;
  }
  public putAgentPools(value: EnvironmentTemplateSpecHooksOnSuccessAgentPools[] | cdktf.IResolvable) {
    this._agentPools.internalValue = value;
  }
  public resetAgentPools() {
    this._agentPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPoolsInput() {
    return this._agentPools.internalValue;
  }

  // agents - computed: false, optional: true, required: false
  private _agents = new EnvironmentTemplateSpecHooksOnSuccessAgentsList(this, "agents", false);
  public get agents() {
    return this._agents;
  }
  public putAgents(value: EnvironmentTemplateSpecHooksOnSuccessAgents[] | cdktf.IResolvable) {
    this._agents.internalValue = value;
  }
  public resetAgents() {
    this._agents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents.internalValue;
  }

  // driver - computed: false, optional: true, required: false
  private _driver = new EnvironmentTemplateSpecHooksOnSuccessDriverOutputReference(this, "driver");
  public get driver() {
    return this._driver;
  }
  public putDriver(value: EnvironmentTemplateSpecHooksOnSuccessDriver) {
    this._driver.internalValue = value;
  }
  public resetDriver() {
    this._driver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new EnvironmentTemplateSpecHooksOnSuccessOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: EnvironmentTemplateSpecHooksOnSuccessOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // skip_config - computed: false, optional: true, required: false
  private _skipConfig = new EnvironmentTemplateSpecHooksOnSuccessSkipConfigOutputReference(this, "skip_config");
  public get skipConfig() {
    return this._skipConfig;
  }
  public putSkipConfig(value: EnvironmentTemplateSpecHooksOnSuccessSkipConfig) {
    this._skipConfig.internalValue = value;
  }
  public resetSkipConfig() {
    this._skipConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipConfigInput() {
    return this._skipConfig.internalValue;
  }

  // workflow_handler - computed: false, optional: true, required: false
  private _workflowHandler = new EnvironmentTemplateSpecHooksOnSuccessWorkflowHandlerOutputReference(this, "workflow_handler");
  public get workflowHandler() {
    return this._workflowHandler;
  }
  public putWorkflowHandler(value: EnvironmentTemplateSpecHooksOnSuccessWorkflowHandler) {
    this._workflowHandler.internalValue = value;
  }
  public resetWorkflowHandler() {
    this._workflowHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowHandlerInput() {
    return this._workflowHandler.internalValue;
  }
}

export class EnvironmentTemplateSpecHooksOnSuccessList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnSuccess[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnSuccessOutputReference {
    return new EnvironmentTemplateSpecHooksOnSuccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooks {
  /**
  * on_completion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#on_completion EnvironmentTemplate#on_completion}
  */
  readonly onCompletion?: EnvironmentTemplateSpecHooksOnCompletion[] | cdktf.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#on_failure EnvironmentTemplate#on_failure}
  */
  readonly onFailure?: EnvironmentTemplateSpecHooksOnFailure[] | cdktf.IResolvable;
  /**
  * on_init block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#on_init EnvironmentTemplate#on_init}
  */
  readonly onInit?: EnvironmentTemplateSpecHooksOnInit[] | cdktf.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#on_success EnvironmentTemplate#on_success}
  */
  readonly onSuccess?: EnvironmentTemplateSpecHooksOnSuccess[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksToTerraform(struct?: EnvironmentTemplateSpecHooksOutputReference | EnvironmentTemplateSpecHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_completion: cdktf.listMapper(environmentTemplateSpecHooksOnCompletionToTerraform, true)(struct!.onCompletion),
    on_failure: cdktf.listMapper(environmentTemplateSpecHooksOnFailureToTerraform, true)(struct!.onFailure),
    on_init: cdktf.listMapper(environmentTemplateSpecHooksOnInitToTerraform, true)(struct!.onInit),
    on_success: cdktf.listMapper(environmentTemplateSpecHooksOnSuccessToTerraform, true)(struct!.onSuccess),
  }
}


export function environmentTemplateSpecHooksToHclTerraform(struct?: EnvironmentTemplateSpecHooksOutputReference | EnvironmentTemplateSpecHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_completion: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnCompletionToHclTerraform, true)(struct!.onCompletion),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnCompletionList",
    },
    on_failure: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnFailureToHclTerraform, true)(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureList",
    },
    on_init: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitToHclTerraform, true)(struct!.onInit),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitList",
    },
    on_success: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnSuccessToHclTerraform, true)(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onCompletion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onCompletion = this._onCompletion?.internalValue;
    }
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    if (this._onInit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onInit = this._onInit?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onCompletion.internalValue = undefined;
      this._onFailure.internalValue = undefined;
      this._onInit.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onCompletion.internalValue = value.onCompletion;
      this._onFailure.internalValue = value.onFailure;
      this._onInit.internalValue = value.onInit;
      this._onSuccess.internalValue = value.onSuccess;
    }
  }

  // on_completion - computed: false, optional: true, required: false
  private _onCompletion = new EnvironmentTemplateSpecHooksOnCompletionList(this, "on_completion", false);
  public get onCompletion() {
    return this._onCompletion;
  }
  public putOnCompletion(value: EnvironmentTemplateSpecHooksOnCompletion[] | cdktf.IResolvable) {
    this._onCompletion.internalValue = value;
  }
  public resetOnCompletion() {
    this._onCompletion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCompletionInput() {
    return this._onCompletion.internalValue;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new EnvironmentTemplateSpecHooksOnFailureList(this, "on_failure", false);
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: EnvironmentTemplateSpecHooksOnFailure[] | cdktf.IResolvable) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }

  // on_init - computed: false, optional: true, required: false
  private _onInit = new EnvironmentTemplateSpecHooksOnInitList(this, "on_init", false);
  public get onInit() {
    return this._onInit;
  }
  public putOnInit(value: EnvironmentTemplateSpecHooksOnInit[] | cdktf.IResolvable) {
    this._onInit.internalValue = value;
  }
  public resetOnInit() {
    this._onInit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onInitInput() {
    return this._onInit.internalValue;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess = new EnvironmentTemplateSpecHooksOnSuccessList(this, "on_success", false);
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: EnvironmentTemplateSpecHooksOnSuccess[] | cdktf.IResolvable) {
    this._onSuccess.internalValue = value;
  }
  public resetOnSuccess() {
    this._onSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess.internalValue;
  }
}
export interface EnvironmentTemplateSpecResourcesDependsOn {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#system_catalog EnvironmentTemplate#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#version EnvironmentTemplate#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#version_state EnvironmentTemplate#version_state}
  */
  readonly versionState?: string;
}

export function environmentTemplateSpecResourcesDependsOnToTerraform(struct?: EnvironmentTemplateSpecResourcesDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    system_catalog: cdktf.booleanToTerraform(struct!.systemCatalog),
    version: cdktf.stringToTerraform(struct!.version),
    version_state: cdktf.stringToTerraform(struct!.versionState),
  }
}


export function environmentTemplateSpecResourcesDependsOnToHclTerraform(struct?: EnvironmentTemplateSpecResourcesDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_catalog: {
      value: cdktf.booleanToHclTerraform(struct!.systemCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_state: {
      value: cdktf.stringToHclTerraform(struct!.versionState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecResourcesDependsOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecResourcesDependsOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._systemCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCatalog = this._systemCatalog;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionState = this._versionState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecResourcesDependsOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._systemCatalog = undefined;
      this._version = undefined;
      this._versionState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._systemCatalog = value.systemCatalog;
      this._version = value.version;
      this._versionState = value.versionState;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // system_catalog - computed: false, optional: true, required: false
  private _systemCatalog?: boolean | cdktf.IResolvable; 
  public get systemCatalog() {
    return this.getBooleanAttribute('system_catalog');
  }
  public set systemCatalog(value: boolean | cdktf.IResolvable) {
    this._systemCatalog = value;
  }
  public resetSystemCatalog() {
    this._systemCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCatalogInput() {
    return this._systemCatalog;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_state - computed: false, optional: true, required: false
  private _versionState?: string; 
  public get versionState() {
    return this.getStringAttribute('version_state');
  }
  public set versionState(value: string) {
    this._versionState = value;
  }
  public resetVersionState() {
    this._versionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStateInput() {
    return this._versionState;
  }
}

export class EnvironmentTemplateSpecResourcesDependsOnList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecResourcesDependsOn[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecResourcesDependsOnOutputReference {
    return new EnvironmentTemplateSpecResourcesDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecResourcesOverrides {
  /**
  * Provide the jsonpaths with values to be overriden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string;
}

export function environmentTemplateSpecResourcesOverridesToTerraform(struct?: EnvironmentTemplateSpecResourcesOverridesOutputReference | EnvironmentTemplateSpecResourcesOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.stringToTerraform(struct!.values),
  }
}


export function environmentTemplateSpecResourcesOverridesToHclTerraform(struct?: EnvironmentTemplateSpecResourcesOverridesOutputReference | EnvironmentTemplateSpecResourcesOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecResourcesOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecResourcesOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecResourcesOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface EnvironmentTemplateSpecResourcesResourceOptions {
  /**
  * Specify if the resource is dedicated to workloads/apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#dedicated EnvironmentTemplate#dedicated}
  */
  readonly dedicated?: boolean | cdktf.IResolvable;
  /**
  * Specify if the resource or template is system managed or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#system EnvironmentTemplate#system}
  */
  readonly systemAttribute?: boolean | cdktf.IResolvable;
  /**
  * Specify the resource version, if blank will use the latest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#version EnvironmentTemplate#version}
  */
  readonly version?: string;
}

export function environmentTemplateSpecResourcesResourceOptionsToTerraform(struct?: EnvironmentTemplateSpecResourcesResourceOptionsOutputReference | EnvironmentTemplateSpecResourcesResourceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated: cdktf.booleanToTerraform(struct!.dedicated),
    system: cdktf.booleanToTerraform(struct!.systemAttribute),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function environmentTemplateSpecResourcesResourceOptionsToHclTerraform(struct?: EnvironmentTemplateSpecResourcesResourceOptionsOutputReference | EnvironmentTemplateSpecResourcesResourceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated: {
      value: cdktf.booleanToHclTerraform(struct!.dedicated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system: {
      value: cdktf.booleanToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecResourcesResourceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecResourcesResourceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicated = this._dedicated;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecResourcesResourceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dedicated = undefined;
      this._system = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dedicated = value.dedicated;
      this._system = value.systemAttribute;
      this._version = value.version;
    }
  }

  // dedicated - computed: false, optional: true, required: false
  private _dedicated?: boolean | cdktf.IResolvable; 
  public get dedicated() {
    return this.getBooleanAttribute('dedicated');
  }
  public set dedicated(value: boolean | cdktf.IResolvable) {
    this._dedicated = value;
  }
  public resetDedicated() {
    this._dedicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedInput() {
    return this._dedicated;
  }

  // system - computed: false, optional: true, required: false
  private _system?: boolean | cdktf.IResolvable; 
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
  }
  public set systemAttribute(value: boolean | cdktf.IResolvable) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface EnvironmentTemplateSpecResources {
  /**
  * Specify the environment resource kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#kind EnvironmentTemplate#kind}
  */
  readonly kind?: string;
  /**
  * Specify the environment resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Specify the environment resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#type EnvironmentTemplate#type}
  */
  readonly type?: string;
  /**
  * depends_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#depends_on EnvironmentTemplate#depends_on}
  */
  readonly dependsOn?: EnvironmentTemplateSpecResourcesDependsOn[] | cdktf.IResolvable;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#overrides EnvironmentTemplate#overrides}
  */
  readonly overrides?: EnvironmentTemplateSpecResourcesOverrides;
  /**
  * resource_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#resource_options EnvironmentTemplate#resource_options}
  */
  readonly resourceOptions?: EnvironmentTemplateSpecResourcesResourceOptions;
}

export function environmentTemplateSpecResourcesToTerraform(struct?: EnvironmentTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    depends_on: cdktf.listMapper(environmentTemplateSpecResourcesDependsOnToTerraform, true)(struct!.dependsOn),
    overrides: environmentTemplateSpecResourcesOverridesToTerraform(struct!.overrides),
    resource_options: environmentTemplateSpecResourcesResourceOptionsToTerraform(struct!.resourceOptions),
  }
}


export function environmentTemplateSpecResourcesToHclTerraform(struct?: EnvironmentTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depends_on: {
      value: cdktf.listMapperHcl(environmentTemplateSpecResourcesDependsOnToHclTerraform, true)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecResourcesDependsOnList",
    },
    overrides: {
      value: environmentTemplateSpecResourcesOverridesToHclTerraform(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecResourcesOverridesList",
    },
    resource_options: {
      value: environmentTemplateSpecResourcesResourceOptionsToHclTerraform(struct!.resourceOptions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecResourcesResourceOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._resourceOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceOptions = this._resourceOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._type = undefined;
      this._dependsOn.internalValue = undefined;
      this._overrides.internalValue = undefined;
      this._resourceOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
      this._type = value.type;
      this._dependsOn.internalValue = value.dependsOn;
      this._overrides.internalValue = value.overrides;
      this._resourceOptions.internalValue = value.resourceOptions;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn = new EnvironmentTemplateSpecResourcesDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: EnvironmentTemplateSpecResourcesDependsOn[] | cdktf.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new EnvironmentTemplateSpecResourcesOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: EnvironmentTemplateSpecResourcesOverrides) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // resource_options - computed: false, optional: true, required: false
  private _resourceOptions = new EnvironmentTemplateSpecResourcesResourceOptionsOutputReference(this, "resource_options");
  public get resourceOptions() {
    return this._resourceOptions;
  }
  public putResourceOptions(value: EnvironmentTemplateSpecResourcesResourceOptions) {
    this._resourceOptions.internalValue = value;
  }
  public resetResourceOptions() {
    this._resourceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOptionsInput() {
    return this._resourceOptions.internalValue;
  }
}

export class EnvironmentTemplateSpecResourcesList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecResources[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecResourcesOutputReference {
    return new EnvironmentTemplateSpecResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecRunAsUserOptionsOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#restricted_values EnvironmentTemplate#restricted_values}
  */
  readonly restrictedValues?: string[];
  /**
  * Specify the type of ovverride this variable supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#type EnvironmentTemplate#type}
  */
  readonly type?: string;
}

export function environmentTemplateSpecRunAsUserOptionsOverrideToTerraform(struct?: EnvironmentTemplateSpecRunAsUserOptionsOverrideOutputReference | EnvironmentTemplateSpecRunAsUserOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restricted_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedValues),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function environmentTemplateSpecRunAsUserOptionsOverrideToHclTerraform(struct?: EnvironmentTemplateSpecRunAsUserOptionsOverrideOutputReference | EnvironmentTemplateSpecRunAsUserOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restricted_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecRunAsUserOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecRunAsUserOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedValues = this._restrictedValues;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecRunAsUserOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictedValues = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictedValues = value.restrictedValues;
      this._type = value.type;
    }
  }

  // restricted_values - computed: false, optional: true, required: false
  private _restrictedValues?: string[]; 
  public get restrictedValues() {
    return this.getListAttribute('restricted_values');
  }
  public set restrictedValues(value: string[]) {
    this._restrictedValues = value;
  }
  public resetRestrictedValues() {
    this._restrictedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedValuesInput() {
    return this._restrictedValues;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface EnvironmentTemplateSpecRunAsUserOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#description EnvironmentTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#required EnvironmentTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#override EnvironmentTemplate#override}
  */
  readonly override?: EnvironmentTemplateSpecRunAsUserOptionsOverride;
}

export function environmentTemplateSpecRunAsUserOptionsToTerraform(struct?: EnvironmentTemplateSpecRunAsUserOptionsOutputReference | EnvironmentTemplateSpecRunAsUserOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    required: cdktf.booleanToTerraform(struct!.required),
    override: environmentTemplateSpecRunAsUserOptionsOverrideToTerraform(struct!.override),
  }
}


export function environmentTemplateSpecRunAsUserOptionsToHclTerraform(struct?: EnvironmentTemplateSpecRunAsUserOptionsOutputReference | EnvironmentTemplateSpecRunAsUserOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: environmentTemplateSpecRunAsUserOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecRunAsUserOptionsOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecRunAsUserOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecRunAsUserOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecRunAsUserOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._required = undefined;
      this._override.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._required = value.required;
      this._override.internalValue = value.override;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // override - computed: false, optional: true, required: false
  private _override = new EnvironmentTemplateSpecRunAsUserOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: EnvironmentTemplateSpecRunAsUserOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}
export interface EnvironmentTemplateSpecRunAsUser {
  /**
  * Whether person is logged in using sso
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#is_sso_user EnvironmentTemplate#is_sso_user}
  */
  readonly isSsoUser?: boolean | cdktf.IResolvable;
  /**
  * Username fo the Person
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#username EnvironmentTemplate#username}
  */
  readonly username?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#options EnvironmentTemplate#options}
  */
  readonly options?: EnvironmentTemplateSpecRunAsUserOptions;
}

export function environmentTemplateSpecRunAsUserToTerraform(struct?: EnvironmentTemplateSpecRunAsUserOutputReference | EnvironmentTemplateSpecRunAsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_sso_user: cdktf.booleanToTerraform(struct!.isSsoUser),
    username: cdktf.stringToTerraform(struct!.username),
    options: environmentTemplateSpecRunAsUserOptionsToTerraform(struct!.options),
  }
}


export function environmentTemplateSpecRunAsUserToHclTerraform(struct?: EnvironmentTemplateSpecRunAsUserOutputReference | EnvironmentTemplateSpecRunAsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_sso_user: {
      value: cdktf.booleanToHclTerraform(struct!.isSsoUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: environmentTemplateSpecRunAsUserOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecRunAsUserOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecRunAsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecRunAsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSsoUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSsoUser = this._isSsoUser;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecRunAsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isSsoUser = undefined;
      this._username = undefined;
      this._options.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isSsoUser = value.isSsoUser;
      this._username = value.username;
      this._options.internalValue = value.options;
    }
  }

  // is_sso_user - computed: false, optional: true, required: false
  private _isSsoUser?: boolean | cdktf.IResolvable; 
  public get isSsoUser() {
    return this.getBooleanAttribute('is_sso_user');
  }
  public set isSsoUser(value: boolean | cdktf.IResolvable) {
    this._isSsoUser = value;
  }
  public resetIsSsoUser() {
    this._isSsoUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSsoUserInput() {
    return this._isSsoUser;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // options - computed: false, optional: true, required: false
  private _options = new EnvironmentTemplateSpecRunAsUserOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: EnvironmentTemplateSpecRunAsUserOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesCadenceStaggeredEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesCadenceStaggeredEnabledToTerraform(struct?: EnvironmentTemplateSpecSchedulesCadenceStaggeredEnabledOutputReference | EnvironmentTemplateSpecSchedulesCadenceStaggeredEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecSchedulesCadenceStaggeredEnabledToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesCadenceStaggeredEnabledOutputReference | EnvironmentTemplateSpecSchedulesCadenceStaggeredEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesCadenceStaggeredEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesCadenceStaggeredEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesCadenceStaggeredEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface EnvironmentTemplateSpecSchedulesCadenceStaggered {
  /**
  * Introduces random delay on schedules with permissible max interval, applicable only if enabled is set to true, time units are 's', 'm' e.g. 300s, 30m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#max_interval EnvironmentTemplate#max_interval}
  */
  readonly maxInterval?: string;
  /**
  * enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#enabled EnvironmentTemplate#enabled}
  */
  readonly enabled?: EnvironmentTemplateSpecSchedulesCadenceStaggeredEnabled;
}

export function environmentTemplateSpecSchedulesCadenceStaggeredToTerraform(struct?: EnvironmentTemplateSpecSchedulesCadenceStaggeredOutputReference | EnvironmentTemplateSpecSchedulesCadenceStaggered): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_interval: cdktf.stringToTerraform(struct!.maxInterval),
    enabled: environmentTemplateSpecSchedulesCadenceStaggeredEnabledToTerraform(struct!.enabled),
  }
}


export function environmentTemplateSpecSchedulesCadenceStaggeredToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesCadenceStaggeredOutputReference | EnvironmentTemplateSpecSchedulesCadenceStaggered): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_interval: {
      value: cdktf.stringToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: environmentTemplateSpecSchedulesCadenceStaggeredEnabledToHclTerraform(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesCadenceStaggeredEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesCadenceStaggeredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesCadenceStaggered | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesCadenceStaggered | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxInterval = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxInterval = value.maxInterval;
      this._enabled.internalValue = value.enabled;
    }
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: string; 
  public get maxInterval() {
    return this.getStringAttribute('max_interval');
  }
  public set maxInterval(value: string) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new EnvironmentTemplateSpecSchedulesCadenceStaggeredEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: EnvironmentTemplateSpecSchedulesCadenceStaggeredEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesCadence {
  /**
  * Cron expression used to configure scheduling jobs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#cron_expression EnvironmentTemplate#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Specify the timezone of cron expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#cron_timezone EnvironmentTemplate#cron_timezone}
  */
  readonly cronTimezone?: string;
  /**
  * Specify the maximum time to live duration of an environment, time units are 'h', 'd' e.g. 8h, 2d
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#time_to_live EnvironmentTemplate#time_to_live}
  */
  readonly timeToLive?: string;
  /**
  * staggered block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#staggered EnvironmentTemplate#staggered}
  */
  readonly staggered?: EnvironmentTemplateSpecSchedulesCadenceStaggered;
}

export function environmentTemplateSpecSchedulesCadenceToTerraform(struct?: EnvironmentTemplateSpecSchedulesCadenceOutputReference | EnvironmentTemplateSpecSchedulesCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    cron_timezone: cdktf.stringToTerraform(struct!.cronTimezone),
    time_to_live: cdktf.stringToTerraform(struct!.timeToLive),
    staggered: environmentTemplateSpecSchedulesCadenceStaggeredToTerraform(struct!.staggered),
  }
}


export function environmentTemplateSpecSchedulesCadenceToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesCadenceOutputReference | EnvironmentTemplateSpecSchedulesCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_timezone: {
      value: cdktf.stringToHclTerraform(struct!.cronTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_live: {
      value: cdktf.stringToHclTerraform(struct!.timeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    staggered: {
      value: environmentTemplateSpecSchedulesCadenceStaggeredToHclTerraform(struct!.staggered),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesCadenceStaggeredList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._cronTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronTimezone = this._cronTimezone;
    }
    if (this._timeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLive = this._timeToLive;
    }
    if (this._staggered?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staggered = this._staggered?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._cronTimezone = undefined;
      this._timeToLive = undefined;
      this._staggered.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._cronTimezone = value.cronTimezone;
      this._timeToLive = value.timeToLive;
      this._staggered.internalValue = value.staggered;
    }
  }

  // cron_expression - computed: false, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // cron_timezone - computed: false, optional: true, required: false
  private _cronTimezone?: string; 
  public get cronTimezone() {
    return this.getStringAttribute('cron_timezone');
  }
  public set cronTimezone(value: string) {
    this._cronTimezone = value;
  }
  public resetCronTimezone() {
    this._cronTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronTimezoneInput() {
    return this._cronTimezone;
  }

  // time_to_live - computed: false, optional: true, required: false
  private _timeToLive?: string; 
  public get timeToLive() {
    return this.getStringAttribute('time_to_live');
  }
  public set timeToLive(value: string) {
    this._timeToLive = value;
  }
  public resetTimeToLive() {
    this._timeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive;
  }

  // staggered - computed: false, optional: true, required: false
  private _staggered = new EnvironmentTemplateSpecSchedulesCadenceStaggeredOutputReference(this, "staggered");
  public get staggered() {
    return this._staggered;
  }
  public putStaggered(value: EnvironmentTemplateSpecSchedulesCadenceStaggered) {
    this._staggered.internalValue = value;
  }
  public resetStaggered() {
    this._staggered.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staggeredInput() {
    return this._staggered.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOverride {
  /**
  * Display overridden values on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#display_overridden EnvironmentTemplate#display_overridden}
  */
  readonly displayOverridden?: boolean | cdktf.IResolvable;
  /**
  * If the override type is restricted_key_values, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#restricted_key_values EnvironmentTemplate#restricted_key_values}
  */
  readonly restrictedKeyValues?: { [key: string]: string };
  /**
  * If the override type is restricted, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#restricted_values EnvironmentTemplate#restricted_values}
  */
  readonly restrictedValues?: string[];
  /**
  * Used to alias a variable and restrict the override scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#selectors EnvironmentTemplate#selectors}
  */
  readonly selectors?: string[];
  /**
  * Specify the type of ovverride this variable supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#type EnvironmentTemplate#type}
  */
  readonly type?: string;
}

export function environmentTemplateSpecSchedulesContextDataEnvsOptionsOverrideToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOverrideOutputReference | EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_overridden: cdktf.booleanToTerraform(struct!.displayOverridden),
    restricted_key_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.restrictedKeyValues),
    restricted_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedValues),
    selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectors),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function environmentTemplateSpecSchedulesContextDataEnvsOptionsOverrideToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOverrideOutputReference | EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_overridden: {
      value: cdktf.booleanToHclTerraform(struct!.displayOverridden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted_key_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.restrictedKeyValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    restricted_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayOverridden !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOverridden = this._displayOverridden;
    }
    if (this._restrictedKeyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedKeyValues = this._restrictedKeyValues;
    }
    if (this._restrictedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedValues = this._restrictedValues;
    }
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayOverridden = undefined;
      this._restrictedKeyValues = undefined;
      this._restrictedValues = undefined;
      this._selectors = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayOverridden = value.displayOverridden;
      this._restrictedKeyValues = value.restrictedKeyValues;
      this._restrictedValues = value.restrictedValues;
      this._selectors = value.selectors;
      this._type = value.type;
    }
  }

  // display_overridden - computed: false, optional: true, required: false
  private _displayOverridden?: boolean | cdktf.IResolvable; 
  public get displayOverridden() {
    return this.getBooleanAttribute('display_overridden');
  }
  public set displayOverridden(value: boolean | cdktf.IResolvable) {
    this._displayOverridden = value;
  }
  public resetDisplayOverridden() {
    this._displayOverridden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOverriddenInput() {
    return this._displayOverridden;
  }

  // restricted_key_values - computed: false, optional: true, required: false
  private _restrictedKeyValues?: { [key: string]: string }; 
  public get restrictedKeyValues() {
    return this.getStringMapAttribute('restricted_key_values');
  }
  public set restrictedKeyValues(value: { [key: string]: string }) {
    this._restrictedKeyValues = value;
  }
  public resetRestrictedKeyValues() {
    this._restrictedKeyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedKeyValuesInput() {
    return this._restrictedKeyValues;
  }

  // restricted_values - computed: false, optional: true, required: false
  private _restrictedValues?: string[]; 
  public get restrictedValues() {
    return this.getListAttribute('restricted_values');
  }
  public set restrictedValues(value: string[]) {
    this._restrictedValues = value;
  }
  public resetRestrictedValues() {
    this._restrictedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedValuesInput() {
    return this._restrictedValues;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors?: string[]; 
  public get selectors() {
    return this.getListAttribute('selectors');
  }
  public set selectors(value: string[]) {
    this._selectors = value;
  }
  public resetSelectors() {
    this._selectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#jsonschema EnvironmentTemplate#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#uischema EnvironmentTemplate#uischema}
  */
  readonly uischema?: string;
}

export function environmentTemplateSpecSchedulesContextDataEnvsOptionsSchemaToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsSchemaOutputReference | EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function environmentTemplateSpecSchedulesContextDataEnvsOptionsSchemaToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsSchemaOutputReference | EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface EnvironmentTemplateSpecSchedulesContextDataEnvsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#description EnvironmentTemplate#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render environment variable on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#display_metadata EnvironmentTemplate#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the environment variable is immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#immutable EnvironmentTemplate#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the variable is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#required EnvironmentTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#override EnvironmentTemplate#override}
  */
  readonly override?: EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#schema EnvironmentTemplate#schema}
  */
  readonly schema?: EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsSchema;
}

export function environmentTemplateSpecSchedulesContextDataEnvsOptionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOutputReference | EnvironmentTemplateSpecSchedulesContextDataEnvsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    immutable: cdktf.booleanToTerraform(struct!.immutable),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: environmentTemplateSpecSchedulesContextDataEnvsOptionsOverrideToTerraform(struct!.override),
    schema: environmentTemplateSpecSchedulesContextDataEnvsOptionsSchemaToTerraform(struct!.schema),
  }
}


export function environmentTemplateSpecSchedulesContextDataEnvsOptionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOutputReference | EnvironmentTemplateSpecSchedulesContextDataEnvsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    immutable: {
      value: cdktf.booleanToHclTerraform(struct!.immutable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: environmentTemplateSpecSchedulesContextDataEnvsOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOverrideList",
    },
    schema: {
      value: environmentTemplateSpecSchedulesContextDataEnvsOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextDataEnvsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._immutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.immutable = this._immutable;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextDataEnvsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._immutable = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._immutable = value.immutable;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // immutable - computed: false, optional: true, required: false
  private _immutable?: boolean | cdktf.IResolvable; 
  public get immutable() {
    return this.getBooleanAttribute('immutable');
  }
  public set immutable(value: boolean | cdktf.IResolvable) {
    this._immutable = value;
  }
  public resetImmutable() {
    this._immutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableInput() {
    return this._immutable;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesContextDataEnvs {
  /**
  * Key of the environment variable to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Deprecated: use options.sensitive. Determines whether the value is sensitive or not, accordingly applies encryption on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * Value of the environment variable to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#options EnvironmentTemplate#options}
  */
  readonly options?: EnvironmentTemplateSpecSchedulesContextDataEnvsOptions;
}

export function environmentTemplateSpecSchedulesContextDataEnvsToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    value: cdktf.stringToTerraform(struct!.value),
    options: environmentTemplateSpecSchedulesContextDataEnvsOptionsToTerraform(struct!.options),
  }
}


export function environmentTemplateSpecSchedulesContextDataEnvsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: environmentTemplateSpecSchedulesContextDataEnvsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextDataEnvs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextDataEnvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._sensitive = undefined;
      this._value = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._sensitive = value.sensitive;
      this._value = value.value;
      this._options.internalValue = value.options;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // options - computed: false, optional: true, required: false
  private _options = new EnvironmentTemplateSpecSchedulesContextDataEnvsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: EnvironmentTemplateSpecSchedulesContextDataEnvsOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesContextDataEnvsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesContextDataEnvs[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesContextDataEnvsOutputReference {
    return new EnvironmentTemplateSpecSchedulesContextDataEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#type EnvironmentTemplate#type}
  */
  readonly type?: string;
}

export function environmentTemplateSpecSchedulesContextDataFilesOptionsOverrideToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOverrideOutputReference | EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function environmentTemplateSpecSchedulesContextDataFilesOptionsOverrideToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOverrideOutputReference | EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface EnvironmentTemplateSpecSchedulesContextDataFilesOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#jsonschema EnvironmentTemplate#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#uischema EnvironmentTemplate#uischema}
  */
  readonly uischema?: string;
}

export function environmentTemplateSpecSchedulesContextDataFilesOptionsSchemaToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataFilesOptionsSchemaOutputReference | EnvironmentTemplateSpecSchedulesContextDataFilesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function environmentTemplateSpecSchedulesContextDataFilesOptionsSchemaToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataFilesOptionsSchemaOutputReference | EnvironmentTemplateSpecSchedulesContextDataFilesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataFilesOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextDataFilesOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextDataFilesOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface EnvironmentTemplateSpecSchedulesContextDataFilesOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#description EnvironmentTemplate#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#display_metadata EnvironmentTemplate#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#required EnvironmentTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#override EnvironmentTemplate#override}
  */
  readonly override?: EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#schema EnvironmentTemplate#schema}
  */
  readonly schema?: EnvironmentTemplateSpecSchedulesContextDataFilesOptionsSchema;
}

export function environmentTemplateSpecSchedulesContextDataFilesOptionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOutputReference | EnvironmentTemplateSpecSchedulesContextDataFilesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: environmentTemplateSpecSchedulesContextDataFilesOptionsOverrideToTerraform(struct!.override),
    schema: environmentTemplateSpecSchedulesContextDataFilesOptionsSchemaToTerraform(struct!.schema),
  }
}


export function environmentTemplateSpecSchedulesContextDataFilesOptionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOutputReference | EnvironmentTemplateSpecSchedulesContextDataFilesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: environmentTemplateSpecSchedulesContextDataFilesOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOverrideList",
    },
    schema: {
      value: environmentTemplateSpecSchedulesContextDataFilesOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataFilesOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextDataFilesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextDataFilesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new EnvironmentTemplateSpecSchedulesContextDataFilesOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: EnvironmentTemplateSpecSchedulesContextDataFilesOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesContextDataFiles {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#data EnvironmentTemplate#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#mount_path EnvironmentTemplate#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#options EnvironmentTemplate#options}
  */
  readonly options?: EnvironmentTemplateSpecSchedulesContextDataFilesOptions;
}

export function environmentTemplateSpecSchedulesContextDataFilesToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: environmentTemplateSpecSchedulesContextDataFilesOptionsToTerraform(struct!.options),
  }
}


export function environmentTemplateSpecSchedulesContextDataFilesToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: environmentTemplateSpecSchedulesContextDataFilesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataFilesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextDataFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextDataFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._sensitive = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._options.internalValue = value.options;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // options - computed: false, optional: true, required: false
  private _options = new EnvironmentTemplateSpecSchedulesContextDataFilesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: EnvironmentTemplateSpecSchedulesContextDataFilesOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesContextDataFilesList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesContextDataFiles[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesContextDataFilesOutputReference {
    return new EnvironmentTemplateSpecSchedulesContextDataFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOverride {
  /**
  * Display overridden values on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#display_overridden EnvironmentTemplate#display_overridden}
  */
  readonly displayOverridden?: boolean | cdktf.IResolvable;
  /**
  * If the override type is restricted_key_values, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#restricted_key_values EnvironmentTemplate#restricted_key_values}
  */
  readonly restrictedKeyValues?: { [key: string]: string };
  /**
  * If the override type is restricted, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#restricted_values EnvironmentTemplate#restricted_values}
  */
  readonly restrictedValues?: string[];
  /**
  * Used to alias a variable and restrict the override scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#selectors EnvironmentTemplate#selectors}
  */
  readonly selectors?: string[];
  /**
  * Specify the type of ovverride this variable supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#type EnvironmentTemplate#type}
  */
  readonly type?: string;
}

export function environmentTemplateSpecSchedulesContextDataVariablesOptionsOverrideToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOverrideOutputReference | EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_overridden: cdktf.booleanToTerraform(struct!.displayOverridden),
    restricted_key_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.restrictedKeyValues),
    restricted_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedValues),
    selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectors),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function environmentTemplateSpecSchedulesContextDataVariablesOptionsOverrideToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOverrideOutputReference | EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_overridden: {
      value: cdktf.booleanToHclTerraform(struct!.displayOverridden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted_key_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.restrictedKeyValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    restricted_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayOverridden !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOverridden = this._displayOverridden;
    }
    if (this._restrictedKeyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedKeyValues = this._restrictedKeyValues;
    }
    if (this._restrictedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedValues = this._restrictedValues;
    }
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayOverridden = undefined;
      this._restrictedKeyValues = undefined;
      this._restrictedValues = undefined;
      this._selectors = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayOverridden = value.displayOverridden;
      this._restrictedKeyValues = value.restrictedKeyValues;
      this._restrictedValues = value.restrictedValues;
      this._selectors = value.selectors;
      this._type = value.type;
    }
  }

  // display_overridden - computed: false, optional: true, required: false
  private _displayOverridden?: boolean | cdktf.IResolvable; 
  public get displayOverridden() {
    return this.getBooleanAttribute('display_overridden');
  }
  public set displayOverridden(value: boolean | cdktf.IResolvable) {
    this._displayOverridden = value;
  }
  public resetDisplayOverridden() {
    this._displayOverridden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOverriddenInput() {
    return this._displayOverridden;
  }

  // restricted_key_values - computed: false, optional: true, required: false
  private _restrictedKeyValues?: { [key: string]: string }; 
  public get restrictedKeyValues() {
    return this.getStringMapAttribute('restricted_key_values');
  }
  public set restrictedKeyValues(value: { [key: string]: string }) {
    this._restrictedKeyValues = value;
  }
  public resetRestrictedKeyValues() {
    this._restrictedKeyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedKeyValuesInput() {
    return this._restrictedKeyValues;
  }

  // restricted_values - computed: false, optional: true, required: false
  private _restrictedValues?: string[]; 
  public get restrictedValues() {
    return this.getListAttribute('restricted_values');
  }
  public set restrictedValues(value: string[]) {
    this._restrictedValues = value;
  }
  public resetRestrictedValues() {
    this._restrictedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedValuesInput() {
    return this._restrictedValues;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors?: string[]; 
  public get selectors() {
    return this.getListAttribute('selectors');
  }
  public set selectors(value: string[]) {
    this._selectors = value;
  }
  public resetSelectors() {
    this._selectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#jsonschema EnvironmentTemplate#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#uischema EnvironmentTemplate#uischema}
  */
  readonly uischema?: string;
}

export function environmentTemplateSpecSchedulesContextDataVariablesOptionsSchemaToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsSchemaOutputReference | EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function environmentTemplateSpecSchedulesContextDataVariablesOptionsSchemaToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsSchemaOutputReference | EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface EnvironmentTemplateSpecSchedulesContextDataVariablesOptions {
  /**
  * Description of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#description EnvironmentTemplate#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render variable on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#display_metadata EnvironmentTemplate#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the variable is immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#immutable EnvironmentTemplate#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Specify whether this variable is required or optional, by default it is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#required EnvironmentTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the value is sensitive or not, accordingly applies encryption on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#override EnvironmentTemplate#override}
  */
  readonly override?: EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#schema EnvironmentTemplate#schema}
  */
  readonly schema?: EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsSchema;
}

export function environmentTemplateSpecSchedulesContextDataVariablesOptionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOutputReference | EnvironmentTemplateSpecSchedulesContextDataVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    immutable: cdktf.booleanToTerraform(struct!.immutable),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: environmentTemplateSpecSchedulesContextDataVariablesOptionsOverrideToTerraform(struct!.override),
    schema: environmentTemplateSpecSchedulesContextDataVariablesOptionsSchemaToTerraform(struct!.schema),
  }
}


export function environmentTemplateSpecSchedulesContextDataVariablesOptionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOutputReference | EnvironmentTemplateSpecSchedulesContextDataVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    immutable: {
      value: cdktf.booleanToHclTerraform(struct!.immutable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: environmentTemplateSpecSchedulesContextDataVariablesOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOverrideList",
    },
    schema: {
      value: environmentTemplateSpecSchedulesContextDataVariablesOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextDataVariablesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._immutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.immutable = this._immutable;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextDataVariablesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._immutable = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._immutable = value.immutable;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // immutable - computed: false, optional: true, required: false
  private _immutable?: boolean | cdktf.IResolvable; 
  public get immutable() {
    return this.getBooleanAttribute('immutable');
  }
  public set immutable(value: boolean | cdktf.IResolvable) {
    this._immutable = value;
  }
  public resetImmutable() {
    this._immutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableInput() {
    return this._immutable;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesContextDataVariables {
  /**
  * Name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name: string;
  /**
  * Value of the variable in the specified format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: string;
  /**
  * Specify the variable value type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value_type EnvironmentTemplate#value_type}
  */
  readonly valueType: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#options EnvironmentTemplate#options}
  */
  readonly options?: EnvironmentTemplateSpecSchedulesContextDataVariablesOptions;
}

export function environmentTemplateSpecSchedulesContextDataVariablesToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    options: environmentTemplateSpecSchedulesContextDataVariablesOptionsToTerraform(struct!.options),
  }
}


export function environmentTemplateSpecSchedulesContextDataVariablesToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: environmentTemplateSpecSchedulesContextDataVariablesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextDataVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextDataVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueType = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueType = value.valueType;
      this._options.internalValue = value.options;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // options - computed: false, optional: true, required: false
  private _options = new EnvironmentTemplateSpecSchedulesContextDataVariablesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: EnvironmentTemplateSpecSchedulesContextDataVariablesOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesContextDataVariablesList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesContextDataVariables[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesContextDataVariablesOutputReference {
    return new EnvironmentTemplateSpecSchedulesContextDataVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesContextData {
  /**
  * envs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#envs EnvironmentTemplate#envs}
  */
  readonly envs?: EnvironmentTemplateSpecSchedulesContextDataEnvs[] | cdktf.IResolvable;
  /**
  * files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#files EnvironmentTemplate#files}
  */
  readonly files?: EnvironmentTemplateSpecSchedulesContextDataFiles[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#variables EnvironmentTemplate#variables}
  */
  readonly variables?: EnvironmentTemplateSpecSchedulesContextDataVariables[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesContextDataToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataOutputReference | EnvironmentTemplateSpecSchedulesContextData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envs: cdktf.listMapper(environmentTemplateSpecSchedulesContextDataEnvsToTerraform, true)(struct!.envs),
    files: cdktf.listMapper(environmentTemplateSpecSchedulesContextDataFilesToTerraform, true)(struct!.files),
    variables: cdktf.listMapper(environmentTemplateSpecSchedulesContextDataVariablesToTerraform, true)(struct!.variables),
  }
}


export function environmentTemplateSpecSchedulesContextDataToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextDataOutputReference | EnvironmentTemplateSpecSchedulesContextData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envs: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesContextDataEnvsToHclTerraform, true)(struct!.envs),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataEnvsList",
    },
    files: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesContextDataFilesToHclTerraform, true)(struct!.files),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataFilesList",
    },
    variables: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesContextDataVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesContextData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs?.internalValue;
    }
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContextData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._envs.internalValue = undefined;
      this._files.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._envs.internalValue = value.envs;
      this._files.internalValue = value.files;
      this._variables.internalValue = value.variables;
    }
  }

  // envs - computed: false, optional: true, required: false
  private _envs = new EnvironmentTemplateSpecSchedulesContextDataEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: EnvironmentTemplateSpecSchedulesContextDataEnvs[] | cdktf.IResolvable) {
    this._envs.internalValue = value;
  }
  public resetEnvs() {
    this._envs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs.internalValue;
  }

  // files - computed: false, optional: true, required: false
  private _files = new EnvironmentTemplateSpecSchedulesContextDataFilesList(this, "files", false);
  public get files() {
    return this._files;
  }
  public putFiles(value: EnvironmentTemplateSpecSchedulesContextDataFiles[] | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  public resetFiles() {
    this._files.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new EnvironmentTemplateSpecSchedulesContextDataVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: EnvironmentTemplateSpecSchedulesContextDataVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesContext {
  /**
  * Name of the config context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#data EnvironmentTemplate#data}
  */
  readonly data?: EnvironmentTemplateSpecSchedulesContextData;
}

export function environmentTemplateSpecSchedulesContextToTerraform(struct?: EnvironmentTemplateSpecSchedulesContextOutputReference | EnvironmentTemplateSpecSchedulesContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    data: environmentTemplateSpecSchedulesContextDataToTerraform(struct!.data),
  }
}


export function environmentTemplateSpecSchedulesContextToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesContextOutputReference | EnvironmentTemplateSpecSchedulesContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: environmentTemplateSpecSchedulesContextDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesContextDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._data.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._data.internalValue = value.data;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // data - computed: false, optional: true, required: false
  private _data = new EnvironmentTemplateSpecSchedulesContextDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: EnvironmentTemplateSpecSchedulesContextData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsAllowOptOut {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsAllowOptOutToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsAllowOptOutOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsAllowOptOut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsAllowOptOutToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsAllowOptOutOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsAllowOptOut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsAllowOptOutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsAllowOptOut | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsAllowOptOut | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentPools {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#system_catalog EnvironmentTemplate#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#version EnvironmentTemplate#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#version_state EnvironmentTemplate#version_state}
  */
  readonly versionState?: string;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentPoolsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    system_catalog: cdktf.booleanToTerraform(struct!.systemCatalog),
    version: cdktf.stringToTerraform(struct!.version),
    version_state: cdktf.stringToTerraform(struct!.versionState),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentPoolsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_catalog: {
      value: cdktf.booleanToHclTerraform(struct!.systemCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_state: {
      value: cdktf.stringToHclTerraform(struct!.versionState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._systemCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCatalog = this._systemCatalog;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionState = this._versionState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._systemCatalog = undefined;
      this._version = undefined;
      this._versionState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._systemCatalog = value.systemCatalog;
      this._version = value.version;
      this._versionState = value.versionState;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // system_catalog - computed: false, optional: true, required: false
  private _systemCatalog?: boolean | cdktf.IResolvable; 
  public get systemCatalog() {
    return this.getBooleanAttribute('system_catalog');
  }
  public set systemCatalog(value: boolean | cdktf.IResolvable) {
    this._systemCatalog = value;
  }
  public resetSystemCatalog() {
    this._systemCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCatalogInput() {
    return this._systemCatalog;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_state - computed: false, optional: true, required: false
  private _versionState?: string; 
  public get versionState() {
    return this.getStringAttribute('version_state');
  }
  public set versionState(value: string) {
    this._versionState = value;
  }
  public resetVersionState() {
    this._versionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStateInput() {
    return this._versionState;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentPoolsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentPools[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentPoolsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgents {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#system_catalog EnvironmentTemplate#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#version EnvironmentTemplate#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#version_state EnvironmentTemplate#version_state}
  */
  readonly versionState?: string;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    system_catalog: cdktf.booleanToTerraform(struct!.systemCatalog),
    version: cdktf.stringToTerraform(struct!.version),
    version_state: cdktf.stringToTerraform(struct!.versionState),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_catalog: {
      value: cdktf.booleanToHclTerraform(struct!.systemCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_state: {
      value: cdktf.stringToHclTerraform(struct!.versionState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._systemCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCatalog = this._systemCatalog;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionState = this._versionState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._systemCatalog = undefined;
      this._version = undefined;
      this._versionState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._systemCatalog = value.systemCatalog;
      this._version = value.version;
      this._versionState = value.versionState;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // system_catalog - computed: false, optional: true, required: false
  private _systemCatalog?: boolean | cdktf.IResolvable; 
  public get systemCatalog() {
    return this.getBooleanAttribute('system_catalog');
  }
  public set systemCatalog(value: boolean | cdktf.IResolvable) {
    this._systemCatalog = value;
  }
  public resetSystemCatalog() {
    this._systemCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCatalogInput() {
    return this._systemCatalog;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_state - computed: false, optional: true, required: false
  private _versionState?: string; 
  public get versionState() {
    return this.getStringAttribute('version_state');
  }
  public set versionState(value: string) {
    this._versionState = value;
  }
  public resetVersionState() {
    this._versionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStateInput() {
    return this._versionState;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgents[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentials {
  /**
  * Specify the registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#password EnvironmentTemplate#password}
  */
  readonly password?: string;
  /**
  * Specify the container image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#registry EnvironmentTemplate#registry}
  */
  readonly registry?: string;
  /**
  * Specify the registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#username EnvironmentTemplate#username}
  */
  readonly username?: string;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentialsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentialsOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry: cdktf.stringToTerraform(struct!.registry),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentialsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentialsOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._registry = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._registry = value.registry;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptions {
  /**
  * Specify the kube config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#kube_config EnvironmentTemplate#kube_config}
  */
  readonly kubeConfig?: string;
  /**
  * Specify if out of cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#out_of_cluster EnvironmentTemplate#out_of_cluster}
  */
  readonly outOfCluster?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptionsOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kube_config: cdktf.stringToTerraform(struct!.kubeConfig),
    out_of_cluster: cdktf.booleanToTerraform(struct!.outOfCluster),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptionsOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kube_config: {
      value: cdktf.stringToHclTerraform(struct!.kubeConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_of_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.outOfCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeConfig = this._kubeConfig;
    }
    if (this._outOfCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfCluster = this._outOfCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubeConfig = undefined;
      this._outOfCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubeConfig = value.kubeConfig;
      this._outOfCluster = value.outOfCluster;
    }
  }

  // kube_config - computed: false, optional: true, required: false
  private _kubeConfig?: string; 
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }
  public set kubeConfig(value: string) {
    this._kubeConfig = value;
  }
  public resetKubeConfig() {
    this._kubeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig;
  }

  // out_of_cluster - computed: false, optional: true, required: false
  private _outOfCluster?: boolean | cdktf.IResolvable; 
  public get outOfCluster() {
    return this.getBooleanAttribute('out_of_cluster');
  }
  public set outOfCluster(value: boolean | cdktf.IResolvable) {
    this._outOfCluster = value;
  }
  public resetOutOfCluster() {
    this._outOfCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfClusterInput() {
    return this._outOfCluster;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_fields EnvironmentTemplate#match_fields}
  */
  readonly matchFields?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#weight EnvironmentTemplate#weight}
  */
  readonly weight?: number;
  /**
  * preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#preference EnvironmentTemplate#preference}
  */
  readonly preference?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._preference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._preference.internalValue = value.preference;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // preference - computed: false, optional: true, required: false
  private _preference = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  public resetPreference() {
    this._preference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_fields EnvironmentTemplate#match_fields}
  */
  readonly matchFields?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * node_selector_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#node_selector_terms EnvironmentTemplate#node_selector_terms}
  */
  readonly nodeSelectorTerms?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, true)(struct!.nodeSelectorTerms),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, true)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: true, required: false
  private _nodeSelectorTerms = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  public resetNodeSelectorTerms() {
    this._nodeSelectorTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#preferred_during_scheduling_ignored_during_execution EnvironmentTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#required_during_scheduling_ignored_during_execution EnvironmentTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#weight EnvironmentTemplate#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#pod_affinity_term EnvironmentTemplate#pod_affinity_term}
  */
  readonly podAffinityTerm?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_affinity_term: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._podAffinityTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#preferred_during_scheduling_ignored_during_execution EnvironmentTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#required_during_scheduling_ignored_during_execution EnvironmentTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#weight EnvironmentTemplate#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#pod_affinity_term EnvironmentTemplate#pod_affinity_term}
  */
  readonly podAffinityTerm?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_affinity_term: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._podAffinityTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#preferred_during_scheduling_ignored_during_execution EnvironmentTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#required_during_scheduling_ignored_during_execution EnvironmentTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinity {
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#node_affinity EnvironmentTemplate#node_affinity}
  */
  readonly nodeAffinity?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinity;
  /**
  * pod_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#pod_affinity EnvironmentTemplate#pod_affinity}
  */
  readonly podAffinity?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinity;
  /**
  * pod_anti_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#pod_anti_affinity EnvironmentTemplate#pod_anti_affinity}
  */
  readonly podAntiAffinity?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityList",
    },
    pod_affinity: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityList",
    },
    pod_anti_affinity: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivileged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivileged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivileged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContext {
  /**
  * privileged block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#privileged EnvironmentTemplate#privileged}
  */
  readonly privileged?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivileged;
  /**
  * read_only_root_file_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#read_only_root_file_system EnvironmentTemplate#read_only_root_file_system}
  */
  readonly readOnlyRootFileSystem?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privileged: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedToTerraform(struct!.privileged),
    read_only_root_file_system: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct!.readOnlyRootFileSystem),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privileged: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedToHclTerraform(struct!.privileged),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedList",
    },
    read_only_root_file_system: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct!.readOnlyRootFileSystem),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privileged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged?.internalValue;
    }
    if (this._readOnlyRootFileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFileSystem = this._readOnlyRootFileSystem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privileged.internalValue = undefined;
      this._readOnlyRootFileSystem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privileged.internalValue = value.privileged;
      this._readOnlyRootFileSystem.internalValue = value.readOnlyRootFileSystem;
    }
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference(this, "privileged");
  public get privileged() {
    return this._privileged;
  }
  public putPrivileged(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextPrivileged) {
    this._privileged.internalValue = value;
  }
  public resetPrivileged() {
    this._privileged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged.internalValue;
  }

  // read_only_root_file_system - computed: false, optional: true, required: false
  private _readOnlyRootFileSystem = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference(this, "read_only_root_file_system");
  public get readOnlyRootFileSystem() {
    return this._readOnlyRootFileSystem;
  }
  public putReadOnlyRootFileSystem(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem) {
    this._readOnlyRootFileSystem.internalValue = value;
  }
  public resetReadOnlyRootFileSystem() {
    this._readOnlyRootFileSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFileSystemInput() {
    return this._readOnlyRootFileSystem.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#effect EnvironmentTemplate#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#toleration_seconds EnvironmentTemplate#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: string;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerationsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerationsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerationsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerations[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerationsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptions {
  /**
  * Specify the labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#labels EnvironmentTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specify the namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespace EnvironmentTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * Specify the node selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#node_selector EnvironmentTemplate#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specify the resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#resources EnvironmentTemplate#resources}
  */
  readonly resources?: string[];
  /**
  * Specify the service account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#service_account_name EnvironmentTemplate#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#affinity EnvironmentTemplate#affinity}
  */
  readonly affinity?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinity;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#security_context EnvironmentTemplate#security_context}
  */
  readonly securityContext?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContext;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#tolerations EnvironmentTemplate#tolerations}
  */
  readonly tolerations?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerations[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    affinity: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityToTerraform(struct!.affinity),
    security_context: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextToTerraform(struct!.securityContext),
    tolerations: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    affinity: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityList",
    },
    security_context: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._namespace = undefined;
      this._nodeSelector = undefined;
      this._resources = undefined;
      this._serviceAccountName = undefined;
      this._affinity.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._nodeSelector = value.nodeSelector;
      this._resources = value.resources;
      this._serviceAccountName = value.serviceAccountName;
      this._affinity.internalValue = value.affinity;
      this._securityContext.internalValue = value.securityContext;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvcToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvcOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvcToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvcOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptions {
  /**
  * If enabled, contents of the volume will be backed up after the job completes and restored before the next job starts across multiple runs of the environment. Scope of backup and restore is limited to the environment and resource template where this driver is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#enable_backup_and_restore EnvironmentTemplate#enable_backup_and_restore}
  */
  readonly enableBackupAndRestore?: boolean | cdktf.IResolvable;
  /**
  * Specify the container mount path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#mount_path EnvironmentTemplate#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Specify the persistent volume claim size in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#pvc_size_gb EnvironmentTemplate#pvc_size_gb}
  */
  readonly pvcSizeGb?: string;
  /**
  * Specify the persistent volume claim storage class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#pvc_storage_class EnvironmentTemplate#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
  /**
  * use_pvc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#use_pvc EnvironmentTemplate#use_pvc}
  */
  readonly usePvc?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvc;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_backup_and_restore: cdktf.booleanToTerraform(struct!.enableBackupAndRestore),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    pvc_size_gb: cdktf.stringToTerraform(struct!.pvcSizeGb),
    pvc_storage_class: cdktf.stringToTerraform(struct!.pvcStorageClass),
    use_pvc: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvcToTerraform(struct!.usePvc),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_backup_and_restore: {
      value: cdktf.booleanToHclTerraform(struct!.enableBackupAndRestore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.pvcSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.pvcStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pvc: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvcToHclTerraform(struct!.usePvc),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBackupAndRestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBackupAndRestore = this._enableBackupAndRestore;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._pvcSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcSizeGb = this._pvcSizeGb;
    }
    if (this._pvcStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcStorageClass = this._pvcStorageClass;
    }
    if (this._usePvc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePvc = this._usePvc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableBackupAndRestore = undefined;
      this._mountPath = undefined;
      this._pvcSizeGb = undefined;
      this._pvcStorageClass = undefined;
      this._usePvc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableBackupAndRestore = value.enableBackupAndRestore;
      this._mountPath = value.mountPath;
      this._pvcSizeGb = value.pvcSizeGb;
      this._pvcStorageClass = value.pvcStorageClass;
      this._usePvc.internalValue = value.usePvc;
    }
  }

  // enable_backup_and_restore - computed: false, optional: true, required: false
  private _enableBackupAndRestore?: boolean | cdktf.IResolvable; 
  public get enableBackupAndRestore() {
    return this.getBooleanAttribute('enable_backup_and_restore');
  }
  public set enableBackupAndRestore(value: boolean | cdktf.IResolvable) {
    this._enableBackupAndRestore = value;
  }
  public resetEnableBackupAndRestore() {
    this._enableBackupAndRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupAndRestoreInput() {
    return this._enableBackupAndRestore;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // pvc_size_gb - computed: false, optional: true, required: false
  private _pvcSizeGb?: string; 
  public get pvcSizeGb() {
    return this.getStringAttribute('pvc_size_gb');
  }
  public set pvcSizeGb(value: string) {
    this._pvcSizeGb = value;
  }
  public resetPvcSizeGb() {
    this._pvcSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcSizeGbInput() {
    return this._pvcSizeGb;
  }

  // pvc_storage_class - computed: false, optional: true, required: false
  private _pvcStorageClass?: string; 
  public get pvcStorageClass() {
    return this.getStringAttribute('pvc_storage_class');
  }
  public set pvcStorageClass(value: string) {
    this._pvcStorageClass = value;
  }
  public resetPvcStorageClass() {
    this._pvcStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcStorageClassInput() {
    return this._pvcStorageClass;
  }

  // use_pvc - computed: false, optional: true, required: false
  private _usePvc = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvcOutputReference(this, "use_pvc");
  public get usePvc() {
    return this._usePvc;
  }
  public putUsePvc(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsUsePvc) {
    this._usePvc.internalValue = value;
  }
  public resetUsePvc() {
    this._usePvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePvcInput() {
    return this._usePvc.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvcToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvcOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvcToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvcOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumes {
  /**
  * If enabled, contents of the volume will be backed up after the job completes and restored before the next job starts across multiple runs of the environment. Scope of backup and restore is limited to the environment and resource template where this driver is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#enable_backup_and_restore EnvironmentTemplate#enable_backup_and_restore}
  */
  readonly enableBackupAndRestore?: boolean | cdktf.IResolvable;
  /**
  * Specify the container mount path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#mount_path EnvironmentTemplate#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Specify the persistent volume claim size in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#pvc_size_gb EnvironmentTemplate#pvc_size_gb}
  */
  readonly pvcSizeGb?: string;
  /**
  * Specify the persistent volume claim storage class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#pvc_storage_class EnvironmentTemplate#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
  /**
  * use_pvc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#use_pvc EnvironmentTemplate#use_pvc}
  */
  readonly usePvc?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvc;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_backup_and_restore: cdktf.booleanToTerraform(struct!.enableBackupAndRestore),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    pvc_size_gb: cdktf.stringToTerraform(struct!.pvcSizeGb),
    pvc_storage_class: cdktf.stringToTerraform(struct!.pvcStorageClass),
    use_pvc: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvcToTerraform(struct!.usePvc),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_backup_and_restore: {
      value: cdktf.booleanToHclTerraform(struct!.enableBackupAndRestore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.pvcSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.pvcStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pvc: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvcToHclTerraform(struct!.usePvc),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBackupAndRestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBackupAndRestore = this._enableBackupAndRestore;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._pvcSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcSizeGb = this._pvcSizeGb;
    }
    if (this._pvcStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcStorageClass = this._pvcStorageClass;
    }
    if (this._usePvc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePvc = this._usePvc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableBackupAndRestore = undefined;
      this._mountPath = undefined;
      this._pvcSizeGb = undefined;
      this._pvcStorageClass = undefined;
      this._usePvc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableBackupAndRestore = value.enableBackupAndRestore;
      this._mountPath = value.mountPath;
      this._pvcSizeGb = value.pvcSizeGb;
      this._pvcStorageClass = value.pvcStorageClass;
      this._usePvc.internalValue = value.usePvc;
    }
  }

  // enable_backup_and_restore - computed: false, optional: true, required: false
  private _enableBackupAndRestore?: boolean | cdktf.IResolvable; 
  public get enableBackupAndRestore() {
    return this.getBooleanAttribute('enable_backup_and_restore');
  }
  public set enableBackupAndRestore(value: boolean | cdktf.IResolvable) {
    this._enableBackupAndRestore = value;
  }
  public resetEnableBackupAndRestore() {
    this._enableBackupAndRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupAndRestoreInput() {
    return this._enableBackupAndRestore;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // pvc_size_gb - computed: false, optional: true, required: false
  private _pvcSizeGb?: string; 
  public get pvcSizeGb() {
    return this.getStringAttribute('pvc_size_gb');
  }
  public set pvcSizeGb(value: string) {
    this._pvcSizeGb = value;
  }
  public resetPvcSizeGb() {
    this._pvcSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcSizeGbInput() {
    return this._pvcSizeGb;
  }

  // pvc_storage_class - computed: false, optional: true, required: false
  private _pvcStorageClass?: string; 
  public get pvcStorageClass() {
    return this.getStringAttribute('pvc_storage_class');
  }
  public set pvcStorageClass(value: string) {
    this._pvcStorageClass = value;
  }
  public resetPvcStorageClass() {
    this._pvcStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcStorageClassInput() {
    return this._pvcStorageClass;
  }

  // use_pvc - computed: false, optional: true, required: false
  private _usePvc = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvcOutputReference(this, "use_pvc");
  public get usePvc() {
    return this._usePvc;
  }
  public putUsePvc(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesUsePvc) {
    this._usePvc.internalValue = value;
  }
  public resetUsePvc() {
    this._usePvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePvcInput() {
    return this._usePvc.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumes[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainer {
  /**
  * Specify the set of arguments to be passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#arguments EnvironmentTemplate#arguments}
  */
  readonly arguments?: string[];
  /**
  * Specify the set of commands to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#commands EnvironmentTemplate#commands}
  */
  readonly commands?: string[];
  /**
  * Specify the cpu limit in milli
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#cpu_limit_milli EnvironmentTemplate#cpu_limit_milli}
  */
  readonly cpuLimitMilli?: string;
  /**
  * Specify the environment variables to be set in key,value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#env_vars EnvironmentTemplate#env_vars}
  */
  readonly envVars?: { [key: string]: string };
  /**
  * Specify the file data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#files EnvironmentTemplate#files}
  */
  readonly files?: { [key: string]: string };
  /**
  * Specify the container image for the driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#image EnvironmentTemplate#image}
  */
  readonly image?: string;
  /**
  * Specify the memory limit to be allocated in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#memory_limit_mb EnvironmentTemplate#memory_limit_mb}
  */
  readonly memoryLimitMb?: string;
  /**
  * Specify the working directory path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#working_dir_path EnvironmentTemplate#working_dir_path}
  */
  readonly workingDirPath?: string;
  /**
  * image_pull_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#image_pull_credentials EnvironmentTemplate#image_pull_credentials}
  */
  readonly imagePullCredentials?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentials;
  /**
  * kube_config_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#kube_config_options EnvironmentTemplate#kube_config_options}
  */
  readonly kubeConfigOptions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptions;
  /**
  * kube_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#kube_options EnvironmentTemplate#kube_options}
  */
  readonly kubeOptions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptions;
  /**
  * volume_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#volume_options EnvironmentTemplate#volume_options}
  */
  readonly volumeOptions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptions;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#volumes EnvironmentTemplate#volumes}
  */
  readonly volumes?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumes[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    cpu_limit_milli: cdktf.stringToTerraform(struct!.cpuLimitMilli),
    env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envVars),
    files: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.files),
    image: cdktf.stringToTerraform(struct!.image),
    memory_limit_mb: cdktf.stringToTerraform(struct!.memoryLimitMb),
    working_dir_path: cdktf.stringToTerraform(struct!.workingDirPath),
    image_pull_credentials: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentialsToTerraform(struct!.imagePullCredentials),
    kube_config_options: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptionsToTerraform(struct!.kubeConfigOptions),
    kube_options: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsToTerraform(struct!.kubeOptions),
    volume_options: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsToTerraform(struct!.volumeOptions),
    volumes: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesToTerraform, true)(struct!.volumes),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu_limit_milli: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimitMilli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env_vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    files: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.files),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit_mb: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimitMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_dir_path: {
      value: cdktf.stringToHclTerraform(struct!.workingDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_credentials: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentialsToHclTerraform(struct!.imagePullCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentialsList",
    },
    kube_config_options: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptionsToHclTerraform(struct!.kubeConfigOptions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptionsList",
    },
    kube_options: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsToHclTerraform(struct!.kubeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsList",
    },
    volume_options: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsToHclTerraform(struct!.volumeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._cpuLimitMilli !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimitMilli = this._cpuLimitMilli;
    }
    if (this._envVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars;
    }
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._memoryLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimitMb = this._memoryLimitMb;
    }
    if (this._workingDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirPath = this._workingDirPath;
    }
    if (this._imagePullCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullCredentials = this._imagePullCredentials?.internalValue;
    }
    if (this._kubeConfigOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeConfigOptions = this._kubeConfigOptions?.internalValue;
    }
    if (this._kubeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeOptions = this._kubeOptions?.internalValue;
    }
    if (this._volumeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeOptions = this._volumeOptions?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._commands = undefined;
      this._cpuLimitMilli = undefined;
      this._envVars = undefined;
      this._files = undefined;
      this._image = undefined;
      this._memoryLimitMb = undefined;
      this._workingDirPath = undefined;
      this._imagePullCredentials.internalValue = undefined;
      this._kubeConfigOptions.internalValue = undefined;
      this._kubeOptions.internalValue = undefined;
      this._volumeOptions.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._commands = value.commands;
      this._cpuLimitMilli = value.cpuLimitMilli;
      this._envVars = value.envVars;
      this._files = value.files;
      this._image = value.image;
      this._memoryLimitMb = value.memoryLimitMb;
      this._workingDirPath = value.workingDirPath;
      this._imagePullCredentials.internalValue = value.imagePullCredentials;
      this._kubeConfigOptions.internalValue = value.kubeConfigOptions;
      this._kubeOptions.internalValue = value.kubeOptions;
      this._volumeOptions.internalValue = value.volumeOptions;
      this._volumes.internalValue = value.volumes;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // cpu_limit_milli - computed: false, optional: true, required: false
  private _cpuLimitMilli?: string; 
  public get cpuLimitMilli() {
    return this.getStringAttribute('cpu_limit_milli');
  }
  public set cpuLimitMilli(value: string) {
    this._cpuLimitMilli = value;
  }
  public resetCpuLimitMilli() {
    this._cpuLimitMilli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitMilliInput() {
    return this._cpuLimitMilli;
  }

  // env_vars - computed: false, optional: true, required: false
  private _envVars?: { [key: string]: string }; 
  public get envVars() {
    return this.getStringMapAttribute('env_vars');
  }
  public set envVars(value: { [key: string]: string }) {
    this._envVars = value;
  }
  public resetEnvVars() {
    this._envVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars;
  }

  // files - computed: false, optional: true, required: false
  private _files?: { [key: string]: string }; 
  public get files() {
    return this.getStringMapAttribute('files');
  }
  public set files(value: { [key: string]: string }) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory_limit_mb - computed: false, optional: true, required: false
  private _memoryLimitMb?: string; 
  public get memoryLimitMb() {
    return this.getStringAttribute('memory_limit_mb');
  }
  public set memoryLimitMb(value: string) {
    this._memoryLimitMb = value;
  }
  public resetMemoryLimitMb() {
    this._memoryLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitMbInput() {
    return this._memoryLimitMb;
  }

  // working_dir_path - computed: false, optional: true, required: false
  private _workingDirPath?: string; 
  public get workingDirPath() {
    return this.getStringAttribute('working_dir_path');
  }
  public set workingDirPath(value: string) {
    this._workingDirPath = value;
  }
  public resetWorkingDirPath() {
    this._workingDirPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirPathInput() {
    return this._workingDirPath;
  }

  // image_pull_credentials - computed: false, optional: true, required: false
  private _imagePullCredentials = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentialsOutputReference(this, "image_pull_credentials");
  public get imagePullCredentials() {
    return this._imagePullCredentials;
  }
  public putImagePullCredentials(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerImagePullCredentials) {
    this._imagePullCredentials.internalValue = value;
  }
  public resetImagePullCredentials() {
    this._imagePullCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullCredentialsInput() {
    return this._imagePullCredentials.internalValue;
  }

  // kube_config_options - computed: false, optional: true, required: false
  private _kubeConfigOptions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptionsOutputReference(this, "kube_config_options");
  public get kubeConfigOptions() {
    return this._kubeConfigOptions;
  }
  public putKubeConfigOptions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeConfigOptions) {
    this._kubeConfigOptions.internalValue = value;
  }
  public resetKubeConfigOptions() {
    this._kubeConfigOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigOptionsInput() {
    return this._kubeConfigOptions.internalValue;
  }

  // kube_options - computed: false, optional: true, required: false
  private _kubeOptions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptionsOutputReference(this, "kube_options");
  public get kubeOptions() {
    return this._kubeOptions;
  }
  public putKubeOptions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerKubeOptions) {
    this._kubeOptions.internalValue = value;
  }
  public resetKubeOptions() {
    this._kubeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeOptionsInput() {
    return this._kubeOptions.internalValue;
  }

  // volume_options - computed: false, optional: true, required: false
  private _volumeOptions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptionsOutputReference(this, "volume_options");
  public get volumeOptions() {
    return this._volumeOptions;
  }
  public putVolumeOptions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumeOptions) {
    this._volumeOptions.internalValue = value;
  }
  public resetVolumeOptions() {
    this._volumeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeOptionsInput() {
    return this._volumeOptions.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigContainerVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentials {
  /**
  * Specify the registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#password EnvironmentTemplate#password}
  */
  readonly password?: string;
  /**
  * Specify the container image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#registry EnvironmentTemplate#registry}
  */
  readonly registry?: string;
  /**
  * Specify the registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#username EnvironmentTemplate#username}
  */
  readonly username?: string;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentialsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentialsOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry: cdktf.stringToTerraform(struct!.registry),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentialsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentialsOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._registry = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._registry = value.registry;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_fields EnvironmentTemplate#match_fields}
  */
  readonly matchFields?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#weight EnvironmentTemplate#weight}
  */
  readonly weight?: number;
  /**
  * preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#preference EnvironmentTemplate#preference}
  */
  readonly preference?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._preference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._preference.internalValue = value.preference;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // preference - computed: false, optional: true, required: false
  private _preference = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  public resetPreference() {
    this._preference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_fields EnvironmentTemplate#match_fields}
  */
  readonly matchFields?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * node_selector_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#node_selector_terms EnvironmentTemplate#node_selector_terms}
  */
  readonly nodeSelectorTerms?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, true)(struct!.nodeSelectorTerms),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, true)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: true, required: false
  private _nodeSelectorTerms = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  public resetNodeSelectorTerms() {
    this._nodeSelectorTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#preferred_during_scheduling_ignored_during_execution EnvironmentTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#required_during_scheduling_ignored_during_execution EnvironmentTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#weight EnvironmentTemplate#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#pod_affinity_term EnvironmentTemplate#pod_affinity_term}
  */
  readonly podAffinityTerm?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_affinity_term: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._podAffinityTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#preferred_during_scheduling_ignored_during_execution EnvironmentTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#required_during_scheduling_ignored_during_execution EnvironmentTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#weight EnvironmentTemplate#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#pod_affinity_term EnvironmentTemplate#pod_affinity_term}
  */
  readonly podAffinityTerm?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_affinity_term: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._podAffinityTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#preferred_during_scheduling_ignored_during_execution EnvironmentTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#required_during_scheduling_ignored_during_execution EnvironmentTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinity {
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#node_affinity EnvironmentTemplate#node_affinity}
  */
  readonly nodeAffinity?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity;
  /**
  * pod_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#pod_affinity EnvironmentTemplate#pod_affinity}
  */
  readonly podAffinity?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinity;
  /**
  * pod_anti_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#pod_anti_affinity EnvironmentTemplate#pod_anti_affinity}
  */
  readonly podAntiAffinity?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityList",
    },
    pod_affinity: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityList",
    },
    pod_anti_affinity: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContext {
  /**
  * privileged block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#privileged EnvironmentTemplate#privileged}
  */
  readonly privileged?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged;
  /**
  * read_only_root_file_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#read_only_root_file_system EnvironmentTemplate#read_only_root_file_system}
  */
  readonly readOnlyRootFileSystem?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privileged: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedToTerraform(struct!.privileged),
    read_only_root_file_system: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct!.readOnlyRootFileSystem),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privileged: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedToHclTerraform(struct!.privileged),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedList",
    },
    read_only_root_file_system: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct!.readOnlyRootFileSystem),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privileged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged?.internalValue;
    }
    if (this._readOnlyRootFileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFileSystem = this._readOnlyRootFileSystem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privileged.internalValue = undefined;
      this._readOnlyRootFileSystem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privileged.internalValue = value.privileged;
      this._readOnlyRootFileSystem.internalValue = value.readOnlyRootFileSystem;
    }
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference(this, "privileged");
  public get privileged() {
    return this._privileged;
  }
  public putPrivileged(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged) {
    this._privileged.internalValue = value;
  }
  public resetPrivileged() {
    this._privileged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged.internalValue;
  }

  // read_only_root_file_system - computed: false, optional: true, required: false
  private _readOnlyRootFileSystem = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference(this, "read_only_root_file_system");
  public get readOnlyRootFileSystem() {
    return this._readOnlyRootFileSystem;
  }
  public putReadOnlyRootFileSystem(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem) {
    this._readOnlyRootFileSystem.internalValue = value;
  }
  public resetReadOnlyRootFileSystem() {
    this._readOnlyRootFileSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFileSystemInput() {
    return this._readOnlyRootFileSystem.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#effect EnvironmentTemplate#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#toleration_seconds EnvironmentTemplate#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: string;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerationsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerationsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerationsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerations[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerationsOutputReference {
    return new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptions {
  /**
  * Specify the labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#labels EnvironmentTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specify the namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#namespace EnvironmentTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * Specify the node selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#node_selector EnvironmentTemplate#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specify the resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#resources EnvironmentTemplate#resources}
  */
  readonly resources?: string[];
  /**
  * Specify the service account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#service_account_name EnvironmentTemplate#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#affinity EnvironmentTemplate#affinity}
  */
  readonly affinity?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinity;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#security_context EnvironmentTemplate#security_context}
  */
  readonly securityContext?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContext;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#tolerations EnvironmentTemplate#tolerations}
  */
  readonly tolerations?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerations[] | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    affinity: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityToTerraform(struct!.affinity),
    security_context: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextToTerraform(struct!.securityContext),
    tolerations: cdktf.listMapper(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    affinity: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityList",
    },
    security_context: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._namespace = undefined;
      this._nodeSelector = undefined;
      this._resources = undefined;
      this._serviceAccountName = undefined;
      this._affinity.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._nodeSelector = value.nodeSelector;
      this._resources = value.resources;
      this._serviceAccountName = value.serviceAccountName;
      this._affinity.internalValue = value.affinity;
      this._securityContext.internalValue = value.securityContext;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuild {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuildToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuildOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuildToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuildOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunction {
  /**
  * Configure the CPU Limits as the maximum amount of a resource to be used by a function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#cpu_limit_milli EnvironmentTemplate#cpu_limit_milli}
  */
  readonly cpuLimitMilli?: string;
  /**
  * Specify the function dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#function_dependencies EnvironmentTemplate#function_dependencies}
  */
  readonly functionDependencies?: string[];
  /**
  * Image of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#image EnvironmentTemplate#image}
  */
  readonly image?: string;
  /**
  * Configure the inactivity timeout in seconds. After this time, the function will be terminated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#inactivity_timeout_seconds EnvironmentTemplate#inactivity_timeout_seconds}
  */
  readonly inactivityTimeoutSeconds?: number;
  /**
  * Specify the language of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#language EnvironmentTemplate#language}
  */
  readonly language?: string;
  /**
  * Specify the language version for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#language_version EnvironmentTemplate#language_version}
  */
  readonly languageVersion?: string;
  /**
  * Specify the maximum number of concurrent requests that can be handled by the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#max_concurrency EnvironmentTemplate#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * Configure the Memory Limits as the maximum amount of a resource to be used by a function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#memory_limit_mb EnvironmentTemplate#memory_limit_mb}
  */
  readonly memoryLimitMb?: string;
  /**
  * Specify the name of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Specify the number of replicas for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#num_replicas EnvironmentTemplate#num_replicas}
  */
  readonly numReplicas?: number;
  /**
  * Specify the source of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#source EnvironmentTemplate#source}
  */
  readonly source?: string;
  /**
  * Specify the system packages for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#system_packages EnvironmentTemplate#system_packages}
  */
  readonly systemPackages?: string[];
  /**
  * Specify the target platforms for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#target_platforms EnvironmentTemplate#target_platforms}
  */
  readonly targetPlatforms?: string[];
  /**
  * image_pull_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#image_pull_credentials EnvironmentTemplate#image_pull_credentials}
  */
  readonly imagePullCredentials?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentials;
  /**
  * kube_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#kube_options EnvironmentTemplate#kube_options}
  */
  readonly kubeOptions?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptions;
  /**
  * skip_build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/environment_template#skip_build EnvironmentTemplate#skip_build}
  */
  readonly skipBuild?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuild;
}

export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionToTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_limit_milli: cdktf.stringToTerraform(struct!.cpuLimitMilli),
    function_dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functionDependencies),
    image: cdktf.stringToTerraform(struct!.image),
    inactivity_timeout_seconds: cdktf.numberToTerraform(struct!.inactivityTimeoutSeconds),
    language: cdktf.stringToTerraform(struct!.language),
    language_version: cdktf.stringToTerraform(struct!.languageVersion),
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    memory_limit_mb: cdktf.stringToTerraform(struct!.memoryLimitMb),
    name: cdktf.stringToTerraform(struct!.name),
    num_replicas: cdktf.numberToTerraform(struct!.numReplicas),
    source: cdktf.stringToTerraform(struct!.source),
    system_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemPackages),
    target_platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetPlatforms),
    image_pull_credentials: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentialsToTerraform(struct!.imagePullCredentials),
    kube_options: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsToTerraform(struct!.kubeOptions),
    skip_build: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuildToTerraform(struct!.skipBuild),
  }
}


export function environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionToHclTerraform(struct?: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionOutputReference | EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_limit_milli: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimitMilli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functionDependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inactivity_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.inactivityTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_version: {
      value: cdktf.stringToHclTerraform(struct!.languageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_limit_mb: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimitMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_replicas: {
      value: cdktf.numberToHclTerraform(struct!.numReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemPackages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_platforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetPlatforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_pull_credentials: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentialsToHclTerraform(struct!.imagePullCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentialsList",
    },
    kube_options: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsToHclTerraform(struct!.kubeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsList",
    },
    skip_build: {
      value: environmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuildToHclTerraform(struct!.skipBuild),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuildList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuLimitMilli !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimitMilli = this._cpuLimitMilli;
    }
    if (this._functionDependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionDependencies = this._functionDependencies;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._inactivityTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityTimeoutSeconds = this._inactivityTimeoutSeconds;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._languageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageVersion = this._languageVersion;
    }
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._memoryLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimitMb = this._memoryLimitMb;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.numReplicas = this._numReplicas;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._systemPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemPackages = this._systemPackages;
    }
    if (this._targetPlatforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPlatforms = this._targetPlatforms;
    }
    if (this._imagePullCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullCredentials = this._imagePullCredentials?.internalValue;
    }
    if (this._kubeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeOptions = this._kubeOptions?.internalValue;
    }
    if (this._skipBuild?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipBuild = this._skipBuild?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuLimitMilli = undefined;
      this._functionDependencies = undefined;
      this._image = undefined;
      this._inactivityTimeoutSeconds = undefined;
      this._language = undefined;
      this._languageVersion = undefined;
      this._maxConcurrency = undefined;
      this._memoryLimitMb = undefined;
      this._name = undefined;
      this._numReplicas = undefined;
      this._source = undefined;
      this._systemPackages = undefined;
      this._targetPlatforms = undefined;
      this._imagePullCredentials.internalValue = undefined;
      this._kubeOptions.internalValue = undefined;
      this._skipBuild.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuLimitMilli = value.cpuLimitMilli;
      this._functionDependencies = value.functionDependencies;
      this._image = value.image;
      this._inactivityTimeoutSeconds = value.inactivityTimeoutSeconds;
      this._language = value.language;
      this._languageVersion = value.languageVersion;
      this._maxConcurrency = value.maxConcurrency;
      this._memoryLimitMb = value.memoryLimitMb;
      this._name = value.name;
      this._numReplicas = value.numReplicas;
      this._source = value.source;
      this._systemPackages = value.systemPackages;
      this._targetPlatforms = value.targetPlatforms;
      this._imagePullCredentials.internalValue = value.imagePullCredentials;
      this._kubeOptions.internalValue = value.kubeOptions;
      this._skipBuild.internalValue = value.skipBuild;
    }
  }

  // cpu_limit_milli - computed: false, optional: true, required: false
  private _cpuLimitMilli?: string; 
  public get cpuLimitMilli() {
    return this.getStringAttribute('cpu_limit_milli');
  }
  public set cpuLimitMilli(value: string) {
    this._cpuLimitMilli = value;
  }
  public resetCpuLimitMilli() {
    this._cpuLimitMilli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitMilliInput() {
    return this._cpuLimitMilli;
  }

  // function_dependencies - computed: false, optional: true, required: false
  private _functionDependencies?: string[]; 
  public get functionDependencies() {
    return this.getListAttribute('function_dependencies');
  }
  public set functionDependencies(value: string[]) {
    this._functionDependencies = value;
  }
  public resetFunctionDependencies() {
    this._functionDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionDependenciesInput() {
    return this._functionDependencies;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // inactivity_timeout_seconds - computed: false, optional: true, required: false
  private _inactivityTimeoutSeconds?: number; 
  public get inactivityTimeoutSeconds() {
    return this.getNumberAttribute('inactivity_timeout_seconds');
  }
  public set inactivityTimeoutSeconds(value: number) {
    this._inactivityTimeoutSeconds = value;
  }
  public resetInactivityTimeoutSeconds() {
    this._inactivityTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutSecondsInput() {
    return this._inactivityTimeoutSeconds;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // language_version - computed: false, optional: true, required: false
  private _languageVersion?: string; 
  public get languageVersion() {
    return this.getStringAttribute('language_version');
  }
  public set languageVersion(value: string) {
    this._languageVersion = value;
  }
  public resetLanguageVersion() {
    this._languageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageVersionInput() {
    return this._languageVersion;
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // memory_limit_mb - computed: false, optional: true, required: false
  private _memoryLimitMb?: string; 
  public get memoryLimitMb() {
    return this.getStringAttribute('memory_limit_mb');
  }
  public set memoryLimitMb(value: string) {
    this._memoryLimitMb = value;
  }
  public resetMemoryLimitMb() {
    this._memoryLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitMbInput() {
    return this._memoryLimitMb;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // num_replicas - computed: false, optional: true, required: false
  private _numReplicas?: number; 
  public get numReplicas() {
    return this.getNumberAttribute('num_replicas');
  }
  public set numReplicas(value: number) {
    this._numReplicas = value;
  }
  public resetNumReplicas() {
    this._numReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numReplicasInput() {
    return this._numReplicas;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // system_packages - computed: false, optional: true, required: false
  private _systemPackages?: string[]; 
  public get systemPackages() {
    return this.getListAttribute('system_packages');
  }
  public set systemPackages(value: string[]) {
    this._systemPackages = value;
  }
  public resetSystemPackages() {
    this._systemPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPackagesInput() {
    return this._systemPackages;
  }

  // target_platforms - computed: false, optional: true, required: false
  private _targetPlatforms?: string[]; 
  public get targetPlatforms() {
    return this.getListAttribute('target_platforms');
  }
  public set targetPlatforms(value: string[]) {
    this._targetPlatforms = value;
  }
  public resetTargetPlatforms() {
    this._targetPlatforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPlatformsInput() {
    return this._targetPlatforms;
  }

  // image_pull_credentials - computed: false, optional: true, required: false
  private _imagePullCredentials = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentialsOutputReference(this, "image_pull_credentials");
  public get imagePullCredentials() {
    return this._imagePullCredentials;
  }
  public putImagePullCredentials(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionImagePullCredentials) {
    this._imagePullCredentials.internalValue = value;
  }
  public resetImagePullCredentials() {
    this._imagePullCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullCredentialsInput() {
    return this._imagePullCredentials.internalValue;
  }

  // kube_options - computed: false, optional: true, required: false
  private _kubeOptions = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptionsOutputReference(this, "kube_options");
  public get kubeOptions() {
    return this._kubeOptions;
  }
  public putKubeOptions(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionKubeOptions) {
    this._kubeOptions.internalValue = value;
  }
  public resetKubeOptions() {
    this._kubeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeOptionsInput() {
    return this._kubeOptions.internalValue;
  }

  // skip_build - computed: false, optional: true, required: false
  private _skipBuild = new EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuildOutputReference(this, "skip_build");
  public get skipBuild() {
    return this._skipBuild;
  }
  public putSkipBuild(value: EnvironmentTemplateSpecSchedulesOptOutOptionsApprovalTasksDriverDataConfigFunctionSkipBuild) {
    this._skipBuild.internalValue = value;
  }
  public resetSkipBuild() {
    this._skipBuild.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipBuildInput() {
    return this._skipBuild.internalValue;
  }
}
