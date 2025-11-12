// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/ftp_control_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FtpControlPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether to enable native FTP. When enabled, users can connect to native FTP sites and download files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/ftp_control_policy#ftp_enabled FtpControlPolicy#ftp_enabled}
  */
  readonly ftpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to enable FTP over HTTP. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/ftp_control_policy#ftp_over_http_enabled FtpControlPolicy#ftp_over_http_enabled}
  */
  readonly ftpOverHttpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/ftp_control_policy#id FtpControlPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of URL categories that allow FTP traffic.
  * 				See the URL Categories API for the list of available categories:
  * 				https://help.zscaler.com/zia/url-categories#/urlCategories-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/ftp_control_policy#url_categories FtpControlPolicy#url_categories}
  */
  readonly urlCategories?: string[];
  /**
  * Domains or URLs included for the FTP Control settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/ftp_control_policy#urls FtpControlPolicy#urls}
  */
  readonly urls?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/ftp_control_policy zia_ftp_control_policy}
*/
export class FtpControlPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_ftp_control_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FtpControlPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FtpControlPolicy to import
  * @param importFromId The id of the existing FtpControlPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/ftp_control_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FtpControlPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_ftp_control_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/ftp_control_policy zia_ftp_control_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FtpControlPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FtpControlPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_ftp_control_policy',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ftpEnabled = config.ftpEnabled;
    this._ftpOverHttpEnabled = config.ftpOverHttpEnabled;
    this._id = config.id;
    this._urlCategories = config.urlCategories;
    this._urls = config.urls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ftp_enabled - computed: false, optional: true, required: false
  private _ftpEnabled?: boolean | cdktf.IResolvable; 
  public get ftpEnabled() {
    return this.getBooleanAttribute('ftp_enabled');
  }
  public set ftpEnabled(value: boolean | cdktf.IResolvable) {
    this._ftpEnabled = value;
  }
  public resetFtpEnabled() {
    this._ftpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpEnabledInput() {
    return this._ftpEnabled;
  }

  // ftp_over_http_enabled - computed: false, optional: true, required: false
  private _ftpOverHttpEnabled?: boolean | cdktf.IResolvable; 
  public get ftpOverHttpEnabled() {
    return this.getBooleanAttribute('ftp_over_http_enabled');
  }
  public set ftpOverHttpEnabled(value: boolean | cdktf.IResolvable) {
    this._ftpOverHttpEnabled = value;
  }
  public resetFtpOverHttpEnabled() {
    this._ftpOverHttpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpOverHttpEnabledInput() {
    return this._ftpOverHttpEnabled;
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

  // url_categories - computed: false, optional: true, required: false
  private _urlCategories?: string[]; 
  public get urlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('url_categories'));
  }
  public set urlCategories(value: string[]) {
    this._urlCategories = value;
  }
  public resetUrlCategories() {
    this._urlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoriesInput() {
    return this._urlCategories;
  }

  // urls - computed: false, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return cdktf.Fn.tolist(this.getListAttribute('urls'));
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ftp_enabled: cdktf.booleanToTerraform(this._ftpEnabled),
      ftp_over_http_enabled: cdktf.booleanToTerraform(this._ftpOverHttpEnabled),
      id: cdktf.stringToTerraform(this._id),
      url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlCategories),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ftp_enabled: {
        value: cdktf.booleanToHclTerraform(this._ftpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ftp_over_http_enabled: {
        value: cdktf.booleanToHclTerraform(this._ftpOverHttpEnabled),
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
      url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
