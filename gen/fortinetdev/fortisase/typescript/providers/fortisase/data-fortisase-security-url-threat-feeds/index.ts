// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_url_threat_feeds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityUrlThreatFeedsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_url_threat_feeds#basic_authentication DataFortisaseSecurityUrlThreatFeeds#basic_authentication}
  */
  readonly basicAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_url_threat_feeds#comments DataFortisaseSecurityUrlThreatFeeds#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_url_threat_feeds#primary_key DataFortisaseSecurityUrlThreatFeeds#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_url_threat_feeds#refresh_rate DataFortisaseSecurityUrlThreatFeeds#refresh_rate}
  */
  readonly refreshRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_url_threat_feeds#status DataFortisaseSecurityUrlThreatFeeds#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_url_threat_feeds#uri DataFortisaseSecurityUrlThreatFeeds#uri}
  */
  readonly uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_url_threat_feeds#username DataFortisaseSecurityUrlThreatFeeds#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_url_threat_feeds fortisase_security_url_threat_feeds}
*/
export class DataFortisaseSecurityUrlThreatFeeds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_url_threat_feeds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityUrlThreatFeeds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityUrlThreatFeeds to import
  * @param importFromId The id of the existing DataFortisaseSecurityUrlThreatFeeds that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_url_threat_feeds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityUrlThreatFeeds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_url_threat_feeds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_url_threat_feeds fortisase_security_url_threat_feeds} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityUrlThreatFeedsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityUrlThreatFeedsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_url_threat_feeds',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basicAuthentication = config.basicAuthentication;
    this._comments = config.comments;
    this._primaryKey = config.primaryKey;
    this._refreshRate = config.refreshRate;
    this._status = config.status;
    this._uri = config.uri;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basic_authentication - computed: true, optional: true, required: false
  private _basicAuthentication?: string; 
  public get basicAuthentication() {
    return this.getStringAttribute('basic_authentication');
  }
  public set basicAuthentication(value: string) {
    this._basicAuthentication = value;
  }
  public resetBasicAuthentication() {
    this._basicAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthenticationInput() {
    return this._basicAuthentication;
  }

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // refresh_rate - computed: true, optional: true, required: false
  private _refreshRate?: number; 
  public get refreshRate() {
    return this.getNumberAttribute('refresh_rate');
  }
  public set refreshRate(value: number) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      basic_authentication: cdktf.stringToTerraform(this._basicAuthentication),
      comments: cdktf.stringToTerraform(this._comments),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      refresh_rate: cdktf.numberToTerraform(this._refreshRate),
      status: cdktf.stringToTerraform(this._status),
      uri: cdktf.stringToTerraform(this._uri),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basic_authentication: {
        value: cdktf.stringToHclTerraform(this._basicAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_rate: {
        value: cdktf.numberToHclTerraform(this._refreshRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
