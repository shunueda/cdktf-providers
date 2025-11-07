// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowExporterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#delete_mode FlowExporter#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Provide a description for this Flow Exporter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#description FlowExporter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#destination_ip FlowExporter#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#device FlowExporter#device}
  */
  readonly device?: string;
  /**
  * Export protocol version
  *   - Choices: `ipfix`, `netflow-v5`, `netflow-v9`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#export_protocol FlowExporter#export_protocol}
  */
  readonly exportProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#name FlowExporter#name}
  */
  readonly name: string;
  /**
  * Option resend time
  *   - Range: `1`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#option_application_attributes_timeout FlowExporter#option_application_attributes_timeout}
  */
  readonly optionApplicationAttributesTimeout?: number;
  /**
  * Option resend time
  *   - Range: `1`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#option_application_table_timeout FlowExporter#option_application_table_timeout}
  */
  readonly optionApplicationTableTimeout?: number;
  /**
  * Option resend time
  *   - Range: `1`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#option_interface_table_timeout FlowExporter#option_interface_table_timeout}
  */
  readonly optionInterfaceTableTimeout?: number;
  /**
  * Export Sampler Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#option_sampler_table FlowExporter#option_sampler_table}
  */
  readonly optionSamplerTable?: boolean | cdktf.IResolvable;
  /**
  * Option resend time
  *   - Range: `1`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#option_vrf_table_timeout FlowExporter#option_vrf_table_timeout}
  */
  readonly optionVrfTableTimeout?: number;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#source_loopback FlowExporter#source_loopback}
  */
  readonly sourceLoopback?: number;
  /**
  * Resend data based on a timeout
  *   - Range: `1`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#template_data_timeout FlowExporter#template_data_timeout}
  */
  readonly templateDataTimeout?: number;
  /**
  * UDP transport protocol
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#transport_udp FlowExporter#transport_udp}
  */
  readonly transportUdp?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter iosxe_flow_exporter}
*/
export class FlowExporter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_flow_exporter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowExporter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowExporter to import
  * @param importFromId The id of the existing FlowExporter that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowExporter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_flow_exporter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/flow_exporter iosxe_flow_exporter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowExporterConfig
  */
  public constructor(scope: Construct, id: string, config: FlowExporterConfig) {
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
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._destinationIp = config.destinationIp;
    this._device = config.device;
    this._exportProtocol = config.exportProtocol;
    this._name = config.name;
    this._optionApplicationAttributesTimeout = config.optionApplicationAttributesTimeout;
    this._optionApplicationTableTimeout = config.optionApplicationTableTimeout;
    this._optionInterfaceTableTimeout = config.optionInterfaceTableTimeout;
    this._optionSamplerTable = config.optionSamplerTable;
    this._optionVrfTableTimeout = config.optionVrfTableTimeout;
    this._sourceLoopback = config.sourceLoopback;
    this._templateDataTimeout = config.templateDataTimeout;
    this._transportUdp = config.transportUdp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_ip - computed: false, optional: true, required: false
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
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

  // export_protocol - computed: false, optional: true, required: false
  private _exportProtocol?: string; 
  public get exportProtocol() {
    return this.getStringAttribute('export_protocol');
  }
  public set exportProtocol(value: string) {
    this._exportProtocol = value;
  }
  public resetExportProtocol() {
    this._exportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportProtocolInput() {
    return this._exportProtocol;
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

  // option_application_attributes_timeout - computed: false, optional: true, required: false
  private _optionApplicationAttributesTimeout?: number; 
  public get optionApplicationAttributesTimeout() {
    return this.getNumberAttribute('option_application_attributes_timeout');
  }
  public set optionApplicationAttributesTimeout(value: number) {
    this._optionApplicationAttributesTimeout = value;
  }
  public resetOptionApplicationAttributesTimeout() {
    this._optionApplicationAttributesTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionApplicationAttributesTimeoutInput() {
    return this._optionApplicationAttributesTimeout;
  }

  // option_application_table_timeout - computed: false, optional: true, required: false
  private _optionApplicationTableTimeout?: number; 
  public get optionApplicationTableTimeout() {
    return this.getNumberAttribute('option_application_table_timeout');
  }
  public set optionApplicationTableTimeout(value: number) {
    this._optionApplicationTableTimeout = value;
  }
  public resetOptionApplicationTableTimeout() {
    this._optionApplicationTableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionApplicationTableTimeoutInput() {
    return this._optionApplicationTableTimeout;
  }

  // option_interface_table_timeout - computed: false, optional: true, required: false
  private _optionInterfaceTableTimeout?: number; 
  public get optionInterfaceTableTimeout() {
    return this.getNumberAttribute('option_interface_table_timeout');
  }
  public set optionInterfaceTableTimeout(value: number) {
    this._optionInterfaceTableTimeout = value;
  }
  public resetOptionInterfaceTableTimeout() {
    this._optionInterfaceTableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInterfaceTableTimeoutInput() {
    return this._optionInterfaceTableTimeout;
  }

  // option_sampler_table - computed: false, optional: true, required: false
  private _optionSamplerTable?: boolean | cdktf.IResolvable; 
  public get optionSamplerTable() {
    return this.getBooleanAttribute('option_sampler_table');
  }
  public set optionSamplerTable(value: boolean | cdktf.IResolvable) {
    this._optionSamplerTable = value;
  }
  public resetOptionSamplerTable() {
    this._optionSamplerTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionSamplerTableInput() {
    return this._optionSamplerTable;
  }

  // option_vrf_table_timeout - computed: false, optional: true, required: false
  private _optionVrfTableTimeout?: number; 
  public get optionVrfTableTimeout() {
    return this.getNumberAttribute('option_vrf_table_timeout');
  }
  public set optionVrfTableTimeout(value: number) {
    this._optionVrfTableTimeout = value;
  }
  public resetOptionVrfTableTimeout() {
    this._optionVrfTableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionVrfTableTimeoutInput() {
    return this._optionVrfTableTimeout;
  }

  // source_loopback - computed: false, optional: true, required: false
  private _sourceLoopback?: number; 
  public get sourceLoopback() {
    return this.getNumberAttribute('source_loopback');
  }
  public set sourceLoopback(value: number) {
    this._sourceLoopback = value;
  }
  public resetSourceLoopback() {
    this._sourceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLoopbackInput() {
    return this._sourceLoopback;
  }

  // template_data_timeout - computed: false, optional: true, required: false
  private _templateDataTimeout?: number; 
  public get templateDataTimeout() {
    return this.getNumberAttribute('template_data_timeout');
  }
  public set templateDataTimeout(value: number) {
    this._templateDataTimeout = value;
  }
  public resetTemplateDataTimeout() {
    this._templateDataTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDataTimeoutInput() {
    return this._templateDataTimeout;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      destination_ip: cdktf.stringToTerraform(this._destinationIp),
      device: cdktf.stringToTerraform(this._device),
      export_protocol: cdktf.stringToTerraform(this._exportProtocol),
      name: cdktf.stringToTerraform(this._name),
      option_application_attributes_timeout: cdktf.numberToTerraform(this._optionApplicationAttributesTimeout),
      option_application_table_timeout: cdktf.numberToTerraform(this._optionApplicationTableTimeout),
      option_interface_table_timeout: cdktf.numberToTerraform(this._optionInterfaceTableTimeout),
      option_sampler_table: cdktf.booleanToTerraform(this._optionSamplerTable),
      option_vrf_table_timeout: cdktf.numberToTerraform(this._optionVrfTableTimeout),
      source_loopback: cdktf.numberToTerraform(this._sourceLoopback),
      template_data_timeout: cdktf.numberToTerraform(this._templateDataTimeout),
      transport_udp: cdktf.numberToTerraform(this._transportUdp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_ip: {
        value: cdktf.stringToHclTerraform(this._destinationIp),
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
      export_protocol: {
        value: cdktf.stringToHclTerraform(this._exportProtocol),
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
      option_application_attributes_timeout: {
        value: cdktf.numberToHclTerraform(this._optionApplicationAttributesTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      option_application_table_timeout: {
        value: cdktf.numberToHclTerraform(this._optionApplicationTableTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      option_interface_table_timeout: {
        value: cdktf.numberToHclTerraform(this._optionInterfaceTableTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      option_sampler_table: {
        value: cdktf.booleanToHclTerraform(this._optionSamplerTable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      option_vrf_table_timeout: {
        value: cdktf.numberToHclTerraform(this._optionVrfTableTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_loopback: {
        value: cdktf.numberToHclTerraform(this._sourceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_data_timeout: {
        value: cdktf.numberToHclTerraform(this._templateDataTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_udp: {
        value: cdktf.numberToHclTerraform(this._transportUdp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
