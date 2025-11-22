// https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulesGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether the rule-group will be active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#active RulesGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Rules will execute on logs that match the following applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#applications RulesGroup#applications}
  */
  readonly applications?: string[];
  /**
  * Rule-group creator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#creator RulesGroup#creator}
  */
  readonly creator?: string;
  /**
  * Rule-group description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#description RulesGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#hidden RulesGroup#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#id RulesGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule-group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#name RulesGroup#name}
  */
  readonly name: string;
  /**
  * Determines the index of the rule-group between the other rule-groups. By default, will be added last. (1 based indexing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#order RulesGroup#order}
  */
  readonly order?: number;
  /**
  * Rules will execute on logs that match the these severities. Can be one of ["Critical" "Debug" "Error" "Info" "Verbose" "Warning"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#severities RulesGroup#severities}
  */
  readonly severities?: string[];
  /**
  * Rules will execute on logs that match the following subsystems.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#subsystems RulesGroup#subsystems}
  */
  readonly subsystems?: string[];
  /**
  * rule_subgroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#rule_subgroups RulesGroup#rule_subgroups}
  */
  readonly ruleSubgroups?: RulesGroupRuleSubgroups[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#timeouts RulesGroup#timeouts}
  */
  readonly timeouts?: RulesGroupTimeouts;
}
export interface RulesGroupRuleSubgroupsRulesBlock {
  /**
  * Determines whether to rule will be active or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#active RulesGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Block Logic. If true or nor set - blocking all matching blocks, if false - blocking all non-matching blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#blocking_all_matching_blocks RulesGroup#blocking_all_matching_blocks}
  */
  readonly blockingAllMatchingBlocks?: boolean | cdktf.IResolvable;
  /**
  * The rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#description RulesGroup#description}
  */
  readonly description?: string;
  /**
  * Determines if to view blocked logs in LiveTail and archive to S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#keep_blocked_logs RulesGroup#keep_blocked_logs}
  */
  readonly keepBlockedLogs?: boolean | cdktf.IResolvable;
  /**
  * The rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#name RulesGroup#name}
  */
  readonly name: string;
  /**
  * Determines the index of the rule inside the rule-subgroup.If not set, will be computed by the order it was declared. (1 based indexing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#order RulesGroup#order}
  */
  readonly order?: number;
  /**
  * Regular expiration. More info: https://coralogix.com/blog/regex-101/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#regular_expression RulesGroup#regular_expression}
  */
  readonly regularExpression: string;
  /**
  * The field on which the Regex will operate on. Accepts lowercase only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#source_field RulesGroup#source_field}
  */
  readonly sourceField: string;
}

export function rulesGroupRuleSubgroupsRulesBlockToTerraform(struct?: RulesGroupRuleSubgroupsRulesBlockOutputReference | RulesGroupRuleSubgroupsRulesBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    blocking_all_matching_blocks: cdktf.booleanToTerraform(struct!.blockingAllMatchingBlocks),
    description: cdktf.stringToTerraform(struct!.description),
    keep_blocked_logs: cdktf.booleanToTerraform(struct!.keepBlockedLogs),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    regular_expression: cdktf.stringToTerraform(struct!.regularExpression),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
  }
}


export function rulesGroupRuleSubgroupsRulesBlockToHclTerraform(struct?: RulesGroupRuleSubgroupsRulesBlockOutputReference | RulesGroupRuleSubgroupsRulesBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blocking_all_matching_blocks: {
      value: cdktf.booleanToHclTerraform(struct!.blockingAllMatchingBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_blocked_logs: {
      value: cdktf.booleanToHclTerraform(struct!.keepBlockedLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regular_expression: {
      value: cdktf.stringToHclTerraform(struct!.regularExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field: {
      value: cdktf.stringToHclTerraform(struct!.sourceField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesGroupRuleSubgroupsRulesBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesGroupRuleSubgroupsRulesBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._blockingAllMatchingBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingAllMatchingBlocks = this._blockingAllMatchingBlocks;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._keepBlockedLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepBlockedLogs = this._keepBlockedLogs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._regularExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularExpression = this._regularExpression;
    }
    if (this._sourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceField = this._sourceField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroupRuleSubgroupsRulesBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._blockingAllMatchingBlocks = undefined;
      this._description = undefined;
      this._keepBlockedLogs = undefined;
      this._name = undefined;
      this._order = undefined;
      this._regularExpression = undefined;
      this._sourceField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._blockingAllMatchingBlocks = value.blockingAllMatchingBlocks;
      this._description = value.description;
      this._keepBlockedLogs = value.keepBlockedLogs;
      this._name = value.name;
      this._order = value.order;
      this._regularExpression = value.regularExpression;
      this._sourceField = value.sourceField;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // blocking_all_matching_blocks - computed: false, optional: true, required: false
  private _blockingAllMatchingBlocks?: boolean | cdktf.IResolvable; 
  public get blockingAllMatchingBlocks() {
    return this.getBooleanAttribute('blocking_all_matching_blocks');
  }
  public set blockingAllMatchingBlocks(value: boolean | cdktf.IResolvable) {
    this._blockingAllMatchingBlocks = value;
  }
  public resetBlockingAllMatchingBlocks() {
    this._blockingAllMatchingBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingAllMatchingBlocksInput() {
    return this._blockingAllMatchingBlocks;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_blocked_logs - computed: false, optional: true, required: false
  private _keepBlockedLogs?: boolean | cdktf.IResolvable; 
  public get keepBlockedLogs() {
    return this.getBooleanAttribute('keep_blocked_logs');
  }
  public set keepBlockedLogs(value: boolean | cdktf.IResolvable) {
    this._keepBlockedLogs = value;
  }
  public resetKeepBlockedLogs() {
    this._keepBlockedLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepBlockedLogsInput() {
    return this._keepBlockedLogs;
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // regular_expression - computed: false, optional: false, required: true
  private _regularExpression?: string; 
  public get regularExpression() {
    return this.getStringAttribute('regular_expression');
  }
  public set regularExpression(value: string) {
    this._regularExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regularExpressionInput() {
    return this._regularExpression;
  }

  // source_field - computed: false, optional: false, required: true
  private _sourceField?: string; 
  public get sourceField() {
    return this.getStringAttribute('source_field');
  }
  public set sourceField(value: string) {
    this._sourceField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldInput() {
    return this._sourceField;
  }
}
export interface RulesGroupRuleSubgroupsRulesExtract {
  /**
  * Determines whether to rule will be active or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#active RulesGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#description RulesGroup#description}
  */
  readonly description?: string;
  /**
  * The rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#name RulesGroup#name}
  */
  readonly name: string;
  /**
  * Determines the index of the rule inside the rule-subgroup.If not set, will be computed by the order it was declared. (1 based indexing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#order RulesGroup#order}
  */
  readonly order?: number;
  /**
  * Regular expiration. More info: https://coralogix.com/blog/regex-101/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#regular_expression RulesGroup#regular_expression}
  */
  readonly regularExpression: string;
  /**
  * The field on which the Regex will operate on. Accepts lowercase only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#source_field RulesGroup#source_field}
  */
  readonly sourceField: string;
}

export function rulesGroupRuleSubgroupsRulesExtractToTerraform(struct?: RulesGroupRuleSubgroupsRulesExtractOutputReference | RulesGroupRuleSubgroupsRulesExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    regular_expression: cdktf.stringToTerraform(struct!.regularExpression),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
  }
}


export function rulesGroupRuleSubgroupsRulesExtractToHclTerraform(struct?: RulesGroupRuleSubgroupsRulesExtractOutputReference | RulesGroupRuleSubgroupsRulesExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regular_expression: {
      value: cdktf.stringToHclTerraform(struct!.regularExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field: {
      value: cdktf.stringToHclTerraform(struct!.sourceField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesGroupRuleSubgroupsRulesExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesGroupRuleSubgroupsRulesExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._regularExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularExpression = this._regularExpression;
    }
    if (this._sourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceField = this._sourceField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroupRuleSubgroupsRulesExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._description = undefined;
      this._name = undefined;
      this._order = undefined;
      this._regularExpression = undefined;
      this._sourceField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._description = value.description;
      this._name = value.name;
      this._order = value.order;
      this._regularExpression = value.regularExpression;
      this._sourceField = value.sourceField;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // regular_expression - computed: false, optional: false, required: true
  private _regularExpression?: string; 
  public get regularExpression() {
    return this.getStringAttribute('regular_expression');
  }
  public set regularExpression(value: string) {
    this._regularExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regularExpressionInput() {
    return this._regularExpression;
  }

  // source_field - computed: false, optional: false, required: true
  private _sourceField?: string; 
  public get sourceField() {
    return this.getStringAttribute('source_field');
  }
  public set sourceField(value: string) {
    this._sourceField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldInput() {
    return this._sourceField;
  }
}
export interface RulesGroupRuleSubgroupsRulesExtractTimestamp {
  /**
  * Determines whether to rule will be active or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#active RulesGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#description RulesGroup#description}
  */
  readonly description?: string;
  /**
  * The format standard you want to use. Can be one of ["Golang" "JavaSDF" "MicroTS" "MilliTS" "NanoTS" "SecondTS" "Strftime"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#field_format_standard RulesGroup#field_format_standard}
  */
  readonly fieldFormatStandard: string;
  /**
  * The rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#name RulesGroup#name}
  */
  readonly name: string;
  /**
  * Determines the index of the rule inside the rule-subgroup.If not set, will be computed by the order it was declared. (1 based indexing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#order RulesGroup#order}
  */
  readonly order?: number;
  /**
  * The field on which the Regex will operate on. Accepts lowercase only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#source_field RulesGroup#source_field}
  */
  readonly sourceField: string;
  /**
  * A time format that matches the field format standard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#time_format RulesGroup#time_format}
  */
  readonly timeFormat: string;
}

export function rulesGroupRuleSubgroupsRulesExtractTimestampToTerraform(struct?: RulesGroupRuleSubgroupsRulesExtractTimestampOutputReference | RulesGroupRuleSubgroupsRulesExtractTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    description: cdktf.stringToTerraform(struct!.description),
    field_format_standard: cdktf.stringToTerraform(struct!.fieldFormatStandard),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
  }
}


export function rulesGroupRuleSubgroupsRulesExtractTimestampToHclTerraform(struct?: RulesGroupRuleSubgroupsRulesExtractTimestampOutputReference | RulesGroupRuleSubgroupsRulesExtractTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_format_standard: {
      value: cdktf.stringToHclTerraform(struct!.fieldFormatStandard),
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_field: {
      value: cdktf.stringToHclTerraform(struct!.sourceField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesGroupRuleSubgroupsRulesExtractTimestampOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesGroupRuleSubgroupsRulesExtractTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fieldFormatStandard !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldFormatStandard = this._fieldFormatStandard;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._sourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceField = this._sourceField;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroupRuleSubgroupsRulesExtractTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._description = undefined;
      this._fieldFormatStandard = undefined;
      this._name = undefined;
      this._order = undefined;
      this._sourceField = undefined;
      this._timeFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._description = value.description;
      this._fieldFormatStandard = value.fieldFormatStandard;
      this._name = value.name;
      this._order = value.order;
      this._sourceField = value.sourceField;
      this._timeFormat = value.timeFormat;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // field_format_standard - computed: false, optional: false, required: true
  private _fieldFormatStandard?: string; 
  public get fieldFormatStandard() {
    return this.getStringAttribute('field_format_standard');
  }
  public set fieldFormatStandard(value: string) {
    this._fieldFormatStandard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldFormatStandardInput() {
    return this._fieldFormatStandard;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // source_field - computed: false, optional: false, required: true
  private _sourceField?: string; 
  public get sourceField() {
    return this.getStringAttribute('source_field');
  }
  public set sourceField(value: string) {
    this._sourceField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldInput() {
    return this._sourceField;
  }

  // time_format - computed: false, optional: false, required: true
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }
}
export interface RulesGroupRuleSubgroupsRulesJsonExtract {
  /**
  * Determines whether to rule will be active or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#active RulesGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#description RulesGroup#description}
  */
  readonly description?: string;
  /**
  * The field that will be populated by the results of RegEx operation.Can be one of [Category Class Method Severity Text ThreadID].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#destination_field RulesGroup#destination_field}
  */
  readonly destinationField: string;
  /**
  * Required when destination_field is 'Text'. should be either 'text' or 'text.<some value>'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#destination_field_text RulesGroup#destination_field_text}
  */
  readonly destinationFieldText?: string;
  /**
  * JSON key to extract its value directly into a Coralogix metadata field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#json_key RulesGroup#json_key}
  */
  readonly jsonKey: string;
  /**
  * The rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#name RulesGroup#name}
  */
  readonly name: string;
  /**
  * Determines the index of the rule inside the rule-subgroup.If not set, will be computed by the order it was declared. (1 based indexing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#order RulesGroup#order}
  */
  readonly order?: number;
}

export function rulesGroupRuleSubgroupsRulesJsonExtractToTerraform(struct?: RulesGroupRuleSubgroupsRulesJsonExtractOutputReference | RulesGroupRuleSubgroupsRulesJsonExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    description: cdktf.stringToTerraform(struct!.description),
    destination_field: cdktf.stringToTerraform(struct!.destinationField),
    destination_field_text: cdktf.stringToTerraform(struct!.destinationFieldText),
    json_key: cdktf.stringToTerraform(struct!.jsonKey),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function rulesGroupRuleSubgroupsRulesJsonExtractToHclTerraform(struct?: RulesGroupRuleSubgroupsRulesJsonExtractOutputReference | RulesGroupRuleSubgroupsRulesJsonExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field: {
      value: cdktf.stringToHclTerraform(struct!.destinationField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_text: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_key: {
      value: cdktf.stringToHclTerraform(struct!.jsonKey),
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesGroupRuleSubgroupsRulesJsonExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesGroupRuleSubgroupsRulesJsonExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationField !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationField = this._destinationField;
    }
    if (this._destinationFieldText !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldText = this._destinationFieldText;
    }
    if (this._jsonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKey = this._jsonKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroupRuleSubgroupsRulesJsonExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._description = undefined;
      this._destinationField = undefined;
      this._destinationFieldText = undefined;
      this._jsonKey = undefined;
      this._name = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._description = value.description;
      this._destinationField = value.destinationField;
      this._destinationFieldText = value.destinationFieldText;
      this._jsonKey = value.jsonKey;
      this._name = value.name;
      this._order = value.order;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_field - computed: false, optional: false, required: true
  private _destinationField?: string; 
  public get destinationField() {
    return this.getStringAttribute('destination_field');
  }
  public set destinationField(value: string) {
    this._destinationField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldInput() {
    return this._destinationField;
  }

  // destination_field_text - computed: false, optional: true, required: false
  private _destinationFieldText?: string; 
  public get destinationFieldText() {
    return this.getStringAttribute('destination_field_text');
  }
  public set destinationFieldText(value: string) {
    this._destinationFieldText = value;
  }
  public resetDestinationFieldText() {
    this._destinationFieldText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldTextInput() {
    return this._destinationFieldText;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // json_key - computed: false, optional: false, required: true
  private _jsonKey?: string; 
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface RulesGroupRuleSubgroupsRulesJsonStringify {
  /**
  * Determines whether to rule will be active or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#active RulesGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#description RulesGroup#description}
  */
  readonly description?: string;
  /**
  * The field that will be populated by the results of the RegEx operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#destination_field RulesGroup#destination_field}
  */
  readonly destinationField: string;
  /**
  * Determines whether to keep or to delete the source field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#keep_source_field RulesGroup#keep_source_field}
  */
  readonly keepSourceField?: boolean | cdktf.IResolvable;
  /**
  * The rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#name RulesGroup#name}
  */
  readonly name: string;
  /**
  * Determines the index of the rule inside the rule-subgroup.If not set, will be computed by the order it was declared. (1 based indexing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#order RulesGroup#order}
  */
  readonly order?: number;
  /**
  * The field on which the Regex will operate on. Accepts lowercase only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#source_field RulesGroup#source_field}
  */
  readonly sourceField: string;
}

export function rulesGroupRuleSubgroupsRulesJsonStringifyToTerraform(struct?: RulesGroupRuleSubgroupsRulesJsonStringifyOutputReference | RulesGroupRuleSubgroupsRulesJsonStringify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    description: cdktf.stringToTerraform(struct!.description),
    destination_field: cdktf.stringToTerraform(struct!.destinationField),
    keep_source_field: cdktf.booleanToTerraform(struct!.keepSourceField),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
  }
}


export function rulesGroupRuleSubgroupsRulesJsonStringifyToHclTerraform(struct?: RulesGroupRuleSubgroupsRulesJsonStringifyOutputReference | RulesGroupRuleSubgroupsRulesJsonStringify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field: {
      value: cdktf.stringToHclTerraform(struct!.destinationField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_source_field: {
      value: cdktf.booleanToHclTerraform(struct!.keepSourceField),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_field: {
      value: cdktf.stringToHclTerraform(struct!.sourceField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesGroupRuleSubgroupsRulesJsonStringifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesGroupRuleSubgroupsRulesJsonStringify | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationField !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationField = this._destinationField;
    }
    if (this._keepSourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepSourceField = this._keepSourceField;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._sourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceField = this._sourceField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroupRuleSubgroupsRulesJsonStringify | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._description = undefined;
      this._destinationField = undefined;
      this._keepSourceField = undefined;
      this._name = undefined;
      this._order = undefined;
      this._sourceField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._description = value.description;
      this._destinationField = value.destinationField;
      this._keepSourceField = value.keepSourceField;
      this._name = value.name;
      this._order = value.order;
      this._sourceField = value.sourceField;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_field - computed: false, optional: false, required: true
  private _destinationField?: string; 
  public get destinationField() {
    return this.getStringAttribute('destination_field');
  }
  public set destinationField(value: string) {
    this._destinationField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldInput() {
    return this._destinationField;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_source_field - computed: false, optional: true, required: false
  private _keepSourceField?: boolean | cdktf.IResolvable; 
  public get keepSourceField() {
    return this.getBooleanAttribute('keep_source_field');
  }
  public set keepSourceField(value: boolean | cdktf.IResolvable) {
    this._keepSourceField = value;
  }
  public resetKeepSourceField() {
    this._keepSourceField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepSourceFieldInput() {
    return this._keepSourceField;
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // source_field - computed: false, optional: false, required: true
  private _sourceField?: string; 
  public get sourceField() {
    return this.getStringAttribute('source_field');
  }
  public set sourceField(value: string) {
    this._sourceField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldInput() {
    return this._sourceField;
  }
}
export interface RulesGroupRuleSubgroupsRulesParse {
  /**
  * Determines whether to rule will be active or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#active RulesGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#description RulesGroup#description}
  */
  readonly description?: string;
  /**
  * The field that will be populated by the results of the RegEx operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#destination_field RulesGroup#destination_field}
  */
  readonly destinationField: string;
  /**
  * The rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#name RulesGroup#name}
  */
  readonly name: string;
  /**
  * Determines the index of the rule inside the rule-subgroup.If not set, will be computed by the order it was declared. (1 based indexing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#order RulesGroup#order}
  */
  readonly order?: number;
  /**
  * Regular expiration. More info: https://coralogix.com/blog/regex-101/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#regular_expression RulesGroup#regular_expression}
  */
  readonly regularExpression: string;
  /**
  * The field on which the Regex will operate on. Accepts lowercase only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#source_field RulesGroup#source_field}
  */
  readonly sourceField: string;
}

export function rulesGroupRuleSubgroupsRulesParseToTerraform(struct?: RulesGroupRuleSubgroupsRulesParseOutputReference | RulesGroupRuleSubgroupsRulesParse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    description: cdktf.stringToTerraform(struct!.description),
    destination_field: cdktf.stringToTerraform(struct!.destinationField),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    regular_expression: cdktf.stringToTerraform(struct!.regularExpression),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
  }
}


export function rulesGroupRuleSubgroupsRulesParseToHclTerraform(struct?: RulesGroupRuleSubgroupsRulesParseOutputReference | RulesGroupRuleSubgroupsRulesParse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field: {
      value: cdktf.stringToHclTerraform(struct!.destinationField),
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regular_expression: {
      value: cdktf.stringToHclTerraform(struct!.regularExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field: {
      value: cdktf.stringToHclTerraform(struct!.sourceField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesGroupRuleSubgroupsRulesParseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesGroupRuleSubgroupsRulesParse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationField !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationField = this._destinationField;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._regularExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularExpression = this._regularExpression;
    }
    if (this._sourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceField = this._sourceField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroupRuleSubgroupsRulesParse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._description = undefined;
      this._destinationField = undefined;
      this._name = undefined;
      this._order = undefined;
      this._regularExpression = undefined;
      this._sourceField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._description = value.description;
      this._destinationField = value.destinationField;
      this._name = value.name;
      this._order = value.order;
      this._regularExpression = value.regularExpression;
      this._sourceField = value.sourceField;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_field - computed: false, optional: false, required: true
  private _destinationField?: string; 
  public get destinationField() {
    return this.getStringAttribute('destination_field');
  }
  public set destinationField(value: string) {
    this._destinationField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldInput() {
    return this._destinationField;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // regular_expression - computed: false, optional: false, required: true
  private _regularExpression?: string; 
  public get regularExpression() {
    return this.getStringAttribute('regular_expression');
  }
  public set regularExpression(value: string) {
    this._regularExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regularExpressionInput() {
    return this._regularExpression;
  }

  // source_field - computed: false, optional: false, required: true
  private _sourceField?: string; 
  public get sourceField() {
    return this.getStringAttribute('source_field');
  }
  public set sourceField(value: string) {
    this._sourceField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldInput() {
    return this._sourceField;
  }
}
export interface RulesGroupRuleSubgroupsRulesParseJsonField {
  /**
  * Determines whether to rule will be active or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#active RulesGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#description RulesGroup#description}
  */
  readonly description?: string;
  /**
  * The field that will be populated by the results of the RegEx operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#destination_field RulesGroup#destination_field}
  */
  readonly destinationField: string;
  /**
  * Determines whether to keep or to delete the destination field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#keep_destination_field RulesGroup#keep_destination_field}
  */
  readonly keepDestinationField?: boolean | cdktf.IResolvable;
  /**
  * Determines whether to keep or to delete the source field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#keep_source_field RulesGroup#keep_source_field}
  */
  readonly keepSourceField?: boolean | cdktf.IResolvable;
  /**
  * The rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#name RulesGroup#name}
  */
  readonly name: string;
  /**
  * Determines the index of the rule inside the rule-subgroup.If not set, will be computed by the order it was declared. (1 based indexing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#order RulesGroup#order}
  */
  readonly order?: number;
  /**
  * The field on which the Regex will operate on. Accepts lowercase only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#source_field RulesGroup#source_field}
  */
  readonly sourceField: string;
}

export function rulesGroupRuleSubgroupsRulesParseJsonFieldToTerraform(struct?: RulesGroupRuleSubgroupsRulesParseJsonFieldOutputReference | RulesGroupRuleSubgroupsRulesParseJsonField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    description: cdktf.stringToTerraform(struct!.description),
    destination_field: cdktf.stringToTerraform(struct!.destinationField),
    keep_destination_field: cdktf.booleanToTerraform(struct!.keepDestinationField),
    keep_source_field: cdktf.booleanToTerraform(struct!.keepSourceField),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
  }
}


export function rulesGroupRuleSubgroupsRulesParseJsonFieldToHclTerraform(struct?: RulesGroupRuleSubgroupsRulesParseJsonFieldOutputReference | RulesGroupRuleSubgroupsRulesParseJsonField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field: {
      value: cdktf.stringToHclTerraform(struct!.destinationField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_destination_field: {
      value: cdktf.booleanToHclTerraform(struct!.keepDestinationField),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_source_field: {
      value: cdktf.booleanToHclTerraform(struct!.keepSourceField),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_field: {
      value: cdktf.stringToHclTerraform(struct!.sourceField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesGroupRuleSubgroupsRulesParseJsonFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesGroupRuleSubgroupsRulesParseJsonField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationField !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationField = this._destinationField;
    }
    if (this._keepDestinationField !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDestinationField = this._keepDestinationField;
    }
    if (this._keepSourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepSourceField = this._keepSourceField;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._sourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceField = this._sourceField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroupRuleSubgroupsRulesParseJsonField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._description = undefined;
      this._destinationField = undefined;
      this._keepDestinationField = undefined;
      this._keepSourceField = undefined;
      this._name = undefined;
      this._order = undefined;
      this._sourceField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._description = value.description;
      this._destinationField = value.destinationField;
      this._keepDestinationField = value.keepDestinationField;
      this._keepSourceField = value.keepSourceField;
      this._name = value.name;
      this._order = value.order;
      this._sourceField = value.sourceField;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_field - computed: false, optional: false, required: true
  private _destinationField?: string; 
  public get destinationField() {
    return this.getStringAttribute('destination_field');
  }
  public set destinationField(value: string) {
    this._destinationField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldInput() {
    return this._destinationField;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_destination_field - computed: false, optional: true, required: false
  private _keepDestinationField?: boolean | cdktf.IResolvable; 
  public get keepDestinationField() {
    return this.getBooleanAttribute('keep_destination_field');
  }
  public set keepDestinationField(value: boolean | cdktf.IResolvable) {
    this._keepDestinationField = value;
  }
  public resetKeepDestinationField() {
    this._keepDestinationField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDestinationFieldInput() {
    return this._keepDestinationField;
  }

  // keep_source_field - computed: false, optional: true, required: false
  private _keepSourceField?: boolean | cdktf.IResolvable; 
  public get keepSourceField() {
    return this.getBooleanAttribute('keep_source_field');
  }
  public set keepSourceField(value: boolean | cdktf.IResolvable) {
    this._keepSourceField = value;
  }
  public resetKeepSourceField() {
    this._keepSourceField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepSourceFieldInput() {
    return this._keepSourceField;
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // source_field - computed: false, optional: false, required: true
  private _sourceField?: string; 
  public get sourceField() {
    return this.getStringAttribute('source_field');
  }
  public set sourceField(value: string) {
    this._sourceField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldInput() {
    return this._sourceField;
  }
}
export interface RulesGroupRuleSubgroupsRulesRemoveFields {
  /**
  * Determines whether to rule will be active or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#active RulesGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#description RulesGroup#description}
  */
  readonly description?: string;
  /**
  * Excluded fields won't be indexed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#excluded_fields RulesGroup#excluded_fields}
  */
  readonly excludedFields: string[];
  /**
  * The rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#name RulesGroup#name}
  */
  readonly name: string;
  /**
  * Determines the index of the rule inside the rule-subgroup.If not set, will be computed by the order it was declared. (1 based indexing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#order RulesGroup#order}
  */
  readonly order?: number;
}

export function rulesGroupRuleSubgroupsRulesRemoveFieldsToTerraform(struct?: RulesGroupRuleSubgroupsRulesRemoveFieldsOutputReference | RulesGroupRuleSubgroupsRulesRemoveFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    description: cdktf.stringToTerraform(struct!.description),
    excluded_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedFields),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function rulesGroupRuleSubgroupsRulesRemoveFieldsToHclTerraform(struct?: RulesGroupRuleSubgroupsRulesRemoveFieldsOutputReference | RulesGroupRuleSubgroupsRulesRemoveFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excluded_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesGroupRuleSubgroupsRulesRemoveFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesGroupRuleSubgroupsRulesRemoveFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._excludedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedFields = this._excludedFields;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroupRuleSubgroupsRulesRemoveFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._description = undefined;
      this._excludedFields = undefined;
      this._name = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._description = value.description;
      this._excludedFields = value.excludedFields;
      this._name = value.name;
      this._order = value.order;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // excluded_fields - computed: false, optional: false, required: true
  private _excludedFields?: string[]; 
  public get excludedFields() {
    return this.getListAttribute('excluded_fields');
  }
  public set excludedFields(value: string[]) {
    this._excludedFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedFieldsInput() {
    return this._excludedFields;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface RulesGroupRuleSubgroupsRulesReplace {
  /**
  * Determines whether to rule will be active or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#active RulesGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#description RulesGroup#description}
  */
  readonly description?: string;
  /**
  * The field that will be populated by the results of the RegEx operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#destination_field RulesGroup#destination_field}
  */
  readonly destinationField: string;
  /**
  * The rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#name RulesGroup#name}
  */
  readonly name: string;
  /**
  * Determines the index of the rule inside the rule-subgroup.If not set, will be computed by the order it was declared. (1 based indexing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#order RulesGroup#order}
  */
  readonly order?: number;
  /**
  * Regular expiration. More info: https://coralogix.com/blog/regex-101/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#regular_expression RulesGroup#regular_expression}
  */
  readonly regularExpression: string;
  /**
  * The string that will replace the matched RegEx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#replacement_string RulesGroup#replacement_string}
  */
  readonly replacementString?: string;
  /**
  * The field on which the Regex will operate on. Accepts lowercase only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#source_field RulesGroup#source_field}
  */
  readonly sourceField: string;
}

export function rulesGroupRuleSubgroupsRulesReplaceToTerraform(struct?: RulesGroupRuleSubgroupsRulesReplaceOutputReference | RulesGroupRuleSubgroupsRulesReplace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    description: cdktf.stringToTerraform(struct!.description),
    destination_field: cdktf.stringToTerraform(struct!.destinationField),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    regular_expression: cdktf.stringToTerraform(struct!.regularExpression),
    replacement_string: cdktf.stringToTerraform(struct!.replacementString),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
  }
}


export function rulesGroupRuleSubgroupsRulesReplaceToHclTerraform(struct?: RulesGroupRuleSubgroupsRulesReplaceOutputReference | RulesGroupRuleSubgroupsRulesReplace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field: {
      value: cdktf.stringToHclTerraform(struct!.destinationField),
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regular_expression: {
      value: cdktf.stringToHclTerraform(struct!.regularExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement_string: {
      value: cdktf.stringToHclTerraform(struct!.replacementString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field: {
      value: cdktf.stringToHclTerraform(struct!.sourceField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesGroupRuleSubgroupsRulesReplaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulesGroupRuleSubgroupsRulesReplace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationField !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationField = this._destinationField;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._regularExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularExpression = this._regularExpression;
    }
    if (this._replacementString !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementString = this._replacementString;
    }
    if (this._sourceField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceField = this._sourceField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroupRuleSubgroupsRulesReplace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._description = undefined;
      this._destinationField = undefined;
      this._name = undefined;
      this._order = undefined;
      this._regularExpression = undefined;
      this._replacementString = undefined;
      this._sourceField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._description = value.description;
      this._destinationField = value.destinationField;
      this._name = value.name;
      this._order = value.order;
      this._regularExpression = value.regularExpression;
      this._replacementString = value.replacementString;
      this._sourceField = value.sourceField;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_field - computed: false, optional: false, required: true
  private _destinationField?: string; 
  public get destinationField() {
    return this.getStringAttribute('destination_field');
  }
  public set destinationField(value: string) {
    this._destinationField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldInput() {
    return this._destinationField;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // regular_expression - computed: false, optional: false, required: true
  private _regularExpression?: string; 
  public get regularExpression() {
    return this.getStringAttribute('regular_expression');
  }
  public set regularExpression(value: string) {
    this._regularExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regularExpressionInput() {
    return this._regularExpression;
  }

  // replacement_string - computed: false, optional: true, required: false
  private _replacementString?: string; 
  public get replacementString() {
    return this.getStringAttribute('replacement_string');
  }
  public set replacementString(value: string) {
    this._replacementString = value;
  }
  public resetReplacementString() {
    this._replacementString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementStringInput() {
    return this._replacementString;
  }

  // source_field - computed: false, optional: false, required: true
  private _sourceField?: string; 
  public get sourceField() {
    return this.getStringAttribute('source_field');
  }
  public set sourceField(value: string) {
    this._sourceField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldInput() {
    return this._sourceField;
  }
}
export interface RulesGroupRuleSubgroupsRules {
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#block RulesGroup#block}
  */
  readonly block?: RulesGroupRuleSubgroupsRulesBlock;
  /**
  * extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#extract RulesGroup#extract}
  */
  readonly extract?: RulesGroupRuleSubgroupsRulesExtract;
  /**
  * extract_timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#extract_timestamp RulesGroup#extract_timestamp}
  */
  readonly extractTimestamp?: RulesGroupRuleSubgroupsRulesExtractTimestamp;
  /**
  * json_extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#json_extract RulesGroup#json_extract}
  */
  readonly jsonExtract?: RulesGroupRuleSubgroupsRulesJsonExtract;
  /**
  * json_stringify block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#json_stringify RulesGroup#json_stringify}
  */
  readonly jsonStringify?: RulesGroupRuleSubgroupsRulesJsonStringify;
  /**
  * parse block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#parse RulesGroup#parse}
  */
  readonly parse?: RulesGroupRuleSubgroupsRulesParse;
  /**
  * parse_json_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#parse_json_field RulesGroup#parse_json_field}
  */
  readonly parseJsonField?: RulesGroupRuleSubgroupsRulesParseJsonField;
  /**
  * remove_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#remove_fields RulesGroup#remove_fields}
  */
  readonly removeFields?: RulesGroupRuleSubgroupsRulesRemoveFields;
  /**
  * replace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#replace RulesGroup#replace}
  */
  readonly replace?: RulesGroupRuleSubgroupsRulesReplace;
}

export function rulesGroupRuleSubgroupsRulesToTerraform(struct?: RulesGroupRuleSubgroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: rulesGroupRuleSubgroupsRulesBlockToTerraform(struct!.block),
    extract: rulesGroupRuleSubgroupsRulesExtractToTerraform(struct!.extract),
    extract_timestamp: rulesGroupRuleSubgroupsRulesExtractTimestampToTerraform(struct!.extractTimestamp),
    json_extract: rulesGroupRuleSubgroupsRulesJsonExtractToTerraform(struct!.jsonExtract),
    json_stringify: rulesGroupRuleSubgroupsRulesJsonStringifyToTerraform(struct!.jsonStringify),
    parse: rulesGroupRuleSubgroupsRulesParseToTerraform(struct!.parse),
    parse_json_field: rulesGroupRuleSubgroupsRulesParseJsonFieldToTerraform(struct!.parseJsonField),
    remove_fields: rulesGroupRuleSubgroupsRulesRemoveFieldsToTerraform(struct!.removeFields),
    replace: rulesGroupRuleSubgroupsRulesReplaceToTerraform(struct!.replace),
  }
}


export function rulesGroupRuleSubgroupsRulesToHclTerraform(struct?: RulesGroupRuleSubgroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: rulesGroupRuleSubgroupsRulesBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "RulesGroupRuleSubgroupsRulesBlockList",
    },
    extract: {
      value: rulesGroupRuleSubgroupsRulesExtractToHclTerraform(struct!.extract),
      isBlock: true,
      type: "list",
      storageClassType: "RulesGroupRuleSubgroupsRulesExtractList",
    },
    extract_timestamp: {
      value: rulesGroupRuleSubgroupsRulesExtractTimestampToHclTerraform(struct!.extractTimestamp),
      isBlock: true,
      type: "list",
      storageClassType: "RulesGroupRuleSubgroupsRulesExtractTimestampList",
    },
    json_extract: {
      value: rulesGroupRuleSubgroupsRulesJsonExtractToHclTerraform(struct!.jsonExtract),
      isBlock: true,
      type: "list",
      storageClassType: "RulesGroupRuleSubgroupsRulesJsonExtractList",
    },
    json_stringify: {
      value: rulesGroupRuleSubgroupsRulesJsonStringifyToHclTerraform(struct!.jsonStringify),
      isBlock: true,
      type: "list",
      storageClassType: "RulesGroupRuleSubgroupsRulesJsonStringifyList",
    },
    parse: {
      value: rulesGroupRuleSubgroupsRulesParseToHclTerraform(struct!.parse),
      isBlock: true,
      type: "list",
      storageClassType: "RulesGroupRuleSubgroupsRulesParseList",
    },
    parse_json_field: {
      value: rulesGroupRuleSubgroupsRulesParseJsonFieldToHclTerraform(struct!.parseJsonField),
      isBlock: true,
      type: "list",
      storageClassType: "RulesGroupRuleSubgroupsRulesParseJsonFieldList",
    },
    remove_fields: {
      value: rulesGroupRuleSubgroupsRulesRemoveFieldsToHclTerraform(struct!.removeFields),
      isBlock: true,
      type: "list",
      storageClassType: "RulesGroupRuleSubgroupsRulesRemoveFieldsList",
    },
    replace: {
      value: rulesGroupRuleSubgroupsRulesReplaceToHclTerraform(struct!.replace),
      isBlock: true,
      type: "list",
      storageClassType: "RulesGroupRuleSubgroupsRulesReplaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesGroupRuleSubgroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesGroupRuleSubgroupsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._extract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extract = this._extract?.internalValue;
    }
    if (this._extractTimestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractTimestamp = this._extractTimestamp?.internalValue;
    }
    if (this._jsonExtract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonExtract = this._jsonExtract?.internalValue;
    }
    if (this._jsonStringify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonStringify = this._jsonStringify?.internalValue;
    }
    if (this._parse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parse = this._parse?.internalValue;
    }
    if (this._parseJsonField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseJsonField = this._parseJsonField?.internalValue;
    }
    if (this._removeFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFields = this._removeFields?.internalValue;
    }
    if (this._replace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroupRuleSubgroupsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._block.internalValue = undefined;
      this._extract.internalValue = undefined;
      this._extractTimestamp.internalValue = undefined;
      this._jsonExtract.internalValue = undefined;
      this._jsonStringify.internalValue = undefined;
      this._parse.internalValue = undefined;
      this._parseJsonField.internalValue = undefined;
      this._removeFields.internalValue = undefined;
      this._replace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._block.internalValue = value.block;
      this._extract.internalValue = value.extract;
      this._extractTimestamp.internalValue = value.extractTimestamp;
      this._jsonExtract.internalValue = value.jsonExtract;
      this._jsonStringify.internalValue = value.jsonStringify;
      this._parse.internalValue = value.parse;
      this._parseJsonField.internalValue = value.parseJsonField;
      this._removeFields.internalValue = value.removeFields;
      this._replace.internalValue = value.replace;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block = new RulesGroupRuleSubgroupsRulesBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: RulesGroupRuleSubgroupsRulesBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // extract - computed: false, optional: true, required: false
  private _extract = new RulesGroupRuleSubgroupsRulesExtractOutputReference(this, "extract");
  public get extract() {
    return this._extract;
  }
  public putExtract(value: RulesGroupRuleSubgroupsRulesExtract) {
    this._extract.internalValue = value;
  }
  public resetExtract() {
    this._extract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract.internalValue;
  }

  // extract_timestamp - computed: false, optional: true, required: false
  private _extractTimestamp = new RulesGroupRuleSubgroupsRulesExtractTimestampOutputReference(this, "extract_timestamp");
  public get extractTimestamp() {
    return this._extractTimestamp;
  }
  public putExtractTimestamp(value: RulesGroupRuleSubgroupsRulesExtractTimestamp) {
    this._extractTimestamp.internalValue = value;
  }
  public resetExtractTimestamp() {
    this._extractTimestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractTimestampInput() {
    return this._extractTimestamp.internalValue;
  }

  // json_extract - computed: false, optional: true, required: false
  private _jsonExtract = new RulesGroupRuleSubgroupsRulesJsonExtractOutputReference(this, "json_extract");
  public get jsonExtract() {
    return this._jsonExtract;
  }
  public putJsonExtract(value: RulesGroupRuleSubgroupsRulesJsonExtract) {
    this._jsonExtract.internalValue = value;
  }
  public resetJsonExtract() {
    this._jsonExtract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonExtractInput() {
    return this._jsonExtract.internalValue;
  }

  // json_stringify - computed: false, optional: true, required: false
  private _jsonStringify = new RulesGroupRuleSubgroupsRulesJsonStringifyOutputReference(this, "json_stringify");
  public get jsonStringify() {
    return this._jsonStringify;
  }
  public putJsonStringify(value: RulesGroupRuleSubgroupsRulesJsonStringify) {
    this._jsonStringify.internalValue = value;
  }
  public resetJsonStringify() {
    this._jsonStringify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonStringifyInput() {
    return this._jsonStringify.internalValue;
  }

  // parse - computed: false, optional: true, required: false
  private _parse = new RulesGroupRuleSubgroupsRulesParseOutputReference(this, "parse");
  public get parse() {
    return this._parse;
  }
  public putParse(value: RulesGroupRuleSubgroupsRulesParse) {
    this._parse.internalValue = value;
  }
  public resetParse() {
    this._parse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseInput() {
    return this._parse.internalValue;
  }

  // parse_json_field - computed: false, optional: true, required: false
  private _parseJsonField = new RulesGroupRuleSubgroupsRulesParseJsonFieldOutputReference(this, "parse_json_field");
  public get parseJsonField() {
    return this._parseJsonField;
  }
  public putParseJsonField(value: RulesGroupRuleSubgroupsRulesParseJsonField) {
    this._parseJsonField.internalValue = value;
  }
  public resetParseJsonField() {
    this._parseJsonField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseJsonFieldInput() {
    return this._parseJsonField.internalValue;
  }

  // remove_fields - computed: false, optional: true, required: false
  private _removeFields = new RulesGroupRuleSubgroupsRulesRemoveFieldsOutputReference(this, "remove_fields");
  public get removeFields() {
    return this._removeFields;
  }
  public putRemoveFields(value: RulesGroupRuleSubgroupsRulesRemoveFields) {
    this._removeFields.internalValue = value;
  }
  public resetRemoveFields() {
    this._removeFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFieldsInput() {
    return this._removeFields.internalValue;
  }

  // replace - computed: false, optional: true, required: false
  private _replace = new RulesGroupRuleSubgroupsRulesReplaceOutputReference(this, "replace");
  public get replace() {
    return this._replace;
  }
  public putReplace(value: RulesGroupRuleSubgroupsRulesReplace) {
    this._replace.internalValue = value;
  }
  public resetReplace() {
    this._replace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace.internalValue;
  }
}

export class RulesGroupRuleSubgroupsRulesList extends cdktf.ComplexList {
  public internalValue? : RulesGroupRuleSubgroupsRules[] | cdktf.IResolvable

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
  public get(index: number): RulesGroupRuleSubgroupsRulesOutputReference {
    return new RulesGroupRuleSubgroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesGroupRuleSubgroups {
  /**
  * Determines whether the rule-subgroup will be active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#active RulesGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Determines the index of the rule-subgroup inside the rule-group.When not set, will be computed by the order it was declared. (1 based indexing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#order RulesGroup#order}
  */
  readonly order?: number;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#rules RulesGroup#rules}
  */
  readonly rules: RulesGroupRuleSubgroupsRules[] | cdktf.IResolvable;
}

export function rulesGroupRuleSubgroupsToTerraform(struct?: RulesGroupRuleSubgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    order: cdktf.numberToTerraform(struct!.order),
    rules: cdktf.listMapper(rulesGroupRuleSubgroupsRulesToTerraform, true)(struct!.rules),
  }
}


export function rulesGroupRuleSubgroupsToHclTerraform(struct?: RulesGroupRuleSubgroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rules: {
      value: cdktf.listMapperHcl(rulesGroupRuleSubgroupsRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "RulesGroupRuleSubgroupsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulesGroupRuleSubgroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesGroupRuleSubgroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroupRuleSubgroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._order = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._order = value.order;
      this._rules.internalValue = value.rules;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new RulesGroupRuleSubgroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RulesGroupRuleSubgroupsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class RulesGroupRuleSubgroupsList extends cdktf.ComplexList {
  public internalValue? : RulesGroupRuleSubgroups[] | cdktf.IResolvable

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
  public get(index: number): RulesGroupRuleSubgroupsOutputReference {
    return new RulesGroupRuleSubgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#create RulesGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#delete RulesGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#read RulesGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#update RulesGroup#update}
  */
  readonly update?: string;
}

export function rulesGroupTimeoutsToTerraform(struct?: RulesGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function rulesGroupTimeoutsToHclTerraform(struct?: RulesGroupTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class RulesGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RulesGroupTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group coralogix_rules_group}
*/
export class RulesGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_rules_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RulesGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RulesGroup to import
  * @param importFromId The id of the existing RulesGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RulesGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_rules_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/resources/rules_group coralogix_rules_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RulesGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RulesGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_rules_group',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.1',
        providerVersionConstraint: '3.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._applications = config.applications;
    this._creator = config.creator;
    this._description = config.description;
    this._hidden = config.hidden;
    this._id = config.id;
    this._name = config.name;
    this._order = config.order;
    this._severities = config.severities;
    this._subsystems = config.subsystems;
    this._ruleSubgroups.internalValue = config.ruleSubgroups;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // creator - computed: false, optional: true, required: false
  private _creator?: string; 
  public get creator() {
    return this.getStringAttribute('creator');
  }
  public set creator(value: string) {
    this._creator = value;
  }
  public resetCreator() {
    this._creator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorInput() {
    return this._creator;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // severities - computed: false, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // subsystems - computed: false, optional: true, required: false
  private _subsystems?: string[]; 
  public get subsystems() {
    return cdktf.Fn.tolist(this.getListAttribute('subsystems'));
  }
  public set subsystems(value: string[]) {
    this._subsystems = value;
  }
  public resetSubsystems() {
    this._subsystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemsInput() {
    return this._subsystems;
  }

  // rule_subgroups - computed: false, optional: true, required: false
  private _ruleSubgroups = new RulesGroupRuleSubgroupsList(this, "rule_subgroups", false);
  public get ruleSubgroups() {
    return this._ruleSubgroups;
  }
  public putRuleSubgroups(value: RulesGroupRuleSubgroups[] | cdktf.IResolvable) {
    this._ruleSubgroups.internalValue = value;
  }
  public resetRuleSubgroups() {
    this._ruleSubgroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSubgroupsInput() {
    return this._ruleSubgroups.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RulesGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RulesGroupTimeouts) {
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
      active: cdktf.booleanToTerraform(this._active),
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      creator: cdktf.stringToTerraform(this._creator),
      description: cdktf.stringToTerraform(this._description),
      hidden: cdktf.booleanToTerraform(this._hidden),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severities),
      subsystems: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subsystems),
      rule_subgroups: cdktf.listMapper(rulesGroupRuleSubgroupsToTerraform, true)(this._ruleSubgroups.internalValue),
      timeouts: rulesGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      creator: {
        value: cdktf.stringToHclTerraform(this._creator),
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
      hidden: {
        value: cdktf.booleanToHclTerraform(this._hidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subsystems: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subsystems),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rule_subgroups: {
        value: cdktf.listMapperHcl(rulesGroupRuleSubgroupsToHclTerraform, true)(this._ruleSubgroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RulesGroupRuleSubgroupsList",
      },
      timeouts: {
        value: rulesGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RulesGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
