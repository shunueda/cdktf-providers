// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciResourcemanagerPrivateEndpointReachableIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#id DataOciResourcemanagerPrivateEndpointReachableIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#private_endpoint_id DataOciResourcemanagerPrivateEndpointReachableIp#private_endpoint_id}
  */
  readonly privateEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#private_ip DataOciResourcemanagerPrivateEndpointReachableIp#private_ip}
  */
  readonly privateIp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip oci_resourcemanager_private_endpoint_reachable_ip}
*/
export class DataOciResourcemanagerPrivateEndpointReachableIp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_resourcemanager_private_endpoint_reachable_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciResourcemanagerPrivateEndpointReachableIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciResourcemanagerPrivateEndpointReachableIp to import
  * @param importFromId The id of the existing DataOciResourcemanagerPrivateEndpointReachableIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciResourcemanagerPrivateEndpointReachableIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_resourcemanager_private_endpoint_reachable_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resourcemanager_private_endpoint_reachable_ip oci_resourcemanager_private_endpoint_reachable_ip} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciResourcemanagerPrivateEndpointReachableIpConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciResourcemanagerPrivateEndpointReachableIpConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_resourcemanager_private_endpoint_reachable_ip',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._privateEndpointId = config.privateEndpointId;
    this._privateIp = config.privateIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // private_endpoint_id - computed: false, optional: false, required: true
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // private_ip - computed: false, optional: false, required: true
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      private_endpoint_id: cdktf.stringToTerraform(this._privateEndpointId),
      private_ip: cdktf.stringToTerraform(this._privateIp),
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
      private_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._privateEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
