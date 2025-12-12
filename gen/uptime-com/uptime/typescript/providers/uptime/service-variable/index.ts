// https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/service_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the credential containing the sensitive value to inject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/service_variable#credential_id ServiceVariable#credential_id}
  */
  readonly credentialId: number;
  /**
  * The property name from the credential to use. Valid values depend on credential_type: 'password' for BASIC, 'secret' for TOKEN, 'certificate'/'key'/'passphrase' for CERTIFICATE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/service_variable#property_name ServiceVariable#property_name}
  */
  readonly propertyName: string;
  /**
  * The ID of the check/service this variable belongs to. Changing this forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/service_variable#service_id ServiceVariable#service_id}
  */
  readonly serviceId: number;
  /**
  * The name of the variable as referenced in the check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/service_variable#variable_name ServiceVariable#variable_name}
  */
  readonly variableName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/service_variable uptime_service_variable}
*/
export class ServiceVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_service_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceVariable to import
  * @param importFromId The id of the existing ServiceVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/service_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_service_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.22.0/docs/resources/service_variable uptime_service_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceVariableConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_service_variable',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.22.0',
        providerVersionConstraint: '2.22.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialId = config.credentialId;
    this._propertyName = config.propertyName;
    this._serviceId = config.serviceId;
    this._variableName = config.variableName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // credential_id - computed: false, optional: false, required: true
  private _credentialId?: number; 
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }
  public set credentialId(value: number) {
    this._credentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // property_name - computed: false, optional: false, required: true
  private _propertyName?: string; 
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
  public set propertyName(value: string) {
    this._propertyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNameInput() {
    return this._propertyName;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: number; 
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
  public set serviceId(value: number) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // variable_name - computed: false, optional: false, required: true
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_id: cdktf.numberToTerraform(this._credentialId),
      property_name: cdktf.stringToTerraform(this._propertyName),
      service_id: cdktf.numberToTerraform(this._serviceId),
      variable_name: cdktf.stringToTerraform(this._variableName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_id: {
        value: cdktf.numberToHclTerraform(this._credentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      property_name: {
        value: cdktf.stringToHclTerraform(this._propertyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.numberToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      variable_name: {
        value: cdktf.stringToHclTerraform(this._variableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
