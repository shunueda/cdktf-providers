// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerMpskprofileMpskgroupMpskkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#comment WirelesscontrollerMpskprofileMpskgroupMpskkey#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#concurrent_client_limit_type WirelesscontrollerMpskprofileMpskgroupMpskkey#concurrent_client_limit_type}
  */
  readonly concurrentClientLimitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#concurrent_clients WirelesscontrollerMpskprofileMpskgroupMpskkey#concurrent_clients}
  */
  readonly concurrentClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#device_name WirelesscontrollerMpskprofileMpskgroupMpskkey#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#device_vdom WirelesscontrollerMpskprofileMpskgroupMpskkey#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#id WirelesscontrollerMpskprofileMpskgroupMpskkey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#key_type WirelesscontrollerMpskprofileMpskgroupMpskkey#key_type}
  */
  readonly keyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#mac WirelesscontrollerMpskprofileMpskgroupMpskkey#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#mpsk_group WirelesscontrollerMpskprofileMpskgroupMpskkey#mpsk_group}
  */
  readonly mpskGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#mpsk_profile WirelesscontrollerMpskprofileMpskgroupMpskkey#mpsk_profile}
  */
  readonly mpskProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#mpsk_schedules WirelesscontrollerMpskprofileMpskgroupMpskkey#mpsk_schedules}
  */
  readonly mpskSchedules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#name WirelesscontrollerMpskprofileMpskgroupMpskkey#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#passphrase WirelesscontrollerMpskprofileMpskgroupMpskkey#passphrase}
  */
  readonly passphrase?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#pmk WirelesscontrollerMpskprofileMpskgroupMpskkey#pmk}
  */
  readonly pmk?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#sae_password WirelesscontrollerMpskprofileMpskgroupMpskkey#sae_password}
  */
  readonly saePassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#sae_pk WirelesscontrollerMpskprofileMpskgroupMpskkey#sae_pk}
  */
  readonly saePk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#sae_private_key WirelesscontrollerMpskprofileMpskgroupMpskkey#sae_private_key}
  */
  readonly saePrivateKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey fmgdevice_wirelesscontroller_mpskprofile_mpskgroup_mpskkey}
*/
export class WirelesscontrollerMpskprofileMpskgroupMpskkey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_mpskprofile_mpskgroup_mpskkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerMpskprofileMpskgroupMpskkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerMpskprofileMpskgroupMpskkey to import
  * @param importFromId The id of the existing WirelesscontrollerMpskprofileMpskgroupMpskkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerMpskprofileMpskgroupMpskkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_mpskprofile_mpskgroup_mpskkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup_mpskkey fmgdevice_wirelesscontroller_mpskprofile_mpskgroup_mpskkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerMpskprofileMpskgroupMpskkeyConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerMpskprofileMpskgroupMpskkeyConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_mpskprofile_mpskgroup_mpskkey',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._concurrentClientLimitType = config.concurrentClientLimitType;
    this._concurrentClients = config.concurrentClients;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._keyType = config.keyType;
    this._mac = config.mac;
    this._mpskGroup = config.mpskGroup;
    this._mpskProfile = config.mpskProfile;
    this._mpskSchedules = config.mpskSchedules;
    this._name = config.name;
    this._passphrase = config.passphrase;
    this._pmk = config.pmk;
    this._saePassword = config.saePassword;
    this._saePk = config.saePk;
    this._saePrivateKey = config.saePrivateKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // concurrent_client_limit_type - computed: true, optional: true, required: false
  private _concurrentClientLimitType?: string; 
  public get concurrentClientLimitType() {
    return this.getStringAttribute('concurrent_client_limit_type');
  }
  public set concurrentClientLimitType(value: string) {
    this._concurrentClientLimitType = value;
  }
  public resetConcurrentClientLimitType() {
    this._concurrentClientLimitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentClientLimitTypeInput() {
    return this._concurrentClientLimitType;
  }

  // concurrent_clients - computed: true, optional: true, required: false
  private _concurrentClients?: number; 
  public get concurrentClients() {
    return this.getNumberAttribute('concurrent_clients');
  }
  public set concurrentClients(value: number) {
    this._concurrentClients = value;
  }
  public resetConcurrentClients() {
    this._concurrentClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentClientsInput() {
    return this._concurrentClients;
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

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // mpsk_group - computed: false, optional: false, required: true
  private _mpskGroup?: string; 
  public get mpskGroup() {
    return this.getStringAttribute('mpsk_group');
  }
  public set mpskGroup(value: string) {
    this._mpskGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskGroupInput() {
    return this._mpskGroup;
  }

  // mpsk_profile - computed: false, optional: false, required: true
  private _mpskProfile?: string; 
  public get mpskProfile() {
    return this.getStringAttribute('mpsk_profile');
  }
  public set mpskProfile(value: string) {
    this._mpskProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskProfileInput() {
    return this._mpskProfile;
  }

  // mpsk_schedules - computed: true, optional: true, required: false
  private _mpskSchedules?: string[]; 
  public get mpskSchedules() {
    return cdktf.Fn.tolist(this.getListAttribute('mpsk_schedules'));
  }
  public set mpskSchedules(value: string[]) {
    this._mpskSchedules = value;
  }
  public resetMpskSchedules() {
    this._mpskSchedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskSchedulesInput() {
    return this._mpskSchedules;
  }

  // name - computed: false, optional: true, required: false
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

  // passphrase - computed: true, optional: true, required: false
  private _passphrase?: string[]; 
  public get passphrase() {
    return cdktf.Fn.tolist(this.getListAttribute('passphrase'));
  }
  public set passphrase(value: string[]) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // pmk - computed: true, optional: true, required: false
  private _pmk?: string[]; 
  public get pmk() {
    return cdktf.Fn.tolist(this.getListAttribute('pmk'));
  }
  public set pmk(value: string[]) {
    this._pmk = value;
  }
  public resetPmk() {
    this._pmk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmkInput() {
    return this._pmk;
  }

  // sae_password - computed: true, optional: true, required: false
  private _saePassword?: string[]; 
  public get saePassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sae_password'));
  }
  public set saePassword(value: string[]) {
    this._saePassword = value;
  }
  public resetSaePassword() {
    this._saePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saePasswordInput() {
    return this._saePassword;
  }

  // sae_pk - computed: true, optional: true, required: false
  private _saePk?: string; 
  public get saePk() {
    return this.getStringAttribute('sae_pk');
  }
  public set saePk(value: string) {
    this._saePk = value;
  }
  public resetSaePk() {
    this._saePk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saePkInput() {
    return this._saePk;
  }

  // sae_private_key - computed: false, optional: true, required: false
  private _saePrivateKey?: string; 
  public get saePrivateKey() {
    return this.getStringAttribute('sae_private_key');
  }
  public set saePrivateKey(value: string) {
    this._saePrivateKey = value;
  }
  public resetSaePrivateKey() {
    this._saePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saePrivateKeyInput() {
    return this._saePrivateKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      concurrent_client_limit_type: cdktf.stringToTerraform(this._concurrentClientLimitType),
      concurrent_clients: cdktf.numberToTerraform(this._concurrentClients),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      key_type: cdktf.stringToTerraform(this._keyType),
      mac: cdktf.stringToTerraform(this._mac),
      mpsk_group: cdktf.stringToTerraform(this._mpskGroup),
      mpsk_profile: cdktf.stringToTerraform(this._mpskProfile),
      mpsk_schedules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mpskSchedules),
      name: cdktf.stringToTerraform(this._name),
      passphrase: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passphrase),
      pmk: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pmk),
      sae_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._saePassword),
      sae_pk: cdktf.stringToTerraform(this._saePk),
      sae_private_key: cdktf.stringToTerraform(this._saePrivateKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrent_client_limit_type: {
        value: cdktf.stringToHclTerraform(this._concurrentClientLimitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrent_clients: {
        value: cdktf.numberToHclTerraform(this._concurrentClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk_group: {
        value: cdktf.stringToHclTerraform(this._mpskGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk_profile: {
        value: cdktf.stringToHclTerraform(this._mpskProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk_schedules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mpskSchedules),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passphrase),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pmk: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pmk),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sae_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._saePassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sae_pk: {
        value: cdktf.stringToHclTerraform(this._saePk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sae_private_key: {
        value: cdktf.stringToHclTerraform(this._saePrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
