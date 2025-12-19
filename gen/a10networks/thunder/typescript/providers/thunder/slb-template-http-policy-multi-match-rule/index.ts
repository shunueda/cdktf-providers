// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateHttpPolicyMultiMatchRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cookie name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_name_contains_string SlbTemplateHttpPolicyMultiMatchRule#cookie_name_contains_string}
  */
  readonly cookieNameContainsString?: string;
  /**
  * 'contains': Cookie name contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_name_contains_type SlbTemplateHttpPolicyMultiMatchRule#cookie_name_contains_type}
  */
  readonly cookieNameContainsType?: string;
  /**
  * Cookie name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_name_ends_with_string SlbTemplateHttpPolicyMultiMatchRule#cookie_name_ends_with_string}
  */
  readonly cookieNameEndsWithString?: string;
  /**
  * 'ends-with': Cookie name ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_name_ends_with_type SlbTemplateHttpPolicyMultiMatchRule#cookie_name_ends_with_type}
  */
  readonly cookieNameEndsWithType?: string;
  /**
  * Cookie name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_name_equals_string SlbTemplateHttpPolicyMultiMatchRule#cookie_name_equals_string}
  */
  readonly cookieNameEqualsString?: string;
  /**
  * 'equals': Cookie name equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_name_equals_type SlbTemplateHttpPolicyMultiMatchRule#cookie_name_equals_type}
  */
  readonly cookieNameEqualsType?: string;
  /**
  * Cookie name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_name_starts_with_string SlbTemplateHttpPolicyMultiMatchRule#cookie_name_starts_with_string}
  */
  readonly cookieNameStartsWithString?: string;
  /**
  * 'starts-with': Cookie name starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_name_starts_with_type SlbTemplateHttpPolicyMultiMatchRule#cookie_name_starts_with_type}
  */
  readonly cookieNameStartsWithType?: string;
  /**
  * When enabled, the rule will match only when both cookie-name and cookie-value matches with same cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_name_value_match SlbTemplateHttpPolicyMultiMatchRule#cookie_name_value_match}
  */
  readonly cookieNameValueMatch?: number;
  /**
  * Cookie value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_value_contains_string SlbTemplateHttpPolicyMultiMatchRule#cookie_value_contains_string}
  */
  readonly cookieValueContainsString?: string;
  /**
  * 'contains': Cookie value contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_value_contains_type SlbTemplateHttpPolicyMultiMatchRule#cookie_value_contains_type}
  */
  readonly cookieValueContainsType?: string;
  /**
  * Cookie value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_value_ends_with_string SlbTemplateHttpPolicyMultiMatchRule#cookie_value_ends_with_string}
  */
  readonly cookieValueEndsWithString?: string;
  /**
  * 'ends-with': Cookie value ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_value_ends_with_type SlbTemplateHttpPolicyMultiMatchRule#cookie_value_ends_with_type}
  */
  readonly cookieValueEndsWithType?: string;
  /**
  * Cookie value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_value_equals_string SlbTemplateHttpPolicyMultiMatchRule#cookie_value_equals_string}
  */
  readonly cookieValueEqualsString?: string;
  /**
  * 'equals': Cookie value equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_value_equals_type SlbTemplateHttpPolicyMultiMatchRule#cookie_value_equals_type}
  */
  readonly cookieValueEqualsType?: string;
  /**
  * Cookie value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_value_starts_with_string SlbTemplateHttpPolicyMultiMatchRule#cookie_value_starts_with_string}
  */
  readonly cookieValueStartsWithString?: string;
  /**
  * 'starts-with': Cookie value starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#cookie_value_starts_with_type SlbTemplateHttpPolicyMultiMatchRule#cookie_value_starts_with_type}
  */
  readonly cookieValueStartsWithType?: string;
  /**
  * Header name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_name_contains_string SlbTemplateHttpPolicyMultiMatchRule#header_name_contains_string}
  */
  readonly headerNameContainsString?: string;
  /**
  * 'contains': Header name contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_name_contains_type SlbTemplateHttpPolicyMultiMatchRule#header_name_contains_type}
  */
  readonly headerNameContainsType?: string;
  /**
  * Header name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_name_ends_with_string SlbTemplateHttpPolicyMultiMatchRule#header_name_ends_with_string}
  */
  readonly headerNameEndsWithString?: string;
  /**
  * 'ends-with': Header name ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_name_ends_with_type SlbTemplateHttpPolicyMultiMatchRule#header_name_ends_with_type}
  */
  readonly headerNameEndsWithType?: string;
  /**
  * Header name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_name_equals_string SlbTemplateHttpPolicyMultiMatchRule#header_name_equals_string}
  */
  readonly headerNameEqualsString?: string;
  /**
  * 'equals': Header name equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_name_equals_type SlbTemplateHttpPolicyMultiMatchRule#header_name_equals_type}
  */
  readonly headerNameEqualsType?: string;
  /**
  * Header name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_name_starts_with_string SlbTemplateHttpPolicyMultiMatchRule#header_name_starts_with_string}
  */
  readonly headerNameStartsWithString?: string;
  /**
  * 'starts-with': Header name starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_name_starts_with_type SlbTemplateHttpPolicyMultiMatchRule#header_name_starts_with_type}
  */
  readonly headerNameStartsWithType?: string;
  /**
  * When enabled, the rule will match only when both header-name and header-value matches with same header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_name_value_match SlbTemplateHttpPolicyMultiMatchRule#header_name_value_match}
  */
  readonly headerNameValueMatch?: number;
  /**
  * Header value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_value_contains_string SlbTemplateHttpPolicyMultiMatchRule#header_value_contains_string}
  */
  readonly headerValueContainsString?: string;
  /**
  * 'contains': Header value contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_value_contains_type SlbTemplateHttpPolicyMultiMatchRule#header_value_contains_type}
  */
  readonly headerValueContainsType?: string;
  /**
  * Header value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_value_ends_with_string SlbTemplateHttpPolicyMultiMatchRule#header_value_ends_with_string}
  */
  readonly headerValueEndsWithString?: string;
  /**
  * 'ends-with': Header value ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_value_ends_with_type SlbTemplateHttpPolicyMultiMatchRule#header_value_ends_with_type}
  */
  readonly headerValueEndsWithType?: string;
  /**
  * Header value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_value_equals_string SlbTemplateHttpPolicyMultiMatchRule#header_value_equals_string}
  */
  readonly headerValueEqualsString?: string;
  /**
  * 'equals': Header value equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_value_equals_type SlbTemplateHttpPolicyMultiMatchRule#header_value_equals_type}
  */
  readonly headerValueEqualsType?: string;
  /**
  * Header value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_value_starts_with_string SlbTemplateHttpPolicyMultiMatchRule#header_value_starts_with_string}
  */
  readonly headerValueStartsWithString?: string;
  /**
  * 'starts-with': Header value starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#header_value_starts_with_type SlbTemplateHttpPolicyMultiMatchRule#header_value_starts_with_type}
  */
  readonly headerValueStartsWithType?: string;
  /**
  * Host string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#host_contains_string SlbTemplateHttpPolicyMultiMatchRule#host_contains_string}
  */
  readonly hostContainsString?: string;
  /**
  * 'contains': Host contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#host_contains_type SlbTemplateHttpPolicyMultiMatchRule#host_contains_type}
  */
  readonly hostContainsType?: string;
  /**
  * Host string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#host_ends_with_string SlbTemplateHttpPolicyMultiMatchRule#host_ends_with_string}
  */
  readonly hostEndsWithString?: string;
  /**
  * 'ends-with': Host ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#host_ends_with_type SlbTemplateHttpPolicyMultiMatchRule#host_ends_with_type}
  */
  readonly hostEndsWithType?: string;
  /**
  * Host string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#host_equals_string SlbTemplateHttpPolicyMultiMatchRule#host_equals_string}
  */
  readonly hostEqualsString?: string;
  /**
  * 'equals': Host equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#host_equals_type SlbTemplateHttpPolicyMultiMatchRule#host_equals_type}
  */
  readonly hostEqualsType?: string;
  /**
  * Host string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#host_starts_with_string SlbTemplateHttpPolicyMultiMatchRule#host_starts_with_string}
  */
  readonly hostStartsWithString?: string;
  /**
  * 'starts-with': Host starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#host_starts_with_type SlbTemplateHttpPolicyMultiMatchRule#host_starts_with_type}
  */
  readonly hostStartsWithType?: string;
  /**
  * Http_policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#http_policy_name SlbTemplateHttpPolicyMultiMatchRule#http_policy_name}
  */
  readonly httpPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#id SlbTemplateHttpPolicyMultiMatchRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify a multi-match-rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#multi_match SlbTemplateHttpPolicyMultiMatchRule#multi_match}
  */
  readonly multiMatch: string;
  /**
  * query parameter name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_name_contains_string SlbTemplateHttpPolicyMultiMatchRule#query_param_name_contains_string}
  */
  readonly queryParamNameContainsString?: string;
  /**
  * 'contains': query parameter name contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_name_contains_type SlbTemplateHttpPolicyMultiMatchRule#query_param_name_contains_type}
  */
  readonly queryParamNameContainsType?: string;
  /**
  * query parameter name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_name_ends_with_string SlbTemplateHttpPolicyMultiMatchRule#query_param_name_ends_with_string}
  */
  readonly queryParamNameEndsWithString?: string;
  /**
  * 'ends-with': query parameter name ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_name_ends_with_type SlbTemplateHttpPolicyMultiMatchRule#query_param_name_ends_with_type}
  */
  readonly queryParamNameEndsWithType?: string;
  /**
  * query parameter name string, use "[no-name]" for empty query-param-name match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_name_equals_string SlbTemplateHttpPolicyMultiMatchRule#query_param_name_equals_string}
  */
  readonly queryParamNameEqualsString?: string;
  /**
  * 'equals': query parameter name equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_name_equals_type SlbTemplateHttpPolicyMultiMatchRule#query_param_name_equals_type}
  */
  readonly queryParamNameEqualsType?: string;
  /**
  * query parameter name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_name_starts_with_string SlbTemplateHttpPolicyMultiMatchRule#query_param_name_starts_with_string}
  */
  readonly queryParamNameStartsWithString?: string;
  /**
  * 'starts-with': query parameter name starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_name_starts_with_type SlbTemplateHttpPolicyMultiMatchRule#query_param_name_starts_with_type}
  */
  readonly queryParamNameStartsWithType?: string;
  /**
  * query parameter value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_value_contains_string SlbTemplateHttpPolicyMultiMatchRule#query_param_value_contains_string}
  */
  readonly queryParamValueContainsString?: string;
  /**
  * 'contains': query parameter value contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_value_contains_type SlbTemplateHttpPolicyMultiMatchRule#query_param_value_contains_type}
  */
  readonly queryParamValueContainsType?: string;
  /**
  * query parameter value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_value_ends_with_string SlbTemplateHttpPolicyMultiMatchRule#query_param_value_ends_with_string}
  */
  readonly queryParamValueEndsWithString?: string;
  /**
  * 'ends-with': query parameter value ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_value_ends_with_type SlbTemplateHttpPolicyMultiMatchRule#query_param_value_ends_with_type}
  */
  readonly queryParamValueEndsWithType?: string;
  /**
  * query parameter value string, use "[no-value]" for empty query-param-value match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_value_equals_string SlbTemplateHttpPolicyMultiMatchRule#query_param_value_equals_string}
  */
  readonly queryParamValueEqualsString?: string;
  /**
  * 'equals': query parameter value equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_value_equals_type SlbTemplateHttpPolicyMultiMatchRule#query_param_value_equals_type}
  */
  readonly queryParamValueEqualsType?: string;
  /**
  * query parameter value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_value_starts_with_string SlbTemplateHttpPolicyMultiMatchRule#query_param_value_starts_with_string}
  */
  readonly queryParamValueStartsWithString?: string;
  /**
  * 'starts-with': query parameter value starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#query_param_value_starts_with_type SlbTemplateHttpPolicyMultiMatchRule#query_param_value_starts_with_type}
  */
  readonly queryParamValueStartsWithType?: string;
  /**
  * Specify a sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#seq_num SlbTemplateHttpPolicyMultiMatchRule#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Service Group to be used (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#service_group SlbTemplateHttpPolicyMultiMatchRule#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * URL string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#url_contains_string SlbTemplateHttpPolicyMultiMatchRule#url_contains_string}
  */
  readonly urlContainsString?: string;
  /**
  * 'contains': URL contains string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#url_contains_type SlbTemplateHttpPolicyMultiMatchRule#url_contains_type}
  */
  readonly urlContainsType?: string;
  /**
  * URL string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#url_ends_with_string SlbTemplateHttpPolicyMultiMatchRule#url_ends_with_string}
  */
  readonly urlEndsWithString?: string;
  /**
  * 'ends-with': URL ends-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#url_ends_with_type SlbTemplateHttpPolicyMultiMatchRule#url_ends_with_type}
  */
  readonly urlEndsWithType?: string;
  /**
  * URL string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#url_equals_string SlbTemplateHttpPolicyMultiMatchRule#url_equals_string}
  */
  readonly urlEqualsString?: string;
  /**
  * 'equals': URL equals to string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#url_equals_type SlbTemplateHttpPolicyMultiMatchRule#url_equals_type}
  */
  readonly urlEqualsType?: string;
  /**
  * URL string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#url_starts_with_string SlbTemplateHttpPolicyMultiMatchRule#url_starts_with_string}
  */
  readonly urlStartsWithString?: string;
  /**
  * 'starts-with': URL starts-with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#url_starts_with_type SlbTemplateHttpPolicyMultiMatchRule#url_starts_with_type}
  */
  readonly urlStartsWithType?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#user_tag SlbTemplateHttpPolicyMultiMatchRule#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#uuid SlbTemplateHttpPolicyMultiMatchRule#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule thunder_slb_template_http_policy_multi_match_rule}
*/
export class SlbTemplateHttpPolicyMultiMatchRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_http_policy_multi_match_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateHttpPolicyMultiMatchRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateHttpPolicyMultiMatchRule to import
  * @param importFromId The id of the existing SlbTemplateHttpPolicyMultiMatchRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateHttpPolicyMultiMatchRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_http_policy_multi_match_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_http_policy_multi_match_rule thunder_slb_template_http_policy_multi_match_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateHttpPolicyMultiMatchRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateHttpPolicyMultiMatchRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_http_policy_multi_match_rule',
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
    this._cookieNameContainsString = config.cookieNameContainsString;
    this._cookieNameContainsType = config.cookieNameContainsType;
    this._cookieNameEndsWithString = config.cookieNameEndsWithString;
    this._cookieNameEndsWithType = config.cookieNameEndsWithType;
    this._cookieNameEqualsString = config.cookieNameEqualsString;
    this._cookieNameEqualsType = config.cookieNameEqualsType;
    this._cookieNameStartsWithString = config.cookieNameStartsWithString;
    this._cookieNameStartsWithType = config.cookieNameStartsWithType;
    this._cookieNameValueMatch = config.cookieNameValueMatch;
    this._cookieValueContainsString = config.cookieValueContainsString;
    this._cookieValueContainsType = config.cookieValueContainsType;
    this._cookieValueEndsWithString = config.cookieValueEndsWithString;
    this._cookieValueEndsWithType = config.cookieValueEndsWithType;
    this._cookieValueEqualsString = config.cookieValueEqualsString;
    this._cookieValueEqualsType = config.cookieValueEqualsType;
    this._cookieValueStartsWithString = config.cookieValueStartsWithString;
    this._cookieValueStartsWithType = config.cookieValueStartsWithType;
    this._headerNameContainsString = config.headerNameContainsString;
    this._headerNameContainsType = config.headerNameContainsType;
    this._headerNameEndsWithString = config.headerNameEndsWithString;
    this._headerNameEndsWithType = config.headerNameEndsWithType;
    this._headerNameEqualsString = config.headerNameEqualsString;
    this._headerNameEqualsType = config.headerNameEqualsType;
    this._headerNameStartsWithString = config.headerNameStartsWithString;
    this._headerNameStartsWithType = config.headerNameStartsWithType;
    this._headerNameValueMatch = config.headerNameValueMatch;
    this._headerValueContainsString = config.headerValueContainsString;
    this._headerValueContainsType = config.headerValueContainsType;
    this._headerValueEndsWithString = config.headerValueEndsWithString;
    this._headerValueEndsWithType = config.headerValueEndsWithType;
    this._headerValueEqualsString = config.headerValueEqualsString;
    this._headerValueEqualsType = config.headerValueEqualsType;
    this._headerValueStartsWithString = config.headerValueStartsWithString;
    this._headerValueStartsWithType = config.headerValueStartsWithType;
    this._hostContainsString = config.hostContainsString;
    this._hostContainsType = config.hostContainsType;
    this._hostEndsWithString = config.hostEndsWithString;
    this._hostEndsWithType = config.hostEndsWithType;
    this._hostEqualsString = config.hostEqualsString;
    this._hostEqualsType = config.hostEqualsType;
    this._hostStartsWithString = config.hostStartsWithString;
    this._hostStartsWithType = config.hostStartsWithType;
    this._httpPolicyName = config.httpPolicyName;
    this._id = config.id;
    this._multiMatch = config.multiMatch;
    this._queryParamNameContainsString = config.queryParamNameContainsString;
    this._queryParamNameContainsType = config.queryParamNameContainsType;
    this._queryParamNameEndsWithString = config.queryParamNameEndsWithString;
    this._queryParamNameEndsWithType = config.queryParamNameEndsWithType;
    this._queryParamNameEqualsString = config.queryParamNameEqualsString;
    this._queryParamNameEqualsType = config.queryParamNameEqualsType;
    this._queryParamNameStartsWithString = config.queryParamNameStartsWithString;
    this._queryParamNameStartsWithType = config.queryParamNameStartsWithType;
    this._queryParamValueContainsString = config.queryParamValueContainsString;
    this._queryParamValueContainsType = config.queryParamValueContainsType;
    this._queryParamValueEndsWithString = config.queryParamValueEndsWithString;
    this._queryParamValueEndsWithType = config.queryParamValueEndsWithType;
    this._queryParamValueEqualsString = config.queryParamValueEqualsString;
    this._queryParamValueEqualsType = config.queryParamValueEqualsType;
    this._queryParamValueStartsWithString = config.queryParamValueStartsWithString;
    this._queryParamValueStartsWithType = config.queryParamValueStartsWithType;
    this._seqNum = config.seqNum;
    this._serviceGroup = config.serviceGroup;
    this._urlContainsString = config.urlContainsString;
    this._urlContainsType = config.urlContainsType;
    this._urlEndsWithString = config.urlEndsWithString;
    this._urlEndsWithType = config.urlEndsWithType;
    this._urlEqualsString = config.urlEqualsString;
    this._urlEqualsType = config.urlEqualsType;
    this._urlStartsWithString = config.urlStartsWithString;
    this._urlStartsWithType = config.urlStartsWithType;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // http_policy_name - computed: false, optional: false, required: true
  private _httpPolicyName?: string; 
  public get httpPolicyName() {
    return this.getStringAttribute('http_policy_name');
  }
  public set httpPolicyName(value: string) {
    this._httpPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPolicyNameInput() {
    return this._httpPolicyName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cookie_name_contains_string: cdktf.stringToTerraform(this._cookieNameContainsString),
      cookie_name_contains_type: cdktf.stringToTerraform(this._cookieNameContainsType),
      cookie_name_ends_with_string: cdktf.stringToTerraform(this._cookieNameEndsWithString),
      cookie_name_ends_with_type: cdktf.stringToTerraform(this._cookieNameEndsWithType),
      cookie_name_equals_string: cdktf.stringToTerraform(this._cookieNameEqualsString),
      cookie_name_equals_type: cdktf.stringToTerraform(this._cookieNameEqualsType),
      cookie_name_starts_with_string: cdktf.stringToTerraform(this._cookieNameStartsWithString),
      cookie_name_starts_with_type: cdktf.stringToTerraform(this._cookieNameStartsWithType),
      cookie_name_value_match: cdktf.numberToTerraform(this._cookieNameValueMatch),
      cookie_value_contains_string: cdktf.stringToTerraform(this._cookieValueContainsString),
      cookie_value_contains_type: cdktf.stringToTerraform(this._cookieValueContainsType),
      cookie_value_ends_with_string: cdktf.stringToTerraform(this._cookieValueEndsWithString),
      cookie_value_ends_with_type: cdktf.stringToTerraform(this._cookieValueEndsWithType),
      cookie_value_equals_string: cdktf.stringToTerraform(this._cookieValueEqualsString),
      cookie_value_equals_type: cdktf.stringToTerraform(this._cookieValueEqualsType),
      cookie_value_starts_with_string: cdktf.stringToTerraform(this._cookieValueStartsWithString),
      cookie_value_starts_with_type: cdktf.stringToTerraform(this._cookieValueStartsWithType),
      header_name_contains_string: cdktf.stringToTerraform(this._headerNameContainsString),
      header_name_contains_type: cdktf.stringToTerraform(this._headerNameContainsType),
      header_name_ends_with_string: cdktf.stringToTerraform(this._headerNameEndsWithString),
      header_name_ends_with_type: cdktf.stringToTerraform(this._headerNameEndsWithType),
      header_name_equals_string: cdktf.stringToTerraform(this._headerNameEqualsString),
      header_name_equals_type: cdktf.stringToTerraform(this._headerNameEqualsType),
      header_name_starts_with_string: cdktf.stringToTerraform(this._headerNameStartsWithString),
      header_name_starts_with_type: cdktf.stringToTerraform(this._headerNameStartsWithType),
      header_name_value_match: cdktf.numberToTerraform(this._headerNameValueMatch),
      header_value_contains_string: cdktf.stringToTerraform(this._headerValueContainsString),
      header_value_contains_type: cdktf.stringToTerraform(this._headerValueContainsType),
      header_value_ends_with_string: cdktf.stringToTerraform(this._headerValueEndsWithString),
      header_value_ends_with_type: cdktf.stringToTerraform(this._headerValueEndsWithType),
      header_value_equals_string: cdktf.stringToTerraform(this._headerValueEqualsString),
      header_value_equals_type: cdktf.stringToTerraform(this._headerValueEqualsType),
      header_value_starts_with_string: cdktf.stringToTerraform(this._headerValueStartsWithString),
      header_value_starts_with_type: cdktf.stringToTerraform(this._headerValueStartsWithType),
      host_contains_string: cdktf.stringToTerraform(this._hostContainsString),
      host_contains_type: cdktf.stringToTerraform(this._hostContainsType),
      host_ends_with_string: cdktf.stringToTerraform(this._hostEndsWithString),
      host_ends_with_type: cdktf.stringToTerraform(this._hostEndsWithType),
      host_equals_string: cdktf.stringToTerraform(this._hostEqualsString),
      host_equals_type: cdktf.stringToTerraform(this._hostEqualsType),
      host_starts_with_string: cdktf.stringToTerraform(this._hostStartsWithString),
      host_starts_with_type: cdktf.stringToTerraform(this._hostStartsWithType),
      http_policy_name: cdktf.stringToTerraform(this._httpPolicyName),
      id: cdktf.stringToTerraform(this._id),
      multi_match: cdktf.stringToTerraform(this._multiMatch),
      query_param_name_contains_string: cdktf.stringToTerraform(this._queryParamNameContainsString),
      query_param_name_contains_type: cdktf.stringToTerraform(this._queryParamNameContainsType),
      query_param_name_ends_with_string: cdktf.stringToTerraform(this._queryParamNameEndsWithString),
      query_param_name_ends_with_type: cdktf.stringToTerraform(this._queryParamNameEndsWithType),
      query_param_name_equals_string: cdktf.stringToTerraform(this._queryParamNameEqualsString),
      query_param_name_equals_type: cdktf.stringToTerraform(this._queryParamNameEqualsType),
      query_param_name_starts_with_string: cdktf.stringToTerraform(this._queryParamNameStartsWithString),
      query_param_name_starts_with_type: cdktf.stringToTerraform(this._queryParamNameStartsWithType),
      query_param_value_contains_string: cdktf.stringToTerraform(this._queryParamValueContainsString),
      query_param_value_contains_type: cdktf.stringToTerraform(this._queryParamValueContainsType),
      query_param_value_ends_with_string: cdktf.stringToTerraform(this._queryParamValueEndsWithString),
      query_param_value_ends_with_type: cdktf.stringToTerraform(this._queryParamValueEndsWithType),
      query_param_value_equals_string: cdktf.stringToTerraform(this._queryParamValueEqualsString),
      query_param_value_equals_type: cdktf.stringToTerraform(this._queryParamValueEqualsType),
      query_param_value_starts_with_string: cdktf.stringToTerraform(this._queryParamValueStartsWithString),
      query_param_value_starts_with_type: cdktf.stringToTerraform(this._queryParamValueStartsWithType),
      seq_num: cdktf.numberToTerraform(this._seqNum),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      url_contains_string: cdktf.stringToTerraform(this._urlContainsString),
      url_contains_type: cdktf.stringToTerraform(this._urlContainsType),
      url_ends_with_string: cdktf.stringToTerraform(this._urlEndsWithString),
      url_ends_with_type: cdktf.stringToTerraform(this._urlEndsWithType),
      url_equals_string: cdktf.stringToTerraform(this._urlEqualsString),
      url_equals_type: cdktf.stringToTerraform(this._urlEqualsType),
      url_starts_with_string: cdktf.stringToTerraform(this._urlStartsWithString),
      url_starts_with_type: cdktf.stringToTerraform(this._urlStartsWithType),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cookie_name_contains_string: {
        value: cdktf.stringToHclTerraform(this._cookieNameContainsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_name_contains_type: {
        value: cdktf.stringToHclTerraform(this._cookieNameContainsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_name_ends_with_string: {
        value: cdktf.stringToHclTerraform(this._cookieNameEndsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_name_ends_with_type: {
        value: cdktf.stringToHclTerraform(this._cookieNameEndsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_name_equals_string: {
        value: cdktf.stringToHclTerraform(this._cookieNameEqualsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_name_equals_type: {
        value: cdktf.stringToHclTerraform(this._cookieNameEqualsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_name_starts_with_string: {
        value: cdktf.stringToHclTerraform(this._cookieNameStartsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_name_starts_with_type: {
        value: cdktf.stringToHclTerraform(this._cookieNameStartsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_name_value_match: {
        value: cdktf.numberToHclTerraform(this._cookieNameValueMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookie_value_contains_string: {
        value: cdktf.stringToHclTerraform(this._cookieValueContainsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_value_contains_type: {
        value: cdktf.stringToHclTerraform(this._cookieValueContainsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_value_ends_with_string: {
        value: cdktf.stringToHclTerraform(this._cookieValueEndsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_value_ends_with_type: {
        value: cdktf.stringToHclTerraform(this._cookieValueEndsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_value_equals_string: {
        value: cdktf.stringToHclTerraform(this._cookieValueEqualsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_value_equals_type: {
        value: cdktf.stringToHclTerraform(this._cookieValueEqualsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_value_starts_with_string: {
        value: cdktf.stringToHclTerraform(this._cookieValueStartsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_value_starts_with_type: {
        value: cdktf.stringToHclTerraform(this._cookieValueStartsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_name_contains_string: {
        value: cdktf.stringToHclTerraform(this._headerNameContainsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_name_contains_type: {
        value: cdktf.stringToHclTerraform(this._headerNameContainsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_name_ends_with_string: {
        value: cdktf.stringToHclTerraform(this._headerNameEndsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_name_ends_with_type: {
        value: cdktf.stringToHclTerraform(this._headerNameEndsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_name_equals_string: {
        value: cdktf.stringToHclTerraform(this._headerNameEqualsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_name_equals_type: {
        value: cdktf.stringToHclTerraform(this._headerNameEqualsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_name_starts_with_string: {
        value: cdktf.stringToHclTerraform(this._headerNameStartsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_name_starts_with_type: {
        value: cdktf.stringToHclTerraform(this._headerNameStartsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_name_value_match: {
        value: cdktf.numberToHclTerraform(this._headerNameValueMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_value_contains_string: {
        value: cdktf.stringToHclTerraform(this._headerValueContainsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_value_contains_type: {
        value: cdktf.stringToHclTerraform(this._headerValueContainsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_value_ends_with_string: {
        value: cdktf.stringToHclTerraform(this._headerValueEndsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_value_ends_with_type: {
        value: cdktf.stringToHclTerraform(this._headerValueEndsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_value_equals_string: {
        value: cdktf.stringToHclTerraform(this._headerValueEqualsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_value_equals_type: {
        value: cdktf.stringToHclTerraform(this._headerValueEqualsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_value_starts_with_string: {
        value: cdktf.stringToHclTerraform(this._headerValueStartsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_value_starts_with_type: {
        value: cdktf.stringToHclTerraform(this._headerValueStartsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_contains_string: {
        value: cdktf.stringToHclTerraform(this._hostContainsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_contains_type: {
        value: cdktf.stringToHclTerraform(this._hostContainsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_ends_with_string: {
        value: cdktf.stringToHclTerraform(this._hostEndsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_ends_with_type: {
        value: cdktf.stringToHclTerraform(this._hostEndsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_equals_string: {
        value: cdktf.stringToHclTerraform(this._hostEqualsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_equals_type: {
        value: cdktf.stringToHclTerraform(this._hostEqualsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_starts_with_string: {
        value: cdktf.stringToHclTerraform(this._hostStartsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_starts_with_type: {
        value: cdktf.stringToHclTerraform(this._hostStartsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_policy_name: {
        value: cdktf.stringToHclTerraform(this._httpPolicyName),
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
      multi_match: {
        value: cdktf.stringToHclTerraform(this._multiMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_name_contains_string: {
        value: cdktf.stringToHclTerraform(this._queryParamNameContainsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_name_contains_type: {
        value: cdktf.stringToHclTerraform(this._queryParamNameContainsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_name_ends_with_string: {
        value: cdktf.stringToHclTerraform(this._queryParamNameEndsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_name_ends_with_type: {
        value: cdktf.stringToHclTerraform(this._queryParamNameEndsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_name_equals_string: {
        value: cdktf.stringToHclTerraform(this._queryParamNameEqualsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_name_equals_type: {
        value: cdktf.stringToHclTerraform(this._queryParamNameEqualsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_name_starts_with_string: {
        value: cdktf.stringToHclTerraform(this._queryParamNameStartsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_name_starts_with_type: {
        value: cdktf.stringToHclTerraform(this._queryParamNameStartsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_value_contains_string: {
        value: cdktf.stringToHclTerraform(this._queryParamValueContainsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_value_contains_type: {
        value: cdktf.stringToHclTerraform(this._queryParamValueContainsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_value_ends_with_string: {
        value: cdktf.stringToHclTerraform(this._queryParamValueEndsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_value_ends_with_type: {
        value: cdktf.stringToHclTerraform(this._queryParamValueEndsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_value_equals_string: {
        value: cdktf.stringToHclTerraform(this._queryParamValueEqualsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_value_equals_type: {
        value: cdktf.stringToHclTerraform(this._queryParamValueEqualsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_value_starts_with_string: {
        value: cdktf.stringToHclTerraform(this._queryParamValueStartsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_param_value_starts_with_type: {
        value: cdktf.stringToHclTerraform(this._queryParamValueStartsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seq_num: {
        value: cdktf.numberToHclTerraform(this._seqNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_contains_string: {
        value: cdktf.stringToHclTerraform(this._urlContainsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_contains_type: {
        value: cdktf.stringToHclTerraform(this._urlContainsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_ends_with_string: {
        value: cdktf.stringToHclTerraform(this._urlEndsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_ends_with_type: {
        value: cdktf.stringToHclTerraform(this._urlEndsWithType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_equals_string: {
        value: cdktf.stringToHclTerraform(this._urlEqualsString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_equals_type: {
        value: cdktf.stringToHclTerraform(this._urlEqualsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_starts_with_string: {
        value: cdktf.stringToHclTerraform(this._urlStartsWithString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_starts_with_type: {
        value: cdktf.stringToHclTerraform(this._urlStartsWithType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
