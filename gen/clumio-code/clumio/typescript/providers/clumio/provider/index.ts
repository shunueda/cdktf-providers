// https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClumioProviderConfig {
  /**
  * The base URL for Clumio APIs. The following are the valid values for clumio_api_base_url. Use the appropriate value depending on the region for which your credentials were created. Below are the URLs to access the Clumio portal for each region and the corresponding API Base URLs:
  * 
  * 		Portal: https://west.portal.clumio.com/
  * 
  * 		API Base URL: https://us-west-2.api.clumio.com
  * 
  * 		Portal: https://east.portal.clumio.com/
  * 
  * 		API Base URL: https://us-east-1.api.clumio.com
  * 
  * 		Portal: https://canada.portal.clumio.com/
  * 
  * 		API Base URL:  https://ca-central-1.ca.api.clumio.com
  * 
  * 		Portal: https://eu1.portal.clumio.com/
  * 
  * 		API Base URL:  https://eu-central-1.de.api.clumio.com
  * 
  * 		Portal: https://au.portal.clumio.com/
  * 
  * 		API Base URL:  https://ap-southeast-2.au.api.clumio.com
  * 
  * 		
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs#clumio_api_base_url ClumioProvider#clumio_api_base_url}
  */
  readonly clumioApiBaseUrl?: string;
  /**
  * The API token required to invoke Clumio APIs. Informations for generating this token are available here: https://documentation.commvault.com/clumio/api_tokens.html#manage-tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs#clumio_api_token ClumioProvider#clumio_api_token}
  */
  readonly clumioApiToken?: string;
  /**
  * Organizational Unit context in which to create the clumio resources. If not set, the resources will be created in the context of the Global Organizational Unit. The value should be the id of the Organizational Unit and not the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs#clumio_organizational_unit_context ClumioProvider#clumio_organizational_unit_context}
  */
  readonly clumioOrganizationalUnitContext?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs#alias ClumioProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs clumio}
*/
export class ClumioProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClumioProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClumioProvider to import
  * @param importFromId The id of the existing ClumioProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClumioProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs clumio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClumioProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClumioProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'clumio',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.16.1',
        providerVersionConstraint: '0.16.1'
      },
      terraformProviderSource: 'clumio-code/clumio'
    });
    this._clumioApiBaseUrl = config.clumioApiBaseUrl;
    this._clumioApiToken = config.clumioApiToken;
    this._clumioOrganizationalUnitContext = config.clumioOrganizationalUnitContext;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clumio_api_base_url - computed: false, optional: true, required: false
  private _clumioApiBaseUrl?: string; 
  public get clumioApiBaseUrl() {
    return this._clumioApiBaseUrl;
  }
  public set clumioApiBaseUrl(value: string | undefined) {
    this._clumioApiBaseUrl = value;
  }
  public resetClumioApiBaseUrl() {
    this._clumioApiBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clumioApiBaseUrlInput() {
    return this._clumioApiBaseUrl;
  }

  // clumio_api_token - computed: false, optional: true, required: false
  private _clumioApiToken?: string; 
  public get clumioApiToken() {
    return this._clumioApiToken;
  }
  public set clumioApiToken(value: string | undefined) {
    this._clumioApiToken = value;
  }
  public resetClumioApiToken() {
    this._clumioApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clumioApiTokenInput() {
    return this._clumioApiToken;
  }

  // clumio_organizational_unit_context - computed: false, optional: true, required: false
  private _clumioOrganizationalUnitContext?: string; 
  public get clumioOrganizationalUnitContext() {
    return this._clumioOrganizationalUnitContext;
  }
  public set clumioOrganizationalUnitContext(value: string | undefined) {
    this._clumioOrganizationalUnitContext = value;
  }
  public resetClumioOrganizationalUnitContext() {
    this._clumioOrganizationalUnitContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clumioOrganizationalUnitContextInput() {
    return this._clumioOrganizationalUnitContext;
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
      clumio_api_base_url: cdktf.stringToTerraform(this._clumioApiBaseUrl),
      clumio_api_token: cdktf.stringToTerraform(this._clumioApiToken),
      clumio_organizational_unit_context: cdktf.stringToTerraform(this._clumioOrganizationalUnitContext),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clumio_api_base_url: {
        value: cdktf.stringToHclTerraform(this._clumioApiBaseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clumio_api_token: {
        value: cdktf.stringToHclTerraform(this._clumioApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clumio_organizational_unit_context: {
        value: cdktf.stringToHclTerraform(this._clumioOrganizationalUnitContext),
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
