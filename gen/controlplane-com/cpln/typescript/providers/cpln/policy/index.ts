// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#description Policy#description}
  */
  readonly description?: string;
  /**
  * The GVC for `identity`, `workload` and `volumeset` target kinds only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#gvc Policy#gvc}
  */
  readonly gvc?: string;
  /**
  * Name of the Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#name Policy#name}
  */
  readonly name: string;
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#tags Policy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Set this value of this attribute to `all` if this policy should target all objects of the given target_kind. Otherwise, do not include the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#target Policy#target}
  */
  readonly target?: string;
  /**
  * The kind of resource to target (e.g., gvc, serviceaccount, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#target_kind Policy#target_kind}
  */
  readonly targetKind: string;
  /**
  * List of the targets this policy will be applied to. Not used if `target` is set to `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#target_links Policy#target_links}
  */
  readonly targetLinks?: string[];
  /**
  * binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#binding Policy#binding}
  */
  readonly binding?: PolicyBinding[] | cdktf.IResolvable;
  /**
  * target_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#target_query Policy#target_query}
  */
  readonly targetQuery?: PolicyTargetQuery[] | cdktf.IResolvable;
}
export interface PolicyBinding {
  /**
  * List of permissions to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#permissions Policy#permissions}
  */
  readonly permissions: string[];
  /**
  * List of the principals this binding will be applied to. Principal links format: `group/GROUP_NAME`, `user/USER_EMAIL`, `gvc/GVC_NAME/identity/IDENTITY_NAME`, `serviceaccount/SERVICE_ACCOUNT_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#principal_links Policy#principal_links}
  */
  readonly principalLinks: string[];
}

export function policyBindingToTerraform(struct?: PolicyBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
    principal_links: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principalLinks),
  }
}


export function policyBindingToHclTerraform(struct?: PolicyBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    principal_links: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principalLinks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._principalLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalLinks = this._principalLinks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissions = undefined;
      this._principalLinks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissions = value.permissions;
      this._principalLinks = value.principalLinks;
    }
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // principal_links - computed: false, optional: false, required: true
  private _principalLinks?: string[]; 
  public get principalLinks() {
    return cdktf.Fn.tolist(this.getListAttribute('principal_links'));
  }
  public set principalLinks(value: string[]) {
    this._principalLinks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalLinksInput() {
    return this._principalLinks;
  }
}

export class PolicyBindingList extends cdktf.ComplexList {
  public internalValue? : PolicyBinding[] | cdktf.IResolvable

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
  public get(index: number): PolicyBindingOutputReference {
    return new PolicyBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTargetQuerySpecTerms {
  /**
  * Type of query operation. Available values: `=`, `>`, `>=`, `<`, `<=`, `!=`, `exists`, `!exists`. Default: `=`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#op Policy#op}
  */
  readonly op?: string;
  /**
  * Property to use for query evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#property Policy#property}
  */
  readonly property?: string;
  /**
  * Relation to use for query evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#rel Policy#rel}
  */
  readonly rel?: string;
  /**
  * Tag key to use for query evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#tag Policy#tag}
  */
  readonly tag?: string;
  /**
  * Testing value for query evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#value Policy#value}
  */
  readonly value?: string;
}

export function policyTargetQuerySpecTermsToTerraform(struct?: PolicyTargetQuerySpecTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    property: cdktf.stringToTerraform(struct!.property),
    rel: cdktf.stringToTerraform(struct!.rel),
    tag: cdktf.stringToTerraform(struct!.tag),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyTargetQuerySpecTermsToHclTerraform(struct?: PolicyTargetQuerySpecTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rel: {
      value: cdktf.stringToHclTerraform(struct!.rel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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

export class PolicyTargetQuerySpecTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTargetQuerySpecTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._rel !== undefined) {
      hasAnyValues = true;
      internalValueResult.rel = this._rel;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTargetQuerySpecTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._property = undefined;
      this._rel = undefined;
      this._tag = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._property = value.property;
      this._rel = value.rel;
      this._tag = value.tag;
      this._value = value.value;
    }
  }

  // op - computed: true, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // rel - computed: false, optional: true, required: false
  private _rel?: string; 
  public get rel() {
    return this.getStringAttribute('rel');
  }
  public set rel(value: string) {
    this._rel = value;
  }
  public resetRel() {
    this._rel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relInput() {
    return this._rel;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PolicyTargetQuerySpecTermsList extends cdktf.ComplexList {
  public internalValue? : PolicyTargetQuerySpecTerms[] | cdktf.IResolvable

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
  public get(index: number): PolicyTargetQuerySpecTermsOutputReference {
    return new PolicyTargetQuerySpecTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTargetQuerySpec {
  /**
  * Type of match. Available values: `all`, `any`, `none`. Default: `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#match Policy#match}
  */
  readonly match?: string;
  /**
  * terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#terms Policy#terms}
  */
  readonly terms?: PolicyTargetQuerySpecTerms[] | cdktf.IResolvable;
}

export function policyTargetQuerySpecToTerraform(struct?: PolicyTargetQuerySpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    terms: cdktf.listMapper(policyTargetQuerySpecTermsToTerraform, true)(struct!.terms),
  }
}


export function policyTargetQuerySpecToHclTerraform(struct?: PolicyTargetQuerySpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terms: {
      value: cdktf.listMapperHcl(policyTargetQuerySpecTermsToHclTerraform, true)(struct!.terms),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyTargetQuerySpecTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTargetQuerySpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTargetQuerySpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._terms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terms = this._terms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTargetQuerySpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._terms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._terms.internalValue = value.terms;
    }
  }

  // match - computed: true, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // terms - computed: false, optional: true, required: false
  private _terms = new PolicyTargetQuerySpecTermsList(this, "terms", false);
  public get terms() {
    return this._terms;
  }
  public putTerms(value: PolicyTargetQuerySpecTerms[] | cdktf.IResolvable) {
    this._terms.internalValue = value;
  }
  public resetTerms() {
    this._terms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsInput() {
    return this._terms.internalValue;
  }
}

export class PolicyTargetQuerySpecList extends cdktf.ComplexList {
  public internalValue? : PolicyTargetQuerySpec[] | cdktf.IResolvable

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
  public get(index: number): PolicyTargetQuerySpecOutputReference {
    return new PolicyTargetQuerySpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTargetQuery {
  /**
  * Type of fetch. Specify either: `links` or `items`. Default: `items`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#fetch Policy#fetch}
  */
  readonly fetch?: string;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#spec Policy#spec}
  */
  readonly spec?: PolicyTargetQuerySpec[] | cdktf.IResolvable;
}

export function policyTargetQueryToTerraform(struct?: PolicyTargetQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fetch: cdktf.stringToTerraform(struct!.fetch),
    spec: cdktf.listMapper(policyTargetQuerySpecToTerraform, true)(struct!.spec),
  }
}


export function policyTargetQueryToHclTerraform(struct?: PolicyTargetQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fetch: {
      value: cdktf.stringToHclTerraform(struct!.fetch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec: {
      value: cdktf.listMapperHcl(policyTargetQuerySpecToHclTerraform, true)(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyTargetQuerySpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTargetQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTargetQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fetch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetch = this._fetch;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTargetQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fetch = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fetch = value.fetch;
      this._spec.internalValue = value.spec;
    }
  }

  // fetch - computed: true, optional: true, required: false
  private _fetch?: string; 
  public get fetch() {
    return this.getStringAttribute('fetch');
  }
  public set fetch(value: string) {
    this._fetch = value;
  }
  public resetFetch() {
    this._fetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchInput() {
    return this._fetch;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new PolicyTargetQuerySpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PolicyTargetQuerySpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class PolicyTargetQueryList extends cdktf.ComplexList {
  public internalValue? : PolicyTargetQuery[] | cdktf.IResolvable

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
  public get(index: number): PolicyTargetQueryOutputReference {
    return new PolicyTargetQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy cpln_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policy to import
  * @param importFromId The id of the existing Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/policy cpln_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cpln_policy',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.17',
        providerVersionConstraint: '1.2.17'
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
    this._gvc = config.gvc;
    this._name = config.name;
    this._tags = config.tags;
    this._target = config.target;
    this._targetKind = config.targetKind;
    this._targetLinks = config.targetLinks;
    this._binding.internalValue = config.binding;
    this._targetQuery.internalValue = config.targetQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpln_id - computed: true, optional: false, required: false
  public get cplnId() {
    return this.getStringAttribute('cpln_id');
  }

  // description - computed: true, optional: true, required: false
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

  // gvc - computed: false, optional: true, required: false
  private _gvc?: string; 
  public get gvc() {
    return this.getStringAttribute('gvc');
  }
  public set gvc(value: string) {
    this._gvc = value;
  }
  public resetGvc() {
    this._gvc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvcInput() {
    return this._gvc;
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

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_kind - computed: false, optional: false, required: true
  private _targetKind?: string; 
  public get targetKind() {
    return this.getStringAttribute('target_kind');
  }
  public set targetKind(value: string) {
    this._targetKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKindInput() {
    return this._targetKind;
  }

  // target_links - computed: false, optional: true, required: false
  private _targetLinks?: string[]; 
  public get targetLinks() {
    return cdktf.Fn.tolist(this.getListAttribute('target_links'));
  }
  public set targetLinks(value: string[]) {
    this._targetLinks = value;
  }
  public resetTargetLinks() {
    this._targetLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLinksInput() {
    return this._targetLinks;
  }

  // binding - computed: false, optional: true, required: false
  private _binding = new PolicyBindingList(this, "binding", true);
  public get binding() {
    return this._binding;
  }
  public putBinding(value: PolicyBinding[] | cdktf.IResolvable) {
    this._binding.internalValue = value;
  }
  public resetBinding() {
    this._binding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding.internalValue;
  }

  // target_query - computed: false, optional: true, required: false
  private _targetQuery = new PolicyTargetQueryList(this, "target_query", false);
  public get targetQuery() {
    return this._targetQuery;
  }
  public putTargetQuery(value: PolicyTargetQuery[] | cdktf.IResolvable) {
    this._targetQuery.internalValue = value;
  }
  public resetTargetQuery() {
    this._targetQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetQueryInput() {
    return this._targetQuery.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      gvc: cdktf.stringToTerraform(this._gvc),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target: cdktf.stringToTerraform(this._target),
      target_kind: cdktf.stringToTerraform(this._targetKind),
      target_links: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetLinks),
      binding: cdktf.listMapper(policyBindingToTerraform, true)(this._binding.internalValue),
      target_query: cdktf.listMapper(policyTargetQueryToTerraform, true)(this._targetQuery.internalValue),
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
      gvc: {
        value: cdktf.stringToHclTerraform(this._gvc),
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
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_kind: {
        value: cdktf.stringToHclTerraform(this._targetKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_links: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetLinks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      binding: {
        value: cdktf.listMapperHcl(policyBindingToHclTerraform, true)(this._binding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyBindingList",
      },
      target_query: {
        value: cdktf.listMapperHcl(policyTargetQueryToHclTerraform, true)(this._targetQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTargetQueryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
