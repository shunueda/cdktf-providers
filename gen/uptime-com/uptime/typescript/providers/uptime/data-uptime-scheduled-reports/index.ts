// https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/scheduled_reports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUptimeScheduledReportsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataUptimeScheduledReportsScheduledReports {
}

export function dataUptimeScheduledReportsScheduledReportsToTerraform(struct?: DataUptimeScheduledReportsScheduledReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUptimeScheduledReportsScheduledReportsToHclTerraform(struct?: DataUptimeScheduledReportsScheduledReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUptimeScheduledReportsScheduledReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUptimeScheduledReportsScheduledReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUptimeScheduledReportsScheduledReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at_time - computed: true, optional: false, required: false
  public get atTime() {
    return this.getNumberAttribute('at_time');
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // on_weekday - computed: true, optional: false, required: false
  public get onWeekday() {
    return this.getNumberAttribute('on_weekday');
  }

  // recipient_emails - computed: true, optional: false, required: false
  public get recipientEmails() {
    return this.getListAttribute('recipient_emails');
  }

  // recipient_users - computed: true, optional: false, required: false
  public get recipientUsers() {
    return this.getListAttribute('recipient_users');
  }

  // recurrence - computed: true, optional: false, required: false
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }

  // sla_report - computed: true, optional: false, required: false
  public get slaReport() {
    return this.getStringAttribute('sla_report');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataUptimeScheduledReportsScheduledReportsList extends cdktf.ComplexList {

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
  public get(index: number): DataUptimeScheduledReportsScheduledReportsOutputReference {
    return new DataUptimeScheduledReportsScheduledReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/scheduled_reports uptime_scheduled_reports}
*/
export class DataUptimeScheduledReports extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_scheduled_reports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUptimeScheduledReports resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUptimeScheduledReports to import
  * @param importFromId The id of the existing DataUptimeScheduledReports that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/scheduled_reports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUptimeScheduledReports to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_scheduled_reports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/scheduled_reports uptime_scheduled_reports} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUptimeScheduledReportsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUptimeScheduledReportsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'uptime_scheduled_reports',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.18.1',
        providerVersionConstraint: '2.18.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // scheduled_reports - computed: true, optional: false, required: false
  private _scheduledReports = new DataUptimeScheduledReportsScheduledReportsList(this, "scheduled_reports", false);
  public get scheduledReports() {
    return this._scheduledReports;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
