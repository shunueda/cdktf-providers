// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The character encoding for the web application. The character encoding determines how the policy processes the character sets. The default is Auto detect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#application_language WafPolicy#application_language}
  */
  readonly applicationLanguage?: string;
  /**
  * Specifies whether the security policy treats microservice URLs, file types, URLs, and parameters as case sensitive or not. When this setting is enabled, the system stores these security policy elements in lowercase in the security policy configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#case_insensitive WafPolicy#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * Specifies the description of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#description WafPolicy#description}
  */
  readonly description?: string;
  /**
  * Passive Mode allows the policy to be associated with a Performance L4 Virtual Server (using a FastL4 profile). With FastL4, traffic is analyzed but is not modified in any way.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#enable_passivemode WafPolicy#enable_passivemode}
  */
  readonly enablePassivemode?: boolean | cdktf.IResolvable;
  /**
  * How the system processes a request that triggers a security policy violation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#enforcement_mode WafPolicy#enforcement_mode}
  */
  readonly enforcementMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#id WafPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  *  the modifications section includes actions that modify the declarative policy as it is defined in the adjustments section. The modifications section is updated manually, with the changes generally driven by the learning suggestions provided by the BIG-IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#modifications WafPolicy#modifications}
  */
  readonly modifications?: string[];
  /**
  * The unique user-given name of the policy. Policy names cannot contain spaces or special characters. Allowed characters are a-z, A-Z, 0-9, dot, dash (-), colon (:) and underscore (_)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#name WafPolicy#name}
  */
  readonly name: string;
  /**
  * This section defines the Link for open api files on the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#open_api_files WafPolicy#open_api_files}
  */
  readonly openApiFiles?: string[];
  /**
  * This section defines parameters that the security policy permits in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#parameters WafPolicy#parameters}
  */
  readonly parameters?: string[];
  /**
  * Partition of WAF policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#partition WafPolicy#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#policy_id WafPolicy#policy_id}
  */
  readonly policyId?: string;
  /**
  * The payload of the WAF Policy to be used for IMPORT on to BIGIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#policy_import_json WafPolicy#policy_import_json}
  */
  readonly policyImportJson?: string;
  /**
  * When creating a security policy, you can determine whether a security policy differentiates between HTTP and HTTPS URLs. If enabled, the security policy differentiates between HTTP and HTTPS URLs. If disabled, the security policy configures URLs without specifying a specific protocol. This is useful for applications that behave the same for HTTP and HTTPS, and it keeps the security policy from including the same URL twice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#protocol_independent WafPolicy#protocol_independent}
  */
  readonly protocolIndependent?: boolean | cdktf.IResolvable;
  /**
  * The server technology is a server-side application, framework, web server or operating system type that is configured in the policy in order to adapt the policy to the checks needed for the respective technology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#server_technologies WafPolicy#server_technologies}
  */
  readonly serverTechnologies?: string[];
  /**
  * Defines behavior when signatures found within a signature-set are detected in a request. Settings are culmulative, so if a signature is found in any set with block enabled, that signature will have block enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#signature_sets WafPolicy#signature_sets}
  */
  readonly signatureSets?: string[];
  /**
  * This section defines the properties of a signature on the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#signatures WafPolicy#signatures}
  */
  readonly signatures?: string[];
  /**
  * Specifies the Link of the template used for the policy creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#template_link WafPolicy#template_link}
  */
  readonly templateLink?: string;
  /**
  * Specifies the name of the template used for the policy creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#template_name WafPolicy#template_name}
  */
  readonly templateName: string;
  /**
  * The type of policy you want to create. The default policy type is Security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#type WafPolicy#type}
  */
  readonly type?: string;
  /**
  * In a security policy, you can manually specify the HTTP URLs that are allowed (or disallowed) in traffic to the web application being protected. If you are using automatic policy building (and the policy includes learning URLs), the system can determine which URLs to add, based on legitimate traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#urls WafPolicy#urls}
  */
  readonly urls?: string[];
  /**
  * file_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#file_types WafPolicy#file_types}
  */
  readonly fileTypes?: WafPolicyFileTypes[] | cdktf.IResolvable;
  /**
  * graphql_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#graphql_profiles WafPolicy#graphql_profiles}
  */
  readonly graphqlProfiles?: WafPolicyGraphqlProfiles[] | cdktf.IResolvable;
  /**
  * host_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#host_names WafPolicy#host_names}
  */
  readonly hostNames?: WafPolicyHostNames[] | cdktf.IResolvable;
  /**
  * ip_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#ip_exceptions WafPolicy#ip_exceptions}
  */
  readonly ipExceptions?: WafPolicyIpExceptions[] | cdktf.IResolvable;
  /**
  * policy_builder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#policy_builder WafPolicy#policy_builder}
  */
  readonly policyBuilder?: WafPolicyPolicyBuilder[] | cdktf.IResolvable;
  /**
  * signatures_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#signatures_settings WafPolicy#signatures_settings}
  */
  readonly signaturesSettings?: WafPolicySignaturesSettings[] | cdktf.IResolvable;
}
export interface WafPolicyFileTypes {
  /**
  * Determines whether the file type is allowed or disallowed. In either of these cases the VIOL_FILETYPE violation is issued (if enabled) for an incoming request- 
  *  1. No allowed file type matched the file type of the request. 
  *  2. The file type of the request matched a disallowed file type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#allowed WafPolicy#allowed}
  */
  readonly allowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#name WafPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#type WafPolicy#type}
  */
  readonly type?: string;
}

export function wafPolicyFileTypesToTerraform(struct?: WafPolicyFileTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.booleanToTerraform(struct!.allowed),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafPolicyFileTypesToHclTerraform(struct?: WafPolicyFileTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class WafPolicyFileTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafPolicyFileTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
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

  public set internalValue(value: WafPolicyFileTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
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
      this._allowed = value.allowed;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed?: boolean | cdktf.IResolvable; 
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }
  public set allowed(value: boolean | cdktf.IResolvable) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
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

export class WafPolicyFileTypesList extends cdktf.ComplexList {
  public internalValue? : WafPolicyFileTypes[] | cdktf.IResolvable

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
  public get(index: number): WafPolicyFileTypesOutputReference {
    return new WafPolicyFileTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafPolicyGraphqlProfilesDefenseAttributes {
  /**
  * Introspection queries can also be enforced to prevent attackers from using them to
  * understand the API structure and potentially breach an application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#allow_introspection_queries WafPolicy#allow_introspection_queries}
  */
  readonly allowIntrospectionQueries?: boolean | cdktf.IResolvable;
  /**
  * Specifies the highest number of batched queries allowed by the security policy. The default setting is 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#maximum_batched_queries WafPolicy#maximum_batched_queries}
  */
  readonly maximumBatchedQueries?: string;
  /**
  * Specifies the greatest nesting depth found in the GraphQL structure allowed by the security policy. The default setting is a specified depth of 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#maximum_structure_depth WafPolicy#maximum_structure_depth}
  */
  readonly maximumStructureDepth?: string;
  /**
  * Specifies the longest length, in bytes, allowed by the security policy of the request payload, or parameter value, where the GraphQL data was found. The default setting is a specified length of 100000 bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#maximum_total_length WafPolicy#maximum_total_length}
  */
  readonly maximumTotalLength?: string;
  /**
  * Specifies the longest length (in bytes) of the longest GraphQL element value in the document allowed by the security policy. The default setting is a specified length of 10000 bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#maximum_value_length WafPolicy#maximum_value_length}
  */
  readonly maximumValueLength?: string;
  /**
  * Specifies, when checked (enabled), that the system does not report when the security enforcer encounters warnings while parsing GraphQL content. Specifies when cleared (disabled), that the security policy reports when the security enforcer encounters warnings while parsing GraphQL content. The default setting is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#tolerate_parsing_warnings WafPolicy#tolerate_parsing_warnings}
  */
  readonly tolerateParsingWarnings?: boolean | cdktf.IResolvable;
}

export function wafPolicyGraphqlProfilesDefenseAttributesToTerraform(struct?: WafPolicyGraphqlProfilesDefenseAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_introspection_queries: cdktf.booleanToTerraform(struct!.allowIntrospectionQueries),
    maximum_batched_queries: cdktf.stringToTerraform(struct!.maximumBatchedQueries),
    maximum_structure_depth: cdktf.stringToTerraform(struct!.maximumStructureDepth),
    maximum_total_length: cdktf.stringToTerraform(struct!.maximumTotalLength),
    maximum_value_length: cdktf.stringToTerraform(struct!.maximumValueLength),
    tolerate_parsing_warnings: cdktf.booleanToTerraform(struct!.tolerateParsingWarnings),
  }
}


export function wafPolicyGraphqlProfilesDefenseAttributesToHclTerraform(struct?: WafPolicyGraphqlProfilesDefenseAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_introspection_queries: {
      value: cdktf.booleanToHclTerraform(struct!.allowIntrospectionQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_batched_queries: {
      value: cdktf.stringToHclTerraform(struct!.maximumBatchedQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_structure_depth: {
      value: cdktf.stringToHclTerraform(struct!.maximumStructureDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_total_length: {
      value: cdktf.stringToHclTerraform(struct!.maximumTotalLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_value_length: {
      value: cdktf.stringToHclTerraform(struct!.maximumValueLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerate_parsing_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.tolerateParsingWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafPolicyGraphqlProfilesDefenseAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafPolicyGraphqlProfilesDefenseAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowIntrospectionQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIntrospectionQueries = this._allowIntrospectionQueries;
    }
    if (this._maximumBatchedQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchedQueries = this._maximumBatchedQueries;
    }
    if (this._maximumStructureDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumStructureDepth = this._maximumStructureDepth;
    }
    if (this._maximumTotalLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumTotalLength = this._maximumTotalLength;
    }
    if (this._maximumValueLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumValueLength = this._maximumValueLength;
    }
    if (this._tolerateParsingWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerateParsingWarnings = this._tolerateParsingWarnings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafPolicyGraphqlProfilesDefenseAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowIntrospectionQueries = undefined;
      this._maximumBatchedQueries = undefined;
      this._maximumStructureDepth = undefined;
      this._maximumTotalLength = undefined;
      this._maximumValueLength = undefined;
      this._tolerateParsingWarnings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowIntrospectionQueries = value.allowIntrospectionQueries;
      this._maximumBatchedQueries = value.maximumBatchedQueries;
      this._maximumStructureDepth = value.maximumStructureDepth;
      this._maximumTotalLength = value.maximumTotalLength;
      this._maximumValueLength = value.maximumValueLength;
      this._tolerateParsingWarnings = value.tolerateParsingWarnings;
    }
  }

  // allow_introspection_queries - computed: false, optional: true, required: false
  private _allowIntrospectionQueries?: boolean | cdktf.IResolvable; 
  public get allowIntrospectionQueries() {
    return this.getBooleanAttribute('allow_introspection_queries');
  }
  public set allowIntrospectionQueries(value: boolean | cdktf.IResolvable) {
    this._allowIntrospectionQueries = value;
  }
  public resetAllowIntrospectionQueries() {
    this._allowIntrospectionQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIntrospectionQueriesInput() {
    return this._allowIntrospectionQueries;
  }

  // maximum_batched_queries - computed: false, optional: true, required: false
  private _maximumBatchedQueries?: string; 
  public get maximumBatchedQueries() {
    return this.getStringAttribute('maximum_batched_queries');
  }
  public set maximumBatchedQueries(value: string) {
    this._maximumBatchedQueries = value;
  }
  public resetMaximumBatchedQueries() {
    this._maximumBatchedQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchedQueriesInput() {
    return this._maximumBatchedQueries;
  }

  // maximum_structure_depth - computed: false, optional: true, required: false
  private _maximumStructureDepth?: string; 
  public get maximumStructureDepth() {
    return this.getStringAttribute('maximum_structure_depth');
  }
  public set maximumStructureDepth(value: string) {
    this._maximumStructureDepth = value;
  }
  public resetMaximumStructureDepth() {
    this._maximumStructureDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumStructureDepthInput() {
    return this._maximumStructureDepth;
  }

  // maximum_total_length - computed: false, optional: true, required: false
  private _maximumTotalLength?: string; 
  public get maximumTotalLength() {
    return this.getStringAttribute('maximum_total_length');
  }
  public set maximumTotalLength(value: string) {
    this._maximumTotalLength = value;
  }
  public resetMaximumTotalLength() {
    this._maximumTotalLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTotalLengthInput() {
    return this._maximumTotalLength;
  }

  // maximum_value_length - computed: false, optional: true, required: false
  private _maximumValueLength?: string; 
  public get maximumValueLength() {
    return this.getStringAttribute('maximum_value_length');
  }
  public set maximumValueLength(value: string) {
    this._maximumValueLength = value;
  }
  public resetMaximumValueLength() {
    this._maximumValueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumValueLengthInput() {
    return this._maximumValueLength;
  }

  // tolerate_parsing_warnings - computed: false, optional: true, required: false
  private _tolerateParsingWarnings?: boolean | cdktf.IResolvable; 
  public get tolerateParsingWarnings() {
    return this.getBooleanAttribute('tolerate_parsing_warnings');
  }
  public set tolerateParsingWarnings(value: boolean | cdktf.IResolvable) {
    this._tolerateParsingWarnings = value;
  }
  public resetTolerateParsingWarnings() {
    this._tolerateParsingWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerateParsingWarningsInput() {
    return this._tolerateParsingWarnings;
  }
}

export class WafPolicyGraphqlProfilesDefenseAttributesList extends cdktf.ComplexList {
  public internalValue? : WafPolicyGraphqlProfilesDefenseAttributes[] | cdktf.IResolvable

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
  public get(index: number): WafPolicyGraphqlProfilesDefenseAttributesOutputReference {
    return new WafPolicyGraphqlProfilesDefenseAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafPolicyGraphqlProfiles {
  /**
  * Specifies when checked (enabled) that you want attack signatures and threat campaigns to be detected on this GraphQL profile and possibly override the security policy settings of an attack signature or threat campaign specifically for this GraphQL profile. After you enable this setting, the system displays a list of attack signatures and and threat campaigns. The default is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#attack_signatures_check WafPolicy#attack_signatures_check}
  */
  readonly attackSignaturesCheck?: boolean | cdktf.IResolvable;
  /**
  * Specifies when checked (enabled) that the system enforces the security policy settings of a meta character for the GraphQL profile. After you enable this setting, the system displays a list of meta characters. The default is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#metachar_elementcheck WafPolicy#metachar_elementcheck}
  */
  readonly metacharElementcheck?: boolean | cdktf.IResolvable;
  /**
  * Specifies the unique name of the GraphQL profile you are creating or editing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#name WafPolicy#name}
  */
  readonly name: string;
  /**
  * defense_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#defense_attributes WafPolicy#defense_attributes}
  */
  readonly defenseAttributes?: WafPolicyGraphqlProfilesDefenseAttributes[] | cdktf.IResolvable;
}

export function wafPolicyGraphqlProfilesToTerraform(struct?: WafPolicyGraphqlProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attack_signatures_check: cdktf.booleanToTerraform(struct!.attackSignaturesCheck),
    metachar_elementcheck: cdktf.booleanToTerraform(struct!.metacharElementcheck),
    name: cdktf.stringToTerraform(struct!.name),
    defense_attributes: cdktf.listMapper(wafPolicyGraphqlProfilesDefenseAttributesToTerraform, true)(struct!.defenseAttributes),
  }
}


export function wafPolicyGraphqlProfilesToHclTerraform(struct?: WafPolicyGraphqlProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attack_signatures_check: {
      value: cdktf.booleanToHclTerraform(struct!.attackSignaturesCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metachar_elementcheck: {
      value: cdktf.booleanToHclTerraform(struct!.metacharElementcheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defense_attributes: {
      value: cdktf.listMapperHcl(wafPolicyGraphqlProfilesDefenseAttributesToHclTerraform, true)(struct!.defenseAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "WafPolicyGraphqlProfilesDefenseAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafPolicyGraphqlProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafPolicyGraphqlProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attackSignaturesCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackSignaturesCheck = this._attackSignaturesCheck;
    }
    if (this._metacharElementcheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.metacharElementcheck = this._metacharElementcheck;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._defenseAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defenseAttributes = this._defenseAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafPolicyGraphqlProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attackSignaturesCheck = undefined;
      this._metacharElementcheck = undefined;
      this._name = undefined;
      this._defenseAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attackSignaturesCheck = value.attackSignaturesCheck;
      this._metacharElementcheck = value.metacharElementcheck;
      this._name = value.name;
      this._defenseAttributes.internalValue = value.defenseAttributes;
    }
  }

  // attack_signatures_check - computed: false, optional: true, required: false
  private _attackSignaturesCheck?: boolean | cdktf.IResolvable; 
  public get attackSignaturesCheck() {
    return this.getBooleanAttribute('attack_signatures_check');
  }
  public set attackSignaturesCheck(value: boolean | cdktf.IResolvable) {
    this._attackSignaturesCheck = value;
  }
  public resetAttackSignaturesCheck() {
    this._attackSignaturesCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackSignaturesCheckInput() {
    return this._attackSignaturesCheck;
  }

  // metachar_elementcheck - computed: false, optional: true, required: false
  private _metacharElementcheck?: boolean | cdktf.IResolvable; 
  public get metacharElementcheck() {
    return this.getBooleanAttribute('metachar_elementcheck');
  }
  public set metacharElementcheck(value: boolean | cdktf.IResolvable) {
    this._metacharElementcheck = value;
  }
  public resetMetacharElementcheck() {
    this._metacharElementcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metacharElementcheckInput() {
    return this._metacharElementcheck;
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

  // defense_attributes - computed: false, optional: true, required: false
  private _defenseAttributes = new WafPolicyGraphqlProfilesDefenseAttributesList(this, "defense_attributes", true);
  public get defenseAttributes() {
    return this._defenseAttributes;
  }
  public putDefenseAttributes(value: WafPolicyGraphqlProfilesDefenseAttributes[] | cdktf.IResolvable) {
    this._defenseAttributes.internalValue = value;
  }
  public resetDefenseAttributes() {
    this._defenseAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defenseAttributesInput() {
    return this._defenseAttributes.internalValue;
  }
}

export class WafPolicyGraphqlProfilesList extends cdktf.ComplexList {
  public internalValue? : WafPolicyGraphqlProfiles[] | cdktf.IResolvable

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
  public get(index: number): WafPolicyGraphqlProfilesOutputReference {
    return new WafPolicyGraphqlProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafPolicyHostNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#name WafPolicy#name}
  */
  readonly name?: string;
}

export function wafPolicyHostNamesToTerraform(struct?: WafPolicyHostNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wafPolicyHostNamesToHclTerraform(struct?: WafPolicyHostNames | cdktf.IResolvable): any {
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

export class WafPolicyHostNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafPolicyHostNames | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WafPolicyHostNames | cdktf.IResolvable | undefined) {
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

export class WafPolicyHostNamesList extends cdktf.ComplexList {
  public internalValue? : WafPolicyHostNames[] | cdktf.IResolvable

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
  public get(index: number): WafPolicyHostNamesOutputReference {
    return new WafPolicyHostNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafPolicyIpExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#block_requests WafPolicy#block_requests}
  */
  readonly blockRequests?: string;
  /**
  * Specifies a brief description of the IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#description WafPolicy#description}
  */
  readonly description?: string;
  /**
  * Specifies when enabled that the system considers this IP address legitimate and does not take it into account when performing brute force prevention
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#ignore_anomalies WafPolicy#ignore_anomalies}
  */
  readonly ignoreAnomalies?: boolean | cdktf.IResolvable;
  /**
  * Specifies when enabled that the system considers this IP address legitimate even if it is found in the IP Intelligence database (a database of questionable IP addresses)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#ignore_ipreputation WafPolicy#ignore_ipreputation}
  */
  readonly ignoreIpreputation?: boolean | cdktf.IResolvable;
  /**
  * Specifies the IP address that you want the system to trust
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#ip_address WafPolicy#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Specifies the netmask of the exceptional IP address. This is an optional field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#ip_mask WafPolicy#ip_mask}
  */
  readonly ipMask: string;
  /**
  * Specifies when enabled the Policy Builder considers traffic from this IP address as being safe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#trustedby_policybuilder WafPolicy#trustedby_policybuilder}
  */
  readonly trustedbyPolicybuilder?: boolean | cdktf.IResolvable;
}

export function wafPolicyIpExceptionsToTerraform(struct?: WafPolicyIpExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_requests: cdktf.stringToTerraform(struct!.blockRequests),
    description: cdktf.stringToTerraform(struct!.description),
    ignore_anomalies: cdktf.booleanToTerraform(struct!.ignoreAnomalies),
    ignore_ipreputation: cdktf.booleanToTerraform(struct!.ignoreIpreputation),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_mask: cdktf.stringToTerraform(struct!.ipMask),
    trustedby_policybuilder: cdktf.booleanToTerraform(struct!.trustedbyPolicybuilder),
  }
}


export function wafPolicyIpExceptionsToHclTerraform(struct?: WafPolicyIpExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_requests: {
      value: cdktf.stringToHclTerraform(struct!.blockRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_anomalies: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreAnomalies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_ipreputation: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreIpreputation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trustedby_policybuilder: {
      value: cdktf.booleanToHclTerraform(struct!.trustedbyPolicybuilder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafPolicyIpExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafPolicyIpExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockRequests = this._blockRequests;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ignoreAnomalies !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreAnomalies = this._ignoreAnomalies;
    }
    if (this._ignoreIpreputation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreIpreputation = this._ignoreIpreputation;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMask = this._ipMask;
    }
    if (this._trustedbyPolicybuilder !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedbyPolicybuilder = this._trustedbyPolicybuilder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafPolicyIpExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockRequests = undefined;
      this._description = undefined;
      this._ignoreAnomalies = undefined;
      this._ignoreIpreputation = undefined;
      this._ipAddress = undefined;
      this._ipMask = undefined;
      this._trustedbyPolicybuilder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockRequests = value.blockRequests;
      this._description = value.description;
      this._ignoreAnomalies = value.ignoreAnomalies;
      this._ignoreIpreputation = value.ignoreIpreputation;
      this._ipAddress = value.ipAddress;
      this._ipMask = value.ipMask;
      this._trustedbyPolicybuilder = value.trustedbyPolicybuilder;
    }
  }

  // block_requests - computed: false, optional: true, required: false
  private _blockRequests?: string; 
  public get blockRequests() {
    return this.getStringAttribute('block_requests');
  }
  public set blockRequests(value: string) {
    this._blockRequests = value;
  }
  public resetBlockRequests() {
    this._blockRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockRequestsInput() {
    return this._blockRequests;
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

  // ignore_anomalies - computed: false, optional: true, required: false
  private _ignoreAnomalies?: boolean | cdktf.IResolvable; 
  public get ignoreAnomalies() {
    return this.getBooleanAttribute('ignore_anomalies');
  }
  public set ignoreAnomalies(value: boolean | cdktf.IResolvable) {
    this._ignoreAnomalies = value;
  }
  public resetIgnoreAnomalies() {
    this._ignoreAnomalies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAnomaliesInput() {
    return this._ignoreAnomalies;
  }

  // ignore_ipreputation - computed: false, optional: true, required: false
  private _ignoreIpreputation?: boolean | cdktf.IResolvable; 
  public get ignoreIpreputation() {
    return this.getBooleanAttribute('ignore_ipreputation');
  }
  public set ignoreIpreputation(value: boolean | cdktf.IResolvable) {
    this._ignoreIpreputation = value;
  }
  public resetIgnoreIpreputation() {
    this._ignoreIpreputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIpreputationInput() {
    return this._ignoreIpreputation;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_mask - computed: false, optional: false, required: true
  private _ipMask?: string; 
  public get ipMask() {
    return this.getStringAttribute('ip_mask');
  }
  public set ipMask(value: string) {
    this._ipMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaskInput() {
    return this._ipMask;
  }

  // trustedby_policybuilder - computed: false, optional: true, required: false
  private _trustedbyPolicybuilder?: boolean | cdktf.IResolvable; 
  public get trustedbyPolicybuilder() {
    return this.getBooleanAttribute('trustedby_policybuilder');
  }
  public set trustedbyPolicybuilder(value: boolean | cdktf.IResolvable) {
    this._trustedbyPolicybuilder = value;
  }
  public resetTrustedbyPolicybuilder() {
    this._trustedbyPolicybuilder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedbyPolicybuilderInput() {
    return this._trustedbyPolicybuilder;
  }
}

export class WafPolicyIpExceptionsList extends cdktf.ComplexList {
  public internalValue? : WafPolicyIpExceptions[] | cdktf.IResolvable

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
  public get(index: number): WafPolicyIpExceptionsOutputReference {
    return new WafPolicyIpExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafPolicyPolicyBuilder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#learning_mode WafPolicy#learning_mode}
  */
  readonly learningMode?: string;
}

export function wafPolicyPolicyBuilderToTerraform(struct?: WafPolicyPolicyBuilder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    learning_mode: cdktf.stringToTerraform(struct!.learningMode),
  }
}


export function wafPolicyPolicyBuilderToHclTerraform(struct?: WafPolicyPolicyBuilder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    learning_mode: {
      value: cdktf.stringToHclTerraform(struct!.learningMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafPolicyPolicyBuilderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafPolicyPolicyBuilder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._learningMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningMode = this._learningMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafPolicyPolicyBuilder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._learningMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._learningMode = value.learningMode;
    }
  }

  // learning_mode - computed: false, optional: true, required: false
  private _learningMode?: string; 
  public get learningMode() {
    return this.getStringAttribute('learning_mode');
  }
  public set learningMode(value: string) {
    this._learningMode = value;
  }
  public resetLearningMode() {
    this._learningMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningModeInput() {
    return this._learningMode;
  }
}

export class WafPolicyPolicyBuilderList extends cdktf.ComplexList {
  public internalValue? : WafPolicyPolicyBuilder[] | cdktf.IResolvable

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
  public get(index: number): WafPolicyPolicyBuilderOutputReference {
    return new WafPolicyPolicyBuilderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafPolicySignaturesSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#placesignatures_in_staging WafPolicy#placesignatures_in_staging}
  */
  readonly placesignaturesInStaging?: boolean | cdktf.IResolvable;
  /**
  * setting true will enforce all signature from staging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#signature_staging WafPolicy#signature_staging}
  */
  readonly signatureStaging?: boolean | cdktf.IResolvable;
}

export function wafPolicySignaturesSettingsToTerraform(struct?: WafPolicySignaturesSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    placesignatures_in_staging: cdktf.booleanToTerraform(struct!.placesignaturesInStaging),
    signature_staging: cdktf.booleanToTerraform(struct!.signatureStaging),
  }
}


export function wafPolicySignaturesSettingsToHclTerraform(struct?: WafPolicySignaturesSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    placesignatures_in_staging: {
      value: cdktf.booleanToHclTerraform(struct!.placesignaturesInStaging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    signature_staging: {
      value: cdktf.booleanToHclTerraform(struct!.signatureStaging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafPolicySignaturesSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafPolicySignaturesSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placesignaturesInStaging !== undefined) {
      hasAnyValues = true;
      internalValueResult.placesignaturesInStaging = this._placesignaturesInStaging;
    }
    if (this._signatureStaging !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureStaging = this._signatureStaging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafPolicySignaturesSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._placesignaturesInStaging = undefined;
      this._signatureStaging = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._placesignaturesInStaging = value.placesignaturesInStaging;
      this._signatureStaging = value.signatureStaging;
    }
  }

  // placesignatures_in_staging - computed: false, optional: true, required: false
  private _placesignaturesInStaging?: boolean | cdktf.IResolvable; 
  public get placesignaturesInStaging() {
    return this.getBooleanAttribute('placesignatures_in_staging');
  }
  public set placesignaturesInStaging(value: boolean | cdktf.IResolvable) {
    this._placesignaturesInStaging = value;
  }
  public resetPlacesignaturesInStaging() {
    this._placesignaturesInStaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placesignaturesInStagingInput() {
    return this._placesignaturesInStaging;
  }

  // signature_staging - computed: false, optional: true, required: false
  private _signatureStaging?: boolean | cdktf.IResolvable; 
  public get signatureStaging() {
    return this.getBooleanAttribute('signature_staging');
  }
  public set signatureStaging(value: boolean | cdktf.IResolvable) {
    this._signatureStaging = value;
  }
  public resetSignatureStaging() {
    this._signatureStaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureStagingInput() {
    return this._signatureStaging;
  }
}

export class WafPolicySignaturesSettingsList extends cdktf.ComplexList {
  public internalValue? : WafPolicySignaturesSettings[] | cdktf.IResolvable

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
  public get(index: number): WafPolicySignaturesSettingsOutputReference {
    return new WafPolicySignaturesSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy bigip_waf_policy}
*/
export class WafPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_waf_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafPolicy to import
  * @param importFromId The id of the existing WafPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_waf_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/waf_policy bigip_waf_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: WafPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_waf_policy',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationLanguage = config.applicationLanguage;
    this._caseInsensitive = config.caseInsensitive;
    this._description = config.description;
    this._enablePassivemode = config.enablePassivemode;
    this._enforcementMode = config.enforcementMode;
    this._id = config.id;
    this._modifications = config.modifications;
    this._name = config.name;
    this._openApiFiles = config.openApiFiles;
    this._parameters = config.parameters;
    this._partition = config.partition;
    this._policyId = config.policyId;
    this._policyImportJson = config.policyImportJson;
    this._protocolIndependent = config.protocolIndependent;
    this._serverTechnologies = config.serverTechnologies;
    this._signatureSets = config.signatureSets;
    this._signatures = config.signatures;
    this._templateLink = config.templateLink;
    this._templateName = config.templateName;
    this._type = config.type;
    this._urls = config.urls;
    this._fileTypes.internalValue = config.fileTypes;
    this._graphqlProfiles.internalValue = config.graphqlProfiles;
    this._hostNames.internalValue = config.hostNames;
    this._ipExceptions.internalValue = config.ipExceptions;
    this._policyBuilder.internalValue = config.policyBuilder;
    this._signaturesSettings.internalValue = config.signaturesSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_language - computed: false, optional: true, required: false
  private _applicationLanguage?: string; 
  public get applicationLanguage() {
    return this.getStringAttribute('application_language');
  }
  public set applicationLanguage(value: string) {
    this._applicationLanguage = value;
  }
  public resetApplicationLanguage() {
    this._applicationLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLanguageInput() {
    return this._applicationLanguage;
  }

  // case_insensitive - computed: false, optional: true, required: false
  private _caseInsensitive?: boolean | cdktf.IResolvable; 
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }
  public set caseInsensitive(value: boolean | cdktf.IResolvable) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive;
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

  // enable_passivemode - computed: false, optional: true, required: false
  private _enablePassivemode?: boolean | cdktf.IResolvable; 
  public get enablePassivemode() {
    return this.getBooleanAttribute('enable_passivemode');
  }
  public set enablePassivemode(value: boolean | cdktf.IResolvable) {
    this._enablePassivemode = value;
  }
  public resetEnablePassivemode() {
    this._enablePassivemode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePassivemodeInput() {
    return this._enablePassivemode;
  }

  // enforcement_mode - computed: false, optional: true, required: false
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
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

  // modifications - computed: false, optional: true, required: false
  private _modifications?: string[]; 
  public get modifications() {
    return this.getListAttribute('modifications');
  }
  public set modifications(value: string[]) {
    this._modifications = value;
  }
  public resetModifications() {
    this._modifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modificationsInput() {
    return this._modifications;
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

  // open_api_files - computed: false, optional: true, required: false
  private _openApiFiles?: string[]; 
  public get openApiFiles() {
    return this.getListAttribute('open_api_files');
  }
  public set openApiFiles(value: string[]) {
    this._openApiFiles = value;
  }
  public resetOpenApiFiles() {
    this._openApiFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiFilesInput() {
    return this._openApiFiles;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // policy_export_json - computed: true, optional: false, required: false
  public get policyExportJson() {
    return this.getStringAttribute('policy_export_json');
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policy_import_json - computed: false, optional: true, required: false
  private _policyImportJson?: string; 
  public get policyImportJson() {
    return this.getStringAttribute('policy_import_json');
  }
  public set policyImportJson(value: string) {
    this._policyImportJson = value;
  }
  public resetPolicyImportJson() {
    this._policyImportJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyImportJsonInput() {
    return this._policyImportJson;
  }

  // protocol_independent - computed: false, optional: true, required: false
  private _protocolIndependent?: boolean | cdktf.IResolvable; 
  public get protocolIndependent() {
    return this.getBooleanAttribute('protocol_independent');
  }
  public set protocolIndependent(value: boolean | cdktf.IResolvable) {
    this._protocolIndependent = value;
  }
  public resetProtocolIndependent() {
    this._protocolIndependent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIndependentInput() {
    return this._protocolIndependent;
  }

  // server_technologies - computed: false, optional: true, required: false
  private _serverTechnologies?: string[]; 
  public get serverTechnologies() {
    return this.getListAttribute('server_technologies');
  }
  public set serverTechnologies(value: string[]) {
    this._serverTechnologies = value;
  }
  public resetServerTechnologies() {
    this._serverTechnologies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTechnologiesInput() {
    return this._serverTechnologies;
  }

  // signature_sets - computed: false, optional: true, required: false
  private _signatureSets?: string[]; 
  public get signatureSets() {
    return this.getListAttribute('signature_sets');
  }
  public set signatureSets(value: string[]) {
    this._signatureSets = value;
  }
  public resetSignatureSets() {
    this._signatureSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureSetsInput() {
    return this._signatureSets;
  }

  // signatures - computed: false, optional: true, required: false
  private _signatures?: string[]; 
  public get signatures() {
    return this.getListAttribute('signatures');
  }
  public set signatures(value: string[]) {
    this._signatures = value;
  }
  public resetSignatures() {
    this._signatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturesInput() {
    return this._signatures;
  }

  // template_link - computed: false, optional: true, required: false
  private _templateLink?: string; 
  public get templateLink() {
    return this.getStringAttribute('template_link');
  }
  public set templateLink(value: string) {
    this._templateLink = value;
  }
  public resetTemplateLink() {
    this._templateLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateLinkInput() {
    return this._templateLink;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
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

  // urls - computed: false, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // file_types - computed: false, optional: true, required: false
  private _fileTypes = new WafPolicyFileTypesList(this, "file_types", true);
  public get fileTypes() {
    return this._fileTypes;
  }
  public putFileTypes(value: WafPolicyFileTypes[] | cdktf.IResolvable) {
    this._fileTypes.internalValue = value;
  }
  public resetFileTypes() {
    this._fileTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypesInput() {
    return this._fileTypes.internalValue;
  }

  // graphql_profiles - computed: false, optional: true, required: false
  private _graphqlProfiles = new WafPolicyGraphqlProfilesList(this, "graphql_profiles", true);
  public get graphqlProfiles() {
    return this._graphqlProfiles;
  }
  public putGraphqlProfiles(value: WafPolicyGraphqlProfiles[] | cdktf.IResolvable) {
    this._graphqlProfiles.internalValue = value;
  }
  public resetGraphqlProfiles() {
    this._graphqlProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlProfilesInput() {
    return this._graphqlProfiles.internalValue;
  }

  // host_names - computed: false, optional: true, required: false
  private _hostNames = new WafPolicyHostNamesList(this, "host_names", true);
  public get hostNames() {
    return this._hostNames;
  }
  public putHostNames(value: WafPolicyHostNames[] | cdktf.IResolvable) {
    this._hostNames.internalValue = value;
  }
  public resetHostNames() {
    this._hostNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNamesInput() {
    return this._hostNames.internalValue;
  }

  // ip_exceptions - computed: false, optional: true, required: false
  private _ipExceptions = new WafPolicyIpExceptionsList(this, "ip_exceptions", true);
  public get ipExceptions() {
    return this._ipExceptions;
  }
  public putIpExceptions(value: WafPolicyIpExceptions[] | cdktf.IResolvable) {
    this._ipExceptions.internalValue = value;
  }
  public resetIpExceptions() {
    this._ipExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExceptionsInput() {
    return this._ipExceptions.internalValue;
  }

  // policy_builder - computed: false, optional: true, required: false
  private _policyBuilder = new WafPolicyPolicyBuilderList(this, "policy_builder", true);
  public get policyBuilder() {
    return this._policyBuilder;
  }
  public putPolicyBuilder(value: WafPolicyPolicyBuilder[] | cdktf.IResolvable) {
    this._policyBuilder.internalValue = value;
  }
  public resetPolicyBuilder() {
    this._policyBuilder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBuilderInput() {
    return this._policyBuilder.internalValue;
  }

  // signatures_settings - computed: false, optional: true, required: false
  private _signaturesSettings = new WafPolicySignaturesSettingsList(this, "signatures_settings", true);
  public get signaturesSettings() {
    return this._signaturesSettings;
  }
  public putSignaturesSettings(value: WafPolicySignaturesSettings[] | cdktf.IResolvable) {
    this._signaturesSettings.internalValue = value;
  }
  public resetSignaturesSettings() {
    this._signaturesSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturesSettingsInput() {
    return this._signaturesSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_language: cdktf.stringToTerraform(this._applicationLanguage),
      case_insensitive: cdktf.booleanToTerraform(this._caseInsensitive),
      description: cdktf.stringToTerraform(this._description),
      enable_passivemode: cdktf.booleanToTerraform(this._enablePassivemode),
      enforcement_mode: cdktf.stringToTerraform(this._enforcementMode),
      id: cdktf.stringToTerraform(this._id),
      modifications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._modifications),
      name: cdktf.stringToTerraform(this._name),
      open_api_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._openApiFiles),
      parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._parameters),
      partition: cdktf.stringToTerraform(this._partition),
      policy_id: cdktf.stringToTerraform(this._policyId),
      policy_import_json: cdktf.stringToTerraform(this._policyImportJson),
      protocol_independent: cdktf.booleanToTerraform(this._protocolIndependent),
      server_technologies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverTechnologies),
      signature_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._signatureSets),
      signatures: cdktf.listMapper(cdktf.stringToTerraform, false)(this._signatures),
      template_link: cdktf.stringToTerraform(this._templateLink),
      template_name: cdktf.stringToTerraform(this._templateName),
      type: cdktf.stringToTerraform(this._type),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
      file_types: cdktf.listMapper(wafPolicyFileTypesToTerraform, true)(this._fileTypes.internalValue),
      graphql_profiles: cdktf.listMapper(wafPolicyGraphqlProfilesToTerraform, true)(this._graphqlProfiles.internalValue),
      host_names: cdktf.listMapper(wafPolicyHostNamesToTerraform, true)(this._hostNames.internalValue),
      ip_exceptions: cdktf.listMapper(wafPolicyIpExceptionsToTerraform, true)(this._ipExceptions.internalValue),
      policy_builder: cdktf.listMapper(wafPolicyPolicyBuilderToTerraform, true)(this._policyBuilder.internalValue),
      signatures_settings: cdktf.listMapper(wafPolicySignaturesSettingsToTerraform, true)(this._signaturesSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_language: {
        value: cdktf.stringToHclTerraform(this._applicationLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      case_insensitive: {
        value: cdktf.booleanToHclTerraform(this._caseInsensitive),
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
      enable_passivemode: {
        value: cdktf.booleanToHclTerraform(this._enablePassivemode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforcement_mode: {
        value: cdktf.stringToHclTerraform(this._enforcementMode),
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
      modifications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._modifications),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_api_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._openApiFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      parameters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._parameters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_import_json: {
        value: cdktf.stringToHclTerraform(this._policyImportJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_independent: {
        value: cdktf.booleanToHclTerraform(this._protocolIndependent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_technologies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverTechnologies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      signature_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._signatureSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      signatures: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._signatures),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      template_link: {
        value: cdktf.stringToHclTerraform(this._templateLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
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
      urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      file_types: {
        value: cdktf.listMapperHcl(wafPolicyFileTypesToHclTerraform, true)(this._fileTypes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafPolicyFileTypesList",
      },
      graphql_profiles: {
        value: cdktf.listMapperHcl(wafPolicyGraphqlProfilesToHclTerraform, true)(this._graphqlProfiles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafPolicyGraphqlProfilesList",
      },
      host_names: {
        value: cdktf.listMapperHcl(wafPolicyHostNamesToHclTerraform, true)(this._hostNames.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafPolicyHostNamesList",
      },
      ip_exceptions: {
        value: cdktf.listMapperHcl(wafPolicyIpExceptionsToHclTerraform, true)(this._ipExceptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafPolicyIpExceptionsList",
      },
      policy_builder: {
        value: cdktf.listMapperHcl(wafPolicyPolicyBuilderToHclTerraform, true)(this._policyBuilder.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafPolicyPolicyBuilderList",
      },
      signatures_settings: {
        value: cdktf.listMapperHcl(wafPolicySignaturesSettingsToHclTerraform, true)(this._signaturesSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafPolicySignaturesSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
