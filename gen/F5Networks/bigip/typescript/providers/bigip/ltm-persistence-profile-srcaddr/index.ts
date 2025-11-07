// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmPersistenceProfileSrcaddrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#app_service LtmPersistenceProfileSrcaddr#app_service}
  */
  readonly appService?: string;
  /**
  * Inherit defaults from parent profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#defaults_from LtmPersistenceProfileSrcaddr#defaults_from}
  */
  readonly defaultsFrom: string;
  /**
  * Specify the hash algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#hash_algorithm LtmPersistenceProfileSrcaddr#hash_algorithm}
  */
  readonly hashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#id LtmPersistenceProfileSrcaddr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * To enable _ disable directs all to the same single pool member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#map_proxies LtmPersistenceProfileSrcaddr#map_proxies}
  */
  readonly mapProxies?: string;
  /**
  * Identify a range of source IP addresses to manage together as a single source address affinity persistent connection when connecting to the pool. Must be a valid IPv4 or IPv6 mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#mask LtmPersistenceProfileSrcaddr#mask}
  */
  readonly mask?: string;
  /**
  * To enable _ disable match across pools with given persistence record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#match_across_pools LtmPersistenceProfileSrcaddr#match_across_pools}
  */
  readonly matchAcrossPools?: string;
  /**
  * To enable _ disable match across services with given persistence record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#match_across_services LtmPersistenceProfileSrcaddr#match_across_services}
  */
  readonly matchAcrossServices?: string;
  /**
  * To enable _ disable match across services with given persistence record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#match_across_virtuals LtmPersistenceProfileSrcaddr#match_across_virtuals}
  */
  readonly matchAcrossVirtuals?: string;
  /**
  * To enable _ disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#mirror LtmPersistenceProfileSrcaddr#mirror}
  */
  readonly mirror?: string;
  /**
  * Name of the persistence profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#name LtmPersistenceProfileSrcaddr#name}
  */
  readonly name: string;
  /**
  * To enable _ disable that pool member connection limits are overridden for persisted clients. Per-virtual connection limits remain hard limits and are not overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#override_conn_limit LtmPersistenceProfileSrcaddr#override_conn_limit}
  */
  readonly overrideConnLimit?: string;
  /**
  * Timeout for persistence of the session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#timeout LtmPersistenceProfileSrcaddr#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr bigip_ltm_persistence_profile_srcaddr}
*/
export class LtmPersistenceProfileSrcaddr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_persistence_profile_srcaddr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmPersistenceProfileSrcaddr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmPersistenceProfileSrcaddr to import
  * @param importFromId The id of the existing LtmPersistenceProfileSrcaddr that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmPersistenceProfileSrcaddr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_persistence_profile_srcaddr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_srcaddr bigip_ltm_persistence_profile_srcaddr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmPersistenceProfileSrcaddrConfig
  */
  public constructor(scope: Construct, id: string, config: LtmPersistenceProfileSrcaddrConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_persistence_profile_srcaddr',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appService = config.appService;
    this._defaultsFrom = config.defaultsFrom;
    this._hashAlgorithm = config.hashAlgorithm;
    this._id = config.id;
    this._mapProxies = config.mapProxies;
    this._mask = config.mask;
    this._matchAcrossPools = config.matchAcrossPools;
    this._matchAcrossServices = config.matchAcrossServices;
    this._matchAcrossVirtuals = config.matchAcrossVirtuals;
    this._mirror = config.mirror;
    this._name = config.name;
    this._overrideConnLimit = config.overrideConnLimit;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service - computed: true, optional: true, required: false
  private _appService?: string; 
  public get appService() {
    return this.getStringAttribute('app_service');
  }
  public set appService(value: string) {
    this._appService = value;
  }
  public resetAppService() {
    this._appService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceInput() {
    return this._appService;
  }

  // defaults_from - computed: false, optional: false, required: true
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
  }

  // hash_algorithm - computed: true, optional: true, required: false
  private _hashAlgorithm?: string; 
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }
  public set hashAlgorithm(value: string) {
    this._hashAlgorithm = value;
  }
  public resetHashAlgorithm() {
    this._hashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmInput() {
    return this._hashAlgorithm;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // map_proxies - computed: true, optional: true, required: false
  private _mapProxies?: string; 
  public get mapProxies() {
    return this.getStringAttribute('map_proxies');
  }
  public set mapProxies(value: string) {
    this._mapProxies = value;
  }
  public resetMapProxies() {
    this._mapProxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapProxiesInput() {
    return this._mapProxies;
  }

  // mask - computed: true, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // match_across_pools - computed: true, optional: true, required: false
  private _matchAcrossPools?: string; 
  public get matchAcrossPools() {
    return this.getStringAttribute('match_across_pools');
  }
  public set matchAcrossPools(value: string) {
    this._matchAcrossPools = value;
  }
  public resetMatchAcrossPools() {
    this._matchAcrossPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAcrossPoolsInput() {
    return this._matchAcrossPools;
  }

  // match_across_services - computed: true, optional: true, required: false
  private _matchAcrossServices?: string; 
  public get matchAcrossServices() {
    return this.getStringAttribute('match_across_services');
  }
  public set matchAcrossServices(value: string) {
    this._matchAcrossServices = value;
  }
  public resetMatchAcrossServices() {
    this._matchAcrossServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAcrossServicesInput() {
    return this._matchAcrossServices;
  }

  // match_across_virtuals - computed: true, optional: true, required: false
  private _matchAcrossVirtuals?: string; 
  public get matchAcrossVirtuals() {
    return this.getStringAttribute('match_across_virtuals');
  }
  public set matchAcrossVirtuals(value: string) {
    this._matchAcrossVirtuals = value;
  }
  public resetMatchAcrossVirtuals() {
    this._matchAcrossVirtuals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAcrossVirtualsInput() {
    return this._matchAcrossVirtuals;
  }

  // mirror - computed: true, optional: true, required: false
  private _mirror?: string; 
  public get mirror() {
    return this.getStringAttribute('mirror');
  }
  public set mirror(value: string) {
    this._mirror = value;
  }
  public resetMirror() {
    this._mirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // override_conn_limit - computed: true, optional: true, required: false
  private _overrideConnLimit?: string; 
  public get overrideConnLimit() {
    return this.getStringAttribute('override_conn_limit');
  }
  public set overrideConnLimit(value: string) {
    this._overrideConnLimit = value;
  }
  public resetOverrideConnLimit() {
    this._overrideConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideConnLimitInput() {
    return this._overrideConnLimit;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service: cdktf.stringToTerraform(this._appService),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      hash_algorithm: cdktf.stringToTerraform(this._hashAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      map_proxies: cdktf.stringToTerraform(this._mapProxies),
      mask: cdktf.stringToTerraform(this._mask),
      match_across_pools: cdktf.stringToTerraform(this._matchAcrossPools),
      match_across_services: cdktf.stringToTerraform(this._matchAcrossServices),
      match_across_virtuals: cdktf.stringToTerraform(this._matchAcrossVirtuals),
      mirror: cdktf.stringToTerraform(this._mirror),
      name: cdktf.stringToTerraform(this._name),
      override_conn_limit: cdktf.stringToTerraform(this._overrideConnLimit),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_service: {
        value: cdktf.stringToHclTerraform(this._appService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_algorithm: {
        value: cdktf.stringToHclTerraform(this._hashAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      map_proxies: {
        value: cdktf.stringToHclTerraform(this._mapProxies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mask: {
        value: cdktf.stringToHclTerraform(this._mask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_across_pools: {
        value: cdktf.stringToHclTerraform(this._matchAcrossPools),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_across_services: {
        value: cdktf.stringToHclTerraform(this._matchAcrossServices),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_across_virtuals: {
        value: cdktf.stringToHclTerraform(this._matchAcrossVirtuals),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror: {
        value: cdktf.stringToHclTerraform(this._mirror),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_conn_limit: {
        value: cdktf.stringToHclTerraform(this._overrideConnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
