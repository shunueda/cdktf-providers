// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcdAdConnectorOfficeSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#ad_connector_office_site_name EcdAdConnectorOfficeSite#ad_connector_office_site_name}
  */
  readonly adConnectorOfficeSiteName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#ad_hostname EcdAdConnectorOfficeSite#ad_hostname}
  */
  readonly adHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#bandwidth EcdAdConnectorOfficeSite#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#cen_id EcdAdConnectorOfficeSite#cen_id}
  */
  readonly cenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#cen_owner_id EcdAdConnectorOfficeSite#cen_owner_id}
  */
  readonly cenOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#cidr_block EcdAdConnectorOfficeSite#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#desktop_access_type EcdAdConnectorOfficeSite#desktop_access_type}
  */
  readonly desktopAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#dns_address EcdAdConnectorOfficeSite#dns_address}
  */
  readonly dnsAddress: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#domain_name EcdAdConnectorOfficeSite#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#domain_password EcdAdConnectorOfficeSite#domain_password}
  */
  readonly domainPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#domain_user_name EcdAdConnectorOfficeSite#domain_user_name}
  */
  readonly domainUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#enable_admin_access EcdAdConnectorOfficeSite#enable_admin_access}
  */
  readonly enableAdminAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#enable_internet_access EcdAdConnectorOfficeSite#enable_internet_access}
  */
  readonly enableInternetAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#id EcdAdConnectorOfficeSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#mfa_enabled EcdAdConnectorOfficeSite#mfa_enabled}
  */
  readonly mfaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#protocol_type EcdAdConnectorOfficeSite#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#specification EcdAdConnectorOfficeSite#specification}
  */
  readonly specification?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#sub_domain_dns_address EcdAdConnectorOfficeSite#sub_domain_dns_address}
  */
  readonly subDomainDnsAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#sub_domain_name EcdAdConnectorOfficeSite#sub_domain_name}
  */
  readonly subDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#verify_code EcdAdConnectorOfficeSite#verify_code}
  */
  readonly verifyCode?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#timeouts EcdAdConnectorOfficeSite#timeouts}
  */
  readonly timeouts?: EcdAdConnectorOfficeSiteTimeouts;
}
export interface EcdAdConnectorOfficeSiteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#create EcdAdConnectorOfficeSite#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#delete EcdAdConnectorOfficeSite#delete}
  */
  readonly delete?: string;
}

export function ecdAdConnectorOfficeSiteTimeoutsToTerraform(struct?: EcdAdConnectorOfficeSiteTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ecdAdConnectorOfficeSiteTimeoutsToHclTerraform(struct?: EcdAdConnectorOfficeSiteTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcdAdConnectorOfficeSiteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcdAdConnectorOfficeSiteTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcdAdConnectorOfficeSiteTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site alicloud_ecd_ad_connector_office_site}
*/
export class EcdAdConnectorOfficeSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecd_ad_connector_office_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcdAdConnectorOfficeSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcdAdConnectorOfficeSite to import
  * @param importFromId The id of the existing EcdAdConnectorOfficeSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcdAdConnectorOfficeSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecd_ad_connector_office_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ecd_ad_connector_office_site alicloud_ecd_ad_connector_office_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcdAdConnectorOfficeSiteConfig
  */
  public constructor(scope: Construct, id: string, config: EcdAdConnectorOfficeSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecd_ad_connector_office_site',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adConnectorOfficeSiteName = config.adConnectorOfficeSiteName;
    this._adHostname = config.adHostname;
    this._bandwidth = config.bandwidth;
    this._cenId = config.cenId;
    this._cenOwnerId = config.cenOwnerId;
    this._cidrBlock = config.cidrBlock;
    this._desktopAccessType = config.desktopAccessType;
    this._dnsAddress = config.dnsAddress;
    this._domainName = config.domainName;
    this._domainPassword = config.domainPassword;
    this._domainUserName = config.domainUserName;
    this._enableAdminAccess = config.enableAdminAccess;
    this._enableInternetAccess = config.enableInternetAccess;
    this._id = config.id;
    this._mfaEnabled = config.mfaEnabled;
    this._protocolType = config.protocolType;
    this._specification = config.specification;
    this._subDomainDnsAddress = config.subDomainDnsAddress;
    this._subDomainName = config.subDomainName;
    this._verifyCode = config.verifyCode;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_connector_office_site_name - computed: false, optional: false, required: true
  private _adConnectorOfficeSiteName?: string; 
  public get adConnectorOfficeSiteName() {
    return this.getStringAttribute('ad_connector_office_site_name');
  }
  public set adConnectorOfficeSiteName(value: string) {
    this._adConnectorOfficeSiteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adConnectorOfficeSiteNameInput() {
    return this._adConnectorOfficeSiteName;
  }

  // ad_hostname - computed: false, optional: true, required: false
  private _adHostname?: string; 
  public get adHostname() {
    return this.getStringAttribute('ad_hostname');
  }
  public set adHostname(value: string) {
    this._adHostname = value;
  }
  public resetAdHostname() {
    this._adHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adHostnameInput() {
    return this._adHostname;
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // cen_id - computed: false, optional: false, required: true
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
  }

  // cen_owner_id - computed: false, optional: true, required: false
  private _cenOwnerId?: string; 
  public get cenOwnerId() {
    return this.getStringAttribute('cen_owner_id');
  }
  public set cenOwnerId(value: string) {
    this._cenOwnerId = value;
  }
  public resetCenOwnerId() {
    this._cenOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cenOwnerIdInput() {
    return this._cenOwnerId;
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // desktop_access_type - computed: true, optional: true, required: false
  private _desktopAccessType?: string; 
  public get desktopAccessType() {
    return this.getStringAttribute('desktop_access_type');
  }
  public set desktopAccessType(value: string) {
    this._desktopAccessType = value;
  }
  public resetDesktopAccessType() {
    this._desktopAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopAccessTypeInput() {
    return this._desktopAccessType;
  }

  // dns_address - computed: false, optional: false, required: true
  private _dnsAddress?: string[]; 
  public get dnsAddress() {
    return this.getListAttribute('dns_address');
  }
  public set dnsAddress(value: string[]) {
    this._dnsAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAddressInput() {
    return this._dnsAddress;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_password - computed: false, optional: true, required: false
  private _domainPassword?: string; 
  public get domainPassword() {
    return this.getStringAttribute('domain_password');
  }
  public set domainPassword(value: string) {
    this._domainPassword = value;
  }
  public resetDomainPassword() {
    this._domainPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainPasswordInput() {
    return this._domainPassword;
  }

  // domain_user_name - computed: false, optional: true, required: false
  private _domainUserName?: string; 
  public get domainUserName() {
    return this.getStringAttribute('domain_user_name');
  }
  public set domainUserName(value: string) {
    this._domainUserName = value;
  }
  public resetDomainUserName() {
    this._domainUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUserNameInput() {
    return this._domainUserName;
  }

  // enable_admin_access - computed: true, optional: true, required: false
  private _enableAdminAccess?: boolean | cdktf.IResolvable; 
  public get enableAdminAccess() {
    return this.getBooleanAttribute('enable_admin_access');
  }
  public set enableAdminAccess(value: boolean | cdktf.IResolvable) {
    this._enableAdminAccess = value;
  }
  public resetEnableAdminAccess() {
    this._enableAdminAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdminAccessInput() {
    return this._enableAdminAccess;
  }

  // enable_internet_access - computed: true, optional: true, required: false
  private _enableInternetAccess?: boolean | cdktf.IResolvable; 
  public get enableInternetAccess() {
    return this.getBooleanAttribute('enable_internet_access');
  }
  public set enableInternetAccess(value: boolean | cdktf.IResolvable) {
    this._enableInternetAccess = value;
  }
  public resetEnableInternetAccess() {
    this._enableInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetAccessInput() {
    return this._enableInternetAccess;
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

  // mfa_enabled - computed: false, optional: true, required: false
  private _mfaEnabled?: boolean | cdktf.IResolvable; 
  public get mfaEnabled() {
    return this.getBooleanAttribute('mfa_enabled');
  }
  public set mfaEnabled(value: boolean | cdktf.IResolvable) {
    this._mfaEnabled = value;
  }
  public resetMfaEnabled() {
    this._mfaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnabledInput() {
    return this._mfaEnabled;
  }

  // protocol_type - computed: false, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // specification - computed: false, optional: true, required: false
  private _specification?: number; 
  public get specification() {
    return this.getNumberAttribute('specification');
  }
  public set specification(value: number) {
    this._specification = value;
  }
  public resetSpecification() {
    this._specification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_domain_dns_address - computed: false, optional: true, required: false
  private _subDomainDnsAddress?: string[]; 
  public get subDomainDnsAddress() {
    return this.getListAttribute('sub_domain_dns_address');
  }
  public set subDomainDnsAddress(value: string[]) {
    this._subDomainDnsAddress = value;
  }
  public resetSubDomainDnsAddress() {
    this._subDomainDnsAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainDnsAddressInput() {
    return this._subDomainDnsAddress;
  }

  // sub_domain_name - computed: false, optional: true, required: false
  private _subDomainName?: string; 
  public get subDomainName() {
    return this.getStringAttribute('sub_domain_name');
  }
  public set subDomainName(value: string) {
    this._subDomainName = value;
  }
  public resetSubDomainName() {
    this._subDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainNameInput() {
    return this._subDomainName;
  }

  // verify_code - computed: false, optional: true, required: false
  private _verifyCode?: string; 
  public get verifyCode() {
    return this.getStringAttribute('verify_code');
  }
  public set verifyCode(value: string) {
    this._verifyCode = value;
  }
  public resetVerifyCode() {
    this._verifyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCodeInput() {
    return this._verifyCode;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcdAdConnectorOfficeSiteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcdAdConnectorOfficeSiteTimeouts) {
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
      ad_connector_office_site_name: cdktf.stringToTerraform(this._adConnectorOfficeSiteName),
      ad_hostname: cdktf.stringToTerraform(this._adHostname),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      cen_id: cdktf.stringToTerraform(this._cenId),
      cen_owner_id: cdktf.stringToTerraform(this._cenOwnerId),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      desktop_access_type: cdktf.stringToTerraform(this._desktopAccessType),
      dns_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsAddress),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_password: cdktf.stringToTerraform(this._domainPassword),
      domain_user_name: cdktf.stringToTerraform(this._domainUserName),
      enable_admin_access: cdktf.booleanToTerraform(this._enableAdminAccess),
      enable_internet_access: cdktf.booleanToTerraform(this._enableInternetAccess),
      id: cdktf.stringToTerraform(this._id),
      mfa_enabled: cdktf.booleanToTerraform(this._mfaEnabled),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      specification: cdktf.numberToTerraform(this._specification),
      sub_domain_dns_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subDomainDnsAddress),
      sub_domain_name: cdktf.stringToTerraform(this._subDomainName),
      verify_code: cdktf.stringToTerraform(this._verifyCode),
      timeouts: ecdAdConnectorOfficeSiteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_connector_office_site_name: {
        value: cdktf.stringToHclTerraform(this._adConnectorOfficeSiteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ad_hostname: {
        value: cdktf.stringToHclTerraform(this._adHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cen_owner_id: {
        value: cdktf.stringToHclTerraform(this._cenOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desktop_access_type: {
        value: cdktf.stringToHclTerraform(this._desktopAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_password: {
        value: cdktf.stringToHclTerraform(this._domainPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_user_name: {
        value: cdktf.stringToHclTerraform(this._domainUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_admin_access: {
        value: cdktf.booleanToHclTerraform(this._enableAdminAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_internet_access: {
        value: cdktf.booleanToHclTerraform(this._enableInternetAccess),
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
      mfa_enabled: {
        value: cdktf.booleanToHclTerraform(this._mfaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protocol_type: {
        value: cdktf.stringToHclTerraform(this._protocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specification: {
        value: cdktf.numberToHclTerraform(this._specification),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sub_domain_dns_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subDomainDnsAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sub_domain_name: {
        value: cdktf.stringToHclTerraform(this._subDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_code: {
        value: cdktf.stringToHclTerraform(this._verifyCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ecdAdConnectorOfficeSiteTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcdAdConnectorOfficeSiteTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
