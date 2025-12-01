// https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/transformation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranTransformationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the Transformation within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/transformation#id DataFivetranTransformation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataFivetranTransformationSchedule {
}

export function dataFivetranTransformationScheduleToTerraform(struct?: DataFivetranTransformationSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranTransformationScheduleToHclTerraform(struct?: DataFivetranTransformationSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranTransformationScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFivetranTransformationSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranTransformationSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // connection_ids - computed: true, optional: false, required: false
  public get connectionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_ids'));
  }

  // cron - computed: true, optional: false, required: false
  public get cron() {
    return cdktf.Fn.tolist(this.getListAttribute('cron'));
  }

  // days_of_week - computed: true, optional: false, required: false
  public get daysOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('days_of_week'));
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // schedule_type - computed: true, optional: false, required: false
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }

  // smart_syncing - computed: true, optional: false, required: false
  public get smartSyncing() {
    return this.getBooleanAttribute('smart_syncing');
  }

  // time_of_day - computed: true, optional: false, required: false
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
}
export interface DataFivetranTransformationTransformationConfigSteps {
}

export function dataFivetranTransformationTransformationConfigStepsToTerraform(struct?: DataFivetranTransformationTransformationConfigSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranTransformationTransformationConfigStepsToHclTerraform(struct?: DataFivetranTransformationTransformationConfigSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranTransformationTransformationConfigStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranTransformationTransformationConfigSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranTransformationTransformationConfigSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFivetranTransformationTransformationConfigStepsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranTransformationTransformationConfigStepsOutputReference {
    return new DataFivetranTransformationTransformationConfigStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranTransformationTransformationConfig {
}

export function dataFivetranTransformationTransformationConfigToTerraform(struct?: DataFivetranTransformationTransformationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranTransformationTransformationConfigToHclTerraform(struct?: DataFivetranTransformationTransformationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranTransformationTransformationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFivetranTransformationTransformationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranTransformationTransformationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // connection_ids - computed: true, optional: false, required: false
  public get connectionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_ids'));
  }

  // excluded_models - computed: true, optional: false, required: false
  public get excludedModels() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_models'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // package_name - computed: true, optional: false, required: false
  public get packageName() {
    return this.getStringAttribute('package_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // steps - computed: true, optional: false, required: false
  private _steps = new DataFivetranTransformationTransformationConfigStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }

  // upgrade_available - computed: true, optional: false, required: false
  public get upgradeAvailable() {
    return this.getBooleanAttribute('upgrade_available');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/transformation fivetran_transformation}
*/
export class DataFivetranTransformation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_transformation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranTransformation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranTransformation to import
  * @param importFromId The id of the existing DataFivetranTransformation that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/transformation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranTransformation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_transformation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/transformation fivetran_transformation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranTransformationConfig
  */
  public constructor(scope: Construct, id: string, config: DataFivetranTransformationConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_transformation',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.16',
        providerVersionConstraint: '1.9.16'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by_id - computed: true, optional: false, required: false
  public get createdById() {
    return this.getStringAttribute('created_by_id');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // output_model_names - computed: true, optional: false, required: false
  public get outputModelNames() {
    return cdktf.Fn.tolist(this.getListAttribute('output_model_names'));
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // schedule - computed: false, optional: false, required: false
  private _schedule = new DataFivetranTransformationScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // transformation_config - computed: false, optional: false, required: false
  private _transformationConfig = new DataFivetranTransformationTransformationConfigOutputReference(this, "transformation_config");
  public get transformationConfig() {
    return this._transformationConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
