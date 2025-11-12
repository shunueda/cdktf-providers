// https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/vm_cloud_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmCloudConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/vm_cloud_config#cloud_fqdn VmCloudConfig#cloud_fqdn}
  */
  readonly cloudFqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/vm_cloud_config#id VmCloudConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/vm_cloud_config#public_ip_address VmCloudConfig#public_ip_address}
  */
  readonly publicIpAddress: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/vm_cloud_config nutanixkps_vm_cloud_config}
*/
export class VmCloudConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanixkps_vm_cloud_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmCloudConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmCloudConfig to import
  * @param importFromId The id of the existing VmCloudConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/vm_cloud_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmCloudConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanixkps_vm_cloud_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/vm_cloud_config nutanixkps_vm_cloud_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmCloudConfigConfig
  */
  public constructor(scope: Construct, id: string, config: VmCloudConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanixkps_vm_cloud_config',
      terraformGeneratorMetadata: {
        providerName: 'nutanixkps',
        providerVersion: '1.1.9',
        providerVersionConstraint: '1.1.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudFqdn = config.cloudFqdn;
    this._id = config.id;
    this._publicIpAddress = config.publicIpAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_fqdn - computed: false, optional: false, required: true
  private _cloudFqdn?: string; 
  public get cloudFqdn() {
    return this.getStringAttribute('cloud_fqdn');
  }
  public set cloudFqdn(value: string) {
    this._cloudFqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFqdnInput() {
    return this._cloudFqdn;
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

  // public_ip_address - computed: false, optional: false, required: true
  private _publicIpAddress?: string; 
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }
  public set publicIpAddress(value: string) {
    this._publicIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressInput() {
    return this._publicIpAddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_fqdn: cdktf.stringToTerraform(this._cloudFqdn),
      id: cdktf.stringToTerraform(this._id),
      public_ip_address: cdktf.stringToTerraform(this._publicIpAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_fqdn: {
        value: cdktf.stringToHclTerraform(this._cloudFqdn),
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
      public_ip_address: {
        value: cdktf.stringToHclTerraform(this._publicIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
