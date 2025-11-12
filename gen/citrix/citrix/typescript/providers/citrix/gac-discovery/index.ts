// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GacDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of custom Web URLs, URL needs to match the domain claimed (Optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_discovery#allowed_web_store_urls GacDiscovery#allowed_web_store_urls}
  */
  readonly allowedWebStoreUrls?: string[];
  /**
  * Domain name of the discovery record. The domain must not contain uppercase letters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_discovery#domain GacDiscovery#domain}
  */
  readonly domain: string;
  /**
  * The list of store URLs that are returned for email-based discovery. Each URL must end with a port number like example.com:443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_discovery#service_urls GacDiscovery#service_urls}
  */
  readonly serviceUrls: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_discovery citrix_gac_discovery}
*/
export class GacDiscovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_gac_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GacDiscovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GacDiscovery to import
  * @param importFromId The id of the existing GacDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GacDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_gac_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/gac_discovery citrix_gac_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GacDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: GacDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_gac_discovery',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedWebStoreUrls = config.allowedWebStoreUrls;
    this._domain = config.domain;
    this._serviceUrls = config.serviceUrls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_web_store_urls - computed: false, optional: true, required: false
  private _allowedWebStoreUrls?: string[]; 
  public get allowedWebStoreUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_web_store_urls'));
  }
  public set allowedWebStoreUrls(value: string[]) {
    this._allowedWebStoreUrls = value;
  }
  public resetAllowedWebStoreUrls() {
    this._allowedWebStoreUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedWebStoreUrlsInput() {
    return this._allowedWebStoreUrls;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // service_urls - computed: false, optional: false, required: true
  private _serviceUrls?: string[]; 
  public get serviceUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('service_urls'));
  }
  public set serviceUrls(value: string[]) {
    this._serviceUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUrlsInput() {
    return this._serviceUrls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_web_store_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedWebStoreUrls),
      domain: cdktf.stringToTerraform(this._domain),
      service_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceUrls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_web_store_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedWebStoreUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
