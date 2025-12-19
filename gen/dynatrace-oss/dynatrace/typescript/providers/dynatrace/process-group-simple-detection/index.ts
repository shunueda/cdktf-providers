// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_simple_detection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcessGroupSimpleDetectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_simple_detection#enabled ProcessGroupSimpleDetection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * If Dynatrace detects this property at startup of a process, it will use its value to identify process groups more granular.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_simple_detection#group_identifier ProcessGroupSimpleDetection#group_identifier}
  */
  readonly groupIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_simple_detection#id ProcessGroupSimpleDetection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_simple_detection#insert_after ProcessGroupSimpleDetection#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Use a variable to identify instances within a process group.
  * 
  * The type of variable is the same as selected in 'Property source'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_simple_detection#instance_identifier ProcessGroupSimpleDetection#instance_identifier}
  */
  readonly instanceIdentifier: string;
  /**
  * Note: Not all types can be detected at startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_simple_detection#process_type ProcessGroupSimpleDetection#process_type}
  */
  readonly processType?: string;
  /**
  * Possible Values: `Prop`, `Env`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_simple_detection#rule_type ProcessGroupSimpleDetection#rule_type}
  */
  readonly ruleType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_simple_detection dynatrace_process_group_simple_detection}
*/
export class ProcessGroupSimpleDetection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_process_group_simple_detection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcessGroupSimpleDetection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcessGroupSimpleDetection to import
  * @param importFromId The id of the existing ProcessGroupSimpleDetection that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_simple_detection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcessGroupSimpleDetection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_process_group_simple_detection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_simple_detection dynatrace_process_group_simple_detection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcessGroupSimpleDetectionConfig
  */
  public constructor(scope: Construct, id: string, config: ProcessGroupSimpleDetectionConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_process_group_simple_detection',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._groupIdentifier = config.groupIdentifier;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._instanceIdentifier = config.instanceIdentifier;
    this._processType = config.processType;
    this._ruleType = config.ruleType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_identifier - computed: false, optional: false, required: true
  private _groupIdentifier?: string; 
  public get groupIdentifier() {
    return this.getStringAttribute('group_identifier');
  }
  public set groupIdentifier(value: string) {
    this._groupIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdentifierInput() {
    return this._groupIdentifier;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // instance_identifier - computed: false, optional: false, required: true
  private _instanceIdentifier?: string; 
  public get instanceIdentifier() {
    return this.getStringAttribute('instance_identifier');
  }
  public set instanceIdentifier(value: string) {
    this._instanceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdentifierInput() {
    return this._instanceIdentifier;
  }

  // process_type - computed: false, optional: true, required: false
  private _processType?: string; 
  public get processType() {
    return this.getStringAttribute('process_type');
  }
  public set processType(value: string) {
    this._processType = value;
  }
  public resetProcessType() {
    this._processType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processTypeInput() {
    return this._processType;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_identifier: cdktf.stringToTerraform(this._groupIdentifier),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      instance_identifier: cdktf.stringToTerraform(this._instanceIdentifier),
      process_type: cdktf.stringToTerraform(this._processType),
      rule_type: cdktf.stringToTerraform(this._ruleType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_identifier: {
        value: cdktf.stringToHclTerraform(this._groupIdentifier),
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_identifier: {
        value: cdktf.stringToHclTerraform(this._instanceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_type: {
        value: cdktf.stringToHclTerraform(this._processType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_type: {
        value: cdktf.stringToHclTerraform(this._ruleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
