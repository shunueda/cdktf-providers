// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_status_oper#id DataThunderFwStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_status_oper#oper DataThunderFwStatusOper#oper}
  */
  readonly oper?: DataThunderFwStatusOperOper;
}
export interface DataThunderFwStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_status_oper#current_active_rule_set DataThunderFwStatusOper#current_active_rule_set}
  */
  readonly currentActiveRuleSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_status_oper#internal DataThunderFwStatusOper#internal}
  */
  readonly internal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_status_oper#most_recent_compilation_attempt DataThunderFwStatusOper#most_recent_compilation_attempt}
  */
  readonly mostRecentCompilationAttempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_status_oper#most_recent_compilation_status DataThunderFwStatusOper#most_recent_compilation_status}
  */
  readonly mostRecentCompilationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_status_oper#previous_successful_compilation_attempt DataThunderFwStatusOper#previous_successful_compilation_attempt}
  */
  readonly previousSuccessfulCompilationAttempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_status_oper#previous_successful_compilation_duration DataThunderFwStatusOper#previous_successful_compilation_duration}
  */
  readonly previousSuccessfulCompilationDuration?: string;
}

export function dataThunderFwStatusOperOperToTerraform(struct?: DataThunderFwStatusOperOperOutputReference | DataThunderFwStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_active_rule_set: cdktf.stringToTerraform(struct!.currentActiveRuleSet),
    internal: cdktf.numberToTerraform(struct!.internal),
    most_recent_compilation_attempt: cdktf.stringToTerraform(struct!.mostRecentCompilationAttempt),
    most_recent_compilation_status: cdktf.stringToTerraform(struct!.mostRecentCompilationStatus),
    previous_successful_compilation_attempt: cdktf.stringToTerraform(struct!.previousSuccessfulCompilationAttempt),
    previous_successful_compilation_duration: cdktf.stringToTerraform(struct!.previousSuccessfulCompilationDuration),
  }
}


export function dataThunderFwStatusOperOperToHclTerraform(struct?: DataThunderFwStatusOperOperOutputReference | DataThunderFwStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_active_rule_set: {
      value: cdktf.stringToHclTerraform(struct!.currentActiveRuleSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal: {
      value: cdktf.numberToHclTerraform(struct!.internal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    most_recent_compilation_attempt: {
      value: cdktf.stringToHclTerraform(struct!.mostRecentCompilationAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    most_recent_compilation_status: {
      value: cdktf.stringToHclTerraform(struct!.mostRecentCompilationStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    previous_successful_compilation_attempt: {
      value: cdktf.stringToHclTerraform(struct!.previousSuccessfulCompilationAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    previous_successful_compilation_duration: {
      value: cdktf.stringToHclTerraform(struct!.previousSuccessfulCompilationDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentActiveRuleSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentActiveRuleSet = this._currentActiveRuleSet;
    }
    if (this._internal !== undefined) {
      hasAnyValues = true;
      internalValueResult.internal = this._internal;
    }
    if (this._mostRecentCompilationAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.mostRecentCompilationAttempt = this._mostRecentCompilationAttempt;
    }
    if (this._mostRecentCompilationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.mostRecentCompilationStatus = this._mostRecentCompilationStatus;
    }
    if (this._previousSuccessfulCompilationAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousSuccessfulCompilationAttempt = this._previousSuccessfulCompilationAttempt;
    }
    if (this._previousSuccessfulCompilationDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousSuccessfulCompilationDuration = this._previousSuccessfulCompilationDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentActiveRuleSet = undefined;
      this._internal = undefined;
      this._mostRecentCompilationAttempt = undefined;
      this._mostRecentCompilationStatus = undefined;
      this._previousSuccessfulCompilationAttempt = undefined;
      this._previousSuccessfulCompilationDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentActiveRuleSet = value.currentActiveRuleSet;
      this._internal = value.internal;
      this._mostRecentCompilationAttempt = value.mostRecentCompilationAttempt;
      this._mostRecentCompilationStatus = value.mostRecentCompilationStatus;
      this._previousSuccessfulCompilationAttempt = value.previousSuccessfulCompilationAttempt;
      this._previousSuccessfulCompilationDuration = value.previousSuccessfulCompilationDuration;
    }
  }

  // current_active_rule_set - computed: false, optional: true, required: false
  private _currentActiveRuleSet?: string; 
  public get currentActiveRuleSet() {
    return this.getStringAttribute('current_active_rule_set');
  }
  public set currentActiveRuleSet(value: string) {
    this._currentActiveRuleSet = value;
  }
  public resetCurrentActiveRuleSet() {
    this._currentActiveRuleSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentActiveRuleSetInput() {
    return this._currentActiveRuleSet;
  }

  // internal - computed: false, optional: true, required: false
  private _internal?: number; 
  public get internal() {
    return this.getNumberAttribute('internal');
  }
  public set internal(value: number) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // most_recent_compilation_attempt - computed: false, optional: true, required: false
  private _mostRecentCompilationAttempt?: string; 
  public get mostRecentCompilationAttempt() {
    return this.getStringAttribute('most_recent_compilation_attempt');
  }
  public set mostRecentCompilationAttempt(value: string) {
    this._mostRecentCompilationAttempt = value;
  }
  public resetMostRecentCompilationAttempt() {
    this._mostRecentCompilationAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentCompilationAttemptInput() {
    return this._mostRecentCompilationAttempt;
  }

  // most_recent_compilation_status - computed: false, optional: true, required: false
  private _mostRecentCompilationStatus?: string; 
  public get mostRecentCompilationStatus() {
    return this.getStringAttribute('most_recent_compilation_status');
  }
  public set mostRecentCompilationStatus(value: string) {
    this._mostRecentCompilationStatus = value;
  }
  public resetMostRecentCompilationStatus() {
    this._mostRecentCompilationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentCompilationStatusInput() {
    return this._mostRecentCompilationStatus;
  }

  // previous_successful_compilation_attempt - computed: false, optional: true, required: false
  private _previousSuccessfulCompilationAttempt?: string; 
  public get previousSuccessfulCompilationAttempt() {
    return this.getStringAttribute('previous_successful_compilation_attempt');
  }
  public set previousSuccessfulCompilationAttempt(value: string) {
    this._previousSuccessfulCompilationAttempt = value;
  }
  public resetPreviousSuccessfulCompilationAttempt() {
    this._previousSuccessfulCompilationAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousSuccessfulCompilationAttemptInput() {
    return this._previousSuccessfulCompilationAttempt;
  }

  // previous_successful_compilation_duration - computed: false, optional: true, required: false
  private _previousSuccessfulCompilationDuration?: string; 
  public get previousSuccessfulCompilationDuration() {
    return this.getStringAttribute('previous_successful_compilation_duration');
  }
  public set previousSuccessfulCompilationDuration(value: string) {
    this._previousSuccessfulCompilationDuration = value;
  }
  public resetPreviousSuccessfulCompilationDuration() {
    this._previousSuccessfulCompilationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousSuccessfulCompilationDurationInput() {
    return this._previousSuccessfulCompilationDuration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_status_oper thunder_fw_status_oper}
*/
export class DataThunderFwStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwStatusOper to import
  * @param importFromId The id of the existing DataThunderFwStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_status_oper thunder_fw_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_status_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderFwStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwStatusOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderFwStatusOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderFwStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
