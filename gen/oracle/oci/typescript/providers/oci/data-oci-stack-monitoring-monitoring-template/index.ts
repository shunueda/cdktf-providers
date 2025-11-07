// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/stack_monitoring_monitoring_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciStackMonitoringMonitoringTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/stack_monitoring_monitoring_template#monitoring_template_id DataOciStackMonitoringMonitoringTemplate#monitoring_template_id}
  */
  readonly monitoringTemplateId: string;
}
export interface DataOciStackMonitoringMonitoringTemplateMembers {
}

export function dataOciStackMonitoringMonitoringTemplateMembersToTerraform(struct?: DataOciStackMonitoringMonitoringTemplateMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoringTemplateMembersToHclTerraform(struct?: DataOciStackMonitoringMonitoringTemplateMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoringTemplateMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoringTemplateMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoringTemplateMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // composite_type - computed: true, optional: false, required: false
  public get compositeType() {
    return this.getStringAttribute('composite_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciStackMonitoringMonitoringTemplateMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoringTemplateMembersOutputReference {
    return new DataOciStackMonitoringMonitoringTemplateMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/stack_monitoring_monitoring_template oci_stack_monitoring_monitoring_template}
*/
export class DataOciStackMonitoringMonitoringTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_monitoring_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciStackMonitoringMonitoringTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciStackMonitoringMonitoringTemplate to import
  * @param importFromId The id of the existing DataOciStackMonitoringMonitoringTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/stack_monitoring_monitoring_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciStackMonitoringMonitoringTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_monitoring_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/stack_monitoring_monitoring_template oci_stack_monitoring_monitoring_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciStackMonitoringMonitoringTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciStackMonitoringMonitoringTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_monitoring_template',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._monitoringTemplateId = config.monitoringTemplateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destinations - computed: true, optional: false, required: false
  public get destinations() {
    return this.getListAttribute('destinations');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_alarms_enabled - computed: true, optional: false, required: false
  public get isAlarmsEnabled() {
    return this.getBooleanAttribute('is_alarms_enabled');
  }

  // is_split_notification_enabled - computed: true, optional: false, required: false
  public get isSplitNotificationEnabled() {
    return this.getBooleanAttribute('is_split_notification_enabled');
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataOciStackMonitoringMonitoringTemplateMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // monitoring_template_id - computed: false, optional: false, required: true
  private _monitoringTemplateId?: string; 
  public get monitoringTemplateId() {
    return this.getStringAttribute('monitoring_template_id');
  }
  public set monitoringTemplateId(value: string) {
    this._monitoringTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringTemplateIdInput() {
    return this._monitoringTemplateId;
  }

  // repeat_notification_duration - computed: true, optional: false, required: false
  public get repeatNotificationDuration() {
    return this.getStringAttribute('repeat_notification_duration');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_alarm_conditions - computed: true, optional: false, required: false
  public get totalAlarmConditions() {
    return this.getNumberAttribute('total_alarm_conditions');
  }

  // total_applied_alarm_conditions - computed: true, optional: false, required: false
  public get totalAppliedAlarmConditions() {
    return this.getNumberAttribute('total_applied_alarm_conditions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      monitoring_template_id: cdktf.stringToTerraform(this._monitoringTemplateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      monitoring_template_id: {
        value: cdktf.stringToHclTerraform(this._monitoringTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
