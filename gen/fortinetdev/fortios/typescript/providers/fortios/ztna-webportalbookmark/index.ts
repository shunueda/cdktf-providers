// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZtnaWebportalbookmarkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#dynamic_sort_subtable ZtnaWebportalbookmark#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#get_all_tables ZtnaWebportalbookmark#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#id ZtnaWebportalbookmark#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#name ZtnaWebportalbookmark#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#vdomparam ZtnaWebportalbookmark#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * bookmarks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#bookmarks ZtnaWebportalbookmark#bookmarks}
  */
  readonly bookmarks?: ZtnaWebportalbookmarkBookmarks[] | cdktf.IResolvable;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#groups ZtnaWebportalbookmark#groups}
  */
  readonly groups?: ZtnaWebportalbookmarkGroups[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#users ZtnaWebportalbookmark#users}
  */
  readonly users?: ZtnaWebportalbookmarkUsers[] | cdktf.IResolvable;
}
export interface ZtnaWebportalbookmarkBookmarks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#apptype ZtnaWebportalbookmark#apptype}
  */
  readonly apptype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#color_depth ZtnaWebportalbookmark#color_depth}
  */
  readonly colorDepth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#description ZtnaWebportalbookmark#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#domain ZtnaWebportalbookmark#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#folder ZtnaWebportalbookmark#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#height ZtnaWebportalbookmark#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#host ZtnaWebportalbookmark#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#keyboard_layout ZtnaWebportalbookmark#keyboard_layout}
  */
  readonly keyboardLayout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#load_balancing_info ZtnaWebportalbookmark#load_balancing_info}
  */
  readonly loadBalancingInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#logon_password ZtnaWebportalbookmark#logon_password}
  */
  readonly logonPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#logon_user ZtnaWebportalbookmark#logon_user}
  */
  readonly logonUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#name ZtnaWebportalbookmark#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#port ZtnaWebportalbookmark#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#preconnection_blob ZtnaWebportalbookmark#preconnection_blob}
  */
  readonly preconnectionBlob?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#preconnection_id ZtnaWebportalbookmark#preconnection_id}
  */
  readonly preconnectionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#restricted_admin ZtnaWebportalbookmark#restricted_admin}
  */
  readonly restrictedAdmin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#security ZtnaWebportalbookmark#security}
  */
  readonly security?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#send_preconnection_id ZtnaWebportalbookmark#send_preconnection_id}
  */
  readonly sendPreconnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#sso ZtnaWebportalbookmark#sso}
  */
  readonly sso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#url ZtnaWebportalbookmark#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#vnc_keyboard_layout ZtnaWebportalbookmark#vnc_keyboard_layout}
  */
  readonly vncKeyboardLayout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#width ZtnaWebportalbookmark#width}
  */
  readonly width?: number;
}

export function ztnaWebportalbookmarkBookmarksToTerraform(struct?: ZtnaWebportalbookmarkBookmarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apptype: cdktf.stringToTerraform(struct!.apptype),
    color_depth: cdktf.stringToTerraform(struct!.colorDepth),
    description: cdktf.stringToTerraform(struct!.description),
    domain: cdktf.stringToTerraform(struct!.domain),
    folder: cdktf.stringToTerraform(struct!.folder),
    height: cdktf.numberToTerraform(struct!.height),
    host: cdktf.stringToTerraform(struct!.host),
    keyboard_layout: cdktf.stringToTerraform(struct!.keyboardLayout),
    load_balancing_info: cdktf.stringToTerraform(struct!.loadBalancingInfo),
    logon_password: cdktf.stringToTerraform(struct!.logonPassword),
    logon_user: cdktf.stringToTerraform(struct!.logonUser),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    preconnection_blob: cdktf.stringToTerraform(struct!.preconnectionBlob),
    preconnection_id: cdktf.numberToTerraform(struct!.preconnectionId),
    restricted_admin: cdktf.stringToTerraform(struct!.restrictedAdmin),
    security: cdktf.stringToTerraform(struct!.security),
    send_preconnection_id: cdktf.stringToTerraform(struct!.sendPreconnectionId),
    sso: cdktf.stringToTerraform(struct!.sso),
    url: cdktf.stringToTerraform(struct!.url),
    vnc_keyboard_layout: cdktf.stringToTerraform(struct!.vncKeyboardLayout),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function ztnaWebportalbookmarkBookmarksToHclTerraform(struct?: ZtnaWebportalbookmarkBookmarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apptype: {
      value: cdktf.stringToHclTerraform(struct!.apptype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_depth: {
      value: cdktf.stringToHclTerraform(struct!.colorDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyboard_layout: {
      value: cdktf.stringToHclTerraform(struct!.keyboardLayout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancing_info: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logon_password: {
      value: cdktf.stringToHclTerraform(struct!.logonPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logon_user: {
      value: cdktf.stringToHclTerraform(struct!.logonUser),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preconnection_blob: {
      value: cdktf.stringToHclTerraform(struct!.preconnectionBlob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preconnection_id: {
      value: cdktf.numberToHclTerraform(struct!.preconnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restricted_admin: {
      value: cdktf.stringToHclTerraform(struct!.restrictedAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security: {
      value: cdktf.stringToHclTerraform(struct!.security),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_preconnection_id: {
      value: cdktf.stringToHclTerraform(struct!.sendPreconnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso: {
      value: cdktf.stringToHclTerraform(struct!.sso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnc_keyboard_layout: {
      value: cdktf.stringToHclTerraform(struct!.vncKeyboardLayout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaWebportalbookmarkBookmarksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaWebportalbookmarkBookmarks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apptype !== undefined) {
      hasAnyValues = true;
      internalValueResult.apptype = this._apptype;
    }
    if (this._colorDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorDepth = this._colorDepth;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keyboardLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyboardLayout = this._keyboardLayout;
    }
    if (this._loadBalancingInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingInfo = this._loadBalancingInfo;
    }
    if (this._logonPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.logonPassword = this._logonPassword;
    }
    if (this._logonUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.logonUser = this._logonUser;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preconnectionBlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconnectionBlob = this._preconnectionBlob;
    }
    if (this._preconnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconnectionId = this._preconnectionId;
    }
    if (this._restrictedAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedAdmin = this._restrictedAdmin;
    }
    if (this._security !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security;
    }
    if (this._sendPreconnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPreconnectionId = this._sendPreconnectionId;
    }
    if (this._sso !== undefined) {
      hasAnyValues = true;
      internalValueResult.sso = this._sso;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._vncKeyboardLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.vncKeyboardLayout = this._vncKeyboardLayout;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaWebportalbookmarkBookmarks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apptype = undefined;
      this._colorDepth = undefined;
      this._description = undefined;
      this._domain = undefined;
      this._folder = undefined;
      this._height = undefined;
      this._host = undefined;
      this._keyboardLayout = undefined;
      this._loadBalancingInfo = undefined;
      this._logonPassword = undefined;
      this._logonUser = undefined;
      this._name = undefined;
      this._port = undefined;
      this._preconnectionBlob = undefined;
      this._preconnectionId = undefined;
      this._restrictedAdmin = undefined;
      this._security = undefined;
      this._sendPreconnectionId = undefined;
      this._sso = undefined;
      this._url = undefined;
      this._vncKeyboardLayout = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apptype = value.apptype;
      this._colorDepth = value.colorDepth;
      this._description = value.description;
      this._domain = value.domain;
      this._folder = value.folder;
      this._height = value.height;
      this._host = value.host;
      this._keyboardLayout = value.keyboardLayout;
      this._loadBalancingInfo = value.loadBalancingInfo;
      this._logonPassword = value.logonPassword;
      this._logonUser = value.logonUser;
      this._name = value.name;
      this._port = value.port;
      this._preconnectionBlob = value.preconnectionBlob;
      this._preconnectionId = value.preconnectionId;
      this._restrictedAdmin = value.restrictedAdmin;
      this._security = value.security;
      this._sendPreconnectionId = value.sendPreconnectionId;
      this._sso = value.sso;
      this._url = value.url;
      this._vncKeyboardLayout = value.vncKeyboardLayout;
      this._width = value.width;
    }
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

  // logon_password - computed: false, optional: true, required: false
  private _logonPassword?: string; 
  public get logonPassword() {
    return this.getStringAttribute('logon_password');
  }
  public set logonPassword(value: string) {
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

  // security - computed: true, optional: true, required: false
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
}

export class ZtnaWebportalbookmarkBookmarksList extends cdktf.ComplexList {
  public internalValue? : ZtnaWebportalbookmarkBookmarks[] | cdktf.IResolvable

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
  public get(index: number): ZtnaWebportalbookmarkBookmarksOutputReference {
    return new ZtnaWebportalbookmarkBookmarksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaWebportalbookmarkGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#name ZtnaWebportalbookmark#name}
  */
  readonly name?: string;
}

export function ztnaWebportalbookmarkGroupsToTerraform(struct?: ZtnaWebportalbookmarkGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ztnaWebportalbookmarkGroupsToHclTerraform(struct?: ZtnaWebportalbookmarkGroups | cdktf.IResolvable): any {
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

export class ZtnaWebportalbookmarkGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaWebportalbookmarkGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZtnaWebportalbookmarkGroups | cdktf.IResolvable | undefined) {
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

export class ZtnaWebportalbookmarkGroupsList extends cdktf.ComplexList {
  public internalValue? : ZtnaWebportalbookmarkGroups[] | cdktf.IResolvable

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
  public get(index: number): ZtnaWebportalbookmarkGroupsOutputReference {
    return new ZtnaWebportalbookmarkGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaWebportalbookmarkUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#name ZtnaWebportalbookmark#name}
  */
  readonly name?: string;
}

export function ztnaWebportalbookmarkUsersToTerraform(struct?: ZtnaWebportalbookmarkUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ztnaWebportalbookmarkUsersToHclTerraform(struct?: ZtnaWebportalbookmarkUsers | cdktf.IResolvable): any {
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

export class ZtnaWebportalbookmarkUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaWebportalbookmarkUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZtnaWebportalbookmarkUsers | cdktf.IResolvable | undefined) {
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

export class ZtnaWebportalbookmarkUsersList extends cdktf.ComplexList {
  public internalValue? : ZtnaWebportalbookmarkUsers[] | cdktf.IResolvable

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
  public get(index: number): ZtnaWebportalbookmarkUsersOutputReference {
    return new ZtnaWebportalbookmarkUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark fortios_ztna_webportalbookmark}
*/
export class ZtnaWebportalbookmark extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_ztna_webportalbookmark";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZtnaWebportalbookmark resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZtnaWebportalbookmark to import
  * @param importFromId The id of the existing ZtnaWebportalbookmark that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZtnaWebportalbookmark to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_ztna_webportalbookmark", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportalbookmark fortios_ztna_webportalbookmark} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZtnaWebportalbookmarkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ZtnaWebportalbookmarkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_ztna_webportalbookmark',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._bookmarks.internalValue = config.bookmarks;
    this._groups.internalValue = config.groups;
    this._users.internalValue = config.users;
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

  // bookmarks - computed: false, optional: true, required: false
  private _bookmarks = new ZtnaWebportalbookmarkBookmarksList(this, "bookmarks", false);
  public get bookmarks() {
    return this._bookmarks;
  }
  public putBookmarks(value: ZtnaWebportalbookmarkBookmarks[] | cdktf.IResolvable) {
    this._bookmarks.internalValue = value;
  }
  public resetBookmarks() {
    this._bookmarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bookmarksInput() {
    return this._bookmarks.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new ZtnaWebportalbookmarkGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: ZtnaWebportalbookmarkGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new ZtnaWebportalbookmarkUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: ZtnaWebportalbookmarkUsers[] | cdktf.IResolvable) {
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
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      bookmarks: cdktf.listMapper(ztnaWebportalbookmarkBookmarksToTerraform, true)(this._bookmarks.internalValue),
      groups: cdktf.listMapper(ztnaWebportalbookmarkGroupsToTerraform, true)(this._groups.internalValue),
      users: cdktf.listMapper(ztnaWebportalbookmarkUsersToTerraform, true)(this._users.internalValue),
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
      bookmarks: {
        value: cdktf.listMapperHcl(ztnaWebportalbookmarkBookmarksToHclTerraform, true)(this._bookmarks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZtnaWebportalbookmarkBookmarksList",
      },
      groups: {
        value: cdktf.listMapperHcl(ztnaWebportalbookmarkGroupsToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ZtnaWebportalbookmarkGroupsList",
      },
      users: {
        value: cdktf.listMapperHcl(ztnaWebportalbookmarkUsersToHclTerraform, true)(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ZtnaWebportalbookmarkUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
