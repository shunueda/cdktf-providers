// https://registry.terraform.io/providers/hectorj/googlesiteverification/0.4.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GooglesiteverificationProviderConfig {
  /**
  * Either the path to or the contents of a [service account key file](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) in JSON format. If not provided, the [application default credentials](https://cloud.google.com/sdk/gcloud/reference/auth/application-default) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hectorj/googlesiteverification/0.4.5/docs#credentials GooglesiteverificationProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hectorj/googlesiteverification/0.4.5/docs#alias GooglesiteverificationProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hectorj/googlesiteverification/0.4.5/docs googlesiteverification}
*/
export class GooglesiteverificationProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googlesiteverification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GooglesiteverificationProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GooglesiteverificationProvider to import
  * @param importFromId The id of the existing GooglesiteverificationProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hectorj/googlesiteverification/0.4.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GooglesiteverificationProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "googlesiteverification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hectorj/googlesiteverification/0.4.5/docs googlesiteverification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GooglesiteverificationProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GooglesiteverificationProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'googlesiteverification',
      terraformGeneratorMetadata: {
        providerName: 'googlesiteverification',
        providerVersion: '0.4.5'
      },
      terraformProviderSource: 'hectorj/googlesiteverification'
    });
    this._credentials = config.credentials;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
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
      credentials: cdktf.stringToTerraform(this._credentials),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
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
