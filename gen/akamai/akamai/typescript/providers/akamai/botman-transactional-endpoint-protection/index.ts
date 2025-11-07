// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_transactional_endpoint_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotmanTransactionalEndpointProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_transactional_endpoint_protection#config_id BotmanTransactionalEndpointProtection#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_transactional_endpoint_protection#id BotmanTransactionalEndpointProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_transactional_endpoint_protection#transactional_endpoint_protection BotmanTransactionalEndpointProtection#transactional_endpoint_protection}
  */
  readonly transactionalEndpointProtection: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_transactional_endpoint_protection akamai_botman_transactional_endpoint_protection}
*/
export class BotmanTransactionalEndpointProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_botman_transactional_endpoint_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotmanTransactionalEndpointProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotmanTransactionalEndpointProtection to import
  * @param importFromId The id of the existing BotmanTransactionalEndpointProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_transactional_endpoint_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotmanTransactionalEndpointProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_botman_transactional_endpoint_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_transactional_endpoint_protection akamai_botman_transactional_endpoint_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotmanTransactionalEndpointProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: BotmanTransactionalEndpointProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_botman_transactional_endpoint_protection',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._id = config.id;
    this._transactionalEndpointProtection = config.transactionalEndpointProtection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
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

  // transactional_endpoint_protection - computed: false, optional: false, required: true
  private _transactionalEndpointProtection?: string; 
  public get transactionalEndpointProtection() {
    return this.getStringAttribute('transactional_endpoint_protection');
  }
  public set transactionalEndpointProtection(value: string) {
    this._transactionalEndpointProtection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionalEndpointProtectionInput() {
    return this._transactionalEndpointProtection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      transactional_endpoint_protection: cdktf.stringToTerraform(this._transactionalEndpointProtection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transactional_endpoint_protection: {
        value: cdktf.stringToHclTerraform(this._transactionalEndpointProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
