// https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoderWorkspacePresetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether this preset should be selected by default when creating a workspace. Only one preset per template can be marked as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#default DataCoderWorkspacePreset#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Describe what this preset does.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#description DataCoderWorkspacePreset#description}
  */
  readonly description?: string;
  /**
  * A URL to an icon that will display in the dashboard. View built-in icons [here](https://github.com/coder/coder/tree/main/site/static/icon). Use a built-in icon with `"${data.coder_workspace.me.access_url}/icon/<path>"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#icon DataCoderWorkspacePreset#icon}
  */
  readonly icon?: string;
  /**
  * The name of the workspace preset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#name DataCoderWorkspacePreset#name}
  */
  readonly name: string;
  /**
  * Workspace parameters that will be set by the workspace preset. For simple templates that only need prebuilds, you may define a preset with zero parameters. Because workspace parameters may change between Coder template versions, preset parameters are allowed to define values for parameters that do not exist in the current template version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#parameters DataCoderWorkspacePreset#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * prebuilds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#prebuilds DataCoderWorkspacePreset#prebuilds}
  */
  readonly prebuilds?: DataCoderWorkspacePresetPrebuilds;
}
export interface DataCoderWorkspacePresetPrebuildsExpirationPolicy {
  /**
  * Time in seconds after which an unclaimed prebuild is considered expired and eligible for cleanup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#ttl DataCoderWorkspacePreset#ttl}
  */
  readonly ttl: number;
}

export function dataCoderWorkspacePresetPrebuildsExpirationPolicyToTerraform(struct?: DataCoderWorkspacePresetPrebuildsExpirationPolicyOutputReference | DataCoderWorkspacePresetPrebuildsExpirationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function dataCoderWorkspacePresetPrebuildsExpirationPolicyToHclTerraform(struct?: DataCoderWorkspacePresetPrebuildsExpirationPolicyOutputReference | DataCoderWorkspacePresetPrebuildsExpirationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCoderWorkspacePresetPrebuildsExpirationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCoderWorkspacePresetPrebuildsExpirationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoderWorkspacePresetPrebuildsExpirationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ttl = value.ttl;
    }
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface DataCoderWorkspacePresetPrebuildsSchedulingSchedule {
  /**
  * A cron expression that defines when this schedule should be active. The cron expression must be in the format "* HOUR DOM MONTH DAY-OF-WEEK" where HOUR is 0-23, DOM (day-of-month) is 1-31, MONTH is 1-12, and DAY-OF-WEEK is 0-6 (Sunday-Saturday). The minute field must be "*" to ensure the schedule covers entire hours rather than specific minute intervals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#cron DataCoderWorkspacePreset#cron}
  */
  readonly cron: string;
  /**
  * The number of prebuild instances to maintain during this schedule period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#instances DataCoderWorkspacePreset#instances}
  */
  readonly instances: number;
}

export function dataCoderWorkspacePresetPrebuildsSchedulingScheduleToTerraform(struct?: DataCoderWorkspacePresetPrebuildsSchedulingSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron: cdktf.stringToTerraform(struct!.cron),
    instances: cdktf.numberToTerraform(struct!.instances),
  }
}


export function dataCoderWorkspacePresetPrebuildsSchedulingScheduleToHclTerraform(struct?: DataCoderWorkspacePresetPrebuildsSchedulingSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron: {
      value: cdktf.stringToHclTerraform(struct!.cron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instances: {
      value: cdktf.numberToHclTerraform(struct!.instances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCoderWorkspacePresetPrebuildsSchedulingScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoderWorkspacePresetPrebuildsSchedulingSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoderWorkspacePresetPrebuildsSchedulingSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cron = undefined;
      this._instances = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cron = value.cron;
      this._instances = value.instances;
    }
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // instances - computed: false, optional: false, required: true
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }
}

export class DataCoderWorkspacePresetPrebuildsSchedulingScheduleList extends cdktf.ComplexList {
  public internalValue? : DataCoderWorkspacePresetPrebuildsSchedulingSchedule[] | cdktf.IResolvable

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
  public get(index: number): DataCoderWorkspacePresetPrebuildsSchedulingScheduleOutputReference {
    return new DataCoderWorkspacePresetPrebuildsSchedulingScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoderWorkspacePresetPrebuildsScheduling {
  /**
  * The timezone to use for the prebuild schedules (e.g., "UTC", "America/New_York"). 
  * Timezone must be a valid timezone in the IANA timezone database. 
  * See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for a complete list of valid timezone identifiers and https://www.iana.org/time-zones for the official IANA timezone database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#timezone DataCoderWorkspacePreset#timezone}
  */
  readonly timezone: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#schedule DataCoderWorkspacePreset#schedule}
  */
  readonly schedule: DataCoderWorkspacePresetPrebuildsSchedulingSchedule[] | cdktf.IResolvable;
}

export function dataCoderWorkspacePresetPrebuildsSchedulingToTerraform(struct?: DataCoderWorkspacePresetPrebuildsSchedulingOutputReference | DataCoderWorkspacePresetPrebuildsScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timezone: cdktf.stringToTerraform(struct!.timezone),
    schedule: cdktf.listMapper(dataCoderWorkspacePresetPrebuildsSchedulingScheduleToTerraform, true)(struct!.schedule),
  }
}


export function dataCoderWorkspacePresetPrebuildsSchedulingToHclTerraform(struct?: DataCoderWorkspacePresetPrebuildsSchedulingOutputReference | DataCoderWorkspacePresetPrebuildsScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.listMapperHcl(dataCoderWorkspacePresetPrebuildsSchedulingScheduleToHclTerraform, true)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DataCoderWorkspacePresetPrebuildsSchedulingScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCoderWorkspacePresetPrebuildsSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCoderWorkspacePresetPrebuildsScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoderWorkspacePresetPrebuildsScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timezone = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timezone = value.timezone;
      this._schedule.internalValue = value.schedule;
    }
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new DataCoderWorkspacePresetPrebuildsSchedulingScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataCoderWorkspacePresetPrebuildsSchedulingSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface DataCoderWorkspacePresetPrebuilds {
  /**
  * The number of workspaces to keep in reserve for this preset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#instances DataCoderWorkspacePreset#instances}
  */
  readonly instances: number;
  /**
  * expiration_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#expiration_policy DataCoderWorkspacePreset#expiration_policy}
  */
  readonly expirationPolicy?: DataCoderWorkspacePresetPrebuildsExpirationPolicy;
  /**
  * scheduling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#scheduling DataCoderWorkspacePreset#scheduling}
  */
  readonly scheduling?: DataCoderWorkspacePresetPrebuildsScheduling;
}

export function dataCoderWorkspacePresetPrebuildsToTerraform(struct?: DataCoderWorkspacePresetPrebuildsOutputReference | DataCoderWorkspacePresetPrebuilds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instances: cdktf.numberToTerraform(struct!.instances),
    expiration_policy: dataCoderWorkspacePresetPrebuildsExpirationPolicyToTerraform(struct!.expirationPolicy),
    scheduling: dataCoderWorkspacePresetPrebuildsSchedulingToTerraform(struct!.scheduling),
  }
}


export function dataCoderWorkspacePresetPrebuildsToHclTerraform(struct?: DataCoderWorkspacePresetPrebuildsOutputReference | DataCoderWorkspacePresetPrebuilds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instances: {
      value: cdktf.numberToHclTerraform(struct!.instances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expiration_policy: {
      value: dataCoderWorkspacePresetPrebuildsExpirationPolicyToHclTerraform(struct!.expirationPolicy),
      isBlock: true,
      type: "set",
      storageClassType: "DataCoderWorkspacePresetPrebuildsExpirationPolicyList",
    },
    scheduling: {
      value: dataCoderWorkspacePresetPrebuildsSchedulingToHclTerraform(struct!.scheduling),
      isBlock: true,
      type: "list",
      storageClassType: "DataCoderWorkspacePresetPrebuildsSchedulingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCoderWorkspacePresetPrebuildsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCoderWorkspacePresetPrebuilds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._expirationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationPolicy = this._expirationPolicy?.internalValue;
    }
    if (this._scheduling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduling = this._scheduling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoderWorkspacePresetPrebuilds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instances = undefined;
      this._expirationPolicy.internalValue = undefined;
      this._scheduling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instances = value.instances;
      this._expirationPolicy.internalValue = value.expirationPolicy;
      this._scheduling.internalValue = value.scheduling;
    }
  }

  // instances - computed: false, optional: false, required: true
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // expiration_policy - computed: false, optional: true, required: false
  private _expirationPolicy = new DataCoderWorkspacePresetPrebuildsExpirationPolicyOutputReference(this, "expiration_policy");
  public get expirationPolicy() {
    return this._expirationPolicy;
  }
  public putExpirationPolicy(value: DataCoderWorkspacePresetPrebuildsExpirationPolicy) {
    this._expirationPolicy.internalValue = value;
  }
  public resetExpirationPolicy() {
    this._expirationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationPolicyInput() {
    return this._expirationPolicy.internalValue;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new DataCoderWorkspacePresetPrebuildsSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: DataCoderWorkspacePresetPrebuildsScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset coder_workspace_preset}
*/
export class DataCoderWorkspacePreset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coder_workspace_preset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoderWorkspacePreset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoderWorkspacePreset to import
  * @param importFromId The id of the existing DataCoderWorkspacePreset that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoderWorkspacePreset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coder_workspace_preset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_preset coder_workspace_preset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoderWorkspacePresetConfig
  */
  public constructor(scope: Construct, id: string, config: DataCoderWorkspacePresetConfig) {
    super(scope, id, {
      terraformResourceType: 'coder_workspace_preset',
      terraformGeneratorMetadata: {
        providerName: 'coder',
        providerVersion: '2.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._description = config.description;
    this._icon = config.icon;
    this._name = config.name;
    this._parameters = config.parameters;
    this._prebuilds.internalValue = config.prebuilds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

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

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // prebuilds - computed: false, optional: true, required: false
  private _prebuilds = new DataCoderWorkspacePresetPrebuildsOutputReference(this, "prebuilds");
  public get prebuilds() {
    return this._prebuilds;
  }
  public putPrebuilds(value: DataCoderWorkspacePresetPrebuilds) {
    this._prebuilds.internalValue = value;
  }
  public resetPrebuilds() {
    this._prebuilds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prebuildsInput() {
    return this._prebuilds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      icon: cdktf.stringToTerraform(this._icon),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      prebuilds: dataCoderWorkspacePresetPrebuildsToTerraform(this._prebuilds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      prebuilds: {
        value: dataCoderWorkspacePresetPrebuildsToHclTerraform(this._prebuilds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataCoderWorkspacePresetPrebuildsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
