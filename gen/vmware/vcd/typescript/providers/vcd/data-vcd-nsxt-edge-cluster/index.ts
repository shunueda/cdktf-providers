// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edge_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtEdgeClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edge_cluster#id DataVcdNsxtEdgeCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of NSX-T Edge Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edge_cluster#name DataVcdNsxtEdgeCluster#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edge_cluster#org DataVcdNsxtEdgeCluster#org}
  */
  readonly org?: string;
  /**
  * ID Provider VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edge_cluster#provider_vdc_id DataVcdNsxtEdgeCluster#provider_vdc_id}
  */
  readonly providerVdcId?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edge_cluster#vdc DataVcdNsxtEdgeCluster#vdc}
  */
  readonly vdc?: string;
  /**
  * ID of VDC Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edge_cluster#vdc_group_id DataVcdNsxtEdgeCluster#vdc_group_id}
  */
  readonly vdcGroupId?: string;
  /**
  * ID of VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edge_cluster#vdc_id DataVcdNsxtEdgeCluster#vdc_id}
  */
  readonly vdcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edge_cluster vcd_nsxt_edge_cluster}
*/
export class DataVcdNsxtEdgeCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edge_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtEdgeCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtEdgeCluster to import
  * @param importFromId The id of the existing DataVcdNsxtEdgeCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edge_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtEdgeCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edge_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_edge_cluster vcd_nsxt_edge_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtEdgeClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtEdgeClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_edge_cluster',
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
    this._id = config.id;
    this._name = config.name;
    this._org = config.org;
    this._providerVdcId = config.providerVdcId;
    this._vdc = config.vdc;
    this._vdcGroupId = config.vdcGroupId;
    this._vdcId = config.vdcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // provider_vdc_id - computed: false, optional: true, required: false
  private _providerVdcId?: string; 
  public get providerVdcId() {
    return this.getStringAttribute('provider_vdc_id');
  }
  public set providerVdcId(value: string) {
    this._providerVdcId = value;
  }
  public resetProviderVdcId() {
    this._providerVdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerVdcIdInput() {
    return this._providerVdcId;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // vdc_group_id - computed: false, optional: true, required: false
  private _vdcGroupId?: string; 
  public get vdcGroupId() {
    return this.getStringAttribute('vdc_group_id');
  }
  public set vdcGroupId(value: string) {
    this._vdcGroupId = value;
  }
  public resetVdcGroupId() {
    this._vdcGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcGroupIdInput() {
    return this._vdcGroupId;
  }

  // vdc_id - computed: false, optional: true, required: false
  private _vdcId?: string; 
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }
  public set vdcId(value: string) {
    this._vdcId = value;
  }
  public resetVdcId() {
    this._vdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcIdInput() {
    return this._vdcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      provider_vdc_id: cdktf.stringToTerraform(this._providerVdcId),
      vdc: cdktf.stringToTerraform(this._vdc),
      vdc_group_id: cdktf.stringToTerraform(this._vdcGroupId),
      vdc_id: cdktf.stringToTerraform(this._vdcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_vdc_id: {
        value: cdktf.stringToHclTerraform(this._providerVdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc_group_id: {
        value: cdktf.stringToHclTerraform(this._vdcGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc_id: {
        value: cdktf.stringToHclTerraform(this._vdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
