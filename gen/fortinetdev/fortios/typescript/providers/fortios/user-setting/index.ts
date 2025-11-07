// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_blackout_time UserSetting#auth_blackout_time}
  */
  readonly authBlackoutTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_ca_cert UserSetting#auth_ca_cert}
  */
  readonly authCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_cert UserSetting#auth_cert}
  */
  readonly authCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_http_basic UserSetting#auth_http_basic}
  */
  readonly authHttpBasic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_invalid_max UserSetting#auth_invalid_max}
  */
  readonly authInvalidMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_lockout_duration UserSetting#auth_lockout_duration}
  */
  readonly authLockoutDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_lockout_threshold UserSetting#auth_lockout_threshold}
  */
  readonly authLockoutThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_on_demand UserSetting#auth_on_demand}
  */
  readonly authOnDemand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_portal_timeout UserSetting#auth_portal_timeout}
  */
  readonly authPortalTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_secure_http UserSetting#auth_secure_http}
  */
  readonly authSecureHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_src_mac UserSetting#auth_src_mac}
  */
  readonly authSrcMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_ssl_allow_renegotiation UserSetting#auth_ssl_allow_renegotiation}
  */
  readonly authSslAllowRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_ssl_max_proto_version UserSetting#auth_ssl_max_proto_version}
  */
  readonly authSslMaxProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_ssl_min_proto_version UserSetting#auth_ssl_min_proto_version}
  */
  readonly authSslMinProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_ssl_sigalgs UserSetting#auth_ssl_sigalgs}
  */
  readonly authSslSigalgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_timeout UserSetting#auth_timeout}
  */
  readonly authTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_timeout_type UserSetting#auth_timeout_type}
  */
  readonly authTimeoutType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_type UserSetting#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#cors UserSetting#cors}
  */
  readonly cors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#default_user_password_policy UserSetting#default_user_password_policy}
  */
  readonly defaultUserPasswordPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#dynamic_sort_subtable UserSetting#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#get_all_tables UserSetting#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#id UserSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#per_policy_disclaimer UserSetting#per_policy_disclaimer}
  */
  readonly perPolicyDisclaimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#radius_ses_timeout_act UserSetting#radius_ses_timeout_act}
  */
  readonly radiusSesTimeoutAct?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#vdomparam UserSetting#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * auth_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#auth_ports UserSetting#auth_ports}
  */
  readonly authPorts?: UserSettingAuthPorts[] | cdktf.IResolvable;
  /**
  * cors_allowed_origins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#cors_allowed_origins UserSetting#cors_allowed_origins}
  */
  readonly corsAllowedOrigins?: UserSettingCorsAllowedOrigins[] | cdktf.IResolvable;
}
export interface UserSettingAuthPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#id UserSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#port UserSetting#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#type UserSetting#type}
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

  // id - computed: false, optional: true, required: false
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
export interface UserSettingCorsAllowedOrigins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#name UserSetting#name}
  */
  readonly name?: string;
}

export function userSettingCorsAllowedOriginsToTerraform(struct?: UserSettingCorsAllowedOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function userSettingCorsAllowedOriginsToHclTerraform(struct?: UserSettingCorsAllowedOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserSettingCorsAllowedOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserSettingCorsAllowedOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserSettingCorsAllowedOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class UserSettingCorsAllowedOriginsList extends cdktf.ComplexList {
  public internalValue? : UserSettingCorsAllowedOrigins[] | cdktf.IResolvable

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
  public get(index: number): UserSettingCorsAllowedOriginsOutputReference {
    return new UserSettingCorsAllowedOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting fortios_user_setting}
*/
export class UserSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_user_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserSetting to import
  * @param importFromId The id of the existing UserSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_user_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_setting fortios_user_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_user_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._authCaCert = config.authCaCert;
    this._authCert = config.authCert;
    this._authHttpBasic = config.authHttpBasic;
    this._authInvalidMax = config.authInvalidMax;
    this._authLockoutDuration = config.authLockoutDuration;
    this._authLockoutThreshold = config.authLockoutThreshold;
    this._authOnDemand = config.authOnDemand;
    this._authPortalTimeout = config.authPortalTimeout;
    this._authSecureHttp = config.authSecureHttp;
    this._authSrcMac = config.authSrcMac;
    this._authSslAllowRenegotiation = config.authSslAllowRenegotiation;
    this._authSslMaxProtoVersion = config.authSslMaxProtoVersion;
    this._authSslMinProtoVersion = config.authSslMinProtoVersion;
    this._authSslSigalgs = config.authSslSigalgs;
    this._authTimeout = config.authTimeout;
    this._authTimeoutType = config.authTimeoutType;
    this._authType = config.authType;
    this._cors = config.cors;
    this._defaultUserPasswordPolicy = config.defaultUserPasswordPolicy;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._perPolicyDisclaimer = config.perPolicyDisclaimer;
    this._radiusSesTimeoutAct = config.radiusSesTimeoutAct;
    this._vdomparam = config.vdomparam;
    this._authPorts.internalValue = config.authPorts;
    this._corsAllowedOrigins.internalValue = config.corsAllowedOrigins;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_blackout_time - computed: false, optional: true, required: false
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

  // auth_ca_cert - computed: false, optional: true, required: false
  private _authCaCert?: string; 
  public get authCaCert() {
    return this.getStringAttribute('auth_ca_cert');
  }
  public set authCaCert(value: string) {
    this._authCaCert = value;
  }
  public resetAuthCaCert() {
    this._authCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCaCertInput() {
    return this._authCaCert;
  }

  // auth_cert - computed: false, optional: true, required: false
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

  // auth_lockout_duration - computed: false, optional: true, required: false
  private _authLockoutDuration?: number; 
  public get authLockoutDuration() {
    return this.getNumberAttribute('auth_lockout_duration');
  }
  public set authLockoutDuration(value: number) {
    this._authLockoutDuration = value;
  }
  public resetAuthLockoutDuration() {
    this._authLockoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLockoutDurationInput() {
    return this._authLockoutDuration;
  }

  // auth_lockout_threshold - computed: true, optional: true, required: false
  private _authLockoutThreshold?: number; 
  public get authLockoutThreshold() {
    return this.getNumberAttribute('auth_lockout_threshold');
  }
  public set authLockoutThreshold(value: number) {
    this._authLockoutThreshold = value;
  }
  public resetAuthLockoutThreshold() {
    this._authLockoutThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLockoutThresholdInput() {
    return this._authLockoutThreshold;
  }

  // auth_on_demand - computed: true, optional: true, required: false
  private _authOnDemand?: string; 
  public get authOnDemand() {
    return this.getStringAttribute('auth_on_demand');
  }
  public set authOnDemand(value: string) {
    this._authOnDemand = value;
  }
  public resetAuthOnDemand() {
    this._authOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authOnDemandInput() {
    return this._authOnDemand;
  }

  // auth_portal_timeout - computed: true, optional: true, required: false
  private _authPortalTimeout?: number; 
  public get authPortalTimeout() {
    return this.getNumberAttribute('auth_portal_timeout');
  }
  public set authPortalTimeout(value: number) {
    this._authPortalTimeout = value;
  }
  public resetAuthPortalTimeout() {
    this._authPortalTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalTimeoutInput() {
    return this._authPortalTimeout;
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

  // auth_src_mac - computed: true, optional: true, required: false
  private _authSrcMac?: string; 
  public get authSrcMac() {
    return this.getStringAttribute('auth_src_mac');
  }
  public set authSrcMac(value: string) {
    this._authSrcMac = value;
  }
  public resetAuthSrcMac() {
    this._authSrcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSrcMacInput() {
    return this._authSrcMac;
  }

  // auth_ssl_allow_renegotiation - computed: true, optional: true, required: false
  private _authSslAllowRenegotiation?: string; 
  public get authSslAllowRenegotiation() {
    return this.getStringAttribute('auth_ssl_allow_renegotiation');
  }
  public set authSslAllowRenegotiation(value: string) {
    this._authSslAllowRenegotiation = value;
  }
  public resetAuthSslAllowRenegotiation() {
    this._authSslAllowRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSslAllowRenegotiationInput() {
    return this._authSslAllowRenegotiation;
  }

  // auth_ssl_max_proto_version - computed: false, optional: true, required: false
  private _authSslMaxProtoVersion?: string; 
  public get authSslMaxProtoVersion() {
    return this.getStringAttribute('auth_ssl_max_proto_version');
  }
  public set authSslMaxProtoVersion(value: string) {
    this._authSslMaxProtoVersion = value;
  }
  public resetAuthSslMaxProtoVersion() {
    this._authSslMaxProtoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSslMaxProtoVersionInput() {
    return this._authSslMaxProtoVersion;
  }

  // auth_ssl_min_proto_version - computed: true, optional: true, required: false
  private _authSslMinProtoVersion?: string; 
  public get authSslMinProtoVersion() {
    return this.getStringAttribute('auth_ssl_min_proto_version');
  }
  public set authSslMinProtoVersion(value: string) {
    this._authSslMinProtoVersion = value;
  }
  public resetAuthSslMinProtoVersion() {
    this._authSslMinProtoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSslMinProtoVersionInput() {
    return this._authSslMinProtoVersion;
  }

  // auth_ssl_sigalgs - computed: true, optional: true, required: false
  private _authSslSigalgs?: string; 
  public get authSslSigalgs() {
    return this.getStringAttribute('auth_ssl_sigalgs');
  }
  public set authSslSigalgs(value: string) {
    this._authSslSigalgs = value;
  }
  public resetAuthSslSigalgs() {
    this._authSslSigalgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSslSigalgsInput() {
    return this._authSslSigalgs;
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

  // cors - computed: true, optional: true, required: false
  private _cors?: string; 
  public get cors() {
    return this.getStringAttribute('cors');
  }
  public set cors(value: string) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors;
  }

  // default_user_password_policy - computed: false, optional: true, required: false
  private _defaultUserPasswordPolicy?: string; 
  public get defaultUserPasswordPolicy() {
    return this.getStringAttribute('default_user_password_policy');
  }
  public set defaultUserPasswordPolicy(value: string) {
    this._defaultUserPasswordPolicy = value;
  }
  public resetDefaultUserPasswordPolicy() {
    this._defaultUserPasswordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserPasswordPolicyInput() {
    return this._defaultUserPasswordPolicy;
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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // per_policy_disclaimer - computed: true, optional: true, required: false
  private _perPolicyDisclaimer?: string; 
  public get perPolicyDisclaimer() {
    return this.getStringAttribute('per_policy_disclaimer');
  }
  public set perPolicyDisclaimer(value: string) {
    this._perPolicyDisclaimer = value;
  }
  public resetPerPolicyDisclaimer() {
    this._perPolicyDisclaimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPolicyDisclaimerInput() {
    return this._perPolicyDisclaimer;
  }

  // radius_ses_timeout_act - computed: true, optional: true, required: false
  private _radiusSesTimeoutAct?: string; 
  public get radiusSesTimeoutAct() {
    return this.getStringAttribute('radius_ses_timeout_act');
  }
  public set radiusSesTimeoutAct(value: string) {
    this._radiusSesTimeoutAct = value;
  }
  public resetRadiusSesTimeoutAct() {
    this._radiusSesTimeoutAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusSesTimeoutActInput() {
    return this._radiusSesTimeoutAct;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
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

  // cors_allowed_origins - computed: false, optional: true, required: false
  private _corsAllowedOrigins = new UserSettingCorsAllowedOriginsList(this, "cors_allowed_origins", true);
  public get corsAllowedOrigins() {
    return this._corsAllowedOrigins;
  }
  public putCorsAllowedOrigins(value: UserSettingCorsAllowedOrigins[] | cdktf.IResolvable) {
    this._corsAllowedOrigins.internalValue = value;
  }
  public resetCorsAllowedOrigins() {
    this._corsAllowedOrigins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsAllowedOriginsInput() {
    return this._corsAllowedOrigins.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_blackout_time: cdktf.numberToTerraform(this._authBlackoutTime),
      auth_ca_cert: cdktf.stringToTerraform(this._authCaCert),
      auth_cert: cdktf.stringToTerraform(this._authCert),
      auth_http_basic: cdktf.stringToTerraform(this._authHttpBasic),
      auth_invalid_max: cdktf.numberToTerraform(this._authInvalidMax),
      auth_lockout_duration: cdktf.numberToTerraform(this._authLockoutDuration),
      auth_lockout_threshold: cdktf.numberToTerraform(this._authLockoutThreshold),
      auth_on_demand: cdktf.stringToTerraform(this._authOnDemand),
      auth_portal_timeout: cdktf.numberToTerraform(this._authPortalTimeout),
      auth_secure_http: cdktf.stringToTerraform(this._authSecureHttp),
      auth_src_mac: cdktf.stringToTerraform(this._authSrcMac),
      auth_ssl_allow_renegotiation: cdktf.stringToTerraform(this._authSslAllowRenegotiation),
      auth_ssl_max_proto_version: cdktf.stringToTerraform(this._authSslMaxProtoVersion),
      auth_ssl_min_proto_version: cdktf.stringToTerraform(this._authSslMinProtoVersion),
      auth_ssl_sigalgs: cdktf.stringToTerraform(this._authSslSigalgs),
      auth_timeout: cdktf.numberToTerraform(this._authTimeout),
      auth_timeout_type: cdktf.stringToTerraform(this._authTimeoutType),
      auth_type: cdktf.stringToTerraform(this._authType),
      cors: cdktf.stringToTerraform(this._cors),
      default_user_password_policy: cdktf.stringToTerraform(this._defaultUserPasswordPolicy),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      per_policy_disclaimer: cdktf.stringToTerraform(this._perPolicyDisclaimer),
      radius_ses_timeout_act: cdktf.stringToTerraform(this._radiusSesTimeoutAct),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      auth_ports: cdktf.listMapper(userSettingAuthPortsToTerraform, true)(this._authPorts.internalValue),
      cors_allowed_origins: cdktf.listMapper(userSettingCorsAllowedOriginsToTerraform, true)(this._corsAllowedOrigins.internalValue),
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
      auth_ca_cert: {
        value: cdktf.stringToHclTerraform(this._authCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      auth_lockout_duration: {
        value: cdktf.numberToHclTerraform(this._authLockoutDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_lockout_threshold: {
        value: cdktf.numberToHclTerraform(this._authLockoutThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_on_demand: {
        value: cdktf.stringToHclTerraform(this._authOnDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_portal_timeout: {
        value: cdktf.numberToHclTerraform(this._authPortalTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_secure_http: {
        value: cdktf.stringToHclTerraform(this._authSecureHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_src_mac: {
        value: cdktf.stringToHclTerraform(this._authSrcMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_ssl_allow_renegotiation: {
        value: cdktf.stringToHclTerraform(this._authSslAllowRenegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_ssl_max_proto_version: {
        value: cdktf.stringToHclTerraform(this._authSslMaxProtoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_ssl_min_proto_version: {
        value: cdktf.stringToHclTerraform(this._authSslMinProtoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_ssl_sigalgs: {
        value: cdktf.stringToHclTerraform(this._authSslSigalgs),
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
      cors: {
        value: cdktf.stringToHclTerraform(this._cors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_user_password_policy: {
        value: cdktf.stringToHclTerraform(this._defaultUserPasswordPolicy),
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
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      per_policy_disclaimer: {
        value: cdktf.stringToHclTerraform(this._perPolicyDisclaimer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_ses_timeout_act: {
        value: cdktf.stringToHclTerraform(this._radiusSesTimeoutAct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
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
      cors_allowed_origins: {
        value: cdktf.listMapperHcl(userSettingCorsAllowedOriginsToHclTerraform, true)(this._corsAllowedOrigins.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserSettingCorsAllowedOriginsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
