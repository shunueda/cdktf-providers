// https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtoTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Trigger comments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#comments ProtoTrigger#comments}
  */
  readonly comments?: string;
  /**
  * correlation tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#correlation_tag ProtoTrigger#correlation_tag}
  */
  readonly correlationTag?: string;
  /**
  * Trigger Dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#dependencies ProtoTrigger#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * Enable this trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#enabled ProtoTrigger#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Trigger Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#expression ProtoTrigger#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#id ProtoTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Manual resolution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#manual_close ProtoTrigger#manual_close}
  */
  readonly manualClose?: boolean | cdktf.IResolvable;
  /**
  * generate multiple events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#multiple ProtoTrigger#multiple}
  */
  readonly multiple?: boolean | cdktf.IResolvable;
  /**
  * Trigger name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#name ProtoTrigger#name}
  */
  readonly name: string;
  /**
  * Trigger Priority level, one of: average, high, disaster, not_classified, info, warn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#priority ProtoTrigger#priority}
  */
  readonly priority?: string;
  /**
  * use recovery expression (recovery_none must not be true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#recovery_expression ProtoTrigger#recovery_expression}
  */
  readonly recoveryExpression?: string;
  /**
  * set recovery mode to none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#recovery_none ProtoTrigger#recovery_none}
  */
  readonly recoveryNone?: boolean | cdktf.IResolvable;
  /**
  * link to url relevent to trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#url ProtoTrigger#url}
  */
  readonly url?: string;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#tag ProtoTrigger#tag}
  */
  readonly tag?: ProtoTriggerTag[] | cdktf.IResolvable;
}
export interface ProtoTriggerTag {
  /**
  * Tag Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#key ProtoTrigger#key}
  */
  readonly key: string;
  /**
  * Tag Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#value ProtoTrigger#value}
  */
  readonly value?: string;
}

export function protoTriggerTagToTerraform(struct?: ProtoTriggerTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function protoTriggerTagToHclTerraform(struct?: ProtoTriggerTag | cdktf.IResolvable): any {
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

export class ProtoTriggerTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtoTriggerTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProtoTriggerTag | cdktf.IResolvable | undefined) {
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

export class ProtoTriggerTagList extends cdktf.ComplexList {
  public internalValue? : ProtoTriggerTag[] | cdktf.IResolvable

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
  public get(index: number): ProtoTriggerTagOutputReference {
    return new ProtoTriggerTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger zabbix_proto_trigger}
*/
export class ProtoTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zabbix_proto_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtoTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtoTrigger to import
  * @param importFromId The id of the existing ProtoTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtoTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zabbix_proto_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_trigger zabbix_proto_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtoTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: ProtoTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'zabbix_proto_trigger',
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
    this._comments = config.comments;
    this._correlationTag = config.correlationTag;
    this._dependencies = config.dependencies;
    this._enabled = config.enabled;
    this._expression = config.expression;
    this._id = config.id;
    this._manualClose = config.manualClose;
    this._multiple = config.multiple;
    this._name = config.name;
    this._priority = config.priority;
    this._recoveryExpression = config.recoveryExpression;
    this._recoveryNone = config.recoveryNone;
    this._url = config.url;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // correlation_tag - computed: false, optional: true, required: false
  private _correlationTag?: string; 
  public get correlationTag() {
    return this.getStringAttribute('correlation_tag');
  }
  public set correlationTag(value: string) {
    this._correlationTag = value;
  }
  public resetCorrelationTag() {
    this._correlationTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationTagInput() {
    return this._correlationTag;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies?: string[]; 
  public get dependencies() {
    return cdktf.Fn.tolist(this.getListAttribute('dependencies'));
  }
  public set dependencies(value: string[]) {
    this._dependencies = value;
  }
  public resetDependencies() {
    this._dependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // manual_close - computed: false, optional: true, required: false
  private _manualClose?: boolean | cdktf.IResolvable; 
  public get manualClose() {
    return this.getBooleanAttribute('manual_close');
  }
  public set manualClose(value: boolean | cdktf.IResolvable) {
    this._manualClose = value;
  }
  public resetManualClose() {
    this._manualClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualCloseInput() {
    return this._manualClose;
  }

  // multiple - computed: false, optional: true, required: false
  private _multiple?: boolean | cdktf.IResolvable; 
  public get multiple() {
    return this.getBooleanAttribute('multiple');
  }
  public set multiple(value: boolean | cdktf.IResolvable) {
    this._multiple = value;
  }
  public resetMultiple() {
    this._multiple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleInput() {
    return this._multiple;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // recovery_expression - computed: false, optional: true, required: false
  private _recoveryExpression?: string; 
  public get recoveryExpression() {
    return this.getStringAttribute('recovery_expression');
  }
  public set recoveryExpression(value: string) {
    this._recoveryExpression = value;
  }
  public resetRecoveryExpression() {
    this._recoveryExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryExpressionInput() {
    return this._recoveryExpression;
  }

  // recovery_none - computed: false, optional: true, required: false
  private _recoveryNone?: boolean | cdktf.IResolvable; 
  public get recoveryNone() {
    return this.getBooleanAttribute('recovery_none');
  }
  public set recoveryNone(value: boolean | cdktf.IResolvable) {
    this._recoveryNone = value;
  }
  public resetRecoveryNone() {
    this._recoveryNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryNoneInput() {
    return this._recoveryNone;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ProtoTriggerTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ProtoTriggerTag[] | cdktf.IResolvable) {
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
      comments: cdktf.stringToTerraform(this._comments),
      correlation_tag: cdktf.stringToTerraform(this._correlationTag),
      dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependencies),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expression: cdktf.stringToTerraform(this._expression),
      id: cdktf.stringToTerraform(this._id),
      manual_close: cdktf.booleanToTerraform(this._manualClose),
      multiple: cdktf.booleanToTerraform(this._multiple),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.stringToTerraform(this._priority),
      recovery_expression: cdktf.stringToTerraform(this._recoveryExpression),
      recovery_none: cdktf.booleanToTerraform(this._recoveryNone),
      url: cdktf.stringToTerraform(this._url),
      tag: cdktf.listMapper(protoTriggerTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      correlation_tag: {
        value: cdktf.stringToHclTerraform(this._correlationTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dependencies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dependencies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
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
      manual_close: {
        value: cdktf.booleanToHclTerraform(this._manualClose),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multiple: {
        value: cdktf.booleanToHclTerraform(this._multiple),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_expression: {
        value: cdktf.stringToHclTerraform(this._recoveryExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_none: {
        value: cdktf.booleanToHclTerraform(this._recoveryNone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.listMapperHcl(protoTriggerTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProtoTriggerTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
