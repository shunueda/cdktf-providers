// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorTmpMultipleWritesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#id MonitorTmpMultipleWrites#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#instance_id MonitorTmpMultipleWrites#instance_id}
  */
  readonly instanceId: string;
  /**
  * remote_writes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#remote_writes MonitorTmpMultipleWrites#remote_writes}
  */
  readonly remoteWrites?: MonitorTmpMultipleWritesRemoteWrites;
}
export interface MonitorTmpMultipleWritesRemoteWritesBasicAuth {
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#password MonitorTmpMultipleWrites#password}
  */
  readonly password?: string;
  /**
  * User name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#user_name MonitorTmpMultipleWrites#user_name}
  */
  readonly userName?: string;
}

export function monitorTmpMultipleWritesRemoteWritesBasicAuthToTerraform(struct?: MonitorTmpMultipleWritesRemoteWritesBasicAuthOutputReference | MonitorTmpMultipleWritesRemoteWritesBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function monitorTmpMultipleWritesRemoteWritesBasicAuthToHclTerraform(struct?: MonitorTmpMultipleWritesRemoteWritesBasicAuthOutputReference | MonitorTmpMultipleWritesRemoteWritesBasicAuth): any {
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

export class MonitorTmpMultipleWritesRemoteWritesBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTmpMultipleWritesRemoteWritesBasicAuth | undefined {
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

  public set internalValue(value: MonitorTmpMultipleWritesRemoteWritesBasicAuth | undefined) {
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
export interface MonitorTmpMultipleWritesRemoteWritesHeaders {
  /**
  * HTTP header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#key MonitorTmpMultipleWrites#key}
  */
  readonly key: string;
  /**
  * HTTP header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#value MonitorTmpMultipleWrites#value}
  */
  readonly value?: string;
}

export function monitorTmpMultipleWritesRemoteWritesHeadersToTerraform(struct?: MonitorTmpMultipleWritesRemoteWritesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorTmpMultipleWritesRemoteWritesHeadersToHclTerraform(struct?: MonitorTmpMultipleWritesRemoteWritesHeaders | cdktf.IResolvable): any {
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

export class MonitorTmpMultipleWritesRemoteWritesHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpMultipleWritesRemoteWritesHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorTmpMultipleWritesRemoteWritesHeaders | cdktf.IResolvable | undefined) {
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

export class MonitorTmpMultipleWritesRemoteWritesHeadersList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpMultipleWritesRemoteWritesHeaders[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpMultipleWritesRemoteWritesHeadersOutputReference {
    return new MonitorTmpMultipleWritesRemoteWritesHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpMultipleWritesRemoteWrites {
  /**
  * Label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#label MonitorTmpMultipleWrites#label}
  */
  readonly label?: string;
  /**
  * Maximum block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#max_block_size MonitorTmpMultipleWrites#max_block_size}
  */
  readonly maxBlockSize?: string;
  /**
  * Data multiple write url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#url MonitorTmpMultipleWrites#url}
  */
  readonly url: string;
  /**
  * RelabelConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#url_relabel_config MonitorTmpMultipleWrites#url_relabel_config}
  */
  readonly urlRelabelConfig?: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#basic_auth MonitorTmpMultipleWrites#basic_auth}
  */
  readonly basicAuth?: MonitorTmpMultipleWritesRemoteWritesBasicAuth;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#headers MonitorTmpMultipleWrites#headers}
  */
  readonly headers?: MonitorTmpMultipleWritesRemoteWritesHeaders[] | cdktf.IResolvable;
}

export function monitorTmpMultipleWritesRemoteWritesToTerraform(struct?: MonitorTmpMultipleWritesRemoteWritesOutputReference | MonitorTmpMultipleWritesRemoteWrites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    max_block_size: cdktf.stringToTerraform(struct!.maxBlockSize),
    url: cdktf.stringToTerraform(struct!.url),
    url_relabel_config: cdktf.stringToTerraform(struct!.urlRelabelConfig),
    basic_auth: monitorTmpMultipleWritesRemoteWritesBasicAuthToTerraform(struct!.basicAuth),
    headers: cdktf.listMapper(monitorTmpMultipleWritesRemoteWritesHeadersToTerraform, true)(struct!.headers),
  }
}


export function monitorTmpMultipleWritesRemoteWritesToHclTerraform(struct?: MonitorTmpMultipleWritesRemoteWritesOutputReference | MonitorTmpMultipleWritesRemoteWrites): any {
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
      value: monitorTmpMultipleWritesRemoteWritesBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpMultipleWritesRemoteWritesBasicAuthList",
    },
    headers: {
      value: cdktf.listMapperHcl(monitorTmpMultipleWritesRemoteWritesHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpMultipleWritesRemoteWritesHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpMultipleWritesRemoteWritesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTmpMultipleWritesRemoteWrites | undefined {
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

  public set internalValue(value: MonitorTmpMultipleWritesRemoteWrites | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
      this._maxBlockSize = undefined;
      this._url = undefined;
      this._urlRelabelConfig = undefined;
      this._basicAuth.internalValue = undefined;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _basicAuth = new MonitorTmpMultipleWritesRemoteWritesBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: MonitorTmpMultipleWritesRemoteWritesBasicAuth) {
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
  private _headers = new MonitorTmpMultipleWritesRemoteWritesHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: MonitorTmpMultipleWritesRemoteWritesHeaders[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes tencentcloud_monitor_tmp_multiple_writes}
*/
export class MonitorTmpMultipleWrites extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_tmp_multiple_writes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorTmpMultipleWrites resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorTmpMultipleWrites to import
  * @param importFromId The id of the existing MonitorTmpMultipleWrites that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorTmpMultipleWrites to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_tmp_multiple_writes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/monitor_tmp_multiple_writes tencentcloud_monitor_tmp_multiple_writes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorTmpMultipleWritesConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorTmpMultipleWritesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_tmp_multiple_writes',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
  private _remoteWrites = new MonitorTmpMultipleWritesRemoteWritesOutputReference(this, "remote_writes");
  public get remoteWrites() {
    return this._remoteWrites;
  }
  public putRemoteWrites(value: MonitorTmpMultipleWritesRemoteWrites) {
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
      remote_writes: monitorTmpMultipleWritesRemoteWritesToTerraform(this._remoteWrites.internalValue),
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
        value: monitorTmpMultipleWritesRemoteWritesToHclTerraform(this._remoteWrites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorTmpMultipleWritesRemoteWritesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
