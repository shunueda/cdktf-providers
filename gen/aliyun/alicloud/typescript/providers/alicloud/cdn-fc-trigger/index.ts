// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnFcTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#event_meta_name CdnFcTrigger#event_meta_name}
  */
  readonly eventMetaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#event_meta_version CdnFcTrigger#event_meta_version}
  */
  readonly eventMetaVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#function_arn CdnFcTrigger#function_arn}
  */
  readonly functionArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#id CdnFcTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#notes CdnFcTrigger#notes}
  */
  readonly notes: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#role_arn CdnFcTrigger#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#source_arn CdnFcTrigger#source_arn}
  */
  readonly sourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#trigger_arn CdnFcTrigger#trigger_arn}
  */
  readonly triggerArn: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#timeouts CdnFcTrigger#timeouts}
  */
  readonly timeouts?: CdnFcTriggerTimeouts;
}
export interface CdnFcTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#create CdnFcTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#delete CdnFcTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#update CdnFcTrigger#update}
  */
  readonly update?: string;
}

export function cdnFcTriggerTimeoutsToTerraform(struct?: CdnFcTriggerTimeouts | cdktf.IResolvable): any {
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


export function cdnFcTriggerTimeoutsToHclTerraform(struct?: CdnFcTriggerTimeouts | cdktf.IResolvable): any {
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

export class CdnFcTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnFcTriggerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnFcTriggerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger alicloud_cdn_fc_trigger}
*/
export class CdnFcTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cdn_fc_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnFcTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnFcTrigger to import
  * @param importFromId The id of the existing CdnFcTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnFcTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cdn_fc_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cdn_fc_trigger alicloud_cdn_fc_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnFcTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: CdnFcTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cdn_fc_trigger',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eventMetaName = config.eventMetaName;
    this._eventMetaVersion = config.eventMetaVersion;
    this._functionArn = config.functionArn;
    this._id = config.id;
    this._notes = config.notes;
    this._roleArn = config.roleArn;
    this._sourceArn = config.sourceArn;
    this._triggerArn = config.triggerArn;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_meta_name - computed: false, optional: false, required: true
  private _eventMetaName?: string; 
  public get eventMetaName() {
    return this.getStringAttribute('event_meta_name');
  }
  public set eventMetaName(value: string) {
    this._eventMetaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventMetaNameInput() {
    return this._eventMetaName;
  }

  // event_meta_version - computed: false, optional: false, required: true
  private _eventMetaVersion?: string; 
  public get eventMetaVersion() {
    return this.getStringAttribute('event_meta_version');
  }
  public set eventMetaVersion(value: string) {
    this._eventMetaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventMetaVersionInput() {
    return this._eventMetaVersion;
  }

  // function_arn - computed: false, optional: true, required: false
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  public resetFunctionArn() {
    this._functionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
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

  // notes - computed: false, optional: false, required: true
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // source_arn - computed: false, optional: false, required: true
  private _sourceArn?: string; 
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn;
  }

  // trigger_arn - computed: false, optional: false, required: true
  private _triggerArn?: string; 
  public get triggerArn() {
    return this.getStringAttribute('trigger_arn');
  }
  public set triggerArn(value: string) {
    this._triggerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerArnInput() {
    return this._triggerArn;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnFcTriggerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnFcTriggerTimeouts) {
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
      event_meta_name: cdktf.stringToTerraform(this._eventMetaName),
      event_meta_version: cdktf.stringToTerraform(this._eventMetaVersion),
      function_arn: cdktf.stringToTerraform(this._functionArn),
      id: cdktf.stringToTerraform(this._id),
      notes: cdktf.stringToTerraform(this._notes),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      source_arn: cdktf.stringToTerraform(this._sourceArn),
      trigger_arn: cdktf.stringToTerraform(this._triggerArn),
      timeouts: cdnFcTriggerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_meta_name: {
        value: cdktf.stringToHclTerraform(this._eventMetaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_meta_version: {
        value: cdktf.stringToHclTerraform(this._eventMetaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_arn: {
        value: cdktf.stringToHclTerraform(this._functionArn),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_arn: {
        value: cdktf.stringToHclTerraform(this._sourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_arn: {
        value: cdktf.stringToHclTerraform(this._triggerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cdnFcTriggerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnFcTriggerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
