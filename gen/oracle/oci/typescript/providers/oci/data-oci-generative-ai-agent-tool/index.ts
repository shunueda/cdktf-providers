// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_tool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGenerativeAiAgentToolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_tool#tool_id DataOciGenerativeAiAgentTool#tool_id}
  */
  readonly toolId: string;
}
export interface DataOciGenerativeAiAgentToolToolConfigApiSchema {
}

export function dataOciGenerativeAiAgentToolToolConfigApiSchemaToTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigApiSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentToolToolConfigApiSchemaToHclTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigApiSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentToolToolConfigApiSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentToolToolConfigApiSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentToolToolConfigApiSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_schema_input_location_type - computed: true, optional: false, required: false
  public get apiSchemaInputLocationType() {
    return this.getStringAttribute('api_schema_input_location_type');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export class DataOciGenerativeAiAgentToolToolConfigApiSchemaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentToolToolConfigApiSchemaOutputReference {
    return new DataOciGenerativeAiAgentToolToolConfigApiSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentToolToolConfigDatabaseConnection {
}

export function dataOciGenerativeAiAgentToolToolConfigDatabaseConnectionToTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigDatabaseConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentToolToolConfigDatabaseConnectionToHclTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigDatabaseConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentToolToolConfigDatabaseConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentToolToolConfigDatabaseConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentToolToolConfigDatabaseConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
}

export class DataOciGenerativeAiAgentToolToolConfigDatabaseConnectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentToolToolConfigDatabaseConnectionOutputReference {
    return new DataOciGenerativeAiAgentToolToolConfigDatabaseConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentToolToolConfigDatabaseSchema {
}

export function dataOciGenerativeAiAgentToolToolConfigDatabaseSchemaToTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigDatabaseSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentToolToolConfigDatabaseSchemaToHclTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigDatabaseSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentToolToolConfigDatabaseSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentToolToolConfigDatabaseSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentToolToolConfigDatabaseSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // input_location_type - computed: true, optional: false, required: false
  public get inputLocationType() {
    return this.getStringAttribute('input_location_type');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataOciGenerativeAiAgentToolToolConfigDatabaseSchemaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentToolToolConfigDatabaseSchemaOutputReference {
    return new DataOciGenerativeAiAgentToolToolConfigDatabaseSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentToolToolConfigFunction {
}

export function dataOciGenerativeAiAgentToolToolConfigFunctionToTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentToolToolConfigFunctionToHclTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentToolToolConfigFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentToolToolConfigFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentToolToolConfigFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
}

export class DataOciGenerativeAiAgentToolToolConfigFunctionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentToolToolConfigFunctionOutputReference {
    return new DataOciGenerativeAiAgentToolToolConfigFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentToolToolConfigGenerationLlmCustomization {
}

export function dataOciGenerativeAiAgentToolToolConfigGenerationLlmCustomizationToTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigGenerationLlmCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentToolToolConfigGenerationLlmCustomizationToHclTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigGenerationLlmCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentToolToolConfigGenerationLlmCustomizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentToolToolConfigGenerationLlmCustomization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentToolToolConfigGenerationLlmCustomization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instruction - computed: true, optional: false, required: false
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
}

export class DataOciGenerativeAiAgentToolToolConfigGenerationLlmCustomizationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentToolToolConfigGenerationLlmCustomizationOutputReference {
    return new DataOciGenerativeAiAgentToolToolConfigGenerationLlmCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfig {
}

export function dataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigToTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigToHclTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // http_endpoint_auth_scope_config_type - computed: true, optional: false, required: false
  public get httpEndpointAuthScopeConfigType() {
    return this.getStringAttribute('http_endpoint_auth_scope_config_type');
  }

  // idcs_url - computed: true, optional: false, required: false
  public get idcsUrl() {
    return this.getStringAttribute('idcs_url');
  }

  // key_location - computed: true, optional: false, required: false
  public get keyLocation() {
    return this.getStringAttribute('key_location');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // scope_url - computed: true, optional: false, required: false
  public get scopeUrl() {
    return this.getStringAttribute('scope_url');
  }

  // vault_secret_id - computed: true, optional: false, required: false
  public get vaultSecretId() {
    return this.getStringAttribute('vault_secret_id');
  }
}

export class DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigOutputReference {
    return new DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources {
}

export function dataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesToTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesToHclTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_endpoint_auth_scope - computed: true, optional: false, required: false
  public get httpEndpointAuthScope() {
    return this.getStringAttribute('http_endpoint_auth_scope');
  }

  // http_endpoint_auth_scope_config - computed: true, optional: false, required: false
  private _httpEndpointAuthScopeConfig = new DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigList(this, "http_endpoint_auth_scope_config", false);
  public get httpEndpointAuthScopeConfig() {
    return this._httpEndpointAuthScopeConfig;
  }
}

export class DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesOutputReference {
    return new DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfig {
}

export function dataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigToTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigToHclTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_endpoint_auth_sources - computed: true, optional: false, required: false
  private _httpEndpointAuthSources = new DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesList(this, "http_endpoint_auth_sources", false);
  public get httpEndpointAuthSources() {
    return this._httpEndpointAuthSources;
  }
}

export class DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigOutputReference {
    return new DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentToolToolConfigIclExamples {
}

export function dataOciGenerativeAiAgentToolToolConfigIclExamplesToTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigIclExamples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentToolToolConfigIclExamplesToHclTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigIclExamples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentToolToolConfigIclExamplesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentToolToolConfigIclExamples | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentToolToolConfigIclExamples | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // input_location_type - computed: true, optional: false, required: false
  public get inputLocationType() {
    return this.getStringAttribute('input_location_type');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataOciGenerativeAiAgentToolToolConfigIclExamplesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentToolToolConfigIclExamplesOutputReference {
    return new DataOciGenerativeAiAgentToolToolConfigIclExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentToolToolConfigKnowledgeBaseConfigs {
}

export function dataOciGenerativeAiAgentToolToolConfigKnowledgeBaseConfigsToTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigKnowledgeBaseConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentToolToolConfigKnowledgeBaseConfigsToHclTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigKnowledgeBaseConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentToolToolConfigKnowledgeBaseConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentToolToolConfigKnowledgeBaseConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentToolToolConfigKnowledgeBaseConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // knowledge_base_id - computed: true, optional: false, required: false
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
}

export class DataOciGenerativeAiAgentToolToolConfigKnowledgeBaseConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentToolToolConfigKnowledgeBaseConfigsOutputReference {
    return new DataOciGenerativeAiAgentToolToolConfigKnowledgeBaseConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentToolToolConfigTableAndColumnDescription {
}

export function dataOciGenerativeAiAgentToolToolConfigTableAndColumnDescriptionToTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigTableAndColumnDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentToolToolConfigTableAndColumnDescriptionToHclTerraform(struct?: DataOciGenerativeAiAgentToolToolConfigTableAndColumnDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentToolToolConfigTableAndColumnDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentToolToolConfigTableAndColumnDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentToolToolConfigTableAndColumnDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // input_location_type - computed: true, optional: false, required: false
  public get inputLocationType() {
    return this.getStringAttribute('input_location_type');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataOciGenerativeAiAgentToolToolConfigTableAndColumnDescriptionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentToolToolConfigTableAndColumnDescriptionOutputReference {
    return new DataOciGenerativeAiAgentToolToolConfigTableAndColumnDescriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentToolToolConfig {
}

export function dataOciGenerativeAiAgentToolToolConfigToTerraform(struct?: DataOciGenerativeAiAgentToolToolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentToolToolConfigToHclTerraform(struct?: DataOciGenerativeAiAgentToolToolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentToolToolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentToolToolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentToolToolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_endpoint_id - computed: true, optional: false, required: false
  public get agentEndpointId() {
    return this.getStringAttribute('agent_endpoint_id');
  }

  // api_schema - computed: true, optional: false, required: false
  private _apiSchema = new DataOciGenerativeAiAgentToolToolConfigApiSchemaList(this, "api_schema", false);
  public get apiSchema() {
    return this._apiSchema;
  }

  // database_connection - computed: true, optional: false, required: false
  private _databaseConnection = new DataOciGenerativeAiAgentToolToolConfigDatabaseConnectionList(this, "database_connection", false);
  public get databaseConnection() {
    return this._databaseConnection;
  }

  // database_schema - computed: true, optional: false, required: false
  private _databaseSchema = new DataOciGenerativeAiAgentToolToolConfigDatabaseSchemaList(this, "database_schema", false);
  public get databaseSchema() {
    return this._databaseSchema;
  }

  // dialect - computed: true, optional: false, required: false
  public get dialect() {
    return this.getStringAttribute('dialect');
  }

  // function - computed: true, optional: false, required: false
  private _function = new DataOciGenerativeAiAgentToolToolConfigFunctionList(this, "function", false);
  public get function() {
    return this._function;
  }

  // generation_llm_customization - computed: true, optional: false, required: false
  private _generationLlmCustomization = new DataOciGenerativeAiAgentToolToolConfigGenerationLlmCustomizationList(this, "generation_llm_customization", false);
  public get generationLlmCustomization() {
    return this._generationLlmCustomization;
  }

  // http_endpoint_auth_config - computed: true, optional: false, required: false
  private _httpEndpointAuthConfig = new DataOciGenerativeAiAgentToolToolConfigHttpEndpointAuthConfigList(this, "http_endpoint_auth_config", false);
  public get httpEndpointAuthConfig() {
    return this._httpEndpointAuthConfig;
  }

  // icl_examples - computed: true, optional: false, required: false
  private _iclExamples = new DataOciGenerativeAiAgentToolToolConfigIclExamplesList(this, "icl_examples", false);
  public get iclExamples() {
    return this._iclExamples;
  }

  // knowledge_base_configs - computed: true, optional: false, required: false
  private _knowledgeBaseConfigs = new DataOciGenerativeAiAgentToolToolConfigKnowledgeBaseConfigsList(this, "knowledge_base_configs", false);
  public get knowledgeBaseConfigs() {
    return this._knowledgeBaseConfigs;
  }

  // model_size - computed: true, optional: false, required: false
  public get modelSize() {
    return this.getStringAttribute('model_size');
  }

  // should_enable_self_correction - computed: true, optional: false, required: false
  public get shouldEnableSelfCorrection() {
    return this.getBooleanAttribute('should_enable_self_correction');
  }

  // should_enable_sql_execution - computed: true, optional: false, required: false
  public get shouldEnableSqlExecution() {
    return this.getBooleanAttribute('should_enable_sql_execution');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // table_and_column_description - computed: true, optional: false, required: false
  private _tableAndColumnDescription = new DataOciGenerativeAiAgentToolToolConfigTableAndColumnDescriptionList(this, "table_and_column_description", false);
  public get tableAndColumnDescription() {
    return this._tableAndColumnDescription;
  }

  // tool_config_type - computed: true, optional: false, required: false
  public get toolConfigType() {
    return this.getStringAttribute('tool_config_type');
  }
}

export class DataOciGenerativeAiAgentToolToolConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentToolToolConfigOutputReference {
    return new DataOciGenerativeAiAgentToolToolConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_tool oci_generative_ai_agent_tool}
*/
export class DataOciGenerativeAiAgentTool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_agent_tool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGenerativeAiAgentTool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGenerativeAiAgentTool to import
  * @param importFromId The id of the existing DataOciGenerativeAiAgentTool that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_tool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGenerativeAiAgentTool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generative_ai_agent_tool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_tool oci_generative_ai_agent_tool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGenerativeAiAgentToolConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGenerativeAiAgentToolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_agent_tool',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._toolId = config.toolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // tool_config - computed: true, optional: false, required: false
  private _toolConfig = new DataOciGenerativeAiAgentToolToolConfigList(this, "tool_config", false);
  public get toolConfig() {
    return this._toolConfig;
  }

  // tool_id - computed: false, optional: false, required: true
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tool_id: cdktf.stringToTerraform(this._toolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tool_id: {
        value: cdktf.stringToHclTerraform(this._toolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
