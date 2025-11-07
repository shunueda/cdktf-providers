// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_allocation_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FreeformAllocationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_allocation_group#blueprint_id FreeformAllocationGroup#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Freeform Allocation Group name as shown in the Web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_allocation_group#name FreeformAllocationGroup#name}
  */
  readonly name: string;
  /**
  * IDs of Resource Pools assigned to the allocation group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_allocation_group#pool_ids FreeformAllocationGroup#pool_ids}
  */
  readonly poolIds: string[];
  /**
  * type of the Allocation Group, must be one of :
  *   - `asn`
  *   - `integer`
  *   - `ipv4`
  *   - `ipv6`
  *   - `vlan`
  *   - `vni`
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_allocation_group#type FreeformAllocationGroup#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_allocation_group apstra_freeform_allocation_group}
*/
export class FreeformAllocationGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_freeform_allocation_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FreeformAllocationGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FreeformAllocationGroup to import
  * @param importFromId The id of the existing FreeformAllocationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_allocation_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FreeformAllocationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_freeform_allocation_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_allocation_group apstra_freeform_allocation_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FreeformAllocationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: FreeformAllocationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_freeform_allocation_group',
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
    this._blueprintId = config.blueprintId;
    this._name = config.name;
    this._poolIds = config.poolIds;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // pool_ids - computed: false, optional: false, required: true
  private _poolIds?: string[]; 
  public get poolIds() {
    return cdktf.Fn.tolist(this.getListAttribute('pool_ids'));
  }
  public set poolIds(value: string[]) {
    this._poolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdsInput() {
    return this._poolIds;
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
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      name: cdktf.stringToTerraform(this._name),
      pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._poolIds),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
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
      pool_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._poolIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
