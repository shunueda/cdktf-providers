// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCaptureConfigOperOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#id DataThunderCaptureConfigOperOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#oper DataThunderCaptureConfigOperOper#oper}
  */
  readonly oper?: DataThunderCaptureConfigOperOperOper;
}
export interface DataThunderCaptureConfigOperOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#action DataThunderCaptureConfigOperOper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#filesize_kbyte DataThunderCaptureConfigOperOper#filesize_kbyte}
  */
  readonly filesizeKbyte?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#filter DataThunderCaptureConfigOperOper#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#has_file_history DataThunderCaptureConfigOperOper#has_file_history}
  */
  readonly hasFileHistory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#max_filesize_kbyte DataThunderCaptureConfigOperOper#max_filesize_kbyte}
  */
  readonly maxFilesizeKbyte?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#max_pkt_count DataThunderCaptureConfigOperOper#max_pkt_count}
  */
  readonly maxPktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#name DataThunderCaptureConfigOperOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#pkt_count DataThunderCaptureConfigOperOper#pkt_count}
  */
  readonly pktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#snaplen DataThunderCaptureConfigOperOper#snaplen}
  */
  readonly snaplen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#status DataThunderCaptureConfigOperOper#status}
  */
  readonly status?: string;
}

export function dataThunderCaptureConfigOperOperOperToTerraform(struct?: DataThunderCaptureConfigOperOperOperOutputReference | DataThunderCaptureConfigOperOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    filesize_kbyte: cdktf.numberToTerraform(struct!.filesizeKbyte),
    filter: cdktf.stringToTerraform(struct!.filter),
    has_file_history: cdktf.numberToTerraform(struct!.hasFileHistory),
    max_filesize_kbyte: cdktf.numberToTerraform(struct!.maxFilesizeKbyte),
    max_pkt_count: cdktf.numberToTerraform(struct!.maxPktCount),
    name: cdktf.stringToTerraform(struct!.name),
    pkt_count: cdktf.numberToTerraform(struct!.pktCount),
    snaplen: cdktf.numberToTerraform(struct!.snaplen),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderCaptureConfigOperOperOperToHclTerraform(struct?: DataThunderCaptureConfigOperOperOperOutputReference | DataThunderCaptureConfigOperOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filesize_kbyte: {
      value: cdktf.numberToHclTerraform(struct!.filesizeKbyte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_file_history: {
      value: cdktf.numberToHclTerraform(struct!.hasFileHistory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_filesize_kbyte: {
      value: cdktf.numberToHclTerraform(struct!.maxFilesizeKbyte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pkt_count: {
      value: cdktf.numberToHclTerraform(struct!.maxPktCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkt_count: {
      value: cdktf.numberToHclTerraform(struct!.pktCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snaplen: {
      value: cdktf.numberToHclTerraform(struct!.snaplen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCaptureConfigOperOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCaptureConfigOperOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._filesizeKbyte !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesizeKbyte = this._filesizeKbyte;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._hasFileHistory !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasFileHistory = this._hasFileHistory;
    }
    if (this._maxFilesizeKbyte !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFilesizeKbyte = this._maxFilesizeKbyte;
    }
    if (this._maxPktCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPktCount = this._maxPktCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pktCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktCount = this._pktCount;
    }
    if (this._snaplen !== undefined) {
      hasAnyValues = true;
      internalValueResult.snaplen = this._snaplen;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCaptureConfigOperOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._filesizeKbyte = undefined;
      this._filter = undefined;
      this._hasFileHistory = undefined;
      this._maxFilesizeKbyte = undefined;
      this._maxPktCount = undefined;
      this._name = undefined;
      this._pktCount = undefined;
      this._snaplen = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._filesizeKbyte = value.filesizeKbyte;
      this._filter = value.filter;
      this._hasFileHistory = value.hasFileHistory;
      this._maxFilesizeKbyte = value.maxFilesizeKbyte;
      this._maxPktCount = value.maxPktCount;
      this._name = value.name;
      this._pktCount = value.pktCount;
      this._snaplen = value.snaplen;
      this._status = value.status;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // filesize_kbyte - computed: false, optional: true, required: false
  private _filesizeKbyte?: number; 
  public get filesizeKbyte() {
    return this.getNumberAttribute('filesize_kbyte');
  }
  public set filesizeKbyte(value: number) {
    this._filesizeKbyte = value;
  }
  public resetFilesizeKbyte() {
    this._filesizeKbyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesizeKbyteInput() {
    return this._filesizeKbyte;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // has_file_history - computed: false, optional: true, required: false
  private _hasFileHistory?: number; 
  public get hasFileHistory() {
    return this.getNumberAttribute('has_file_history');
  }
  public set hasFileHistory(value: number) {
    this._hasFileHistory = value;
  }
  public resetHasFileHistory() {
    this._hasFileHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasFileHistoryInput() {
    return this._hasFileHistory;
  }

  // max_filesize_kbyte - computed: false, optional: true, required: false
  private _maxFilesizeKbyte?: number; 
  public get maxFilesizeKbyte() {
    return this.getNumberAttribute('max_filesize_kbyte');
  }
  public set maxFilesizeKbyte(value: number) {
    this._maxFilesizeKbyte = value;
  }
  public resetMaxFilesizeKbyte() {
    this._maxFilesizeKbyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFilesizeKbyteInput() {
    return this._maxFilesizeKbyte;
  }

  // max_pkt_count - computed: false, optional: true, required: false
  private _maxPktCount?: number; 
  public get maxPktCount() {
    return this.getNumberAttribute('max_pkt_count');
  }
  public set maxPktCount(value: number) {
    this._maxPktCount = value;
  }
  public resetMaxPktCount() {
    this._maxPktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPktCountInput() {
    return this._maxPktCount;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pkt_count - computed: false, optional: true, required: false
  private _pktCount?: number; 
  public get pktCount() {
    return this.getNumberAttribute('pkt_count');
  }
  public set pktCount(value: number) {
    this._pktCount = value;
  }
  public resetPktCount() {
    this._pktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktCountInput() {
    return this._pktCount;
  }

  // snaplen - computed: false, optional: true, required: false
  private _snaplen?: number; 
  public get snaplen() {
    return this.getNumberAttribute('snaplen');
  }
  public set snaplen(value: number) {
    this._snaplen = value;
  }
  public resetSnaplen() {
    this._snaplen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snaplenInput() {
    return this._snaplen;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper thunder_capture_config_oper_oper}
*/
export class DataThunderCaptureConfigOperOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_capture_config_oper_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCaptureConfigOperOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCaptureConfigOperOper to import
  * @param importFromId The id of the existing DataThunderCaptureConfigOperOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCaptureConfigOperOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_capture_config_oper_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/capture_config_oper_oper thunder_capture_config_oper_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCaptureConfigOperOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCaptureConfigOperOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_capture_config_oper_oper',
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
  private _oper = new DataThunderCaptureConfigOperOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCaptureConfigOperOperOper) {
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
      oper: dataThunderCaptureConfigOperOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCaptureConfigOperOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCaptureConfigOperOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
