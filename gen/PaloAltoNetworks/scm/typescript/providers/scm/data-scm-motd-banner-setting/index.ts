// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/motd_banner_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmMotdBannerSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/motd_banner_setting#device DataScmMotdBannerSetting#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/motd_banner_setting#folder DataScmMotdBannerSetting#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/motd_banner_setting#id DataScmMotdBannerSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/motd_banner_setting#snippet DataScmMotdBannerSetting#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmMotdBannerSettingMotdAndBanner {
}

export function dataScmMotdBannerSettingMotdAndBannerToTerraform(struct?: DataScmMotdBannerSettingMotdAndBanner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmMotdBannerSettingMotdAndBannerToHclTerraform(struct?: DataScmMotdBannerSettingMotdAndBanner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmMotdBannerSettingMotdAndBannerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmMotdBannerSettingMotdAndBanner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmMotdBannerSettingMotdAndBanner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // banner_footer - computed: true, optional: false, required: false
  public get bannerFooter() {
    return this.getStringAttribute('banner_footer');
  }

  // banner_footer_color - computed: true, optional: false, required: false
  public get bannerFooterColor() {
    return this.getStringAttribute('banner_footer_color');
  }

  // banner_footer_text_color - computed: true, optional: false, required: false
  public get bannerFooterTextColor() {
    return this.getStringAttribute('banner_footer_text_color');
  }

  // banner_header - computed: true, optional: false, required: false
  public get bannerHeader() {
    return this.getStringAttribute('banner_header');
  }

  // banner_header_color - computed: true, optional: false, required: false
  public get bannerHeaderColor() {
    return this.getStringAttribute('banner_header_color');
  }

  // banner_header_footer_match - computed: true, optional: false, required: false
  public get bannerHeaderFooterMatch() {
    return this.getBooleanAttribute('banner_header_footer_match');
  }

  // banner_header_text_color - computed: true, optional: false, required: false
  public get bannerHeaderTextColor() {
    return this.getStringAttribute('banner_header_text_color');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // motd_color - computed: true, optional: false, required: false
  public get motdColor() {
    return this.getStringAttribute('motd_color');
  }

  // motd_do_not_display_again - computed: true, optional: false, required: false
  public get motdDoNotDisplayAgain() {
    return this.getBooleanAttribute('motd_do_not_display_again');
  }

  // motd_enable - computed: true, optional: false, required: false
  public get motdEnable() {
    return this.getBooleanAttribute('motd_enable');
  }

  // motd_title - computed: true, optional: false, required: false
  public get motdTitle() {
    return this.getStringAttribute('motd_title');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/motd_banner_setting scm_motd_banner_setting}
*/
export class DataScmMotdBannerSetting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_motd_banner_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmMotdBannerSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmMotdBannerSetting to import
  * @param importFromId The id of the existing DataScmMotdBannerSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/motd_banner_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmMotdBannerSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_motd_banner_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/motd_banner_setting scm_motd_banner_setting} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmMotdBannerSettingConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmMotdBannerSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_motd_banner_setting',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._id = config.id;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // motd_and_banner - computed: true, optional: false, required: false
  private _motdAndBanner = new DataScmMotdBannerSettingMotdAndBannerOutputReference(this, "motd_and_banner");
  public get motdAndBanner() {
    return this._motdAndBanner;
  }

  // snippet - computed: true, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
