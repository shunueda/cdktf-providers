// https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/resources/proxy_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxyAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Proxy agent name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/resources/proxy_agent#display_name ProxyAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Data processing location. This is where Fivetran will operate and run computation on data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/resources/proxy_agent#group_region ProxyAgent#group_region}
  */
  readonly groupRegion: string;
  /**
  * Determines whether regenerarion secrets needs to be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/resources/proxy_agent#regeneration_counter ProxyAgent#regeneration_counter}
  */
  readonly regenerationCounter?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/resources/proxy_agent fivetran_proxy_agent}
*/
export class ProxyAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_proxy_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProxyAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProxyAgent to import
  * @param importFromId The id of the existing ProxyAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/resources/proxy_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProxyAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_proxy_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/resources/proxy_agent fivetran_proxy_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxyAgentConfig
  */
  public constructor(scope: Construct, id: string, config: ProxyAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_proxy_agent',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.16',
        providerVersionConstraint: '1.9.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._groupRegion = config.groupRegion;
    this._regenerationCounter = config.regenerationCounter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_cert - computed: true, optional: false, required: false
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }

  // client_private_key - computed: true, optional: false, required: false
  public get clientPrivateKey() {
    return this.getStringAttribute('client_private_key');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // group_region - computed: false, optional: false, required: true
  private _groupRegion?: string; 
  public get groupRegion() {
    return this.getStringAttribute('group_region');
  }
  public set groupRegion(value: string) {
    this._groupRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRegionInput() {
    return this._groupRegion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // regeneration_counter - computed: true, optional: true, required: false
  private _regenerationCounter?: number; 
  public get regenerationCounter() {
    return this.getNumberAttribute('regeneration_counter');
  }
  public set regenerationCounter(value: number) {
    this._regenerationCounter = value;
  }
  public resetRegenerationCounter() {
    this._regenerationCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regenerationCounterInput() {
    return this._regenerationCounter;
  }

  // registred_at - computed: true, optional: false, required: false
  public get registredAt() {
    return this.getStringAttribute('registred_at');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      group_region: cdktf.stringToTerraform(this._groupRegion),
      regeneration_counter: cdktf.numberToTerraform(this._regenerationCounter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_region: {
        value: cdktf.stringToHclTerraform(this._groupRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regeneration_counter: {
        value: cdktf.numberToHclTerraform(this._regenerationCounter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
