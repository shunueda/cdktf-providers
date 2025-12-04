// https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_collaboration_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteCollaborationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_collaboration_settings#netlify_drawer_in_branch_deploys SiteCollaborationSettings#netlify_drawer_in_branch_deploys}
  */
  readonly netlifyDrawerInBranchDeploys: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_collaboration_settings#netlify_drawer_in_deploy_previews SiteCollaborationSettings#netlify_drawer_in_deploy_previews}
  */
  readonly netlifyDrawerInDeployPreviews: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_collaboration_settings#netlify_heads_up_display SiteCollaborationSettings#netlify_heads_up_display}
  */
  readonly netlifyHeadsUpDisplay: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_collaboration_settings#site_id SiteCollaborationSettings#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_collaboration_settings netlify_site_collaboration_settings}
*/
export class SiteCollaborationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netlify_site_collaboration_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteCollaborationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteCollaborationSettings to import
  * @param importFromId The id of the existing SiteCollaborationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_collaboration_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteCollaborationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netlify_site_collaboration_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_collaboration_settings netlify_site_collaboration_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteCollaborationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SiteCollaborationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'netlify_site_collaboration_settings',
      terraformGeneratorMetadata: {
        providerName: 'netlify',
        providerVersion: '0.4.0',
        providerVersionConstraint: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._netlifyDrawerInBranchDeploys = config.netlifyDrawerInBranchDeploys;
    this._netlifyDrawerInDeployPreviews = config.netlifyDrawerInDeployPreviews;
    this._netlifyHeadsUpDisplay = config.netlifyHeadsUpDisplay;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // netlify_drawer_in_branch_deploys - computed: false, optional: false, required: true
  private _netlifyDrawerInBranchDeploys?: boolean | cdktf.IResolvable; 
  public get netlifyDrawerInBranchDeploys() {
    return this.getBooleanAttribute('netlify_drawer_in_branch_deploys');
  }
  public set netlifyDrawerInBranchDeploys(value: boolean | cdktf.IResolvable) {
    this._netlifyDrawerInBranchDeploys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netlifyDrawerInBranchDeploysInput() {
    return this._netlifyDrawerInBranchDeploys;
  }

  // netlify_drawer_in_deploy_previews - computed: false, optional: false, required: true
  private _netlifyDrawerInDeployPreviews?: boolean | cdktf.IResolvable; 
  public get netlifyDrawerInDeployPreviews() {
    return this.getBooleanAttribute('netlify_drawer_in_deploy_previews');
  }
  public set netlifyDrawerInDeployPreviews(value: boolean | cdktf.IResolvable) {
    this._netlifyDrawerInDeployPreviews = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netlifyDrawerInDeployPreviewsInput() {
    return this._netlifyDrawerInDeployPreviews;
  }

  // netlify_heads_up_display - computed: false, optional: false, required: true
  private _netlifyHeadsUpDisplay?: boolean | cdktf.IResolvable; 
  public get netlifyHeadsUpDisplay() {
    return this.getBooleanAttribute('netlify_heads_up_display');
  }
  public set netlifyHeadsUpDisplay(value: boolean | cdktf.IResolvable) {
    this._netlifyHeadsUpDisplay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netlifyHeadsUpDisplayInput() {
    return this._netlifyHeadsUpDisplay;
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
      netlify_drawer_in_branch_deploys: cdktf.booleanToTerraform(this._netlifyDrawerInBranchDeploys),
      netlify_drawer_in_deploy_previews: cdktf.booleanToTerraform(this._netlifyDrawerInDeployPreviews),
      netlify_heads_up_display: cdktf.booleanToTerraform(this._netlifyHeadsUpDisplay),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      netlify_drawer_in_branch_deploys: {
        value: cdktf.booleanToHclTerraform(this._netlifyDrawerInBranchDeploys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      netlify_drawer_in_deploy_previews: {
        value: cdktf.booleanToHclTerraform(this._netlifyDrawerInDeployPreviews),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      netlify_heads_up_display: {
        value: cdktf.booleanToHclTerraform(this._netlifyHeadsUpDisplay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
