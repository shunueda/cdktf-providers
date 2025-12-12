// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackPrometheusV2AlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#id ApsarastackPrometheusV2Alert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#is_check_all ApsarastackPrometheusV2Alert#is_check_all}
  */
  readonly isCheckAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#name ApsarastackPrometheusV2Alert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#notification ApsarastackPrometheusV2Alert#notification}
  */
  readonly notification: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#notify_group_ids ApsarastackPrometheusV2Alert#notify_group_ids}
  */
  readonly notifyGroupIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#notify_interval ApsarastackPrometheusV2Alert#notify_interval}
  */
  readonly notifyInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#notify_recovered ApsarastackPrometheusV2Alert#notify_recovered}
  */
  readonly notifyRecovered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#notify_types ApsarastackPrometheusV2Alert#notify_types}
  */
  readonly notifyTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#recover_notification ApsarastackPrometheusV2Alert#recover_notification}
  */
  readonly recoverNotification: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#tag_set ApsarastackPrometheusV2Alert#tag_set}
  */
  readonly tagSet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#trigger_clusters ApsarastackPrometheusV2Alert#trigger_clusters}
  */
  readonly triggerClusters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#trigger_cron ApsarastackPrometheusV2Alert#trigger_cron}
  */
  readonly triggerCron?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#trigger_period ApsarastackPrometheusV2Alert#trigger_period}
  */
  readonly triggerPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#trigger_promql ApsarastackPrometheusV2Alert#trigger_promql}
  */
  readonly triggerPromql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#trigger_severity ApsarastackPrometheusV2Alert#trigger_severity}
  */
  readonly triggerSeverity: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert apsarastack_prometheus_v2_alert}
*/
export class ApsarastackPrometheusV2Alert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_prometheus_v2_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackPrometheusV2Alert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackPrometheusV2Alert to import
  * @param importFromId The id of the existing ApsarastackPrometheusV2Alert that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackPrometheusV2Alert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_prometheus_v2_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_alert apsarastack_prometheus_v2_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackPrometheusV2AlertConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackPrometheusV2AlertConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_prometheus_v2_alert',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._isCheckAll = config.isCheckAll;
    this._name = config.name;
    this._notification = config.notification;
    this._notifyGroupIds = config.notifyGroupIds;
    this._notifyInterval = config.notifyInterval;
    this._notifyRecovered = config.notifyRecovered;
    this._notifyTypes = config.notifyTypes;
    this._recoverNotification = config.recoverNotification;
    this._tagSet = config.tagSet;
    this._triggerClusters = config.triggerClusters;
    this._triggerCron = config.triggerCron;
    this._triggerPeriod = config.triggerPeriod;
    this._triggerPromql = config.triggerPromql;
    this._triggerSeverity = config.triggerSeverity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_check_all - computed: false, optional: true, required: false
  private _isCheckAll?: boolean | cdktf.IResolvable; 
  public get isCheckAll() {
    return this.getBooleanAttribute('is_check_all');
  }
  public set isCheckAll(value: boolean | cdktf.IResolvable) {
    this._isCheckAll = value;
  }
  public resetIsCheckAll() {
    this._isCheckAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCheckAllInput() {
    return this._isCheckAll;
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

  // notification - computed: false, optional: false, required: true
  private _notification?: string; 
  public get notification() {
    return this.getStringAttribute('notification');
  }
  public set notification(value: string) {
    this._notification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification;
  }

  // notify_group_ids - computed: false, optional: true, required: false
  private _notifyGroupIds?: number[]; 
  public get notifyGroupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('notify_group_ids')));
  }
  public set notifyGroupIds(value: number[]) {
    this._notifyGroupIds = value;
  }
  public resetNotifyGroupIds() {
    this._notifyGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyGroupIdsInput() {
    return this._notifyGroupIds;
  }

  // notify_interval - computed: false, optional: true, required: false
  private _notifyInterval?: string; 
  public get notifyInterval() {
    return this.getStringAttribute('notify_interval');
  }
  public set notifyInterval(value: string) {
    this._notifyInterval = value;
  }
  public resetNotifyInterval() {
    this._notifyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyIntervalInput() {
    return this._notifyInterval;
  }

  // notify_recovered - computed: false, optional: true, required: false
  private _notifyRecovered?: boolean | cdktf.IResolvable; 
  public get notifyRecovered() {
    return this.getBooleanAttribute('notify_recovered');
  }
  public set notifyRecovered(value: boolean | cdktf.IResolvable) {
    this._notifyRecovered = value;
  }
  public resetNotifyRecovered() {
    this._notifyRecovered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyRecoveredInput() {
    return this._notifyRecovered;
  }

  // notify_types - computed: false, optional: true, required: false
  private _notifyTypes?: string[]; 
  public get notifyTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_types'));
  }
  public set notifyTypes(value: string[]) {
    this._notifyTypes = value;
  }
  public resetNotifyTypes() {
    this._notifyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyTypesInput() {
    return this._notifyTypes;
  }

  // recover_notification - computed: false, optional: false, required: true
  private _recoverNotification?: string; 
  public get recoverNotification() {
    return this.getStringAttribute('recover_notification');
  }
  public set recoverNotification(value: string) {
    this._recoverNotification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverNotificationInput() {
    return this._recoverNotification;
  }

  // tag_set - computed: false, optional: true, required: false
  private _tagSet?: string[]; 
  public get tagSet() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_set'));
  }
  public set tagSet(value: string[]) {
    this._tagSet = value;
  }
  public resetTagSet() {
    this._tagSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSetInput() {
    return this._tagSet;
  }

  // trigger_clusters - computed: false, optional: true, required: false
  private _triggerClusters?: string[]; 
  public get triggerClusters() {
    return cdktf.Fn.tolist(this.getListAttribute('trigger_clusters'));
  }
  public set triggerClusters(value: string[]) {
    this._triggerClusters = value;
  }
  public resetTriggerClusters() {
    this._triggerClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerClustersInput() {
    return this._triggerClusters;
  }

  // trigger_cron - computed: false, optional: true, required: false
  private _triggerCron?: string; 
  public get triggerCron() {
    return this.getStringAttribute('trigger_cron');
  }
  public set triggerCron(value: string) {
    this._triggerCron = value;
  }
  public resetTriggerCron() {
    this._triggerCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerCronInput() {
    return this._triggerCron;
  }

  // trigger_period - computed: false, optional: false, required: true
  private _triggerPeriod?: string; 
  public get triggerPeriod() {
    return this.getStringAttribute('trigger_period');
  }
  public set triggerPeriod(value: string) {
    this._triggerPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerPeriodInput() {
    return this._triggerPeriod;
  }

  // trigger_promql - computed: false, optional: false, required: true
  private _triggerPromql?: string; 
  public get triggerPromql() {
    return this.getStringAttribute('trigger_promql');
  }
  public set triggerPromql(value: string) {
    this._triggerPromql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerPromqlInput() {
    return this._triggerPromql;
  }

  // trigger_severity - computed: false, optional: false, required: true
  private _triggerSeverity?: string; 
  public get triggerSeverity() {
    return this.getStringAttribute('trigger_severity');
  }
  public set triggerSeverity(value: string) {
    this._triggerSeverity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSeverityInput() {
    return this._triggerSeverity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_check_all: cdktf.booleanToTerraform(this._isCheckAll),
      name: cdktf.stringToTerraform(this._name),
      notification: cdktf.stringToTerraform(this._notification),
      notify_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._notifyGroupIds),
      notify_interval: cdktf.stringToTerraform(this._notifyInterval),
      notify_recovered: cdktf.booleanToTerraform(this._notifyRecovered),
      notify_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifyTypes),
      recover_notification: cdktf.stringToTerraform(this._recoverNotification),
      tag_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagSet),
      trigger_clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggerClusters),
      trigger_cron: cdktf.stringToTerraform(this._triggerCron),
      trigger_period: cdktf.stringToTerraform(this._triggerPeriod),
      trigger_promql: cdktf.stringToTerraform(this._triggerPromql),
      trigger_severity: cdktf.stringToTerraform(this._triggerSeverity),
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
      is_check_all: {
        value: cdktf.booleanToHclTerraform(this._isCheckAll),
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
      notification: {
        value: cdktf.stringToHclTerraform(this._notification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._notifyGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      notify_interval: {
        value: cdktf.stringToHclTerraform(this._notifyInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_recovered: {
        value: cdktf.booleanToHclTerraform(this._notifyRecovered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifyTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      recover_notification: {
        value: cdktf.stringToHclTerraform(this._recoverNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trigger_clusters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._triggerClusters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trigger_cron: {
        value: cdktf.stringToHclTerraform(this._triggerCron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_period: {
        value: cdktf.stringToHclTerraform(this._triggerPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_promql: {
        value: cdktf.stringToHclTerraform(this._triggerPromql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_severity: {
        value: cdktf.stringToHclTerraform(this._triggerSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
