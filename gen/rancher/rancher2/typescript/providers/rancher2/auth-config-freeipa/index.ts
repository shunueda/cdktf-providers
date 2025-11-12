// https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthConfigFreeipaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#access_mode AuthConfigFreeipa#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#allowed_principal_ids AuthConfigFreeipa#allowed_principal_ids}
  */
  readonly allowedPrincipalIds?: string[];
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#annotations AuthConfigFreeipa#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#certificate AuthConfigFreeipa#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#connection_timeout AuthConfigFreeipa#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#enabled AuthConfigFreeipa#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#group_dn_attribute AuthConfigFreeipa#group_dn_attribute}
  */
  readonly groupDnAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#group_member_mapping_attribute AuthConfigFreeipa#group_member_mapping_attribute}
  */
  readonly groupMemberMappingAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#group_member_user_attribute AuthConfigFreeipa#group_member_user_attribute}
  */
  readonly groupMemberUserAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#group_name_attribute AuthConfigFreeipa#group_name_attribute}
  */
  readonly groupNameAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#group_object_class AuthConfigFreeipa#group_object_class}
  */
  readonly groupObjectClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#group_search_attribute AuthConfigFreeipa#group_search_attribute}
  */
  readonly groupSearchAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#group_search_base AuthConfigFreeipa#group_search_base}
  */
  readonly groupSearchBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#group_search_filter AuthConfigFreeipa#group_search_filter}
  */
  readonly groupSearchFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#id AuthConfigFreeipa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#labels AuthConfigFreeipa#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#nested_group_membership_enabled AuthConfigFreeipa#nested_group_membership_enabled}
  */
  readonly nestedGroupMembershipEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#port AuthConfigFreeipa#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#servers AuthConfigFreeipa#servers}
  */
  readonly servers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#service_account_distinguished_name AuthConfigFreeipa#service_account_distinguished_name}
  */
  readonly serviceAccountDistinguishedName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#service_account_password AuthConfigFreeipa#service_account_password}
  */
  readonly serviceAccountPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#start_tls AuthConfigFreeipa#start_tls}
  */
  readonly startTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#test_password AuthConfigFreeipa#test_password}
  */
  readonly testPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#test_username AuthConfigFreeipa#test_username}
  */
  readonly testUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#tls AuthConfigFreeipa#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#user_disabled_bit_mask AuthConfigFreeipa#user_disabled_bit_mask}
  */
  readonly userDisabledBitMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#user_enabled_attribute AuthConfigFreeipa#user_enabled_attribute}
  */
  readonly userEnabledAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#user_login_attribute AuthConfigFreeipa#user_login_attribute}
  */
  readonly userLoginAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#user_member_attribute AuthConfigFreeipa#user_member_attribute}
  */
  readonly userMemberAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#user_name_attribute AuthConfigFreeipa#user_name_attribute}
  */
  readonly userNameAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#user_object_class AuthConfigFreeipa#user_object_class}
  */
  readonly userObjectClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#user_search_attribute AuthConfigFreeipa#user_search_attribute}
  */
  readonly userSearchAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#user_search_base AuthConfigFreeipa#user_search_base}
  */
  readonly userSearchBase: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#user_search_filter AuthConfigFreeipa#user_search_filter}
  */
  readonly userSearchFilter?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa rancher2_auth_config_freeipa}
*/
export class AuthConfigFreeipa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_auth_config_freeipa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthConfigFreeipa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthConfigFreeipa to import
  * @param importFromId The id of the existing AuthConfigFreeipa that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthConfigFreeipa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_auth_config_freeipa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_freeipa rancher2_auth_config_freeipa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthConfigFreeipaConfig
  */
  public constructor(scope: Construct, id: string, config: AuthConfigFreeipaConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_auth_config_freeipa',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '8.3.1',
        providerVersionConstraint: '8.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessMode = config.accessMode;
    this._allowedPrincipalIds = config.allowedPrincipalIds;
    this._annotations = config.annotations;
    this._certificate = config.certificate;
    this._connectionTimeout = config.connectionTimeout;
    this._enabled = config.enabled;
    this._groupDnAttribute = config.groupDnAttribute;
    this._groupMemberMappingAttribute = config.groupMemberMappingAttribute;
    this._groupMemberUserAttribute = config.groupMemberUserAttribute;
    this._groupNameAttribute = config.groupNameAttribute;
    this._groupObjectClass = config.groupObjectClass;
    this._groupSearchAttribute = config.groupSearchAttribute;
    this._groupSearchBase = config.groupSearchBase;
    this._groupSearchFilter = config.groupSearchFilter;
    this._id = config.id;
    this._labels = config.labels;
    this._nestedGroupMembershipEnabled = config.nestedGroupMembershipEnabled;
    this._port = config.port;
    this._servers = config.servers;
    this._serviceAccountDistinguishedName = config.serviceAccountDistinguishedName;
    this._serviceAccountPassword = config.serviceAccountPassword;
    this._startTls = config.startTls;
    this._testPassword = config.testPassword;
    this._testUsername = config.testUsername;
    this._tls = config.tls;
    this._userDisabledBitMask = config.userDisabledBitMask;
    this._userEnabledAttribute = config.userEnabledAttribute;
    this._userLoginAttribute = config.userLoginAttribute;
    this._userMemberAttribute = config.userMemberAttribute;
    this._userNameAttribute = config.userNameAttribute;
    this._userObjectClass = config.userObjectClass;
    this._userSearchAttribute = config.userSearchAttribute;
    this._userSearchBase = config.userSearchBase;
    this._userSearchFilter = config.userSearchFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // allowed_principal_ids - computed: false, optional: true, required: false
  private _allowedPrincipalIds?: string[]; 
  public get allowedPrincipalIds() {
    return this.getListAttribute('allowed_principal_ids');
  }
  public set allowedPrincipalIds(value: string[]) {
    this._allowedPrincipalIds = value;
  }
  public resetAllowedPrincipalIds() {
    this._allowedPrincipalIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrincipalIdsInput() {
    return this._allowedPrincipalIds;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
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

  // group_dn_attribute - computed: true, optional: true, required: false
  private _groupDnAttribute?: string; 
  public get groupDnAttribute() {
    return this.getStringAttribute('group_dn_attribute');
  }
  public set groupDnAttribute(value: string) {
    this._groupDnAttribute = value;
  }
  public resetGroupDnAttribute() {
    this._groupDnAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDnAttributeInput() {
    return this._groupDnAttribute;
  }

  // group_member_mapping_attribute - computed: true, optional: true, required: false
  private _groupMemberMappingAttribute?: string; 
  public get groupMemberMappingAttribute() {
    return this.getStringAttribute('group_member_mapping_attribute');
  }
  public set groupMemberMappingAttribute(value: string) {
    this._groupMemberMappingAttribute = value;
  }
  public resetGroupMemberMappingAttribute() {
    this._groupMemberMappingAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberMappingAttributeInput() {
    return this._groupMemberMappingAttribute;
  }

  // group_member_user_attribute - computed: true, optional: true, required: false
  private _groupMemberUserAttribute?: string; 
  public get groupMemberUserAttribute() {
    return this.getStringAttribute('group_member_user_attribute');
  }
  public set groupMemberUserAttribute(value: string) {
    this._groupMemberUserAttribute = value;
  }
  public resetGroupMemberUserAttribute() {
    this._groupMemberUserAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberUserAttributeInput() {
    return this._groupMemberUserAttribute;
  }

  // group_name_attribute - computed: true, optional: true, required: false
  private _groupNameAttribute?: string; 
  public get groupNameAttribute() {
    return this.getStringAttribute('group_name_attribute');
  }
  public set groupNameAttribute(value: string) {
    this._groupNameAttribute = value;
  }
  public resetGroupNameAttribute() {
    this._groupNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameAttributeInput() {
    return this._groupNameAttribute;
  }

  // group_object_class - computed: true, optional: true, required: false
  private _groupObjectClass?: string; 
  public get groupObjectClass() {
    return this.getStringAttribute('group_object_class');
  }
  public set groupObjectClass(value: string) {
    this._groupObjectClass = value;
  }
  public resetGroupObjectClass() {
    this._groupObjectClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupObjectClassInput() {
    return this._groupObjectClass;
  }

  // group_search_attribute - computed: true, optional: true, required: false
  private _groupSearchAttribute?: string; 
  public get groupSearchAttribute() {
    return this.getStringAttribute('group_search_attribute');
  }
  public set groupSearchAttribute(value: string) {
    this._groupSearchAttribute = value;
  }
  public resetGroupSearchAttribute() {
    this._groupSearchAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchAttributeInput() {
    return this._groupSearchAttribute;
  }

  // group_search_base - computed: true, optional: true, required: false
  private _groupSearchBase?: string; 
  public get groupSearchBase() {
    return this.getStringAttribute('group_search_base');
  }
  public set groupSearchBase(value: string) {
    this._groupSearchBase = value;
  }
  public resetGroupSearchBase() {
    this._groupSearchBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchBaseInput() {
    return this._groupSearchBase;
  }

  // group_search_filter - computed: false, optional: true, required: false
  private _groupSearchFilter?: string; 
  public get groupSearchFilter() {
    return this.getStringAttribute('group_search_filter');
  }
  public set groupSearchFilter(value: string) {
    this._groupSearchFilter = value;
  }
  public resetGroupSearchFilter() {
    this._groupSearchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchFilterInput() {
    return this._groupSearchFilter;
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

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nested_group_membership_enabled - computed: true, optional: true, required: false
  private _nestedGroupMembershipEnabled?: boolean | cdktf.IResolvable; 
  public get nestedGroupMembershipEnabled() {
    return this.getBooleanAttribute('nested_group_membership_enabled');
  }
  public set nestedGroupMembershipEnabled(value: boolean | cdktf.IResolvable) {
    this._nestedGroupMembershipEnabled = value;
  }
  public resetNestedGroupMembershipEnabled() {
    this._nestedGroupMembershipEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedGroupMembershipEnabledInput() {
    return this._nestedGroupMembershipEnabled;
  }

  // port - computed: false, optional: true, required: false
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

  // servers - computed: false, optional: false, required: true
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // service_account_distinguished_name - computed: false, optional: false, required: true
  private _serviceAccountDistinguishedName?: string; 
  public get serviceAccountDistinguishedName() {
    return this.getStringAttribute('service_account_distinguished_name');
  }
  public set serviceAccountDistinguishedName(value: string) {
    this._serviceAccountDistinguishedName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountDistinguishedNameInput() {
    return this._serviceAccountDistinguishedName;
  }

  // service_account_password - computed: false, optional: false, required: true
  private _serviceAccountPassword?: string; 
  public get serviceAccountPassword() {
    return this.getStringAttribute('service_account_password');
  }
  public set serviceAccountPassword(value: string) {
    this._serviceAccountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountPasswordInput() {
    return this._serviceAccountPassword;
  }

  // start_tls - computed: true, optional: true, required: false
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }
  public set startTls(value: boolean | cdktf.IResolvable) {
    this._startTls = value;
  }
  public resetStartTls() {
    this._startTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
  }

  // test_password - computed: false, optional: false, required: true
  private _testPassword?: string; 
  public get testPassword() {
    return this.getStringAttribute('test_password');
  }
  public set testPassword(value: string) {
    this._testPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testPasswordInput() {
    return this._testPassword;
  }

  // test_username - computed: false, optional: false, required: true
  private _testUsername?: string; 
  public get testUsername() {
    return this.getStringAttribute('test_username');
  }
  public set testUsername(value: string) {
    this._testUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testUsernameInput() {
    return this._testUsername;
  }

  // tls - computed: true, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_disabled_bit_mask - computed: true, optional: true, required: false
  private _userDisabledBitMask?: number; 
  public get userDisabledBitMask() {
    return this.getNumberAttribute('user_disabled_bit_mask');
  }
  public set userDisabledBitMask(value: number) {
    this._userDisabledBitMask = value;
  }
  public resetUserDisabledBitMask() {
    this._userDisabledBitMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDisabledBitMaskInput() {
    return this._userDisabledBitMask;
  }

  // user_enabled_attribute - computed: true, optional: true, required: false
  private _userEnabledAttribute?: string; 
  public get userEnabledAttribute() {
    return this.getStringAttribute('user_enabled_attribute');
  }
  public set userEnabledAttribute(value: string) {
    this._userEnabledAttribute = value;
  }
  public resetUserEnabledAttribute() {
    this._userEnabledAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEnabledAttributeInput() {
    return this._userEnabledAttribute;
  }

  // user_login_attribute - computed: true, optional: true, required: false
  private _userLoginAttribute?: string; 
  public get userLoginAttribute() {
    return this.getStringAttribute('user_login_attribute');
  }
  public set userLoginAttribute(value: string) {
    this._userLoginAttribute = value;
  }
  public resetUserLoginAttribute() {
    this._userLoginAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLoginAttributeInput() {
    return this._userLoginAttribute;
  }

  // user_member_attribute - computed: true, optional: true, required: false
  private _userMemberAttribute?: string; 
  public get userMemberAttribute() {
    return this.getStringAttribute('user_member_attribute');
  }
  public set userMemberAttribute(value: string) {
    this._userMemberAttribute = value;
  }
  public resetUserMemberAttribute() {
    this._userMemberAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMemberAttributeInput() {
    return this._userMemberAttribute;
  }

  // user_name_attribute - computed: true, optional: true, required: false
  private _userNameAttribute?: string; 
  public get userNameAttribute() {
    return this.getStringAttribute('user_name_attribute');
  }
  public set userNameAttribute(value: string) {
    this._userNameAttribute = value;
  }
  public resetUserNameAttribute() {
    this._userNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameAttributeInput() {
    return this._userNameAttribute;
  }

  // user_object_class - computed: true, optional: true, required: false
  private _userObjectClass?: string; 
  public get userObjectClass() {
    return this.getStringAttribute('user_object_class');
  }
  public set userObjectClass(value: string) {
    this._userObjectClass = value;
  }
  public resetUserObjectClass() {
    this._userObjectClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userObjectClassInput() {
    return this._userObjectClass;
  }

  // user_search_attribute - computed: true, optional: true, required: false
  private _userSearchAttribute?: string; 
  public get userSearchAttribute() {
    return this.getStringAttribute('user_search_attribute');
  }
  public set userSearchAttribute(value: string) {
    this._userSearchAttribute = value;
  }
  public resetUserSearchAttribute() {
    this._userSearchAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchAttributeInput() {
    return this._userSearchAttribute;
  }

  // user_search_base - computed: false, optional: false, required: true
  private _userSearchBase?: string; 
  public get userSearchBase() {
    return this.getStringAttribute('user_search_base');
  }
  public set userSearchBase(value: string) {
    this._userSearchBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchBaseInput() {
    return this._userSearchBase;
  }

  // user_search_filter - computed: false, optional: true, required: false
  private _userSearchFilter?: string; 
  public get userSearchFilter() {
    return this.getStringAttribute('user_search_filter');
  }
  public set userSearchFilter(value: string) {
    this._userSearchFilter = value;
  }
  public resetUserSearchFilter() {
    this._userSearchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchFilterInput() {
    return this._userSearchFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      allowed_principal_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPrincipalIds),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      certificate: cdktf.stringToTerraform(this._certificate),
      connection_timeout: cdktf.numberToTerraform(this._connectionTimeout),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_dn_attribute: cdktf.stringToTerraform(this._groupDnAttribute),
      group_member_mapping_attribute: cdktf.stringToTerraform(this._groupMemberMappingAttribute),
      group_member_user_attribute: cdktf.stringToTerraform(this._groupMemberUserAttribute),
      group_name_attribute: cdktf.stringToTerraform(this._groupNameAttribute),
      group_object_class: cdktf.stringToTerraform(this._groupObjectClass),
      group_search_attribute: cdktf.stringToTerraform(this._groupSearchAttribute),
      group_search_base: cdktf.stringToTerraform(this._groupSearchBase),
      group_search_filter: cdktf.stringToTerraform(this._groupSearchFilter),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      nested_group_membership_enabled: cdktf.booleanToTerraform(this._nestedGroupMembershipEnabled),
      port: cdktf.numberToTerraform(this._port),
      servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servers),
      service_account_distinguished_name: cdktf.stringToTerraform(this._serviceAccountDistinguishedName),
      service_account_password: cdktf.stringToTerraform(this._serviceAccountPassword),
      start_tls: cdktf.booleanToTerraform(this._startTls),
      test_password: cdktf.stringToTerraform(this._testPassword),
      test_username: cdktf.stringToTerraform(this._testUsername),
      tls: cdktf.booleanToTerraform(this._tls),
      user_disabled_bit_mask: cdktf.numberToTerraform(this._userDisabledBitMask),
      user_enabled_attribute: cdktf.stringToTerraform(this._userEnabledAttribute),
      user_login_attribute: cdktf.stringToTerraform(this._userLoginAttribute),
      user_member_attribute: cdktf.stringToTerraform(this._userMemberAttribute),
      user_name_attribute: cdktf.stringToTerraform(this._userNameAttribute),
      user_object_class: cdktf.stringToTerraform(this._userObjectClass),
      user_search_attribute: cdktf.stringToTerraform(this._userSearchAttribute),
      user_search_base: cdktf.stringToTerraform(this._userSearchBase),
      user_search_filter: cdktf.stringToTerraform(this._userSearchFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_principal_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedPrincipalIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_timeout: {
        value: cdktf.numberToHclTerraform(this._connectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_dn_attribute: {
        value: cdktf.stringToHclTerraform(this._groupDnAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_mapping_attribute: {
        value: cdktf.stringToHclTerraform(this._groupMemberMappingAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_user_attribute: {
        value: cdktf.stringToHclTerraform(this._groupMemberUserAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name_attribute: {
        value: cdktf.stringToHclTerraform(this._groupNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_object_class: {
        value: cdktf.stringToHclTerraform(this._groupObjectClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_attribute: {
        value: cdktf.stringToHclTerraform(this._groupSearchAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_base: {
        value: cdktf.stringToHclTerraform(this._groupSearchBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_filter: {
        value: cdktf.stringToHclTerraform(this._groupSearchFilter),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      nested_group_membership_enabled: {
        value: cdktf.booleanToHclTerraform(this._nestedGroupMembershipEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._servers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_account_distinguished_name: {
        value: cdktf.stringToHclTerraform(this._serviceAccountDistinguishedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_password: {
        value: cdktf.stringToHclTerraform(this._serviceAccountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_tls: {
        value: cdktf.booleanToHclTerraform(this._startTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      test_password: {
        value: cdktf.stringToHclTerraform(this._testPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_username: {
        value: cdktf.stringToHclTerraform(this._testUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls: {
        value: cdktf.booleanToHclTerraform(this._tls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_disabled_bit_mask: {
        value: cdktf.numberToHclTerraform(this._userDisabledBitMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_enabled_attribute: {
        value: cdktf.stringToHclTerraform(this._userEnabledAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_login_attribute: {
        value: cdktf.stringToHclTerraform(this._userLoginAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_member_attribute: {
        value: cdktf.stringToHclTerraform(this._userMemberAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_attribute: {
        value: cdktf.stringToHclTerraform(this._userNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_object_class: {
        value: cdktf.stringToHclTerraform(this._userObjectClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_search_attribute: {
        value: cdktf.stringToHclTerraform(this._userSearchAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_search_base: {
        value: cdktf.stringToHclTerraform(this._userSearchBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_search_filter: {
        value: cdktf.stringToHclTerraform(this._userSearchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
