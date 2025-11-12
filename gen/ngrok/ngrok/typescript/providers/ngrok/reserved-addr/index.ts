// https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/reserved_addr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReservedAddrConfig extends cdktf.TerraformMetaArguments {
  /**
  * human-readable description of what this reserved address will be used for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/reserved_addr#description ReservedAddr#description}
  */
  readonly description?: string;
  /**
  * ID of an endpoint configuration of type tcp that will be used to handle inbound traffic to this address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/reserved_addr#endpoint_configuration_id ReservedAddr#endpoint_configuration_id}
  */
  readonly endpointConfigurationId?: string;
  /**
  * arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/reserved_addr#metadata ReservedAddr#metadata}
  */
  readonly metadata?: string;
  /**
  * reserve the address in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/reserved_addr#region ReservedAddr#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/reserved_addr ngrok_reserved_addr}
*/
export class ReservedAddr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ngrok_reserved_addr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReservedAddr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReservedAddr to import
  * @param importFromId The id of the existing ReservedAddr that should be imported. Refer to the {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/reserved_addr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReservedAddr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ngrok_reserved_addr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/reserved_addr ngrok_reserved_addr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReservedAddrConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ReservedAddrConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ngrok_reserved_addr',
      terraformGeneratorMetadata: {
        providerName: 'ngrok',
        providerVersion: '0.5.0',
        providerVersionConstraint: '0.5.0'
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
    this._endpointConfigurationId = config.endpointConfigurationId;
    this._metadata = config.metadata;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

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

  // endpoint_configuration_id - computed: false, optional: true, required: false
  private _endpointConfigurationId?: string; 
  public get endpointConfigurationId() {
    return this.getStringAttribute('endpoint_configuration_id');
  }
  public set endpointConfigurationId(value: string) {
    this._endpointConfigurationId = value;
  }
  public resetEndpointConfigurationId() {
    this._endpointConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationIdInput() {
    return this._endpointConfigurationId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      endpoint_configuration_id: cdktf.stringToTerraform(this._endpointConfigurationId),
      metadata: cdktf.stringToTerraform(this._metadata),
      region: cdktf.stringToTerraform(this._region),
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
      endpoint_configuration_id: {
        value: cdktf.stringToHclTerraform(this._endpointConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
