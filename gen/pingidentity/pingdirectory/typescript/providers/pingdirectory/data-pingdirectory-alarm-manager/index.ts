// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/alarm_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryAlarmManagerConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/alarm_manager pingdirectory_alarm_manager}
*/
export class DataPingdirectoryAlarmManager extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_alarm_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryAlarmManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryAlarmManager to import
  * @param importFromId The id of the existing DataPingdirectoryAlarmManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/alarm_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryAlarmManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_alarm_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/alarm_manager pingdirectory_alarm_manager} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryAlarmManagerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryAlarmManagerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_alarm_manager',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_gauge_alert_level - computed: true, optional: false, required: false
  public get defaultGaugeAlertLevel() {
    return this.getStringAttribute('default_gauge_alert_level');
  }

  // generated_alert_types - computed: true, optional: false, required: false
  public get generatedAlertTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('generated_alert_types'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // suppressed_alarm - computed: true, optional: false, required: false
  public get suppressedAlarm() {
    return cdktf.Fn.tolist(this.getListAttribute('suppressed_alarm'));
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
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
