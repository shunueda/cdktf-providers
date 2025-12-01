// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudDnsDomainRecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records#domain_name DataAlicloudDnsDomainRecords#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records#host_record_regex DataAlicloudDnsDomainRecords#host_record_regex}
  */
  readonly hostRecordRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records#id DataAlicloudDnsDomainRecords#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records#ids DataAlicloudDnsDomainRecords#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records#is_locked DataAlicloudDnsDomainRecords#is_locked}
  */
  readonly isLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records#line DataAlicloudDnsDomainRecords#line}
  */
  readonly line?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records#output_file DataAlicloudDnsDomainRecords#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records#status DataAlicloudDnsDomainRecords#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records#type DataAlicloudDnsDomainRecords#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records#value_regex DataAlicloudDnsDomainRecords#value_regex}
  */
  readonly valueRegex?: string;
}
export interface DataAlicloudDnsDomainRecordsRecords {
}

export function dataAlicloudDnsDomainRecordsRecordsToTerraform(struct?: DataAlicloudDnsDomainRecordsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDnsDomainRecordsRecordsToHclTerraform(struct?: DataAlicloudDnsDomainRecordsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDnsDomainRecordsRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDnsDomainRecordsRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDnsDomainRecordsRecords | undefined) {
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

  // host_record - computed: true, optional: false, required: false
  public get hostRecord() {
    return this.getStringAttribute('host_record');
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

export class DataAlicloudDnsDomainRecordsRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDnsDomainRecordsRecordsOutputReference {
    return new DataAlicloudDnsDomainRecordsRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records alicloud_dns_domain_records}
*/
export class DataAlicloudDnsDomainRecords extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dns_domain_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudDnsDomainRecords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudDnsDomainRecords to import
  * @param importFromId The id of the existing DataAlicloudDnsDomainRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudDnsDomainRecords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dns_domain_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domain_records alicloud_dns_domain_records} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudDnsDomainRecordsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudDnsDomainRecordsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dns_domain_records',
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
    this._domainName = config.domainName;
    this._hostRecordRegex = config.hostRecordRegex;
    this._id = config.id;
    this._ids = config.ids;
    this._isLocked = config.isLocked;
    this._line = config.line;
    this._outputFile = config.outputFile;
    this._status = config.status;
    this._type = config.type;
    this._valueRegex = config.valueRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // host_record_regex - computed: false, optional: true, required: false
  private _hostRecordRegex?: string; 
  public get hostRecordRegex() {
    return this.getStringAttribute('host_record_regex');
  }
  public set hostRecordRegex(value: string) {
    this._hostRecordRegex = value;
  }
  public resetHostRecordRegex() {
    this._hostRecordRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRecordRegexInput() {
    return this._hostRecordRegex;
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

  // is_locked - computed: false, optional: true, required: false
  private _isLocked?: boolean | cdktf.IResolvable; 
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }
  public set isLocked(value: boolean | cdktf.IResolvable) {
    this._isLocked = value;
  }
  public resetIsLocked() {
    this._isLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockedInput() {
    return this._isLocked;
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
  private _records = new DataAlicloudDnsDomainRecordsRecordsList(this, "records", false);
  public get records() {
    return this._records;
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

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return this.getListAttribute('urls');
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
      domain_name: cdktf.stringToTerraform(this._domainName),
      host_record_regex: cdktf.stringToTerraform(this._hostRecordRegex),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      is_locked: cdktf.booleanToTerraform(this._isLocked),
      line: cdktf.stringToTerraform(this._line),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      value_regex: cdktf.stringToTerraform(this._valueRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_record_regex: {
        value: cdktf.stringToHclTerraform(this._hostRecordRegex),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_locked: {
        value: cdktf.booleanToHclTerraform(this._isLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      line: {
        value: cdktf.stringToHclTerraform(this._line),
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
