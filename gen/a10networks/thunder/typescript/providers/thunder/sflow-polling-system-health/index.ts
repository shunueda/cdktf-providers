// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling_system_health
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SflowPollingSystemHealthAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling_system_health#id SflowPollingSystemHealthA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable polling license statistics; 'disable': Disable polling license statistics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling_system_health#license_statistics SflowPollingSystemHealthA#license_statistics}
  */
  readonly licenseStatistics?: string;
  /**
  * 'enable': Enable polling control cpu; 'disable': Disable polling control cpu usage;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling_system_health#per_control_cpu_usage SflowPollingSystemHealthA#per_control_cpu_usage}
  */
  readonly perControlCpuUsage?: string;
  /**
  * 'enable': Enable polling data cpu; 'disable': Disable polling data cpu usage;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling_system_health#per_data_cpu_usage SflowPollingSystemHealthA#per_data_cpu_usage}
  */
  readonly perDataCpuUsage?: string;
  /**
  * 'enable': Enable polling system health information; 'disable': Disable polling system health information;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling_system_health#system_health_usage SflowPollingSystemHealthA#system_health_usage}
  */
  readonly systemHealthUsage?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling_system_health#uuid SflowPollingSystemHealthA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling_system_health thunder_sflow_polling_system_health}
*/
export class SflowPollingSystemHealthA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sflow_polling_system_health";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SflowPollingSystemHealthA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SflowPollingSystemHealthA to import
  * @param importFromId The id of the existing SflowPollingSystemHealthA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling_system_health#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SflowPollingSystemHealthA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sflow_polling_system_health", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_polling_system_health thunder_sflow_polling_system_health} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SflowPollingSystemHealthAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SflowPollingSystemHealthAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sflow_polling_system_health',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
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
    this._id = config.id;
    this._licenseStatistics = config.licenseStatistics;
    this._perControlCpuUsage = config.perControlCpuUsage;
    this._perDataCpuUsage = config.perDataCpuUsage;
    this._systemHealthUsage = config.systemHealthUsage;
    this._uuid = config.uuid;
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

  // license_statistics - computed: false, optional: true, required: false
  private _licenseStatistics?: string; 
  public get licenseStatistics() {
    return this.getStringAttribute('license_statistics');
  }
  public set licenseStatistics(value: string) {
    this._licenseStatistics = value;
  }
  public resetLicenseStatistics() {
    this._licenseStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseStatisticsInput() {
    return this._licenseStatistics;
  }

  // per_control_cpu_usage - computed: false, optional: true, required: false
  private _perControlCpuUsage?: string; 
  public get perControlCpuUsage() {
    return this.getStringAttribute('per_control_cpu_usage');
  }
  public set perControlCpuUsage(value: string) {
    this._perControlCpuUsage = value;
  }
  public resetPerControlCpuUsage() {
    this._perControlCpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perControlCpuUsageInput() {
    return this._perControlCpuUsage;
  }

  // per_data_cpu_usage - computed: false, optional: true, required: false
  private _perDataCpuUsage?: string; 
  public get perDataCpuUsage() {
    return this.getStringAttribute('per_data_cpu_usage');
  }
  public set perDataCpuUsage(value: string) {
    this._perDataCpuUsage = value;
  }
  public resetPerDataCpuUsage() {
    this._perDataCpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perDataCpuUsageInput() {
    return this._perDataCpuUsage;
  }

  // system_health_usage - computed: false, optional: true, required: false
  private _systemHealthUsage?: string; 
  public get systemHealthUsage() {
    return this.getStringAttribute('system_health_usage');
  }
  public set systemHealthUsage(value: string) {
    this._systemHealthUsage = value;
  }
  public resetSystemHealthUsage() {
    this._systemHealthUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemHealthUsageInput() {
    return this._systemHealthUsage;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      license_statistics: cdktf.stringToTerraform(this._licenseStatistics),
      per_control_cpu_usage: cdktf.stringToTerraform(this._perControlCpuUsage),
      per_data_cpu_usage: cdktf.stringToTerraform(this._perDataCpuUsage),
      system_health_usage: cdktf.stringToTerraform(this._systemHealthUsage),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      license_statistics: {
        value: cdktf.stringToHclTerraform(this._licenseStatistics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_control_cpu_usage: {
        value: cdktf.stringToHclTerraform(this._perControlCpuUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_data_cpu_usage: {
        value: cdktf.stringToHclTerraform(this._perDataCpuUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_health_usage: {
        value: cdktf.stringToHclTerraform(this._systemHealthUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
