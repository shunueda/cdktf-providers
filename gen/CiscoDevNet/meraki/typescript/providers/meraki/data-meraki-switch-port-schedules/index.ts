// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_port_schedules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchPortSchedulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_port_schedules#network_id DataMerakiSwitchPortSchedules#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiSwitchPortSchedulesItems {
}

export function dataMerakiSwitchPortSchedulesItemsToTerraform(struct?: DataMerakiSwitchPortSchedulesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSwitchPortSchedulesItemsToHclTerraform(struct?: DataMerakiSwitchPortSchedulesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSwitchPortSchedulesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSwitchPortSchedulesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSwitchPortSchedulesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port_schedule_friday_active - computed: true, optional: false, required: false
  public get portScheduleFridayActive() {
    return this.getBooleanAttribute('port_schedule_friday_active');
  }

  // port_schedule_friday_from - computed: true, optional: false, required: false
  public get portScheduleFridayFrom() {
    return this.getStringAttribute('port_schedule_friday_from');
  }

  // port_schedule_friday_to - computed: true, optional: false, required: false
  public get portScheduleFridayTo() {
    return this.getStringAttribute('port_schedule_friday_to');
  }

  // port_schedule_monday_active - computed: true, optional: false, required: false
  public get portScheduleMondayActive() {
    return this.getBooleanAttribute('port_schedule_monday_active');
  }

  // port_schedule_monday_from - computed: true, optional: false, required: false
  public get portScheduleMondayFrom() {
    return this.getStringAttribute('port_schedule_monday_from');
  }

  // port_schedule_monday_to - computed: true, optional: false, required: false
  public get portScheduleMondayTo() {
    return this.getStringAttribute('port_schedule_monday_to');
  }

  // port_schedule_saturday_active - computed: true, optional: false, required: false
  public get portScheduleSaturdayActive() {
    return this.getBooleanAttribute('port_schedule_saturday_active');
  }

  // port_schedule_saturday_from - computed: true, optional: false, required: false
  public get portScheduleSaturdayFrom() {
    return this.getStringAttribute('port_schedule_saturday_from');
  }

  // port_schedule_saturday_to - computed: true, optional: false, required: false
  public get portScheduleSaturdayTo() {
    return this.getStringAttribute('port_schedule_saturday_to');
  }

  // port_schedule_sunday_active - computed: true, optional: false, required: false
  public get portScheduleSundayActive() {
    return this.getBooleanAttribute('port_schedule_sunday_active');
  }

  // port_schedule_sunday_from - computed: true, optional: false, required: false
  public get portScheduleSundayFrom() {
    return this.getStringAttribute('port_schedule_sunday_from');
  }

  // port_schedule_sunday_to - computed: true, optional: false, required: false
  public get portScheduleSundayTo() {
    return this.getStringAttribute('port_schedule_sunday_to');
  }

  // port_schedule_thursday_active - computed: true, optional: false, required: false
  public get portScheduleThursdayActive() {
    return this.getBooleanAttribute('port_schedule_thursday_active');
  }

  // port_schedule_thursday_from - computed: true, optional: false, required: false
  public get portScheduleThursdayFrom() {
    return this.getStringAttribute('port_schedule_thursday_from');
  }

  // port_schedule_thursday_to - computed: true, optional: false, required: false
  public get portScheduleThursdayTo() {
    return this.getStringAttribute('port_schedule_thursday_to');
  }

  // port_schedule_tuesday_active - computed: true, optional: false, required: false
  public get portScheduleTuesdayActive() {
    return this.getBooleanAttribute('port_schedule_tuesday_active');
  }

  // port_schedule_tuesday_from - computed: true, optional: false, required: false
  public get portScheduleTuesdayFrom() {
    return this.getStringAttribute('port_schedule_tuesday_from');
  }

  // port_schedule_tuesday_to - computed: true, optional: false, required: false
  public get portScheduleTuesdayTo() {
    return this.getStringAttribute('port_schedule_tuesday_to');
  }

  // port_schedule_wednesday_active - computed: true, optional: false, required: false
  public get portScheduleWednesdayActive() {
    return this.getBooleanAttribute('port_schedule_wednesday_active');
  }

  // port_schedule_wednesday_from - computed: true, optional: false, required: false
  public get portScheduleWednesdayFrom() {
    return this.getStringAttribute('port_schedule_wednesday_from');
  }

  // port_schedule_wednesday_to - computed: true, optional: false, required: false
  public get portScheduleWednesdayTo() {
    return this.getStringAttribute('port_schedule_wednesday_to');
  }
}

export class DataMerakiSwitchPortSchedulesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSwitchPortSchedulesItemsOutputReference {
    return new DataMerakiSwitchPortSchedulesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_port_schedules meraki_switch_port_schedules}
*/
export class DataMerakiSwitchPortSchedules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_port_schedules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchPortSchedules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchPortSchedules to import
  * @param importFromId The id of the existing DataMerakiSwitchPortSchedules that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_port_schedules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchPortSchedules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_port_schedules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_port_schedules meraki_switch_port_schedules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchPortSchedulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchPortSchedulesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_port_schedules',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataMerakiSwitchPortSchedulesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
