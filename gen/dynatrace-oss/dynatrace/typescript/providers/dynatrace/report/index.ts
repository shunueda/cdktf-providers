// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the associated dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/report#dashboard_id Report#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * The email notifications for the dashboard report are enabled (true) or disabled (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/report#email_notifications Report#email_notifications}
  */
  readonly emailNotifications?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/report#id Report#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/report#type Report#type}
  */
  readonly type: string;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/report#subscriptions Report#subscriptions}
  */
  readonly subscriptions?: ReportSubscriptions;
}
export interface ReportSubscriptions {
  /**
  * A list of monthly subscribers.
  *  Monthly subscribers receive the report on the first Monday of the month at midnight.
  *  You can specify email addresses or Dynatrace user IDs here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/report#month Report#month}
  */
  readonly month?: string[];
  /**
  * A list of weekly subscribers.
  *  Weekly subscribers receive the report every Monday at midnight.
  *  You can specify email addresses or Dynatrace user IDs here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/report#week Report#week}
  */
  readonly week?: string[];
}

export function reportSubscriptionsToTerraform(struct?: ReportSubscriptionsOutputReference | ReportSubscriptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    month: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.month),
    week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.week),
  }
}


export function reportSubscriptionsToHclTerraform(struct?: ReportSubscriptionsOutputReference | ReportSubscriptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    month: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.month),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.week),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportSubscriptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportSubscriptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._week !== undefined) {
      hasAnyValues = true;
      internalValueResult.week = this._week;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportSubscriptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._month = undefined;
      this._week = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._month = value.month;
      this._week = value.week;
    }
  }

  // month - computed: false, optional: true, required: false
  private _month?: string[]; 
  public get month() {
    return cdktf.Fn.tolist(this.getListAttribute('month'));
  }
  public set month(value: string[]) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // week - computed: false, optional: true, required: false
  private _week?: string[]; 
  public get week() {
    return cdktf.Fn.tolist(this.getListAttribute('week'));
  }
  public set week(value: string[]) {
    this._week = value;
  }
  public resetWeek() {
    this._week = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekInput() {
    return this._week;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/report dynatrace_report}
*/
export class Report extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Report resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Report to import
  * @param importFromId The id of the existing Report that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Report to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/report dynatrace_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportConfig
  */
  public constructor(scope: Construct, id: string, config: ReportConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_report',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dashboardId = config.dashboardId;
    this._emailNotifications = config.emailNotifications;
    this._id = config.id;
    this._type = config.type;
    this._subscriptions.internalValue = config.subscriptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // email_notifications - computed: false, optional: true, required: false
  private _emailNotifications?: boolean | cdktf.IResolvable; 
  public get emailNotifications() {
    return this.getBooleanAttribute('email_notifications');
  }
  public set emailNotifications(value: boolean | cdktf.IResolvable) {
    this._emailNotifications = value;
  }
  public resetEmailNotifications() {
    this._emailNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNotificationsInput() {
    return this._emailNotifications;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new ReportSubscriptionsOutputReference(this, "subscriptions");
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: ReportSubscriptions) {
    this._subscriptions.internalValue = value;
  }
  public resetSubscriptions() {
    this._subscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_id: cdktf.stringToTerraform(this._dashboardId),
      email_notifications: cdktf.booleanToTerraform(this._emailNotifications),
      id: cdktf.stringToTerraform(this._id),
      type: cdktf.stringToTerraform(this._type),
      subscriptions: reportSubscriptionsToTerraform(this._subscriptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_id: {
        value: cdktf.stringToHclTerraform(this._dashboardId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_notifications: {
        value: cdktf.booleanToHclTerraform(this._emailNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriptions: {
        value: reportSubscriptionsToHclTerraform(this._subscriptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportSubscriptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
