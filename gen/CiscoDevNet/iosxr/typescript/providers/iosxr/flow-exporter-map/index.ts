// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowExporterMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#destination_ipv4_address FlowExporterMap#destination_ipv4_address}
  */
  readonly destinationIpv4Address?: string;
  /**
  * Destination IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#destination_ipv6_address FlowExporterMap#destination_ipv6_address}
  */
  readonly destinationIpv6Address?: string;
  /**
  * Configure VRF to be used for reaching export destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#destination_vrf FlowExporterMap#destination_vrf}
  */
  readonly destinationVrf?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#device FlowExporterMap#device}
  */
  readonly device?: string;
  /**
  * Set Export Packet Do Not Fragment Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#dfbit_set FlowExporterMap#dfbit_set}
  */
  readonly dfbitSet?: boolean | cdktf.IResolvable;
  /**
  * Specify DSCP value for ipv4 export packets or traffic-class for ipv6 export packets
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#dscp FlowExporterMap#dscp}
  */
  readonly dscp?: number;
  /**
  * Exporter map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#name FlowExporterMap#name}
  */
  readonly name: string;
  /**
  * Export Packet maximum L3 length, should conform to outgoing interface mtu
  *   - Range: `512`-`9000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#packet_length FlowExporterMap#packet_length}
  */
  readonly packetLength?: number;
  /**
  * Source interface whose address can be used as source address for export packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#source FlowExporterMap#source}
  */
  readonly source?: string;
  /**
  * Use UDP as transport protocol
  *   - Range: `1024`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#transport_udp FlowExporterMap#transport_udp}
  */
  readonly transportUdp?: number;
  /**
  * Specify export format
  *   - Choices: `ipfix`, `protobuf`, `sflow`, `v9`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#version_export_format FlowExporterMap#version_export_format}
  */
  readonly versionExportFormat: string;
  /**
  * Specify export timeout
  *   - Range: `1`-`604800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#version_options_class_table_timeout FlowExporterMap#version_options_class_table_timeout}
  */
  readonly versionOptionsClassTableTimeout?: number;
  /**
  * Specify export timeout
  *   - Range: `1`-`604800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#version_options_interface_table_timeout FlowExporterMap#version_options_interface_table_timeout}
  */
  readonly versionOptionsInterfaceTableTimeout?: number;
  /**
  * Specify export timeout
  *   - Range: `1`-`604800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#version_options_sampler_table_timeout FlowExporterMap#version_options_sampler_table_timeout}
  */
  readonly versionOptionsSamplerTableTimeout?: number;
  /**
  * Specify export timeout
  *   - Range: `1`-`604800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#version_options_vrf_table_timeout FlowExporterMap#version_options_vrf_table_timeout}
  */
  readonly versionOptionsVrfTableTimeout?: number;
  /**
  * Specify custom timeout for the template
  *   - Range: `1`-`604800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#version_template_data_timeout FlowExporterMap#version_template_data_timeout}
  */
  readonly versionTemplateDataTimeout?: number;
  /**
  * Specify custom timeout for the template
  *   - Range: `1`-`604800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#version_template_options_timeout FlowExporterMap#version_template_options_timeout}
  */
  readonly versionTemplateOptionsTimeout?: number;
  /**
  * Specify custom timeout for the template
  *   - Range: `1`-`604800`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#version_template_timeout FlowExporterMap#version_template_timeout}
  */
  readonly versionTemplateTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map iosxr_flow_exporter_map}
*/
export class FlowExporterMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_flow_exporter_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowExporterMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowExporterMap to import
  * @param importFromId The id of the existing FlowExporterMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowExporterMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_flow_exporter_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/flow_exporter_map iosxr_flow_exporter_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowExporterMapConfig
  */
  public constructor(scope: Construct, id: string, config: FlowExporterMapConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_flow_exporter_map',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationIpv4Address = config.destinationIpv4Address;
    this._destinationIpv6Address = config.destinationIpv6Address;
    this._destinationVrf = config.destinationVrf;
    this._device = config.device;
    this._dfbitSet = config.dfbitSet;
    this._dscp = config.dscp;
    this._name = config.name;
    this._packetLength = config.packetLength;
    this._source = config.source;
    this._transportUdp = config.transportUdp;
    this._versionExportFormat = config.versionExportFormat;
    this._versionOptionsClassTableTimeout = config.versionOptionsClassTableTimeout;
    this._versionOptionsInterfaceTableTimeout = config.versionOptionsInterfaceTableTimeout;
    this._versionOptionsSamplerTableTimeout = config.versionOptionsSamplerTableTimeout;
    this._versionOptionsVrfTableTimeout = config.versionOptionsVrfTableTimeout;
    this._versionTemplateDataTimeout = config.versionTemplateDataTimeout;
    this._versionTemplateOptionsTimeout = config.versionTemplateOptionsTimeout;
    this._versionTemplateTimeout = config.versionTemplateTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_ipv4_address - computed: false, optional: true, required: false
  private _destinationIpv4Address?: string; 
  public get destinationIpv4Address() {
    return this.getStringAttribute('destination_ipv4_address');
  }
  public set destinationIpv4Address(value: string) {
    this._destinationIpv4Address = value;
  }
  public resetDestinationIpv4Address() {
    this._destinationIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpv4AddressInput() {
    return this._destinationIpv4Address;
  }

  // destination_ipv6_address - computed: false, optional: true, required: false
  private _destinationIpv6Address?: string; 
  public get destinationIpv6Address() {
    return this.getStringAttribute('destination_ipv6_address');
  }
  public set destinationIpv6Address(value: string) {
    this._destinationIpv6Address = value;
  }
  public resetDestinationIpv6Address() {
    this._destinationIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpv6AddressInput() {
    return this._destinationIpv6Address;
  }

  // destination_vrf - computed: false, optional: true, required: false
  private _destinationVrf?: string; 
  public get destinationVrf() {
    return this.getStringAttribute('destination_vrf');
  }
  public set destinationVrf(value: string) {
    this._destinationVrf = value;
  }
  public resetDestinationVrf() {
    this._destinationVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVrfInput() {
    return this._destinationVrf;
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

  // dfbit_set - computed: false, optional: true, required: false
  private _dfbitSet?: boolean | cdktf.IResolvable; 
  public get dfbitSet() {
    return this.getBooleanAttribute('dfbit_set');
  }
  public set dfbitSet(value: boolean | cdktf.IResolvable) {
    this._dfbitSet = value;
  }
  public resetDfbitSet() {
    this._dfbitSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfbitSetInput() {
    return this._dfbitSet;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
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

  // packet_length - computed: false, optional: true, required: false
  private _packetLength?: number; 
  public get packetLength() {
    return this.getNumberAttribute('packet_length');
  }
  public set packetLength(value: number) {
    this._packetLength = value;
  }
  public resetPacketLength() {
    this._packetLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthInput() {
    return this._packetLength;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // transport_udp - computed: false, optional: true, required: false
  private _transportUdp?: number; 
  public get transportUdp() {
    return this.getNumberAttribute('transport_udp');
  }
  public set transportUdp(value: number) {
    this._transportUdp = value;
  }
  public resetTransportUdp() {
    this._transportUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportUdpInput() {
    return this._transportUdp;
  }

  // version_export_format - computed: false, optional: false, required: true
  private _versionExportFormat?: string; 
  public get versionExportFormat() {
    return this.getStringAttribute('version_export_format');
  }
  public set versionExportFormat(value: string) {
    this._versionExportFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionExportFormatInput() {
    return this._versionExportFormat;
  }

  // version_options_class_table_timeout - computed: false, optional: true, required: false
  private _versionOptionsClassTableTimeout?: number; 
  public get versionOptionsClassTableTimeout() {
    return this.getNumberAttribute('version_options_class_table_timeout');
  }
  public set versionOptionsClassTableTimeout(value: number) {
    this._versionOptionsClassTableTimeout = value;
  }
  public resetVersionOptionsClassTableTimeout() {
    this._versionOptionsClassTableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionOptionsClassTableTimeoutInput() {
    return this._versionOptionsClassTableTimeout;
  }

  // version_options_interface_table_timeout - computed: false, optional: true, required: false
  private _versionOptionsInterfaceTableTimeout?: number; 
  public get versionOptionsInterfaceTableTimeout() {
    return this.getNumberAttribute('version_options_interface_table_timeout');
  }
  public set versionOptionsInterfaceTableTimeout(value: number) {
    this._versionOptionsInterfaceTableTimeout = value;
  }
  public resetVersionOptionsInterfaceTableTimeout() {
    this._versionOptionsInterfaceTableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionOptionsInterfaceTableTimeoutInput() {
    return this._versionOptionsInterfaceTableTimeout;
  }

  // version_options_sampler_table_timeout - computed: false, optional: true, required: false
  private _versionOptionsSamplerTableTimeout?: number; 
  public get versionOptionsSamplerTableTimeout() {
    return this.getNumberAttribute('version_options_sampler_table_timeout');
  }
  public set versionOptionsSamplerTableTimeout(value: number) {
    this._versionOptionsSamplerTableTimeout = value;
  }
  public resetVersionOptionsSamplerTableTimeout() {
    this._versionOptionsSamplerTableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionOptionsSamplerTableTimeoutInput() {
    return this._versionOptionsSamplerTableTimeout;
  }

  // version_options_vrf_table_timeout - computed: false, optional: true, required: false
  private _versionOptionsVrfTableTimeout?: number; 
  public get versionOptionsVrfTableTimeout() {
    return this.getNumberAttribute('version_options_vrf_table_timeout');
  }
  public set versionOptionsVrfTableTimeout(value: number) {
    this._versionOptionsVrfTableTimeout = value;
  }
  public resetVersionOptionsVrfTableTimeout() {
    this._versionOptionsVrfTableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionOptionsVrfTableTimeoutInput() {
    return this._versionOptionsVrfTableTimeout;
  }

  // version_template_data_timeout - computed: false, optional: true, required: false
  private _versionTemplateDataTimeout?: number; 
  public get versionTemplateDataTimeout() {
    return this.getNumberAttribute('version_template_data_timeout');
  }
  public set versionTemplateDataTimeout(value: number) {
    this._versionTemplateDataTimeout = value;
  }
  public resetVersionTemplateDataTimeout() {
    this._versionTemplateDataTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTemplateDataTimeoutInput() {
    return this._versionTemplateDataTimeout;
  }

  // version_template_options_timeout - computed: false, optional: true, required: false
  private _versionTemplateOptionsTimeout?: number; 
  public get versionTemplateOptionsTimeout() {
    return this.getNumberAttribute('version_template_options_timeout');
  }
  public set versionTemplateOptionsTimeout(value: number) {
    this._versionTemplateOptionsTimeout = value;
  }
  public resetVersionTemplateOptionsTimeout() {
    this._versionTemplateOptionsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTemplateOptionsTimeoutInput() {
    return this._versionTemplateOptionsTimeout;
  }

  // version_template_timeout - computed: false, optional: true, required: false
  private _versionTemplateTimeout?: number; 
  public get versionTemplateTimeout() {
    return this.getNumberAttribute('version_template_timeout');
  }
  public set versionTemplateTimeout(value: number) {
    this._versionTemplateTimeout = value;
  }
  public resetVersionTemplateTimeout() {
    this._versionTemplateTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTemplateTimeoutInput() {
    return this._versionTemplateTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_ipv4_address: cdktf.stringToTerraform(this._destinationIpv4Address),
      destination_ipv6_address: cdktf.stringToTerraform(this._destinationIpv6Address),
      destination_vrf: cdktf.stringToTerraform(this._destinationVrf),
      device: cdktf.stringToTerraform(this._device),
      dfbit_set: cdktf.booleanToTerraform(this._dfbitSet),
      dscp: cdktf.numberToTerraform(this._dscp),
      name: cdktf.stringToTerraform(this._name),
      packet_length: cdktf.numberToTerraform(this._packetLength),
      source: cdktf.stringToTerraform(this._source),
      transport_udp: cdktf.numberToTerraform(this._transportUdp),
      version_export_format: cdktf.stringToTerraform(this._versionExportFormat),
      version_options_class_table_timeout: cdktf.numberToTerraform(this._versionOptionsClassTableTimeout),
      version_options_interface_table_timeout: cdktf.numberToTerraform(this._versionOptionsInterfaceTableTimeout),
      version_options_sampler_table_timeout: cdktf.numberToTerraform(this._versionOptionsSamplerTableTimeout),
      version_options_vrf_table_timeout: cdktf.numberToTerraform(this._versionOptionsVrfTableTimeout),
      version_template_data_timeout: cdktf.numberToTerraform(this._versionTemplateDataTimeout),
      version_template_options_timeout: cdktf.numberToTerraform(this._versionTemplateOptionsTimeout),
      version_template_timeout: cdktf.numberToTerraform(this._versionTemplateTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._destinationIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_ipv6_address: {
        value: cdktf.stringToHclTerraform(this._destinationIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_vrf: {
        value: cdktf.stringToHclTerraform(this._destinationVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dfbit_set: {
        value: cdktf.booleanToHclTerraform(this._dfbitSet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dscp: {
        value: cdktf.numberToHclTerraform(this._dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_length: {
        value: cdktf.numberToHclTerraform(this._packetLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_udp: {
        value: cdktf.numberToHclTerraform(this._transportUdp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_export_format: {
        value: cdktf.stringToHclTerraform(this._versionExportFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_options_class_table_timeout: {
        value: cdktf.numberToHclTerraform(this._versionOptionsClassTableTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_options_interface_table_timeout: {
        value: cdktf.numberToHclTerraform(this._versionOptionsInterfaceTableTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_options_sampler_table_timeout: {
        value: cdktf.numberToHclTerraform(this._versionOptionsSamplerTableTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_options_vrf_table_timeout: {
        value: cdktf.numberToHclTerraform(this._versionOptionsVrfTableTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_template_data_timeout: {
        value: cdktf.numberToHclTerraform(this._versionTemplateDataTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_template_options_timeout: {
        value: cdktf.numberToHclTerraform(this._versionTemplateOptionsTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version_template_timeout: {
        value: cdktf.numberToHclTerraform(this._versionTemplateTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
