// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_report_autocache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemReportAutocacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_report_autocache#aggressive_schedule SystemReportAutocache#aggressive_schedule}
  */
  readonly aggressiveSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_report_autocache#id SystemReportAutocache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_report_autocache#order SystemReportAutocache#order}
  */
  readonly order?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_report_autocache#sche_rpt_only SystemReportAutocache#sche_rpt_only}
  */
  readonly scheRptOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_report_autocache#status SystemReportAutocache#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_report_autocache fortimanager_system_report_autocache}
*/
export class SystemReportAutocache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_report_autocache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemReportAutocache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemReportAutocache to import
  * @param importFromId The id of the existing SystemReportAutocache that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_report_autocache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemReportAutocache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_report_autocache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_report_autocache fortimanager_system_report_autocache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemReportAutocacheConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemReportAutocacheConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_report_autocache',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggressiveSchedule = config.aggressiveSchedule;
    this._id = config.id;
    this._order = config.order;
    this._scheRptOnly = config.scheRptOnly;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggressive_schedule - computed: true, optional: true, required: false
  private _aggressiveSchedule?: string; 
  public get aggressiveSchedule() {
    return this.getStringAttribute('aggressive_schedule');
  }
  public set aggressiveSchedule(value: string) {
    this._aggressiveSchedule = value;
  }
  public resetAggressiveSchedule() {
    this._aggressiveSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressiveScheduleInput() {
    return this._aggressiveSchedule;
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

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // sche_rpt_only - computed: true, optional: true, required: false
  private _scheRptOnly?: string; 
  public get scheRptOnly() {
    return this.getStringAttribute('sche_rpt_only');
  }
  public set scheRptOnly(value: string) {
    this._scheRptOnly = value;
  }
  public resetScheRptOnly() {
    this._scheRptOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheRptOnlyInput() {
    return this._scheRptOnly;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggressive_schedule: cdktf.stringToTerraform(this._aggressiveSchedule),
      id: cdktf.stringToTerraform(this._id),
      order: cdktf.stringToTerraform(this._order),
      sche_rpt_only: cdktf.stringToTerraform(this._scheRptOnly),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggressive_schedule: {
        value: cdktf.stringToHclTerraform(this._aggressiveSchedule),
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
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sche_rpt_only: {
        value: cdktf.stringToHclTerraform(this._scheRptOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
