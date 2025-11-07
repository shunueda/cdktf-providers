// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DsmDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the dsm domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_domain#description DsmDomain#description}
  */
  readonly description?: string;
  /**
  * DSM domain to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_domain#domain_id DsmDomain#domain_id}
  */
  readonly domainId: number;
  /**
  * Name or ID of the DSM connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_domain#dsm_connection DsmDomain#dsm_connection}
  */
  readonly dsmConnection: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_domain ciphertrust_dsm_domain}
*/
export class DsmDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_dsm_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DsmDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DsmDomain to import
  * @param importFromId The id of the existing DsmDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DsmDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_dsm_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_domain ciphertrust_dsm_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DsmDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DsmDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_dsm_domain',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._domainId = config.domainId;
    this._dsmConnection = config.dsmConnection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // dsm_connection - computed: false, optional: false, required: true
  private _dsmConnection?: string; 
  public get dsmConnection() {
    return this.getStringAttribute('dsm_connection');
  }
  public set dsmConnection(value: string) {
    this._dsmConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dsmConnectionInput() {
    return this._dsmConnection;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.numberToTerraform(this._domainId),
      dsm_connection: cdktf.stringToTerraform(this._dsmConnection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.numberToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dsm_connection: {
        value: cdktf.stringToHclTerraform(this._dsmConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
