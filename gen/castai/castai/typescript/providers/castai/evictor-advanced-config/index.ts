// https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvictorAdvancedConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * CAST AI cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#cluster_id EvictorAdvancedConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#id EvictorAdvancedConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * evictor_advanced_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#evictor_advanced_config EvictorAdvancedConfig#evictor_advanced_config}
  */
  readonly evictorAdvancedConfig: EvictorAdvancedConfigEvictorAdvancedConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#timeouts EvictorAdvancedConfig#timeouts}
  */
  readonly timeouts?: EvictorAdvancedConfigTimeouts;
}
export interface EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#key EvictorAdvancedConfig#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#operator EvictorAdvancedConfig#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#values EvictorAdvancedConfig#values}
  */
  readonly values?: string[];
}

export function evictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressionsToTerraform(struct?: EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function evictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressionsToHclTerraform(struct?: EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressionsOutputReference {
    return new EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvictorAdvancedConfigEvictorAdvancedConfigNodeSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#match_labels EvictorAdvancedConfig#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#match_expressions EvictorAdvancedConfig#match_expressions}
  */
  readonly matchExpressions?: EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function evictorAdvancedConfigEvictorAdvancedConfigNodeSelectorToTerraform(struct?: EvictorAdvancedConfigEvictorAdvancedConfigNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(evictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function evictorAdvancedConfigEvictorAdvancedConfigNodeSelectorToHclTerraform(struct?: EvictorAdvancedConfigEvictorAdvancedConfigNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(evictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvictorAdvancedConfigEvictorAdvancedConfigNodeSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvictorAdvancedConfigEvictorAdvancedConfigNodeSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorList extends cdktf.ComplexList {
  public internalValue? : EvictorAdvancedConfigEvictorAdvancedConfigNodeSelector[] | cdktf.IResolvable

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
  public get(index: number): EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorOutputReference {
    return new EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#key EvictorAdvancedConfig#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#operator EvictorAdvancedConfig#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#values EvictorAdvancedConfig#values}
  */
  readonly values?: string[];
}

export function evictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressionsToTerraform(struct?: EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function evictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressionsToHclTerraform(struct?: EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressionsOutputReference {
    return new EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvictorAdvancedConfigEvictorAdvancedConfigPodSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#kind EvictorAdvancedConfig#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#match_labels EvictorAdvancedConfig#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#namespace EvictorAdvancedConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#match_expressions EvictorAdvancedConfig#match_expressions}
  */
  readonly matchExpressions?: EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function evictorAdvancedConfigEvictorAdvancedConfigPodSelectorToTerraform(struct?: EvictorAdvancedConfigEvictorAdvancedConfigPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    match_expressions: cdktf.listMapper(evictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function evictorAdvancedConfigEvictorAdvancedConfigPodSelectorToHclTerraform(struct?: EvictorAdvancedConfigEvictorAdvancedConfigPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(evictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvictorAdvancedConfigEvictorAdvancedConfigPodSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvictorAdvancedConfigEvictorAdvancedConfigPodSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._matchLabels = undefined;
      this._namespace = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._matchLabels = value.matchLabels;
      this._namespace = value.namespace;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorList extends cdktf.ComplexList {
  public internalValue? : EvictorAdvancedConfigEvictorAdvancedConfigPodSelector[] | cdktf.IResolvable

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
  public get(index: number): EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorOutputReference {
    return new EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvictorAdvancedConfigEvictorAdvancedConfig {
  /**
  * Apply Aggressive mode to Evictor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#aggressive EvictorAdvancedConfig#aggressive}
  */
  readonly aggressive?: boolean | cdktf.IResolvable;
  /**
  * Mark node as disposable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#disposable EvictorAdvancedConfig#disposable}
  */
  readonly disposable?: boolean | cdktf.IResolvable;
  /**
  * Mark pods as removal disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#removal_disabled EvictorAdvancedConfig#removal_disabled}
  */
  readonly removalDisabled?: boolean | cdktf.IResolvable;
  /**
  * node_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#node_selector EvictorAdvancedConfig#node_selector}
  */
  readonly nodeSelector?: EvictorAdvancedConfigEvictorAdvancedConfigNodeSelector[] | cdktf.IResolvable;
  /**
  * pod_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#pod_selector EvictorAdvancedConfig#pod_selector}
  */
  readonly podSelector?: EvictorAdvancedConfigEvictorAdvancedConfigPodSelector[] | cdktf.IResolvable;
}

export function evictorAdvancedConfigEvictorAdvancedConfigToTerraform(struct?: EvictorAdvancedConfigEvictorAdvancedConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggressive: cdktf.booleanToTerraform(struct!.aggressive),
    disposable: cdktf.booleanToTerraform(struct!.disposable),
    removal_disabled: cdktf.booleanToTerraform(struct!.removalDisabled),
    node_selector: cdktf.listMapper(evictorAdvancedConfigEvictorAdvancedConfigNodeSelectorToTerraform, true)(struct!.nodeSelector),
    pod_selector: cdktf.listMapper(evictorAdvancedConfigEvictorAdvancedConfigPodSelectorToTerraform, true)(struct!.podSelector),
  }
}


export function evictorAdvancedConfigEvictorAdvancedConfigToHclTerraform(struct?: EvictorAdvancedConfigEvictorAdvancedConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggressive: {
      value: cdktf.booleanToHclTerraform(struct!.aggressive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disposable: {
      value: cdktf.booleanToHclTerraform(struct!.disposable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    removal_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.removalDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_selector: {
      value: cdktf.listMapperHcl(evictorAdvancedConfigEvictorAdvancedConfigNodeSelectorToHclTerraform, true)(struct!.nodeSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorList",
    },
    pod_selector: {
      value: cdktf.listMapperHcl(evictorAdvancedConfigEvictorAdvancedConfigPodSelectorToHclTerraform, true)(struct!.podSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvictorAdvancedConfigEvictorAdvancedConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvictorAdvancedConfigEvictorAdvancedConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggressive !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggressive = this._aggressive;
    }
    if (this._disposable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disposable = this._disposable;
    }
    if (this._removalDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.removalDisabled = this._removalDisabled;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvictorAdvancedConfigEvictorAdvancedConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggressive = undefined;
      this._disposable = undefined;
      this._removalDisabled = undefined;
      this._nodeSelector.internalValue = undefined;
      this._podSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggressive = value.aggressive;
      this._disposable = value.disposable;
      this._removalDisabled = value.removalDisabled;
      this._nodeSelector.internalValue = value.nodeSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // aggressive - computed: false, optional: true, required: false
  private _aggressive?: boolean | cdktf.IResolvable; 
  public get aggressive() {
    return this.getBooleanAttribute('aggressive');
  }
  public set aggressive(value: boolean | cdktf.IResolvable) {
    this._aggressive = value;
  }
  public resetAggressive() {
    this._aggressive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressiveInput() {
    return this._aggressive;
  }

  // disposable - computed: false, optional: true, required: false
  private _disposable?: boolean | cdktf.IResolvable; 
  public get disposable() {
    return this.getBooleanAttribute('disposable');
  }
  public set disposable(value: boolean | cdktf.IResolvable) {
    this._disposable = value;
  }
  public resetDisposable() {
    this._disposable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disposableInput() {
    return this._disposable;
  }

  // removal_disabled - computed: false, optional: true, required: false
  private _removalDisabled?: boolean | cdktf.IResolvable; 
  public get removalDisabled() {
    return this.getBooleanAttribute('removal_disabled');
  }
  public set removalDisabled(value: boolean | cdktf.IResolvable) {
    this._removalDisabled = value;
  }
  public resetRemovalDisabled() {
    this._removalDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removalDisabledInput() {
    return this._removalDisabled;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new EvictorAdvancedConfigEvictorAdvancedConfigNodeSelectorList(this, "node_selector", false);
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: EvictorAdvancedConfigEvictorAdvancedConfigNodeSelector[] | cdktf.IResolvable) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new EvictorAdvancedConfigEvictorAdvancedConfigPodSelectorList(this, "pod_selector", false);
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: EvictorAdvancedConfigEvictorAdvancedConfigPodSelector[] | cdktf.IResolvable) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}

export class EvictorAdvancedConfigEvictorAdvancedConfigList extends cdktf.ComplexList {
  public internalValue? : EvictorAdvancedConfigEvictorAdvancedConfig[] | cdktf.IResolvable

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
  public get(index: number): EvictorAdvancedConfigEvictorAdvancedConfigOutputReference {
    return new EvictorAdvancedConfigEvictorAdvancedConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvictorAdvancedConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#create EvictorAdvancedConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#update EvictorAdvancedConfig#update}
  */
  readonly update?: string;
}

export function evictorAdvancedConfigTimeoutsToTerraform(struct?: EvictorAdvancedConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function evictorAdvancedConfigTimeoutsToHclTerraform(struct?: EvictorAdvancedConfigTimeouts | cdktf.IResolvable): any {
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

export class EvictorAdvancedConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EvictorAdvancedConfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvictorAdvancedConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config castai_evictor_advanced_config}
*/
export class EvictorAdvancedConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_evictor_advanced_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EvictorAdvancedConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EvictorAdvancedConfig to import
  * @param importFromId The id of the existing EvictorAdvancedConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EvictorAdvancedConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_evictor_advanced_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/evictor_advanced_config castai_evictor_advanced_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvictorAdvancedConfigConfig
  */
  public constructor(scope: Construct, id: string, config: EvictorAdvancedConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_evictor_advanced_config',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.2.1',
        providerVersionConstraint: '8.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._evictorAdvancedConfig.internalValue = config.evictorAdvancedConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // evictor_advanced_config - computed: false, optional: false, required: true
  private _evictorAdvancedConfig = new EvictorAdvancedConfigEvictorAdvancedConfigList(this, "evictor_advanced_config", false);
  public get evictorAdvancedConfig() {
    return this._evictorAdvancedConfig;
  }
  public putEvictorAdvancedConfig(value: EvictorAdvancedConfigEvictorAdvancedConfig[] | cdktf.IResolvable) {
    this._evictorAdvancedConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evictorAdvancedConfigInput() {
    return this._evictorAdvancedConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EvictorAdvancedConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EvictorAdvancedConfigTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      evictor_advanced_config: cdktf.listMapper(evictorAdvancedConfigEvictorAdvancedConfigToTerraform, true)(this._evictorAdvancedConfig.internalValue),
      timeouts: evictorAdvancedConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      evictor_advanced_config: {
        value: cdktf.listMapperHcl(evictorAdvancedConfigEvictorAdvancedConfigToHclTerraform, true)(this._evictorAdvancedConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvictorAdvancedConfigEvictorAdvancedConfigList",
      },
      timeouts: {
        value: evictorAdvancedConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EvictorAdvancedConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
