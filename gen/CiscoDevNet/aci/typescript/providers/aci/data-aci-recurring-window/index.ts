// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciRecurringWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#annotation DataAciRecurringWindow#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#concur_cap DataAciRecurringWindow#concur_cap}
  */
  readonly concurCap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#day DataAciRecurringWindow#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#hour DataAciRecurringWindow#hour}
  */
  readonly hour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#id DataAciRecurringWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#minute DataAciRecurringWindow#minute}
  */
  readonly minute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#name DataAciRecurringWindow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#name_alias DataAciRecurringWindow#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#node_upg_interval DataAciRecurringWindow#node_upg_interval}
  */
  readonly nodeUpgInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#proc_break DataAciRecurringWindow#proc_break}
  */
  readonly procBreak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#proc_cap DataAciRecurringWindow#proc_cap}
  */
  readonly procCap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#scheduler_dn DataAciRecurringWindow#scheduler_dn}
  */
  readonly schedulerDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#time_cap DataAciRecurringWindow#time_cap}
  */
  readonly timeCap?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window aci_recurring_window}
*/
export class DataAciRecurringWindow extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_recurring_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciRecurringWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciRecurringWindow to import
  * @param importFromId The id of the existing DataAciRecurringWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciRecurringWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_recurring_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/recurring_window aci_recurring_window} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciRecurringWindowConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciRecurringWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_recurring_window',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._concurCap = config.concurCap;
    this._day = config.day;
    this._hour = config.hour;
    this._id = config.id;
    this._minute = config.minute;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._nodeUpgInterval = config.nodeUpgInterval;
    this._procBreak = config.procBreak;
    this._procCap = config.procCap;
    this._schedulerDn = config.schedulerDn;
    this._timeCap = config.timeCap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // concur_cap - computed: true, optional: true, required: false
  private _concurCap?: string; 
  public get concurCap() {
    return this.getStringAttribute('concur_cap');
  }
  public set concurCap(value: string) {
    this._concurCap = value;
  }
  public resetConcurCap() {
    this._concurCap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurCapInput() {
    return this._concurCap;
  }

  // day - computed: true, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: true, optional: true, required: false
  private _hour?: string; 
  public get hour() {
    return this.getStringAttribute('hour');
  }
  public set hour(value: string) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
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

  // minute - computed: true, optional: true, required: false
  private _minute?: string; 
  public get minute() {
    return this.getStringAttribute('minute');
  }
  public set minute(value: string) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // node_upg_interval - computed: true, optional: true, required: false
  private _nodeUpgInterval?: string; 
  public get nodeUpgInterval() {
    return this.getStringAttribute('node_upg_interval');
  }
  public set nodeUpgInterval(value: string) {
    this._nodeUpgInterval = value;
  }
  public resetNodeUpgInterval() {
    this._nodeUpgInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeUpgIntervalInput() {
    return this._nodeUpgInterval;
  }

  // proc_break - computed: true, optional: true, required: false
  private _procBreak?: string; 
  public get procBreak() {
    return this.getStringAttribute('proc_break');
  }
  public set procBreak(value: string) {
    this._procBreak = value;
  }
  public resetProcBreak() {
    this._procBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procBreakInput() {
    return this._procBreak;
  }

  // proc_cap - computed: true, optional: true, required: false
  private _procCap?: string; 
  public get procCap() {
    return this.getStringAttribute('proc_cap');
  }
  public set procCap(value: string) {
    this._procCap = value;
  }
  public resetProcCap() {
    this._procCap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procCapInput() {
    return this._procCap;
  }

  // scheduler_dn - computed: false, optional: false, required: true
  private _schedulerDn?: string; 
  public get schedulerDn() {
    return this.getStringAttribute('scheduler_dn');
  }
  public set schedulerDn(value: string) {
    this._schedulerDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerDnInput() {
    return this._schedulerDn;
  }

  // time_cap - computed: true, optional: true, required: false
  private _timeCap?: string; 
  public get timeCap() {
    return this.getStringAttribute('time_cap');
  }
  public set timeCap(value: string) {
    this._timeCap = value;
  }
  public resetTimeCap() {
    this._timeCap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCapInput() {
    return this._timeCap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      concur_cap: cdktf.stringToTerraform(this._concurCap),
      day: cdktf.stringToTerraform(this._day),
      hour: cdktf.stringToTerraform(this._hour),
      id: cdktf.stringToTerraform(this._id),
      minute: cdktf.stringToTerraform(this._minute),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      node_upg_interval: cdktf.stringToTerraform(this._nodeUpgInterval),
      proc_break: cdktf.stringToTerraform(this._procBreak),
      proc_cap: cdktf.stringToTerraform(this._procCap),
      scheduler_dn: cdktf.stringToTerraform(this._schedulerDn),
      time_cap: cdktf.stringToTerraform(this._timeCap),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concur_cap: {
        value: cdktf.stringToHclTerraform(this._concurCap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      day: {
        value: cdktf.stringToHclTerraform(this._day),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hour: {
        value: cdktf.stringToHclTerraform(this._hour),
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
      minute: {
        value: cdktf.stringToHclTerraform(this._minute),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_upg_interval: {
        value: cdktf.stringToHclTerraform(this._nodeUpgInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proc_break: {
        value: cdktf.stringToHclTerraform(this._procBreak),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proc_cap: {
        value: cdktf.stringToHclTerraform(this._procCap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler_dn: {
        value: cdktf.stringToHclTerraform(this._schedulerDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_cap: {
        value: cdktf.stringToHclTerraform(this._timeCap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
