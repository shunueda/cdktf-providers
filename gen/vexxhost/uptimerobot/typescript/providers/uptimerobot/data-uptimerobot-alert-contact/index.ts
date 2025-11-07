// https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/data-sources/alert_contact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUptimerobotAlertContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/data-sources/alert_contact#friendly_name DataUptimerobotAlertContact#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/data-sources/alert_contact#value DataUptimerobotAlertContact#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/data-sources/alert_contact uptimerobot_alert_contact}
*/
export class DataUptimerobotAlertContact extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptimerobot_alert_contact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUptimerobotAlertContact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUptimerobotAlertContact to import
  * @param importFromId The id of the existing DataUptimerobotAlertContact that should be imported. Refer to the {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/data-sources/alert_contact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUptimerobotAlertContact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptimerobot_alert_contact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/data-sources/alert_contact uptimerobot_alert_contact} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUptimerobotAlertContactConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUptimerobotAlertContactConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'uptimerobot_alert_contact',
      terraformGeneratorMetadata: {
        providerName: 'uptimerobot',
        providerVersion: '0.8.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._friendlyName = config.friendlyName;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
