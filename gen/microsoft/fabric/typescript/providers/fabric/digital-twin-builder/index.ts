// https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DigitalTwinBuilderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Definition parts. Read more about [Digital Twin Builder definition part paths](https://learn.microsoft.com/rest/api/fabric/articles/item-management/definitions/digital-twin-builder-definition). Accepted path keys: **Default** format: `definition.json`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#definition DigitalTwinBuilder#definition}
  */
  readonly definition?: { [key: string]: DigitalTwinBuilderDefinition } | cdktf.IResolvable;
  /**
  * Update definition on change of source content. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#definition_update_enabled DigitalTwinBuilder#definition_update_enabled}
  */
  readonly definitionUpdateEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Digital Twin Builder description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#description DigitalTwinBuilder#description}
  */
  readonly description?: string;
  /**
  * The Digital Twin Builder display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#display_name DigitalTwinBuilder#display_name}
  */
  readonly displayName: string;
  /**
  * The Folder ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#folder_id DigitalTwinBuilder#folder_id}
  */
  readonly folderId?: string;
  /**
  * The Digital Twin Builder format. Possible values: `Default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#format DigitalTwinBuilder#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#timeouts DigitalTwinBuilder#timeouts}
  */
  readonly timeouts?: DigitalTwinBuilderTimeouts;
  /**
  * The Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#workspace_id DigitalTwinBuilder#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DigitalTwinBuilderDefinitionParameters {
  /**
  * The find value of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#find DigitalTwinBuilder#find}
  */
  readonly find: string;
  /**
  * Processing type of the parameters. Possible values: `JsonPathReplace`, `TextReplace`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#type DigitalTwinBuilder#type}
  */
  readonly type: string;
  /**
  * The value of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#value DigitalTwinBuilder#value}
  */
  readonly value: string;
}

export function digitalTwinBuilderDefinitionParametersToTerraform(struct?: DigitalTwinBuilderDefinitionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    find: cdktf.stringToTerraform(struct!.find),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function digitalTwinBuilderDefinitionParametersToHclTerraform(struct?: DigitalTwinBuilderDefinitionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    find: {
      value: cdktf.stringToHclTerraform(struct!.find),
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

export class DigitalTwinBuilderDefinitionParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DigitalTwinBuilderDefinitionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._find !== undefined) {
      hasAnyValues = true;
      internalValueResult.find = this._find;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DigitalTwinBuilderDefinitionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._find = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._find = value.find;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // find - computed: false, optional: false, required: true
  private _find?: string; 
  public get find() {
    return this.getStringAttribute('find');
  }
  public set find(value: string) {
    this._find = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findInput() {
    return this._find;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DigitalTwinBuilderDefinitionParametersList extends cdktf.ComplexList {
  public internalValue? : DigitalTwinBuilderDefinitionParameters[] | cdktf.IResolvable

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
  public get(index: number): DigitalTwinBuilderDefinitionParametersOutputReference {
    return new DigitalTwinBuilderDefinitionParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DigitalTwinBuilderDefinition {
  /**
  * The set of parameters to be passed and processed in the source content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#parameters DigitalTwinBuilder#parameters}
  */
  readonly parameters?: DigitalTwinBuilderDefinitionParameters[] | cdktf.IResolvable;
  /**
  * Processing mode of the tokens/parameters. Possible values: `GoTemplate`, `None`, `Parameters`. Default `GoTemplate`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#processing_mode DigitalTwinBuilder#processing_mode}
  */
  readonly processingMode?: string;
  /**
  * Path to the file with source of the definition part.
  * 
  * The source content may include placeholders for token substitution. Use the dot with the token name `{{ .TokenName }}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#source DigitalTwinBuilder#source}
  */
  readonly source: string;
  /**
  * A map of key/value pairs of tokens substitutes in the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#tokens DigitalTwinBuilder#tokens}
  */
  readonly tokens?: { [key: string]: string };
  /**
  * The delimiter for the tokens in the source content. Possible values: `<<>>`, `@{}@`, `____`, `{{}}`. Default: `{{}}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#tokens_delimiter DigitalTwinBuilder#tokens_delimiter}
  */
  readonly tokensDelimiter?: string;
}

export function digitalTwinBuilderDefinitionToTerraform(struct?: DigitalTwinBuilderDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(digitalTwinBuilderDefinitionParametersToTerraform, false)(struct!.parameters),
    processing_mode: cdktf.stringToTerraform(struct!.processingMode),
    source: cdktf.stringToTerraform(struct!.source),
    tokens: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tokens),
    tokens_delimiter: cdktf.stringToTerraform(struct!.tokensDelimiter),
  }
}


export function digitalTwinBuilderDefinitionToHclTerraform(struct?: DigitalTwinBuilderDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(digitalTwinBuilderDefinitionParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "DigitalTwinBuilderDefinitionParametersList",
    },
    processing_mode: {
      value: cdktf.stringToHclTerraform(struct!.processingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tokens),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tokens_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.tokensDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DigitalTwinBuilderDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DigitalTwinBuilderDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._processingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingMode = this._processingMode;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._tokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens;
    }
    if (this._tokensDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokensDelimiter = this._tokensDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DigitalTwinBuilderDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters.internalValue = undefined;
      this._processingMode = undefined;
      this._source = undefined;
      this._tokens = undefined;
      this._tokensDelimiter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters.internalValue = value.parameters;
      this._processingMode = value.processingMode;
      this._source = value.source;
      this._tokens = value.tokens;
      this._tokensDelimiter = value.tokensDelimiter;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DigitalTwinBuilderDefinitionParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DigitalTwinBuilderDefinitionParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // processing_mode - computed: true, optional: true, required: false
  private _processingMode?: string; 
  public get processingMode() {
    return this.getStringAttribute('processing_mode');
  }
  public set processingMode(value: string) {
    this._processingMode = value;
  }
  public resetProcessingMode() {
    this._processingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingModeInput() {
    return this._processingMode;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_content_sha256 - computed: true, optional: false, required: false
  public get sourceContentSha256() {
    return this.getStringAttribute('source_content_sha256');
  }

  // tokens - computed: false, optional: true, required: false
  private _tokens?: { [key: string]: string }; 
  public get tokens() {
    return this.getStringMapAttribute('tokens');
  }
  public set tokens(value: { [key: string]: string }) {
    this._tokens = value;
  }
  public resetTokens() {
    this._tokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens;
  }

  // tokens_delimiter - computed: true, optional: true, required: false
  private _tokensDelimiter?: string; 
  public get tokensDelimiter() {
    return this.getStringAttribute('tokens_delimiter');
  }
  public set tokensDelimiter(value: string) {
    this._tokensDelimiter = value;
  }
  public resetTokensDelimiter() {
    this._tokensDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensDelimiterInput() {
    return this._tokensDelimiter;
  }
}

export class DigitalTwinBuilderDefinitionMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DigitalTwinBuilderDefinition } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DigitalTwinBuilderDefinitionOutputReference {
    return new DigitalTwinBuilderDefinitionOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DigitalTwinBuilderTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#create DigitalTwinBuilder#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#delete DigitalTwinBuilder#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#read DigitalTwinBuilder#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#update DigitalTwinBuilder#update}
  */
  readonly update?: string;
}

export function digitalTwinBuilderTimeoutsToTerraform(struct?: DigitalTwinBuilderTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function digitalTwinBuilderTimeoutsToHclTerraform(struct?: DigitalTwinBuilderTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class DigitalTwinBuilderTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DigitalTwinBuilderTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DigitalTwinBuilderTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder fabric_digital_twin_builder}
*/
export class DigitalTwinBuilder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_digital_twin_builder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DigitalTwinBuilder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DigitalTwinBuilder to import
  * @param importFromId The id of the existing DigitalTwinBuilder that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DigitalTwinBuilder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_digital_twin_builder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.7.0/docs/resources/digital_twin_builder fabric_digital_twin_builder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DigitalTwinBuilderConfig
  */
  public constructor(scope: Construct, id: string, config: DigitalTwinBuilderConfig) {
    super(scope, id, {
      terraformResourceType: 'fabric_digital_twin_builder',
      terraformGeneratorMetadata: {
        providerName: 'fabric',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definition.internalValue = config.definition;
    this._definitionUpdateEnabled = config.definitionUpdateEnabled;
    this._description = config.description;
    this._displayName = config.displayName;
    this._folderId = config.folderId;
    this._format = config.format;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definition - computed: false, optional: true, required: false
  private _definition = new DigitalTwinBuilderDefinitionMap(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: { [key: string]: DigitalTwinBuilderDefinition } | cdktf.IResolvable) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // definition_update_enabled - computed: true, optional: true, required: false
  private _definitionUpdateEnabled?: boolean | cdktf.IResolvable; 
  public get definitionUpdateEnabled() {
    return this.getBooleanAttribute('definition_update_enabled');
  }
  public set definitionUpdateEnabled(value: boolean | cdktf.IResolvable) {
    this._definitionUpdateEnabled = value;
  }
  public resetDefinitionUpdateEnabled() {
    this._definitionUpdateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionUpdateEnabledInput() {
    return this._definitionUpdateEnabled;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DigitalTwinBuilderTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DigitalTwinBuilderTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: cdktf.hashMapper(digitalTwinBuilderDefinitionToTerraform)(this._definition.internalValue),
      definition_update_enabled: cdktf.booleanToTerraform(this._definitionUpdateEnabled),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      folder_id: cdktf.stringToTerraform(this._folderId),
      format: cdktf.stringToTerraform(this._format),
      timeouts: digitalTwinBuilderTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      definition: {
        value: cdktf.hashMapperHcl(digitalTwinBuilderDefinitionToHclTerraform)(this._definition.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DigitalTwinBuilderDefinitionMap",
      },
      definition_update_enabled: {
        value: cdktf.booleanToHclTerraform(this._definitionUpdateEnabled),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: digitalTwinBuilderTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DigitalTwinBuilderTimeouts",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
