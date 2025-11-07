// https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/extension_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensionInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Extension Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/extension_instance#extension_id ExtensionInstance#extension_id}
  */
  readonly extensionId: string;
  /**
  * Extension Instance infrastructure Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/extension_instance#infrastructure_id ExtensionInstance#infrastructure_id}
  */
  readonly infrastructureId: string;
  /**
  * Input variables for the extension instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/extension_instance#input_variables ExtensionInstance#input_variables}
  */
  readonly inputVariables?: ExtensionInstanceInputVariables[] | cdktf.IResolvable;
  /**
  * Extension Instance label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/extension_instance#label ExtensionInstance#label}
  */
  readonly label: string;
}
export interface ExtensionInstanceInputVariables {
  /**
  * Label of the input variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/extension_instance#label ExtensionInstance#label}
  */
  readonly label: string;
  /**
  * Boolean value of the input variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/extension_instance#value_bool ExtensionInstance#value_bool}
  */
  readonly valueBool?: boolean | cdktf.IResolvable;
  /**
  * Integer value of the input variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/extension_instance#value_int ExtensionInstance#value_int}
  */
  readonly valueInt?: number;
  /**
  * String value of the input variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/extension_instance#value_str ExtensionInstance#value_str}
  */
  readonly valueStr?: string;
}

export function extensionInstanceInputVariablesToTerraform(struct?: ExtensionInstanceInputVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value_bool: cdktf.booleanToTerraform(struct!.valueBool),
    value_int: cdktf.numberToTerraform(struct!.valueInt),
    value_str: cdktf.stringToTerraform(struct!.valueStr),
  }
}


export function extensionInstanceInputVariablesToHclTerraform(struct?: ExtensionInstanceInputVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_bool: {
      value: cdktf.booleanToHclTerraform(struct!.valueBool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_int: {
      value: cdktf.numberToHclTerraform(struct!.valueInt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value_str: {
      value: cdktf.stringToHclTerraform(struct!.valueStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensionInstanceInputVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtensionInstanceInputVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._valueBool !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueBool = this._valueBool;
    }
    if (this._valueInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueInt = this._valueInt;
    }
    if (this._valueStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueStr = this._valueStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtensionInstanceInputVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._valueBool = undefined;
      this._valueInt = undefined;
      this._valueStr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._valueBool = value.valueBool;
      this._valueInt = value.valueInt;
      this._valueStr = value.valueStr;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value_bool - computed: false, optional: true, required: false
  private _valueBool?: boolean | cdktf.IResolvable; 
  public get valueBool() {
    return this.getBooleanAttribute('value_bool');
  }
  public set valueBool(value: boolean | cdktf.IResolvable) {
    this._valueBool = value;
  }
  public resetValueBool() {
    this._valueBool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueBoolInput() {
    return this._valueBool;
  }

  // value_int - computed: false, optional: true, required: false
  private _valueInt?: number; 
  public get valueInt() {
    return this.getNumberAttribute('value_int');
  }
  public set valueInt(value: number) {
    this._valueInt = value;
  }
  public resetValueInt() {
    this._valueInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueIntInput() {
    return this._valueInt;
  }

  // value_str - computed: false, optional: true, required: false
  private _valueStr?: string; 
  public get valueStr() {
    return this.getStringAttribute('value_str');
  }
  public set valueStr(value: string) {
    this._valueStr = value;
  }
  public resetValueStr() {
    this._valueStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStrInput() {
    return this._valueStr;
  }
}

export class ExtensionInstanceInputVariablesList extends cdktf.ComplexList {
  public internalValue? : ExtensionInstanceInputVariables[] | cdktf.IResolvable

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
  public get(index: number): ExtensionInstanceInputVariablesOutputReference {
    return new ExtensionInstanceInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/extension_instance metalcloud_extension_instance}
*/
export class ExtensionInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metalcloud_extension_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtensionInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtensionInstance to import
  * @param importFromId The id of the existing ExtensionInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/extension_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtensionInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metalcloud_extension_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.0.10/docs/resources/extension_instance metalcloud_extension_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtensionInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ExtensionInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'metalcloud_extension_instance',
      terraformGeneratorMetadata: {
        providerName: 'metalcloud',
        providerVersion: '7.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extensionId = config.extensionId;
    this._infrastructureId = config.infrastructureId;
    this._inputVariables.internalValue = config.inputVariables;
    this._label = config.label;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extension_id - computed: false, optional: false, required: true
  private _extensionId?: string; 
  public get extensionId() {
    return this.getStringAttribute('extension_id');
  }
  public set extensionId(value: string) {
    this._extensionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionIdInput() {
    return this._extensionId;
  }

  // extension_instance_id - computed: true, optional: false, required: false
  public get extensionInstanceId() {
    return this.getStringAttribute('extension_instance_id');
  }

  // infrastructure_id - computed: false, optional: false, required: true
  private _infrastructureId?: string; 
  public get infrastructureId() {
    return this.getStringAttribute('infrastructure_id');
  }
  public set infrastructureId(value: string) {
    this._infrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureIdInput() {
    return this._infrastructureId;
  }

  // input_variables - computed: false, optional: true, required: false
  private _inputVariables = new ExtensionInstanceInputVariablesList(this, "input_variables", true);
  public get inputVariables() {
    return this._inputVariables;
  }
  public putInputVariables(value: ExtensionInstanceInputVariables[] | cdktf.IResolvable) {
    this._inputVariables.internalValue = value;
  }
  public resetInputVariables() {
    this._inputVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariablesInput() {
    return this._inputVariables.internalValue;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extension_id: cdktf.stringToTerraform(this._extensionId),
      infrastructure_id: cdktf.stringToTerraform(this._infrastructureId),
      input_variables: cdktf.listMapper(extensionInstanceInputVariablesToTerraform, false)(this._inputVariables.internalValue),
      label: cdktf.stringToTerraform(this._label),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extension_id: {
        value: cdktf.stringToHclTerraform(this._extensionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._infrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_variables: {
        value: cdktf.listMapperHcl(extensionInstanceInputVariablesToHclTerraform, false)(this._inputVariables.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ExtensionInstanceInputVariablesList",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
