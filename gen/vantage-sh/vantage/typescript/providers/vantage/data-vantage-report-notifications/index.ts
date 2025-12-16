// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/data-sources/report_notifications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVantageReportNotificationsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataVantageReportNotificationsReportNotifications {
}

export function dataVantageReportNotificationsReportNotificationsToTerraform(struct?: DataVantageReportNotificationsReportNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageReportNotificationsReportNotificationsToHclTerraform(struct?: DataVantageReportNotificationsReportNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageReportNotificationsReportNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageReportNotificationsReportNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageReportNotificationsReportNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // change - computed: true, optional: false, required: false
  public get change() {
    return this.getStringAttribute('change');
  }

  // cost_report_token - computed: true, optional: false, required: false
  public get costReportToken() {
    return this.getStringAttribute('cost_report_token');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // recipient_channels - computed: true, optional: false, required: false
  public get recipientChannels() {
    return this.getListAttribute('recipient_channels');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // user_tokens - computed: true, optional: false, required: false
  public get userTokens() {
    return this.getListAttribute('user_tokens');
  }
}

export class DataVantageReportNotificationsReportNotificationsList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageReportNotificationsReportNotificationsOutputReference {
    return new DataVantageReportNotificationsReportNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/data-sources/report_notifications vantage_report_notifications}
*/
export class DataVantageReportNotifications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_report_notifications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVantageReportNotifications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVantageReportNotifications to import
  * @param importFromId The id of the existing DataVantageReportNotifications that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/data-sources/report_notifications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVantageReportNotifications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_report_notifications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/data-sources/report_notifications vantage_report_notifications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVantageReportNotificationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVantageReportNotificationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vantage_report_notifications',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.70',
        providerVersionConstraint: '0.1.70'
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

  // report_notifications - computed: true, optional: false, required: false
  private _reportNotifications = new DataVantageReportNotificationsReportNotificationsList(this, "report_notifications", false);
  public get reportNotifications() {
    return this._reportNotifications;
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
