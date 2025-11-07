// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource_generator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FreeformResourceGeneratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Selects the Allocation Group, parent Resource, or Local Resource Pool from which to source generated Resources. In the case of a Local Resource Pool, this value must be the name (label) of the pool. Allocation Groups and parent Resources are specified by ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource_generator#allocated_from FreeformResourceGenerator#allocated_from}
  */
  readonly allocatedFrom: string;
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource_generator#blueprint_id FreeformResourceGenerator#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * ID of the group where Resources are generated. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource_generator#container_id FreeformResourceGenerator#container_id}
  */
  readonly containerId: string;
  /**
  * Freeform Resource Generator name as shown in the Web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource_generator#name FreeformResourceGenerator#name}
  */
  readonly name: string;
  /**
  * Scope is a graph query which selects target nodes for which Resources should be generated.
  * Example: `node('system', name='target', label=aeq('*prod*'))`
  * Required when `container_id` references a `apstra_freeform_resource_group` object. Must be `null` when `container_id` references a `apstra_freeform_resource_group` object. `scope` will be inherited in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource_generator#scope FreeformResourceGenerator#scope}
  */
  readonly scope?: string;
  /**
  * Length of the subnet for the generated Resources. Only applicable when `type` is `ipv4` or `ipv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource_generator#subnet_prefix_len FreeformResourceGenerator#subnet_prefix_len}
  */
  readonly subnetPrefixLen?: number;
  /**
  * type of the Resource Generator, must be one of :
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource_generator#type FreeformResourceGenerator#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource_generator apstra_freeform_resource_generator}
*/
export class FreeformResourceGenerator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_freeform_resource_generator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FreeformResourceGenerator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FreeformResourceGenerator to import
  * @param importFromId The id of the existing FreeformResourceGenerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource_generator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FreeformResourceGenerator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_freeform_resource_generator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/freeform_resource_generator apstra_freeform_resource_generator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FreeformResourceGeneratorConfig
  */
  public constructor(scope: Construct, id: string, config: FreeformResourceGeneratorConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_freeform_resource_generator',
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
    this._blueprintId = config.blueprintId;
    this._containerId = config.containerId;
    this._name = config.name;
    this._scope = config.scope;
    this._subnetPrefixLen = config.subnetPrefixLen;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_from - computed: false, optional: false, required: true
  private _allocatedFrom?: string; 
  public get allocatedFrom() {
    return this.getStringAttribute('allocated_from');
  }
  public set allocatedFrom(value: string) {
    this._allocatedFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedFromInput() {
    return this._allocatedFrom;
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

  // container_id - computed: false, optional: false, required: true
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // subnet_prefix_len - computed: false, optional: true, required: false
  private _subnetPrefixLen?: number; 
  public get subnetPrefixLen() {
    return this.getNumberAttribute('subnet_prefix_len');
  }
  public set subnetPrefixLen(value: number) {
    this._subnetPrefixLen = value;
  }
  public resetSubnetPrefixLen() {
    this._subnetPrefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetPrefixLenInput() {
    return this._subnetPrefixLen;
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
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      container_id: cdktf.stringToTerraform(this._containerId),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      subnet_prefix_len: cdktf.numberToTerraform(this._subnetPrefixLen),
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
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_id: {
        value: cdktf.stringToHclTerraform(this._containerId),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_prefix_len: {
        value: cdktf.numberToHclTerraform(this._subnetPrefixLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
