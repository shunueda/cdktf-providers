// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_content_filtering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceContentFilteringConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of URL patterns that are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_content_filtering#allowed_url_patterns ApplianceContentFiltering#allowed_url_patterns}
  */
  readonly allowedUrlPatterns?: string[];
  /**
  * A list of URL categories to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_content_filtering#blocked_url_categories ApplianceContentFiltering#blocked_url_categories}
  */
  readonly blockedUrlCategories?: string[];
  /**
  * A list of URL patterns that are blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_content_filtering#blocked_url_patterns ApplianceContentFiltering#blocked_url_patterns}
  */
  readonly blockedUrlPatterns?: string[];
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_content_filtering#network_id ApplianceContentFiltering#network_id}
  */
  readonly networkId: string;
  /**
  * URL category list size which is either `topSites` or `fullList`
  *   - Choices: `fullList`, `topSites`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_content_filtering#url_category_list_size ApplianceContentFiltering#url_category_list_size}
  */
  readonly urlCategoryListSize?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_content_filtering meraki_appliance_content_filtering}
*/
export class ApplianceContentFiltering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_content_filtering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceContentFiltering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceContentFiltering to import
  * @param importFromId The id of the existing ApplianceContentFiltering that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_content_filtering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceContentFiltering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_content_filtering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_content_filtering meraki_appliance_content_filtering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceContentFilteringConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceContentFilteringConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_content_filtering',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedUrlPatterns = config.allowedUrlPatterns;
    this._blockedUrlCategories = config.blockedUrlCategories;
    this._blockedUrlPatterns = config.blockedUrlPatterns;
    this._networkId = config.networkId;
    this._urlCategoryListSize = config.urlCategoryListSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_url_patterns - computed: false, optional: true, required: false
  private _allowedUrlPatterns?: string[]; 
  public get allowedUrlPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_url_patterns'));
  }
  public set allowedUrlPatterns(value: string[]) {
    this._allowedUrlPatterns = value;
  }
  public resetAllowedUrlPatterns() {
    this._allowedUrlPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUrlPatternsInput() {
    return this._allowedUrlPatterns;
  }

  // blocked_url_categories - computed: false, optional: true, required: false
  private _blockedUrlCategories?: string[]; 
  public get blockedUrlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_url_categories'));
  }
  public set blockedUrlCategories(value: string[]) {
    this._blockedUrlCategories = value;
  }
  public resetBlockedUrlCategories() {
    this._blockedUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedUrlCategoriesInput() {
    return this._blockedUrlCategories;
  }

  // blocked_url_patterns - computed: false, optional: true, required: false
  private _blockedUrlPatterns?: string[]; 
  public get blockedUrlPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_url_patterns'));
  }
  public set blockedUrlPatterns(value: string[]) {
    this._blockedUrlPatterns = value;
  }
  public resetBlockedUrlPatterns() {
    this._blockedUrlPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedUrlPatternsInput() {
    return this._blockedUrlPatterns;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // url_category_list_size - computed: false, optional: true, required: false
  private _urlCategoryListSize?: string; 
  public get urlCategoryListSize() {
    return this.getStringAttribute('url_category_list_size');
  }
  public set urlCategoryListSize(value: string) {
    this._urlCategoryListSize = value;
  }
  public resetUrlCategoryListSize() {
    this._urlCategoryListSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoryListSizeInput() {
    return this._urlCategoryListSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_url_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedUrlPatterns),
      blocked_url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedUrlCategories),
      blocked_url_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedUrlPatterns),
      network_id: cdktf.stringToTerraform(this._networkId),
      url_category_list_size: cdktf.stringToTerraform(this._urlCategoryListSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_url_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedUrlPatterns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blocked_url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedUrlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blocked_url_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedUrlPatterns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_category_list_size: {
        value: cdktf.stringToHclTerraform(this._urlCategoryListSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
