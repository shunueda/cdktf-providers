// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/threat_detection_baseline_strategies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudThreatDetectionBaselineStrategiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/threat_detection_baseline_strategies#custom_type DataAlicloudThreatDetectionBaselineStrategies#custom_type}
  */
  readonly customType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/threat_detection_baseline_strategies#id DataAlicloudThreatDetectionBaselineStrategies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/threat_detection_baseline_strategies#ids DataAlicloudThreatDetectionBaselineStrategies#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/threat_detection_baseline_strategies#name_regex DataAlicloudThreatDetectionBaselineStrategies#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/threat_detection_baseline_strategies#output_file DataAlicloudThreatDetectionBaselineStrategies#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/threat_detection_baseline_strategies#strategy_ids DataAlicloudThreatDetectionBaselineStrategies#strategy_ids}
  */
  readonly strategyIds?: string;
}
export interface DataAlicloudThreatDetectionBaselineStrategiesStrategies {
}

export function dataAlicloudThreatDetectionBaselineStrategiesStrategiesToTerraform(struct?: DataAlicloudThreatDetectionBaselineStrategiesStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudThreatDetectionBaselineStrategiesStrategiesToHclTerraform(struct?: DataAlicloudThreatDetectionBaselineStrategiesStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudThreatDetectionBaselineStrategiesStrategiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudThreatDetectionBaselineStrategiesStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudThreatDetectionBaselineStrategiesStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_strategy_id - computed: true, optional: false, required: false
  public get baselineStrategyId() {
    return this.getStringAttribute('baseline_strategy_id');
  }

  // baseline_strategy_name - computed: true, optional: false, required: false
  public get baselineStrategyName() {
    return this.getStringAttribute('baseline_strategy_name');
  }

  // custom_type - computed: true, optional: false, required: false
  public get customType() {
    return this.getStringAttribute('custom_type');
  }

  // cycle_days - computed: true, optional: false, required: false
  public get cycleDays() {
    return this.getNumberAttribute('cycle_days');
  }

  // cycle_start_time - computed: true, optional: false, required: false
  public get cycleStartTime() {
    return this.getNumberAttribute('cycle_start_time');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // risk_sub_type_name - computed: true, optional: false, required: false
  public get riskSubTypeName() {
    return this.getStringAttribute('risk_sub_type_name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
}

export class DataAlicloudThreatDetectionBaselineStrategiesStrategiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudThreatDetectionBaselineStrategiesStrategiesOutputReference {
    return new DataAlicloudThreatDetectionBaselineStrategiesStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/threat_detection_baseline_strategies alicloud_threat_detection_baseline_strategies}
*/
export class DataAlicloudThreatDetectionBaselineStrategies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_baseline_strategies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudThreatDetectionBaselineStrategies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudThreatDetectionBaselineStrategies to import
  * @param importFromId The id of the existing DataAlicloudThreatDetectionBaselineStrategies that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/threat_detection_baseline_strategies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudThreatDetectionBaselineStrategies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_baseline_strategies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/threat_detection_baseline_strategies alicloud_threat_detection_baseline_strategies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudThreatDetectionBaselineStrategiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudThreatDetectionBaselineStrategiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_baseline_strategies',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customType = config.customType;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._strategyIds = config.strategyIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // strategies - computed: true, optional: false, required: false
  private _strategies = new DataAlicloudThreatDetectionBaselineStrategiesStrategiesList(this, "strategies", false);
  public get strategies() {
    return this._strategies;
  }

  // strategy_ids - computed: false, optional: true, required: false
  private _strategyIds?: string; 
  public get strategyIds() {
    return this.getStringAttribute('strategy_ids');
  }
  public set strategyIds(value: string) {
    this._strategyIds = value;
  }
  public resetStrategyIds() {
    this._strategyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyIdsInput() {
    return this._strategyIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_type: cdktf.stringToTerraform(this._customType),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      strategy_ids: cdktf.stringToTerraform(this._strategyIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_type: {
        value: cdktf.stringToHclTerraform(this._customType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy_ids: {
        value: cdktf.stringToHclTerraform(this._strategyIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
