// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface YundunBastionhostInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#bandwidth YundunBastionhostInstance#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#description YundunBastionhostInstance#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#enable_public_access YundunBastionhostInstance#enable_public_access}
  */
  readonly enablePublicAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#id YundunBastionhostInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#license_code YundunBastionhostInstance#license_code}
  */
  readonly licenseCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#period YundunBastionhostInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#plan_code YundunBastionhostInstance#plan_code}
  */
  readonly planCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#public_white_list YundunBastionhostInstance#public_white_list}
  */
  readonly publicWhiteList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#renew_period YundunBastionhostInstance#renew_period}
  */
  readonly renewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#renewal_period_unit YundunBastionhostInstance#renewal_period_unit}
  */
  readonly renewalPeriodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#renewal_status YundunBastionhostInstance#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#resource_group_id YundunBastionhostInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#security_group_ids YundunBastionhostInstance#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#storage YundunBastionhostInstance#storage}
  */
  readonly storage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#tags YundunBastionhostInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#vswitch_id YundunBastionhostInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * ad_auth_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#ad_auth_server YundunBastionhostInstance#ad_auth_server}
  */
  readonly adAuthServer?: YundunBastionhostInstanceAdAuthServer[] | cdktf.IResolvable;
  /**
  * ldap_auth_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#ldap_auth_server YundunBastionhostInstance#ldap_auth_server}
  */
  readonly ldapAuthServer?: YundunBastionhostInstanceLdapAuthServer[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#timeouts YundunBastionhostInstance#timeouts}
  */
  readonly timeouts?: YundunBastionhostInstanceTimeouts;
}
export interface YundunBastionhostInstanceAdAuthServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#account YundunBastionhostInstance#account}
  */
  readonly account: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#base_dn YundunBastionhostInstance#base_dn}
  */
  readonly baseDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#domain YundunBastionhostInstance#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#email_mapping YundunBastionhostInstance#email_mapping}
  */
  readonly emailMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#filter YundunBastionhostInstance#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#is_ssl YundunBastionhostInstance#is_ssl}
  */
  readonly isSsl: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#mobile_mapping YundunBastionhostInstance#mobile_mapping}
  */
  readonly mobileMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#name_mapping YundunBastionhostInstance#name_mapping}
  */
  readonly nameMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#password YundunBastionhostInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#port YundunBastionhostInstance#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#server YundunBastionhostInstance#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#standby_server YundunBastionhostInstance#standby_server}
  */
  readonly standbyServer?: string;
}

export function yundunBastionhostInstanceAdAuthServerToTerraform(struct?: YundunBastionhostInstanceAdAuthServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    domain: cdktf.stringToTerraform(struct!.domain),
    email_mapping: cdktf.stringToTerraform(struct!.emailMapping),
    filter: cdktf.stringToTerraform(struct!.filter),
    is_ssl: cdktf.booleanToTerraform(struct!.isSsl),
    mobile_mapping: cdktf.stringToTerraform(struct!.mobileMapping),
    name_mapping: cdktf.stringToTerraform(struct!.nameMapping),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    server: cdktf.stringToTerraform(struct!.server),
    standby_server: cdktf.stringToTerraform(struct!.standbyServer),
  }
}


export function yundunBastionhostInstanceAdAuthServerToHclTerraform(struct?: YundunBastionhostInstanceAdAuthServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_mapping: {
      value: cdktf.stringToHclTerraform(struct!.emailMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.isSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mobile_mapping: {
      value: cdktf.stringToHclTerraform(struct!.mobileMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_mapping: {
      value: cdktf.stringToHclTerraform(struct!.nameMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby_server: {
      value: cdktf.stringToHclTerraform(struct!.standbyServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YundunBastionhostInstanceAdAuthServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): YundunBastionhostInstanceAdAuthServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._emailMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailMapping = this._emailMapping;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._isSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSsl = this._isSsl;
    }
    if (this._mobileMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileMapping = this._mobileMapping;
    }
    if (this._nameMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameMapping = this._nameMapping;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._standbyServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyServer = this._standbyServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YundunBastionhostInstanceAdAuthServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._baseDn = undefined;
      this._domain = undefined;
      this._emailMapping = undefined;
      this._filter = undefined;
      this._isSsl = undefined;
      this._mobileMapping = undefined;
      this._nameMapping = undefined;
      this._password = undefined;
      this._port = undefined;
      this._server = undefined;
      this._standbyServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._baseDn = value.baseDn;
      this._domain = value.domain;
      this._emailMapping = value.emailMapping;
      this._filter = value.filter;
      this._isSsl = value.isSsl;
      this._mobileMapping = value.mobileMapping;
      this._nameMapping = value.nameMapping;
      this._password = value.password;
      this._port = value.port;
      this._server = value.server;
      this._standbyServer = value.standbyServer;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // email_mapping - computed: false, optional: true, required: false
  private _emailMapping?: string; 
  public get emailMapping() {
    return this.getStringAttribute('email_mapping');
  }
  public set emailMapping(value: string) {
    this._emailMapping = value;
  }
  public resetEmailMapping() {
    this._emailMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMappingInput() {
    return this._emailMapping;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // is_ssl - computed: false, optional: false, required: true
  private _isSsl?: boolean | cdktf.IResolvable; 
  public get isSsl() {
    return this.getBooleanAttribute('is_ssl');
  }
  public set isSsl(value: boolean | cdktf.IResolvable) {
    this._isSsl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslInput() {
    return this._isSsl;
  }

  // mobile_mapping - computed: false, optional: true, required: false
  private _mobileMapping?: string; 
  public get mobileMapping() {
    return this.getStringAttribute('mobile_mapping');
  }
  public set mobileMapping(value: string) {
    this._mobileMapping = value;
  }
  public resetMobileMapping() {
    this._mobileMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileMappingInput() {
    return this._mobileMapping;
  }

  // name_mapping - computed: false, optional: true, required: false
  private _nameMapping?: string; 
  public get nameMapping() {
    return this.getStringAttribute('name_mapping');
  }
  public set nameMapping(value: string) {
    this._nameMapping = value;
  }
  public resetNameMapping() {
    this._nameMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameMappingInput() {
    return this._nameMapping;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // standby_server - computed: false, optional: true, required: false
  private _standbyServer?: string; 
  public get standbyServer() {
    return this.getStringAttribute('standby_server');
  }
  public set standbyServer(value: string) {
    this._standbyServer = value;
  }
  public resetStandbyServer() {
    this._standbyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyServerInput() {
    return this._standbyServer;
  }
}

export class YundunBastionhostInstanceAdAuthServerList extends cdktf.ComplexList {
  public internalValue? : YundunBastionhostInstanceAdAuthServer[] | cdktf.IResolvable

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
  public get(index: number): YundunBastionhostInstanceAdAuthServerOutputReference {
    return new YundunBastionhostInstanceAdAuthServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface YundunBastionhostInstanceLdapAuthServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#account YundunBastionhostInstance#account}
  */
  readonly account: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#base_dn YundunBastionhostInstance#base_dn}
  */
  readonly baseDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#email_mapping YundunBastionhostInstance#email_mapping}
  */
  readonly emailMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#filter YundunBastionhostInstance#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#is_ssl YundunBastionhostInstance#is_ssl}
  */
  readonly isSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#login_name_mapping YundunBastionhostInstance#login_name_mapping}
  */
  readonly loginNameMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#mobile_mapping YundunBastionhostInstance#mobile_mapping}
  */
  readonly mobileMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#name_mapping YundunBastionhostInstance#name_mapping}
  */
  readonly nameMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#password YundunBastionhostInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#port YundunBastionhostInstance#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#server YundunBastionhostInstance#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#standby_server YundunBastionhostInstance#standby_server}
  */
  readonly standbyServer?: string;
}

export function yundunBastionhostInstanceLdapAuthServerToTerraform(struct?: YundunBastionhostInstanceLdapAuthServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    email_mapping: cdktf.stringToTerraform(struct!.emailMapping),
    filter: cdktf.stringToTerraform(struct!.filter),
    is_ssl: cdktf.booleanToTerraform(struct!.isSsl),
    login_name_mapping: cdktf.stringToTerraform(struct!.loginNameMapping),
    mobile_mapping: cdktf.stringToTerraform(struct!.mobileMapping),
    name_mapping: cdktf.stringToTerraform(struct!.nameMapping),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    server: cdktf.stringToTerraform(struct!.server),
    standby_server: cdktf.stringToTerraform(struct!.standbyServer),
  }
}


export function yundunBastionhostInstanceLdapAuthServerToHclTerraform(struct?: YundunBastionhostInstanceLdapAuthServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_mapping: {
      value: cdktf.stringToHclTerraform(struct!.emailMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.isSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login_name_mapping: {
      value: cdktf.stringToHclTerraform(struct!.loginNameMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mobile_mapping: {
      value: cdktf.stringToHclTerraform(struct!.mobileMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_mapping: {
      value: cdktf.stringToHclTerraform(struct!.nameMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby_server: {
      value: cdktf.stringToHclTerraform(struct!.standbyServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YundunBastionhostInstanceLdapAuthServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): YundunBastionhostInstanceLdapAuthServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._emailMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailMapping = this._emailMapping;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._isSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSsl = this._isSsl;
    }
    if (this._loginNameMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginNameMapping = this._loginNameMapping;
    }
    if (this._mobileMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileMapping = this._mobileMapping;
    }
    if (this._nameMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameMapping = this._nameMapping;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._standbyServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyServer = this._standbyServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YundunBastionhostInstanceLdapAuthServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._baseDn = undefined;
      this._emailMapping = undefined;
      this._filter = undefined;
      this._isSsl = undefined;
      this._loginNameMapping = undefined;
      this._mobileMapping = undefined;
      this._nameMapping = undefined;
      this._password = undefined;
      this._port = undefined;
      this._server = undefined;
      this._standbyServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._baseDn = value.baseDn;
      this._emailMapping = value.emailMapping;
      this._filter = value.filter;
      this._isSsl = value.isSsl;
      this._loginNameMapping = value.loginNameMapping;
      this._mobileMapping = value.mobileMapping;
      this._nameMapping = value.nameMapping;
      this._password = value.password;
      this._port = value.port;
      this._server = value.server;
      this._standbyServer = value.standbyServer;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // email_mapping - computed: false, optional: true, required: false
  private _emailMapping?: string; 
  public get emailMapping() {
    return this.getStringAttribute('email_mapping');
  }
  public set emailMapping(value: string) {
    this._emailMapping = value;
  }
  public resetEmailMapping() {
    this._emailMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMappingInput() {
    return this._emailMapping;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // is_ssl - computed: false, optional: true, required: false
  private _isSsl?: boolean | cdktf.IResolvable; 
  public get isSsl() {
    return this.getBooleanAttribute('is_ssl');
  }
  public set isSsl(value: boolean | cdktf.IResolvable) {
    this._isSsl = value;
  }
  public resetIsSsl() {
    this._isSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslInput() {
    return this._isSsl;
  }

  // login_name_mapping - computed: false, optional: true, required: false
  private _loginNameMapping?: string; 
  public get loginNameMapping() {
    return this.getStringAttribute('login_name_mapping');
  }
  public set loginNameMapping(value: string) {
    this._loginNameMapping = value;
  }
  public resetLoginNameMapping() {
    this._loginNameMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameMappingInput() {
    return this._loginNameMapping;
  }

  // mobile_mapping - computed: false, optional: true, required: false
  private _mobileMapping?: string; 
  public get mobileMapping() {
    return this.getStringAttribute('mobile_mapping');
  }
  public set mobileMapping(value: string) {
    this._mobileMapping = value;
  }
  public resetMobileMapping() {
    this._mobileMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileMappingInput() {
    return this._mobileMapping;
  }

  // name_mapping - computed: false, optional: true, required: false
  private _nameMapping?: string; 
  public get nameMapping() {
    return this.getStringAttribute('name_mapping');
  }
  public set nameMapping(value: string) {
    this._nameMapping = value;
  }
  public resetNameMapping() {
    this._nameMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameMappingInput() {
    return this._nameMapping;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // standby_server - computed: false, optional: true, required: false
  private _standbyServer?: string; 
  public get standbyServer() {
    return this.getStringAttribute('standby_server');
  }
  public set standbyServer(value: string) {
    this._standbyServer = value;
  }
  public resetStandbyServer() {
    this._standbyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyServerInput() {
    return this._standbyServer;
  }
}

export class YundunBastionhostInstanceLdapAuthServerList extends cdktf.ComplexList {
  public internalValue? : YundunBastionhostInstanceLdapAuthServer[] | cdktf.IResolvable

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
  public get(index: number): YundunBastionhostInstanceLdapAuthServerOutputReference {
    return new YundunBastionhostInstanceLdapAuthServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface YundunBastionhostInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#create YundunBastionhostInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#delete YundunBastionhostInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#update YundunBastionhostInstance#update}
  */
  readonly update?: string;
}

export function yundunBastionhostInstanceTimeoutsToTerraform(struct?: YundunBastionhostInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function yundunBastionhostInstanceTimeoutsToHclTerraform(struct?: YundunBastionhostInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YundunBastionhostInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YundunBastionhostInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YundunBastionhostInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance alicloud_yundun_bastionhost_instance}
*/
export class YundunBastionhostInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_yundun_bastionhost_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a YundunBastionhostInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the YundunBastionhostInstance to import
  * @param importFromId The id of the existing YundunBastionhostInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the YundunBastionhostInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_yundun_bastionhost_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/yundun_bastionhost_instance alicloud_yundun_bastionhost_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options YundunBastionhostInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: YundunBastionhostInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_yundun_bastionhost_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._description = config.description;
    this._enablePublicAccess = config.enablePublicAccess;
    this._id = config.id;
    this._licenseCode = config.licenseCode;
    this._period = config.period;
    this._planCode = config.planCode;
    this._publicWhiteList = config.publicWhiteList;
    this._renewPeriod = config.renewPeriod;
    this._renewalPeriodUnit = config.renewalPeriodUnit;
    this._renewalStatus = config.renewalStatus;
    this._resourceGroupId = config.resourceGroupId;
    this._securityGroupIds = config.securityGroupIds;
    this._storage = config.storage;
    this._tags = config.tags;
    this._vswitchId = config.vswitchId;
    this._adAuthServer.internalValue = config.adAuthServer;
    this._ldapAuthServer.internalValue = config.ldapAuthServer;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_public_access - computed: true, optional: true, required: false
  private _enablePublicAccess?: boolean | cdktf.IResolvable; 
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }
  public set enablePublicAccess(value: boolean | cdktf.IResolvable) {
    this._enablePublicAccess = value;
  }
  public resetEnablePublicAccess() {
    this._enablePublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicAccessInput() {
    return this._enablePublicAccess;
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

  // license_code - computed: false, optional: false, required: true
  private _licenseCode?: string; 
  public get licenseCode() {
    return this.getStringAttribute('license_code');
  }
  public set licenseCode(value: string) {
    this._licenseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseCodeInput() {
    return this._licenseCode;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // plan_code - computed: false, optional: false, required: true
  private _planCode?: string; 
  public get planCode() {
    return this.getStringAttribute('plan_code');
  }
  public set planCode(value: string) {
    this._planCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planCodeInput() {
    return this._planCode;
  }

  // public_white_list - computed: false, optional: true, required: false
  private _publicWhiteList?: string[]; 
  public get publicWhiteList() {
    return this.getListAttribute('public_white_list');
  }
  public set publicWhiteList(value: string[]) {
    this._publicWhiteList = value;
  }
  public resetPublicWhiteList() {
    this._publicWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicWhiteListInput() {
    return this._publicWhiteList;
  }

  // renew_period - computed: false, optional: true, required: false
  private _renewPeriod?: number; 
  public get renewPeriod() {
    return this.getNumberAttribute('renew_period');
  }
  public set renewPeriod(value: number) {
    this._renewPeriod = value;
  }
  public resetRenewPeriod() {
    this._renewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewPeriodInput() {
    return this._renewPeriod;
  }

  // renewal_period_unit - computed: true, optional: true, required: false
  private _renewalPeriodUnit?: string; 
  public get renewalPeriodUnit() {
    return this.getStringAttribute('renewal_period_unit');
  }
  public set renewalPeriodUnit(value: string) {
    this._renewalPeriodUnit = value;
  }
  public resetRenewalPeriodUnit() {
    this._renewalPeriodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalPeriodUnitInput() {
    return this._renewalPeriodUnit;
  }

  // renewal_status - computed: true, optional: true, required: false
  private _renewalStatus?: string; 
  public get renewalStatus() {
    return this.getStringAttribute('renewal_status');
  }
  public set renewalStatus(value: string) {
    this._renewalStatus = value;
  }
  public resetRenewalStatus() {
    this._renewalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalStatusInput() {
    return this._renewalStatus;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // ad_auth_server - computed: false, optional: true, required: false
  private _adAuthServer = new YundunBastionhostInstanceAdAuthServerList(this, "ad_auth_server", true);
  public get adAuthServer() {
    return this._adAuthServer;
  }
  public putAdAuthServer(value: YundunBastionhostInstanceAdAuthServer[] | cdktf.IResolvable) {
    this._adAuthServer.internalValue = value;
  }
  public resetAdAuthServer() {
    this._adAuthServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adAuthServerInput() {
    return this._adAuthServer.internalValue;
  }

  // ldap_auth_server - computed: false, optional: true, required: false
  private _ldapAuthServer = new YundunBastionhostInstanceLdapAuthServerList(this, "ldap_auth_server", true);
  public get ldapAuthServer() {
    return this._ldapAuthServer;
  }
  public putLdapAuthServer(value: YundunBastionhostInstanceLdapAuthServer[] | cdktf.IResolvable) {
    this._ldapAuthServer.internalValue = value;
  }
  public resetLdapAuthServer() {
    this._ldapAuthServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapAuthServerInput() {
    return this._ldapAuthServer.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new YundunBastionhostInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: YundunBastionhostInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      description: cdktf.stringToTerraform(this._description),
      enable_public_access: cdktf.booleanToTerraform(this._enablePublicAccess),
      id: cdktf.stringToTerraform(this._id),
      license_code: cdktf.stringToTerraform(this._licenseCode),
      period: cdktf.numberToTerraform(this._period),
      plan_code: cdktf.stringToTerraform(this._planCode),
      public_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicWhiteList),
      renew_period: cdktf.numberToTerraform(this._renewPeriod),
      renewal_period_unit: cdktf.stringToTerraform(this._renewalPeriodUnit),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      storage: cdktf.stringToTerraform(this._storage),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      ad_auth_server: cdktf.listMapper(yundunBastionhostInstanceAdAuthServerToTerraform, true)(this._adAuthServer.internalValue),
      ldap_auth_server: cdktf.listMapper(yundunBastionhostInstanceLdapAuthServerToTerraform, true)(this._ldapAuthServer.internalValue),
      timeouts: yundunBastionhostInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_public_access: {
        value: cdktf.booleanToHclTerraform(this._enablePublicAccess),
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
      license_code: {
        value: cdktf.stringToHclTerraform(this._licenseCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plan_code: {
        value: cdktf.stringToHclTerraform(this._planCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_white_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicWhiteList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      renew_period: {
        value: cdktf.numberToHclTerraform(this._renewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renewal_period_unit: {
        value: cdktf.stringToHclTerraform(this._renewalPeriodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage: {
        value: cdktf.stringToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ad_auth_server: {
        value: cdktf.listMapperHcl(yundunBastionhostInstanceAdAuthServerToHclTerraform, true)(this._adAuthServer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "YundunBastionhostInstanceAdAuthServerList",
      },
      ldap_auth_server: {
        value: cdktf.listMapperHcl(yundunBastionhostInstanceLdapAuthServerToHclTerraform, true)(this._ldapAuthServer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "YundunBastionhostInstanceLdapAuthServerList",
      },
      timeouts: {
        value: yundunBastionhostInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "YundunBastionhostInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
