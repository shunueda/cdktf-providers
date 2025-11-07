// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerMpskprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#dynamic_sort_subtable WirelesscontrollerMpskprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#get_all_tables WirelesscontrollerMpskprofile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#id WirelesscontrollerMpskprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#mpsk_concurrent_clients WirelesscontrollerMpskprofile#mpsk_concurrent_clients}
  */
  readonly mpskConcurrentClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#mpsk_external_server WirelesscontrollerMpskprofile#mpsk_external_server}
  */
  readonly mpskExternalServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#mpsk_external_server_auth WirelesscontrollerMpskprofile#mpsk_external_server_auth}
  */
  readonly mpskExternalServerAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#mpsk_type WirelesscontrollerMpskprofile#mpsk_type}
  */
  readonly mpskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#name WirelesscontrollerMpskprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#vdomparam WirelesscontrollerMpskprofile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * mpsk_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#mpsk_group WirelesscontrollerMpskprofile#mpsk_group}
  */
  readonly mpskGroup?: WirelesscontrollerMpskprofileMpskGroup[] | cdktf.IResolvable;
}
export interface WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#name WirelesscontrollerMpskprofile#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedulesToTerraform(struct?: WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedulesToHclTerraform(struct?: WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedulesList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedules[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedulesOutputReference {
    return new WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerMpskprofileMpskGroupMpskKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#comment WirelesscontrollerMpskprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#concurrent_client_limit_type WirelesscontrollerMpskprofile#concurrent_client_limit_type}
  */
  readonly concurrentClientLimitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#concurrent_clients WirelesscontrollerMpskprofile#concurrent_clients}
  */
  readonly concurrentClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#key_type WirelesscontrollerMpskprofile#key_type}
  */
  readonly keyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#mac WirelesscontrollerMpskprofile#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#name WirelesscontrollerMpskprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#passphrase WirelesscontrollerMpskprofile#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#sae_password WirelesscontrollerMpskprofile#sae_password}
  */
  readonly saePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#sae_pk WirelesscontrollerMpskprofile#sae_pk}
  */
  readonly saePk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#sae_private_key WirelesscontrollerMpskprofile#sae_private_key}
  */
  readonly saePrivateKey?: string;
  /**
  * mpsk_schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#mpsk_schedules WirelesscontrollerMpskprofile#mpsk_schedules}
  */
  readonly mpskSchedules?: WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedules[] | cdktf.IResolvable;
}

export function wirelesscontrollerMpskprofileMpskGroupMpskKeyToTerraform(struct?: WirelesscontrollerMpskprofileMpskGroupMpskKey | cdktf.IResolvable): any {
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
    name: cdktf.stringToTerraform(struct!.name),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    sae_password: cdktf.stringToTerraform(struct!.saePassword),
    sae_pk: cdktf.stringToTerraform(struct!.saePk),
    sae_private_key: cdktf.stringToTerraform(struct!.saePrivateKey),
    mpsk_schedules: cdktf.listMapper(wirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedulesToTerraform, true)(struct!.mpskSchedules),
  }
}


export function wirelesscontrollerMpskprofileMpskGroupMpskKeyToHclTerraform(struct?: WirelesscontrollerMpskprofileMpskGroupMpskKey | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sae_password: {
      value: cdktf.stringToHclTerraform(struct!.saePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    mpsk_schedules: {
      value: cdktf.listMapperHcl(wirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedulesToHclTerraform, true)(struct!.mpskSchedules),
      isBlock: true,
      type: "set",
      storageClassType: "WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerMpskprofileMpskGroupMpskKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerMpskprofileMpskGroupMpskKey | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
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
    if (this._mpskSchedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mpskSchedules = this._mpskSchedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerMpskprofileMpskGroupMpskKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._concurrentClientLimitType = undefined;
      this._concurrentClients = undefined;
      this._keyType = undefined;
      this._mac = undefined;
      this._name = undefined;
      this._passphrase = undefined;
      this._saePassword = undefined;
      this._saePk = undefined;
      this._saePrivateKey = undefined;
      this._mpskSchedules.internalValue = undefined;
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
      this._name = value.name;
      this._passphrase = value.passphrase;
      this._saePassword = value.saePassword;
      this._saePk = value.saePk;
      this._saePrivateKey = value.saePrivateKey;
      this._mpskSchedules.internalValue = value.mpskSchedules;
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

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // sae_password - computed: false, optional: true, required: false
  private _saePassword?: string; 
  public get saePassword() {
    return this.getStringAttribute('sae_password');
  }
  public set saePassword(value: string) {
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

  // mpsk_schedules - computed: false, optional: true, required: false
  private _mpskSchedules = new WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedulesList(this, "mpsk_schedules", true);
  public get mpskSchedules() {
    return this._mpskSchedules;
  }
  public putMpskSchedules(value: WirelesscontrollerMpskprofileMpskGroupMpskKeyMpskSchedules[] | cdktf.IResolvable) {
    this._mpskSchedules.internalValue = value;
  }
  public resetMpskSchedules() {
    this._mpskSchedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskSchedulesInput() {
    return this._mpskSchedules.internalValue;
  }
}

export class WirelesscontrollerMpskprofileMpskGroupMpskKeyList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerMpskprofileMpskGroupMpskKey[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerMpskprofileMpskGroupMpskKeyOutputReference {
    return new WirelesscontrollerMpskprofileMpskGroupMpskKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerMpskprofileMpskGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#name WirelesscontrollerMpskprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#vlan_id WirelesscontrollerMpskprofile#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#vlan_type WirelesscontrollerMpskprofile#vlan_type}
  */
  readonly vlanType?: string;
  /**
  * mpsk_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#mpsk_key WirelesscontrollerMpskprofile#mpsk_key}
  */
  readonly mpskKey?: WirelesscontrollerMpskprofileMpskGroupMpskKey[] | cdktf.IResolvable;
}

export function wirelesscontrollerMpskprofileMpskGroupToTerraform(struct?: WirelesscontrollerMpskprofileMpskGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vlan_type: cdktf.stringToTerraform(struct!.vlanType),
    mpsk_key: cdktf.listMapper(wirelesscontrollerMpskprofileMpskGroupMpskKeyToTerraform, true)(struct!.mpskKey),
  }
}


export function wirelesscontrollerMpskprofileMpskGroupToHclTerraform(struct?: WirelesscontrollerMpskprofileMpskGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_type: {
      value: cdktf.stringToHclTerraform(struct!.vlanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mpsk_key: {
      value: cdktf.listMapperHcl(wirelesscontrollerMpskprofileMpskGroupMpskKeyToHclTerraform, true)(struct!.mpskKey),
      isBlock: true,
      type: "list",
      storageClassType: "WirelesscontrollerMpskprofileMpskGroupMpskKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerMpskprofileMpskGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerMpskprofileMpskGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vlanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanType = this._vlanType;
    }
    if (this._mpskKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mpskKey = this._mpskKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerMpskprofileMpskGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vlanId = undefined;
      this._vlanType = undefined;
      this._mpskKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vlanId = value.vlanId;
      this._vlanType = value.vlanType;
      this._mpskKey.internalValue = value.mpskKey;
    }
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
  private _mpskKey = new WirelesscontrollerMpskprofileMpskGroupMpskKeyList(this, "mpsk_key", false);
  public get mpskKey() {
    return this._mpskKey;
  }
  public putMpskKey(value: WirelesscontrollerMpskprofileMpskGroupMpskKey[] | cdktf.IResolvable) {
    this._mpskKey.internalValue = value;
  }
  public resetMpskKey() {
    this._mpskKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskKeyInput() {
    return this._mpskKey.internalValue;
  }
}

export class WirelesscontrollerMpskprofileMpskGroupList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerMpskprofileMpskGroup[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerMpskprofileMpskGroupOutputReference {
    return new WirelesscontrollerMpskprofileMpskGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile fortios_wirelesscontroller_mpskprofile}
*/
export class WirelesscontrollerMpskprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontroller_mpskprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerMpskprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerMpskprofile to import
  * @param importFromId The id of the existing WirelesscontrollerMpskprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerMpskprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontroller_mpskprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_mpskprofile fortios_wirelesscontroller_mpskprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerMpskprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerMpskprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontroller_mpskprofile',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._mpskConcurrentClients = config.mpskConcurrentClients;
    this._mpskExternalServer = config.mpskExternalServer;
    this._mpskExternalServerAuth = config.mpskExternalServerAuth;
    this._mpskType = config.mpskType;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._mpskGroup.internalValue = config.mpskGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // mpsk_concurrent_clients - computed: false, optional: true, required: false
  private _mpskConcurrentClients?: number; 
  public get mpskConcurrentClients() {
    return this.getNumberAttribute('mpsk_concurrent_clients');
  }
  public set mpskConcurrentClients(value: number) {
    this._mpskConcurrentClients = value;
  }
  public resetMpskConcurrentClients() {
    this._mpskConcurrentClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskConcurrentClientsInput() {
    return this._mpskConcurrentClients;
  }

  // mpsk_external_server - computed: false, optional: true, required: false
  private _mpskExternalServer?: string; 
  public get mpskExternalServer() {
    return this.getStringAttribute('mpsk_external_server');
  }
  public set mpskExternalServer(value: string) {
    this._mpskExternalServer = value;
  }
  public resetMpskExternalServer() {
    this._mpskExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskExternalServerInput() {
    return this._mpskExternalServer;
  }

  // mpsk_external_server_auth - computed: true, optional: true, required: false
  private _mpskExternalServerAuth?: string; 
  public get mpskExternalServerAuth() {
    return this.getStringAttribute('mpsk_external_server_auth');
  }
  public set mpskExternalServerAuth(value: string) {
    this._mpskExternalServerAuth = value;
  }
  public resetMpskExternalServerAuth() {
    this._mpskExternalServerAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskExternalServerAuthInput() {
    return this._mpskExternalServerAuth;
  }

  // mpsk_type - computed: true, optional: true, required: false
  private _mpskType?: string; 
  public get mpskType() {
    return this.getStringAttribute('mpsk_type');
  }
  public set mpskType(value: string) {
    this._mpskType = value;
  }
  public resetMpskType() {
    this._mpskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskTypeInput() {
    return this._mpskType;
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

  // mpsk_group - computed: false, optional: true, required: false
  private _mpskGroup = new WirelesscontrollerMpskprofileMpskGroupList(this, "mpsk_group", false);
  public get mpskGroup() {
    return this._mpskGroup;
  }
  public putMpskGroup(value: WirelesscontrollerMpskprofileMpskGroup[] | cdktf.IResolvable) {
    this._mpskGroup.internalValue = value;
  }
  public resetMpskGroup() {
    this._mpskGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskGroupInput() {
    return this._mpskGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      mpsk_concurrent_clients: cdktf.numberToTerraform(this._mpskConcurrentClients),
      mpsk_external_server: cdktf.stringToTerraform(this._mpskExternalServer),
      mpsk_external_server_auth: cdktf.stringToTerraform(this._mpskExternalServerAuth),
      mpsk_type: cdktf.stringToTerraform(this._mpskType),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      mpsk_group: cdktf.listMapper(wirelesscontrollerMpskprofileMpskGroupToTerraform, true)(this._mpskGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      mpsk_concurrent_clients: {
        value: cdktf.numberToHclTerraform(this._mpskConcurrentClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mpsk_external_server: {
        value: cdktf.stringToHclTerraform(this._mpskExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk_external_server_auth: {
        value: cdktf.stringToHclTerraform(this._mpskExternalServerAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk_type: {
        value: cdktf.stringToHclTerraform(this._mpskType),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk_group: {
        value: cdktf.listMapperHcl(wirelesscontrollerMpskprofileMpskGroupToHclTerraform, true)(this._mpskGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerMpskprofileMpskGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
