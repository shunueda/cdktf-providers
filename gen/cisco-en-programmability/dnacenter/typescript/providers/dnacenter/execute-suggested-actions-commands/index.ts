// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/execute_suggested_actions_commands
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExecuteSuggestedActionsCommandsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/execute_suggested_actions_commands#id ExecuteSuggestedActionsCommands#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/execute_suggested_actions_commands#parameters ExecuteSuggestedActionsCommands#parameters}
  */
  readonly parameters: ExecuteSuggestedActionsCommandsParameters;
}
export interface ExecuteSuggestedActionsCommandsParametersItems {
}

export function executeSuggestedActionsCommandsParametersItemsToTerraform(struct?: ExecuteSuggestedActionsCommandsParametersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function executeSuggestedActionsCommandsParametersItemsToHclTerraform(struct?: ExecuteSuggestedActionsCommandsParametersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExecuteSuggestedActionsCommandsParametersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExecuteSuggestedActionsCommandsParametersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExecuteSuggestedActionsCommandsParametersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_info - computed: true, optional: false, required: false
  public get actionInfo() {
    return this.getStringAttribute('action_info');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // command_output - computed: true, optional: false, required: false
  public get commandOutput() {
    return this.getStringAttribute('command_output');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // steps_count - computed: true, optional: false, required: false
  public get stepsCount() {
    return this.getNumberAttribute('steps_count');
  }

  // steps_description - computed: true, optional: false, required: false
  public get stepsDescription() {
    return this.getStringAttribute('steps_description');
  }
}

export class ExecuteSuggestedActionsCommandsParametersItemsList extends cdktf.ComplexList {

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
  public get(index: number): ExecuteSuggestedActionsCommandsParametersItemsOutputReference {
    return new ExecuteSuggestedActionsCommandsParametersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExecuteSuggestedActionsCommandsParameters {
  /**
  * Commands provided as part of the suggested actions for an issue can be executed based on issue id. The value here must be issue_id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/execute_suggested_actions_commands#entity_type ExecuteSuggestedActionsCommands#entity_type}
  */
  readonly entityType?: string;
  /**
  * Contains the actual value for the entity type that has been defined
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/execute_suggested_actions_commands#entity_value ExecuteSuggestedActionsCommands#entity_value}
  */
  readonly entityValue?: string;
}

export function executeSuggestedActionsCommandsParametersToTerraform(struct?: ExecuteSuggestedActionsCommandsParametersOutputReference | ExecuteSuggestedActionsCommandsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    entity_value: cdktf.stringToTerraform(struct!.entityValue),
  }
}


export function executeSuggestedActionsCommandsParametersToHclTerraform(struct?: ExecuteSuggestedActionsCommandsParametersOutputReference | ExecuteSuggestedActionsCommandsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_value: {
      value: cdktf.stringToHclTerraform(struct!.entityValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExecuteSuggestedActionsCommandsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExecuteSuggestedActionsCommandsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._entityValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityValue = this._entityValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExecuteSuggestedActionsCommandsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityType = undefined;
      this._entityValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityType = value.entityType;
      this._entityValue = value.entityValue;
    }
  }

  // entity_type - computed: true, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // entity_value - computed: true, optional: true, required: false
  private _entityValue?: string; 
  public get entityValue() {
    return this.getStringAttribute('entity_value');
  }
  public set entityValue(value: string) {
    this._entityValue = value;
  }
  public resetEntityValue() {
    this._entityValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityValueInput() {
    return this._entityValue;
  }

  // items - computed: true, optional: false, required: false
  private _items = new ExecuteSuggestedActionsCommandsParametersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/execute_suggested_actions_commands dnacenter_execute_suggested_actions_commands}
*/
export class ExecuteSuggestedActionsCommands extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_execute_suggested_actions_commands";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExecuteSuggestedActionsCommands resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExecuteSuggestedActionsCommands to import
  * @param importFromId The id of the existing ExecuteSuggestedActionsCommands that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/execute_suggested_actions_commands#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExecuteSuggestedActionsCommands to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_execute_suggested_actions_commands", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/execute_suggested_actions_commands dnacenter_execute_suggested_actions_commands} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExecuteSuggestedActionsCommandsConfig
  */
  public constructor(scope: Construct, id: string, config: ExecuteSuggestedActionsCommandsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_execute_suggested_actions_commands',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new ExecuteSuggestedActionsCommandsParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ExecuteSuggestedActionsCommandsParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: executeSuggestedActionsCommandsParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: executeSuggestedActionsCommandsParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExecuteSuggestedActionsCommandsParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
