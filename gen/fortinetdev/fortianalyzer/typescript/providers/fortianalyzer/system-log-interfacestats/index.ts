// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_interfacestats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLogInterfacestatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_interfacestats#billing_report SystemLogInterfacestats#billing_report}
  */
  readonly billingReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_interfacestats#id SystemLogInterfacestats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_interfacestats#retention_days SystemLogInterfacestats#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_interfacestats#sampling_interval SystemLogInterfacestats#sampling_interval}
  */
  readonly samplingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_interfacestats#status SystemLogInterfacestats#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_interfacestats fortianalyzer_system_log_interfacestats}
*/
export class SystemLogInterfacestats extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_log_interfacestats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLogInterfacestats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLogInterfacestats to import
  * @param importFromId The id of the existing SystemLogInterfacestats that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_interfacestats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLogInterfacestats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_log_interfacestats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_interfacestats fortianalyzer_system_log_interfacestats} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLogInterfacestatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLogInterfacestatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_log_interfacestats',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingReport = config.billingReport;
    this._id = config.id;
    this._retentionDays = config.retentionDays;
    this._samplingInterval = config.samplingInterval;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_report - computed: true, optional: true, required: false
  private _billingReport?: string; 
  public get billingReport() {
    return this.getStringAttribute('billing_report');
  }
  public set billingReport(value: string) {
    this._billingReport = value;
  }
  public resetBillingReport() {
    this._billingReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingReportInput() {
    return this._billingReport;
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

  // retention_days - computed: true, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // sampling_interval - computed: true, optional: true, required: false
  private _samplingInterval?: number; 
  public get samplingInterval() {
    return this.getNumberAttribute('sampling_interval');
  }
  public set samplingInterval(value: number) {
    this._samplingInterval = value;
  }
  public resetSamplingInterval() {
    this._samplingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingIntervalInput() {
    return this._samplingInterval;
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
      billing_report: cdktf.stringToTerraform(this._billingReport),
      id: cdktf.stringToTerraform(this._id),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      sampling_interval: cdktf.numberToTerraform(this._samplingInterval),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_report: {
        value: cdktf.stringToHclTerraform(this._billingReport),
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
      retention_days: {
        value: cdktf.numberToHclTerraform(this._retentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sampling_interval: {
        value: cdktf.numberToHclTerraform(this._samplingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
