// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcssImageRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#id TcssImageRegistry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Valid values: `0` (secure mode with certificate verification, which is the default value); `1` (unsecure mode that skips certificate verification).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#insecure TcssImageRegistry#insecure}
  */
  readonly insecure?: number;
  /**
  * Repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#name TcssImageRegistry#name}
  */
  readonly name: string;
  /**
  * Whether to scan the latest image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#need_scan TcssImageRegistry#need_scan}
  */
  readonly needScan?: boolean | cdktf.IResolvable;
  /**
  * Network type, which can be `public` (public network).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#net_type TcssImageRegistry#net_type}
  */
  readonly netType: string;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#password TcssImageRegistry#password}
  */
  readonly password: string;
  /**
  * Region. Default value: `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#registry_region TcssImageRegistry#registry_region}
  */
  readonly registryRegion?: string;
  /**
  * Repository type, which can be `harbor`. Valid values: harbor, quay, jfrog, aws, azure, other-tcr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#registry_type TcssImageRegistry#registry_type}
  */
  readonly registryType: string;
  /**
  * Repository version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#registry_version TcssImageRegistry#registry_version}
  */
  readonly registryVersion?: string;
  /**
  * Speed limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#speed_limit TcssImageRegistry#speed_limit}
  */
  readonly speedLimit?: number;
  /**
  * Repository URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#url TcssImageRegistry#url}
  */
  readonly url: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#username TcssImageRegistry#username}
  */
  readonly username: string;
  /**
  * conn_detect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#conn_detect_config TcssImageRegistry#conn_detect_config}
  */
  readonly connDetectConfig?: TcssImageRegistryConnDetectConfig[] | cdktf.IResolvable;
}
export interface TcssImageRegistryConnDetectConfig {
  /**
  * Host Quuid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#quuid TcssImageRegistry#quuid}
  */
  readonly quuid?: string;
  /**
  * Host uuid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#uuid TcssImageRegistry#uuid}
  */
  readonly uuid?: string;
}

export function tcssImageRegistryConnDetectConfigToTerraform(struct?: TcssImageRegistryConnDetectConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quuid: cdktf.stringToTerraform(struct!.quuid),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function tcssImageRegistryConnDetectConfigToHclTerraform(struct?: TcssImageRegistryConnDetectConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quuid: {
      value: cdktf.stringToHclTerraform(struct!.quuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcssImageRegistryConnDetectConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TcssImageRegistryConnDetectConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.quuid = this._quuid;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcssImageRegistryConnDetectConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quuid = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quuid = value.quuid;
      this._uuid = value.uuid;
    }
  }

  // quuid - computed: false, optional: true, required: false
  private _quuid?: string; 
  public get quuid() {
    return this.getStringAttribute('quuid');
  }
  public set quuid(value: string) {
    this._quuid = value;
  }
  public resetQuuid() {
    this._quuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quuidInput() {
    return this._quuid;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class TcssImageRegistryConnDetectConfigList extends cdktf.ComplexList {
  public internalValue? : TcssImageRegistryConnDetectConfig[] | cdktf.IResolvable

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
  public get(index: number): TcssImageRegistryConnDetectConfigOutputReference {
    return new TcssImageRegistryConnDetectConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry tencentcloud_tcss_image_registry}
*/
export class TcssImageRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcss_image_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcssImageRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcssImageRegistry to import
  * @param importFromId The id of the existing TcssImageRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcssImageRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcss_image_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_image_registry tencentcloud_tcss_image_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcssImageRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: TcssImageRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcss_image_registry',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
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
    this._insecure = config.insecure;
    this._name = config.name;
    this._needScan = config.needScan;
    this._netType = config.netType;
    this._password = config.password;
    this._registryRegion = config.registryRegion;
    this._registryType = config.registryType;
    this._registryVersion = config.registryVersion;
    this._speedLimit = config.speedLimit;
    this._url = config.url;
    this._username = config.username;
    this._connDetectConfig.internalValue = config.connDetectConfig;
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

  // insecure - computed: false, optional: true, required: false
  private _insecure?: number; 
  public get insecure() {
    return this.getNumberAttribute('insecure');
  }
  public set insecure(value: number) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
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

  // need_scan - computed: false, optional: true, required: false
  private _needScan?: boolean | cdktf.IResolvable; 
  public get needScan() {
    return this.getBooleanAttribute('need_scan');
  }
  public set needScan(value: boolean | cdktf.IResolvable) {
    this._needScan = value;
  }
  public resetNeedScan() {
    this._needScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needScanInput() {
    return this._needScan;
  }

  // net_type - computed: false, optional: false, required: true
  private _netType?: string; 
  public get netType() {
    return this.getStringAttribute('net_type');
  }
  public set netType(value: string) {
    this._netType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netTypeInput() {
    return this._netType;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // registry_region - computed: false, optional: true, required: false
  private _registryRegion?: string; 
  public get registryRegion() {
    return this.getStringAttribute('registry_region');
  }
  public set registryRegion(value: string) {
    this._registryRegion = value;
  }
  public resetRegistryRegion() {
    this._registryRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryRegionInput() {
    return this._registryRegion;
  }

  // registry_type - computed: false, optional: false, required: true
  private _registryType?: string; 
  public get registryType() {
    return this.getStringAttribute('registry_type');
  }
  public set registryType(value: string) {
    this._registryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryTypeInput() {
    return this._registryType;
  }

  // registry_version - computed: false, optional: true, required: false
  private _registryVersion?: string; 
  public get registryVersion() {
    return this.getStringAttribute('registry_version');
  }
  public set registryVersion(value: string) {
    this._registryVersion = value;
  }
  public resetRegistryVersion() {
    this._registryVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryVersionInput() {
    return this._registryVersion;
  }

  // speed_limit - computed: false, optional: true, required: false
  private _speedLimit?: number; 
  public get speedLimit() {
    return this.getNumberAttribute('speed_limit');
  }
  public set speedLimit(value: number) {
    this._speedLimit = value;
  }
  public resetSpeedLimit() {
    this._speedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedLimitInput() {
    return this._speedLimit;
  }

  // sync_status - computed: true, optional: false, required: false
  public get syncStatus() {
    return this.getStringAttribute('sync_status');
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // conn_detect_config - computed: false, optional: true, required: false
  private _connDetectConfig = new TcssImageRegistryConnDetectConfigList(this, "conn_detect_config", true);
  public get connDetectConfig() {
    return this._connDetectConfig;
  }
  public putConnDetectConfig(value: TcssImageRegistryConnDetectConfig[] | cdktf.IResolvable) {
    this._connDetectConfig.internalValue = value;
  }
  public resetConnDetectConfig() {
    this._connDetectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connDetectConfigInput() {
    return this._connDetectConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      insecure: cdktf.numberToTerraform(this._insecure),
      name: cdktf.stringToTerraform(this._name),
      need_scan: cdktf.booleanToTerraform(this._needScan),
      net_type: cdktf.stringToTerraform(this._netType),
      password: cdktf.stringToTerraform(this._password),
      registry_region: cdktf.stringToTerraform(this._registryRegion),
      registry_type: cdktf.stringToTerraform(this._registryType),
      registry_version: cdktf.stringToTerraform(this._registryVersion),
      speed_limit: cdktf.numberToTerraform(this._speedLimit),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      conn_detect_config: cdktf.listMapper(tcssImageRegistryConnDetectConfigToTerraform, true)(this._connDetectConfig.internalValue),
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
      insecure: {
        value: cdktf.numberToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      need_scan: {
        value: cdktf.booleanToHclTerraform(this._needScan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      net_type: {
        value: cdktf.stringToHclTerraform(this._netType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_region: {
        value: cdktf.stringToHclTerraform(this._registryRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_type: {
        value: cdktf.stringToHclTerraform(this._registryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_version: {
        value: cdktf.stringToHclTerraform(this._registryVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed_limit: {
        value: cdktf.numberToHclTerraform(this._speedLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_detect_config: {
        value: cdktf.listMapperHcl(tcssImageRegistryConnDetectConfigToHclTerraform, true)(this._connDetectConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TcssImageRegistryConnDetectConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
