// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerMpskprofileMpskgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#device_name WirelesscontrollerMpskprofileMpskgroup#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#device_vdom WirelesscontrollerMpskprofileMpskgroup#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#dynamic_sort_subtable WirelesscontrollerMpskprofileMpskgroup#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#id WirelesscontrollerMpskprofileMpskgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#mpsk_profile WirelesscontrollerMpskprofileMpskgroup#mpsk_profile}
  */
  readonly mpskProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#name WirelesscontrollerMpskprofileMpskgroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#vlan_id WirelesscontrollerMpskprofileMpskgroup#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#vlan_type WirelesscontrollerMpskprofileMpskgroup#vlan_type}
  */
  readonly vlanType?: string;
  /**
  * mpsk_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#mpsk_key WirelesscontrollerMpskprofileMpskgroup#mpsk_key}
  */
  readonly mpskKey?: WirelesscontrollerMpskprofileMpskgroupMpskKey[] | cdktf.IResolvable;
}
export interface WirelesscontrollerMpskprofileMpskgroupMpskKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#comment WirelesscontrollerMpskprofileMpskgroup#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#concurrent_client_limit_type WirelesscontrollerMpskprofileMpskgroup#concurrent_client_limit_type}
  */
  readonly concurrentClientLimitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#concurrent_clients WirelesscontrollerMpskprofileMpskgroup#concurrent_clients}
  */
  readonly concurrentClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#key_type WirelesscontrollerMpskprofileMpskgroup#key_type}
  */
  readonly keyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#mac WirelesscontrollerMpskprofileMpskgroup#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#mpsk_schedules WirelesscontrollerMpskprofileMpskgroup#mpsk_schedules}
  */
  readonly mpskSchedules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#name WirelesscontrollerMpskprofileMpskgroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#passphrase WirelesscontrollerMpskprofileMpskgroup#passphrase}
  */
  readonly passphrase?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#pmk WirelesscontrollerMpskprofileMpskgroup#pmk}
  */
  readonly pmk?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#sae_password WirelesscontrollerMpskprofileMpskgroup#sae_password}
  */
  readonly saePassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#sae_pk WirelesscontrollerMpskprofileMpskgroup#sae_pk}
  */
  readonly saePk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#sae_private_key WirelesscontrollerMpskprofileMpskgroup#sae_private_key}
  */
  readonly saePrivateKey?: string;
}

export function wirelesscontrollerMpskprofileMpskgroupMpskKeyToTerraform(struct?: WirelesscontrollerMpskprofileMpskgroupMpskKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    concurrent_client_limit_type: cdktf.stringToTerraform(struct!.concurrentClientLimitType),
    concurrent_clients: cdktf.numberToTerraform(struct!.concurrentClients),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    mac: cdktf.stringToTerraform(struct!.mac),
    mpsk_schedules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mpskSchedules),
    name: cdktf.stringToTerraform(struct!.name),
    passphrase: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.passphrase),
    pmk: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pmk),
    sae_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.saePassword),
    sae_pk: cdktf.stringToTerraform(struct!.saePk),
    sae_private_key: cdktf.stringToTerraform(struct!.saePrivateKey),
  }
}


export function wirelesscontrollerMpskprofileMpskgroupMpskKeyToHclTerraform(struct?: WirelesscontrollerMpskprofileMpskgroupMpskKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    concurrent_client_limit_type: {
      value: cdktf.stringToHclTerraform(struct!.concurrentClientLimitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    concurrent_clients: {
      value: cdktf.numberToHclTerraform(struct!.concurrentClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mpsk_schedules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mpskSchedules),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.passphrase),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pmk: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pmk),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sae_password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.saePassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sae_pk: {
      value: cdktf.stringToHclTerraform(struct!.saePk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sae_private_key: {
      value: cdktf.stringToHclTerraform(struct!.saePrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerMpskprofileMpskgroupMpskKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WirelesscontrollerMpskprofileMpskgroupMpskKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._concurrentClientLimitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentClientLimitType = this._concurrentClientLimitType;
    }
    if (this._concurrentClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentClients = this._concurrentClients;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._mpskSchedules !== undefined) {
      hasAnyValues = true;
      internalValueResult.mpskSchedules = this._mpskSchedules;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._pmk !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmk = this._pmk;
    }
    if (this._saePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.saePassword = this._saePassword;
    }
    if (this._saePk !== undefined) {
      hasAnyValues = true;
      internalValueResult.saePk = this._saePk;
    }
    if (this._saePrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.saePrivateKey = this._saePrivateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerMpskprofileMpskgroupMpskKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._concurrentClientLimitType = undefined;
      this._concurrentClients = undefined;
      this._keyType = undefined;
      this._mac = undefined;
      this._mpskSchedules = undefined;
      this._name = undefined;
      this._passphrase = undefined;
      this._pmk = undefined;
      this._saePassword = undefined;
      this._saePk = undefined;
      this._saePrivateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._concurrentClientLimitType = value.concurrentClientLimitType;
      this._concurrentClients = value.concurrentClients;
      this._keyType = value.keyType;
      this._mac = value.mac;
      this._mpskSchedules = value.mpskSchedules;
      this._name = value.name;
      this._passphrase = value.passphrase;
      this._pmk = value.pmk;
      this._saePassword = value.saePassword;
      this._saePk = value.saePk;
      this._saePrivateKey = value.saePrivateKey;
    }
  }

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
}

export class WirelesscontrollerMpskprofileMpskgroupMpskKeyList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerMpskprofileMpskgroupMpskKey[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WirelesscontrollerMpskprofileMpskgroupMpskKeyOutputReference {
    return new WirelesscontrollerMpskprofileMpskgroupMpskKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup fmgdevice_wirelesscontroller_mpskprofile_mpskgroup}
*/
export class WirelesscontrollerMpskprofileMpskgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_mpskprofile_mpskgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerMpskprofileMpskgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerMpskprofileMpskgroup to import
  * @param importFromId The id of the existing WirelesscontrollerMpskprofileMpskgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerMpskprofileMpskgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_mpskprofile_mpskgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_mpskprofile_mpskgroup fmgdevice_wirelesscontroller_mpskprofile_mpskgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerMpskprofileMpskgroupConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerMpskprofileMpskgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_mpskprofile_mpskgroup',
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
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._mpskProfile = config.mpskProfile;
    this._name = config.name;
    this._vlanId = config.vlanId;
    this._vlanType = config.vlanType;
    this._mpskKey.internalValue = config.mpskKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_type - computed: true, optional: true, required: false
  private _vlanType?: string; 
  public get vlanType() {
    return this.getStringAttribute('vlan_type');
  }
  public set vlanType(value: string) {
    this._vlanType = value;
  }
  public resetVlanType() {
    this._vlanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTypeInput() {
    return this._vlanType;
  }

  // mpsk_key - computed: false, optional: true, required: false
  private _mpskKey = new WirelesscontrollerMpskprofileMpskgroupMpskKeyList(this, "mpsk_key", false);
  public get mpskKey() {
    return this._mpskKey;
  }
  public putMpskKey(value: WirelesscontrollerMpskprofileMpskgroupMpskKey[] | cdktf.IResolvable) {
    this._mpskKey.internalValue = value;
  }
  public resetMpskKey() {
    this._mpskKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskKeyInput() {
    return this._mpskKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      mpsk_profile: cdktf.stringToTerraform(this._mpskProfile),
      name: cdktf.stringToTerraform(this._name),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_type: cdktf.stringToTerraform(this._vlanType),
      mpsk_key: cdktf.listMapper(wirelesscontrollerMpskprofileMpskgroupMpskKeyToTerraform, true)(this._mpskKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      mpsk_profile: {
        value: cdktf.stringToHclTerraform(this._mpskProfile),
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
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_type: {
        value: cdktf.stringToHclTerraform(this._vlanType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk_key: {
        value: cdktf.listMapperHcl(wirelesscontrollerMpskprofileMpskgroupMpskKeyToHclTerraform, true)(this._mpskKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerMpskprofileMpskgroupMpskKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
