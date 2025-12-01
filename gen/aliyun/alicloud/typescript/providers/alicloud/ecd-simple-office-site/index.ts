// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcdSimpleOfficeSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#bandwidth EcdSimpleOfficeSite#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#cen_id EcdSimpleOfficeSite#cen_id}
  */
  readonly cenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#cen_owner_id EcdSimpleOfficeSite#cen_owner_id}
  */
  readonly cenOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#cidr_block EcdSimpleOfficeSite#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#desktop_access_type EcdSimpleOfficeSite#desktop_access_type}
  */
  readonly desktopAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#enable_admin_access EcdSimpleOfficeSite#enable_admin_access}
  */
  readonly enableAdminAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#enable_cross_desktop_access EcdSimpleOfficeSite#enable_cross_desktop_access}
  */
  readonly enableCrossDesktopAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#enable_internet_access EcdSimpleOfficeSite#enable_internet_access}
  */
  readonly enableInternetAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#id EcdSimpleOfficeSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#mfa_enabled EcdSimpleOfficeSite#mfa_enabled}
  */
  readonly mfaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#office_site_name EcdSimpleOfficeSite#office_site_name}
  */
  readonly officeSiteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#sso_enabled EcdSimpleOfficeSite#sso_enabled}
  */
  readonly ssoEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site alicloud_ecd_simple_office_site}
*/
export class EcdSimpleOfficeSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecd_simple_office_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcdSimpleOfficeSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcdSimpleOfficeSite to import
  * @param importFromId The id of the existing EcdSimpleOfficeSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcdSimpleOfficeSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecd_simple_office_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecd_simple_office_site alicloud_ecd_simple_office_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcdSimpleOfficeSiteConfig
  */
  public constructor(scope: Construct, id: string, config: EcdSimpleOfficeSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecd_simple_office_site',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._cenId = config.cenId;
    this._cenOwnerId = config.cenOwnerId;
    this._cidrBlock = config.cidrBlock;
    this._desktopAccessType = config.desktopAccessType;
    this._enableAdminAccess = config.enableAdminAccess;
    this._enableCrossDesktopAccess = config.enableCrossDesktopAccess;
    this._enableInternetAccess = config.enableInternetAccess;
    this._id = config.id;
    this._mfaEnabled = config.mfaEnabled;
    this._officeSiteName = config.officeSiteName;
    this._ssoEnabled = config.ssoEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: true, optional: true, required: false
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

  // cen_id - computed: false, optional: true, required: false
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  public resetCenId() {
    this._cenId = undefined;
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

  // enable_cross_desktop_access - computed: true, optional: true, required: false
  private _enableCrossDesktopAccess?: boolean | cdktf.IResolvable; 
  public get enableCrossDesktopAccess() {
    return this.getBooleanAttribute('enable_cross_desktop_access');
  }
  public set enableCrossDesktopAccess(value: boolean | cdktf.IResolvable) {
    this._enableCrossDesktopAccess = value;
  }
  public resetEnableCrossDesktopAccess() {
    this._enableCrossDesktopAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrossDesktopAccessInput() {
    return this._enableCrossDesktopAccess;
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

  // office_site_name - computed: false, optional: true, required: false
  private _officeSiteName?: string; 
  public get officeSiteName() {
    return this.getStringAttribute('office_site_name');
  }
  public set officeSiteName(value: string) {
    this._officeSiteName = value;
  }
  public resetOfficeSiteName() {
    this._officeSiteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeSiteNameInput() {
    return this._officeSiteName;
  }

  // sso_enabled - computed: true, optional: true, required: false
  private _ssoEnabled?: boolean | cdktf.IResolvable; 
  public get ssoEnabled() {
    return this.getBooleanAttribute('sso_enabled');
  }
  public set ssoEnabled(value: boolean | cdktf.IResolvable) {
    this._ssoEnabled = value;
  }
  public resetSsoEnabled() {
    this._ssoEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoEnabledInput() {
    return this._ssoEnabled;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      cen_id: cdktf.stringToTerraform(this._cenId),
      cen_owner_id: cdktf.stringToTerraform(this._cenOwnerId),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      desktop_access_type: cdktf.stringToTerraform(this._desktopAccessType),
      enable_admin_access: cdktf.booleanToTerraform(this._enableAdminAccess),
      enable_cross_desktop_access: cdktf.booleanToTerraform(this._enableCrossDesktopAccess),
      enable_internet_access: cdktf.booleanToTerraform(this._enableInternetAccess),
      id: cdktf.stringToTerraform(this._id),
      mfa_enabled: cdktf.booleanToTerraform(this._mfaEnabled),
      office_site_name: cdktf.stringToTerraform(this._officeSiteName),
      sso_enabled: cdktf.booleanToTerraform(this._ssoEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      enable_admin_access: {
        value: cdktf.booleanToHclTerraform(this._enableAdminAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_cross_desktop_access: {
        value: cdktf.booleanToHclTerraform(this._enableCrossDesktopAccess),
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
      office_site_name: {
        value: cdktf.stringToHclTerraform(this._officeSiteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_enabled: {
        value: cdktf.booleanToHclTerraform(this._ssoEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
