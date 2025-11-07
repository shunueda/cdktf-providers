// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_template_name_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_template_name_stats#id DataThunderVisibilityReportingTemplateNotificationTemplateNameStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Notification template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_template_name_stats#name DataThunderVisibilityReportingTemplateNotificationTemplateNameStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_template_name_stats#stats DataThunderVisibilityReportingTemplateNotificationTemplateNameStats#stats}
  */
  readonly stats?: DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStats;
}
export interface DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStats {
  /**
  * Response failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_template_name_stats#response_fail DataThunderVisibilityReportingTemplateNotificationTemplateNameStats#response_fail}
  */
  readonly responseFail?: number;
  /**
  * Send failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_template_name_stats#send_fail DataThunderVisibilityReportingTemplateNotificationTemplateNameStats#send_fail}
  */
  readonly sendFail?: number;
  /**
  * Sent successful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_template_name_stats#sent_successful DataThunderVisibilityReportingTemplateNotificationTemplateNameStats#sent_successful}
  */
  readonly sentSuccessful?: number;
}

export function dataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStatsToTerraform(struct?: DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStatsOutputReference | DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_fail: cdktf.numberToTerraform(struct!.responseFail),
    send_fail: cdktf.numberToTerraform(struct!.sendFail),
    sent_successful: cdktf.numberToTerraform(struct!.sentSuccessful),
  }
}


export function dataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStatsToHclTerraform(struct?: DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStatsOutputReference | DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_fail: {
      value: cdktf.numberToHclTerraform(struct!.responseFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_fail: {
      value: cdktf.numberToHclTerraform(struct!.sendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sent_successful: {
      value: cdktf.numberToHclTerraform(struct!.sentSuccessful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFail = this._responseFail;
    }
    if (this._sendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendFail = this._sendFail;
    }
    if (this._sentSuccessful !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentSuccessful = this._sentSuccessful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseFail = undefined;
      this._sendFail = undefined;
      this._sentSuccessful = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseFail = value.responseFail;
      this._sendFail = value.sendFail;
      this._sentSuccessful = value.sentSuccessful;
    }
  }

  // response_fail - computed: false, optional: true, required: false
  private _responseFail?: number; 
  public get responseFail() {
    return this.getNumberAttribute('response_fail');
  }
  public set responseFail(value: number) {
    this._responseFail = value;
  }
  public resetResponseFail() {
    this._responseFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFailInput() {
    return this._responseFail;
  }

  // send_fail - computed: false, optional: true, required: false
  private _sendFail?: number; 
  public get sendFail() {
    return this.getNumberAttribute('send_fail');
  }
  public set sendFail(value: number) {
    this._sendFail = value;
  }
  public resetSendFail() {
    this._sendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendFailInput() {
    return this._sendFail;
  }

  // sent_successful - computed: false, optional: true, required: false
  private _sentSuccessful?: number; 
  public get sentSuccessful() {
    return this.getNumberAttribute('sent_successful');
  }
  public set sentSuccessful(value: number) {
    this._sentSuccessful = value;
  }
  public resetSentSuccessful() {
    this._sentSuccessful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentSuccessfulInput() {
    return this._sentSuccessful;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_template_name_stats thunder_visibility_reporting_template_notification_template_name_stats}
*/
export class DataThunderVisibilityReportingTemplateNotificationTemplateNameStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_reporting_template_notification_template_name_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityReportingTemplateNotificationTemplateNameStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityReportingTemplateNotificationTemplateNameStats to import
  * @param importFromId The id of the existing DataThunderVisibilityReportingTemplateNotificationTemplateNameStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_template_name_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityReportingTemplateNotificationTemplateNameStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_reporting_template_notification_template_name_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_template_name_stats thunder_visibility_reporting_template_notification_template_name_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_reporting_template_notification_template_name_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._name = config.name;
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityReportingTemplateNotificationTemplateNameStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
