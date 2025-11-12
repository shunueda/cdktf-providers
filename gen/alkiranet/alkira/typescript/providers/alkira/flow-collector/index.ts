// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowCollectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of the flow collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#collector_type FlowCollector#collector_type}
  */
  readonly collectorType?: string;
  /**
  * A list of CXPs where the collector should be provisioned for flow collecting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#cxps FlowCollector#cxps}
  */
  readonly cxps: string[];
  /**
  * The description of the flow collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#description FlowCollector#description}
  */
  readonly description?: string;
  /**
  * The destination FQDN of the flow collector where flow would be sent. Either `destination_ip` or `destination_fqdn` are required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#destination_fqdn FlowCollector#destination_fqdn}
  */
  readonly destinationFqdn?: string;
  /**
  * The destination IP of the flow collector where flow would be sent. Either `destination_ip` or `destination_fqdn` are required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#destination_ip FlowCollector#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * The destination port of the flow collector where flow would be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#destination_port FlowCollector#destination_port}
  */
  readonly destinationPort: number;
  /**
  * Whether the flow collector is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#enabled FlowCollector#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The flow records export type. Only `IPFIX` is supported for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#export_type FlowCollector#export_type}
  */
  readonly exportType?: string;
  /**
  * The flow records template ID. Currently only default template ID `1` is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#flow_record_template_id FlowCollector#flow_record_template_id}
  */
  readonly flowRecordTemplateId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#id FlowCollector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the flow collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#name FlowCollector#name}
  */
  readonly name: string;
  /**
  * The segment on which flow export destination is reachable. This should not be specified when destination is reachable via internet. Also, segment can only be used when `destination_ip` is provided, `destination_fqdn` is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#segment_id FlowCollector#segment_id}
  */
  readonly segmentId?: string;
  /**
  * The transport protocol to send the flow records to destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#transport_protocol FlowCollector#transport_protocol}
  */
  readonly transportProtocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector alkira_flow_collector}
*/
export class FlowCollector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_flow_collector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowCollector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowCollector to import
  * @param importFromId The id of the existing FlowCollector that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowCollector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_flow_collector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/flow_collector alkira_flow_collector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowCollectorConfig
  */
  public constructor(scope: Construct, id: string, config: FlowCollectorConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_flow_collector',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectorType = config.collectorType;
    this._cxps = config.cxps;
    this._description = config.description;
    this._destinationFqdn = config.destinationFqdn;
    this._destinationIp = config.destinationIp;
    this._destinationPort = config.destinationPort;
    this._enabled = config.enabled;
    this._exportType = config.exportType;
    this._flowRecordTemplateId = config.flowRecordTemplateId;
    this._id = config.id;
    this._name = config.name;
    this._segmentId = config.segmentId;
    this._transportProtocol = config.transportProtocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collector_type - computed: false, optional: true, required: false
  private _collectorType?: string; 
  public get collectorType() {
    return this.getStringAttribute('collector_type');
  }
  public set collectorType(value: string) {
    this._collectorType = value;
  }
  public resetCollectorType() {
    this._collectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorTypeInput() {
    return this._collectorType;
  }

  // cxps - computed: false, optional: false, required: true
  private _cxps?: string[]; 
  public get cxps() {
    return this.getListAttribute('cxps');
  }
  public set cxps(value: string[]) {
    this._cxps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpsInput() {
    return this._cxps;
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

  // destination_fqdn - computed: false, optional: true, required: false
  private _destinationFqdn?: string; 
  public get destinationFqdn() {
    return this.getStringAttribute('destination_fqdn');
  }
  public set destinationFqdn(value: string) {
    this._destinationFqdn = value;
  }
  public resetDestinationFqdn() {
    this._destinationFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFqdnInput() {
    return this._destinationFqdn;
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

  // destination_port - computed: false, optional: false, required: true
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // export_type - computed: false, optional: true, required: false
  private _exportType?: string; 
  public get exportType() {
    return this.getStringAttribute('export_type');
  }
  public set exportType(value: string) {
    this._exportType = value;
  }
  public resetExportType() {
    this._exportType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTypeInput() {
    return this._exportType;
  }

  // flow_record_template_id - computed: false, optional: true, required: false
  private _flowRecordTemplateId?: number; 
  public get flowRecordTemplateId() {
    return this.getNumberAttribute('flow_record_template_id');
  }
  public set flowRecordTemplateId(value: number) {
    this._flowRecordTemplateId = value;
  }
  public resetFlowRecordTemplateId() {
    this._flowRecordTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowRecordTemplateIdInput() {
    return this._flowRecordTemplateId;
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

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // segment_id - computed: false, optional: true, required: false
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // transport_protocol - computed: false, optional: true, required: false
  private _transportProtocol?: string; 
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }
  public set transportProtocol(value: string) {
    this._transportProtocol = value;
  }
  public resetTransportProtocol() {
    this._transportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportProtocolInput() {
    return this._transportProtocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collector_type: cdktf.stringToTerraform(this._collectorType),
      cxps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cxps),
      description: cdktf.stringToTerraform(this._description),
      destination_fqdn: cdktf.stringToTerraform(this._destinationFqdn),
      destination_ip: cdktf.stringToTerraform(this._destinationIp),
      destination_port: cdktf.numberToTerraform(this._destinationPort),
      enabled: cdktf.booleanToTerraform(this._enabled),
      export_type: cdktf.stringToTerraform(this._exportType),
      flow_record_template_id: cdktf.numberToTerraform(this._flowRecordTemplateId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      transport_protocol: cdktf.stringToTerraform(this._transportProtocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collector_type: {
        value: cdktf.stringToHclTerraform(this._collectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cxps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cxps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_fqdn: {
        value: cdktf.stringToHclTerraform(this._destinationFqdn),
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
      destination_port: {
        value: cdktf.numberToHclTerraform(this._destinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_type: {
        value: cdktf.stringToHclTerraform(this._exportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_record_template_id: {
        value: cdktf.numberToHclTerraform(this._flowRecordTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_protocol: {
        value: cdktf.stringToHclTerraform(this._transportProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
