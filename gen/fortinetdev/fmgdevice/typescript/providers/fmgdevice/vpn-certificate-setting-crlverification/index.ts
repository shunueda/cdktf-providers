// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_certificate_setting_crlverification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnCertificateSettingCrlverificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_certificate_setting_crlverification#chain_crl_absence VpnCertificateSettingCrlverification#chain_crl_absence}
  */
  readonly chainCrlAbsence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_certificate_setting_crlverification#device_name VpnCertificateSettingCrlverification#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_certificate_setting_crlverification#device_vdom VpnCertificateSettingCrlverification#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_certificate_setting_crlverification#expiry VpnCertificateSettingCrlverification#expiry}
  */
  readonly expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_certificate_setting_crlverification#id VpnCertificateSettingCrlverification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_certificate_setting_crlverification#leaf_crl_absence VpnCertificateSettingCrlverification#leaf_crl_absence}
  */
  readonly leafCrlAbsence?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_certificate_setting_crlverification fmgdevice_vpn_certificate_setting_crlverification}
*/
export class VpnCertificateSettingCrlverification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_vpn_certificate_setting_crlverification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnCertificateSettingCrlverification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnCertificateSettingCrlverification to import
  * @param importFromId The id of the existing VpnCertificateSettingCrlverification that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_certificate_setting_crlverification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnCertificateSettingCrlverification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_vpn_certificate_setting_crlverification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_certificate_setting_crlverification fmgdevice_vpn_certificate_setting_crlverification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnCertificateSettingCrlverificationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnCertificateSettingCrlverificationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_vpn_certificate_setting_crlverification',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chainCrlAbsence = config.chainCrlAbsence;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._expiry = config.expiry;
    this._id = config.id;
    this._leafCrlAbsence = config.leafCrlAbsence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chain_crl_absence - computed: true, optional: true, required: false
  private _chainCrlAbsence?: string; 
  public get chainCrlAbsence() {
    return this.getStringAttribute('chain_crl_absence');
  }
  public set chainCrlAbsence(value: string) {
    this._chainCrlAbsence = value;
  }
  public resetChainCrlAbsence() {
    this._chainCrlAbsence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainCrlAbsenceInput() {
    return this._chainCrlAbsence;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // expiry - computed: true, optional: true, required: false
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
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

  // leaf_crl_absence - computed: true, optional: true, required: false
  private _leafCrlAbsence?: string; 
  public get leafCrlAbsence() {
    return this.getStringAttribute('leaf_crl_absence');
  }
  public set leafCrlAbsence(value: string) {
    this._leafCrlAbsence = value;
  }
  public resetLeafCrlAbsence() {
    this._leafCrlAbsence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafCrlAbsenceInput() {
    return this._leafCrlAbsence;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chain_crl_absence: cdktf.stringToTerraform(this._chainCrlAbsence),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      expiry: cdktf.stringToTerraform(this._expiry),
      id: cdktf.stringToTerraform(this._id),
      leaf_crl_absence: cdktf.stringToTerraform(this._leafCrlAbsence),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chain_crl_absence: {
        value: cdktf.stringToHclTerraform(this._chainCrlAbsence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry: {
        value: cdktf.stringToHclTerraform(this._expiry),
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
      leaf_crl_absence: {
        value: cdktf.stringToHclTerraform(this._leafCrlAbsence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
