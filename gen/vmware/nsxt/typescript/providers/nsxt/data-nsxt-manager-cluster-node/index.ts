// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/manager_cluster_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsxtManagerClusterNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP and port for the appliance management API service on this node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/manager_cluster_node#appliance_mgmt_listen_address DataNsxtManagerClusterNode#appliance_mgmt_listen_address}
  */
  readonly applianceMgmtListenAddress?: string;
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/manager_cluster_node#description DataNsxtManagerClusterNode#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/manager_cluster_node#display_name DataNsxtManagerClusterNode#display_name}
  */
  readonly displayName?: string;
  /**
  * Unique ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/manager_cluster_node#id DataNsxtManagerClusterNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/manager_cluster_node nsxt_manager_cluster_node}
*/
export class DataNsxtManagerClusterNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_manager_cluster_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsxtManagerClusterNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsxtManagerClusterNode to import
  * @param importFromId The id of the existing DataNsxtManagerClusterNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/manager_cluster_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsxtManagerClusterNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_manager_cluster_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/manager_cluster_node nsxt_manager_cluster_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsxtManagerClusterNodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNsxtManagerClusterNodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_manager_cluster_node',
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
    this._applianceMgmtListenAddress = config.applianceMgmtListenAddress;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appliance_mgmt_listen_address - computed: true, optional: true, required: false
  private _applianceMgmtListenAddress?: string; 
  public get applianceMgmtListenAddress() {
    return this.getStringAttribute('appliance_mgmt_listen_address');
  }
  public set applianceMgmtListenAddress(value: string) {
    this._applianceMgmtListenAddress = value;
  }
  public resetApplianceMgmtListenAddress() {
    this._applianceMgmtListenAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceMgmtListenAddressInput() {
    return this._applianceMgmtListenAddress;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appliance_mgmt_listen_address: cdktf.stringToTerraform(this._applianceMgmtListenAddress),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appliance_mgmt_listen_address: {
        value: cdktf.stringToHclTerraform(this._applianceMgmtListenAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
