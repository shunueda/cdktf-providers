// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenApiExplorerApiMcpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#assume_role_extra_policy OpenApiExplorerApiMcpServer#assume_role_extra_policy}
  */
  readonly assumeRoleExtraPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#assume_role_name OpenApiExplorerApiMcpServer#assume_role_name}
  */
  readonly assumeRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#description OpenApiExplorerApiMcpServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#enable_assume_role OpenApiExplorerApiMcpServer#enable_assume_role}
  */
  readonly enableAssumeRole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#enable_custom_vpc_whitelist OpenApiExplorerApiMcpServer#enable_custom_vpc_whitelist}
  */
  readonly enableCustomVpcWhitelist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#id OpenApiExplorerApiMcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#instructions OpenApiExplorerApiMcpServer#instructions}
  */
  readonly instructions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#language OpenApiExplorerApiMcpServer#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#name OpenApiExplorerApiMcpServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#oauth_client_id OpenApiExplorerApiMcpServer#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#public_access OpenApiExplorerApiMcpServer#public_access}
  */
  readonly publicAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#system_tools OpenApiExplorerApiMcpServer#system_tools}
  */
  readonly systemTools?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#vpc_whitelists OpenApiExplorerApiMcpServer#vpc_whitelists}
  */
  readonly vpcWhitelists?: string[];
  /**
  * additional_api_descriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#additional_api_descriptions OpenApiExplorerApiMcpServer#additional_api_descriptions}
  */
  readonly additionalApiDescriptions?: OpenApiExplorerApiMcpServerAdditionalApiDescriptions[] | cdktf.IResolvable;
  /**
  * apis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#apis OpenApiExplorerApiMcpServer#apis}
  */
  readonly apis: OpenApiExplorerApiMcpServerApis[] | cdktf.IResolvable;
  /**
  * prompts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#prompts OpenApiExplorerApiMcpServer#prompts}
  */
  readonly prompts?: OpenApiExplorerApiMcpServerPrompts[] | cdktf.IResolvable;
  /**
  * terraform_tools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#terraform_tools OpenApiExplorerApiMcpServer#terraform_tools}
  */
  readonly terraformTools?: OpenApiExplorerApiMcpServerTerraformTools[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#timeouts OpenApiExplorerApiMcpServer#timeouts}
  */
  readonly timeouts?: OpenApiExplorerApiMcpServerTimeouts;
}
export interface OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#key OpenApiExplorerApiMcpServer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#value OpenApiExplorerApiMcpServer#value}
  */
  readonly value?: string;
}

export function openApiExplorerApiMcpServerAdditionalApiDescriptionsConstParametersToTerraform(struct?: OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openApiExplorerApiMcpServerAdditionalApiDescriptionsConstParametersToHclTerraform(struct?: OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParametersList extends cdktf.ComplexList {
  public internalValue? : OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParameters[] | cdktf.IResolvable

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
  public get(index: number): OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParametersOutputReference {
    return new OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenApiExplorerApiMcpServerAdditionalApiDescriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#api_name OpenApiExplorerApiMcpServer#api_name}
  */
  readonly apiName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#api_override_json OpenApiExplorerApiMcpServer#api_override_json}
  */
  readonly apiOverrideJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#api_version OpenApiExplorerApiMcpServer#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#enable_output_schema OpenApiExplorerApiMcpServer#enable_output_schema}
  */
  readonly enableOutputSchema?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#execute_cli_command OpenApiExplorerApiMcpServer#execute_cli_command}
  */
  readonly executeCliCommand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#product OpenApiExplorerApiMcpServer#product}
  */
  readonly product?: string;
  /**
  * const_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#const_parameters OpenApiExplorerApiMcpServer#const_parameters}
  */
  readonly constParameters?: OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParameters[] | cdktf.IResolvable;
}

export function openApiExplorerApiMcpServerAdditionalApiDescriptionsToTerraform(struct?: OpenApiExplorerApiMcpServerAdditionalApiDescriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_name: cdktf.stringToTerraform(struct!.apiName),
    api_override_json: cdktf.stringToTerraform(struct!.apiOverrideJson),
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    enable_output_schema: cdktf.booleanToTerraform(struct!.enableOutputSchema),
    execute_cli_command: cdktf.booleanToTerraform(struct!.executeCliCommand),
    product: cdktf.stringToTerraform(struct!.product),
    const_parameters: cdktf.listMapper(openApiExplorerApiMcpServerAdditionalApiDescriptionsConstParametersToTerraform, true)(struct!.constParameters),
  }
}


export function openApiExplorerApiMcpServerAdditionalApiDescriptionsToHclTerraform(struct?: OpenApiExplorerApiMcpServerAdditionalApiDescriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_name: {
      value: cdktf.stringToHclTerraform(struct!.apiName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_override_json: {
      value: cdktf.stringToHclTerraform(struct!.apiOverrideJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_output_schema: {
      value: cdktf.booleanToHclTerraform(struct!.enableOutputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execute_cli_command: {
      value: cdktf.booleanToHclTerraform(struct!.executeCliCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    const_parameters: {
      value: cdktf.listMapperHcl(openApiExplorerApiMcpServerAdditionalApiDescriptionsConstParametersToHclTerraform, true)(struct!.constParameters),
      isBlock: true,
      type: "set",
      storageClassType: "OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenApiExplorerApiMcpServerAdditionalApiDescriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenApiExplorerApiMcpServerAdditionalApiDescriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiName = this._apiName;
    }
    if (this._apiOverrideJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiOverrideJson = this._apiOverrideJson;
    }
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._enableOutputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOutputSchema = this._enableOutputSchema;
    }
    if (this._executeCliCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeCliCommand = this._executeCliCommand;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._constParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constParameters = this._constParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenApiExplorerApiMcpServerAdditionalApiDescriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiName = undefined;
      this._apiOverrideJson = undefined;
      this._apiVersion = undefined;
      this._enableOutputSchema = undefined;
      this._executeCliCommand = undefined;
      this._product = undefined;
      this._constParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiName = value.apiName;
      this._apiOverrideJson = value.apiOverrideJson;
      this._apiVersion = value.apiVersion;
      this._enableOutputSchema = value.enableOutputSchema;
      this._executeCliCommand = value.executeCliCommand;
      this._product = value.product;
      this._constParameters.internalValue = value.constParameters;
    }
  }

  // api_name - computed: false, optional: true, required: false
  private _apiName?: string; 
  public get apiName() {
    return this.getStringAttribute('api_name');
  }
  public set apiName(value: string) {
    this._apiName = value;
  }
  public resetApiName() {
    this._apiName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiNameInput() {
    return this._apiName;
  }

  // api_override_json - computed: false, optional: true, required: false
  private _apiOverrideJson?: string; 
  public get apiOverrideJson() {
    return this.getStringAttribute('api_override_json');
  }
  public set apiOverrideJson(value: string) {
    this._apiOverrideJson = value;
  }
  public resetApiOverrideJson() {
    this._apiOverrideJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiOverrideJsonInput() {
    return this._apiOverrideJson;
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // enable_output_schema - computed: false, optional: true, required: false
  private _enableOutputSchema?: boolean | cdktf.IResolvable; 
  public get enableOutputSchema() {
    return this.getBooleanAttribute('enable_output_schema');
  }
  public set enableOutputSchema(value: boolean | cdktf.IResolvable) {
    this._enableOutputSchema = value;
  }
  public resetEnableOutputSchema() {
    this._enableOutputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOutputSchemaInput() {
    return this._enableOutputSchema;
  }

  // execute_cli_command - computed: false, optional: true, required: false
  private _executeCliCommand?: boolean | cdktf.IResolvable; 
  public get executeCliCommand() {
    return this.getBooleanAttribute('execute_cli_command');
  }
  public set executeCliCommand(value: boolean | cdktf.IResolvable) {
    this._executeCliCommand = value;
  }
  public resetExecuteCliCommand() {
    this._executeCliCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeCliCommandInput() {
    return this._executeCliCommand;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // const_parameters - computed: false, optional: true, required: false
  private _constParameters = new OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParametersList(this, "const_parameters", true);
  public get constParameters() {
    return this._constParameters;
  }
  public putConstParameters(value: OpenApiExplorerApiMcpServerAdditionalApiDescriptionsConstParameters[] | cdktf.IResolvable) {
    this._constParameters.internalValue = value;
  }
  public resetConstParameters() {
    this._constParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constParametersInput() {
    return this._constParameters.internalValue;
  }
}

export class OpenApiExplorerApiMcpServerAdditionalApiDescriptionsList extends cdktf.ComplexList {
  public internalValue? : OpenApiExplorerApiMcpServerAdditionalApiDescriptions[] | cdktf.IResolvable

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
  public get(index: number): OpenApiExplorerApiMcpServerAdditionalApiDescriptionsOutputReference {
    return new OpenApiExplorerApiMcpServerAdditionalApiDescriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenApiExplorerApiMcpServerApis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#api_version OpenApiExplorerApiMcpServer#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#product OpenApiExplorerApiMcpServer#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#selectors OpenApiExplorerApiMcpServer#selectors}
  */
  readonly selectors: string[];
}

export function openApiExplorerApiMcpServerApisToTerraform(struct?: OpenApiExplorerApiMcpServerApis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    product: cdktf.stringToTerraform(struct!.product),
    selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectors),
  }
}


export function openApiExplorerApiMcpServerApisToHclTerraform(struct?: OpenApiExplorerApiMcpServerApis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenApiExplorerApiMcpServerApisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenApiExplorerApiMcpServerApis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenApiExplorerApiMcpServerApis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._product = undefined;
      this._selectors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._product = value.product;
      this._selectors = value.selectors;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // selectors - computed: false, optional: false, required: true
  private _selectors?: string[]; 
  public get selectors() {
    return cdktf.Fn.tolist(this.getListAttribute('selectors'));
  }
  public set selectors(value: string[]) {
    this._selectors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
  }
}

export class OpenApiExplorerApiMcpServerApisList extends cdktf.ComplexList {
  public internalValue? : OpenApiExplorerApiMcpServerApis[] | cdktf.IResolvable

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
  public get(index: number): OpenApiExplorerApiMcpServerApisOutputReference {
    return new OpenApiExplorerApiMcpServerApisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenApiExplorerApiMcpServerPromptsArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#description OpenApiExplorerApiMcpServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#name OpenApiExplorerApiMcpServer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#required OpenApiExplorerApiMcpServer#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function openApiExplorerApiMcpServerPromptsArgumentsToTerraform(struct?: OpenApiExplorerApiMcpServerPromptsArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function openApiExplorerApiMcpServerPromptsArgumentsToHclTerraform(struct?: OpenApiExplorerApiMcpServerPromptsArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenApiExplorerApiMcpServerPromptsArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenApiExplorerApiMcpServerPromptsArguments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenApiExplorerApiMcpServerPromptsArguments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._required = value.required;
    }
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}

export class OpenApiExplorerApiMcpServerPromptsArgumentsList extends cdktf.ComplexList {
  public internalValue? : OpenApiExplorerApiMcpServerPromptsArguments[] | cdktf.IResolvable

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
  public get(index: number): OpenApiExplorerApiMcpServerPromptsArgumentsOutputReference {
    return new OpenApiExplorerApiMcpServerPromptsArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenApiExplorerApiMcpServerPrompts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#content OpenApiExplorerApiMcpServer#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#description OpenApiExplorerApiMcpServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#name OpenApiExplorerApiMcpServer#name}
  */
  readonly name?: string;
  /**
  * arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#arguments OpenApiExplorerApiMcpServer#arguments}
  */
  readonly arguments?: OpenApiExplorerApiMcpServerPromptsArguments[] | cdktf.IResolvable;
}

export function openApiExplorerApiMcpServerPromptsToTerraform(struct?: OpenApiExplorerApiMcpServerPrompts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    arguments: cdktf.listMapper(openApiExplorerApiMcpServerPromptsArgumentsToTerraform, true)(struct!.arguments),
  }
}


export function openApiExplorerApiMcpServerPromptsToHclTerraform(struct?: OpenApiExplorerApiMcpServerPrompts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arguments: {
      value: cdktf.listMapperHcl(openApiExplorerApiMcpServerPromptsArgumentsToHclTerraform, true)(struct!.arguments),
      isBlock: true,
      type: "set",
      storageClassType: "OpenApiExplorerApiMcpServerPromptsArgumentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenApiExplorerApiMcpServerPromptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenApiExplorerApiMcpServerPrompts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._arguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenApiExplorerApiMcpServerPrompts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._description = undefined;
      this._name = undefined;
      this._arguments.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._description = value.description;
      this._name = value.name;
      this._arguments.internalValue = value.arguments;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // arguments - computed: false, optional: true, required: false
  private _arguments = new OpenApiExplorerApiMcpServerPromptsArgumentsList(this, "arguments", true);
  public get arguments() {
    return this._arguments;
  }
  public putArguments(value: OpenApiExplorerApiMcpServerPromptsArguments[] | cdktf.IResolvable) {
    this._arguments.internalValue = value;
  }
  public resetArguments() {
    this._arguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments.internalValue;
  }
}

export class OpenApiExplorerApiMcpServerPromptsList extends cdktf.ComplexList {
  public internalValue? : OpenApiExplorerApiMcpServerPrompts[] | cdktf.IResolvable

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
  public get(index: number): OpenApiExplorerApiMcpServerPromptsOutputReference {
    return new OpenApiExplorerApiMcpServerPromptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenApiExplorerApiMcpServerTerraformTools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#async OpenApiExplorerApiMcpServer#async}
  */
  readonly async?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#code OpenApiExplorerApiMcpServer#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#description OpenApiExplorerApiMcpServer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#destroy_policy OpenApiExplorerApiMcpServer#destroy_policy}
  */
  readonly destroyPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#name OpenApiExplorerApiMcpServer#name}
  */
  readonly name?: string;
}

export function openApiExplorerApiMcpServerTerraformToolsToTerraform(struct?: OpenApiExplorerApiMcpServerTerraformTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async: cdktf.booleanToTerraform(struct!.async),
    code: cdktf.stringToTerraform(struct!.code),
    description: cdktf.stringToTerraform(struct!.description),
    destroy_policy: cdktf.stringToTerraform(struct!.destroyPolicy),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function openApiExplorerApiMcpServerTerraformToolsToHclTerraform(struct?: OpenApiExplorerApiMcpServerTerraformTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async: {
      value: cdktf.booleanToHclTerraform(struct!.async),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
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
    destroy_policy: {
      value: cdktf.stringToHclTerraform(struct!.destroyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class OpenApiExplorerApiMcpServerTerraformToolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenApiExplorerApiMcpServerTerraformTools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._async !== undefined) {
      hasAnyValues = true;
      internalValueResult.async = this._async;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destroyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.destroyPolicy = this._destroyPolicy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenApiExplorerApiMcpServerTerraformTools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._async = undefined;
      this._code = undefined;
      this._description = undefined;
      this._destroyPolicy = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._async = value.async;
      this._code = value.code;
      this._description = value.description;
      this._destroyPolicy = value.destroyPolicy;
      this._name = value.name;
    }
  }

  // async - computed: false, optional: true, required: false
  private _async?: boolean | cdktf.IResolvable; 
  public get async() {
    return this.getBooleanAttribute('async');
  }
  public set async(value: boolean | cdktf.IResolvable) {
    this._async = value;
  }
  public resetAsync() {
    this._async = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInput() {
    return this._async;
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // destroy_policy - computed: false, optional: true, required: false
  private _destroyPolicy?: string; 
  public get destroyPolicy() {
    return this.getStringAttribute('destroy_policy');
  }
  public set destroyPolicy(value: string) {
    this._destroyPolicy = value;
  }
  public resetDestroyPolicy() {
    this._destroyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyPolicyInput() {
    return this._destroyPolicy;
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

export class OpenApiExplorerApiMcpServerTerraformToolsList extends cdktf.ComplexList {
  public internalValue? : OpenApiExplorerApiMcpServerTerraformTools[] | cdktf.IResolvable

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
  public get(index: number): OpenApiExplorerApiMcpServerTerraformToolsOutputReference {
    return new OpenApiExplorerApiMcpServerTerraformToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenApiExplorerApiMcpServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#create OpenApiExplorerApiMcpServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#delete OpenApiExplorerApiMcpServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#update OpenApiExplorerApiMcpServer#update}
  */
  readonly update?: string;
}

export function openApiExplorerApiMcpServerTimeoutsToTerraform(struct?: OpenApiExplorerApiMcpServerTimeouts | cdktf.IResolvable): any {
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


export function openApiExplorerApiMcpServerTimeoutsToHclTerraform(struct?: OpenApiExplorerApiMcpServerTimeouts | cdktf.IResolvable): any {
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

export class OpenApiExplorerApiMcpServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpenApiExplorerApiMcpServerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenApiExplorerApiMcpServerTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server alicloud_open_api_explorer_api_mcp_server}
*/
export class OpenApiExplorerApiMcpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_open_api_explorer_api_mcp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenApiExplorerApiMcpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenApiExplorerApiMcpServer to import
  * @param importFromId The id of the existing OpenApiExplorerApiMcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenApiExplorerApiMcpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_open_api_explorer_api_mcp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_api_explorer_api_mcp_server alicloud_open_api_explorer_api_mcp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenApiExplorerApiMcpServerConfig
  */
  public constructor(scope: Construct, id: string, config: OpenApiExplorerApiMcpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_open_api_explorer_api_mcp_server',
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
    this._assumeRoleExtraPolicy = config.assumeRoleExtraPolicy;
    this._assumeRoleName = config.assumeRoleName;
    this._description = config.description;
    this._enableAssumeRole = config.enableAssumeRole;
    this._enableCustomVpcWhitelist = config.enableCustomVpcWhitelist;
    this._id = config.id;
    this._instructions = config.instructions;
    this._language = config.language;
    this._name = config.name;
    this._oauthClientId = config.oauthClientId;
    this._publicAccess = config.publicAccess;
    this._systemTools = config.systemTools;
    this._vpcWhitelists = config.vpcWhitelists;
    this._additionalApiDescriptions.internalValue = config.additionalApiDescriptions;
    this._apis.internalValue = config.apis;
    this._prompts.internalValue = config.prompts;
    this._terraformTools.internalValue = config.terraformTools;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assume_role_extra_policy - computed: false, optional: true, required: false
  private _assumeRoleExtraPolicy?: string; 
  public get assumeRoleExtraPolicy() {
    return this.getStringAttribute('assume_role_extra_policy');
  }
  public set assumeRoleExtraPolicy(value: string) {
    this._assumeRoleExtraPolicy = value;
  }
  public resetAssumeRoleExtraPolicy() {
    this._assumeRoleExtraPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleExtraPolicyInput() {
    return this._assumeRoleExtraPolicy;
  }

  // assume_role_name - computed: false, optional: true, required: false
  private _assumeRoleName?: string; 
  public get assumeRoleName() {
    return this.getStringAttribute('assume_role_name');
  }
  public set assumeRoleName(value: string) {
    this._assumeRoleName = value;
  }
  public resetAssumeRoleName() {
    this._assumeRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleNameInput() {
    return this._assumeRoleName;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // enable_assume_role - computed: false, optional: true, required: false
  private _enableAssumeRole?: boolean | cdktf.IResolvable; 
  public get enableAssumeRole() {
    return this.getBooleanAttribute('enable_assume_role');
  }
  public set enableAssumeRole(value: boolean | cdktf.IResolvable) {
    this._enableAssumeRole = value;
  }
  public resetEnableAssumeRole() {
    this._enableAssumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAssumeRoleInput() {
    return this._enableAssumeRole;
  }

  // enable_custom_vpc_whitelist - computed: false, optional: true, required: false
  private _enableCustomVpcWhitelist?: boolean | cdktf.IResolvable; 
  public get enableCustomVpcWhitelist() {
    return this.getBooleanAttribute('enable_custom_vpc_whitelist');
  }
  public set enableCustomVpcWhitelist(value: boolean | cdktf.IResolvable) {
    this._enableCustomVpcWhitelist = value;
  }
  public resetEnableCustomVpcWhitelist() {
    this._enableCustomVpcWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCustomVpcWhitelistInput() {
    return this._enableCustomVpcWhitelist;
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

  // instructions - computed: false, optional: true, required: false
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  public resetInstructions() {
    this._instructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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

  // oauth_client_id - computed: false, optional: true, required: false
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess?: string; 
  public get publicAccess() {
    return this.getStringAttribute('public_access');
  }
  public set publicAccess(value: string) {
    this._publicAccess = value;
  }
  public resetPublicAccess() {
    this._publicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess;
  }

  // system_tools - computed: false, optional: true, required: false
  private _systemTools?: string[]; 
  public get systemTools() {
    return cdktf.Fn.tolist(this.getListAttribute('system_tools'));
  }
  public set systemTools(value: string[]) {
    this._systemTools = value;
  }
  public resetSystemTools() {
    this._systemTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemToolsInput() {
    return this._systemTools;
  }

  // vpc_whitelists - computed: false, optional: true, required: false
  private _vpcWhitelists?: string[]; 
  public get vpcWhitelists() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_whitelists'));
  }
  public set vpcWhitelists(value: string[]) {
    this._vpcWhitelists = value;
  }
  public resetVpcWhitelists() {
    this._vpcWhitelists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcWhitelistsInput() {
    return this._vpcWhitelists;
  }

  // additional_api_descriptions - computed: false, optional: true, required: false
  private _additionalApiDescriptions = new OpenApiExplorerApiMcpServerAdditionalApiDescriptionsList(this, "additional_api_descriptions", true);
  public get additionalApiDescriptions() {
    return this._additionalApiDescriptions;
  }
  public putAdditionalApiDescriptions(value: OpenApiExplorerApiMcpServerAdditionalApiDescriptions[] | cdktf.IResolvable) {
    this._additionalApiDescriptions.internalValue = value;
  }
  public resetAdditionalApiDescriptions() {
    this._additionalApiDescriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalApiDescriptionsInput() {
    return this._additionalApiDescriptions.internalValue;
  }

  // apis - computed: false, optional: false, required: true
  private _apis = new OpenApiExplorerApiMcpServerApisList(this, "apis", true);
  public get apis() {
    return this._apis;
  }
  public putApis(value: OpenApiExplorerApiMcpServerApis[] | cdktf.IResolvable) {
    this._apis.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apisInput() {
    return this._apis.internalValue;
  }

  // prompts - computed: false, optional: true, required: false
  private _prompts = new OpenApiExplorerApiMcpServerPromptsList(this, "prompts", true);
  public get prompts() {
    return this._prompts;
  }
  public putPrompts(value: OpenApiExplorerApiMcpServerPrompts[] | cdktf.IResolvable) {
    this._prompts.internalValue = value;
  }
  public resetPrompts() {
    this._prompts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptsInput() {
    return this._prompts.internalValue;
  }

  // terraform_tools - computed: false, optional: true, required: false
  private _terraformTools = new OpenApiExplorerApiMcpServerTerraformToolsList(this, "terraform_tools", true);
  public get terraformTools() {
    return this._terraformTools;
  }
  public putTerraformTools(value: OpenApiExplorerApiMcpServerTerraformTools[] | cdktf.IResolvable) {
    this._terraformTools.internalValue = value;
  }
  public resetTerraformTools() {
    this._terraformTools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformToolsInput() {
    return this._terraformTools.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpenApiExplorerApiMcpServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpenApiExplorerApiMcpServerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assume_role_extra_policy: cdktf.stringToTerraform(this._assumeRoleExtraPolicy),
      assume_role_name: cdktf.stringToTerraform(this._assumeRoleName),
      description: cdktf.stringToTerraform(this._description),
      enable_assume_role: cdktf.booleanToTerraform(this._enableAssumeRole),
      enable_custom_vpc_whitelist: cdktf.booleanToTerraform(this._enableCustomVpcWhitelist),
      id: cdktf.stringToTerraform(this._id),
      instructions: cdktf.stringToTerraform(this._instructions),
      language: cdktf.stringToTerraform(this._language),
      name: cdktf.stringToTerraform(this._name),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      public_access: cdktf.stringToTerraform(this._publicAccess),
      system_tools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemTools),
      vpc_whitelists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcWhitelists),
      additional_api_descriptions: cdktf.listMapper(openApiExplorerApiMcpServerAdditionalApiDescriptionsToTerraform, true)(this._additionalApiDescriptions.internalValue),
      apis: cdktf.listMapper(openApiExplorerApiMcpServerApisToTerraform, true)(this._apis.internalValue),
      prompts: cdktf.listMapper(openApiExplorerApiMcpServerPromptsToTerraform, true)(this._prompts.internalValue),
      terraform_tools: cdktf.listMapper(openApiExplorerApiMcpServerTerraformToolsToTerraform, true)(this._terraformTools.internalValue),
      timeouts: openApiExplorerApiMcpServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assume_role_extra_policy: {
        value: cdktf.stringToHclTerraform(this._assumeRoleExtraPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role_name: {
        value: cdktf.stringToHclTerraform(this._assumeRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_assume_role: {
        value: cdktf.booleanToHclTerraform(this._enableAssumeRole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_custom_vpc_whitelist: {
        value: cdktf.booleanToHclTerraform(this._enableCustomVpcWhitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instructions: {
        value: cdktf.stringToHclTerraform(this._instructions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
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
      oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_access: {
        value: cdktf.stringToHclTerraform(this._publicAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_tools: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemTools),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_whitelists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcWhitelists),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      additional_api_descriptions: {
        value: cdktf.listMapperHcl(openApiExplorerApiMcpServerAdditionalApiDescriptionsToHclTerraform, true)(this._additionalApiDescriptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenApiExplorerApiMcpServerAdditionalApiDescriptionsList",
      },
      apis: {
        value: cdktf.listMapperHcl(openApiExplorerApiMcpServerApisToHclTerraform, true)(this._apis.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenApiExplorerApiMcpServerApisList",
      },
      prompts: {
        value: cdktf.listMapperHcl(openApiExplorerApiMcpServerPromptsToHclTerraform, true)(this._prompts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenApiExplorerApiMcpServerPromptsList",
      },
      terraform_tools: {
        value: cdktf.listMapperHcl(openApiExplorerApiMcpServerTerraformToolsToHclTerraform, true)(this._terraformTools.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenApiExplorerApiMcpServerTerraformToolsList",
      },
      timeouts: {
        value: openApiExplorerApiMcpServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpenApiExplorerApiMcpServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
