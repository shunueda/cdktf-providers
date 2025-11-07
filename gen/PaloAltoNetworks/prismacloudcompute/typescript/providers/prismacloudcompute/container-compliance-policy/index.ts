// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerCompliancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#rule ContainerCompliancePolicy#rule}
  */
  readonly rule?: ContainerCompliancePolicyRule[] | cdktf.IResolvable;
}
export interface ContainerCompliancePolicyRuleComplianceCheck {
  /**
  * Whether or not to block if this check is failed. Setting to 'false' will only alert if the check is failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#block ContainerCompliancePolicy#block}
  */
  readonly block?: boolean | cdktf.IResolvable;
  /**
  * Compliance check number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#id ContainerCompliancePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function containerCompliancePolicyRuleComplianceCheckToTerraform(struct?: ContainerCompliancePolicyRuleComplianceCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.booleanToTerraform(struct!.block),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function containerCompliancePolicyRuleComplianceCheckToHclTerraform(struct?: ContainerCompliancePolicyRuleComplianceCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: cdktf.booleanToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerCompliancePolicyRuleComplianceCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerCompliancePolicyRuleComplianceCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerCompliancePolicyRuleComplianceCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._block = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._block = value.block;
      this._id = value.id;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block?: boolean | cdktf.IResolvable; 
  public get block() {
    return this.getBooleanAttribute('block');
  }
  public set block(value: boolean | cdktf.IResolvable) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ContainerCompliancePolicyRuleComplianceCheckList extends cdktf.ComplexList {
  public internalValue? : ContainerCompliancePolicyRuleComplianceCheck[] | cdktf.IResolvable

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
  public get(index: number): ContainerCompliancePolicyRuleComplianceCheckOutputReference {
    return new ContainerCompliancePolicyRuleComplianceCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerCompliancePolicyRule {
  /**
  * Message to display for blocked requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#block_message ContainerCompliancePolicy#block_message}
  */
  readonly blockMessage?: string;
  /**
  * Collections used to scope the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#collections ContainerCompliancePolicy#collections}
  */
  readonly collections?: string[];
  /**
  * Whether or not to disable the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#disabled ContainerCompliancePolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The effect of the rule. Can be set to 'ignore', 'alert', 'block', or 'alert, block'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#effect ContainerCompliancePolicy#effect}
  */
  readonly effect?: string;
  /**
  * Unique name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#name ContainerCompliancePolicy#name}
  */
  readonly name?: string;
  /**
  * Free-form text field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#notes ContainerCompliancePolicy#notes}
  */
  readonly notes?: string;
  /**
  * Whether or not to report both failed and passed compliance checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#show_passed_checks ContainerCompliancePolicy#show_passed_checks}
  */
  readonly showPassedChecks?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to provide verbose output for blocked requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#verbose ContainerCompliancePolicy#verbose}
  */
  readonly verbose?: boolean | cdktf.IResolvable;
  /**
  * compliance_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#compliance_check ContainerCompliancePolicy#compliance_check}
  */
  readonly complianceCheck?: ContainerCompliancePolicyRuleComplianceCheck[] | cdktf.IResolvable;
}

export function containerCompliancePolicyRuleToTerraform(struct?: ContainerCompliancePolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_message: cdktf.stringToTerraform(struct!.blockMessage),
    collections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.collections),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    effect: cdktf.stringToTerraform(struct!.effect),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    show_passed_checks: cdktf.booleanToTerraform(struct!.showPassedChecks),
    verbose: cdktf.booleanToTerraform(struct!.verbose),
    compliance_check: cdktf.listMapper(containerCompliancePolicyRuleComplianceCheckToTerraform, true)(struct!.complianceCheck),
  }
}


export function containerCompliancePolicyRuleToHclTerraform(struct?: ContainerCompliancePolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_message: {
      value: cdktf.stringToHclTerraform(struct!.blockMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.collections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_passed_checks: {
      value: cdktf.booleanToHclTerraform(struct!.showPassedChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verbose: {
      value: cdktf.booleanToHclTerraform(struct!.verbose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compliance_check: {
      value: cdktf.listMapperHcl(containerCompliancePolicyRuleComplianceCheckToHclTerraform, true)(struct!.complianceCheck),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerCompliancePolicyRuleComplianceCheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerCompliancePolicyRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerCompliancePolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockMessage = this._blockMessage;
    }
    if (this._collections !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._showPassedChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.showPassedChecks = this._showPassedChecks;
    }
    if (this._verbose !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbose = this._verbose;
    }
    if (this._complianceCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceCheck = this._complianceCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerCompliancePolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockMessage = undefined;
      this._collections = undefined;
      this._disabled = undefined;
      this._effect = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._showPassedChecks = undefined;
      this._verbose = undefined;
      this._complianceCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockMessage = value.blockMessage;
      this._collections = value.collections;
      this._disabled = value.disabled;
      this._effect = value.effect;
      this._name = value.name;
      this._notes = value.notes;
      this._showPassedChecks = value.showPassedChecks;
      this._verbose = value.verbose;
      this._complianceCheck.internalValue = value.complianceCheck;
    }
  }

  // block_message - computed: false, optional: true, required: false
  private _blockMessage?: string; 
  public get blockMessage() {
    return this.getStringAttribute('block_message');
  }
  public set blockMessage(value: string) {
    this._blockMessage = value;
  }
  public resetBlockMessage() {
    this._blockMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMessageInput() {
    return this._blockMessage;
  }

  // collections - computed: false, optional: true, required: false
  private _collections?: string[]; 
  public get collections() {
    return this.getListAttribute('collections');
  }
  public set collections(value: string[]) {
    this._collections = value;
  }
  public resetCollections() {
    this._collections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // show_passed_checks - computed: false, optional: true, required: false
  private _showPassedChecks?: boolean | cdktf.IResolvable; 
  public get showPassedChecks() {
    return this.getBooleanAttribute('show_passed_checks');
  }
  public set showPassedChecks(value: boolean | cdktf.IResolvable) {
    this._showPassedChecks = value;
  }
  public resetShowPassedChecks() {
    this._showPassedChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPassedChecksInput() {
    return this._showPassedChecks;
  }

  // verbose - computed: false, optional: true, required: false
  private _verbose?: boolean | cdktf.IResolvable; 
  public get verbose() {
    return this.getBooleanAttribute('verbose');
  }
  public set verbose(value: boolean | cdktf.IResolvable) {
    this._verbose = value;
  }
  public resetVerbose() {
    this._verbose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseInput() {
    return this._verbose;
  }

  // compliance_check - computed: false, optional: true, required: false
  private _complianceCheck = new ContainerCompliancePolicyRuleComplianceCheckList(this, "compliance_check", false);
  public get complianceCheck() {
    return this._complianceCheck;
  }
  public putComplianceCheck(value: ContainerCompliancePolicyRuleComplianceCheck[] | cdktf.IResolvable) {
    this._complianceCheck.internalValue = value;
  }
  public resetComplianceCheck() {
    this._complianceCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceCheckInput() {
    return this._complianceCheck.internalValue;
  }
}

export class ContainerCompliancePolicyRuleList extends cdktf.ComplexList {
  public internalValue? : ContainerCompliancePolicyRule[] | cdktf.IResolvable

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
  public get(index: number): ContainerCompliancePolicyRuleOutputReference {
    return new ContainerCompliancePolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy prismacloudcompute_container_compliance_policy}
*/
export class ContainerCompliancePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_container_compliance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerCompliancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerCompliancePolicy to import
  * @param importFromId The id of the existing ContainerCompliancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerCompliancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_container_compliance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_compliance_policy prismacloudcompute_container_compliance_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerCompliancePolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ContainerCompliancePolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_container_compliance_policy',
      terraformGeneratorMetadata: {
        providerName: 'prismacloudcompute',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ContainerCompliancePolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ContainerCompliancePolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rule: cdktf.listMapper(containerCompliancePolicyRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rule: {
        value: cdktf.listMapperHcl(containerCompliancePolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerCompliancePolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
