// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/flow_exporter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeFlowExporterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/flow_exporter#device DataIosxeFlowExporter#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/flow_exporter#name DataIosxeFlowExporter#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/flow_exporter iosxe_flow_exporter}
*/
export class DataIosxeFlowExporter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_flow_exporter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeFlowExporter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeFlowExporter to import
  * @param importFromId The id of the existing DataIosxeFlowExporter that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/flow_exporter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeFlowExporter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_flow_exporter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/flow_exporter iosxe_flow_exporter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeFlowExporterConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeFlowExporterConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_flow_exporter',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_ip - computed: true, optional: false, required: false
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // export_protocol - computed: true, optional: false, required: false
  public get exportProtocol() {
    return this.getStringAttribute('export_protocol');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // option_application_attributes_timeout - computed: true, optional: false, required: false
  public get optionApplicationAttributesTimeout() {
    return this.getNumberAttribute('option_application_attributes_timeout');
  }

  // option_application_table_timeout - computed: true, optional: false, required: false
  public get optionApplicationTableTimeout() {
    return this.getNumberAttribute('option_application_table_timeout');
  }

  // option_interface_table_timeout - computed: true, optional: false, required: false
  public get optionInterfaceTableTimeout() {
    return this.getNumberAttribute('option_interface_table_timeout');
  }

  // option_sampler_table - computed: true, optional: false, required: false
  public get optionSamplerTable() {
    return this.getBooleanAttribute('option_sampler_table');
  }

  // option_vrf_table_timeout - computed: true, optional: false, required: false
  public get optionVrfTableTimeout() {
    return this.getNumberAttribute('option_vrf_table_timeout');
  }

  // source_loopback - computed: true, optional: false, required: false
  public get sourceLoopback() {
    return this.getNumberAttribute('source_loopback');
  }

  // template_data_timeout - computed: true, optional: false, required: false
  public get templateDataTimeout() {
    return this.getNumberAttribute('template_data_timeout');
  }

  // transport_udp - computed: true, optional: false, required: false
  public get transportUdp() {
    return this.getNumberAttribute('transport_udp');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
