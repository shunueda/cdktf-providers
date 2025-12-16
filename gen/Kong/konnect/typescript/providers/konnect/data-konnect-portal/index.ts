// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKonnectPortalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter portals returned in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#filter DataKonnectPortal#filter}
  */
  readonly filter?: DataKonnectPortalFilter;
  /**
  * Determines which page of the entities to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#page_number DataKonnectPortal#page_number}
  */
  readonly pageNumber?: number;
  /**
  * The maximum number of items to include per page. The last page of a collection may include fewer items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#page_size DataKonnectPortal#page_size}
  */
  readonly pageSize?: number;
  /**
  * Sorts a collection of portals. Supported sort attributes are:
  *   - name
  *   - description
  *   - authentication_enabled
  *   - rbac_enabled
  *   - auto_approve_applications
  *   - auto_approve_developers
  *   - default_domain
  *   - canonical_domain
  *   - created_at
  *   - updated_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#sort DataKonnectPortal#sort}
  */
  readonly sort?: string;
}
export interface DataKonnectPortalFilterCanonicalDomain {
  /**
  * The field contains the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#contains DataKonnectPortal#contains}
  */
  readonly contains?: string;
  /**
  * The field exactly matches the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#eq DataKonnectPortal#eq}
  */
  readonly eq?: string;
  /**
  * The field does not match the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#neq DataKonnectPortal#neq}
  */
  readonly neq?: string;
  /**
  * The field contains any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#ocontains DataKonnectPortal#ocontains}
  */
  readonly ocontains?: string;
  /**
  * The field matches any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#oeq DataKonnectPortal#oeq}
  */
  readonly oeq?: string;
}

export function dataKonnectPortalFilterCanonicalDomainToTerraform(struct?: DataKonnectPortalFilterCanonicalDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    eq: cdktf.stringToTerraform(struct!.eq),
    neq: cdktf.stringToTerraform(struct!.neq),
    ocontains: cdktf.stringToTerraform(struct!.ocontains),
    oeq: cdktf.stringToTerraform(struct!.oeq),
  }
}


export function dataKonnectPortalFilterCanonicalDomainToHclTerraform(struct?: DataKonnectPortalFilterCanonicalDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eq: {
      value: cdktf.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neq: {
      value: cdktf.stringToHclTerraform(struct!.neq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocontains: {
      value: cdktf.stringToHclTerraform(struct!.ocontains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oeq: {
      value: cdktf.stringToHclTerraform(struct!.oeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectPortalFilterCanonicalDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectPortalFilterCanonicalDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._neq !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq;
    }
    if (this._ocontains !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocontains = this._ocontains;
    }
    if (this._oeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.oeq = this._oeq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectPortalFilterCanonicalDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._eq = undefined;
      this._neq = undefined;
      this._ocontains = undefined;
      this._oeq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._eq = value.eq;
      this._neq = value.neq;
      this._ocontains = value.ocontains;
      this._oeq = value.oeq;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // neq - computed: false, optional: true, required: false
  private _neq?: string; 
  public get neq() {
    return this.getStringAttribute('neq');
  }
  public set neq(value: string) {
    this._neq = value;
  }
  public resetNeq() {
    this._neq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq;
  }

  // ocontains - computed: false, optional: true, required: false
  private _ocontains?: string; 
  public get ocontains() {
    return this.getStringAttribute('ocontains');
  }
  public set ocontains(value: string) {
    this._ocontains = value;
  }
  public resetOcontains() {
    this._ocontains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocontainsInput() {
    return this._ocontains;
  }

  // oeq - computed: false, optional: true, required: false
  private _oeq?: string; 
  public get oeq() {
    return this.getStringAttribute('oeq');
  }
  public set oeq(value: string) {
    this._oeq = value;
  }
  public resetOeq() {
    this._oeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oeqInput() {
    return this._oeq;
  }
}
export interface DataKonnectPortalFilterDefaultApiVisibility {
  /**
  * The field contains the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#contains DataKonnectPortal#contains}
  */
  readonly contains?: string;
  /**
  * The field exactly matches the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#eq DataKonnectPortal#eq}
  */
  readonly eq?: string;
  /**
  * The field does not match the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#neq DataKonnectPortal#neq}
  */
  readonly neq?: string;
  /**
  * The field contains any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#ocontains DataKonnectPortal#ocontains}
  */
  readonly ocontains?: string;
  /**
  * The field matches any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#oeq DataKonnectPortal#oeq}
  */
  readonly oeq?: string;
}

export function dataKonnectPortalFilterDefaultApiVisibilityToTerraform(struct?: DataKonnectPortalFilterDefaultApiVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    eq: cdktf.stringToTerraform(struct!.eq),
    neq: cdktf.stringToTerraform(struct!.neq),
    ocontains: cdktf.stringToTerraform(struct!.ocontains),
    oeq: cdktf.stringToTerraform(struct!.oeq),
  }
}


export function dataKonnectPortalFilterDefaultApiVisibilityToHclTerraform(struct?: DataKonnectPortalFilterDefaultApiVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eq: {
      value: cdktf.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neq: {
      value: cdktf.stringToHclTerraform(struct!.neq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocontains: {
      value: cdktf.stringToHclTerraform(struct!.ocontains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oeq: {
      value: cdktf.stringToHclTerraform(struct!.oeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectPortalFilterDefaultApiVisibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectPortalFilterDefaultApiVisibility | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._neq !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq;
    }
    if (this._ocontains !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocontains = this._ocontains;
    }
    if (this._oeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.oeq = this._oeq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectPortalFilterDefaultApiVisibility | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._eq = undefined;
      this._neq = undefined;
      this._ocontains = undefined;
      this._oeq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._eq = value.eq;
      this._neq = value.neq;
      this._ocontains = value.ocontains;
      this._oeq = value.oeq;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // neq - computed: false, optional: true, required: false
  private _neq?: string; 
  public get neq() {
    return this.getStringAttribute('neq');
  }
  public set neq(value: string) {
    this._neq = value;
  }
  public resetNeq() {
    this._neq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq;
  }

  // ocontains - computed: false, optional: true, required: false
  private _ocontains?: string; 
  public get ocontains() {
    return this.getStringAttribute('ocontains');
  }
  public set ocontains(value: string) {
    this._ocontains = value;
  }
  public resetOcontains() {
    this._ocontains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocontainsInput() {
    return this._ocontains;
  }

  // oeq - computed: false, optional: true, required: false
  private _oeq?: string; 
  public get oeq() {
    return this.getStringAttribute('oeq');
  }
  public set oeq(value: string) {
    this._oeq = value;
  }
  public resetOeq() {
    this._oeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oeqInput() {
    return this._oeq;
  }
}
export interface DataKonnectPortalFilterDefaultApplicationAuthStrategyId {
  /**
  * The field exactly matches the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#eq DataKonnectPortal#eq}
  */
  readonly eq?: string;
  /**
  * The field does not match the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#neq DataKonnectPortal#neq}
  */
  readonly neq?: string;
  /**
  * The field matches any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#oeq DataKonnectPortal#oeq}
  */
  readonly oeq?: string;
}

export function dataKonnectPortalFilterDefaultApplicationAuthStrategyIdToTerraform(struct?: DataKonnectPortalFilterDefaultApplicationAuthStrategyId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    neq: cdktf.stringToTerraform(struct!.neq),
    oeq: cdktf.stringToTerraform(struct!.oeq),
  }
}


export function dataKonnectPortalFilterDefaultApplicationAuthStrategyIdToHclTerraform(struct?: DataKonnectPortalFilterDefaultApplicationAuthStrategyId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktf.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neq: {
      value: cdktf.stringToHclTerraform(struct!.neq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oeq: {
      value: cdktf.stringToHclTerraform(struct!.oeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectPortalFilterDefaultApplicationAuthStrategyIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectPortalFilterDefaultApplicationAuthStrategyId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._neq !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq;
    }
    if (this._oeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.oeq = this._oeq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectPortalFilterDefaultApplicationAuthStrategyId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._neq = undefined;
      this._oeq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._neq = value.neq;
      this._oeq = value.oeq;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // neq - computed: false, optional: true, required: false
  private _neq?: string; 
  public get neq() {
    return this.getStringAttribute('neq');
  }
  public set neq(value: string) {
    this._neq = value;
  }
  public resetNeq() {
    this._neq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq;
  }

  // oeq - computed: false, optional: true, required: false
  private _oeq?: string; 
  public get oeq() {
    return this.getStringAttribute('oeq');
  }
  public set oeq(value: string) {
    this._oeq = value;
  }
  public resetOeq() {
    this._oeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oeqInput() {
    return this._oeq;
  }
}
export interface DataKonnectPortalFilterDefaultDomain {
  /**
  * The field contains the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#contains DataKonnectPortal#contains}
  */
  readonly contains?: string;
  /**
  * The field exactly matches the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#eq DataKonnectPortal#eq}
  */
  readonly eq?: string;
  /**
  * The field does not match the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#neq DataKonnectPortal#neq}
  */
  readonly neq?: string;
  /**
  * The field contains any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#ocontains DataKonnectPortal#ocontains}
  */
  readonly ocontains?: string;
  /**
  * The field matches any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#oeq DataKonnectPortal#oeq}
  */
  readonly oeq?: string;
}

export function dataKonnectPortalFilterDefaultDomainToTerraform(struct?: DataKonnectPortalFilterDefaultDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    eq: cdktf.stringToTerraform(struct!.eq),
    neq: cdktf.stringToTerraform(struct!.neq),
    ocontains: cdktf.stringToTerraform(struct!.ocontains),
    oeq: cdktf.stringToTerraform(struct!.oeq),
  }
}


export function dataKonnectPortalFilterDefaultDomainToHclTerraform(struct?: DataKonnectPortalFilterDefaultDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eq: {
      value: cdktf.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neq: {
      value: cdktf.stringToHclTerraform(struct!.neq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocontains: {
      value: cdktf.stringToHclTerraform(struct!.ocontains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oeq: {
      value: cdktf.stringToHclTerraform(struct!.oeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectPortalFilterDefaultDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectPortalFilterDefaultDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._neq !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq;
    }
    if (this._ocontains !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocontains = this._ocontains;
    }
    if (this._oeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.oeq = this._oeq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectPortalFilterDefaultDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._eq = undefined;
      this._neq = undefined;
      this._ocontains = undefined;
      this._oeq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._eq = value.eq;
      this._neq = value.neq;
      this._ocontains = value.ocontains;
      this._oeq = value.oeq;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // neq - computed: false, optional: true, required: false
  private _neq?: string; 
  public get neq() {
    return this.getStringAttribute('neq');
  }
  public set neq(value: string) {
    this._neq = value;
  }
  public resetNeq() {
    this._neq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq;
  }

  // ocontains - computed: false, optional: true, required: false
  private _ocontains?: string; 
  public get ocontains() {
    return this.getStringAttribute('ocontains');
  }
  public set ocontains(value: string) {
    this._ocontains = value;
  }
  public resetOcontains() {
    this._ocontains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocontainsInput() {
    return this._ocontains;
  }

  // oeq - computed: false, optional: true, required: false
  private _oeq?: string; 
  public get oeq() {
    return this.getStringAttribute('oeq');
  }
  public set oeq(value: string) {
    this._oeq = value;
  }
  public resetOeq() {
    this._oeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oeqInput() {
    return this._oeq;
  }
}
export interface DataKonnectPortalFilterDefaultPageVisibility {
  /**
  * The field contains the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#contains DataKonnectPortal#contains}
  */
  readonly contains?: string;
  /**
  * The field exactly matches the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#eq DataKonnectPortal#eq}
  */
  readonly eq?: string;
  /**
  * The field does not match the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#neq DataKonnectPortal#neq}
  */
  readonly neq?: string;
  /**
  * The field contains any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#ocontains DataKonnectPortal#ocontains}
  */
  readonly ocontains?: string;
  /**
  * The field matches any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#oeq DataKonnectPortal#oeq}
  */
  readonly oeq?: string;
}

export function dataKonnectPortalFilterDefaultPageVisibilityToTerraform(struct?: DataKonnectPortalFilterDefaultPageVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    eq: cdktf.stringToTerraform(struct!.eq),
    neq: cdktf.stringToTerraform(struct!.neq),
    ocontains: cdktf.stringToTerraform(struct!.ocontains),
    oeq: cdktf.stringToTerraform(struct!.oeq),
  }
}


export function dataKonnectPortalFilterDefaultPageVisibilityToHclTerraform(struct?: DataKonnectPortalFilterDefaultPageVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eq: {
      value: cdktf.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neq: {
      value: cdktf.stringToHclTerraform(struct!.neq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocontains: {
      value: cdktf.stringToHclTerraform(struct!.ocontains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oeq: {
      value: cdktf.stringToHclTerraform(struct!.oeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectPortalFilterDefaultPageVisibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectPortalFilterDefaultPageVisibility | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._neq !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq;
    }
    if (this._ocontains !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocontains = this._ocontains;
    }
    if (this._oeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.oeq = this._oeq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectPortalFilterDefaultPageVisibility | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._eq = undefined;
      this._neq = undefined;
      this._ocontains = undefined;
      this._oeq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._eq = value.eq;
      this._neq = value.neq;
      this._ocontains = value.ocontains;
      this._oeq = value.oeq;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // neq - computed: false, optional: true, required: false
  private _neq?: string; 
  public get neq() {
    return this.getStringAttribute('neq');
  }
  public set neq(value: string) {
    this._neq = value;
  }
  public resetNeq() {
    this._neq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq;
  }

  // ocontains - computed: false, optional: true, required: false
  private _ocontains?: string; 
  public get ocontains() {
    return this.getStringAttribute('ocontains');
  }
  public set ocontains(value: string) {
    this._ocontains = value;
  }
  public resetOcontains() {
    this._ocontains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocontainsInput() {
    return this._ocontains;
  }

  // oeq - computed: false, optional: true, required: false
  private _oeq?: string; 
  public get oeq() {
    return this.getStringAttribute('oeq');
  }
  public set oeq(value: string) {
    this._oeq = value;
  }
  public resetOeq() {
    this._oeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oeqInput() {
    return this._oeq;
  }
}
export interface DataKonnectPortalFilterDescription {
  /**
  * The field contains the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#contains DataKonnectPortal#contains}
  */
  readonly contains?: string;
  /**
  * The field exactly matches the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#eq DataKonnectPortal#eq}
  */
  readonly eq?: string;
  /**
  * The field does not match the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#neq DataKonnectPortal#neq}
  */
  readonly neq?: string;
  /**
  * The field contains any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#ocontains DataKonnectPortal#ocontains}
  */
  readonly ocontains?: string;
  /**
  * The field matches any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#oeq DataKonnectPortal#oeq}
  */
  readonly oeq?: string;
}

export function dataKonnectPortalFilterDescriptionToTerraform(struct?: DataKonnectPortalFilterDescription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    eq: cdktf.stringToTerraform(struct!.eq),
    neq: cdktf.stringToTerraform(struct!.neq),
    ocontains: cdktf.stringToTerraform(struct!.ocontains),
    oeq: cdktf.stringToTerraform(struct!.oeq),
  }
}


export function dataKonnectPortalFilterDescriptionToHclTerraform(struct?: DataKonnectPortalFilterDescription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eq: {
      value: cdktf.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neq: {
      value: cdktf.stringToHclTerraform(struct!.neq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocontains: {
      value: cdktf.stringToHclTerraform(struct!.ocontains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oeq: {
      value: cdktf.stringToHclTerraform(struct!.oeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectPortalFilterDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectPortalFilterDescription | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._neq !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq;
    }
    if (this._ocontains !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocontains = this._ocontains;
    }
    if (this._oeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.oeq = this._oeq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectPortalFilterDescription | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._eq = undefined;
      this._neq = undefined;
      this._ocontains = undefined;
      this._oeq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._eq = value.eq;
      this._neq = value.neq;
      this._ocontains = value.ocontains;
      this._oeq = value.oeq;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // neq - computed: false, optional: true, required: false
  private _neq?: string; 
  public get neq() {
    return this.getStringAttribute('neq');
  }
  public set neq(value: string) {
    this._neq = value;
  }
  public resetNeq() {
    this._neq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq;
  }

  // ocontains - computed: false, optional: true, required: false
  private _ocontains?: string; 
  public get ocontains() {
    return this.getStringAttribute('ocontains');
  }
  public set ocontains(value: string) {
    this._ocontains = value;
  }
  public resetOcontains() {
    this._ocontains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocontainsInput() {
    return this._ocontains;
  }

  // oeq - computed: false, optional: true, required: false
  private _oeq?: string; 
  public get oeq() {
    return this.getStringAttribute('oeq');
  }
  public set oeq(value: string) {
    this._oeq = value;
  }
  public resetOeq() {
    this._oeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oeqInput() {
    return this._oeq;
  }
}
export interface DataKonnectPortalFilterId {
  /**
  * The field exactly matches the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#eq DataKonnectPortal#eq}
  */
  readonly eq?: string;
  /**
  * The field does not match the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#neq DataKonnectPortal#neq}
  */
  readonly neq?: string;
  /**
  * The field matches any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#oeq DataKonnectPortal#oeq}
  */
  readonly oeq?: string;
}

export function dataKonnectPortalFilterIdToTerraform(struct?: DataKonnectPortalFilterId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    neq: cdktf.stringToTerraform(struct!.neq),
    oeq: cdktf.stringToTerraform(struct!.oeq),
  }
}


export function dataKonnectPortalFilterIdToHclTerraform(struct?: DataKonnectPortalFilterId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktf.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neq: {
      value: cdktf.stringToHclTerraform(struct!.neq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oeq: {
      value: cdktf.stringToHclTerraform(struct!.oeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectPortalFilterIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectPortalFilterId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._neq !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq;
    }
    if (this._oeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.oeq = this._oeq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectPortalFilterId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._neq = undefined;
      this._oeq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._neq = value.neq;
      this._oeq = value.oeq;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // neq - computed: false, optional: true, required: false
  private _neq?: string; 
  public get neq() {
    return this.getStringAttribute('neq');
  }
  public set neq(value: string) {
    this._neq = value;
  }
  public resetNeq() {
    this._neq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq;
  }

  // oeq - computed: false, optional: true, required: false
  private _oeq?: string; 
  public get oeq() {
    return this.getStringAttribute('oeq');
  }
  public set oeq(value: string) {
    this._oeq = value;
  }
  public resetOeq() {
    this._oeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oeqInput() {
    return this._oeq;
  }
}
export interface DataKonnectPortalFilterName {
  /**
  * The field contains the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#contains DataKonnectPortal#contains}
  */
  readonly contains?: string;
  /**
  * The field exactly matches the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#eq DataKonnectPortal#eq}
  */
  readonly eq?: string;
  /**
  * The field does not match the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#neq DataKonnectPortal#neq}
  */
  readonly neq?: string;
  /**
  * The field contains any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#ocontains DataKonnectPortal#ocontains}
  */
  readonly ocontains?: string;
  /**
  * The field matches any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#oeq DataKonnectPortal#oeq}
  */
  readonly oeq?: string;
}

export function dataKonnectPortalFilterNameToTerraform(struct?: DataKonnectPortalFilterName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    eq: cdktf.stringToTerraform(struct!.eq),
    neq: cdktf.stringToTerraform(struct!.neq),
    ocontains: cdktf.stringToTerraform(struct!.ocontains),
    oeq: cdktf.stringToTerraform(struct!.oeq),
  }
}


export function dataKonnectPortalFilterNameToHclTerraform(struct?: DataKonnectPortalFilterName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eq: {
      value: cdktf.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neq: {
      value: cdktf.stringToHclTerraform(struct!.neq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocontains: {
      value: cdktf.stringToHclTerraform(struct!.ocontains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oeq: {
      value: cdktf.stringToHclTerraform(struct!.oeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectPortalFilterNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectPortalFilterName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._neq !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq;
    }
    if (this._ocontains !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocontains = this._ocontains;
    }
    if (this._oeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.oeq = this._oeq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectPortalFilterName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._eq = undefined;
      this._neq = undefined;
      this._ocontains = undefined;
      this._oeq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._eq = value.eq;
      this._neq = value.neq;
      this._ocontains = value.ocontains;
      this._oeq = value.oeq;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // neq - computed: false, optional: true, required: false
  private _neq?: string; 
  public get neq() {
    return this.getStringAttribute('neq');
  }
  public set neq(value: string) {
    this._neq = value;
  }
  public resetNeq() {
    this._neq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq;
  }

  // ocontains - computed: false, optional: true, required: false
  private _ocontains?: string; 
  public get ocontains() {
    return this.getStringAttribute('ocontains');
  }
  public set ocontains(value: string) {
    this._ocontains = value;
  }
  public resetOcontains() {
    this._ocontains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocontainsInput() {
    return this._ocontains;
  }

  // oeq - computed: false, optional: true, required: false
  private _oeq?: string; 
  public get oeq() {
    return this.getStringAttribute('oeq');
  }
  public set oeq(value: string) {
    this._oeq = value;
  }
  public resetOeq() {
    this._oeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oeqInput() {
    return this._oeq;
  }
}
export interface DataKonnectPortalFilter {
  /**
  * Filter by a boolean value (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#authentication_enabled DataKonnectPortal#authentication_enabled}
  */
  readonly authenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Filter by a boolean value (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#auto_approve_applications DataKonnectPortal#auto_approve_applications}
  */
  readonly autoApproveApplications?: boolean | cdktf.IResolvable;
  /**
  * Filter by a boolean value (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#auto_approve_developers DataKonnectPortal#auto_approve_developers}
  */
  readonly autoApproveDevelopers?: boolean | cdktf.IResolvable;
  /**
  * Filter using **one** of the following operators: `eq`, `oeq`, `neq`, `contains`, `ocontains`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#canonical_domain DataKonnectPortal#canonical_domain}
  */
  readonly canonicalDomain?: DataKonnectPortalFilterCanonicalDomain;
  /**
  * Filter using **one** of the following operators: `eq`, `oeq`, `neq`, `contains`, `ocontains`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#default_api_visibility DataKonnectPortal#default_api_visibility}
  */
  readonly defaultApiVisibility?: DataKonnectPortalFilterDefaultApiVisibility;
  /**
  * Filter using **one** of the following operators: `eq`, `oeq`, `neq`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#default_application_auth_strategy_id DataKonnectPortal#default_application_auth_strategy_id}
  */
  readonly defaultApplicationAuthStrategyId?: DataKonnectPortalFilterDefaultApplicationAuthStrategyId;
  /**
  * Filter using **one** of the following operators: `eq`, `oeq`, `neq`, `contains`, `ocontains`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#default_domain DataKonnectPortal#default_domain}
  */
  readonly defaultDomain?: DataKonnectPortalFilterDefaultDomain;
  /**
  * Filter using **one** of the following operators: `eq`, `oeq`, `neq`, `contains`, `ocontains`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#default_page_visibility DataKonnectPortal#default_page_visibility}
  */
  readonly defaultPageVisibility?: DataKonnectPortalFilterDefaultPageVisibility;
  /**
  * Filter using **one** of the following operators: `eq`, `oeq`, `neq`, `contains`, `ocontains`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#description DataKonnectPortal#description}
  */
  readonly description?: DataKonnectPortalFilterDescription;
  /**
  * Filter using **one** of the following operators: `eq`, `oeq`, `neq`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#id DataKonnectPortal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: DataKonnectPortalFilterId;
  /**
  * Filter using **one** of the following operators: `eq`, `oeq`, `neq`, `contains`, `ocontains`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#name DataKonnectPortal#name}
  */
  readonly name?: DataKonnectPortalFilterName;
  /**
  * Filter by a boolean value (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#rbac_enabled DataKonnectPortal#rbac_enabled}
  */
  readonly rbacEnabled?: boolean | cdktf.IResolvable;
}

export function dataKonnectPortalFilterToTerraform(struct?: DataKonnectPortalFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_enabled: cdktf.booleanToTerraform(struct!.authenticationEnabled),
    auto_approve_applications: cdktf.booleanToTerraform(struct!.autoApproveApplications),
    auto_approve_developers: cdktf.booleanToTerraform(struct!.autoApproveDevelopers),
    canonical_domain: dataKonnectPortalFilterCanonicalDomainToTerraform(struct!.canonicalDomain),
    default_api_visibility: dataKonnectPortalFilterDefaultApiVisibilityToTerraform(struct!.defaultApiVisibility),
    default_application_auth_strategy_id: dataKonnectPortalFilterDefaultApplicationAuthStrategyIdToTerraform(struct!.defaultApplicationAuthStrategyId),
    default_domain: dataKonnectPortalFilterDefaultDomainToTerraform(struct!.defaultDomain),
    default_page_visibility: dataKonnectPortalFilterDefaultPageVisibilityToTerraform(struct!.defaultPageVisibility),
    description: dataKonnectPortalFilterDescriptionToTerraform(struct!.description),
    id: dataKonnectPortalFilterIdToTerraform(struct!.id),
    name: dataKonnectPortalFilterNameToTerraform(struct!.name),
    rbac_enabled: cdktf.booleanToTerraform(struct!.rbacEnabled),
  }
}


export function dataKonnectPortalFilterToHclTerraform(struct?: DataKonnectPortalFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.authenticationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_approve_applications: {
      value: cdktf.booleanToHclTerraform(struct!.autoApproveApplications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_approve_developers: {
      value: cdktf.booleanToHclTerraform(struct!.autoApproveDevelopers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    canonical_domain: {
      value: dataKonnectPortalFilterCanonicalDomainToHclTerraform(struct!.canonicalDomain),
      isBlock: true,
      type: "struct",
      storageClassType: "DataKonnectPortalFilterCanonicalDomain",
    },
    default_api_visibility: {
      value: dataKonnectPortalFilterDefaultApiVisibilityToHclTerraform(struct!.defaultApiVisibility),
      isBlock: true,
      type: "struct",
      storageClassType: "DataKonnectPortalFilterDefaultApiVisibility",
    },
    default_application_auth_strategy_id: {
      value: dataKonnectPortalFilterDefaultApplicationAuthStrategyIdToHclTerraform(struct!.defaultApplicationAuthStrategyId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataKonnectPortalFilterDefaultApplicationAuthStrategyId",
    },
    default_domain: {
      value: dataKonnectPortalFilterDefaultDomainToHclTerraform(struct!.defaultDomain),
      isBlock: true,
      type: "struct",
      storageClassType: "DataKonnectPortalFilterDefaultDomain",
    },
    default_page_visibility: {
      value: dataKonnectPortalFilterDefaultPageVisibilityToHclTerraform(struct!.defaultPageVisibility),
      isBlock: true,
      type: "struct",
      storageClassType: "DataKonnectPortalFilterDefaultPageVisibility",
    },
    description: {
      value: dataKonnectPortalFilterDescriptionToHclTerraform(struct!.description),
      isBlock: true,
      type: "struct",
      storageClassType: "DataKonnectPortalFilterDescription",
    },
    id: {
      value: dataKonnectPortalFilterIdToHclTerraform(struct!.id),
      isBlock: true,
      type: "struct",
      storageClassType: "DataKonnectPortalFilterId",
    },
    name: {
      value: dataKonnectPortalFilterNameToHclTerraform(struct!.name),
      isBlock: true,
      type: "struct",
      storageClassType: "DataKonnectPortalFilterName",
    },
    rbac_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rbacEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectPortalFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectPortalFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationEnabled = this._authenticationEnabled;
    }
    if (this._autoApproveApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApproveApplications = this._autoApproveApplications;
    }
    if (this._autoApproveDevelopers !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApproveDevelopers = this._autoApproveDevelopers;
    }
    if (this._canonicalDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canonicalDomain = this._canonicalDomain?.internalValue;
    }
    if (this._defaultApiVisibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultApiVisibility = this._defaultApiVisibility?.internalValue;
    }
    if (this._defaultApplicationAuthStrategyId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultApplicationAuthStrategyId = this._defaultApplicationAuthStrategyId?.internalValue;
    }
    if (this._defaultDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDomain = this._defaultDomain?.internalValue;
    }
    if (this._defaultPageVisibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPageVisibility = this._defaultPageVisibility?.internalValue;
    }
    if (this._description?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description?.internalValue;
    }
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    if (this._rbacEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbacEnabled = this._rbacEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectPortalFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationEnabled = undefined;
      this._autoApproveApplications = undefined;
      this._autoApproveDevelopers = undefined;
      this._canonicalDomain.internalValue = undefined;
      this._defaultApiVisibility.internalValue = undefined;
      this._defaultApplicationAuthStrategyId.internalValue = undefined;
      this._defaultDomain.internalValue = undefined;
      this._defaultPageVisibility.internalValue = undefined;
      this._description.internalValue = undefined;
      this._id.internalValue = undefined;
      this._name.internalValue = undefined;
      this._rbacEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationEnabled = value.authenticationEnabled;
      this._autoApproveApplications = value.autoApproveApplications;
      this._autoApproveDevelopers = value.autoApproveDevelopers;
      this._canonicalDomain.internalValue = value.canonicalDomain;
      this._defaultApiVisibility.internalValue = value.defaultApiVisibility;
      this._defaultApplicationAuthStrategyId.internalValue = value.defaultApplicationAuthStrategyId;
      this._defaultDomain.internalValue = value.defaultDomain;
      this._defaultPageVisibility.internalValue = value.defaultPageVisibility;
      this._description.internalValue = value.description;
      this._id.internalValue = value.id;
      this._name.internalValue = value.name;
      this._rbacEnabled = value.rbacEnabled;
    }
  }

  // authentication_enabled - computed: false, optional: true, required: false
  private _authenticationEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationEnabled() {
    return this.getBooleanAttribute('authentication_enabled');
  }
  public set authenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationEnabled = value;
  }
  public resetAuthenticationEnabled() {
    this._authenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEnabledInput() {
    return this._authenticationEnabled;
  }

  // auto_approve_applications - computed: false, optional: true, required: false
  private _autoApproveApplications?: boolean | cdktf.IResolvable; 
  public get autoApproveApplications() {
    return this.getBooleanAttribute('auto_approve_applications');
  }
  public set autoApproveApplications(value: boolean | cdktf.IResolvable) {
    this._autoApproveApplications = value;
  }
  public resetAutoApproveApplications() {
    this._autoApproveApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveApplicationsInput() {
    return this._autoApproveApplications;
  }

  // auto_approve_developers - computed: false, optional: true, required: false
  private _autoApproveDevelopers?: boolean | cdktf.IResolvable; 
  public get autoApproveDevelopers() {
    return this.getBooleanAttribute('auto_approve_developers');
  }
  public set autoApproveDevelopers(value: boolean | cdktf.IResolvable) {
    this._autoApproveDevelopers = value;
  }
  public resetAutoApproveDevelopers() {
    this._autoApproveDevelopers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveDevelopersInput() {
    return this._autoApproveDevelopers;
  }

  // canonical_domain - computed: false, optional: true, required: false
  private _canonicalDomain = new DataKonnectPortalFilterCanonicalDomainOutputReference(this, "canonical_domain");
  public get canonicalDomain() {
    return this._canonicalDomain;
  }
  public putCanonicalDomain(value: DataKonnectPortalFilterCanonicalDomain) {
    this._canonicalDomain.internalValue = value;
  }
  public resetCanonicalDomain() {
    this._canonicalDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalDomainInput() {
    return this._canonicalDomain.internalValue;
  }

  // default_api_visibility - computed: false, optional: true, required: false
  private _defaultApiVisibility = new DataKonnectPortalFilterDefaultApiVisibilityOutputReference(this, "default_api_visibility");
  public get defaultApiVisibility() {
    return this._defaultApiVisibility;
  }
  public putDefaultApiVisibility(value: DataKonnectPortalFilterDefaultApiVisibility) {
    this._defaultApiVisibility.internalValue = value;
  }
  public resetDefaultApiVisibility() {
    this._defaultApiVisibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApiVisibilityInput() {
    return this._defaultApiVisibility.internalValue;
  }

  // default_application_auth_strategy_id - computed: false, optional: true, required: false
  private _defaultApplicationAuthStrategyId = new DataKonnectPortalFilterDefaultApplicationAuthStrategyIdOutputReference(this, "default_application_auth_strategy_id");
  public get defaultApplicationAuthStrategyId() {
    return this._defaultApplicationAuthStrategyId;
  }
  public putDefaultApplicationAuthStrategyId(value: DataKonnectPortalFilterDefaultApplicationAuthStrategyId) {
    this._defaultApplicationAuthStrategyId.internalValue = value;
  }
  public resetDefaultApplicationAuthStrategyId() {
    this._defaultApplicationAuthStrategyId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApplicationAuthStrategyIdInput() {
    return this._defaultApplicationAuthStrategyId.internalValue;
  }

  // default_domain - computed: false, optional: true, required: false
  private _defaultDomain = new DataKonnectPortalFilterDefaultDomainOutputReference(this, "default_domain");
  public get defaultDomain() {
    return this._defaultDomain;
  }
  public putDefaultDomain(value: DataKonnectPortalFilterDefaultDomain) {
    this._defaultDomain.internalValue = value;
  }
  public resetDefaultDomain() {
    this._defaultDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDomainInput() {
    return this._defaultDomain.internalValue;
  }

  // default_page_visibility - computed: false, optional: true, required: false
  private _defaultPageVisibility = new DataKonnectPortalFilterDefaultPageVisibilityOutputReference(this, "default_page_visibility");
  public get defaultPageVisibility() {
    return this._defaultPageVisibility;
  }
  public putDefaultPageVisibility(value: DataKonnectPortalFilterDefaultPageVisibility) {
    this._defaultPageVisibility.internalValue = value;
  }
  public resetDefaultPageVisibility() {
    this._defaultPageVisibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPageVisibilityInput() {
    return this._defaultPageVisibility.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description = new DataKonnectPortalFilterDescriptionOutputReference(this, "description");
  public get description() {
    return this._description;
  }
  public putDescription(value: DataKonnectPortalFilterDescription) {
    this._description.internalValue = value;
  }
  public resetDescription() {
    this._description.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id = new DataKonnectPortalFilterIdOutputReference(this, "id");
  public get id() {
    return this._id;
  }
  public putId(value: DataKonnectPortalFilterId) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name = new DataKonnectPortalFilterNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: DataKonnectPortalFilterName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // rbac_enabled - computed: false, optional: true, required: false
  private _rbacEnabled?: boolean | cdktf.IResolvable; 
  public get rbacEnabled() {
    return this.getBooleanAttribute('rbac_enabled');
  }
  public set rbacEnabled(value: boolean | cdktf.IResolvable) {
    this._rbacEnabled = value;
  }
  public resetRbacEnabled() {
    this._rbacEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacEnabledInput() {
    return this._rbacEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal konnect_portal}
*/
export class DataKonnectPortal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKonnectPortal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKonnectPortal to import
  * @param importFromId The id of the existing DataKonnectPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKonnectPortal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/portal konnect_portal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKonnectPortalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKonnectPortalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'konnect_portal',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
    this._sort = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_enabled - computed: true, optional: false, required: false
  public get authenticationEnabled() {
    return this.getBooleanAttribute('authentication_enabled');
  }

  // auto_approve_applications - computed: true, optional: false, required: false
  public get autoApproveApplications() {
    return this.getBooleanAttribute('auto_approve_applications');
  }

  // auto_approve_developers - computed: true, optional: false, required: false
  public get autoApproveDevelopers() {
    return this.getBooleanAttribute('auto_approve_developers');
  }

  // canonical_domain - computed: true, optional: false, required: false
  public get canonicalDomain() {
    return this.getStringAttribute('canonical_domain');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_api_visibility - computed: true, optional: false, required: false
  public get defaultApiVisibility() {
    return this.getStringAttribute('default_api_visibility');
  }

  // default_application_auth_strategy_id - computed: true, optional: false, required: false
  public get defaultApplicationAuthStrategyId() {
    return this.getStringAttribute('default_application_auth_strategy_id');
  }

  // default_domain - computed: true, optional: false, required: false
  public get defaultDomain() {
    return this.getStringAttribute('default_domain');
  }

  // default_page_visibility - computed: true, optional: false, required: false
  public get defaultPageVisibility() {
    return this.getStringAttribute('default_page_visibility');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataKonnectPortalFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataKonnectPortalFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // page_number - computed: false, optional: true, required: false
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  public resetPageNumber() {
    this._pageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // rbac_enabled - computed: true, optional: false, required: false
  public get rbacEnabled() {
    return this.getBooleanAttribute('rbac_enabled');
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataKonnectPortalFilterToTerraform(this._filter.internalValue),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
      sort: cdktf.stringToTerraform(this._sort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataKonnectPortalFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKonnectPortalFilter",
      },
      page_number: {
        value: cdktf.numberToHclTerraform(this._pageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
