// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CrowdstrikeProviderConfig {
  /**
  * Falcon Client Id for authenticating to the CrowdStrike APIs. Will use FALCON_CLIENT_ID environment variable when left blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs#client_id CrowdstrikeProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Falcon Client Secret used for authenticating to the CrowdStrike APIs. Will use FALCON_CLIENT_SECRET environment variable when left blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs#client_secret CrowdstrikeProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Falcon Cloud to authenticate to. Valid values are autodiscover, us-1, us-2, eu-1, us-gov-1. Will use FALCON_CLOUD environment variable when left blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs#cloud CrowdstrikeProvider#cloud}
  */
  readonly cloud?: string;
  /**
  * For MSSP Master CIDs, optionally lock the token to act on behalf of this member CID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs#member_cid CrowdstrikeProvider#member_cid}
  */
  readonly memberCid?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs#alias CrowdstrikeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs crowdstrike}
*/
export class CrowdstrikeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CrowdstrikeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CrowdstrikeProvider to import
  * @param importFromId The id of the existing CrowdstrikeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CrowdstrikeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs crowdstrike} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CrowdstrikeProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CrowdstrikeProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.46',
        providerVersionConstraint: '0.0.46'
      },
      terraformProviderSource: 'CrowdStrike/crowdstrike'
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._cloud = config.cloud;
    this._memberCid = config.memberCid;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this._cloud;
  }
  public set cloud(value: string | undefined) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // member_cid - computed: false, optional: true, required: false
  private _memberCid?: string; 
  public get memberCid() {
    return this._memberCid;
  }
  public set memberCid(value: string | undefined) {
    this._memberCid = value;
  }
  public resetMemberCid() {
    this._memberCid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberCidInput() {
    return this._memberCid;
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
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      cloud: cdktf.stringToTerraform(this._cloud),
      member_cid: cdktf.stringToTerraform(this._memberCid),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_cid: {
        value: cdktf.stringToHclTerraform(this._memberCid),
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
