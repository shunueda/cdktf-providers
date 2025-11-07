// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_files_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6FixedNatPortMappingFilesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_files_oper#id DataThunderCgnv6FixedNatPortMappingFilesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_files_oper#oper DataThunderCgnv6FixedNatPortMappingFilesOper#oper}
  */
  readonly oper?: DataThunderCgnv6FixedNatPortMappingFilesOperOper;
}
export interface DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_files_oper#file_name DataThunderCgnv6FixedNatPortMappingFilesOper#file_name}
  */
  readonly fileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_files_oper#write_status DataThunderCgnv6FixedNatPortMappingFilesOper#write_status}
  */
  readonly writeStatus?: string;
}

export function dataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStructToTerraform(struct?: DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_name: cdktf.stringToTerraform(struct!.fileName),
    write_status: cdktf.stringToTerraform(struct!.writeStatus),
  }
}


export function dataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStructToHclTerraform(struct?: DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_status: {
      value: cdktf.stringToHclTerraform(struct!.writeStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._writeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeStatus = this._writeStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileName = undefined;
      this._writeStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileName = value.fileName;
      this._writeStatus = value.writeStatus;
    }
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // write_status - computed: false, optional: true, required: false
  private _writeStatus?: string; 
  public get writeStatus() {
    return this.getStringAttribute('write_status');
  }
  public set writeStatus(value: string) {
    this._writeStatus = value;
  }
  public resetWriteStatus() {
    this._writeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeStatusInput() {
    return this._writeStatus;
  }
}

export class DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStructOutputReference {
    return new DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6FixedNatPortMappingFilesOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_files_oper#contain DataThunderCgnv6FixedNatPortMappingFilesOper#contain}
  */
  readonly contain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_files_oper#contain_case_sensitive DataThunderCgnv6FixedNatPortMappingFilesOper#contain_case_sensitive}
  */
  readonly containCaseSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_files_oper#type DataThunderCgnv6FixedNatPortMappingFilesOper#type}
  */
  readonly type?: string;
  /**
  * file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_files_oper#file_list DataThunderCgnv6FixedNatPortMappingFilesOper#file_list}
  */
  readonly fileList?: DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6FixedNatPortMappingFilesOperOperToTerraform(struct?: DataThunderCgnv6FixedNatPortMappingFilesOperOperOutputReference | DataThunderCgnv6FixedNatPortMappingFilesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contain: cdktf.stringToTerraform(struct!.contain),
    contain_case_sensitive: cdktf.stringToTerraform(struct!.containCaseSensitive),
    type: cdktf.stringToTerraform(struct!.type),
    file_list: cdktf.listMapper(dataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStructToTerraform, true)(struct!.fileList),
  }
}


export function dataThunderCgnv6FixedNatPortMappingFilesOperOperToHclTerraform(struct?: DataThunderCgnv6FixedNatPortMappingFilesOperOperOutputReference | DataThunderCgnv6FixedNatPortMappingFilesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contain: {
      value: cdktf.stringToHclTerraform(struct!.contain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contain_case_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.containCaseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStructToHclTerraform, true)(struct!.fileList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatPortMappingFilesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6FixedNatPortMappingFilesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contain !== undefined) {
      hasAnyValues = true;
      internalValueResult.contain = this._contain;
    }
    if (this._containCaseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.containCaseSensitive = this._containCaseSensitive;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._fileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileList = this._fileList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatPortMappingFilesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contain = undefined;
      this._containCaseSensitive = undefined;
      this._type = undefined;
      this._fileList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contain = value.contain;
      this._containCaseSensitive = value.containCaseSensitive;
      this._type = value.type;
      this._fileList.internalValue = value.fileList;
    }
  }

  // contain - computed: false, optional: true, required: false
  private _contain?: string; 
  public get contain() {
    return this.getStringAttribute('contain');
  }
  public set contain(value: string) {
    this._contain = value;
  }
  public resetContain() {
    this._contain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containInput() {
    return this._contain;
  }

  // contain_case_sensitive - computed: false, optional: true, required: false
  private _containCaseSensitive?: string; 
  public get containCaseSensitive() {
    return this.getStringAttribute('contain_case_sensitive');
  }
  public set containCaseSensitive(value: string) {
    this._containCaseSensitive = value;
  }
  public resetContainCaseSensitive() {
    this._containCaseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containCaseSensitiveInput() {
    return this._containCaseSensitive;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // file_list - computed: false, optional: true, required: false
  private _fileList = new DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStructList(this, "file_list", false);
  public get fileList() {
    return this._fileList;
  }
  public putFileList(value: DataThunderCgnv6FixedNatPortMappingFilesOperOperFileListStruct[] | cdktf.IResolvable) {
    this._fileList.internalValue = value;
  }
  public resetFileList() {
    this._fileList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileListInput() {
    return this._fileList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_files_oper thunder_cgnv6_fixed_nat_port_mapping_files_oper}
*/
export class DataThunderCgnv6FixedNatPortMappingFilesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_port_mapping_files_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6FixedNatPortMappingFilesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6FixedNatPortMappingFilesOper to import
  * @param importFromId The id of the existing DataThunderCgnv6FixedNatPortMappingFilesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_files_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6FixedNatPortMappingFilesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_port_mapping_files_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_port_mapping_files_oper thunder_cgnv6_fixed_nat_port_mapping_files_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6FixedNatPortMappingFilesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6FixedNatPortMappingFilesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_port_mapping_files_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderCgnv6FixedNatPortMappingFilesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6FixedNatPortMappingFilesOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderCgnv6FixedNatPortMappingFilesOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderCgnv6FixedNatPortMappingFilesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6FixedNatPortMappingFilesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
