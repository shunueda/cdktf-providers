// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcmAccessLogConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Third party grpc server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#address TcmAccessLogConfig#address}
  */
  readonly address?: string;
  /**
  * Whether enable log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#enable TcmAccessLogConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Whether enable third party grpc server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#enable_server TcmAccessLogConfig#enable_server}
  */
  readonly enableServer?: boolean | cdktf.IResolvable;
  /**
  * Whether enable stdout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#enable_stdout TcmAccessLogConfig#enable_stdout}
  */
  readonly enableStdout?: boolean | cdktf.IResolvable;
  /**
  * Log encoding, TEXT or JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#encoding TcmAccessLogConfig#encoding}
  */
  readonly encoding?: string;
  /**
  * Log format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#format TcmAccessLogConfig#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#id TcmAccessLogConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mesh ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#mesh_name TcmAccessLogConfig#mesh_name}
  */
  readonly meshName: string;
  /**
  * Log template, istio/trace/custome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#template TcmAccessLogConfig#template}
  */
  readonly template?: string;
  /**
  * cls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#cls TcmAccessLogConfig#cls}
  */
  readonly cls?: TcmAccessLogConfigCls;
  /**
  * selected_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#selected_range TcmAccessLogConfig#selected_range}
  */
  readonly selectedRange?: TcmAccessLogConfigSelectedRange;
}
export interface TcmAccessLogConfigCls {
  /**
  * Whether enable CLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#enable TcmAccessLogConfig#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Log set of CLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#log_set TcmAccessLogConfig#log_set}
  */
  readonly logSet?: string;
  /**
  * Log topic of CLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#topic TcmAccessLogConfig#topic}
  */
  readonly topic?: string;
}

export function tcmAccessLogConfigClsToTerraform(struct?: TcmAccessLogConfigClsOutputReference | TcmAccessLogConfigCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    log_set: cdktf.stringToTerraform(struct!.logSet),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function tcmAccessLogConfigClsToHclTerraform(struct?: TcmAccessLogConfigClsOutputReference | TcmAccessLogConfigCls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_set: {
      value: cdktf.stringToHclTerraform(struct!.logSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmAccessLogConfigClsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmAccessLogConfigCls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._logSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSet = this._logSet;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmAccessLogConfigCls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._logSet = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._logSet = value.logSet;
      this._topic = value.topic;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // log_set - computed: false, optional: true, required: false
  private _logSet?: string; 
  public get logSet() {
    return this.getStringAttribute('log_set');
  }
  public set logSet(value: string) {
    this._logSet = value;
  }
  public resetLogSet() {
    this._logSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSetInput() {
    return this._logSet;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface TcmAccessLogConfigSelectedRangeItems {
  /**
  * Ingress gateway list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#gateways TcmAccessLogConfig#gateways}
  */
  readonly gateways?: string[];
  /**
  * Namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#namespace TcmAccessLogConfig#namespace}
  */
  readonly namespace?: string;
}

export function tcmAccessLogConfigSelectedRangeItemsToTerraform(struct?: TcmAccessLogConfigSelectedRangeItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gateways),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function tcmAccessLogConfigSelectedRangeItemsToHclTerraform(struct?: TcmAccessLogConfigSelectedRangeItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gateways),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmAccessLogConfigSelectedRangeItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TcmAccessLogConfigSelectedRangeItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmAccessLogConfigSelectedRangeItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateways = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateways = value.gateways;
      this._namespace = value.namespace;
    }
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string[]; 
  public get gateways() {
    return cdktf.Fn.tolist(this.getListAttribute('gateways'));
  }
  public set gateways(value: string[]) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
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
}

export class TcmAccessLogConfigSelectedRangeItemsList extends cdktf.ComplexList {
  public internalValue? : TcmAccessLogConfigSelectedRangeItems[] | cdktf.IResolvable

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
  public get(index: number): TcmAccessLogConfigSelectedRangeItemsOutputReference {
    return new TcmAccessLogConfigSelectedRangeItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TcmAccessLogConfigSelectedRange {
  /**
  * Select all if true, default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#all TcmAccessLogConfig#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#items TcmAccessLogConfig#items}
  */
  readonly items?: TcmAccessLogConfigSelectedRangeItems[] | cdktf.IResolvable;
}

export function tcmAccessLogConfigSelectedRangeToTerraform(struct?: TcmAccessLogConfigSelectedRangeOutputReference | TcmAccessLogConfigSelectedRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    items: cdktf.listMapper(tcmAccessLogConfigSelectedRangeItemsToTerraform, true)(struct!.items),
  }
}


export function tcmAccessLogConfigSelectedRangeToHclTerraform(struct?: TcmAccessLogConfigSelectedRangeOutputReference | TcmAccessLogConfigSelectedRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    items: {
      value: cdktf.listMapperHcl(tcmAccessLogConfigSelectedRangeItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "TcmAccessLogConfigSelectedRangeItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcmAccessLogConfigSelectedRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcmAccessLogConfigSelectedRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcmAccessLogConfigSelectedRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._items.internalValue = value.items;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // items - computed: false, optional: true, required: false
  private _items = new TcmAccessLogConfigSelectedRangeItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: TcmAccessLogConfigSelectedRangeItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config tencentcloud_tcm_access_log_config}
*/
export class TcmAccessLogConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcm_access_log_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcmAccessLogConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcmAccessLogConfig to import
  * @param importFromId The id of the existing TcmAccessLogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcmAccessLogConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcm_access_log_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tcm_access_log_config tencentcloud_tcm_access_log_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcmAccessLogConfigConfig
  */
  public constructor(scope: Construct, id: string, config: TcmAccessLogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcm_access_log_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._enable = config.enable;
    this._enableServer = config.enableServer;
    this._enableStdout = config.enableStdout;
    this._encoding = config.encoding;
    this._format = config.format;
    this._id = config.id;
    this._meshName = config.meshName;
    this._template = config.template;
    this._cls.internalValue = config.cls;
    this._selectedRange.internalValue = config.selectedRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // enable - computed: false, optional: true, required: false
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

  // enable_server - computed: false, optional: true, required: false
  private _enableServer?: boolean | cdktf.IResolvable; 
  public get enableServer() {
    return this.getBooleanAttribute('enable_server');
  }
  public set enableServer(value: boolean | cdktf.IResolvable) {
    this._enableServer = value;
  }
  public resetEnableServer() {
    this._enableServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServerInput() {
    return this._enableServer;
  }

  // enable_stdout - computed: false, optional: true, required: false
  private _enableStdout?: boolean | cdktf.IResolvable; 
  public get enableStdout() {
    return this.getBooleanAttribute('enable_stdout');
  }
  public set enableStdout(value: boolean | cdktf.IResolvable) {
    this._enableStdout = value;
  }
  public resetEnableStdout() {
    this._enableStdout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStdoutInput() {
    return this._enableStdout;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
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

  // mesh_name - computed: false, optional: false, required: true
  private _meshName?: string; 
  public get meshName() {
    return this.getStringAttribute('mesh_name');
  }
  public set meshName(value: string) {
    this._meshName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // cls - computed: false, optional: true, required: false
  private _cls = new TcmAccessLogConfigClsOutputReference(this, "cls");
  public get cls() {
    return this._cls;
  }
  public putCls(value: TcmAccessLogConfigCls) {
    this._cls.internalValue = value;
  }
  public resetCls() {
    this._cls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clsInput() {
    return this._cls.internalValue;
  }

  // selected_range - computed: false, optional: true, required: false
  private _selectedRange = new TcmAccessLogConfigSelectedRangeOutputReference(this, "selected_range");
  public get selectedRange() {
    return this._selectedRange;
  }
  public putSelectedRange(value: TcmAccessLogConfigSelectedRange) {
    this._selectedRange.internalValue = value;
  }
  public resetSelectedRange() {
    this._selectedRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedRangeInput() {
    return this._selectedRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      enable: cdktf.booleanToTerraform(this._enable),
      enable_server: cdktf.booleanToTerraform(this._enableServer),
      enable_stdout: cdktf.booleanToTerraform(this._enableStdout),
      encoding: cdktf.stringToTerraform(this._encoding),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      mesh_name: cdktf.stringToTerraform(this._meshName),
      template: cdktf.stringToTerraform(this._template),
      cls: tcmAccessLogConfigClsToTerraform(this._cls.internalValue),
      selected_range: tcmAccessLogConfigSelectedRangeToTerraform(this._selectedRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
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
      enable_server: {
        value: cdktf.booleanToHclTerraform(this._enableServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_stdout: {
        value: cdktf.booleanToHclTerraform(this._enableStdout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encoding: {
        value: cdktf.stringToHclTerraform(this._encoding),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_name: {
        value: cdktf.stringToHclTerraform(this._meshName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cls: {
        value: tcmAccessLogConfigClsToHclTerraform(this._cls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcmAccessLogConfigClsList",
      },
      selected_range: {
        value: tcmAccessLogConfigSelectedRangeToHclTerraform(this._selectedRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcmAccessLogConfigSelectedRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
