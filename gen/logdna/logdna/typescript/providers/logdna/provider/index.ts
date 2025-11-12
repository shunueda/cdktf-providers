// https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogdnaProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs#cloud_resource_name LogdnaProvider#cloud_resource_name}
  */
  readonly cloudResourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs#iamtoken LogdnaProvider#iamtoken}
  */
  readonly iamtoken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs#servicekey LogdnaProvider#servicekey}
  */
  readonly servicekey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs#url LogdnaProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs#alias LogdnaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs logdna}
*/
export class LogdnaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logdna";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogdnaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogdnaProvider to import
  * @param importFromId The id of the existing LogdnaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogdnaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logdna", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs logdna} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogdnaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogdnaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logdna',
      terraformGeneratorMetadata: {
        providerName: 'logdna',
        providerVersion: '1.17.2',
        providerVersionConstraint: '1.17.2'
      },
      terraformProviderSource: 'logdna/logdna'
    });
    this._cloudResourceName = config.cloudResourceName;
    this._iamtoken = config.iamtoken;
    this._servicekey = config.servicekey;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_resource_name - computed: false, optional: true, required: false
  private _cloudResourceName?: string; 
  public get cloudResourceName() {
    return this._cloudResourceName;
  }
  public set cloudResourceName(value: string | undefined) {
    this._cloudResourceName = value;
  }
  public resetCloudResourceName() {
    this._cloudResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudResourceNameInput() {
    return this._cloudResourceName;
  }

  // iamtoken - computed: false, optional: true, required: false
  private _iamtoken?: string; 
  public get iamtoken() {
    return this._iamtoken;
  }
  public set iamtoken(value: string | undefined) {
    this._iamtoken = value;
  }
  public resetIamtoken() {
    this._iamtoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamtokenInput() {
    return this._iamtoken;
  }

  // servicekey - computed: false, optional: true, required: false
  private _servicekey?: string; 
  public get servicekey() {
    return this._servicekey;
  }
  public set servicekey(value: string | undefined) {
    this._servicekey = value;
  }
  public resetServicekey() {
    this._servicekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicekeyInput() {
    return this._servicekey;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      cloud_resource_name: cdktf.stringToTerraform(this._cloudResourceName),
      iamtoken: cdktf.stringToTerraform(this._iamtoken),
      servicekey: cdktf.stringToTerraform(this._servicekey),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_resource_name: {
        value: cdktf.stringToHclTerraform(this._cloudResourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iamtoken: {
        value: cdktf.stringToHclTerraform(this._iamtoken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicekey: {
        value: cdktf.stringToHclTerraform(this._servicekey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
