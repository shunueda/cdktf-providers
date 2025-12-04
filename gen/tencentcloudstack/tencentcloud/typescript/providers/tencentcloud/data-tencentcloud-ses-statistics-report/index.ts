// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/ses_statistics_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudSesStatisticsReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sender domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/ses_statistics_report#domain DataTencentcloudSesStatisticsReport#domain}
  */
  readonly domain?: string;
  /**
  * End date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/ses_statistics_report#end_date DataTencentcloudSesStatisticsReport#end_date}
  */
  readonly endDate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/ses_statistics_report#id DataTencentcloudSesStatisticsReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Recipient address type, for example, gmail.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/ses_statistics_report#receiving_mailbox_type DataTencentcloudSesStatisticsReport#receiving_mailbox_type}
  */
  readonly receivingMailboxType?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/ses_statistics_report#result_output_file DataTencentcloudSesStatisticsReport#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Start date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/ses_statistics_report#start_date DataTencentcloudSesStatisticsReport#start_date}
  */
  readonly startDate: string;
}
export interface DataTencentcloudSesStatisticsReportDailyVolumes {
}

export function dataTencentcloudSesStatisticsReportDailyVolumesToTerraform(struct?: DataTencentcloudSesStatisticsReportDailyVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSesStatisticsReportDailyVolumesToHclTerraform(struct?: DataTencentcloudSesStatisticsReportDailyVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSesStatisticsReportDailyVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSesStatisticsReportDailyVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSesStatisticsReportDailyVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accepted_count - computed: true, optional: false, required: false
  public get acceptedCount() {
    return this.getNumberAttribute('accepted_count');
  }

  // bounce_count - computed: true, optional: false, required: false
  public get bounceCount() {
    return this.getNumberAttribute('bounce_count');
  }

  // clicked_count - computed: true, optional: false, required: false
  public get clickedCount() {
    return this.getNumberAttribute('clicked_count');
  }

  // delivered_count - computed: true, optional: false, required: false
  public get deliveredCount() {
    return this.getNumberAttribute('delivered_count');
  }

  // opened_count - computed: true, optional: false, required: false
  public get openedCount() {
    return this.getNumberAttribute('opened_count');
  }

  // request_count - computed: true, optional: false, required: false
  public get requestCount() {
    return this.getNumberAttribute('request_count');
  }

  // send_date - computed: true, optional: false, required: false
  public get sendDate() {
    return this.getStringAttribute('send_date');
  }

  // unsubscribe_count - computed: true, optional: false, required: false
  public get unsubscribeCount() {
    return this.getNumberAttribute('unsubscribe_count');
  }
}

export class DataTencentcloudSesStatisticsReportDailyVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSesStatisticsReportDailyVolumesOutputReference {
    return new DataTencentcloudSesStatisticsReportDailyVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSesStatisticsReportOverallVolume {
}

export function dataTencentcloudSesStatisticsReportOverallVolumeToTerraform(struct?: DataTencentcloudSesStatisticsReportOverallVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSesStatisticsReportOverallVolumeToHclTerraform(struct?: DataTencentcloudSesStatisticsReportOverallVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSesStatisticsReportOverallVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSesStatisticsReportOverallVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSesStatisticsReportOverallVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accepted_count - computed: true, optional: false, required: false
  public get acceptedCount() {
    return this.getNumberAttribute('accepted_count');
  }

  // bounce_count - computed: true, optional: false, required: false
  public get bounceCount() {
    return this.getNumberAttribute('bounce_count');
  }

  // clicked_count - computed: true, optional: false, required: false
  public get clickedCount() {
    return this.getNumberAttribute('clicked_count');
  }

  // delivered_count - computed: true, optional: false, required: false
  public get deliveredCount() {
    return this.getNumberAttribute('delivered_count');
  }

  // opened_count - computed: true, optional: false, required: false
  public get openedCount() {
    return this.getNumberAttribute('opened_count');
  }

  // request_count - computed: true, optional: false, required: false
  public get requestCount() {
    return this.getNumberAttribute('request_count');
  }

  // send_date - computed: true, optional: false, required: false
  public get sendDate() {
    return this.getStringAttribute('send_date');
  }

  // unsubscribe_count - computed: true, optional: false, required: false
  public get unsubscribeCount() {
    return this.getNumberAttribute('unsubscribe_count');
  }
}

export class DataTencentcloudSesStatisticsReportOverallVolumeList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSesStatisticsReportOverallVolumeOutputReference {
    return new DataTencentcloudSesStatisticsReportOverallVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/ses_statistics_report tencentcloud_ses_statistics_report}
*/
export class DataTencentcloudSesStatisticsReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ses_statistics_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudSesStatisticsReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudSesStatisticsReport to import
  * @param importFromId The id of the existing DataTencentcloudSesStatisticsReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/ses_statistics_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudSesStatisticsReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ses_statistics_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/data-sources/ses_statistics_report tencentcloud_ses_statistics_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudSesStatisticsReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudSesStatisticsReportConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ses_statistics_report',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._endDate = config.endDate;
    this._id = config.id;
    this._receivingMailboxType = config.receivingMailboxType;
    this._resultOutputFile = config.resultOutputFile;
    this._startDate = config.startDate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daily_volumes - computed: true, optional: false, required: false
  private _dailyVolumes = new DataTencentcloudSesStatisticsReportDailyVolumesList(this, "daily_volumes", false);
  public get dailyVolumes() {
    return this._dailyVolumes;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // end_date - computed: false, optional: false, required: true
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // overall_volume - computed: true, optional: false, required: false
  private _overallVolume = new DataTencentcloudSesStatisticsReportOverallVolumeList(this, "overall_volume", false);
  public get overallVolume() {
    return this._overallVolume;
  }

  // receiving_mailbox_type - computed: false, optional: true, required: false
  private _receivingMailboxType?: string; 
  public get receivingMailboxType() {
    return this.getStringAttribute('receiving_mailbox_type');
  }
  public set receivingMailboxType(value: string) {
    this._receivingMailboxType = value;
  }
  public resetReceivingMailboxType() {
    this._receivingMailboxType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivingMailboxTypeInput() {
    return this._receivingMailboxType;
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

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      end_date: cdktf.stringToTerraform(this._endDate),
      id: cdktf.stringToTerraform(this._id),
      receiving_mailbox_type: cdktf.stringToTerraform(this._receivingMailboxType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_date: cdktf.stringToTerraform(this._startDate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
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
      receiving_mailbox_type: {
        value: cdktf.stringToHclTerraform(this._receivingMailboxType),
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
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
