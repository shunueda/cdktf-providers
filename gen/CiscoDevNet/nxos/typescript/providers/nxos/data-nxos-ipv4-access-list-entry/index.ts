// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ipv4_access_list_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosIpv4AccessListEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ipv4_access_list_entry#device DataNxosIpv4AccessListEntry#device}
  */
  readonly device?: string;
  /**
  * Access list name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ipv4_access_list_entry#name DataNxosIpv4AccessListEntry#name}
  */
  readonly name: string;
  /**
  * Sequence number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ipv4_access_list_entry#sequence_number DataNxosIpv4AccessListEntry#sequence_number}
  */
  readonly sequenceNumber: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ipv4_access_list_entry nxos_ipv4_access_list_entry}
*/
export class DataNxosIpv4AccessListEntry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ipv4_access_list_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosIpv4AccessListEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosIpv4AccessListEntry to import
  * @param importFromId The id of the existing DataNxosIpv4AccessListEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ipv4_access_list_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosIpv4AccessListEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ipv4_access_list_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/ipv4_access_list_entry nxos_ipv4_access_list_entry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosIpv4AccessListEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataNxosIpv4AccessListEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_ipv4_access_list_entry',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
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
    this._sequenceNumber = config.sequenceNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack - computed: true, optional: false, required: false
  public get ack() {
    return this.getBooleanAttribute('ack');
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // destination_address_group - computed: true, optional: false, required: false
  public get destinationAddressGroup() {
    return this.getStringAttribute('destination_address_group');
  }

  // destination_port_1 - computed: true, optional: false, required: false
  public get destinationPort1() {
    return this.getStringAttribute('destination_port_1');
  }

  // destination_port_2 - computed: true, optional: false, required: false
  public get destinationPort2() {
    return this.getStringAttribute('destination_port_2');
  }

  // destination_port_group - computed: true, optional: false, required: false
  public get destinationPortGroup() {
    return this.getStringAttribute('destination_port_group');
  }

  // destination_port_mask - computed: true, optional: false, required: false
  public get destinationPortMask() {
    return this.getStringAttribute('destination_port_mask');
  }

  // destination_port_operator - computed: true, optional: false, required: false
  public get destinationPortOperator() {
    return this.getStringAttribute('destination_port_operator');
  }

  // destination_prefix - computed: true, optional: false, required: false
  public get destinationPrefix() {
    return this.getStringAttribute('destination_prefix');
  }

  // destination_prefix_length - computed: true, optional: false, required: false
  public get destinationPrefixLength() {
    return this.getStringAttribute('destination_prefix_length');
  }

  // destination_prefix_mask - computed: true, optional: false, required: false
  public get destinationPrefixMask() {
    return this.getStringAttribute('destination_prefix_mask');
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

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }

  // est - computed: true, optional: false, required: false
  public get est() {
    return this.getBooleanAttribute('est');
  }

  // fin - computed: true, optional: false, required: false
  public get fin() {
    return this.getBooleanAttribute('fin');
  }

  // fragment - computed: true, optional: false, required: false
  public get fragment() {
    return this.getBooleanAttribute('fragment');
  }

  // http_option_type - computed: true, optional: false, required: false
  public get httpOptionType() {
    return this.getStringAttribute('http_option_type');
  }

  // icmp_code - computed: true, optional: false, required: false
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }

  // icmp_type - computed: true, optional: false, required: false
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging - computed: true, optional: false, required: false
  public get logging() {
    return this.getBooleanAttribute('logging');
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

  // packet_length_1 - computed: true, optional: false, required: false
  public get packetLength1() {
    return this.getStringAttribute('packet_length_1');
  }

  // packet_length_2 - computed: true, optional: false, required: false
  public get packetLength2() {
    return this.getStringAttribute('packet_length_2');
  }

  // packet_length_operator - computed: true, optional: false, required: false
  public get packetLengthOperator() {
    return this.getStringAttribute('packet_length_operator');
  }

  // precedence - computed: true, optional: false, required: false
  public get precedence() {
    return this.getStringAttribute('precedence');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_mask - computed: true, optional: false, required: false
  public get protocolMask() {
    return this.getStringAttribute('protocol_mask');
  }

  // psh - computed: true, optional: false, required: false
  public get psh() {
    return this.getBooleanAttribute('psh');
  }

  // redirect - computed: true, optional: false, required: false
  public get redirect() {
    return this.getStringAttribute('redirect');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // rev - computed: true, optional: false, required: false
  public get rev() {
    return this.getBooleanAttribute('rev');
  }

  // rst - computed: true, optional: false, required: false
  public get rst() {
    return this.getBooleanAttribute('rst');
  }

  // sequence_number - computed: false, optional: false, required: true
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }

  // source_address_group - computed: true, optional: false, required: false
  public get sourceAddressGroup() {
    return this.getStringAttribute('source_address_group');
  }

  // source_port_1 - computed: true, optional: false, required: false
  public get sourcePort1() {
    return this.getStringAttribute('source_port_1');
  }

  // source_port_2 - computed: true, optional: false, required: false
  public get sourcePort2() {
    return this.getStringAttribute('source_port_2');
  }

  // source_port_group - computed: true, optional: false, required: false
  public get sourcePortGroup() {
    return this.getStringAttribute('source_port_group');
  }

  // source_port_mask - computed: true, optional: false, required: false
  public get sourcePortMask() {
    return this.getStringAttribute('source_port_mask');
  }

  // source_port_operator - computed: true, optional: false, required: false
  public get sourcePortOperator() {
    return this.getStringAttribute('source_port_operator');
  }

  // source_prefix - computed: true, optional: false, required: false
  public get sourcePrefix() {
    return this.getStringAttribute('source_prefix');
  }

  // source_prefix_length - computed: true, optional: false, required: false
  public get sourcePrefixLength() {
    return this.getStringAttribute('source_prefix_length');
  }

  // source_prefix_mask - computed: true, optional: false, required: false
  public get sourcePrefixMask() {
    return this.getStringAttribute('source_prefix_mask');
  }

  // syn - computed: true, optional: false, required: false
  public get syn() {
    return this.getBooleanAttribute('syn');
  }

  // time_range - computed: true, optional: false, required: false
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // urg - computed: true, optional: false, required: false
  public get urg() {
    return this.getBooleanAttribute('urg');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // vni - computed: true, optional: false, required: false
  public get vni() {
    return this.getStringAttribute('vni');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      sequence_number: cdktf.numberToTerraform(this._sequenceNumber),
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
      sequence_number: {
        value: cdktf.numberToHclTerraform(this._sequenceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
