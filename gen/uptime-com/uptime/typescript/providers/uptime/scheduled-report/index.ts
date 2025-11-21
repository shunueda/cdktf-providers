// https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduledReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reports will be sent at this time (local time), value is hour of day: 0-23
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report#at_time ScheduledReport#at_time}
  */
  readonly atTime?: number;
  /**
  * Report file type, valid values are PDF(default) or XLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report#file_type ScheduledReport#file_type}
  */
  readonly fileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report#is_enabled ScheduledReport#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report#name ScheduledReport#name}
  */
  readonly name: string;
  /**
  * Weekly reports will be sent on this day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report#on_weekday ScheduledReport#on_weekday}
  */
  readonly onWeekday?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report#recipient_emails ScheduledReport#recipient_emails}
  */
  readonly recipientEmails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report#recipient_users ScheduledReport#recipient_users}
  */
  readonly recipientUsers?: string[];
  /**
  * How often to deliver this report. Valid values are DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report#recurrence ScheduledReport#recurrence}
  */
  readonly recurrence?: string;
  /**
  * Select an SLA report to send on this schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report#sla_report ScheduledReport#sla_report}
  */
  readonly slaReport: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report uptime_scheduled_report}
*/
export class ScheduledReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_scheduled_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScheduledReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScheduledReport to import
  * @param importFromId The id of the existing ScheduledReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScheduledReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_scheduled_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/resources/scheduled_report uptime_scheduled_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduledReportConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduledReportConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_scheduled_report',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.17.1',
        providerVersionConstraint: '2.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._atTime = config.atTime;
    this._fileType = config.fileType;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._onWeekday = config.onWeekday;
    this._recipientEmails = config.recipientEmails;
    this._recipientUsers = config.recipientUsers;
    this._recurrence = config.recurrence;
    this._slaReport = config.slaReport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // at_time - computed: true, optional: true, required: false
  private _atTime?: number; 
  public get atTime() {
    return this.getNumberAttribute('at_time');
  }
  public set atTime(value: number) {
    this._atTime = value;
  }
  public resetAtTime() {
    this._atTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atTimeInput() {
    return this._atTime;
  }

  // file_type - computed: true, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_weekday - computed: true, optional: true, required: false
  private _onWeekday?: number; 
  public get onWeekday() {
    return this.getNumberAttribute('on_weekday');
  }
  public set onWeekday(value: number) {
    this._onWeekday = value;
  }
  public resetOnWeekday() {
    this._onWeekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onWeekdayInput() {
    return this._onWeekday;
  }

  // recipient_emails - computed: true, optional: true, required: false
  private _recipientEmails?: string[]; 
  public get recipientEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('recipient_emails'));
  }
  public set recipientEmails(value: string[]) {
    this._recipientEmails = value;
  }
  public resetRecipientEmails() {
    this._recipientEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientEmailsInput() {
    return this._recipientEmails;
  }

  // recipient_users - computed: true, optional: true, required: false
  private _recipientUsers?: string[]; 
  public get recipientUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('recipient_users'));
  }
  public set recipientUsers(value: string[]) {
    this._recipientUsers = value;
  }
  public resetRecipientUsers() {
    this._recipientUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientUsersInput() {
    return this._recipientUsers;
  }

  // recurrence - computed: true, optional: true, required: false
  private _recurrence?: string; 
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  public resetRecurrence() {
    this._recurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // sla_report - computed: false, optional: false, required: true
  private _slaReport?: string; 
  public get slaReport() {
    return this.getStringAttribute('sla_report');
  }
  public set slaReport(value: string) {
    this._slaReport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slaReportInput() {
    return this._slaReport;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      at_time: cdktf.numberToTerraform(this._atTime),
      file_type: cdktf.stringToTerraform(this._fileType),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      on_weekday: cdktf.numberToTerraform(this._onWeekday),
      recipient_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipientEmails),
      recipient_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipientUsers),
      recurrence: cdktf.stringToTerraform(this._recurrence),
      sla_report: cdktf.stringToTerraform(this._slaReport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      at_time: {
        value: cdktf.numberToHclTerraform(this._atTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_type: {
        value: cdktf.stringToHclTerraform(this._fileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_weekday: {
        value: cdktf.numberToHclTerraform(this._onWeekday),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recipient_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipientEmails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      recipient_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipientUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      recurrence: {
        value: cdktf.stringToHclTerraform(this._recurrence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla_report: {
        value: cdktf.stringToHclTerraform(this._slaReport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
