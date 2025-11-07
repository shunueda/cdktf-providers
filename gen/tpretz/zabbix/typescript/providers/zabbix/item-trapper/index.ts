// https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItemTrapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application IDs to associate this item with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#applications ItemTrapper#applications}
  */
  readonly applications?: string[];
  /**
  * Item History
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#history ItemTrapper#history}
  */
  readonly history?: string;
  /**
  * Host ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#hostid ItemTrapper#hostid}
  */
  readonly hostid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#id ItemTrapper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Item KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#key ItemTrapper#key}
  */
  readonly key: string;
  /**
  * Item Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#name ItemTrapper#name}
  */
  readonly name: string;
  /**
  * Item Trends
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#trends ItemTrapper#trends}
  */
  readonly trends?: string;
  /**
  * Item Value Type, one of: float, character, log, unsigned, text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#valuetype ItemTrapper#valuetype}
  */
  readonly valuetype: string;
  /**
  * preprocessor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#preprocessor ItemTrapper#preprocessor}
  */
  readonly preprocessor?: ItemTrapperPreprocessor[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#tag ItemTrapper#tag}
  */
  readonly tag?: ItemTrapperTag[] | cdktf.IResolvable;
}
export interface ItemTrapperPreprocessor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#error_handler ItemTrapper#error_handler}
  */
  readonly errorHandler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#error_handler_params ItemTrapper#error_handler_params}
  */
  readonly errorHandlerParams?: string;
  /**
  * Preprocessor parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#params ItemTrapper#params}
  */
  readonly params?: string[];
  /**
  * Preprocessor type, zabbix identifier number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#type ItemTrapper#type}
  */
  readonly type: string;
}

export function itemTrapperPreprocessorToTerraform(struct?: ItemTrapperPreprocessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_handler: cdktf.stringToTerraform(struct!.errorHandler),
    error_handler_params: cdktf.stringToTerraform(struct!.errorHandlerParams),
    params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.params),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function itemTrapperPreprocessorToHclTerraform(struct?: ItemTrapperPreprocessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_handler: {
      value: cdktf.stringToHclTerraform(struct!.errorHandler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handler_params: {
      value: cdktf.stringToHclTerraform(struct!.errorHandlerParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.params),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ItemTrapperPreprocessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItemTrapperPreprocessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorHandler !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandler = this._errorHandler;
    }
    if (this._errorHandlerParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlerParams = this._errorHandlerParams;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemTrapperPreprocessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorHandler = undefined;
      this._errorHandlerParams = undefined;
      this._params = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorHandler = value.errorHandler;
      this._errorHandlerParams = value.errorHandlerParams;
      this._params = value.params;
      this._type = value.type;
    }
  }

  // error_handler - computed: false, optional: true, required: false
  private _errorHandler?: string; 
  public get errorHandler() {
    return this.getStringAttribute('error_handler');
  }
  public set errorHandler(value: string) {
    this._errorHandler = value;
  }
  public resetErrorHandler() {
    this._errorHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlerInput() {
    return this._errorHandler;
  }

  // error_handler_params - computed: false, optional: true, required: false
  private _errorHandlerParams?: string; 
  public get errorHandlerParams() {
    return this.getStringAttribute('error_handler_params');
  }
  public set errorHandlerParams(value: string) {
    this._errorHandlerParams = value;
  }
  public resetErrorHandlerParams() {
    this._errorHandlerParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlerParamsInput() {
    return this._errorHandlerParams;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // params - computed: false, optional: true, required: false
  private _params?: string[]; 
  public get params() {
    return this.getListAttribute('params');
  }
  public set params(value: string[]) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
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
}

export class ItemTrapperPreprocessorList extends cdktf.ComplexList {
  public internalValue? : ItemTrapperPreprocessor[] | cdktf.IResolvable

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
  public get(index: number): ItemTrapperPreprocessorOutputReference {
    return new ItemTrapperPreprocessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItemTrapperTag {
  /**
  * Tag Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#key ItemTrapper#key}
  */
  readonly key: string;
  /**
  * Tag Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#value ItemTrapper#value}
  */
  readonly value?: string;
}

export function itemTrapperTagToTerraform(struct?: ItemTrapperTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function itemTrapperTagToHclTerraform(struct?: ItemTrapperTag | cdktf.IResolvable): any {
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

export class ItemTrapperTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItemTrapperTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ItemTrapperTag | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
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

export class ItemTrapperTagList extends cdktf.ComplexList {
  public internalValue? : ItemTrapperTag[] | cdktf.IResolvable

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
  public get(index: number): ItemTrapperTagOutputReference {
    return new ItemTrapperTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper zabbix_item_trapper}
*/
export class ItemTrapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zabbix_item_trapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItemTrapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItemTrapper to import
  * @param importFromId The id of the existing ItemTrapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItemTrapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zabbix_item_trapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/item_trapper zabbix_item_trapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItemTrapperConfig
  */
  public constructor(scope: Construct, id: string, config: ItemTrapperConfig) {
    super(scope, id, {
      terraformResourceType: 'zabbix_item_trapper',
      terraformGeneratorMetadata: {
        providerName: 'zabbix',
        providerVersion: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applications = config.applications;
    this._history = config.history;
    this._hostid = config.hostid;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._trends = config.trends;
    this._valuetype = config.valuetype;
    this._preprocessor.internalValue = config.preprocessor;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // history - computed: false, optional: true, required: false
  private _history?: string; 
  public get history() {
    return this.getStringAttribute('history');
  }
  public set history(value: string) {
    this._history = value;
  }
  public resetHistory() {
    this._history = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history;
  }

  // hostid - computed: false, optional: false, required: true
  private _hostid?: string; 
  public get hostid() {
    return this.getStringAttribute('hostid');
  }
  public set hostid(value: string) {
    this._hostid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostidInput() {
    return this._hostid;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // trends - computed: true, optional: true, required: false
  private _trends?: string; 
  public get trends() {
    return this.getStringAttribute('trends');
  }
  public set trends(value: string) {
    this._trends = value;
  }
  public resetTrends() {
    this._trends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendsInput() {
    return this._trends;
  }

  // valuetype - computed: false, optional: false, required: true
  private _valuetype?: string; 
  public get valuetype() {
    return this.getStringAttribute('valuetype');
  }
  public set valuetype(value: string) {
    this._valuetype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuetypeInput() {
    return this._valuetype;
  }

  // preprocessor - computed: false, optional: true, required: false
  private _preprocessor = new ItemTrapperPreprocessorList(this, "preprocessor", false);
  public get preprocessor() {
    return this._preprocessor;
  }
  public putPreprocessor(value: ItemTrapperPreprocessor[] | cdktf.IResolvable) {
    this._preprocessor.internalValue = value;
  }
  public resetPreprocessor() {
    this._preprocessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessorInput() {
    return this._preprocessor.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ItemTrapperTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ItemTrapperTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      history: cdktf.stringToTerraform(this._history),
      hostid: cdktf.stringToTerraform(this._hostid),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      trends: cdktf.stringToTerraform(this._trends),
      valuetype: cdktf.stringToTerraform(this._valuetype),
      preprocessor: cdktf.listMapper(itemTrapperPreprocessorToTerraform, true)(this._preprocessor.internalValue),
      tag: cdktf.listMapper(itemTrapperTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      history: {
        value: cdktf.stringToHclTerraform(this._history),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostid: {
        value: cdktf.stringToHclTerraform(this._hostid),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      trends: {
        value: cdktf.stringToHclTerraform(this._trends),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valuetype: {
        value: cdktf.stringToHclTerraform(this._valuetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preprocessor: {
        value: cdktf.listMapperHcl(itemTrapperPreprocessorToHclTerraform, true)(this._preprocessor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ItemTrapperPreprocessorList",
      },
      tag: {
        value: cdktf.listMapperHcl(itemTrapperTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ItemTrapperTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
