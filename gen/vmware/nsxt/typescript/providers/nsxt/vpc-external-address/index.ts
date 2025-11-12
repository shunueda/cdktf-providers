// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_external_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcExternalAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * allocated ip path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_external_address#allocated_external_ip_path VpcExternalAddress#allocated_external_ip_path}
  */
  readonly allocatedExternalIpPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_external_address#id VpcExternalAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * port path for address binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_external_address#parent_path VpcExternalAddress#parent_path}
  */
  readonly parentPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_external_address nsxt_vpc_external_address}
*/
export class VpcExternalAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_vpc_external_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcExternalAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcExternalAddress to import
  * @param importFromId The id of the existing VpcExternalAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_external_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcExternalAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_vpc_external_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_external_address nsxt_vpc_external_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcExternalAddressConfig
  */
  public constructor(scope: Construct, id: string, config: VpcExternalAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_vpc_external_address',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocatedExternalIpPath = config.allocatedExternalIpPath;
    this._id = config.id;
    this._parentPath = config.parentPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_external_ip_path - computed: false, optional: false, required: true
  private _allocatedExternalIpPath?: string; 
  public get allocatedExternalIpPath() {
    return this.getStringAttribute('allocated_external_ip_path');
  }
  public set allocatedExternalIpPath(value: string) {
    this._allocatedExternalIpPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedExternalIpPathInput() {
    return this._allocatedExternalIpPath;
  }

  // external_ip_address - computed: true, optional: false, required: false
  public get externalIpAddress() {
    return this.getStringAttribute('external_ip_address');
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

  // parent_path - computed: false, optional: false, required: true
  private _parentPath?: string; 
  public get parentPath() {
    return this.getStringAttribute('parent_path');
  }
  public set parentPath(value: string) {
    this._parentPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPathInput() {
    return this._parentPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_external_ip_path: cdktf.stringToTerraform(this._allocatedExternalIpPath),
      id: cdktf.stringToTerraform(this._id),
      parent_path: cdktf.stringToTerraform(this._parentPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocated_external_ip_path: {
        value: cdktf.stringToHclTerraform(this._allocatedExternalIpPath),
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
      parent_path: {
        value: cdktf.stringToHclTerraform(this._parentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
