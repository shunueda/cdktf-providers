// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iploadbalancing_vrack_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhIploadbalancingVrackNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iploadbalancing_vrack_network#id DataOvhIploadbalancingVrackNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The internal name of your IPloadbalancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iploadbalancing_vrack_network#service_name DataOvhIploadbalancingVrackNetwork#service_name}
  */
  readonly serviceName: string;
  /**
  * Internal Load Balancer identifier of the vRack private network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iploadbalancing_vrack_network#vrack_network_id DataOvhIploadbalancingVrackNetwork#vrack_network_id}
  */
  readonly vrackNetworkId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iploadbalancing_vrack_network ovh_iploadbalancing_vrack_network}
*/
export class DataOvhIploadbalancingVrackNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_iploadbalancing_vrack_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhIploadbalancingVrackNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhIploadbalancingVrackNetwork to import
  * @param importFromId The id of the existing DataOvhIploadbalancingVrackNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iploadbalancing_vrack_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhIploadbalancingVrackNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_iploadbalancing_vrack_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iploadbalancing_vrack_network ovh_iploadbalancing_vrack_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhIploadbalancingVrackNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhIploadbalancingVrackNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_iploadbalancing_vrack_network',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
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
    this._serviceName = config.serviceName;
    this._vrackNetworkId = config.vrackNetworkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // nat_ip - computed: true, optional: false, required: false
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // vrack_network_id - computed: false, optional: false, required: true
  private _vrackNetworkId?: number; 
  public get vrackNetworkId() {
    return this.getNumberAttribute('vrack_network_id');
  }
  public set vrackNetworkId(value: number) {
    this._vrackNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrackNetworkIdInput() {
    return this._vrackNetworkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service_name: cdktf.stringToTerraform(this._serviceName),
      vrack_network_id: cdktf.numberToTerraform(this._vrackNetworkId),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrack_network_id: {
        value: cdktf.numberToHclTerraform(this._vrackNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
