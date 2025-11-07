// https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional SLO description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#description Slo#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#filters Slo#filters}
  */
  readonly filters?: SloFilters[] | cdktf.IResolvable;
  /**
  * SLO name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Period. This is the period of the SLO. Valid values are: ["14_days" "30_days" "7_days" "unspecified"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#period Slo#period}
  */
  readonly period: string;
  /**
  * Service name. This is the name of the service that the SLO is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#service_name Slo#service_name}
  */
  readonly serviceName: string;
  /**
  * Target percentage. This is the target percentage of the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#target_percentage Slo#target_percentage}
  */
  readonly targetPercentage: number;
  /**
  * Threshold in microseconds. Required when `type` is `latency`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#threshold_microseconds Slo#threshold_microseconds}
  */
  readonly thresholdMicroseconds?: number;
  /**
  * Threshold symbol type. Required when `type` is `latency`. Valid values are: ["equal" "greater" "greater_or_equal" "less" "less_or_equal"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#threshold_symbol_type Slo#threshold_symbol_type}
  */
  readonly thresholdSymbolType?: string;
  /**
  * Type. This is the type of the SLO. Valid values are: "error", "latency".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#type Slo#type}
  */
  readonly type: string;
}
export interface SloFilters {
  /**
  * Compare type. This is the compare type of the SLO. Valid values are: ["ends_with" "includes" "is" "starts_with" "unspecified"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#compare_type Slo#compare_type}
  */
  readonly compareType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#field Slo#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#field_values Slo#field_values}
  */
  readonly fieldValues?: string[];
}

export function sloFiltersToTerraform(struct?: SloFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compare_type: cdktf.stringToTerraform(struct!.compareType),
    field: cdktf.stringToTerraform(struct!.field),
    field_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldValues),
  }
}


export function sloFiltersToHclTerraform(struct?: SloFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compare_type: {
      value: cdktf.stringToHclTerraform(struct!.compareType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compareType = this._compareType;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._fieldValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValues = this._fieldValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compareType = undefined;
      this._field = undefined;
      this._fieldValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compareType = value.compareType;
      this._field = value.field;
      this._fieldValues = value.fieldValues;
    }
  }

  // compare_type - computed: false, optional: false, required: true
  private _compareType?: string; 
  public get compareType() {
    return this.getStringAttribute('compare_type');
  }
  public set compareType(value: string) {
    this._compareType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareTypeInput() {
    return this._compareType;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // field_values - computed: false, optional: true, required: false
  private _fieldValues?: string[]; 
  public get fieldValues() {
    return cdktf.Fn.tolist(this.getListAttribute('field_values'));
  }
  public set fieldValues(value: string[]) {
    this._fieldValues = value;
  }
  public resetFieldValues() {
    this._fieldValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValuesInput() {
    return this._fieldValues;
  }
}

export class SloFiltersList extends cdktf.ComplexList {
  public internalValue? : SloFilters[] | cdktf.IResolvable

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
  public get(index: number): SloFiltersOutputReference {
    return new SloFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo coralogix_slo}
*/
export class Slo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_slo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Slo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Slo to import
  * @param importFromId The id of the existing Slo that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Slo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_slo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/slo coralogix_slo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloConfig
  */
  public constructor(scope: Construct, id: string, config: SloConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_slo',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '2.2.3'
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
    this._filters.internalValue = config.filters;
    this._name = config.name;
    this._period = config.period;
    this._serviceName = config.serviceName;
    this._targetPercentage = config.targetPercentage;
    this._thresholdMicroseconds = config.thresholdMicroseconds;
    this._thresholdSymbolType = config.thresholdSymbolType;
    this._type = config.type;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new SloFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: SloFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // period - computed: false, optional: false, required: true
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // remaining_error_budget_percentage - computed: true, optional: false, required: false
  public get remainingErrorBudgetPercentage() {
    return this.getNumberAttribute('remaining_error_budget_percentage');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_percentage - computed: false, optional: false, required: true
  private _targetPercentage?: number; 
  public get targetPercentage() {
    return this.getNumberAttribute('target_percentage');
  }
  public set targetPercentage(value: number) {
    this._targetPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentageInput() {
    return this._targetPercentage;
  }

  // threshold_microseconds - computed: false, optional: true, required: false
  private _thresholdMicroseconds?: number; 
  public get thresholdMicroseconds() {
    return this.getNumberAttribute('threshold_microseconds');
  }
  public set thresholdMicroseconds(value: number) {
    this._thresholdMicroseconds = value;
  }
  public resetThresholdMicroseconds() {
    this._thresholdMicroseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdMicrosecondsInput() {
    return this._thresholdMicroseconds;
  }

  // threshold_symbol_type - computed: false, optional: true, required: false
  private _thresholdSymbolType?: string; 
  public get thresholdSymbolType() {
    return this.getStringAttribute('threshold_symbol_type');
  }
  public set thresholdSymbolType(value: string) {
    this._thresholdSymbolType = value;
  }
  public resetThresholdSymbolType() {
    this._thresholdSymbolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdSymbolTypeInput() {
    return this._thresholdSymbolType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
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
      description: cdktf.stringToTerraform(this._description),
      filters: cdktf.listMapper(sloFiltersToTerraform, false)(this._filters.internalValue),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.stringToTerraform(this._period),
      service_name: cdktf.stringToTerraform(this._serviceName),
      target_percentage: cdktf.numberToTerraform(this._targetPercentage),
      threshold_microseconds: cdktf.numberToTerraform(this._thresholdMicroseconds),
      threshold_symbol_type: cdktf.stringToTerraform(this._thresholdSymbolType),
      type: cdktf.stringToTerraform(this._type),
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
      filters: {
        value: cdktf.listMapperHcl(sloFiltersToHclTerraform, false)(this._filters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SloFiltersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_percentage: {
        value: cdktf.numberToHclTerraform(this._targetPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_microseconds: {
        value: cdktf.numberToHclTerraform(this._thresholdMicroseconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_symbol_type: {
        value: cdktf.stringToHclTerraform(this._thresholdSymbolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
