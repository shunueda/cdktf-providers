// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zdns_zone_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudZdnsZoneRecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zdns_zone_records#id DataZenlayercloudZdnsZoneRecords#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDs of the records to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zdns_zone_records#ids DataZenlayercloudZdnsZoneRecords#ids}
  */
  readonly ids?: string[];
  /**
  * Type of the records to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zdns_zone_records#record_type DataZenlayercloudZdnsZoneRecords#record_type}
  */
  readonly recordType?: string;
  /**
  * Value of the records to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zdns_zone_records#record_value DataZenlayercloudZdnsZoneRecords#record_value}
  */
  readonly recordValue?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zdns_zone_records#result_output_file DataZenlayercloudZdnsZoneRecords#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * ID of the DNS private zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zdns_zone_records#zone_id DataZenlayercloudZdnsZoneRecords#zone_id}
  */
  readonly zoneId: string;
}
export interface DataZenlayercloudZdnsZoneRecordsRecords {
}

export function dataZenlayercloudZdnsZoneRecordsRecordsToTerraform(struct?: DataZenlayercloudZdnsZoneRecordsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZdnsZoneRecordsRecordsToHclTerraform(struct?: DataZenlayercloudZdnsZoneRecordsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZdnsZoneRecordsRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZdnsZoneRecordsRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZdnsZoneRecordsRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // record_name - computed: true, optional: false, required: false
  public get recordName() {
    return this.getStringAttribute('record_name');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // record_value - computed: true, optional: false, required: false
  public get recordValue() {
    return this.getStringAttribute('record_value');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataZenlayercloudZdnsZoneRecordsRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZdnsZoneRecordsRecordsOutputReference {
    return new DataZenlayercloudZdnsZoneRecordsRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zdns_zone_records zenlayercloud_zdns_zone_records}
*/
export class DataZenlayercloudZdnsZoneRecords extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zdns_zone_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudZdnsZoneRecords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudZdnsZoneRecords to import
  * @param importFromId The id of the existing DataZenlayercloudZdnsZoneRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zdns_zone_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudZdnsZoneRecords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zdns_zone_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/zdns_zone_records zenlayercloud_zdns_zone_records} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudZdnsZoneRecordsConfig
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudZdnsZoneRecordsConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zdns_zone_records',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.10',
        providerVersionConstraint: '0.2.10'
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
    this._ids = config.ids;
    this._recordType = config.recordType;
    this._recordValue = config.recordValue;
    this._resultOutputFile = config.resultOutputFile;
    this._zoneId = config.zoneId;
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

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
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

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // record_value - computed: false, optional: true, required: false
  private _recordValue?: string; 
  public get recordValue() {
    return this.getStringAttribute('record_value');
  }
  public set recordValue(value: string) {
    this._recordValue = value;
  }
  public resetRecordValue() {
    this._recordValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordValueInput() {
    return this._recordValue;
  }

  // records - computed: true, optional: false, required: false
  private _records = new DataZenlayercloudZdnsZoneRecordsRecordsList(this, "records", false);
  public get records() {
    return this._records;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      record_type: cdktf.stringToTerraform(this._recordType),
      record_value: cdktf.stringToTerraform(this._recordValue),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_value: {
        value: cdktf.stringToHclTerraform(this._recordValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
