// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAquasecIntegrationRegistriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically clean up that don't match the pull criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#advanced_settings_cleanup DataAquasecIntegrationRegistries#advanced_settings_cleanup}
  */
  readonly advancedSettingsCleanup?: boolean | cdktf.IResolvable;
  /**
  * List of image patterns to pull always
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#always_pull_patterns DataAquasecIntegrationRegistries#always_pull_patterns}
  */
  readonly alwaysPullPatterns?: string[];
  /**
  * The architecture of the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#architecture DataAquasecIntegrationRegistries#architecture}
  */
  readonly architecture?: string;
  /**
  * Auto pull latest xff enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#auto_pull_latest_xff_enabled DataAquasecIntegrationRegistries#auto_pull_latest_xff_enabled}
  */
  readonly autoPullLatestXffEnabled?: boolean | cdktf.IResolvable;
  /**
  * The client certificate for the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#client_cert DataAquasecIntegrationRegistries#client_cert}
  */
  readonly clientCert?: string;
  /**
  * The client key for the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#client_key DataAquasecIntegrationRegistries#client_key}
  */
  readonly clientKey?: string;
  /**
  * The cloud resource of the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#cloud_resources DataAquasecIntegrationRegistries#cloud_resources}
  */
  readonly cloudResources?: string[];
  /**
  * The error message of the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#error_msg DataAquasecIntegrationRegistries#error_msg}
  */
  readonly errorMsg?: string;
  /**
  * To identify and ignore supersonic client calls initiated from OOTB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#force_ootb DataAquasecIntegrationRegistries#force_ootb}
  */
  readonly forceOotb?: boolean | cdktf.IResolvable;
  /**
  * Whether to force save the registry even if the test connection fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#force_save DataAquasecIntegrationRegistries#force_save}
  */
  readonly forceSave?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#id DataAquasecIntegrationRegistries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Additional condition for pulling and rescanning images, Defaults to 'none'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#image_creation_date_condition DataAquasecIntegrationRegistries#image_creation_date_condition}
  */
  readonly imageCreationDateCondition?: string;
  /**
  * The S3 prefixes for images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#image_s3_prefixes DataAquasecIntegrationRegistries#image_s3_prefixes}
  */
  readonly imageS3Prefixes?: string[];
  /**
  * Whether the architecture is the system default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#is_architecture_system_default DataAquasecIntegrationRegistries#is_architecture_system_default}
  */
  readonly isArchitectureSystemDefault?: boolean | cdktf.IResolvable;
  /**
  * The last time the registry was modified in UNIX time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#lastupdate DataAquasecIntegrationRegistries#lastupdate}
  */
  readonly lastupdate?: number;
  /**
  * The name of the registry; string, required - this will be treated as the registry's ID, so choose a simple alphanumerical name without special signs and spaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#name DataAquasecIntegrationRegistries#name}
  */
  readonly name: string;
  /**
  * Enable mutual TLS for Sonatype Nexus Repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#nexus_mtts_ff_enabled DataAquasecIntegrationRegistries#nexus_mtts_ff_enabled}
  */
  readonly nexusMttsFfEnabled?: boolean | cdktf.IResolvable;
  /**
  * Permission action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#permission DataAquasecIntegrationRegistries#permission}
  */
  readonly permission?: string;
  /**
  * When auto pull image enabled, sets maximum age of auto pulled images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#pull_image_age DataAquasecIntegrationRegistries#pull_image_age}
  */
  readonly pullImageAge?: string;
  /**
  * When auto pull image enabled, sets maximum age of auto pulled images tags from each repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#pull_image_count DataAquasecIntegrationRegistries#pull_image_count}
  */
  readonly pullImageCount?: number;
  /**
  * List of image tags patterns to pull
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#pull_image_tag_pattern DataAquasecIntegrationRegistries#pull_image_tag_pattern}
  */
  readonly pullImageTagPattern?: string[];
  /**
  * The maximum number of tags for auto pull
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#pull_max_tags DataAquasecIntegrationRegistries#pull_max_tags}
  */
  readonly pullMaxTags?: number;
  /**
  * Patterns for repositories to be pulled from auto pull
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#pull_repo_patterns DataAquasecIntegrationRegistries#pull_repo_patterns}
  */
  readonly pullRepoPatterns?: string[];
  /**
  * List of image patterns to exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#pull_repo_patterns_excluded DataAquasecIntegrationRegistries#pull_repo_patterns_excluded}
  */
  readonly pullRepoPatternsExcluded?: string[];
  /**
  * Patterns for tags to be pulled from auto pull
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#pull_tags_pattern DataAquasecIntegrationRegistries#pull_tags_pattern}
  */
  readonly pullTagsPattern?: string[];
  /**
  * Registry scan timeout in Minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#registry_scan_timeout DataAquasecIntegrationRegistries#registry_scan_timeout}
  */
  readonly registryScanTimeout?: number;
  /**
  * List of scanner names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#scanner_name DataAquasecIntegrationRegistries#scanner_name}
  */
  readonly scannerName?: string[];
  /**
  * Scanner type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#scanner_type DataAquasecIntegrationRegistries#scanner_type}
  */
  readonly scannerType?: string;
  /**
  * auto_scan_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#auto_scan_time DataAquasecIntegrationRegistries#auto_scan_time}
  */
  readonly autoScanTime?: DataAquasecIntegrationRegistriesAutoScanTime[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#options DataAquasecIntegrationRegistries#options}
  */
  readonly options?: DataAquasecIntegrationRegistriesOptions[] | cdktf.IResolvable;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#webhook DataAquasecIntegrationRegistries#webhook}
  */
  readonly webhook?: DataAquasecIntegrationRegistriesWebhook[] | cdktf.IResolvable;
}
export interface DataAquasecIntegrationRegistriesAutoScanTime {
  /**
  * The day for auto pull
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#auto_pull_day DataAquasecIntegrationRegistries#auto_pull_day}
  */
  readonly autoPullDay?: number;
  /**
  * Number of iterations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#iteration DataAquasecIntegrationRegistries#iteration}
  */
  readonly iteration?: number;
  /**
  * The type of iteration (day, week, month, year)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#iteration_type DataAquasecIntegrationRegistries#iteration_type}
  */
  readonly iterationType?: string;
  /**
  * the time for auto pull
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#time DataAquasecIntegrationRegistries#time}
  */
  readonly time?: string;
  /**
  * The days of week for auto pull
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#week_days DataAquasecIntegrationRegistries#week_days}
  */
  readonly weekDays?: string[];
}

export function dataAquasecIntegrationRegistriesAutoScanTimeToTerraform(struct?: DataAquasecIntegrationRegistriesAutoScanTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_pull_day: cdktf.numberToTerraform(struct!.autoPullDay),
    iteration: cdktf.numberToTerraform(struct!.iteration),
    iteration_type: cdktf.stringToTerraform(struct!.iterationType),
    time: cdktf.stringToTerraform(struct!.time),
    week_days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekDays),
  }
}


export function dataAquasecIntegrationRegistriesAutoScanTimeToHclTerraform(struct?: DataAquasecIntegrationRegistriesAutoScanTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_pull_day: {
      value: cdktf.numberToHclTerraform(struct!.autoPullDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iteration: {
      value: cdktf.numberToHclTerraform(struct!.iteration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iteration_type: {
      value: cdktf.stringToHclTerraform(struct!.iterationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekDays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecIntegrationRegistriesAutoScanTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecIntegrationRegistriesAutoScanTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPullDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPullDay = this._autoPullDay;
    }
    if (this._iteration !== undefined) {
      hasAnyValues = true;
      internalValueResult.iteration = this._iteration;
    }
    if (this._iterationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.iterationType = this._iterationType;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._weekDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDays = this._weekDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecIntegrationRegistriesAutoScanTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoPullDay = undefined;
      this._iteration = undefined;
      this._iterationType = undefined;
      this._time = undefined;
      this._weekDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoPullDay = value.autoPullDay;
      this._iteration = value.iteration;
      this._iterationType = value.iterationType;
      this._time = value.time;
      this._weekDays = value.weekDays;
    }
  }

  // auto_pull_day - computed: true, optional: true, required: false
  private _autoPullDay?: number; 
  public get autoPullDay() {
    return this.getNumberAttribute('auto_pull_day');
  }
  public set autoPullDay(value: number) {
    this._autoPullDay = value;
  }
  public resetAutoPullDay() {
    this._autoPullDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPullDayInput() {
    return this._autoPullDay;
  }

  // iteration - computed: true, optional: true, required: false
  private _iteration?: number; 
  public get iteration() {
    return this.getNumberAttribute('iteration');
  }
  public set iteration(value: number) {
    this._iteration = value;
  }
  public resetIteration() {
    this._iteration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iterationInput() {
    return this._iteration;
  }

  // iteration_type - computed: true, optional: true, required: false
  private _iterationType?: string; 
  public get iterationType() {
    return this.getStringAttribute('iteration_type');
  }
  public set iterationType(value: string) {
    this._iterationType = value;
  }
  public resetIterationType() {
    this._iterationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iterationTypeInput() {
    return this._iterationType;
  }

  // time - computed: true, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // week_days - computed: false, optional: true, required: false
  private _weekDays?: string[]; 
  public get weekDays() {
    return this.getListAttribute('week_days');
  }
  public set weekDays(value: string[]) {
    this._weekDays = value;
  }
  public resetWeekDays() {
    this._weekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysInput() {
    return this._weekDays;
  }
}

export class DataAquasecIntegrationRegistriesAutoScanTimeList extends cdktf.ComplexList {
  public internalValue? : DataAquasecIntegrationRegistriesAutoScanTime[] | cdktf.IResolvable

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
  public get(index: number): DataAquasecIntegrationRegistriesAutoScanTimeOutputReference {
    return new DataAquasecIntegrationRegistriesAutoScanTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecIntegrationRegistriesOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#option DataAquasecIntegrationRegistries#option}
  */
  readonly option?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#value DataAquasecIntegrationRegistries#value}
  */
  readonly value?: string;
}

export function dataAquasecIntegrationRegistriesOptionsToTerraform(struct?: DataAquasecIntegrationRegistriesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataAquasecIntegrationRegistriesOptionsToHclTerraform(struct?: DataAquasecIntegrationRegistriesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
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

export class DataAquasecIntegrationRegistriesOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecIntegrationRegistriesOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecIntegrationRegistriesOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._option = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._option = value.option;
      this._value = value.value;
    }
  }

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
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

export class DataAquasecIntegrationRegistriesOptionsList extends cdktf.ComplexList {
  public internalValue? : DataAquasecIntegrationRegistriesOptions[] | cdktf.IResolvable

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
  public get(index: number): DataAquasecIntegrationRegistriesOptionsOutputReference {
    return new DataAquasecIntegrationRegistriesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecIntegrationRegistriesWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#auth_token DataAquasecIntegrationRegistries#auth_token}
  */
  readonly authToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#enabled DataAquasecIntegrationRegistries#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#un_quarantine DataAquasecIntegrationRegistries#un_quarantine}
  */
  readonly unQuarantine?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#url DataAquasecIntegrationRegistries#url}
  */
  readonly url?: string;
}

export function dataAquasecIntegrationRegistriesWebhookToTerraform(struct?: DataAquasecIntegrationRegistriesWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    un_quarantine: cdktf.booleanToTerraform(struct!.unQuarantine),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataAquasecIntegrationRegistriesWebhookToHclTerraform(struct?: DataAquasecIntegrationRegistriesWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    un_quarantine: {
      value: cdktf.booleanToHclTerraform(struct!.unQuarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecIntegrationRegistriesWebhookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecIntegrationRegistriesWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._unQuarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.unQuarantine = this._unQuarantine;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecIntegrationRegistriesWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authToken = undefined;
      this._enabled = undefined;
      this._unQuarantine = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authToken = value.authToken;
      this._enabled = value.enabled;
      this._unQuarantine = value.unQuarantine;
      this._url = value.url;
    }
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // un_quarantine - computed: false, optional: true, required: false
  private _unQuarantine?: boolean | cdktf.IResolvable; 
  public get unQuarantine() {
    return this.getBooleanAttribute('un_quarantine');
  }
  public set unQuarantine(value: boolean | cdktf.IResolvable) {
    this._unQuarantine = value;
  }
  public resetUnQuarantine() {
    this._unQuarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unQuarantineInput() {
    return this._unQuarantine;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataAquasecIntegrationRegistriesWebhookList extends cdktf.ComplexList {
  public internalValue? : DataAquasecIntegrationRegistriesWebhook[] | cdktf.IResolvable

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
  public get(index: number): DataAquasecIntegrationRegistriesWebhookOutputReference {
    return new DataAquasecIntegrationRegistriesWebhookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries aquasec_integration_registries}
*/
export class DataAquasecIntegrationRegistries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_integration_registries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAquasecIntegrationRegistries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAquasecIntegrationRegistries to import
  * @param importFromId The id of the existing DataAquasecIntegrationRegistries that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAquasecIntegrationRegistries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_integration_registries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/integration_registries aquasec_integration_registries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAquasecIntegrationRegistriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAquasecIntegrationRegistriesConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_integration_registries',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedSettingsCleanup = config.advancedSettingsCleanup;
    this._alwaysPullPatterns = config.alwaysPullPatterns;
    this._architecture = config.architecture;
    this._autoPullLatestXffEnabled = config.autoPullLatestXffEnabled;
    this._clientCert = config.clientCert;
    this._clientKey = config.clientKey;
    this._cloudResources = config.cloudResources;
    this._errorMsg = config.errorMsg;
    this._forceOotb = config.forceOotb;
    this._forceSave = config.forceSave;
    this._id = config.id;
    this._imageCreationDateCondition = config.imageCreationDateCondition;
    this._imageS3Prefixes = config.imageS3Prefixes;
    this._isArchitectureSystemDefault = config.isArchitectureSystemDefault;
    this._lastupdate = config.lastupdate;
    this._name = config.name;
    this._nexusMttsFfEnabled = config.nexusMttsFfEnabled;
    this._permission = config.permission;
    this._pullImageAge = config.pullImageAge;
    this._pullImageCount = config.pullImageCount;
    this._pullImageTagPattern = config.pullImageTagPattern;
    this._pullMaxTags = config.pullMaxTags;
    this._pullRepoPatterns = config.pullRepoPatterns;
    this._pullRepoPatternsExcluded = config.pullRepoPatternsExcluded;
    this._pullTagsPattern = config.pullTagsPattern;
    this._registryScanTimeout = config.registryScanTimeout;
    this._scannerName = config.scannerName;
    this._scannerType = config.scannerType;
    this._autoScanTime.internalValue = config.autoScanTime;
    this._options.internalValue = config.options;
    this._webhook.internalValue = config.webhook;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_settings_cleanup - computed: false, optional: true, required: false
  private _advancedSettingsCleanup?: boolean | cdktf.IResolvable; 
  public get advancedSettingsCleanup() {
    return this.getBooleanAttribute('advanced_settings_cleanup');
  }
  public set advancedSettingsCleanup(value: boolean | cdktf.IResolvable) {
    this._advancedSettingsCleanup = value;
  }
  public resetAdvancedSettingsCleanup() {
    this._advancedSettingsCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsCleanupInput() {
    return this._advancedSettingsCleanup;
  }

  // always_pull_patterns - computed: false, optional: true, required: false
  private _alwaysPullPatterns?: string[]; 
  public get alwaysPullPatterns() {
    return this.getListAttribute('always_pull_patterns');
  }
  public set alwaysPullPatterns(value: string[]) {
    this._alwaysPullPatterns = value;
  }
  public resetAlwaysPullPatterns() {
    this._alwaysPullPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysPullPatternsInput() {
    return this._alwaysPullPatterns;
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // auto_cleanup - computed: true, optional: false, required: false
  public get autoCleanup() {
    return this.getBooleanAttribute('auto_cleanup');
  }

  // auto_pull - computed: true, optional: false, required: false
  public get autoPull() {
    return this.getBooleanAttribute('auto_pull');
  }

  // auto_pull_in_progress - computed: true, optional: false, required: false
  public get autoPullInProgress() {
    return this.getBooleanAttribute('auto_pull_in_progress');
  }

  // auto_pull_interval - computed: true, optional: false, required: false
  public get autoPullInterval() {
    return this.getNumberAttribute('auto_pull_interval');
  }

  // auto_pull_latest_xff_enabled - computed: false, optional: true, required: false
  private _autoPullLatestXffEnabled?: boolean | cdktf.IResolvable; 
  public get autoPullLatestXffEnabled() {
    return this.getBooleanAttribute('auto_pull_latest_xff_enabled');
  }
  public set autoPullLatestXffEnabled(value: boolean | cdktf.IResolvable) {
    this._autoPullLatestXffEnabled = value;
  }
  public resetAutoPullLatestXffEnabled() {
    this._autoPullLatestXffEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPullLatestXffEnabledInput() {
    return this._autoPullLatestXffEnabled;
  }

  // auto_pull_max - computed: true, optional: false, required: false
  public get autoPullMax() {
    return this.getNumberAttribute('auto_pull_max');
  }

  // auto_pull_processed_page_number - computed: true, optional: false, required: false
  public get autoPullProcessedPageNumber() {
    return this.getNumberAttribute('auto_pull_processed_page_number');
  }

  // auto_pull_rescan - computed: true, optional: false, required: false
  public get autoPullRescan() {
    return this.getBooleanAttribute('auto_pull_rescan');
  }

  // auto_pull_time - computed: true, optional: false, required: false
  public get autoPullTime() {
    return this.getStringAttribute('auto_pull_time');
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // cloud_resources - computed: false, optional: true, required: false
  private _cloudResources?: string[]; 
  public get cloudResources() {
    return this.getListAttribute('cloud_resources');
  }
  public set cloudResources(value: string[]) {
    this._cloudResources = value;
  }
  public resetCloudResources() {
    this._cloudResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudResourcesInput() {
    return this._cloudResources;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detected_type - computed: true, optional: false, required: false
  public get detectedType() {
    return this.getNumberAttribute('detected_type');
  }

  // error_msg - computed: false, optional: true, required: false
  private _errorMsg?: string; 
  public get errorMsg() {
    return this.getStringAttribute('error_msg');
  }
  public set errorMsg(value: string) {
    this._errorMsg = value;
  }
  public resetErrorMsg() {
    this._errorMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMsgInput() {
    return this._errorMsg;
  }

  // force_ootb - computed: false, optional: true, required: false
  private _forceOotb?: boolean | cdktf.IResolvable; 
  public get forceOotb() {
    return this.getBooleanAttribute('force_ootb');
  }
  public set forceOotb(value: boolean | cdktf.IResolvable) {
    this._forceOotb = value;
  }
  public resetForceOotb() {
    this._forceOotb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceOotbInput() {
    return this._forceOotb;
  }

  // force_save - computed: false, optional: true, required: false
  private _forceSave?: boolean | cdktf.IResolvable; 
  public get forceSave() {
    return this.getBooleanAttribute('force_save');
  }
  public set forceSave(value: boolean | cdktf.IResolvable) {
    this._forceSave = value;
  }
  public resetForceSave() {
    this._forceSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSaveInput() {
    return this._forceSave;
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

  // image_creation_date_condition - computed: true, optional: true, required: false
  private _imageCreationDateCondition?: string; 
  public get imageCreationDateCondition() {
    return this.getStringAttribute('image_creation_date_condition');
  }
  public set imageCreationDateCondition(value: string) {
    this._imageCreationDateCondition = value;
  }
  public resetImageCreationDateCondition() {
    this._imageCreationDateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCreationDateConditionInput() {
    return this._imageCreationDateCondition;
  }

  // image_s3_prefixes - computed: false, optional: true, required: false
  private _imageS3Prefixes?: string[]; 
  public get imageS3Prefixes() {
    return this.getListAttribute('image_s3_prefixes');
  }
  public set imageS3Prefixes(value: string[]) {
    this._imageS3Prefixes = value;
  }
  public resetImageS3Prefixes() {
    this._imageS3Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageS3PrefixesInput() {
    return this._imageS3Prefixes;
  }

  // is_architecture_system_default - computed: false, optional: true, required: false
  private _isArchitectureSystemDefault?: boolean | cdktf.IResolvable; 
  public get isArchitectureSystemDefault() {
    return this.getBooleanAttribute('is_architecture_system_default');
  }
  public set isArchitectureSystemDefault(value: boolean | cdktf.IResolvable) {
    this._isArchitectureSystemDefault = value;
  }
  public resetIsArchitectureSystemDefault() {
    this._isArchitectureSystemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isArchitectureSystemDefaultInput() {
    return this._isArchitectureSystemDefault;
  }

  // is_registry_connected - computed: true, optional: false, required: false
  public get isRegistryConnected() {
    return this.getBooleanAttribute('is_registry_connected');
  }

  // lastupdate - computed: true, optional: true, required: false
  private _lastupdate?: number; 
  public get lastupdate() {
    return this.getNumberAttribute('lastupdate');
  }
  public set lastupdate(value: number) {
    this._lastupdate = value;
  }
  public resetLastupdate() {
    this._lastupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastupdateInput() {
    return this._lastupdate;
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

  // nexus_mtts_ff_enabled - computed: false, optional: true, required: false
  private _nexusMttsFfEnabled?: boolean | cdktf.IResolvable; 
  public get nexusMttsFfEnabled() {
    return this.getBooleanAttribute('nexus_mtts_ff_enabled');
  }
  public set nexusMttsFfEnabled(value: boolean | cdktf.IResolvable) {
    this._nexusMttsFfEnabled = value;
  }
  public resetNexusMttsFfEnabled() {
    this._nexusMttsFfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexusMttsFfEnabledInput() {
    return this._nexusMttsFfEnabled;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // prefixes - computed: true, optional: false, required: false
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }

  // pull_image_age - computed: true, optional: true, required: false
  private _pullImageAge?: string; 
  public get pullImageAge() {
    return this.getStringAttribute('pull_image_age');
  }
  public set pullImageAge(value: string) {
    this._pullImageAge = value;
  }
  public resetPullImageAge() {
    this._pullImageAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullImageAgeInput() {
    return this._pullImageAge;
  }

  // pull_image_count - computed: true, optional: true, required: false
  private _pullImageCount?: number; 
  public get pullImageCount() {
    return this.getNumberAttribute('pull_image_count');
  }
  public set pullImageCount(value: number) {
    this._pullImageCount = value;
  }
  public resetPullImageCount() {
    this._pullImageCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullImageCountInput() {
    return this._pullImageCount;
  }

  // pull_image_tag_pattern - computed: false, optional: true, required: false
  private _pullImageTagPattern?: string[]; 
  public get pullImageTagPattern() {
    return this.getListAttribute('pull_image_tag_pattern');
  }
  public set pullImageTagPattern(value: string[]) {
    this._pullImageTagPattern = value;
  }
  public resetPullImageTagPattern() {
    this._pullImageTagPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullImageTagPatternInput() {
    return this._pullImageTagPattern;
  }

  // pull_max_tags - computed: false, optional: true, required: false
  private _pullMaxTags?: number; 
  public get pullMaxTags() {
    return this.getNumberAttribute('pull_max_tags');
  }
  public set pullMaxTags(value: number) {
    this._pullMaxTags = value;
  }
  public resetPullMaxTags() {
    this._pullMaxTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullMaxTagsInput() {
    return this._pullMaxTags;
  }

  // pull_repo_patterns - computed: false, optional: true, required: false
  private _pullRepoPatterns?: string[]; 
  public get pullRepoPatterns() {
    return this.getListAttribute('pull_repo_patterns');
  }
  public set pullRepoPatterns(value: string[]) {
    this._pullRepoPatterns = value;
  }
  public resetPullRepoPatterns() {
    this._pullRepoPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRepoPatternsInput() {
    return this._pullRepoPatterns;
  }

  // pull_repo_patterns_excluded - computed: false, optional: true, required: false
  private _pullRepoPatternsExcluded?: string[]; 
  public get pullRepoPatternsExcluded() {
    return this.getListAttribute('pull_repo_patterns_excluded');
  }
  public set pullRepoPatternsExcluded(value: string[]) {
    this._pullRepoPatternsExcluded = value;
  }
  public resetPullRepoPatternsExcluded() {
    this._pullRepoPatternsExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRepoPatternsExcludedInput() {
    return this._pullRepoPatternsExcluded;
  }

  // pull_tags_pattern - computed: false, optional: true, required: false
  private _pullTagsPattern?: string[]; 
  public get pullTagsPattern() {
    return this.getListAttribute('pull_tags_pattern');
  }
  public set pullTagsPattern(value: string[]) {
    this._pullTagsPattern = value;
  }
  public resetPullTagsPattern() {
    this._pullTagsPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullTagsPatternInput() {
    return this._pullTagsPattern;
  }

  // registries_type - computed: true, optional: false, required: false
  public get registriesType() {
    return this.getStringAttribute('registries_type');
  }

  // registry_scan_timeout - computed: false, optional: true, required: false
  private _registryScanTimeout?: number; 
  public get registryScanTimeout() {
    return this.getNumberAttribute('registry_scan_timeout');
  }
  public set registryScanTimeout(value: number) {
    this._registryScanTimeout = value;
  }
  public resetRegistryScanTimeout() {
    this._registryScanTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryScanTimeoutInput() {
    return this._registryScanTimeout;
  }

  // scanner_name - computed: true, optional: true, required: false
  private _scannerName?: string[]; 
  public get scannerName() {
    return this.getListAttribute('scanner_name');
  }
  public set scannerName(value: string[]) {
    this._scannerName = value;
  }
  public resetScannerName() {
    this._scannerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannerNameInput() {
    return this._scannerName;
  }

  // scanner_type - computed: true, optional: true, required: false
  private _scannerType?: string; 
  public get scannerType() {
    return this.getStringAttribute('scanner_type');
  }
  public set scannerType(value: string) {
    this._scannerType = value;
  }
  public resetScannerType() {
    this._scannerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannerTypeInput() {
    return this._scannerType;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // auto_scan_time - computed: false, optional: true, required: false
  private _autoScanTime = new DataAquasecIntegrationRegistriesAutoScanTimeList(this, "auto_scan_time", true);
  public get autoScanTime() {
    return this._autoScanTime;
  }
  public putAutoScanTime(value: DataAquasecIntegrationRegistriesAutoScanTime[] | cdktf.IResolvable) {
    this._autoScanTime.internalValue = value;
  }
  public resetAutoScanTime() {
    this._autoScanTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScanTimeInput() {
    return this._autoScanTime.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataAquasecIntegrationRegistriesOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataAquasecIntegrationRegistriesOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new DataAquasecIntegrationRegistriesWebhookList(this, "webhook", true);
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: DataAquasecIntegrationRegistriesWebhook[] | cdktf.IResolvable) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_settings_cleanup: cdktf.booleanToTerraform(this._advancedSettingsCleanup),
      always_pull_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alwaysPullPatterns),
      architecture: cdktf.stringToTerraform(this._architecture),
      auto_pull_latest_xff_enabled: cdktf.booleanToTerraform(this._autoPullLatestXffEnabled),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      client_key: cdktf.stringToTerraform(this._clientKey),
      cloud_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudResources),
      error_msg: cdktf.stringToTerraform(this._errorMsg),
      force_ootb: cdktf.booleanToTerraform(this._forceOotb),
      force_save: cdktf.booleanToTerraform(this._forceSave),
      id: cdktf.stringToTerraform(this._id),
      image_creation_date_condition: cdktf.stringToTerraform(this._imageCreationDateCondition),
      image_s3_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._imageS3Prefixes),
      is_architecture_system_default: cdktf.booleanToTerraform(this._isArchitectureSystemDefault),
      lastupdate: cdktf.numberToTerraform(this._lastupdate),
      name: cdktf.stringToTerraform(this._name),
      nexus_mtts_ff_enabled: cdktf.booleanToTerraform(this._nexusMttsFfEnabled),
      permission: cdktf.stringToTerraform(this._permission),
      pull_image_age: cdktf.stringToTerraform(this._pullImageAge),
      pull_image_count: cdktf.numberToTerraform(this._pullImageCount),
      pull_image_tag_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pullImageTagPattern),
      pull_max_tags: cdktf.numberToTerraform(this._pullMaxTags),
      pull_repo_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pullRepoPatterns),
      pull_repo_patterns_excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pullRepoPatternsExcluded),
      pull_tags_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pullTagsPattern),
      registry_scan_timeout: cdktf.numberToTerraform(this._registryScanTimeout),
      scanner_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scannerName),
      scanner_type: cdktf.stringToTerraform(this._scannerType),
      auto_scan_time: cdktf.listMapper(dataAquasecIntegrationRegistriesAutoScanTimeToTerraform, true)(this._autoScanTime.internalValue),
      options: cdktf.listMapper(dataAquasecIntegrationRegistriesOptionsToTerraform, true)(this._options.internalValue),
      webhook: cdktf.listMapper(dataAquasecIntegrationRegistriesWebhookToTerraform, true)(this._webhook.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_settings_cleanup: {
        value: cdktf.booleanToHclTerraform(this._advancedSettingsCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      always_pull_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alwaysPullPatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      architecture: {
        value: cdktf.stringToHclTerraform(this._architecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_pull_latest_xff_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoPullLatestXffEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key: {
        value: cdktf.stringToHclTerraform(this._clientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudResources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      error_msg: {
        value: cdktf.stringToHclTerraform(this._errorMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_ootb: {
        value: cdktf.booleanToHclTerraform(this._forceOotb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_save: {
        value: cdktf.booleanToHclTerraform(this._forceSave),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_creation_date_condition: {
        value: cdktf.stringToHclTerraform(this._imageCreationDateCondition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_s3_prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._imageS3Prefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_architecture_system_default: {
        value: cdktf.booleanToHclTerraform(this._isArchitectureSystemDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lastupdate: {
        value: cdktf.numberToHclTerraform(this._lastupdate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexus_mtts_ff_enabled: {
        value: cdktf.booleanToHclTerraform(this._nexusMttsFfEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_image_age: {
        value: cdktf.stringToHclTerraform(this._pullImageAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_image_count: {
        value: cdktf.numberToHclTerraform(this._pullImageCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pull_image_tag_pattern: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pullImageTagPattern),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pull_max_tags: {
        value: cdktf.numberToHclTerraform(this._pullMaxTags),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pull_repo_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pullRepoPatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pull_repo_patterns_excluded: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pullRepoPatternsExcluded),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pull_tags_pattern: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pullTagsPattern),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      registry_scan_timeout: {
        value: cdktf.numberToHclTerraform(this._registryScanTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scanner_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scannerName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scanner_type: {
        value: cdktf.stringToHclTerraform(this._scannerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_scan_time: {
        value: cdktf.listMapperHcl(dataAquasecIntegrationRegistriesAutoScanTimeToHclTerraform, true)(this._autoScanTime.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAquasecIntegrationRegistriesAutoScanTimeList",
      },
      options: {
        value: cdktf.listMapperHcl(dataAquasecIntegrationRegistriesOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecIntegrationRegistriesOptionsList",
      },
      webhook: {
        value: cdktf.listMapperHcl(dataAquasecIntegrationRegistriesWebhookToHclTerraform, true)(this._webhook.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAquasecIntegrationRegistriesWebhookList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
