// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointcontrolProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#description EndpointcontrolProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#dynamic_sort_subtable EndpointcontrolProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#get_all_tables EndpointcontrolProfile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#id EndpointcontrolProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#profile_name EndpointcontrolProfile#profile_name}
  */
  readonly profileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#replacemsg_override_group EndpointcontrolProfile#replacemsg_override_group}
  */
  readonly replacemsgOverrideGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#vdomparam EndpointcontrolProfile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * device_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#device_groups EndpointcontrolProfile#device_groups}
  */
  readonly deviceGroups?: EndpointcontrolProfileDeviceGroups[] | cdktf.IResolvable;
  /**
  * forticlient_android_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_android_settings EndpointcontrolProfile#forticlient_android_settings}
  */
  readonly forticlientAndroidSettings?: EndpointcontrolProfileForticlientAndroidSettings;
  /**
  * forticlient_ios_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_ios_settings EndpointcontrolProfile#forticlient_ios_settings}
  */
  readonly forticlientIosSettings?: EndpointcontrolProfileForticlientIosSettings;
  /**
  * forticlient_winmac_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_winmac_settings EndpointcontrolProfile#forticlient_winmac_settings}
  */
  readonly forticlientWinmacSettings?: EndpointcontrolProfileForticlientWinmacSettings;
  /**
  * on_net_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#on_net_addr EndpointcontrolProfile#on_net_addr}
  */
  readonly onNetAddr?: EndpointcontrolProfileOnNetAddr[] | cdktf.IResolvable;
  /**
  * src_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#src_addr EndpointcontrolProfile#src_addr}
  */
  readonly srcAddr?: EndpointcontrolProfileSrcAddr[] | cdktf.IResolvable;
  /**
  * user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#user_groups EndpointcontrolProfile#user_groups}
  */
  readonly userGroups?: EndpointcontrolProfileUserGroups[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#users EndpointcontrolProfile#users}
  */
  readonly users?: EndpointcontrolProfileUsers[] | cdktf.IResolvable;
}
export interface EndpointcontrolProfileDeviceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#name EndpointcontrolProfile#name}
  */
  readonly name?: string;
}

export function endpointcontrolProfileDeviceGroupsToTerraform(struct?: EndpointcontrolProfileDeviceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function endpointcontrolProfileDeviceGroupsToHclTerraform(struct?: EndpointcontrolProfileDeviceGroups | cdktf.IResolvable): any {
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

export class EndpointcontrolProfileDeviceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointcontrolProfileDeviceGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EndpointcontrolProfileDeviceGroups | cdktf.IResolvable | undefined) {
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

export class EndpointcontrolProfileDeviceGroupsList extends cdktf.ComplexList {
  public internalValue? : EndpointcontrolProfileDeviceGroups[] | cdktf.IResolvable

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
  public get(index: number): EndpointcontrolProfileDeviceGroupsOutputReference {
    return new EndpointcontrolProfileDeviceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#auth_method EndpointcontrolProfile#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#name EndpointcontrolProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#preshared_key EndpointcontrolProfile#preshared_key}
  */
  readonly presharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#remote_gw EndpointcontrolProfile#remote_gw}
  */
  readonly remoteGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#sslvpn_access_port EndpointcontrolProfile#sslvpn_access_port}
  */
  readonly sslvpnAccessPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#sslvpn_require_certificate EndpointcontrolProfile#sslvpn_require_certificate}
  */
  readonly sslvpnRequireCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#type EndpointcontrolProfile#type}
  */
  readonly type?: string;
}

export function endpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettingsToTerraform(struct?: EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    name: cdktf.stringToTerraform(struct!.name),
    preshared_key: cdktf.stringToTerraform(struct!.presharedKey),
    remote_gw: cdktf.stringToTerraform(struct!.remoteGw),
    sslvpn_access_port: cdktf.numberToTerraform(struct!.sslvpnAccessPort),
    sslvpn_require_certificate: cdktf.stringToTerraform(struct!.sslvpnRequireCertificate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function endpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettingsToHclTerraform(struct?: EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
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
    preshared_key: {
      value: cdktf.stringToHclTerraform(struct!.presharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_gw: {
      value: cdktf.stringToHclTerraform(struct!.remoteGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_access_port: {
      value: cdktf.numberToHclTerraform(struct!.sslvpnAccessPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslvpn_require_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnRequireCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.presharedKey = this._presharedKey;
    }
    if (this._remoteGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteGw = this._remoteGw;
    }
    if (this._sslvpnAccessPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnAccessPort = this._sslvpnAccessPort;
    }
    if (this._sslvpnRequireCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnRequireCertificate = this._sslvpnRequireCertificate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
      this._name = undefined;
      this._presharedKey = undefined;
      this._remoteGw = undefined;
      this._sslvpnAccessPort = undefined;
      this._sslvpnRequireCertificate = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
      this._name = value.name;
      this._presharedKey = value.presharedKey;
      this._remoteGw = value.remoteGw;
      this._sslvpnAccessPort = value.sslvpnAccessPort;
      this._sslvpnRequireCertificate = value.sslvpnRequireCertificate;
      this._type = value.type;
    }
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
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

  // preshared_key - computed: false, optional: true, required: false
  private _presharedKey?: string; 
  public get presharedKey() {
    return this.getStringAttribute('preshared_key');
  }
  public set presharedKey(value: string) {
    this._presharedKey = value;
  }
  public resetPresharedKey() {
    this._presharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presharedKeyInput() {
    return this._presharedKey;
  }

  // remote_gw - computed: false, optional: true, required: false
  private _remoteGw?: string; 
  public get remoteGw() {
    return this.getStringAttribute('remote_gw');
  }
  public set remoteGw(value: string) {
    this._remoteGw = value;
  }
  public resetRemoteGw() {
    this._remoteGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwInput() {
    return this._remoteGw;
  }

  // sslvpn_access_port - computed: false, optional: true, required: false
  private _sslvpnAccessPort?: number; 
  public get sslvpnAccessPort() {
    return this.getNumberAttribute('sslvpn_access_port');
  }
  public set sslvpnAccessPort(value: number) {
    this._sslvpnAccessPort = value;
  }
  public resetSslvpnAccessPort() {
    this._sslvpnAccessPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnAccessPortInput() {
    return this._sslvpnAccessPort;
  }

  // sslvpn_require_certificate - computed: false, optional: true, required: false
  private _sslvpnRequireCertificate?: string; 
  public get sslvpnRequireCertificate() {
    return this.getStringAttribute('sslvpn_require_certificate');
  }
  public set sslvpnRequireCertificate(value: string) {
    this._sslvpnRequireCertificate = value;
  }
  public resetSslvpnRequireCertificate() {
    this._sslvpnRequireCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnRequireCertificateInput() {
    return this._sslvpnRequireCertificate;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettingsList extends cdktf.ComplexList {
  public internalValue? : EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettings[] | cdktf.IResolvable

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
  public get(index: number): EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettingsOutputReference {
    return new EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointcontrolProfileForticlientAndroidSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#disable_wf_when_protected EndpointcontrolProfile#disable_wf_when_protected}
  */
  readonly disableWfWhenProtected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_advanced_vpn EndpointcontrolProfile#forticlient_advanced_vpn}
  */
  readonly forticlientAdvancedVpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_advanced_vpn_buffer EndpointcontrolProfile#forticlient_advanced_vpn_buffer}
  */
  readonly forticlientAdvancedVpnBuffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_vpn_provisioning EndpointcontrolProfile#forticlient_vpn_provisioning}
  */
  readonly forticlientVpnProvisioning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_wf EndpointcontrolProfile#forticlient_wf}
  */
  readonly forticlientWf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_wf_profile EndpointcontrolProfile#forticlient_wf_profile}
  */
  readonly forticlientWfProfile?: string;
  /**
  * forticlient_vpn_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_vpn_settings EndpointcontrolProfile#forticlient_vpn_settings}
  */
  readonly forticlientVpnSettings?: EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettings[] | cdktf.IResolvable;
}

export function endpointcontrolProfileForticlientAndroidSettingsToTerraform(struct?: EndpointcontrolProfileForticlientAndroidSettingsOutputReference | EndpointcontrolProfileForticlientAndroidSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_wf_when_protected: cdktf.stringToTerraform(struct!.disableWfWhenProtected),
    forticlient_advanced_vpn: cdktf.stringToTerraform(struct!.forticlientAdvancedVpn),
    forticlient_advanced_vpn_buffer: cdktf.stringToTerraform(struct!.forticlientAdvancedVpnBuffer),
    forticlient_vpn_provisioning: cdktf.stringToTerraform(struct!.forticlientVpnProvisioning),
    forticlient_wf: cdktf.stringToTerraform(struct!.forticlientWf),
    forticlient_wf_profile: cdktf.stringToTerraform(struct!.forticlientWfProfile),
    forticlient_vpn_settings: cdktf.listMapper(endpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettingsToTerraform, true)(struct!.forticlientVpnSettings),
  }
}


export function endpointcontrolProfileForticlientAndroidSettingsToHclTerraform(struct?: EndpointcontrolProfileForticlientAndroidSettingsOutputReference | EndpointcontrolProfileForticlientAndroidSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_wf_when_protected: {
      value: cdktf.stringToHclTerraform(struct!.disableWfWhenProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_advanced_vpn: {
      value: cdktf.stringToHclTerraform(struct!.forticlientAdvancedVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_advanced_vpn_buffer: {
      value: cdktf.stringToHclTerraform(struct!.forticlientAdvancedVpnBuffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_vpn_provisioning: {
      value: cdktf.stringToHclTerraform(struct!.forticlientVpnProvisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_wf: {
      value: cdktf.stringToHclTerraform(struct!.forticlientWf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_wf_profile: {
      value: cdktf.stringToHclTerraform(struct!.forticlientWfProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_vpn_settings: {
      value: cdktf.listMapperHcl(endpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettingsToHclTerraform, true)(struct!.forticlientVpnSettings),
      isBlock: true,
      type: "list",
      storageClassType: "EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointcontrolProfileForticlientAndroidSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EndpointcontrolProfileForticlientAndroidSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableWfWhenProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWfWhenProtected = this._disableWfWhenProtected;
    }
    if (this._forticlientAdvancedVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientAdvancedVpn = this._forticlientAdvancedVpn;
    }
    if (this._forticlientAdvancedVpnBuffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientAdvancedVpnBuffer = this._forticlientAdvancedVpnBuffer;
    }
    if (this._forticlientVpnProvisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientVpnProvisioning = this._forticlientVpnProvisioning;
    }
    if (this._forticlientWf !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientWf = this._forticlientWf;
    }
    if (this._forticlientWfProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientWfProfile = this._forticlientWfProfile;
    }
    if (this._forticlientVpnSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientVpnSettings = this._forticlientVpnSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointcontrolProfileForticlientAndroidSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableWfWhenProtected = undefined;
      this._forticlientAdvancedVpn = undefined;
      this._forticlientAdvancedVpnBuffer = undefined;
      this._forticlientVpnProvisioning = undefined;
      this._forticlientWf = undefined;
      this._forticlientWfProfile = undefined;
      this._forticlientVpnSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableWfWhenProtected = value.disableWfWhenProtected;
      this._forticlientAdvancedVpn = value.forticlientAdvancedVpn;
      this._forticlientAdvancedVpnBuffer = value.forticlientAdvancedVpnBuffer;
      this._forticlientVpnProvisioning = value.forticlientVpnProvisioning;
      this._forticlientWf = value.forticlientWf;
      this._forticlientWfProfile = value.forticlientWfProfile;
      this._forticlientVpnSettings.internalValue = value.forticlientVpnSettings;
    }
  }

  // disable_wf_when_protected - computed: false, optional: true, required: false
  private _disableWfWhenProtected?: string; 
  public get disableWfWhenProtected() {
    return this.getStringAttribute('disable_wf_when_protected');
  }
  public set disableWfWhenProtected(value: string) {
    this._disableWfWhenProtected = value;
  }
  public resetDisableWfWhenProtected() {
    this._disableWfWhenProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWfWhenProtectedInput() {
    return this._disableWfWhenProtected;
  }

  // forticlient_advanced_vpn - computed: false, optional: true, required: false
  private _forticlientAdvancedVpn?: string; 
  public get forticlientAdvancedVpn() {
    return this.getStringAttribute('forticlient_advanced_vpn');
  }
  public set forticlientAdvancedVpn(value: string) {
    this._forticlientAdvancedVpn = value;
  }
  public resetForticlientAdvancedVpn() {
    this._forticlientAdvancedVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientAdvancedVpnInput() {
    return this._forticlientAdvancedVpn;
  }

  // forticlient_advanced_vpn_buffer - computed: false, optional: true, required: false
  private _forticlientAdvancedVpnBuffer?: string; 
  public get forticlientAdvancedVpnBuffer() {
    return this.getStringAttribute('forticlient_advanced_vpn_buffer');
  }
  public set forticlientAdvancedVpnBuffer(value: string) {
    this._forticlientAdvancedVpnBuffer = value;
  }
  public resetForticlientAdvancedVpnBuffer() {
    this._forticlientAdvancedVpnBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientAdvancedVpnBufferInput() {
    return this._forticlientAdvancedVpnBuffer;
  }

  // forticlient_vpn_provisioning - computed: false, optional: true, required: false
  private _forticlientVpnProvisioning?: string; 
  public get forticlientVpnProvisioning() {
    return this.getStringAttribute('forticlient_vpn_provisioning');
  }
  public set forticlientVpnProvisioning(value: string) {
    this._forticlientVpnProvisioning = value;
  }
  public resetForticlientVpnProvisioning() {
    this._forticlientVpnProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientVpnProvisioningInput() {
    return this._forticlientVpnProvisioning;
  }

  // forticlient_wf - computed: false, optional: true, required: false
  private _forticlientWf?: string; 
  public get forticlientWf() {
    return this.getStringAttribute('forticlient_wf');
  }
  public set forticlientWf(value: string) {
    this._forticlientWf = value;
  }
  public resetForticlientWf() {
    this._forticlientWf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientWfInput() {
    return this._forticlientWf;
  }

  // forticlient_wf_profile - computed: false, optional: true, required: false
  private _forticlientWfProfile?: string; 
  public get forticlientWfProfile() {
    return this.getStringAttribute('forticlient_wf_profile');
  }
  public set forticlientWfProfile(value: string) {
    this._forticlientWfProfile = value;
  }
  public resetForticlientWfProfile() {
    this._forticlientWfProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientWfProfileInput() {
    return this._forticlientWfProfile;
  }

  // forticlient_vpn_settings - computed: false, optional: true, required: false
  private _forticlientVpnSettings = new EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettingsList(this, "forticlient_vpn_settings", false);
  public get forticlientVpnSettings() {
    return this._forticlientVpnSettings;
  }
  public putForticlientVpnSettings(value: EndpointcontrolProfileForticlientAndroidSettingsForticlientVpnSettings[] | cdktf.IResolvable) {
    this._forticlientVpnSettings.internalValue = value;
  }
  public resetForticlientVpnSettings() {
    this._forticlientVpnSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientVpnSettingsInput() {
    return this._forticlientVpnSettings.internalValue;
  }
}
export interface EndpointcontrolProfileForticlientIosSettingsClientVpnSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#auth_method EndpointcontrolProfile#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#name EndpointcontrolProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#preshared_key EndpointcontrolProfile#preshared_key}
  */
  readonly presharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#remote_gw EndpointcontrolProfile#remote_gw}
  */
  readonly remoteGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#sslvpn_access_port EndpointcontrolProfile#sslvpn_access_port}
  */
  readonly sslvpnAccessPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#sslvpn_require_certificate EndpointcontrolProfile#sslvpn_require_certificate}
  */
  readonly sslvpnRequireCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#type EndpointcontrolProfile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#vpn_configuration_content EndpointcontrolProfile#vpn_configuration_content}
  */
  readonly vpnConfigurationContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#vpn_configuration_name EndpointcontrolProfile#vpn_configuration_name}
  */
  readonly vpnConfigurationName?: string;
}

export function endpointcontrolProfileForticlientIosSettingsClientVpnSettingsToTerraform(struct?: EndpointcontrolProfileForticlientIosSettingsClientVpnSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    name: cdktf.stringToTerraform(struct!.name),
    preshared_key: cdktf.stringToTerraform(struct!.presharedKey),
    remote_gw: cdktf.stringToTerraform(struct!.remoteGw),
    sslvpn_access_port: cdktf.numberToTerraform(struct!.sslvpnAccessPort),
    sslvpn_require_certificate: cdktf.stringToTerraform(struct!.sslvpnRequireCertificate),
    type: cdktf.stringToTerraform(struct!.type),
    vpn_configuration_content: cdktf.stringToTerraform(struct!.vpnConfigurationContent),
    vpn_configuration_name: cdktf.stringToTerraform(struct!.vpnConfigurationName),
  }
}


export function endpointcontrolProfileForticlientIosSettingsClientVpnSettingsToHclTerraform(struct?: EndpointcontrolProfileForticlientIosSettingsClientVpnSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
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
    preshared_key: {
      value: cdktf.stringToHclTerraform(struct!.presharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_gw: {
      value: cdktf.stringToHclTerraform(struct!.remoteGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_access_port: {
      value: cdktf.numberToHclTerraform(struct!.sslvpnAccessPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslvpn_require_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnRequireCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_configuration_content: {
      value: cdktf.stringToHclTerraform(struct!.vpnConfigurationContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.vpnConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointcontrolProfileForticlientIosSettingsClientVpnSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointcontrolProfileForticlientIosSettingsClientVpnSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.presharedKey = this._presharedKey;
    }
    if (this._remoteGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteGw = this._remoteGw;
    }
    if (this._sslvpnAccessPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnAccessPort = this._sslvpnAccessPort;
    }
    if (this._sslvpnRequireCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnRequireCertificate = this._sslvpnRequireCertificate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vpnConfigurationContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnConfigurationContent = this._vpnConfigurationContent;
    }
    if (this._vpnConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnConfigurationName = this._vpnConfigurationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointcontrolProfileForticlientIosSettingsClientVpnSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
      this._name = undefined;
      this._presharedKey = undefined;
      this._remoteGw = undefined;
      this._sslvpnAccessPort = undefined;
      this._sslvpnRequireCertificate = undefined;
      this._type = undefined;
      this._vpnConfigurationContent = undefined;
      this._vpnConfigurationName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
      this._name = value.name;
      this._presharedKey = value.presharedKey;
      this._remoteGw = value.remoteGw;
      this._sslvpnAccessPort = value.sslvpnAccessPort;
      this._sslvpnRequireCertificate = value.sslvpnRequireCertificate;
      this._type = value.type;
      this._vpnConfigurationContent = value.vpnConfigurationContent;
      this._vpnConfigurationName = value.vpnConfigurationName;
    }
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
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

  // preshared_key - computed: false, optional: true, required: false
  private _presharedKey?: string; 
  public get presharedKey() {
    return this.getStringAttribute('preshared_key');
  }
  public set presharedKey(value: string) {
    this._presharedKey = value;
  }
  public resetPresharedKey() {
    this._presharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presharedKeyInput() {
    return this._presharedKey;
  }

  // remote_gw - computed: false, optional: true, required: false
  private _remoteGw?: string; 
  public get remoteGw() {
    return this.getStringAttribute('remote_gw');
  }
  public set remoteGw(value: string) {
    this._remoteGw = value;
  }
  public resetRemoteGw() {
    this._remoteGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwInput() {
    return this._remoteGw;
  }

  // sslvpn_access_port - computed: false, optional: true, required: false
  private _sslvpnAccessPort?: number; 
  public get sslvpnAccessPort() {
    return this.getNumberAttribute('sslvpn_access_port');
  }
  public set sslvpnAccessPort(value: number) {
    this._sslvpnAccessPort = value;
  }
  public resetSslvpnAccessPort() {
    this._sslvpnAccessPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnAccessPortInput() {
    return this._sslvpnAccessPort;
  }

  // sslvpn_require_certificate - computed: false, optional: true, required: false
  private _sslvpnRequireCertificate?: string; 
  public get sslvpnRequireCertificate() {
    return this.getStringAttribute('sslvpn_require_certificate');
  }
  public set sslvpnRequireCertificate(value: string) {
    this._sslvpnRequireCertificate = value;
  }
  public resetSslvpnRequireCertificate() {
    this._sslvpnRequireCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnRequireCertificateInput() {
    return this._sslvpnRequireCertificate;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpn_configuration_content - computed: false, optional: true, required: false
  private _vpnConfigurationContent?: string; 
  public get vpnConfigurationContent() {
    return this.getStringAttribute('vpn_configuration_content');
  }
  public set vpnConfigurationContent(value: string) {
    this._vpnConfigurationContent = value;
  }
  public resetVpnConfigurationContent() {
    this._vpnConfigurationContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConfigurationContentInput() {
    return this._vpnConfigurationContent;
  }

  // vpn_configuration_name - computed: false, optional: true, required: false
  private _vpnConfigurationName?: string; 
  public get vpnConfigurationName() {
    return this.getStringAttribute('vpn_configuration_name');
  }
  public set vpnConfigurationName(value: string) {
    this._vpnConfigurationName = value;
  }
  public resetVpnConfigurationName() {
    this._vpnConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConfigurationNameInput() {
    return this._vpnConfigurationName;
  }
}

export class EndpointcontrolProfileForticlientIosSettingsClientVpnSettingsList extends cdktf.ComplexList {
  public internalValue? : EndpointcontrolProfileForticlientIosSettingsClientVpnSettings[] | cdktf.IResolvable

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
  public get(index: number): EndpointcontrolProfileForticlientIosSettingsClientVpnSettingsOutputReference {
    return new EndpointcontrolProfileForticlientIosSettingsClientVpnSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointcontrolProfileForticlientIosSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#client_vpn_provisioning EndpointcontrolProfile#client_vpn_provisioning}
  */
  readonly clientVpnProvisioning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#configuration_content EndpointcontrolProfile#configuration_content}
  */
  readonly configurationContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#configuration_name EndpointcontrolProfile#configuration_name}
  */
  readonly configurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#disable_wf_when_protected EndpointcontrolProfile#disable_wf_when_protected}
  */
  readonly disableWfWhenProtected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#distribute_configuration_profile EndpointcontrolProfile#distribute_configuration_profile}
  */
  readonly distributeConfigurationProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_wf EndpointcontrolProfile#forticlient_wf}
  */
  readonly forticlientWf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_wf_profile EndpointcontrolProfile#forticlient_wf_profile}
  */
  readonly forticlientWfProfile?: string;
  /**
  * client_vpn_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#client_vpn_settings EndpointcontrolProfile#client_vpn_settings}
  */
  readonly clientVpnSettings?: EndpointcontrolProfileForticlientIosSettingsClientVpnSettings[] | cdktf.IResolvable;
}

export function endpointcontrolProfileForticlientIosSettingsToTerraform(struct?: EndpointcontrolProfileForticlientIosSettingsOutputReference | EndpointcontrolProfileForticlientIosSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_vpn_provisioning: cdktf.stringToTerraform(struct!.clientVpnProvisioning),
    configuration_content: cdktf.stringToTerraform(struct!.configurationContent),
    configuration_name: cdktf.stringToTerraform(struct!.configurationName),
    disable_wf_when_protected: cdktf.stringToTerraform(struct!.disableWfWhenProtected),
    distribute_configuration_profile: cdktf.stringToTerraform(struct!.distributeConfigurationProfile),
    forticlient_wf: cdktf.stringToTerraform(struct!.forticlientWf),
    forticlient_wf_profile: cdktf.stringToTerraform(struct!.forticlientWfProfile),
    client_vpn_settings: cdktf.listMapper(endpointcontrolProfileForticlientIosSettingsClientVpnSettingsToTerraform, true)(struct!.clientVpnSettings),
  }
}


export function endpointcontrolProfileForticlientIosSettingsToHclTerraform(struct?: EndpointcontrolProfileForticlientIosSettingsOutputReference | EndpointcontrolProfileForticlientIosSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_vpn_provisioning: {
      value: cdktf.stringToHclTerraform(struct!.clientVpnProvisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration_content: {
      value: cdktf.stringToHclTerraform(struct!.configurationContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.configurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_wf_when_protected: {
      value: cdktf.stringToHclTerraform(struct!.disableWfWhenProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_configuration_profile: {
      value: cdktf.stringToHclTerraform(struct!.distributeConfigurationProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_wf: {
      value: cdktf.stringToHclTerraform(struct!.forticlientWf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_wf_profile: {
      value: cdktf.stringToHclTerraform(struct!.forticlientWfProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_vpn_settings: {
      value: cdktf.listMapperHcl(endpointcontrolProfileForticlientIosSettingsClientVpnSettingsToHclTerraform, true)(struct!.clientVpnSettings),
      isBlock: true,
      type: "list",
      storageClassType: "EndpointcontrolProfileForticlientIosSettingsClientVpnSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointcontrolProfileForticlientIosSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EndpointcontrolProfileForticlientIosSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientVpnProvisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientVpnProvisioning = this._clientVpnProvisioning;
    }
    if (this._configurationContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationContent = this._configurationContent;
    }
    if (this._configurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationName = this._configurationName;
    }
    if (this._disableWfWhenProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWfWhenProtected = this._disableWfWhenProtected;
    }
    if (this._distributeConfigurationProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeConfigurationProfile = this._distributeConfigurationProfile;
    }
    if (this._forticlientWf !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientWf = this._forticlientWf;
    }
    if (this._forticlientWfProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientWfProfile = this._forticlientWfProfile;
    }
    if (this._clientVpnSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientVpnSettings = this._clientVpnSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointcontrolProfileForticlientIosSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientVpnProvisioning = undefined;
      this._configurationContent = undefined;
      this._configurationName = undefined;
      this._disableWfWhenProtected = undefined;
      this._distributeConfigurationProfile = undefined;
      this._forticlientWf = undefined;
      this._forticlientWfProfile = undefined;
      this._clientVpnSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientVpnProvisioning = value.clientVpnProvisioning;
      this._configurationContent = value.configurationContent;
      this._configurationName = value.configurationName;
      this._disableWfWhenProtected = value.disableWfWhenProtected;
      this._distributeConfigurationProfile = value.distributeConfigurationProfile;
      this._forticlientWf = value.forticlientWf;
      this._forticlientWfProfile = value.forticlientWfProfile;
      this._clientVpnSettings.internalValue = value.clientVpnSettings;
    }
  }

  // client_vpn_provisioning - computed: false, optional: true, required: false
  private _clientVpnProvisioning?: string; 
  public get clientVpnProvisioning() {
    return this.getStringAttribute('client_vpn_provisioning');
  }
  public set clientVpnProvisioning(value: string) {
    this._clientVpnProvisioning = value;
  }
  public resetClientVpnProvisioning() {
    this._clientVpnProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVpnProvisioningInput() {
    return this._clientVpnProvisioning;
  }

  // configuration_content - computed: false, optional: true, required: false
  private _configurationContent?: string; 
  public get configurationContent() {
    return this.getStringAttribute('configuration_content');
  }
  public set configurationContent(value: string) {
    this._configurationContent = value;
  }
  public resetConfigurationContent() {
    this._configurationContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationContentInput() {
    return this._configurationContent;
  }

  // configuration_name - computed: false, optional: true, required: false
  private _configurationName?: string; 
  public get configurationName() {
    return this.getStringAttribute('configuration_name');
  }
  public set configurationName(value: string) {
    this._configurationName = value;
  }
  public resetConfigurationName() {
    this._configurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationNameInput() {
    return this._configurationName;
  }

  // disable_wf_when_protected - computed: false, optional: true, required: false
  private _disableWfWhenProtected?: string; 
  public get disableWfWhenProtected() {
    return this.getStringAttribute('disable_wf_when_protected');
  }
  public set disableWfWhenProtected(value: string) {
    this._disableWfWhenProtected = value;
  }
  public resetDisableWfWhenProtected() {
    this._disableWfWhenProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWfWhenProtectedInput() {
    return this._disableWfWhenProtected;
  }

  // distribute_configuration_profile - computed: false, optional: true, required: false
  private _distributeConfigurationProfile?: string; 
  public get distributeConfigurationProfile() {
    return this.getStringAttribute('distribute_configuration_profile');
  }
  public set distributeConfigurationProfile(value: string) {
    this._distributeConfigurationProfile = value;
  }
  public resetDistributeConfigurationProfile() {
    this._distributeConfigurationProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeConfigurationProfileInput() {
    return this._distributeConfigurationProfile;
  }

  // forticlient_wf - computed: false, optional: true, required: false
  private _forticlientWf?: string; 
  public get forticlientWf() {
    return this.getStringAttribute('forticlient_wf');
  }
  public set forticlientWf(value: string) {
    this._forticlientWf = value;
  }
  public resetForticlientWf() {
    this._forticlientWf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientWfInput() {
    return this._forticlientWf;
  }

  // forticlient_wf_profile - computed: false, optional: true, required: false
  private _forticlientWfProfile?: string; 
  public get forticlientWfProfile() {
    return this.getStringAttribute('forticlient_wf_profile');
  }
  public set forticlientWfProfile(value: string) {
    this._forticlientWfProfile = value;
  }
  public resetForticlientWfProfile() {
    this._forticlientWfProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientWfProfileInput() {
    return this._forticlientWfProfile;
  }

  // client_vpn_settings - computed: false, optional: true, required: false
  private _clientVpnSettings = new EndpointcontrolProfileForticlientIosSettingsClientVpnSettingsList(this, "client_vpn_settings", false);
  public get clientVpnSettings() {
    return this._clientVpnSettings;
  }
  public putClientVpnSettings(value: EndpointcontrolProfileForticlientIosSettingsClientVpnSettings[] | cdktf.IResolvable) {
    this._clientVpnSettings.internalValue = value;
  }
  public resetClientVpnSettings() {
    this._clientVpnSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVpnSettingsInput() {
    return this._clientVpnSettings.internalValue;
  }
}
export interface EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#name EndpointcontrolProfile#name}
  */
  readonly name?: string;
}

export function endpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntriesToTerraform(struct?: EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function endpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntriesToHclTerraform(struct?: EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntries | cdktf.IResolvable): any {
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

export class EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntries | cdktf.IResolvable | undefined) {
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

export class EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntriesList extends cdktf.ComplexList {
  public internalValue? : EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntries[] | cdktf.IResolvable

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
  public get(index: number): EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntriesOutputReference {
    return new EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#id EndpointcontrolProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#os_name EndpointcontrolProfile#os_name}
  */
  readonly osName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#os_type EndpointcontrolProfile#os_type}
  */
  readonly osType?: string;
}

export function endpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystemToTerraform(struct?: EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    os_name: cdktf.stringToTerraform(struct!.osName),
    os_type: cdktf.stringToTerraform(struct!.osType),
  }
}


export function endpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystemToHclTerraform(struct?: EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    os_name: {
      value: cdktf.stringToHclTerraform(struct!.osName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_type: {
      value: cdktf.stringToHclTerraform(struct!.osType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._osName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osName = this._osName;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._osName = undefined;
      this._osType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._osName = value.osName;
      this._osType = value.osType;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // os_name - computed: false, optional: true, required: false
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  public resetOsName() {
    this._osName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }
}

export class EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystemList extends cdktf.ComplexList {
  public internalValue? : EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystem[] | cdktf.IResolvable

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
  public get(index: number): EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystemOutputReference {
    return new EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#file EndpointcontrolProfile#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#id EndpointcontrolProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function endpointcontrolProfileForticlientWinmacSettingsForticlientOwnFileToTerraform(struct?: EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function endpointcontrolProfileForticlientWinmacSettingsForticlientOwnFileToHclTerraform(struct?: EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._id = value.id;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFileList extends cdktf.ComplexList {
  public internalValue? : EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFile[] | cdktf.IResolvable

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
  public get(index: number): EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFileOutputReference {
    return new EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#id EndpointcontrolProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#registry_entry EndpointcontrolProfile#registry_entry}
  */
  readonly registryEntry?: string;
}

export function endpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntryToTerraform(struct?: EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    registry_entry: cdktf.stringToTerraform(struct!.registryEntry),
  }
}


export function endpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntryToHclTerraform(struct?: EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    registry_entry: {
      value: cdktf.stringToHclTerraform(struct!.registryEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._registryEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryEntry = this._registryEntry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._registryEntry = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._registryEntry = value.registryEntry;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // registry_entry - computed: false, optional: true, required: false
  private _registryEntry?: string; 
  public get registryEntry() {
    return this.getStringAttribute('registry_entry');
  }
  public set registryEntry(value: string) {
    this._registryEntry = value;
  }
  public resetRegistryEntry() {
    this._registryEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryEntryInput() {
    return this._registryEntry;
  }
}

export class EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntryList extends cdktf.ComplexList {
  public internalValue? : EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntry[] | cdktf.IResolvable

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
  public get(index: number): EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntryOutputReference {
    return new EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#app_name EndpointcontrolProfile#app_name}
  */
  readonly appName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#app_sha256_signature EndpointcontrolProfile#app_sha256_signature}
  */
  readonly appSha256Signature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#app_sha256_signature2 EndpointcontrolProfile#app_sha256_signature2}
  */
  readonly appSha256Signature2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#app_sha256_signature3 EndpointcontrolProfile#app_sha256_signature3}
  */
  readonly appSha256Signature3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#app_sha256_signature4 EndpointcontrolProfile#app_sha256_signature4}
  */
  readonly appSha256Signature4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#application_check_rule EndpointcontrolProfile#application_check_rule}
  */
  readonly applicationCheckRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#id EndpointcontrolProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#process_name EndpointcontrolProfile#process_name}
  */
  readonly processName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#process_name2 EndpointcontrolProfile#process_name2}
  */
  readonly processName2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#process_name3 EndpointcontrolProfile#process_name3}
  */
  readonly processName3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#process_name4 EndpointcontrolProfile#process_name4}
  */
  readonly processName4?: string;
}

export function endpointcontrolProfileForticlientWinmacSettingsForticlientRunningAppToTerraform(struct?: EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_name: cdktf.stringToTerraform(struct!.appName),
    app_sha256_signature: cdktf.stringToTerraform(struct!.appSha256Signature),
    app_sha256_signature2: cdktf.stringToTerraform(struct!.appSha256Signature2),
    app_sha256_signature3: cdktf.stringToTerraform(struct!.appSha256Signature3),
    app_sha256_signature4: cdktf.stringToTerraform(struct!.appSha256Signature4),
    application_check_rule: cdktf.stringToTerraform(struct!.applicationCheckRule),
    id: cdktf.numberToTerraform(struct!.id),
    process_name: cdktf.stringToTerraform(struct!.processName),
    process_name2: cdktf.stringToTerraform(struct!.processName2),
    process_name3: cdktf.stringToTerraform(struct!.processName3),
    process_name4: cdktf.stringToTerraform(struct!.processName4),
  }
}


export function endpointcontrolProfileForticlientWinmacSettingsForticlientRunningAppToHclTerraform(struct?: EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_name: {
      value: cdktf.stringToHclTerraform(struct!.appName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_sha256_signature: {
      value: cdktf.stringToHclTerraform(struct!.appSha256Signature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_sha256_signature2: {
      value: cdktf.stringToHclTerraform(struct!.appSha256Signature2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_sha256_signature3: {
      value: cdktf.stringToHclTerraform(struct!.appSha256Signature3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_sha256_signature4: {
      value: cdktf.stringToHclTerraform(struct!.appSha256Signature4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_check_rule: {
      value: cdktf.stringToHclTerraform(struct!.applicationCheckRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    process_name: {
      value: cdktf.stringToHclTerraform(struct!.processName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_name2: {
      value: cdktf.stringToHclTerraform(struct!.processName2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_name3: {
      value: cdktf.stringToHclTerraform(struct!.processName3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_name4: {
      value: cdktf.stringToHclTerraform(struct!.processName4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningApp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appName = this._appName;
    }
    if (this._appSha256Signature !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSha256Signature = this._appSha256Signature;
    }
    if (this._appSha256Signature2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSha256Signature2 = this._appSha256Signature2;
    }
    if (this._appSha256Signature3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSha256Signature3 = this._appSha256Signature3;
    }
    if (this._appSha256Signature4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSha256Signature4 = this._appSha256Signature4;
    }
    if (this._applicationCheckRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationCheckRule = this._applicationCheckRule;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._processName !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName;
    }
    if (this._processName2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName2 = this._processName2;
    }
    if (this._processName3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName3 = this._processName3;
    }
    if (this._processName4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName4 = this._processName4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningApp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appName = undefined;
      this._appSha256Signature = undefined;
      this._appSha256Signature2 = undefined;
      this._appSha256Signature3 = undefined;
      this._appSha256Signature4 = undefined;
      this._applicationCheckRule = undefined;
      this._id = undefined;
      this._processName = undefined;
      this._processName2 = undefined;
      this._processName3 = undefined;
      this._processName4 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appName = value.appName;
      this._appSha256Signature = value.appSha256Signature;
      this._appSha256Signature2 = value.appSha256Signature2;
      this._appSha256Signature3 = value.appSha256Signature3;
      this._appSha256Signature4 = value.appSha256Signature4;
      this._applicationCheckRule = value.applicationCheckRule;
      this._id = value.id;
      this._processName = value.processName;
      this._processName2 = value.processName2;
      this._processName3 = value.processName3;
      this._processName4 = value.processName4;
    }
  }

  // app_name - computed: false, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // app_sha256_signature - computed: false, optional: true, required: false
  private _appSha256Signature?: string; 
  public get appSha256Signature() {
    return this.getStringAttribute('app_sha256_signature');
  }
  public set appSha256Signature(value: string) {
    this._appSha256Signature = value;
  }
  public resetAppSha256Signature() {
    this._appSha256Signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSha256SignatureInput() {
    return this._appSha256Signature;
  }

  // app_sha256_signature2 - computed: false, optional: true, required: false
  private _appSha256Signature2?: string; 
  public get appSha256Signature2() {
    return this.getStringAttribute('app_sha256_signature2');
  }
  public set appSha256Signature2(value: string) {
    this._appSha256Signature2 = value;
  }
  public resetAppSha256Signature2() {
    this._appSha256Signature2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSha256Signature2Input() {
    return this._appSha256Signature2;
  }

  // app_sha256_signature3 - computed: false, optional: true, required: false
  private _appSha256Signature3?: string; 
  public get appSha256Signature3() {
    return this.getStringAttribute('app_sha256_signature3');
  }
  public set appSha256Signature3(value: string) {
    this._appSha256Signature3 = value;
  }
  public resetAppSha256Signature3() {
    this._appSha256Signature3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSha256Signature3Input() {
    return this._appSha256Signature3;
  }

  // app_sha256_signature4 - computed: false, optional: true, required: false
  private _appSha256Signature4?: string; 
  public get appSha256Signature4() {
    return this.getStringAttribute('app_sha256_signature4');
  }
  public set appSha256Signature4(value: string) {
    this._appSha256Signature4 = value;
  }
  public resetAppSha256Signature4() {
    this._appSha256Signature4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSha256Signature4Input() {
    return this._appSha256Signature4;
  }

  // application_check_rule - computed: false, optional: true, required: false
  private _applicationCheckRule?: string; 
  public get applicationCheckRule() {
    return this.getStringAttribute('application_check_rule');
  }
  public set applicationCheckRule(value: string) {
    this._applicationCheckRule = value;
  }
  public resetApplicationCheckRule() {
    this._applicationCheckRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCheckRuleInput() {
    return this._applicationCheckRule;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // process_name - computed: false, optional: true, required: false
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  public resetProcessName() {
    this._processName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }

  // process_name2 - computed: false, optional: true, required: false
  private _processName2?: string; 
  public get processName2() {
    return this.getStringAttribute('process_name2');
  }
  public set processName2(value: string) {
    this._processName2 = value;
  }
  public resetProcessName2() {
    this._processName2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processName2Input() {
    return this._processName2;
  }

  // process_name3 - computed: false, optional: true, required: false
  private _processName3?: string; 
  public get processName3() {
    return this.getStringAttribute('process_name3');
  }
  public set processName3(value: string) {
    this._processName3 = value;
  }
  public resetProcessName3() {
    this._processName3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processName3Input() {
    return this._processName3;
  }

  // process_name4 - computed: false, optional: true, required: false
  private _processName4?: string; 
  public get processName4() {
    return this.getStringAttribute('process_name4');
  }
  public set processName4(value: string) {
    this._processName4 = value;
  }
  public resetProcessName4() {
    this._processName4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processName4Input() {
    return this._processName4;
  }
}

export class EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningAppList extends cdktf.ComplexList {
  public internalValue? : EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningApp[] | cdktf.IResolvable

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
  public get(index: number): EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningAppOutputReference {
    return new EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointcontrolProfileForticlientWinmacSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#av_realtime_protection EndpointcontrolProfile#av_realtime_protection}
  */
  readonly avRealtimeProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#av_signature_up_to_date EndpointcontrolProfile#av_signature_up_to_date}
  */
  readonly avSignatureUpToDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_application_firewall EndpointcontrolProfile#forticlient_application_firewall}
  */
  readonly forticlientApplicationFirewall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_application_firewall_list EndpointcontrolProfile#forticlient_application_firewall_list}
  */
  readonly forticlientApplicationFirewallList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_av EndpointcontrolProfile#forticlient_av}
  */
  readonly forticlientAv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_ems_compliance EndpointcontrolProfile#forticlient_ems_compliance}
  */
  readonly forticlientEmsCompliance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_ems_compliance_action EndpointcontrolProfile#forticlient_ems_compliance_action}
  */
  readonly forticlientEmsComplianceAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_linux_ver EndpointcontrolProfile#forticlient_linux_ver}
  */
  readonly forticlientLinuxVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_log_upload EndpointcontrolProfile#forticlient_log_upload}
  */
  readonly forticlientLogUpload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_log_upload_level EndpointcontrolProfile#forticlient_log_upload_level}
  */
  readonly forticlientLogUploadLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_log_upload_server EndpointcontrolProfile#forticlient_log_upload_server}
  */
  readonly forticlientLogUploadServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_mac_ver EndpointcontrolProfile#forticlient_mac_ver}
  */
  readonly forticlientMacVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_minimum_software_version EndpointcontrolProfile#forticlient_minimum_software_version}
  */
  readonly forticlientMinimumSoftwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_registration_compliance_action EndpointcontrolProfile#forticlient_registration_compliance_action}
  */
  readonly forticlientRegistrationComplianceAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_security_posture EndpointcontrolProfile#forticlient_security_posture}
  */
  readonly forticlientSecurityPosture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_security_posture_compliance_action EndpointcontrolProfile#forticlient_security_posture_compliance_action}
  */
  readonly forticlientSecurityPostureComplianceAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_system_compliance EndpointcontrolProfile#forticlient_system_compliance}
  */
  readonly forticlientSystemCompliance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_system_compliance_action EndpointcontrolProfile#forticlient_system_compliance_action}
  */
  readonly forticlientSystemComplianceAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_vuln_scan EndpointcontrolProfile#forticlient_vuln_scan}
  */
  readonly forticlientVulnScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_vuln_scan_compliance_action EndpointcontrolProfile#forticlient_vuln_scan_compliance_action}
  */
  readonly forticlientVulnScanComplianceAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_vuln_scan_enforce EndpointcontrolProfile#forticlient_vuln_scan_enforce}
  */
  readonly forticlientVulnScanEnforce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_vuln_scan_enforce_grace EndpointcontrolProfile#forticlient_vuln_scan_enforce_grace}
  */
  readonly forticlientVulnScanEnforceGrace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_vuln_scan_exempt EndpointcontrolProfile#forticlient_vuln_scan_exempt}
  */
  readonly forticlientVulnScanExempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_wf EndpointcontrolProfile#forticlient_wf}
  */
  readonly forticlientWf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_wf_profile EndpointcontrolProfile#forticlient_wf_profile}
  */
  readonly forticlientWfProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_win_ver EndpointcontrolProfile#forticlient_win_ver}
  */
  readonly forticlientWinVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#os_av_software_installed EndpointcontrolProfile#os_av_software_installed}
  */
  readonly osAvSoftwareInstalled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#sandbox_address EndpointcontrolProfile#sandbox_address}
  */
  readonly sandboxAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#sandbox_analysis EndpointcontrolProfile#sandbox_analysis}
  */
  readonly sandboxAnalysis?: string;
  /**
  * forticlient_ems_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_ems_entries EndpointcontrolProfile#forticlient_ems_entries}
  */
  readonly forticlientEmsEntries?: EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntries[] | cdktf.IResolvable;
  /**
  * forticlient_operating_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_operating_system EndpointcontrolProfile#forticlient_operating_system}
  */
  readonly forticlientOperatingSystem?: EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystem[] | cdktf.IResolvable;
  /**
  * forticlient_own_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_own_file EndpointcontrolProfile#forticlient_own_file}
  */
  readonly forticlientOwnFile?: EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFile[] | cdktf.IResolvable;
  /**
  * forticlient_registry_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_registry_entry EndpointcontrolProfile#forticlient_registry_entry}
  */
  readonly forticlientRegistryEntry?: EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntry[] | cdktf.IResolvable;
  /**
  * forticlient_running_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#forticlient_running_app EndpointcontrolProfile#forticlient_running_app}
  */
  readonly forticlientRunningApp?: EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningApp[] | cdktf.IResolvable;
}

export function endpointcontrolProfileForticlientWinmacSettingsToTerraform(struct?: EndpointcontrolProfileForticlientWinmacSettingsOutputReference | EndpointcontrolProfileForticlientWinmacSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    av_realtime_protection: cdktf.stringToTerraform(struct!.avRealtimeProtection),
    av_signature_up_to_date: cdktf.stringToTerraform(struct!.avSignatureUpToDate),
    forticlient_application_firewall: cdktf.stringToTerraform(struct!.forticlientApplicationFirewall),
    forticlient_application_firewall_list: cdktf.stringToTerraform(struct!.forticlientApplicationFirewallList),
    forticlient_av: cdktf.stringToTerraform(struct!.forticlientAv),
    forticlient_ems_compliance: cdktf.stringToTerraform(struct!.forticlientEmsCompliance),
    forticlient_ems_compliance_action: cdktf.stringToTerraform(struct!.forticlientEmsComplianceAction),
    forticlient_linux_ver: cdktf.stringToTerraform(struct!.forticlientLinuxVer),
    forticlient_log_upload: cdktf.stringToTerraform(struct!.forticlientLogUpload),
    forticlient_log_upload_level: cdktf.stringToTerraform(struct!.forticlientLogUploadLevel),
    forticlient_log_upload_server: cdktf.stringToTerraform(struct!.forticlientLogUploadServer),
    forticlient_mac_ver: cdktf.stringToTerraform(struct!.forticlientMacVer),
    forticlient_minimum_software_version: cdktf.stringToTerraform(struct!.forticlientMinimumSoftwareVersion),
    forticlient_registration_compliance_action: cdktf.stringToTerraform(struct!.forticlientRegistrationComplianceAction),
    forticlient_security_posture: cdktf.stringToTerraform(struct!.forticlientSecurityPosture),
    forticlient_security_posture_compliance_action: cdktf.stringToTerraform(struct!.forticlientSecurityPostureComplianceAction),
    forticlient_system_compliance: cdktf.stringToTerraform(struct!.forticlientSystemCompliance),
    forticlient_system_compliance_action: cdktf.stringToTerraform(struct!.forticlientSystemComplianceAction),
    forticlient_vuln_scan: cdktf.stringToTerraform(struct!.forticlientVulnScan),
    forticlient_vuln_scan_compliance_action: cdktf.stringToTerraform(struct!.forticlientVulnScanComplianceAction),
    forticlient_vuln_scan_enforce: cdktf.stringToTerraform(struct!.forticlientVulnScanEnforce),
    forticlient_vuln_scan_enforce_grace: cdktf.numberToTerraform(struct!.forticlientVulnScanEnforceGrace),
    forticlient_vuln_scan_exempt: cdktf.stringToTerraform(struct!.forticlientVulnScanExempt),
    forticlient_wf: cdktf.stringToTerraform(struct!.forticlientWf),
    forticlient_wf_profile: cdktf.stringToTerraform(struct!.forticlientWfProfile),
    forticlient_win_ver: cdktf.stringToTerraform(struct!.forticlientWinVer),
    os_av_software_installed: cdktf.stringToTerraform(struct!.osAvSoftwareInstalled),
    sandbox_address: cdktf.stringToTerraform(struct!.sandboxAddress),
    sandbox_analysis: cdktf.stringToTerraform(struct!.sandboxAnalysis),
    forticlient_ems_entries: cdktf.listMapper(endpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntriesToTerraform, true)(struct!.forticlientEmsEntries),
    forticlient_operating_system: cdktf.listMapper(endpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystemToTerraform, true)(struct!.forticlientOperatingSystem),
    forticlient_own_file: cdktf.listMapper(endpointcontrolProfileForticlientWinmacSettingsForticlientOwnFileToTerraform, true)(struct!.forticlientOwnFile),
    forticlient_registry_entry: cdktf.listMapper(endpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntryToTerraform, true)(struct!.forticlientRegistryEntry),
    forticlient_running_app: cdktf.listMapper(endpointcontrolProfileForticlientWinmacSettingsForticlientRunningAppToTerraform, true)(struct!.forticlientRunningApp),
  }
}


export function endpointcontrolProfileForticlientWinmacSettingsToHclTerraform(struct?: EndpointcontrolProfileForticlientWinmacSettingsOutputReference | EndpointcontrolProfileForticlientWinmacSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    av_realtime_protection: {
      value: cdktf.stringToHclTerraform(struct!.avRealtimeProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    av_signature_up_to_date: {
      value: cdktf.stringToHclTerraform(struct!.avSignatureUpToDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_application_firewall: {
      value: cdktf.stringToHclTerraform(struct!.forticlientApplicationFirewall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_application_firewall_list: {
      value: cdktf.stringToHclTerraform(struct!.forticlientApplicationFirewallList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_av: {
      value: cdktf.stringToHclTerraform(struct!.forticlientAv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_ems_compliance: {
      value: cdktf.stringToHclTerraform(struct!.forticlientEmsCompliance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_ems_compliance_action: {
      value: cdktf.stringToHclTerraform(struct!.forticlientEmsComplianceAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_linux_ver: {
      value: cdktf.stringToHclTerraform(struct!.forticlientLinuxVer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_log_upload: {
      value: cdktf.stringToHclTerraform(struct!.forticlientLogUpload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_log_upload_level: {
      value: cdktf.stringToHclTerraform(struct!.forticlientLogUploadLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_log_upload_server: {
      value: cdktf.stringToHclTerraform(struct!.forticlientLogUploadServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_mac_ver: {
      value: cdktf.stringToHclTerraform(struct!.forticlientMacVer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_minimum_software_version: {
      value: cdktf.stringToHclTerraform(struct!.forticlientMinimumSoftwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_registration_compliance_action: {
      value: cdktf.stringToHclTerraform(struct!.forticlientRegistrationComplianceAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_security_posture: {
      value: cdktf.stringToHclTerraform(struct!.forticlientSecurityPosture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_security_posture_compliance_action: {
      value: cdktf.stringToHclTerraform(struct!.forticlientSecurityPostureComplianceAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_system_compliance: {
      value: cdktf.stringToHclTerraform(struct!.forticlientSystemCompliance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_system_compliance_action: {
      value: cdktf.stringToHclTerraform(struct!.forticlientSystemComplianceAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_vuln_scan: {
      value: cdktf.stringToHclTerraform(struct!.forticlientVulnScan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_vuln_scan_compliance_action: {
      value: cdktf.stringToHclTerraform(struct!.forticlientVulnScanComplianceAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_vuln_scan_enforce: {
      value: cdktf.stringToHclTerraform(struct!.forticlientVulnScanEnforce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_vuln_scan_enforce_grace: {
      value: cdktf.numberToHclTerraform(struct!.forticlientVulnScanEnforceGrace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forticlient_vuln_scan_exempt: {
      value: cdktf.stringToHclTerraform(struct!.forticlientVulnScanExempt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_wf: {
      value: cdktf.stringToHclTerraform(struct!.forticlientWf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_wf_profile: {
      value: cdktf.stringToHclTerraform(struct!.forticlientWfProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_win_ver: {
      value: cdktf.stringToHclTerraform(struct!.forticlientWinVer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_av_software_installed: {
      value: cdktf.stringToHclTerraform(struct!.osAvSoftwareInstalled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sandbox_address: {
      value: cdktf.stringToHclTerraform(struct!.sandboxAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sandbox_analysis: {
      value: cdktf.stringToHclTerraform(struct!.sandboxAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_ems_entries: {
      value: cdktf.listMapperHcl(endpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntriesToHclTerraform, true)(struct!.forticlientEmsEntries),
      isBlock: true,
      type: "list",
      storageClassType: "EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntriesList",
    },
    forticlient_operating_system: {
      value: cdktf.listMapperHcl(endpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystemToHclTerraform, true)(struct!.forticlientOperatingSystem),
      isBlock: true,
      type: "list",
      storageClassType: "EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystemList",
    },
    forticlient_own_file: {
      value: cdktf.listMapperHcl(endpointcontrolProfileForticlientWinmacSettingsForticlientOwnFileToHclTerraform, true)(struct!.forticlientOwnFile),
      isBlock: true,
      type: "list",
      storageClassType: "EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFileList",
    },
    forticlient_registry_entry: {
      value: cdktf.listMapperHcl(endpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntryToHclTerraform, true)(struct!.forticlientRegistryEntry),
      isBlock: true,
      type: "list",
      storageClassType: "EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntryList",
    },
    forticlient_running_app: {
      value: cdktf.listMapperHcl(endpointcontrolProfileForticlientWinmacSettingsForticlientRunningAppToHclTerraform, true)(struct!.forticlientRunningApp),
      isBlock: true,
      type: "list",
      storageClassType: "EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningAppList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointcontrolProfileForticlientWinmacSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EndpointcontrolProfileForticlientWinmacSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avRealtimeProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.avRealtimeProtection = this._avRealtimeProtection;
    }
    if (this._avSignatureUpToDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.avSignatureUpToDate = this._avSignatureUpToDate;
    }
    if (this._forticlientApplicationFirewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientApplicationFirewall = this._forticlientApplicationFirewall;
    }
    if (this._forticlientApplicationFirewallList !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientApplicationFirewallList = this._forticlientApplicationFirewallList;
    }
    if (this._forticlientAv !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientAv = this._forticlientAv;
    }
    if (this._forticlientEmsCompliance !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientEmsCompliance = this._forticlientEmsCompliance;
    }
    if (this._forticlientEmsComplianceAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientEmsComplianceAction = this._forticlientEmsComplianceAction;
    }
    if (this._forticlientLinuxVer !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientLinuxVer = this._forticlientLinuxVer;
    }
    if (this._forticlientLogUpload !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientLogUpload = this._forticlientLogUpload;
    }
    if (this._forticlientLogUploadLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientLogUploadLevel = this._forticlientLogUploadLevel;
    }
    if (this._forticlientLogUploadServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientLogUploadServer = this._forticlientLogUploadServer;
    }
    if (this._forticlientMacVer !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientMacVer = this._forticlientMacVer;
    }
    if (this._forticlientMinimumSoftwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientMinimumSoftwareVersion = this._forticlientMinimumSoftwareVersion;
    }
    if (this._forticlientRegistrationComplianceAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientRegistrationComplianceAction = this._forticlientRegistrationComplianceAction;
    }
    if (this._forticlientSecurityPosture !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientSecurityPosture = this._forticlientSecurityPosture;
    }
    if (this._forticlientSecurityPostureComplianceAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientSecurityPostureComplianceAction = this._forticlientSecurityPostureComplianceAction;
    }
    if (this._forticlientSystemCompliance !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientSystemCompliance = this._forticlientSystemCompliance;
    }
    if (this._forticlientSystemComplianceAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientSystemComplianceAction = this._forticlientSystemComplianceAction;
    }
    if (this._forticlientVulnScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientVulnScan = this._forticlientVulnScan;
    }
    if (this._forticlientVulnScanComplianceAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientVulnScanComplianceAction = this._forticlientVulnScanComplianceAction;
    }
    if (this._forticlientVulnScanEnforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientVulnScanEnforce = this._forticlientVulnScanEnforce;
    }
    if (this._forticlientVulnScanEnforceGrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientVulnScanEnforceGrace = this._forticlientVulnScanEnforceGrace;
    }
    if (this._forticlientVulnScanExempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientVulnScanExempt = this._forticlientVulnScanExempt;
    }
    if (this._forticlientWf !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientWf = this._forticlientWf;
    }
    if (this._forticlientWfProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientWfProfile = this._forticlientWfProfile;
    }
    if (this._forticlientWinVer !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientWinVer = this._forticlientWinVer;
    }
    if (this._osAvSoftwareInstalled !== undefined) {
      hasAnyValues = true;
      internalValueResult.osAvSoftwareInstalled = this._osAvSoftwareInstalled;
    }
    if (this._sandboxAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxAddress = this._sandboxAddress;
    }
    if (this._sandboxAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxAnalysis = this._sandboxAnalysis;
    }
    if (this._forticlientEmsEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientEmsEntries = this._forticlientEmsEntries?.internalValue;
    }
    if (this._forticlientOperatingSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientOperatingSystem = this._forticlientOperatingSystem?.internalValue;
    }
    if (this._forticlientOwnFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientOwnFile = this._forticlientOwnFile?.internalValue;
    }
    if (this._forticlientRegistryEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientRegistryEntry = this._forticlientRegistryEntry?.internalValue;
    }
    if (this._forticlientRunningApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientRunningApp = this._forticlientRunningApp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointcontrolProfileForticlientWinmacSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avRealtimeProtection = undefined;
      this._avSignatureUpToDate = undefined;
      this._forticlientApplicationFirewall = undefined;
      this._forticlientApplicationFirewallList = undefined;
      this._forticlientAv = undefined;
      this._forticlientEmsCompliance = undefined;
      this._forticlientEmsComplianceAction = undefined;
      this._forticlientLinuxVer = undefined;
      this._forticlientLogUpload = undefined;
      this._forticlientLogUploadLevel = undefined;
      this._forticlientLogUploadServer = undefined;
      this._forticlientMacVer = undefined;
      this._forticlientMinimumSoftwareVersion = undefined;
      this._forticlientRegistrationComplianceAction = undefined;
      this._forticlientSecurityPosture = undefined;
      this._forticlientSecurityPostureComplianceAction = undefined;
      this._forticlientSystemCompliance = undefined;
      this._forticlientSystemComplianceAction = undefined;
      this._forticlientVulnScan = undefined;
      this._forticlientVulnScanComplianceAction = undefined;
      this._forticlientVulnScanEnforce = undefined;
      this._forticlientVulnScanEnforceGrace = undefined;
      this._forticlientVulnScanExempt = undefined;
      this._forticlientWf = undefined;
      this._forticlientWfProfile = undefined;
      this._forticlientWinVer = undefined;
      this._osAvSoftwareInstalled = undefined;
      this._sandboxAddress = undefined;
      this._sandboxAnalysis = undefined;
      this._forticlientEmsEntries.internalValue = undefined;
      this._forticlientOperatingSystem.internalValue = undefined;
      this._forticlientOwnFile.internalValue = undefined;
      this._forticlientRegistryEntry.internalValue = undefined;
      this._forticlientRunningApp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avRealtimeProtection = value.avRealtimeProtection;
      this._avSignatureUpToDate = value.avSignatureUpToDate;
      this._forticlientApplicationFirewall = value.forticlientApplicationFirewall;
      this._forticlientApplicationFirewallList = value.forticlientApplicationFirewallList;
      this._forticlientAv = value.forticlientAv;
      this._forticlientEmsCompliance = value.forticlientEmsCompliance;
      this._forticlientEmsComplianceAction = value.forticlientEmsComplianceAction;
      this._forticlientLinuxVer = value.forticlientLinuxVer;
      this._forticlientLogUpload = value.forticlientLogUpload;
      this._forticlientLogUploadLevel = value.forticlientLogUploadLevel;
      this._forticlientLogUploadServer = value.forticlientLogUploadServer;
      this._forticlientMacVer = value.forticlientMacVer;
      this._forticlientMinimumSoftwareVersion = value.forticlientMinimumSoftwareVersion;
      this._forticlientRegistrationComplianceAction = value.forticlientRegistrationComplianceAction;
      this._forticlientSecurityPosture = value.forticlientSecurityPosture;
      this._forticlientSecurityPostureComplianceAction = value.forticlientSecurityPostureComplianceAction;
      this._forticlientSystemCompliance = value.forticlientSystemCompliance;
      this._forticlientSystemComplianceAction = value.forticlientSystemComplianceAction;
      this._forticlientVulnScan = value.forticlientVulnScan;
      this._forticlientVulnScanComplianceAction = value.forticlientVulnScanComplianceAction;
      this._forticlientVulnScanEnforce = value.forticlientVulnScanEnforce;
      this._forticlientVulnScanEnforceGrace = value.forticlientVulnScanEnforceGrace;
      this._forticlientVulnScanExempt = value.forticlientVulnScanExempt;
      this._forticlientWf = value.forticlientWf;
      this._forticlientWfProfile = value.forticlientWfProfile;
      this._forticlientWinVer = value.forticlientWinVer;
      this._osAvSoftwareInstalled = value.osAvSoftwareInstalled;
      this._sandboxAddress = value.sandboxAddress;
      this._sandboxAnalysis = value.sandboxAnalysis;
      this._forticlientEmsEntries.internalValue = value.forticlientEmsEntries;
      this._forticlientOperatingSystem.internalValue = value.forticlientOperatingSystem;
      this._forticlientOwnFile.internalValue = value.forticlientOwnFile;
      this._forticlientRegistryEntry.internalValue = value.forticlientRegistryEntry;
      this._forticlientRunningApp.internalValue = value.forticlientRunningApp;
    }
  }

  // av_realtime_protection - computed: false, optional: true, required: false
  private _avRealtimeProtection?: string; 
  public get avRealtimeProtection() {
    return this.getStringAttribute('av_realtime_protection');
  }
  public set avRealtimeProtection(value: string) {
    this._avRealtimeProtection = value;
  }
  public resetAvRealtimeProtection() {
    this._avRealtimeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avRealtimeProtectionInput() {
    return this._avRealtimeProtection;
  }

  // av_signature_up_to_date - computed: false, optional: true, required: false
  private _avSignatureUpToDate?: string; 
  public get avSignatureUpToDate() {
    return this.getStringAttribute('av_signature_up_to_date');
  }
  public set avSignatureUpToDate(value: string) {
    this._avSignatureUpToDate = value;
  }
  public resetAvSignatureUpToDate() {
    this._avSignatureUpToDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avSignatureUpToDateInput() {
    return this._avSignatureUpToDate;
  }

  // forticlient_application_firewall - computed: false, optional: true, required: false
  private _forticlientApplicationFirewall?: string; 
  public get forticlientApplicationFirewall() {
    return this.getStringAttribute('forticlient_application_firewall');
  }
  public set forticlientApplicationFirewall(value: string) {
    this._forticlientApplicationFirewall = value;
  }
  public resetForticlientApplicationFirewall() {
    this._forticlientApplicationFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientApplicationFirewallInput() {
    return this._forticlientApplicationFirewall;
  }

  // forticlient_application_firewall_list - computed: false, optional: true, required: false
  private _forticlientApplicationFirewallList?: string; 
  public get forticlientApplicationFirewallList() {
    return this.getStringAttribute('forticlient_application_firewall_list');
  }
  public set forticlientApplicationFirewallList(value: string) {
    this._forticlientApplicationFirewallList = value;
  }
  public resetForticlientApplicationFirewallList() {
    this._forticlientApplicationFirewallList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientApplicationFirewallListInput() {
    return this._forticlientApplicationFirewallList;
  }

  // forticlient_av - computed: false, optional: true, required: false
  private _forticlientAv?: string; 
  public get forticlientAv() {
    return this.getStringAttribute('forticlient_av');
  }
  public set forticlientAv(value: string) {
    this._forticlientAv = value;
  }
  public resetForticlientAv() {
    this._forticlientAv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientAvInput() {
    return this._forticlientAv;
  }

  // forticlient_ems_compliance - computed: false, optional: true, required: false
  private _forticlientEmsCompliance?: string; 
  public get forticlientEmsCompliance() {
    return this.getStringAttribute('forticlient_ems_compliance');
  }
  public set forticlientEmsCompliance(value: string) {
    this._forticlientEmsCompliance = value;
  }
  public resetForticlientEmsCompliance() {
    this._forticlientEmsCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientEmsComplianceInput() {
    return this._forticlientEmsCompliance;
  }

  // forticlient_ems_compliance_action - computed: false, optional: true, required: false
  private _forticlientEmsComplianceAction?: string; 
  public get forticlientEmsComplianceAction() {
    return this.getStringAttribute('forticlient_ems_compliance_action');
  }
  public set forticlientEmsComplianceAction(value: string) {
    this._forticlientEmsComplianceAction = value;
  }
  public resetForticlientEmsComplianceAction() {
    this._forticlientEmsComplianceAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientEmsComplianceActionInput() {
    return this._forticlientEmsComplianceAction;
  }

  // forticlient_linux_ver - computed: false, optional: true, required: false
  private _forticlientLinuxVer?: string; 
  public get forticlientLinuxVer() {
    return this.getStringAttribute('forticlient_linux_ver');
  }
  public set forticlientLinuxVer(value: string) {
    this._forticlientLinuxVer = value;
  }
  public resetForticlientLinuxVer() {
    this._forticlientLinuxVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientLinuxVerInput() {
    return this._forticlientLinuxVer;
  }

  // forticlient_log_upload - computed: false, optional: true, required: false
  private _forticlientLogUpload?: string; 
  public get forticlientLogUpload() {
    return this.getStringAttribute('forticlient_log_upload');
  }
  public set forticlientLogUpload(value: string) {
    this._forticlientLogUpload = value;
  }
  public resetForticlientLogUpload() {
    this._forticlientLogUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientLogUploadInput() {
    return this._forticlientLogUpload;
  }

  // forticlient_log_upload_level - computed: false, optional: true, required: false
  private _forticlientLogUploadLevel?: string; 
  public get forticlientLogUploadLevel() {
    return this.getStringAttribute('forticlient_log_upload_level');
  }
  public set forticlientLogUploadLevel(value: string) {
    this._forticlientLogUploadLevel = value;
  }
  public resetForticlientLogUploadLevel() {
    this._forticlientLogUploadLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientLogUploadLevelInput() {
    return this._forticlientLogUploadLevel;
  }

  // forticlient_log_upload_server - computed: false, optional: true, required: false
  private _forticlientLogUploadServer?: string; 
  public get forticlientLogUploadServer() {
    return this.getStringAttribute('forticlient_log_upload_server');
  }
  public set forticlientLogUploadServer(value: string) {
    this._forticlientLogUploadServer = value;
  }
  public resetForticlientLogUploadServer() {
    this._forticlientLogUploadServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientLogUploadServerInput() {
    return this._forticlientLogUploadServer;
  }

  // forticlient_mac_ver - computed: false, optional: true, required: false
  private _forticlientMacVer?: string; 
  public get forticlientMacVer() {
    return this.getStringAttribute('forticlient_mac_ver');
  }
  public set forticlientMacVer(value: string) {
    this._forticlientMacVer = value;
  }
  public resetForticlientMacVer() {
    this._forticlientMacVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientMacVerInput() {
    return this._forticlientMacVer;
  }

  // forticlient_minimum_software_version - computed: false, optional: true, required: false
  private _forticlientMinimumSoftwareVersion?: string; 
  public get forticlientMinimumSoftwareVersion() {
    return this.getStringAttribute('forticlient_minimum_software_version');
  }
  public set forticlientMinimumSoftwareVersion(value: string) {
    this._forticlientMinimumSoftwareVersion = value;
  }
  public resetForticlientMinimumSoftwareVersion() {
    this._forticlientMinimumSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientMinimumSoftwareVersionInput() {
    return this._forticlientMinimumSoftwareVersion;
  }

  // forticlient_registration_compliance_action - computed: false, optional: true, required: false
  private _forticlientRegistrationComplianceAction?: string; 
  public get forticlientRegistrationComplianceAction() {
    return this.getStringAttribute('forticlient_registration_compliance_action');
  }
  public set forticlientRegistrationComplianceAction(value: string) {
    this._forticlientRegistrationComplianceAction = value;
  }
  public resetForticlientRegistrationComplianceAction() {
    this._forticlientRegistrationComplianceAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientRegistrationComplianceActionInput() {
    return this._forticlientRegistrationComplianceAction;
  }

  // forticlient_security_posture - computed: false, optional: true, required: false
  private _forticlientSecurityPosture?: string; 
  public get forticlientSecurityPosture() {
    return this.getStringAttribute('forticlient_security_posture');
  }
  public set forticlientSecurityPosture(value: string) {
    this._forticlientSecurityPosture = value;
  }
  public resetForticlientSecurityPosture() {
    this._forticlientSecurityPosture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientSecurityPostureInput() {
    return this._forticlientSecurityPosture;
  }

  // forticlient_security_posture_compliance_action - computed: false, optional: true, required: false
  private _forticlientSecurityPostureComplianceAction?: string; 
  public get forticlientSecurityPostureComplianceAction() {
    return this.getStringAttribute('forticlient_security_posture_compliance_action');
  }
  public set forticlientSecurityPostureComplianceAction(value: string) {
    this._forticlientSecurityPostureComplianceAction = value;
  }
  public resetForticlientSecurityPostureComplianceAction() {
    this._forticlientSecurityPostureComplianceAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientSecurityPostureComplianceActionInput() {
    return this._forticlientSecurityPostureComplianceAction;
  }

  // forticlient_system_compliance - computed: false, optional: true, required: false
  private _forticlientSystemCompliance?: string; 
  public get forticlientSystemCompliance() {
    return this.getStringAttribute('forticlient_system_compliance');
  }
  public set forticlientSystemCompliance(value: string) {
    this._forticlientSystemCompliance = value;
  }
  public resetForticlientSystemCompliance() {
    this._forticlientSystemCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientSystemComplianceInput() {
    return this._forticlientSystemCompliance;
  }

  // forticlient_system_compliance_action - computed: false, optional: true, required: false
  private _forticlientSystemComplianceAction?: string; 
  public get forticlientSystemComplianceAction() {
    return this.getStringAttribute('forticlient_system_compliance_action');
  }
  public set forticlientSystemComplianceAction(value: string) {
    this._forticlientSystemComplianceAction = value;
  }
  public resetForticlientSystemComplianceAction() {
    this._forticlientSystemComplianceAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientSystemComplianceActionInput() {
    return this._forticlientSystemComplianceAction;
  }

  // forticlient_vuln_scan - computed: false, optional: true, required: false
  private _forticlientVulnScan?: string; 
  public get forticlientVulnScan() {
    return this.getStringAttribute('forticlient_vuln_scan');
  }
  public set forticlientVulnScan(value: string) {
    this._forticlientVulnScan = value;
  }
  public resetForticlientVulnScan() {
    this._forticlientVulnScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientVulnScanInput() {
    return this._forticlientVulnScan;
  }

  // forticlient_vuln_scan_compliance_action - computed: false, optional: true, required: false
  private _forticlientVulnScanComplianceAction?: string; 
  public get forticlientVulnScanComplianceAction() {
    return this.getStringAttribute('forticlient_vuln_scan_compliance_action');
  }
  public set forticlientVulnScanComplianceAction(value: string) {
    this._forticlientVulnScanComplianceAction = value;
  }
  public resetForticlientVulnScanComplianceAction() {
    this._forticlientVulnScanComplianceAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientVulnScanComplianceActionInput() {
    return this._forticlientVulnScanComplianceAction;
  }

  // forticlient_vuln_scan_enforce - computed: false, optional: true, required: false
  private _forticlientVulnScanEnforce?: string; 
  public get forticlientVulnScanEnforce() {
    return this.getStringAttribute('forticlient_vuln_scan_enforce');
  }
  public set forticlientVulnScanEnforce(value: string) {
    this._forticlientVulnScanEnforce = value;
  }
  public resetForticlientVulnScanEnforce() {
    this._forticlientVulnScanEnforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientVulnScanEnforceInput() {
    return this._forticlientVulnScanEnforce;
  }

  // forticlient_vuln_scan_enforce_grace - computed: false, optional: true, required: false
  private _forticlientVulnScanEnforceGrace?: number; 
  public get forticlientVulnScanEnforceGrace() {
    return this.getNumberAttribute('forticlient_vuln_scan_enforce_grace');
  }
  public set forticlientVulnScanEnforceGrace(value: number) {
    this._forticlientVulnScanEnforceGrace = value;
  }
  public resetForticlientVulnScanEnforceGrace() {
    this._forticlientVulnScanEnforceGrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientVulnScanEnforceGraceInput() {
    return this._forticlientVulnScanEnforceGrace;
  }

  // forticlient_vuln_scan_exempt - computed: false, optional: true, required: false
  private _forticlientVulnScanExempt?: string; 
  public get forticlientVulnScanExempt() {
    return this.getStringAttribute('forticlient_vuln_scan_exempt');
  }
  public set forticlientVulnScanExempt(value: string) {
    this._forticlientVulnScanExempt = value;
  }
  public resetForticlientVulnScanExempt() {
    this._forticlientVulnScanExempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientVulnScanExemptInput() {
    return this._forticlientVulnScanExempt;
  }

  // forticlient_wf - computed: false, optional: true, required: false
  private _forticlientWf?: string; 
  public get forticlientWf() {
    return this.getStringAttribute('forticlient_wf');
  }
  public set forticlientWf(value: string) {
    this._forticlientWf = value;
  }
  public resetForticlientWf() {
    this._forticlientWf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientWfInput() {
    return this._forticlientWf;
  }

  // forticlient_wf_profile - computed: false, optional: true, required: false
  private _forticlientWfProfile?: string; 
  public get forticlientWfProfile() {
    return this.getStringAttribute('forticlient_wf_profile');
  }
  public set forticlientWfProfile(value: string) {
    this._forticlientWfProfile = value;
  }
  public resetForticlientWfProfile() {
    this._forticlientWfProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientWfProfileInput() {
    return this._forticlientWfProfile;
  }

  // forticlient_win_ver - computed: false, optional: true, required: false
  private _forticlientWinVer?: string; 
  public get forticlientWinVer() {
    return this.getStringAttribute('forticlient_win_ver');
  }
  public set forticlientWinVer(value: string) {
    this._forticlientWinVer = value;
  }
  public resetForticlientWinVer() {
    this._forticlientWinVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientWinVerInput() {
    return this._forticlientWinVer;
  }

  // os_av_software_installed - computed: false, optional: true, required: false
  private _osAvSoftwareInstalled?: string; 
  public get osAvSoftwareInstalled() {
    return this.getStringAttribute('os_av_software_installed');
  }
  public set osAvSoftwareInstalled(value: string) {
    this._osAvSoftwareInstalled = value;
  }
  public resetOsAvSoftwareInstalled() {
    this._osAvSoftwareInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osAvSoftwareInstalledInput() {
    return this._osAvSoftwareInstalled;
  }

  // sandbox_address - computed: false, optional: true, required: false
  private _sandboxAddress?: string; 
  public get sandboxAddress() {
    return this.getStringAttribute('sandbox_address');
  }
  public set sandboxAddress(value: string) {
    this._sandboxAddress = value;
  }
  public resetSandboxAddress() {
    this._sandboxAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxAddressInput() {
    return this._sandboxAddress;
  }

  // sandbox_analysis - computed: false, optional: true, required: false
  private _sandboxAnalysis?: string; 
  public get sandboxAnalysis() {
    return this.getStringAttribute('sandbox_analysis');
  }
  public set sandboxAnalysis(value: string) {
    this._sandboxAnalysis = value;
  }
  public resetSandboxAnalysis() {
    this._sandboxAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxAnalysisInput() {
    return this._sandboxAnalysis;
  }

  // forticlient_ems_entries - computed: false, optional: true, required: false
  private _forticlientEmsEntries = new EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntriesList(this, "forticlient_ems_entries", false);
  public get forticlientEmsEntries() {
    return this._forticlientEmsEntries;
  }
  public putForticlientEmsEntries(value: EndpointcontrolProfileForticlientWinmacSettingsForticlientEmsEntries[] | cdktf.IResolvable) {
    this._forticlientEmsEntries.internalValue = value;
  }
  public resetForticlientEmsEntries() {
    this._forticlientEmsEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientEmsEntriesInput() {
    return this._forticlientEmsEntries.internalValue;
  }

  // forticlient_operating_system - computed: false, optional: true, required: false
  private _forticlientOperatingSystem = new EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystemList(this, "forticlient_operating_system", false);
  public get forticlientOperatingSystem() {
    return this._forticlientOperatingSystem;
  }
  public putForticlientOperatingSystem(value: EndpointcontrolProfileForticlientWinmacSettingsForticlientOperatingSystem[] | cdktf.IResolvable) {
    this._forticlientOperatingSystem.internalValue = value;
  }
  public resetForticlientOperatingSystem() {
    this._forticlientOperatingSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientOperatingSystemInput() {
    return this._forticlientOperatingSystem.internalValue;
  }

  // forticlient_own_file - computed: false, optional: true, required: false
  private _forticlientOwnFile = new EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFileList(this, "forticlient_own_file", false);
  public get forticlientOwnFile() {
    return this._forticlientOwnFile;
  }
  public putForticlientOwnFile(value: EndpointcontrolProfileForticlientWinmacSettingsForticlientOwnFile[] | cdktf.IResolvable) {
    this._forticlientOwnFile.internalValue = value;
  }
  public resetForticlientOwnFile() {
    this._forticlientOwnFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientOwnFileInput() {
    return this._forticlientOwnFile.internalValue;
  }

  // forticlient_registry_entry - computed: false, optional: true, required: false
  private _forticlientRegistryEntry = new EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntryList(this, "forticlient_registry_entry", false);
  public get forticlientRegistryEntry() {
    return this._forticlientRegistryEntry;
  }
  public putForticlientRegistryEntry(value: EndpointcontrolProfileForticlientWinmacSettingsForticlientRegistryEntry[] | cdktf.IResolvable) {
    this._forticlientRegistryEntry.internalValue = value;
  }
  public resetForticlientRegistryEntry() {
    this._forticlientRegistryEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientRegistryEntryInput() {
    return this._forticlientRegistryEntry.internalValue;
  }

  // forticlient_running_app - computed: false, optional: true, required: false
  private _forticlientRunningApp = new EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningAppList(this, "forticlient_running_app", false);
  public get forticlientRunningApp() {
    return this._forticlientRunningApp;
  }
  public putForticlientRunningApp(value: EndpointcontrolProfileForticlientWinmacSettingsForticlientRunningApp[] | cdktf.IResolvable) {
    this._forticlientRunningApp.internalValue = value;
  }
  public resetForticlientRunningApp() {
    this._forticlientRunningApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientRunningAppInput() {
    return this._forticlientRunningApp.internalValue;
  }
}
export interface EndpointcontrolProfileOnNetAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#name EndpointcontrolProfile#name}
  */
  readonly name?: string;
}

export function endpointcontrolProfileOnNetAddrToTerraform(struct?: EndpointcontrolProfileOnNetAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function endpointcontrolProfileOnNetAddrToHclTerraform(struct?: EndpointcontrolProfileOnNetAddr | cdktf.IResolvable): any {
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

export class EndpointcontrolProfileOnNetAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointcontrolProfileOnNetAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EndpointcontrolProfileOnNetAddr | cdktf.IResolvable | undefined) {
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

export class EndpointcontrolProfileOnNetAddrList extends cdktf.ComplexList {
  public internalValue? : EndpointcontrolProfileOnNetAddr[] | cdktf.IResolvable

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
  public get(index: number): EndpointcontrolProfileOnNetAddrOutputReference {
    return new EndpointcontrolProfileOnNetAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointcontrolProfileSrcAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#name EndpointcontrolProfile#name}
  */
  readonly name?: string;
}

export function endpointcontrolProfileSrcAddrToTerraform(struct?: EndpointcontrolProfileSrcAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function endpointcontrolProfileSrcAddrToHclTerraform(struct?: EndpointcontrolProfileSrcAddr | cdktf.IResolvable): any {
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

export class EndpointcontrolProfileSrcAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointcontrolProfileSrcAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EndpointcontrolProfileSrcAddr | cdktf.IResolvable | undefined) {
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

export class EndpointcontrolProfileSrcAddrList extends cdktf.ComplexList {
  public internalValue? : EndpointcontrolProfileSrcAddr[] | cdktf.IResolvable

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
  public get(index: number): EndpointcontrolProfileSrcAddrOutputReference {
    return new EndpointcontrolProfileSrcAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointcontrolProfileUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#name EndpointcontrolProfile#name}
  */
  readonly name?: string;
}

export function endpointcontrolProfileUserGroupsToTerraform(struct?: EndpointcontrolProfileUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function endpointcontrolProfileUserGroupsToHclTerraform(struct?: EndpointcontrolProfileUserGroups | cdktf.IResolvable): any {
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

export class EndpointcontrolProfileUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointcontrolProfileUserGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EndpointcontrolProfileUserGroups | cdktf.IResolvable | undefined) {
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

export class EndpointcontrolProfileUserGroupsList extends cdktf.ComplexList {
  public internalValue? : EndpointcontrolProfileUserGroups[] | cdktf.IResolvable

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
  public get(index: number): EndpointcontrolProfileUserGroupsOutputReference {
    return new EndpointcontrolProfileUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointcontrolProfileUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#name EndpointcontrolProfile#name}
  */
  readonly name?: string;
}

export function endpointcontrolProfileUsersToTerraform(struct?: EndpointcontrolProfileUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function endpointcontrolProfileUsersToHclTerraform(struct?: EndpointcontrolProfileUsers | cdktf.IResolvable): any {
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

export class EndpointcontrolProfileUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointcontrolProfileUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EndpointcontrolProfileUsers | cdktf.IResolvable | undefined) {
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

export class EndpointcontrolProfileUsersList extends cdktf.ComplexList {
  public internalValue? : EndpointcontrolProfileUsers[] | cdktf.IResolvable

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
  public get(index: number): EndpointcontrolProfileUsersOutputReference {
    return new EndpointcontrolProfileUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile fortios_endpointcontrol_profile}
*/
export class EndpointcontrolProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_endpointcontrol_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointcontrolProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointcontrolProfile to import
  * @param importFromId The id of the existing EndpointcontrolProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointcontrolProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_endpointcontrol_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/endpointcontrol_profile fortios_endpointcontrol_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointcontrolProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EndpointcontrolProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_endpointcontrol_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._profileName = config.profileName;
    this._replacemsgOverrideGroup = config.replacemsgOverrideGroup;
    this._vdomparam = config.vdomparam;
    this._deviceGroups.internalValue = config.deviceGroups;
    this._forticlientAndroidSettings.internalValue = config.forticlientAndroidSettings;
    this._forticlientIosSettings.internalValue = config.forticlientIosSettings;
    this._forticlientWinmacSettings.internalValue = config.forticlientWinmacSettings;
    this._onNetAddr.internalValue = config.onNetAddr;
    this._srcAddr.internalValue = config.srcAddr;
    this._userGroups.internalValue = config.userGroups;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // replacemsg_override_group - computed: false, optional: true, required: false
  private _replacemsgOverrideGroup?: string; 
  public get replacemsgOverrideGroup() {
    return this.getStringAttribute('replacemsg_override_group');
  }
  public set replacemsgOverrideGroup(value: string) {
    this._replacemsgOverrideGroup = value;
  }
  public resetReplacemsgOverrideGroup() {
    this._replacemsgOverrideGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgOverrideGroupInput() {
    return this._replacemsgOverrideGroup;
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

  // device_groups - computed: false, optional: true, required: false
  private _deviceGroups = new EndpointcontrolProfileDeviceGroupsList(this, "device_groups", false);
  public get deviceGroups() {
    return this._deviceGroups;
  }
  public putDeviceGroups(value: EndpointcontrolProfileDeviceGroups[] | cdktf.IResolvable) {
    this._deviceGroups.internalValue = value;
  }
  public resetDeviceGroups() {
    this._deviceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupsInput() {
    return this._deviceGroups.internalValue;
  }

  // forticlient_android_settings - computed: false, optional: true, required: false
  private _forticlientAndroidSettings = new EndpointcontrolProfileForticlientAndroidSettingsOutputReference(this, "forticlient_android_settings");
  public get forticlientAndroidSettings() {
    return this._forticlientAndroidSettings;
  }
  public putForticlientAndroidSettings(value: EndpointcontrolProfileForticlientAndroidSettings) {
    this._forticlientAndroidSettings.internalValue = value;
  }
  public resetForticlientAndroidSettings() {
    this._forticlientAndroidSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientAndroidSettingsInput() {
    return this._forticlientAndroidSettings.internalValue;
  }

  // forticlient_ios_settings - computed: false, optional: true, required: false
  private _forticlientIosSettings = new EndpointcontrolProfileForticlientIosSettingsOutputReference(this, "forticlient_ios_settings");
  public get forticlientIosSettings() {
    return this._forticlientIosSettings;
  }
  public putForticlientIosSettings(value: EndpointcontrolProfileForticlientIosSettings) {
    this._forticlientIosSettings.internalValue = value;
  }
  public resetForticlientIosSettings() {
    this._forticlientIosSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientIosSettingsInput() {
    return this._forticlientIosSettings.internalValue;
  }

  // forticlient_winmac_settings - computed: false, optional: true, required: false
  private _forticlientWinmacSettings = new EndpointcontrolProfileForticlientWinmacSettingsOutputReference(this, "forticlient_winmac_settings");
  public get forticlientWinmacSettings() {
    return this._forticlientWinmacSettings;
  }
  public putForticlientWinmacSettings(value: EndpointcontrolProfileForticlientWinmacSettings) {
    this._forticlientWinmacSettings.internalValue = value;
  }
  public resetForticlientWinmacSettings() {
    this._forticlientWinmacSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientWinmacSettingsInput() {
    return this._forticlientWinmacSettings.internalValue;
  }

  // on_net_addr - computed: false, optional: true, required: false
  private _onNetAddr = new EndpointcontrolProfileOnNetAddrList(this, "on_net_addr", false);
  public get onNetAddr() {
    return this._onNetAddr;
  }
  public putOnNetAddr(value: EndpointcontrolProfileOnNetAddr[] | cdktf.IResolvable) {
    this._onNetAddr.internalValue = value;
  }
  public resetOnNetAddr() {
    this._onNetAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onNetAddrInput() {
    return this._onNetAddr.internalValue;
  }

  // src_addr - computed: false, optional: true, required: false
  private _srcAddr = new EndpointcontrolProfileSrcAddrList(this, "src_addr", false);
  public get srcAddr() {
    return this._srcAddr;
  }
  public putSrcAddr(value: EndpointcontrolProfileSrcAddr[] | cdktf.IResolvable) {
    this._srcAddr.internalValue = value;
  }
  public resetSrcAddr() {
    this._srcAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddrInput() {
    return this._srcAddr.internalValue;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups = new EndpointcontrolProfileUserGroupsList(this, "user_groups", false);
  public get userGroups() {
    return this._userGroups;
  }
  public putUserGroups(value: EndpointcontrolProfileUserGroups[] | cdktf.IResolvable) {
    this._userGroups.internalValue = value;
  }
  public resetUserGroups() {
    this._userGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new EndpointcontrolProfileUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: EndpointcontrolProfileUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      profile_name: cdktf.stringToTerraform(this._profileName),
      replacemsg_override_group: cdktf.stringToTerraform(this._replacemsgOverrideGroup),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      device_groups: cdktf.listMapper(endpointcontrolProfileDeviceGroupsToTerraform, true)(this._deviceGroups.internalValue),
      forticlient_android_settings: endpointcontrolProfileForticlientAndroidSettingsToTerraform(this._forticlientAndroidSettings.internalValue),
      forticlient_ios_settings: endpointcontrolProfileForticlientIosSettingsToTerraform(this._forticlientIosSettings.internalValue),
      forticlient_winmac_settings: endpointcontrolProfileForticlientWinmacSettingsToTerraform(this._forticlientWinmacSettings.internalValue),
      on_net_addr: cdktf.listMapper(endpointcontrolProfileOnNetAddrToTerraform, true)(this._onNetAddr.internalValue),
      src_addr: cdktf.listMapper(endpointcontrolProfileSrcAddrToTerraform, true)(this._srcAddr.internalValue),
      user_groups: cdktf.listMapper(endpointcontrolProfileUserGroupsToTerraform, true)(this._userGroups.internalValue),
      users: cdktf.listMapper(endpointcontrolProfileUsersToTerraform, true)(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacemsg_override_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgOverrideGroup),
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
      device_groups: {
        value: cdktf.listMapperHcl(endpointcontrolProfileDeviceGroupsToHclTerraform, true)(this._deviceGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointcontrolProfileDeviceGroupsList",
      },
      forticlient_android_settings: {
        value: endpointcontrolProfileForticlientAndroidSettingsToHclTerraform(this._forticlientAndroidSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointcontrolProfileForticlientAndroidSettingsList",
      },
      forticlient_ios_settings: {
        value: endpointcontrolProfileForticlientIosSettingsToHclTerraform(this._forticlientIosSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointcontrolProfileForticlientIosSettingsList",
      },
      forticlient_winmac_settings: {
        value: endpointcontrolProfileForticlientWinmacSettingsToHclTerraform(this._forticlientWinmacSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointcontrolProfileForticlientWinmacSettingsList",
      },
      on_net_addr: {
        value: cdktf.listMapperHcl(endpointcontrolProfileOnNetAddrToHclTerraform, true)(this._onNetAddr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointcontrolProfileOnNetAddrList",
      },
      src_addr: {
        value: cdktf.listMapperHcl(endpointcontrolProfileSrcAddrToHclTerraform, true)(this._srcAddr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointcontrolProfileSrcAddrList",
      },
      user_groups: {
        value: cdktf.listMapperHcl(endpointcontrolProfileUserGroupsToHclTerraform, true)(this._userGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointcontrolProfileUserGroupsList",
      },
      users: {
        value: cdktf.listMapperHcl(endpointcontrolProfileUsersToHclTerraform, true)(this._users.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointcontrolProfileUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
