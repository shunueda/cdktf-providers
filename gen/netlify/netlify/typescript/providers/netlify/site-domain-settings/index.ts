// https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_domain_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteDomainSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_domain_settings#branch_deploy_custom_domain SiteDomainSettings#branch_deploy_custom_domain}
  */
  readonly branchDeployCustomDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_domain_settings#custom_domain SiteDomainSettings#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_domain_settings#deploy_preview_custom_domain SiteDomainSettings#deploy_preview_custom_domain}
  */
  readonly deployPreviewCustomDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_domain_settings#domain_aliases SiteDomainSettings#domain_aliases}
  */
  readonly domainAliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_domain_settings#site_id SiteDomainSettings#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_domain_settings netlify_site_domain_settings}
*/
export class SiteDomainSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netlify_site_domain_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteDomainSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteDomainSettings to import
  * @param importFromId The id of the existing SiteDomainSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_domain_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteDomainSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netlify_site_domain_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_domain_settings netlify_site_domain_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteDomainSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SiteDomainSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'netlify_site_domain_settings',
      terraformGeneratorMetadata: {
        providerName: 'netlify',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branchDeployCustomDomain = config.branchDeployCustomDomain;
    this._customDomain = config.customDomain;
    this._deployPreviewCustomDomain = config.deployPreviewCustomDomain;
    this._domainAliases = config.domainAliases;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch_deploy_custom_domain - computed: false, optional: true, required: false
  private _branchDeployCustomDomain?: string; 
  public get branchDeployCustomDomain() {
    return this.getStringAttribute('branch_deploy_custom_domain');
  }
  public set branchDeployCustomDomain(value: string) {
    this._branchDeployCustomDomain = value;
  }
  public resetBranchDeployCustomDomain() {
    this._branchDeployCustomDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchDeployCustomDomainInput() {
    return this._branchDeployCustomDomain;
  }

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain?: string; 
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }
  public set customDomain(value: string) {
    this._customDomain = value;
  }
  public resetCustomDomain() {
    this._customDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain;
  }

  // deploy_preview_custom_domain - computed: false, optional: true, required: false
  private _deployPreviewCustomDomain?: string; 
  public get deployPreviewCustomDomain() {
    return this.getStringAttribute('deploy_preview_custom_domain');
  }
  public set deployPreviewCustomDomain(value: string) {
    this._deployPreviewCustomDomain = value;
  }
  public resetDeployPreviewCustomDomain() {
    this._deployPreviewCustomDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployPreviewCustomDomainInput() {
    return this._deployPreviewCustomDomain;
  }

  // domain_aliases - computed: true, optional: true, required: false
  private _domainAliases?: string[]; 
  public get domainAliases() {
    return this.getListAttribute('domain_aliases');
  }
  public set domainAliases(value: string[]) {
    this._domainAliases = value;
  }
  public resetDomainAliases() {
    this._domainAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAliasesInput() {
    return this._domainAliases;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch_deploy_custom_domain: cdktf.stringToTerraform(this._branchDeployCustomDomain),
      custom_domain: cdktf.stringToTerraform(this._customDomain),
      deploy_preview_custom_domain: cdktf.stringToTerraform(this._deployPreviewCustomDomain),
      domain_aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainAliases),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch_deploy_custom_domain: {
        value: cdktf.stringToHclTerraform(this._branchDeployCustomDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_domain: {
        value: cdktf.stringToHclTerraform(this._customDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_preview_custom_domain: {
        value: cdktf.stringToHclTerraform(this._deployPreviewCustomDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainAliases),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
