// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_multiple
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterCtVirtualNetworkMultipleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Primitive name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_multiple#name DataApstraDatacenterCtVirtualNetworkMultiple#name}
  */
  readonly name?: string;
  /**
  * Set of Virtual Network IDs which should be presented with VLAN tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_multiple#tagged_vn_ids DataApstraDatacenterCtVirtualNetworkMultiple#tagged_vn_ids}
  */
  readonly taggedVnIds?: string[];
  /**
  * Virtual Network ID which should be presented without VLAN tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_multiple#untagged_vn_id DataApstraDatacenterCtVirtualNetworkMultiple#untagged_vn_id}
  */
  readonly untaggedVnId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_multiple apstra_datacenter_ct_virtual_network_multiple}
*/
export class DataApstraDatacenterCtVirtualNetworkMultiple extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_ct_virtual_network_multiple";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterCtVirtualNetworkMultiple resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterCtVirtualNetworkMultiple to import
  * @param importFromId The id of the existing DataApstraDatacenterCtVirtualNetworkMultiple that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_multiple#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterCtVirtualNetworkMultiple to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_ct_virtual_network_multiple", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_multiple apstra_datacenter_ct_virtual_network_multiple} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterCtVirtualNetworkMultipleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterCtVirtualNetworkMultipleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_ct_virtual_network_multiple',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._taggedVnIds = config.taggedVnIds;
    this._untaggedVnId = config.untaggedVnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // primitive - computed: true, optional: false, required: false
  public get primitive() {
    return this.getStringAttribute('primitive');
  }

  // tagged_vn_ids - computed: false, optional: true, required: false
  private _taggedVnIds?: string[]; 
  public get taggedVnIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tagged_vn_ids'));
  }
  public set taggedVnIds(value: string[]) {
    this._taggedVnIds = value;
  }
  public resetTaggedVnIds() {
    this._taggedVnIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedVnIdsInput() {
    return this._taggedVnIds;
  }

  // untagged_vn_id - computed: false, optional: true, required: false
  private _untaggedVnId?: string; 
  public get untaggedVnId() {
    return this.getStringAttribute('untagged_vn_id');
  }
  public set untaggedVnId(value: string) {
    this._untaggedVnId = value;
  }
  public resetUntaggedVnId() {
    this._untaggedVnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedVnIdInput() {
    return this._untaggedVnId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tagged_vn_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taggedVnIds),
      untagged_vn_id: cdktf.stringToTerraform(this._untaggedVnId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tagged_vn_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._taggedVnIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      untagged_vn_id: {
        value: cdktf.stringToHclTerraform(this._untaggedVnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
