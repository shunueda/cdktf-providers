// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alarm_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultAlarmManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the level at which alerts are sent for alarms raised by the Alarm Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alarm_manager#default_gauge_alert_level DefaultAlarmManager#default_gauge_alert_level}
  */
  readonly defaultGaugeAlertLevel?: string;
  /**
  * Indicates what kind of alert types should be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alarm_manager#generated_alert_types DefaultAlarmManager#generated_alert_types}
  */
  readonly generatedAlertTypes?: string[];
  /**
  * Specifies the names of the alarm alert types that should be suppressed. If the condition that triggers an alarm in this list occurs, then the alarm will not be raised and no alerts will be generated. Only a subset of alarms can be suppressed in this way. Alarms triggered by a gauge can be disabled by disabling the gauge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alarm_manager#suppressed_alarm DefaultAlarmManager#suppressed_alarm}
  */
  readonly suppressedAlarm?: string[];
}
export interface DefaultAlarmManagerRequiredActions {
}

export function defaultAlarmManagerRequiredActionsToTerraform(struct?: DefaultAlarmManagerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultAlarmManagerRequiredActionsToHclTerraform(struct?: DefaultAlarmManagerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultAlarmManagerRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultAlarmManagerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultAlarmManagerRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultAlarmManagerRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultAlarmManagerRequiredActionsOutputReference {
    return new DefaultAlarmManagerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alarm_manager pingdirectory_default_alarm_manager}
*/
export class DefaultAlarmManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_alarm_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultAlarmManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultAlarmManager to import
  * @param importFromId The id of the existing DefaultAlarmManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alarm_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultAlarmManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_alarm_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alarm_manager pingdirectory_default_alarm_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultAlarmManagerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultAlarmManagerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_alarm_manager',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultGaugeAlertLevel = config.defaultGaugeAlertLevel;
    this._generatedAlertTypes = config.generatedAlertTypes;
    this._suppressedAlarm = config.suppressedAlarm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_gauge_alert_level - computed: true, optional: true, required: false
  private _defaultGaugeAlertLevel?: string; 
  public get defaultGaugeAlertLevel() {
    return this.getStringAttribute('default_gauge_alert_level');
  }
  public set defaultGaugeAlertLevel(value: string) {
    this._defaultGaugeAlertLevel = value;
  }
  public resetDefaultGaugeAlertLevel() {
    this._defaultGaugeAlertLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGaugeAlertLevelInput() {
    return this._defaultGaugeAlertLevel;
  }

  // generated_alert_types - computed: true, optional: true, required: false
  private _generatedAlertTypes?: string[]; 
  public get generatedAlertTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('generated_alert_types'));
  }
  public set generatedAlertTypes(value: string[]) {
    this._generatedAlertTypes = value;
  }
  public resetGeneratedAlertTypes() {
    this._generatedAlertTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedAlertTypesInput() {
    return this._generatedAlertTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultAlarmManagerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // suppressed_alarm - computed: true, optional: true, required: false
  private _suppressedAlarm?: string[]; 
  public get suppressedAlarm() {
    return cdktf.Fn.tolist(this.getListAttribute('suppressed_alarm'));
  }
  public set suppressedAlarm(value: string[]) {
    this._suppressedAlarm = value;
  }
  public resetSuppressedAlarm() {
    this._suppressedAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressedAlarmInput() {
    return this._suppressedAlarm;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_gauge_alert_level: cdktf.stringToTerraform(this._defaultGaugeAlertLevel),
      generated_alert_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._generatedAlertTypes),
      suppressed_alarm: cdktf.listMapper(cdktf.stringToTerraform, false)(this._suppressedAlarm),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_gauge_alert_level: {
        value: cdktf.stringToHclTerraform(this._defaultGaugeAlertLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generated_alert_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._generatedAlertTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      suppressed_alarm: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._suppressedAlarm),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
