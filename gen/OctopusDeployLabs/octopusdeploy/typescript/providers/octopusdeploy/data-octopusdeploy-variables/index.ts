// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployVariablesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of variable to find.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables#name DataOctopusdeployVariables#name}
  */
  readonly name: string;
  /**
  * Owner ID for the variable to find.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables#owner_id DataOctopusdeployVariables#owner_id}
  */
  readonly ownerId: string;
  /**
  * As variable names can appear more than once under different scopes, a VariableScope must also be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables#scope DataOctopusdeployVariables#scope}
  */
  readonly scope: DataOctopusdeployVariablesScope[] | cdktf.IResolvable;
  /**
  * The space ID associated with this variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables#space_id DataOctopusdeployVariables#space_id}
  */
  readonly spaceId?: string;
}
export interface DataOctopusdeployVariablesPromptDisplaySettingsSelectOption {
}

export function dataOctopusdeployVariablesPromptDisplaySettingsSelectOptionToTerraform(struct?: DataOctopusdeployVariablesPromptDisplaySettingsSelectOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployVariablesPromptDisplaySettingsSelectOptionToHclTerraform(struct?: DataOctopusdeployVariablesPromptDisplaySettingsSelectOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployVariablesPromptDisplaySettingsSelectOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOctopusdeployVariablesPromptDisplaySettingsSelectOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployVariablesPromptDisplaySettingsSelectOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOctopusdeployVariablesPromptDisplaySettingsSelectOptionList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployVariablesPromptDisplaySettingsSelectOptionOutputReference {
    return new DataOctopusdeployVariablesPromptDisplaySettingsSelectOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployVariablesPromptDisplaySettings {
}

export function dataOctopusdeployVariablesPromptDisplaySettingsToTerraform(struct?: DataOctopusdeployVariablesPromptDisplaySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployVariablesPromptDisplaySettingsToHclTerraform(struct?: DataOctopusdeployVariablesPromptDisplaySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployVariablesPromptDisplaySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOctopusdeployVariablesPromptDisplaySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployVariablesPromptDisplaySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_type - computed: true, optional: false, required: false
  public get controlType() {
    return this.getStringAttribute('control_type');
  }

  // select_option - computed: true, optional: false, required: false
  private _selectOption = new DataOctopusdeployVariablesPromptDisplaySettingsSelectOptionList(this, "select_option", false);
  public get selectOption() {
    return this._selectOption;
  }
}

export class DataOctopusdeployVariablesPromptDisplaySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployVariablesPromptDisplaySettingsOutputReference {
    return new DataOctopusdeployVariablesPromptDisplaySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployVariablesPrompt {
}

export function dataOctopusdeployVariablesPromptToTerraform(struct?: DataOctopusdeployVariablesPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployVariablesPromptToHclTerraform(struct?: DataOctopusdeployVariablesPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployVariablesPromptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOctopusdeployVariablesPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployVariablesPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_settings - computed: true, optional: false, required: false
  private _displaySettings = new DataOctopusdeployVariablesPromptDisplaySettingsList(this, "display_settings", false);
  public get displaySettings() {
    return this._displaySettings;
  }

  // is_required - computed: true, optional: false, required: false
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }
}

export class DataOctopusdeployVariablesPromptList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployVariablesPromptOutputReference {
    return new DataOctopusdeployVariablesPromptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployVariablesScope {
  /**
  * A list of actions that are scoped to this variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables#actions DataOctopusdeployVariables#actions}
  */
  readonly actions?: string[];
  /**
  * A list of channels that are scoped to this variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables#channels DataOctopusdeployVariables#channels}
  */
  readonly channels?: string[];
  /**
  * A list of environments that are scoped to this variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables#environments DataOctopusdeployVariables#environments}
  */
  readonly environments?: string[];
  /**
  * A list of machines that are scoped to this variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables#machines DataOctopusdeployVariables#machines}
  */
  readonly machines?: string[];
  /**
  * A list of processes that are scoped to this variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables#processes DataOctopusdeployVariables#processes}
  */
  readonly processes?: string[];
  /**
  * A list of roles that are scoped to this variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables#roles DataOctopusdeployVariables#roles}
  */
  readonly roles?: string[];
  /**
  * A list of tenant tags that are scoped to this variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables#tenant_tags DataOctopusdeployVariables#tenant_tags}
  */
  readonly tenantTags?: string[];
}

export function dataOctopusdeployVariablesScopeToTerraform(struct?: DataOctopusdeployVariablesScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    machines: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.machines),
    processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.processes),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantTags),
  }
}


export function dataOctopusdeployVariablesScopeToHclTerraform(struct?: DataOctopusdeployVariablesScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    machines: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.machines),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.processes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tenant_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOctopusdeployVariablesScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployVariablesScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._machines !== undefined) {
      hasAnyValues = true;
      internalValueResult.machines = this._machines;
    }
    if (this._processes !== undefined) {
      hasAnyValues = true;
      internalValueResult.processes = this._processes;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._tenantTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantTags = this._tenantTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployVariablesScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._channels = undefined;
      this._environments = undefined;
      this._machines = undefined;
      this._processes = undefined;
      this._roles = undefined;
      this._tenantTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._channels = value.channels;
      this._environments = value.environments;
      this._machines = value.machines;
      this._processes = value.processes;
      this._roles = value.roles;
      this._tenantTags = value.tenantTags;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
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

  // machines - computed: false, optional: true, required: false
  private _machines?: string[]; 
  public get machines() {
    return this.getListAttribute('machines');
  }
  public set machines(value: string[]) {
    this._machines = value;
  }
  public resetMachines() {
    this._machines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinesInput() {
    return this._machines;
  }

  // processes - computed: false, optional: true, required: false
  private _processes?: string[]; 
  public get processes() {
    return this.getListAttribute('processes');
  }
  public set processes(value: string[]) {
    this._processes = value;
  }
  public resetProcesses() {
    this._processes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesInput() {
    return this._processes;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // tenant_tags - computed: false, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
  }
  public set tenantTags(value: string[]) {
    this._tenantTags = value;
  }
  public resetTenantTags() {
    this._tenantTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantTagsInput() {
    return this._tenantTags;
  }
}

export class DataOctopusdeployVariablesScopeList extends cdktf.ComplexList {
  public internalValue? : DataOctopusdeployVariablesScope[] | cdktf.IResolvable

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
  public get(index: number): DataOctopusdeployVariablesScopeOutputReference {
    return new DataOctopusdeployVariablesScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables octopusdeploy_variables}
*/
export class DataOctopusdeployVariables extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_variables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployVariables resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployVariables to import
  * @param importFromId The id of the existing DataOctopusdeployVariables that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployVariables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_variables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/variables octopusdeploy_variables} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployVariablesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployVariablesConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_variables',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '0.43.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._ownerId = config.ownerId;
    this._scope.internalValue = config.scope;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_editable - computed: true, optional: false, required: false
  public get isEditable() {
    return this.getBooleanAttribute('is_editable');
  }

  // is_sensitive - computed: true, optional: false, required: false
  public get isSensitive() {
    return this.getBooleanAttribute('is_sensitive');
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

  // owner_id - computed: false, optional: false, required: true
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // prompt - computed: true, optional: false, required: false
  private _prompt = new DataOctopusdeployVariablesPromptList(this, "prompt", false);
  public get prompt() {
    return this._prompt;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new DataOctopusdeployVariablesScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataOctopusdeployVariablesScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // sensitive_value - computed: true, optional: false, required: false
  public get sensitiveValue() {
    return this.getStringAttribute('sensitive_value');
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      scope: cdktf.listMapper(dataOctopusdeployVariablesScopeToTerraform, false)(this._scope.internalValue),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.listMapperHcl(dataOctopusdeployVariablesScopeToHclTerraform, false)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOctopusdeployVariablesScopeList",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
