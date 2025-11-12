// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rpz_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbRpzOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rpz_oper#id DataThunderSlbRpzOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rpz_oper#oper DataThunderSlbRpzOper#oper}
  */
  readonly oper?: DataThunderSlbRpzOperOper;
}
export interface DataThunderSlbRpzOperOperFileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rpz_oper#dns_template_bound DataThunderSlbRpzOper#dns_template_bound}
  */
  readonly dnsTemplateBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rpz_oper#file DataThunderSlbRpzOper#file}
  */
  readonly file?: string;
}

export function dataThunderSlbRpzOperOperFileListStructToTerraform(struct?: DataThunderSlbRpzOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_template_bound: cdktf.stringToTerraform(struct!.dnsTemplateBound),
    file: cdktf.stringToTerraform(struct!.file),
  }
}


export function dataThunderSlbRpzOperOperFileListStructToHclTerraform(struct?: DataThunderSlbRpzOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_template_bound: {
      value: cdktf.stringToHclTerraform(struct!.dnsTemplateBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbRpzOperOperFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbRpzOperOperFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsTemplateBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTemplateBound = this._dnsTemplateBound;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRpzOperOperFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsTemplateBound = undefined;
      this._file = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsTemplateBound = value.dnsTemplateBound;
      this._file = value.file;
    }
  }

  // dns_template_bound - computed: false, optional: true, required: false
  private _dnsTemplateBound?: string; 
  public get dnsTemplateBound() {
    return this.getStringAttribute('dns_template_bound');
  }
  public set dnsTemplateBound(value: string) {
    this._dnsTemplateBound = value;
  }
  public resetDnsTemplateBound() {
    this._dnsTemplateBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTemplateBoundInput() {
    return this._dnsTemplateBound;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }
}

export class DataThunderSlbRpzOperOperFileListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbRpzOperOperFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbRpzOperOperFileListStructOutputReference {
    return new DataThunderSlbRpzOperOperFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbRpzOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rpz_oper#filter_entry DataThunderSlbRpzOper#filter_entry}
  */
  readonly filterEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rpz_oper#rpz_count DataThunderSlbRpzOper#rpz_count}
  */
  readonly rpzCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rpz_oper#rpz_file_size_max DataThunderSlbRpzOper#rpz_file_size_max}
  */
  readonly rpzFileSizeMax?: number;
  /**
  * file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rpz_oper#file_list DataThunderSlbRpzOper#file_list}
  */
  readonly fileList?: DataThunderSlbRpzOperOperFileListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbRpzOperOperToTerraform(struct?: DataThunderSlbRpzOperOperOutputReference | DataThunderSlbRpzOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_entry: cdktf.stringToTerraform(struct!.filterEntry),
    rpz_count: cdktf.numberToTerraform(struct!.rpzCount),
    rpz_file_size_max: cdktf.numberToTerraform(struct!.rpzFileSizeMax),
    file_list: cdktf.listMapper(dataThunderSlbRpzOperOperFileListStructToTerraform, true)(struct!.fileList),
  }
}


export function dataThunderSlbRpzOperOperToHclTerraform(struct?: DataThunderSlbRpzOperOperOutputReference | DataThunderSlbRpzOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_entry: {
      value: cdktf.stringToHclTerraform(struct!.filterEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpz_count: {
      value: cdktf.numberToHclTerraform(struct!.rpzCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_file_size_max: {
      value: cdktf.numberToHclTerraform(struct!.rpzFileSizeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_list: {
      value: cdktf.listMapperHcl(dataThunderSlbRpzOperOperFileListStructToHclTerraform, true)(struct!.fileList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbRpzOperOperFileListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbRpzOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbRpzOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEntry = this._filterEntry;
    }
    if (this._rpzCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzCount = this._rpzCount;
    }
    if (this._rpzFileSizeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzFileSizeMax = this._rpzFileSizeMax;
    }
    if (this._fileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileList = this._fileList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRpzOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterEntry = undefined;
      this._rpzCount = undefined;
      this._rpzFileSizeMax = undefined;
      this._fileList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterEntry = value.filterEntry;
      this._rpzCount = value.rpzCount;
      this._rpzFileSizeMax = value.rpzFileSizeMax;
      this._fileList.internalValue = value.fileList;
    }
  }

  // filter_entry - computed: false, optional: true, required: false
  private _filterEntry?: string; 
  public get filterEntry() {
    return this.getStringAttribute('filter_entry');
  }
  public set filterEntry(value: string) {
    this._filterEntry = value;
  }
  public resetFilterEntry() {
    this._filterEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEntryInput() {
    return this._filterEntry;
  }

  // rpz_count - computed: false, optional: true, required: false
  private _rpzCount?: number; 
  public get rpzCount() {
    return this.getNumberAttribute('rpz_count');
  }
  public set rpzCount(value: number) {
    this._rpzCount = value;
  }
  public resetRpzCount() {
    this._rpzCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzCountInput() {
    return this._rpzCount;
  }

  // rpz_file_size_max - computed: false, optional: true, required: false
  private _rpzFileSizeMax?: number; 
  public get rpzFileSizeMax() {
    return this.getNumberAttribute('rpz_file_size_max');
  }
  public set rpzFileSizeMax(value: number) {
    this._rpzFileSizeMax = value;
  }
  public resetRpzFileSizeMax() {
    this._rpzFileSizeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzFileSizeMaxInput() {
    return this._rpzFileSizeMax;
  }

  // file_list - computed: false, optional: true, required: false
  private _fileList = new DataThunderSlbRpzOperOperFileListStructList(this, "file_list", false);
  public get fileList() {
    return this._fileList;
  }
  public putFileList(value: DataThunderSlbRpzOperOperFileListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rpz_oper thunder_slb_rpz_oper}
*/
export class DataThunderSlbRpzOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_rpz_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbRpzOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbRpzOper to import
  * @param importFromId The id of the existing DataThunderSlbRpzOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rpz_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbRpzOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_rpz_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rpz_oper thunder_slb_rpz_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbRpzOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbRpzOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_rpz_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _oper = new DataThunderSlbRpzOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbRpzOperOper) {
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
      oper: dataThunderSlbRpzOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbRpzOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbRpzOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
