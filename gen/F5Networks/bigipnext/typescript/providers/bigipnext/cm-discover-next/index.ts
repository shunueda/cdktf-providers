// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_discover_next
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmDiscoverNextConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP Address of the BIG-IP Next instance to be discovered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_discover_next#address CmDiscoverNext#address}
  */
  readonly address: string;
  /**
  * The password that the BIG-IP Next Central Manager uses before Instance discovery for BIG-IP Next management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_discover_next#device_password CmDiscoverNext#device_password}
  */
  readonly devicePassword: string;
  /**
  * The username that the BIG-IP Next Central Manager uses before Instance discovery for BIG-IP Next management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_discover_next#device_user CmDiscoverNext#device_user}
  */
  readonly deviceUser: string;
  /**
  * The password that the BIG-IP Next Central Manager uses after Instance Discovery for BIG-IP Next management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_discover_next#management_password CmDiscoverNext#management_password}
  */
  readonly managementPassword: string;
  /**
  * The username that the BIG-IP Next Central Manager uses after Instance Discovery for BIG-IP Next management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_discover_next#management_user CmDiscoverNext#management_user}
  */
  readonly managementUser: string;
  /**
  * Port number of the BIG-IP Next instance to be discovered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_discover_next#port CmDiscoverNext#port}
  */
  readonly port: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_discover_next bigipnext_cm_discover_next}
*/
export class CmDiscoverNext extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_discover_next";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmDiscoverNext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmDiscoverNext to import
  * @param importFromId The id of the existing CmDiscoverNext that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_discover_next#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmDiscoverNext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_discover_next", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_discover_next bigipnext_cm_discover_next} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmDiscoverNextConfig
  */
  public constructor(scope: Construct, id: string, config: CmDiscoverNextConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_discover_next',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._devicePassword = config.devicePassword;
    this._deviceUser = config.deviceUser;
    this._managementPassword = config.managementPassword;
    this._managementUser = config.managementUser;
    this._port = config.port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // device_password - computed: false, optional: false, required: true
  private _devicePassword?: string; 
  public get devicePassword() {
    return this.getStringAttribute('device_password');
  }
  public set devicePassword(value: string) {
    this._devicePassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePasswordInput() {
    return this._devicePassword;
  }

  // device_user - computed: false, optional: false, required: true
  private _deviceUser?: string; 
  public get deviceUser() {
    return this.getStringAttribute('device_user');
  }
  public set deviceUser(value: string) {
    this._deviceUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUserInput() {
    return this._deviceUser;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_password - computed: false, optional: false, required: true
  private _managementPassword?: string; 
  public get managementPassword() {
    return this.getStringAttribute('management_password');
  }
  public set managementPassword(value: string) {
    this._managementPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPasswordInput() {
    return this._managementPassword;
  }

  // management_user - computed: false, optional: false, required: true
  private _managementUser?: string; 
  public get managementUser() {
    return this.getStringAttribute('management_user');
  }
  public set managementUser(value: string) {
    this._managementUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementUserInput() {
    return this._managementUser;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      device_password: cdktf.stringToTerraform(this._devicePassword),
      device_user: cdktf.stringToTerraform(this._deviceUser),
      management_password: cdktf.stringToTerraform(this._managementPassword),
      management_user: cdktf.stringToTerraform(this._managementUser),
      port: cdktf.numberToTerraform(this._port),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_password: {
        value: cdktf.stringToHclTerraform(this._devicePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_user: {
        value: cdktf.stringToHclTerraform(this._deviceUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_password: {
        value: cdktf.stringToHclTerraform(this._managementPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_user: {
        value: cdktf.stringToHclTerraform(this._managementUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
