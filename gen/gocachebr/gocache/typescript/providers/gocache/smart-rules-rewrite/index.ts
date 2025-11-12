// https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmartRulesRewriteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#domain SmartRulesRewrite#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#id SmartRulesRewrite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * smart_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#smart_rule SmartRulesRewrite#smart_rule}
  */
  readonly smartRule: SmartRulesRewriteSmartRule[] | cdktf.IResolvable;
}
export interface SmartRulesRewriteSmartRuleAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#redirect_to SmartRulesRewrite#redirect_to}
  */
  readonly redirectTo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#redirect_type SmartRulesRewrite#redirect_type}
  */
  readonly redirectType: string;
}

export function smartRulesRewriteSmartRuleActionToTerraform(struct?: SmartRulesRewriteSmartRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_to: cdktf.stringToTerraform(struct!.redirectTo),
    redirect_type: cdktf.stringToTerraform(struct!.redirectType),
  }
}


export function smartRulesRewriteSmartRuleActionToHclTerraform(struct?: SmartRulesRewriteSmartRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_to: {
      value: cdktf.stringToHclTerraform(struct!.redirectTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_type: {
      value: cdktf.stringToHclTerraform(struct!.redirectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartRulesRewriteSmartRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartRulesRewriteSmartRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectTo = this._redirectTo;
    }
    if (this._redirectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectType = this._redirectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartRulesRewriteSmartRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._redirectTo = undefined;
      this._redirectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._redirectTo = value.redirectTo;
      this._redirectType = value.redirectType;
    }
  }

  // redirect_to - computed: false, optional: false, required: true
  private _redirectTo?: string; 
  public get redirectTo() {
    return this.getStringAttribute('redirect_to');
  }
  public set redirectTo(value: string) {
    this._redirectTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectToInput() {
    return this._redirectTo;
  }

  // redirect_type - computed: false, optional: false, required: true
  private _redirectType?: string; 
  public get redirectType() {
    return this.getStringAttribute('redirect_type');
  }
  public set redirectType(value: string) {
    this._redirectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectTypeInput() {
    return this._redirectType;
  }
}

export class SmartRulesRewriteSmartRuleActionList extends cdktf.ComplexList {
  public internalValue? : SmartRulesRewriteSmartRuleAction[] | cdktf.IResolvable

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
  public get(index: number): SmartRulesRewriteSmartRuleActionOutputReference {
    return new SmartRulesRewriteSmartRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartRulesRewriteSmartRuleMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#bots SmartRulesRewrite#bots}
  */
  readonly bots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#cookie SmartRulesRewrite#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#cookie_content SmartRulesRewrite#cookie_content}
  */
  readonly cookieContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#device_type SmartRulesRewrite#device_type}
  */
  readonly deviceType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#header SmartRulesRewrite#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#hostname SmartRulesRewrite#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#http_referer SmartRulesRewrite#http_referer}
  */
  readonly httpReferer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#http_user_agent SmartRulesRewrite#http_user_agent}
  */
  readonly httpUserAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#http_version SmartRulesRewrite#http_version}
  */
  readonly httpVersion?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#origin_continent SmartRulesRewrite#origin_continent}
  */
  readonly originContinent?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#origin_country SmartRulesRewrite#origin_country}
  */
  readonly originCountry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#remote_address SmartRulesRewrite#remote_address}
  */
  readonly remoteAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#request_method SmartRulesRewrite#request_method}
  */
  readonly requestMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#request_uri SmartRulesRewrite#request_uri}
  */
  readonly requestUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#scheme SmartRulesRewrite#scheme}
  */
  readonly scheme?: string;
}

export function smartRulesRewriteSmartRuleMatchToTerraform(struct?: SmartRulesRewriteSmartRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bots: cdktf.stringToTerraform(struct!.bots),
    cookie: cdktf.stringToTerraform(struct!.cookie),
    cookie_content: cdktf.stringToTerraform(struct!.cookieContent),
    device_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceType),
    header: cdktf.stringToTerraform(struct!.header),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    http_referer: cdktf.stringToTerraform(struct!.httpReferer),
    http_user_agent: cdktf.stringToTerraform(struct!.httpUserAgent),
    http_version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpVersion),
    origin_continent: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.originContinent),
    origin_country: cdktf.stringToTerraform(struct!.originCountry),
    remote_address: cdktf.stringToTerraform(struct!.remoteAddress),
    request_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestMethod),
    request_uri: cdktf.stringToTerraform(struct!.requestUri),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function smartRulesRewriteSmartRuleMatchToHclTerraform(struct?: SmartRulesRewriteSmartRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bots: {
      value: cdktf.stringToHclTerraform(struct!.bots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_content: {
      value: cdktf.stringToHclTerraform(struct!.cookieContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_referer: {
      value: cdktf.stringToHclTerraform(struct!.httpReferer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_user_agent: {
      value: cdktf.stringToHclTerraform(struct!.httpUserAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpVersion),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    origin_continent: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.originContinent),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    origin_country: {
      value: cdktf.stringToHclTerraform(struct!.originCountry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_address: {
      value: cdktf.stringToHclTerraform(struct!.remoteAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_method: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestMethod),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_uri: {
      value: cdktf.stringToHclTerraform(struct!.requestUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartRulesRewriteSmartRuleMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartRulesRewriteSmartRuleMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bots !== undefined) {
      hasAnyValues = true;
      internalValueResult.bots = this._bots;
    }
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._cookieContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieContent = this._cookieContent;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._httpReferer !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReferer = this._httpReferer;
    }
    if (this._httpUserAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUserAgent = this._httpUserAgent;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._originContinent !== undefined) {
      hasAnyValues = true;
      internalValueResult.originContinent = this._originContinent;
    }
    if (this._originCountry !== undefined) {
      hasAnyValues = true;
      internalValueResult.originCountry = this._originCountry;
    }
    if (this._remoteAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddress = this._remoteAddress;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._requestUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUri = this._requestUri;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartRulesRewriteSmartRuleMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bots = undefined;
      this._cookie = undefined;
      this._cookieContent = undefined;
      this._deviceType = undefined;
      this._header = undefined;
      this._hostname = undefined;
      this._httpReferer = undefined;
      this._httpUserAgent = undefined;
      this._httpVersion = undefined;
      this._originContinent = undefined;
      this._originCountry = undefined;
      this._remoteAddress = undefined;
      this._requestMethod = undefined;
      this._requestUri = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bots = value.bots;
      this._cookie = value.cookie;
      this._cookieContent = value.cookieContent;
      this._deviceType = value.deviceType;
      this._header = value.header;
      this._hostname = value.hostname;
      this._httpReferer = value.httpReferer;
      this._httpUserAgent = value.httpUserAgent;
      this._httpVersion = value.httpVersion;
      this._originContinent = value.originContinent;
      this._originCountry = value.originCountry;
      this._remoteAddress = value.remoteAddress;
      this._requestMethod = value.requestMethod;
      this._requestUri = value.requestUri;
      this._scheme = value.scheme;
    }
  }

  // bots - computed: false, optional: true, required: false
  private _bots?: string; 
  public get bots() {
    return this.getStringAttribute('bots');
  }
  public set bots(value: string) {
    this._bots = value;
  }
  public resetBots() {
    this._bots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botsInput() {
    return this._bots;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // cookie_content - computed: false, optional: true, required: false
  private _cookieContent?: string; 
  public get cookieContent() {
    return this.getStringAttribute('cookie_content');
  }
  public set cookieContent(value: string) {
    this._cookieContent = value;
  }
  public resetCookieContent() {
    this._cookieContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieContentInput() {
    return this._cookieContent;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string[]; 
  public get deviceType() {
    return this.getListAttribute('device_type');
  }
  public set deviceType(value: string[]) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // http_referer - computed: false, optional: true, required: false
  private _httpReferer?: string; 
  public get httpReferer() {
    return this.getStringAttribute('http_referer');
  }
  public set httpReferer(value: string) {
    this._httpReferer = value;
  }
  public resetHttpReferer() {
    this._httpReferer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRefererInput() {
    return this._httpReferer;
  }

  // http_user_agent - computed: false, optional: true, required: false
  private _httpUserAgent?: string; 
  public get httpUserAgent() {
    return this.getStringAttribute('http_user_agent');
  }
  public set httpUserAgent(value: string) {
    this._httpUserAgent = value;
  }
  public resetHttpUserAgent() {
    this._httpUserAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUserAgentInput() {
    return this._httpUserAgent;
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string[]; 
  public get httpVersion() {
    return this.getListAttribute('http_version');
  }
  public set httpVersion(value: string[]) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // origin_continent - computed: false, optional: true, required: false
  private _originContinent?: string[]; 
  public get originContinent() {
    return this.getListAttribute('origin_continent');
  }
  public set originContinent(value: string[]) {
    this._originContinent = value;
  }
  public resetOriginContinent() {
    this._originContinent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originContinentInput() {
    return this._originContinent;
  }

  // origin_country - computed: false, optional: true, required: false
  private _originCountry?: string; 
  public get originCountry() {
    return this.getStringAttribute('origin_country');
  }
  public set originCountry(value: string) {
    this._originCountry = value;
  }
  public resetOriginCountry() {
    this._originCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originCountryInput() {
    return this._originCountry;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod?: string[]; 
  public get requestMethod() {
    return this.getListAttribute('request_method');
  }
  public set requestMethod(value: string[]) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // request_uri - computed: false, optional: true, required: false
  private _requestUri?: string; 
  public get requestUri() {
    return this.getStringAttribute('request_uri');
  }
  public set requestUri(value: string) {
    this._requestUri = value;
  }
  public resetRequestUri() {
    this._requestUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriInput() {
    return this._requestUri;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class SmartRulesRewriteSmartRuleMatchList extends cdktf.ComplexList {
  public internalValue? : SmartRulesRewriteSmartRuleMatch[] | cdktf.IResolvable

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
  public get(index: number): SmartRulesRewriteSmartRuleMatchOutputReference {
    return new SmartRulesRewriteSmartRuleMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartRulesRewriteSmartRuleMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#notes SmartRulesRewrite#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#status SmartRulesRewrite#status}
  */
  readonly status?: string;
}

export function smartRulesRewriteSmartRuleMetadataToTerraform(struct?: SmartRulesRewriteSmartRuleMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notes: cdktf.stringToTerraform(struct!.notes),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function smartRulesRewriteSmartRuleMetadataToHclTerraform(struct?: SmartRulesRewriteSmartRuleMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartRulesRewriteSmartRuleMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartRulesRewriteSmartRuleMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartRulesRewriteSmartRuleMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notes = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notes = value.notes;
      this._status = value.status;
    }
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // status - computed: false, optional: true, required: false
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
}

export class SmartRulesRewriteSmartRuleMetadataList extends cdktf.ComplexList {
  public internalValue? : SmartRulesRewriteSmartRuleMetadata[] | cdktf.IResolvable

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
  public get(index: number): SmartRulesRewriteSmartRuleMetadataOutputReference {
    return new SmartRulesRewriteSmartRuleMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartRulesRewriteSmartRule {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#action SmartRulesRewrite#action}
  */
  readonly action: SmartRulesRewriteSmartRuleAction[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#match SmartRulesRewrite#match}
  */
  readonly match: SmartRulesRewriteSmartRuleMatch[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#metadata SmartRulesRewrite#metadata}
  */
  readonly metadata?: SmartRulesRewriteSmartRuleMetadata[] | cdktf.IResolvable;
}

export function smartRulesRewriteSmartRuleToTerraform(struct?: SmartRulesRewriteSmartRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(smartRulesRewriteSmartRuleActionToTerraform, true)(struct!.action),
    match: cdktf.listMapper(smartRulesRewriteSmartRuleMatchToTerraform, true)(struct!.match),
    metadata: cdktf.listMapper(smartRulesRewriteSmartRuleMetadataToTerraform, true)(struct!.metadata),
  }
}


export function smartRulesRewriteSmartRuleToHclTerraform(struct?: SmartRulesRewriteSmartRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(smartRulesRewriteSmartRuleActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "SmartRulesRewriteSmartRuleActionList",
    },
    match: {
      value: cdktf.listMapperHcl(smartRulesRewriteSmartRuleMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "SmartRulesRewriteSmartRuleMatchList",
    },
    metadata: {
      value: cdktf.listMapperHcl(smartRulesRewriteSmartRuleMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "SmartRulesRewriteSmartRuleMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmartRulesRewriteSmartRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartRulesRewriteSmartRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartRulesRewriteSmartRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._metadata.internalValue = value.metadata;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new SmartRulesRewriteSmartRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: SmartRulesRewriteSmartRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new SmartRulesRewriteSmartRuleMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: SmartRulesRewriteSmartRuleMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new SmartRulesRewriteSmartRuleMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SmartRulesRewriteSmartRuleMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class SmartRulesRewriteSmartRuleList extends cdktf.ComplexList {
  public internalValue? : SmartRulesRewriteSmartRule[] | cdktf.IResolvable

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
  public get(index: number): SmartRulesRewriteSmartRuleOutputReference {
    return new SmartRulesRewriteSmartRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite gocache_smart_rules_rewrite}
*/
export class SmartRulesRewrite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gocache_smart_rules_rewrite";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmartRulesRewrite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmartRulesRewrite to import
  * @param importFromId The id of the existing SmartRulesRewrite that should be imported. Refer to the {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmartRulesRewrite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gocache_smart_rules_rewrite", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gocachebr/gocache/0.3.2/docs/resources/smart_rules_rewrite gocache_smart_rules_rewrite} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmartRulesRewriteConfig
  */
  public constructor(scope: Construct, id: string, config: SmartRulesRewriteConfig) {
    super(scope, id, {
      terraformResourceType: 'gocache_smart_rules_rewrite',
      terraformGeneratorMetadata: {
        providerName: 'gocache',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._smartRule.internalValue = config.smartRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bulk_id - computed: true, optional: false, required: false
  public get bulkId() {
    return this.getNumberAttribute('bulk_id');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // smart_rule - computed: false, optional: false, required: true
  private _smartRule = new SmartRulesRewriteSmartRuleList(this, "smart_rule", false);
  public get smartRule() {
    return this._smartRule;
  }
  public putSmartRule(value: SmartRulesRewriteSmartRule[] | cdktf.IResolvable) {
    this._smartRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartRuleInput() {
    return this._smartRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      smart_rule: cdktf.listMapper(smartRulesRewriteSmartRuleToTerraform, true)(this._smartRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      smart_rule: {
        value: cdktf.listMapperHcl(smartRulesRewriteSmartRuleToHclTerraform, true)(this._smartRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SmartRulesRewriteSmartRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
