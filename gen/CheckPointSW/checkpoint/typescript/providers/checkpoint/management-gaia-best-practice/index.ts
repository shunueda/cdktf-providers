// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementGaiaBestPracticeConfig extends cdktf.TerraformMetaArguments {
  /**
  * To comply with Best Practice, do this action item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice#action_item ManagementGaiaBestPractice#action_item}
  */
  readonly actionItem: string;
  /**
  * Best Practice ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice#best_practice_id ManagementGaiaBestPractice#best_practice_id}
  */
  readonly bestPracticeId?: string;
  /**
  * Description of the Best Practice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice#description ManagementGaiaBestPractice#description}
  */
  readonly description: string;
  /**
  * The expected output of the script as Base64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice#expected_output_base64 ManagementGaiaBestPractice#expected_output_base64}
  */
  readonly expectedOutputBase64?: string;
  /**
  * The expected output of the script as plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice#expected_output_text ManagementGaiaBestPractice#expected_output_text}
  */
  readonly expectedOutputText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice#id ManagementGaiaBestPractice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice#ignore_errors ManagementGaiaBestPractice#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice#ignore_warnings ManagementGaiaBestPractice#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Best Practice Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice#name ManagementGaiaBestPractice#name}
  */
  readonly name: string;
  /**
  * The entire content of the script encoded in Base64 to run on Gaia Security Gateways during the Compliance scans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice#practice_script_base64 ManagementGaiaBestPractice#practice_script_base64}
  */
  readonly practiceScriptBase64?: string;
  /**
  * The absolute path of the script on the Management Server to run on Gaia Security Gateways during the Compliance scans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice#practice_script_path ManagementGaiaBestPractice#practice_script_path}
  */
  readonly practiceScriptPath?: string;
}
export interface ManagementGaiaBestPracticeRegulations {
}

export function managementGaiaBestPracticeRegulationsToTerraform(struct?: ManagementGaiaBestPracticeRegulations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementGaiaBestPracticeRegulationsToHclTerraform(struct?: ManagementGaiaBestPracticeRegulations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementGaiaBestPracticeRegulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementGaiaBestPracticeRegulations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementGaiaBestPracticeRegulations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regulation_name - computed: true, optional: false, required: false
  public get regulationName() {
    return this.getStringAttribute('regulation_name');
  }

  // requirement_description - computed: true, optional: false, required: false
  public get requirementDescription() {
    return this.getStringAttribute('requirement_description');
  }

  // requirement_id - computed: true, optional: false, required: false
  public get requirementId() {
    return this.getStringAttribute('requirement_id');
  }

  // requirement_status - computed: true, optional: false, required: false
  public get requirementStatus() {
    return this.getStringAttribute('requirement_status');
  }
}

export class ManagementGaiaBestPracticeRegulationsList extends cdktf.ComplexList {

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
  public get(index: number): ManagementGaiaBestPracticeRegulationsOutputReference {
    return new ManagementGaiaBestPracticeRegulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementGaiaBestPracticeRelevantObjects {
}

export function managementGaiaBestPracticeRelevantObjectsToTerraform(struct?: ManagementGaiaBestPracticeRelevantObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementGaiaBestPracticeRelevantObjectsToHclTerraform(struct?: ManagementGaiaBestPracticeRelevantObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementGaiaBestPracticeRelevantObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementGaiaBestPracticeRelevantObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementGaiaBestPracticeRelevantObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ManagementGaiaBestPracticeRelevantObjectsList extends cdktf.ComplexList {

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
  public get(index: number): ManagementGaiaBestPracticeRelevantObjectsOutputReference {
    return new ManagementGaiaBestPracticeRelevantObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice checkpoint_management_gaia_best_practice}
*/
export class ManagementGaiaBestPractice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_gaia_best_practice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementGaiaBestPractice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementGaiaBestPractice to import
  * @param importFromId The id of the existing ManagementGaiaBestPractice that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementGaiaBestPractice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_gaia_best_practice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_gaia_best_practice checkpoint_management_gaia_best_practice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementGaiaBestPracticeConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementGaiaBestPracticeConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_gaia_best_practice',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionItem = config.actionItem;
    this._bestPracticeId = config.bestPracticeId;
    this._description = config.description;
    this._expectedOutputBase64 = config.expectedOutputBase64;
    this._expectedOutputText = config.expectedOutputText;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._practiceScriptBase64 = config.practiceScriptBase64;
    this._practiceScriptPath = config.practiceScriptPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_item - computed: false, optional: false, required: true
  private _actionItem?: string; 
  public get actionItem() {
    return this.getStringAttribute('action_item');
  }
  public set actionItem(value: string) {
    this._actionItem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionItemInput() {
    return this._actionItem;
  }

  // best_practice_id - computed: false, optional: true, required: false
  private _bestPracticeId?: string; 
  public get bestPracticeId() {
    return this.getStringAttribute('best_practice_id');
  }
  public set bestPracticeId(value: string) {
    this._bestPracticeId = value;
  }
  public resetBestPracticeId() {
    this._bestPracticeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestPracticeIdInput() {
    return this._bestPracticeId;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expected_output_base64 - computed: false, optional: true, required: false
  private _expectedOutputBase64?: string; 
  public get expectedOutputBase64() {
    return this.getStringAttribute('expected_output_base64');
  }
  public set expectedOutputBase64(value: string) {
    this._expectedOutputBase64 = value;
  }
  public resetExpectedOutputBase64() {
    this._expectedOutputBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedOutputBase64Input() {
    return this._expectedOutputBase64;
  }

  // expected_output_text - computed: false, optional: true, required: false
  private _expectedOutputText?: string; 
  public get expectedOutputText() {
    return this.getStringAttribute('expected_output_text');
  }
  public set expectedOutputText(value: string) {
    this._expectedOutputText = value;
  }
  public resetExpectedOutputText() {
    this._expectedOutputText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedOutputTextInput() {
    return this._expectedOutputText;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // practice_script_base64 - computed: false, optional: true, required: false
  private _practiceScriptBase64?: string; 
  public get practiceScriptBase64() {
    return this.getStringAttribute('practice_script_base64');
  }
  public set practiceScriptBase64(value: string) {
    this._practiceScriptBase64 = value;
  }
  public resetPracticeScriptBase64() {
    this._practiceScriptBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get practiceScriptBase64Input() {
    return this._practiceScriptBase64;
  }

  // practice_script_path - computed: false, optional: true, required: false
  private _practiceScriptPath?: string; 
  public get practiceScriptPath() {
    return this.getStringAttribute('practice_script_path');
  }
  public set practiceScriptPath(value: string) {
    this._practiceScriptPath = value;
  }
  public resetPracticeScriptPath() {
    this._practiceScriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get practiceScriptPathInput() {
    return this._practiceScriptPath;
  }

  // regulations - computed: true, optional: false, required: false
  private _regulations = new ManagementGaiaBestPracticeRegulationsList(this, "regulations", false);
  public get regulations() {
    return this._regulations;
  }

  // relevant_objects - computed: true, optional: false, required: false
  private _relevantObjects = new ManagementGaiaBestPracticeRelevantObjectsList(this, "relevant_objects", false);
  public get relevantObjects() {
    return this._relevantObjects;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_defined - computed: true, optional: false, required: false
  public get userDefined() {
    return this.getBooleanAttribute('user_defined');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_item: cdktf.stringToTerraform(this._actionItem),
      best_practice_id: cdktf.stringToTerraform(this._bestPracticeId),
      description: cdktf.stringToTerraform(this._description),
      expected_output_base64: cdktf.stringToTerraform(this._expectedOutputBase64),
      expected_output_text: cdktf.stringToTerraform(this._expectedOutputText),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      practice_script_base64: cdktf.stringToTerraform(this._practiceScriptBase64),
      practice_script_path: cdktf.stringToTerraform(this._practiceScriptPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_item: {
        value: cdktf.stringToHclTerraform(this._actionItem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      best_practice_id: {
        value: cdktf.stringToHclTerraform(this._bestPracticeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_output_base64: {
        value: cdktf.stringToHclTerraform(this._expectedOutputBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_output_text: {
        value: cdktf.stringToHclTerraform(this._expectedOutputText),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
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
      practice_script_base64: {
        value: cdktf.stringToHclTerraform(this._practiceScriptBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      practice_script_path: {
        value: cdktf.stringToHclTerraform(this._practiceScriptPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
