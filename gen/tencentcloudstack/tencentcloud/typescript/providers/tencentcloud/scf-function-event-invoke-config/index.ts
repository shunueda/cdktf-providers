// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/scf_function_event_invoke_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScfFunctionEventInvokeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/scf_function_event_invoke_config#function_name ScfFunctionEventInvokeConfig#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/scf_function_event_invoke_config#id ScfFunctionEventInvokeConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Function namespace. Default value: default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/scf_function_event_invoke_config#namespace ScfFunctionEventInvokeConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * async_trigger_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/scf_function_event_invoke_config#async_trigger_config ScfFunctionEventInvokeConfig#async_trigger_config}
  */
  readonly asyncTriggerConfig: ScfFunctionEventInvokeConfigAsyncTriggerConfig;
}
export interface ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfig {
  /**
  * Number of retry attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/scf_function_event_invoke_config#retry_num ScfFunctionEventInvokeConfig#retry_num}
  */
  readonly retryNum: number;
}

export function scfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfigToTerraform(struct?: ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retry_num: cdktf.numberToTerraform(struct!.retryNum),
  }
}


export function scfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfigToHclTerraform(struct?: ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retry_num: {
      value: cdktf.numberToHclTerraform(struct!.retryNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retryNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryNum = this._retryNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retryNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retryNum = value.retryNum;
    }
  }

  // retry_num - computed: false, optional: false, required: true
  private _retryNum?: number; 
  public get retryNum() {
    return this.getNumberAttribute('retry_num');
  }
  public set retryNum(value: number) {
    this._retryNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryNumInput() {
    return this._retryNum;
  }
}

export class ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfigList extends cdktf.ComplexList {
  public internalValue? : ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfig[] | cdktf.IResolvable

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
  public get(index: number): ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfigOutputReference {
    return new ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScfFunctionEventInvokeConfigAsyncTriggerConfig {
  /**
  * Message retention period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/scf_function_event_invoke_config#msg_ttl ScfFunctionEventInvokeConfig#msg_ttl}
  */
  readonly msgTtl: number;
  /**
  * retry_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/scf_function_event_invoke_config#retry_config ScfFunctionEventInvokeConfig#retry_config}
  */
  readonly retryConfig: ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfig[] | cdktf.IResolvable;
}

export function scfFunctionEventInvokeConfigAsyncTriggerConfigToTerraform(struct?: ScfFunctionEventInvokeConfigAsyncTriggerConfigOutputReference | ScfFunctionEventInvokeConfigAsyncTriggerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    msg_ttl: cdktf.numberToTerraform(struct!.msgTtl),
    retry_config: cdktf.listMapper(scfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfigToTerraform, true)(struct!.retryConfig),
  }
}


export function scfFunctionEventInvokeConfigAsyncTriggerConfigToHclTerraform(struct?: ScfFunctionEventInvokeConfigAsyncTriggerConfigOutputReference | ScfFunctionEventInvokeConfigAsyncTriggerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    msg_ttl: {
      value: cdktf.numberToHclTerraform(struct!.msgTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_config: {
      value: cdktf.listMapperHcl(scfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfigToHclTerraform, true)(struct!.retryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfFunctionEventInvokeConfigAsyncTriggerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScfFunctionEventInvokeConfigAsyncTriggerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msgTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgTtl = this._msgTtl;
    }
    if (this._retryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConfig = this._retryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfFunctionEventInvokeConfigAsyncTriggerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._msgTtl = undefined;
      this._retryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._msgTtl = value.msgTtl;
      this._retryConfig.internalValue = value.retryConfig;
    }
  }

  // msg_ttl - computed: false, optional: false, required: true
  private _msgTtl?: number; 
  public get msgTtl() {
    return this.getNumberAttribute('msg_ttl');
  }
  public set msgTtl(value: number) {
    this._msgTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTtlInput() {
    return this._msgTtl;
  }

  // retry_config - computed: false, optional: false, required: true
  private _retryConfig = new ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfigList(this, "retry_config", false);
  public get retryConfig() {
    return this._retryConfig;
  }
  public putRetryConfig(value: ScfFunctionEventInvokeConfigAsyncTriggerConfigRetryConfig[] | cdktf.IResolvable) {
    this._retryConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConfigInput() {
    return this._retryConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/scf_function_event_invoke_config tencentcloud_scf_function_event_invoke_config}
*/
export class ScfFunctionEventInvokeConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_scf_function_event_invoke_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScfFunctionEventInvokeConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScfFunctionEventInvokeConfig to import
  * @param importFromId The id of the existing ScfFunctionEventInvokeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/scf_function_event_invoke_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScfFunctionEventInvokeConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_scf_function_event_invoke_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/scf_function_event_invoke_config tencentcloud_scf_function_event_invoke_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScfFunctionEventInvokeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ScfFunctionEventInvokeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_scf_function_event_invoke_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._functionName = config.functionName;
    this._id = config.id;
    this._namespace = config.namespace;
    this._asyncTriggerConfig.internalValue = config.asyncTriggerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
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

  // namespace - computed: false, optional: true, required: false
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

  // async_trigger_config - computed: false, optional: false, required: true
  private _asyncTriggerConfig = new ScfFunctionEventInvokeConfigAsyncTriggerConfigOutputReference(this, "async_trigger_config");
  public get asyncTriggerConfig() {
    return this._asyncTriggerConfig;
  }
  public putAsyncTriggerConfig(value: ScfFunctionEventInvokeConfigAsyncTriggerConfig) {
    this._asyncTriggerConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncTriggerConfigInput() {
    return this._asyncTriggerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      async_trigger_config: scfFunctionEventInvokeConfigAsyncTriggerConfigToTerraform(this._asyncTriggerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      async_trigger_config: {
        value: scfFunctionEventInvokeConfigAsyncTriggerConfigToHclTerraform(this._asyncTriggerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScfFunctionEventInvokeConfigAsyncTriggerConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
