// https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QualityGateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The conditions of this quality gate. Please query https://sonarcloud.io/api/metrics/search for an up-to-date list of conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate#conditions QualityGate#conditions}
  */
  readonly conditions?: QualityGateConditions[] | cdktf.IResolvable;
  /**
  * Defines whether the quality gate is the default gate for an organization. **WARNING**: Must be assigned to one quality gate per organization at all times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate#is_default QualityGate#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Name of the Quality Gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate#name QualityGate#name}
  */
  readonly name: string;
}
export interface QualityGateConditions {
  /**
  * The value on which the condition errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate#error QualityGate#error}
  */
  readonly error: string;
  /**
  * The metric on which the condition is based.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate#metric QualityGate#metric}
  */
  readonly metric: string;
  /**
  * Operation on which the metric is evaluated must be either: LT, GT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate#op QualityGate#op}
  */
  readonly op?: string;
}

export function qualityGateConditionsToTerraform(struct?: QualityGateConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error: cdktf.stringToTerraform(struct!.error),
    metric: cdktf.stringToTerraform(struct!.metric),
    op: cdktf.stringToTerraform(struct!.op),
  }
}


export function qualityGateConditionsToHclTerraform(struct?: QualityGateConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error: {
      value: cdktf.stringToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityGateConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QualityGateConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityGateConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._error = undefined;
      this._metric = undefined;
      this._op = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._error = value.error;
      this._metric = value.metric;
      this._op = value.op;
    }
  }

  // error - computed: false, optional: false, required: true
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }
}

export class QualityGateConditionsList extends cdktf.ComplexList {
  public internalValue? : QualityGateConditions[] | cdktf.IResolvable

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
  public get(index: number): QualityGateConditionsOutputReference {
    return new QualityGateConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate sonarcloud_quality_gate}
*/
export class QualityGate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarcloud_quality_gate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QualityGate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QualityGate to import
  * @param importFromId The id of the existing QualityGate that should be imported. Refer to the {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QualityGate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarcloud_quality_gate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/quality_gate sonarcloud_quality_gate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QualityGateConfig
  */
  public constructor(scope: Construct, id: string, config: QualityGateConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarcloud_quality_gate',
      terraformGeneratorMetadata: {
        providerName: 'sonarcloud',
        providerVersion: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conditions.internalValue = config.conditions;
    this._isDefault = config.isDefault;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conditions - computed: false, optional: true, required: false
  private _conditions = new QualityGateConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: QualityGateConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // gate_id - computed: true, optional: false, required: false
  public get gateId() {
    return this.getNumberAttribute('gate_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_built_in - computed: true, optional: false, required: false
  public get isBuiltIn() {
    return this.getBooleanAttribute('is_built_in');
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conditions: cdktf.listMapper(qualityGateConditionsToTerraform, false)(this._conditions.internalValue),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conditions: {
        value: cdktf.listMapperHcl(qualityGateConditionsToHclTerraform, false)(this._conditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "QualityGateConditionsList",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
