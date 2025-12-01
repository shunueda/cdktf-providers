// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudSnatEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries#id DataAlicloudSnatEntries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries#ids DataAlicloudSnatEntries#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries#name_regex DataAlicloudSnatEntries#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries#output_file DataAlicloudSnatEntries#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries#snat_entry_name DataAlicloudSnatEntries#snat_entry_name}
  */
  readonly snatEntryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries#snat_ip DataAlicloudSnatEntries#snat_ip}
  */
  readonly snatIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries#snat_table_id DataAlicloudSnatEntries#snat_table_id}
  */
  readonly snatTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries#source_cidr DataAlicloudSnatEntries#source_cidr}
  */
  readonly sourceCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries#source_vswitch_id DataAlicloudSnatEntries#source_vswitch_id}
  */
  readonly sourceVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries#status DataAlicloudSnatEntries#status}
  */
  readonly status?: string;
}
export interface DataAlicloudSnatEntriesEntries {
}

export function dataAlicloudSnatEntriesEntriesToTerraform(struct?: DataAlicloudSnatEntriesEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSnatEntriesEntriesToHclTerraform(struct?: DataAlicloudSnatEntriesEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSnatEntriesEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSnatEntriesEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSnatEntriesEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // snat_entry_id - computed: true, optional: false, required: false
  public get snatEntryId() {
    return this.getStringAttribute('snat_entry_id');
  }

  // snat_entry_name - computed: true, optional: false, required: false
  public get snatEntryName() {
    return this.getStringAttribute('snat_entry_name');
  }

  // snat_ip - computed: true, optional: false, required: false
  public get snatIp() {
    return this.getStringAttribute('snat_ip');
  }

  // source_cidr - computed: true, optional: false, required: false
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }

  // source_vswitch_id - computed: true, optional: false, required: false
  public get sourceVswitchId() {
    return this.getStringAttribute('source_vswitch_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudSnatEntriesEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSnatEntriesEntriesOutputReference {
    return new DataAlicloudSnatEntriesEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries alicloud_snat_entries}
*/
export class DataAlicloudSnatEntries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_snat_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudSnatEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudSnatEntries to import
  * @param importFromId The id of the existing DataAlicloudSnatEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudSnatEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_snat_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/snat_entries alicloud_snat_entries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudSnatEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudSnatEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_snat_entries',
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
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._snatEntryName = config.snatEntryName;
    this._snatIp = config.snatIp;
    this._snatTableId = config.snatTableId;
    this._sourceCidr = config.sourceCidr;
    this._sourceVswitchId = config.sourceVswitchId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entries - computed: true, optional: false, required: false
  private _entries = new DataAlicloudSnatEntriesEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
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

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
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

  // snat_entry_name - computed: false, optional: true, required: false
  private _snatEntryName?: string; 
  public get snatEntryName() {
    return this.getStringAttribute('snat_entry_name');
  }
  public set snatEntryName(value: string) {
    this._snatEntryName = value;
  }
  public resetSnatEntryName() {
    this._snatEntryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatEntryNameInput() {
    return this._snatEntryName;
  }

  // snat_ip - computed: false, optional: true, required: false
  private _snatIp?: string; 
  public get snatIp() {
    return this.getStringAttribute('snat_ip');
  }
  public set snatIp(value: string) {
    this._snatIp = value;
  }
  public resetSnatIp() {
    this._snatIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatIpInput() {
    return this._snatIp;
  }

  // snat_table_id - computed: false, optional: false, required: true
  private _snatTableId?: string; 
  public get snatTableId() {
    return this.getStringAttribute('snat_table_id');
  }
  public set snatTableId(value: string) {
    this._snatTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snatTableIdInput() {
    return this._snatTableId;
  }

  // source_cidr - computed: false, optional: true, required: false
  private _sourceCidr?: string; 
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }
  public set sourceCidr(value: string) {
    this._sourceCidr = value;
  }
  public resetSourceCidr() {
    this._sourceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }

  // source_vswitch_id - computed: false, optional: true, required: false
  private _sourceVswitchId?: string; 
  public get sourceVswitchId() {
    return this.getStringAttribute('source_vswitch_id');
  }
  public set sourceVswitchId(value: string) {
    this._sourceVswitchId = value;
  }
  public resetSourceVswitchId() {
    this._sourceVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVswitchIdInput() {
    return this._sourceVswitchId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      snat_entry_name: cdktf.stringToTerraform(this._snatEntryName),
      snat_ip: cdktf.stringToTerraform(this._snatIp),
      snat_table_id: cdktf.stringToTerraform(this._snatTableId),
      source_cidr: cdktf.stringToTerraform(this._sourceCidr),
      source_vswitch_id: cdktf.stringToTerraform(this._sourceVswitchId),
      status: cdktf.stringToTerraform(this._status),
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
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
      snat_entry_name: {
        value: cdktf.stringToHclTerraform(this._snatEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat_ip: {
        value: cdktf.stringToHclTerraform(this._snatIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat_table_id: {
        value: cdktf.stringToHclTerraform(this._snatTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_cidr: {
        value: cdktf.stringToHclTerraform(this._sourceCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._sourceVswitchId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
