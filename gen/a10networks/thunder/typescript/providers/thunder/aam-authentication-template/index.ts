// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify AD domain account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#account AamAuthenticationTemplate#account}
  */
  readonly account?: string;
  /**
  * Specify a RADIUS accounting server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#accounting_server AamAuthenticationTemplate#accounting_server}
  */
  readonly accountingServer?: string;
  /**
  * Specify an authentication service group for RADIUS accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#accounting_service_group AamAuthenticationTemplate#accounting_service_group}
  */
  readonly accountingServiceGroup?: string;
  /**
  * 'cookie-based': Track auth-session by cookie (default); 'ip-based': Track auth-session by client IP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#auth_sess_mode AamAuthenticationTemplate#auth_sess_mode}
  */
  readonly authSessMode?: string;
  /**
  * Specify captcha profile (Specify captcha proflie name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#captcha AamAuthenticationTemplate#captcha}
  */
  readonly captcha?: string;
  /**
  * Enable httponly attribute for AAM cookies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#cookie_httponly_enable AamAuthenticationTemplate#cookie_httponly_enable}
  */
  readonly cookieHttponlyEnable?: number;
  /**
  * Configure Max-Age for authentication session cookie (Configure Max-Age in seconds, 0 for no Max-Age/Expires attributes. Default is 604800 (1 week).)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#cookie_max_age AamAuthenticationTemplate#cookie_max_age}
  */
  readonly cookieMaxAge?: number;
  /**
  * 'strict': Specify SameSite attribute as Strict for AAM cookie; 'lax': Specify SameSite attribute as Lax for AAM cookie; 'none': Specify SameSite attribute as None for AAM cookie;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#cookie_samesite AamAuthenticationTemplate#cookie_samesite}
  */
  readonly cookieSamesite?: string;
  /**
  * Enable secure attribute for AAM cookies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#cookie_secure_enable AamAuthenticationTemplate#cookie_secure_enable}
  */
  readonly cookieSecureEnable?: number;
  /**
  * Disable forward logout request to backend application server. The config-field logout-url must be configured first
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#forward_logout_disable AamAuthenticationTemplate#forward_logout_disable}
  */
  readonly forwardLogoutDisable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#id AamAuthenticationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify authentication jwt template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#jwt AamAuthenticationTemplate#jwt}
  */
  readonly jwt?: string;
  /**
  * Enable local logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#local_logging AamAuthenticationTemplate#local_logging}
  */
  readonly localLogging?: number;
  /**
  * 'use-partition-level-config': Use configuration of authentication-log enable command; 'enable': Enable authentication logs for this template; 'disable': Disable authentication logs for this template;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#log AamAuthenticationTemplate#log}
  */
  readonly log?: string;
  /**
  * Specify authentication logon (Specify authentication logon template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#logon AamAuthenticationTemplate#logon}
  */
  readonly logon?: string;
  /**
  * Specify idle logout time (Specify idle timeout in seconds, default is 300)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#logout_idle_timeout AamAuthenticationTemplate#logout_idle_timeout}
  */
  readonly logoutIdleTimeout?: number;
  /**
  * Specify logout url (Specify logout url string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#logout_url AamAuthenticationTemplate#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * Specify default SAML token lifetime (Specify lifetime (in seconds) of SAML token when it not provided by token attributes, default is 28800. (0 for indefinite))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#max_session_time AamAuthenticationTemplate#max_session_time}
  */
  readonly maxSessionTime?: number;
  /**
  * Put redirect-uri or service-principal-name into CSP header to avoid CPS break authentication process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#modify_content_security_policy AamAuthenticationTemplate#modify_content_security_policy}
  */
  readonly modifyContentSecurityPolicy?: number;
  /**
  * Authentication template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#name AamAuthenticationTemplate#name}
  */
  readonly name: string;
  /**
  * Specify OAUTH authorization server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#oauth_authorization_server AamAuthenticationTemplate#oauth_authorization_server}
  */
  readonly oauthAuthorizationServer?: string;
  /**
  * Specify OAUTH client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#oauth_client AamAuthenticationTemplate#oauth_client}
  */
  readonly oauthClient?: string;
  /**
  * Hostname(Length 1-31) for transparent-proxy authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#redirect_hostname AamAuthenticationTemplate#redirect_hostname}
  */
  readonly redirectHostname?: string;
  /**
  * Specify authentication relay (Specify authentication relay template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#relay AamAuthenticationTemplate#relay}
  */
  readonly relay?: string;
  /**
  * Specify SAML identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#saml_idp AamAuthenticationTemplate#saml_idp}
  */
  readonly samlIdp?: string;
  /**
  * Specify SAML service provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#saml_sp AamAuthenticationTemplate#saml_sp}
  */
  readonly samlSp?: string;
  /**
  * Specify authentication server (Specify authentication server template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#server AamAuthenticationTemplate#server}
  */
  readonly server?: string;
  /**
  * Bind an authentication service group to this template (Specify authentication service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#service_group AamAuthenticationTemplate#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * 'saml': SAML authentication template; 'standard': Standard authentication template; 'oauth': Oauth 2.0 authentication template;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#type AamAuthenticationTemplate#type}
  */
  readonly type?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#user_tag AamAuthenticationTemplate#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#uuid AamAuthenticationTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#chain AamAuthenticationTemplate#chain}
  */
  readonly chain?: AamAuthenticationTemplateChain[] | cdktf.IResolvable;
  /**
  * cookie_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#cookie_domain AamAuthenticationTemplate#cookie_domain}
  */
  readonly cookieDomain?: AamAuthenticationTemplateCookieDomain[] | cdktf.IResolvable;
  /**
  * cookie_domain_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#cookie_domain_group AamAuthenticationTemplate#cookie_domain_group}
  */
  readonly cookieDomainGroup?: AamAuthenticationTemplateCookieDomainGroup[] | cdktf.IResolvable;
}
export interface AamAuthenticationTemplateChain {
  /**
  * Specify authentication server (Specify authentication server template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#chain_server AamAuthenticationTemplate#chain_server}
  */
  readonly chainServer?: string;
  /**
  * Set server priority, higher the number higher the priority. Default is 3. (Chain server priority, higher the number higher the priority. Default is 3.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#chain_server_priority AamAuthenticationTemplate#chain_server_priority}
  */
  readonly chainServerPriority?: number;
  /**
  * Bind an authentication service group to this template (Specify authentication service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#chain_sg AamAuthenticationTemplate#chain_sg}
  */
  readonly chainSg?: string;
  /**
  * Set service-group priority, higher the number higher the priority. Default is 3. (Chain service-group priority, higher the number higher the priority. Default is 3.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#chain_sg_priority AamAuthenticationTemplate#chain_sg_priority}
  */
  readonly chainSgPriority?: number;
}

export function aamAuthenticationTemplateChainToTerraform(struct?: AamAuthenticationTemplateChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chain_server: cdktf.stringToTerraform(struct!.chainServer),
    chain_server_priority: cdktf.numberToTerraform(struct!.chainServerPriority),
    chain_sg: cdktf.stringToTerraform(struct!.chainSg),
    chain_sg_priority: cdktf.numberToTerraform(struct!.chainSgPriority),
  }
}


export function aamAuthenticationTemplateChainToHclTerraform(struct?: AamAuthenticationTemplateChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chain_server: {
      value: cdktf.stringToHclTerraform(struct!.chainServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chain_server_priority: {
      value: cdktf.numberToHclTerraform(struct!.chainServerPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chain_sg: {
      value: cdktf.stringToHclTerraform(struct!.chainSg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chain_sg_priority: {
      value: cdktf.numberToHclTerraform(struct!.chainSgPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationTemplateChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationTemplateChain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chainServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainServer = this._chainServer;
    }
    if (this._chainServerPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainServerPriority = this._chainServerPriority;
    }
    if (this._chainSg !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainSg = this._chainSg;
    }
    if (this._chainSgPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainSgPriority = this._chainSgPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationTemplateChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chainServer = undefined;
      this._chainServerPriority = undefined;
      this._chainSg = undefined;
      this._chainSgPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chainServer = value.chainServer;
      this._chainServerPriority = value.chainServerPriority;
      this._chainSg = value.chainSg;
      this._chainSgPriority = value.chainSgPriority;
    }
  }

  // chain_server - computed: false, optional: true, required: false
  private _chainServer?: string; 
  public get chainServer() {
    return this.getStringAttribute('chain_server');
  }
  public set chainServer(value: string) {
    this._chainServer = value;
  }
  public resetChainServer() {
    this._chainServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainServerInput() {
    return this._chainServer;
  }

  // chain_server_priority - computed: false, optional: true, required: false
  private _chainServerPriority?: number; 
  public get chainServerPriority() {
    return this.getNumberAttribute('chain_server_priority');
  }
  public set chainServerPriority(value: number) {
    this._chainServerPriority = value;
  }
  public resetChainServerPriority() {
    this._chainServerPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainServerPriorityInput() {
    return this._chainServerPriority;
  }

  // chain_sg - computed: false, optional: true, required: false
  private _chainSg?: string; 
  public get chainSg() {
    return this.getStringAttribute('chain_sg');
  }
  public set chainSg(value: string) {
    this._chainSg = value;
  }
  public resetChainSg() {
    this._chainSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainSgInput() {
    return this._chainSg;
  }

  // chain_sg_priority - computed: false, optional: true, required: false
  private _chainSgPriority?: number; 
  public get chainSgPriority() {
    return this.getNumberAttribute('chain_sg_priority');
  }
  public set chainSgPriority(value: number) {
    this._chainSgPriority = value;
  }
  public resetChainSgPriority() {
    this._chainSgPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainSgPriorityInput() {
    return this._chainSgPriority;
  }
}

export class AamAuthenticationTemplateChainList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationTemplateChain[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationTemplateChainOutputReference {
    return new AamAuthenticationTemplateChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationTemplateCookieDomain {
  /**
  * Specify domain scope for the authentication (ex: .a10networks.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#cookie_dmn AamAuthenticationTemplate#cookie_dmn}
  */
  readonly cookieDmn?: string;
}

export function aamAuthenticationTemplateCookieDomainToTerraform(struct?: AamAuthenticationTemplateCookieDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_dmn: cdktf.stringToTerraform(struct!.cookieDmn),
  }
}


export function aamAuthenticationTemplateCookieDomainToHclTerraform(struct?: AamAuthenticationTemplateCookieDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_dmn: {
      value: cdktf.stringToHclTerraform(struct!.cookieDmn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationTemplateCookieDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationTemplateCookieDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieDmn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieDmn = this._cookieDmn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationTemplateCookieDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieDmn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieDmn = value.cookieDmn;
    }
  }

  // cookie_dmn - computed: false, optional: true, required: false
  private _cookieDmn?: string; 
  public get cookieDmn() {
    return this.getStringAttribute('cookie_dmn');
  }
  public set cookieDmn(value: string) {
    this._cookieDmn = value;
  }
  public resetCookieDmn() {
    this._cookieDmn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieDmnInput() {
    return this._cookieDmn;
  }
}

export class AamAuthenticationTemplateCookieDomainList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationTemplateCookieDomain[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationTemplateCookieDomainOutputReference {
    return new AamAuthenticationTemplateCookieDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationTemplateCookieDomainGroup {
  /**
  * Specify group id to join in the cookie-domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#cookie_dmngrp AamAuthenticationTemplate#cookie_dmngrp}
  */
  readonly cookieDmngrp?: number;
}

export function aamAuthenticationTemplateCookieDomainGroupToTerraform(struct?: AamAuthenticationTemplateCookieDomainGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_dmngrp: cdktf.numberToTerraform(struct!.cookieDmngrp),
  }
}


export function aamAuthenticationTemplateCookieDomainGroupToHclTerraform(struct?: AamAuthenticationTemplateCookieDomainGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_dmngrp: {
      value: cdktf.numberToHclTerraform(struct!.cookieDmngrp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationTemplateCookieDomainGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationTemplateCookieDomainGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieDmngrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieDmngrp = this._cookieDmngrp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationTemplateCookieDomainGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieDmngrp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieDmngrp = value.cookieDmngrp;
    }
  }

  // cookie_dmngrp - computed: false, optional: true, required: false
  private _cookieDmngrp?: number; 
  public get cookieDmngrp() {
    return this.getNumberAttribute('cookie_dmngrp');
  }
  public set cookieDmngrp(value: number) {
    this._cookieDmngrp = value;
  }
  public resetCookieDmngrp() {
    this._cookieDmngrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieDmngrpInput() {
    return this._cookieDmngrp;
  }
}

export class AamAuthenticationTemplateCookieDomainGroupList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationTemplateCookieDomainGroup[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationTemplateCookieDomainGroupOutputReference {
    return new AamAuthenticationTemplateCookieDomainGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template thunder_aam_authentication_template}
*/
export class AamAuthenticationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationTemplate to import
  * @param importFromId The id of the existing AamAuthenticationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_template thunder_aam_authentication_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_template',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._accountingServer = config.accountingServer;
    this._accountingServiceGroup = config.accountingServiceGroup;
    this._authSessMode = config.authSessMode;
    this._captcha = config.captcha;
    this._cookieHttponlyEnable = config.cookieHttponlyEnable;
    this._cookieMaxAge = config.cookieMaxAge;
    this._cookieSamesite = config.cookieSamesite;
    this._cookieSecureEnable = config.cookieSecureEnable;
    this._forwardLogoutDisable = config.forwardLogoutDisable;
    this._id = config.id;
    this._jwt = config.jwt;
    this._localLogging = config.localLogging;
    this._log = config.log;
    this._logon = config.logon;
    this._logoutIdleTimeout = config.logoutIdleTimeout;
    this._logoutUrl = config.logoutUrl;
    this._maxSessionTime = config.maxSessionTime;
    this._modifyContentSecurityPolicy = config.modifyContentSecurityPolicy;
    this._name = config.name;
    this._oauthAuthorizationServer = config.oauthAuthorizationServer;
    this._oauthClient = config.oauthClient;
    this._redirectHostname = config.redirectHostname;
    this._relay = config.relay;
    this._samlIdp = config.samlIdp;
    this._samlSp = config.samlSp;
    this._server = config.server;
    this._serviceGroup = config.serviceGroup;
    this._type = config.type;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._chain.internalValue = config.chain;
    this._cookieDomain.internalValue = config.cookieDomain;
    this._cookieDomainGroup.internalValue = config.cookieDomainGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // accounting_server - computed: false, optional: true, required: false
  private _accountingServer?: string; 
  public get accountingServer() {
    return this.getStringAttribute('accounting_server');
  }
  public set accountingServer(value: string) {
    this._accountingServer = value;
  }
  public resetAccountingServer() {
    this._accountingServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingServerInput() {
    return this._accountingServer;
  }

  // accounting_service_group - computed: false, optional: true, required: false
  private _accountingServiceGroup?: string; 
  public get accountingServiceGroup() {
    return this.getStringAttribute('accounting_service_group');
  }
  public set accountingServiceGroup(value: string) {
    this._accountingServiceGroup = value;
  }
  public resetAccountingServiceGroup() {
    this._accountingServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingServiceGroupInput() {
    return this._accountingServiceGroup;
  }

  // auth_sess_mode - computed: false, optional: true, required: false
  private _authSessMode?: string; 
  public get authSessMode() {
    return this.getStringAttribute('auth_sess_mode');
  }
  public set authSessMode(value: string) {
    this._authSessMode = value;
  }
  public resetAuthSessMode() {
    this._authSessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessModeInput() {
    return this._authSessMode;
  }

  // captcha - computed: false, optional: true, required: false
  private _captcha?: string; 
  public get captcha() {
    return this.getStringAttribute('captcha');
  }
  public set captcha(value: string) {
    this._captcha = value;
  }
  public resetCaptcha() {
    this._captcha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha;
  }

  // cookie_httponly_enable - computed: false, optional: true, required: false
  private _cookieHttponlyEnable?: number; 
  public get cookieHttponlyEnable() {
    return this.getNumberAttribute('cookie_httponly_enable');
  }
  public set cookieHttponlyEnable(value: number) {
    this._cookieHttponlyEnable = value;
  }
  public resetCookieHttponlyEnable() {
    this._cookieHttponlyEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieHttponlyEnableInput() {
    return this._cookieHttponlyEnable;
  }

  // cookie_max_age - computed: false, optional: true, required: false
  private _cookieMaxAge?: number; 
  public get cookieMaxAge() {
    return this.getNumberAttribute('cookie_max_age');
  }
  public set cookieMaxAge(value: number) {
    this._cookieMaxAge = value;
  }
  public resetCookieMaxAge() {
    this._cookieMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMaxAgeInput() {
    return this._cookieMaxAge;
  }

  // cookie_samesite - computed: false, optional: true, required: false
  private _cookieSamesite?: string; 
  public get cookieSamesite() {
    return this.getStringAttribute('cookie_samesite');
  }
  public set cookieSamesite(value: string) {
    this._cookieSamesite = value;
  }
  public resetCookieSamesite() {
    this._cookieSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSamesiteInput() {
    return this._cookieSamesite;
  }

  // cookie_secure_enable - computed: false, optional: true, required: false
  private _cookieSecureEnable?: number; 
  public get cookieSecureEnable() {
    return this.getNumberAttribute('cookie_secure_enable');
  }
  public set cookieSecureEnable(value: number) {
    this._cookieSecureEnable = value;
  }
  public resetCookieSecureEnable() {
    this._cookieSecureEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSecureEnableInput() {
    return this._cookieSecureEnable;
  }

  // forward_logout_disable - computed: false, optional: true, required: false
  private _forwardLogoutDisable?: number; 
  public get forwardLogoutDisable() {
    return this.getNumberAttribute('forward_logout_disable');
  }
  public set forwardLogoutDisable(value: number) {
    this._forwardLogoutDisable = value;
  }
  public resetForwardLogoutDisable() {
    this._forwardLogoutDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardLogoutDisableInput() {
    return this._forwardLogoutDisable;
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

  // jwt - computed: false, optional: true, required: false
  private _jwt?: string; 
  public get jwt() {
    return this.getStringAttribute('jwt');
  }
  public set jwt(value: string) {
    this._jwt = value;
  }
  public resetJwt() {
    this._jwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt;
  }

  // local_logging - computed: false, optional: true, required: false
  private _localLogging?: number; 
  public get localLogging() {
    return this.getNumberAttribute('local_logging');
  }
  public set localLogging(value: number) {
    this._localLogging = value;
  }
  public resetLocalLogging() {
    this._localLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLoggingInput() {
    return this._localLogging;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // logon - computed: false, optional: true, required: false
  private _logon?: string; 
  public get logon() {
    return this.getStringAttribute('logon');
  }
  public set logon(value: string) {
    this._logon = value;
  }
  public resetLogon() {
    this._logon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonInput() {
    return this._logon;
  }

  // logout_idle_timeout - computed: false, optional: true, required: false
  private _logoutIdleTimeout?: number; 
  public get logoutIdleTimeout() {
    return this.getNumberAttribute('logout_idle_timeout');
  }
  public set logoutIdleTimeout(value: number) {
    this._logoutIdleTimeout = value;
  }
  public resetLogoutIdleTimeout() {
    this._logoutIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutIdleTimeoutInput() {
    return this._logoutIdleTimeout;
  }

  // logout_url - computed: false, optional: true, required: false
  private _logoutUrl?: string; 
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }
  public set logoutUrl(value: string) {
    this._logoutUrl = value;
  }
  public resetLogoutUrl() {
    this._logoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlInput() {
    return this._logoutUrl;
  }

  // max_session_time - computed: false, optional: true, required: false
  private _maxSessionTime?: number; 
  public get maxSessionTime() {
    return this.getNumberAttribute('max_session_time');
  }
  public set maxSessionTime(value: number) {
    this._maxSessionTime = value;
  }
  public resetMaxSessionTime() {
    this._maxSessionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionTimeInput() {
    return this._maxSessionTime;
  }

  // modify_content_security_policy - computed: false, optional: true, required: false
  private _modifyContentSecurityPolicy?: number; 
  public get modifyContentSecurityPolicy() {
    return this.getNumberAttribute('modify_content_security_policy');
  }
  public set modifyContentSecurityPolicy(value: number) {
    this._modifyContentSecurityPolicy = value;
  }
  public resetModifyContentSecurityPolicy() {
    this._modifyContentSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyContentSecurityPolicyInput() {
    return this._modifyContentSecurityPolicy;
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

  // oauth_authorization_server - computed: false, optional: true, required: false
  private _oauthAuthorizationServer?: string; 
  public get oauthAuthorizationServer() {
    return this.getStringAttribute('oauth_authorization_server');
  }
  public set oauthAuthorizationServer(value: string) {
    this._oauthAuthorizationServer = value;
  }
  public resetOauthAuthorizationServer() {
    this._oauthAuthorizationServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAuthorizationServerInput() {
    return this._oauthAuthorizationServer;
  }

  // oauth_client - computed: false, optional: true, required: false
  private _oauthClient?: string; 
  public get oauthClient() {
    return this.getStringAttribute('oauth_client');
  }
  public set oauthClient(value: string) {
    this._oauthClient = value;
  }
  public resetOauthClient() {
    this._oauthClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientInput() {
    return this._oauthClient;
  }

  // redirect_hostname - computed: false, optional: true, required: false
  private _redirectHostname?: string; 
  public get redirectHostname() {
    return this.getStringAttribute('redirect_hostname');
  }
  public set redirectHostname(value: string) {
    this._redirectHostname = value;
  }
  public resetRedirectHostname() {
    this._redirectHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHostnameInput() {
    return this._redirectHostname;
  }

  // relay - computed: false, optional: true, required: false
  private _relay?: string; 
  public get relay() {
    return this.getStringAttribute('relay');
  }
  public set relay(value: string) {
    this._relay = value;
  }
  public resetRelay() {
    this._relay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInput() {
    return this._relay;
  }

  // saml_idp - computed: false, optional: true, required: false
  private _samlIdp?: string; 
  public get samlIdp() {
    return this.getStringAttribute('saml_idp');
  }
  public set samlIdp(value: string) {
    this._samlIdp = value;
  }
  public resetSamlIdp() {
    this._samlIdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpInput() {
    return this._samlIdp;
  }

  // saml_sp - computed: false, optional: true, required: false
  private _samlSp?: string; 
  public get samlSp() {
    return this.getStringAttribute('saml_sp');
  }
  public set samlSp(value: string) {
    this._samlSp = value;
  }
  public resetSamlSp() {
    this._samlSp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSpInput() {
    return this._samlSp;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // chain - computed: false, optional: true, required: false
  private _chain = new AamAuthenticationTemplateChainList(this, "chain", false);
  public get chain() {
    return this._chain;
  }
  public putChain(value: AamAuthenticationTemplateChain[] | cdktf.IResolvable) {
    this._chain.internalValue = value;
  }
  public resetChain() {
    this._chain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainInput() {
    return this._chain.internalValue;
  }

  // cookie_domain - computed: false, optional: true, required: false
  private _cookieDomain = new AamAuthenticationTemplateCookieDomainList(this, "cookie_domain", false);
  public get cookieDomain() {
    return this._cookieDomain;
  }
  public putCookieDomain(value: AamAuthenticationTemplateCookieDomain[] | cdktf.IResolvable) {
    this._cookieDomain.internalValue = value;
  }
  public resetCookieDomain() {
    this._cookieDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieDomainInput() {
    return this._cookieDomain.internalValue;
  }

  // cookie_domain_group - computed: false, optional: true, required: false
  private _cookieDomainGroup = new AamAuthenticationTemplateCookieDomainGroupList(this, "cookie_domain_group", false);
  public get cookieDomainGroup() {
    return this._cookieDomainGroup;
  }
  public putCookieDomainGroup(value: AamAuthenticationTemplateCookieDomainGroup[] | cdktf.IResolvable) {
    this._cookieDomainGroup.internalValue = value;
  }
  public resetCookieDomainGroup() {
    this._cookieDomainGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieDomainGroupInput() {
    return this._cookieDomainGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      accounting_server: cdktf.stringToTerraform(this._accountingServer),
      accounting_service_group: cdktf.stringToTerraform(this._accountingServiceGroup),
      auth_sess_mode: cdktf.stringToTerraform(this._authSessMode),
      captcha: cdktf.stringToTerraform(this._captcha),
      cookie_httponly_enable: cdktf.numberToTerraform(this._cookieHttponlyEnable),
      cookie_max_age: cdktf.numberToTerraform(this._cookieMaxAge),
      cookie_samesite: cdktf.stringToTerraform(this._cookieSamesite),
      cookie_secure_enable: cdktf.numberToTerraform(this._cookieSecureEnable),
      forward_logout_disable: cdktf.numberToTerraform(this._forwardLogoutDisable),
      id: cdktf.stringToTerraform(this._id),
      jwt: cdktf.stringToTerraform(this._jwt),
      local_logging: cdktf.numberToTerraform(this._localLogging),
      log: cdktf.stringToTerraform(this._log),
      logon: cdktf.stringToTerraform(this._logon),
      logout_idle_timeout: cdktf.numberToTerraform(this._logoutIdleTimeout),
      logout_url: cdktf.stringToTerraform(this._logoutUrl),
      max_session_time: cdktf.numberToTerraform(this._maxSessionTime),
      modify_content_security_policy: cdktf.numberToTerraform(this._modifyContentSecurityPolicy),
      name: cdktf.stringToTerraform(this._name),
      oauth_authorization_server: cdktf.stringToTerraform(this._oauthAuthorizationServer),
      oauth_client: cdktf.stringToTerraform(this._oauthClient),
      redirect_hostname: cdktf.stringToTerraform(this._redirectHostname),
      relay: cdktf.stringToTerraform(this._relay),
      saml_idp: cdktf.stringToTerraform(this._samlIdp),
      saml_sp: cdktf.stringToTerraform(this._samlSp),
      server: cdktf.stringToTerraform(this._server),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      type: cdktf.stringToTerraform(this._type),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      chain: cdktf.listMapper(aamAuthenticationTemplateChainToTerraform, true)(this._chain.internalValue),
      cookie_domain: cdktf.listMapper(aamAuthenticationTemplateCookieDomainToTerraform, true)(this._cookieDomain.internalValue),
      cookie_domain_group: cdktf.listMapper(aamAuthenticationTemplateCookieDomainGroupToTerraform, true)(this._cookieDomainGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting_server: {
        value: cdktf.stringToHclTerraform(this._accountingServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting_service_group: {
        value: cdktf.stringToHclTerraform(this._accountingServiceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_sess_mode: {
        value: cdktf.stringToHclTerraform(this._authSessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captcha: {
        value: cdktf.stringToHclTerraform(this._captcha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_httponly_enable: {
        value: cdktf.numberToHclTerraform(this._cookieHttponlyEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookie_max_age: {
        value: cdktf.numberToHclTerraform(this._cookieMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookie_samesite: {
        value: cdktf.stringToHclTerraform(this._cookieSamesite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_secure_enable: {
        value: cdktf.numberToHclTerraform(this._cookieSecureEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_logout_disable: {
        value: cdktf.numberToHclTerraform(this._forwardLogoutDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt: {
        value: cdktf.stringToHclTerraform(this._jwt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_logging: {
        value: cdktf.numberToHclTerraform(this._localLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log: {
        value: cdktf.stringToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logon: {
        value: cdktf.stringToHclTerraform(this._logon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._logoutIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logout_url: {
        value: cdktf.stringToHclTerraform(this._logoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_session_time: {
        value: cdktf.numberToHclTerraform(this._maxSessionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      modify_content_security_policy: {
        value: cdktf.numberToHclTerraform(this._modifyContentSecurityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_authorization_server: {
        value: cdktf.stringToHclTerraform(this._oauthAuthorizationServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client: {
        value: cdktf.stringToHclTerraform(this._oauthClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_hostname: {
        value: cdktf.stringToHclTerraform(this._redirectHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relay: {
        value: cdktf.stringToHclTerraform(this._relay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_idp: {
        value: cdktf.stringToHclTerraform(this._samlIdp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_sp: {
        value: cdktf.stringToHclTerraform(this._samlSp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chain: {
        value: cdktf.listMapperHcl(aamAuthenticationTemplateChainToHclTerraform, true)(this._chain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationTemplateChainList",
      },
      cookie_domain: {
        value: cdktf.listMapperHcl(aamAuthenticationTemplateCookieDomainToHclTerraform, true)(this._cookieDomain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationTemplateCookieDomainList",
      },
      cookie_domain_group: {
        value: cdktf.listMapperHcl(aamAuthenticationTemplateCookieDomainGroupToHclTerraform, true)(this._cookieDomainGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationTemplateCookieDomainGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
