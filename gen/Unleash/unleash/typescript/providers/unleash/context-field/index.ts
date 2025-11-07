// https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/context_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContextFieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the context field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/context_field#description ContextField#description}
  */
  readonly description?: string;
  /**
  * Legal values for this context field. If not set, then any value is available for this context field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/context_field#legal_values ContextField#legal_values}
  */
  readonly legalValues?: ContextFieldLegalValues[] | cdktf.IResolvable;
  /**
  * The name of the context field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/context_field#name ContextField#name}
  */
  readonly name: string;
  /**
  * Whether this field is available for custom stickiness. Defaults to false if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/context_field#stickiness ContextField#stickiness}
  */
  readonly stickiness?: boolean | cdktf.IResolvable;
}
export interface ContextFieldLegalValues {
  /**
  * Description of the allowed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/context_field#description ContextField#description}
  */
  readonly description?: string;
  /**
  * The allowed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/context_field#value ContextField#value}
  */
  readonly value: string;
}

export function contextFieldLegalValuesToTerraform(struct?: ContextFieldLegalValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function contextFieldLegalValuesToHclTerraform(struct?: ContextFieldLegalValues | cdktf.IResolvable): any {
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

export class ContextFieldLegalValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContextFieldLegalValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextFieldLegalValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContextFieldLegalValuesList extends cdktf.ComplexList {
  public internalValue? : ContextFieldLegalValues[] | cdktf.IResolvable

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
  public get(index: number): ContextFieldLegalValuesOutputReference {
    return new ContextFieldLegalValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/context_field unleash_context_field}
*/
export class ContextField extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unleash_context_field";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContextField resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContextField to import
  * @param importFromId The id of the existing ContextField that should be imported. Refer to the {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/context_field#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContextField to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unleash_context_field", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/context_field unleash_context_field} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContextFieldConfig
  */
  public constructor(scope: Construct, id: string, config: ContextFieldConfig) {
    super(scope, id, {
      terraformResourceType: 'unleash_context_field',
      terraformGeneratorMetadata: {
        providerName: 'unleash',
        providerVersion: '3.1.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._legalValues.internalValue = config.legalValues;
    this._name = config.name;
    this._stickiness = config.stickiness;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // legal_values - computed: true, optional: true, required: false
  private _legalValues = new ContextFieldLegalValuesList(this, "legal_values", false);
  public get legalValues() {
    return this._legalValues;
  }
  public putLegalValues(value: ContextFieldLegalValues[] | cdktf.IResolvable) {
    this._legalValues.internalValue = value;
  }
  public resetLegalValues() {
    this._legalValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legalValuesInput() {
    return this._legalValues.internalValue;
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

  // stickiness - computed: true, optional: true, required: false
  private _stickiness?: boolean | cdktf.IResolvable; 
  public get stickiness() {
    return this.getBooleanAttribute('stickiness');
  }
  public set stickiness(value: boolean | cdktf.IResolvable) {
    this._stickiness = value;
  }
  public resetStickiness() {
    this._stickiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessInput() {
    return this._stickiness;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      legal_values: cdktf.listMapper(contextFieldLegalValuesToTerraform, false)(this._legalValues.internalValue),
      name: cdktf.stringToTerraform(this._name),
      stickiness: cdktf.booleanToTerraform(this._stickiness),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legal_values: {
        value: cdktf.listMapperHcl(contextFieldLegalValuesToHclTerraform, false)(this._legalValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContextFieldLegalValuesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stickiness: {
        value: cdktf.booleanToHclTerraform(this._stickiness),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
