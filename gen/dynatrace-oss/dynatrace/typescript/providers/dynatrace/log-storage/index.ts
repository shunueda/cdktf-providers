// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage#enabled LogStorage#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage#id LogStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage#insert_after LogStorage#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage#name LogStorage#name}
  */
  readonly name: string;
  /**
  * The scope of this setting (HOST, KUBERNETES_CLUSTER, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage#scope LogStorage#scope}
  */
  readonly scope?: string;
  /**
  * If `true` matching logs will be included in storage. If `false` matching logs will be excluded from storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage#send_to_storage LogStorage#send_to_storage}
  */
  readonly sendToStorage: boolean | cdktf.IResolvable;
  /**
  * matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage#matchers LogStorage#matchers}
  */
  readonly matchers?: LogStorageMatchers;
}
export interface LogStorageMatchersMatcher {
  /**
  * Possible Values: `Container_name`, `Dt_entity_container_group`, `Dt_entity_process_group`, `Host_tag`, `Journald_unit`, `K8s_container_name`, `K8s_deployment_name`, `K8s_namespace_name`, `K8s_pod_annotation`, `K8s_pod_label`, `K8s_workload_kind`, `K8s_workload_name`, `Log_content`, `Log_source`, `Log_source_origin`, `Loglevel`, `Process_technology`, `Winlog_eventid`, `Winlog_keywords`, `Winlog_opcode`, `Winlog_provider`, `Winlog_task`, `Winlog_username`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage#attribute LogStorage#attribute}
  */
  readonly attribute: string;
  /**
  * Possible Values: `MATCHES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage#operator LogStorage#operator}
  */
  readonly operator: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage#values LogStorage#values}
  */
  readonly values: string[];
}

export function logStorageMatchersMatcherToTerraform(struct?: LogStorageMatchersMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function logStorageMatchersMatcherToHclTerraform(struct?: LogStorageMatchersMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStorageMatchersMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogStorageMatchersMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStorageMatchersMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class LogStorageMatchersMatcherList extends cdktf.ComplexList {
  public internalValue? : LogStorageMatchersMatcher[] | cdktf.IResolvable

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
  public get(index: number): LogStorageMatchersMatcherOutputReference {
    return new LogStorageMatchersMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogStorageMatchers {
  /**
  * matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage#matcher LogStorage#matcher}
  */
  readonly matcher: LogStorageMatchersMatcher[] | cdktf.IResolvable;
}

export function logStorageMatchersToTerraform(struct?: LogStorageMatchersOutputReference | LogStorageMatchers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matcher: cdktf.listMapper(logStorageMatchersMatcherToTerraform, true)(struct!.matcher),
  }
}


export function logStorageMatchersToHclTerraform(struct?: LogStorageMatchersOutputReference | LogStorageMatchers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matcher: {
      value: cdktf.listMapperHcl(logStorageMatchersMatcherToHclTerraform, true)(struct!.matcher),
      isBlock: true,
      type: "set",
      storageClassType: "LogStorageMatchersMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStorageMatchersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogStorageMatchers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStorageMatchers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matcher.internalValue = value.matcher;
    }
  }

  // matcher - computed: false, optional: false, required: true
  private _matcher = new LogStorageMatchersMatcherList(this, "matcher", true);
  public get matcher() {
    return this._matcher;
  }
  public putMatcher(value: LogStorageMatchersMatcher[] | cdktf.IResolvable) {
    this._matcher.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage dynatrace_log_storage}
*/
export class LogStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_log_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogStorage to import
  * @param importFromId The id of the existing LogStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_log_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_storage dynatrace_log_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogStorageConfig
  */
  public constructor(scope: Construct, id: string, config: LogStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_log_storage',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._name = config.name;
    this._scope = config.scope;
    this._sendToStorage = config.sendToStorage;
    this._matchers.internalValue = config.matchers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // send_to_storage - computed: false, optional: false, required: true
  private _sendToStorage?: boolean | cdktf.IResolvable; 
  public get sendToStorage() {
    return this.getBooleanAttribute('send_to_storage');
  }
  public set sendToStorage(value: boolean | cdktf.IResolvable) {
    this._sendToStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToStorageInput() {
    return this._sendToStorage;
  }

  // matchers - computed: false, optional: true, required: false
  private _matchers = new LogStorageMatchersOutputReference(this, "matchers");
  public get matchers() {
    return this._matchers;
  }
  public putMatchers(value: LogStorageMatchers) {
    this._matchers.internalValue = value;
  }
  public resetMatchers() {
    this._matchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchersInput() {
    return this._matchers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      send_to_storage: cdktf.booleanToTerraform(this._sendToStorage),
      matchers: logStorageMatchersToTerraform(this._matchers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_to_storage: {
        value: cdktf.booleanToHclTerraform(this._sendToStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      matchers: {
        value: logStorageMatchersToHclTerraform(this._matchers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogStorageMatchersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
