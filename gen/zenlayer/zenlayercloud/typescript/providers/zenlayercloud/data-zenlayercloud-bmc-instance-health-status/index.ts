// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/bmc_instance_health_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudBmcInstanceHealthStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/bmc_instance_health_status#id DataZenlayercloudBmcInstanceHealthStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the instance to query health status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/bmc_instance_health_status#instance_id DataZenlayercloudBmcInstanceHealthStatus#instance_id}
  */
  readonly instanceId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/bmc_instance_health_status#result_output_file DataZenlayercloudBmcInstanceHealthStatus#result_output_file}
  */
  readonly resultOutputFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/bmc_instance_health_status zenlayercloud_bmc_instance_health_status}
*/
export class DataZenlayercloudBmcInstanceHealthStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_bmc_instance_health_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudBmcInstanceHealthStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudBmcInstanceHealthStatus to import
  * @param importFromId The id of the existing DataZenlayercloudBmcInstanceHealthStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/bmc_instance_health_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudBmcInstanceHealthStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_bmc_instance_health_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/data-sources/bmc_instance_health_status zenlayercloud_bmc_instance_health_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudBmcInstanceHealthStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudBmcInstanceHealthStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_bmc_instance_health_status',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.14',
        providerVersionConstraint: '0.2.14'
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
    this._instanceId = config.instanceId;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu0_temp - computed: true, optional: false, required: false
  public get cpu0Temp() {
    return this.getNumberAttribute('cpu0_temp');
  }

  // cpu1_temp - computed: true, optional: false, required: false
  public get cpu1Temp() {
    return this.getNumberAttribute('cpu1_temp');
  }

  // cpu2_temp - computed: true, optional: false, required: false
  public get cpu2Temp() {
    return this.getNumberAttribute('cpu2_temp');
  }

  // cpu_status - computed: true, optional: false, required: false
  public get cpuStatus() {
    return this.getStringAttribute('cpu_status');
  }

  // cpu_temp - computed: true, optional: false, required: false
  public get cpuTemp() {
    return this.getNumberAttribute('cpu_temp');
  }

  // disk_status - computed: true, optional: false, required: false
  public get diskStatus() {
    return this.getStringAttribute('disk_status');
  }

  // fan_status - computed: true, optional: false, required: false
  public get fanStatus() {
    return this.getStringAttribute('fan_status');
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

  // inlet_temp - computed: true, optional: false, required: false
  public get inletTemp() {
    return this.getNumberAttribute('inlet_temp');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ipmi_ping - computed: true, optional: false, required: false
  public get ipmiPing() {
    return this.getStringAttribute('ipmi_ping');
  }

  // ipmi_status - computed: true, optional: false, required: false
  public get ipmiStatus() {
    return this.getStringAttribute('ipmi_status');
  }

  // memory_status - computed: true, optional: false, required: false
  public get memoryStatus() {
    return this.getStringAttribute('memory_status');
  }

  // psu_status - computed: true, optional: false, required: false
  public get psuStatus() {
    return this.getStringAttribute('psu_status');
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // server_brand - computed: true, optional: false, required: false
  public get serverBrand() {
    return this.getStringAttribute('server_brand');
  }

  // server_model - computed: true, optional: false, required: false
  public get serverModel() {
    return this.getStringAttribute('server_model');
  }

  // temp_unit - computed: true, optional: false, required: false
  public get tempUnit() {
    return this.getStringAttribute('temp_unit');
  }

  // wan_port_status - computed: true, optional: false, required: false
  public get wanPortStatus() {
    return this.getStringAttribute('wan_port_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
