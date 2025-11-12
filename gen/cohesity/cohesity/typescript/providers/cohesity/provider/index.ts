// https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CohesityProviderConfig {
  /**
  * The domain name of cohesity user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs#cluster_domain CohesityProvider#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * Cohesity cluster password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs#cluster_password CohesityProvider#cluster_password}
  */
  readonly clusterPassword?: string;
  /**
  * Cohesity cluster username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs#cluster_username CohesityProvider#cluster_username}
  */
  readonly clusterUsername?: string;
  /**
  * IP or hostname of Cohesity cluster node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs#cluster_vip CohesityProvider#cluster_vip}
  */
  readonly clusterVip?: string;
  /**
  * support password for the Cohesity cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs#support_password CohesityProvider#support_password}
  */
  readonly supportPassword?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs#alias CohesityProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs cohesity}
*/
export class CohesityProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CohesityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CohesityProvider to import
  * @param importFromId The id of the existing CohesityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CohesityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs cohesity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CohesityProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CohesityProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cohesity',
      terraformGeneratorMetadata: {
        providerName: 'cohesity',
        providerVersion: '2.1.3',
        providerVersionConstraint: '2.1.3'
      },
      terraformProviderSource: 'cohesity/cohesity'
    });
    this._clusterDomain = config.clusterDomain;
    this._clusterPassword = config.clusterPassword;
    this._clusterUsername = config.clusterUsername;
    this._clusterVip = config.clusterVip;
    this._supportPassword = config.supportPassword;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_domain - computed: false, optional: true, required: false
  private _clusterDomain?: string; 
  public get clusterDomain() {
    return this._clusterDomain;
  }
  public set clusterDomain(value: string | undefined) {
    this._clusterDomain = value;
  }
  public resetClusterDomain() {
    this._clusterDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDomainInput() {
    return this._clusterDomain;
  }

  // cluster_password - computed: false, optional: true, required: false
  private _clusterPassword?: string; 
  public get clusterPassword() {
    return this._clusterPassword;
  }
  public set clusterPassword(value: string | undefined) {
    this._clusterPassword = value;
  }
  public resetClusterPassword() {
    this._clusterPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPasswordInput() {
    return this._clusterPassword;
  }

  // cluster_username - computed: false, optional: true, required: false
  private _clusterUsername?: string; 
  public get clusterUsername() {
    return this._clusterUsername;
  }
  public set clusterUsername(value: string | undefined) {
    this._clusterUsername = value;
  }
  public resetClusterUsername() {
    this._clusterUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUsernameInput() {
    return this._clusterUsername;
  }

  // cluster_vip - computed: false, optional: true, required: false
  private _clusterVip?: string; 
  public get clusterVip() {
    return this._clusterVip;
  }
  public set clusterVip(value: string | undefined) {
    this._clusterVip = value;
  }
  public resetClusterVip() {
    this._clusterVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVipInput() {
    return this._clusterVip;
  }

  // support_password - computed: false, optional: true, required: false
  private _supportPassword?: string; 
  public get supportPassword() {
    return this._supportPassword;
  }
  public set supportPassword(value: string | undefined) {
    this._supportPassword = value;
  }
  public resetSupportPassword() {
    this._supportPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportPasswordInput() {
    return this._supportPassword;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_domain: cdktf.stringToTerraform(this._clusterDomain),
      cluster_password: cdktf.stringToTerraform(this._clusterPassword),
      cluster_username: cdktf.stringToTerraform(this._clusterUsername),
      cluster_vip: cdktf.stringToTerraform(this._clusterVip),
      support_password: cdktf.stringToTerraform(this._supportPassword),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_domain: {
        value: cdktf.stringToHclTerraform(this._clusterDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_password: {
        value: cdktf.stringToHclTerraform(this._clusterPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_username: {
        value: cdktf.stringToHclTerraform(this._clusterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_vip: {
        value: cdktf.stringToHclTerraform(this._clusterVip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_password: {
        value: cdktf.stringToHclTerraform(this._supportPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
