// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CesEventReportV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#event_name CesEventReportV1#event_name}
  */
  readonly eventName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#event_source CesEventReportV1#event_source}
  */
  readonly eventSource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#id CesEventReportV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#time CesEventReportV1#time}
  */
  readonly time: number;
  /**
  * detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#detail CesEventReportV1#detail}
  */
  readonly detail: CesEventReportV1Detail;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#timeouts CesEventReportV1#timeouts}
  */
  readonly timeouts?: CesEventReportV1Timeouts;
}
export interface CesEventReportV1Detail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#content CesEventReportV1#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#event_level CesEventReportV1#event_level}
  */
  readonly eventLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#event_state CesEventReportV1#event_state}
  */
  readonly eventState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#event_type CesEventReportV1#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#event_user CesEventReportV1#event_user}
  */
  readonly eventUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#group_id CesEventReportV1#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#resource_id CesEventReportV1#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#resource_name CesEventReportV1#resource_name}
  */
  readonly resourceName?: string;
}

export function cesEventReportV1DetailToTerraform(struct?: CesEventReportV1DetailOutputReference | CesEventReportV1Detail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    event_level: cdktf.stringToTerraform(struct!.eventLevel),
    event_state: cdktf.stringToTerraform(struct!.eventState),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    event_user: cdktf.stringToTerraform(struct!.eventUser),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
  }
}


export function cesEventReportV1DetailToHclTerraform(struct?: CesEventReportV1DetailOutputReference | CesEventReportV1Detail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_level: {
      value: cdktf.stringToHclTerraform(struct!.eventLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_state: {
      value: cdktf.stringToHclTerraform(struct!.eventState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_user: {
      value: cdktf.stringToHclTerraform(struct!.eventUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesEventReportV1DetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesEventReportV1Detail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._eventLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventLevel = this._eventLevel;
    }
    if (this._eventState !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventState = this._eventState;
    }
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._eventUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventUser = this._eventUser;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesEventReportV1Detail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._eventLevel = undefined;
      this._eventState = undefined;
      this._eventType = undefined;
      this._eventUser = undefined;
      this._groupId = undefined;
      this._resourceId = undefined;
      this._resourceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._eventLevel = value.eventLevel;
      this._eventState = value.eventState;
      this._eventType = value.eventType;
      this._eventUser = value.eventUser;
      this._groupId = value.groupId;
      this._resourceId = value.resourceId;
      this._resourceName = value.resourceName;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // event_level - computed: false, optional: true, required: false
  private _eventLevel?: string; 
  public get eventLevel() {
    return this.getStringAttribute('event_level');
  }
  public set eventLevel(value: string) {
    this._eventLevel = value;
  }
  public resetEventLevel() {
    this._eventLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLevelInput() {
    return this._eventLevel;
  }

  // event_state - computed: false, optional: true, required: false
  private _eventState?: string; 
  public get eventState() {
    return this.getStringAttribute('event_state');
  }
  public set eventState(value: string) {
    this._eventState = value;
  }
  public resetEventState() {
    this._eventState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStateInput() {
    return this._eventState;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // event_user - computed: false, optional: true, required: false
  private _eventUser?: string; 
  public get eventUser() {
    return this.getStringAttribute('event_user');
  }
  public set eventUser(value: string) {
    this._eventUser = value;
  }
  public resetEventUser() {
    this._eventUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventUserInput() {
    return this._eventUser;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }
}
export interface CesEventReportV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#create CesEventReportV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#delete CesEventReportV1#delete}
  */
  readonly delete?: string;
}

export function cesEventReportV1TimeoutsToTerraform(struct?: CesEventReportV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function cesEventReportV1TimeoutsToHclTerraform(struct?: CesEventReportV1Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesEventReportV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CesEventReportV1Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesEventReportV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1 opentelekomcloud_ces_event_report_v1}
*/
export class CesEventReportV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_ces_event_report_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CesEventReportV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CesEventReportV1 to import
  * @param importFromId The id of the existing CesEventReportV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CesEventReportV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_ces_event_report_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/ces_event_report_v1 opentelekomcloud_ces_event_report_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CesEventReportV1Config
  */
  public constructor(scope: Construct, id: string, config: CesEventReportV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_ces_event_report_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eventName = config.eventName;
    this._eventSource = config.eventSource;
    this._id = config.id;
    this._time = config.time;
    this._detail.internalValue = config.detail;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_id - computed: true, optional: false, required: false
  public get eventId() {
    return this.getStringAttribute('event_id');
  }

  // event_name - computed: false, optional: false, required: true
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // event_source - computed: false, optional: false, required: true
  private _eventSource?: string; 
  public get eventSource() {
    return this.getStringAttribute('event_source');
  }
  public set eventSource(value: string) {
    this._eventSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceInput() {
    return this._eventSource;
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

  // time - computed: false, optional: false, required: true
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // detail - computed: false, optional: false, required: true
  private _detail = new CesEventReportV1DetailOutputReference(this, "detail");
  public get detail() {
    return this._detail;
  }
  public putDetail(value: CesEventReportV1Detail) {
    this._detail.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CesEventReportV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CesEventReportV1Timeouts) {
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
      event_name: cdktf.stringToTerraform(this._eventName),
      event_source: cdktf.stringToTerraform(this._eventSource),
      id: cdktf.stringToTerraform(this._id),
      time: cdktf.numberToTerraform(this._time),
      detail: cesEventReportV1DetailToTerraform(this._detail.internalValue),
      timeouts: cesEventReportV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_name: {
        value: cdktf.stringToHclTerraform(this._eventName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_source: {
        value: cdktf.stringToHclTerraform(this._eventSource),
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
      time: {
        value: cdktf.numberToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detail: {
        value: cesEventReportV1DetailToHclTerraform(this._detail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesEventReportV1DetailList",
      },
      timeouts: {
        value: cesEventReportV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CesEventReportV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
