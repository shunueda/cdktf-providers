// https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not the watch is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#active Watch#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Description of the watch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#description Watch#description}
  */
  readonly description?: string;
  /**
  * Name of the watch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#name Watch#name}
  */
  readonly name: string;
  /**
  * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters. Support repository and build watch resource types. When specifying individual repository or build they must be already assigned to the project. Build must be added as indexed resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#project_key Watch#project_key}
  */
  readonly projectKey?: string;
  /**
  * A list of email addressed that will get emailed when a violation is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#watch_recipients Watch#watch_recipients}
  */
  readonly watchRecipients?: string[];
  /**
  * assigned_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#assigned_policy Watch#assigned_policy}
  */
  readonly assignedPolicy?: WatchAssignedPolicy[] | cdktf.IResolvable;
  /**
  * watch_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#watch_resource Watch#watch_resource}
  */
  readonly watchResource?: WatchWatchResource[] | cdktf.IResolvable;
}
export interface WatchAssignedPolicy {
  /**
  * The name of the policy that will be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#name Watch#name}
  */
  readonly name: string;
  /**
  * The type of the policy - security, license or operational risk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#type Watch#type}
  */
  readonly type: string;
}

export function watchAssignedPolicyToTerraform(struct?: WatchAssignedPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function watchAssignedPolicyToHclTerraform(struct?: WatchAssignedPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WatchAssignedPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WatchAssignedPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WatchAssignedPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WatchAssignedPolicyList extends cdktf.ComplexList {
  public internalValue? : WatchAssignedPolicy[] | cdktf.IResolvable

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
  public get(index: number): WatchAssignedPolicyOutputReference {
    return new WatchAssignedPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WatchWatchResourceAntFilter {
  /**
  * Use Ant-style wildcard patterns to specify build names (i.e. artifact paths) in the build info repository (without a leading slash) that will be excluded in this watch. Projects are supported too. Ant-style path expressions are supported (*, **, ?). For example, an 'apache/**' pattern will exclude the 'apache' build info in the watch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#exclude_patterns Watch#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * Use Ant-style wildcard patterns to specify build names (i.e. artifact paths) in the build info repository (without a leading slash) that will be included in this watch. Projects are supported too. Ant-style path expressions are supported (*, **, ?). For example, an 'apache/**' pattern will include the 'apache' build info in the watch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#include_patterns Watch#include_patterns}
  */
  readonly includePatterns?: string[];
}

export function watchWatchResourceAntFilterToTerraform(struct?: WatchWatchResourceAntFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
  }
}


export function watchWatchResourceAntFilterToHclTerraform(struct?: WatchWatchResourceAntFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WatchWatchResourceAntFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WatchWatchResourceAntFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    if (this._includePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePatterns = this._includePatterns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WatchWatchResourceAntFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludePatterns = undefined;
      this._includePatterns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludePatterns = value.excludePatterns;
      this._includePatterns = value.includePatterns;
    }
  }

  // exclude_patterns - computed: false, optional: true, required: false
  private _excludePatterns?: string[]; 
  public get excludePatterns() {
    return this.getListAttribute('exclude_patterns');
  }
  public set excludePatterns(value: string[]) {
    this._excludePatterns = value;
  }
  public resetExcludePatterns() {
    this._excludePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternsInput() {
    return this._excludePatterns;
  }

  // include_patterns - computed: false, optional: true, required: false
  private _includePatterns?: string[]; 
  public get includePatterns() {
    return this.getListAttribute('include_patterns');
  }
  public set includePatterns(value: string[]) {
    this._includePatterns = value;
  }
  public resetIncludePatterns() {
    this._includePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePatternsInput() {
    return this._includePatterns;
  }
}

export class WatchWatchResourceAntFilterList extends cdktf.ComplexList {
  public internalValue? : WatchWatchResourceAntFilter[] | cdktf.IResolvable

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
  public get(index: number): WatchWatchResourceAntFilterOutputReference {
    return new WatchWatchResourceAntFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WatchWatchResourceFilter {
  /**
  * The type of filter, such as `regex`, `path-regex`, `package-type`, or `mime-type`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#type Watch#type}
  */
  readonly type: string;
  /**
  * The value of the filter, such as the text of the regex, name of the package type, or mime type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#value Watch#value}
  */
  readonly value: string;
}

export function watchWatchResourceFilterToTerraform(struct?: WatchWatchResourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function watchWatchResourceFilterToHclTerraform(struct?: WatchWatchResourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WatchWatchResourceFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WatchWatchResourceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WatchWatchResourceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class WatchWatchResourceFilterList extends cdktf.ComplexList {
  public internalValue? : WatchWatchResourceFilter[] | cdktf.IResolvable

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
  public get(index: number): WatchWatchResourceFilterOutputReference {
    return new WatchWatchResourceFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WatchWatchResourceKvFilter {
  /**
  * The value of the filter, such as the property name of the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#key Watch#key}
  */
  readonly key: string;
  /**
  * The type of filter. Currently only support `property`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#type Watch#type}
  */
  readonly type: string;
  /**
  * The value of the filter, such as the property value of the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#value Watch#value}
  */
  readonly value: string;
}

export function watchWatchResourceKvFilterToTerraform(struct?: WatchWatchResourceKvFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function watchWatchResourceKvFilterToHclTerraform(struct?: WatchWatchResourceKvFilter | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WatchWatchResourceKvFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WatchWatchResourceKvFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WatchWatchResourceKvFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._type = value.type;
      this._value = value.value;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class WatchWatchResourceKvFilterList extends cdktf.ComplexList {
  public internalValue? : WatchWatchResourceKvFilter[] | cdktf.IResolvable

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
  public get(index: number): WatchWatchResourceKvFilterOutputReference {
    return new WatchWatchResourceKvFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WatchWatchResourcePathAntFilter {
  /**
  * The pattern will apply to the selected repositories. Simple comma separated wildcard patterns for repository artifact paths (with no leading slash). Ant-style path expressions are supported (*, **, ?). For example: 'org/apache/**'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#exclude_patterns Watch#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * The pattern will apply to the selected repositories. Simple comma separated wildcard patterns for repository artifact paths (with no leading slash). Ant-style path expressions are supported (*, **, ?). For example: 'org/apache/**'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#include_patterns Watch#include_patterns}
  */
  readonly includePatterns?: string[];
}

export function watchWatchResourcePathAntFilterToTerraform(struct?: WatchWatchResourcePathAntFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
  }
}


export function watchWatchResourcePathAntFilterToHclTerraform(struct?: WatchWatchResourcePathAntFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WatchWatchResourcePathAntFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WatchWatchResourcePathAntFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    if (this._includePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePatterns = this._includePatterns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WatchWatchResourcePathAntFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludePatterns = undefined;
      this._includePatterns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludePatterns = value.excludePatterns;
      this._includePatterns = value.includePatterns;
    }
  }

  // exclude_patterns - computed: false, optional: true, required: false
  private _excludePatterns?: string[]; 
  public get excludePatterns() {
    return this.getListAttribute('exclude_patterns');
  }
  public set excludePatterns(value: string[]) {
    this._excludePatterns = value;
  }
  public resetExcludePatterns() {
    this._excludePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternsInput() {
    return this._excludePatterns;
  }

  // include_patterns - computed: false, optional: true, required: false
  private _includePatterns?: string[]; 
  public get includePatterns() {
    return this.getListAttribute('include_patterns');
  }
  public set includePatterns(value: string[]) {
    this._includePatterns = value;
  }
  public resetIncludePatterns() {
    this._includePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePatternsInput() {
    return this._includePatterns;
  }
}

export class WatchWatchResourcePathAntFilterList extends cdktf.ComplexList {
  public internalValue? : WatchWatchResourcePathAntFilter[] | cdktf.IResolvable

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
  public get(index: number): WatchWatchResourcePathAntFilterOutputReference {
    return new WatchWatchResourcePathAntFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WatchWatchResource {
  /**
  * The ID number of a binary manager resource. Default value is `default`. To check the list of available binary managers, use the API call `${JFROG_URL}/xray/api/v1/binMgr` as an admin user, use `binMgrId` value. More info [here](https://www.jfrog.com/confluence/display/JFROG/Xray+REST+API#XrayRESTAPI-GetBinaryManager)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#bin_mgr_id Watch#bin_mgr_id}
  */
  readonly binMgrId?: string;
  /**
  * The name of the build, repository, project, or release bundle. Xray indexing must be enabled on the repository, build, or release bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#name Watch#name}
  */
  readonly name?: string;
  /**
  * Type of repository. Only applicable when `type` is `repository`. Options: `local` or `remote`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#repo_type Watch#repo_type}
  */
  readonly repoType?: string;
  /**
  * Type of resource to be watched. Options: repository, all-repos, build, all-builds, project, all-projects, releaseBundle, all-releaseBundles, releaseBundleV2, all-releaseBundlesV2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#type Watch#type}
  */
  readonly type: string;
  /**
  * ant_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#ant_filter Watch#ant_filter}
  */
  readonly antFilter?: WatchWatchResourceAntFilter[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#filter Watch#filter}
  */
  readonly filter?: WatchWatchResourceFilter[] | cdktf.IResolvable;
  /**
  * kv_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#kv_filter Watch#kv_filter}
  */
  readonly kvFilter?: WatchWatchResourceKvFilter[] | cdktf.IResolvable;
  /**
  * path_ant_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#path_ant_filter Watch#path_ant_filter}
  */
  readonly pathAntFilter?: WatchWatchResourcePathAntFilter[] | cdktf.IResolvable;
}

export function watchWatchResourceToTerraform(struct?: WatchWatchResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bin_mgr_id: cdktf.stringToTerraform(struct!.binMgrId),
    name: cdktf.stringToTerraform(struct!.name),
    repo_type: cdktf.stringToTerraform(struct!.repoType),
    type: cdktf.stringToTerraform(struct!.type),
    ant_filter: cdktf.listMapper(watchWatchResourceAntFilterToTerraform, true)(struct!.antFilter),
    filter: cdktf.listMapper(watchWatchResourceFilterToTerraform, true)(struct!.filter),
    kv_filter: cdktf.listMapper(watchWatchResourceKvFilterToTerraform, true)(struct!.kvFilter),
    path_ant_filter: cdktf.listMapper(watchWatchResourcePathAntFilterToTerraform, true)(struct!.pathAntFilter),
  }
}


export function watchWatchResourceToHclTerraform(struct?: WatchWatchResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bin_mgr_id: {
      value: cdktf.stringToHclTerraform(struct!.binMgrId),
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
    repo_type: {
      value: cdktf.stringToHclTerraform(struct!.repoType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ant_filter: {
      value: cdktf.listMapperHcl(watchWatchResourceAntFilterToHclTerraform, true)(struct!.antFilter),
      isBlock: true,
      type: "set",
      storageClassType: "WatchWatchResourceAntFilterList",
    },
    filter: {
      value: cdktf.listMapperHcl(watchWatchResourceFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "set",
      storageClassType: "WatchWatchResourceFilterList",
    },
    kv_filter: {
      value: cdktf.listMapperHcl(watchWatchResourceKvFilterToHclTerraform, true)(struct!.kvFilter),
      isBlock: true,
      type: "set",
      storageClassType: "WatchWatchResourceKvFilterList",
    },
    path_ant_filter: {
      value: cdktf.listMapperHcl(watchWatchResourcePathAntFilterToHclTerraform, true)(struct!.pathAntFilter),
      isBlock: true,
      type: "set",
      storageClassType: "WatchWatchResourcePathAntFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WatchWatchResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WatchWatchResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binMgrId !== undefined) {
      hasAnyValues = true;
      internalValueResult.binMgrId = this._binMgrId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._repoType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoType = this._repoType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._antFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.antFilter = this._antFilter?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._kvFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kvFilter = this._kvFilter?.internalValue;
    }
    if (this._pathAntFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathAntFilter = this._pathAntFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WatchWatchResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binMgrId = undefined;
      this._name = undefined;
      this._repoType = undefined;
      this._type = undefined;
      this._antFilter.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._kvFilter.internalValue = undefined;
      this._pathAntFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binMgrId = value.binMgrId;
      this._name = value.name;
      this._repoType = value.repoType;
      this._type = value.type;
      this._antFilter.internalValue = value.antFilter;
      this._filter.internalValue = value.filter;
      this._kvFilter.internalValue = value.kvFilter;
      this._pathAntFilter.internalValue = value.pathAntFilter;
    }
  }

  // bin_mgr_id - computed: true, optional: true, required: false
  private _binMgrId?: string; 
  public get binMgrId() {
    return this.getStringAttribute('bin_mgr_id');
  }
  public set binMgrId(value: string) {
    this._binMgrId = value;
  }
  public resetBinMgrId() {
    this._binMgrId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binMgrIdInput() {
    return this._binMgrId;
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

  // repo_type - computed: false, optional: true, required: false
  private _repoType?: string; 
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }
  public set repoType(value: string) {
    this._repoType = value;
  }
  public resetRepoType() {
    this._repoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTypeInput() {
    return this._repoType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // ant_filter - computed: false, optional: true, required: false
  private _antFilter = new WatchWatchResourceAntFilterList(this, "ant_filter", true);
  public get antFilter() {
    return this._antFilter;
  }
  public putAntFilter(value: WatchWatchResourceAntFilter[] | cdktf.IResolvable) {
    this._antFilter.internalValue = value;
  }
  public resetAntFilter() {
    this._antFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antFilterInput() {
    return this._antFilter.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new WatchWatchResourceFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: WatchWatchResourceFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // kv_filter - computed: false, optional: true, required: false
  private _kvFilter = new WatchWatchResourceKvFilterList(this, "kv_filter", true);
  public get kvFilter() {
    return this._kvFilter;
  }
  public putKvFilter(value: WatchWatchResourceKvFilter[] | cdktf.IResolvable) {
    this._kvFilter.internalValue = value;
  }
  public resetKvFilter() {
    this._kvFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvFilterInput() {
    return this._kvFilter.internalValue;
  }

  // path_ant_filter - computed: false, optional: true, required: false
  private _pathAntFilter = new WatchWatchResourcePathAntFilterList(this, "path_ant_filter", true);
  public get pathAntFilter() {
    return this._pathAntFilter;
  }
  public putPathAntFilter(value: WatchWatchResourcePathAntFilter[] | cdktf.IResolvable) {
    this._pathAntFilter.internalValue = value;
  }
  public resetPathAntFilter() {
    this._pathAntFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathAntFilterInput() {
    return this._pathAntFilter.internalValue;
  }
}

export class WatchWatchResourceList extends cdktf.ComplexList {
  public internalValue? : WatchWatchResource[] | cdktf.IResolvable

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
  public get(index: number): WatchWatchResourceOutputReference {
    return new WatchWatchResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch xray_watch}
*/
export class Watch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_watch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Watch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Watch to import
  * @param importFromId The id of the existing Watch that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Watch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_watch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.2/docs/resources/watch xray_watch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WatchConfig
  */
  public constructor(scope: Construct, id: string, config: WatchConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_watch',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.2'
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
    this._description = config.description;
    this._name = config.name;
    this._projectKey = config.projectKey;
    this._watchRecipients = config.watchRecipients;
    this._assignedPolicy.internalValue = config.assignedPolicy;
    this._watchResource.internalValue = config.watchResource;
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

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // watch_recipients - computed: false, optional: true, required: false
  private _watchRecipients?: string[]; 
  public get watchRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('watch_recipients'));
  }
  public set watchRecipients(value: string[]) {
    this._watchRecipients = value;
  }
  public resetWatchRecipients() {
    this._watchRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchRecipientsInput() {
    return this._watchRecipients;
  }

  // assigned_policy - computed: false, optional: true, required: false
  private _assignedPolicy = new WatchAssignedPolicyList(this, "assigned_policy", true);
  public get assignedPolicy() {
    return this._assignedPolicy;
  }
  public putAssignedPolicy(value: WatchAssignedPolicy[] | cdktf.IResolvable) {
    this._assignedPolicy.internalValue = value;
  }
  public resetAssignedPolicy() {
    this._assignedPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedPolicyInput() {
    return this._assignedPolicy.internalValue;
  }

  // watch_resource - computed: false, optional: true, required: false
  private _watchResource = new WatchWatchResourceList(this, "watch_resource", true);
  public get watchResource() {
    return this._watchResource;
  }
  public putWatchResource(value: WatchWatchResource[] | cdktf.IResolvable) {
    this._watchResource.internalValue = value;
  }
  public resetWatchResource() {
    this._watchResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchResourceInput() {
    return this._watchResource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
      watch_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._watchRecipients),
      assigned_policy: cdktf.listMapper(watchAssignedPolicyToTerraform, true)(this._assignedPolicy.internalValue),
      watch_resource: cdktf.listMapper(watchWatchResourceToTerraform, true)(this._watchResource.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watch_recipients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._watchRecipients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      assigned_policy: {
        value: cdktf.listMapperHcl(watchAssignedPolicyToHclTerraform, true)(this._assignedPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WatchAssignedPolicyList",
      },
      watch_resource: {
        value: cdktf.listMapperHcl(watchWatchResourceToHclTerraform, true)(this._watchResource.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WatchWatchResourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
