// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionOssScanConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#all_key_prefix ThreatDetectionOssScanConfig#all_key_prefix}
  */
  readonly allKeyPrefix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#bucket_name_list ThreatDetectionOssScanConfig#bucket_name_list}
  */
  readonly bucketNameList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#decompress_max_file_count ThreatDetectionOssScanConfig#decompress_max_file_count}
  */
  readonly decompressMaxFileCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#decompress_max_layer ThreatDetectionOssScanConfig#decompress_max_layer}
  */
  readonly decompressMaxLayer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#decryption_list ThreatDetectionOssScanConfig#decryption_list}
  */
  readonly decryptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#enable ThreatDetectionOssScanConfig#enable}
  */
  readonly enable: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#end_time ThreatDetectionOssScanConfig#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#id ThreatDetectionOssScanConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#key_prefix_list ThreatDetectionOssScanConfig#key_prefix_list}
  */
  readonly keyPrefixList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#key_suffix_list ThreatDetectionOssScanConfig#key_suffix_list}
  */
  readonly keySuffixList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#last_modified_start_time ThreatDetectionOssScanConfig#last_modified_start_time}
  */
  readonly lastModifiedStartTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#oss_scan_config_name ThreatDetectionOssScanConfig#oss_scan_config_name}
  */
  readonly ossScanConfigName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#scan_day_list ThreatDetectionOssScanConfig#scan_day_list}
  */
  readonly scanDayList: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#start_time ThreatDetectionOssScanConfig#start_time}
  */
  readonly startTime: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#timeouts ThreatDetectionOssScanConfig#timeouts}
  */
  readonly timeouts?: ThreatDetectionOssScanConfigTimeouts;
}
export interface ThreatDetectionOssScanConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#create ThreatDetectionOssScanConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#delete ThreatDetectionOssScanConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#update ThreatDetectionOssScanConfig#update}
  */
  readonly update?: string;
}

export function threatDetectionOssScanConfigTimeoutsToTerraform(struct?: ThreatDetectionOssScanConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function threatDetectionOssScanConfigTimeoutsToHclTerraform(struct?: ThreatDetectionOssScanConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThreatDetectionOssScanConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionOssScanConfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatDetectionOssScanConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config alicloud_threat_detection_oss_scan_config}
*/
export class ThreatDetectionOssScanConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_oss_scan_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionOssScanConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionOssScanConfig to import
  * @param importFromId The id of the existing ThreatDetectionOssScanConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionOssScanConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_oss_scan_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/threat_detection_oss_scan_config alicloud_threat_detection_oss_scan_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionOssScanConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionOssScanConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_oss_scan_config',
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
    this._allKeyPrefix = config.allKeyPrefix;
    this._bucketNameList = config.bucketNameList;
    this._decompressMaxFileCount = config.decompressMaxFileCount;
    this._decompressMaxLayer = config.decompressMaxLayer;
    this._decryptionList = config.decryptionList;
    this._enable = config.enable;
    this._endTime = config.endTime;
    this._id = config.id;
    this._keyPrefixList = config.keyPrefixList;
    this._keySuffixList = config.keySuffixList;
    this._lastModifiedStartTime = config.lastModifiedStartTime;
    this._ossScanConfigName = config.ossScanConfigName;
    this._scanDayList = config.scanDayList;
    this._startTime = config.startTime;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_key_prefix - computed: true, optional: true, required: false
  private _allKeyPrefix?: boolean | cdktf.IResolvable; 
  public get allKeyPrefix() {
    return this.getBooleanAttribute('all_key_prefix');
  }
  public set allKeyPrefix(value: boolean | cdktf.IResolvable) {
    this._allKeyPrefix = value;
  }
  public resetAllKeyPrefix() {
    this._allKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allKeyPrefixInput() {
    return this._allKeyPrefix;
  }

  // bucket_name_list - computed: false, optional: false, required: true
  private _bucketNameList?: string[]; 
  public get bucketNameList() {
    return cdktf.Fn.tolist(this.getListAttribute('bucket_name_list'));
  }
  public set bucketNameList(value: string[]) {
    this._bucketNameList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameListInput() {
    return this._bucketNameList;
  }

  // decompress_max_file_count - computed: false, optional: true, required: false
  private _decompressMaxFileCount?: number; 
  public get decompressMaxFileCount() {
    return this.getNumberAttribute('decompress_max_file_count');
  }
  public set decompressMaxFileCount(value: number) {
    this._decompressMaxFileCount = value;
  }
  public resetDecompressMaxFileCount() {
    this._decompressMaxFileCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressMaxFileCountInput() {
    return this._decompressMaxFileCount;
  }

  // decompress_max_layer - computed: false, optional: true, required: false
  private _decompressMaxLayer?: number; 
  public get decompressMaxLayer() {
    return this.getNumberAttribute('decompress_max_layer');
  }
  public set decompressMaxLayer(value: number) {
    this._decompressMaxLayer = value;
  }
  public resetDecompressMaxLayer() {
    this._decompressMaxLayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressMaxLayerInput() {
    return this._decompressMaxLayer;
  }

  // decryption_list - computed: false, optional: true, required: false
  private _decryptionList?: string[]; 
  public get decryptionList() {
    return this.getListAttribute('decryption_list');
  }
  public set decryptionList(value: string[]) {
    this._decryptionList = value;
  }
  public resetDecryptionList() {
    this._decryptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionListInput() {
    return this._decryptionList;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // key_prefix_list - computed: false, optional: true, required: false
  private _keyPrefixList?: string[]; 
  public get keyPrefixList() {
    return cdktf.Fn.tolist(this.getListAttribute('key_prefix_list'));
  }
  public set keyPrefixList(value: string[]) {
    this._keyPrefixList = value;
  }
  public resetKeyPrefixList() {
    this._keyPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixListInput() {
    return this._keyPrefixList;
  }

  // key_suffix_list - computed: false, optional: false, required: true
  private _keySuffixList?: string[]; 
  public get keySuffixList() {
    return cdktf.Fn.tolist(this.getListAttribute('key_suffix_list'));
  }
  public set keySuffixList(value: string[]) {
    this._keySuffixList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySuffixListInput() {
    return this._keySuffixList;
  }

  // last_modified_start_time - computed: false, optional: true, required: false
  private _lastModifiedStartTime?: number; 
  public get lastModifiedStartTime() {
    return this.getNumberAttribute('last_modified_start_time');
  }
  public set lastModifiedStartTime(value: number) {
    this._lastModifiedStartTime = value;
  }
  public resetLastModifiedStartTime() {
    this._lastModifiedStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedStartTimeInput() {
    return this._lastModifiedStartTime;
  }

  // oss_scan_config_name - computed: false, optional: true, required: false
  private _ossScanConfigName?: string; 
  public get ossScanConfigName() {
    return this.getStringAttribute('oss_scan_config_name');
  }
  public set ossScanConfigName(value: string) {
    this._ossScanConfigName = value;
  }
  public resetOssScanConfigName() {
    this._ossScanConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossScanConfigNameInput() {
    return this._ossScanConfigName;
  }

  // scan_day_list - computed: false, optional: false, required: true
  private _scanDayList?: number[]; 
  public get scanDayList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('scan_day_list')));
  }
  public set scanDayList(value: number[]) {
    this._scanDayList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanDayListInput() {
    return this._scanDayList;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionOssScanConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionOssScanConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_key_prefix: cdktf.booleanToTerraform(this._allKeyPrefix),
      bucket_name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bucketNameList),
      decompress_max_file_count: cdktf.numberToTerraform(this._decompressMaxFileCount),
      decompress_max_layer: cdktf.numberToTerraform(this._decompressMaxLayer),
      decryption_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._decryptionList),
      enable: cdktf.numberToTerraform(this._enable),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      key_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyPrefixList),
      key_suffix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keySuffixList),
      last_modified_start_time: cdktf.numberToTerraform(this._lastModifiedStartTime),
      oss_scan_config_name: cdktf.stringToTerraform(this._ossScanConfigName),
      scan_day_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._scanDayList),
      start_time: cdktf.stringToTerraform(this._startTime),
      timeouts: threatDetectionOssScanConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_key_prefix: {
        value: cdktf.booleanToHclTerraform(this._allKeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bucket_name_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bucketNameList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      decompress_max_file_count: {
        value: cdktf.numberToHclTerraform(this._decompressMaxFileCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      decompress_max_layer: {
        value: cdktf.numberToHclTerraform(this._decompressMaxLayer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      decryption_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._decryptionList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      key_prefix_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyPrefixList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key_suffix_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keySuffixList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      last_modified_start_time: {
        value: cdktf.numberToHclTerraform(this._lastModifiedStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oss_scan_config_name: {
        value: cdktf.stringToHclTerraform(this._ossScanConfigName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_day_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._scanDayList),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: threatDetectionOssScanConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionOssScanConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
