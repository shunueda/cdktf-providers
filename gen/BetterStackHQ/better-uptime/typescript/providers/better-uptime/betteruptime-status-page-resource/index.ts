// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimeStatusPageResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A detailed text displayed as a help icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource#explanation BetteruptimeStatusPageResource#explanation}
  */
  readonly explanation?: string;
  /**
  * Do you want to display detailed historical status for this item? This field is deprecated, use widget_type instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource#history BetteruptimeStatusPageResource#history}
  */
  readonly history?: boolean | cdktf.IResolvable;
  /**
  * The position of this resource on your status page, indexed from zero. If you don't specify a position, we add the resource to the end of the status page. When you specify a position of an existing resource, we add the resource to this position and shift resources below to accommodate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource#position BetteruptimeStatusPageResource#position}
  */
  readonly position?: number;
  /**
  * The resource name displayed publicly on your status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource#public_name BetteruptimeStatusPageResource#public_name}
  */
  readonly publicName: string;
  /**
  * The ID of the resource you are adding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource#resource_id BetteruptimeStatusPageResource#resource_id}
  */
  readonly resourceId: number;
  /**
  * The type of the resource you are adding. Available values: Monitor, MonitorGroup, Heartbeat, HeartbeatGroup, WebhookIntegration, EmailIntegration, IncomingWebhook, ResourceGroup, LogsChart, CatalogReference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource#resource_type BetteruptimeStatusPageResource#resource_type}
  */
  readonly resourceType: string;
  /**
  * The ID of the Status Page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource#status_page_id BetteruptimeStatusPageResource#status_page_id}
  */
  readonly statusPageId: string;
  /**
  * The ID of the Status Page Section. If you don't specify a status_page_section_id, we add the resource to the first section. If there are no sections in the status page yet, one will be automatically created for you.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource#status_page_section_id BetteruptimeStatusPageResource#status_page_section_id}
  */
  readonly statusPageSectionId?: number;
  /**
  * What widget to display for this resource. Expects one of three values: plain - only display status, history - display detailed historical status, response_times - add a response times chart (only for Monitor resource type). This takes preference over history when both parameters are present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource#widget_type BetteruptimeStatusPageResource#widget_type}
  */
  readonly widgetType?: string;
}
export interface BetteruptimeStatusPageResourceStatusHistory {
}

export function betteruptimeStatusPageResourceStatusHistoryToTerraform(struct?: BetteruptimeStatusPageResourceStatusHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function betteruptimeStatusPageResourceStatusHistoryToHclTerraform(struct?: BetteruptimeStatusPageResourceStatusHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BetteruptimeStatusPageResourceStatusHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimeStatusPageResourceStatusHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeStatusPageResourceStatusHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // downtime_duration - computed: true, optional: false, required: false
  public get downtimeDuration() {
    return this.getNumberAttribute('downtime_duration');
  }

  // maintenance_duration - computed: true, optional: false, required: false
  public get maintenanceDuration() {
    return this.getNumberAttribute('maintenance_duration');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class BetteruptimeStatusPageResourceStatusHistoryList extends cdktf.ComplexList {

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
  public get(index: number): BetteruptimeStatusPageResourceStatusHistoryOutputReference {
    return new BetteruptimeStatusPageResourceStatusHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource betteruptime_status_page_resource}
*/
export class BetteruptimeStatusPageResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_status_page_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimeStatusPageResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimeStatusPageResource to import
  * @param importFromId The id of the existing BetteruptimeStatusPageResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimeStatusPageResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_status_page_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page_resource betteruptime_status_page_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimeStatusPageResourceConfig
  */
  public constructor(scope: Construct, id: string, config: BetteruptimeStatusPageResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_status_page_resource',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4',
        providerVersionConstraint: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._explanation = config.explanation;
    this._history = config.history;
    this._position = config.position;
    this._publicName = config.publicName;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._statusPageId = config.statusPageId;
    this._statusPageSectionId = config.statusPageSectionId;
    this._widgetType = config.widgetType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability - computed: true, optional: false, required: false
  public get availability() {
    return this.getNumberAttribute('availability');
  }

  // explanation - computed: true, optional: true, required: false
  private _explanation?: string; 
  public get explanation() {
    return this.getStringAttribute('explanation');
  }
  public set explanation(value: string) {
    this._explanation = value;
  }
  public resetExplanation() {
    this._explanation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explanationInput() {
    return this._explanation;
  }

  // history - computed: true, optional: true, required: false
  private _history?: boolean | cdktf.IResolvable; 
  public get history() {
    return this.getBooleanAttribute('history');
  }
  public set history(value: boolean | cdktf.IResolvable) {
    this._history = value;
  }
  public resetHistory() {
    this._history = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // public_name - computed: false, optional: false, required: true
  private _publicName?: string; 
  public get publicName() {
    return this.getStringAttribute('public_name');
  }
  public set publicName(value: string) {
    this._publicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNameInput() {
    return this._publicName;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: number; 
  public get resourceId() {
    return this.getNumberAttribute('resource_id');
  }
  public set resourceId(value: number) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_history - computed: true, optional: false, required: false
  private _statusHistory = new BetteruptimeStatusPageResourceStatusHistoryList(this, "status_history", false);
  public get statusHistory() {
    return this._statusHistory;
  }

  // status_page_id - computed: false, optional: false, required: true
  private _statusPageId?: string; 
  public get statusPageId() {
    return this.getStringAttribute('status_page_id');
  }
  public set statusPageId(value: string) {
    this._statusPageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusPageIdInput() {
    return this._statusPageId;
  }

  // status_page_section_id - computed: true, optional: true, required: false
  private _statusPageSectionId?: number; 
  public get statusPageSectionId() {
    return this.getNumberAttribute('status_page_section_id');
  }
  public set statusPageSectionId(value: number) {
    this._statusPageSectionId = value;
  }
  public resetStatusPageSectionId() {
    this._statusPageSectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusPageSectionIdInput() {
    return this._statusPageSectionId;
  }

  // widget_type - computed: true, optional: true, required: false
  private _widgetType?: string; 
  public get widgetType() {
    return this.getStringAttribute('widget_type');
  }
  public set widgetType(value: string) {
    this._widgetType = value;
  }
  public resetWidgetType() {
    this._widgetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetTypeInput() {
    return this._widgetType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      explanation: cdktf.stringToTerraform(this._explanation),
      history: cdktf.booleanToTerraform(this._history),
      position: cdktf.numberToTerraform(this._position),
      public_name: cdktf.stringToTerraform(this._publicName),
      resource_id: cdktf.numberToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      status_page_id: cdktf.stringToTerraform(this._statusPageId),
      status_page_section_id: cdktf.numberToTerraform(this._statusPageSectionId),
      widget_type: cdktf.stringToTerraform(this._widgetType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      explanation: {
        value: cdktf.stringToHclTerraform(this._explanation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      history: {
        value: cdktf.booleanToHclTerraform(this._history),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_name: {
        value: cdktf.stringToHclTerraform(this._publicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.numberToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_page_id: {
        value: cdktf.stringToHclTerraform(this._statusPageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_page_section_id: {
        value: cdktf.numberToHclTerraform(this._statusPageSectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      widget_type: {
        value: cdktf.stringToHclTerraform(this._widgetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
