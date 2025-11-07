// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_pool_allocation_ip_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpPoolAllocationIpAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP Address that is allocated from the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_pool_allocation_ip_address#allocation_id IpPoolAllocationIpAddress#allocation_id}
  */
  readonly allocationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_pool_allocation_ip_address#id IpPoolAllocationIpAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of IP pool that allocation belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_pool_allocation_ip_address#ip_pool_id IpPoolAllocationIpAddress#ip_pool_id}
  */
  readonly ipPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_pool_allocation_ip_address nsxt_ip_pool_allocation_ip_address}
*/
export class IpPoolAllocationIpAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_ip_pool_allocation_ip_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpPoolAllocationIpAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpPoolAllocationIpAddress to import
  * @param importFromId The id of the existing IpPoolAllocationIpAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_pool_allocation_ip_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpPoolAllocationIpAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_ip_pool_allocation_ip_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/ip_pool_allocation_ip_address nsxt_ip_pool_allocation_ip_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpPoolAllocationIpAddressConfig
  */
  public constructor(scope: Construct, id: string, config: IpPoolAllocationIpAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_ip_pool_allocation_ip_address',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocationId = config.allocationId;
    this._id = config.id;
    this._ipPoolId = config.ipPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_id - computed: true, optional: true, required: false
  private _allocationId?: string; 
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }
  public set allocationId(value: string) {
    this._allocationId = value;
  }
  public resetAllocationId() {
    this._allocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationIdInput() {
    return this._allocationId;
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

  // ip_pool_id - computed: false, optional: false, required: true
  private _ipPoolId?: string; 
  public get ipPoolId() {
    return this.getStringAttribute('ip_pool_id');
  }
  public set ipPoolId(value: string) {
    this._ipPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolIdInput() {
    return this._ipPoolId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_id: cdktf.stringToTerraform(this._allocationId),
      id: cdktf.stringToTerraform(this._id),
      ip_pool_id: cdktf.stringToTerraform(this._ipPoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_id: {
        value: cdktf.stringToHclTerraform(this._allocationId),
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
      ip_pool_id: {
        value: cdktf.stringToHclTerraform(this._ipPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
