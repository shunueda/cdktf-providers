// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmProfileRewriteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a list of URIs to bypass inside a web page when the page is accessed using Portal Access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#bypass_list LtmProfileRewrite#bypass_list}
  */
  readonly bypassList?: string[];
  /**
  * Specifies a CA against which to verify signed Java applets signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#ca_file LtmProfileRewrite#ca_file}
  */
  readonly caFile?: string;
  /**
  * Specifies the type of client caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#cache_type LtmProfileRewrite#cache_type}
  */
  readonly cacheType?: string;
  /**
  * Specifies a CRL against which to verify signed Java applets signature certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#crl_file LtmProfileRewrite#crl_file}
  */
  readonly crlFile?: string;
  /**
  * Inherit defaults from parent profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#defaults_from LtmProfileRewrite#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#id LtmProfileRewrite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the rewrite profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#name LtmProfileRewrite#name}
  */
  readonly name: string;
  /**
  * Specifies a list of URIs to rewrite inside a web page when the page is accessed using Portal Access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#rewrite_list LtmProfileRewrite#rewrite_list}
  */
  readonly rewriteList?: string[];
  /**
  * Specifies the type of rewrite operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#rewrite_mode LtmProfileRewrite#rewrite_mode}
  */
  readonly rewriteMode: string;
  /**
  * Specifies a certificate to use for re-signing of signed Java applets after patching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#signing_cert LtmProfileRewrite#signing_cert}
  */
  readonly signingCert?: string;
  /**
  * Specifies a private key for re-signing of signed Java applets after patching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#signing_key LtmProfileRewrite#signing_key}
  */
  readonly signingKey?: string;
  /**
  * Specifies a pass phrase to use for encrypting the private signing key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#signing_key_password LtmProfileRewrite#signing_key_password}
  */
  readonly signingKeyPassword?: string;
  /**
  * Specifies a private key for re-signing of signed Java applets after patching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#split_tunneling LtmProfileRewrite#split_tunneling}
  */
  readonly splitTunneling?: string;
  /**
  * cookie_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#cookie_rules LtmProfileRewrite#cookie_rules}
  */
  readonly cookieRules?: LtmProfileRewriteCookieRules[] | cdktf.IResolvable;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#request LtmProfileRewrite#request}
  */
  readonly request?: LtmProfileRewriteRequest[] | cdktf.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#response LtmProfileRewrite#response}
  */
  readonly response?: LtmProfileRewriteResponse[] | cdktf.IResolvable;
}
export interface LtmProfileRewriteCookieRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#client_domain LtmProfileRewrite#client_domain}
  */
  readonly clientDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#client_path LtmProfileRewrite#client_path}
  */
  readonly clientPath: string;
  /**
  * Name of the cookie rewrite rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#rule_name LtmProfileRewrite#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#server_domain LtmProfileRewrite#server_domain}
  */
  readonly serverDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#server_path LtmProfileRewrite#server_path}
  */
  readonly serverPath: string;
}

export function ltmProfileRewriteCookieRulesToTerraform(struct?: LtmProfileRewriteCookieRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_domain: cdktf.stringToTerraform(struct!.clientDomain),
    client_path: cdktf.stringToTerraform(struct!.clientPath),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    server_domain: cdktf.stringToTerraform(struct!.serverDomain),
    server_path: cdktf.stringToTerraform(struct!.serverPath),
  }
}


export function ltmProfileRewriteCookieRulesToHclTerraform(struct?: LtmProfileRewriteCookieRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_domain: {
      value: cdktf.stringToHclTerraform(struct!.clientDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_path: {
      value: cdktf.stringToHclTerraform(struct!.clientPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_domain: {
      value: cdktf.stringToHclTerraform(struct!.serverDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_path: {
      value: cdktf.stringToHclTerraform(struct!.serverPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtmProfileRewriteCookieRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LtmProfileRewriteCookieRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDomain = this._clientDomain;
    }
    if (this._clientPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPath = this._clientPath;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._serverDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverDomain = this._serverDomain;
    }
    if (this._serverPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPath = this._serverPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtmProfileRewriteCookieRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientDomain = undefined;
      this._clientPath = undefined;
      this._ruleName = undefined;
      this._serverDomain = undefined;
      this._serverPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientDomain = value.clientDomain;
      this._clientPath = value.clientPath;
      this._ruleName = value.ruleName;
      this._serverDomain = value.serverDomain;
      this._serverPath = value.serverPath;
    }
  }

  // client_domain - computed: false, optional: false, required: true
  private _clientDomain?: string; 
  public get clientDomain() {
    return this.getStringAttribute('client_domain');
  }
  public set clientDomain(value: string) {
    this._clientDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDomainInput() {
    return this._clientDomain;
  }

  // client_path - computed: false, optional: false, required: true
  private _clientPath?: string; 
  public get clientPath() {
    return this.getStringAttribute('client_path');
  }
  public set clientPath(value: string) {
    this._clientPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPathInput() {
    return this._clientPath;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // server_domain - computed: false, optional: false, required: true
  private _serverDomain?: string; 
  public get serverDomain() {
    return this.getStringAttribute('server_domain');
  }
  public set serverDomain(value: string) {
    this._serverDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDomainInput() {
    return this._serverDomain;
  }

  // server_path - computed: false, optional: false, required: true
  private _serverPath?: string; 
  public get serverPath() {
    return this.getStringAttribute('server_path');
  }
  public set serverPath(value: string) {
    this._serverPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPathInput() {
    return this._serverPath;
  }
}

export class LtmProfileRewriteCookieRulesList extends cdktf.ComplexList {
  public internalValue? : LtmProfileRewriteCookieRules[] | cdktf.IResolvable

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
  public get(index: number): LtmProfileRewriteCookieRulesOutputReference {
    return new LtmProfileRewriteCookieRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LtmProfileRewriteRequest {
  /**
  * Enable to add the X-Forwarded For (XFF) header, to specify the originating IP address of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#insert_xfwd_for LtmProfileRewrite#insert_xfwd_for}
  */
  readonly insertXfwdFor?: string;
  /**
  * Enable to add the X-Forwarded Host header, to specify the originating host of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#insert_xfwd_host LtmProfileRewrite#insert_xfwd_host}
  */
  readonly insertXfwdHost?: string;
  /**
  * Enable to add the X-Forwarded Proto header, to specify the originating protocol of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#insert_xfwd_protocol LtmProfileRewrite#insert_xfwd_protocol}
  */
  readonly insertXfwdProtocol?: string;
  /**
  * Enable to rewrite headers in Request settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#rewrite_headers LtmProfileRewrite#rewrite_headers}
  */
  readonly rewriteHeaders?: string;
}

export function ltmProfileRewriteRequestToTerraform(struct?: LtmProfileRewriteRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_xfwd_for: cdktf.stringToTerraform(struct!.insertXfwdFor),
    insert_xfwd_host: cdktf.stringToTerraform(struct!.insertXfwdHost),
    insert_xfwd_protocol: cdktf.stringToTerraform(struct!.insertXfwdProtocol),
    rewrite_headers: cdktf.stringToTerraform(struct!.rewriteHeaders),
  }
}


export function ltmProfileRewriteRequestToHclTerraform(struct?: LtmProfileRewriteRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_xfwd_for: {
      value: cdktf.stringToHclTerraform(struct!.insertXfwdFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insert_xfwd_host: {
      value: cdktf.stringToHclTerraform(struct!.insertXfwdHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insert_xfwd_protocol: {
      value: cdktf.stringToHclTerraform(struct!.insertXfwdProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_headers: {
      value: cdktf.stringToHclTerraform(struct!.rewriteHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtmProfileRewriteRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LtmProfileRewriteRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertXfwdFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertXfwdFor = this._insertXfwdFor;
    }
    if (this._insertXfwdHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertXfwdHost = this._insertXfwdHost;
    }
    if (this._insertXfwdProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertXfwdProtocol = this._insertXfwdProtocol;
    }
    if (this._rewriteHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteHeaders = this._rewriteHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtmProfileRewriteRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertXfwdFor = undefined;
      this._insertXfwdHost = undefined;
      this._insertXfwdProtocol = undefined;
      this._rewriteHeaders = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertXfwdFor = value.insertXfwdFor;
      this._insertXfwdHost = value.insertXfwdHost;
      this._insertXfwdProtocol = value.insertXfwdProtocol;
      this._rewriteHeaders = value.rewriteHeaders;
    }
  }

  // insert_xfwd_for - computed: false, optional: true, required: false
  private _insertXfwdFor?: string; 
  public get insertXfwdFor() {
    return this.getStringAttribute('insert_xfwd_for');
  }
  public set insertXfwdFor(value: string) {
    this._insertXfwdFor = value;
  }
  public resetInsertXfwdFor() {
    this._insertXfwdFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertXfwdForInput() {
    return this._insertXfwdFor;
  }

  // insert_xfwd_host - computed: false, optional: true, required: false
  private _insertXfwdHost?: string; 
  public get insertXfwdHost() {
    return this.getStringAttribute('insert_xfwd_host');
  }
  public set insertXfwdHost(value: string) {
    this._insertXfwdHost = value;
  }
  public resetInsertXfwdHost() {
    this._insertXfwdHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertXfwdHostInput() {
    return this._insertXfwdHost;
  }

  // insert_xfwd_protocol - computed: false, optional: true, required: false
  private _insertXfwdProtocol?: string; 
  public get insertXfwdProtocol() {
    return this.getStringAttribute('insert_xfwd_protocol');
  }
  public set insertXfwdProtocol(value: string) {
    this._insertXfwdProtocol = value;
  }
  public resetInsertXfwdProtocol() {
    this._insertXfwdProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertXfwdProtocolInput() {
    return this._insertXfwdProtocol;
  }

  // rewrite_headers - computed: false, optional: true, required: false
  private _rewriteHeaders?: string; 
  public get rewriteHeaders() {
    return this.getStringAttribute('rewrite_headers');
  }
  public set rewriteHeaders(value: string) {
    this._rewriteHeaders = value;
  }
  public resetRewriteHeaders() {
    this._rewriteHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteHeadersInput() {
    return this._rewriteHeaders;
  }
}

export class LtmProfileRewriteRequestList extends cdktf.ComplexList {
  public internalValue? : LtmProfileRewriteRequest[] | cdktf.IResolvable

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
  public get(index: number): LtmProfileRewriteRequestOutputReference {
    return new LtmProfileRewriteRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LtmProfileRewriteResponse {
  /**
  * Enable to rewrite links in content in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#rewrite_content LtmProfileRewrite#rewrite_content}
  */
  readonly rewriteContent?: string;
  /**
  * Enable to rewrite headers in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#rewrite_headers LtmProfileRewrite#rewrite_headers}
  */
  readonly rewriteHeaders?: string;
}

export function ltmProfileRewriteResponseToTerraform(struct?: LtmProfileRewriteResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rewrite_content: cdktf.stringToTerraform(struct!.rewriteContent),
    rewrite_headers: cdktf.stringToTerraform(struct!.rewriteHeaders),
  }
}


export function ltmProfileRewriteResponseToHclTerraform(struct?: LtmProfileRewriteResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rewrite_content: {
      value: cdktf.stringToHclTerraform(struct!.rewriteContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_headers: {
      value: cdktf.stringToHclTerraform(struct!.rewriteHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtmProfileRewriteResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LtmProfileRewriteResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewriteContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteContent = this._rewriteContent;
    }
    if (this._rewriteHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteHeaders = this._rewriteHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtmProfileRewriteResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rewriteContent = undefined;
      this._rewriteHeaders = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rewriteContent = value.rewriteContent;
      this._rewriteHeaders = value.rewriteHeaders;
    }
  }

  // rewrite_content - computed: false, optional: true, required: false
  private _rewriteContent?: string; 
  public get rewriteContent() {
    return this.getStringAttribute('rewrite_content');
  }
  public set rewriteContent(value: string) {
    this._rewriteContent = value;
  }
  public resetRewriteContent() {
    this._rewriteContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteContentInput() {
    return this._rewriteContent;
  }

  // rewrite_headers - computed: false, optional: true, required: false
  private _rewriteHeaders?: string; 
  public get rewriteHeaders() {
    return this.getStringAttribute('rewrite_headers');
  }
  public set rewriteHeaders(value: string) {
    this._rewriteHeaders = value;
  }
  public resetRewriteHeaders() {
    this._rewriteHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteHeadersInput() {
    return this._rewriteHeaders;
  }
}

export class LtmProfileRewriteResponseList extends cdktf.ComplexList {
  public internalValue? : LtmProfileRewriteResponse[] | cdktf.IResolvable

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
  public get(index: number): LtmProfileRewriteResponseOutputReference {
    return new LtmProfileRewriteResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite bigip_ltm_profile_rewrite}
*/
export class LtmProfileRewrite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_profile_rewrite";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmProfileRewrite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmProfileRewrite to import
  * @param importFromId The id of the existing LtmProfileRewrite that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmProfileRewrite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_profile_rewrite", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_rewrite bigip_ltm_profile_rewrite} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmProfileRewriteConfig
  */
  public constructor(scope: Construct, id: string, config: LtmProfileRewriteConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_profile_rewrite',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bypassList = config.bypassList;
    this._caFile = config.caFile;
    this._cacheType = config.cacheType;
    this._crlFile = config.crlFile;
    this._defaultsFrom = config.defaultsFrom;
    this._id = config.id;
    this._name = config.name;
    this._rewriteList = config.rewriteList;
    this._rewriteMode = config.rewriteMode;
    this._signingCert = config.signingCert;
    this._signingKey = config.signingKey;
    this._signingKeyPassword = config.signingKeyPassword;
    this._splitTunneling = config.splitTunneling;
    this._cookieRules.internalValue = config.cookieRules;
    this._request.internalValue = config.request;
    this._response.internalValue = config.response;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_list - computed: false, optional: true, required: false
  private _bypassList?: string[]; 
  public get bypassList() {
    return this.getListAttribute('bypass_list');
  }
  public set bypassList(value: string[]) {
    this._bypassList = value;
  }
  public resetBypassList() {
    this._bypassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassListInput() {
    return this._bypassList;
  }

  // ca_file - computed: true, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // cache_type - computed: false, optional: true, required: false
  private _cacheType?: string; 
  public get cacheType() {
    return this.getStringAttribute('cache_type');
  }
  public set cacheType(value: string) {
    this._cacheType = value;
  }
  public resetCacheType() {
    this._cacheType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTypeInput() {
    return this._cacheType;
  }

  // crl_file - computed: false, optional: true, required: false
  private _crlFile?: string; 
  public get crlFile() {
    return this.getStringAttribute('crl_file');
  }
  public set crlFile(value: string) {
    this._crlFile = value;
  }
  public resetCrlFile() {
    this._crlFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlFileInput() {
    return this._crlFile;
  }

  // defaults_from - computed: false, optional: true, required: false
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  public resetDefaultsFrom() {
    this._defaultsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
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

  // rewrite_list - computed: false, optional: true, required: false
  private _rewriteList?: string[]; 
  public get rewriteList() {
    return this.getListAttribute('rewrite_list');
  }
  public set rewriteList(value: string[]) {
    this._rewriteList = value;
  }
  public resetRewriteList() {
    this._rewriteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteListInput() {
    return this._rewriteList;
  }

  // rewrite_mode - computed: false, optional: false, required: true
  private _rewriteMode?: string; 
  public get rewriteMode() {
    return this.getStringAttribute('rewrite_mode');
  }
  public set rewriteMode(value: string) {
    this._rewriteMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteModeInput() {
    return this._rewriteMode;
  }

  // signing_cert - computed: true, optional: true, required: false
  private _signingCert?: string; 
  public get signingCert() {
    return this.getStringAttribute('signing_cert');
  }
  public set signingCert(value: string) {
    this._signingCert = value;
  }
  public resetSigningCert() {
    this._signingCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingCertInput() {
    return this._signingCert;
  }

  // signing_key - computed: true, optional: true, required: false
  private _signingKey?: string; 
  public get signingKey() {
    return this.getStringAttribute('signing_key');
  }
  public set signingKey(value: string) {
    this._signingKey = value;
  }
  public resetSigningKey() {
    this._signingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyInput() {
    return this._signingKey;
  }

  // signing_key_password - computed: true, optional: true, required: false
  private _signingKeyPassword?: string; 
  public get signingKeyPassword() {
    return this.getStringAttribute('signing_key_password');
  }
  public set signingKeyPassword(value: string) {
    this._signingKeyPassword = value;
  }
  public resetSigningKeyPassword() {
    this._signingKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyPasswordInput() {
    return this._signingKeyPassword;
  }

  // split_tunneling - computed: true, optional: true, required: false
  private _splitTunneling?: string; 
  public get splitTunneling() {
    return this.getStringAttribute('split_tunneling');
  }
  public set splitTunneling(value: string) {
    this._splitTunneling = value;
  }
  public resetSplitTunneling() {
    this._splitTunneling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelingInput() {
    return this._splitTunneling;
  }

  // cookie_rules - computed: false, optional: true, required: false
  private _cookieRules = new LtmProfileRewriteCookieRulesList(this, "cookie_rules", true);
  public get cookieRules() {
    return this._cookieRules;
  }
  public putCookieRules(value: LtmProfileRewriteCookieRules[] | cdktf.IResolvable) {
    this._cookieRules.internalValue = value;
  }
  public resetCookieRules() {
    this._cookieRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieRulesInput() {
    return this._cookieRules.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request = new LtmProfileRewriteRequestList(this, "request", true);
  public get request() {
    return this._request;
  }
  public putRequest(value: LtmProfileRewriteRequest[] | cdktf.IResolvable) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new LtmProfileRewriteResponseList(this, "response", true);
  public get response() {
    return this._response;
  }
  public putResponse(value: LtmProfileRewriteResponse[] | cdktf.IResolvable) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bypassList),
      ca_file: cdktf.stringToTerraform(this._caFile),
      cache_type: cdktf.stringToTerraform(this._cacheType),
      crl_file: cdktf.stringToTerraform(this._crlFile),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rewrite_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rewriteList),
      rewrite_mode: cdktf.stringToTerraform(this._rewriteMode),
      signing_cert: cdktf.stringToTerraform(this._signingCert),
      signing_key: cdktf.stringToTerraform(this._signingKey),
      signing_key_password: cdktf.stringToTerraform(this._signingKeyPassword),
      split_tunneling: cdktf.stringToTerraform(this._splitTunneling),
      cookie_rules: cdktf.listMapper(ltmProfileRewriteCookieRulesToTerraform, true)(this._cookieRules.internalValue),
      request: cdktf.listMapper(ltmProfileRewriteRequestToTerraform, true)(this._request.internalValue),
      response: cdktf.listMapper(ltmProfileRewriteResponseToTerraform, true)(this._response.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bypassList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ca_file: {
        value: cdktf.stringToHclTerraform(this._caFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_type: {
        value: cdktf.stringToHclTerraform(this._cacheType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_file: {
        value: cdktf.stringToHclTerraform(this._crlFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rewriteList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rewrite_mode: {
        value: cdktf.stringToHclTerraform(this._rewriteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_cert: {
        value: cdktf.stringToHclTerraform(this._signingCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_key: {
        value: cdktf.stringToHclTerraform(this._signingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_key_password: {
        value: cdktf.stringToHclTerraform(this._signingKeyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_tunneling: {
        value: cdktf.stringToHclTerraform(this._splitTunneling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_rules: {
        value: cdktf.listMapperHcl(ltmProfileRewriteCookieRulesToHclTerraform, true)(this._cookieRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LtmProfileRewriteCookieRulesList",
      },
      request: {
        value: cdktf.listMapperHcl(ltmProfileRewriteRequestToHclTerraform, true)(this._request.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LtmProfileRewriteRequestList",
      },
      response: {
        value: cdktf.listMapperHcl(ltmProfileRewriteResponseToHclTerraform, true)(this._response.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LtmProfileRewriteResponseList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
