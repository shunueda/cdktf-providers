// https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/data-sources/privatestack_bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKaleidoPrivatestackBridgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optionally provide an application credential to inject into the downloaded config, making it ready for use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/data-sources/privatestack_bridge#appcred_id DataKaleidoPrivatestackBridge#appcred_id}
  */
  readonly appcredId?: string;
  /**
  * Optionally provide an application credential to inject into the downloaded config, making it ready for use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/data-sources/privatestack_bridge#appcred_secret DataKaleidoPrivatestackBridge#appcred_secret}
  */
  readonly appcredSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/data-sources/privatestack_bridge#consortium_id DataKaleidoPrivatestackBridge#consortium_id}
  */
  readonly consortiumId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/data-sources/privatestack_bridge#environment_id DataKaleidoPrivatestackBridge#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/data-sources/privatestack_bridge#service_id DataKaleidoPrivatestackBridge#service_id}
  */
  readonly serviceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/data-sources/privatestack_bridge kaleido_privatestack_bridge}
*/
export class DataKaleidoPrivatestackBridge extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_privatestack_bridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKaleidoPrivatestackBridge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKaleidoPrivatestackBridge to import
  * @param importFromId The id of the existing DataKaleidoPrivatestackBridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/data-sources/privatestack_bridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKaleidoPrivatestackBridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_privatestack_bridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/data-sources/privatestack_bridge kaleido_privatestack_bridge} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKaleidoPrivatestackBridgeConfig
  */
  public constructor(scope: Construct, id: string, config: DataKaleidoPrivatestackBridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_privatestack_bridge',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appcredId = config.appcredId;
    this._appcredSecret = config.appcredSecret;
    this._consortiumId = config.consortiumId;
    this._environmentId = config.environmentId;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appcred_id - computed: false, optional: true, required: false
  private _appcredId?: string; 
  public get appcredId() {
    return this.getStringAttribute('appcred_id');
  }
  public set appcredId(value: string) {
    this._appcredId = value;
  }
  public resetAppcredId() {
    this._appcredId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appcredIdInput() {
    return this._appcredId;
  }

  // appcred_secret - computed: false, optional: true, required: false
  private _appcredSecret?: string; 
  public get appcredSecret() {
    return this.getStringAttribute('appcred_secret');
  }
  public set appcredSecret(value: string) {
    this._appcredSecret = value;
  }
  public resetAppcredSecret() {
    this._appcredSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appcredSecretInput() {
    return this._appcredSecret;
  }

  // config_json - computed: true, optional: false, required: false
  public get configJson() {
    return this.getStringAttribute('config_json');
  }

  // consortium_id - computed: false, optional: false, required: true
  private _consortiumId?: string; 
  public get consortiumId() {
    return this.getStringAttribute('consortium_id');
  }
  public set consortiumId(value: string) {
    this._consortiumId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consortiumIdInput() {
    return this._consortiumId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appcred_id: cdktf.stringToTerraform(this._appcredId),
      appcred_secret: cdktf.stringToTerraform(this._appcredSecret),
      consortium_id: cdktf.stringToTerraform(this._consortiumId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appcred_id: {
        value: cdktf.stringToHclTerraform(this._appcredId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appcred_secret: {
        value: cdktf.stringToHclTerraform(this._appcredSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consortium_id: {
        value: cdktf.stringToHclTerraform(this._consortiumId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
