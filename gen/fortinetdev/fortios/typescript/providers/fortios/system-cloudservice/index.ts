// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCloudserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice#gck_access_token_lifetime SystemCloudservice#gck_access_token_lifetime}
  */
  readonly gckAccessTokenLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice#gck_keyid SystemCloudservice#gck_keyid}
  */
  readonly gckKeyid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice#gck_private_key SystemCloudservice#gck_private_key}
  */
  readonly gckPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice#gck_service_account SystemCloudservice#gck_service_account}
  */
  readonly gckServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice#id SystemCloudservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice#name SystemCloudservice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice#traffic_vdom SystemCloudservice#traffic_vdom}
  */
  readonly trafficVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice#vdomparam SystemCloudservice#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice#vendor SystemCloudservice#vendor}
  */
  readonly vendor?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice fortios_system_cloudservice}
*/
export class SystemCloudservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_cloudservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCloudservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCloudservice to import
  * @param importFromId The id of the existing SystemCloudservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCloudservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_cloudservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_cloudservice fortios_system_cloudservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCloudserviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemCloudserviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_cloudservice',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gckAccessTokenLifetime = config.gckAccessTokenLifetime;
    this._gckKeyid = config.gckKeyid;
    this._gckPrivateKey = config.gckPrivateKey;
    this._gckServiceAccount = config.gckServiceAccount;
    this._id = config.id;
    this._name = config.name;
    this._trafficVdom = config.trafficVdom;
    this._vdomparam = config.vdomparam;
    this._vendor = config.vendor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gck_access_token_lifetime - computed: true, optional: true, required: false
  private _gckAccessTokenLifetime?: number; 
  public get gckAccessTokenLifetime() {
    return this.getNumberAttribute('gck_access_token_lifetime');
  }
  public set gckAccessTokenLifetime(value: number) {
    this._gckAccessTokenLifetime = value;
  }
  public resetGckAccessTokenLifetime() {
    this._gckAccessTokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gckAccessTokenLifetimeInput() {
    return this._gckAccessTokenLifetime;
  }

  // gck_keyid - computed: false, optional: true, required: false
  private _gckKeyid?: string; 
  public get gckKeyid() {
    return this.getStringAttribute('gck_keyid');
  }
  public set gckKeyid(value: string) {
    this._gckKeyid = value;
  }
  public resetGckKeyid() {
    this._gckKeyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gckKeyidInput() {
    return this._gckKeyid;
  }

  // gck_private_key - computed: false, optional: true, required: false
  private _gckPrivateKey?: string; 
  public get gckPrivateKey() {
    return this.getStringAttribute('gck_private_key');
  }
  public set gckPrivateKey(value: string) {
    this._gckPrivateKey = value;
  }
  public resetGckPrivateKey() {
    this._gckPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gckPrivateKeyInput() {
    return this._gckPrivateKey;
  }

  // gck_service_account - computed: false, optional: true, required: false
  private _gckServiceAccount?: string; 
  public get gckServiceAccount() {
    return this.getStringAttribute('gck_service_account');
  }
  public set gckServiceAccount(value: string) {
    this._gckServiceAccount = value;
  }
  public resetGckServiceAccount() {
    this._gckServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gckServiceAccountInput() {
    return this._gckServiceAccount;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // traffic_vdom - computed: false, optional: true, required: false
  private _trafficVdom?: string; 
  public get trafficVdom() {
    return this.getStringAttribute('traffic_vdom');
  }
  public set trafficVdom(value: string) {
    this._trafficVdom = value;
  }
  public resetTrafficVdom() {
    this._trafficVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficVdomInput() {
    return this._trafficVdom;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gck_access_token_lifetime: cdktf.numberToTerraform(this._gckAccessTokenLifetime),
      gck_keyid: cdktf.stringToTerraform(this._gckKeyid),
      gck_private_key: cdktf.stringToTerraform(this._gckPrivateKey),
      gck_service_account: cdktf.stringToTerraform(this._gckServiceAccount),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      traffic_vdom: cdktf.stringToTerraform(this._trafficVdom),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vendor: cdktf.stringToTerraform(this._vendor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gck_access_token_lifetime: {
        value: cdktf.numberToHclTerraform(this._gckAccessTokenLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gck_keyid: {
        value: cdktf.stringToHclTerraform(this._gckKeyid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gck_private_key: {
        value: cdktf.stringToHclTerraform(this._gckPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gck_service_account: {
        value: cdktf.stringToHclTerraform(this._gckServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_vdom: {
        value: cdktf.stringToHclTerraform(this._trafficVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
