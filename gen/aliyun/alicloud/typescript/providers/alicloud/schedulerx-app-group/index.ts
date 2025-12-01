// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchedulerxAppGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#app_name SchedulerxAppGroup#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#app_type SchedulerxAppGroup#app_type}
  */
  readonly appType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#app_version SchedulerxAppGroup#app_version}
  */
  readonly appVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#delete_jobs SchedulerxAppGroup#delete_jobs}
  */
  readonly deleteJobs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#description SchedulerxAppGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#enable_log SchedulerxAppGroup#enable_log}
  */
  readonly enableLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#group_id SchedulerxAppGroup#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#id SchedulerxAppGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#max_concurrency SchedulerxAppGroup#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#max_jobs SchedulerxAppGroup#max_jobs}
  */
  readonly maxJobs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#monitor_config_json SchedulerxAppGroup#monitor_config_json}
  */
  readonly monitorConfigJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#monitor_contacts_json SchedulerxAppGroup#monitor_contacts_json}
  */
  readonly monitorContactsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#namespace SchedulerxAppGroup#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#namespace_name SchedulerxAppGroup#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#namespace_source SchedulerxAppGroup#namespace_source}
  */
  readonly namespaceSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#schedule_busy_workers SchedulerxAppGroup#schedule_busy_workers}
  */
  readonly scheduleBusyWorkers?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#timeouts SchedulerxAppGroup#timeouts}
  */
  readonly timeouts?: SchedulerxAppGroupTimeouts;
}
export interface SchedulerxAppGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#create SchedulerxAppGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#delete SchedulerxAppGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#update SchedulerxAppGroup#update}
  */
  readonly update?: string;
}

export function schedulerxAppGroupTimeoutsToTerraform(struct?: SchedulerxAppGroupTimeouts | cdktf.IResolvable): any {
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


export function schedulerxAppGroupTimeoutsToHclTerraform(struct?: SchedulerxAppGroupTimeouts | cdktf.IResolvable): any {
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

export class SchedulerxAppGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SchedulerxAppGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SchedulerxAppGroupTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group alicloud_schedulerx_app_group}
*/
export class SchedulerxAppGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_schedulerx_app_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchedulerxAppGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchedulerxAppGroup to import
  * @param importFromId The id of the existing SchedulerxAppGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchedulerxAppGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_schedulerx_app_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/schedulerx_app_group alicloud_schedulerx_app_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchedulerxAppGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SchedulerxAppGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_schedulerx_app_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appName = config.appName;
    this._appType = config.appType;
    this._appVersion = config.appVersion;
    this._deleteJobs = config.deleteJobs;
    this._description = config.description;
    this._enableLog = config.enableLog;
    this._groupId = config.groupId;
    this._id = config.id;
    this._maxConcurrency = config.maxConcurrency;
    this._maxJobs = config.maxJobs;
    this._monitorConfigJson = config.monitorConfigJson;
    this._monitorContactsJson = config.monitorContactsJson;
    this._namespace = config.namespace;
    this._namespaceName = config.namespaceName;
    this._namespaceSource = config.namespaceSource;
    this._scheduleBusyWorkers = config.scheduleBusyWorkers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // app_type - computed: false, optional: true, required: false
  private _appType?: number; 
  public get appType() {
    return this.getNumberAttribute('app_type');
  }
  public set appType(value: number) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // app_version - computed: false, optional: true, required: false
  private _appVersion?: string; 
  public get appVersion() {
    return this.getStringAttribute('app_version');
  }
  public set appVersion(value: string) {
    this._appVersion = value;
  }
  public resetAppVersion() {
    this._appVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appVersionInput() {
    return this._appVersion;
  }

  // delete_jobs - computed: false, optional: true, required: false
  private _deleteJobs?: boolean | cdktf.IResolvable; 
  public get deleteJobs() {
    return this.getBooleanAttribute('delete_jobs');
  }
  public set deleteJobs(value: boolean | cdktf.IResolvable) {
    this._deleteJobs = value;
  }
  public resetDeleteJobs() {
    this._deleteJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteJobsInput() {
    return this._deleteJobs;
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

  // enable_log - computed: false, optional: true, required: false
  private _enableLog?: boolean | cdktf.IResolvable; 
  public get enableLog() {
    return this.getBooleanAttribute('enable_log');
  }
  public set enableLog(value: boolean | cdktf.IResolvable) {
    this._enableLog = value;
  }
  public resetEnableLog() {
    this._enableLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogInput() {
    return this._enableLog;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // max_jobs - computed: false, optional: true, required: false
  private _maxJobs?: number; 
  public get maxJobs() {
    return this.getNumberAttribute('max_jobs');
  }
  public set maxJobs(value: number) {
    this._maxJobs = value;
  }
  public resetMaxJobs() {
    this._maxJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxJobsInput() {
    return this._maxJobs;
  }

  // monitor_config_json - computed: false, optional: true, required: false
  private _monitorConfigJson?: string; 
  public get monitorConfigJson() {
    return this.getStringAttribute('monitor_config_json');
  }
  public set monitorConfigJson(value: string) {
    this._monitorConfigJson = value;
  }
  public resetMonitorConfigJson() {
    this._monitorConfigJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorConfigJsonInput() {
    return this._monitorConfigJson;
  }

  // monitor_contacts_json - computed: false, optional: true, required: false
  private _monitorContactsJson?: string; 
  public get monitorContactsJson() {
    return this.getStringAttribute('monitor_contacts_json');
  }
  public set monitorContactsJson(value: string) {
    this._monitorContactsJson = value;
  }
  public resetMonitorContactsJson() {
    this._monitorContactsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorContactsJsonInput() {
    return this._monitorContactsJson;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // namespace_source - computed: false, optional: true, required: false
  private _namespaceSource?: string; 
  public get namespaceSource() {
    return this.getStringAttribute('namespace_source');
  }
  public set namespaceSource(value: string) {
    this._namespaceSource = value;
  }
  public resetNamespaceSource() {
    this._namespaceSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSourceInput() {
    return this._namespaceSource;
  }

  // schedule_busy_workers - computed: false, optional: true, required: false
  private _scheduleBusyWorkers?: boolean | cdktf.IResolvable; 
  public get scheduleBusyWorkers() {
    return this.getBooleanAttribute('schedule_busy_workers');
  }
  public set scheduleBusyWorkers(value: boolean | cdktf.IResolvable) {
    this._scheduleBusyWorkers = value;
  }
  public resetScheduleBusyWorkers() {
    this._scheduleBusyWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleBusyWorkersInput() {
    return this._scheduleBusyWorkers;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SchedulerxAppGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SchedulerxAppGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      app_type: cdktf.numberToTerraform(this._appType),
      app_version: cdktf.stringToTerraform(this._appVersion),
      delete_jobs: cdktf.booleanToTerraform(this._deleteJobs),
      description: cdktf.stringToTerraform(this._description),
      enable_log: cdktf.booleanToTerraform(this._enableLog),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      max_concurrency: cdktf.numberToTerraform(this._maxConcurrency),
      max_jobs: cdktf.numberToTerraform(this._maxJobs),
      monitor_config_json: cdktf.stringToTerraform(this._monitorConfigJson),
      monitor_contacts_json: cdktf.stringToTerraform(this._monitorContactsJson),
      namespace: cdktf.stringToTerraform(this._namespace),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      namespace_source: cdktf.stringToTerraform(this._namespaceSource),
      schedule_busy_workers: cdktf.booleanToTerraform(this._scheduleBusyWorkers),
      timeouts: schedulerxAppGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_type: {
        value: cdktf.numberToHclTerraform(this._appType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      app_version: {
        value: cdktf.stringToHclTerraform(this._appVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_jobs: {
        value: cdktf.booleanToHclTerraform(this._deleteJobs),
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
      enable_log: {
        value: cdktf.booleanToHclTerraform(this._enableLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      max_concurrency: {
        value: cdktf.numberToHclTerraform(this._maxConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_jobs: {
        value: cdktf.numberToHclTerraform(this._maxJobs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_config_json: {
        value: cdktf.stringToHclTerraform(this._monitorConfigJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_contacts_json: {
        value: cdktf.stringToHclTerraform(this._monitorContactsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_name: {
        value: cdktf.stringToHclTerraform(this._namespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_source: {
        value: cdktf.stringToHclTerraform(this._namespaceSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_busy_workers: {
        value: cdktf.booleanToHclTerraform(this._scheduleBusyWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: schedulerxAppGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SchedulerxAppGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
