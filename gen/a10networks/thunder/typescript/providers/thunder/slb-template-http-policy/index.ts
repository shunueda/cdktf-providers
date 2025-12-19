// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateHttpPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * name of cookie to match (Cookie Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_name SlbTemplateHttpPolicy#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#id SlbTemplateHttpPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * http-policy template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#name SlbTemplateHttpPolicy#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#user_tag SlbTemplateHttpPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#uuid SlbTemplateHttpPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * geo_location_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#geo_location_match SlbTemplateHttpPolicy#geo_location_match}
  */
  readonly geoLocationMatch?: SlbTemplateHttpPolicyGeoLocationMatch[] | cdktf.IResolvable;
  /**
  * http_policy_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#http_policy_match SlbTemplateHttpPolicy#http_policy_match}
  */
  readonly httpPolicyMatch?: SlbTemplateHttpPolicyHttpPolicyMatch[] | cdktf.IResolvable;
  /**
  * multi_match_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#multi_match_rule_list SlbTemplateHttpPolicy#multi_match_rule_list}
  */
  readonly multiMatchRuleList?: SlbTemplateHttpPolicyMultiMatchRuleListStruct[] | cdktf.IResolvable;
}
export interface SlbTemplateHttpPolicyGeoLocationMatch {
  /**
  * Geolocation name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#geo_location SlbTemplateHttpPolicy#geo_location}
  */
  readonly geoLocation?: string;
  /**
  * Service Group to be used (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#geo_location_service_group SlbTemplateHttpPolicy#geo_location_service_group}
  */
  readonly geoLocationServiceGroup?: string;
}

export function slbTemplateHttpPolicyGeoLocationMatchToTerraform(struct?: SlbTemplateHttpPolicyGeoLocationMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_location: cdktf.stringToTerraform(struct!.geoLocation),
    geo_location_service_group: cdktf.stringToTerraform(struct!.geoLocationServiceGroup),
  }
}


export function slbTemplateHttpPolicyGeoLocationMatchToHclTerraform(struct?: SlbTemplateHttpPolicyGeoLocationMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_location: {
      value: cdktf.stringToHclTerraform(struct!.geoLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_location_service_group: {
      value: cdktf.stringToHclTerraform(struct!.geoLocationServiceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpPolicyGeoLocationMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpPolicyGeoLocationMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocation = this._geoLocation;
    }
    if (this._geoLocationServiceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationServiceGroup = this._geoLocationServiceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpPolicyGeoLocationMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoLocation = undefined;
      this._geoLocationServiceGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoLocation = value.geoLocation;
      this._geoLocationServiceGroup = value.geoLocationServiceGroup;
    }
  }

  // geo_location - computed: false, optional: true, required: false
  private _geoLocation?: string; 
  public get geoLocation() {
    return this.getStringAttribute('geo_location');
  }
  public set geoLocation(value: string) {
    this._geoLocation = value;
  }
  public resetGeoLocation() {
    this._geoLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation;
  }

  // geo_location_service_group - computed: false, optional: true, required: false
  private _geoLocationServiceGroup?: string; 
  public get geoLocationServiceGroup() {
    return this.getStringAttribute('geo_location_service_group');
  }
  public set geoLocationServiceGroup(value: string) {
    this._geoLocationServiceGroup = value;
  }
  public resetGeoLocationServiceGroup() {
    this._geoLocationServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationServiceGroupInput() {
    return this._geoLocationServiceGroup;
  }
}

export class SlbTemplateHttpPolicyGeoLocationMatchList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpPolicyGeoLocationMatch[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpPolicyGeoLocationMatchOutputReference {
    return new SlbTemplateHttpPolicyGeoLocationMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpPolicyHttpPolicyMatch {
  /**
  * URL String, use "[no-name]" for empty query-param-name match, use "[no-value]" for empty query-param-value match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#match_string SlbTemplateHttpPolicy#match_string}
  */
  readonly matchString?: string;
  /**
  * 'contains': Select service group if URL string contains another string; 'ends-with': Select service group if URL string ends with another string; 'equals': Select service group if URL string equals another string; 'starts-with': Select service group if URL string starts with another string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#match_type SlbTemplateHttpPolicy#match_type}
  */
  readonly matchType?: string;
  /**
  * Service Group to be used (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#service_group SlbTemplateHttpPolicy#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * 'cookie': cookie value match; 'host': hostname match; 'url': URL match; 'header-name': header name match; 'header-value': header value match; 'query-param-name': query parameter name; 'query-param-value': query parameter value;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#type SlbTemplateHttpPolicy#type}
  */
  readonly type?: string;
}

export function slbTemplateHttpPolicyHttpPolicyMatchToTerraform(struct?: SlbTemplateHttpPolicyHttpPolicyMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_string: cdktf.stringToTerraform(struct!.matchString),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    service_group: cdktf.stringToTerraform(struct!.serviceGroup),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function slbTemplateHttpPolicyHttpPolicyMatchToHclTerraform(struct?: SlbTemplateHttpPolicyHttpPolicyMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_string: {
      value: cdktf.stringToHclTerraform(struct!.matchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroup),
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

export class SlbTemplateHttpPolicyHttpPolicyMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpPolicyHttpPolicyMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchString = this._matchString;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._serviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroup = this._serviceGroup;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpPolicyHttpPolicyMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchString = undefined;
      this._matchType = undefined;
      this._serviceGroup = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchString = value.matchString;
      this._matchType = value.matchType;
      this._serviceGroup = value.serviceGroup;
      this._type = value.type;
    }
  }

  // match_string - computed: false, optional: true, required: false
  private _matchString?: string; 
  public get matchString() {
    return this.getStringAttribute('match_string');
  }
  public set matchString(value: string) {
    this._matchString = value;
  }
  public resetMatchString() {
    this._matchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStringInput() {
    return this._matchString;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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
}

export class SlbTemplateHttpPolicyHttpPolicyMatchList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpPolicyHttpPolicyMatch[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpPolicyHttpPolicyMatchOutputReference {
    return new SlbTemplateHttpPolicyHttpPolicyMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpPolicyMultiMatchRuleListStruct {
  /**
  * Cookie name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_name_contains_string SlbTemplateHttpPolicy#cookie_name_contains_string}
  */
  readonly cookieNameContainsString?: string;
  /**
  * 'contains': Cookie name contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_name_contains_type SlbTemplateHttpPolicy#cookie_name_contains_type}
  */
  readonly cookieNameContainsType?: string;
  /**
  * Cookie name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_name_ends_with_string SlbTemplateHttpPolicy#cookie_name_ends_with_string}
  */
  readonly cookieNameEndsWithString?: string;
  /**
  * 'ends-with': Cookie name ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_name_ends_with_type SlbTemplateHttpPolicy#cookie_name_ends_with_type}
  */
  readonly cookieNameEndsWithType?: string;
  /**
  * Cookie name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_name_equals_string SlbTemplateHttpPolicy#cookie_name_equals_string}
  */
  readonly cookieNameEqualsString?: string;
  /**
  * 'equals': Cookie name equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_name_equals_type SlbTemplateHttpPolicy#cookie_name_equals_type}
  */
  readonly cookieNameEqualsType?: string;
  /**
  * Cookie name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_name_starts_with_string SlbTemplateHttpPolicy#cookie_name_starts_with_string}
  */
  readonly cookieNameStartsWithString?: string;
  /**
  * 'starts-with': Cookie name starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_name_starts_with_type SlbTemplateHttpPolicy#cookie_name_starts_with_type}
  */
  readonly cookieNameStartsWithType?: string;
  /**
  * When enabled, the rule will match only when both cookie-name and cookie-value matches with same cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_name_value_match SlbTemplateHttpPolicy#cookie_name_value_match}
  */
  readonly cookieNameValueMatch?: number;
  /**
  * Cookie value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_value_contains_string SlbTemplateHttpPolicy#cookie_value_contains_string}
  */
  readonly cookieValueContainsString?: string;
  /**
  * 'contains': Cookie value contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_value_contains_type SlbTemplateHttpPolicy#cookie_value_contains_type}
  */
  readonly cookieValueContainsType?: string;
  /**
  * Cookie value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_value_ends_with_string SlbTemplateHttpPolicy#cookie_value_ends_with_string}
  */
  readonly cookieValueEndsWithString?: string;
  /**
  * 'ends-with': Cookie value ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_value_ends_with_type SlbTemplateHttpPolicy#cookie_value_ends_with_type}
  */
  readonly cookieValueEndsWithType?: string;
  /**
  * Cookie value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_value_equals_string SlbTemplateHttpPolicy#cookie_value_equals_string}
  */
  readonly cookieValueEqualsString?: string;
  /**
  * 'equals': Cookie value equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_value_equals_type SlbTemplateHttpPolicy#cookie_value_equals_type}
  */
  readonly cookieValueEqualsType?: string;
  /**
  * Cookie value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_value_starts_with_string SlbTemplateHttpPolicy#cookie_value_starts_with_string}
  */
  readonly cookieValueStartsWithString?: string;
  /**
  * 'starts-with': Cookie value starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#cookie_value_starts_with_type SlbTemplateHttpPolicy#cookie_value_starts_with_type}
  */
  readonly cookieValueStartsWithType?: string;
  /**
  * Header name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_name_contains_string SlbTemplateHttpPolicy#header_name_contains_string}
  */
  readonly headerNameContainsString?: string;
  /**
  * 'contains': Header name contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_name_contains_type SlbTemplateHttpPolicy#header_name_contains_type}
  */
  readonly headerNameContainsType?: string;
  /**
  * Header name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_name_ends_with_string SlbTemplateHttpPolicy#header_name_ends_with_string}
  */
  readonly headerNameEndsWithString?: string;
  /**
  * 'ends-with': Header name ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_name_ends_with_type SlbTemplateHttpPolicy#header_name_ends_with_type}
  */
  readonly headerNameEndsWithType?: string;
  /**
  * Header name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_name_equals_string SlbTemplateHttpPolicy#header_name_equals_string}
  */
  readonly headerNameEqualsString?: string;
  /**
  * 'equals': Header name equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_name_equals_type SlbTemplateHttpPolicy#header_name_equals_type}
  */
  readonly headerNameEqualsType?: string;
  /**
  * Header name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_name_starts_with_string SlbTemplateHttpPolicy#header_name_starts_with_string}
  */
  readonly headerNameStartsWithString?: string;
  /**
  * 'starts-with': Header name starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_name_starts_with_type SlbTemplateHttpPolicy#header_name_starts_with_type}
  */
  readonly headerNameStartsWithType?: string;
  /**
  * When enabled, the rule will match only when both header-name and header-value matches with same header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_name_value_match SlbTemplateHttpPolicy#header_name_value_match}
  */
  readonly headerNameValueMatch?: number;
  /**
  * Header value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_value_contains_string SlbTemplateHttpPolicy#header_value_contains_string}
  */
  readonly headerValueContainsString?: string;
  /**
  * 'contains': Header value contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_value_contains_type SlbTemplateHttpPolicy#header_value_contains_type}
  */
  readonly headerValueContainsType?: string;
  /**
  * Header value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_value_ends_with_string SlbTemplateHttpPolicy#header_value_ends_with_string}
  */
  readonly headerValueEndsWithString?: string;
  /**
  * 'ends-with': Header value ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_value_ends_with_type SlbTemplateHttpPolicy#header_value_ends_with_type}
  */
  readonly headerValueEndsWithType?: string;
  /**
  * Header value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_value_equals_string SlbTemplateHttpPolicy#header_value_equals_string}
  */
  readonly headerValueEqualsString?: string;
  /**
  * 'equals': Header value equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_value_equals_type SlbTemplateHttpPolicy#header_value_equals_type}
  */
  readonly headerValueEqualsType?: string;
  /**
  * Header value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_value_starts_with_string SlbTemplateHttpPolicy#header_value_starts_with_string}
  */
  readonly headerValueStartsWithString?: string;
  /**
  * 'starts-with': Header value starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#header_value_starts_with_type SlbTemplateHttpPolicy#header_value_starts_with_type}
  */
  readonly headerValueStartsWithType?: string;
  /**
  * Host string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#host_contains_string SlbTemplateHttpPolicy#host_contains_string}
  */
  readonly hostContainsString?: string;
  /**
  * 'contains': Host contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#host_contains_type SlbTemplateHttpPolicy#host_contains_type}
  */
  readonly hostContainsType?: string;
  /**
  * Host string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#host_ends_with_string SlbTemplateHttpPolicy#host_ends_with_string}
  */
  readonly hostEndsWithString?: string;
  /**
  * 'ends-with': Host ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#host_ends_with_type SlbTemplateHttpPolicy#host_ends_with_type}
  */
  readonly hostEndsWithType?: string;
  /**
  * Host string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#host_equals_string SlbTemplateHttpPolicy#host_equals_string}
  */
  readonly hostEqualsString?: string;
  /**
  * 'equals': Host equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#host_equals_type SlbTemplateHttpPolicy#host_equals_type}
  */
  readonly hostEqualsType?: string;
  /**
  * Host string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#host_starts_with_string SlbTemplateHttpPolicy#host_starts_with_string}
  */
  readonly hostStartsWithString?: string;
  /**
  * 'starts-with': Host starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#host_starts_with_type SlbTemplateHttpPolicy#host_starts_with_type}
  */
  readonly hostStartsWithType?: string;
  /**
  * Specify a multi-match-rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#multi_match SlbTemplateHttpPolicy#multi_match}
  */
  readonly multiMatch: string;
  /**
  * query parameter name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_name_contains_string SlbTemplateHttpPolicy#query_param_name_contains_string}
  */
  readonly queryParamNameContainsString?: string;
  /**
  * 'contains': query parameter name contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_name_contains_type SlbTemplateHttpPolicy#query_param_name_contains_type}
  */
  readonly queryParamNameContainsType?: string;
  /**
  * query parameter name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_name_ends_with_string SlbTemplateHttpPolicy#query_param_name_ends_with_string}
  */
  readonly queryParamNameEndsWithString?: string;
  /**
  * 'ends-with': query parameter name ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_name_ends_with_type SlbTemplateHttpPolicy#query_param_name_ends_with_type}
  */
  readonly queryParamNameEndsWithType?: string;
  /**
  * query parameter name string, use "[no-name]" for empty query-param-name match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_name_equals_string SlbTemplateHttpPolicy#query_param_name_equals_string}
  */
  readonly queryParamNameEqualsString?: string;
  /**
  * 'equals': query parameter name equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_name_equals_type SlbTemplateHttpPolicy#query_param_name_equals_type}
  */
  readonly queryParamNameEqualsType?: string;
  /**
  * query parameter name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_name_starts_with_string SlbTemplateHttpPolicy#query_param_name_starts_with_string}
  */
  readonly queryParamNameStartsWithString?: string;
  /**
  * 'starts-with': query parameter name starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_name_starts_with_type SlbTemplateHttpPolicy#query_param_name_starts_with_type}
  */
  readonly queryParamNameStartsWithType?: string;
  /**
  * query parameter value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_value_contains_string SlbTemplateHttpPolicy#query_param_value_contains_string}
  */
  readonly queryParamValueContainsString?: string;
  /**
  * 'contains': query parameter value contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_value_contains_type SlbTemplateHttpPolicy#query_param_value_contains_type}
  */
  readonly queryParamValueContainsType?: string;
  /**
  * query parameter value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_value_ends_with_string SlbTemplateHttpPolicy#query_param_value_ends_with_string}
  */
  readonly queryParamValueEndsWithString?: string;
  /**
  * 'ends-with': query parameter value ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_value_ends_with_type SlbTemplateHttpPolicy#query_param_value_ends_with_type}
  */
  readonly queryParamValueEndsWithType?: string;
  /**
  * query parameter value string, use "[no-value]" for empty query-param-value match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_value_equals_string SlbTemplateHttpPolicy#query_param_value_equals_string}
  */
  readonly queryParamValueEqualsString?: string;
  /**
  * 'equals': query parameter value equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_value_equals_type SlbTemplateHttpPolicy#query_param_value_equals_type}
  */
  readonly queryParamValueEqualsType?: string;
  /**
  * query parameter value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_value_starts_with_string SlbTemplateHttpPolicy#query_param_value_starts_with_string}
  */
  readonly queryParamValueStartsWithString?: string;
  /**
  * 'starts-with': query parameter value starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#query_param_value_starts_with_type SlbTemplateHttpPolicy#query_param_value_starts_with_type}
  */
  readonly queryParamValueStartsWithType?: string;
  /**
  * Specify a sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#seq_num SlbTemplateHttpPolicy#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Service Group to be used (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#service_group SlbTemplateHttpPolicy#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * URL string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#url_contains_string SlbTemplateHttpPolicy#url_contains_string}
  */
  readonly urlContainsString?: string;
  /**
  * 'contains': URL contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#url_contains_type SlbTemplateHttpPolicy#url_contains_type}
  */
  readonly urlContainsType?: string;
  /**
  * URL string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#url_ends_with_string SlbTemplateHttpPolicy#url_ends_with_string}
  */
  readonly urlEndsWithString?: string;
  /**
  * 'ends-with': URL ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#url_ends_with_type SlbTemplateHttpPolicy#url_ends_with_type}
  */
  readonly urlEndsWithType?: string;
  /**
  * URL string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#url_equals_string SlbTemplateHttpPolicy#url_equals_string}
  */
  readonly urlEqualsString?: string;
  /**
  * 'equals': URL equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#url_equals_type SlbTemplateHttpPolicy#url_equals_type}
  */
  readonly urlEqualsType?: string;
  /**
  * URL string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#url_starts_with_string SlbTemplateHttpPolicy#url_starts_with_string}
  */
  readonly urlStartsWithString?: string;
  /**
  * 'starts-with': URL starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#url_starts_with_type SlbTemplateHttpPolicy#url_starts_with_type}
  */
  readonly urlStartsWithType?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#user_tag SlbTemplateHttpPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#uuid SlbTemplateHttpPolicy#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateHttpPolicyMultiMatchRuleListStructToTerraform(struct?: SlbTemplateHttpPolicyMultiMatchRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name_contains_string: cdktf.stringToTerraform(struct!.cookieNameContainsString),
    cookie_name_contains_type: cdktf.stringToTerraform(struct!.cookieNameContainsType),
    cookie_name_ends_with_string: cdktf.stringToTerraform(struct!.cookieNameEndsWithString),
    cookie_name_ends_with_type: cdktf.stringToTerraform(struct!.cookieNameEndsWithType),
    cookie_name_equals_string: cdktf.stringToTerraform(struct!.cookieNameEqualsString),
    cookie_name_equals_type: cdktf.stringToTerraform(struct!.cookieNameEqualsType),
    cookie_name_starts_with_string: cdktf.stringToTerraform(struct!.cookieNameStartsWithString),
    cookie_name_starts_with_type: cdktf.stringToTerraform(struct!.cookieNameStartsWithType),
    cookie_name_value_match: cdktf.numberToTerraform(struct!.cookieNameValueMatch),
    cookie_value_contains_string: cdktf.stringToTerraform(struct!.cookieValueContainsString),
    cookie_value_contains_type: cdktf.stringToTerraform(struct!.cookieValueContainsType),
    cookie_value_ends_with_string: cdktf.stringToTerraform(struct!.cookieValueEndsWithString),
    cookie_value_ends_with_type: cdktf.stringToTerraform(struct!.cookieValueEndsWithType),
    cookie_value_equals_string: cdktf.stringToTerraform(struct!.cookieValueEqualsString),
    cookie_value_equals_type: cdktf.stringToTerraform(struct!.cookieValueEqualsType),
    cookie_value_starts_with_string: cdktf.stringToTerraform(struct!.cookieValueStartsWithString),
    cookie_value_starts_with_type: cdktf.stringToTerraform(struct!.cookieValueStartsWithType),
    header_name_contains_string: cdktf.stringToTerraform(struct!.headerNameContainsString),
    header_name_contains_type: cdktf.stringToTerraform(struct!.headerNameContainsType),
    header_name_ends_with_string: cdktf.stringToTerraform(struct!.headerNameEndsWithString),
    header_name_ends_with_type: cdktf.stringToTerraform(struct!.headerNameEndsWithType),
    header_name_equals_string: cdktf.stringToTerraform(struct!.headerNameEqualsString),
    header_name_equals_type: cdktf.stringToTerraform(struct!.headerNameEqualsType),
    header_name_starts_with_string: cdktf.stringToTerraform(struct!.headerNameStartsWithString),
    header_name_starts_with_type: cdktf.stringToTerraform(struct!.headerNameStartsWithType),
    header_name_value_match: cdktf.numberToTerraform(struct!.headerNameValueMatch),
    header_value_contains_string: cdktf.stringToTerraform(struct!.headerValueContainsString),
    header_value_contains_type: cdktf.stringToTerraform(struct!.headerValueContainsType),
    header_value_ends_with_string: cdktf.stringToTerraform(struct!.headerValueEndsWithString),
    header_value_ends_with_type: cdktf.stringToTerraform(struct!.headerValueEndsWithType),
    header_value_equals_string: cdktf.stringToTerraform(struct!.headerValueEqualsString),
    header_value_equals_type: cdktf.stringToTerraform(struct!.headerValueEqualsType),
    header_value_starts_with_string: cdktf.stringToTerraform(struct!.headerValueStartsWithString),
    header_value_starts_with_type: cdktf.stringToTerraform(struct!.headerValueStartsWithType),
    host_contains_string: cdktf.stringToTerraform(struct!.hostContainsString),
    host_contains_type: cdktf.stringToTerraform(struct!.hostContainsType),
    host_ends_with_string: cdktf.stringToTerraform(struct!.hostEndsWithString),
    host_ends_with_type: cdktf.stringToTerraform(struct!.hostEndsWithType),
    host_equals_string: cdktf.stringToTerraform(struct!.hostEqualsString),
    host_equals_type: cdktf.stringToTerraform(struct!.hostEqualsType),
    host_starts_with_string: cdktf.stringToTerraform(struct!.hostStartsWithString),
    host_starts_with_type: cdktf.stringToTerraform(struct!.hostStartsWithType),
    multi_match: cdktf.stringToTerraform(struct!.multiMatch),
    query_param_name_contains_string: cdktf.stringToTerraform(struct!.queryParamNameContainsString),
    query_param_name_contains_type: cdktf.stringToTerraform(struct!.queryParamNameContainsType),
    query_param_name_ends_with_string: cdktf.stringToTerraform(struct!.queryParamNameEndsWithString),
    query_param_name_ends_with_type: cdktf.stringToTerraform(struct!.queryParamNameEndsWithType),
    query_param_name_equals_string: cdktf.stringToTerraform(struct!.queryParamNameEqualsString),
    query_param_name_equals_type: cdktf.stringToTerraform(struct!.queryParamNameEqualsType),
    query_param_name_starts_with_string: cdktf.stringToTerraform(struct!.queryParamNameStartsWithString),
    query_param_name_starts_with_type: cdktf.stringToTerraform(struct!.queryParamNameStartsWithType),
    query_param_value_contains_string: cdktf.stringToTerraform(struct!.queryParamValueContainsString),
    query_param_value_contains_type: cdktf.stringToTerraform(struct!.queryParamValueContainsType),
    query_param_value_ends_with_string: cdktf.stringToTerraform(struct!.queryParamValueEndsWithString),
    query_param_value_ends_with_type: cdktf.stringToTerraform(struct!.queryParamValueEndsWithType),
    query_param_value_equals_string: cdktf.stringToTerraform(struct!.queryParamValueEqualsString),
    query_param_value_equals_type: cdktf.stringToTerraform(struct!.queryParamValueEqualsType),
    query_param_value_starts_with_string: cdktf.stringToTerraform(struct!.queryParamValueStartsWithString),
    query_param_value_starts_with_type: cdktf.stringToTerraform(struct!.queryParamValueStartsWithType),
    seq_num: cdktf.numberToTerraform(struct!.seqNum),
    service_group: cdktf.stringToTerraform(struct!.serviceGroup),
    url_contains_string: cdktf.stringToTerraform(struct!.urlContainsString),
    url_contains_type: cdktf.stringToTerraform(struct!.urlContainsType),
    url_ends_with_string: cdktf.stringToTerraform(struct!.urlEndsWithString),
    url_ends_with_type: cdktf.stringToTerraform(struct!.urlEndsWithType),
    url_equals_string: cdktf.stringToTerraform(struct!.urlEqualsString),
    url_equals_type: cdktf.stringToTerraform(struct!.urlEqualsType),
    url_starts_with_string: cdktf.stringToTerraform(struct!.urlStartsWithString),
    url_starts_with_type: cdktf.stringToTerraform(struct!.urlStartsWithType),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateHttpPolicyMultiMatchRuleListStructToHclTerraform(struct?: SlbTemplateHttpPolicyMultiMatchRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name_contains_string: {
      value: cdktf.stringToHclTerraform(struct!.cookieNameContainsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_name_contains_type: {
      value: cdktf.stringToHclTerraform(struct!.cookieNameContainsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_name_ends_with_string: {
      value: cdktf.stringToHclTerraform(struct!.cookieNameEndsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_name_ends_with_type: {
      value: cdktf.stringToHclTerraform(struct!.cookieNameEndsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_name_equals_string: {
      value: cdktf.stringToHclTerraform(struct!.cookieNameEqualsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_name_equals_type: {
      value: cdktf.stringToHclTerraform(struct!.cookieNameEqualsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_name_starts_with_string: {
      value: cdktf.stringToHclTerraform(struct!.cookieNameStartsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_name_starts_with_type: {
      value: cdktf.stringToHclTerraform(struct!.cookieNameStartsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_name_value_match: {
      value: cdktf.numberToHclTerraform(struct!.cookieNameValueMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cookie_value_contains_string: {
      value: cdktf.stringToHclTerraform(struct!.cookieValueContainsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_value_contains_type: {
      value: cdktf.stringToHclTerraform(struct!.cookieValueContainsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_value_ends_with_string: {
      value: cdktf.stringToHclTerraform(struct!.cookieValueEndsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_value_ends_with_type: {
      value: cdktf.stringToHclTerraform(struct!.cookieValueEndsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_value_equals_string: {
      value: cdktf.stringToHclTerraform(struct!.cookieValueEqualsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_value_equals_type: {
      value: cdktf.stringToHclTerraform(struct!.cookieValueEqualsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_value_starts_with_string: {
      value: cdktf.stringToHclTerraform(struct!.cookieValueStartsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_value_starts_with_type: {
      value: cdktf.stringToHclTerraform(struct!.cookieValueStartsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name_contains_string: {
      value: cdktf.stringToHclTerraform(struct!.headerNameContainsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name_contains_type: {
      value: cdktf.stringToHclTerraform(struct!.headerNameContainsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name_ends_with_string: {
      value: cdktf.stringToHclTerraform(struct!.headerNameEndsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name_ends_with_type: {
      value: cdktf.stringToHclTerraform(struct!.headerNameEndsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name_equals_string: {
      value: cdktf.stringToHclTerraform(struct!.headerNameEqualsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name_equals_type: {
      value: cdktf.stringToHclTerraform(struct!.headerNameEqualsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name_starts_with_string: {
      value: cdktf.stringToHclTerraform(struct!.headerNameStartsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name_starts_with_type: {
      value: cdktf.stringToHclTerraform(struct!.headerNameStartsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name_value_match: {
      value: cdktf.numberToHclTerraform(struct!.headerNameValueMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_value_contains_string: {
      value: cdktf.stringToHclTerraform(struct!.headerValueContainsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value_contains_type: {
      value: cdktf.stringToHclTerraform(struct!.headerValueContainsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value_ends_with_string: {
      value: cdktf.stringToHclTerraform(struct!.headerValueEndsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value_ends_with_type: {
      value: cdktf.stringToHclTerraform(struct!.headerValueEndsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value_equals_string: {
      value: cdktf.stringToHclTerraform(struct!.headerValueEqualsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value_equals_type: {
      value: cdktf.stringToHclTerraform(struct!.headerValueEqualsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value_starts_with_string: {
      value: cdktf.stringToHclTerraform(struct!.headerValueStartsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value_starts_with_type: {
      value: cdktf.stringToHclTerraform(struct!.headerValueStartsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_contains_string: {
      value: cdktf.stringToHclTerraform(struct!.hostContainsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_contains_type: {
      value: cdktf.stringToHclTerraform(struct!.hostContainsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_ends_with_string: {
      value: cdktf.stringToHclTerraform(struct!.hostEndsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_ends_with_type: {
      value: cdktf.stringToHclTerraform(struct!.hostEndsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_equals_string: {
      value: cdktf.stringToHclTerraform(struct!.hostEqualsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_equals_type: {
      value: cdktf.stringToHclTerraform(struct!.hostEqualsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_starts_with_string: {
      value: cdktf.stringToHclTerraform(struct!.hostStartsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_starts_with_type: {
      value: cdktf.stringToHclTerraform(struct!.hostStartsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_match: {
      value: cdktf.stringToHclTerraform(struct!.multiMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_name_contains_string: {
      value: cdktf.stringToHclTerraform(struct!.queryParamNameContainsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_name_contains_type: {
      value: cdktf.stringToHclTerraform(struct!.queryParamNameContainsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_name_ends_with_string: {
      value: cdktf.stringToHclTerraform(struct!.queryParamNameEndsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_name_ends_with_type: {
      value: cdktf.stringToHclTerraform(struct!.queryParamNameEndsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_name_equals_string: {
      value: cdktf.stringToHclTerraform(struct!.queryParamNameEqualsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_name_equals_type: {
      value: cdktf.stringToHclTerraform(struct!.queryParamNameEqualsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_name_starts_with_string: {
      value: cdktf.stringToHclTerraform(struct!.queryParamNameStartsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_name_starts_with_type: {
      value: cdktf.stringToHclTerraform(struct!.queryParamNameStartsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_value_contains_string: {
      value: cdktf.stringToHclTerraform(struct!.queryParamValueContainsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_value_contains_type: {
      value: cdktf.stringToHclTerraform(struct!.queryParamValueContainsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_value_ends_with_string: {
      value: cdktf.stringToHclTerraform(struct!.queryParamValueEndsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_value_ends_with_type: {
      value: cdktf.stringToHclTerraform(struct!.queryParamValueEndsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_value_equals_string: {
      value: cdktf.stringToHclTerraform(struct!.queryParamValueEqualsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_value_equals_type: {
      value: cdktf.stringToHclTerraform(struct!.queryParamValueEqualsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_value_starts_with_string: {
      value: cdktf.stringToHclTerraform(struct!.queryParamValueStartsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param_value_starts_with_type: {
      value: cdktf.stringToHclTerraform(struct!.queryParamValueStartsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq_num: {
      value: cdktf.numberToHclTerraform(struct!.seqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_contains_string: {
      value: cdktf.stringToHclTerraform(struct!.urlContainsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_contains_type: {
      value: cdktf.stringToHclTerraform(struct!.urlContainsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_ends_with_string: {
      value: cdktf.stringToHclTerraform(struct!.urlEndsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_ends_with_type: {
      value: cdktf.stringToHclTerraform(struct!.urlEndsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_equals_string: {
      value: cdktf.stringToHclTerraform(struct!.urlEqualsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_equals_type: {
      value: cdktf.stringToHclTerraform(struct!.urlEqualsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_starts_with_string: {
      value: cdktf.stringToHclTerraform(struct!.urlStartsWithString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_starts_with_type: {
      value: cdktf.stringToHclTerraform(struct!.urlStartsWithType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpPolicyMultiMatchRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpPolicyMultiMatchRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieNameContainsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieNameContainsString = this._cookieNameContainsString;
    }
    if (this._cookieNameContainsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieNameContainsType = this._cookieNameContainsType;
    }
    if (this._cookieNameEndsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieNameEndsWithString = this._cookieNameEndsWithString;
    }
    if (this._cookieNameEndsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieNameEndsWithType = this._cookieNameEndsWithType;
    }
    if (this._cookieNameEqualsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieNameEqualsString = this._cookieNameEqualsString;
    }
    if (this._cookieNameEqualsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieNameEqualsType = this._cookieNameEqualsType;
    }
    if (this._cookieNameStartsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieNameStartsWithString = this._cookieNameStartsWithString;
    }
    if (this._cookieNameStartsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieNameStartsWithType = this._cookieNameStartsWithType;
    }
    if (this._cookieNameValueMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieNameValueMatch = this._cookieNameValueMatch;
    }
    if (this._cookieValueContainsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValueContainsString = this._cookieValueContainsString;
    }
    if (this._cookieValueContainsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValueContainsType = this._cookieValueContainsType;
    }
    if (this._cookieValueEndsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValueEndsWithString = this._cookieValueEndsWithString;
    }
    if (this._cookieValueEndsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValueEndsWithType = this._cookieValueEndsWithType;
    }
    if (this._cookieValueEqualsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValueEqualsString = this._cookieValueEqualsString;
    }
    if (this._cookieValueEqualsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValueEqualsType = this._cookieValueEqualsType;
    }
    if (this._cookieValueStartsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValueStartsWithString = this._cookieValueStartsWithString;
    }
    if (this._cookieValueStartsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValueStartsWithType = this._cookieValueStartsWithType;
    }
    if (this._headerNameContainsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameContainsString = this._headerNameContainsString;
    }
    if (this._headerNameContainsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameContainsType = this._headerNameContainsType;
    }
    if (this._headerNameEndsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameEndsWithString = this._headerNameEndsWithString;
    }
    if (this._headerNameEndsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameEndsWithType = this._headerNameEndsWithType;
    }
    if (this._headerNameEqualsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameEqualsString = this._headerNameEqualsString;
    }
    if (this._headerNameEqualsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameEqualsType = this._headerNameEqualsType;
    }
    if (this._headerNameStartsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameStartsWithString = this._headerNameStartsWithString;
    }
    if (this._headerNameStartsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameStartsWithType = this._headerNameStartsWithType;
    }
    if (this._headerNameValueMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameValueMatch = this._headerNameValueMatch;
    }
    if (this._headerValueContainsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValueContainsString = this._headerValueContainsString;
    }
    if (this._headerValueContainsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValueContainsType = this._headerValueContainsType;
    }
    if (this._headerValueEndsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValueEndsWithString = this._headerValueEndsWithString;
    }
    if (this._headerValueEndsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValueEndsWithType = this._headerValueEndsWithType;
    }
    if (this._headerValueEqualsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValueEqualsString = this._headerValueEqualsString;
    }
    if (this._headerValueEqualsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValueEqualsType = this._headerValueEqualsType;
    }
    if (this._headerValueStartsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValueStartsWithString = this._headerValueStartsWithString;
    }
    if (this._headerValueStartsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValueStartsWithType = this._headerValueStartsWithType;
    }
    if (this._hostContainsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostContainsString = this._hostContainsString;
    }
    if (this._hostContainsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostContainsType = this._hostContainsType;
    }
    if (this._hostEndsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostEndsWithString = this._hostEndsWithString;
    }
    if (this._hostEndsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostEndsWithType = this._hostEndsWithType;
    }
    if (this._hostEqualsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostEqualsString = this._hostEqualsString;
    }
    if (this._hostEqualsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostEqualsType = this._hostEqualsType;
    }
    if (this._hostStartsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostStartsWithString = this._hostStartsWithString;
    }
    if (this._hostStartsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostStartsWithType = this._hostStartsWithType;
    }
    if (this._multiMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiMatch = this._multiMatch;
    }
    if (this._queryParamNameContainsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamNameContainsString = this._queryParamNameContainsString;
    }
    if (this._queryParamNameContainsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamNameContainsType = this._queryParamNameContainsType;
    }
    if (this._queryParamNameEndsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamNameEndsWithString = this._queryParamNameEndsWithString;
    }
    if (this._queryParamNameEndsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamNameEndsWithType = this._queryParamNameEndsWithType;
    }
    if (this._queryParamNameEqualsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamNameEqualsString = this._queryParamNameEqualsString;
    }
    if (this._queryParamNameEqualsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamNameEqualsType = this._queryParamNameEqualsType;
    }
    if (this._queryParamNameStartsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamNameStartsWithString = this._queryParamNameStartsWithString;
    }
    if (this._queryParamNameStartsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamNameStartsWithType = this._queryParamNameStartsWithType;
    }
    if (this._queryParamValueContainsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamValueContainsString = this._queryParamValueContainsString;
    }
    if (this._queryParamValueContainsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamValueContainsType = this._queryParamValueContainsType;
    }
    if (this._queryParamValueEndsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamValueEndsWithString = this._queryParamValueEndsWithString;
    }
    if (this._queryParamValueEndsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamValueEndsWithType = this._queryParamValueEndsWithType;
    }
    if (this._queryParamValueEqualsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamValueEqualsString = this._queryParamValueEqualsString;
    }
    if (this._queryParamValueEqualsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamValueEqualsType = this._queryParamValueEqualsType;
    }
    if (this._queryParamValueStartsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamValueStartsWithString = this._queryParamValueStartsWithString;
    }
    if (this._queryParamValueStartsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamValueStartsWithType = this._queryParamValueStartsWithType;
    }
    if (this._seqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNum = this._seqNum;
    }
    if (this._serviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroup = this._serviceGroup;
    }
    if (this._urlContainsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlContainsString = this._urlContainsString;
    }
    if (this._urlContainsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlContainsType = this._urlContainsType;
    }
    if (this._urlEndsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlEndsWithString = this._urlEndsWithString;
    }
    if (this._urlEndsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlEndsWithType = this._urlEndsWithType;
    }
    if (this._urlEqualsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlEqualsString = this._urlEqualsString;
    }
    if (this._urlEqualsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlEqualsType = this._urlEqualsType;
    }
    if (this._urlStartsWithString !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlStartsWithString = this._urlStartsWithString;
    }
    if (this._urlStartsWithType !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlStartsWithType = this._urlStartsWithType;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpPolicyMultiMatchRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieNameContainsString = undefined;
      this._cookieNameContainsType = undefined;
      this._cookieNameEndsWithString = undefined;
      this._cookieNameEndsWithType = undefined;
      this._cookieNameEqualsString = undefined;
      this._cookieNameEqualsType = undefined;
      this._cookieNameStartsWithString = undefined;
      this._cookieNameStartsWithType = undefined;
      this._cookieNameValueMatch = undefined;
      this._cookieValueContainsString = undefined;
      this._cookieValueContainsType = undefined;
      this._cookieValueEndsWithString = undefined;
      this._cookieValueEndsWithType = undefined;
      this._cookieValueEqualsString = undefined;
      this._cookieValueEqualsType = undefined;
      this._cookieValueStartsWithString = undefined;
      this._cookieValueStartsWithType = undefined;
      this._headerNameContainsString = undefined;
      this._headerNameContainsType = undefined;
      this._headerNameEndsWithString = undefined;
      this._headerNameEndsWithType = undefined;
      this._headerNameEqualsString = undefined;
      this._headerNameEqualsType = undefined;
      this._headerNameStartsWithString = undefined;
      this._headerNameStartsWithType = undefined;
      this._headerNameValueMatch = undefined;
      this._headerValueContainsString = undefined;
      this._headerValueContainsType = undefined;
      this._headerValueEndsWithString = undefined;
      this._headerValueEndsWithType = undefined;
      this._headerValueEqualsString = undefined;
      this._headerValueEqualsType = undefined;
      this._headerValueStartsWithString = undefined;
      this._headerValueStartsWithType = undefined;
      this._hostContainsString = undefined;
      this._hostContainsType = undefined;
      this._hostEndsWithString = undefined;
      this._hostEndsWithType = undefined;
      this._hostEqualsString = undefined;
      this._hostEqualsType = undefined;
      this._hostStartsWithString = undefined;
      this._hostStartsWithType = undefined;
      this._multiMatch = undefined;
      this._queryParamNameContainsString = undefined;
      this._queryParamNameContainsType = undefined;
      this._queryParamNameEndsWithString = undefined;
      this._queryParamNameEndsWithType = undefined;
      this._queryParamNameEqualsString = undefined;
      this._queryParamNameEqualsType = undefined;
      this._queryParamNameStartsWithString = undefined;
      this._queryParamNameStartsWithType = undefined;
      this._queryParamValueContainsString = undefined;
      this._queryParamValueContainsType = undefined;
      this._queryParamValueEndsWithString = undefined;
      this._queryParamValueEndsWithType = undefined;
      this._queryParamValueEqualsString = undefined;
      this._queryParamValueEqualsType = undefined;
      this._queryParamValueStartsWithString = undefined;
      this._queryParamValueStartsWithType = undefined;
      this._seqNum = undefined;
      this._serviceGroup = undefined;
      this._urlContainsString = undefined;
      this._urlContainsType = undefined;
      this._urlEndsWithString = undefined;
      this._urlEndsWithType = undefined;
      this._urlEqualsString = undefined;
      this._urlEqualsType = undefined;
      this._urlStartsWithString = undefined;
      this._urlStartsWithType = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieNameContainsString = value.cookieNameContainsString;
      this._cookieNameContainsType = value.cookieNameContainsType;
      this._cookieNameEndsWithString = value.cookieNameEndsWithString;
      this._cookieNameEndsWithType = value.cookieNameEndsWithType;
      this._cookieNameEqualsString = value.cookieNameEqualsString;
      this._cookieNameEqualsType = value.cookieNameEqualsType;
      this._cookieNameStartsWithString = value.cookieNameStartsWithString;
      this._cookieNameStartsWithType = value.cookieNameStartsWithType;
      this._cookieNameValueMatch = value.cookieNameValueMatch;
      this._cookieValueContainsString = value.cookieValueContainsString;
      this._cookieValueContainsType = value.cookieValueContainsType;
      this._cookieValueEndsWithString = value.cookieValueEndsWithString;
      this._cookieValueEndsWithType = value.cookieValueEndsWithType;
      this._cookieValueEqualsString = value.cookieValueEqualsString;
      this._cookieValueEqualsType = value.cookieValueEqualsType;
      this._cookieValueStartsWithString = value.cookieValueStartsWithString;
      this._cookieValueStartsWithType = value.cookieValueStartsWithType;
      this._headerNameContainsString = value.headerNameContainsString;
      this._headerNameContainsType = value.headerNameContainsType;
      this._headerNameEndsWithString = value.headerNameEndsWithString;
      this._headerNameEndsWithType = value.headerNameEndsWithType;
      this._headerNameEqualsString = value.headerNameEqualsString;
      this._headerNameEqualsType = value.headerNameEqualsType;
      this._headerNameStartsWithString = value.headerNameStartsWithString;
      this._headerNameStartsWithType = value.headerNameStartsWithType;
      this._headerNameValueMatch = value.headerNameValueMatch;
      this._headerValueContainsString = value.headerValueContainsString;
      this._headerValueContainsType = value.headerValueContainsType;
      this._headerValueEndsWithString = value.headerValueEndsWithString;
      this._headerValueEndsWithType = value.headerValueEndsWithType;
      this._headerValueEqualsString = value.headerValueEqualsString;
      this._headerValueEqualsType = value.headerValueEqualsType;
      this._headerValueStartsWithString = value.headerValueStartsWithString;
      this._headerValueStartsWithType = value.headerValueStartsWithType;
      this._hostContainsString = value.hostContainsString;
      this._hostContainsType = value.hostContainsType;
      this._hostEndsWithString = value.hostEndsWithString;
      this._hostEndsWithType = value.hostEndsWithType;
      this._hostEqualsString = value.hostEqualsString;
      this._hostEqualsType = value.hostEqualsType;
      this._hostStartsWithString = value.hostStartsWithString;
      this._hostStartsWithType = value.hostStartsWithType;
      this._multiMatch = value.multiMatch;
      this._queryParamNameContainsString = value.queryParamNameContainsString;
      this._queryParamNameContainsType = value.queryParamNameContainsType;
      this._queryParamNameEndsWithString = value.queryParamNameEndsWithString;
      this._queryParamNameEndsWithType = value.queryParamNameEndsWithType;
      this._queryParamNameEqualsString = value.queryParamNameEqualsString;
      this._queryParamNameEqualsType = value.queryParamNameEqualsType;
      this._queryParamNameStartsWithString = value.queryParamNameStartsWithString;
      this._queryParamNameStartsWithType = value.queryParamNameStartsWithType;
      this._queryParamValueContainsString = value.queryParamValueContainsString;
      this._queryParamValueContainsType = value.queryParamValueContainsType;
      this._queryParamValueEndsWithString = value.queryParamValueEndsWithString;
      this._queryParamValueEndsWithType = value.queryParamValueEndsWithType;
      this._queryParamValueEqualsString = value.queryParamValueEqualsString;
      this._queryParamValueEqualsType = value.queryParamValueEqualsType;
      this._queryParamValueStartsWithString = value.queryParamValueStartsWithString;
      this._queryParamValueStartsWithType = value.queryParamValueStartsWithType;
      this._seqNum = value.seqNum;
      this._serviceGroup = value.serviceGroup;
      this._urlContainsString = value.urlContainsString;
      this._urlContainsType = value.urlContainsType;
      this._urlEndsWithString = value.urlEndsWithString;
      this._urlEndsWithType = value.urlEndsWithType;
      this._urlEqualsString = value.urlEqualsString;
      this._urlEqualsType = value.urlEqualsType;
      this._urlStartsWithString = value.urlStartsWithString;
      this._urlStartsWithType = value.urlStartsWithType;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // cookie_name_contains_string - computed: false, optional: true, required: false
  private _cookieNameContainsString?: string; 
  public get cookieNameContainsString() {
    return this.getStringAttribute('cookie_name_contains_string');
  }
  public set cookieNameContainsString(value: string) {
    this._cookieNameContainsString = value;
  }
  public resetCookieNameContainsString() {
    this._cookieNameContainsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameContainsStringInput() {
    return this._cookieNameContainsString;
  }

  // cookie_name_contains_type - computed: false, optional: true, required: false
  private _cookieNameContainsType?: string; 
  public get cookieNameContainsType() {
    return this.getStringAttribute('cookie_name_contains_type');
  }
  public set cookieNameContainsType(value: string) {
    this._cookieNameContainsType = value;
  }
  public resetCookieNameContainsType() {
    this._cookieNameContainsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameContainsTypeInput() {
    return this._cookieNameContainsType;
  }

  // cookie_name_ends_with_string - computed: false, optional: true, required: false
  private _cookieNameEndsWithString?: string; 
  public get cookieNameEndsWithString() {
    return this.getStringAttribute('cookie_name_ends_with_string');
  }
  public set cookieNameEndsWithString(value: string) {
    this._cookieNameEndsWithString = value;
  }
  public resetCookieNameEndsWithString() {
    this._cookieNameEndsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameEndsWithStringInput() {
    return this._cookieNameEndsWithString;
  }

  // cookie_name_ends_with_type - computed: false, optional: true, required: false
  private _cookieNameEndsWithType?: string; 
  public get cookieNameEndsWithType() {
    return this.getStringAttribute('cookie_name_ends_with_type');
  }
  public set cookieNameEndsWithType(value: string) {
    this._cookieNameEndsWithType = value;
  }
  public resetCookieNameEndsWithType() {
    this._cookieNameEndsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameEndsWithTypeInput() {
    return this._cookieNameEndsWithType;
  }

  // cookie_name_equals_string - computed: false, optional: true, required: false
  private _cookieNameEqualsString?: string; 
  public get cookieNameEqualsString() {
    return this.getStringAttribute('cookie_name_equals_string');
  }
  public set cookieNameEqualsString(value: string) {
    this._cookieNameEqualsString = value;
  }
  public resetCookieNameEqualsString() {
    this._cookieNameEqualsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameEqualsStringInput() {
    return this._cookieNameEqualsString;
  }

  // cookie_name_equals_type - computed: false, optional: true, required: false
  private _cookieNameEqualsType?: string; 
  public get cookieNameEqualsType() {
    return this.getStringAttribute('cookie_name_equals_type');
  }
  public set cookieNameEqualsType(value: string) {
    this._cookieNameEqualsType = value;
  }
  public resetCookieNameEqualsType() {
    this._cookieNameEqualsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameEqualsTypeInput() {
    return this._cookieNameEqualsType;
  }

  // cookie_name_starts_with_string - computed: false, optional: true, required: false
  private _cookieNameStartsWithString?: string; 
  public get cookieNameStartsWithString() {
    return this.getStringAttribute('cookie_name_starts_with_string');
  }
  public set cookieNameStartsWithString(value: string) {
    this._cookieNameStartsWithString = value;
  }
  public resetCookieNameStartsWithString() {
    this._cookieNameStartsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameStartsWithStringInput() {
    return this._cookieNameStartsWithString;
  }

  // cookie_name_starts_with_type - computed: false, optional: true, required: false
  private _cookieNameStartsWithType?: string; 
  public get cookieNameStartsWithType() {
    return this.getStringAttribute('cookie_name_starts_with_type');
  }
  public set cookieNameStartsWithType(value: string) {
    this._cookieNameStartsWithType = value;
  }
  public resetCookieNameStartsWithType() {
    this._cookieNameStartsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameStartsWithTypeInput() {
    return this._cookieNameStartsWithType;
  }

  // cookie_name_value_match - computed: false, optional: true, required: false
  private _cookieNameValueMatch?: number; 
  public get cookieNameValueMatch() {
    return this.getNumberAttribute('cookie_name_value_match');
  }
  public set cookieNameValueMatch(value: number) {
    this._cookieNameValueMatch = value;
  }
  public resetCookieNameValueMatch() {
    this._cookieNameValueMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameValueMatchInput() {
    return this._cookieNameValueMatch;
  }

  // cookie_value_contains_string - computed: false, optional: true, required: false
  private _cookieValueContainsString?: string; 
  public get cookieValueContainsString() {
    return this.getStringAttribute('cookie_value_contains_string');
  }
  public set cookieValueContainsString(value: string) {
    this._cookieValueContainsString = value;
  }
  public resetCookieValueContainsString() {
    this._cookieValueContainsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieValueContainsStringInput() {
    return this._cookieValueContainsString;
  }

  // cookie_value_contains_type - computed: false, optional: true, required: false
  private _cookieValueContainsType?: string; 
  public get cookieValueContainsType() {
    return this.getStringAttribute('cookie_value_contains_type');
  }
  public set cookieValueContainsType(value: string) {
    this._cookieValueContainsType = value;
  }
  public resetCookieValueContainsType() {
    this._cookieValueContainsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieValueContainsTypeInput() {
    return this._cookieValueContainsType;
  }

  // cookie_value_ends_with_string - computed: false, optional: true, required: false
  private _cookieValueEndsWithString?: string; 
  public get cookieValueEndsWithString() {
    return this.getStringAttribute('cookie_value_ends_with_string');
  }
  public set cookieValueEndsWithString(value: string) {
    this._cookieValueEndsWithString = value;
  }
  public resetCookieValueEndsWithString() {
    this._cookieValueEndsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieValueEndsWithStringInput() {
    return this._cookieValueEndsWithString;
  }

  // cookie_value_ends_with_type - computed: false, optional: true, required: false
  private _cookieValueEndsWithType?: string; 
  public get cookieValueEndsWithType() {
    return this.getStringAttribute('cookie_value_ends_with_type');
  }
  public set cookieValueEndsWithType(value: string) {
    this._cookieValueEndsWithType = value;
  }
  public resetCookieValueEndsWithType() {
    this._cookieValueEndsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieValueEndsWithTypeInput() {
    return this._cookieValueEndsWithType;
  }

  // cookie_value_equals_string - computed: false, optional: true, required: false
  private _cookieValueEqualsString?: string; 
  public get cookieValueEqualsString() {
    return this.getStringAttribute('cookie_value_equals_string');
  }
  public set cookieValueEqualsString(value: string) {
    this._cookieValueEqualsString = value;
  }
  public resetCookieValueEqualsString() {
    this._cookieValueEqualsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieValueEqualsStringInput() {
    return this._cookieValueEqualsString;
  }

  // cookie_value_equals_type - computed: false, optional: true, required: false
  private _cookieValueEqualsType?: string; 
  public get cookieValueEqualsType() {
    return this.getStringAttribute('cookie_value_equals_type');
  }
  public set cookieValueEqualsType(value: string) {
    this._cookieValueEqualsType = value;
  }
  public resetCookieValueEqualsType() {
    this._cookieValueEqualsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieValueEqualsTypeInput() {
    return this._cookieValueEqualsType;
  }

  // cookie_value_starts_with_string - computed: false, optional: true, required: false
  private _cookieValueStartsWithString?: string; 
  public get cookieValueStartsWithString() {
    return this.getStringAttribute('cookie_value_starts_with_string');
  }
  public set cookieValueStartsWithString(value: string) {
    this._cookieValueStartsWithString = value;
  }
  public resetCookieValueStartsWithString() {
    this._cookieValueStartsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieValueStartsWithStringInput() {
    return this._cookieValueStartsWithString;
  }

  // cookie_value_starts_with_type - computed: false, optional: true, required: false
  private _cookieValueStartsWithType?: string; 
  public get cookieValueStartsWithType() {
    return this.getStringAttribute('cookie_value_starts_with_type');
  }
  public set cookieValueStartsWithType(value: string) {
    this._cookieValueStartsWithType = value;
  }
  public resetCookieValueStartsWithType() {
    this._cookieValueStartsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieValueStartsWithTypeInput() {
    return this._cookieValueStartsWithType;
  }

  // header_name_contains_string - computed: false, optional: true, required: false
  private _headerNameContainsString?: string; 
  public get headerNameContainsString() {
    return this.getStringAttribute('header_name_contains_string');
  }
  public set headerNameContainsString(value: string) {
    this._headerNameContainsString = value;
  }
  public resetHeaderNameContainsString() {
    this._headerNameContainsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameContainsStringInput() {
    return this._headerNameContainsString;
  }

  // header_name_contains_type - computed: false, optional: true, required: false
  private _headerNameContainsType?: string; 
  public get headerNameContainsType() {
    return this.getStringAttribute('header_name_contains_type');
  }
  public set headerNameContainsType(value: string) {
    this._headerNameContainsType = value;
  }
  public resetHeaderNameContainsType() {
    this._headerNameContainsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameContainsTypeInput() {
    return this._headerNameContainsType;
  }

  // header_name_ends_with_string - computed: false, optional: true, required: false
  private _headerNameEndsWithString?: string; 
  public get headerNameEndsWithString() {
    return this.getStringAttribute('header_name_ends_with_string');
  }
  public set headerNameEndsWithString(value: string) {
    this._headerNameEndsWithString = value;
  }
  public resetHeaderNameEndsWithString() {
    this._headerNameEndsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameEndsWithStringInput() {
    return this._headerNameEndsWithString;
  }

  // header_name_ends_with_type - computed: false, optional: true, required: false
  private _headerNameEndsWithType?: string; 
  public get headerNameEndsWithType() {
    return this.getStringAttribute('header_name_ends_with_type');
  }
  public set headerNameEndsWithType(value: string) {
    this._headerNameEndsWithType = value;
  }
  public resetHeaderNameEndsWithType() {
    this._headerNameEndsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameEndsWithTypeInput() {
    return this._headerNameEndsWithType;
  }

  // header_name_equals_string - computed: false, optional: true, required: false
  private _headerNameEqualsString?: string; 
  public get headerNameEqualsString() {
    return this.getStringAttribute('header_name_equals_string');
  }
  public set headerNameEqualsString(value: string) {
    this._headerNameEqualsString = value;
  }
  public resetHeaderNameEqualsString() {
    this._headerNameEqualsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameEqualsStringInput() {
    return this._headerNameEqualsString;
  }

  // header_name_equals_type - computed: false, optional: true, required: false
  private _headerNameEqualsType?: string; 
  public get headerNameEqualsType() {
    return this.getStringAttribute('header_name_equals_type');
  }
  public set headerNameEqualsType(value: string) {
    this._headerNameEqualsType = value;
  }
  public resetHeaderNameEqualsType() {
    this._headerNameEqualsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameEqualsTypeInput() {
    return this._headerNameEqualsType;
  }

  // header_name_starts_with_string - computed: false, optional: true, required: false
  private _headerNameStartsWithString?: string; 
  public get headerNameStartsWithString() {
    return this.getStringAttribute('header_name_starts_with_string');
  }
  public set headerNameStartsWithString(value: string) {
    this._headerNameStartsWithString = value;
  }
  public resetHeaderNameStartsWithString() {
    this._headerNameStartsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameStartsWithStringInput() {
    return this._headerNameStartsWithString;
  }

  // header_name_starts_with_type - computed: false, optional: true, required: false
  private _headerNameStartsWithType?: string; 
  public get headerNameStartsWithType() {
    return this.getStringAttribute('header_name_starts_with_type');
  }
  public set headerNameStartsWithType(value: string) {
    this._headerNameStartsWithType = value;
  }
  public resetHeaderNameStartsWithType() {
    this._headerNameStartsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameStartsWithTypeInput() {
    return this._headerNameStartsWithType;
  }

  // header_name_value_match - computed: false, optional: true, required: false
  private _headerNameValueMatch?: number; 
  public get headerNameValueMatch() {
    return this.getNumberAttribute('header_name_value_match');
  }
  public set headerNameValueMatch(value: number) {
    this._headerNameValueMatch = value;
  }
  public resetHeaderNameValueMatch() {
    this._headerNameValueMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameValueMatchInput() {
    return this._headerNameValueMatch;
  }

  // header_value_contains_string - computed: false, optional: true, required: false
  private _headerValueContainsString?: string; 
  public get headerValueContainsString() {
    return this.getStringAttribute('header_value_contains_string');
  }
  public set headerValueContainsString(value: string) {
    this._headerValueContainsString = value;
  }
  public resetHeaderValueContainsString() {
    this._headerValueContainsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueContainsStringInput() {
    return this._headerValueContainsString;
  }

  // header_value_contains_type - computed: false, optional: true, required: false
  private _headerValueContainsType?: string; 
  public get headerValueContainsType() {
    return this.getStringAttribute('header_value_contains_type');
  }
  public set headerValueContainsType(value: string) {
    this._headerValueContainsType = value;
  }
  public resetHeaderValueContainsType() {
    this._headerValueContainsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueContainsTypeInput() {
    return this._headerValueContainsType;
  }

  // header_value_ends_with_string - computed: false, optional: true, required: false
  private _headerValueEndsWithString?: string; 
  public get headerValueEndsWithString() {
    return this.getStringAttribute('header_value_ends_with_string');
  }
  public set headerValueEndsWithString(value: string) {
    this._headerValueEndsWithString = value;
  }
  public resetHeaderValueEndsWithString() {
    this._headerValueEndsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueEndsWithStringInput() {
    return this._headerValueEndsWithString;
  }

  // header_value_ends_with_type - computed: false, optional: true, required: false
  private _headerValueEndsWithType?: string; 
  public get headerValueEndsWithType() {
    return this.getStringAttribute('header_value_ends_with_type');
  }
  public set headerValueEndsWithType(value: string) {
    this._headerValueEndsWithType = value;
  }
  public resetHeaderValueEndsWithType() {
    this._headerValueEndsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueEndsWithTypeInput() {
    return this._headerValueEndsWithType;
  }

  // header_value_equals_string - computed: false, optional: true, required: false
  private _headerValueEqualsString?: string; 
  public get headerValueEqualsString() {
    return this.getStringAttribute('header_value_equals_string');
  }
  public set headerValueEqualsString(value: string) {
    this._headerValueEqualsString = value;
  }
  public resetHeaderValueEqualsString() {
    this._headerValueEqualsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueEqualsStringInput() {
    return this._headerValueEqualsString;
  }

  // header_value_equals_type - computed: false, optional: true, required: false
  private _headerValueEqualsType?: string; 
  public get headerValueEqualsType() {
    return this.getStringAttribute('header_value_equals_type');
  }
  public set headerValueEqualsType(value: string) {
    this._headerValueEqualsType = value;
  }
  public resetHeaderValueEqualsType() {
    this._headerValueEqualsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueEqualsTypeInput() {
    return this._headerValueEqualsType;
  }

  // header_value_starts_with_string - computed: false, optional: true, required: false
  private _headerValueStartsWithString?: string; 
  public get headerValueStartsWithString() {
    return this.getStringAttribute('header_value_starts_with_string');
  }
  public set headerValueStartsWithString(value: string) {
    this._headerValueStartsWithString = value;
  }
  public resetHeaderValueStartsWithString() {
    this._headerValueStartsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueStartsWithStringInput() {
    return this._headerValueStartsWithString;
  }

  // header_value_starts_with_type - computed: false, optional: true, required: false
  private _headerValueStartsWithType?: string; 
  public get headerValueStartsWithType() {
    return this.getStringAttribute('header_value_starts_with_type');
  }
  public set headerValueStartsWithType(value: string) {
    this._headerValueStartsWithType = value;
  }
  public resetHeaderValueStartsWithType() {
    this._headerValueStartsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueStartsWithTypeInput() {
    return this._headerValueStartsWithType;
  }

  // host_contains_string - computed: false, optional: true, required: false
  private _hostContainsString?: string; 
  public get hostContainsString() {
    return this.getStringAttribute('host_contains_string');
  }
  public set hostContainsString(value: string) {
    this._hostContainsString = value;
  }
  public resetHostContainsString() {
    this._hostContainsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostContainsStringInput() {
    return this._hostContainsString;
  }

  // host_contains_type - computed: false, optional: true, required: false
  private _hostContainsType?: string; 
  public get hostContainsType() {
    return this.getStringAttribute('host_contains_type');
  }
  public set hostContainsType(value: string) {
    this._hostContainsType = value;
  }
  public resetHostContainsType() {
    this._hostContainsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostContainsTypeInput() {
    return this._hostContainsType;
  }

  // host_ends_with_string - computed: false, optional: true, required: false
  private _hostEndsWithString?: string; 
  public get hostEndsWithString() {
    return this.getStringAttribute('host_ends_with_string');
  }
  public set hostEndsWithString(value: string) {
    this._hostEndsWithString = value;
  }
  public resetHostEndsWithString() {
    this._hostEndsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostEndsWithStringInput() {
    return this._hostEndsWithString;
  }

  // host_ends_with_type - computed: false, optional: true, required: false
  private _hostEndsWithType?: string; 
  public get hostEndsWithType() {
    return this.getStringAttribute('host_ends_with_type');
  }
  public set hostEndsWithType(value: string) {
    this._hostEndsWithType = value;
  }
  public resetHostEndsWithType() {
    this._hostEndsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostEndsWithTypeInput() {
    return this._hostEndsWithType;
  }

  // host_equals_string - computed: false, optional: true, required: false
  private _hostEqualsString?: string; 
  public get hostEqualsString() {
    return this.getStringAttribute('host_equals_string');
  }
  public set hostEqualsString(value: string) {
    this._hostEqualsString = value;
  }
  public resetHostEqualsString() {
    this._hostEqualsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostEqualsStringInput() {
    return this._hostEqualsString;
  }

  // host_equals_type - computed: false, optional: true, required: false
  private _hostEqualsType?: string; 
  public get hostEqualsType() {
    return this.getStringAttribute('host_equals_type');
  }
  public set hostEqualsType(value: string) {
    this._hostEqualsType = value;
  }
  public resetHostEqualsType() {
    this._hostEqualsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostEqualsTypeInput() {
    return this._hostEqualsType;
  }

  // host_starts_with_string - computed: false, optional: true, required: false
  private _hostStartsWithString?: string; 
  public get hostStartsWithString() {
    return this.getStringAttribute('host_starts_with_string');
  }
  public set hostStartsWithString(value: string) {
    this._hostStartsWithString = value;
  }
  public resetHostStartsWithString() {
    this._hostStartsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostStartsWithStringInput() {
    return this._hostStartsWithString;
  }

  // host_starts_with_type - computed: false, optional: true, required: false
  private _hostStartsWithType?: string; 
  public get hostStartsWithType() {
    return this.getStringAttribute('host_starts_with_type');
  }
  public set hostStartsWithType(value: string) {
    this._hostStartsWithType = value;
  }
  public resetHostStartsWithType() {
    this._hostStartsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostStartsWithTypeInput() {
    return this._hostStartsWithType;
  }

  // multi_match - computed: false, optional: false, required: true
  private _multiMatch?: string; 
  public get multiMatch() {
    return this.getStringAttribute('multi_match');
  }
  public set multiMatch(value: string) {
    this._multiMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiMatchInput() {
    return this._multiMatch;
  }

  // query_param_name_contains_string - computed: false, optional: true, required: false
  private _queryParamNameContainsString?: string; 
  public get queryParamNameContainsString() {
    return this.getStringAttribute('query_param_name_contains_string');
  }
  public set queryParamNameContainsString(value: string) {
    this._queryParamNameContainsString = value;
  }
  public resetQueryParamNameContainsString() {
    this._queryParamNameContainsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamNameContainsStringInput() {
    return this._queryParamNameContainsString;
  }

  // query_param_name_contains_type - computed: false, optional: true, required: false
  private _queryParamNameContainsType?: string; 
  public get queryParamNameContainsType() {
    return this.getStringAttribute('query_param_name_contains_type');
  }
  public set queryParamNameContainsType(value: string) {
    this._queryParamNameContainsType = value;
  }
  public resetQueryParamNameContainsType() {
    this._queryParamNameContainsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamNameContainsTypeInput() {
    return this._queryParamNameContainsType;
  }

  // query_param_name_ends_with_string - computed: false, optional: true, required: false
  private _queryParamNameEndsWithString?: string; 
  public get queryParamNameEndsWithString() {
    return this.getStringAttribute('query_param_name_ends_with_string');
  }
  public set queryParamNameEndsWithString(value: string) {
    this._queryParamNameEndsWithString = value;
  }
  public resetQueryParamNameEndsWithString() {
    this._queryParamNameEndsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamNameEndsWithStringInput() {
    return this._queryParamNameEndsWithString;
  }

  // query_param_name_ends_with_type - computed: false, optional: true, required: false
  private _queryParamNameEndsWithType?: string; 
  public get queryParamNameEndsWithType() {
    return this.getStringAttribute('query_param_name_ends_with_type');
  }
  public set queryParamNameEndsWithType(value: string) {
    this._queryParamNameEndsWithType = value;
  }
  public resetQueryParamNameEndsWithType() {
    this._queryParamNameEndsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamNameEndsWithTypeInput() {
    return this._queryParamNameEndsWithType;
  }

  // query_param_name_equals_string - computed: false, optional: true, required: false
  private _queryParamNameEqualsString?: string; 
  public get queryParamNameEqualsString() {
    return this.getStringAttribute('query_param_name_equals_string');
  }
  public set queryParamNameEqualsString(value: string) {
    this._queryParamNameEqualsString = value;
  }
  public resetQueryParamNameEqualsString() {
    this._queryParamNameEqualsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamNameEqualsStringInput() {
    return this._queryParamNameEqualsString;
  }

  // query_param_name_equals_type - computed: false, optional: true, required: false
  private _queryParamNameEqualsType?: string; 
  public get queryParamNameEqualsType() {
    return this.getStringAttribute('query_param_name_equals_type');
  }
  public set queryParamNameEqualsType(value: string) {
    this._queryParamNameEqualsType = value;
  }
  public resetQueryParamNameEqualsType() {
    this._queryParamNameEqualsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamNameEqualsTypeInput() {
    return this._queryParamNameEqualsType;
  }

  // query_param_name_starts_with_string - computed: false, optional: true, required: false
  private _queryParamNameStartsWithString?: string; 
  public get queryParamNameStartsWithString() {
    return this.getStringAttribute('query_param_name_starts_with_string');
  }
  public set queryParamNameStartsWithString(value: string) {
    this._queryParamNameStartsWithString = value;
  }
  public resetQueryParamNameStartsWithString() {
    this._queryParamNameStartsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamNameStartsWithStringInput() {
    return this._queryParamNameStartsWithString;
  }

  // query_param_name_starts_with_type - computed: false, optional: true, required: false
  private _queryParamNameStartsWithType?: string; 
  public get queryParamNameStartsWithType() {
    return this.getStringAttribute('query_param_name_starts_with_type');
  }
  public set queryParamNameStartsWithType(value: string) {
    this._queryParamNameStartsWithType = value;
  }
  public resetQueryParamNameStartsWithType() {
    this._queryParamNameStartsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamNameStartsWithTypeInput() {
    return this._queryParamNameStartsWithType;
  }

  // query_param_value_contains_string - computed: false, optional: true, required: false
  private _queryParamValueContainsString?: string; 
  public get queryParamValueContainsString() {
    return this.getStringAttribute('query_param_value_contains_string');
  }
  public set queryParamValueContainsString(value: string) {
    this._queryParamValueContainsString = value;
  }
  public resetQueryParamValueContainsString() {
    this._queryParamValueContainsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamValueContainsStringInput() {
    return this._queryParamValueContainsString;
  }

  // query_param_value_contains_type - computed: false, optional: true, required: false
  private _queryParamValueContainsType?: string; 
  public get queryParamValueContainsType() {
    return this.getStringAttribute('query_param_value_contains_type');
  }
  public set queryParamValueContainsType(value: string) {
    this._queryParamValueContainsType = value;
  }
  public resetQueryParamValueContainsType() {
    this._queryParamValueContainsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamValueContainsTypeInput() {
    return this._queryParamValueContainsType;
  }

  // query_param_value_ends_with_string - computed: false, optional: true, required: false
  private _queryParamValueEndsWithString?: string; 
  public get queryParamValueEndsWithString() {
    return this.getStringAttribute('query_param_value_ends_with_string');
  }
  public set queryParamValueEndsWithString(value: string) {
    this._queryParamValueEndsWithString = value;
  }
  public resetQueryParamValueEndsWithString() {
    this._queryParamValueEndsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamValueEndsWithStringInput() {
    return this._queryParamValueEndsWithString;
  }

  // query_param_value_ends_with_type - computed: false, optional: true, required: false
  private _queryParamValueEndsWithType?: string; 
  public get queryParamValueEndsWithType() {
    return this.getStringAttribute('query_param_value_ends_with_type');
  }
  public set queryParamValueEndsWithType(value: string) {
    this._queryParamValueEndsWithType = value;
  }
  public resetQueryParamValueEndsWithType() {
    this._queryParamValueEndsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamValueEndsWithTypeInput() {
    return this._queryParamValueEndsWithType;
  }

  // query_param_value_equals_string - computed: false, optional: true, required: false
  private _queryParamValueEqualsString?: string; 
  public get queryParamValueEqualsString() {
    return this.getStringAttribute('query_param_value_equals_string');
  }
  public set queryParamValueEqualsString(value: string) {
    this._queryParamValueEqualsString = value;
  }
  public resetQueryParamValueEqualsString() {
    this._queryParamValueEqualsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamValueEqualsStringInput() {
    return this._queryParamValueEqualsString;
  }

  // query_param_value_equals_type - computed: false, optional: true, required: false
  private _queryParamValueEqualsType?: string; 
  public get queryParamValueEqualsType() {
    return this.getStringAttribute('query_param_value_equals_type');
  }
  public set queryParamValueEqualsType(value: string) {
    this._queryParamValueEqualsType = value;
  }
  public resetQueryParamValueEqualsType() {
    this._queryParamValueEqualsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamValueEqualsTypeInput() {
    return this._queryParamValueEqualsType;
  }

  // query_param_value_starts_with_string - computed: false, optional: true, required: false
  private _queryParamValueStartsWithString?: string; 
  public get queryParamValueStartsWithString() {
    return this.getStringAttribute('query_param_value_starts_with_string');
  }
  public set queryParamValueStartsWithString(value: string) {
    this._queryParamValueStartsWithString = value;
  }
  public resetQueryParamValueStartsWithString() {
    this._queryParamValueStartsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamValueStartsWithStringInput() {
    return this._queryParamValueStartsWithString;
  }

  // query_param_value_starts_with_type - computed: false, optional: true, required: false
  private _queryParamValueStartsWithType?: string; 
  public get queryParamValueStartsWithType() {
    return this.getStringAttribute('query_param_value_starts_with_type');
  }
  public set queryParamValueStartsWithType(value: string) {
    this._queryParamValueStartsWithType = value;
  }
  public resetQueryParamValueStartsWithType() {
    this._queryParamValueStartsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamValueStartsWithTypeInput() {
    return this._queryParamValueStartsWithType;
  }

  // seq_num - computed: false, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
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

  // url_contains_string - computed: false, optional: true, required: false
  private _urlContainsString?: string; 
  public get urlContainsString() {
    return this.getStringAttribute('url_contains_string');
  }
  public set urlContainsString(value: string) {
    this._urlContainsString = value;
  }
  public resetUrlContainsString() {
    this._urlContainsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlContainsStringInput() {
    return this._urlContainsString;
  }

  // url_contains_type - computed: false, optional: true, required: false
  private _urlContainsType?: string; 
  public get urlContainsType() {
    return this.getStringAttribute('url_contains_type');
  }
  public set urlContainsType(value: string) {
    this._urlContainsType = value;
  }
  public resetUrlContainsType() {
    this._urlContainsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlContainsTypeInput() {
    return this._urlContainsType;
  }

  // url_ends_with_string - computed: false, optional: true, required: false
  private _urlEndsWithString?: string; 
  public get urlEndsWithString() {
    return this.getStringAttribute('url_ends_with_string');
  }
  public set urlEndsWithString(value: string) {
    this._urlEndsWithString = value;
  }
  public resetUrlEndsWithString() {
    this._urlEndsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlEndsWithStringInput() {
    return this._urlEndsWithString;
  }

  // url_ends_with_type - computed: false, optional: true, required: false
  private _urlEndsWithType?: string; 
  public get urlEndsWithType() {
    return this.getStringAttribute('url_ends_with_type');
  }
  public set urlEndsWithType(value: string) {
    this._urlEndsWithType = value;
  }
  public resetUrlEndsWithType() {
    this._urlEndsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlEndsWithTypeInput() {
    return this._urlEndsWithType;
  }

  // url_equals_string - computed: false, optional: true, required: false
  private _urlEqualsString?: string; 
  public get urlEqualsString() {
    return this.getStringAttribute('url_equals_string');
  }
  public set urlEqualsString(value: string) {
    this._urlEqualsString = value;
  }
  public resetUrlEqualsString() {
    this._urlEqualsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlEqualsStringInput() {
    return this._urlEqualsString;
  }

  // url_equals_type - computed: false, optional: true, required: false
  private _urlEqualsType?: string; 
  public get urlEqualsType() {
    return this.getStringAttribute('url_equals_type');
  }
  public set urlEqualsType(value: string) {
    this._urlEqualsType = value;
  }
  public resetUrlEqualsType() {
    this._urlEqualsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlEqualsTypeInput() {
    return this._urlEqualsType;
  }

  // url_starts_with_string - computed: false, optional: true, required: false
  private _urlStartsWithString?: string; 
  public get urlStartsWithString() {
    return this.getStringAttribute('url_starts_with_string');
  }
  public set urlStartsWithString(value: string) {
    this._urlStartsWithString = value;
  }
  public resetUrlStartsWithString() {
    this._urlStartsWithString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlStartsWithStringInput() {
    return this._urlStartsWithString;
  }

  // url_starts_with_type - computed: false, optional: true, required: false
  private _urlStartsWithType?: string; 
  public get urlStartsWithType() {
    return this.getStringAttribute('url_starts_with_type');
  }
  public set urlStartsWithType(value: string) {
    this._urlStartsWithType = value;
  }
  public resetUrlStartsWithType() {
    this._urlStartsWithType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlStartsWithTypeInput() {
    return this._urlStartsWithType;
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
}

export class SlbTemplateHttpPolicyMultiMatchRuleListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpPolicyMultiMatchRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpPolicyMultiMatchRuleListStructOutputReference {
    return new SlbTemplateHttpPolicyMultiMatchRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy thunder_slb_template_http_policy}
*/
export class SlbTemplateHttpPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_http_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateHttpPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateHttpPolicy to import
  * @param importFromId The id of the existing SlbTemplateHttpPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateHttpPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_http_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy thunder_slb_template_http_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateHttpPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateHttpPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_http_policy',
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
    this._cookieName = config.cookieName;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._geoLocationMatch.internalValue = config.geoLocationMatch;
    this._httpPolicyMatch.internalValue = config.httpPolicyMatch;
    this._multiMatchRuleList.internalValue = config.multiMatchRuleList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cookie_name - computed: false, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
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

  // geo_location_match - computed: false, optional: true, required: false
  private _geoLocationMatch = new SlbTemplateHttpPolicyGeoLocationMatchList(this, "geo_location_match", false);
  public get geoLocationMatch() {
    return this._geoLocationMatch;
  }
  public putGeoLocationMatch(value: SlbTemplateHttpPolicyGeoLocationMatch[] | cdktf.IResolvable) {
    this._geoLocationMatch.internalValue = value;
  }
  public resetGeoLocationMatch() {
    this._geoLocationMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationMatchInput() {
    return this._geoLocationMatch.internalValue;
  }

  // http_policy_match - computed: false, optional: true, required: false
  private _httpPolicyMatch = new SlbTemplateHttpPolicyHttpPolicyMatchList(this, "http_policy_match", false);
  public get httpPolicyMatch() {
    return this._httpPolicyMatch;
  }
  public putHttpPolicyMatch(value: SlbTemplateHttpPolicyHttpPolicyMatch[] | cdktf.IResolvable) {
    this._httpPolicyMatch.internalValue = value;
  }
  public resetHttpPolicyMatch() {
    this._httpPolicyMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPolicyMatchInput() {
    return this._httpPolicyMatch.internalValue;
  }

  // multi_match_rule_list - computed: false, optional: true, required: false
  private _multiMatchRuleList = new SlbTemplateHttpPolicyMultiMatchRuleListStructList(this, "multi_match_rule_list", false);
  public get multiMatchRuleList() {
    return this._multiMatchRuleList;
  }
  public putMultiMatchRuleList(value: SlbTemplateHttpPolicyMultiMatchRuleListStruct[] | cdktf.IResolvable) {
    this._multiMatchRuleList.internalValue = value;
  }
  public resetMultiMatchRuleList() {
    this._multiMatchRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiMatchRuleListInput() {
    return this._multiMatchRuleList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cookie_name: cdktf.stringToTerraform(this._cookieName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      geo_location_match: cdktf.listMapper(slbTemplateHttpPolicyGeoLocationMatchToTerraform, true)(this._geoLocationMatch.internalValue),
      http_policy_match: cdktf.listMapper(slbTemplateHttpPolicyHttpPolicyMatchToTerraform, true)(this._httpPolicyMatch.internalValue),
      multi_match_rule_list: cdktf.listMapper(slbTemplateHttpPolicyMultiMatchRuleListStructToTerraform, true)(this._multiMatchRuleList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cookie_name: {
        value: cdktf.stringToHclTerraform(this._cookieName),
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
      geo_location_match: {
        value: cdktf.listMapperHcl(slbTemplateHttpPolicyGeoLocationMatchToHclTerraform, true)(this._geoLocationMatch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpPolicyGeoLocationMatchList",
      },
      http_policy_match: {
        value: cdktf.listMapperHcl(slbTemplateHttpPolicyHttpPolicyMatchToHclTerraform, true)(this._httpPolicyMatch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpPolicyHttpPolicyMatchList",
      },
      multi_match_rule_list: {
        value: cdktf.listMapperHcl(slbTemplateHttpPolicyMultiMatchRuleListStructToHclTerraform, true)(this._multiMatchRuleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpPolicyMultiMatchRuleListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
