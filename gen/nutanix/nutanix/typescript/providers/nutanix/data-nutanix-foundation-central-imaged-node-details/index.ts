// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_node_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixFoundationCentralImagedNodeDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_node_details#id DataNutanixFoundationCentralImagedNodeDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_node_details#imaged_node_uuid DataNutanixFoundationCentralImagedNodeDetails#imaged_node_uuid}
  */
  readonly imagedNodeUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_node_details#ipv6_interface DataNutanixFoundationCentralImagedNodeDetails#ipv6_interface}
  */
  readonly ipv6Interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_node_details#object_version DataNutanixFoundationCentralImagedNodeDetails#object_version}
  */
  readonly objectVersion?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_node_details nutanix_foundation_central_imaged_node_details}
*/
export class DataNutanixFoundationCentralImagedNodeDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_foundation_central_imaged_node_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixFoundationCentralImagedNodeDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixFoundationCentralImagedNodeDetails to import
  * @param importFromId The id of the existing DataNutanixFoundationCentralImagedNodeDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_node_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixFoundationCentralImagedNodeDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_foundation_central_imaged_node_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_central_imaged_node_details nutanix_foundation_central_imaged_node_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixFoundationCentralImagedNodeDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataNutanixFoundationCentralImagedNodeDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_foundation_central_imaged_node_details',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
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
    this._imagedNodeUuid = config.imagedNodeUuid;
    this._ipv6Interface = config.ipv6Interface;
    this._objectVersion = config.objectVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aos_version - computed: true, optional: false, required: false
  public get aosVersion() {
    return this.getStringAttribute('aos_version');
  }

  // api_key_uuid - computed: true, optional: false, required: false
  public get apiKeyUuid() {
    return this.getStringAttribute('api_key_uuid');
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getBooleanAttribute('available');
  }

  // block_serial - computed: true, optional: false, required: false
  public get blockSerial() {
    return this.getStringAttribute('block_serial');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // current_time - computed: true, optional: false, required: false
  public get currentTime() {
    return this.getStringAttribute('current_time');
  }

  // cvm_gateway - computed: true, optional: false, required: false
  public get cvmGateway() {
    return this.getStringAttribute('cvm_gateway');
  }

  // cvm_ip - computed: true, optional: false, required: false
  public get cvmIp() {
    return this.getStringAttribute('cvm_ip');
  }

  // cvm_ipv6 - computed: true, optional: false, required: false
  public get cvmIpv6() {
    return this.getStringAttribute('cvm_ipv6');
  }

  // cvm_netmask - computed: true, optional: false, required: false
  public get cvmNetmask() {
    return this.getStringAttribute('cvm_netmask');
  }

  // cvm_up - computed: true, optional: false, required: false
  public get cvmUp() {
    return this.getBooleanAttribute('cvm_up');
  }

  // cvm_uuid - computed: true, optional: false, required: false
  public get cvmUuid() {
    return this.getStringAttribute('cvm_uuid');
  }

  // cvm_vlan_id - computed: true, optional: false, required: false
  public get cvmVlanId() {
    return this.getNumberAttribute('cvm_vlan_id');
  }

  // foundation_version - computed: true, optional: false, required: false
  public get foundationVersion() {
    return this.getStringAttribute('foundation_version');
  }

  // hardware_attributes - computed: true, optional: false, required: false
  private _hardwareAttributes = new cdktf.StringMap(this, "hardware_attributes");
  public get hardwareAttributes() {
    return this._hardwareAttributes;
  }

  // hypervisor_gateway - computed: true, optional: false, required: false
  public get hypervisorGateway() {
    return this.getStringAttribute('hypervisor_gateway');
  }

  // hypervisor_hostname - computed: true, optional: false, required: false
  public get hypervisorHostname() {
    return this.getStringAttribute('hypervisor_hostname');
  }

  // hypervisor_ip - computed: true, optional: false, required: false
  public get hypervisorIp() {
    return this.getStringAttribute('hypervisor_ip');
  }

  // hypervisor_netmask - computed: true, optional: false, required: false
  public get hypervisorNetmask() {
    return this.getStringAttribute('hypervisor_netmask');
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }

  // hypervisor_version - computed: true, optional: false, required: false
  public get hypervisorVersion() {
    return this.getStringAttribute('hypervisor_version');
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

  // imaged_cluster_uuid - computed: true, optional: false, required: false
  public get imagedClusterUuid() {
    return this.getStringAttribute('imaged_cluster_uuid');
  }

  // imaged_node_uuid - computed: false, optional: false, required: true
  private _imagedNodeUuid?: string; 
  public get imagedNodeUuid() {
    return this.getStringAttribute('imaged_node_uuid');
  }
  public set imagedNodeUuid(value: string) {
    this._imagedNodeUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imagedNodeUuidInput() {
    return this._imagedNodeUuid;
  }

  // ipmi_gateway - computed: true, optional: false, required: false
  public get ipmiGateway() {
    return this.getStringAttribute('ipmi_gateway');
  }

  // ipmi_ip - computed: true, optional: false, required: false
  public get ipmiIp() {
    return this.getStringAttribute('ipmi_ip');
  }

  // ipmi_netmask - computed: true, optional: false, required: false
  public get ipmiNetmask() {
    return this.getStringAttribute('ipmi_netmask');
  }

  // ipv6_interface - computed: true, optional: true, required: false
  private _ipv6Interface?: string; 
  public get ipv6Interface() {
    return this.getStringAttribute('ipv6_interface');
  }
  public set ipv6Interface(value: string) {
    this._ipv6Interface = value;
  }
  public resetIpv6Interface() {
    this._ipv6Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6InterfaceInput() {
    return this._ipv6Interface;
  }

  // latest_hb_ts_list - computed: true, optional: false, required: false
  public get latestHbTsList() {
    return this.getListAttribute('latest_hb_ts_list');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // node_position - computed: true, optional: false, required: false
  public get nodePosition() {
    return this.getStringAttribute('node_position');
  }

  // node_serial - computed: true, optional: false, required: false
  public get nodeSerial() {
    return this.getStringAttribute('node_serial');
  }

  // node_state - computed: true, optional: false, required: false
  public get nodeState() {
    return this.getStringAttribute('node_state');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // object_version - computed: true, optional: true, required: false
  private _objectVersion?: number; 
  public get objectVersion() {
    return this.getNumberAttribute('object_version');
  }
  public set objectVersion(value: number) {
    this._objectVersion = value;
  }
  public resetObjectVersion() {
    this._objectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectVersionInput() {
    return this._objectVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      imaged_node_uuid: cdktf.stringToTerraform(this._imagedNodeUuid),
      ipv6_interface: cdktf.stringToTerraform(this._ipv6Interface),
      object_version: cdktf.numberToTerraform(this._objectVersion),
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
      imaged_node_uuid: {
        value: cdktf.stringToHclTerraform(this._imagedNodeUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_interface: {
        value: cdktf.stringToHclTerraform(this._ipv6Interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_version: {
        value: cdktf.numberToHclTerraform(this._objectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
