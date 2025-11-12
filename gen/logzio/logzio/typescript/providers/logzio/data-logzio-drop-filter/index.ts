// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/drop_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogzioDropFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/drop_filter#drop_filter_id DataLogzioDropFilter#drop_filter_id}
  */
  readonly dropFilterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/drop_filter#gb_threshold DataLogzioDropFilter#gb_threshold}
  */
  readonly gbThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/drop_filter#id DataLogzioDropFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/drop_filter#log_type DataLogzioDropFilter#log_type}
  */
  readonly logType?: string;
  /**
  * field_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/drop_filter#field_conditions DataLogzioDropFilter#field_conditions}
  */
  readonly fieldConditions?: DataLogzioDropFilterFieldConditions[] | cdktf.IResolvable;
}
export interface DataLogzioDropFilterFieldConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/drop_filter#field_name DataLogzioDropFilter#field_name}
  */
  readonly fieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/drop_filter#value DataLogzioDropFilter#value}
  */
  readonly value?: string;
}

export function dataLogzioDropFilterFieldConditionsToTerraform(struct?: DataLogzioDropFilterFieldConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogzioDropFilterFieldConditionsToHclTerraform(struct?: DataLogzioDropFilterFieldConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
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

export class DataLogzioDropFilterFieldConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogzioDropFilterFieldConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioDropFilterFieldConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._value = value.value;
    }
  }

  // field_name - computed: true, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // value - computed: true, optional: true, required: false
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

export class DataLogzioDropFilterFieldConditionsList extends cdktf.ComplexList {
  public internalValue? : DataLogzioDropFilterFieldConditions[] | cdktf.IResolvable

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
  public get(index: number): DataLogzioDropFilterFieldConditionsOutputReference {
    return new DataLogzioDropFilterFieldConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/drop_filter logzio_drop_filter}
*/
export class DataLogzioDropFilter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_drop_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogzioDropFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogzioDropFilter to import
  * @param importFromId The id of the existing DataLogzioDropFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/drop_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogzioDropFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_drop_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/drop_filter logzio_drop_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogzioDropFilterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogzioDropFilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logzio_drop_filter',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0',
        providerVersionConstraint: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dropFilterId = config.dropFilterId;
    this._gbThreshold = config.gbThreshold;
    this._id = config.id;
    this._logType = config.logType;
    this._fieldConditions.internalValue = config.fieldConditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // drop_filter_id - computed: true, optional: true, required: false
  private _dropFilterId?: string; 
  public get dropFilterId() {
    return this.getStringAttribute('drop_filter_id');
  }
  public set dropFilterId(value: string) {
    this._dropFilterId = value;
  }
  public resetDropFilterId() {
    this._dropFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFilterIdInput() {
    return this._dropFilterId;
  }

  // gb_threshold - computed: false, optional: true, required: false
  private _gbThreshold?: number; 
  public get gbThreshold() {
    return this.getNumberAttribute('gb_threshold');
  }
  public set gbThreshold(value: number) {
    this._gbThreshold = value;
  }
  public resetGbThreshold() {
    this._gbThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gbThresholdInput() {
    return this._gbThreshold;
  }

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

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // field_conditions - computed: false, optional: true, required: false
  private _fieldConditions = new DataLogzioDropFilterFieldConditionsList(this, "field_conditions", false);
  public get fieldConditions() {
    return this._fieldConditions;
  }
  public putFieldConditions(value: DataLogzioDropFilterFieldConditions[] | cdktf.IResolvable) {
    this._fieldConditions.internalValue = value;
  }
  public resetFieldConditions() {
    this._fieldConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldConditionsInput() {
    return this._fieldConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      drop_filter_id: cdktf.stringToTerraform(this._dropFilterId),
      gb_threshold: cdktf.numberToTerraform(this._gbThreshold),
      id: cdktf.stringToTerraform(this._id),
      log_type: cdktf.stringToTerraform(this._logType),
      field_conditions: cdktf.listMapper(dataLogzioDropFilterFieldConditionsToTerraform, true)(this._fieldConditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      drop_filter_id: {
        value: cdktf.stringToHclTerraform(this._dropFilterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gb_threshold: {
        value: cdktf.numberToHclTerraform(this._gbThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_conditions: {
        value: cdktf.listMapperHcl(dataLogzioDropFilterFieldConditionsToHclTerraform, true)(this._fieldConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogzioDropFilterFieldConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
