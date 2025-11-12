// https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SfpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#id Sfpool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#live_record_description Sfpool#live_record_description}
  */
  readonly liveRecordDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#live_record_state Sfpool#live_record_state}
  */
  readonly liveRecordState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#owner_name Sfpool#owner_name}
  */
  readonly ownerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#pool_description Sfpool#pool_description}
  */
  readonly poolDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#record_data Sfpool#record_data}
  */
  readonly recordData: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#record_type Sfpool#record_type}
  */
  readonly recordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#region_failure_sensitivity Sfpool#region_failure_sensitivity}
  */
  readonly regionFailureSensitivity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#ttl Sfpool#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#zone_name Sfpool#zone_name}
  */
  readonly zoneName: string;
  /**
  * backup_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#backup_record Sfpool#backup_record}
  */
  readonly backupRecord?: SfpoolBackupRecord;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#monitor Sfpool#monitor}
  */
  readonly monitor: SfpoolMonitor;
}
export interface SfpoolBackupRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#description Sfpool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#rdata Sfpool#rdata}
  */
  readonly rdata: string;
}

export function sfpoolBackupRecordToTerraform(struct?: SfpoolBackupRecordOutputReference | SfpoolBackupRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    rdata: cdktf.stringToTerraform(struct!.rdata),
  }
}


export function sfpoolBackupRecordToHclTerraform(struct?: SfpoolBackupRecordOutputReference | SfpoolBackupRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdata: {
      value: cdktf.stringToHclTerraform(struct!.rdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SfpoolBackupRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SfpoolBackupRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._rdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdata = this._rdata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SfpoolBackupRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._rdata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._rdata = value.rdata;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata?: string; 
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
  public set rdata(value: string) {
    this._rdata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
  }
}
export interface SfpoolMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#method Sfpool#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#search_string Sfpool#search_string}
  */
  readonly searchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#transmitted_data Sfpool#transmitted_data}
  */
  readonly transmittedData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#url Sfpool#url}
  */
  readonly url: string;
}

export function sfpoolMonitorToTerraform(struct?: SfpoolMonitorOutputReference | SfpoolMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    transmitted_data: cdktf.stringToTerraform(struct!.transmittedData),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function sfpoolMonitorToHclTerraform(struct?: SfpoolMonitorOutputReference | SfpoolMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_string: {
      value: cdktf.stringToHclTerraform(struct!.searchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transmitted_data: {
      value: cdktf.stringToHclTerraform(struct!.transmittedData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SfpoolMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SfpoolMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._searchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchString = this._searchString;
    }
    if (this._transmittedData !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmittedData = this._transmittedData;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SfpoolMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._searchString = undefined;
      this._transmittedData = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._searchString = value.searchString;
      this._transmittedData = value.transmittedData;
      this._url = value.url;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // search_string - computed: false, optional: true, required: false
  private _searchString?: string; 
  public get searchString() {
    return this.getStringAttribute('search_string');
  }
  public set searchString(value: string) {
    this._searchString = value;
  }
  public resetSearchString() {
    this._searchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchStringInput() {
    return this._searchString;
  }

  // transmitted_data - computed: false, optional: true, required: false
  private _transmittedData?: string; 
  public get transmittedData() {
    return this.getStringAttribute('transmitted_data');
  }
  public set transmittedData(value: string) {
    this._transmittedData = value;
  }
  public resetTransmittedData() {
    this._transmittedData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmittedDataInput() {
    return this._transmittedData;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool ultradns_sfpool}
*/
export class Sfpool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ultradns_sfpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sfpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sfpool to import
  * @param importFromId The id of the existing Sfpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sfpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ultradns_sfpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sfpool ultradns_sfpool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SfpoolConfig
  */
  public constructor(scope: Construct, id: string, config: SfpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'ultradns_sfpool',
      terraformGeneratorMetadata: {
        providerName: 'ultradns',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
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
    this._liveRecordDescription = config.liveRecordDescription;
    this._liveRecordState = config.liveRecordState;
    this._ownerName = config.ownerName;
    this._poolDescription = config.poolDescription;
    this._recordData = config.recordData;
    this._recordType = config.recordType;
    this._regionFailureSensitivity = config.regionFailureSensitivity;
    this._ttl = config.ttl;
    this._zoneName = config.zoneName;
    this._backupRecord.internalValue = config.backupRecord;
    this._monitor.internalValue = config.monitor;
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

  // live_record_description - computed: false, optional: true, required: false
  private _liveRecordDescription?: string; 
  public get liveRecordDescription() {
    return this.getStringAttribute('live_record_description');
  }
  public set liveRecordDescription(value: string) {
    this._liveRecordDescription = value;
  }
  public resetLiveRecordDescription() {
    this._liveRecordDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveRecordDescriptionInput() {
    return this._liveRecordDescription;
  }

  // live_record_state - computed: false, optional: true, required: false
  private _liveRecordState?: string; 
  public get liveRecordState() {
    return this.getStringAttribute('live_record_state');
  }
  public set liveRecordState(value: string) {
    this._liveRecordState = value;
  }
  public resetLiveRecordState() {
    this._liveRecordState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveRecordStateInput() {
    return this._liveRecordState;
  }

  // owner_name - computed: false, optional: false, required: true
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // pool_description - computed: false, optional: true, required: false
  private _poolDescription?: string; 
  public get poolDescription() {
    return this.getStringAttribute('pool_description');
  }
  public set poolDescription(value: string) {
    this._poolDescription = value;
  }
  public resetPoolDescription() {
    this._poolDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolDescriptionInput() {
    return this._poolDescription;
  }

  // record_data - computed: false, optional: false, required: true
  private _recordData?: string[]; 
  public get recordData() {
    return cdktf.Fn.tolist(this.getListAttribute('record_data'));
  }
  public set recordData(value: string[]) {
    this._recordData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDataInput() {
    return this._recordData;
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // region_failure_sensitivity - computed: false, optional: false, required: true
  private _regionFailureSensitivity?: string; 
  public get regionFailureSensitivity() {
    return this.getStringAttribute('region_failure_sensitivity');
  }
  public set regionFailureSensitivity(value: string) {
    this._regionFailureSensitivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionFailureSensitivityInput() {
    return this._regionFailureSensitivity;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // backup_record - computed: false, optional: true, required: false
  private _backupRecord = new SfpoolBackupRecordOutputReference(this, "backup_record");
  public get backupRecord() {
    return this._backupRecord;
  }
  public putBackupRecord(value: SfpoolBackupRecord) {
    this._backupRecord.internalValue = value;
  }
  public resetBackupRecord() {
    this._backupRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRecordInput() {
    return this._backupRecord.internalValue;
  }

  // monitor - computed: false, optional: false, required: true
  private _monitor = new SfpoolMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: SfpoolMonitor) {
    this._monitor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      live_record_description: cdktf.stringToTerraform(this._liveRecordDescription),
      live_record_state: cdktf.stringToTerraform(this._liveRecordState),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      pool_description: cdktf.stringToTerraform(this._poolDescription),
      record_data: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordData),
      record_type: cdktf.stringToTerraform(this._recordType),
      region_failure_sensitivity: cdktf.stringToTerraform(this._regionFailureSensitivity),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      backup_record: sfpoolBackupRecordToTerraform(this._backupRecord.internalValue),
      monitor: sfpoolMonitorToTerraform(this._monitor.internalValue),
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
      live_record_description: {
        value: cdktf.stringToHclTerraform(this._liveRecordDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      live_record_state: {
        value: cdktf.stringToHclTerraform(this._liveRecordState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_name: {
        value: cdktf.stringToHclTerraform(this._ownerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_description: {
        value: cdktf.stringToHclTerraform(this._poolDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_data: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recordData),
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
      region_failure_sensitivity: {
        value: cdktf.stringToHclTerraform(this._regionFailureSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_record: {
        value: sfpoolBackupRecordToHclTerraform(this._backupRecord.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SfpoolBackupRecordList",
      },
      monitor: {
        value: sfpoolMonitorToHclTerraform(this._monitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SfpoolMonitorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
