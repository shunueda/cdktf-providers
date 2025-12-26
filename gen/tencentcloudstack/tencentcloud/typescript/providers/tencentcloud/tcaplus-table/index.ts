// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcaplusTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the TcaplusDB cluster to which the table belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table#cluster_id TcaplusTable#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Description of the TcaplusDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table#description TcaplusTable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table#id TcaplusTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the IDL File.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table#idl_id TcaplusTable#idl_id}
  */
  readonly idlId: string;
  /**
  * Reserved read capacity units of the TcaplusDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table#reserved_read_cu TcaplusTable#reserved_read_cu}
  */
  readonly reservedReadCu: number;
  /**
  * Reserved storage capacity of the TcaplusDB table (unit: GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table#reserved_volume TcaplusTable#reserved_volume}
  */
  readonly reservedVolume: number;
  /**
  * Reserved write capacity units of the TcaplusDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table#reserved_write_cu TcaplusTable#reserved_write_cu}
  */
  readonly reservedWriteCu: number;
  /**
  * IDL type of the TcaplusDB table. Valid values: `PROTO` and `TDR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table#table_idl_type TcaplusTable#table_idl_type}
  */
  readonly tableIdlType: string;
  /**
  * Name of the TcaplusDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table#table_name TcaplusTable#table_name}
  */
  readonly tableName: string;
  /**
  * Type of the TcaplusDB table. Valid values are `GENERIC` and `LIST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table#table_type TcaplusTable#table_type}
  */
  readonly tableType: string;
  /**
  * ID of the table group to which the table belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table#tablegroup_id TcaplusTable#tablegroup_id}
  */
  readonly tablegroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table tencentcloud_tcaplus_table}
*/
export class TcaplusTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcaplus_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcaplusTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcaplusTable to import
  * @param importFromId The id of the existing TcaplusTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcaplusTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcaplus_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcaplus_table tencentcloud_tcaplus_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcaplusTableConfig
  */
  public constructor(scope: Construct, id: string, config: TcaplusTableConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcaplus_table',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._description = config.description;
    this._id = config.id;
    this._idlId = config.idlId;
    this._reservedReadCu = config.reservedReadCu;
    this._reservedVolume = config.reservedVolume;
    this._reservedWriteCu = config.reservedWriteCu;
    this._tableIdlType = config.tableIdlType;
    this._tableName = config.tableName;
    this._tableType = config.tableType;
    this._tablegroupId = config.tablegroupId;
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

  // description - computed: false, optional: true, required: false
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

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
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

  // idl_id - computed: false, optional: false, required: true
  private _idlId?: string; 
  public get idlId() {
    return this.getStringAttribute('idl_id');
  }
  public set idlId(value: string) {
    this._idlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idlIdInput() {
    return this._idlId;
  }

  // reserved_read_cu - computed: false, optional: false, required: true
  private _reservedReadCu?: number; 
  public get reservedReadCu() {
    return this.getNumberAttribute('reserved_read_cu');
  }
  public set reservedReadCu(value: number) {
    this._reservedReadCu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedReadCuInput() {
    return this._reservedReadCu;
  }

  // reserved_volume - computed: false, optional: false, required: true
  private _reservedVolume?: number; 
  public get reservedVolume() {
    return this.getNumberAttribute('reserved_volume');
  }
  public set reservedVolume(value: number) {
    this._reservedVolume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedVolumeInput() {
    return this._reservedVolume;
  }

  // reserved_write_cu - computed: false, optional: false, required: true
  private _reservedWriteCu?: number; 
  public get reservedWriteCu() {
    return this.getNumberAttribute('reserved_write_cu');
  }
  public set reservedWriteCu(value: number) {
    this._reservedWriteCu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedWriteCuInput() {
    return this._reservedWriteCu;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // table_idl_type - computed: false, optional: false, required: true
  private _tableIdlType?: string; 
  public get tableIdlType() {
    return this.getStringAttribute('table_idl_type');
  }
  public set tableIdlType(value: string) {
    this._tableIdlType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdlTypeInput() {
    return this._tableIdlType;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // table_size - computed: true, optional: false, required: false
  public get tableSize() {
    return this.getNumberAttribute('table_size');
  }

  // table_type - computed: false, optional: false, required: true
  private _tableType?: string; 
  public get tableType() {
    return this.getStringAttribute('table_type');
  }
  public set tableType(value: string) {
    this._tableType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableTypeInput() {
    return this._tableType;
  }

  // tablegroup_id - computed: false, optional: false, required: true
  private _tablegroupId?: string; 
  public get tablegroupId() {
    return this.getStringAttribute('tablegroup_id');
  }
  public set tablegroupId(value: string) {
    this._tablegroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablegroupIdInput() {
    return this._tablegroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      idl_id: cdktf.stringToTerraform(this._idlId),
      reserved_read_cu: cdktf.numberToTerraform(this._reservedReadCu),
      reserved_volume: cdktf.numberToTerraform(this._reservedVolume),
      reserved_write_cu: cdktf.numberToTerraform(this._reservedWriteCu),
      table_idl_type: cdktf.stringToTerraform(this._tableIdlType),
      table_name: cdktf.stringToTerraform(this._tableName),
      table_type: cdktf.stringToTerraform(this._tableType),
      tablegroup_id: cdktf.stringToTerraform(this._tablegroupId),
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
      idl_id: {
        value: cdktf.stringToHclTerraform(this._idlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_read_cu: {
        value: cdktf.numberToHclTerraform(this._reservedReadCu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reserved_volume: {
        value: cdktf.numberToHclTerraform(this._reservedVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reserved_write_cu: {
        value: cdktf.numberToHclTerraform(this._reservedWriteCu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      table_idl_type: {
        value: cdktf.stringToHclTerraform(this._tableIdlType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_type: {
        value: cdktf.stringToHclTerraform(this._tableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tablegroup_id: {
        value: cdktf.stringToHclTerraform(this._tablegroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
