// https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/data-sources/warnings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataValidationWarningsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/data-sources/warnings#id DataValidationWarnings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * warning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/data-sources/warnings#warning DataValidationWarnings#warning}
  */
  readonly warning: DataValidationWarningsWarning[] | cdktf.IResolvable;
}
export interface DataValidationWarningsWarning {
  /**
  * The condition which, if true, causes a warning message to be printed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/data-sources/warnings#condition DataValidationWarnings#condition}
  */
  readonly condition: boolean | cdktf.IResolvable;
  /**
  * More details about the message being displayed to the user, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/data-sources/warnings#details DataValidationWarnings#details}
  */
  readonly details?: string;
  /**
  * The message displayed to the user if the condition is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/data-sources/warnings#summary DataValidationWarnings#summary}
  */
  readonly summary: string;
}

export function dataValidationWarningsWarningToTerraform(struct?: DataValidationWarningsWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.booleanToTerraform(struct!.condition),
    details: cdktf.stringToTerraform(struct!.details),
    summary: cdktf.stringToTerraform(struct!.summary),
  }
}


export function dataValidationWarningsWarningToHclTerraform(struct?: DataValidationWarningsWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.booleanToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    details: {
      value: cdktf.stringToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataValidationWarningsWarningOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataValidationWarningsWarning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataValidationWarningsWarning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._details = undefined;
      this._summary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._details = value.details;
      this._summary = value.summary;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: boolean | cdktf.IResolvable; 
  public get condition() {
    return this.getBooleanAttribute('condition');
  }
  public set condition(value: boolean | cdktf.IResolvable) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // details - computed: false, optional: true, required: false
  private _details?: string; 
  public get details() {
    return this.getStringAttribute('details');
  }
  public set details(value: string) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }
}

export class DataValidationWarningsWarningList extends cdktf.ComplexList {
  public internalValue? : DataValidationWarningsWarning[] | cdktf.IResolvable

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
  public get(index: number): DataValidationWarningsWarningOutputReference {
    return new DataValidationWarningsWarningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/data-sources/warnings validation_warnings}
*/
export class DataValidationWarnings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "validation_warnings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataValidationWarnings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataValidationWarnings to import
  * @param importFromId The id of the existing DataValidationWarnings that should be imported. Refer to the {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/data-sources/warnings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataValidationWarnings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "validation_warnings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/data-sources/warnings validation_warnings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataValidationWarningsConfig
  */
  public constructor(scope: Construct, id: string, config: DataValidationWarningsConfig) {
    super(scope, id, {
      terraformResourceType: 'validation_warnings',
      terraformGeneratorMetadata: {
        providerName: 'validation',
        providerVersion: '1.1.3',
        providerVersionConstraint: '1.1.3'
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
    this._warning.internalValue = config.warning;
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

  // warning - computed: false, optional: false, required: true
  private _warning = new DataValidationWarningsWarningList(this, "warning", false);
  public get warning() {
    return this._warning;
  }
  public putWarning(value: DataValidationWarningsWarning[] | cdktf.IResolvable) {
    this._warning.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      warning: cdktf.listMapper(dataValidationWarningsWarningToTerraform, true)(this._warning.internalValue),
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
      warning: {
        value: cdktf.listMapperHcl(dataValidationWarningsWarningToHclTerraform, true)(this._warning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataValidationWarningsWarningList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
