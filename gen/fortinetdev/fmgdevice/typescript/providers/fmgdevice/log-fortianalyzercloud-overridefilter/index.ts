// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogFortianalyzercloudOverridefilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#anomaly LogFortianalyzercloudOverridefilter#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#device_name LogFortianalyzercloudOverridefilter#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#device_vdom LogFortianalyzercloudOverridefilter#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#dlp_archive LogFortianalyzercloudOverridefilter#dlp_archive}
  */
  readonly dlpArchive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#dynamic_sort_subtable LogFortianalyzercloudOverridefilter#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#filter LogFortianalyzercloudOverridefilter#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#filter_type LogFortianalyzercloudOverridefilter#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#forti_switch LogFortianalyzercloudOverridefilter#forti_switch}
  */
  readonly fortiSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#forward_traffic LogFortianalyzercloudOverridefilter#forward_traffic}
  */
  readonly forwardTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#gtp LogFortianalyzercloudOverridefilter#gtp}
  */
  readonly gtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#http_transaction LogFortianalyzercloudOverridefilter#http_transaction}
  */
  readonly httpTransaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#id LogFortianalyzercloudOverridefilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#local_traffic LogFortianalyzercloudOverridefilter#local_traffic}
  */
  readonly localTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#multicast_traffic LogFortianalyzercloudOverridefilter#multicast_traffic}
  */
  readonly multicastTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#severity LogFortianalyzercloudOverridefilter#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#sniffer_traffic LogFortianalyzercloudOverridefilter#sniffer_traffic}
  */
  readonly snifferTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#voip LogFortianalyzercloudOverridefilter#voip}
  */
  readonly voip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#ztna_traffic LogFortianalyzercloudOverridefilter#ztna_traffic}
  */
  readonly ztnaTraffic?: string;
  /**
  * free_style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#free_style LogFortianalyzercloudOverridefilter#free_style}
  */
  readonly freeStyle?: LogFortianalyzercloudOverridefilterFreeStyle[] | cdktf.IResolvable;
}
export interface LogFortianalyzercloudOverridefilterFreeStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#category LogFortianalyzercloudOverridefilter#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#filter LogFortianalyzercloudOverridefilter#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#filter_type LogFortianalyzercloudOverridefilter#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#id LogFortianalyzercloudOverridefilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function logFortianalyzercloudOverridefilterFreeStyleToTerraform(struct?: LogFortianalyzercloudOverridefilterFreeStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    filter: cdktf.stringToTerraform(struct!.filter),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function logFortianalyzercloudOverridefilterFreeStyleToHclTerraform(struct?: LogFortianalyzercloudOverridefilterFreeStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogFortianalyzercloudOverridefilterFreeStyleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogFortianalyzercloudOverridefilterFreeStyle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogFortianalyzercloudOverridefilterFreeStyle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._filter = undefined;
      this._filterType = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._filter = value.filter;
      this._filterType = value.filterType;
      this._id = value.id;
    }
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class LogFortianalyzercloudOverridefilterFreeStyleList extends cdktf.ComplexList {
  public internalValue? : LogFortianalyzercloudOverridefilterFreeStyle[] | cdktf.IResolvable

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
  public get(index: number): LogFortianalyzercloudOverridefilterFreeStyleOutputReference {
    return new LogFortianalyzercloudOverridefilterFreeStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter fmgdevice_log_fortianalyzercloud_overridefilter}
*/
export class LogFortianalyzercloudOverridefilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_log_fortianalyzercloud_overridefilter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogFortianalyzercloudOverridefilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogFortianalyzercloudOverridefilter to import
  * @param importFromId The id of the existing LogFortianalyzercloudOverridefilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogFortianalyzercloudOverridefilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_log_fortianalyzercloud_overridefilter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzercloud_overridefilter fmgdevice_log_fortianalyzercloud_overridefilter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogFortianalyzercloudOverridefilterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogFortianalyzercloudOverridefilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_log_fortianalyzercloud_overridefilter',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anomaly = config.anomaly;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dlpArchive = config.dlpArchive;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._filter = config.filter;
    this._filterType = config.filterType;
    this._fortiSwitch = config.fortiSwitch;
    this._forwardTraffic = config.forwardTraffic;
    this._gtp = config.gtp;
    this._httpTransaction = config.httpTransaction;
    this._id = config.id;
    this._localTraffic = config.localTraffic;
    this._multicastTraffic = config.multicastTraffic;
    this._severity = config.severity;
    this._snifferTraffic = config.snifferTraffic;
    this._voip = config.voip;
    this._ztnaTraffic = config.ztnaTraffic;
    this._freeStyle.internalValue = config.freeStyle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anomaly - computed: false, optional: true, required: false
  private _anomaly?: string; 
  public get anomaly() {
    return this.getStringAttribute('anomaly');
  }
  public set anomaly(value: string) {
    this._anomaly = value;
  }
  public resetAnomaly() {
    this._anomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyInput() {
    return this._anomaly;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dlp_archive - computed: true, optional: true, required: false
  private _dlpArchive?: string; 
  public get dlpArchive() {
    return this.getStringAttribute('dlp_archive');
  }
  public set dlpArchive(value: string) {
    this._dlpArchive = value;
  }
  public resetDlpArchive() {
    this._dlpArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpArchiveInput() {
    return this._dlpArchive;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // forti_switch - computed: true, optional: true, required: false
  private _fortiSwitch?: string; 
  public get fortiSwitch() {
    return this.getStringAttribute('forti_switch');
  }
  public set fortiSwitch(value: string) {
    this._fortiSwitch = value;
  }
  public resetFortiSwitch() {
    this._fortiSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiSwitchInput() {
    return this._fortiSwitch;
  }

  // forward_traffic - computed: true, optional: true, required: false
  private _forwardTraffic?: string; 
  public get forwardTraffic() {
    return this.getStringAttribute('forward_traffic');
  }
  public set forwardTraffic(value: string) {
    this._forwardTraffic = value;
  }
  public resetForwardTraffic() {
    this._forwardTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTrafficInput() {
    return this._forwardTraffic;
  }

  // gtp - computed: true, optional: true, required: false
  private _gtp?: string; 
  public get gtp() {
    return this.getStringAttribute('gtp');
  }
  public set gtp(value: string) {
    this._gtp = value;
  }
  public resetGtp() {
    this._gtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
  }

  // http_transaction - computed: true, optional: true, required: false
  private _httpTransaction?: string; 
  public get httpTransaction() {
    return this.getStringAttribute('http_transaction');
  }
  public set httpTransaction(value: string) {
    this._httpTransaction = value;
  }
  public resetHttpTransaction() {
    this._httpTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTransactionInput() {
    return this._httpTransaction;
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

  // local_traffic - computed: true, optional: true, required: false
  private _localTraffic?: string; 
  public get localTraffic() {
    return this.getStringAttribute('local_traffic');
  }
  public set localTraffic(value: string) {
    this._localTraffic = value;
  }
  public resetLocalTraffic() {
    this._localTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTrafficInput() {
    return this._localTraffic;
  }

  // multicast_traffic - computed: true, optional: true, required: false
  private _multicastTraffic?: string; 
  public get multicastTraffic() {
    return this.getStringAttribute('multicast_traffic');
  }
  public set multicastTraffic(value: string) {
    this._multicastTraffic = value;
  }
  public resetMulticastTraffic() {
    this._multicastTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastTrafficInput() {
    return this._multicastTraffic;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // sniffer_traffic - computed: true, optional: true, required: false
  private _snifferTraffic?: string; 
  public get snifferTraffic() {
    return this.getStringAttribute('sniffer_traffic');
  }
  public set snifferTraffic(value: string) {
    this._snifferTraffic = value;
  }
  public resetSnifferTraffic() {
    this._snifferTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snifferTrafficInput() {
    return this._snifferTraffic;
  }

  // voip - computed: true, optional: true, required: false
  private _voip?: string; 
  public get voip() {
    return this.getStringAttribute('voip');
  }
  public set voip(value: string) {
    this._voip = value;
  }
  public resetVoip() {
    this._voip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voipInput() {
    return this._voip;
  }

  // ztna_traffic - computed: true, optional: true, required: false
  private _ztnaTraffic?: string; 
  public get ztnaTraffic() {
    return this.getStringAttribute('ztna_traffic');
  }
  public set ztnaTraffic(value: string) {
    this._ztnaTraffic = value;
  }
  public resetZtnaTraffic() {
    this._ztnaTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaTrafficInput() {
    return this._ztnaTraffic;
  }

  // free_style - computed: false, optional: true, required: false
  private _freeStyle = new LogFortianalyzercloudOverridefilterFreeStyleList(this, "free_style", false);
  public get freeStyle() {
    return this._freeStyle;
  }
  public putFreeStyle(value: LogFortianalyzercloudOverridefilterFreeStyle[] | cdktf.IResolvable) {
    this._freeStyle.internalValue = value;
  }
  public resetFreeStyle() {
    this._freeStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeStyleInput() {
    return this._freeStyle.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anomaly: cdktf.stringToTerraform(this._anomaly),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dlp_archive: cdktf.stringToTerraform(this._dlpArchive),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      filter: cdktf.stringToTerraform(this._filter),
      filter_type: cdktf.stringToTerraform(this._filterType),
      forti_switch: cdktf.stringToTerraform(this._fortiSwitch),
      forward_traffic: cdktf.stringToTerraform(this._forwardTraffic),
      gtp: cdktf.stringToTerraform(this._gtp),
      http_transaction: cdktf.stringToTerraform(this._httpTransaction),
      id: cdktf.stringToTerraform(this._id),
      local_traffic: cdktf.stringToTerraform(this._localTraffic),
      multicast_traffic: cdktf.stringToTerraform(this._multicastTraffic),
      severity: cdktf.stringToTerraform(this._severity),
      sniffer_traffic: cdktf.stringToTerraform(this._snifferTraffic),
      voip: cdktf.stringToTerraform(this._voip),
      ztna_traffic: cdktf.stringToTerraform(this._ztnaTraffic),
      free_style: cdktf.listMapper(logFortianalyzercloudOverridefilterFreeStyleToTerraform, true)(this._freeStyle.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anomaly: {
        value: cdktf.stringToHclTerraform(this._anomaly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_archive: {
        value: cdktf.stringToHclTerraform(this._dlpArchive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_type: {
        value: cdktf.stringToHclTerraform(this._filterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forti_switch: {
        value: cdktf.stringToHclTerraform(this._fortiSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_traffic: {
        value: cdktf.stringToHclTerraform(this._forwardTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtp: {
        value: cdktf.stringToHclTerraform(this._gtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_transaction: {
        value: cdktf.stringToHclTerraform(this._httpTransaction),
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
      local_traffic: {
        value: cdktf.stringToHclTerraform(this._localTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_traffic: {
        value: cdktf.stringToHclTerraform(this._multicastTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sniffer_traffic: {
        value: cdktf.stringToHclTerraform(this._snifferTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voip: {
        value: cdktf.stringToHclTerraform(this._voip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztna_traffic: {
        value: cdktf.stringToHclTerraform(this._ztnaTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      free_style: {
        value: cdktf.listMapperHcl(logFortianalyzercloudOverridefilterFreeStyleToHclTerraform, true)(this._freeStyle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogFortianalyzercloudOverridefilterFreeStyleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
