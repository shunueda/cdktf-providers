// https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MondooProviderConfig {
  /**
  * The contents of a service account key file in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs#credentials MondooProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * The endpoint url of the server to manage resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs#endpoint MondooProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The default region to manage resources in. Valid regions are `us` or `eu`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs#region MondooProvider#region}
  */
  readonly region?: string;
  /**
  * The default space to manage resources in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs#space MondooProvider#space}
  */
  readonly space?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs#alias MondooProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs mondoo}
*/
export class MondooProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MondooProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MondooProvider to import
  * @param importFromId The id of the existing MondooProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MondooProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs mondoo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MondooProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MondooProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mondoo',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.34.0'
      },
      terraformProviderSource: 'mondoohq/mondoo'
    });
    this._credentials = config.credentials;
    this._endpoint = config.endpoint;
    this._region = config.region;
    this._space = config.space;
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

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // space - computed: false, optional: true, required: false
  private _space?: string; 
  public get space() {
    return this._space;
  }
  public set space(value: string | undefined) {
    this._space = value;
  }
  public resetSpace() {
    this._space = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
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
      endpoint: cdktf.stringToTerraform(this._endpoint),
      region: cdktf.stringToTerraform(this._region),
      space: cdktf.stringToTerraform(this._space),
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
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
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
