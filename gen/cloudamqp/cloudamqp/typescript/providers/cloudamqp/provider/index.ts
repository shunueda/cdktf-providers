// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudamqpProviderConfig {
  /**
  * Key used to authentication to the CloudAMQP Customer API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs#apikey CloudamqpProvider#apikey}
  */
  readonly apikey?: string;
  /**
  * Base URL to CloudAMQP Customer website
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs#baseurl CloudamqpProvider#baseurl}
  */
  readonly baseurl?: string;
  /**
  * Skips destroying backend resources on 'terraform destroy'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs#enable_faster_instance_destroy CloudamqpProvider#enable_faster_instance_destroy}
  */
  readonly enableFasterInstanceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs#alias CloudamqpProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs cloudamqp}
*/
export class CloudamqpProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudamqpProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudamqpProvider to import
  * @param importFromId The id of the existing CloudamqpProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudamqpProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs cloudamqp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudamqpProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudamqpProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.41.0',
        providerVersionConstraint: '1.41.0'
      },
      terraformProviderSource: 'cloudamqp/cloudamqp'
    });
    this._apikey = config.apikey;
    this._baseurl = config.baseurl;
    this._enableFasterInstanceDestroy = config.enableFasterInstanceDestroy;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apikey - computed: false, optional: true, required: false
  private _apikey?: string; 
  public get apikey() {
    return this._apikey;
  }
  public set apikey(value: string | undefined) {
    this._apikey = value;
  }
  public resetApikey() {
    this._apikey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeyInput() {
    return this._apikey;
  }

  // baseurl - computed: false, optional: true, required: false
  private _baseurl?: string; 
  public get baseurl() {
    return this._baseurl;
  }
  public set baseurl(value: string | undefined) {
    this._baseurl = value;
  }
  public resetBaseurl() {
    this._baseurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseurlInput() {
    return this._baseurl;
  }

  // enable_faster_instance_destroy - computed: false, optional: true, required: false
  private _enableFasterInstanceDestroy?: boolean | cdktf.IResolvable; 
  public get enableFasterInstanceDestroy() {
    return this._enableFasterInstanceDestroy;
  }
  public set enableFasterInstanceDestroy(value: boolean | cdktf.IResolvable | undefined) {
    this._enableFasterInstanceDestroy = value;
  }
  public resetEnableFasterInstanceDestroy() {
    this._enableFasterInstanceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFasterInstanceDestroyInput() {
    return this._enableFasterInstanceDestroy;
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
      apikey: cdktf.stringToTerraform(this._apikey),
      baseurl: cdktf.stringToTerraform(this._baseurl),
      enable_faster_instance_destroy: cdktf.booleanToTerraform(this._enableFasterInstanceDestroy),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apikey: {
        value: cdktf.stringToHclTerraform(this._apikey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      baseurl: {
        value: cdktf.stringToHclTerraform(this._baseurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_faster_instance_destroy: {
        value: cdktf.booleanToHclTerraform(this._enableFasterInstanceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
