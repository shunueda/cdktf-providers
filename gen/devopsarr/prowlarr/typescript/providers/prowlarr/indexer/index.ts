// https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#app_profile_id Indexer#app_profile_id}
  */
  readonly appProfileId: number;
  /**
  * Indexer configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#config_contract Indexer#config_contract}
  */
  readonly configContract: string;
  /**
  * Enable flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#enable Indexer#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Set of configuration fields. All non-empty fields must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#fields Indexer#fields}
  */
  readonly fields: IndexerFields[] | cdktf.IResolvable;
  /**
  * Indexer implementation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#implementation Indexer#implementation}
  */
  readonly implementation: string;
  /**
  * Indexer name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#name Indexer#name}
  */
  readonly name: string;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#priority Indexer#priority}
  */
  readonly priority?: number;
  /**
  * Protocol. Valid values are 'usenet' and 'torrent'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#protocol Indexer#protocol}
  */
  readonly protocol: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#tags Indexer#tags}
  */
  readonly tags?: number[];
}
export interface IndexerFields {
  /**
  * Bool value. Only one value must be filled out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#bool_value Indexer#bool_value}
  */
  readonly boolValue?: boolean | cdktf.IResolvable;
  /**
  * Field name.
  * It must contain the whole field name comprehensive of its prefix (e.g. `baseSettings.`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#name Indexer#name}
  */
  readonly name: string;
  /**
  * Number value. Only one value must be filled out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#number_value Indexer#number_value}
  */
  readonly numberValue?: number;
  /**
  * Sensitive string value. Only one value must be filled out. This must be used instead of `text_value`, for sensitive fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#sensitive_value Indexer#sensitive_value}
  */
  readonly sensitiveValue?: string;
  /**
  * Set value. Only one value must be filled out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#set_value Indexer#set_value}
  */
  readonly setValue?: number[];
  /**
  * Text value. Only one value must be filled out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#text_value Indexer#text_value}
  */
  readonly textValue?: string;
}

export function indexerFieldsToTerraform(struct?: IndexerFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktf.booleanToTerraform(struct!.boolValue),
    name: cdktf.stringToTerraform(struct!.name),
    number_value: cdktf.numberToTerraform(struct!.numberValue),
    sensitive_value: cdktf.stringToTerraform(struct!.sensitiveValue),
    set_value: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.setValue),
    text_value: cdktf.stringToTerraform(struct!.textValue),
  }
}


export function indexerFieldsToHclTerraform(struct?: IndexerFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_value: {
      value: cdktf.booleanToHclTerraform(struct!.boolValue),
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
    number_value: {
      value: cdktf.numberToHclTerraform(struct!.numberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sensitive_value: {
      value: cdktf.stringToHclTerraform(struct!.sensitiveValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_value: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.setValue),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    text_value: {
      value: cdktf.stringToHclTerraform(struct!.textValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IndexerFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IndexerFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValue = this._numberValue;
    }
    if (this._sensitiveValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveValue = this._sensitiveValue;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    if (this._textValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textValue = this._textValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexerFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolValue = undefined;
      this._name = undefined;
      this._numberValue = undefined;
      this._sensitiveValue = undefined;
      this._setValue = undefined;
      this._textValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolValue = value.boolValue;
      this._name = value.name;
      this._numberValue = value.numberValue;
      this._sensitiveValue = value.sensitiveValue;
      this._setValue = value.setValue;
      this._textValue = value.textValue;
    }
  }

  // bool_value - computed: true, optional: true, required: false
  private _boolValue?: boolean | cdktf.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktf.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
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

  // number_value - computed: true, optional: true, required: false
  private _numberValue?: number; 
  public get numberValue() {
    return this.getNumberAttribute('number_value');
  }
  public set numberValue(value: number) {
    this._numberValue = value;
  }
  public resetNumberValue() {
    this._numberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValueInput() {
    return this._numberValue;
  }

  // sensitive_value - computed: true, optional: true, required: false
  private _sensitiveValue?: string; 
  public get sensitiveValue() {
    return this.getStringAttribute('sensitive_value');
  }
  public set sensitiveValue(value: string) {
    this._sensitiveValue = value;
  }
  public resetSensitiveValue() {
    this._sensitiveValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveValueInput() {
    return this._sensitiveValue;
  }

  // set_value - computed: true, optional: true, required: false
  private _setValue?: number[]; 
  public get setValue() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('set_value')));
  }
  public set setValue(value: number[]) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }

  // text_value - computed: true, optional: true, required: false
  private _textValue?: string; 
  public get textValue() {
    return this.getStringAttribute('text_value');
  }
  public set textValue(value: string) {
    this._textValue = value;
  }
  public resetTextValue() {
    this._textValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValueInput() {
    return this._textValue;
  }
}

export class IndexerFieldsList extends cdktf.ComplexList {
  public internalValue? : IndexerFields[] | cdktf.IResolvable

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
  public get(index: number): IndexerFieldsOutputReference {
    return new IndexerFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer prowlarr_indexer}
*/
export class Indexer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr_indexer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Indexer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Indexer to import
  * @param importFromId The id of the existing Indexer that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Indexer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr_indexer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs/resources/indexer prowlarr_indexer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexerConfig
  */
  public constructor(scope: Construct, id: string, config: IndexerConfig) {
    super(scope, id, {
      terraformResourceType: 'prowlarr_indexer',
      terraformGeneratorMetadata: {
        providerName: 'prowlarr',
        providerVersion: '3.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appProfileId = config.appProfileId;
    this._configContract = config.configContract;
    this._enable = config.enable;
    this._fields.internalValue = config.fields;
    this._implementation = config.implementation;
    this._name = config.name;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_profile_id - computed: false, optional: false, required: true
  private _appProfileId?: number; 
  public get appProfileId() {
    return this.getNumberAttribute('app_profile_id');
  }
  public set appProfileId(value: number) {
    this._appProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appProfileIdInput() {
    return this._appProfileId;
  }

  // config_contract - computed: false, optional: false, required: true
  private _configContract?: string; 
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }
  public set configContract(value: string) {
    this._configContract = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configContractInput() {
    return this._configContract;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new IndexerFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: IndexerFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: false, optional: false, required: true
  private _implementation?: string; 
  public get implementation() {
    return this.getStringAttribute('implementation');
  }
  public set implementation(value: string) {
    this._implementation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationInput() {
    return this._implementation;
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // privacy - computed: true, optional: false, required: false
  public get privacy() {
    return this.getStringAttribute('privacy');
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: number[]; 
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }
  public set tags(value: number[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_profile_id: cdktf.numberToTerraform(this._appProfileId),
      config_contract: cdktf.stringToTerraform(this._configContract),
      enable: cdktf.booleanToTerraform(this._enable),
      fields: cdktf.listMapper(indexerFieldsToTerraform, false)(this._fields.internalValue),
      implementation: cdktf.stringToTerraform(this._implementation),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_profile_id: {
        value: cdktf.numberToHclTerraform(this._appProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_contract: {
        value: cdktf.stringToHclTerraform(this._configContract),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fields: {
        value: cdktf.listMapperHcl(indexerFieldsToHclTerraform, false)(this._fields.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IndexerFieldsList",
      },
      implementation: {
        value: cdktf.stringToHclTerraform(this._implementation),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
