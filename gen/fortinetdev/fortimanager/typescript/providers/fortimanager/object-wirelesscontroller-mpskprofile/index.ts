// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerMpskprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#adom ObjectWirelesscontrollerMpskprofile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#dynamic_sort_subtable ObjectWirelesscontrollerMpskprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#id ObjectWirelesscontrollerMpskprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#mpsk_concurrent_clients ObjectWirelesscontrollerMpskprofile#mpsk_concurrent_clients}
  */
  readonly mpskConcurrentClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#name ObjectWirelesscontrollerMpskprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#scopetype ObjectWirelesscontrollerMpskprofile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#ssid ObjectWirelesscontrollerMpskprofile#ssid}
  */
  readonly ssid?: string;
  /**
  * mpsk_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#mpsk_group ObjectWirelesscontrollerMpskprofile#mpsk_group}
  */
  readonly mpskGroup?: ObjectWirelesscontrollerMpskprofileMpskGroup[] | cdktf.IResolvable;
}
export interface ObjectWirelesscontrollerMpskprofileMpskGroupMpskKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#comment ObjectWirelesscontrollerMpskprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#concurrent_client_limit_type ObjectWirelesscontrollerMpskprofile#concurrent_client_limit_type}
  */
  readonly concurrentClientLimitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#concurrent_clients ObjectWirelesscontrollerMpskprofile#concurrent_clients}
  */
  readonly concurrentClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#mac ObjectWirelesscontrollerMpskprofile#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#mpsk_schedules ObjectWirelesscontrollerMpskprofile#mpsk_schedules}
  */
  readonly mpskSchedules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#name ObjectWirelesscontrollerMpskprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#passphrase ObjectWirelesscontrollerMpskprofile#passphrase}
  */
  readonly passphrase?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#pmk ObjectWirelesscontrollerMpskprofile#pmk}
  */
  readonly pmk?: string[];
}

export function objectWirelesscontrollerMpskprofileMpskGroupMpskKeyToTerraform(struct?: ObjectWirelesscontrollerMpskprofileMpskGroupMpskKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    concurrent_client_limit_type: cdktf.stringToTerraform(struct!.concurrentClientLimitType),
    concurrent_clients: cdktf.numberToTerraform(struct!.concurrentClients),
    mac: cdktf.stringToTerraform(struct!.mac),
    mpsk_schedules: cdktf.stringToTerraform(struct!.mpskSchedules),
    name: cdktf.stringToTerraform(struct!.name),
    passphrase: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.passphrase),
    pmk: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pmk),
  }
}


export function objectWirelesscontrollerMpskprofileMpskGroupMpskKeyToHclTerraform(struct?: ObjectWirelesscontrollerMpskprofileMpskGroupMpskKey | cdktf.IResolvable): any {
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
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mpsk_schedules: {
      value: cdktf.stringToHclTerraform(struct!.mpskSchedules),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerMpskprofileMpskGroupMpskKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerMpskprofileMpskGroupMpskKey | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWirelesscontrollerMpskprofileMpskGroupMpskKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._concurrentClientLimitType = undefined;
      this._concurrentClients = undefined;
      this._mac = undefined;
      this._mpskSchedules = undefined;
      this._name = undefined;
      this._passphrase = undefined;
      this._pmk = undefined;
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
      this._mac = value.mac;
      this._mpskSchedules = value.mpskSchedules;
      this._name = value.name;
      this._passphrase = value.passphrase;
      this._pmk = value.pmk;
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

  // mpsk_schedules - computed: false, optional: true, required: false
  private _mpskSchedules?: string; 
  public get mpskSchedules() {
    return this.getStringAttribute('mpsk_schedules');
  }
  public set mpskSchedules(value: string) {
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
}

export class ObjectWirelesscontrollerMpskprofileMpskGroupMpskKeyList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerMpskprofileMpskGroupMpskKey[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerMpskprofileMpskGroupMpskKeyOutputReference {
    return new ObjectWirelesscontrollerMpskprofileMpskGroupMpskKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWirelesscontrollerMpskprofileMpskGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#name ObjectWirelesscontrollerMpskprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#vlan_id ObjectWirelesscontrollerMpskprofile#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#vlan_type ObjectWirelesscontrollerMpskprofile#vlan_type}
  */
  readonly vlanType?: string;
  /**
  * mpsk_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#mpsk_key ObjectWirelesscontrollerMpskprofile#mpsk_key}
  */
  readonly mpskKey?: ObjectWirelesscontrollerMpskprofileMpskGroupMpskKey[] | cdktf.IResolvable;
}

export function objectWirelesscontrollerMpskprofileMpskGroupToTerraform(struct?: ObjectWirelesscontrollerMpskprofileMpskGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vlan_type: cdktf.stringToTerraform(struct!.vlanType),
    mpsk_key: cdktf.listMapper(objectWirelesscontrollerMpskprofileMpskGroupMpskKeyToTerraform, true)(struct!.mpskKey),
  }
}


export function objectWirelesscontrollerMpskprofileMpskGroupToHclTerraform(struct?: ObjectWirelesscontrollerMpskprofileMpskGroup | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(objectWirelesscontrollerMpskprofileMpskGroupMpskKeyToHclTerraform, true)(struct!.mpskKey),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectWirelesscontrollerMpskprofileMpskGroupMpskKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWirelesscontrollerMpskprofileMpskGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWirelesscontrollerMpskprofileMpskGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectWirelesscontrollerMpskprofileMpskGroup | cdktf.IResolvable | undefined) {
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
  private _mpskKey = new ObjectWirelesscontrollerMpskprofileMpskGroupMpskKeyList(this, "mpsk_key", false);
  public get mpskKey() {
    return this._mpskKey;
  }
  public putMpskKey(value: ObjectWirelesscontrollerMpskprofileMpskGroupMpskKey[] | cdktf.IResolvable) {
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

export class ObjectWirelesscontrollerMpskprofileMpskGroupList extends cdktf.ComplexList {
  public internalValue? : ObjectWirelesscontrollerMpskprofileMpskGroup[] | cdktf.IResolvable

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
  public get(index: number): ObjectWirelesscontrollerMpskprofileMpskGroupOutputReference {
    return new ObjectWirelesscontrollerMpskprofileMpskGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile fortimanager_object_wirelesscontroller_mpskprofile}
*/
export class ObjectWirelesscontrollerMpskprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_mpskprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerMpskprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerMpskprofile to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerMpskprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerMpskprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_mpskprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile fortimanager_object_wirelesscontroller_mpskprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerMpskprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerMpskprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_mpskprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._mpskConcurrentClients = config.mpskConcurrentClients;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._ssid = config.ssid;
    this._mpskGroup.internalValue = config.mpskGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // ssid - computed: false, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // mpsk_group - computed: false, optional: true, required: false
  private _mpskGroup = new ObjectWirelesscontrollerMpskprofileMpskGroupList(this, "mpsk_group", false);
  public get mpskGroup() {
    return this._mpskGroup;
  }
  public putMpskGroup(value: ObjectWirelesscontrollerMpskprofileMpskGroup[] | cdktf.IResolvable) {
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
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      mpsk_concurrent_clients: cdktf.numberToTerraform(this._mpskConcurrentClients),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      ssid: cdktf.stringToTerraform(this._ssid),
      mpsk_group: cdktf.listMapper(objectWirelesscontrollerMpskprofileMpskGroupToTerraform, true)(this._mpskGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      mpsk_concurrent_clients: {
        value: cdktf.numberToHclTerraform(this._mpskConcurrentClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid: {
        value: cdktf.stringToHclTerraform(this._ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk_group: {
        value: cdktf.listMapperHcl(objectWirelesscontrollerMpskprofileMpskGroupToHclTerraform, true)(this._mpskGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWirelesscontrollerMpskprofileMpskGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
