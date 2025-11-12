// https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntelcloudProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs#apitoken IntelcloudProvider#apitoken}
  */
  readonly apitoken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs#clientid IntelcloudProvider#clientid}
  */
  readonly clientid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs#clientsecret IntelcloudProvider#clientsecret}
  */
  readonly clientsecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs#cloudaccount IntelcloudProvider#cloudaccount}
  */
  readonly cloudaccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs#endpoints IntelcloudProvider#endpoints}
  */
  readonly endpoints?: IntelcloudProviderEndpoints;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs#region IntelcloudProvider#region}
  */
  readonly region?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs#alias IntelcloudProvider#alias}
  */
  readonly alias?: string;
}
export interface IntelcloudProviderEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs#api IntelcloudProvider#api}
  */
  readonly api?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs#auth IntelcloudProvider#auth}
  */
  readonly auth?: string;
}

export function intelcloudProviderEndpointsToTerraform(struct?: IntelcloudProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: cdktf.stringToTerraform(struct!.api),
    auth: cdktf.stringToTerraform(struct!.auth),
  }
}


export function intelcloudProviderEndpointsToHclTerraform(struct?: IntelcloudProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs intelcloud}
*/
export class IntelcloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intelcloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntelcloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntelcloudProvider to import
  * @param importFromId The id of the existing IntelcloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntelcloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intelcloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs intelcloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntelcloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IntelcloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intelcloud',
      terraformGeneratorMetadata: {
        providerName: 'intelcloud',
        providerVersion: '0.0.20',
        providerVersionConstraint: '0.0.20'
      },
      terraformProviderSource: 'intel/intelcloud'
    });
    this._apitoken = config.apitoken;
    this._clientid = config.clientid;
    this._clientsecret = config.clientsecret;
    this._cloudaccount = config.cloudaccount;
    this._endpoints = config.endpoints;
    this._region = config.region;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apitoken - computed: false, optional: true, required: false
  private _apitoken?: string; 
  public get apitoken() {
    return this._apitoken;
  }
  public set apitoken(value: string | undefined) {
    this._apitoken = value;
  }
  public resetApitoken() {
    this._apitoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apitokenInput() {
    return this._apitoken;
  }

  // clientid - computed: false, optional: true, required: false
  private _clientid?: string; 
  public get clientid() {
    return this._clientid;
  }
  public set clientid(value: string | undefined) {
    this._clientid = value;
  }
  public resetClientid() {
    this._clientid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidInput() {
    return this._clientid;
  }

  // clientsecret - computed: false, optional: true, required: false
  private _clientsecret?: string; 
  public get clientsecret() {
    return this._clientsecret;
  }
  public set clientsecret(value: string | undefined) {
    this._clientsecret = value;
  }
  public resetClientsecret() {
    this._clientsecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsecretInput() {
    return this._clientsecret;
  }

  // cloudaccount - computed: false, optional: true, required: false
  private _cloudaccount?: string; 
  public get cloudaccount() {
    return this._cloudaccount;
  }
  public set cloudaccount(value: string | undefined) {
    this._cloudaccount = value;
  }
  public resetCloudaccount() {
    this._cloudaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudaccountInput() {
    return this._cloudaccount;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: IntelcloudProviderEndpoints; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: IntelcloudProviderEndpoints | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
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
      apitoken: cdktf.stringToTerraform(this._apitoken),
      clientid: cdktf.stringToTerraform(this._clientid),
      clientsecret: cdktf.stringToTerraform(this._clientsecret),
      cloudaccount: cdktf.stringToTerraform(this._cloudaccount),
      endpoints: intelcloudProviderEndpointsToTerraform(this._endpoints),
      region: cdktf.stringToTerraform(this._region),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apitoken: {
        value: cdktf.stringToHclTerraform(this._apitoken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientid: {
        value: cdktf.stringToHclTerraform(this._clientid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientsecret: {
        value: cdktf.stringToHclTerraform(this._clientsecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudaccount: {
        value: cdktf.stringToHclTerraform(this._cloudaccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoints: {
        value: intelcloudProviderEndpointsToHclTerraform(this._endpoints),
        isBlock: true,
        type: "struct",
        storageClassType: "IntelcloudProviderEndpoints",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
