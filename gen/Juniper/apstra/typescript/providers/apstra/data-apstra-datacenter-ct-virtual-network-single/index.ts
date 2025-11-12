// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_single
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterCtVirtualNetworkSingleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of JSON strings describing Connectivity Template Primitives which are children of this Connectivity Template Primitive. Use the `primitive` attribute of other Connectivity Template Primitives data sources here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_single#child_primitives DataApstraDatacenterCtVirtualNetworkSingle#child_primitives}
  */
  readonly childPrimitives?: string[];
  /**
  * Primitive name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_single#name DataApstraDatacenterCtVirtualNetworkSingle#name}
  */
  readonly name?: string;
  /**
  * Indicates whether the VN should mark frames belonging to the VN with 802.1Q tags. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_single#tagged DataApstraDatacenterCtVirtualNetworkSingle#tagged}
  */
  readonly tagged?: boolean | cdktf.IResolvable;
  /**
  * Virtual Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_single#vn_id DataApstraDatacenterCtVirtualNetworkSingle#vn_id}
  */
  readonly vnId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_single apstra_datacenter_ct_virtual_network_single}
*/
export class DataApstraDatacenterCtVirtualNetworkSingle extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_ct_virtual_network_single";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterCtVirtualNetworkSingle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterCtVirtualNetworkSingle to import
  * @param importFromId The id of the existing DataApstraDatacenterCtVirtualNetworkSingle that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_single#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterCtVirtualNetworkSingle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_ct_virtual_network_single", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_ct_virtual_network_single apstra_datacenter_ct_virtual_network_single} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterCtVirtualNetworkSingleConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterCtVirtualNetworkSingleConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_ct_virtual_network_single',
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
    this._childPrimitives = config.childPrimitives;
    this._name = config.name;
    this._tagged = config.tagged;
    this._vnId = config.vnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_primitives - computed: false, optional: true, required: false
  private _childPrimitives?: string[]; 
  public get childPrimitives() {
    return cdktf.Fn.tolist(this.getListAttribute('child_primitives'));
  }
  public set childPrimitives(value: string[]) {
    this._childPrimitives = value;
  }
  public resetChildPrimitives() {
    this._childPrimitives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childPrimitivesInput() {
    return this._childPrimitives;
  }

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

  // tagged - computed: false, optional: true, required: false
  private _tagged?: boolean | cdktf.IResolvable; 
  public get tagged() {
    return this.getBooleanAttribute('tagged');
  }
  public set tagged(value: boolean | cdktf.IResolvable) {
    this._tagged = value;
  }
  public resetTagged() {
    this._tagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedInput() {
    return this._tagged;
  }

  // vn_id - computed: false, optional: false, required: true
  private _vnId?: string; 
  public get vnId() {
    return this.getStringAttribute('vn_id');
  }
  public set vnId(value: string) {
    this._vnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnIdInput() {
    return this._vnId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      child_primitives: cdktf.listMapper(cdktf.stringToTerraform, false)(this._childPrimitives),
      name: cdktf.stringToTerraform(this._name),
      tagged: cdktf.booleanToTerraform(this._tagged),
      vn_id: cdktf.stringToTerraform(this._vnId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      child_primitives: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._childPrimitives),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tagged: {
        value: cdktf.booleanToHclTerraform(this._tagged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vn_id: {
        value: cdktf.stringToHclTerraform(this._vnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
