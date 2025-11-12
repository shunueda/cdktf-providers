// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the debug message categories to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target#debug_category DebugTarget#debug_category}
  */
  readonly debugCategory?: string[];
  /**
  * Specifies the lowest severity level of debug messages to log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target#debug_level DebugTarget#debug_level}
  */
  readonly debugLevel: string;
  /**
  * Specifies the fully-qualified Java package, class, or method affected by the settings in this target definition. Use the number character (#) to separate the class name and the method name (that is, com.unboundid.directory.server.core.DirectoryServer#startUp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target#debug_scope DebugTarget#debug_scope}
  */
  readonly debugScope: string;
  /**
  * A description for this Debug Target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target#description DebugTarget#description}
  */
  readonly description?: string;
  /**
  * Specifies the property to indicate whether to include the cause of exceptions in exception thrown and caught messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target#include_throwable_cause DebugTarget#include_throwable_cause}
  */
  readonly includeThrowableCause?: boolean | cdktf.IResolvable;
  /**
  * Name of the parent Log Publisher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target#log_publisher_name DebugTarget#log_publisher_name}
  */
  readonly logPublisherName: string;
  /**
  * Specifies the property to indicate whether to include method arguments in debug messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target#omit_method_entry_arguments DebugTarget#omit_method_entry_arguments}
  */
  readonly omitMethodEntryArguments?: boolean | cdktf.IResolvable;
  /**
  * Specifies the property to indicate whether to include the return value in debug messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target#omit_method_return_value DebugTarget#omit_method_return_value}
  */
  readonly omitMethodReturnValue?: boolean | cdktf.IResolvable;
  /**
  * Specifies the property to indicate the number of stack frames to include in the stack trace for method entry and exception thrown messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target#throwable_stack_frames DebugTarget#throwable_stack_frames}
  */
  readonly throwableStackFrames?: number;
  /**
  * The type of Debug Target resource. Options are ['debug-target']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target#type DebugTarget#type}
  */
  readonly type?: string;
}
export interface DebugTargetRequiredActions {
}

export function debugTargetRequiredActionsToTerraform(struct?: DebugTargetRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function debugTargetRequiredActionsToHclTerraform(struct?: DebugTargetRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DebugTargetRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DebugTargetRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugTargetRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DebugTargetRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DebugTargetRequiredActionsOutputReference {
    return new DebugTargetRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target pingdirectory_debug_target}
*/
export class DebugTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_debug_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugTarget to import
  * @param importFromId The id of the existing DebugTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_debug_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/debug_target pingdirectory_debug_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugTargetConfig
  */
  public constructor(scope: Construct, id: string, config: DebugTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_debug_target',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._debugCategory = config.debugCategory;
    this._debugLevel = config.debugLevel;
    this._debugScope = config.debugScope;
    this._description = config.description;
    this._includeThrowableCause = config.includeThrowableCause;
    this._logPublisherName = config.logPublisherName;
    this._omitMethodEntryArguments = config.omitMethodEntryArguments;
    this._omitMethodReturnValue = config.omitMethodReturnValue;
    this._throwableStackFrames = config.throwableStackFrames;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_category - computed: true, optional: true, required: false
  private _debugCategory?: string[]; 
  public get debugCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('debug_category'));
  }
  public set debugCategory(value: string[]) {
    this._debugCategory = value;
  }
  public resetDebugCategory() {
    this._debugCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugCategoryInput() {
    return this._debugCategory;
  }

  // debug_level - computed: false, optional: false, required: true
  private _debugLevel?: string; 
  public get debugLevel() {
    return this.getStringAttribute('debug_level');
  }
  public set debugLevel(value: string) {
    this._debugLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLevelInput() {
    return this._debugLevel;
  }

  // debug_scope - computed: false, optional: false, required: true
  private _debugScope?: string; 
  public get debugScope() {
    return this.getStringAttribute('debug_scope');
  }
  public set debugScope(value: string) {
    this._debugScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugScopeInput() {
    return this._debugScope;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_throwable_cause - computed: true, optional: true, required: false
  private _includeThrowableCause?: boolean | cdktf.IResolvable; 
  public get includeThrowableCause() {
    return this.getBooleanAttribute('include_throwable_cause');
  }
  public set includeThrowableCause(value: boolean | cdktf.IResolvable) {
    this._includeThrowableCause = value;
  }
  public resetIncludeThrowableCause() {
    this._includeThrowableCause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeThrowableCauseInput() {
    return this._includeThrowableCause;
  }

  // log_publisher_name - computed: false, optional: false, required: true
  private _logPublisherName?: string; 
  public get logPublisherName() {
    return this.getStringAttribute('log_publisher_name');
  }
  public set logPublisherName(value: string) {
    this._logPublisherName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logPublisherNameInput() {
    return this._logPublisherName;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // omit_method_entry_arguments - computed: true, optional: true, required: false
  private _omitMethodEntryArguments?: boolean | cdktf.IResolvable; 
  public get omitMethodEntryArguments() {
    return this.getBooleanAttribute('omit_method_entry_arguments');
  }
  public set omitMethodEntryArguments(value: boolean | cdktf.IResolvable) {
    this._omitMethodEntryArguments = value;
  }
  public resetOmitMethodEntryArguments() {
    this._omitMethodEntryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitMethodEntryArgumentsInput() {
    return this._omitMethodEntryArguments;
  }

  // omit_method_return_value - computed: true, optional: true, required: false
  private _omitMethodReturnValue?: boolean | cdktf.IResolvable; 
  public get omitMethodReturnValue() {
    return this.getBooleanAttribute('omit_method_return_value');
  }
  public set omitMethodReturnValue(value: boolean | cdktf.IResolvable) {
    this._omitMethodReturnValue = value;
  }
  public resetOmitMethodReturnValue() {
    this._omitMethodReturnValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitMethodReturnValueInput() {
    return this._omitMethodReturnValue;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DebugTargetRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // throwable_stack_frames - computed: true, optional: true, required: false
  private _throwableStackFrames?: number; 
  public get throwableStackFrames() {
    return this.getNumberAttribute('throwable_stack_frames');
  }
  public set throwableStackFrames(value: number) {
    this._throwableStackFrames = value;
  }
  public resetThrowableStackFrames() {
    this._throwableStackFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throwableStackFramesInput() {
    return this._throwableStackFrames;
  }

  // type - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      debug_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._debugCategory),
      debug_level: cdktf.stringToTerraform(this._debugLevel),
      debug_scope: cdktf.stringToTerraform(this._debugScope),
      description: cdktf.stringToTerraform(this._description),
      include_throwable_cause: cdktf.booleanToTerraform(this._includeThrowableCause),
      log_publisher_name: cdktf.stringToTerraform(this._logPublisherName),
      omit_method_entry_arguments: cdktf.booleanToTerraform(this._omitMethodEntryArguments),
      omit_method_return_value: cdktf.booleanToTerraform(this._omitMethodReturnValue),
      throwable_stack_frames: cdktf.numberToTerraform(this._throwableStackFrames),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._debugCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      debug_level: {
        value: cdktf.stringToHclTerraform(this._debugLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_scope: {
        value: cdktf.stringToHclTerraform(this._debugScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_throwable_cause: {
        value: cdktf.booleanToHclTerraform(this._includeThrowableCause),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_publisher_name: {
        value: cdktf.stringToHclTerraform(this._logPublisherName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      omit_method_entry_arguments: {
        value: cdktf.booleanToHclTerraform(this._omitMethodEntryArguments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      omit_method_return_value: {
        value: cdktf.booleanToHclTerraform(this._omitMethodReturnValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      throwable_stack_frames: {
        value: cdktf.numberToHclTerraform(this._throwableStackFrames),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
