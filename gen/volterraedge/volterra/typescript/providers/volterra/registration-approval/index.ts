// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistrationApprovalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval#cluster_name RegistrationApproval#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval#cluster_size RegistrationApproval#cluster_size}
  */
  readonly clusterSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval#connected_region RegistrationApproval#connected_region}
  */
  readonly connectedRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval#hostname RegistrationApproval#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval#id RegistrationApproval#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval#latitude RegistrationApproval#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval#longitude RegistrationApproval#longitude}
  */
  readonly longitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval#private_network_name RegistrationApproval#private_network_name}
  */
  readonly privateNetworkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval#retry RegistrationApproval#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval#tunnel_type RegistrationApproval#tunnel_type}
  */
  readonly tunnelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval#wait_time RegistrationApproval#wait_time}
  */
  readonly waitTime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval volterra_registration_approval}
*/
export class RegistrationApproval extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_registration_approval";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RegistrationApproval resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RegistrationApproval to import
  * @param importFromId The id of the existing RegistrationApproval that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RegistrationApproval to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_registration_approval", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/registration_approval volterra_registration_approval} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistrationApprovalConfig
  */
  public constructor(scope: Construct, id: string, config: RegistrationApprovalConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_registration_approval',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._clusterSize = config.clusterSize;
    this._connectedRegion = config.connectedRegion;
    this._hostname = config.hostname;
    this._id = config.id;
    this._latitude = config.latitude;
    this._longitude = config.longitude;
    this._privateNetworkName = config.privateNetworkName;
    this._retry = config.retry;
    this._tunnelType = config.tunnelType;
    this._waitTime = config.waitTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_size - computed: false, optional: false, required: true
  private _clusterSize?: number; 
  public get clusterSize() {
    return this.getNumberAttribute('cluster_size');
  }
  public set clusterSize(value: number) {
    this._clusterSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSizeInput() {
    return this._clusterSize;
  }

  // connected_region - computed: false, optional: true, required: false
  private _connectedRegion?: string; 
  public get connectedRegion() {
    return this.getStringAttribute('connected_region');
  }
  public set connectedRegion(value: string) {
    this._connectedRegion = value;
  }
  public resetConnectedRegion() {
    this._connectedRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedRegionInput() {
    return this._connectedRegion;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // private_network_name - computed: false, optional: true, required: false
  private _privateNetworkName?: string; 
  public get privateNetworkName() {
    return this.getStringAttribute('private_network_name');
  }
  public set privateNetworkName(value: string) {
    this._privateNetworkName = value;
  }
  public resetPrivateNetworkName() {
    this._privateNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkNameInput() {
    return this._privateNetworkName;
  }

  // registration_name - computed: true, optional: false, required: false
  public get registrationName() {
    return this.getStringAttribute('registration_name');
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // tunnel_type - computed: false, optional: true, required: false
  private _tunnelType?: string; 
  public get tunnelType() {
    return this.getStringAttribute('tunnel_type');
  }
  public set tunnelType(value: string) {
    this._tunnelType = value;
  }
  public resetTunnelType() {
    this._tunnelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelTypeInput() {
    return this._tunnelType;
  }

  // wait_time - computed: false, optional: true, required: false
  private _waitTime?: number; 
  public get waitTime() {
    return this.getNumberAttribute('wait_time');
  }
  public set waitTime(value: number) {
    this._waitTime = value;
  }
  public resetWaitTime() {
    this._waitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeInput() {
    return this._waitTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_size: cdktf.numberToTerraform(this._clusterSize),
      connected_region: cdktf.stringToTerraform(this._connectedRegion),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      latitude: cdktf.numberToTerraform(this._latitude),
      longitude: cdktf.numberToTerraform(this._longitude),
      private_network_name: cdktf.stringToTerraform(this._privateNetworkName),
      retry: cdktf.numberToTerraform(this._retry),
      tunnel_type: cdktf.stringToTerraform(this._tunnelType),
      wait_time: cdktf.numberToTerraform(this._waitTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_size: {
        value: cdktf.numberToHclTerraform(this._clusterSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connected_region: {
        value: cdktf.stringToHclTerraform(this._connectedRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latitude: {
        value: cdktf.numberToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      longitude: {
        value: cdktf.numberToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_network_name: {
        value: cdktf.stringToHclTerraform(this._privateNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_type: {
        value: cdktf.stringToHclTerraform(this._tunnelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_time: {
        value: cdktf.numberToHclTerraform(this._waitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
