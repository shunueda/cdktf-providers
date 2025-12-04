// https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_metrics_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteMetricsSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable real user metrics. Warning: This might incur a cost on certain plans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_metrics_settings#real_user_metrics SiteMetricsSettings#real_user_metrics}
  */
  readonly realUserMetrics?: boolean | cdktf.IResolvable;
  /**
  * Enable site analytics. Warning: This might incur a cost on certain plans. Note: You must wait 10 minutes before disabling after enabling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_metrics_settings#site_analytics SiteMetricsSettings#site_analytics}
  */
  readonly siteAnalytics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_metrics_settings#site_id SiteMetricsSettings#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_metrics_settings netlify_site_metrics_settings}
*/
export class SiteMetricsSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netlify_site_metrics_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteMetricsSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteMetricsSettings to import
  * @param importFromId The id of the existing SiteMetricsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_metrics_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteMetricsSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netlify_site_metrics_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netlify/netlify/0.4.0/docs/resources/site_metrics_settings netlify_site_metrics_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteMetricsSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SiteMetricsSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'netlify_site_metrics_settings',
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
    this._realUserMetrics = config.realUserMetrics;
    this._siteAnalytics = config.siteAnalytics;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // real_user_metrics - computed: false, optional: true, required: false
  private _realUserMetrics?: boolean | cdktf.IResolvable; 
  public get realUserMetrics() {
    return this.getBooleanAttribute('real_user_metrics');
  }
  public set realUserMetrics(value: boolean | cdktf.IResolvable) {
    this._realUserMetrics = value;
  }
  public resetRealUserMetrics() {
    this._realUserMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realUserMetricsInput() {
    return this._realUserMetrics;
  }

  // site_analytics - computed: false, optional: true, required: false
  private _siteAnalytics?: boolean | cdktf.IResolvable; 
  public get siteAnalytics() {
    return this.getBooleanAttribute('site_analytics');
  }
  public set siteAnalytics(value: boolean | cdktf.IResolvable) {
    this._siteAnalytics = value;
  }
  public resetSiteAnalytics() {
    this._siteAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteAnalyticsInput() {
    return this._siteAnalytics;
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
      real_user_metrics: cdktf.booleanToTerraform(this._realUserMetrics),
      site_analytics: cdktf.booleanToTerraform(this._siteAnalytics),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      real_user_metrics: {
        value: cdktf.booleanToHclTerraform(this._realUserMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_analytics: {
        value: cdktf.booleanToHclTerraform(this._siteAnalytics),
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
