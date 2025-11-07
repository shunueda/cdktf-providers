// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerLldpprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#auto_isl SwitchcontrollerLldpprofile#auto_isl}
  */
  readonly autoIsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#auto_isl_auth SwitchcontrollerLldpprofile#auto_isl_auth}
  */
  readonly autoIslAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#auto_isl_auth_encrypt SwitchcontrollerLldpprofile#auto_isl_auth_encrypt}
  */
  readonly autoIslAuthEncrypt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#auto_isl_auth_identity SwitchcontrollerLldpprofile#auto_isl_auth_identity}
  */
  readonly autoIslAuthIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#auto_isl_auth_macsec_profile SwitchcontrollerLldpprofile#auto_isl_auth_macsec_profile}
  */
  readonly autoIslAuthMacsecProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#auto_isl_auth_reauth SwitchcontrollerLldpprofile#auto_isl_auth_reauth}
  */
  readonly autoIslAuthReauth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#auto_isl_auth_user SwitchcontrollerLldpprofile#auto_isl_auth_user}
  */
  readonly autoIslAuthUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#auto_isl_hello_timer SwitchcontrollerLldpprofile#auto_isl_hello_timer}
  */
  readonly autoIslHelloTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#auto_isl_port_group SwitchcontrollerLldpprofile#auto_isl_port_group}
  */
  readonly autoIslPortGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#auto_isl_receive_timeout SwitchcontrollerLldpprofile#auto_isl_receive_timeout}
  */
  readonly autoIslReceiveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#auto_mclag_icl SwitchcontrollerLldpprofile#auto_mclag_icl}
  */
  readonly autoMclagIcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#device_name SwitchcontrollerLldpprofile#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#device_vdom SwitchcontrollerLldpprofile#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#dynamic_sort_subtable SwitchcontrollerLldpprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#id SwitchcontrollerLldpprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#med_tlvs SwitchcontrollerLldpprofile#med_tlvs}
  */
  readonly medTlvs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#n8021_tlvs SwitchcontrollerLldpprofile#n8021_tlvs}
  */
  readonly n8021Tlvs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#n8023_tlvs SwitchcontrollerLldpprofile#n8023_tlvs}
  */
  readonly n8023Tlvs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#name SwitchcontrollerLldpprofile#name}
  */
  readonly name?: string;
  /**
  * custom_tlvs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#custom_tlvs SwitchcontrollerLldpprofile#custom_tlvs}
  */
  readonly customTlvs?: SwitchcontrollerLldpprofileCustomTlvs[] | cdktf.IResolvable;
  /**
  * med_location_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#med_location_service SwitchcontrollerLldpprofile#med_location_service}
  */
  readonly medLocationService?: SwitchcontrollerLldpprofileMedLocationService[] | cdktf.IResolvable;
  /**
  * med_network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#med_network_policy SwitchcontrollerLldpprofile#med_network_policy}
  */
  readonly medNetworkPolicy?: SwitchcontrollerLldpprofileMedNetworkPolicy[] | cdktf.IResolvable;
}
export interface SwitchcontrollerLldpprofileCustomTlvs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#information_string SwitchcontrollerLldpprofile#information_string}
  */
  readonly informationString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#name SwitchcontrollerLldpprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#oui SwitchcontrollerLldpprofile#oui}
  */
  readonly oui?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#subtype SwitchcontrollerLldpprofile#subtype}
  */
  readonly subtype?: number;
}

export function switchcontrollerLldpprofileCustomTlvsToTerraform(struct?: SwitchcontrollerLldpprofileCustomTlvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    information_string: cdktf.stringToTerraform(struct!.informationString),
    name: cdktf.stringToTerraform(struct!.name),
    oui: cdktf.stringToTerraform(struct!.oui),
    subtype: cdktf.numberToTerraform(struct!.subtype),
  }
}


export function switchcontrollerLldpprofileCustomTlvsToHclTerraform(struct?: SwitchcontrollerLldpprofileCustomTlvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    information_string: {
      value: cdktf.stringToHclTerraform(struct!.informationString),
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
    oui: {
      value: cdktf.stringToHclTerraform(struct!.oui),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtype: {
      value: cdktf.numberToHclTerraform(struct!.subtype),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerLldpprofileCustomTlvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerLldpprofileCustomTlvs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._informationString !== undefined) {
      hasAnyValues = true;
      internalValueResult.informationString = this._informationString;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oui !== undefined) {
      hasAnyValues = true;
      internalValueResult.oui = this._oui;
    }
    if (this._subtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtype = this._subtype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerLldpprofileCustomTlvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._informationString = undefined;
      this._name = undefined;
      this._oui = undefined;
      this._subtype = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._informationString = value.informationString;
      this._name = value.name;
      this._oui = value.oui;
      this._subtype = value.subtype;
    }
  }

  // information_string - computed: false, optional: true, required: false
  private _informationString?: string; 
  public get informationString() {
    return this.getStringAttribute('information_string');
  }
  public set informationString(value: string) {
    this._informationString = value;
  }
  public resetInformationString() {
    this._informationString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationStringInput() {
    return this._informationString;
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

  // oui - computed: true, optional: true, required: false
  private _oui?: string; 
  public get oui() {
    return this.getStringAttribute('oui');
  }
  public set oui(value: string) {
    this._oui = value;
  }
  public resetOui() {
    this._oui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ouiInput() {
    return this._oui;
  }

  // subtype - computed: false, optional: true, required: false
  private _subtype?: number; 
  public get subtype() {
    return this.getNumberAttribute('subtype');
  }
  public set subtype(value: number) {
    this._subtype = value;
  }
  public resetSubtype() {
    this._subtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype;
  }
}

export class SwitchcontrollerLldpprofileCustomTlvsList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerLldpprofileCustomTlvs[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerLldpprofileCustomTlvsOutputReference {
    return new SwitchcontrollerLldpprofileCustomTlvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerLldpprofileMedLocationService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#name SwitchcontrollerLldpprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#status SwitchcontrollerLldpprofile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#sys_location_id SwitchcontrollerLldpprofile#sys_location_id}
  */
  readonly sysLocationId?: string[];
}

export function switchcontrollerLldpprofileMedLocationServiceToTerraform(struct?: SwitchcontrollerLldpprofileMedLocationService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    sys_location_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sysLocationId),
  }
}


export function switchcontrollerLldpprofileMedLocationServiceToHclTerraform(struct?: SwitchcontrollerLldpprofileMedLocationService | cdktf.IResolvable): any {
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sys_location_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sysLocationId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerLldpprofileMedLocationServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerLldpprofileMedLocationService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._sysLocationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysLocationId = this._sysLocationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerLldpprofileMedLocationService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._status = undefined;
      this._sysLocationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._status = value.status;
      this._sysLocationId = value.sysLocationId;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // sys_location_id - computed: true, optional: true, required: false
  private _sysLocationId?: string[]; 
  public get sysLocationId() {
    return cdktf.Fn.tolist(this.getListAttribute('sys_location_id'));
  }
  public set sysLocationId(value: string[]) {
    this._sysLocationId = value;
  }
  public resetSysLocationId() {
    this._sysLocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysLocationIdInput() {
    return this._sysLocationId;
  }
}

export class SwitchcontrollerLldpprofileMedLocationServiceList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerLldpprofileMedLocationService[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerLldpprofileMedLocationServiceOutputReference {
    return new SwitchcontrollerLldpprofileMedLocationServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerLldpprofileMedNetworkPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#assign_vlan SwitchcontrollerLldpprofile#assign_vlan}
  */
  readonly assignVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#dscp SwitchcontrollerLldpprofile#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#name SwitchcontrollerLldpprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#priority SwitchcontrollerLldpprofile#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#status SwitchcontrollerLldpprofile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#vlan SwitchcontrollerLldpprofile#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#vlan_intf SwitchcontrollerLldpprofile#vlan_intf}
  */
  readonly vlanIntf?: string[];
}

export function switchcontrollerLldpprofileMedNetworkPolicyToTerraform(struct?: SwitchcontrollerLldpprofileMedNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_vlan: cdktf.stringToTerraform(struct!.assignVlan),
    dscp: cdktf.numberToTerraform(struct!.dscp),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    vlan_intf: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vlanIntf),
  }
}


export function switchcontrollerLldpprofileMedNetworkPolicyToHclTerraform(struct?: SwitchcontrollerLldpprofileMedNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_vlan: {
      value: cdktf.stringToHclTerraform(struct!.assignVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_intf: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vlanIntf),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerLldpprofileMedNetworkPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerLldpprofileMedNetworkPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignVlan = this._assignVlan;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._vlanIntf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanIntf = this._vlanIntf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerLldpprofileMedNetworkPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignVlan = undefined;
      this._dscp = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._status = undefined;
      this._vlan = undefined;
      this._vlanIntf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignVlan = value.assignVlan;
      this._dscp = value.dscp;
      this._name = value.name;
      this._priority = value.priority;
      this._status = value.status;
      this._vlan = value.vlan;
      this._vlanIntf = value.vlanIntf;
    }
  }

  // assign_vlan - computed: false, optional: true, required: false
  private _assignVlan?: string; 
  public get assignVlan() {
    return this.getStringAttribute('assign_vlan');
  }
  public set assignVlan(value: string) {
    this._assignVlan = value;
  }
  public resetAssignVlan() {
    this._assignVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignVlanInput() {
    return this._assignVlan;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vlan_intf - computed: true, optional: true, required: false
  private _vlanIntf?: string[]; 
  public get vlanIntf() {
    return cdktf.Fn.tolist(this.getListAttribute('vlan_intf'));
  }
  public set vlanIntf(value: string[]) {
    this._vlanIntf = value;
  }
  public resetVlanIntf() {
    this._vlanIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIntfInput() {
    return this._vlanIntf;
  }
}

export class SwitchcontrollerLldpprofileMedNetworkPolicyList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerLldpprofileMedNetworkPolicy[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerLldpprofileMedNetworkPolicyOutputReference {
    return new SwitchcontrollerLldpprofileMedNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile fmgdevice_switchcontroller_lldpprofile}
*/
export class SwitchcontrollerLldpprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_lldpprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerLldpprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerLldpprofile to import
  * @param importFromId The id of the existing SwitchcontrollerLldpprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerLldpprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_lldpprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_lldpprofile fmgdevice_switchcontroller_lldpprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerLldpprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerLldpprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_lldpprofile',
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
    this._autoIsl = config.autoIsl;
    this._autoIslAuth = config.autoIslAuth;
    this._autoIslAuthEncrypt = config.autoIslAuthEncrypt;
    this._autoIslAuthIdentity = config.autoIslAuthIdentity;
    this._autoIslAuthMacsecProfile = config.autoIslAuthMacsecProfile;
    this._autoIslAuthReauth = config.autoIslAuthReauth;
    this._autoIslAuthUser = config.autoIslAuthUser;
    this._autoIslHelloTimer = config.autoIslHelloTimer;
    this._autoIslPortGroup = config.autoIslPortGroup;
    this._autoIslReceiveTimeout = config.autoIslReceiveTimeout;
    this._autoMclagIcl = config.autoMclagIcl;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._medTlvs = config.medTlvs;
    this._n8021Tlvs = config.n8021Tlvs;
    this._n8023Tlvs = config.n8023Tlvs;
    this._name = config.name;
    this._customTlvs.internalValue = config.customTlvs;
    this._medLocationService.internalValue = config.medLocationService;
    this._medNetworkPolicy.internalValue = config.medNetworkPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_isl - computed: true, optional: true, required: false
  private _autoIsl?: string; 
  public get autoIsl() {
    return this.getStringAttribute('auto_isl');
  }
  public set autoIsl(value: string) {
    this._autoIsl = value;
  }
  public resetAutoIsl() {
    this._autoIsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslInput() {
    return this._autoIsl;
  }

  // auto_isl_auth - computed: true, optional: true, required: false
  private _autoIslAuth?: string; 
  public get autoIslAuth() {
    return this.getStringAttribute('auto_isl_auth');
  }
  public set autoIslAuth(value: string) {
    this._autoIslAuth = value;
  }
  public resetAutoIslAuth() {
    this._autoIslAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslAuthInput() {
    return this._autoIslAuth;
  }

  // auto_isl_auth_encrypt - computed: true, optional: true, required: false
  private _autoIslAuthEncrypt?: string; 
  public get autoIslAuthEncrypt() {
    return this.getStringAttribute('auto_isl_auth_encrypt');
  }
  public set autoIslAuthEncrypt(value: string) {
    this._autoIslAuthEncrypt = value;
  }
  public resetAutoIslAuthEncrypt() {
    this._autoIslAuthEncrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslAuthEncryptInput() {
    return this._autoIslAuthEncrypt;
  }

  // auto_isl_auth_identity - computed: false, optional: true, required: false
  private _autoIslAuthIdentity?: string; 
  public get autoIslAuthIdentity() {
    return this.getStringAttribute('auto_isl_auth_identity');
  }
  public set autoIslAuthIdentity(value: string) {
    this._autoIslAuthIdentity = value;
  }
  public resetAutoIslAuthIdentity() {
    this._autoIslAuthIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslAuthIdentityInput() {
    return this._autoIslAuthIdentity;
  }

  // auto_isl_auth_macsec_profile - computed: false, optional: true, required: false
  private _autoIslAuthMacsecProfile?: string; 
  public get autoIslAuthMacsecProfile() {
    return this.getStringAttribute('auto_isl_auth_macsec_profile');
  }
  public set autoIslAuthMacsecProfile(value: string) {
    this._autoIslAuthMacsecProfile = value;
  }
  public resetAutoIslAuthMacsecProfile() {
    this._autoIslAuthMacsecProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslAuthMacsecProfileInput() {
    return this._autoIslAuthMacsecProfile;
  }

  // auto_isl_auth_reauth - computed: true, optional: true, required: false
  private _autoIslAuthReauth?: number; 
  public get autoIslAuthReauth() {
    return this.getNumberAttribute('auto_isl_auth_reauth');
  }
  public set autoIslAuthReauth(value: number) {
    this._autoIslAuthReauth = value;
  }
  public resetAutoIslAuthReauth() {
    this._autoIslAuthReauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslAuthReauthInput() {
    return this._autoIslAuthReauth;
  }

  // auto_isl_auth_user - computed: false, optional: true, required: false
  private _autoIslAuthUser?: string; 
  public get autoIslAuthUser() {
    return this.getStringAttribute('auto_isl_auth_user');
  }
  public set autoIslAuthUser(value: string) {
    this._autoIslAuthUser = value;
  }
  public resetAutoIslAuthUser() {
    this._autoIslAuthUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslAuthUserInput() {
    return this._autoIslAuthUser;
  }

  // auto_isl_hello_timer - computed: true, optional: true, required: false
  private _autoIslHelloTimer?: number; 
  public get autoIslHelloTimer() {
    return this.getNumberAttribute('auto_isl_hello_timer');
  }
  public set autoIslHelloTimer(value: number) {
    this._autoIslHelloTimer = value;
  }
  public resetAutoIslHelloTimer() {
    this._autoIslHelloTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslHelloTimerInput() {
    return this._autoIslHelloTimer;
  }

  // auto_isl_port_group - computed: false, optional: true, required: false
  private _autoIslPortGroup?: number; 
  public get autoIslPortGroup() {
    return this.getNumberAttribute('auto_isl_port_group');
  }
  public set autoIslPortGroup(value: number) {
    this._autoIslPortGroup = value;
  }
  public resetAutoIslPortGroup() {
    this._autoIslPortGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslPortGroupInput() {
    return this._autoIslPortGroup;
  }

  // auto_isl_receive_timeout - computed: true, optional: true, required: false
  private _autoIslReceiveTimeout?: number; 
  public get autoIslReceiveTimeout() {
    return this.getNumberAttribute('auto_isl_receive_timeout');
  }
  public set autoIslReceiveTimeout(value: number) {
    this._autoIslReceiveTimeout = value;
  }
  public resetAutoIslReceiveTimeout() {
    this._autoIslReceiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslReceiveTimeoutInput() {
    return this._autoIslReceiveTimeout;
  }

  // auto_mclag_icl - computed: true, optional: true, required: false
  private _autoMclagIcl?: string; 
  public get autoMclagIcl() {
    return this.getStringAttribute('auto_mclag_icl');
  }
  public set autoMclagIcl(value: string) {
    this._autoMclagIcl = value;
  }
  public resetAutoMclagIcl() {
    this._autoMclagIcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMclagIclInput() {
    return this._autoMclagIcl;
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

  // med_tlvs - computed: true, optional: true, required: false
  private _medTlvs?: string[]; 
  public get medTlvs() {
    return cdktf.Fn.tolist(this.getListAttribute('med_tlvs'));
  }
  public set medTlvs(value: string[]) {
    this._medTlvs = value;
  }
  public resetMedTlvs() {
    this._medTlvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medTlvsInput() {
    return this._medTlvs;
  }

  // n8021_tlvs - computed: true, optional: true, required: false
  private _n8021Tlvs?: string[]; 
  public get n8021Tlvs() {
    return cdktf.Fn.tolist(this.getListAttribute('n8021_tlvs'));
  }
  public set n8021Tlvs(value: string[]) {
    this._n8021Tlvs = value;
  }
  public resetN8021Tlvs() {
    this._n8021Tlvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n8021TlvsInput() {
    return this._n8021Tlvs;
  }

  // n8023_tlvs - computed: true, optional: true, required: false
  private _n8023Tlvs?: string[]; 
  public get n8023Tlvs() {
    return cdktf.Fn.tolist(this.getListAttribute('n8023_tlvs'));
  }
  public set n8023Tlvs(value: string[]) {
    this._n8023Tlvs = value;
  }
  public resetN8023Tlvs() {
    this._n8023Tlvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n8023TlvsInput() {
    return this._n8023Tlvs;
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

  // custom_tlvs - computed: false, optional: true, required: false
  private _customTlvs = new SwitchcontrollerLldpprofileCustomTlvsList(this, "custom_tlvs", false);
  public get customTlvs() {
    return this._customTlvs;
  }
  public putCustomTlvs(value: SwitchcontrollerLldpprofileCustomTlvs[] | cdktf.IResolvable) {
    this._customTlvs.internalValue = value;
  }
  public resetCustomTlvs() {
    this._customTlvs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTlvsInput() {
    return this._customTlvs.internalValue;
  }

  // med_location_service - computed: false, optional: true, required: false
  private _medLocationService = new SwitchcontrollerLldpprofileMedLocationServiceList(this, "med_location_service", false);
  public get medLocationService() {
    return this._medLocationService;
  }
  public putMedLocationService(value: SwitchcontrollerLldpprofileMedLocationService[] | cdktf.IResolvable) {
    this._medLocationService.internalValue = value;
  }
  public resetMedLocationService() {
    this._medLocationService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medLocationServiceInput() {
    return this._medLocationService.internalValue;
  }

  // med_network_policy - computed: false, optional: true, required: false
  private _medNetworkPolicy = new SwitchcontrollerLldpprofileMedNetworkPolicyList(this, "med_network_policy", false);
  public get medNetworkPolicy() {
    return this._medNetworkPolicy;
  }
  public putMedNetworkPolicy(value: SwitchcontrollerLldpprofileMedNetworkPolicy[] | cdktf.IResolvable) {
    this._medNetworkPolicy.internalValue = value;
  }
  public resetMedNetworkPolicy() {
    this._medNetworkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medNetworkPolicyInput() {
    return this._medNetworkPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_isl: cdktf.stringToTerraform(this._autoIsl),
      auto_isl_auth: cdktf.stringToTerraform(this._autoIslAuth),
      auto_isl_auth_encrypt: cdktf.stringToTerraform(this._autoIslAuthEncrypt),
      auto_isl_auth_identity: cdktf.stringToTerraform(this._autoIslAuthIdentity),
      auto_isl_auth_macsec_profile: cdktf.stringToTerraform(this._autoIslAuthMacsecProfile),
      auto_isl_auth_reauth: cdktf.numberToTerraform(this._autoIslAuthReauth),
      auto_isl_auth_user: cdktf.stringToTerraform(this._autoIslAuthUser),
      auto_isl_hello_timer: cdktf.numberToTerraform(this._autoIslHelloTimer),
      auto_isl_port_group: cdktf.numberToTerraform(this._autoIslPortGroup),
      auto_isl_receive_timeout: cdktf.numberToTerraform(this._autoIslReceiveTimeout),
      auto_mclag_icl: cdktf.stringToTerraform(this._autoMclagIcl),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      med_tlvs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._medTlvs),
      n8021_tlvs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._n8021Tlvs),
      n8023_tlvs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._n8023Tlvs),
      name: cdktf.stringToTerraform(this._name),
      custom_tlvs: cdktf.listMapper(switchcontrollerLldpprofileCustomTlvsToTerraform, true)(this._customTlvs.internalValue),
      med_location_service: cdktf.listMapper(switchcontrollerLldpprofileMedLocationServiceToTerraform, true)(this._medLocationService.internalValue),
      med_network_policy: cdktf.listMapper(switchcontrollerLldpprofileMedNetworkPolicyToTerraform, true)(this._medNetworkPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_isl: {
        value: cdktf.stringToHclTerraform(this._autoIsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_isl_auth: {
        value: cdktf.stringToHclTerraform(this._autoIslAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_isl_auth_encrypt: {
        value: cdktf.stringToHclTerraform(this._autoIslAuthEncrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_isl_auth_identity: {
        value: cdktf.stringToHclTerraform(this._autoIslAuthIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_isl_auth_macsec_profile: {
        value: cdktf.stringToHclTerraform(this._autoIslAuthMacsecProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_isl_auth_reauth: {
        value: cdktf.numberToHclTerraform(this._autoIslAuthReauth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_isl_auth_user: {
        value: cdktf.stringToHclTerraform(this._autoIslAuthUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_isl_hello_timer: {
        value: cdktf.numberToHclTerraform(this._autoIslHelloTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_isl_port_group: {
        value: cdktf.numberToHclTerraform(this._autoIslPortGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_isl_receive_timeout: {
        value: cdktf.numberToHclTerraform(this._autoIslReceiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_mclag_icl: {
        value: cdktf.stringToHclTerraform(this._autoMclagIcl),
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
      med_tlvs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._medTlvs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      n8021_tlvs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._n8021Tlvs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      n8023_tlvs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._n8023Tlvs),
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
      custom_tlvs: {
        value: cdktf.listMapperHcl(switchcontrollerLldpprofileCustomTlvsToHclTerraform, true)(this._customTlvs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerLldpprofileCustomTlvsList",
      },
      med_location_service: {
        value: cdktf.listMapperHcl(switchcontrollerLldpprofileMedLocationServiceToHclTerraform, true)(this._medLocationService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerLldpprofileMedLocationServiceList",
      },
      med_network_policy: {
        value: cdktf.listMapperHcl(switchcontrollerLldpprofileMedNetworkPolicyToHclTerraform, true)(this._medNetworkPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerLldpprofileMedNetworkPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
