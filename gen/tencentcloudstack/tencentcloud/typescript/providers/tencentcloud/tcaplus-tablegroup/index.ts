// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcaplus_tablegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcaplusTablegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the TcaplusDB cluster to which the table group belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcaplus_tablegroup#cluster_id TcaplusTablegroup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcaplus_tablegroup#id TcaplusTablegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the TcaplusDB table group. Name length should be between 1 and 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcaplus_tablegroup#tablegroup_name TcaplusTablegroup#tablegroup_name}
  */
  readonly tablegroupName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcaplus_tablegroup tencentcloud_tcaplus_tablegroup}
*/
export class TcaplusTablegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcaplus_tablegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcaplusTablegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcaplusTablegroup to import
  * @param importFromId The id of the existing TcaplusTablegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcaplus_tablegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcaplusTablegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcaplus_tablegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tcaplus_tablegroup tencentcloud_tcaplus_tablegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcaplusTablegroupConfig
  */
  public constructor(scope: Construct, id: string, config: TcaplusTablegroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcaplus_tablegroup',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._tablegroupName = config.tablegroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // table_count - computed: true, optional: false, required: false
  public get tableCount() {
    return this.getNumberAttribute('table_count');
  }

  // tablegroup_name - computed: false, optional: false, required: true
  private _tablegroupName?: string; 
  public get tablegroupName() {
    return this.getStringAttribute('tablegroup_name');
  }
  public set tablegroupName(value: string) {
    this._tablegroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablegroupNameInput() {
    return this._tablegroupName;
  }

  // total_size - computed: true, optional: false, required: false
  public get totalSize() {
    return this.getNumberAttribute('total_size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      tablegroup_name: cdktf.stringToTerraform(this._tablegroupName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      tablegroup_name: {
        value: cdktf.stringToHclTerraform(this._tablegroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
