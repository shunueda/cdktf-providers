// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tcaplus_idl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcaplusIdlConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the TcaplusDB cluster to which the table group belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tcaplus_idl#cluster_id TcaplusIdl#cluster_id}
  */
  readonly clusterId: string;
  /**
  * IDL file content of the TcaplusDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tcaplus_idl#file_content TcaplusIdl#file_content}
  */
  readonly fileContent: string;
  /**
  * File ext type of the IDL file. If `file_type` is `PROTO`, `file_ext_type` must be 'proto'; If `file_type` is `TDR`, `file_ext_type` must be 'xml'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tcaplus_idl#file_ext_type TcaplusIdl#file_ext_type}
  */
  readonly fileExtType: string;
  /**
  * Name of the IDL file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tcaplus_idl#file_name TcaplusIdl#file_name}
  */
  readonly fileName: string;
  /**
  * Type of the IDL file. Valid values are PROTO and TDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tcaplus_idl#file_type TcaplusIdl#file_type}
  */
  readonly fileType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tcaplus_idl#id TcaplusIdl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the table group to which the IDL file belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tcaplus_idl#tablegroup_id TcaplusIdl#tablegroup_id}
  */
  readonly tablegroupId: string;
}
export interface TcaplusIdlTableInfos {
}

export function tcaplusIdlTableInfosToTerraform(struct?: TcaplusIdlTableInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tcaplusIdlTableInfosToHclTerraform(struct?: TcaplusIdlTableInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TcaplusIdlTableInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TcaplusIdlTableInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcaplusIdlTableInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // index_key_set - computed: true, optional: false, required: false
  public get indexKeySet() {
    return this.getStringAttribute('index_key_set');
  }

  // key_fields - computed: true, optional: false, required: false
  public get keyFields() {
    return this.getStringAttribute('key_fields');
  }

  // sum_key_field_size - computed: true, optional: false, required: false
  public get sumKeyFieldSize() {
    return this.getNumberAttribute('sum_key_field_size');
  }

  // sum_value_field_size - computed: true, optional: false, required: false
  public get sumValueFieldSize() {
    return this.getNumberAttribute('sum_value_field_size');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // value_fields - computed: true, optional: false, required: false
  public get valueFields() {
    return this.getStringAttribute('value_fields');
  }
}

export class TcaplusIdlTableInfosList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TcaplusIdlTableInfosOutputReference {
    return new TcaplusIdlTableInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tcaplus_idl tencentcloud_tcaplus_idl}
*/
export class TcaplusIdl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcaplus_idl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcaplusIdl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcaplusIdl to import
  * @param importFromId The id of the existing TcaplusIdl that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tcaplus_idl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcaplusIdl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcaplus_idl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tcaplus_idl tencentcloud_tcaplus_idl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcaplusIdlConfig
  */
  public constructor(scope: Construct, id: string, config: TcaplusIdlConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcaplus_idl',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._fileContent = config.fileContent;
    this._fileExtType = config.fileExtType;
    this._fileName = config.fileName;
    this._fileType = config.fileType;
    this._id = config.id;
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

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_ext_type - computed: false, optional: false, required: true
  private _fileExtType?: string; 
  public get fileExtType() {
    return this.getStringAttribute('file_ext_type');
  }
  public set fileExtType(value: string) {
    this._fileExtType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtTypeInput() {
    return this._fileExtType;
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // file_type - computed: false, optional: false, required: true
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
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

  // table_infos - computed: true, optional: false, required: false
  private _tableInfos = new TcaplusIdlTableInfosList(this, "table_infos", false);
  public get tableInfos() {
    return this._tableInfos;
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
      file_content: cdktf.stringToTerraform(this._fileContent),
      file_ext_type: cdktf.stringToTerraform(this._fileExtType),
      file_name: cdktf.stringToTerraform(this._fileName),
      file_type: cdktf.stringToTerraform(this._fileType),
      id: cdktf.stringToTerraform(this._id),
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
      file_content: {
        value: cdktf.stringToHclTerraform(this._fileContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_ext_type: {
        value: cdktf.stringToHclTerraform(this._fileExtType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_type: {
        value: cdktf.stringToHclTerraform(this._fileType),
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
