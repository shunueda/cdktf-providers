// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_banner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudBrowserIsolationBannerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_banner#banner CloudBrowserIsolationBanner#banner}
  */
  readonly banner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_banner#logo CloudBrowserIsolationBanner#logo}
  */
  readonly logo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_banner#name CloudBrowserIsolationBanner#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_banner#notification_text CloudBrowserIsolationBanner#notification_text}
  */
  readonly notificationText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_banner#notification_title CloudBrowserIsolationBanner#notification_title}
  */
  readonly notificationTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_banner#persist CloudBrowserIsolationBanner#persist}
  */
  readonly persist?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_banner#primary_color CloudBrowserIsolationBanner#primary_color}
  */
  readonly primaryColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_banner#text_color CloudBrowserIsolationBanner#text_color}
  */
  readonly textColor?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_banner zpa_cloud_browser_isolation_banner}
*/
export class CloudBrowserIsolationBanner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_cloud_browser_isolation_banner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudBrowserIsolationBanner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudBrowserIsolationBanner to import
  * @param importFromId The id of the existing CloudBrowserIsolationBanner that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_banner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudBrowserIsolationBanner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_cloud_browser_isolation_banner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/cloud_browser_isolation_banner zpa_cloud_browser_isolation_banner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudBrowserIsolationBannerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudBrowserIsolationBannerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_cloud_browser_isolation_banner',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._banner = config.banner;
    this._logo = config.logo;
    this._name = config.name;
    this._notificationText = config.notificationText;
    this._notificationTitle = config.notificationTitle;
    this._persist = config.persist;
    this._primaryColor = config.primaryColor;
    this._textColor = config.textColor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // banner - computed: true, optional: true, required: false
  private _banner?: boolean | cdktf.IResolvable; 
  public get banner() {
    return this.getBooleanAttribute('banner');
  }
  public set banner(value: boolean | cdktf.IResolvable) {
    this._banner = value;
  }
  public resetBanner() {
    this._banner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerInput() {
    return this._banner;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logo - computed: true, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
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

  // notification_text - computed: false, optional: true, required: false
  private _notificationText?: string; 
  public get notificationText() {
    return this.getStringAttribute('notification_text');
  }
  public set notificationText(value: string) {
    this._notificationText = value;
  }
  public resetNotificationText() {
    this._notificationText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTextInput() {
    return this._notificationText;
  }

  // notification_title - computed: false, optional: true, required: false
  private _notificationTitle?: string; 
  public get notificationTitle() {
    return this.getStringAttribute('notification_title');
  }
  public set notificationTitle(value: string) {
    this._notificationTitle = value;
  }
  public resetNotificationTitle() {
    this._notificationTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTitleInput() {
    return this._notificationTitle;
  }

  // persist - computed: true, optional: true, required: false
  private _persist?: boolean | cdktf.IResolvable; 
  public get persist() {
    return this.getBooleanAttribute('persist');
  }
  public set persist(value: boolean | cdktf.IResolvable) {
    this._persist = value;
  }
  public resetPersist() {
    this._persist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistInput() {
    return this._persist;
  }

  // primary_color - computed: false, optional: true, required: false
  private _primaryColor?: string; 
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }
  public set primaryColor(value: string) {
    this._primaryColor = value;
  }
  public resetPrimaryColor() {
    this._primaryColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorInput() {
    return this._primaryColor;
  }

  // text_color - computed: false, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      banner: cdktf.booleanToTerraform(this._banner),
      logo: cdktf.stringToTerraform(this._logo),
      name: cdktf.stringToTerraform(this._name),
      notification_text: cdktf.stringToTerraform(this._notificationText),
      notification_title: cdktf.stringToTerraform(this._notificationTitle),
      persist: cdktf.booleanToTerraform(this._persist),
      primary_color: cdktf.stringToTerraform(this._primaryColor),
      text_color: cdktf.stringToTerraform(this._textColor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      banner: {
        value: cdktf.booleanToHclTerraform(this._banner),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logo: {
        value: cdktf.stringToHclTerraform(this._logo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_text: {
        value: cdktf.stringToHclTerraform(this._notificationText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_title: {
        value: cdktf.stringToHclTerraform(this._notificationTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persist: {
        value: cdktf.booleanToHclTerraform(this._persist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_color: {
        value: cdktf.stringToHclTerraform(this._primaryColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_color: {
        value: cdktf.stringToHclTerraform(this._textColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
