// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenerativeAiAgentKnowledgeBaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#compartment_id GenerativeAiAgentKnowledgeBase#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#defined_tags GenerativeAiAgentKnowledgeBase#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#description GenerativeAiAgentKnowledgeBase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#display_name GenerativeAiAgentKnowledgeBase#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#freeform_tags GenerativeAiAgentKnowledgeBase#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#id GenerativeAiAgentKnowledgeBase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * index_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#index_config GenerativeAiAgentKnowledgeBase#index_config}
  */
  readonly indexConfig: GenerativeAiAgentKnowledgeBaseIndexConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#timeouts GenerativeAiAgentKnowledgeBase#timeouts}
  */
  readonly timeouts?: GenerativeAiAgentKnowledgeBaseTimeouts;
}
export interface GenerativeAiAgentKnowledgeBaseKnowledgeBaseStatistics {
}

export function generativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsToTerraform(struct?: GenerativeAiAgentKnowledgeBaseKnowledgeBaseStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function generativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsToHclTerraform(struct?: GenerativeAiAgentKnowledgeBaseKnowledgeBaseStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GenerativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenerativeAiAgentKnowledgeBaseKnowledgeBaseStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentKnowledgeBaseKnowledgeBaseStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size_in_bytes - computed: true, optional: false, required: false
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }

  // total_ingested_files - computed: true, optional: false, required: false
  public get totalIngestedFiles() {
    return this.getStringAttribute('total_ingested_files');
  }
}

export class GenerativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): GenerativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsOutputReference {
    return new GenerativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#connection_id GenerativeAiAgentKnowledgeBase#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#connection_type GenerativeAiAgentKnowledgeBase#connection_type}
  */
  readonly connectionType: string;
}

export function generativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionToTerraform(struct?: GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference | GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
  }
}


export function generativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionToHclTerraform(struct?: GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference | GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionId = undefined;
      this._connectionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionId = value.connectionId;
      this._connectionType = value.connectionType;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }
}
export interface GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#name GenerativeAiAgentKnowledgeBase#name}
  */
  readonly name?: string;
}

export function generativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsToTerraform(struct?: GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function generativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsToHclTerraform(struct?: GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions | cdktf.IResolvable): any {
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

export class GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions | cdktf.IResolvable | undefined) {
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
}

export class GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList extends cdktf.ComplexList {
  public internalValue? : GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions[] | cdktf.IResolvable

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
  public get(index: number): GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference {
    return new GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#body_key GenerativeAiAgentKnowledgeBase#body_key}
  */
  readonly bodyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#embedding_body_key GenerativeAiAgentKnowledgeBase#embedding_body_key}
  */
  readonly embeddingBodyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#title_key GenerativeAiAgentKnowledgeBase#title_key}
  */
  readonly titleKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#url_key GenerativeAiAgentKnowledgeBase#url_key}
  */
  readonly urlKey?: string;
}

export function generativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaToTerraform(struct?: GenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference | GenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_key: cdktf.stringToTerraform(struct!.bodyKey),
    embedding_body_key: cdktf.stringToTerraform(struct!.embeddingBodyKey),
    title_key: cdktf.stringToTerraform(struct!.titleKey),
    url_key: cdktf.stringToTerraform(struct!.urlKey),
  }
}


export function generativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaToHclTerraform(struct?: GenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference | GenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_key: {
      value: cdktf.stringToHclTerraform(struct!.bodyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embedding_body_key: {
      value: cdktf.stringToHclTerraform(struct!.embeddingBodyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_key: {
      value: cdktf.stringToHclTerraform(struct!.titleKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_key: {
      value: cdktf.stringToHclTerraform(struct!.urlKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyKey = this._bodyKey;
    }
    if (this._embeddingBodyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingBodyKey = this._embeddingBodyKey;
    }
    if (this._titleKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleKey = this._titleKey;
    }
    if (this._urlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlKey = this._urlKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyKey = undefined;
      this._embeddingBodyKey = undefined;
      this._titleKey = undefined;
      this._urlKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyKey = value.bodyKey;
      this._embeddingBodyKey = value.embeddingBodyKey;
      this._titleKey = value.titleKey;
      this._urlKey = value.urlKey;
    }
  }

  // body_key - computed: true, optional: true, required: false
  private _bodyKey?: string; 
  public get bodyKey() {
    return this.getStringAttribute('body_key');
  }
  public set bodyKey(value: string) {
    this._bodyKey = value;
  }
  public resetBodyKey() {
    this._bodyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyKeyInput() {
    return this._bodyKey;
  }

  // embedding_body_key - computed: true, optional: true, required: false
  private _embeddingBodyKey?: string; 
  public get embeddingBodyKey() {
    return this.getStringAttribute('embedding_body_key');
  }
  public set embeddingBodyKey(value: string) {
    this._embeddingBodyKey = value;
  }
  public resetEmbeddingBodyKey() {
    this._embeddingBodyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingBodyKeyInput() {
    return this._embeddingBodyKey;
  }

  // title_key - computed: true, optional: true, required: false
  private _titleKey?: string; 
  public get titleKey() {
    return this.getStringAttribute('title_key');
  }
  public set titleKey(value: string) {
    this._titleKey = value;
  }
  public resetTitleKey() {
    this._titleKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleKeyInput() {
    return this._titleKey;
  }

  // url_key - computed: true, optional: true, required: false
  private _urlKey?: string; 
  public get urlKey() {
    return this.getStringAttribute('url_key');
  }
  public set urlKey(value: string) {
    this._urlKey = value;
  }
  public resetUrlKey() {
    this._urlKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlKeyInput() {
    return this._urlKey;
  }
}
export interface GenerativeAiAgentKnowledgeBaseIndexConfigIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#name GenerativeAiAgentKnowledgeBase#name}
  */
  readonly name?: string;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#schema GenerativeAiAgentKnowledgeBase#schema}
  */
  readonly schema?: GenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema;
}

export function generativeAiAgentKnowledgeBaseIndexConfigIndexesToTerraform(struct?: GenerativeAiAgentKnowledgeBaseIndexConfigIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    schema: generativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaToTerraform(struct!.schema),
  }
}


export function generativeAiAgentKnowledgeBaseIndexConfigIndexesToHclTerraform(struct?: GenerativeAiAgentKnowledgeBaseIndexConfigIndexes | cdktf.IResolvable): any {
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
    schema: {
      value: generativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenerativeAiAgentKnowledgeBaseIndexConfigIndexes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentKnowledgeBaseIndexConfigIndexes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._schema.internalValue = value.schema;
    }
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

  // schema - computed: false, optional: true, required: false
  private _schema = new GenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class GenerativeAiAgentKnowledgeBaseIndexConfigIndexesList extends cdktf.ComplexList {
  public internalValue? : GenerativeAiAgentKnowledgeBaseIndexConfigIndexes[] | cdktf.IResolvable

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
  public get(index: number): GenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference {
    return new GenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#client_id GenerativeAiAgentKnowledgeBase#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#idcs_url GenerativeAiAgentKnowledgeBase#idcs_url}
  */
  readonly idcsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#scope_url GenerativeAiAgentKnowledgeBase#scope_url}
  */
  readonly scopeUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#type GenerativeAiAgentKnowledgeBase#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#vault_secret_id GenerativeAiAgentKnowledgeBase#vault_secret_id}
  */
  readonly vaultSecretId: string;
}

export function generativeAiAgentKnowledgeBaseIndexConfigSecretDetailToTerraform(struct?: GenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference | GenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    idcs_url: cdktf.stringToTerraform(struct!.idcsUrl),
    scope_url: cdktf.stringToTerraform(struct!.scopeUrl),
    type: cdktf.stringToTerraform(struct!.type),
    vault_secret_id: cdktf.stringToTerraform(struct!.vaultSecretId),
  }
}


export function generativeAiAgentKnowledgeBaseIndexConfigSecretDetailToHclTerraform(struct?: GenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference | GenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idcs_url: {
      value: cdktf.stringToHclTerraform(struct!.idcsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope_url: {
      value: cdktf.stringToHclTerraform(struct!.scopeUrl),
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
    vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._idcsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idcsUrl = this._idcsUrl;
    }
    if (this._scopeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeUrl = this._scopeUrl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretId = this._vaultSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._idcsUrl = undefined;
      this._scopeUrl = undefined;
      this._type = undefined;
      this._vaultSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._idcsUrl = value.idcsUrl;
      this._scopeUrl = value.scopeUrl;
      this._type = value.type;
      this._vaultSecretId = value.vaultSecretId;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // idcs_url - computed: true, optional: true, required: false
  private _idcsUrl?: string; 
  public get idcsUrl() {
    return this.getStringAttribute('idcs_url');
  }
  public set idcsUrl(value: string) {
    this._idcsUrl = value;
  }
  public resetIdcsUrl() {
    this._idcsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsUrlInput() {
    return this._idcsUrl;
  }

  // scope_url - computed: true, optional: true, required: false
  private _scopeUrl?: string; 
  public get scopeUrl() {
    return this.getStringAttribute('scope_url');
  }
  public set scopeUrl(value: string) {
    this._scopeUrl = value;
  }
  public resetScopeUrl() {
    this._scopeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeUrlInput() {
    return this._scopeUrl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vault_secret_id - computed: false, optional: false, required: true
  private _vaultSecretId?: string; 
  public get vaultSecretId() {
    return this.getStringAttribute('vault_secret_id');
  }
  public set vaultSecretId(value: string) {
    this._vaultSecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretIdInput() {
    return this._vaultSecretId;
  }
}
export interface GenerativeAiAgentKnowledgeBaseIndexConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#cluster_id GenerativeAiAgentKnowledgeBase#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#index_config_type GenerativeAiAgentKnowledgeBase#index_config_type}
  */
  readonly indexConfigType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#should_enable_hybrid_search GenerativeAiAgentKnowledgeBase#should_enable_hybrid_search}
  */
  readonly shouldEnableHybridSearch?: boolean | cdktf.IResolvable;
  /**
  * database_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#database_connection GenerativeAiAgentKnowledgeBase#database_connection}
  */
  readonly databaseConnection?: GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection;
  /**
  * database_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#database_functions GenerativeAiAgentKnowledgeBase#database_functions}
  */
  readonly databaseFunctions?: GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions[] | cdktf.IResolvable;
  /**
  * indexes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#indexes GenerativeAiAgentKnowledgeBase#indexes}
  */
  readonly indexes?: GenerativeAiAgentKnowledgeBaseIndexConfigIndexes[] | cdktf.IResolvable;
  /**
  * secret_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#secret_detail GenerativeAiAgentKnowledgeBase#secret_detail}
  */
  readonly secretDetail?: GenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail;
}

export function generativeAiAgentKnowledgeBaseIndexConfigToTerraform(struct?: GenerativeAiAgentKnowledgeBaseIndexConfigOutputReference | GenerativeAiAgentKnowledgeBaseIndexConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    index_config_type: cdktf.stringToTerraform(struct!.indexConfigType),
    should_enable_hybrid_search: cdktf.booleanToTerraform(struct!.shouldEnableHybridSearch),
    database_connection: generativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionToTerraform(struct!.databaseConnection),
    database_functions: cdktf.listMapper(generativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsToTerraform, true)(struct!.databaseFunctions),
    indexes: cdktf.listMapper(generativeAiAgentKnowledgeBaseIndexConfigIndexesToTerraform, true)(struct!.indexes),
    secret_detail: generativeAiAgentKnowledgeBaseIndexConfigSecretDetailToTerraform(struct!.secretDetail),
  }
}


export function generativeAiAgentKnowledgeBaseIndexConfigToHclTerraform(struct?: GenerativeAiAgentKnowledgeBaseIndexConfigOutputReference | GenerativeAiAgentKnowledgeBaseIndexConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_config_type: {
      value: cdktf.stringToHclTerraform(struct!.indexConfigType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_enable_hybrid_search: {
      value: cdktf.booleanToHclTerraform(struct!.shouldEnableHybridSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database_connection: {
      value: generativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionToHclTerraform(struct!.databaseConnection),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList",
    },
    database_functions: {
      value: cdktf.listMapperHcl(generativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsToHclTerraform, true)(struct!.databaseFunctions),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList",
    },
    indexes: {
      value: cdktf.listMapperHcl(generativeAiAgentKnowledgeBaseIndexConfigIndexesToHclTerraform, true)(struct!.indexes),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentKnowledgeBaseIndexConfigIndexesList",
    },
    secret_detail: {
      value: generativeAiAgentKnowledgeBaseIndexConfigSecretDetailToHclTerraform(struct!.secretDetail),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentKnowledgeBaseIndexConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentKnowledgeBaseIndexConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._indexConfigType !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexConfigType = this._indexConfigType;
    }
    if (this._shouldEnableHybridSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldEnableHybridSearch = this._shouldEnableHybridSearch;
    }
    if (this._databaseConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseConnection = this._databaseConnection?.internalValue;
    }
    if (this._databaseFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFunctions = this._databaseFunctions?.internalValue;
    }
    if (this._indexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes?.internalValue;
    }
    if (this._secretDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretDetail = this._secretDetail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentKnowledgeBaseIndexConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._indexConfigType = undefined;
      this._shouldEnableHybridSearch = undefined;
      this._databaseConnection.internalValue = undefined;
      this._databaseFunctions.internalValue = undefined;
      this._indexes.internalValue = undefined;
      this._secretDetail.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._indexConfigType = value.indexConfigType;
      this._shouldEnableHybridSearch = value.shouldEnableHybridSearch;
      this._databaseConnection.internalValue = value.databaseConnection;
      this._databaseFunctions.internalValue = value.databaseFunctions;
      this._indexes.internalValue = value.indexes;
      this._secretDetail.internalValue = value.secretDetail;
    }
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // index_config_type - computed: false, optional: false, required: true
  private _indexConfigType?: string; 
  public get indexConfigType() {
    return this.getStringAttribute('index_config_type');
  }
  public set indexConfigType(value: string) {
    this._indexConfigType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexConfigTypeInput() {
    return this._indexConfigType;
  }

  // should_enable_hybrid_search - computed: true, optional: true, required: false
  private _shouldEnableHybridSearch?: boolean | cdktf.IResolvable; 
  public get shouldEnableHybridSearch() {
    return this.getBooleanAttribute('should_enable_hybrid_search');
  }
  public set shouldEnableHybridSearch(value: boolean | cdktf.IResolvable) {
    this._shouldEnableHybridSearch = value;
  }
  public resetShouldEnableHybridSearch() {
    this._shouldEnableHybridSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableHybridSearchInput() {
    return this._shouldEnableHybridSearch;
  }

  // database_connection - computed: false, optional: true, required: false
  private _databaseConnection = new GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference(this, "database_connection");
  public get databaseConnection() {
    return this._databaseConnection;
  }
  public putDatabaseConnection(value: GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection) {
    this._databaseConnection.internalValue = value;
  }
  public resetDatabaseConnection() {
    this._databaseConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConnectionInput() {
    return this._databaseConnection.internalValue;
  }

  // database_functions - computed: false, optional: true, required: false
  private _databaseFunctions = new GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList(this, "database_functions", false);
  public get databaseFunctions() {
    return this._databaseFunctions;
  }
  public putDatabaseFunctions(value: GenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions[] | cdktf.IResolvable) {
    this._databaseFunctions.internalValue = value;
  }
  public resetDatabaseFunctions() {
    this._databaseFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFunctionsInput() {
    return this._databaseFunctions.internalValue;
  }

  // indexes - computed: false, optional: true, required: false
  private _indexes = new GenerativeAiAgentKnowledgeBaseIndexConfigIndexesList(this, "indexes", false);
  public get indexes() {
    return this._indexes;
  }
  public putIndexes(value: GenerativeAiAgentKnowledgeBaseIndexConfigIndexes[] | cdktf.IResolvable) {
    this._indexes.internalValue = value;
  }
  public resetIndexes() {
    this._indexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes.internalValue;
  }

  // secret_detail - computed: false, optional: true, required: false
  private _secretDetail = new GenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference(this, "secret_detail");
  public get secretDetail() {
    return this._secretDetail;
  }
  public putSecretDetail(value: GenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail) {
    this._secretDetail.internalValue = value;
  }
  public resetSecretDetail() {
    this._secretDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretDetailInput() {
    return this._secretDetail.internalValue;
  }
}
export interface GenerativeAiAgentKnowledgeBaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#create GenerativeAiAgentKnowledgeBase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#delete GenerativeAiAgentKnowledgeBase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#update GenerativeAiAgentKnowledgeBase#update}
  */
  readonly update?: string;
}

export function generativeAiAgentKnowledgeBaseTimeoutsToTerraform(struct?: GenerativeAiAgentKnowledgeBaseTimeouts | cdktf.IResolvable): any {
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


export function generativeAiAgentKnowledgeBaseTimeoutsToHclTerraform(struct?: GenerativeAiAgentKnowledgeBaseTimeouts | cdktf.IResolvable): any {
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

export class GenerativeAiAgentKnowledgeBaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenerativeAiAgentKnowledgeBaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GenerativeAiAgentKnowledgeBaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base oci_generative_ai_agent_knowledge_base}
*/
export class GenerativeAiAgentKnowledgeBase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_agent_knowledge_base";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenerativeAiAgentKnowledgeBase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenerativeAiAgentKnowledgeBase to import
  * @param importFromId The id of the existing GenerativeAiAgentKnowledgeBase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenerativeAiAgentKnowledgeBase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generative_ai_agent_knowledge_base", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/generative_ai_agent_knowledge_base oci_generative_ai_agent_knowledge_base} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenerativeAiAgentKnowledgeBaseConfig
  */
  public constructor(scope: Construct, id: string, config: GenerativeAiAgentKnowledgeBaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_agent_knowledge_base',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._indexConfig.internalValue = config.indexConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // knowledge_base_statistics - computed: true, optional: false, required: false
  private _knowledgeBaseStatistics = new GenerativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsList(this, "knowledge_base_statistics", false);
  public get knowledgeBaseStatistics() {
    return this._knowledgeBaseStatistics;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // index_config - computed: false, optional: false, required: true
  private _indexConfig = new GenerativeAiAgentKnowledgeBaseIndexConfigOutputReference(this, "index_config");
  public get indexConfig() {
    return this._indexConfig;
  }
  public putIndexConfig(value: GenerativeAiAgentKnowledgeBaseIndexConfig) {
    this._indexConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexConfigInput() {
    return this._indexConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GenerativeAiAgentKnowledgeBaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GenerativeAiAgentKnowledgeBaseTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      index_config: generativeAiAgentKnowledgeBaseIndexConfigToTerraform(this._indexConfig.internalValue),
      timeouts: generativeAiAgentKnowledgeBaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_config: {
        value: generativeAiAgentKnowledgeBaseIndexConfigToHclTerraform(this._indexConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenerativeAiAgentKnowledgeBaseIndexConfigList",
      },
      timeouts: {
        value: generativeAiAgentKnowledgeBaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GenerativeAiAgentKnowledgeBaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
