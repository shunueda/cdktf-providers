// https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_organization_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortOrganizationSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the organization secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_organization_secret#description PortOrganizationSecret#description}
  */
  readonly description?: string;
  /**
  * The name of the organization secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_organization_secret#secret_name PortOrganizationSecret#secret_name}
  */
  readonly secretName: string;
  /**
  * The value of the organization secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_organization_secret#secret_value PortOrganizationSecret#secret_value}
  */
  readonly secretValue: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_organization_secret port_organization_secret}
*/
export class PortOrganizationSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_organization_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortOrganizationSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortOrganizationSecret to import
  * @param importFromId The id of the existing PortOrganizationSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_organization_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortOrganizationSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_organization_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_organization_secret port_organization_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortOrganizationSecretConfig
  */
  public constructor(scope: Construct, id: string, config: PortOrganizationSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'port_organization_secret',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.14.4'
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
    this._secretName = config.secretName;
    this._secretValue = config.secretValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_value - computed: false, optional: false, required: true
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      secret_name: cdktf.stringToTerraform(this._secretName),
      secret_value: cdktf.stringToTerraform(this._secretValue),
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
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_value: {
        value: cdktf.stringToHclTerraform(this._secretValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
