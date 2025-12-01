// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudAlidnsRecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#direction DataAlicloudAlidnsRecords#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#domain_name DataAlicloudAlidnsRecords#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#group_id DataAlicloudAlidnsRecords#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#id DataAlicloudAlidnsRecords#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#ids DataAlicloudAlidnsRecords#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#key_word DataAlicloudAlidnsRecords#key_word}
  */
  readonly keyWord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#lang DataAlicloudAlidnsRecords#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#line DataAlicloudAlidnsRecords#line}
  */
  readonly line?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#order_by DataAlicloudAlidnsRecords#order_by}
  */
  readonly orderBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#output_file DataAlicloudAlidnsRecords#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#rr_key_word DataAlicloudAlidnsRecords#rr_key_word}
  */
  readonly rrKeyWord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#rr_regex DataAlicloudAlidnsRecords#rr_regex}
  */
  readonly rrRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#search_mode DataAlicloudAlidnsRecords#search_mode}
  */
  readonly searchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#status DataAlicloudAlidnsRecords#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#type DataAlicloudAlidnsRecords#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#type_key_word DataAlicloudAlidnsRecords#type_key_word}
  */
  readonly typeKeyWord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#value_key_word DataAlicloudAlidnsRecords#value_key_word}
  */
  readonly valueKeyWord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#value_regex DataAlicloudAlidnsRecords#value_regex}
  */
  readonly valueRegex?: string;
}
export interface DataAlicloudAlidnsRecordsRecords {
}

export function dataAlicloudAlidnsRecordsRecordsToTerraform(struct?: DataAlicloudAlidnsRecordsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlidnsRecordsRecordsToHclTerraform(struct?: DataAlicloudAlidnsRecordsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlidnsRecordsRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlidnsRecordsRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlidnsRecordsRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // line - computed: true, optional: false, required: false
  public get line() {
    return this.getStringAttribute('line');
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // record_id - computed: true, optional: false, required: false
  public get recordId() {
    return this.getStringAttribute('record_id');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // rr - computed: true, optional: false, required: false
  public get rr() {
    return this.getStringAttribute('rr');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAlicloudAlidnsRecordsRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlidnsRecordsRecordsOutputReference {
    return new DataAlicloudAlidnsRecordsRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records alicloud_alidns_records}
*/
export class DataAlicloudAlidnsRecords extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alidns_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudAlidnsRecords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudAlidnsRecords to import
  * @param importFromId The id of the existing DataAlicloudAlidnsRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudAlidnsRecords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alidns_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/alidns_records alicloud_alidns_records} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudAlidnsRecordsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudAlidnsRecordsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alidns_records',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._direction = config.direction;
    this._domainName = config.domainName;
    this._groupId = config.groupId;
    this._id = config.id;
    this._ids = config.ids;
    this._keyWord = config.keyWord;
    this._lang = config.lang;
    this._line = config.line;
    this._orderBy = config.orderBy;
    this._outputFile = config.outputFile;
    this._rrKeyWord = config.rrKeyWord;
    this._rrRegex = config.rrRegex;
    this._searchMode = config.searchMode;
    this._status = config.status;
    this._type = config.type;
    this._typeKeyWord = config.typeKeyWord;
    this._valueKeyWord = config.valueKeyWord;
    this._valueRegex = config.valueRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // key_word - computed: false, optional: true, required: false
  private _keyWord?: string; 
  public get keyWord() {
    return this.getStringAttribute('key_word');
  }
  public set keyWord(value: string) {
    this._keyWord = value;
  }
  public resetKeyWord() {
    this._keyWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWordInput() {
    return this._keyWord;
  }

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // line - computed: false, optional: true, required: false
  private _line?: string; 
  public get line() {
    return this.getStringAttribute('line');
  }
  public set line(value: string) {
    this._line = value;
  }
  public resetLine() {
    this._line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // records - computed: true, optional: false, required: false
  private _records = new DataAlicloudAlidnsRecordsRecordsList(this, "records", false);
  public get records() {
    return this._records;
  }

  // rr_key_word - computed: false, optional: true, required: false
  private _rrKeyWord?: string; 
  public get rrKeyWord() {
    return this.getStringAttribute('rr_key_word');
  }
  public set rrKeyWord(value: string) {
    this._rrKeyWord = value;
  }
  public resetRrKeyWord() {
    this._rrKeyWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrKeyWordInput() {
    return this._rrKeyWord;
  }

  // rr_regex - computed: false, optional: true, required: false
  private _rrRegex?: string; 
  public get rrRegex() {
    return this.getStringAttribute('rr_regex');
  }
  public set rrRegex(value: string) {
    this._rrRegex = value;
  }
  public resetRrRegex() {
    this._rrRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrRegexInput() {
    return this._rrRegex;
  }

  // search_mode - computed: false, optional: true, required: false
  private _searchMode?: string; 
  public get searchMode() {
    return this.getStringAttribute('search_mode');
  }
  public set searchMode(value: string) {
    this._searchMode = value;
  }
  public resetSearchMode() {
    this._searchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchModeInput() {
    return this._searchMode;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // type_key_word - computed: false, optional: true, required: false
  private _typeKeyWord?: string; 
  public get typeKeyWord() {
    return this.getStringAttribute('type_key_word');
  }
  public set typeKeyWord(value: string) {
    this._typeKeyWord = value;
  }
  public resetTypeKeyWord() {
    this._typeKeyWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeKeyWordInput() {
    return this._typeKeyWord;
  }

  // value_key_word - computed: false, optional: true, required: false
  private _valueKeyWord?: string; 
  public get valueKeyWord() {
    return this.getStringAttribute('value_key_word');
  }
  public set valueKeyWord(value: string) {
    this._valueKeyWord = value;
  }
  public resetValueKeyWord() {
    this._valueKeyWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueKeyWordInput() {
    return this._valueKeyWord;
  }

  // value_regex - computed: false, optional: true, required: false
  private _valueRegex?: string; 
  public get valueRegex() {
    return this.getStringAttribute('value_regex');
  }
  public set valueRegex(value: string) {
    this._valueRegex = value;
  }
  public resetValueRegex() {
    this._valueRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueRegexInput() {
    return this._valueRegex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direction: cdktf.stringToTerraform(this._direction),
      domain_name: cdktf.stringToTerraform(this._domainName),
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      key_word: cdktf.stringToTerraform(this._keyWord),
      lang: cdktf.stringToTerraform(this._lang),
      line: cdktf.stringToTerraform(this._line),
      order_by: cdktf.stringToTerraform(this._orderBy),
      output_file: cdktf.stringToTerraform(this._outputFile),
      rr_key_word: cdktf.stringToTerraform(this._rrKeyWord),
      rr_regex: cdktf.stringToTerraform(this._rrRegex),
      search_mode: cdktf.stringToTerraform(this._searchMode),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      type_key_word: cdktf.stringToTerraform(this._typeKeyWord),
      value_key_word: cdktf.stringToTerraform(this._valueKeyWord),
      value_regex: cdktf.stringToTerraform(this._valueRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key_word: {
        value: cdktf.stringToHclTerraform(this._keyWord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line: {
        value: cdktf.stringToHclTerraform(this._line),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rr_key_word: {
        value: cdktf.stringToHclTerraform(this._rrKeyWord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rr_regex: {
        value: cdktf.stringToHclTerraform(this._rrRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_mode: {
        value: cdktf.stringToHclTerraform(this._searchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_key_word: {
        value: cdktf.stringToHclTerraform(this._typeKeyWord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_key_word: {
        value: cdktf.stringToHclTerraform(this._valueKeyWord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_regex: {
        value: cdktf.stringToHclTerraform(this._valueRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
