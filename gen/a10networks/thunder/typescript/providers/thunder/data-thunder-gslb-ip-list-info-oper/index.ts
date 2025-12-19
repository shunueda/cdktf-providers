// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbIpListInfoOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#id DataThunderGslbIpListInfoOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#oper DataThunderGslbIpListInfoOper#oper}
  */
  readonly oper?: DataThunderGslbIpListInfoOperOper;
}
export interface DataThunderGslbIpListInfoOperOperIpLists {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#errors DataThunderGslbIpListInfoOper#errors}
  */
  readonly errors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#file_lines DataThunderGslbIpListInfoOper#file_lines}
  */
  readonly fileLines?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#filename DataThunderGslbIpListInfoOper#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#group_id DataThunderGslbIpListInfoOper#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#hits DataThunderGslbIpListInfoOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#ipaddr DataThunderGslbIpListInfoOper#ipaddr}
  */
  readonly ipaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#ipaddr_filter DataThunderGslbIpListInfoOper#ipaddr_filter}
  */
  readonly ipaddrFilter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#ipmask DataThunderGslbIpListInfoOper#ipmask}
  */
  readonly ipmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#last DataThunderGslbIpListInfoOper#last}
  */
  readonly last?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#listname DataThunderGslbIpListInfoOper#listname}
  */
  readonly listname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#total_entries_in_list DataThunderGslbIpListInfoOper#total_entries_in_list}
  */
  readonly totalEntriesInList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#type DataThunderGslbIpListInfoOper#type}
  */
  readonly type?: string;
}

export function dataThunderGslbIpListInfoOperOperIpListsToTerraform(struct?: DataThunderGslbIpListInfoOperOperIpLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    errors: cdktf.numberToTerraform(struct!.errors),
    file_lines: cdktf.numberToTerraform(struct!.fileLines),
    filename: cdktf.stringToTerraform(struct!.filename),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    hits: cdktf.numberToTerraform(struct!.hits),
    ipaddr: cdktf.stringToTerraform(struct!.ipaddr),
    ipaddr_filter: cdktf.numberToTerraform(struct!.ipaddrFilter),
    ipmask: cdktf.stringToTerraform(struct!.ipmask),
    last: cdktf.stringToTerraform(struct!.last),
    listname: cdktf.stringToTerraform(struct!.listname),
    total_entries_in_list: cdktf.numberToTerraform(struct!.totalEntriesInList),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderGslbIpListInfoOperOperIpListsToHclTerraform(struct?: DataThunderGslbIpListInfoOperOperIpLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    errors: {
      value: cdktf.numberToHclTerraform(struct!.errors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_lines: {
      value: cdktf.numberToHclTerraform(struct!.fileLines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipaddr: {
      value: cdktf.stringToHclTerraform(struct!.ipaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipaddr_filter: {
      value: cdktf.numberToHclTerraform(struct!.ipaddrFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipmask: {
      value: cdktf.stringToHclTerraform(struct!.ipmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last: {
      value: cdktf.stringToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listname: {
      value: cdktf.stringToHclTerraform(struct!.listname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_entries_in_list: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesInList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbIpListInfoOperOperIpListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbIpListInfoOperOperIpLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errors !== undefined) {
      hasAnyValues = true;
      internalValueResult.errors = this._errors;
    }
    if (this._fileLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLines = this._fileLines;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._ipaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddr = this._ipaddr;
    }
    if (this._ipaddrFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddrFilter = this._ipaddrFilter;
    }
    if (this._ipmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmask = this._ipmask;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._listname !== undefined) {
      hasAnyValues = true;
      internalValueResult.listname = this._listname;
    }
    if (this._totalEntriesInList !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesInList = this._totalEntriesInList;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbIpListInfoOperOperIpLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errors = undefined;
      this._fileLines = undefined;
      this._filename = undefined;
      this._groupId = undefined;
      this._hits = undefined;
      this._ipaddr = undefined;
      this._ipaddrFilter = undefined;
      this._ipmask = undefined;
      this._last = undefined;
      this._listname = undefined;
      this._totalEntriesInList = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errors = value.errors;
      this._fileLines = value.fileLines;
      this._filename = value.filename;
      this._groupId = value.groupId;
      this._hits = value.hits;
      this._ipaddr = value.ipaddr;
      this._ipaddrFilter = value.ipaddrFilter;
      this._ipmask = value.ipmask;
      this._last = value.last;
      this._listname = value.listname;
      this._totalEntriesInList = value.totalEntriesInList;
      this._type = value.type;
    }
  }

  // errors - computed: false, optional: true, required: false
  private _errors?: number; 
  public get errors() {
    return this.getNumberAttribute('errors');
  }
  public set errors(value: number) {
    this._errors = value;
  }
  public resetErrors() {
    this._errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors;
  }

  // file_lines - computed: false, optional: true, required: false
  private _fileLines?: number; 
  public get fileLines() {
    return this.getNumberAttribute('file_lines');
  }
  public set fileLines(value: number) {
    this._fileLines = value;
  }
  public resetFileLines() {
    this._fileLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLinesInput() {
    return this._fileLines;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // ipaddr - computed: false, optional: true, required: false
  private _ipaddr?: string; 
  public get ipaddr() {
    return this.getStringAttribute('ipaddr');
  }
  public set ipaddr(value: string) {
    this._ipaddr = value;
  }
  public resetIpaddr() {
    this._ipaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddrInput() {
    return this._ipaddr;
  }

  // ipaddr_filter - computed: false, optional: true, required: false
  private _ipaddrFilter?: number; 
  public get ipaddrFilter() {
    return this.getNumberAttribute('ipaddr_filter');
  }
  public set ipaddrFilter(value: number) {
    this._ipaddrFilter = value;
  }
  public resetIpaddrFilter() {
    this._ipaddrFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddrFilterInput() {
    return this._ipaddrFilter;
  }

  // ipmask - computed: false, optional: true, required: false
  private _ipmask?: string; 
  public get ipmask() {
    return this.getStringAttribute('ipmask');
  }
  public set ipmask(value: string) {
    this._ipmask = value;
  }
  public resetIpmask() {
    this._ipmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmaskInput() {
    return this._ipmask;
  }

  // last - computed: false, optional: true, required: false
  private _last?: string; 
  public get last() {
    return this.getStringAttribute('last');
  }
  public set last(value: string) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // listname - computed: false, optional: true, required: false
  private _listname?: string; 
  public get listname() {
    return this.getStringAttribute('listname');
  }
  public set listname(value: string) {
    this._listname = value;
  }
  public resetListname() {
    this._listname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listnameInput() {
    return this._listname;
  }

  // total_entries_in_list - computed: false, optional: true, required: false
  private _totalEntriesInList?: number; 
  public get totalEntriesInList() {
    return this.getNumberAttribute('total_entries_in_list');
  }
  public set totalEntriesInList(value: number) {
    this._totalEntriesInList = value;
  }
  public resetTotalEntriesInList() {
    this._totalEntriesInList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesInListInput() {
    return this._totalEntriesInList;
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
}

export class DataThunderGslbIpListInfoOperOperIpListsList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbIpListInfoOperOperIpLists[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbIpListInfoOperOperIpListsOutputReference {
    return new DataThunderGslbIpListInfoOperOperIpListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbIpListInfoOperOper {
  /**
  * ip_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#ip_lists DataThunderGslbIpListInfoOper#ip_lists}
  */
  readonly ipLists?: DataThunderGslbIpListInfoOperOperIpLists[] | cdktf.IResolvable;
}

export function dataThunderGslbIpListInfoOperOperToTerraform(struct?: DataThunderGslbIpListInfoOperOperOutputReference | DataThunderGslbIpListInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_lists: cdktf.listMapper(dataThunderGslbIpListInfoOperOperIpListsToTerraform, true)(struct!.ipLists),
  }
}


export function dataThunderGslbIpListInfoOperOperToHclTerraform(struct?: DataThunderGslbIpListInfoOperOperOutputReference | DataThunderGslbIpListInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_lists: {
      value: cdktf.listMapperHcl(dataThunderGslbIpListInfoOperOperIpListsToHclTerraform, true)(struct!.ipLists),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbIpListInfoOperOperIpListsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbIpListInfoOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbIpListInfoOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipLists = this._ipLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbIpListInfoOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipLists.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipLists.internalValue = value.ipLists;
    }
  }

  // ip_lists - computed: false, optional: true, required: false
  private _ipLists = new DataThunderGslbIpListInfoOperOperIpListsList(this, "ip_lists", false);
  public get ipLists() {
    return this._ipLists;
  }
  public putIpLists(value: DataThunderGslbIpListInfoOperOperIpLists[] | cdktf.IResolvable) {
    this._ipLists.internalValue = value;
  }
  public resetIpLists() {
    this._ipLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListsInput() {
    return this._ipLists.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper thunder_gslb_ip_list_info_oper}
*/
export class DataThunderGslbIpListInfoOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_ip_list_info_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbIpListInfoOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbIpListInfoOper to import
  * @param importFromId The id of the existing DataThunderGslbIpListInfoOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbIpListInfoOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_ip_list_info_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_ip_list_info_oper thunder_gslb_ip_list_info_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbIpListInfoOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbIpListInfoOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_ip_list_info_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
  private _oper = new DataThunderGslbIpListInfoOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbIpListInfoOperOper) {
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
      oper: dataThunderGslbIpListInfoOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderGslbIpListInfoOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbIpListInfoOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
