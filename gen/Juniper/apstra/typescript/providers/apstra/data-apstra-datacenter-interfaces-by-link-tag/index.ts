// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_interfaces_by_link_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterInterfacesByLinkTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_interfaces_by_link_tag#blueprint_id DataApstraDatacenterInterfacesByLinkTag#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Used to further specify which interface/end of the link we're looking for whenboth ends lead to the same type. For example, on a switch-to-switch link from spine to leaf, specify either `spine` or `leaf`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_interfaces_by_link_tag#system_role DataApstraDatacenterInterfacesByLinkTag#system_role}
  */
  readonly systemRole?: string;
  /**
  * Used to specify which interface/end of the link we're looking for. Default value is `switch`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_interfaces_by_link_tag#system_type DataApstraDatacenterInterfacesByLinkTag#system_type}
  */
  readonly systemType?: string;
  /**
  * Set of required Tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_interfaces_by_link_tag#tags DataApstraDatacenterInterfacesByLinkTag#tags}
  */
  readonly tags: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_interfaces_by_link_tag apstra_datacenter_interfaces_by_link_tag}
*/
export class DataApstraDatacenterInterfacesByLinkTag extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_interfaces_by_link_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterInterfacesByLinkTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterInterfacesByLinkTag to import
  * @param importFromId The id of the existing DataApstraDatacenterInterfacesByLinkTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_interfaces_by_link_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterInterfacesByLinkTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_interfaces_by_link_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_interfaces_by_link_tag apstra_datacenter_interfaces_by_link_tag} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterInterfacesByLinkTagConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterInterfacesByLinkTagConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_interfaces_by_link_tag',
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
    this._systemRole = config.systemRole;
    this._systemType = config.systemType;
    this._tags = config.tags;
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

  // graph_query - computed: true, optional: false, required: false
  public get graphQuery() {
    return this.getStringAttribute('graph_query');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // system_role - computed: false, optional: true, required: false
  private _systemRole?: string; 
  public get systemRole() {
    return this.getStringAttribute('system_role');
  }
  public set systemRole(value: string) {
    this._systemRole = value;
  }
  public resetSystemRole() {
    this._systemRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemRoleInput() {
    return this._systemRole;
  }

  // system_type - computed: false, optional: true, required: false
  private _systemType?: string; 
  public get systemType() {
    return this.getStringAttribute('system_type');
  }
  public set systemType(value: string) {
    this._systemType = value;
  }
  public resetSystemType() {
    this._systemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTypeInput() {
    return this._systemType;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      system_role: cdktf.stringToTerraform(this._systemRole),
      system_type: cdktf.stringToTerraform(this._systemType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
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
      system_role: {
        value: cdktf.stringToHclTerraform(this._systemRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_type: {
        value: cdktf.stringToHclTerraform(this._systemType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
