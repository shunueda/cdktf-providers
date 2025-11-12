// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnSslWebUsergroupbookmarkBookmarksAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#additional_params VpnSslWebUsergroupbookmarkBookmarksA#additional_params}
  */
  readonly additionalParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#apptype VpnSslWebUsergroupbookmarkBookmarksA#apptype}
  */
  readonly apptype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#color_depth VpnSslWebUsergroupbookmarkBookmarksA#color_depth}
  */
  readonly colorDepth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#description VpnSslWebUsergroupbookmarkBookmarksA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#device_name VpnSslWebUsergroupbookmarkBookmarksA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#device_vdom VpnSslWebUsergroupbookmarkBookmarksA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#domain VpnSslWebUsergroupbookmarkBookmarksA#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#dynamic_sort_subtable VpnSslWebUsergroupbookmarkBookmarksA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#folder VpnSslWebUsergroupbookmarkBookmarksA#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#height VpnSslWebUsergroupbookmarkBookmarksA#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#host VpnSslWebUsergroupbookmarkBookmarksA#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#id VpnSslWebUsergroupbookmarkBookmarksA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#keyboard_layout VpnSslWebUsergroupbookmarkBookmarksA#keyboard_layout}
  */
  readonly keyboardLayout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#listening_port VpnSslWebUsergroupbookmarkBookmarksA#listening_port}
  */
  readonly listeningPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#load_balancing_info VpnSslWebUsergroupbookmarkBookmarksA#load_balancing_info}
  */
  readonly loadBalancingInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#logon_password VpnSslWebUsergroupbookmarkBookmarksA#logon_password}
  */
  readonly logonPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#logon_user VpnSslWebUsergroupbookmarkBookmarksA#logon_user}
  */
  readonly logonUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#name VpnSslWebUsergroupbookmarkBookmarksA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#port VpnSslWebUsergroupbookmarkBookmarksA#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#preconnection_blob VpnSslWebUsergroupbookmarkBookmarksA#preconnection_blob}
  */
  readonly preconnectionBlob?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#preconnection_id VpnSslWebUsergroupbookmarkBookmarksA#preconnection_id}
  */
  readonly preconnectionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#remote_port VpnSslWebUsergroupbookmarkBookmarksA#remote_port}
  */
  readonly remotePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#restricted_admin VpnSslWebUsergroupbookmarkBookmarksA#restricted_admin}
  */
  readonly restrictedAdmin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#security VpnSslWebUsergroupbookmarkBookmarksA#security}
  */
  readonly security?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#send_preconnection_id VpnSslWebUsergroupbookmarkBookmarksA#send_preconnection_id}
  */
  readonly sendPreconnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#server_layout VpnSslWebUsergroupbookmarkBookmarksA#server_layout}
  */
  readonly serverLayout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#show_status_window VpnSslWebUsergroupbookmarkBookmarksA#show_status_window}
  */
  readonly showStatusWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#sso VpnSslWebUsergroupbookmarkBookmarksA#sso}
  */
  readonly sso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#sso_credential VpnSslWebUsergroupbookmarkBookmarksA#sso_credential}
  */
  readonly ssoCredential?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#sso_credential_sent_once VpnSslWebUsergroupbookmarkBookmarksA#sso_credential_sent_once}
  */
  readonly ssoCredentialSentOnce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#sso_password VpnSslWebUsergroupbookmarkBookmarksA#sso_password}
  */
  readonly ssoPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#sso_username VpnSslWebUsergroupbookmarkBookmarksA#sso_username}
  */
  readonly ssoUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#url VpnSslWebUsergroupbookmarkBookmarksA#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#user_group_bookmark VpnSslWebUsergroupbookmarkBookmarksA#user_group_bookmark}
  */
  readonly userGroupBookmark: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#vnc_keyboard_layout VpnSslWebUsergroupbookmarkBookmarksA#vnc_keyboard_layout}
  */
  readonly vncKeyboardLayout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#width VpnSslWebUsergroupbookmarkBookmarksA#width}
  */
  readonly width?: number;
  /**
  * form_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#form_data VpnSslWebUsergroupbookmarkBookmarksA#form_data}
  */
  readonly formData?: VpnSslWebUsergroupbookmarkBookmarksFormDataA[] | cdktf.IResolvable;
}
export interface VpnSslWebUsergroupbookmarkBookmarksFormDataA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#name VpnSslWebUsergroupbookmarkBookmarksA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#value VpnSslWebUsergroupbookmarkBookmarksA#value}
  */
  readonly value?: string;
}

export function vpnSslWebUsergroupbookmarkBookmarksFormDataAToTerraform(struct?: VpnSslWebUsergroupbookmarkBookmarksFormDataA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vpnSslWebUsergroupbookmarkBookmarksFormDataAToHclTerraform(struct?: VpnSslWebUsergroupbookmarkBookmarksFormDataA | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnSslWebUsergroupbookmarkBookmarksFormDataAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnSslWebUsergroupbookmarkBookmarksFormDataA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnSslWebUsergroupbookmarkBookmarksFormDataA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VpnSslWebUsergroupbookmarkBookmarksFormDataAList extends cdktf.ComplexList {
  public internalValue? : VpnSslWebUsergroupbookmarkBookmarksFormDataA[] | cdktf.IResolvable

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
  public get(index: number): VpnSslWebUsergroupbookmarkBookmarksFormDataAOutputReference {
    return new VpnSslWebUsergroupbookmarkBookmarksFormDataAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks fmgdevice_vpn_ssl_web_usergroupbookmark_bookmarks}
*/
export class VpnSslWebUsergroupbookmarkBookmarksA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_vpn_ssl_web_usergroupbookmark_bookmarks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnSslWebUsergroupbookmarkBookmarksA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnSslWebUsergroupbookmarkBookmarksA to import
  * @param importFromId The id of the existing VpnSslWebUsergroupbookmarkBookmarksA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnSslWebUsergroupbookmarkBookmarksA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_vpn_ssl_web_usergroupbookmark_bookmarks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ssl_web_usergroupbookmark_bookmarks fmgdevice_vpn_ssl_web_usergroupbookmark_bookmarks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnSslWebUsergroupbookmarkBookmarksAConfig
  */
  public constructor(scope: Construct, id: string, config: VpnSslWebUsergroupbookmarkBookmarksAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_vpn_ssl_web_usergroupbookmark_bookmarks',
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
    this._additionalParams = config.additionalParams;
    this._apptype = config.apptype;
    this._colorDepth = config.colorDepth;
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._domain = config.domain;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._folder = config.folder;
    this._height = config.height;
    this._host = config.host;
    this._id = config.id;
    this._keyboardLayout = config.keyboardLayout;
    this._listeningPort = config.listeningPort;
    this._loadBalancingInfo = config.loadBalancingInfo;
    this._logonPassword = config.logonPassword;
    this._logonUser = config.logonUser;
    this._name = config.name;
    this._port = config.port;
    this._preconnectionBlob = config.preconnectionBlob;
    this._preconnectionId = config.preconnectionId;
    this._remotePort = config.remotePort;
    this._restrictedAdmin = config.restrictedAdmin;
    this._security = config.security;
    this._sendPreconnectionId = config.sendPreconnectionId;
    this._serverLayout = config.serverLayout;
    this._showStatusWindow = config.showStatusWindow;
    this._sso = config.sso;
    this._ssoCredential = config.ssoCredential;
    this._ssoCredentialSentOnce = config.ssoCredentialSentOnce;
    this._ssoPassword = config.ssoPassword;
    this._ssoUsername = config.ssoUsername;
    this._url = config.url;
    this._userGroupBookmark = config.userGroupBookmark;
    this._vncKeyboardLayout = config.vncKeyboardLayout;
    this._width = config.width;
    this._formData.internalValue = config.formData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_params - computed: false, optional: true, required: false
  private _additionalParams?: string; 
  public get additionalParams() {
    return this.getStringAttribute('additional_params');
  }
  public set additionalParams(value: string) {
    this._additionalParams = value;
  }
  public resetAdditionalParams() {
    this._additionalParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalParamsInput() {
    return this._additionalParams;
  }

  // apptype - computed: true, optional: true, required: false
  private _apptype?: string; 
  public get apptype() {
    return this.getStringAttribute('apptype');
  }
  public set apptype(value: string) {
    this._apptype = value;
  }
  public resetApptype() {
    this._apptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apptypeInput() {
    return this._apptype;
  }

  // color_depth - computed: true, optional: true, required: false
  private _colorDepth?: string; 
  public get colorDepth() {
    return this.getStringAttribute('color_depth');
  }
  public set colorDepth(value: string) {
    this._colorDepth = value;
  }
  public resetColorDepth() {
    this._colorDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorDepthInput() {
    return this._colorDepth;
  }

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

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // keyboard_layout - computed: true, optional: true, required: false
  private _keyboardLayout?: string; 
  public get keyboardLayout() {
    return this.getStringAttribute('keyboard_layout');
  }
  public set keyboardLayout(value: string) {
    this._keyboardLayout = value;
  }
  public resetKeyboardLayout() {
    this._keyboardLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyboardLayoutInput() {
    return this._keyboardLayout;
  }

  // listening_port - computed: false, optional: true, required: false
  private _listeningPort?: number; 
  public get listeningPort() {
    return this.getNumberAttribute('listening_port');
  }
  public set listeningPort(value: number) {
    this._listeningPort = value;
  }
  public resetListeningPort() {
    this._listeningPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningPortInput() {
    return this._listeningPort;
  }

  // load_balancing_info - computed: false, optional: true, required: false
  private _loadBalancingInfo?: string; 
  public get loadBalancingInfo() {
    return this.getStringAttribute('load_balancing_info');
  }
  public set loadBalancingInfo(value: string) {
    this._loadBalancingInfo = value;
  }
  public resetLoadBalancingInfo() {
    this._loadBalancingInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingInfoInput() {
    return this._loadBalancingInfo;
  }

  // logon_password - computed: true, optional: true, required: false
  private _logonPassword?: string[]; 
  public get logonPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('logon_password'));
  }
  public set logonPassword(value: string[]) {
    this._logonPassword = value;
  }
  public resetLogonPassword() {
    this._logonPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonPasswordInput() {
    return this._logonPassword;
  }

  // logon_user - computed: false, optional: true, required: false
  private _logonUser?: string; 
  public get logonUser() {
    return this.getStringAttribute('logon_user');
  }
  public set logonUser(value: string) {
    this._logonUser = value;
  }
  public resetLogonUser() {
    this._logonUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonUserInput() {
    return this._logonUser;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // preconnection_blob - computed: false, optional: true, required: false
  private _preconnectionBlob?: string; 
  public get preconnectionBlob() {
    return this.getStringAttribute('preconnection_blob');
  }
  public set preconnectionBlob(value: string) {
    this._preconnectionBlob = value;
  }
  public resetPreconnectionBlob() {
    this._preconnectionBlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconnectionBlobInput() {
    return this._preconnectionBlob;
  }

  // preconnection_id - computed: false, optional: true, required: false
  private _preconnectionId?: number; 
  public get preconnectionId() {
    return this.getNumberAttribute('preconnection_id');
  }
  public set preconnectionId(value: number) {
    this._preconnectionId = value;
  }
  public resetPreconnectionId() {
    this._preconnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconnectionIdInput() {
    return this._preconnectionId;
  }

  // remote_port - computed: false, optional: true, required: false
  private _remotePort?: number; 
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
  public set remotePort(value: number) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }

  // restricted_admin - computed: true, optional: true, required: false
  private _restrictedAdmin?: string; 
  public get restrictedAdmin() {
    return this.getStringAttribute('restricted_admin');
  }
  public set restrictedAdmin(value: string) {
    this._restrictedAdmin = value;
  }
  public resetRestrictedAdmin() {
    this._restrictedAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedAdminInput() {
    return this._restrictedAdmin;
  }

  // security - computed: false, optional: true, required: false
  private _security?: string; 
  public get security() {
    return this.getStringAttribute('security');
  }
  public set security(value: string) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // send_preconnection_id - computed: true, optional: true, required: false
  private _sendPreconnectionId?: string; 
  public get sendPreconnectionId() {
    return this.getStringAttribute('send_preconnection_id');
  }
  public set sendPreconnectionId(value: string) {
    this._sendPreconnectionId = value;
  }
  public resetSendPreconnectionId() {
    this._sendPreconnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPreconnectionIdInput() {
    return this._sendPreconnectionId;
  }

  // server_layout - computed: false, optional: true, required: false
  private _serverLayout?: string; 
  public get serverLayout() {
    return this.getStringAttribute('server_layout');
  }
  public set serverLayout(value: string) {
    this._serverLayout = value;
  }
  public resetServerLayout() {
    this._serverLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLayoutInput() {
    return this._serverLayout;
  }

  // show_status_window - computed: false, optional: true, required: false
  private _showStatusWindow?: string; 
  public get showStatusWindow() {
    return this.getStringAttribute('show_status_window');
  }
  public set showStatusWindow(value: string) {
    this._showStatusWindow = value;
  }
  public resetShowStatusWindow() {
    this._showStatusWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showStatusWindowInput() {
    return this._showStatusWindow;
  }

  // sso - computed: true, optional: true, required: false
  private _sso?: string; 
  public get sso() {
    return this.getStringAttribute('sso');
  }
  public set sso(value: string) {
    this._sso = value;
  }
  public resetSso() {
    this._sso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso;
  }

  // sso_credential - computed: true, optional: true, required: false
  private _ssoCredential?: string; 
  public get ssoCredential() {
    return this.getStringAttribute('sso_credential');
  }
  public set ssoCredential(value: string) {
    this._ssoCredential = value;
  }
  public resetSsoCredential() {
    this._ssoCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoCredentialInput() {
    return this._ssoCredential;
  }

  // sso_credential_sent_once - computed: true, optional: true, required: false
  private _ssoCredentialSentOnce?: string; 
  public get ssoCredentialSentOnce() {
    return this.getStringAttribute('sso_credential_sent_once');
  }
  public set ssoCredentialSentOnce(value: string) {
    this._ssoCredentialSentOnce = value;
  }
  public resetSsoCredentialSentOnce() {
    this._ssoCredentialSentOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoCredentialSentOnceInput() {
    return this._ssoCredentialSentOnce;
  }

  // sso_password - computed: true, optional: true, required: false
  private _ssoPassword?: string[]; 
  public get ssoPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sso_password'));
  }
  public set ssoPassword(value: string[]) {
    this._ssoPassword = value;
  }
  public resetSsoPassword() {
    this._ssoPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoPasswordInput() {
    return this._ssoPassword;
  }

  // sso_username - computed: false, optional: true, required: false
  private _ssoUsername?: string; 
  public get ssoUsername() {
    return this.getStringAttribute('sso_username');
  }
  public set ssoUsername(value: string) {
    this._ssoUsername = value;
  }
  public resetSsoUsername() {
    this._ssoUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUsernameInput() {
    return this._ssoUsername;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_group_bookmark - computed: false, optional: false, required: true
  private _userGroupBookmark?: string; 
  public get userGroupBookmark() {
    return this.getStringAttribute('user_group_bookmark');
  }
  public set userGroupBookmark(value: string) {
    this._userGroupBookmark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupBookmarkInput() {
    return this._userGroupBookmark;
  }

  // vnc_keyboard_layout - computed: true, optional: true, required: false
  private _vncKeyboardLayout?: string; 
  public get vncKeyboardLayout() {
    return this.getStringAttribute('vnc_keyboard_layout');
  }
  public set vncKeyboardLayout(value: string) {
    this._vncKeyboardLayout = value;
  }
  public resetVncKeyboardLayout() {
    this._vncKeyboardLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vncKeyboardLayoutInput() {
    return this._vncKeyboardLayout;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // form_data - computed: false, optional: true, required: false
  private _formData = new VpnSslWebUsergroupbookmarkBookmarksFormDataAList(this, "form_data", false);
  public get formData() {
    return this._formData;
  }
  public putFormData(value: VpnSslWebUsergroupbookmarkBookmarksFormDataA[] | cdktf.IResolvable) {
    this._formData.internalValue = value;
  }
  public resetFormData() {
    this._formData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formDataInput() {
    return this._formData.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_params: cdktf.stringToTerraform(this._additionalParams),
      apptype: cdktf.stringToTerraform(this._apptype),
      color_depth: cdktf.stringToTerraform(this._colorDepth),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      domain: cdktf.stringToTerraform(this._domain),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      folder: cdktf.stringToTerraform(this._folder),
      height: cdktf.numberToTerraform(this._height),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      keyboard_layout: cdktf.stringToTerraform(this._keyboardLayout),
      listening_port: cdktf.numberToTerraform(this._listeningPort),
      load_balancing_info: cdktf.stringToTerraform(this._loadBalancingInfo),
      logon_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logonPassword),
      logon_user: cdktf.stringToTerraform(this._logonUser),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      preconnection_blob: cdktf.stringToTerraform(this._preconnectionBlob),
      preconnection_id: cdktf.numberToTerraform(this._preconnectionId),
      remote_port: cdktf.numberToTerraform(this._remotePort),
      restricted_admin: cdktf.stringToTerraform(this._restrictedAdmin),
      security: cdktf.stringToTerraform(this._security),
      send_preconnection_id: cdktf.stringToTerraform(this._sendPreconnectionId),
      server_layout: cdktf.stringToTerraform(this._serverLayout),
      show_status_window: cdktf.stringToTerraform(this._showStatusWindow),
      sso: cdktf.stringToTerraform(this._sso),
      sso_credential: cdktf.stringToTerraform(this._ssoCredential),
      sso_credential_sent_once: cdktf.stringToTerraform(this._ssoCredentialSentOnce),
      sso_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ssoPassword),
      sso_username: cdktf.stringToTerraform(this._ssoUsername),
      url: cdktf.stringToTerraform(this._url),
      user_group_bookmark: cdktf.stringToTerraform(this._userGroupBookmark),
      vnc_keyboard_layout: cdktf.stringToTerraform(this._vncKeyboardLayout),
      width: cdktf.numberToTerraform(this._width),
      form_data: cdktf.listMapper(vpnSslWebUsergroupbookmarkBookmarksFormDataAToTerraform, true)(this._formData.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_params: {
        value: cdktf.stringToHclTerraform(this._additionalParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apptype: {
        value: cdktf.stringToHclTerraform(this._apptype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color_depth: {
        value: cdktf.stringToHclTerraform(this._colorDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      height: {
        value: cdktf.numberToHclTerraform(this._height),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      keyboard_layout: {
        value: cdktf.stringToHclTerraform(this._keyboardLayout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listening_port: {
        value: cdktf.numberToHclTerraform(this._listeningPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_balancing_info: {
        value: cdktf.stringToHclTerraform(this._loadBalancingInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logon_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logonPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      logon_user: {
        value: cdktf.stringToHclTerraform(this._logonUser),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preconnection_blob: {
        value: cdktf.stringToHclTerraform(this._preconnectionBlob),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preconnection_id: {
        value: cdktf.numberToHclTerraform(this._preconnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_port: {
        value: cdktf.numberToHclTerraform(this._remotePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restricted_admin: {
        value: cdktf.stringToHclTerraform(this._restrictedAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security: {
        value: cdktf.stringToHclTerraform(this._security),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_preconnection_id: {
        value: cdktf.stringToHclTerraform(this._sendPreconnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_layout: {
        value: cdktf.stringToHclTerraform(this._serverLayout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_status_window: {
        value: cdktf.stringToHclTerraform(this._showStatusWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso: {
        value: cdktf.stringToHclTerraform(this._sso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_credential: {
        value: cdktf.stringToHclTerraform(this._ssoCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_credential_sent_once: {
        value: cdktf.stringToHclTerraform(this._ssoCredentialSentOnce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ssoPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sso_username: {
        value: cdktf.stringToHclTerraform(this._ssoUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_bookmark: {
        value: cdktf.stringToHclTerraform(this._userGroupBookmark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnc_keyboard_layout: {
        value: cdktf.stringToHclTerraform(this._vncKeyboardLayout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      width: {
        value: cdktf.numberToHclTerraform(this._width),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      form_data: {
        value: cdktf.listMapperHcl(vpnSslWebUsergroupbookmarkBookmarksFormDataAToHclTerraform, true)(this._formData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnSslWebUsergroupbookmarkBookmarksFormDataAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
