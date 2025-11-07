// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcdAdConnectorDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#desktop_access_type EcdAdConnectorDirectory#desktop_access_type}
  */
  readonly desktopAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#directory_name EcdAdConnectorDirectory#directory_name}
  */
  readonly directoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#dns_address EcdAdConnectorDirectory#dns_address}
  */
  readonly dnsAddress: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#domain_name EcdAdConnectorDirectory#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#domain_password EcdAdConnectorDirectory#domain_password}
  */
  readonly domainPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#domain_user_name EcdAdConnectorDirectory#domain_user_name}
  */
  readonly domainUserName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#enable_admin_access EcdAdConnectorDirectory#enable_admin_access}
  */
  readonly enableAdminAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#id EcdAdConnectorDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#mfa_enabled EcdAdConnectorDirectory#mfa_enabled}
  */
  readonly mfaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#specification EcdAdConnectorDirectory#specification}
  */
  readonly specification?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#sub_domain_dns_address EcdAdConnectorDirectory#sub_domain_dns_address}
  */
  readonly subDomainDnsAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#sub_domain_name EcdAdConnectorDirectory#sub_domain_name}
  */
  readonly subDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#vswitch_ids EcdAdConnectorDirectory#vswitch_ids}
  */
  readonly vswitchIds: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#timeouts EcdAdConnectorDirectory#timeouts}
  */
  readonly timeouts?: EcdAdConnectorDirectoryTimeouts;
}
export interface EcdAdConnectorDirectoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#create EcdAdConnectorDirectory#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#delete EcdAdConnectorDirectory#delete}
  */
  readonly delete?: string;
}

export function ecdAdConnectorDirectoryTimeoutsToTerraform(struct?: EcdAdConnectorDirectoryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ecdAdConnectorDirectoryTimeoutsToHclTerraform(struct?: EcdAdConnectorDirectoryTimeouts | cdktf.IResolvable): any {
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

export class EcdAdConnectorDirectoryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcdAdConnectorDirectoryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EcdAdConnectorDirectoryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory alicloud_ecd_ad_connector_directory}
*/
export class EcdAdConnectorDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecd_ad_connector_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcdAdConnectorDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcdAdConnectorDirectory to import
  * @param importFromId The id of the existing EcdAdConnectorDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcdAdConnectorDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecd_ad_connector_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_ad_connector_directory alicloud_ecd_ad_connector_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcdAdConnectorDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: EcdAdConnectorDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecd_ad_connector_directory',
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
    this._desktopAccessType = config.desktopAccessType;
    this._directoryName = config.directoryName;
    this._dnsAddress = config.dnsAddress;
    this._domainName = config.domainName;
    this._domainPassword = config.domainPassword;
    this._domainUserName = config.domainUserName;
    this._enableAdminAccess = config.enableAdminAccess;
    this._id = config.id;
    this._mfaEnabled = config.mfaEnabled;
    this._specification = config.specification;
    this._subDomainDnsAddress = config.subDomainDnsAddress;
    this._subDomainName = config.subDomainName;
    this._vswitchIds = config.vswitchIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // directory_name - computed: false, optional: false, required: true
  private _directoryName?: string; 
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }
  public set directoryName(value: string) {
    this._directoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName;
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

  // domain_password - computed: false, optional: false, required: true
  private _domainPassword?: string; 
  public get domainPassword() {
    return this.getStringAttribute('domain_password');
  }
  public set domainPassword(value: string) {
    this._domainPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainPasswordInput() {
    return this._domainPassword;
  }

  // domain_user_name - computed: false, optional: false, required: true
  private _domainUserName?: string; 
  public get domainUserName() {
    return this.getStringAttribute('domain_user_name');
  }
  public set domainUserName(value: string) {
    this._domainUserName = value;
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

  // mfa_enabled - computed: true, optional: true, required: false
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

  // vswitch_ids - computed: false, optional: false, required: true
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return this.getListAttribute('vswitch_ids');
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcdAdConnectorDirectoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcdAdConnectorDirectoryTimeouts) {
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
      desktop_access_type: cdktf.stringToTerraform(this._desktopAccessType),
      directory_name: cdktf.stringToTerraform(this._directoryName),
      dns_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsAddress),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_password: cdktf.stringToTerraform(this._domainPassword),
      domain_user_name: cdktf.stringToTerraform(this._domainUserName),
      enable_admin_access: cdktf.booleanToTerraform(this._enableAdminAccess),
      id: cdktf.stringToTerraform(this._id),
      mfa_enabled: cdktf.booleanToTerraform(this._mfaEnabled),
      specification: cdktf.numberToTerraform(this._specification),
      sub_domain_dns_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subDomainDnsAddress),
      sub_domain_name: cdktf.stringToTerraform(this._subDomainName),
      vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vswitchIds),
      timeouts: ecdAdConnectorDirectoryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desktop_access_type: {
        value: cdktf.stringToHclTerraform(this._desktopAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_name: {
        value: cdktf.stringToHclTerraform(this._directoryName),
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
      vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vswitchIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: ecdAdConnectorDirectoryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcdAdConnectorDirectoryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
