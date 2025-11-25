// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_classes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BandwidthClassesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the bandwidth class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_classes#name BandwidthClasses#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_classes#url_categories BandwidthClasses#url_categories}
  */
  readonly urlCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_classes#urls BandwidthClasses#urls}
  */
  readonly urls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_classes#web_applications BandwidthClasses#web_applications}
  */
  readonly webApplications?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_classes zia_bandwidth_classes}
*/
export class BandwidthClasses extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_bandwidth_classes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BandwidthClasses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BandwidthClasses to import
  * @param importFromId The id of the existing BandwidthClasses that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_classes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BandwidthClasses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_bandwidth_classes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_classes zia_bandwidth_classes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BandwidthClassesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BandwidthClassesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_bandwidth_classes',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._urlCategories = config.urlCategories;
    this._urls = config.urls;
    this._webApplications = config.webApplications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getNumberAttribute('class_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // web_applications - computed: false, optional: true, required: false
  private _webApplications?: string[]; 
  public get webApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('web_applications'));
  }
  public set webApplications(value: string[]) {
    this._webApplications = value;
  }
  public resetWebApplications() {
    this._webApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webApplicationsInput() {
    return this._webApplications;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlCategories),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
      web_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webApplications),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      web_applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webApplications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
