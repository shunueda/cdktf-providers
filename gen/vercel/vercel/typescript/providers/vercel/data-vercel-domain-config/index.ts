// https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/data-sources/domain_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVercelDomainConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain name to get configuration for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/data-sources/domain_config#domain DataVercelDomainConfig#domain}
  */
  readonly domain: string;
  /**
  * The project ID or name associated with the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/data-sources/domain_config#project_id_or_name DataVercelDomainConfig#project_id_or_name}
  */
  readonly projectIdOrName: string;
  /**
  * The ID of the team the domain config exists under. Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/data-sources/domain_config#team_id DataVercelDomainConfig#team_id}
  */
  readonly teamId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/data-sources/domain_config vercel_domain_config}
*/
export class DataVercelDomainConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_domain_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVercelDomainConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVercelDomainConfig to import
  * @param importFromId The id of the existing DataVercelDomainConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/data-sources/domain_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVercelDomainConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_domain_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.1/docs/data-sources/domain_config vercel_domain_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVercelDomainConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataVercelDomainConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_domain_config',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.1',
        providerVersionConstraint: '4.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._projectIdOrName = config.projectIdOrName;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // project_id_or_name - computed: false, optional: false, required: true
  private _projectIdOrName?: string; 
  public get projectIdOrName() {
    return this.getStringAttribute('project_id_or_name');
  }
  public set projectIdOrName(value: string) {
    this._projectIdOrName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdOrNameInput() {
    return this._projectIdOrName;
  }

  // recommended_cname - computed: true, optional: false, required: false
  public get recommendedCname() {
    return this.getStringAttribute('recommended_cname');
  }

  // recommended_ipv4s - computed: true, optional: false, required: false
  public get recommendedIpv4S() {
    return this.getListAttribute('recommended_ipv4s');
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      project_id_or_name: cdktf.stringToTerraform(this._projectIdOrName),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id_or_name: {
        value: cdktf.stringToHclTerraform(this._projectIdOrName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
