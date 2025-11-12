// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#auth_blackout_time UserSetting#auth_blackout_time}
  */
  readonly authBlackoutTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#auth_cert UserSetting#auth_cert}
  */
  readonly authCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#auth_http_basic UserSetting#auth_http_basic}
  */
  readonly authHttpBasic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#auth_invalid_max UserSetting#auth_invalid_max}
  */
  readonly authInvalidMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#auth_multi_group UserSetting#auth_multi_group}
  */
  readonly authMultiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#auth_secure_http UserSetting#auth_secure_http}
  */
  readonly authSecureHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#auth_timeout UserSetting#auth_timeout}
  */
  readonly authTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#auth_timeout_type UserSetting#auth_timeout_type}
  */
  readonly authTimeoutType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#auth_type UserSetting#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#dynamic_sort_subtable UserSetting#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#id UserSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * auth_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#auth_ports UserSetting#auth_ports}
  */
  readonly authPorts?: UserSettingAuthPorts[] | cdktf.IResolvable;
}
export interface UserSettingAuthPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#id UserSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#port UserSetting#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#type UserSetting#type}
  */
  readonly type?: string;
}

export function userSettingAuthPortsToTerraform(struct?: UserSettingAuthPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    port: cdktf.numberToTerraform(struct!.port),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userSettingAuthPortsToHclTerraform(struct?: UserSettingAuthPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class UserSettingAuthPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserSettingAuthPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserSettingAuthPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._port = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._port = value.port;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class UserSettingAuthPortsList extends cdktf.ComplexList {
  public internalValue? : UserSettingAuthPorts[] | cdktf.IResolvable

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
  public get(index: number): UserSettingAuthPortsOutputReference {
    return new UserSettingAuthPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting fortiswitch_user_setting}
*/
export class UserSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_user_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserSetting to import
  * @param importFromId The id of the existing UserSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_user_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/user_setting fortiswitch_user_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_user_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authBlackoutTime = config.authBlackoutTime;
    this._authCert = config.authCert;
    this._authHttpBasic = config.authHttpBasic;
    this._authInvalidMax = config.authInvalidMax;
    this._authMultiGroup = config.authMultiGroup;
    this._authSecureHttp = config.authSecureHttp;
    this._authTimeout = config.authTimeout;
    this._authTimeoutType = config.authTimeoutType;
    this._authType = config.authType;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._authPorts.internalValue = config.authPorts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_blackout_time - computed: true, optional: true, required: false
  private _authBlackoutTime?: number; 
  public get authBlackoutTime() {
    return this.getNumberAttribute('auth_blackout_time');
  }
  public set authBlackoutTime(value: number) {
    this._authBlackoutTime = value;
  }
  public resetAuthBlackoutTime() {
    this._authBlackoutTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBlackoutTimeInput() {
    return this._authBlackoutTime;
  }

  // auth_cert - computed: true, optional: true, required: false
  private _authCert?: string; 
  public get authCert() {
    return this.getStringAttribute('auth_cert');
  }
  public set authCert(value: string) {
    this._authCert = value;
  }
  public resetAuthCert() {
    this._authCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCertInput() {
    return this._authCert;
  }

  // auth_http_basic - computed: true, optional: true, required: false
  private _authHttpBasic?: string; 
  public get authHttpBasic() {
    return this.getStringAttribute('auth_http_basic');
  }
  public set authHttpBasic(value: string) {
    this._authHttpBasic = value;
  }
  public resetAuthHttpBasic() {
    this._authHttpBasic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHttpBasicInput() {
    return this._authHttpBasic;
  }

  // auth_invalid_max - computed: true, optional: true, required: false
  private _authInvalidMax?: number; 
  public get authInvalidMax() {
    return this.getNumberAttribute('auth_invalid_max');
  }
  public set authInvalidMax(value: number) {
    this._authInvalidMax = value;
  }
  public resetAuthInvalidMax() {
    this._authInvalidMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInvalidMaxInput() {
    return this._authInvalidMax;
  }

  // auth_multi_group - computed: true, optional: true, required: false
  private _authMultiGroup?: string; 
  public get authMultiGroup() {
    return this.getStringAttribute('auth_multi_group');
  }
  public set authMultiGroup(value: string) {
    this._authMultiGroup = value;
  }
  public resetAuthMultiGroup() {
    this._authMultiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMultiGroupInput() {
    return this._authMultiGroup;
  }

  // auth_secure_http - computed: true, optional: true, required: false
  private _authSecureHttp?: string; 
  public get authSecureHttp() {
    return this.getStringAttribute('auth_secure_http');
  }
  public set authSecureHttp(value: string) {
    this._authSecureHttp = value;
  }
  public resetAuthSecureHttp() {
    this._authSecureHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSecureHttpInput() {
    return this._authSecureHttp;
  }

  // auth_timeout - computed: true, optional: true, required: false
  private _authTimeout?: number; 
  public get authTimeout() {
    return this.getNumberAttribute('auth_timeout');
  }
  public set authTimeout(value: number) {
    this._authTimeout = value;
  }
  public resetAuthTimeout() {
    this._authTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTimeoutInput() {
    return this._authTimeout;
  }

  // auth_timeout_type - computed: true, optional: true, required: false
  private _authTimeoutType?: string; 
  public get authTimeoutType() {
    return this.getStringAttribute('auth_timeout_type');
  }
  public set authTimeoutType(value: string) {
    this._authTimeoutType = value;
  }
  public resetAuthTimeoutType() {
    this._authTimeoutType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTimeoutTypeInput() {
    return this._authTimeoutType;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // auth_ports - computed: false, optional: true, required: false
  private _authPorts = new UserSettingAuthPortsList(this, "auth_ports", false);
  public get authPorts() {
    return this._authPorts;
  }
  public putAuthPorts(value: UserSettingAuthPorts[] | cdktf.IResolvable) {
    this._authPorts.internalValue = value;
  }
  public resetAuthPorts() {
    this._authPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortsInput() {
    return this._authPorts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_blackout_time: cdktf.numberToTerraform(this._authBlackoutTime),
      auth_cert: cdktf.stringToTerraform(this._authCert),
      auth_http_basic: cdktf.stringToTerraform(this._authHttpBasic),
      auth_invalid_max: cdktf.numberToTerraform(this._authInvalidMax),
      auth_multi_group: cdktf.stringToTerraform(this._authMultiGroup),
      auth_secure_http: cdktf.stringToTerraform(this._authSecureHttp),
      auth_timeout: cdktf.numberToTerraform(this._authTimeout),
      auth_timeout_type: cdktf.stringToTerraform(this._authTimeoutType),
      auth_type: cdktf.stringToTerraform(this._authType),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      auth_ports: cdktf.listMapper(userSettingAuthPortsToTerraform, true)(this._authPorts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_blackout_time: {
        value: cdktf.numberToHclTerraform(this._authBlackoutTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_cert: {
        value: cdktf.stringToHclTerraform(this._authCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_http_basic: {
        value: cdktf.stringToHclTerraform(this._authHttpBasic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_invalid_max: {
        value: cdktf.numberToHclTerraform(this._authInvalidMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_multi_group: {
        value: cdktf.stringToHclTerraform(this._authMultiGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_secure_http: {
        value: cdktf.stringToHclTerraform(this._authSecureHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_timeout: {
        value: cdktf.numberToHclTerraform(this._authTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_timeout_type: {
        value: cdktf.stringToHclTerraform(this._authTimeoutType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      auth_ports: {
        value: cdktf.listMapperHcl(userSettingAuthPortsToHclTerraform, true)(this._authPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserSettingAuthPortsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
