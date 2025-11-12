// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_ip_allocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpSpaceIpAllocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom description can only be set when usage_state is set to 'USED_MANUAL'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_ip_allocation#description IpSpaceIpAllocation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_ip_allocation#id IpSpaceIpAllocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP Space ID for IP Allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_ip_allocation#ip_space_id IpSpaceIpAllocation#ip_space_id}
  */
  readonly ipSpaceId?: string;
  /**
  * Org ID for IP Allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_ip_allocation#org_id IpSpaceIpAllocation#org_id}
  */
  readonly orgId: string;
  /**
  * Required if 'type' is IP_PREFIX and no custom 'value` is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_ip_allocation#prefix_length IpSpaceIpAllocation#prefix_length}
  */
  readonly prefixLength?: string;
  /**
  * Type of allocation. One of `FLOATING_IP``, `IP_PREFIX`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_ip_allocation#type IpSpaceIpAllocation#type}
  */
  readonly type: string;
  /**
  * Can be set to 'USED_MANUAL' to mark the IP Allocation for manual use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_ip_allocation#usage_state IpSpaceIpAllocation#usage_state}
  */
  readonly usageState?: string;
  /**
  * IP address or CIDR to use. (VCD 10.4.2+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_ip_allocation#value IpSpaceIpAllocation#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_ip_allocation vcd_ip_space_ip_allocation}
*/
export class IpSpaceIpAllocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_ip_space_ip_allocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpSpaceIpAllocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpSpaceIpAllocation to import
  * @param importFromId The id of the existing IpSpaceIpAllocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_ip_allocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpSpaceIpAllocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_ip_space_ip_allocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_ip_allocation vcd_ip_space_ip_allocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpSpaceIpAllocationConfig
  */
  public constructor(scope: Construct, id: string, config: IpSpaceIpAllocationConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_ip_space_ip_allocation',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
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
    this._ipSpaceId = config.ipSpaceId;
    this._orgId = config.orgId;
    this._prefixLength = config.prefixLength;
    this._type = config.type;
    this._usageState = config.usageState;
    this._value = config.value;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_space_id - computed: false, optional: true, required: false
  private _ipSpaceId?: string; 
  public get ipSpaceId() {
    return this.getStringAttribute('ip_space_id');
  }
  public set ipSpaceId(value: string) {
    this._ipSpaceId = value;
  }
  public resetIpSpaceId() {
    this._ipSpaceId = undefined;
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

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_space_id: cdktf.stringToTerraform(this._ipSpaceId),
      org_id: cdktf.stringToTerraform(this._orgId),
      prefix_length: cdktf.stringToTerraform(this._prefixLength),
      type: cdktf.stringToTerraform(this._type),
      usage_state: cdktf.stringToTerraform(this._usageState),
      value: cdktf.stringToTerraform(this._value),
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
      prefix_length: {
        value: cdktf.stringToHclTerraform(this._prefixLength),
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
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
