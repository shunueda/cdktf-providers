// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFusionAppsFusionEnvironmentScheduledActivityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}
  */
  readonly fusionEnvironmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}
  */
  readonly scheduledActivityId: string;
}
export interface DataOciFusionAppsFusionEnvironmentScheduledActivityActions {
}

export function dataOciFusionAppsFusionEnvironmentScheduledActivityActionsToTerraform(struct?: DataOciFusionAppsFusionEnvironmentScheduledActivityActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentScheduledActivityActionsToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentScheduledActivityActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentScheduledActivityActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentScheduledActivityActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // artifact - computed: true, optional: false, required: false
  public get artifact() {
    return this.getStringAttribute('artifact');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // qualifier - computed: true, optional: false, required: false
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }

  // reference_key - computed: true, optional: false, required: false
  public get referenceKey() {
    return this.getStringAttribute('reference_key');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference {
    return new DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity oci_fusion_apps_fusion_environment_scheduled_activity}
*/
export class DataOciFusionAppsFusionEnvironmentScheduledActivity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fusion_apps_fusion_environment_scheduled_activity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentScheduledActivity to import
  * @param importFromId The id of the existing DataOciFusionAppsFusionEnvironmentScheduledActivity that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentScheduledActivity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fusion_apps_fusion_environment_scheduled_activity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity oci_fusion_apps_fusion_environment_scheduled_activity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFusionAppsFusionEnvironmentScheduledActivityConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentScheduledActivityConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fusion_apps_fusion_environment_scheduled_activity',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fusionEnvironmentId = config.fusionEnvironmentId;
    this._id = config.id;
    this._scheduledActivityId = config.scheduledActivityId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: false, required: false
  private _actions = new DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // delay_in_hours - computed: true, optional: false, required: false
  public get delayInHours() {
    return this.getNumberAttribute('delay_in_hours');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fusion_environment_id - computed: false, optional: false, required: true
  private _fusionEnvironmentId?: string; 
  public get fusionEnvironmentId() {
    return this.getStringAttribute('fusion_environment_id');
  }
  public set fusionEnvironmentId(value: string) {
    this._fusionEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fusionEnvironmentIdInput() {
    return this._fusionEnvironmentId;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // run_cycle - computed: true, optional: false, required: false
  public get runCycle() {
    return this.getStringAttribute('run_cycle');
  }

  // scheduled_activity_id - computed: false, optional: false, required: true
  private _scheduledActivityId?: string; 
  public get scheduledActivityId() {
    return this.getStringAttribute('scheduled_activity_id');
  }
  public set scheduledActivityId(value: string) {
    this._scheduledActivityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledActivityIdInput() {
    return this._scheduledActivityId;
  }

  // service_availability - computed: true, optional: false, required: false
  public get serviceAvailability() {
    return this.getStringAttribute('service_availability');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_expected_finish - computed: true, optional: false, required: false
  public get timeExpectedFinish() {
    return this.getStringAttribute('time_expected_finish');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_scheduled_start - computed: true, optional: false, required: false
  public get timeScheduledStart() {
    return this.getStringAttribute('time_scheduled_start');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fusion_environment_id: cdktf.stringToTerraform(this._fusionEnvironmentId),
      id: cdktf.stringToTerraform(this._id),
      scheduled_activity_id: cdktf.stringToTerraform(this._scheduledActivityId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fusion_environment_id: {
        value: cdktf.stringToHclTerraform(this._fusionEnvironmentId),
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
      scheduled_activity_id: {
        value: cdktf.stringToHclTerraform(this._scheduledActivityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
