// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/flow_exporter_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrFlowExporterMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/flow_exporter_map#device DataIosxrFlowExporterMap#device}
  */
  readonly device?: string;
  /**
  * Exporter map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/flow_exporter_map#name DataIosxrFlowExporterMap#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/flow_exporter_map iosxr_flow_exporter_map}
*/
export class DataIosxrFlowExporterMap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_flow_exporter_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrFlowExporterMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrFlowExporterMap to import
  * @param importFromId The id of the existing DataIosxrFlowExporterMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/flow_exporter_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrFlowExporterMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_flow_exporter_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/flow_exporter_map iosxr_flow_exporter_map} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrFlowExporterMapConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrFlowExporterMapConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_flow_exporter_map',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
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

  // destination_ipv4_address - computed: true, optional: false, required: false
  public get destinationIpv4Address() {
    return this.getStringAttribute('destination_ipv4_address');
  }

  // destination_ipv6_address - computed: true, optional: false, required: false
  public get destinationIpv6Address() {
    return this.getStringAttribute('destination_ipv6_address');
  }

  // destination_vrf - computed: true, optional: false, required: false
  public get destinationVrf() {
    return this.getStringAttribute('destination_vrf');
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

  // dfbit_set - computed: true, optional: false, required: false
  public get dfbitSet() {
    return this.getBooleanAttribute('dfbit_set');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getNumberAttribute('dscp');
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

  // packet_length - computed: true, optional: false, required: false
  public get packetLength() {
    return this.getNumberAttribute('packet_length');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // transport_udp - computed: true, optional: false, required: false
  public get transportUdp() {
    return this.getNumberAttribute('transport_udp');
  }

  // version_export_format - computed: true, optional: false, required: false
  public get versionExportFormat() {
    return this.getStringAttribute('version_export_format');
  }

  // version_options_class_table_timeout - computed: true, optional: false, required: false
  public get versionOptionsClassTableTimeout() {
    return this.getNumberAttribute('version_options_class_table_timeout');
  }

  // version_options_interface_table_timeout - computed: true, optional: false, required: false
  public get versionOptionsInterfaceTableTimeout() {
    return this.getNumberAttribute('version_options_interface_table_timeout');
  }

  // version_options_sampler_table_timeout - computed: true, optional: false, required: false
  public get versionOptionsSamplerTableTimeout() {
    return this.getNumberAttribute('version_options_sampler_table_timeout');
  }

  // version_options_vrf_table_timeout - computed: true, optional: false, required: false
  public get versionOptionsVrfTableTimeout() {
    return this.getNumberAttribute('version_options_vrf_table_timeout');
  }

  // version_template_data_timeout - computed: true, optional: false, required: false
  public get versionTemplateDataTimeout() {
    return this.getNumberAttribute('version_template_data_timeout');
  }

  // version_template_options_timeout - computed: true, optional: false, required: false
  public get versionTemplateOptionsTimeout() {
    return this.getNumberAttribute('version_template_options_timeout');
  }

  // version_template_timeout - computed: true, optional: false, required: false
  public get versionTemplateTimeout() {
    return this.getNumberAttribute('version_template_timeout');
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
