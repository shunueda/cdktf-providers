// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#active_auth_method AuthenticationRule#active_auth_method}
  */
  readonly activeAuthMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#cert_auth_cookie AuthenticationRule#cert_auth_cookie}
  */
  readonly certAuthCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#comments AuthenticationRule#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#cors_depth AuthenticationRule#cors_depth}
  */
  readonly corsDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#cors_stateful AuthenticationRule#cors_stateful}
  */
  readonly corsStateful?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#dynamic_sort_subtable AuthenticationRule#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#get_all_tables AuthenticationRule#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#id AuthenticationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#ip_based AuthenticationRule#ip_based}
  */
  readonly ipBased?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#name AuthenticationRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#protocol AuthenticationRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#sso_auth_method AuthenticationRule#sso_auth_method}
  */
  readonly ssoAuthMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#status AuthenticationRule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#transaction_based AuthenticationRule#transaction_based}
  */
  readonly transactionBased?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#vdomparam AuthenticationRule#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#web_auth_cookie AuthenticationRule#web_auth_cookie}
  */
  readonly webAuthCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#web_portal AuthenticationRule#web_portal}
  */
  readonly webPortal?: string;
  /**
  * dstaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#dstaddr AuthenticationRule#dstaddr}
  */
  readonly dstaddr?: AuthenticationRuleDstaddr[] | cdktf.IResolvable;
  /**
  * dstaddr6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#dstaddr6 AuthenticationRule#dstaddr6}
  */
  readonly dstaddr6?: AuthenticationRuleDstaddr6[] | cdktf.IResolvable;
  /**
  * srcaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#srcaddr AuthenticationRule#srcaddr}
  */
  readonly srcaddr?: AuthenticationRuleSrcaddr[] | cdktf.IResolvable;
  /**
  * srcaddr6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#srcaddr6 AuthenticationRule#srcaddr6}
  */
  readonly srcaddr6?: AuthenticationRuleSrcaddr6[] | cdktf.IResolvable;
  /**
  * srcintf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#srcintf AuthenticationRule#srcintf}
  */
  readonly srcintf?: AuthenticationRuleSrcintf[] | cdktf.IResolvable;
}
export interface AuthenticationRuleDstaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#name AuthenticationRule#name}
  */
  readonly name?: string;
}

export function authenticationRuleDstaddrToTerraform(struct?: AuthenticationRuleDstaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function authenticationRuleDstaddrToHclTerraform(struct?: AuthenticationRuleDstaddr | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationRuleDstaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationRuleDstaddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationRuleDstaddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class AuthenticationRuleDstaddrList extends cdktf.ComplexList {
  public internalValue? : AuthenticationRuleDstaddr[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationRuleDstaddrOutputReference {
    return new AuthenticationRuleDstaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthenticationRuleDstaddr6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#name AuthenticationRule#name}
  */
  readonly name?: string;
}

export function authenticationRuleDstaddr6ToTerraform(struct?: AuthenticationRuleDstaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function authenticationRuleDstaddr6ToHclTerraform(struct?: AuthenticationRuleDstaddr6 | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationRuleDstaddr6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationRuleDstaddr6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationRuleDstaddr6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class AuthenticationRuleDstaddr6List extends cdktf.ComplexList {
  public internalValue? : AuthenticationRuleDstaddr6[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationRuleDstaddr6OutputReference {
    return new AuthenticationRuleDstaddr6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthenticationRuleSrcaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#name AuthenticationRule#name}
  */
  readonly name?: string;
}

export function authenticationRuleSrcaddrToTerraform(struct?: AuthenticationRuleSrcaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function authenticationRuleSrcaddrToHclTerraform(struct?: AuthenticationRuleSrcaddr | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationRuleSrcaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationRuleSrcaddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationRuleSrcaddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class AuthenticationRuleSrcaddrList extends cdktf.ComplexList {
  public internalValue? : AuthenticationRuleSrcaddr[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationRuleSrcaddrOutputReference {
    return new AuthenticationRuleSrcaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthenticationRuleSrcaddr6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#name AuthenticationRule#name}
  */
  readonly name?: string;
}

export function authenticationRuleSrcaddr6ToTerraform(struct?: AuthenticationRuleSrcaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function authenticationRuleSrcaddr6ToHclTerraform(struct?: AuthenticationRuleSrcaddr6 | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationRuleSrcaddr6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationRuleSrcaddr6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationRuleSrcaddr6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class AuthenticationRuleSrcaddr6List extends cdktf.ComplexList {
  public internalValue? : AuthenticationRuleSrcaddr6[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationRuleSrcaddr6OutputReference {
    return new AuthenticationRuleSrcaddr6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthenticationRuleSrcintf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#name AuthenticationRule#name}
  */
  readonly name?: string;
}

export function authenticationRuleSrcintfToTerraform(struct?: AuthenticationRuleSrcintf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function authenticationRuleSrcintfToHclTerraform(struct?: AuthenticationRuleSrcintf | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationRuleSrcintfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationRuleSrcintf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationRuleSrcintf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class AuthenticationRuleSrcintfList extends cdktf.ComplexList {
  public internalValue? : AuthenticationRuleSrcintf[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationRuleSrcintfOutputReference {
    return new AuthenticationRuleSrcintfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule fortios_authentication_rule}
*/
export class AuthenticationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_authentication_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationRule to import
  * @param importFromId The id of the existing AuthenticationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_authentication_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_rule fortios_authentication_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuthenticationRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_authentication_rule',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeAuthMethod = config.activeAuthMethod;
    this._certAuthCookie = config.certAuthCookie;
    this._comments = config.comments;
    this._corsDepth = config.corsDepth;
    this._corsStateful = config.corsStateful;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._ipBased = config.ipBased;
    this._name = config.name;
    this._protocol = config.protocol;
    this._ssoAuthMethod = config.ssoAuthMethod;
    this._status = config.status;
    this._transactionBased = config.transactionBased;
    this._vdomparam = config.vdomparam;
    this._webAuthCookie = config.webAuthCookie;
    this._webPortal = config.webPortal;
    this._dstaddr.internalValue = config.dstaddr;
    this._dstaddr6.internalValue = config.dstaddr6;
    this._srcaddr.internalValue = config.srcaddr;
    this._srcaddr6.internalValue = config.srcaddr6;
    this._srcintf.internalValue = config.srcintf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_auth_method - computed: false, optional: true, required: false
  private _activeAuthMethod?: string; 
  public get activeAuthMethod() {
    return this.getStringAttribute('active_auth_method');
  }
  public set activeAuthMethod(value: string) {
    this._activeAuthMethod = value;
  }
  public resetActiveAuthMethod() {
    this._activeAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAuthMethodInput() {
    return this._activeAuthMethod;
  }

  // cert_auth_cookie - computed: true, optional: true, required: false
  private _certAuthCookie?: string; 
  public get certAuthCookie() {
    return this.getStringAttribute('cert_auth_cookie');
  }
  public set certAuthCookie(value: string) {
    this._certAuthCookie = value;
  }
  public resetCertAuthCookie() {
    this._certAuthCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certAuthCookieInput() {
    return this._certAuthCookie;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // cors_depth - computed: true, optional: true, required: false
  private _corsDepth?: number; 
  public get corsDepth() {
    return this.getNumberAttribute('cors_depth');
  }
  public set corsDepth(value: number) {
    this._corsDepth = value;
  }
  public resetCorsDepth() {
    this._corsDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsDepthInput() {
    return this._corsDepth;
  }

  // cors_stateful - computed: true, optional: true, required: false
  private _corsStateful?: string; 
  public get corsStateful() {
    return this.getStringAttribute('cors_stateful');
  }
  public set corsStateful(value: string) {
    this._corsStateful = value;
  }
  public resetCorsStateful() {
    this._corsStateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsStatefulInput() {
    return this._corsStateful;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // ip_based - computed: true, optional: true, required: false
  private _ipBased?: string; 
  public get ipBased() {
    return this.getStringAttribute('ip_based');
  }
  public set ipBased(value: string) {
    this._ipBased = value;
  }
  public resetIpBased() {
    this._ipBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBasedInput() {
    return this._ipBased;
  }

  // name - computed: true, optional: true, required: false
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sso_auth_method - computed: false, optional: true, required: false
  private _ssoAuthMethod?: string; 
  public get ssoAuthMethod() {
    return this.getStringAttribute('sso_auth_method');
  }
  public set ssoAuthMethod(value: string) {
    this._ssoAuthMethod = value;
  }
  public resetSsoAuthMethod() {
    this._ssoAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoAuthMethodInput() {
    return this._ssoAuthMethod;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // transaction_based - computed: true, optional: true, required: false
  private _transactionBased?: string; 
  public get transactionBased() {
    return this.getStringAttribute('transaction_based');
  }
  public set transactionBased(value: string) {
    this._transactionBased = value;
  }
  public resetTransactionBased() {
    this._transactionBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionBasedInput() {
    return this._transactionBased;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // web_auth_cookie - computed: true, optional: true, required: false
  private _webAuthCookie?: string; 
  public get webAuthCookie() {
    return this.getStringAttribute('web_auth_cookie');
  }
  public set webAuthCookie(value: string) {
    this._webAuthCookie = value;
  }
  public resetWebAuthCookie() {
    this._webAuthCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAuthCookieInput() {
    return this._webAuthCookie;
  }

  // web_portal - computed: true, optional: true, required: false
  private _webPortal?: string; 
  public get webPortal() {
    return this.getStringAttribute('web_portal');
  }
  public set webPortal(value: string) {
    this._webPortal = value;
  }
  public resetWebPortal() {
    this._webPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPortalInput() {
    return this._webPortal;
  }

  // dstaddr - computed: false, optional: true, required: false
  private _dstaddr = new AuthenticationRuleDstaddrList(this, "dstaddr", true);
  public get dstaddr() {
    return this._dstaddr;
  }
  public putDstaddr(value: AuthenticationRuleDstaddr[] | cdktf.IResolvable) {
    this._dstaddr.internalValue = value;
  }
  public resetDstaddr() {
    this._dstaddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr.internalValue;
  }

  // dstaddr6 - computed: false, optional: true, required: false
  private _dstaddr6 = new AuthenticationRuleDstaddr6List(this, "dstaddr6", true);
  public get dstaddr6() {
    return this._dstaddr6;
  }
  public putDstaddr6(value: AuthenticationRuleDstaddr6[] | cdktf.IResolvable) {
    this._dstaddr6.internalValue = value;
  }
  public resetDstaddr6() {
    this._dstaddr6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6.internalValue;
  }

  // srcaddr - computed: false, optional: true, required: false
  private _srcaddr = new AuthenticationRuleSrcaddrList(this, "srcaddr", true);
  public get srcaddr() {
    return this._srcaddr;
  }
  public putSrcaddr(value: AuthenticationRuleSrcaddr[] | cdktf.IResolvable) {
    this._srcaddr.internalValue = value;
  }
  public resetSrcaddr() {
    this._srcaddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr.internalValue;
  }

  // srcaddr6 - computed: false, optional: true, required: false
  private _srcaddr6 = new AuthenticationRuleSrcaddr6List(this, "srcaddr6", true);
  public get srcaddr6() {
    return this._srcaddr6;
  }
  public putSrcaddr6(value: AuthenticationRuleSrcaddr6[] | cdktf.IResolvable) {
    this._srcaddr6.internalValue = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6.internalValue;
  }

  // srcintf - computed: false, optional: true, required: false
  private _srcintf = new AuthenticationRuleSrcintfList(this, "srcintf", true);
  public get srcintf() {
    return this._srcintf;
  }
  public putSrcintf(value: AuthenticationRuleSrcintf[] | cdktf.IResolvable) {
    this._srcintf.internalValue = value;
  }
  public resetSrcintf() {
    this._srcintf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_auth_method: cdktf.stringToTerraform(this._activeAuthMethod),
      cert_auth_cookie: cdktf.stringToTerraform(this._certAuthCookie),
      comments: cdktf.stringToTerraform(this._comments),
      cors_depth: cdktf.numberToTerraform(this._corsDepth),
      cors_stateful: cdktf.stringToTerraform(this._corsStateful),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      ip_based: cdktf.stringToTerraform(this._ipBased),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      sso_auth_method: cdktf.stringToTerraform(this._ssoAuthMethod),
      status: cdktf.stringToTerraform(this._status),
      transaction_based: cdktf.stringToTerraform(this._transactionBased),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      web_auth_cookie: cdktf.stringToTerraform(this._webAuthCookie),
      web_portal: cdktf.stringToTerraform(this._webPortal),
      dstaddr: cdktf.listMapper(authenticationRuleDstaddrToTerraform, true)(this._dstaddr.internalValue),
      dstaddr6: cdktf.listMapper(authenticationRuleDstaddr6ToTerraform, true)(this._dstaddr6.internalValue),
      srcaddr: cdktf.listMapper(authenticationRuleSrcaddrToTerraform, true)(this._srcaddr.internalValue),
      srcaddr6: cdktf.listMapper(authenticationRuleSrcaddr6ToTerraform, true)(this._srcaddr6.internalValue),
      srcintf: cdktf.listMapper(authenticationRuleSrcintfToTerraform, true)(this._srcintf.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_auth_method: {
        value: cdktf.stringToHclTerraform(this._activeAuthMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_auth_cookie: {
        value: cdktf.stringToHclTerraform(this._certAuthCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cors_depth: {
        value: cdktf.numberToHclTerraform(this._corsDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cors_stateful: {
        value: cdktf.stringToHclTerraform(this._corsStateful),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      ip_based: {
        value: cdktf.stringToHclTerraform(this._ipBased),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_auth_method: {
        value: cdktf.stringToHclTerraform(this._ssoAuthMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transaction_based: {
        value: cdktf.stringToHclTerraform(this._transactionBased),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_auth_cookie: {
        value: cdktf.stringToHclTerraform(this._webAuthCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_portal: {
        value: cdktf.stringToHclTerraform(this._webPortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(authenticationRuleDstaddrToHclTerraform, true)(this._dstaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthenticationRuleDstaddrList",
      },
      dstaddr6: {
        value: cdktf.listMapperHcl(authenticationRuleDstaddr6ToHclTerraform, true)(this._dstaddr6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthenticationRuleDstaddr6List",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(authenticationRuleSrcaddrToHclTerraform, true)(this._srcaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthenticationRuleSrcaddrList",
      },
      srcaddr6: {
        value: cdktf.listMapperHcl(authenticationRuleSrcaddr6ToHclTerraform, true)(this._srcaddr6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthenticationRuleSrcaddr6List",
      },
      srcintf: {
        value: cdktf.listMapperHcl(authenticationRuleSrcintfToHclTerraform, true)(this._srcintf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthenticationRuleSrcintfList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
