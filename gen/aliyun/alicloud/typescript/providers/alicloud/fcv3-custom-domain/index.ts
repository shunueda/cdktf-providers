// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Fcv3CustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#custom_domain_name Fcv3CustomDomain#custom_domain_name}
  */
  readonly customDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#id Fcv3CustomDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#protocol Fcv3CustomDomain#protocol}
  */
  readonly protocol?: string;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#auth_config Fcv3CustomDomain#auth_config}
  */
  readonly authConfig?: Fcv3CustomDomainAuthConfig;
  /**
  * cert_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#cert_config Fcv3CustomDomain#cert_config}
  */
  readonly certConfig?: Fcv3CustomDomainCertConfig;
  /**
  * route_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#route_config Fcv3CustomDomain#route_config}
  */
  readonly routeConfig?: Fcv3CustomDomainRouteConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#timeouts Fcv3CustomDomain#timeouts}
  */
  readonly timeouts?: Fcv3CustomDomainTimeouts;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#tls_config Fcv3CustomDomain#tls_config}
  */
  readonly tlsConfig?: Fcv3CustomDomainTlsConfig;
  /**
  * waf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#waf_config Fcv3CustomDomain#waf_config}
  */
  readonly wafConfig?: Fcv3CustomDomainWafConfig;
}
export interface Fcv3CustomDomainAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#auth_info Fcv3CustomDomain#auth_info}
  */
  readonly authInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#auth_type Fcv3CustomDomain#auth_type}
  */
  readonly authType?: string;
}

export function fcv3CustomDomainAuthConfigToTerraform(struct?: Fcv3CustomDomainAuthConfigOutputReference | Fcv3CustomDomainAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_info: cdktf.stringToTerraform(struct!.authInfo),
    auth_type: cdktf.stringToTerraform(struct!.authType),
  }
}


export function fcv3CustomDomainAuthConfigToHclTerraform(struct?: Fcv3CustomDomainAuthConfigOutputReference | Fcv3CustomDomainAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_info: {
      value: cdktf.stringToHclTerraform(struct!.authInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3CustomDomainAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3CustomDomainAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.authInfo = this._authInfo;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3CustomDomainAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authInfo = undefined;
      this._authType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authInfo = value.authInfo;
      this._authType = value.authType;
    }
  }

  // auth_info - computed: false, optional: true, required: false
  private _authInfo?: string; 
  public get authInfo() {
    return this.getStringAttribute('auth_info');
  }
  public set authInfo(value: string) {
    this._authInfo = value;
  }
  public resetAuthInfo() {
    this._authInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInfoInput() {
    return this._authInfo;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }
}
export interface Fcv3CustomDomainCertConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#cert_name Fcv3CustomDomain#cert_name}
  */
  readonly certName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#certificate Fcv3CustomDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#private_key Fcv3CustomDomain#private_key}
  */
  readonly privateKey?: string;
}

export function fcv3CustomDomainCertConfigToTerraform(struct?: Fcv3CustomDomainCertConfigOutputReference | Fcv3CustomDomainCertConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_name: cdktf.stringToTerraform(struct!.certName),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function fcv3CustomDomainCertConfigToHclTerraform(struct?: Fcv3CustomDomainCertConfigOutputReference | Fcv3CustomDomainCertConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_name: {
      value: cdktf.stringToHclTerraform(struct!.certName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3CustomDomainCertConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3CustomDomainCertConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certName = this._certName;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3CustomDomainCertConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certName = undefined;
      this._certificate = undefined;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certName = value.certName;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
    }
  }

  // cert_name - computed: false, optional: true, required: false
  private _certName?: string; 
  public get certName() {
    return this.getStringAttribute('cert_name');
  }
  public set certName(value: string) {
    this._certName = value;
  }
  public resetCertName() {
    this._certName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certNameInput() {
    return this._certName;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#match Fcv3CustomDomain#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#replacement Fcv3CustomDomain#replacement}
  */
  readonly replacement?: string;
}

export function fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRulesToTerraform(struct?: Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    replacement: cdktf.stringToTerraform(struct!.replacement),
  }
}


export function fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRulesToHclTerraform(struct?: Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRules | cdktf.IResolvable): any {
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
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._replacement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._replacement = value.replacement;
    }
  }

  // match - computed: false, optional: true, required: false
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

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }
}

export class Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRulesList extends cdktf.ComplexList {
  public internalValue? : Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRules[] | cdktf.IResolvable

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
  public get(index: number): Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRulesOutputReference {
    return new Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#match Fcv3CustomDomain#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#replacement Fcv3CustomDomain#replacement}
  */
  readonly replacement?: string;
}

export function fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRulesToTerraform(struct?: Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    replacement: cdktf.stringToTerraform(struct!.replacement),
  }
}


export function fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRulesToHclTerraform(struct?: Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRules | cdktf.IResolvable): any {
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
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._replacement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._replacement = value.replacement;
    }
  }

  // match - computed: false, optional: true, required: false
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

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }
}

export class Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRulesList extends cdktf.ComplexList {
  public internalValue? : Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRules[] | cdktf.IResolvable

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
  public get(index: number): Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRulesOutputReference {
    return new Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#match Fcv3CustomDomain#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#replacement Fcv3CustomDomain#replacement}
  */
  readonly replacement?: string;
}

export function fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRulesToTerraform(struct?: Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    replacement: cdktf.stringToTerraform(struct!.replacement),
  }
}


export function fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRulesToHclTerraform(struct?: Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRules | cdktf.IResolvable): any {
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
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._replacement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._replacement = value.replacement;
    }
  }

  // match - computed: false, optional: true, required: false
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

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }
}

export class Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRulesList extends cdktf.ComplexList {
  public internalValue? : Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRules[] | cdktf.IResolvable

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
  public get(index: number): Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRulesOutputReference {
    return new Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Fcv3CustomDomainRouteConfigRoutesRewriteConfig {
  /**
  * equal_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#equal_rules Fcv3CustomDomain#equal_rules}
  */
  readonly equalRules?: Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRules[] | cdktf.IResolvable;
  /**
  * regex_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#regex_rules Fcv3CustomDomain#regex_rules}
  */
  readonly regexRules?: Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRules[] | cdktf.IResolvable;
  /**
  * wildcard_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#wildcard_rules Fcv3CustomDomain#wildcard_rules}
  */
  readonly wildcardRules?: Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRules[] | cdktf.IResolvable;
}

export function fcv3CustomDomainRouteConfigRoutesRewriteConfigToTerraform(struct?: Fcv3CustomDomainRouteConfigRoutesRewriteConfigOutputReference | Fcv3CustomDomainRouteConfigRoutesRewriteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equal_rules: cdktf.listMapper(fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRulesToTerraform, true)(struct!.equalRules),
    regex_rules: cdktf.listMapper(fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRulesToTerraform, true)(struct!.regexRules),
    wildcard_rules: cdktf.listMapper(fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRulesToTerraform, true)(struct!.wildcardRules),
  }
}


export function fcv3CustomDomainRouteConfigRoutesRewriteConfigToHclTerraform(struct?: Fcv3CustomDomainRouteConfigRoutesRewriteConfigOutputReference | Fcv3CustomDomainRouteConfigRoutesRewriteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equal_rules: {
      value: cdktf.listMapperHcl(fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRulesToHclTerraform, true)(struct!.equalRules),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRulesList",
    },
    regex_rules: {
      value: cdktf.listMapperHcl(fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRulesToHclTerraform, true)(struct!.regexRules),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRulesList",
    },
    wildcard_rules: {
      value: cdktf.listMapperHcl(fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRulesToHclTerraform, true)(struct!.wildcardRules),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3CustomDomainRouteConfigRoutesRewriteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3CustomDomainRouteConfigRoutesRewriteConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equalRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalRules = this._equalRules?.internalValue;
    }
    if (this._regexRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexRules = this._regexRules?.internalValue;
    }
    if (this._wildcardRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcardRules = this._wildcardRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3CustomDomainRouteConfigRoutesRewriteConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._equalRules.internalValue = undefined;
      this._regexRules.internalValue = undefined;
      this._wildcardRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._equalRules.internalValue = value.equalRules;
      this._regexRules.internalValue = value.regexRules;
      this._wildcardRules.internalValue = value.wildcardRules;
    }
  }

  // equal_rules - computed: false, optional: true, required: false
  private _equalRules = new Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRulesList(this, "equal_rules", false);
  public get equalRules() {
    return this._equalRules;
  }
  public putEqualRules(value: Fcv3CustomDomainRouteConfigRoutesRewriteConfigEqualRules[] | cdktf.IResolvable) {
    this._equalRules.internalValue = value;
  }
  public resetEqualRules() {
    this._equalRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalRulesInput() {
    return this._equalRules.internalValue;
  }

  // regex_rules - computed: false, optional: true, required: false
  private _regexRules = new Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRulesList(this, "regex_rules", false);
  public get regexRules() {
    return this._regexRules;
  }
  public putRegexRules(value: Fcv3CustomDomainRouteConfigRoutesRewriteConfigRegexRules[] | cdktf.IResolvable) {
    this._regexRules.internalValue = value;
  }
  public resetRegexRules() {
    this._regexRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexRulesInput() {
    return this._regexRules.internalValue;
  }

  // wildcard_rules - computed: false, optional: true, required: false
  private _wildcardRules = new Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRulesList(this, "wildcard_rules", false);
  public get wildcardRules() {
    return this._wildcardRules;
  }
  public putWildcardRules(value: Fcv3CustomDomainRouteConfigRoutesRewriteConfigWildcardRules[] | cdktf.IResolvable) {
    this._wildcardRules.internalValue = value;
  }
  public resetWildcardRules() {
    this._wildcardRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardRulesInput() {
    return this._wildcardRules.internalValue;
  }
}
export interface Fcv3CustomDomainRouteConfigRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#function_name Fcv3CustomDomain#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#methods Fcv3CustomDomain#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#path Fcv3CustomDomain#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#qualifier Fcv3CustomDomain#qualifier}
  */
  readonly qualifier?: string;
  /**
  * rewrite_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#rewrite_config Fcv3CustomDomain#rewrite_config}
  */
  readonly rewriteConfig?: Fcv3CustomDomainRouteConfigRoutesRewriteConfig;
}

export function fcv3CustomDomainRouteConfigRoutesToTerraform(struct?: Fcv3CustomDomainRouteConfigRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
    rewrite_config: fcv3CustomDomainRouteConfigRoutesRewriteConfigToTerraform(struct!.rewriteConfig),
  }
}


export function fcv3CustomDomainRouteConfigRoutesToHclTerraform(struct?: Fcv3CustomDomainRouteConfigRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktf.stringToHclTerraform(struct!.qualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_config: {
      value: fcv3CustomDomainRouteConfigRoutesRewriteConfigToHclTerraform(struct!.rewriteConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3CustomDomainRouteConfigRoutesRewriteConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3CustomDomainRouteConfigRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Fcv3CustomDomainRouteConfigRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    if (this._rewriteConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteConfig = this._rewriteConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3CustomDomainRouteConfigRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
      this._methods = undefined;
      this._path = undefined;
      this._qualifier = undefined;
      this._rewriteConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
      this._methods = value.methods;
      this._path = value.path;
      this._qualifier = value.qualifier;
      this._rewriteConfig.internalValue = value.rewriteConfig;
    }
  }

  // function_name - computed: false, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // rewrite_config - computed: false, optional: true, required: false
  private _rewriteConfig = new Fcv3CustomDomainRouteConfigRoutesRewriteConfigOutputReference(this, "rewrite_config");
  public get rewriteConfig() {
    return this._rewriteConfig;
  }
  public putRewriteConfig(value: Fcv3CustomDomainRouteConfigRoutesRewriteConfig) {
    this._rewriteConfig.internalValue = value;
  }
  public resetRewriteConfig() {
    this._rewriteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteConfigInput() {
    return this._rewriteConfig.internalValue;
  }
}

export class Fcv3CustomDomainRouteConfigRoutesList extends cdktf.ComplexList {
  public internalValue? : Fcv3CustomDomainRouteConfigRoutes[] | cdktf.IResolvable

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
  public get(index: number): Fcv3CustomDomainRouteConfigRoutesOutputReference {
    return new Fcv3CustomDomainRouteConfigRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Fcv3CustomDomainRouteConfig {
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#routes Fcv3CustomDomain#routes}
  */
  readonly routes?: Fcv3CustomDomainRouteConfigRoutes[] | cdktf.IResolvable;
}

export function fcv3CustomDomainRouteConfigToTerraform(struct?: Fcv3CustomDomainRouteConfigOutputReference | Fcv3CustomDomainRouteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routes: cdktf.listMapper(fcv3CustomDomainRouteConfigRoutesToTerraform, true)(struct!.routes),
  }
}


export function fcv3CustomDomainRouteConfigToHclTerraform(struct?: Fcv3CustomDomainRouteConfigOutputReference | Fcv3CustomDomainRouteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routes: {
      value: cdktf.listMapperHcl(fcv3CustomDomainRouteConfigRoutesToHclTerraform, true)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3CustomDomainRouteConfigRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3CustomDomainRouteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3CustomDomainRouteConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3CustomDomainRouteConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routes.internalValue = value.routes;
    }
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new Fcv3CustomDomainRouteConfigRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: Fcv3CustomDomainRouteConfigRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}
export interface Fcv3CustomDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#create Fcv3CustomDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#delete Fcv3CustomDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#update Fcv3CustomDomain#update}
  */
  readonly update?: string;
}

export function fcv3CustomDomainTimeoutsToTerraform(struct?: Fcv3CustomDomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fcv3CustomDomainTimeoutsToHclTerraform(struct?: Fcv3CustomDomainTimeouts | cdktf.IResolvable): any {
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

export class Fcv3CustomDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Fcv3CustomDomainTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3CustomDomainTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
export interface Fcv3CustomDomainTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#cipher_suites Fcv3CustomDomain#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#max_version Fcv3CustomDomain#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#min_version Fcv3CustomDomain#min_version}
  */
  readonly minVersion?: string;
}

export function fcv3CustomDomainTlsConfigToTerraform(struct?: Fcv3CustomDomainTlsConfigOutputReference | Fcv3CustomDomainTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function fcv3CustomDomainTlsConfigToHclTerraform(struct?: Fcv3CustomDomainTlsConfigOutputReference | Fcv3CustomDomainTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3CustomDomainTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3CustomDomainTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3CustomDomainTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface Fcv3CustomDomainWafConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#enable_waf Fcv3CustomDomain#enable_waf}
  */
  readonly enableWaf?: boolean | cdktf.IResolvable;
}

export function fcv3CustomDomainWafConfigToTerraform(struct?: Fcv3CustomDomainWafConfigOutputReference | Fcv3CustomDomainWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_waf: cdktf.booleanToTerraform(struct!.enableWaf),
  }
}


export function fcv3CustomDomainWafConfigToHclTerraform(struct?: Fcv3CustomDomainWafConfigOutputReference | Fcv3CustomDomainWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_waf: {
      value: cdktf.booleanToHclTerraform(struct!.enableWaf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3CustomDomainWafConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3CustomDomainWafConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableWaf !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWaf = this._enableWaf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3CustomDomainWafConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableWaf = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableWaf = value.enableWaf;
    }
  }

  // enable_waf - computed: false, optional: true, required: false
  private _enableWaf?: boolean | cdktf.IResolvable; 
  public get enableWaf() {
    return this.getBooleanAttribute('enable_waf');
  }
  public set enableWaf(value: boolean | cdktf.IResolvable) {
    this._enableWaf = value;
  }
  public resetEnableWaf() {
    this._enableWaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWafInput() {
    return this._enableWaf;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain alicloud_fcv3_custom_domain}
*/
export class Fcv3CustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_fcv3_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Fcv3CustomDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Fcv3CustomDomain to import
  * @param importFromId The id of the existing Fcv3CustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Fcv3CustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_fcv3_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fcv3_custom_domain alicloud_fcv3_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Fcv3CustomDomainConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Fcv3CustomDomainConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_fcv3_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customDomainName = config.customDomainName;
    this._id = config.id;
    this._protocol = config.protocol;
    this._authConfig.internalValue = config.authConfig;
    this._certConfig.internalValue = config.certConfig;
    this._routeConfig.internalValue = config.routeConfig;
    this._timeouts.internalValue = config.timeouts;
    this._tlsConfig.internalValue = config.tlsConfig;
    this._wafConfig.internalValue = config.wafConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // custom_domain_name - computed: true, optional: true, required: false
  private _customDomainName?: string; 
  public get customDomainName() {
    return this.getStringAttribute('custom_domain_name');
  }
  public set customDomainName(value: string) {
    this._customDomainName = value;
  }
  public resetCustomDomainName() {
    this._customDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainNameInput() {
    return this._customDomainName;
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // protocol - computed: false, optional: true, required: false
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

  // subdomain_count - computed: true, optional: false, required: false
  public get subdomainCount() {
    return this.getStringAttribute('subdomain_count');
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new Fcv3CustomDomainAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: Fcv3CustomDomainAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // cert_config - computed: false, optional: true, required: false
  private _certConfig = new Fcv3CustomDomainCertConfigOutputReference(this, "cert_config");
  public get certConfig() {
    return this._certConfig;
  }
  public putCertConfig(value: Fcv3CustomDomainCertConfig) {
    this._certConfig.internalValue = value;
  }
  public resetCertConfig() {
    this._certConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certConfigInput() {
    return this._certConfig.internalValue;
  }

  // route_config - computed: false, optional: true, required: false
  private _routeConfig = new Fcv3CustomDomainRouteConfigOutputReference(this, "route_config");
  public get routeConfig() {
    return this._routeConfig;
  }
  public putRouteConfig(value: Fcv3CustomDomainRouteConfig) {
    this._routeConfig.internalValue = value;
  }
  public resetRouteConfig() {
    this._routeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeConfigInput() {
    return this._routeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Fcv3CustomDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Fcv3CustomDomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new Fcv3CustomDomainTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: Fcv3CustomDomainTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // waf_config - computed: false, optional: true, required: false
  private _wafConfig = new Fcv3CustomDomainWafConfigOutputReference(this, "waf_config");
  public get wafConfig() {
    return this._wafConfig;
  }
  public putWafConfig(value: Fcv3CustomDomainWafConfig) {
    this._wafConfig.internalValue = value;
  }
  public resetWafConfig() {
    this._wafConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafConfigInput() {
    return this._wafConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_domain_name: cdktf.stringToTerraform(this._customDomainName),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      auth_config: fcv3CustomDomainAuthConfigToTerraform(this._authConfig.internalValue),
      cert_config: fcv3CustomDomainCertConfigToTerraform(this._certConfig.internalValue),
      route_config: fcv3CustomDomainRouteConfigToTerraform(this._routeConfig.internalValue),
      timeouts: fcv3CustomDomainTimeoutsToTerraform(this._timeouts.internalValue),
      tls_config: fcv3CustomDomainTlsConfigToTerraform(this._tlsConfig.internalValue),
      waf_config: fcv3CustomDomainWafConfigToTerraform(this._wafConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_domain_name: {
        value: cdktf.stringToHclTerraform(this._customDomainName),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_config: {
        value: fcv3CustomDomainAuthConfigToHclTerraform(this._authConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3CustomDomainAuthConfigList",
      },
      cert_config: {
        value: fcv3CustomDomainCertConfigToHclTerraform(this._certConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3CustomDomainCertConfigList",
      },
      route_config: {
        value: fcv3CustomDomainRouteConfigToHclTerraform(this._routeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3CustomDomainRouteConfigList",
      },
      timeouts: {
        value: fcv3CustomDomainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Fcv3CustomDomainTimeouts",
      },
      tls_config: {
        value: fcv3CustomDomainTlsConfigToHclTerraform(this._tlsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3CustomDomainTlsConfigList",
      },
      waf_config: {
        value: fcv3CustomDomainWafConfigToHclTerraform(this._wafConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3CustomDomainWafConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
