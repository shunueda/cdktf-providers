// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessProvisionSsidCreateProvisionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#id WirelessProvisionSsidCreateProvision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#parameters WirelessProvisionSsidCreateProvision#parameters}
  */
  readonly parameters: WirelessProvisionSsidCreateProvisionParameters;
}
export interface WirelessProvisionSsidCreateProvisionItem {
}

export function wirelessProvisionSsidCreateProvisionItemToTerraform(struct?: WirelessProvisionSsidCreateProvisionItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessProvisionSsidCreateProvisionItemToHclTerraform(struct?: WirelessProvisionSsidCreateProvisionItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessProvisionSsidCreateProvisionItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WirelessProvisionSsidCreateProvisionItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionSsidCreateProvisionItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // execution_status_url - computed: true, optional: false, required: false
  public get executionStatusUrl() {
    return this.getStringAttribute('execution_status_url');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class WirelessProvisionSsidCreateProvisionItemList extends cdktf.ComplexList {

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
  public get(index: number): WirelessProvisionSsidCreateProvisionItemOutputReference {
    return new WirelessProvisionSsidCreateProvisionItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProvisionSsidCreateProvisionParametersFlexConnect {
  /**
  * Enable Flex Connect
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#enable_flex_connect WirelessProvisionSsidCreateProvision#enable_flex_connect}
  */
  readonly enableFlexConnect?: string;
  /**
  * Local To Vlan (range is 1 to 4094)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#local_to_vlan WirelessProvisionSsidCreateProvision#local_to_vlan}
  */
  readonly localToVlan?: number;
}

export function wirelessProvisionSsidCreateProvisionParametersFlexConnectToTerraform(struct?: WirelessProvisionSsidCreateProvisionParametersFlexConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_flex_connect: cdktf.stringToTerraform(struct!.enableFlexConnect),
    local_to_vlan: cdktf.numberToTerraform(struct!.localToVlan),
  }
}


export function wirelessProvisionSsidCreateProvisionParametersFlexConnectToHclTerraform(struct?: WirelessProvisionSsidCreateProvisionParametersFlexConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_flex_connect: {
      value: cdktf.stringToHclTerraform(struct!.enableFlexConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_to_vlan: {
      value: cdktf.numberToHclTerraform(struct!.localToVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProvisionSsidCreateProvisionParametersFlexConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProvisionSsidCreateProvisionParametersFlexConnect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableFlexConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFlexConnect = this._enableFlexConnect;
    }
    if (this._localToVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.localToVlan = this._localToVlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionSsidCreateProvisionParametersFlexConnect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableFlexConnect = undefined;
      this._localToVlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableFlexConnect = value.enableFlexConnect;
      this._localToVlan = value.localToVlan;
    }
  }

  // enable_flex_connect - computed: true, optional: true, required: false
  private _enableFlexConnect?: string; 
  public get enableFlexConnect() {
    return this.getStringAttribute('enable_flex_connect');
  }
  public set enableFlexConnect(value: string) {
    this._enableFlexConnect = value;
  }
  public resetEnableFlexConnect() {
    this._enableFlexConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFlexConnectInput() {
    return this._enableFlexConnect;
  }

  // local_to_vlan - computed: true, optional: true, required: false
  private _localToVlan?: number; 
  public get localToVlan() {
    return this.getNumberAttribute('local_to_vlan');
  }
  public set localToVlan(value: number) {
    this._localToVlan = value;
  }
  public resetLocalToVlan() {
    this._localToVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localToVlanInput() {
    return this._localToVlan;
  }
}

export class WirelessProvisionSsidCreateProvisionParametersFlexConnectList extends cdktf.ComplexList {
  public internalValue? : WirelessProvisionSsidCreateProvisionParametersFlexConnect[] | cdktf.IResolvable

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
  public get(index: number): WirelessProvisionSsidCreateProvisionParametersFlexConnectOutputReference {
    return new WirelessProvisionSsidCreateProvisionParametersFlexConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProvisionSsidCreateProvisionParametersSsidDetails {
  /**
  * Enable Broadcast SSID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#enable_broadcast_ssi_d WirelessProvisionSsidCreateProvision#enable_broadcast_ssi_d}
  */
  readonly enableBroadcastSsiD?: string;
  /**
  * Enable Fast Lane
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#enable_fast_lane WirelessProvisionSsidCreateProvision#enable_fast_lane}
  */
  readonly enableFastLane?: string;
  /**
  * Enable MAC Filtering
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#enable_mac_filtering WirelessProvisionSsidCreateProvision#enable_mac_filtering}
  */
  readonly enableMacFiltering?: string;
  /**
  * Fast Transition
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#fast_transition WirelessProvisionSsidCreateProvision#fast_transition}
  */
  readonly fastTransition?: string;
  /**
  * SSID Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#name WirelessProvisionSsidCreateProvision#name}
  */
  readonly name?: string;
  /**
  * Pass Phrase ( Only applicable for SSID with PERSONAL auth type )
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#passphrase WirelessProvisionSsidCreateProvision#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Radio Policy
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#radio_policy WirelessProvisionSsidCreateProvision#radio_policy}
  */
  readonly radioPolicy?: string;
  /**
  * Security Level(For guest SSID OPEN/WEB_AUTH, For Enterprise SSID ENTERPRISE/PERSONAL/OPEN)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#security_level WirelessProvisionSsidCreateProvision#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Traffic Type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#traffic_type WirelessProvisionSsidCreateProvision#traffic_type}
  */
  readonly trafficType?: string;
  /**
  * Web Auth URL
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#web_auth_url WirelessProvisionSsidCreateProvision#web_auth_url}
  */
  readonly webAuthUrl?: string;
}

export function wirelessProvisionSsidCreateProvisionParametersSsidDetailsToTerraform(struct?: WirelessProvisionSsidCreateProvisionParametersSsidDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_broadcast_ssi_d: cdktf.stringToTerraform(struct!.enableBroadcastSsiD),
    enable_fast_lane: cdktf.stringToTerraform(struct!.enableFastLane),
    enable_mac_filtering: cdktf.stringToTerraform(struct!.enableMacFiltering),
    fast_transition: cdktf.stringToTerraform(struct!.fastTransition),
    name: cdktf.stringToTerraform(struct!.name),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    radio_policy: cdktf.stringToTerraform(struct!.radioPolicy),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    traffic_type: cdktf.stringToTerraform(struct!.trafficType),
    web_auth_url: cdktf.stringToTerraform(struct!.webAuthUrl),
  }
}


export function wirelessProvisionSsidCreateProvisionParametersSsidDetailsToHclTerraform(struct?: WirelessProvisionSsidCreateProvisionParametersSsidDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_broadcast_ssi_d: {
      value: cdktf.stringToHclTerraform(struct!.enableBroadcastSsiD),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_fast_lane: {
      value: cdktf.stringToHclTerraform(struct!.enableFastLane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_mac_filtering: {
      value: cdktf.stringToHclTerraform(struct!.enableMacFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fast_transition: {
      value: cdktf.stringToHclTerraform(struct!.fastTransition),
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
    radio_policy: {
      value: cdktf.stringToHclTerraform(struct!.radioPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_type: {
      value: cdktf.stringToHclTerraform(struct!.trafficType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_auth_url: {
      value: cdktf.stringToHclTerraform(struct!.webAuthUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProvisionSsidCreateProvisionParametersSsidDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProvisionSsidCreateProvisionParametersSsidDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBroadcastSsiD !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBroadcastSsiD = this._enableBroadcastSsiD;
    }
    if (this._enableFastLane !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFastLane = this._enableFastLane;
    }
    if (this._enableMacFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMacFiltering = this._enableMacFiltering;
    }
    if (this._fastTransition !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTransition = this._fastTransition;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._radioPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioPolicy = this._radioPolicy;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._trafficType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficType = this._trafficType;
    }
    if (this._webAuthUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAuthUrl = this._webAuthUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionSsidCreateProvisionParametersSsidDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableBroadcastSsiD = undefined;
      this._enableFastLane = undefined;
      this._enableMacFiltering = undefined;
      this._fastTransition = undefined;
      this._name = undefined;
      this._passphrase = undefined;
      this._radioPolicy = undefined;
      this._securityLevel = undefined;
      this._trafficType = undefined;
      this._webAuthUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableBroadcastSsiD = value.enableBroadcastSsiD;
      this._enableFastLane = value.enableFastLane;
      this._enableMacFiltering = value.enableMacFiltering;
      this._fastTransition = value.fastTransition;
      this._name = value.name;
      this._passphrase = value.passphrase;
      this._radioPolicy = value.radioPolicy;
      this._securityLevel = value.securityLevel;
      this._trafficType = value.trafficType;
      this._webAuthUrl = value.webAuthUrl;
    }
  }

  // enable_broadcast_ssi_d - computed: true, optional: true, required: false
  private _enableBroadcastSsiD?: string; 
  public get enableBroadcastSsiD() {
    return this.getStringAttribute('enable_broadcast_ssi_d');
  }
  public set enableBroadcastSsiD(value: string) {
    this._enableBroadcastSsiD = value;
  }
  public resetEnableBroadcastSsiD() {
    this._enableBroadcastSsiD = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBroadcastSsiDInput() {
    return this._enableBroadcastSsiD;
  }

  // enable_fast_lane - computed: true, optional: true, required: false
  private _enableFastLane?: string; 
  public get enableFastLane() {
    return this.getStringAttribute('enable_fast_lane');
  }
  public set enableFastLane(value: string) {
    this._enableFastLane = value;
  }
  public resetEnableFastLane() {
    this._enableFastLane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFastLaneInput() {
    return this._enableFastLane;
  }

  // enable_mac_filtering - computed: true, optional: true, required: false
  private _enableMacFiltering?: string; 
  public get enableMacFiltering() {
    return this.getStringAttribute('enable_mac_filtering');
  }
  public set enableMacFiltering(value: string) {
    this._enableMacFiltering = value;
  }
  public resetEnableMacFiltering() {
    this._enableMacFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMacFilteringInput() {
    return this._enableMacFiltering;
  }

  // fast_transition - computed: true, optional: true, required: false
  private _fastTransition?: string; 
  public get fastTransition() {
    return this.getStringAttribute('fast_transition');
  }
  public set fastTransition(value: string) {
    this._fastTransition = value;
  }
  public resetFastTransition() {
    this._fastTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTransitionInput() {
    return this._fastTransition;
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

  // passphrase - computed: true, optional: true, required: false
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

  // radio_policy - computed: true, optional: true, required: false
  private _radioPolicy?: string; 
  public get radioPolicy() {
    return this.getStringAttribute('radio_policy');
  }
  public set radioPolicy(value: string) {
    this._radioPolicy = value;
  }
  public resetRadioPolicy() {
    this._radioPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioPolicyInput() {
    return this._radioPolicy;
  }

  // security_level - computed: true, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // traffic_type - computed: true, optional: true, required: false
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  public resetTrafficType() {
    this._trafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }

  // web_auth_url - computed: true, optional: true, required: false
  private _webAuthUrl?: string; 
  public get webAuthUrl() {
    return this.getStringAttribute('web_auth_url');
  }
  public set webAuthUrl(value: string) {
    this._webAuthUrl = value;
  }
  public resetWebAuthUrl() {
    this._webAuthUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAuthUrlInput() {
    return this._webAuthUrl;
  }
}

export class WirelessProvisionSsidCreateProvisionParametersSsidDetailsList extends cdktf.ComplexList {
  public internalValue? : WirelessProvisionSsidCreateProvisionParametersSsidDetails[] | cdktf.IResolvable

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
  public get(index: number): WirelessProvisionSsidCreateProvisionParametersSsidDetailsOutputReference {
    return new WirelessProvisionSsidCreateProvisionParametersSsidDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProvisionSsidCreateProvisionParameters {
  /**
  * Enable SSID for Fabric
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#enable_fabric WirelessProvisionSsidCreateProvision#enable_fabric}
  */
  readonly enableFabric?: string;
  /**
  * Managed AP Locations (Enter entire Site(s) hierarchy)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#managed_aplocations WirelessProvisionSsidCreateProvision#managed_aplocations}
  */
  readonly managedAplocations?: string[];
  /**
  * Device Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#persistbapioutput WirelessProvisionSsidCreateProvision#persistbapioutput}
  */
  readonly persistbapioutput?: string;
  /**
  * SSID Type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#ssid_type WirelessProvisionSsidCreateProvision#ssid_type}
  */
  readonly ssidType?: string;
  /**
  * flex_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#flex_connect WirelessProvisionSsidCreateProvision#flex_connect}
  */
  readonly flexConnect?: WirelessProvisionSsidCreateProvisionParametersFlexConnect[] | cdktf.IResolvable;
  /**
  * ssid_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#ssid_details WirelessProvisionSsidCreateProvision#ssid_details}
  */
  readonly ssidDetails?: WirelessProvisionSsidCreateProvisionParametersSsidDetails[] | cdktf.IResolvable;
}

export function wirelessProvisionSsidCreateProvisionParametersToTerraform(struct?: WirelessProvisionSsidCreateProvisionParametersOutputReference | WirelessProvisionSsidCreateProvisionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_fabric: cdktf.stringToTerraform(struct!.enableFabric),
    managed_aplocations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedAplocations),
    persistbapioutput: cdktf.stringToTerraform(struct!.persistbapioutput),
    ssid_type: cdktf.stringToTerraform(struct!.ssidType),
    flex_connect: cdktf.listMapper(wirelessProvisionSsidCreateProvisionParametersFlexConnectToTerraform, true)(struct!.flexConnect),
    ssid_details: cdktf.listMapper(wirelessProvisionSsidCreateProvisionParametersSsidDetailsToTerraform, true)(struct!.ssidDetails),
  }
}


export function wirelessProvisionSsidCreateProvisionParametersToHclTerraform(struct?: WirelessProvisionSsidCreateProvisionParametersOutputReference | WirelessProvisionSsidCreateProvisionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_fabric: {
      value: cdktf.stringToHclTerraform(struct!.enableFabric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_aplocations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedAplocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    persistbapioutput: {
      value: cdktf.stringToHclTerraform(struct!.persistbapioutput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssid_type: {
      value: cdktf.stringToHclTerraform(struct!.ssidType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flex_connect: {
      value: cdktf.listMapperHcl(wirelessProvisionSsidCreateProvisionParametersFlexConnectToHclTerraform, true)(struct!.flexConnect),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessProvisionSsidCreateProvisionParametersFlexConnectList",
    },
    ssid_details: {
      value: cdktf.listMapperHcl(wirelessProvisionSsidCreateProvisionParametersSsidDetailsToHclTerraform, true)(struct!.ssidDetails),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessProvisionSsidCreateProvisionParametersSsidDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProvisionSsidCreateProvisionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelessProvisionSsidCreateProvisionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableFabric !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFabric = this._enableFabric;
    }
    if (this._managedAplocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedAplocations = this._managedAplocations;
    }
    if (this._persistbapioutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistbapioutput = this._persistbapioutput;
    }
    if (this._ssidType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssidType = this._ssidType;
    }
    if (this._flexConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexConnect = this._flexConnect?.internalValue;
    }
    if (this._ssidDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssidDetails = this._ssidDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionSsidCreateProvisionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableFabric = undefined;
      this._managedAplocations = undefined;
      this._persistbapioutput = undefined;
      this._ssidType = undefined;
      this._flexConnect.internalValue = undefined;
      this._ssidDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableFabric = value.enableFabric;
      this._managedAplocations = value.managedAplocations;
      this._persistbapioutput = value.persistbapioutput;
      this._ssidType = value.ssidType;
      this._flexConnect.internalValue = value.flexConnect;
      this._ssidDetails.internalValue = value.ssidDetails;
    }
  }

  // enable_fabric - computed: true, optional: true, required: false
  private _enableFabric?: string; 
  public get enableFabric() {
    return this.getStringAttribute('enable_fabric');
  }
  public set enableFabric(value: string) {
    this._enableFabric = value;
  }
  public resetEnableFabric() {
    this._enableFabric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFabricInput() {
    return this._enableFabric;
  }

  // managed_aplocations - computed: true, optional: true, required: false
  private _managedAplocations?: string[]; 
  public get managedAplocations() {
    return this.getListAttribute('managed_aplocations');
  }
  public set managedAplocations(value: string[]) {
    this._managedAplocations = value;
  }
  public resetManagedAplocations() {
    this._managedAplocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAplocationsInput() {
    return this._managedAplocations;
  }

  // persistbapioutput - computed: false, optional: true, required: false
  private _persistbapioutput?: string; 
  public get persistbapioutput() {
    return this.getStringAttribute('persistbapioutput');
  }
  public set persistbapioutput(value: string) {
    this._persistbapioutput = value;
  }
  public resetPersistbapioutput() {
    this._persistbapioutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistbapioutputInput() {
    return this._persistbapioutput;
  }

  // ssid_type - computed: true, optional: true, required: false
  private _ssidType?: string; 
  public get ssidType() {
    return this.getStringAttribute('ssid_type');
  }
  public set ssidType(value: string) {
    this._ssidType = value;
  }
  public resetSsidType() {
    this._ssidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidTypeInput() {
    return this._ssidType;
  }

  // flex_connect - computed: false, optional: true, required: false
  private _flexConnect = new WirelessProvisionSsidCreateProvisionParametersFlexConnectList(this, "flex_connect", false);
  public get flexConnect() {
    return this._flexConnect;
  }
  public putFlexConnect(value: WirelessProvisionSsidCreateProvisionParametersFlexConnect[] | cdktf.IResolvable) {
    this._flexConnect.internalValue = value;
  }
  public resetFlexConnect() {
    this._flexConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexConnectInput() {
    return this._flexConnect.internalValue;
  }

  // ssid_details - computed: false, optional: true, required: false
  private _ssidDetails = new WirelessProvisionSsidCreateProvisionParametersSsidDetailsList(this, "ssid_details", false);
  public get ssidDetails() {
    return this._ssidDetails;
  }
  public putSsidDetails(value: WirelessProvisionSsidCreateProvisionParametersSsidDetails[] | cdktf.IResolvable) {
    this._ssidDetails.internalValue = value;
  }
  public resetSsidDetails() {
    this._ssidDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidDetailsInput() {
    return this._ssidDetails.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision dnacenter_wireless_provision_ssid_create_provision}
*/
export class WirelessProvisionSsidCreateProvision extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_wireless_provision_ssid_create_provision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessProvisionSsidCreateProvision resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessProvisionSsidCreateProvision to import
  * @param importFromId The id of the existing WirelessProvisionSsidCreateProvision that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessProvisionSsidCreateProvision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_wireless_provision_ssid_create_provision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_create_provision dnacenter_wireless_provision_ssid_create_provision} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessProvisionSsidCreateProvisionConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessProvisionSsidCreateProvisionConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_wireless_provision_ssid_create_provision',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new WirelessProvisionSsidCreateProvisionItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new WirelessProvisionSsidCreateProvisionParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: WirelessProvisionSsidCreateProvisionParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: wirelessProvisionSsidCreateProvisionParametersToTerraform(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: wirelessProvisionSsidCreateProvisionParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessProvisionSsidCreateProvisionParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
