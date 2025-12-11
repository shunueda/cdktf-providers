// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenerativeAiAgentToolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#agent_id GenerativeAiAgentTool#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#compartment_id GenerativeAiAgentTool#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#defined_tags GenerativeAiAgentTool#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#description GenerativeAiAgentTool#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#display_name GenerativeAiAgentTool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#freeform_tags GenerativeAiAgentTool#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#id GenerativeAiAgentTool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#metadata GenerativeAiAgentTool#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#timeouts GenerativeAiAgentTool#timeouts}
  */
  readonly timeouts?: GenerativeAiAgentToolTimeouts;
  /**
  * tool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#tool_config GenerativeAiAgentTool#tool_config}
  */
  readonly toolConfig: GenerativeAiAgentToolToolConfig;
}
export interface GenerativeAiAgentToolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#create GenerativeAiAgentTool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#delete GenerativeAiAgentTool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#update GenerativeAiAgentTool#update}
  */
  readonly update?: string;
}

export function generativeAiAgentToolTimeoutsToTerraform(struct?: GenerativeAiAgentToolTimeouts | cdktf.IResolvable): any {
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


export function generativeAiAgentToolTimeoutsToHclTerraform(struct?: GenerativeAiAgentToolTimeouts | cdktf.IResolvable): any {
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

export class GenerativeAiAgentToolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenerativeAiAgentToolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GenerativeAiAgentToolTimeouts | cdktf.IResolvable | undefined) {
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
export interface GenerativeAiAgentToolToolConfigApiSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#api_schema_input_location_type GenerativeAiAgentTool#api_schema_input_location_type}
  */
  readonly apiSchemaInputLocationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#bucket GenerativeAiAgentTool#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#content GenerativeAiAgentTool#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#namespace GenerativeAiAgentTool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#object GenerativeAiAgentTool#object}
  */
  readonly object?: string;
}

export function generativeAiAgentToolToolConfigApiSchemaToTerraform(struct?: GenerativeAiAgentToolToolConfigApiSchemaOutputReference | GenerativeAiAgentToolToolConfigApiSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_schema_input_location_type: cdktf.stringToTerraform(struct!.apiSchemaInputLocationType),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    content: cdktf.stringToTerraform(struct!.content),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function generativeAiAgentToolToolConfigApiSchemaToHclTerraform(struct?: GenerativeAiAgentToolToolConfigApiSchemaOutputReference | GenerativeAiAgentToolToolConfigApiSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_schema_input_location_type: {
      value: cdktf.stringToHclTerraform(struct!.apiSchemaInputLocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentToolToolConfigApiSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentToolToolConfigApiSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSchemaInputLocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSchemaInputLocationType = this._apiSchemaInputLocationType;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentToolToolConfigApiSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiSchemaInputLocationType = undefined;
      this._bucket = undefined;
      this._content = undefined;
      this._namespace = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiSchemaInputLocationType = value.apiSchemaInputLocationType;
      this._bucket = value.bucket;
      this._content = value.content;
      this._namespace = value.namespace;
      this._object = value.object;
    }
  }

  // api_schema_input_location_type - computed: false, optional: false, required: true
  private _apiSchemaInputLocationType?: string; 
  public get apiSchemaInputLocationType() {
    return this.getStringAttribute('api_schema_input_location_type');
  }
  public set apiSchemaInputLocationType(value: string) {
    this._apiSchemaInputLocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSchemaInputLocationTypeInput() {
    return this._apiSchemaInputLocationType;
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // content - computed: true, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GenerativeAiAgentToolToolConfigDatabaseConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#connection_id GenerativeAiAgentTool#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#connection_type GenerativeAiAgentTool#connection_type}
  */
  readonly connectionType: string;
}

export function generativeAiAgentToolToolConfigDatabaseConnectionToTerraform(struct?: GenerativeAiAgentToolToolConfigDatabaseConnectionOutputReference | GenerativeAiAgentToolToolConfigDatabaseConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
  }
}


export function generativeAiAgentToolToolConfigDatabaseConnectionToHclTerraform(struct?: GenerativeAiAgentToolToolConfigDatabaseConnectionOutputReference | GenerativeAiAgentToolToolConfigDatabaseConnection): any {
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

export class GenerativeAiAgentToolToolConfigDatabaseConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentToolToolConfigDatabaseConnection | undefined {
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

  public set internalValue(value: GenerativeAiAgentToolToolConfigDatabaseConnection | undefined) {
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
export interface GenerativeAiAgentToolToolConfigDatabaseSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#bucket GenerativeAiAgentTool#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#content GenerativeAiAgentTool#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#input_location_type GenerativeAiAgentTool#input_location_type}
  */
  readonly inputLocationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#namespace GenerativeAiAgentTool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#prefix GenerativeAiAgentTool#prefix}
  */
  readonly prefix?: string;
}

export function generativeAiAgentToolToolConfigDatabaseSchemaToTerraform(struct?: GenerativeAiAgentToolToolConfigDatabaseSchemaOutputReference | GenerativeAiAgentToolToolConfigDatabaseSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    content: cdktf.stringToTerraform(struct!.content),
    input_location_type: cdktf.stringToTerraform(struct!.inputLocationType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function generativeAiAgentToolToolConfigDatabaseSchemaToHclTerraform(struct?: GenerativeAiAgentToolToolConfigDatabaseSchemaOutputReference | GenerativeAiAgentToolToolConfigDatabaseSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_location_type: {
      value: cdktf.stringToHclTerraform(struct!.inputLocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentToolToolConfigDatabaseSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentToolToolConfigDatabaseSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._inputLocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLocationType = this._inputLocationType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentToolToolConfigDatabaseSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._content = undefined;
      this._inputLocationType = undefined;
      this._namespace = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._content = value.content;
      this._inputLocationType = value.inputLocationType;
      this._namespace = value.namespace;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // content - computed: true, optional: true, required: false
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

  // input_location_type - computed: false, optional: false, required: true
  private _inputLocationType?: string; 
  public get inputLocationType() {
    return this.getStringAttribute('input_location_type');
  }
  public set inputLocationType(value: string) {
    this._inputLocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLocationTypeInput() {
    return this._inputLocationType;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface GenerativeAiAgentToolToolConfigFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#description GenerativeAiAgentTool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#name GenerativeAiAgentTool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#parameters GenerativeAiAgentTool#parameters}
  */
  readonly parameters?: { [key: string]: string };
}

export function generativeAiAgentToolToolConfigFunctionToTerraform(struct?: GenerativeAiAgentToolToolConfigFunctionOutputReference | GenerativeAiAgentToolToolConfigFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
  }
}


export function generativeAiAgentToolToolConfigFunctionToHclTerraform(struct?: GenerativeAiAgentToolToolConfigFunctionOutputReference | GenerativeAiAgentToolToolConfigFunction): any {
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
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentToolToolConfigFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentToolToolConfigFunction | undefined {
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
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentToolToolConfigFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._parameters = value.parameters;
    }
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface GenerativeAiAgentToolToolConfigGenerationLlmCustomization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#instruction GenerativeAiAgentTool#instruction}
  */
  readonly instruction?: string;
}

export function generativeAiAgentToolToolConfigGenerationLlmCustomizationToTerraform(struct?: GenerativeAiAgentToolToolConfigGenerationLlmCustomizationOutputReference | GenerativeAiAgentToolToolConfigGenerationLlmCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instruction: cdktf.stringToTerraform(struct!.instruction),
  }
}


export function generativeAiAgentToolToolConfigGenerationLlmCustomizationToHclTerraform(struct?: GenerativeAiAgentToolToolConfigGenerationLlmCustomizationOutputReference | GenerativeAiAgentToolToolConfigGenerationLlmCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instruction: {
      value: cdktf.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentToolToolConfigGenerationLlmCustomizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentToolToolConfigGenerationLlmCustomization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentToolToolConfigGenerationLlmCustomization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instruction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instruction = value.instruction;
    }
  }

  // instruction - computed: true, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }
}
export interface GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#client_id GenerativeAiAgentTool#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#http_endpoint_auth_scope_config_type GenerativeAiAgentTool#http_endpoint_auth_scope_config_type}
  */
  readonly httpEndpointAuthScopeConfigType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#idcs_url GenerativeAiAgentTool#idcs_url}
  */
  readonly idcsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#key_location GenerativeAiAgentTool#key_location}
  */
  readonly keyLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#key_name GenerativeAiAgentTool#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#scope_url GenerativeAiAgentTool#scope_url}
  */
  readonly scopeUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#vault_secret_id GenerativeAiAgentTool#vault_secret_id}
  */
  readonly vaultSecretId?: string;
}

export function generativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigToTerraform(struct?: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigOutputReference | GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    http_endpoint_auth_scope_config_type: cdktf.stringToTerraform(struct!.httpEndpointAuthScopeConfigType),
    idcs_url: cdktf.stringToTerraform(struct!.idcsUrl),
    key_location: cdktf.stringToTerraform(struct!.keyLocation),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    scope_url: cdktf.stringToTerraform(struct!.scopeUrl),
    vault_secret_id: cdktf.stringToTerraform(struct!.vaultSecretId),
  }
}


export function generativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigToHclTerraform(struct?: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigOutputReference | GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfig): any {
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
    http_endpoint_auth_scope_config_type: {
      value: cdktf.stringToHclTerraform(struct!.httpEndpointAuthScopeConfigType),
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
    key_location: {
      value: cdktf.stringToHclTerraform(struct!.keyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
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

export class GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._httpEndpointAuthScopeConfigType !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpointAuthScopeConfigType = this._httpEndpointAuthScopeConfigType;
    }
    if (this._idcsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idcsUrl = this._idcsUrl;
    }
    if (this._keyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyLocation = this._keyLocation;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._scopeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeUrl = this._scopeUrl;
    }
    if (this._vaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretId = this._vaultSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._httpEndpointAuthScopeConfigType = undefined;
      this._idcsUrl = undefined;
      this._keyLocation = undefined;
      this._keyName = undefined;
      this._scopeUrl = undefined;
      this._vaultSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._httpEndpointAuthScopeConfigType = value.httpEndpointAuthScopeConfigType;
      this._idcsUrl = value.idcsUrl;
      this._keyLocation = value.keyLocation;
      this._keyName = value.keyName;
      this._scopeUrl = value.scopeUrl;
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

  // http_endpoint_auth_scope_config_type - computed: false, optional: false, required: true
  private _httpEndpointAuthScopeConfigType?: string; 
  public get httpEndpointAuthScopeConfigType() {
    return this.getStringAttribute('http_endpoint_auth_scope_config_type');
  }
  public set httpEndpointAuthScopeConfigType(value: string) {
    this._httpEndpointAuthScopeConfigType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointAuthScopeConfigTypeInput() {
    return this._httpEndpointAuthScopeConfigType;
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

  // key_location - computed: true, optional: true, required: false
  private _keyLocation?: string; 
  public get keyLocation() {
    return this.getStringAttribute('key_location');
  }
  public set keyLocation(value: string) {
    this._keyLocation = value;
  }
  public resetKeyLocation() {
    this._keyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLocationInput() {
    return this._keyLocation;
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
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

  // vault_secret_id - computed: true, optional: true, required: false
  private _vaultSecretId?: string; 
  public get vaultSecretId() {
    return this.getStringAttribute('vault_secret_id');
  }
  public set vaultSecretId(value: string) {
    this._vaultSecretId = value;
  }
  public resetVaultSecretId() {
    this._vaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretIdInput() {
    return this._vaultSecretId;
  }
}
export interface GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#http_endpoint_auth_scope GenerativeAiAgentTool#http_endpoint_auth_scope}
  */
  readonly httpEndpointAuthScope?: string;
  /**
  * http_endpoint_auth_scope_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#http_endpoint_auth_scope_config GenerativeAiAgentTool#http_endpoint_auth_scope_config}
  */
  readonly httpEndpointAuthScopeConfig?: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfig;
}

export function generativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesToTerraform(struct?: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_endpoint_auth_scope: cdktf.stringToTerraform(struct!.httpEndpointAuthScope),
    http_endpoint_auth_scope_config: generativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigToTerraform(struct!.httpEndpointAuthScopeConfig),
  }
}


export function generativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesToHclTerraform(struct?: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_endpoint_auth_scope: {
      value: cdktf.stringToHclTerraform(struct!.httpEndpointAuthScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_endpoint_auth_scope_config: {
      value: generativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigToHclTerraform(struct!.httpEndpointAuthScopeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpEndpointAuthScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpointAuthScope = this._httpEndpointAuthScope;
    }
    if (this._httpEndpointAuthScopeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpointAuthScopeConfig = this._httpEndpointAuthScopeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpEndpointAuthScope = undefined;
      this._httpEndpointAuthScopeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpEndpointAuthScope = value.httpEndpointAuthScope;
      this._httpEndpointAuthScopeConfig.internalValue = value.httpEndpointAuthScopeConfig;
    }
  }

  // http_endpoint_auth_scope - computed: true, optional: true, required: false
  private _httpEndpointAuthScope?: string; 
  public get httpEndpointAuthScope() {
    return this.getStringAttribute('http_endpoint_auth_scope');
  }
  public set httpEndpointAuthScope(value: string) {
    this._httpEndpointAuthScope = value;
  }
  public resetHttpEndpointAuthScope() {
    this._httpEndpointAuthScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointAuthScopeInput() {
    return this._httpEndpointAuthScope;
  }

  // http_endpoint_auth_scope_config - computed: false, optional: true, required: false
  private _httpEndpointAuthScopeConfig = new GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfigOutputReference(this, "http_endpoint_auth_scope_config");
  public get httpEndpointAuthScopeConfig() {
    return this._httpEndpointAuthScopeConfig;
  }
  public putHttpEndpointAuthScopeConfig(value: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesHttpEndpointAuthScopeConfig) {
    this._httpEndpointAuthScopeConfig.internalValue = value;
  }
  public resetHttpEndpointAuthScopeConfig() {
    this._httpEndpointAuthScopeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointAuthScopeConfigInput() {
    return this._httpEndpointAuthScopeConfig.internalValue;
  }
}

export class GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesList extends cdktf.ComplexList {
  public internalValue? : GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources[] | cdktf.IResolvable

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
  public get(index: number): GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesOutputReference {
    return new GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenerativeAiAgentToolToolConfigHttpEndpointAuthConfig {
  /**
  * http_endpoint_auth_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#http_endpoint_auth_sources GenerativeAiAgentTool#http_endpoint_auth_sources}
  */
  readonly httpEndpointAuthSources?: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources[] | cdktf.IResolvable;
}

export function generativeAiAgentToolToolConfigHttpEndpointAuthConfigToTerraform(struct?: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigOutputReference | GenerativeAiAgentToolToolConfigHttpEndpointAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_endpoint_auth_sources: cdktf.listMapper(generativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesToTerraform, true)(struct!.httpEndpointAuthSources),
  }
}


export function generativeAiAgentToolToolConfigHttpEndpointAuthConfigToHclTerraform(struct?: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigOutputReference | GenerativeAiAgentToolToolConfigHttpEndpointAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_endpoint_auth_sources: {
      value: cdktf.listMapperHcl(generativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesToHclTerraform, true)(struct!.httpEndpointAuthSources),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentToolToolConfigHttpEndpointAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpEndpointAuthSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpointAuthSources = this._httpEndpointAuthSources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpEndpointAuthSources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpEndpointAuthSources.internalValue = value.httpEndpointAuthSources;
    }
  }

  // http_endpoint_auth_sources - computed: false, optional: true, required: false
  private _httpEndpointAuthSources = new GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSourcesList(this, "http_endpoint_auth_sources", false);
  public get httpEndpointAuthSources() {
    return this._httpEndpointAuthSources;
  }
  public putHttpEndpointAuthSources(value: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigHttpEndpointAuthSources[] | cdktf.IResolvable) {
    this._httpEndpointAuthSources.internalValue = value;
  }
  public resetHttpEndpointAuthSources() {
    this._httpEndpointAuthSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointAuthSourcesInput() {
    return this._httpEndpointAuthSources.internalValue;
  }
}
export interface GenerativeAiAgentToolToolConfigIclExamples {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#bucket GenerativeAiAgentTool#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#content GenerativeAiAgentTool#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#input_location_type GenerativeAiAgentTool#input_location_type}
  */
  readonly inputLocationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#namespace GenerativeAiAgentTool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#prefix GenerativeAiAgentTool#prefix}
  */
  readonly prefix?: string;
}

export function generativeAiAgentToolToolConfigIclExamplesToTerraform(struct?: GenerativeAiAgentToolToolConfigIclExamplesOutputReference | GenerativeAiAgentToolToolConfigIclExamples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    content: cdktf.stringToTerraform(struct!.content),
    input_location_type: cdktf.stringToTerraform(struct!.inputLocationType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function generativeAiAgentToolToolConfigIclExamplesToHclTerraform(struct?: GenerativeAiAgentToolToolConfigIclExamplesOutputReference | GenerativeAiAgentToolToolConfigIclExamples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_location_type: {
      value: cdktf.stringToHclTerraform(struct!.inputLocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentToolToolConfigIclExamplesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentToolToolConfigIclExamples | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._inputLocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLocationType = this._inputLocationType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentToolToolConfigIclExamples | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._content = undefined;
      this._inputLocationType = undefined;
      this._namespace = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._content = value.content;
      this._inputLocationType = value.inputLocationType;
      this._namespace = value.namespace;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // content - computed: true, optional: true, required: false
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

  // input_location_type - computed: false, optional: false, required: true
  private _inputLocationType?: string; 
  public get inputLocationType() {
    return this.getStringAttribute('input_location_type');
  }
  public set inputLocationType(value: string) {
    this._inputLocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLocationTypeInput() {
    return this._inputLocationType;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface GenerativeAiAgentToolToolConfigKnowledgeBaseConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#knowledge_base_id GenerativeAiAgentTool#knowledge_base_id}
  */
  readonly knowledgeBaseId?: string;
}

export function generativeAiAgentToolToolConfigKnowledgeBaseConfigsToTerraform(struct?: GenerativeAiAgentToolToolConfigKnowledgeBaseConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    knowledge_base_id: cdktf.stringToTerraform(struct!.knowledgeBaseId),
  }
}


export function generativeAiAgentToolToolConfigKnowledgeBaseConfigsToHclTerraform(struct?: GenerativeAiAgentToolToolConfigKnowledgeBaseConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    knowledge_base_id: {
      value: cdktf.stringToHclTerraform(struct!.knowledgeBaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentToolToolConfigKnowledgeBaseConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GenerativeAiAgentToolToolConfigKnowledgeBaseConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseId = this._knowledgeBaseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentToolToolConfigKnowledgeBaseConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseId = value.knowledgeBaseId;
    }
  }

  // knowledge_base_id - computed: true, optional: true, required: false
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  public resetKnowledgeBaseId() {
    this._knowledgeBaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }
}

export class GenerativeAiAgentToolToolConfigKnowledgeBaseConfigsList extends cdktf.ComplexList {
  public internalValue? : GenerativeAiAgentToolToolConfigKnowledgeBaseConfigs[] | cdktf.IResolvable

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
  public get(index: number): GenerativeAiAgentToolToolConfigKnowledgeBaseConfigsOutputReference {
    return new GenerativeAiAgentToolToolConfigKnowledgeBaseConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GenerativeAiAgentToolToolConfigTableAndColumnDescription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#bucket GenerativeAiAgentTool#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#content GenerativeAiAgentTool#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#input_location_type GenerativeAiAgentTool#input_location_type}
  */
  readonly inputLocationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#namespace GenerativeAiAgentTool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#prefix GenerativeAiAgentTool#prefix}
  */
  readonly prefix?: string;
}

export function generativeAiAgentToolToolConfigTableAndColumnDescriptionToTerraform(struct?: GenerativeAiAgentToolToolConfigTableAndColumnDescriptionOutputReference | GenerativeAiAgentToolToolConfigTableAndColumnDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    content: cdktf.stringToTerraform(struct!.content),
    input_location_type: cdktf.stringToTerraform(struct!.inputLocationType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function generativeAiAgentToolToolConfigTableAndColumnDescriptionToHclTerraform(struct?: GenerativeAiAgentToolToolConfigTableAndColumnDescriptionOutputReference | GenerativeAiAgentToolToolConfigTableAndColumnDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_location_type: {
      value: cdktf.stringToHclTerraform(struct!.inputLocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentToolToolConfigTableAndColumnDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentToolToolConfigTableAndColumnDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._inputLocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLocationType = this._inputLocationType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentToolToolConfigTableAndColumnDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._content = undefined;
      this._inputLocationType = undefined;
      this._namespace = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._content = value.content;
      this._inputLocationType = value.inputLocationType;
      this._namespace = value.namespace;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // content - computed: true, optional: true, required: false
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

  // input_location_type - computed: false, optional: false, required: true
  private _inputLocationType?: string; 
  public get inputLocationType() {
    return this.getStringAttribute('input_location_type');
  }
  public set inputLocationType(value: string) {
    this._inputLocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLocationTypeInput() {
    return this._inputLocationType;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface GenerativeAiAgentToolToolConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#agent_endpoint_id GenerativeAiAgentTool#agent_endpoint_id}
  */
  readonly agentEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#dialect GenerativeAiAgentTool#dialect}
  */
  readonly dialect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#model_size GenerativeAiAgentTool#model_size}
  */
  readonly modelSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#should_enable_self_correction GenerativeAiAgentTool#should_enable_self_correction}
  */
  readonly shouldEnableSelfCorrection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#should_enable_sql_execution GenerativeAiAgentTool#should_enable_sql_execution}
  */
  readonly shouldEnableSqlExecution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#subnet_id GenerativeAiAgentTool#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#tool_config_type GenerativeAiAgentTool#tool_config_type}
  */
  readonly toolConfigType: string;
  /**
  * api_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#api_schema GenerativeAiAgentTool#api_schema}
  */
  readonly apiSchema?: GenerativeAiAgentToolToolConfigApiSchema;
  /**
  * database_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#database_connection GenerativeAiAgentTool#database_connection}
  */
  readonly databaseConnection?: GenerativeAiAgentToolToolConfigDatabaseConnection;
  /**
  * database_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#database_schema GenerativeAiAgentTool#database_schema}
  */
  readonly databaseSchema?: GenerativeAiAgentToolToolConfigDatabaseSchema;
  /**
  * function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#function GenerativeAiAgentTool#function}
  */
  readonly function?: GenerativeAiAgentToolToolConfigFunction;
  /**
  * generation_llm_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#generation_llm_customization GenerativeAiAgentTool#generation_llm_customization}
  */
  readonly generationLlmCustomization?: GenerativeAiAgentToolToolConfigGenerationLlmCustomization;
  /**
  * http_endpoint_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#http_endpoint_auth_config GenerativeAiAgentTool#http_endpoint_auth_config}
  */
  readonly httpEndpointAuthConfig?: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfig;
  /**
  * icl_examples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#icl_examples GenerativeAiAgentTool#icl_examples}
  */
  readonly iclExamples?: GenerativeAiAgentToolToolConfigIclExamples;
  /**
  * knowledge_base_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#knowledge_base_configs GenerativeAiAgentTool#knowledge_base_configs}
  */
  readonly knowledgeBaseConfigs?: GenerativeAiAgentToolToolConfigKnowledgeBaseConfigs[] | cdktf.IResolvable;
  /**
  * table_and_column_description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#table_and_column_description GenerativeAiAgentTool#table_and_column_description}
  */
  readonly tableAndColumnDescription?: GenerativeAiAgentToolToolConfigTableAndColumnDescription;
}

export function generativeAiAgentToolToolConfigToTerraform(struct?: GenerativeAiAgentToolToolConfigOutputReference | GenerativeAiAgentToolToolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_endpoint_id: cdktf.stringToTerraform(struct!.agentEndpointId),
    dialect: cdktf.stringToTerraform(struct!.dialect),
    model_size: cdktf.stringToTerraform(struct!.modelSize),
    should_enable_self_correction: cdktf.booleanToTerraform(struct!.shouldEnableSelfCorrection),
    should_enable_sql_execution: cdktf.booleanToTerraform(struct!.shouldEnableSqlExecution),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tool_config_type: cdktf.stringToTerraform(struct!.toolConfigType),
    api_schema: generativeAiAgentToolToolConfigApiSchemaToTerraform(struct!.apiSchema),
    database_connection: generativeAiAgentToolToolConfigDatabaseConnectionToTerraform(struct!.databaseConnection),
    database_schema: generativeAiAgentToolToolConfigDatabaseSchemaToTerraform(struct!.databaseSchema),
    function: generativeAiAgentToolToolConfigFunctionToTerraform(struct!.function),
    generation_llm_customization: generativeAiAgentToolToolConfigGenerationLlmCustomizationToTerraform(struct!.generationLlmCustomization),
    http_endpoint_auth_config: generativeAiAgentToolToolConfigHttpEndpointAuthConfigToTerraform(struct!.httpEndpointAuthConfig),
    icl_examples: generativeAiAgentToolToolConfigIclExamplesToTerraform(struct!.iclExamples),
    knowledge_base_configs: cdktf.listMapper(generativeAiAgentToolToolConfigKnowledgeBaseConfigsToTerraform, true)(struct!.knowledgeBaseConfigs),
    table_and_column_description: generativeAiAgentToolToolConfigTableAndColumnDescriptionToTerraform(struct!.tableAndColumnDescription),
  }
}


export function generativeAiAgentToolToolConfigToHclTerraform(struct?: GenerativeAiAgentToolToolConfigOutputReference | GenerativeAiAgentToolToolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.agentEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dialect: {
      value: cdktf.stringToHclTerraform(struct!.dialect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_size: {
      value: cdktf.stringToHclTerraform(struct!.modelSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_enable_self_correction: {
      value: cdktf.booleanToHclTerraform(struct!.shouldEnableSelfCorrection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_enable_sql_execution: {
      value: cdktf.booleanToHclTerraform(struct!.shouldEnableSqlExecution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_config_type: {
      value: cdktf.stringToHclTerraform(struct!.toolConfigType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_schema: {
      value: generativeAiAgentToolToolConfigApiSchemaToHclTerraform(struct!.apiSchema),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentToolToolConfigApiSchemaList",
    },
    database_connection: {
      value: generativeAiAgentToolToolConfigDatabaseConnectionToHclTerraform(struct!.databaseConnection),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentToolToolConfigDatabaseConnectionList",
    },
    database_schema: {
      value: generativeAiAgentToolToolConfigDatabaseSchemaToHclTerraform(struct!.databaseSchema),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentToolToolConfigDatabaseSchemaList",
    },
    function: {
      value: generativeAiAgentToolToolConfigFunctionToHclTerraform(struct!.function),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentToolToolConfigFunctionList",
    },
    generation_llm_customization: {
      value: generativeAiAgentToolToolConfigGenerationLlmCustomizationToHclTerraform(struct!.generationLlmCustomization),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentToolToolConfigGenerationLlmCustomizationList",
    },
    http_endpoint_auth_config: {
      value: generativeAiAgentToolToolConfigHttpEndpointAuthConfigToHclTerraform(struct!.httpEndpointAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigList",
    },
    icl_examples: {
      value: generativeAiAgentToolToolConfigIclExamplesToHclTerraform(struct!.iclExamples),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentToolToolConfigIclExamplesList",
    },
    knowledge_base_configs: {
      value: cdktf.listMapperHcl(generativeAiAgentToolToolConfigKnowledgeBaseConfigsToHclTerraform, true)(struct!.knowledgeBaseConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentToolToolConfigKnowledgeBaseConfigsList",
    },
    table_and_column_description: {
      value: generativeAiAgentToolToolConfigTableAndColumnDescriptionToHclTerraform(struct!.tableAndColumnDescription),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentToolToolConfigTableAndColumnDescriptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentToolToolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentToolToolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentEndpointId = this._agentEndpointId;
    }
    if (this._dialect !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialect = this._dialect;
    }
    if (this._modelSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelSize = this._modelSize;
    }
    if (this._shouldEnableSelfCorrection !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldEnableSelfCorrection = this._shouldEnableSelfCorrection;
    }
    if (this._shouldEnableSqlExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldEnableSqlExecution = this._shouldEnableSqlExecution;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._toolConfigType !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolConfigType = this._toolConfigType;
    }
    if (this._apiSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSchema = this._apiSchema?.internalValue;
    }
    if (this._databaseConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseConnection = this._databaseConnection?.internalValue;
    }
    if (this._databaseSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseSchema = this._databaseSchema?.internalValue;
    }
    if (this._function?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function?.internalValue;
    }
    if (this._generationLlmCustomization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationLlmCustomization = this._generationLlmCustomization?.internalValue;
    }
    if (this._httpEndpointAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpointAuthConfig = this._httpEndpointAuthConfig?.internalValue;
    }
    if (this._iclExamples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iclExamples = this._iclExamples?.internalValue;
    }
    if (this._knowledgeBaseConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseConfigs = this._knowledgeBaseConfigs?.internalValue;
    }
    if (this._tableAndColumnDescription?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableAndColumnDescription = this._tableAndColumnDescription?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentToolToolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentEndpointId = undefined;
      this._dialect = undefined;
      this._modelSize = undefined;
      this._shouldEnableSelfCorrection = undefined;
      this._shouldEnableSqlExecution = undefined;
      this._subnetId = undefined;
      this._toolConfigType = undefined;
      this._apiSchema.internalValue = undefined;
      this._databaseConnection.internalValue = undefined;
      this._databaseSchema.internalValue = undefined;
      this._function.internalValue = undefined;
      this._generationLlmCustomization.internalValue = undefined;
      this._httpEndpointAuthConfig.internalValue = undefined;
      this._iclExamples.internalValue = undefined;
      this._knowledgeBaseConfigs.internalValue = undefined;
      this._tableAndColumnDescription.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentEndpointId = value.agentEndpointId;
      this._dialect = value.dialect;
      this._modelSize = value.modelSize;
      this._shouldEnableSelfCorrection = value.shouldEnableSelfCorrection;
      this._shouldEnableSqlExecution = value.shouldEnableSqlExecution;
      this._subnetId = value.subnetId;
      this._toolConfigType = value.toolConfigType;
      this._apiSchema.internalValue = value.apiSchema;
      this._databaseConnection.internalValue = value.databaseConnection;
      this._databaseSchema.internalValue = value.databaseSchema;
      this._function.internalValue = value.function;
      this._generationLlmCustomization.internalValue = value.generationLlmCustomization;
      this._httpEndpointAuthConfig.internalValue = value.httpEndpointAuthConfig;
      this._iclExamples.internalValue = value.iclExamples;
      this._knowledgeBaseConfigs.internalValue = value.knowledgeBaseConfigs;
      this._tableAndColumnDescription.internalValue = value.tableAndColumnDescription;
    }
  }

  // agent_endpoint_id - computed: true, optional: true, required: false
  private _agentEndpointId?: string; 
  public get agentEndpointId() {
    return this.getStringAttribute('agent_endpoint_id');
  }
  public set agentEndpointId(value: string) {
    this._agentEndpointId = value;
  }
  public resetAgentEndpointId() {
    this._agentEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentEndpointIdInput() {
    return this._agentEndpointId;
  }

  // dialect - computed: true, optional: true, required: false
  private _dialect?: string; 
  public get dialect() {
    return this.getStringAttribute('dialect');
  }
  public set dialect(value: string) {
    this._dialect = value;
  }
  public resetDialect() {
    this._dialect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialectInput() {
    return this._dialect;
  }

  // model_size - computed: true, optional: true, required: false
  private _modelSize?: string; 
  public get modelSize() {
    return this.getStringAttribute('model_size');
  }
  public set modelSize(value: string) {
    this._modelSize = value;
  }
  public resetModelSize() {
    this._modelSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSizeInput() {
    return this._modelSize;
  }

  // should_enable_self_correction - computed: true, optional: true, required: false
  private _shouldEnableSelfCorrection?: boolean | cdktf.IResolvable; 
  public get shouldEnableSelfCorrection() {
    return this.getBooleanAttribute('should_enable_self_correction');
  }
  public set shouldEnableSelfCorrection(value: boolean | cdktf.IResolvable) {
    this._shouldEnableSelfCorrection = value;
  }
  public resetShouldEnableSelfCorrection() {
    this._shouldEnableSelfCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableSelfCorrectionInput() {
    return this._shouldEnableSelfCorrection;
  }

  // should_enable_sql_execution - computed: true, optional: true, required: false
  private _shouldEnableSqlExecution?: boolean | cdktf.IResolvable; 
  public get shouldEnableSqlExecution() {
    return this.getBooleanAttribute('should_enable_sql_execution');
  }
  public set shouldEnableSqlExecution(value: boolean | cdktf.IResolvable) {
    this._shouldEnableSqlExecution = value;
  }
  public resetShouldEnableSqlExecution() {
    this._shouldEnableSqlExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableSqlExecutionInput() {
    return this._shouldEnableSqlExecution;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tool_config_type - computed: false, optional: false, required: true
  private _toolConfigType?: string; 
  public get toolConfigType() {
    return this.getStringAttribute('tool_config_type');
  }
  public set toolConfigType(value: string) {
    this._toolConfigType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolConfigTypeInput() {
    return this._toolConfigType;
  }

  // api_schema - computed: false, optional: true, required: false
  private _apiSchema = new GenerativeAiAgentToolToolConfigApiSchemaOutputReference(this, "api_schema");
  public get apiSchema() {
    return this._apiSchema;
  }
  public putApiSchema(value: GenerativeAiAgentToolToolConfigApiSchema) {
    this._apiSchema.internalValue = value;
  }
  public resetApiSchema() {
    this._apiSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSchemaInput() {
    return this._apiSchema.internalValue;
  }

  // database_connection - computed: false, optional: true, required: false
  private _databaseConnection = new GenerativeAiAgentToolToolConfigDatabaseConnectionOutputReference(this, "database_connection");
  public get databaseConnection() {
    return this._databaseConnection;
  }
  public putDatabaseConnection(value: GenerativeAiAgentToolToolConfigDatabaseConnection) {
    this._databaseConnection.internalValue = value;
  }
  public resetDatabaseConnection() {
    this._databaseConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConnectionInput() {
    return this._databaseConnection.internalValue;
  }

  // database_schema - computed: false, optional: true, required: false
  private _databaseSchema = new GenerativeAiAgentToolToolConfigDatabaseSchemaOutputReference(this, "database_schema");
  public get databaseSchema() {
    return this._databaseSchema;
  }
  public putDatabaseSchema(value: GenerativeAiAgentToolToolConfigDatabaseSchema) {
    this._databaseSchema.internalValue = value;
  }
  public resetDatabaseSchema() {
    this._databaseSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSchemaInput() {
    return this._databaseSchema.internalValue;
  }

  // function - computed: false, optional: true, required: false
  private _function = new GenerativeAiAgentToolToolConfigFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: GenerativeAiAgentToolToolConfigFunction) {
    this._function.internalValue = value;
  }
  public resetFunction() {
    this._function.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // generation_llm_customization - computed: false, optional: true, required: false
  private _generationLlmCustomization = new GenerativeAiAgentToolToolConfigGenerationLlmCustomizationOutputReference(this, "generation_llm_customization");
  public get generationLlmCustomization() {
    return this._generationLlmCustomization;
  }
  public putGenerationLlmCustomization(value: GenerativeAiAgentToolToolConfigGenerationLlmCustomization) {
    this._generationLlmCustomization.internalValue = value;
  }
  public resetGenerationLlmCustomization() {
    this._generationLlmCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationLlmCustomizationInput() {
    return this._generationLlmCustomization.internalValue;
  }

  // http_endpoint_auth_config - computed: false, optional: true, required: false
  private _httpEndpointAuthConfig = new GenerativeAiAgentToolToolConfigHttpEndpointAuthConfigOutputReference(this, "http_endpoint_auth_config");
  public get httpEndpointAuthConfig() {
    return this._httpEndpointAuthConfig;
  }
  public putHttpEndpointAuthConfig(value: GenerativeAiAgentToolToolConfigHttpEndpointAuthConfig) {
    this._httpEndpointAuthConfig.internalValue = value;
  }
  public resetHttpEndpointAuthConfig() {
    this._httpEndpointAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointAuthConfigInput() {
    return this._httpEndpointAuthConfig.internalValue;
  }

  // icl_examples - computed: false, optional: true, required: false
  private _iclExamples = new GenerativeAiAgentToolToolConfigIclExamplesOutputReference(this, "icl_examples");
  public get iclExamples() {
    return this._iclExamples;
  }
  public putIclExamples(value: GenerativeAiAgentToolToolConfigIclExamples) {
    this._iclExamples.internalValue = value;
  }
  public resetIclExamples() {
    this._iclExamples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iclExamplesInput() {
    return this._iclExamples.internalValue;
  }

  // knowledge_base_configs - computed: false, optional: true, required: false
  private _knowledgeBaseConfigs = new GenerativeAiAgentToolToolConfigKnowledgeBaseConfigsList(this, "knowledge_base_configs", false);
  public get knowledgeBaseConfigs() {
    return this._knowledgeBaseConfigs;
  }
  public putKnowledgeBaseConfigs(value: GenerativeAiAgentToolToolConfigKnowledgeBaseConfigs[] | cdktf.IResolvable) {
    this._knowledgeBaseConfigs.internalValue = value;
  }
  public resetKnowledgeBaseConfigs() {
    this._knowledgeBaseConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseConfigsInput() {
    return this._knowledgeBaseConfigs.internalValue;
  }

  // table_and_column_description - computed: false, optional: true, required: false
  private _tableAndColumnDescription = new GenerativeAiAgentToolToolConfigTableAndColumnDescriptionOutputReference(this, "table_and_column_description");
  public get tableAndColumnDescription() {
    return this._tableAndColumnDescription;
  }
  public putTableAndColumnDescription(value: GenerativeAiAgentToolToolConfigTableAndColumnDescription) {
    this._tableAndColumnDescription.internalValue = value;
  }
  public resetTableAndColumnDescription() {
    this._tableAndColumnDescription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableAndColumnDescriptionInput() {
    return this._tableAndColumnDescription.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool oci_generative_ai_agent_tool}
*/
export class GenerativeAiAgentTool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_agent_tool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenerativeAiAgentTool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenerativeAiAgentTool to import
  * @param importFromId The id of the existing GenerativeAiAgentTool that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenerativeAiAgentTool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generative_ai_agent_tool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/generative_ai_agent_tool oci_generative_ai_agent_tool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenerativeAiAgentToolConfig
  */
  public constructor(scope: Construct, id: string, config: GenerativeAiAgentToolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_agent_tool',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentId = config.agentId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._metadata = config.metadata;
    this._timeouts.internalValue = config.timeouts;
    this._toolConfig.internalValue = config.toolConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

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

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GenerativeAiAgentToolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GenerativeAiAgentToolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tool_config - computed: false, optional: false, required: true
  private _toolConfig = new GenerativeAiAgentToolToolConfigOutputReference(this, "tool_config");
  public get toolConfig() {
    return this._toolConfig;
  }
  public putToolConfig(value: GenerativeAiAgentToolToolConfig) {
    this._toolConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolConfigInput() {
    return this._toolConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      timeouts: generativeAiAgentToolTimeoutsToTerraform(this._timeouts.internalValue),
      tool_config: generativeAiAgentToolToolConfigToTerraform(this._toolConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: generativeAiAgentToolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GenerativeAiAgentToolTimeouts",
      },
      tool_config: {
        value: generativeAiAgentToolToolConfigToHclTerraform(this._toolConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenerativeAiAgentToolToolConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
