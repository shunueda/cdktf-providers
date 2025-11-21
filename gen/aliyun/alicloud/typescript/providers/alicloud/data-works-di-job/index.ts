// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWorksDiJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#description DataWorksDiJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#destination_data_source_type DataWorksDiJob#destination_data_source_type}
  */
  readonly destinationDataSourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#id DataWorksDiJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#job_name DataWorksDiJob#job_name}
  */
  readonly jobName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#migration_type DataWorksDiJob#migration_type}
  */
  readonly migrationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#project_id DataWorksDiJob#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#source_data_source_type DataWorksDiJob#source_data_source_type}
  */
  readonly sourceDataSourceType: string;
  /**
  * destination_data_source_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#destination_data_source_settings DataWorksDiJob#destination_data_source_settings}
  */
  readonly destinationDataSourceSettings: DataWorksDiJobDestinationDataSourceSettings[] | cdktf.IResolvable;
  /**
  * job_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#job_settings DataWorksDiJob#job_settings}
  */
  readonly jobSettings?: DataWorksDiJobJobSettings;
  /**
  * resource_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#resource_settings DataWorksDiJob#resource_settings}
  */
  readonly resourceSettings: DataWorksDiJobResourceSettings;
  /**
  * source_data_source_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#source_data_source_settings DataWorksDiJob#source_data_source_settings}
  */
  readonly sourceDataSourceSettings: DataWorksDiJobSourceDataSourceSettings[] | cdktf.IResolvable;
  /**
  * table_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#table_mappings DataWorksDiJob#table_mappings}
  */
  readonly tableMappings: DataWorksDiJobTableMappings[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#timeouts DataWorksDiJob#timeouts}
  */
  readonly timeouts?: DataWorksDiJobTimeouts;
  /**
  * transformation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#transformation_rules DataWorksDiJob#transformation_rules}
  */
  readonly transformationRules?: DataWorksDiJobTransformationRules[] | cdktf.IResolvable;
}
export interface DataWorksDiJobDestinationDataSourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#data_source_name DataWorksDiJob#data_source_name}
  */
  readonly dataSourceName?: string;
}

export function dataWorksDiJobDestinationDataSourceSettingsToTerraform(struct?: DataWorksDiJobDestinationDataSourceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_name: cdktf.stringToTerraform(struct!.dataSourceName),
  }
}


export function dataWorksDiJobDestinationDataSourceSettingsToHclTerraform(struct?: DataWorksDiJobDestinationDataSourceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_name: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobDestinationDataSourceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWorksDiJobDestinationDataSourceSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceName = this._dataSourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobDestinationDataSourceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceName = value.dataSourceName;
    }
  }

  // data_source_name - computed: false, optional: true, required: false
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  public resetDataSourceName() {
    this._dataSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }
}

export class DataWorksDiJobDestinationDataSourceSettingsList extends cdktf.ComplexList {
  public internalValue? : DataWorksDiJobDestinationDataSourceSettings[] | cdktf.IResolvable

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
  public get(index: number): DataWorksDiJobDestinationDataSourceSettingsOutputReference {
    return new DataWorksDiJobDestinationDataSourceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWorksDiJobJobSettingsColumnDataTypeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#destination_data_type DataWorksDiJob#destination_data_type}
  */
  readonly destinationDataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#source_data_type DataWorksDiJob#source_data_type}
  */
  readonly sourceDataType?: string;
}

export function dataWorksDiJobJobSettingsColumnDataTypeSettingsToTerraform(struct?: DataWorksDiJobJobSettingsColumnDataTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_data_type: cdktf.stringToTerraform(struct!.destinationDataType),
    source_data_type: cdktf.stringToTerraform(struct!.sourceDataType),
  }
}


export function dataWorksDiJobJobSettingsColumnDataTypeSettingsToHclTerraform(struct?: DataWorksDiJobJobSettingsColumnDataTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_data_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobJobSettingsColumnDataTypeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWorksDiJobJobSettingsColumnDataTypeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataType = this._destinationDataType;
    }
    if (this._sourceDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataType = this._sourceDataType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobJobSettingsColumnDataTypeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationDataType = undefined;
      this._sourceDataType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationDataType = value.destinationDataType;
      this._sourceDataType = value.sourceDataType;
    }
  }

  // destination_data_type - computed: false, optional: true, required: false
  private _destinationDataType?: string; 
  public get destinationDataType() {
    return this.getStringAttribute('destination_data_type');
  }
  public set destinationDataType(value: string) {
    this._destinationDataType = value;
  }
  public resetDestinationDataType() {
    this._destinationDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataTypeInput() {
    return this._destinationDataType;
  }

  // source_data_type - computed: false, optional: true, required: false
  private _sourceDataType?: string; 
  public get sourceDataType() {
    return this.getStringAttribute('source_data_type');
  }
  public set sourceDataType(value: string) {
    this._sourceDataType = value;
  }
  public resetSourceDataType() {
    this._sourceDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataTypeInput() {
    return this._sourceDataType;
  }
}

export class DataWorksDiJobJobSettingsColumnDataTypeSettingsList extends cdktf.ComplexList {
  public internalValue? : DataWorksDiJobJobSettingsColumnDataTypeSettings[] | cdktf.IResolvable

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
  public get(index: number): DataWorksDiJobJobSettingsColumnDataTypeSettingsOutputReference {
    return new DataWorksDiJobJobSettingsColumnDataTypeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWorksDiJobJobSettingsCycleScheduleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#cycle_migration_type DataWorksDiJob#cycle_migration_type}
  */
  readonly cycleMigrationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#schedule_parameters DataWorksDiJob#schedule_parameters}
  */
  readonly scheduleParameters?: string;
}

export function dataWorksDiJobJobSettingsCycleScheduleSettingsToTerraform(struct?: DataWorksDiJobJobSettingsCycleScheduleSettingsOutputReference | DataWorksDiJobJobSettingsCycleScheduleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cycle_migration_type: cdktf.stringToTerraform(struct!.cycleMigrationType),
    schedule_parameters: cdktf.stringToTerraform(struct!.scheduleParameters),
  }
}


export function dataWorksDiJobJobSettingsCycleScheduleSettingsToHclTerraform(struct?: DataWorksDiJobJobSettingsCycleScheduleSettingsOutputReference | DataWorksDiJobJobSettingsCycleScheduleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cycle_migration_type: {
      value: cdktf.stringToHclTerraform(struct!.cycleMigrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_parameters: {
      value: cdktf.stringToHclTerraform(struct!.scheduleParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobJobSettingsCycleScheduleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataWorksDiJobJobSettingsCycleScheduleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cycleMigrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycleMigrationType = this._cycleMigrationType;
    }
    if (this._scheduleParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleParameters = this._scheduleParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobJobSettingsCycleScheduleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cycleMigrationType = undefined;
      this._scheduleParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cycleMigrationType = value.cycleMigrationType;
      this._scheduleParameters = value.scheduleParameters;
    }
  }

  // cycle_migration_type - computed: false, optional: true, required: false
  private _cycleMigrationType?: string; 
  public get cycleMigrationType() {
    return this.getStringAttribute('cycle_migration_type');
  }
  public set cycleMigrationType(value: string) {
    this._cycleMigrationType = value;
  }
  public resetCycleMigrationType() {
    this._cycleMigrationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleMigrationTypeInput() {
    return this._cycleMigrationType;
  }

  // schedule_parameters - computed: false, optional: true, required: false
  private _scheduleParameters?: string; 
  public get scheduleParameters() {
    return this.getStringAttribute('schedule_parameters');
  }
  public set scheduleParameters(value: string) {
    this._scheduleParameters = value;
  }
  public resetScheduleParameters() {
    this._scheduleParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleParametersInput() {
    return this._scheduleParameters;
  }
}
export interface DataWorksDiJobJobSettingsDdlHandlingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#action DataWorksDiJob#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#type DataWorksDiJob#type}
  */
  readonly type?: string;
}

export function dataWorksDiJobJobSettingsDdlHandlingSettingsToTerraform(struct?: DataWorksDiJobJobSettingsDdlHandlingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataWorksDiJobJobSettingsDdlHandlingSettingsToHclTerraform(struct?: DataWorksDiJobJobSettingsDdlHandlingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobJobSettingsDdlHandlingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWorksDiJobJobSettingsDdlHandlingSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobJobSettingsDdlHandlingSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._type = value.type;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // type - computed: false, optional: true, required: false
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
}

export class DataWorksDiJobJobSettingsDdlHandlingSettingsList extends cdktf.ComplexList {
  public internalValue? : DataWorksDiJobJobSettingsDdlHandlingSettings[] | cdktf.IResolvable

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
  public get(index: number): DataWorksDiJobJobSettingsDdlHandlingSettingsOutputReference {
    return new DataWorksDiJobJobSettingsDdlHandlingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWorksDiJobJobSettingsRuntimeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#name DataWorksDiJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#value DataWorksDiJob#value}
  */
  readonly value?: string;
}

export function dataWorksDiJobJobSettingsRuntimeSettingsToTerraform(struct?: DataWorksDiJobJobSettingsRuntimeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataWorksDiJobJobSettingsRuntimeSettingsToHclTerraform(struct?: DataWorksDiJobJobSettingsRuntimeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataWorksDiJobJobSettingsRuntimeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWorksDiJobJobSettingsRuntimeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobJobSettingsRuntimeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
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

export class DataWorksDiJobJobSettingsRuntimeSettingsList extends cdktf.ComplexList {
  public internalValue? : DataWorksDiJobJobSettingsRuntimeSettings[] | cdktf.IResolvable

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
  public get(index: number): DataWorksDiJobJobSettingsRuntimeSettingsOutputReference {
    return new DataWorksDiJobJobSettingsRuntimeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWorksDiJobJobSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#channel_settings DataWorksDiJob#channel_settings}
  */
  readonly channelSettings?: string;
  /**
  * column_data_type_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#column_data_type_settings DataWorksDiJob#column_data_type_settings}
  */
  readonly columnDataTypeSettings?: DataWorksDiJobJobSettingsColumnDataTypeSettings[] | cdktf.IResolvable;
  /**
  * cycle_schedule_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#cycle_schedule_settings DataWorksDiJob#cycle_schedule_settings}
  */
  readonly cycleScheduleSettings?: DataWorksDiJobJobSettingsCycleScheduleSettings;
  /**
  * ddl_handling_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#ddl_handling_settings DataWorksDiJob#ddl_handling_settings}
  */
  readonly ddlHandlingSettings?: DataWorksDiJobJobSettingsDdlHandlingSettings[] | cdktf.IResolvable;
  /**
  * runtime_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#runtime_settings DataWorksDiJob#runtime_settings}
  */
  readonly runtimeSettings?: DataWorksDiJobJobSettingsRuntimeSettings[] | cdktf.IResolvable;
}

export function dataWorksDiJobJobSettingsToTerraform(struct?: DataWorksDiJobJobSettingsOutputReference | DataWorksDiJobJobSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_settings: cdktf.stringToTerraform(struct!.channelSettings),
    column_data_type_settings: cdktf.listMapper(dataWorksDiJobJobSettingsColumnDataTypeSettingsToTerraform, true)(struct!.columnDataTypeSettings),
    cycle_schedule_settings: dataWorksDiJobJobSettingsCycleScheduleSettingsToTerraform(struct!.cycleScheduleSettings),
    ddl_handling_settings: cdktf.listMapper(dataWorksDiJobJobSettingsDdlHandlingSettingsToTerraform, true)(struct!.ddlHandlingSettings),
    runtime_settings: cdktf.listMapper(dataWorksDiJobJobSettingsRuntimeSettingsToTerraform, true)(struct!.runtimeSettings),
  }
}


export function dataWorksDiJobJobSettingsToHclTerraform(struct?: DataWorksDiJobJobSettingsOutputReference | DataWorksDiJobJobSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_settings: {
      value: cdktf.stringToHclTerraform(struct!.channelSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_data_type_settings: {
      value: cdktf.listMapperHcl(dataWorksDiJobJobSettingsColumnDataTypeSettingsToHclTerraform, true)(struct!.columnDataTypeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataWorksDiJobJobSettingsColumnDataTypeSettingsList",
    },
    cycle_schedule_settings: {
      value: dataWorksDiJobJobSettingsCycleScheduleSettingsToHclTerraform(struct!.cycleScheduleSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataWorksDiJobJobSettingsCycleScheduleSettingsList",
    },
    ddl_handling_settings: {
      value: cdktf.listMapperHcl(dataWorksDiJobJobSettingsDdlHandlingSettingsToHclTerraform, true)(struct!.ddlHandlingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataWorksDiJobJobSettingsDdlHandlingSettingsList",
    },
    runtime_settings: {
      value: cdktf.listMapperHcl(dataWorksDiJobJobSettingsRuntimeSettingsToHclTerraform, true)(struct!.runtimeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataWorksDiJobJobSettingsRuntimeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobJobSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataWorksDiJobJobSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelSettings = this._channelSettings;
    }
    if (this._columnDataTypeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDataTypeSettings = this._columnDataTypeSettings?.internalValue;
    }
    if (this._cycleScheduleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycleScheduleSettings = this._cycleScheduleSettings?.internalValue;
    }
    if (this._ddlHandlingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddlHandlingSettings = this._ddlHandlingSettings?.internalValue;
    }
    if (this._runtimeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeSettings = this._runtimeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobJobSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channelSettings = undefined;
      this._columnDataTypeSettings.internalValue = undefined;
      this._cycleScheduleSettings.internalValue = undefined;
      this._ddlHandlingSettings.internalValue = undefined;
      this._runtimeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channelSettings = value.channelSettings;
      this._columnDataTypeSettings.internalValue = value.columnDataTypeSettings;
      this._cycleScheduleSettings.internalValue = value.cycleScheduleSettings;
      this._ddlHandlingSettings.internalValue = value.ddlHandlingSettings;
      this._runtimeSettings.internalValue = value.runtimeSettings;
    }
  }

  // channel_settings - computed: false, optional: true, required: false
  private _channelSettings?: string; 
  public get channelSettings() {
    return this.getStringAttribute('channel_settings');
  }
  public set channelSettings(value: string) {
    this._channelSettings = value;
  }
  public resetChannelSettings() {
    this._channelSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelSettingsInput() {
    return this._channelSettings;
  }

  // column_data_type_settings - computed: false, optional: true, required: false
  private _columnDataTypeSettings = new DataWorksDiJobJobSettingsColumnDataTypeSettingsList(this, "column_data_type_settings", false);
  public get columnDataTypeSettings() {
    return this._columnDataTypeSettings;
  }
  public putColumnDataTypeSettings(value: DataWorksDiJobJobSettingsColumnDataTypeSettings[] | cdktf.IResolvable) {
    this._columnDataTypeSettings.internalValue = value;
  }
  public resetColumnDataTypeSettings() {
    this._columnDataTypeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDataTypeSettingsInput() {
    return this._columnDataTypeSettings.internalValue;
  }

  // cycle_schedule_settings - computed: false, optional: true, required: false
  private _cycleScheduleSettings = new DataWorksDiJobJobSettingsCycleScheduleSettingsOutputReference(this, "cycle_schedule_settings");
  public get cycleScheduleSettings() {
    return this._cycleScheduleSettings;
  }
  public putCycleScheduleSettings(value: DataWorksDiJobJobSettingsCycleScheduleSettings) {
    this._cycleScheduleSettings.internalValue = value;
  }
  public resetCycleScheduleSettings() {
    this._cycleScheduleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleScheduleSettingsInput() {
    return this._cycleScheduleSettings.internalValue;
  }

  // ddl_handling_settings - computed: false, optional: true, required: false
  private _ddlHandlingSettings = new DataWorksDiJobJobSettingsDdlHandlingSettingsList(this, "ddl_handling_settings", false);
  public get ddlHandlingSettings() {
    return this._ddlHandlingSettings;
  }
  public putDdlHandlingSettings(value: DataWorksDiJobJobSettingsDdlHandlingSettings[] | cdktf.IResolvable) {
    this._ddlHandlingSettings.internalValue = value;
  }
  public resetDdlHandlingSettings() {
    this._ddlHandlingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlHandlingSettingsInput() {
    return this._ddlHandlingSettings.internalValue;
  }

  // runtime_settings - computed: false, optional: true, required: false
  private _runtimeSettings = new DataWorksDiJobJobSettingsRuntimeSettingsList(this, "runtime_settings", false);
  public get runtimeSettings() {
    return this._runtimeSettings;
  }
  public putRuntimeSettings(value: DataWorksDiJobJobSettingsRuntimeSettings[] | cdktf.IResolvable) {
    this._runtimeSettings.internalValue = value;
  }
  public resetRuntimeSettings() {
    this._runtimeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeSettingsInput() {
    return this._runtimeSettings.internalValue;
  }
}
export interface DataWorksDiJobResourceSettingsOfflineResourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#requested_cu DataWorksDiJob#requested_cu}
  */
  readonly requestedCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#resource_group_identifier DataWorksDiJob#resource_group_identifier}
  */
  readonly resourceGroupIdentifier?: string;
}

export function dataWorksDiJobResourceSettingsOfflineResourceSettingsToTerraform(struct?: DataWorksDiJobResourceSettingsOfflineResourceSettingsOutputReference | DataWorksDiJobResourceSettingsOfflineResourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requested_cu: cdktf.numberToTerraform(struct!.requestedCu),
    resource_group_identifier: cdktf.stringToTerraform(struct!.resourceGroupIdentifier),
  }
}


export function dataWorksDiJobResourceSettingsOfflineResourceSettingsToHclTerraform(struct?: DataWorksDiJobResourceSettingsOfflineResourceSettingsOutputReference | DataWorksDiJobResourceSettingsOfflineResourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requested_cu: {
      value: cdktf.numberToHclTerraform(struct!.requestedCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_group_identifier: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobResourceSettingsOfflineResourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataWorksDiJobResourceSettingsOfflineResourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestedCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedCu = this._requestedCu;
    }
    if (this._resourceGroupIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupIdentifier = this._resourceGroupIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobResourceSettingsOfflineResourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestedCu = undefined;
      this._resourceGroupIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestedCu = value.requestedCu;
      this._resourceGroupIdentifier = value.resourceGroupIdentifier;
    }
  }

  // requested_cu - computed: false, optional: true, required: false
  private _requestedCu?: number; 
  public get requestedCu() {
    return this.getNumberAttribute('requested_cu');
  }
  public set requestedCu(value: number) {
    this._requestedCu = value;
  }
  public resetRequestedCu() {
    this._requestedCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedCuInput() {
    return this._requestedCu;
  }

  // resource_group_identifier - computed: false, optional: true, required: false
  private _resourceGroupIdentifier?: string; 
  public get resourceGroupIdentifier() {
    return this.getStringAttribute('resource_group_identifier');
  }
  public set resourceGroupIdentifier(value: string) {
    this._resourceGroupIdentifier = value;
  }
  public resetResourceGroupIdentifier() {
    this._resourceGroupIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdentifierInput() {
    return this._resourceGroupIdentifier;
  }
}
export interface DataWorksDiJobResourceSettingsRealtimeResourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#requested_cu DataWorksDiJob#requested_cu}
  */
  readonly requestedCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#resource_group_identifier DataWorksDiJob#resource_group_identifier}
  */
  readonly resourceGroupIdentifier?: string;
}

export function dataWorksDiJobResourceSettingsRealtimeResourceSettingsToTerraform(struct?: DataWorksDiJobResourceSettingsRealtimeResourceSettingsOutputReference | DataWorksDiJobResourceSettingsRealtimeResourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requested_cu: cdktf.numberToTerraform(struct!.requestedCu),
    resource_group_identifier: cdktf.stringToTerraform(struct!.resourceGroupIdentifier),
  }
}


export function dataWorksDiJobResourceSettingsRealtimeResourceSettingsToHclTerraform(struct?: DataWorksDiJobResourceSettingsRealtimeResourceSettingsOutputReference | DataWorksDiJobResourceSettingsRealtimeResourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requested_cu: {
      value: cdktf.numberToHclTerraform(struct!.requestedCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_group_identifier: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobResourceSettingsRealtimeResourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataWorksDiJobResourceSettingsRealtimeResourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestedCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedCu = this._requestedCu;
    }
    if (this._resourceGroupIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupIdentifier = this._resourceGroupIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobResourceSettingsRealtimeResourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestedCu = undefined;
      this._resourceGroupIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestedCu = value.requestedCu;
      this._resourceGroupIdentifier = value.resourceGroupIdentifier;
    }
  }

  // requested_cu - computed: false, optional: true, required: false
  private _requestedCu?: number; 
  public get requestedCu() {
    return this.getNumberAttribute('requested_cu');
  }
  public set requestedCu(value: number) {
    this._requestedCu = value;
  }
  public resetRequestedCu() {
    this._requestedCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedCuInput() {
    return this._requestedCu;
  }

  // resource_group_identifier - computed: false, optional: true, required: false
  private _resourceGroupIdentifier?: string; 
  public get resourceGroupIdentifier() {
    return this.getStringAttribute('resource_group_identifier');
  }
  public set resourceGroupIdentifier(value: string) {
    this._resourceGroupIdentifier = value;
  }
  public resetResourceGroupIdentifier() {
    this._resourceGroupIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdentifierInput() {
    return this._resourceGroupIdentifier;
  }
}
export interface DataWorksDiJobResourceSettingsScheduleResourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#requested_cu DataWorksDiJob#requested_cu}
  */
  readonly requestedCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#resource_group_identifier DataWorksDiJob#resource_group_identifier}
  */
  readonly resourceGroupIdentifier?: string;
}

export function dataWorksDiJobResourceSettingsScheduleResourceSettingsToTerraform(struct?: DataWorksDiJobResourceSettingsScheduleResourceSettingsOutputReference | DataWorksDiJobResourceSettingsScheduleResourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requested_cu: cdktf.numberToTerraform(struct!.requestedCu),
    resource_group_identifier: cdktf.stringToTerraform(struct!.resourceGroupIdentifier),
  }
}


export function dataWorksDiJobResourceSettingsScheduleResourceSettingsToHclTerraform(struct?: DataWorksDiJobResourceSettingsScheduleResourceSettingsOutputReference | DataWorksDiJobResourceSettingsScheduleResourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requested_cu: {
      value: cdktf.numberToHclTerraform(struct!.requestedCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_group_identifier: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobResourceSettingsScheduleResourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataWorksDiJobResourceSettingsScheduleResourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestedCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedCu = this._requestedCu;
    }
    if (this._resourceGroupIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupIdentifier = this._resourceGroupIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobResourceSettingsScheduleResourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestedCu = undefined;
      this._resourceGroupIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestedCu = value.requestedCu;
      this._resourceGroupIdentifier = value.resourceGroupIdentifier;
    }
  }

  // requested_cu - computed: false, optional: true, required: false
  private _requestedCu?: number; 
  public get requestedCu() {
    return this.getNumberAttribute('requested_cu');
  }
  public set requestedCu(value: number) {
    this._requestedCu = value;
  }
  public resetRequestedCu() {
    this._requestedCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedCuInput() {
    return this._requestedCu;
  }

  // resource_group_identifier - computed: false, optional: true, required: false
  private _resourceGroupIdentifier?: string; 
  public get resourceGroupIdentifier() {
    return this.getStringAttribute('resource_group_identifier');
  }
  public set resourceGroupIdentifier(value: string) {
    this._resourceGroupIdentifier = value;
  }
  public resetResourceGroupIdentifier() {
    this._resourceGroupIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdentifierInput() {
    return this._resourceGroupIdentifier;
  }
}
export interface DataWorksDiJobResourceSettings {
  /**
  * offline_resource_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#offline_resource_settings DataWorksDiJob#offline_resource_settings}
  */
  readonly offlineResourceSettings?: DataWorksDiJobResourceSettingsOfflineResourceSettings;
  /**
  * realtime_resource_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#realtime_resource_settings DataWorksDiJob#realtime_resource_settings}
  */
  readonly realtimeResourceSettings?: DataWorksDiJobResourceSettingsRealtimeResourceSettings;
  /**
  * schedule_resource_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#schedule_resource_settings DataWorksDiJob#schedule_resource_settings}
  */
  readonly scheduleResourceSettings?: DataWorksDiJobResourceSettingsScheduleResourceSettings;
}

export function dataWorksDiJobResourceSettingsToTerraform(struct?: DataWorksDiJobResourceSettingsOutputReference | DataWorksDiJobResourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offline_resource_settings: dataWorksDiJobResourceSettingsOfflineResourceSettingsToTerraform(struct!.offlineResourceSettings),
    realtime_resource_settings: dataWorksDiJobResourceSettingsRealtimeResourceSettingsToTerraform(struct!.realtimeResourceSettings),
    schedule_resource_settings: dataWorksDiJobResourceSettingsScheduleResourceSettingsToTerraform(struct!.scheduleResourceSettings),
  }
}


export function dataWorksDiJobResourceSettingsToHclTerraform(struct?: DataWorksDiJobResourceSettingsOutputReference | DataWorksDiJobResourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offline_resource_settings: {
      value: dataWorksDiJobResourceSettingsOfflineResourceSettingsToHclTerraform(struct!.offlineResourceSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataWorksDiJobResourceSettingsOfflineResourceSettingsList",
    },
    realtime_resource_settings: {
      value: dataWorksDiJobResourceSettingsRealtimeResourceSettingsToHclTerraform(struct!.realtimeResourceSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataWorksDiJobResourceSettingsRealtimeResourceSettingsList",
    },
    schedule_resource_settings: {
      value: dataWorksDiJobResourceSettingsScheduleResourceSettingsToHclTerraform(struct!.scheduleResourceSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataWorksDiJobResourceSettingsScheduleResourceSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobResourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataWorksDiJobResourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offlineResourceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineResourceSettings = this._offlineResourceSettings?.internalValue;
    }
    if (this._realtimeResourceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeResourceSettings = this._realtimeResourceSettings?.internalValue;
    }
    if (this._scheduleResourceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleResourceSettings = this._scheduleResourceSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobResourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offlineResourceSettings.internalValue = undefined;
      this._realtimeResourceSettings.internalValue = undefined;
      this._scheduleResourceSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offlineResourceSettings.internalValue = value.offlineResourceSettings;
      this._realtimeResourceSettings.internalValue = value.realtimeResourceSettings;
      this._scheduleResourceSettings.internalValue = value.scheduleResourceSettings;
    }
  }

  // offline_resource_settings - computed: false, optional: true, required: false
  private _offlineResourceSettings = new DataWorksDiJobResourceSettingsOfflineResourceSettingsOutputReference(this, "offline_resource_settings");
  public get offlineResourceSettings() {
    return this._offlineResourceSettings;
  }
  public putOfflineResourceSettings(value: DataWorksDiJobResourceSettingsOfflineResourceSettings) {
    this._offlineResourceSettings.internalValue = value;
  }
  public resetOfflineResourceSettings() {
    this._offlineResourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineResourceSettingsInput() {
    return this._offlineResourceSettings.internalValue;
  }

  // realtime_resource_settings - computed: false, optional: true, required: false
  private _realtimeResourceSettings = new DataWorksDiJobResourceSettingsRealtimeResourceSettingsOutputReference(this, "realtime_resource_settings");
  public get realtimeResourceSettings() {
    return this._realtimeResourceSettings;
  }
  public putRealtimeResourceSettings(value: DataWorksDiJobResourceSettingsRealtimeResourceSettings) {
    this._realtimeResourceSettings.internalValue = value;
  }
  public resetRealtimeResourceSettings() {
    this._realtimeResourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeResourceSettingsInput() {
    return this._realtimeResourceSettings.internalValue;
  }

  // schedule_resource_settings - computed: false, optional: true, required: false
  private _scheduleResourceSettings = new DataWorksDiJobResourceSettingsScheduleResourceSettingsOutputReference(this, "schedule_resource_settings");
  public get scheduleResourceSettings() {
    return this._scheduleResourceSettings;
  }
  public putScheduleResourceSettings(value: DataWorksDiJobResourceSettingsScheduleResourceSettings) {
    this._scheduleResourceSettings.internalValue = value;
  }
  public resetScheduleResourceSettings() {
    this._scheduleResourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleResourceSettingsInput() {
    return this._scheduleResourceSettings.internalValue;
  }
}
export interface DataWorksDiJobSourceDataSourceSettingsDataSourceProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#encoding DataWorksDiJob#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#timezone DataWorksDiJob#timezone}
  */
  readonly timezone?: string;
}

export function dataWorksDiJobSourceDataSourceSettingsDataSourcePropertiesToTerraform(struct?: DataWorksDiJobSourceDataSourceSettingsDataSourcePropertiesOutputReference | DataWorksDiJobSourceDataSourceSettingsDataSourceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function dataWorksDiJobSourceDataSourceSettingsDataSourcePropertiesToHclTerraform(struct?: DataWorksDiJobSourceDataSourceSettingsDataSourcePropertiesOutputReference | DataWorksDiJobSourceDataSourceSettingsDataSourceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobSourceDataSourceSettingsDataSourcePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataWorksDiJobSourceDataSourceSettingsDataSourceProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobSourceDataSourceSettingsDataSourceProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encoding = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encoding = value.encoding;
      this._timezone = value.timezone;
    }
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface DataWorksDiJobSourceDataSourceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#data_source_name DataWorksDiJob#data_source_name}
  */
  readonly dataSourceName?: string;
  /**
  * data_source_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#data_source_properties DataWorksDiJob#data_source_properties}
  */
  readonly dataSourceProperties?: DataWorksDiJobSourceDataSourceSettingsDataSourceProperties;
}

export function dataWorksDiJobSourceDataSourceSettingsToTerraform(struct?: DataWorksDiJobSourceDataSourceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_name: cdktf.stringToTerraform(struct!.dataSourceName),
    data_source_properties: dataWorksDiJobSourceDataSourceSettingsDataSourcePropertiesToTerraform(struct!.dataSourceProperties),
  }
}


export function dataWorksDiJobSourceDataSourceSettingsToHclTerraform(struct?: DataWorksDiJobSourceDataSourceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_name: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source_properties: {
      value: dataWorksDiJobSourceDataSourceSettingsDataSourcePropertiesToHclTerraform(struct!.dataSourceProperties),
      isBlock: true,
      type: "list",
      storageClassType: "DataWorksDiJobSourceDataSourceSettingsDataSourcePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobSourceDataSourceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWorksDiJobSourceDataSourceSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceName = this._dataSourceName;
    }
    if (this._dataSourceProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceProperties = this._dataSourceProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobSourceDataSourceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceName = undefined;
      this._dataSourceProperties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceName = value.dataSourceName;
      this._dataSourceProperties.internalValue = value.dataSourceProperties;
    }
  }

  // data_source_name - computed: false, optional: true, required: false
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  public resetDataSourceName() {
    this._dataSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // data_source_properties - computed: false, optional: true, required: false
  private _dataSourceProperties = new DataWorksDiJobSourceDataSourceSettingsDataSourcePropertiesOutputReference(this, "data_source_properties");
  public get dataSourceProperties() {
    return this._dataSourceProperties;
  }
  public putDataSourceProperties(value: DataWorksDiJobSourceDataSourceSettingsDataSourceProperties) {
    this._dataSourceProperties.internalValue = value;
  }
  public resetDataSourceProperties() {
    this._dataSourceProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcePropertiesInput() {
    return this._dataSourceProperties.internalValue;
  }
}

export class DataWorksDiJobSourceDataSourceSettingsList extends cdktf.ComplexList {
  public internalValue? : DataWorksDiJobSourceDataSourceSettings[] | cdktf.IResolvable

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
  public get(index: number): DataWorksDiJobSourceDataSourceSettingsOutputReference {
    return new DataWorksDiJobSourceDataSourceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWorksDiJobTableMappingsSourceObjectSelectionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#action DataWorksDiJob#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#expression DataWorksDiJob#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#expression_type DataWorksDiJob#expression_type}
  */
  readonly expressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#object_type DataWorksDiJob#object_type}
  */
  readonly objectType?: string;
}

export function dataWorksDiJobTableMappingsSourceObjectSelectionRulesToTerraform(struct?: DataWorksDiJobTableMappingsSourceObjectSelectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    expression: cdktf.stringToTerraform(struct!.expression),
    expression_type: cdktf.stringToTerraform(struct!.expressionType),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataWorksDiJobTableMappingsSourceObjectSelectionRulesToHclTerraform(struct?: DataWorksDiJobTableMappingsSourceObjectSelectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression_type: {
      value: cdktf.stringToHclTerraform(struct!.expressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobTableMappingsSourceObjectSelectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWorksDiJobTableMappingsSourceObjectSelectionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._expressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionType = this._expressionType;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobTableMappingsSourceObjectSelectionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._expression = undefined;
      this._expressionType = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._expression = value.expression;
      this._expressionType = value.expressionType;
      this._objectType = value.objectType;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // expression_type - computed: false, optional: true, required: false
  private _expressionType?: string; 
  public get expressionType() {
    return this.getStringAttribute('expression_type');
  }
  public set expressionType(value: string) {
    this._expressionType = value;
  }
  public resetExpressionType() {
    this._expressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionTypeInput() {
    return this._expressionType;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class DataWorksDiJobTableMappingsSourceObjectSelectionRulesList extends cdktf.ComplexList {
  public internalValue? : DataWorksDiJobTableMappingsSourceObjectSelectionRules[] | cdktf.IResolvable

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
  public get(index: number): DataWorksDiJobTableMappingsSourceObjectSelectionRulesOutputReference {
    return new DataWorksDiJobTableMappingsSourceObjectSelectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWorksDiJobTableMappingsTransformationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#rule_action_type DataWorksDiJob#rule_action_type}
  */
  readonly ruleActionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#rule_name DataWorksDiJob#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#rule_target_type DataWorksDiJob#rule_target_type}
  */
  readonly ruleTargetType?: string;
}

export function dataWorksDiJobTableMappingsTransformationRulesToTerraform(struct?: DataWorksDiJobTableMappingsTransformationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_action_type: cdktf.stringToTerraform(struct!.ruleActionType),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    rule_target_type: cdktf.stringToTerraform(struct!.ruleTargetType),
  }
}


export function dataWorksDiJobTableMappingsTransformationRulesToHclTerraform(struct?: DataWorksDiJobTableMappingsTransformationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_action_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleActionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_target_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleTargetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobTableMappingsTransformationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWorksDiJobTableMappingsTransformationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleActionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleActionType = this._ruleActionType;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._ruleTargetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTargetType = this._ruleTargetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobTableMappingsTransformationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleActionType = undefined;
      this._ruleName = undefined;
      this._ruleTargetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleActionType = value.ruleActionType;
      this._ruleName = value.ruleName;
      this._ruleTargetType = value.ruleTargetType;
    }
  }

  // rule_action_type - computed: false, optional: true, required: false
  private _ruleActionType?: string; 
  public get ruleActionType() {
    return this.getStringAttribute('rule_action_type');
  }
  public set ruleActionType(value: string) {
    this._ruleActionType = value;
  }
  public resetRuleActionType() {
    this._ruleActionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionTypeInput() {
    return this._ruleActionType;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_target_type - computed: false, optional: true, required: false
  private _ruleTargetType?: string; 
  public get ruleTargetType() {
    return this.getStringAttribute('rule_target_type');
  }
  public set ruleTargetType(value: string) {
    this._ruleTargetType = value;
  }
  public resetRuleTargetType() {
    this._ruleTargetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTargetTypeInput() {
    return this._ruleTargetType;
  }
}

export class DataWorksDiJobTableMappingsTransformationRulesList extends cdktf.ComplexList {
  public internalValue? : DataWorksDiJobTableMappingsTransformationRules[] | cdktf.IResolvable

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
  public get(index: number): DataWorksDiJobTableMappingsTransformationRulesOutputReference {
    return new DataWorksDiJobTableMappingsTransformationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWorksDiJobTableMappings {
  /**
  * source_object_selection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#source_object_selection_rules DataWorksDiJob#source_object_selection_rules}
  */
  readonly sourceObjectSelectionRules?: DataWorksDiJobTableMappingsSourceObjectSelectionRules[] | cdktf.IResolvable;
  /**
  * transformation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#transformation_rules DataWorksDiJob#transformation_rules}
  */
  readonly transformationRules?: DataWorksDiJobTableMappingsTransformationRules[] | cdktf.IResolvable;
}

export function dataWorksDiJobTableMappingsToTerraform(struct?: DataWorksDiJobTableMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_object_selection_rules: cdktf.listMapper(dataWorksDiJobTableMappingsSourceObjectSelectionRulesToTerraform, true)(struct!.sourceObjectSelectionRules),
    transformation_rules: cdktf.listMapper(dataWorksDiJobTableMappingsTransformationRulesToTerraform, true)(struct!.transformationRules),
  }
}


export function dataWorksDiJobTableMappingsToHclTerraform(struct?: DataWorksDiJobTableMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_object_selection_rules: {
      value: cdktf.listMapperHcl(dataWorksDiJobTableMappingsSourceObjectSelectionRulesToHclTerraform, true)(struct!.sourceObjectSelectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataWorksDiJobTableMappingsSourceObjectSelectionRulesList",
    },
    transformation_rules: {
      value: cdktf.listMapperHcl(dataWorksDiJobTableMappingsTransformationRulesToHclTerraform, true)(struct!.transformationRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataWorksDiJobTableMappingsTransformationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobTableMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWorksDiJobTableMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceObjectSelectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceObjectSelectionRules = this._sourceObjectSelectionRules?.internalValue;
    }
    if (this._transformationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationRules = this._transformationRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobTableMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceObjectSelectionRules.internalValue = undefined;
      this._transformationRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceObjectSelectionRules.internalValue = value.sourceObjectSelectionRules;
      this._transformationRules.internalValue = value.transformationRules;
    }
  }

  // source_object_selection_rules - computed: false, optional: true, required: false
  private _sourceObjectSelectionRules = new DataWorksDiJobTableMappingsSourceObjectSelectionRulesList(this, "source_object_selection_rules", false);
  public get sourceObjectSelectionRules() {
    return this._sourceObjectSelectionRules;
  }
  public putSourceObjectSelectionRules(value: DataWorksDiJobTableMappingsSourceObjectSelectionRules[] | cdktf.IResolvable) {
    this._sourceObjectSelectionRules.internalValue = value;
  }
  public resetSourceObjectSelectionRules() {
    this._sourceObjectSelectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceObjectSelectionRulesInput() {
    return this._sourceObjectSelectionRules.internalValue;
  }

  // transformation_rules - computed: false, optional: true, required: false
  private _transformationRules = new DataWorksDiJobTableMappingsTransformationRulesList(this, "transformation_rules", false);
  public get transformationRules() {
    return this._transformationRules;
  }
  public putTransformationRules(value: DataWorksDiJobTableMappingsTransformationRules[] | cdktf.IResolvable) {
    this._transformationRules.internalValue = value;
  }
  public resetTransformationRules() {
    this._transformationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationRulesInput() {
    return this._transformationRules.internalValue;
  }
}

export class DataWorksDiJobTableMappingsList extends cdktf.ComplexList {
  public internalValue? : DataWorksDiJobTableMappings[] | cdktf.IResolvable

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
  public get(index: number): DataWorksDiJobTableMappingsOutputReference {
    return new DataWorksDiJobTableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWorksDiJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#create DataWorksDiJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#delete DataWorksDiJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#update DataWorksDiJob#update}
  */
  readonly update?: string;
}

export function dataWorksDiJobTimeoutsToTerraform(struct?: DataWorksDiJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataWorksDiJobTimeoutsToHclTerraform(struct?: DataWorksDiJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataWorksDiJobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface DataWorksDiJobTransformationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#rule_action_type DataWorksDiJob#rule_action_type}
  */
  readonly ruleActionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#rule_expression DataWorksDiJob#rule_expression}
  */
  readonly ruleExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#rule_name DataWorksDiJob#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#rule_target_type DataWorksDiJob#rule_target_type}
  */
  readonly ruleTargetType?: string;
}

export function dataWorksDiJobTransformationRulesToTerraform(struct?: DataWorksDiJobTransformationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_action_type: cdktf.stringToTerraform(struct!.ruleActionType),
    rule_expression: cdktf.stringToTerraform(struct!.ruleExpression),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    rule_target_type: cdktf.stringToTerraform(struct!.ruleTargetType),
  }
}


export function dataWorksDiJobTransformationRulesToHclTerraform(struct?: DataWorksDiJobTransformationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_action_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleActionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_expression: {
      value: cdktf.stringToHclTerraform(struct!.ruleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_target_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleTargetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataWorksDiJobTransformationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWorksDiJobTransformationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleActionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleActionType = this._ruleActionType;
    }
    if (this._ruleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleExpression = this._ruleExpression;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._ruleTargetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTargetType = this._ruleTargetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWorksDiJobTransformationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleActionType = undefined;
      this._ruleExpression = undefined;
      this._ruleName = undefined;
      this._ruleTargetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleActionType = value.ruleActionType;
      this._ruleExpression = value.ruleExpression;
      this._ruleName = value.ruleName;
      this._ruleTargetType = value.ruleTargetType;
    }
  }

  // rule_action_type - computed: false, optional: true, required: false
  private _ruleActionType?: string; 
  public get ruleActionType() {
    return this.getStringAttribute('rule_action_type');
  }
  public set ruleActionType(value: string) {
    this._ruleActionType = value;
  }
  public resetRuleActionType() {
    this._ruleActionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionTypeInput() {
    return this._ruleActionType;
  }

  // rule_expression - computed: false, optional: true, required: false
  private _ruleExpression?: string; 
  public get ruleExpression() {
    return this.getStringAttribute('rule_expression');
  }
  public set ruleExpression(value: string) {
    this._ruleExpression = value;
  }
  public resetRuleExpression() {
    this._ruleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleExpressionInput() {
    return this._ruleExpression;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_target_type - computed: false, optional: true, required: false
  private _ruleTargetType?: string; 
  public get ruleTargetType() {
    return this.getStringAttribute('rule_target_type');
  }
  public set ruleTargetType(value: string) {
    this._ruleTargetType = value;
  }
  public resetRuleTargetType() {
    this._ruleTargetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTargetTypeInput() {
    return this._ruleTargetType;
  }
}

export class DataWorksDiJobTransformationRulesList extends cdktf.ComplexList {
  public internalValue? : DataWorksDiJobTransformationRules[] | cdktf.IResolvable

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
  public get(index: number): DataWorksDiJobTransformationRulesOutputReference {
    return new DataWorksDiJobTransformationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job alicloud_data_works_di_job}
*/
export class DataWorksDiJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_data_works_di_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWorksDiJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWorksDiJob to import
  * @param importFromId The id of the existing DataWorksDiJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWorksDiJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_data_works_di_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/data_works_di_job alicloud_data_works_di_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWorksDiJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataWorksDiJobConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_data_works_di_job',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
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
    this._destinationDataSourceType = config.destinationDataSourceType;
    this._id = config.id;
    this._jobName = config.jobName;
    this._migrationType = config.migrationType;
    this._projectId = config.projectId;
    this._sourceDataSourceType = config.sourceDataSourceType;
    this._destinationDataSourceSettings.internalValue = config.destinationDataSourceSettings;
    this._jobSettings.internalValue = config.jobSettings;
    this._resourceSettings.internalValue = config.resourceSettings;
    this._sourceDataSourceSettings.internalValue = config.sourceDataSourceSettings;
    this._tableMappings.internalValue = config.tableMappings;
    this._timeouts.internalValue = config.timeouts;
    this._transformationRules.internalValue = config.transformationRules;
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

  // destination_data_source_type - computed: false, optional: false, required: true
  private _destinationDataSourceType?: string; 
  public get destinationDataSourceType() {
    return this.getStringAttribute('destination_data_source_type');
  }
  public set destinationDataSourceType(value: string) {
    this._destinationDataSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataSourceTypeInput() {
    return this._destinationDataSourceType;
  }

  // di_job_id - computed: true, optional: false, required: false
  public get diJobId() {
    return this.getNumberAttribute('di_job_id');
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

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // migration_type - computed: false, optional: false, required: true
  private _migrationType?: string; 
  public get migrationType() {
    return this.getStringAttribute('migration_type');
  }
  public set migrationType(value: string) {
    this._migrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationTypeInput() {
    return this._migrationType;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // source_data_source_type - computed: false, optional: false, required: true
  private _sourceDataSourceType?: string; 
  public get sourceDataSourceType() {
    return this.getStringAttribute('source_data_source_type');
  }
  public set sourceDataSourceType(value: string) {
    this._sourceDataSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataSourceTypeInput() {
    return this._sourceDataSourceType;
  }

  // destination_data_source_settings - computed: false, optional: false, required: true
  private _destinationDataSourceSettings = new DataWorksDiJobDestinationDataSourceSettingsList(this, "destination_data_source_settings", false);
  public get destinationDataSourceSettings() {
    return this._destinationDataSourceSettings;
  }
  public putDestinationDataSourceSettings(value: DataWorksDiJobDestinationDataSourceSettings[] | cdktf.IResolvable) {
    this._destinationDataSourceSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataSourceSettingsInput() {
    return this._destinationDataSourceSettings.internalValue;
  }

  // job_settings - computed: false, optional: true, required: false
  private _jobSettings = new DataWorksDiJobJobSettingsOutputReference(this, "job_settings");
  public get jobSettings() {
    return this._jobSettings;
  }
  public putJobSettings(value: DataWorksDiJobJobSettings) {
    this._jobSettings.internalValue = value;
  }
  public resetJobSettings() {
    this._jobSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobSettingsInput() {
    return this._jobSettings.internalValue;
  }

  // resource_settings - computed: false, optional: false, required: true
  private _resourceSettings = new DataWorksDiJobResourceSettingsOutputReference(this, "resource_settings");
  public get resourceSettings() {
    return this._resourceSettings;
  }
  public putResourceSettings(value: DataWorksDiJobResourceSettings) {
    this._resourceSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSettingsInput() {
    return this._resourceSettings.internalValue;
  }

  // source_data_source_settings - computed: false, optional: false, required: true
  private _sourceDataSourceSettings = new DataWorksDiJobSourceDataSourceSettingsList(this, "source_data_source_settings", false);
  public get sourceDataSourceSettings() {
    return this._sourceDataSourceSettings;
  }
  public putSourceDataSourceSettings(value: DataWorksDiJobSourceDataSourceSettings[] | cdktf.IResolvable) {
    this._sourceDataSourceSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataSourceSettingsInput() {
    return this._sourceDataSourceSettings.internalValue;
  }

  // table_mappings - computed: false, optional: false, required: true
  private _tableMappings = new DataWorksDiJobTableMappingsList(this, "table_mappings", false);
  public get tableMappings() {
    return this._tableMappings;
  }
  public putTableMappings(value: DataWorksDiJobTableMappings[] | cdktf.IResolvable) {
    this._tableMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMappingsInput() {
    return this._tableMappings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataWorksDiJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataWorksDiJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // transformation_rules - computed: false, optional: true, required: false
  private _transformationRules = new DataWorksDiJobTransformationRulesList(this, "transformation_rules", false);
  public get transformationRules() {
    return this._transformationRules;
  }
  public putTransformationRules(value: DataWorksDiJobTransformationRules[] | cdktf.IResolvable) {
    this._transformationRules.internalValue = value;
  }
  public resetTransformationRules() {
    this._transformationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationRulesInput() {
    return this._transformationRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_data_source_type: cdktf.stringToTerraform(this._destinationDataSourceType),
      id: cdktf.stringToTerraform(this._id),
      job_name: cdktf.stringToTerraform(this._jobName),
      migration_type: cdktf.stringToTerraform(this._migrationType),
      project_id: cdktf.numberToTerraform(this._projectId),
      source_data_source_type: cdktf.stringToTerraform(this._sourceDataSourceType),
      destination_data_source_settings: cdktf.listMapper(dataWorksDiJobDestinationDataSourceSettingsToTerraform, true)(this._destinationDataSourceSettings.internalValue),
      job_settings: dataWorksDiJobJobSettingsToTerraform(this._jobSettings.internalValue),
      resource_settings: dataWorksDiJobResourceSettingsToTerraform(this._resourceSettings.internalValue),
      source_data_source_settings: cdktf.listMapper(dataWorksDiJobSourceDataSourceSettingsToTerraform, true)(this._sourceDataSourceSettings.internalValue),
      table_mappings: cdktf.listMapper(dataWorksDiJobTableMappingsToTerraform, true)(this._tableMappings.internalValue),
      timeouts: dataWorksDiJobTimeoutsToTerraform(this._timeouts.internalValue),
      transformation_rules: cdktf.listMapper(dataWorksDiJobTransformationRulesToTerraform, true)(this._transformationRules.internalValue),
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
      destination_data_source_type: {
        value: cdktf.stringToHclTerraform(this._destinationDataSourceType),
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
      job_name: {
        value: cdktf.stringToHclTerraform(this._jobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_type: {
        value: cdktf.stringToHclTerraform(this._migrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_data_source_type: {
        value: cdktf.stringToHclTerraform(this._sourceDataSourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_data_source_settings: {
        value: cdktf.listMapperHcl(dataWorksDiJobDestinationDataSourceSettingsToHclTerraform, true)(this._destinationDataSourceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataWorksDiJobDestinationDataSourceSettingsList",
      },
      job_settings: {
        value: dataWorksDiJobJobSettingsToHclTerraform(this._jobSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataWorksDiJobJobSettingsList",
      },
      resource_settings: {
        value: dataWorksDiJobResourceSettingsToHclTerraform(this._resourceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataWorksDiJobResourceSettingsList",
      },
      source_data_source_settings: {
        value: cdktf.listMapperHcl(dataWorksDiJobSourceDataSourceSettingsToHclTerraform, true)(this._sourceDataSourceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataWorksDiJobSourceDataSourceSettingsList",
      },
      table_mappings: {
        value: cdktf.listMapperHcl(dataWorksDiJobTableMappingsToHclTerraform, true)(this._tableMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataWorksDiJobTableMappingsList",
      },
      timeouts: {
        value: dataWorksDiJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataWorksDiJobTimeouts",
      },
      transformation_rules: {
        value: cdktf.listMapperHcl(dataWorksDiJobTransformationRulesToHclTerraform, true)(this._transformationRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataWorksDiJobTransformationRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
