// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudForwardEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#external_ip DataAlicloudForwardEntries#external_ip}
  */
  readonly externalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#external_port DataAlicloudForwardEntries#external_port}
  */
  readonly externalPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#forward_entry_name DataAlicloudForwardEntries#forward_entry_name}
  */
  readonly forwardEntryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#forward_table_id DataAlicloudForwardEntries#forward_table_id}
  */
  readonly forwardTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#id DataAlicloudForwardEntries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#ids DataAlicloudForwardEntries#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#internal_ip DataAlicloudForwardEntries#internal_ip}
  */
  readonly internalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#internal_port DataAlicloudForwardEntries#internal_port}
  */
  readonly internalPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#ip_protocol DataAlicloudForwardEntries#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#name_regex DataAlicloudForwardEntries#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#output_file DataAlicloudForwardEntries#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#status DataAlicloudForwardEntries#status}
  */
  readonly status?: string;
}
export interface DataAlicloudForwardEntriesEntries {
}

export function dataAlicloudForwardEntriesEntriesToTerraform(struct?: DataAlicloudForwardEntriesEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudForwardEntriesEntriesToHclTerraform(struct?: DataAlicloudForwardEntriesEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudForwardEntriesEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudForwardEntriesEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudForwardEntriesEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_ip - computed: true, optional: false, required: false
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }

  // external_port - computed: true, optional: false, required: false
  public get externalPort() {
    return this.getStringAttribute('external_port');
  }

  // forward_entry_id - computed: true, optional: false, required: false
  public get forwardEntryId() {
    return this.getStringAttribute('forward_entry_id');
  }

  // forward_entry_name - computed: true, optional: false, required: false
  public get forwardEntryName() {
    return this.getStringAttribute('forward_entry_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // internal_port - computed: true, optional: false, required: false
  public get internalPort() {
    return this.getStringAttribute('internal_port');
  }

  // ip_protocol - computed: true, optional: false, required: false
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudForwardEntriesEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudForwardEntriesEntriesOutputReference {
    return new DataAlicloudForwardEntriesEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries alicloud_forward_entries}
*/
export class DataAlicloudForwardEntries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_forward_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudForwardEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudForwardEntries to import
  * @param importFromId The id of the existing DataAlicloudForwardEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudForwardEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_forward_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/forward_entries alicloud_forward_entries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudForwardEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudForwardEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_forward_entries',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalIp = config.externalIp;
    this._externalPort = config.externalPort;
    this._forwardEntryName = config.forwardEntryName;
    this._forwardTableId = config.forwardTableId;
    this._id = config.id;
    this._ids = config.ids;
    this._internalIp = config.internalIp;
    this._internalPort = config.internalPort;
    this._ipProtocol = config.ipProtocol;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entries - computed: true, optional: false, required: false
  private _entries = new DataAlicloudForwardEntriesEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }

  // external_ip - computed: false, optional: true, required: false
  private _externalIp?: string; 
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
  public set externalIp(value: string) {
    this._externalIp = value;
  }
  public resetExternalIp() {
    this._externalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }

  // external_port - computed: false, optional: true, required: false
  private _externalPort?: string; 
  public get externalPort() {
    return this.getStringAttribute('external_port');
  }
  public set externalPort(value: string) {
    this._externalPort = value;
  }
  public resetExternalPort() {
    this._externalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPortInput() {
    return this._externalPort;
  }

  // forward_entry_name - computed: false, optional: true, required: false
  private _forwardEntryName?: string; 
  public get forwardEntryName() {
    return this.getStringAttribute('forward_entry_name');
  }
  public set forwardEntryName(value: string) {
    this._forwardEntryName = value;
  }
  public resetForwardEntryName() {
    this._forwardEntryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardEntryNameInput() {
    return this._forwardEntryName;
  }

  // forward_table_id - computed: false, optional: false, required: true
  private _forwardTableId?: string; 
  public get forwardTableId() {
    return this.getStringAttribute('forward_table_id');
  }
  public set forwardTableId(value: string) {
    this._forwardTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTableIdInput() {
    return this._forwardTableId;
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

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp?: string; 
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }
  public set internalIp(value: string) {
    this._internalIp = value;
  }
  public resetInternalIp() {
    this._internalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // internal_port - computed: false, optional: true, required: false
  private _internalPort?: string; 
  public get internalPort() {
    return this.getStringAttribute('internal_port');
  }
  public set internalPort(value: string) {
    this._internalPort = value;
  }
  public resetInternalPort() {
    this._internalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalPortInput() {
    return this._internalPort;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
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
      external_ip: cdktf.stringToTerraform(this._externalIp),
      external_port: cdktf.stringToTerraform(this._externalPort),
      forward_entry_name: cdktf.stringToTerraform(this._forwardEntryName),
      forward_table_id: cdktf.stringToTerraform(this._forwardTableId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      internal_ip: cdktf.stringToTerraform(this._internalIp),
      internal_port: cdktf.stringToTerraform(this._internalPort),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_ip: {
        value: cdktf.stringToHclTerraform(this._externalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_port: {
        value: cdktf.stringToHclTerraform(this._externalPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_entry_name: {
        value: cdktf.stringToHclTerraform(this._forwardEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_table_id: {
        value: cdktf.stringToHclTerraform(this._forwardTableId),
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
      internal_ip: {
        value: cdktf.stringToHclTerraform(this._internalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_port: {
        value: cdktf.stringToHclTerraform(this._internalPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
