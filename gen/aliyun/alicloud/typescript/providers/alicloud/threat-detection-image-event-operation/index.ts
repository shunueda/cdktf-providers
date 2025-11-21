// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionImageEventOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#conditions ThreatDetectionImageEventOperation#conditions}
  */
  readonly conditions: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#event_key ThreatDetectionImageEventOperation#event_key}
  */
  readonly eventKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#event_name ThreatDetectionImageEventOperation#event_name}
  */
  readonly eventName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#event_type ThreatDetectionImageEventOperation#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#id ThreatDetectionImageEventOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#note ThreatDetectionImageEventOperation#note}
  */
  readonly note?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#operation_code ThreatDetectionImageEventOperation#operation_code}
  */
  readonly operationCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#scenarios ThreatDetectionImageEventOperation#scenarios}
  */
  readonly scenarios?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#source ThreatDetectionImageEventOperation#source}
  */
  readonly source?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#timeouts ThreatDetectionImageEventOperation#timeouts}
  */
  readonly timeouts?: ThreatDetectionImageEventOperationTimeouts;
}
export interface ThreatDetectionImageEventOperationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#create ThreatDetectionImageEventOperation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#delete ThreatDetectionImageEventOperation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#update ThreatDetectionImageEventOperation#update}
  */
  readonly update?: string;
}

export function threatDetectionImageEventOperationTimeoutsToTerraform(struct?: ThreatDetectionImageEventOperationTimeouts | cdktf.IResolvable): any {
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


export function threatDetectionImageEventOperationTimeoutsToHclTerraform(struct?: ThreatDetectionImageEventOperationTimeouts | cdktf.IResolvable): any {
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

export class ThreatDetectionImageEventOperationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionImageEventOperationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThreatDetectionImageEventOperationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation alicloud_threat_detection_image_event_operation}
*/
export class ThreatDetectionImageEventOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_image_event_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionImageEventOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionImageEventOperation to import
  * @param importFromId The id of the existing ThreatDetectionImageEventOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionImageEventOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_image_event_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_image_event_operation alicloud_threat_detection_image_event_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionImageEventOperationConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionImageEventOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_image_event_operation',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conditions = config.conditions;
    this._eventKey = config.eventKey;
    this._eventName = config.eventName;
    this._eventType = config.eventType;
    this._id = config.id;
    this._note = config.note;
    this._operationCode = config.operationCode;
    this._scenarios = config.scenarios;
    this._source = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conditions - computed: false, optional: false, required: true
  private _conditions?: string; 
  public get conditions() {
    return this.getStringAttribute('conditions');
  }
  public set conditions(value: string) {
    this._conditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }

  // event_key - computed: false, optional: true, required: false
  private _eventKey?: string; 
  public get eventKey() {
    return this.getStringAttribute('event_key');
  }
  public set eventKey(value: string) {
    this._eventKey = value;
  }
  public resetEventKey() {
    this._eventKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventKeyInput() {
    return this._eventKey;
  }

  // event_name - computed: false, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
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

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // operation_code - computed: false, optional: false, required: true
  private _operationCode?: string; 
  public get operationCode() {
    return this.getStringAttribute('operation_code');
  }
  public set operationCode(value: string) {
    this._operationCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationCodeInput() {
    return this._operationCode;
  }

  // scenarios - computed: true, optional: true, required: false
  private _scenarios?: string; 
  public get scenarios() {
    return this.getStringAttribute('scenarios');
  }
  public set scenarios(value: string) {
    this._scenarios = value;
  }
  public resetScenarios() {
    this._scenarios = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scenariosInput() {
    return this._scenarios;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionImageEventOperationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionImageEventOperationTimeouts) {
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
      conditions: cdktf.stringToTerraform(this._conditions),
      event_key: cdktf.stringToTerraform(this._eventKey),
      event_name: cdktf.stringToTerraform(this._eventName),
      event_type: cdktf.stringToTerraform(this._eventType),
      id: cdktf.stringToTerraform(this._id),
      note: cdktf.stringToTerraform(this._note),
      operation_code: cdktf.stringToTerraform(this._operationCode),
      scenarios: cdktf.stringToTerraform(this._scenarios),
      source: cdktf.stringToTerraform(this._source),
      timeouts: threatDetectionImageEventOperationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conditions: {
        value: cdktf.stringToHclTerraform(this._conditions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_key: {
        value: cdktf.stringToHclTerraform(this._eventKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_name: {
        value: cdktf.stringToHclTerraform(this._eventName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_type: {
        value: cdktf.stringToHclTerraform(this._eventType),
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
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_code: {
        value: cdktf.stringToHclTerraform(this._operationCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scenarios: {
        value: cdktf.stringToHclTerraform(this._scenarios),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: threatDetectionImageEventOperationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionImageEventOperationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
