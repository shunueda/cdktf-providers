// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_ip_allocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdIpSpaceIpAllocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP Allocation Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_ip_allocation#description DataVcdIpSpaceIpAllocation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_ip_allocation#id DataVcdIpSpaceIpAllocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP Address or Prefix of the allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_ip_allocation#ip_address DataVcdIpSpaceIpAllocation#ip_address}
  */
  readonly ipAddress: string;
  /**
  * IP Space ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_ip_allocation#ip_space_id DataVcdIpSpaceIpAllocation#ip_space_id}
  */
  readonly ipSpaceId: string;
  /**
  * Org ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_ip_allocation#org_id DataVcdIpSpaceIpAllocation#org_id}
  */
  readonly orgId: string;
  /**
  * Type of IP Allocation. One of 'FLOATING_IP' or 'IP_PREFIX'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_ip_allocation#type DataVcdIpSpaceIpAllocation#type}
  */
  readonly type: string;
  /**
  * One of 'UNUSED', 'USED', 'USED_MANUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_ip_allocation#usage_state DataVcdIpSpaceIpAllocation#usage_state}
  */
  readonly usageState?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_ip_allocation vcd_ip_space_ip_allocation}
*/
export class DataVcdIpSpaceIpAllocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_ip_space_ip_allocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdIpSpaceIpAllocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdIpSpaceIpAllocation to import
  * @param importFromId The id of the existing DataVcdIpSpaceIpAllocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_ip_allocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdIpSpaceIpAllocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_ip_space_ip_allocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_ip_allocation vcd_ip_space_ip_allocation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdIpSpaceIpAllocationConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdIpSpaceIpAllocationConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_ip_space_ip_allocation',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._ipSpaceId = config.ipSpaceId;
    this._orgId = config.orgId;
    this._type = config.type;
    this._usageState = config.usageState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_date - computed: true, optional: false, required: false
  public get allocationDate() {
    return this.getStringAttribute('allocation_date');
  }

  // description - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_space_id - computed: false, optional: false, required: true
  private _ipSpaceId?: string; 
  public get ipSpaceId() {
    return this.getStringAttribute('ip_space_id');
  }
  public set ipSpaceId(value: string) {
    this._ipSpaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpaceIdInput() {
    return this._ipSpaceId;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // usage_state - computed: true, optional: true, required: false
  private _usageState?: string; 
  public get usageState() {
    return this.getStringAttribute('usage_state');
  }
  public set usageState(value: string) {
    this._usageState = value;
  }
  public resetUsageState() {
    this._usageState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageStateInput() {
    return this._usageState;
  }

  // used_by_id - computed: true, optional: false, required: false
  public get usedById() {
    return this.getStringAttribute('used_by_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_space_id: cdktf.stringToTerraform(this._ipSpaceId),
      org_id: cdktf.stringToTerraform(this._orgId),
      type: cdktf.stringToTerraform(this._type),
      usage_state: cdktf.stringToTerraform(this._usageState),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_space_id: {
        value: cdktf.stringToHclTerraform(this._ipSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_state: {
        value: cdktf.stringToHclTerraform(this._usageState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
