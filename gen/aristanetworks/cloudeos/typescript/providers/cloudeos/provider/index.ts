// https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudeosProviderConfig {
  /**
  * CVaaS Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs#cvaas_domain CloudeosProvider#cvaas_domain}
  */
  readonly cvaasDomain: string;
  /**
  * Cvp server hostname / ip address and port for terraform client to authenticate. It must be in format of <hostname> or <hostname>:<port>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs#cvaas_server CloudeosProvider#cvaas_server}
  */
  readonly cvaasServer: string;
  /**
  * Service account web token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs#service_account_web_token CloudeosProvider#service_account_web_token}
  */
  readonly serviceAccountWebToken: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs#alias CloudeosProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs cloudeos}
*/
export class CloudeosProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudeos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudeosProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudeosProvider to import
  * @param importFromId The id of the existing CloudeosProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudeosProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudeos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs cloudeos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudeosProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CloudeosProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudeos',
      terraformGeneratorMetadata: {
        providerName: 'cloudeos',
        providerVersion: '1.2.2',
        providerVersionConstraint: '1.2.2'
      },
      terraformProviderSource: 'aristanetworks/cloudeos'
    });
    this._cvaasDomain = config.cvaasDomain;
    this._cvaasServer = config.cvaasServer;
    this._serviceAccountWebToken = config.serviceAccountWebToken;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cvaas_domain - computed: false, optional: false, required: true
  private _cvaasDomain?: string; 
  public get cvaasDomain() {
    return this._cvaasDomain;
  }
  public set cvaasDomain(value: string | undefined) {
    this._cvaasDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cvaasDomainInput() {
    return this._cvaasDomain;
  }

  // cvaas_server - computed: false, optional: false, required: true
  private _cvaasServer?: string; 
  public get cvaasServer() {
    return this._cvaasServer;
  }
  public set cvaasServer(value: string | undefined) {
    this._cvaasServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cvaasServerInput() {
    return this._cvaasServer;
  }

  // service_account_web_token - computed: false, optional: false, required: true
  private _serviceAccountWebToken?: string; 
  public get serviceAccountWebToken() {
    return this._serviceAccountWebToken;
  }
  public set serviceAccountWebToken(value: string | undefined) {
    this._serviceAccountWebToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountWebTokenInput() {
    return this._serviceAccountWebToken;
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
      cvaas_domain: cdktf.stringToTerraform(this._cvaasDomain),
      cvaas_server: cdktf.stringToTerraform(this._cvaasServer),
      service_account_web_token: cdktf.stringToTerraform(this._serviceAccountWebToken),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cvaas_domain: {
        value: cdktf.stringToHclTerraform(this._cvaasDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cvaas_server: {
        value: cdktf.stringToHclTerraform(this._cvaasServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_web_token: {
        value: cdktf.stringToHclTerraform(this._serviceAccountWebToken),
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
