// https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataServerscomSbmServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_server#id DataServerscomSbmServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_server serverscom_sbm_server}
*/
export class DataServerscomSbmServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverscom_sbm_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataServerscomSbmServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataServerscomSbmServer to import
  * @param importFromId The id of the existing DataServerscomSbmServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataServerscomSbmServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverscom_sbm_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/serverscom/serverscom/0.5.2/docs/data-sources/sbm_server serverscom_sbm_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataServerscomSbmServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataServerscomSbmServerConfig) {
    super(scope, id, {
      terraformResourceType: 'serverscom_sbm_server',
      terraformGeneratorMetadata: {
        providerName: 'serverscom',
        providerVersion: '0.5.2',
        providerVersionConstraint: '0.5.2'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_id - computed: true, optional: false, required: false
  public get bandwidthId() {
    return this.getNumberAttribute('bandwidth_id');
  }

  // bandwidth_name - computed: true, optional: false, required: false
  public get bandwidthName() {
    return this.getStringAttribute('bandwidth_name');
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.getStringAttribute('configuration');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // lease_start_at - computed: true, optional: false, required: false
  public get leaseStartAt() {
    return this.getStringAttribute('lease_start_at');
  }

  // location_code - computed: true, optional: false, required: false
  public get locationCode() {
    return this.getStringAttribute('location_code');
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }

  // oob_ipv4_address - computed: true, optional: false, required: false
  public get oobIpv4Address() {
    return this.getStringAttribute('oob_ipv4_address');
  }

  // operating_system_full_name - computed: true, optional: false, required: false
  public get operatingSystemFullName() {
    return this.getStringAttribute('operating_system_full_name');
  }

  // operating_system_id - computed: true, optional: false, required: false
  public get operatingSystemId() {
    return this.getNumberAttribute('operating_system_id');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // power_status - computed: true, optional: false, required: false
  public get powerStatus() {
    return this.getStringAttribute('power_status');
  }

  // private_ipv4_address - computed: true, optional: false, required: false
  public get privateIpv4Address() {
    return this.getStringAttribute('private_ipv4_address');
  }

  // private_uplink_id - computed: true, optional: false, required: false
  public get privateUplinkId() {
    return this.getNumberAttribute('private_uplink_id');
  }

  // private_uplink_name - computed: true, optional: false, required: false
  public get privateUplinkName() {
    return this.getStringAttribute('private_uplink_name');
  }

  // public_ipv4_address - computed: true, optional: false, required: false
  public get publicIpv4Address() {
    return this.getStringAttribute('public_ipv4_address');
  }

  // public_uplink_id - computed: true, optional: false, required: false
  public get publicUplinkId() {
    return this.getNumberAttribute('public_uplink_id');
  }

  // public_uplink_name - computed: true, optional: false, required: false
  public get publicUplinkName() {
    return this.getStringAttribute('public_uplink_name');
  }

  // rack_id - computed: true, optional: false, required: false
  public get rackId() {
    return this.getStringAttribute('rack_id');
  }

  // ram_size - computed: true, optional: false, required: false
  public get ramSize() {
    return this.getNumberAttribute('ram_size');
  }

  // scheduled_release_at - computed: true, optional: false, required: false
  public get scheduledReleaseAt() {
    return this.getStringAttribute('scheduled_release_at');
  }

  // server_model_id - computed: true, optional: false, required: false
  public get serverModelId() {
    return this.getNumberAttribute('server_model_id');
  }

  // server_model_name - computed: true, optional: false, required: false
  public get serverModelName() {
    return this.getStringAttribute('server_model_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
