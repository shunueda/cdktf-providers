// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FreeformResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the node to be used as a source for this resource. This could be an ID of resource allocation group or another resource (in case of IP or Host IP allocations). This also can be empty. In that case it is required that value for this resource is provided by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource#allocated_from FreeformResource#allocated_from}
  */
  readonly allocatedFrom?: string;
  /**
  * Set of node IDs to which the resource is assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource#assigned_to FreeformResource#assigned_to}
  */
  readonly assignedTo?: string[];
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource#blueprint_id FreeformResource#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Group the Resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource#group_id FreeformResource#group_id}
  */
  readonly groupId: string;
  /**
  * Value used by integer type resources (`asn`, `integer`, `vlan`, `vni`). Also used by IP prefix resources (`ipv4` and `ipv6`) to indicate the required prefix size for automatic allocations from another object or a resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource#integer_value FreeformResource#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Value used by resources with type `ipv4` or `host_ipv4`. Must be CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource#ipv4_value FreeformResource#ipv4_value}
  */
  readonly ipv4Value?: string;
  /**
  * Value used by resources with type `ipv6` or `host_ipv6`. Must be CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource#ipv6_value FreeformResource#ipv6_value}
  */
  readonly ipv6Value?: string;
  /**
  * Freeform Resource name as shown in the Web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource#name FreeformResource#name}
  */
  readonly name: string;
  /**
  * type of the Resource, must be one of :
  *   - `asn`
  *   - `host_ipv4`
  *   - `host_ipv6`
  *   - `integer`
  *   - `ipv4`
  *   - `ipv6`
  *   - `vlan`
  *   - `vni`
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource#type FreeformResource#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource apstra_freeform_resource}
*/
export class FreeformResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_freeform_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FreeformResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FreeformResource to import
  * @param importFromId The id of the existing FreeformResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FreeformResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_freeform_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource apstra_freeform_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FreeformResourceConfig
  */
  public constructor(scope: Construct, id: string, config: FreeformResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_freeform_resource',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocatedFrom = config.allocatedFrom;
    this._assignedTo = config.assignedTo;
    this._blueprintId = config.blueprintId;
    this._groupId = config.groupId;
    this._integerValue = config.integerValue;
    this._ipv4Value = config.ipv4Value;
    this._ipv6Value = config.ipv6Value;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_from - computed: false, optional: true, required: false
  private _allocatedFrom?: string; 
  public get allocatedFrom() {
    return this.getStringAttribute('allocated_from');
  }
  public set allocatedFrom(value: string) {
    this._allocatedFrom = value;
  }
  public resetAllocatedFrom() {
    this._allocatedFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedFromInput() {
    return this._allocatedFrom;
  }

  // assigned_to - computed: false, optional: true, required: false
  private _assignedTo?: string[]; 
  public get assignedTo() {
    return cdktf.Fn.tolist(this.getListAttribute('assigned_to'));
  }
  public set assignedTo(value: string[]) {
    this._assignedTo = value;
  }
  public resetAssignedTo() {
    this._assignedTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedToInput() {
    return this._assignedTo;
  }

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // generator_id - computed: true, optional: false, required: false
  public get generatorId() {
    return this.getStringAttribute('generator_id');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integer_value - computed: true, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // ipv4_value - computed: true, optional: true, required: false
  private _ipv4Value?: string; 
  public get ipv4Value() {
    return this.getStringAttribute('ipv4_value');
  }
  public set ipv4Value(value: string) {
    this._ipv4Value = value;
  }
  public resetIpv4Value() {
    this._ipv4Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ValueInput() {
    return this._ipv4Value;
  }

  // ipv6_value - computed: true, optional: true, required: false
  private _ipv6Value?: string; 
  public get ipv6Value() {
    return this.getStringAttribute('ipv6_value');
  }
  public set ipv6Value(value: string) {
    this._ipv6Value = value;
  }
  public resetIpv6Value() {
    this._ipv6Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ValueInput() {
    return this._ipv6Value;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_from: cdktf.stringToTerraform(this._allocatedFrom),
      assigned_to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignedTo),
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      group_id: cdktf.stringToTerraform(this._groupId),
      integer_value: cdktf.numberToTerraform(this._integerValue),
      ipv4_value: cdktf.stringToTerraform(this._ipv4Value),
      ipv6_value: cdktf.stringToTerraform(this._ipv6Value),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocated_from: {
        value: cdktf.stringToHclTerraform(this._allocatedFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assigned_to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignedTo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integer_value: {
        value: cdktf.numberToHclTerraform(this._integerValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_value: {
        value: cdktf.stringToHclTerraform(this._ipv4Value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_value: {
        value: cdktf.stringToHclTerraform(this._ipv6Value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
