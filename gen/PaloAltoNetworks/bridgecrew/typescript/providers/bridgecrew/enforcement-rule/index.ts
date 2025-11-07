// https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnforcementRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#id EnforcementRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the exception rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#name EnforcementRule#name}
  */
  readonly name: string;
  /**
  * code_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#code_categories EnforcementRule#code_categories}
  */
  readonly codeCategories: EnforcementRuleCodeCategories[] | cdktf.IResolvable;
  /**
  * repositories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#repositories EnforcementRule#repositories}
  */
  readonly repositories: EnforcementRuleRepositories[] | cdktf.IResolvable;
}
export interface EnforcementRuleCodeCategoriesIac {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#comments_bot_threshold EnforcementRule#comments_bot_threshold}
  */
  readonly commentsBotThreshold: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#hard_fail_threshold EnforcementRule#hard_fail_threshold}
  */
  readonly hardFailThreshold: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#soft_fail_threshold EnforcementRule#soft_fail_threshold}
  */
  readonly softFailThreshold: string;
}

export function enforcementRuleCodeCategoriesIacToTerraform(struct?: EnforcementRuleCodeCategoriesIac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments_bot_threshold: cdktf.stringToTerraform(struct!.commentsBotThreshold),
    hard_fail_threshold: cdktf.stringToTerraform(struct!.hardFailThreshold),
    soft_fail_threshold: cdktf.stringToTerraform(struct!.softFailThreshold),
  }
}


export function enforcementRuleCodeCategoriesIacToHclTerraform(struct?: EnforcementRuleCodeCategoriesIac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments_bot_threshold: {
      value: cdktf.stringToHclTerraform(struct!.commentsBotThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hard_fail_threshold: {
      value: cdktf.stringToHclTerraform(struct!.hardFailThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_fail_threshold: {
      value: cdktf.stringToHclTerraform(struct!.softFailThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementRuleCodeCategoriesIacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnforcementRuleCodeCategoriesIac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commentsBotThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentsBotThreshold = this._commentsBotThreshold;
    }
    if (this._hardFailThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardFailThreshold = this._hardFailThreshold;
    }
    if (this._softFailThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.softFailThreshold = this._softFailThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementRuleCodeCategoriesIac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commentsBotThreshold = undefined;
      this._hardFailThreshold = undefined;
      this._softFailThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commentsBotThreshold = value.commentsBotThreshold;
      this._hardFailThreshold = value.hardFailThreshold;
      this._softFailThreshold = value.softFailThreshold;
    }
  }

  // comments_bot_threshold - computed: false, optional: false, required: true
  private _commentsBotThreshold?: string; 
  public get commentsBotThreshold() {
    return this.getStringAttribute('comments_bot_threshold');
  }
  public set commentsBotThreshold(value: string) {
    this._commentsBotThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsBotThresholdInput() {
    return this._commentsBotThreshold;
  }

  // hard_fail_threshold - computed: false, optional: false, required: true
  private _hardFailThreshold?: string; 
  public get hardFailThreshold() {
    return this.getStringAttribute('hard_fail_threshold');
  }
  public set hardFailThreshold(value: string) {
    this._hardFailThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardFailThresholdInput() {
    return this._hardFailThreshold;
  }

  // soft_fail_threshold - computed: false, optional: false, required: true
  private _softFailThreshold?: string; 
  public get softFailThreshold() {
    return this.getStringAttribute('soft_fail_threshold');
  }
  public set softFailThreshold(value: string) {
    this._softFailThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softFailThresholdInput() {
    return this._softFailThreshold;
  }
}

export class EnforcementRuleCodeCategoriesIacList extends cdktf.ComplexList {
  public internalValue? : EnforcementRuleCodeCategoriesIac[] | cdktf.IResolvable

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
  public get(index: number): EnforcementRuleCodeCategoriesIacOutputReference {
    return new EnforcementRuleCodeCategoriesIacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnforcementRuleCodeCategoriesImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#comments_bot_threshold EnforcementRule#comments_bot_threshold}
  */
  readonly commentsBotThreshold: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#hard_fail_threshold EnforcementRule#hard_fail_threshold}
  */
  readonly hardFailThreshold: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#soft_fail_threshold EnforcementRule#soft_fail_threshold}
  */
  readonly softFailThreshold: string;
}

export function enforcementRuleCodeCategoriesImagesToTerraform(struct?: EnforcementRuleCodeCategoriesImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments_bot_threshold: cdktf.stringToTerraform(struct!.commentsBotThreshold),
    hard_fail_threshold: cdktf.stringToTerraform(struct!.hardFailThreshold),
    soft_fail_threshold: cdktf.stringToTerraform(struct!.softFailThreshold),
  }
}


export function enforcementRuleCodeCategoriesImagesToHclTerraform(struct?: EnforcementRuleCodeCategoriesImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments_bot_threshold: {
      value: cdktf.stringToHclTerraform(struct!.commentsBotThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hard_fail_threshold: {
      value: cdktf.stringToHclTerraform(struct!.hardFailThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_fail_threshold: {
      value: cdktf.stringToHclTerraform(struct!.softFailThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementRuleCodeCategoriesImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnforcementRuleCodeCategoriesImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commentsBotThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentsBotThreshold = this._commentsBotThreshold;
    }
    if (this._hardFailThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardFailThreshold = this._hardFailThreshold;
    }
    if (this._softFailThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.softFailThreshold = this._softFailThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementRuleCodeCategoriesImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commentsBotThreshold = undefined;
      this._hardFailThreshold = undefined;
      this._softFailThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commentsBotThreshold = value.commentsBotThreshold;
      this._hardFailThreshold = value.hardFailThreshold;
      this._softFailThreshold = value.softFailThreshold;
    }
  }

  // comments_bot_threshold - computed: false, optional: false, required: true
  private _commentsBotThreshold?: string; 
  public get commentsBotThreshold() {
    return this.getStringAttribute('comments_bot_threshold');
  }
  public set commentsBotThreshold(value: string) {
    this._commentsBotThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsBotThresholdInput() {
    return this._commentsBotThreshold;
  }

  // hard_fail_threshold - computed: false, optional: false, required: true
  private _hardFailThreshold?: string; 
  public get hardFailThreshold() {
    return this.getStringAttribute('hard_fail_threshold');
  }
  public set hardFailThreshold(value: string) {
    this._hardFailThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardFailThresholdInput() {
    return this._hardFailThreshold;
  }

  // soft_fail_threshold - computed: false, optional: false, required: true
  private _softFailThreshold?: string; 
  public get softFailThreshold() {
    return this.getStringAttribute('soft_fail_threshold');
  }
  public set softFailThreshold(value: string) {
    this._softFailThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softFailThresholdInput() {
    return this._softFailThreshold;
  }
}

export class EnforcementRuleCodeCategoriesImagesList extends cdktf.ComplexList {
  public internalValue? : EnforcementRuleCodeCategoriesImages[] | cdktf.IResolvable

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
  public get(index: number): EnforcementRuleCodeCategoriesImagesOutputReference {
    return new EnforcementRuleCodeCategoriesImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnforcementRuleCodeCategoriesOpenSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#comments_bot_threshold EnforcementRule#comments_bot_threshold}
  */
  readonly commentsBotThreshold: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#hard_fail_threshold EnforcementRule#hard_fail_threshold}
  */
  readonly hardFailThreshold: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#soft_fail_threshold EnforcementRule#soft_fail_threshold}
  */
  readonly softFailThreshold: string;
}

export function enforcementRuleCodeCategoriesOpenSourceToTerraform(struct?: EnforcementRuleCodeCategoriesOpenSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments_bot_threshold: cdktf.stringToTerraform(struct!.commentsBotThreshold),
    hard_fail_threshold: cdktf.stringToTerraform(struct!.hardFailThreshold),
    soft_fail_threshold: cdktf.stringToTerraform(struct!.softFailThreshold),
  }
}


export function enforcementRuleCodeCategoriesOpenSourceToHclTerraform(struct?: EnforcementRuleCodeCategoriesOpenSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments_bot_threshold: {
      value: cdktf.stringToHclTerraform(struct!.commentsBotThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hard_fail_threshold: {
      value: cdktf.stringToHclTerraform(struct!.hardFailThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_fail_threshold: {
      value: cdktf.stringToHclTerraform(struct!.softFailThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementRuleCodeCategoriesOpenSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnforcementRuleCodeCategoriesOpenSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commentsBotThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentsBotThreshold = this._commentsBotThreshold;
    }
    if (this._hardFailThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardFailThreshold = this._hardFailThreshold;
    }
    if (this._softFailThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.softFailThreshold = this._softFailThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementRuleCodeCategoriesOpenSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commentsBotThreshold = undefined;
      this._hardFailThreshold = undefined;
      this._softFailThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commentsBotThreshold = value.commentsBotThreshold;
      this._hardFailThreshold = value.hardFailThreshold;
      this._softFailThreshold = value.softFailThreshold;
    }
  }

  // comments_bot_threshold - computed: false, optional: false, required: true
  private _commentsBotThreshold?: string; 
  public get commentsBotThreshold() {
    return this.getStringAttribute('comments_bot_threshold');
  }
  public set commentsBotThreshold(value: string) {
    this._commentsBotThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsBotThresholdInput() {
    return this._commentsBotThreshold;
  }

  // hard_fail_threshold - computed: false, optional: false, required: true
  private _hardFailThreshold?: string; 
  public get hardFailThreshold() {
    return this.getStringAttribute('hard_fail_threshold');
  }
  public set hardFailThreshold(value: string) {
    this._hardFailThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardFailThresholdInput() {
    return this._hardFailThreshold;
  }

  // soft_fail_threshold - computed: false, optional: false, required: true
  private _softFailThreshold?: string; 
  public get softFailThreshold() {
    return this.getStringAttribute('soft_fail_threshold');
  }
  public set softFailThreshold(value: string) {
    this._softFailThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softFailThresholdInput() {
    return this._softFailThreshold;
  }
}

export class EnforcementRuleCodeCategoriesOpenSourceList extends cdktf.ComplexList {
  public internalValue? : EnforcementRuleCodeCategoriesOpenSource[] | cdktf.IResolvable

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
  public get(index: number): EnforcementRuleCodeCategoriesOpenSourceOutputReference {
    return new EnforcementRuleCodeCategoriesOpenSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnforcementRuleCodeCategoriesSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#comments_bot_threshold EnforcementRule#comments_bot_threshold}
  */
  readonly commentsBotThreshold: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#hard_fail_threshold EnforcementRule#hard_fail_threshold}
  */
  readonly hardFailThreshold: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#soft_fail_threshold EnforcementRule#soft_fail_threshold}
  */
  readonly softFailThreshold: string;
}

export function enforcementRuleCodeCategoriesSecretsToTerraform(struct?: EnforcementRuleCodeCategoriesSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments_bot_threshold: cdktf.stringToTerraform(struct!.commentsBotThreshold),
    hard_fail_threshold: cdktf.stringToTerraform(struct!.hardFailThreshold),
    soft_fail_threshold: cdktf.stringToTerraform(struct!.softFailThreshold),
  }
}


export function enforcementRuleCodeCategoriesSecretsToHclTerraform(struct?: EnforcementRuleCodeCategoriesSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments_bot_threshold: {
      value: cdktf.stringToHclTerraform(struct!.commentsBotThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hard_fail_threshold: {
      value: cdktf.stringToHclTerraform(struct!.hardFailThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_fail_threshold: {
      value: cdktf.stringToHclTerraform(struct!.softFailThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementRuleCodeCategoriesSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnforcementRuleCodeCategoriesSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commentsBotThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentsBotThreshold = this._commentsBotThreshold;
    }
    if (this._hardFailThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardFailThreshold = this._hardFailThreshold;
    }
    if (this._softFailThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.softFailThreshold = this._softFailThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementRuleCodeCategoriesSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commentsBotThreshold = undefined;
      this._hardFailThreshold = undefined;
      this._softFailThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commentsBotThreshold = value.commentsBotThreshold;
      this._hardFailThreshold = value.hardFailThreshold;
      this._softFailThreshold = value.softFailThreshold;
    }
  }

  // comments_bot_threshold - computed: false, optional: false, required: true
  private _commentsBotThreshold?: string; 
  public get commentsBotThreshold() {
    return this.getStringAttribute('comments_bot_threshold');
  }
  public set commentsBotThreshold(value: string) {
    this._commentsBotThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsBotThresholdInput() {
    return this._commentsBotThreshold;
  }

  // hard_fail_threshold - computed: false, optional: false, required: true
  private _hardFailThreshold?: string; 
  public get hardFailThreshold() {
    return this.getStringAttribute('hard_fail_threshold');
  }
  public set hardFailThreshold(value: string) {
    this._hardFailThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardFailThresholdInput() {
    return this._hardFailThreshold;
  }

  // soft_fail_threshold - computed: false, optional: false, required: true
  private _softFailThreshold?: string; 
  public get softFailThreshold() {
    return this.getStringAttribute('soft_fail_threshold');
  }
  public set softFailThreshold(value: string) {
    this._softFailThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softFailThresholdInput() {
    return this._softFailThreshold;
  }
}

export class EnforcementRuleCodeCategoriesSecretsList extends cdktf.ComplexList {
  public internalValue? : EnforcementRuleCodeCategoriesSecrets[] | cdktf.IResolvable

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
  public get(index: number): EnforcementRuleCodeCategoriesSecretsOutputReference {
    return new EnforcementRuleCodeCategoriesSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnforcementRuleCodeCategoriesSupplyChain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#comments_bot_threshold EnforcementRule#comments_bot_threshold}
  */
  readonly commentsBotThreshold: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#hard_fail_threshold EnforcementRule#hard_fail_threshold}
  */
  readonly hardFailThreshold: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#soft_fail_threshold EnforcementRule#soft_fail_threshold}
  */
  readonly softFailThreshold: string;
}

export function enforcementRuleCodeCategoriesSupplyChainToTerraform(struct?: EnforcementRuleCodeCategoriesSupplyChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments_bot_threshold: cdktf.stringToTerraform(struct!.commentsBotThreshold),
    hard_fail_threshold: cdktf.stringToTerraform(struct!.hardFailThreshold),
    soft_fail_threshold: cdktf.stringToTerraform(struct!.softFailThreshold),
  }
}


export function enforcementRuleCodeCategoriesSupplyChainToHclTerraform(struct?: EnforcementRuleCodeCategoriesSupplyChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments_bot_threshold: {
      value: cdktf.stringToHclTerraform(struct!.commentsBotThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hard_fail_threshold: {
      value: cdktf.stringToHclTerraform(struct!.hardFailThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_fail_threshold: {
      value: cdktf.stringToHclTerraform(struct!.softFailThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementRuleCodeCategoriesSupplyChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnforcementRuleCodeCategoriesSupplyChain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commentsBotThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentsBotThreshold = this._commentsBotThreshold;
    }
    if (this._hardFailThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardFailThreshold = this._hardFailThreshold;
    }
    if (this._softFailThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.softFailThreshold = this._softFailThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementRuleCodeCategoriesSupplyChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commentsBotThreshold = undefined;
      this._hardFailThreshold = undefined;
      this._softFailThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commentsBotThreshold = value.commentsBotThreshold;
      this._hardFailThreshold = value.hardFailThreshold;
      this._softFailThreshold = value.softFailThreshold;
    }
  }

  // comments_bot_threshold - computed: false, optional: false, required: true
  private _commentsBotThreshold?: string; 
  public get commentsBotThreshold() {
    return this.getStringAttribute('comments_bot_threshold');
  }
  public set commentsBotThreshold(value: string) {
    this._commentsBotThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsBotThresholdInput() {
    return this._commentsBotThreshold;
  }

  // hard_fail_threshold - computed: false, optional: false, required: true
  private _hardFailThreshold?: string; 
  public get hardFailThreshold() {
    return this.getStringAttribute('hard_fail_threshold');
  }
  public set hardFailThreshold(value: string) {
    this._hardFailThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardFailThresholdInput() {
    return this._hardFailThreshold;
  }

  // soft_fail_threshold - computed: false, optional: false, required: true
  private _softFailThreshold?: string; 
  public get softFailThreshold() {
    return this.getStringAttribute('soft_fail_threshold');
  }
  public set softFailThreshold(value: string) {
    this._softFailThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softFailThresholdInput() {
    return this._softFailThreshold;
  }
}

export class EnforcementRuleCodeCategoriesSupplyChainList extends cdktf.ComplexList {
  public internalValue? : EnforcementRuleCodeCategoriesSupplyChain[] | cdktf.IResolvable

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
  public get(index: number): EnforcementRuleCodeCategoriesSupplyChainOutputReference {
    return new EnforcementRuleCodeCategoriesSupplyChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnforcementRuleCodeCategories {
  /**
  * iac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#iac EnforcementRule#iac}
  */
  readonly iac: EnforcementRuleCodeCategoriesIac[] | cdktf.IResolvable;
  /**
  * images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#images EnforcementRule#images}
  */
  readonly images: EnforcementRuleCodeCategoriesImages[] | cdktf.IResolvable;
  /**
  * open_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#open_source EnforcementRule#open_source}
  */
  readonly openSource: EnforcementRuleCodeCategoriesOpenSource[] | cdktf.IResolvable;
  /**
  * secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#secrets EnforcementRule#secrets}
  */
  readonly secrets: EnforcementRuleCodeCategoriesSecrets[] | cdktf.IResolvable;
  /**
  * supply_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#supply_chain EnforcementRule#supply_chain}
  */
  readonly supplyChain: EnforcementRuleCodeCategoriesSupplyChain[] | cdktf.IResolvable;
}

export function enforcementRuleCodeCategoriesToTerraform(struct?: EnforcementRuleCodeCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iac: cdktf.listMapper(enforcementRuleCodeCategoriesIacToTerraform, true)(struct!.iac),
    images: cdktf.listMapper(enforcementRuleCodeCategoriesImagesToTerraform, true)(struct!.images),
    open_source: cdktf.listMapper(enforcementRuleCodeCategoriesOpenSourceToTerraform, true)(struct!.openSource),
    secrets: cdktf.listMapper(enforcementRuleCodeCategoriesSecretsToTerraform, true)(struct!.secrets),
    supply_chain: cdktf.listMapper(enforcementRuleCodeCategoriesSupplyChainToTerraform, true)(struct!.supplyChain),
  }
}


export function enforcementRuleCodeCategoriesToHclTerraform(struct?: EnforcementRuleCodeCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iac: {
      value: cdktf.listMapperHcl(enforcementRuleCodeCategoriesIacToHclTerraform, true)(struct!.iac),
      isBlock: true,
      type: "set",
      storageClassType: "EnforcementRuleCodeCategoriesIacList",
    },
    images: {
      value: cdktf.listMapperHcl(enforcementRuleCodeCategoriesImagesToHclTerraform, true)(struct!.images),
      isBlock: true,
      type: "set",
      storageClassType: "EnforcementRuleCodeCategoriesImagesList",
    },
    open_source: {
      value: cdktf.listMapperHcl(enforcementRuleCodeCategoriesOpenSourceToHclTerraform, true)(struct!.openSource),
      isBlock: true,
      type: "set",
      storageClassType: "EnforcementRuleCodeCategoriesOpenSourceList",
    },
    secrets: {
      value: cdktf.listMapperHcl(enforcementRuleCodeCategoriesSecretsToHclTerraform, true)(struct!.secrets),
      isBlock: true,
      type: "set",
      storageClassType: "EnforcementRuleCodeCategoriesSecretsList",
    },
    supply_chain: {
      value: cdktf.listMapperHcl(enforcementRuleCodeCategoriesSupplyChainToHclTerraform, true)(struct!.supplyChain),
      isBlock: true,
      type: "set",
      storageClassType: "EnforcementRuleCodeCategoriesSupplyChainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementRuleCodeCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnforcementRuleCodeCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iac = this._iac?.internalValue;
    }
    if (this._images?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images?.internalValue;
    }
    if (this._openSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSource = this._openSource?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._supplyChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplyChain = this._supplyChain?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementRuleCodeCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iac.internalValue = undefined;
      this._images.internalValue = undefined;
      this._openSource.internalValue = undefined;
      this._secrets.internalValue = undefined;
      this._supplyChain.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iac.internalValue = value.iac;
      this._images.internalValue = value.images;
      this._openSource.internalValue = value.openSource;
      this._secrets.internalValue = value.secrets;
      this._supplyChain.internalValue = value.supplyChain;
    }
  }

  // iac - computed: false, optional: false, required: true
  private _iac = new EnforcementRuleCodeCategoriesIacList(this, "iac", true);
  public get iac() {
    return this._iac;
  }
  public putIac(value: EnforcementRuleCodeCategoriesIac[] | cdktf.IResolvable) {
    this._iac.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iacInput() {
    return this._iac.internalValue;
  }

  // images - computed: false, optional: false, required: true
  private _images = new EnforcementRuleCodeCategoriesImagesList(this, "images", true);
  public get images() {
    return this._images;
  }
  public putImages(value: EnforcementRuleCodeCategoriesImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // open_source - computed: false, optional: false, required: true
  private _openSource = new EnforcementRuleCodeCategoriesOpenSourceList(this, "open_source", true);
  public get openSource() {
    return this._openSource;
  }
  public putOpenSource(value: EnforcementRuleCodeCategoriesOpenSource[] | cdktf.IResolvable) {
    this._openSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openSourceInput() {
    return this._openSource.internalValue;
  }

  // secrets - computed: false, optional: false, required: true
  private _secrets = new EnforcementRuleCodeCategoriesSecretsList(this, "secrets", true);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: EnforcementRuleCodeCategoriesSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // supply_chain - computed: false, optional: false, required: true
  private _supplyChain = new EnforcementRuleCodeCategoriesSupplyChainList(this, "supply_chain", true);
  public get supplyChain() {
    return this._supplyChain;
  }
  public putSupplyChain(value: EnforcementRuleCodeCategoriesSupplyChain[] | cdktf.IResolvable) {
    this._supplyChain.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supplyChainInput() {
    return this._supplyChain.internalValue;
  }
}

export class EnforcementRuleCodeCategoriesList extends cdktf.ComplexList {
  public internalValue? : EnforcementRuleCodeCategories[] | cdktf.IResolvable

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
  public get(index: number): EnforcementRuleCodeCategoriesOutputReference {
    return new EnforcementRuleCodeCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnforcementRuleRepositories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#account_id EnforcementRule#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#account_name EnforcementRule#account_name}
  */
  readonly accountName: string;
}

export function enforcementRuleRepositoriesToTerraform(struct?: EnforcementRuleRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_name: cdktf.stringToTerraform(struct!.accountName),
  }
}


export function enforcementRuleRepositoriesToHclTerraform(struct?: EnforcementRuleRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementRuleRepositoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnforcementRuleRepositories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementRuleRepositories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._accountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._accountName = value.accountName;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }
}

export class EnforcementRuleRepositoriesList extends cdktf.ComplexList {
  public internalValue? : EnforcementRuleRepositories[] | cdktf.IResolvable

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
  public get(index: number): EnforcementRuleRepositoriesOutputReference {
    return new EnforcementRuleRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule bridgecrew_enforcement_rule}
*/
export class EnforcementRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bridgecrew_enforcement_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnforcementRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnforcementRule to import
  * @param importFromId The id of the existing EnforcementRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnforcementRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bridgecrew_enforcement_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/resources/enforcement_rule bridgecrew_enforcement_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnforcementRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EnforcementRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'bridgecrew_enforcement_rule',
      terraformGeneratorMetadata: {
        providerName: 'bridgecrew',
        providerVersion: '0.3.7'
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
    this._codeCategories.internalValue = config.codeCategories;
    this._repositories.internalValue = config.repositories;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // createdby - computed: true, optional: false, required: false
  public get createdby() {
    return this.getStringAttribute('createdby');
  }

  // creationdate - computed: true, optional: false, required: false
  public get creationdate() {
    return this.getStringAttribute('creationdate');
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

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // code_categories - computed: false, optional: false, required: true
  private _codeCategories = new EnforcementRuleCodeCategoriesList(this, "code_categories", true);
  public get codeCategories() {
    return this._codeCategories;
  }
  public putCodeCategories(value: EnforcementRuleCodeCategories[] | cdktf.IResolvable) {
    this._codeCategories.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeCategoriesInput() {
    return this._codeCategories.internalValue;
  }

  // repositories - computed: false, optional: false, required: true
  private _repositories = new EnforcementRuleRepositoriesList(this, "repositories", true);
  public get repositories() {
    return this._repositories;
  }
  public putRepositories(value: EnforcementRuleRepositories[] | cdktf.IResolvable) {
    this._repositories.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      code_categories: cdktf.listMapper(enforcementRuleCodeCategoriesToTerraform, true)(this._codeCategories.internalValue),
      repositories: cdktf.listMapper(enforcementRuleRepositoriesToTerraform, true)(this._repositories.internalValue),
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
      code_categories: {
        value: cdktf.listMapperHcl(enforcementRuleCodeCategoriesToHclTerraform, true)(this._codeCategories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnforcementRuleCodeCategoriesList",
      },
      repositories: {
        value: cdktf.listMapperHcl(enforcementRuleRepositoriesToHclTerraform, true)(this._repositories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnforcementRuleRepositoriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
