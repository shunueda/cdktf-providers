// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafDedicatedPreciseProtectionRuleV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#description WafDedicatedPreciseProtectionRuleV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#id WafDedicatedPreciseProtectionRuleV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#policy_id WafDedicatedPreciseProtectionRuleV1#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#priority WafDedicatedPreciseProtectionRuleV1#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#start WafDedicatedPreciseProtectionRuleV1#start}
  */
  readonly start?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#terminal WafDedicatedPreciseProtectionRuleV1#terminal}
  */
  readonly terminal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#time WafDedicatedPreciseProtectionRuleV1#time}
  */
  readonly time: boolean | cdktf.IResolvable;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#action WafDedicatedPreciseProtectionRuleV1#action}
  */
  readonly action: WafDedicatedPreciseProtectionRuleV1Action[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#conditions WafDedicatedPreciseProtectionRuleV1#conditions}
  */
  readonly conditions?: WafDedicatedPreciseProtectionRuleV1Conditions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#timeouts WafDedicatedPreciseProtectionRuleV1#timeouts}
  */
  readonly timeouts?: WafDedicatedPreciseProtectionRuleV1Timeouts;
}
export interface WafDedicatedPreciseProtectionRuleV1Action {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#followed_action_id WafDedicatedPreciseProtectionRuleV1#followed_action_id}
  */
  readonly followedActionId?: string;
}

export function wafDedicatedPreciseProtectionRuleV1ActionToTerraform(struct?: WafDedicatedPreciseProtectionRuleV1Action | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    followed_action_id: cdktf.stringToTerraform(struct!.followedActionId),
  }
}


export function wafDedicatedPreciseProtectionRuleV1ActionToHclTerraform(struct?: WafDedicatedPreciseProtectionRuleV1Action | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    followed_action_id: {
      value: cdktf.stringToHclTerraform(struct!.followedActionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafDedicatedPreciseProtectionRuleV1ActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafDedicatedPreciseProtectionRuleV1Action | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._followedActionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.followedActionId = this._followedActionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafDedicatedPreciseProtectionRuleV1Action | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._followedActionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._followedActionId = value.followedActionId;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // followed_action_id - computed: false, optional: true, required: false
  private _followedActionId?: string; 
  public get followedActionId() {
    return this.getStringAttribute('followed_action_id');
  }
  public set followedActionId(value: string) {
    this._followedActionId = value;
  }
  public resetFollowedActionId() {
    this._followedActionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followedActionIdInput() {
    return this._followedActionId;
  }
}

export class WafDedicatedPreciseProtectionRuleV1ActionList extends cdktf.ComplexList {
  public internalValue? : WafDedicatedPreciseProtectionRuleV1Action[] | cdktf.IResolvable

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
  public get(index: number): WafDedicatedPreciseProtectionRuleV1ActionOutputReference {
    return new WafDedicatedPreciseProtectionRuleV1ActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafDedicatedPreciseProtectionRuleV1Conditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#category WafDedicatedPreciseProtectionRuleV1#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#contents WafDedicatedPreciseProtectionRuleV1#contents}
  */
  readonly contents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#index WafDedicatedPreciseProtectionRuleV1#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#logic_operation WafDedicatedPreciseProtectionRuleV1#logic_operation}
  */
  readonly logicOperation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#value_list_id WafDedicatedPreciseProtectionRuleV1#value_list_id}
  */
  readonly valueListId?: string;
}

export function wafDedicatedPreciseProtectionRuleV1ConditionsToTerraform(struct?: WafDedicatedPreciseProtectionRuleV1Conditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    contents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contents),
    index: cdktf.stringToTerraform(struct!.index),
    logic_operation: cdktf.stringToTerraform(struct!.logicOperation),
    value_list_id: cdktf.stringToTerraform(struct!.valueListId),
  }
}


export function wafDedicatedPreciseProtectionRuleV1ConditionsToHclTerraform(struct?: WafDedicatedPreciseProtectionRuleV1Conditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logic_operation: {
      value: cdktf.stringToHclTerraform(struct!.logicOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_list_id: {
      value: cdktf.stringToHclTerraform(struct!.valueListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafDedicatedPreciseProtectionRuleV1Conditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._logicOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicOperation = this._logicOperation;
    }
    if (this._valueListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueListId = this._valueListId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafDedicatedPreciseProtectionRuleV1Conditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._contents = undefined;
      this._index = undefined;
      this._logicOperation = undefined;
      this._valueListId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._contents = value.contents;
      this._index = value.index;
      this._logicOperation = value.logicOperation;
      this._valueListId = value.valueListId;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // contents - computed: false, optional: true, required: false
  private _contents?: string[]; 
  public get contents() {
    return this.getListAttribute('contents');
  }
  public set contents(value: string[]) {
    this._contents = value;
  }
  public resetContents() {
    this._contents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // index - computed: false, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // logic_operation - computed: false, optional: true, required: false
  private _logicOperation?: string; 
  public get logicOperation() {
    return this.getStringAttribute('logic_operation');
  }
  public set logicOperation(value: string) {
    this._logicOperation = value;
  }
  public resetLogicOperation() {
    this._logicOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicOperationInput() {
    return this._logicOperation;
  }

  // value_list_id - computed: false, optional: true, required: false
  private _valueListId?: string; 
  public get valueListId() {
    return this.getStringAttribute('value_list_id');
  }
  public set valueListId(value: string) {
    this._valueListId = value;
  }
  public resetValueListId() {
    this._valueListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListIdInput() {
    return this._valueListId;
  }
}

export class WafDedicatedPreciseProtectionRuleV1ConditionsList extends cdktf.ComplexList {
  public internalValue? : WafDedicatedPreciseProtectionRuleV1Conditions[] | cdktf.IResolvable

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
  public get(index: number): WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference {
    return new WafDedicatedPreciseProtectionRuleV1ConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafDedicatedPreciseProtectionRuleV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#create WafDedicatedPreciseProtectionRuleV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#delete WafDedicatedPreciseProtectionRuleV1#delete}
  */
  readonly delete?: string;
}

export function wafDedicatedPreciseProtectionRuleV1TimeoutsToTerraform(struct?: WafDedicatedPreciseProtectionRuleV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function wafDedicatedPreciseProtectionRuleV1TimeoutsToHclTerraform(struct?: WafDedicatedPreciseProtectionRuleV1Timeouts | cdktf.IResolvable): any {
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

export class WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WafDedicatedPreciseProtectionRuleV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WafDedicatedPreciseProtectionRuleV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1 opentelekomcloud_waf_dedicated_precise_protection_rule_v1}
*/
export class WafDedicatedPreciseProtectionRuleV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_waf_dedicated_precise_protection_rule_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafDedicatedPreciseProtectionRuleV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafDedicatedPreciseProtectionRuleV1 to import
  * @param importFromId The id of the existing WafDedicatedPreciseProtectionRuleV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafDedicatedPreciseProtectionRuleV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_waf_dedicated_precise_protection_rule_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_dedicated_precise_protection_rule_v1 opentelekomcloud_waf_dedicated_precise_protection_rule_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafDedicatedPreciseProtectionRuleV1Config
  */
  public constructor(scope: Construct, id: string, config: WafDedicatedPreciseProtectionRuleV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_waf_dedicated_precise_protection_rule_v1',
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
    this._description = config.description;
    this._id = config.id;
    this._policyId = config.policyId;
    this._priority = config.priority;
    this._start = config.start;
    this._terminal = config.terminal;
    this._time = config.time;
    this._action.internalValue = config.action;
    this._conditions.internalValue = config.conditions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: number; 
  public get terminal() {
    return this.getNumberAttribute('terminal');
  }
  public set terminal(value: number) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }

  // time - computed: false, optional: false, required: true
  private _time?: boolean | cdktf.IResolvable; 
  public get time() {
    return this.getBooleanAttribute('time');
  }
  public set time(value: boolean | cdktf.IResolvable) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // action - computed: false, optional: false, required: true
  private _action = new WafDedicatedPreciseProtectionRuleV1ActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: WafDedicatedPreciseProtectionRuleV1Action[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new WafDedicatedPreciseProtectionRuleV1ConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: WafDedicatedPreciseProtectionRuleV1Conditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WafDedicatedPreciseProtectionRuleV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WafDedicatedPreciseProtectionRuleV1Timeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.stringToTerraform(this._policyId),
      priority: cdktf.numberToTerraform(this._priority),
      start: cdktf.numberToTerraform(this._start),
      terminal: cdktf.numberToTerraform(this._terminal),
      time: cdktf.booleanToTerraform(this._time),
      action: cdktf.listMapper(wafDedicatedPreciseProtectionRuleV1ActionToTerraform, true)(this._action.internalValue),
      conditions: cdktf.listMapper(wafDedicatedPreciseProtectionRuleV1ConditionsToTerraform, true)(this._conditions.internalValue),
      timeouts: wafDedicatedPreciseProtectionRuleV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start: {
        value: cdktf.numberToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      terminal: {
        value: cdktf.numberToHclTerraform(this._terminal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time: {
        value: cdktf.booleanToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action: {
        value: cdktf.listMapperHcl(wafDedicatedPreciseProtectionRuleV1ActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafDedicatedPreciseProtectionRuleV1ActionList",
      },
      conditions: {
        value: cdktf.listMapperHcl(wafDedicatedPreciseProtectionRuleV1ConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafDedicatedPreciseProtectionRuleV1ConditionsList",
      },
      timeouts: {
        value: wafDedicatedPreciseProtectionRuleV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WafDedicatedPreciseProtectionRuleV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
