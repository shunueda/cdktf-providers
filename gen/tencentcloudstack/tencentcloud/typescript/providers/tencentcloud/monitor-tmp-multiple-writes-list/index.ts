// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorTmpMultipleWritesListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#id MonitorTmpMultipleWritesList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#instance_id MonitorTmpMultipleWritesList#instance_id}
  */
  readonly instanceId: string;
  /**
  * remote_writes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#remote_writes MonitorTmpMultipleWritesList#remote_writes}
  */
  readonly remoteWrites?: MonitorTmpMultipleWritesListRemoteWrites[] | cdktf.IResolvable;
}
export interface MonitorTmpMultipleWritesListRemoteWritesBasicAuth {
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#password MonitorTmpMultipleWritesList#password}
  */
  readonly password?: string;
  /**
  * User name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#user_name MonitorTmpMultipleWritesList#user_name}
  */
  readonly userName?: string;
}

export function monitorTmpMultipleWritesListRemoteWritesBasicAuthToTerraform(struct?: MonitorTmpMultipleWritesListRemoteWritesBasicAuthOutputReference | MonitorTmpMultipleWritesListRemoteWritesBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function monitorTmpMultipleWritesListRemoteWritesBasicAuthToHclTerraform(struct?: MonitorTmpMultipleWritesListRemoteWritesBasicAuthOutputReference | MonitorTmpMultipleWritesListRemoteWritesBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpMultipleWritesListRemoteWritesBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTmpMultipleWritesListRemoteWritesBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpMultipleWritesListRemoteWritesBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._userName = value.userName;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface MonitorTmpMultipleWritesListRemoteWritesHeaders {
  /**
  * HTTP header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#key MonitorTmpMultipleWritesList#key}
  */
  readonly key: string;
  /**
  * HTTP header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#value MonitorTmpMultipleWritesList#value}
  */
  readonly value?: string;
}

export function monitorTmpMultipleWritesListRemoteWritesHeadersToTerraform(struct?: MonitorTmpMultipleWritesListRemoteWritesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorTmpMultipleWritesListRemoteWritesHeadersToHclTerraform(struct?: MonitorTmpMultipleWritesListRemoteWritesHeaders | cdktf.IResolvable): any {
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

export class MonitorTmpMultipleWritesListRemoteWritesHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpMultipleWritesListRemoteWritesHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorTmpMultipleWritesListRemoteWritesHeaders | cdktf.IResolvable | undefined) {
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

export class MonitorTmpMultipleWritesListRemoteWritesHeadersList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpMultipleWritesListRemoteWritesHeaders[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpMultipleWritesListRemoteWritesHeadersOutputReference {
    return new MonitorTmpMultipleWritesListRemoteWritesHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpMultipleWritesListRemoteWrites {
  /**
  * Label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#label MonitorTmpMultipleWritesList#label}
  */
  readonly label?: string;
  /**
  * Maximum block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#max_block_size MonitorTmpMultipleWritesList#max_block_size}
  */
  readonly maxBlockSize?: string;
  /**
  * Data multiple write url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#url MonitorTmpMultipleWritesList#url}
  */
  readonly url: string;
  /**
  * RelabelConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#url_relabel_config MonitorTmpMultipleWritesList#url_relabel_config}
  */
  readonly urlRelabelConfig?: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#basic_auth MonitorTmpMultipleWritesList#basic_auth}
  */
  readonly basicAuth?: MonitorTmpMultipleWritesListRemoteWritesBasicAuth;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#headers MonitorTmpMultipleWritesList#headers}
  */
  readonly headers?: MonitorTmpMultipleWritesListRemoteWritesHeaders[] | cdktf.IResolvable;
}

export function monitorTmpMultipleWritesListRemoteWritesToTerraform(struct?: MonitorTmpMultipleWritesListRemoteWrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    max_block_size: cdktf.stringToTerraform(struct!.maxBlockSize),
    url: cdktf.stringToTerraform(struct!.url),
    url_relabel_config: cdktf.stringToTerraform(struct!.urlRelabelConfig),
    basic_auth: monitorTmpMultipleWritesListRemoteWritesBasicAuthToTerraform(struct!.basicAuth),
    headers: cdktf.listMapper(monitorTmpMultipleWritesListRemoteWritesHeadersToTerraform, true)(struct!.headers),
  }
}


export function monitorTmpMultipleWritesListRemoteWritesToHclTerraform(struct?: MonitorTmpMultipleWritesListRemoteWrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_block_size: {
      value: cdktf.stringToHclTerraform(struct!.maxBlockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_relabel_config: {
      value: cdktf.stringToHclTerraform(struct!.urlRelabelConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: monitorTmpMultipleWritesListRemoteWritesBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpMultipleWritesListRemoteWritesBasicAuthList",
    },
    headers: {
      value: cdktf.listMapperHcl(monitorTmpMultipleWritesListRemoteWritesHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpMultipleWritesListRemoteWritesHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpMultipleWritesListRemoteWritesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpMultipleWritesListRemoteWrites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._maxBlockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBlockSize = this._maxBlockSize;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._urlRelabelConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRelabelConfig = this._urlRelabelConfig;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpMultipleWritesListRemoteWrites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._maxBlockSize = undefined;
      this._url = undefined;
      this._urlRelabelConfig = undefined;
      this._basicAuth.internalValue = undefined;
      this._headers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._maxBlockSize = value.maxBlockSize;
      this._url = value.url;
      this._urlRelabelConfig = value.urlRelabelConfig;
      this._basicAuth.internalValue = value.basicAuth;
      this._headers.internalValue = value.headers;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // max_block_size - computed: false, optional: true, required: false
  private _maxBlockSize?: string; 
  public get maxBlockSize() {
    return this.getStringAttribute('max_block_size');
  }
  public set maxBlockSize(value: string) {
    this._maxBlockSize = value;
  }
  public resetMaxBlockSize() {
    this._maxBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBlockSizeInput() {
    return this._maxBlockSize;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_relabel_config - computed: false, optional: true, required: false
  private _urlRelabelConfig?: string; 
  public get urlRelabelConfig() {
    return this.getStringAttribute('url_relabel_config');
  }
  public set urlRelabelConfig(value: string) {
    this._urlRelabelConfig = value;
  }
  public resetUrlRelabelConfig() {
    this._urlRelabelConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRelabelConfigInput() {
    return this._urlRelabelConfig;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new MonitorTmpMultipleWritesListRemoteWritesBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: MonitorTmpMultipleWritesListRemoteWritesBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new MonitorTmpMultipleWritesListRemoteWritesHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: MonitorTmpMultipleWritesListRemoteWritesHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}

export class MonitorTmpMultipleWritesListRemoteWritesList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpMultipleWritesListRemoteWrites[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpMultipleWritesListRemoteWritesOutputReference {
    return new MonitorTmpMultipleWritesListRemoteWritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list tencentcloud_monitor_tmp_multiple_writes_list}
*/
export class MonitorTmpMultipleWritesList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_tmp_multiple_writes_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorTmpMultipleWritesList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorTmpMultipleWritesList to import
  * @param importFromId The id of the existing MonitorTmpMultipleWritesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorTmpMultipleWritesList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_tmp_multiple_writes_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/monitor_tmp_multiple_writes_list tencentcloud_monitor_tmp_multiple_writes_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorTmpMultipleWritesListConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorTmpMultipleWritesListConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_tmp_multiple_writes_list',
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._remoteWrites.internalValue = config.remoteWrites;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // remote_writes - computed: false, optional: true, required: false
  private _remoteWrites = new MonitorTmpMultipleWritesListRemoteWritesList(this, "remote_writes", true);
  public get remoteWrites() {
    return this._remoteWrites;
  }
  public putRemoteWrites(value: MonitorTmpMultipleWritesListRemoteWrites[] | cdktf.IResolvable) {
    this._remoteWrites.internalValue = value;
  }
  public resetRemoteWrites() {
    this._remoteWrites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteWritesInput() {
    return this._remoteWrites.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      remote_writes: cdktf.listMapper(monitorTmpMultipleWritesListRemoteWritesToTerraform, true)(this._remoteWrites.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_writes: {
        value: cdktf.listMapperHcl(monitorTmpMultipleWritesListRemoteWritesToHclTerraform, true)(this._remoteWrites.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorTmpMultipleWritesListRemoteWritesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
