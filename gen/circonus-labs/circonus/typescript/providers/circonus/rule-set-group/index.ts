// https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleSetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#id RuleSetGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#name RuleSetGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#tags RuleSetGroup#tags}
  */
  readonly tags?: string[];
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#condition RuleSetGroup#condition}
  */
  readonly condition: RuleSetGroupCondition[] | cdktf.IResolvable;
  /**
  * formula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#formula RuleSetGroup#formula}
  */
  readonly formula: RuleSetGroupFormula[] | cdktf.IResolvable;
  /**
  * notify block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#notify RuleSetGroup#notify}
  */
  readonly notify?: RuleSetGroupNotify[] | cdktf.IResolvable;
}
export interface RuleSetGroupCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#index RuleSetGroup#index}
  */
  readonly index: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#matching_severities RuleSetGroup#matching_severities}
  */
  readonly matchingSeverities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#rule_set RuleSetGroup#rule_set}
  */
  readonly ruleSet: string;
}

export function ruleSetGroupConditionToTerraform(struct?: RuleSetGroupCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    matching_severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchingSeverities),
    rule_set: cdktf.stringToTerraform(struct!.ruleSet),
  }
}


export function ruleSetGroupConditionToHclTerraform(struct?: RuleSetGroupCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    matching_severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchingSeverities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_set: {
      value: cdktf.stringToHclTerraform(struct!.ruleSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetGroupConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleSetGroupCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._matchingSeverities !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingSeverities = this._matchingSeverities;
    }
    if (this._ruleSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSet = this._ruleSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetGroupCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._matchingSeverities = undefined;
      this._ruleSet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._matchingSeverities = value.matchingSeverities;
      this._ruleSet = value.ruleSet;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // matching_severities - computed: false, optional: false, required: true
  private _matchingSeverities?: string[]; 
  public get matchingSeverities() {
    return this.getListAttribute('matching_severities');
  }
  public set matchingSeverities(value: string[]) {
    this._matchingSeverities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingSeveritiesInput() {
    return this._matchingSeverities;
  }

  // rule_set - computed: false, optional: false, required: true
  private _ruleSet?: string; 
  public get ruleSet() {
    return this.getStringAttribute('rule_set');
  }
  public set ruleSet(value: string) {
    this._ruleSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet;
  }
}

export class RuleSetGroupConditionList extends cdktf.ComplexList {
  public internalValue? : RuleSetGroupCondition[] | cdktf.IResolvable

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
  public get(index: number): RuleSetGroupConditionOutputReference {
    return new RuleSetGroupConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleSetGroupFormula {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#expression RuleSetGroup#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#raise_severity RuleSetGroup#raise_severity}
  */
  readonly raiseSeverity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#wait RuleSetGroup#wait}
  */
  readonly wait: number;
}

export function ruleSetGroupFormulaToTerraform(struct?: RuleSetGroupFormula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    raise_severity: cdktf.numberToTerraform(struct!.raiseSeverity),
    wait: cdktf.numberToTerraform(struct!.wait),
  }
}


export function ruleSetGroupFormulaToHclTerraform(struct?: RuleSetGroupFormula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raise_severity: {
      value: cdktf.numberToHclTerraform(struct!.raiseSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait: {
      value: cdktf.numberToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetGroupFormulaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleSetGroupFormula | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._raiseSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.raiseSeverity = this._raiseSeverity;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetGroupFormula | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._raiseSeverity = undefined;
      this._wait = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._raiseSeverity = value.raiseSeverity;
      this._wait = value.wait;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // raise_severity - computed: false, optional: false, required: true
  private _raiseSeverity?: number; 
  public get raiseSeverity() {
    return this.getNumberAttribute('raise_severity');
  }
  public set raiseSeverity(value: number) {
    this._raiseSeverity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get raiseSeverityInput() {
    return this._raiseSeverity;
  }

  // wait - computed: false, optional: false, required: true
  private _wait?: number; 
  public get wait() {
    return this.getNumberAttribute('wait');
  }
  public set wait(value: number) {
    this._wait = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }
}

export class RuleSetGroupFormulaList extends cdktf.ComplexList {
  public internalValue? : RuleSetGroupFormula[] | cdktf.IResolvable

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
  public get(index: number): RuleSetGroupFormulaOutputReference {
    return new RuleSetGroupFormulaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleSetGroupNotify {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#sev1 RuleSetGroup#sev1}
  */
  readonly sev1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#sev2 RuleSetGroup#sev2}
  */
  readonly sev2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#sev3 RuleSetGroup#sev3}
  */
  readonly sev3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#sev4 RuleSetGroup#sev4}
  */
  readonly sev4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#sev5 RuleSetGroup#sev5}
  */
  readonly sev5?: string[];
}

export function ruleSetGroupNotifyToTerraform(struct?: RuleSetGroupNotify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sev1: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sev1),
    sev2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sev2),
    sev3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sev3),
    sev4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sev4),
    sev5: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sev5),
  }
}


export function ruleSetGroupNotifyToHclTerraform(struct?: RuleSetGroupNotify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sev1: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sev1),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sev2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sev2),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sev3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sev3),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sev4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sev4),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sev5: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sev5),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetGroupNotifyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleSetGroupNotify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sev1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sev1 = this._sev1;
    }
    if (this._sev2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sev2 = this._sev2;
    }
    if (this._sev3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sev3 = this._sev3;
    }
    if (this._sev4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sev4 = this._sev4;
    }
    if (this._sev5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sev5 = this._sev5;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetGroupNotify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sev1 = undefined;
      this._sev2 = undefined;
      this._sev3 = undefined;
      this._sev4 = undefined;
      this._sev5 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sev1 = value.sev1;
      this._sev2 = value.sev2;
      this._sev3 = value.sev3;
      this._sev4 = value.sev4;
      this._sev5 = value.sev5;
    }
  }

  // sev1 - computed: false, optional: true, required: false
  private _sev1?: string[]; 
  public get sev1() {
    return this.getListAttribute('sev1');
  }
  public set sev1(value: string[]) {
    this._sev1 = value;
  }
  public resetSev1() {
    this._sev1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sev1Input() {
    return this._sev1;
  }

  // sev2 - computed: false, optional: true, required: false
  private _sev2?: string[]; 
  public get sev2() {
    return this.getListAttribute('sev2');
  }
  public set sev2(value: string[]) {
    this._sev2 = value;
  }
  public resetSev2() {
    this._sev2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sev2Input() {
    return this._sev2;
  }

  // sev3 - computed: false, optional: true, required: false
  private _sev3?: string[]; 
  public get sev3() {
    return this.getListAttribute('sev3');
  }
  public set sev3(value: string[]) {
    this._sev3 = value;
  }
  public resetSev3() {
    this._sev3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sev3Input() {
    return this._sev3;
  }

  // sev4 - computed: false, optional: true, required: false
  private _sev4?: string[]; 
  public get sev4() {
    return this.getListAttribute('sev4');
  }
  public set sev4(value: string[]) {
    this._sev4 = value;
  }
  public resetSev4() {
    this._sev4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sev4Input() {
    return this._sev4;
  }

  // sev5 - computed: false, optional: true, required: false
  private _sev5?: string[]; 
  public get sev5() {
    return this.getListAttribute('sev5');
  }
  public set sev5(value: string[]) {
    this._sev5 = value;
  }
  public resetSev5() {
    this._sev5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sev5Input() {
    return this._sev5;
  }
}

export class RuleSetGroupNotifyList extends cdktf.ComplexList {
  public internalValue? : RuleSetGroupNotify[] | cdktf.IResolvable

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
  public get(index: number): RuleSetGroupNotifyOutputReference {
    return new RuleSetGroupNotifyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group circonus_rule_set_group}
*/
export class RuleSetGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "circonus_rule_set_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RuleSetGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RuleSetGroup to import
  * @param importFromId The id of the existing RuleSetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RuleSetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "circonus_rule_set_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/rule_set_group circonus_rule_set_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleSetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RuleSetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'circonus_rule_set_group',
      terraformGeneratorMetadata: {
        providerName: 'circonus',
        providerVersion: '0.12.15',
        providerVersionConstraint: '0.12.15'
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
    this._name = config.name;
    this._tags = config.tags;
    this._condition.internalValue = config.condition;
    this._formula.internalValue = config.formula;
    this._notify.internalValue = config.notify;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new RuleSetGroupConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: RuleSetGroupCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // formula - computed: false, optional: false, required: true
  private _formula = new RuleSetGroupFormulaList(this, "formula", true);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: RuleSetGroupFormula[] | cdktf.IResolvable) {
    this._formula.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula.internalValue;
  }

  // notify - computed: false, optional: true, required: false
  private _notify = new RuleSetGroupNotifyList(this, "notify", true);
  public get notify() {
    return this._notify;
  }
  public putNotify(value: RuleSetGroupNotify[] | cdktf.IResolvable) {
    this._notify.internalValue = value;
  }
  public resetNotify() {
    this._notify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      condition: cdktf.listMapper(ruleSetGroupConditionToTerraform, true)(this._condition.internalValue),
      formula: cdktf.listMapper(ruleSetGroupFormulaToTerraform, true)(this._formula.internalValue),
      notify: cdktf.listMapper(ruleSetGroupNotifyToTerraform, true)(this._notify.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      condition: {
        value: cdktf.listMapperHcl(ruleSetGroupConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RuleSetGroupConditionList",
      },
      formula: {
        value: cdktf.listMapperHcl(ruleSetGroupFormulaToHclTerraform, true)(this._formula.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RuleSetGroupFormulaList",
      },
      notify: {
        value: cdktf.listMapperHcl(ruleSetGroupNotifyToHclTerraform, true)(this._notify.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RuleSetGroupNotifyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
