// https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/resources/entitlements_vm_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntitlementsVmTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/resources/entitlements_vm_token#config_id EntitlementsVmToken#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/resources/entitlements_vm_token#id EntitlementsVmToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/resources/entitlements_vm_token#regenerate_token EntitlementsVmToken#regenerate_token}
  */
  readonly regenerateToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/resources/entitlements_vm_token#serial_number EntitlementsVmToken#serial_number}
  */
  readonly serialNumber: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/resources/entitlements_vm_token fortiflexvm_entitlements_vm_token}
*/
export class EntitlementsVmToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiflexvm_entitlements_vm_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EntitlementsVmToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EntitlementsVmToken to import
  * @param importFromId The id of the existing EntitlementsVmToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/resources/entitlements_vm_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EntitlementsVmToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiflexvm_entitlements_vm_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/resources/entitlements_vm_token fortiflexvm_entitlements_vm_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntitlementsVmTokenConfig
  */
  public constructor(scope: Construct, id: string, config: EntitlementsVmTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiflexvm_entitlements_vm_token',
      terraformGeneratorMetadata: {
        providerName: 'fortiflexvm',
        providerVersion: '2.4.3'
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
    this._regenerateToken = config.regenerateToken;
    this._serialNumber = config.serialNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

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

  // regenerate_token - computed: false, optional: true, required: false
  private _regenerateToken?: boolean | cdktf.IResolvable; 
  public get regenerateToken() {
    return this.getBooleanAttribute('regenerate_token');
  }
  public set regenerateToken(value: boolean | cdktf.IResolvable) {
    this._regenerateToken = value;
  }
  public resetRegenerateToken() {
    this._regenerateToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regenerateTokenInput() {
    return this._regenerateToken;
  }

  // serial_number - computed: false, optional: false, required: true
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_status - computed: true, optional: false, required: false
  public get tokenStatus() {
    return this.getStringAttribute('token_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      regenerate_token: cdktf.booleanToTerraform(this._regenerateToken),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
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
      regenerate_token: {
        value: cdktf.booleanToHclTerraform(this._regenerateToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
