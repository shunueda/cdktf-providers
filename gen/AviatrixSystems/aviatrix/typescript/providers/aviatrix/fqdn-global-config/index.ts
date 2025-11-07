// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/fqdn_global_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FqdnGlobalConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Customized packet destination address ranges not to be filtered by FQDN. Can be selected from pre-defined RFC 1918 range, or own network range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/fqdn_global_config#configured_ips FqdnGlobalConfig#configured_ips}
  */
  readonly configuredIps?: string[];
  /**
  * If enabled, it caches the resolved IP address from FQDN filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/fqdn_global_config#enable_caching FqdnGlobalConfig#enable_caching}
  */
  readonly enableCaching?: boolean | cdktf.IResolvable;
  /**
  * If enabled, it customizes packet destination address ranges not to be filtered by FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/fqdn_global_config#enable_custom_network_filtering FqdnGlobalConfig#enable_custom_network_filtering}
  */
  readonly enableCustomNetworkFiltering?: boolean | cdktf.IResolvable;
  /**
  * If enabled, the resolved IP address from FQDN filter is cached so that if subsequent TCP session matches the cached IP address list, FQDN domain name is not checked and the session is allowed to pass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/fqdn_global_config#enable_exact_match FqdnGlobalConfig#enable_exact_match}
  */
  readonly enableExactMatch?: boolean | cdktf.IResolvable;
  /**
  * If enabled, it allows packets passing through the gateway without an SNI field. Only applies to whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/fqdn_global_config#enable_exception_rule FqdnGlobalConfig#enable_exception_rule}
  */
  readonly enableExceptionRule?: boolean | cdktf.IResolvable;
  /**
  * If enabled, destination FQDN names that translate to private IP address range (RFC 1918) are subject to FQDN whitelist filtering function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/fqdn_global_config#enable_private_network_filtering FqdnGlobalConfig#enable_private_network_filtering}
  */
  readonly enablePrivateNetworkFiltering?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/fqdn_global_config#id FqdnGlobalConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/fqdn_global_config aviatrix_fqdn_global_config}
*/
export class FqdnGlobalConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_fqdn_global_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FqdnGlobalConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FqdnGlobalConfig to import
  * @param importFromId The id of the existing FqdnGlobalConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/fqdn_global_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FqdnGlobalConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_fqdn_global_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/fqdn_global_config aviatrix_fqdn_global_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FqdnGlobalConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FqdnGlobalConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_fqdn_global_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuredIps = config.configuredIps;
    this._enableCaching = config.enableCaching;
    this._enableCustomNetworkFiltering = config.enableCustomNetworkFiltering;
    this._enableExactMatch = config.enableExactMatch;
    this._enableExceptionRule = config.enableExceptionRule;
    this._enablePrivateNetworkFiltering = config.enablePrivateNetworkFiltering;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configured_ips - computed: false, optional: true, required: false
  private _configuredIps?: string[]; 
  public get configuredIps() {
    return this.getListAttribute('configured_ips');
  }
  public set configuredIps(value: string[]) {
    this._configuredIps = value;
  }
  public resetConfiguredIps() {
    this._configuredIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredIpsInput() {
    return this._configuredIps;
  }

  // enable_caching - computed: false, optional: true, required: false
  private _enableCaching?: boolean | cdktf.IResolvable; 
  public get enableCaching() {
    return this.getBooleanAttribute('enable_caching');
  }
  public set enableCaching(value: boolean | cdktf.IResolvable) {
    this._enableCaching = value;
  }
  public resetEnableCaching() {
    this._enableCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCachingInput() {
    return this._enableCaching;
  }

  // enable_custom_network_filtering - computed: false, optional: true, required: false
  private _enableCustomNetworkFiltering?: boolean | cdktf.IResolvable; 
  public get enableCustomNetworkFiltering() {
    return this.getBooleanAttribute('enable_custom_network_filtering');
  }
  public set enableCustomNetworkFiltering(value: boolean | cdktf.IResolvable) {
    this._enableCustomNetworkFiltering = value;
  }
  public resetEnableCustomNetworkFiltering() {
    this._enableCustomNetworkFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCustomNetworkFilteringInput() {
    return this._enableCustomNetworkFiltering;
  }

  // enable_exact_match - computed: false, optional: true, required: false
  private _enableExactMatch?: boolean | cdktf.IResolvable; 
  public get enableExactMatch() {
    return this.getBooleanAttribute('enable_exact_match');
  }
  public set enableExactMatch(value: boolean | cdktf.IResolvable) {
    this._enableExactMatch = value;
  }
  public resetEnableExactMatch() {
    this._enableExactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExactMatchInput() {
    return this._enableExactMatch;
  }

  // enable_exception_rule - computed: false, optional: true, required: false
  private _enableExceptionRule?: boolean | cdktf.IResolvable; 
  public get enableExceptionRule() {
    return this.getBooleanAttribute('enable_exception_rule');
  }
  public set enableExceptionRule(value: boolean | cdktf.IResolvable) {
    this._enableExceptionRule = value;
  }
  public resetEnableExceptionRule() {
    this._enableExceptionRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExceptionRuleInput() {
    return this._enableExceptionRule;
  }

  // enable_private_network_filtering - computed: false, optional: true, required: false
  private _enablePrivateNetworkFiltering?: boolean | cdktf.IResolvable; 
  public get enablePrivateNetworkFiltering() {
    return this.getBooleanAttribute('enable_private_network_filtering');
  }
  public set enablePrivateNetworkFiltering(value: boolean | cdktf.IResolvable) {
    this._enablePrivateNetworkFiltering = value;
  }
  public resetEnablePrivateNetworkFiltering() {
    this._enablePrivateNetworkFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateNetworkFilteringInput() {
    return this._enablePrivateNetworkFiltering;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configured_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configuredIps),
      enable_caching: cdktf.booleanToTerraform(this._enableCaching),
      enable_custom_network_filtering: cdktf.booleanToTerraform(this._enableCustomNetworkFiltering),
      enable_exact_match: cdktf.booleanToTerraform(this._enableExactMatch),
      enable_exception_rule: cdktf.booleanToTerraform(this._enableExceptionRule),
      enable_private_network_filtering: cdktf.booleanToTerraform(this._enablePrivateNetworkFiltering),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configured_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configuredIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_caching: {
        value: cdktf.booleanToHclTerraform(this._enableCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_custom_network_filtering: {
        value: cdktf.booleanToHclTerraform(this._enableCustomNetworkFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_exact_match: {
        value: cdktf.booleanToHclTerraform(this._enableExactMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_exception_rule: {
        value: cdktf.booleanToHclTerraform(this._enableExceptionRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_private_network_filtering: {
        value: cdktf.booleanToHclTerraform(this._enablePrivateNetworkFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
