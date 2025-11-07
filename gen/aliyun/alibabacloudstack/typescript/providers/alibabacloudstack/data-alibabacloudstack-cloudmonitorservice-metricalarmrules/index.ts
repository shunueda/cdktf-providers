// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cloudmonitorservice_metricalarmrules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cloudmonitorservice_metricalarmrules#id DataAlibabacloudstackCloudmonitorserviceMetricalarmrules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cloudmonitorservice_metricalarmrules#name_regex DataAlibabacloudstackCloudmonitorserviceMetricalarmrules#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cloudmonitorservice_metricalarmrules#output_file DataAlibabacloudstackCloudmonitorserviceMetricalarmrules#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsEscalations {
}

export function dataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsEscalationsToTerraform(struct?: DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsEscalations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsEscalationsToHclTerraform(struct?: DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsEscalations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsEscalationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsEscalations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsEscalations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical_comparison_operator - computed: true, optional: false, required: false
  public get criticalComparisonOperator() {
    return this.getStringAttribute('critical_comparison_operator');
  }

  // critical_statistics - computed: true, optional: false, required: false
  public get criticalStatistics() {
    return this.getStringAttribute('critical_statistics');
  }

  // critical_threshold - computed: true, optional: false, required: false
  public get criticalThreshold() {
    return this.getStringAttribute('critical_threshold');
  }

  // critical_times - computed: true, optional: false, required: false
  public get criticalTimes() {
    return this.getNumberAttribute('critical_times');
  }

  // info_comparison_operator - computed: true, optional: false, required: false
  public get infoComparisonOperator() {
    return this.getStringAttribute('info_comparison_operator');
  }

  // info_statistics - computed: true, optional: false, required: false
  public get infoStatistics() {
    return this.getStringAttribute('info_statistics');
  }

  // info_threshold - computed: true, optional: false, required: false
  public get infoThreshold() {
    return this.getStringAttribute('info_threshold');
  }

  // info_times - computed: true, optional: false, required: false
  public get infoTimes() {
    return this.getNumberAttribute('info_times');
  }

  // warn_comparison_operator - computed: true, optional: false, required: false
  public get warnComparisonOperator() {
    return this.getStringAttribute('warn_comparison_operator');
  }

  // warn_statistics - computed: true, optional: false, required: false
  public get warnStatistics() {
    return this.getStringAttribute('warn_statistics');
  }

  // warn_threshold - computed: true, optional: false, required: false
  public get warnThreshold() {
    return this.getStringAttribute('warn_threshold');
  }

  // warn_times - computed: true, optional: false, required: false
  public get warnTimes() {
    return this.getNumberAttribute('warn_times');
  }
}

export class DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsEscalationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsEscalationsOutputReference {
    return new DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsEscalationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarms {
}

export function dataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsToTerraform(struct?: DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsToHclTerraform(struct?: DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contact_groups - computed: true, optional: false, required: false
  public get contactGroups() {
    return this.getStringAttribute('contact_groups');
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.getStringAttribute('dimensions');
  }

  // effective_interval - computed: true, optional: false, required: false
  public get effectiveInterval() {
    return this.getStringAttribute('effective_interval');
  }

  // enable_state - computed: true, optional: false, required: false
  public get enableState() {
    return this.getBooleanAttribute('enable_state');
  }

  // escalations - computed: true, optional: false, required: false
  private _escalations = new DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsEscalationsList(this, "escalations", false);
  public get escalations() {
    return this._escalations;
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // mail_subject - computed: true, optional: false, required: false
  public get mailSubject() {
    return this.getStringAttribute('mail_subject');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // no_effective_interval - computed: true, optional: false, required: false
  public get noEffectiveInterval() {
    return this.getStringAttribute('no_effective_interval');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getStringAttribute('resources');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // silence_time - computed: true, optional: false, required: false
  public get silenceTime() {
    return this.getStringAttribute('silence_time');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // webhook - computed: true, optional: false, required: false
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
}

export class DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsOutputReference {
    return new DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cloudmonitorservice_metricalarmrules alibabacloudstack_cloudmonitorservice_metricalarmrules}
*/
export class DataAlibabacloudstackCloudmonitorserviceMetricalarmrules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cloudmonitorservice_metricalarmrules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackCloudmonitorserviceMetricalarmrules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackCloudmonitorserviceMetricalarmrules to import
  * @param importFromId The id of the existing DataAlibabacloudstackCloudmonitorserviceMetricalarmrules that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cloudmonitorservice_metricalarmrules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackCloudmonitorserviceMetricalarmrules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cloudmonitorservice_metricalarmrules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cloudmonitorservice_metricalarmrules alibabacloudstack_cloudmonitorservice_metricalarmrules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cloudmonitorservice_metricalarmrules',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
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
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarms - computed: true, optional: false, required: false
  private _alarms = new DataAlibabacloudstackCloudmonitorserviceMetricalarmrulesAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
