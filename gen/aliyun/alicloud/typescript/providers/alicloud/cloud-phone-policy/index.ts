// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudPhonePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#camera_redirect CloudPhonePolicy#camera_redirect}
  */
  readonly cameraRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#clipboard CloudPhonePolicy#clipboard}
  */
  readonly clipboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#id CloudPhonePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#lock_resolution CloudPhonePolicy#lock_resolution}
  */
  readonly lockResolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#policy_group_name CloudPhonePolicy#policy_group_name}
  */
  readonly policyGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#resolution_height CloudPhonePolicy#resolution_height}
  */
  readonly resolutionHeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#resolution_width CloudPhonePolicy#resolution_width}
  */
  readonly resolutionWidth?: number;
  /**
  * net_redirect_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#net_redirect_policy CloudPhonePolicy#net_redirect_policy}
  */
  readonly netRedirectPolicy?: CloudPhonePolicyNetRedirectPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#timeouts CloudPhonePolicy#timeouts}
  */
  readonly timeouts?: CloudPhonePolicyTimeouts;
}
export interface CloudPhonePolicyNetRedirectPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#custom_proxy CloudPhonePolicy#custom_proxy}
  */
  readonly customProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#host_addr CloudPhonePolicy#host_addr}
  */
  readonly hostAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#net_redirect CloudPhonePolicy#net_redirect}
  */
  readonly netRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#port CloudPhonePolicy#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#proxy_password CloudPhonePolicy#proxy_password}
  */
  readonly proxyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#proxy_type CloudPhonePolicy#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#proxy_user_name CloudPhonePolicy#proxy_user_name}
  */
  readonly proxyUserName?: string;
}

export function cloudPhonePolicyNetRedirectPolicyToTerraform(struct?: CloudPhonePolicyNetRedirectPolicyOutputReference | CloudPhonePolicyNetRedirectPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_proxy: cdktf.stringToTerraform(struct!.customProxy),
    host_addr: cdktf.stringToTerraform(struct!.hostAddr),
    net_redirect: cdktf.stringToTerraform(struct!.netRedirect),
    port: cdktf.stringToTerraform(struct!.port),
    proxy_password: cdktf.stringToTerraform(struct!.proxyPassword),
    proxy_type: cdktf.stringToTerraform(struct!.proxyType),
    proxy_user_name: cdktf.stringToTerraform(struct!.proxyUserName),
  }
}


export function cloudPhonePolicyNetRedirectPolicyToHclTerraform(struct?: CloudPhonePolicyNetRedirectPolicyOutputReference | CloudPhonePolicyNetRedirectPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_proxy: {
      value: cdktf.stringToHclTerraform(struct!.customProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_addr: {
      value: cdktf.stringToHclTerraform(struct!.hostAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_redirect: {
      value: cdktf.stringToHclTerraform(struct!.netRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_password: {
      value: cdktf.stringToHclTerraform(struct!.proxyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_type: {
      value: cdktf.stringToHclTerraform(struct!.proxyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_user_name: {
      value: cdktf.stringToHclTerraform(struct!.proxyUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudPhonePolicyNetRedirectPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudPhonePolicyNetRedirectPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProxy = this._customProxy;
    }
    if (this._hostAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAddr = this._hostAddr;
    }
    if (this._netRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.netRedirect = this._netRedirect;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPassword = this._proxyPassword;
    }
    if (this._proxyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyType = this._proxyType;
    }
    if (this._proxyUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUserName = this._proxyUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudPhonePolicyNetRedirectPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customProxy = undefined;
      this._hostAddr = undefined;
      this._netRedirect = undefined;
      this._port = undefined;
      this._proxyPassword = undefined;
      this._proxyType = undefined;
      this._proxyUserName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customProxy = value.customProxy;
      this._hostAddr = value.hostAddr;
      this._netRedirect = value.netRedirect;
      this._port = value.port;
      this._proxyPassword = value.proxyPassword;
      this._proxyType = value.proxyType;
      this._proxyUserName = value.proxyUserName;
    }
  }

  // custom_proxy - computed: true, optional: true, required: false
  private _customProxy?: string; 
  public get customProxy() {
    return this.getStringAttribute('custom_proxy');
  }
  public set customProxy(value: string) {
    this._customProxy = value;
  }
  public resetCustomProxy() {
    this._customProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProxyInput() {
    return this._customProxy;
  }

  // host_addr - computed: false, optional: true, required: false
  private _hostAddr?: string; 
  public get hostAddr() {
    return this.getStringAttribute('host_addr');
  }
  public set hostAddr(value: string) {
    this._hostAddr = value;
  }
  public resetHostAddr() {
    this._hostAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAddrInput() {
    return this._hostAddr;
  }

  // net_redirect - computed: true, optional: true, required: false
  private _netRedirect?: string; 
  public get netRedirect() {
    return this.getStringAttribute('net_redirect');
  }
  public set netRedirect(value: string) {
    this._netRedirect = value;
  }
  public resetNetRedirect() {
    this._netRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netRedirectInput() {
    return this._netRedirect;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_password - computed: false, optional: true, required: false
  private _proxyPassword?: string; 
  public get proxyPassword() {
    return this.getStringAttribute('proxy_password');
  }
  public set proxyPassword(value: string) {
    this._proxyPassword = value;
  }
  public resetProxyPassword() {
    this._proxyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPasswordInput() {
    return this._proxyPassword;
  }

  // proxy_type - computed: false, optional: true, required: false
  private _proxyType?: string; 
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
  public set proxyType(value: string) {
    this._proxyType = value;
  }
  public resetProxyType() {
    this._proxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypeInput() {
    return this._proxyType;
  }

  // proxy_user_name - computed: false, optional: true, required: false
  private _proxyUserName?: string; 
  public get proxyUserName() {
    return this.getStringAttribute('proxy_user_name');
  }
  public set proxyUserName(value: string) {
    this._proxyUserName = value;
  }
  public resetProxyUserName() {
    this._proxyUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUserNameInput() {
    return this._proxyUserName;
  }
}
export interface CloudPhonePolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#create CloudPhonePolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#delete CloudPhonePolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#update CloudPhonePolicy#update}
  */
  readonly update?: string;
}

export function cloudPhonePolicyTimeoutsToTerraform(struct?: CloudPhonePolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudPhonePolicyTimeoutsToHclTerraform(struct?: CloudPhonePolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudPhonePolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudPhonePolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudPhonePolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy alicloud_cloud_phone_policy}
*/
export class CloudPhonePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_phone_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudPhonePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudPhonePolicy to import
  * @param importFromId The id of the existing CloudPhonePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudPhonePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_phone_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_phone_policy alicloud_cloud_phone_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudPhonePolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudPhonePolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_phone_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cameraRedirect = config.cameraRedirect;
    this._clipboard = config.clipboard;
    this._id = config.id;
    this._lockResolution = config.lockResolution;
    this._policyGroupName = config.policyGroupName;
    this._resolutionHeight = config.resolutionHeight;
    this._resolutionWidth = config.resolutionWidth;
    this._netRedirectPolicy.internalValue = config.netRedirectPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // camera_redirect - computed: true, optional: true, required: false
  private _cameraRedirect?: string; 
  public get cameraRedirect() {
    return this.getStringAttribute('camera_redirect');
  }
  public set cameraRedirect(value: string) {
    this._cameraRedirect = value;
  }
  public resetCameraRedirect() {
    this._cameraRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cameraRedirectInput() {
    return this._cameraRedirect;
  }

  // clipboard - computed: true, optional: true, required: false
  private _clipboard?: string; 
  public get clipboard() {
    return this.getStringAttribute('clipboard');
  }
  public set clipboard(value: string) {
    this._clipboard = value;
  }
  public resetClipboard() {
    this._clipboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipboardInput() {
    return this._clipboard;
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

  // lock_resolution - computed: true, optional: true, required: false
  private _lockResolution?: string; 
  public get lockResolution() {
    return this.getStringAttribute('lock_resolution');
  }
  public set lockResolution(value: string) {
    this._lockResolution = value;
  }
  public resetLockResolution() {
    this._lockResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockResolutionInput() {
    return this._lockResolution;
  }

  // policy_group_name - computed: true, optional: true, required: false
  private _policyGroupName?: string; 
  public get policyGroupName() {
    return this.getStringAttribute('policy_group_name');
  }
  public set policyGroupName(value: string) {
    this._policyGroupName = value;
  }
  public resetPolicyGroupName() {
    this._policyGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupNameInput() {
    return this._policyGroupName;
  }

  // resolution_height - computed: true, optional: true, required: false
  private _resolutionHeight?: number; 
  public get resolutionHeight() {
    return this.getNumberAttribute('resolution_height');
  }
  public set resolutionHeight(value: number) {
    this._resolutionHeight = value;
  }
  public resetResolutionHeight() {
    this._resolutionHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionHeightInput() {
    return this._resolutionHeight;
  }

  // resolution_width - computed: true, optional: true, required: false
  private _resolutionWidth?: number; 
  public get resolutionWidth() {
    return this.getNumberAttribute('resolution_width');
  }
  public set resolutionWidth(value: number) {
    this._resolutionWidth = value;
  }
  public resetResolutionWidth() {
    this._resolutionWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionWidthInput() {
    return this._resolutionWidth;
  }

  // net_redirect_policy - computed: false, optional: true, required: false
  private _netRedirectPolicy = new CloudPhonePolicyNetRedirectPolicyOutputReference(this, "net_redirect_policy");
  public get netRedirectPolicy() {
    return this._netRedirectPolicy;
  }
  public putNetRedirectPolicy(value: CloudPhonePolicyNetRedirectPolicy) {
    this._netRedirectPolicy.internalValue = value;
  }
  public resetNetRedirectPolicy() {
    this._netRedirectPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netRedirectPolicyInput() {
    return this._netRedirectPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudPhonePolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudPhonePolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      camera_redirect: cdktf.stringToTerraform(this._cameraRedirect),
      clipboard: cdktf.stringToTerraform(this._clipboard),
      id: cdktf.stringToTerraform(this._id),
      lock_resolution: cdktf.stringToTerraform(this._lockResolution),
      policy_group_name: cdktf.stringToTerraform(this._policyGroupName),
      resolution_height: cdktf.numberToTerraform(this._resolutionHeight),
      resolution_width: cdktf.numberToTerraform(this._resolutionWidth),
      net_redirect_policy: cloudPhonePolicyNetRedirectPolicyToTerraform(this._netRedirectPolicy.internalValue),
      timeouts: cloudPhonePolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      camera_redirect: {
        value: cdktf.stringToHclTerraform(this._cameraRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clipboard: {
        value: cdktf.stringToHclTerraform(this._clipboard),
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
      lock_resolution: {
        value: cdktf.stringToHclTerraform(this._lockResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_group_name: {
        value: cdktf.stringToHclTerraform(this._policyGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolution_height: {
        value: cdktf.numberToHclTerraform(this._resolutionHeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolution_width: {
        value: cdktf.numberToHclTerraform(this._resolutionWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      net_redirect_policy: {
        value: cloudPhonePolicyNetRedirectPolicyToHclTerraform(this._netRedirectPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudPhonePolicyNetRedirectPolicyList",
      },
      timeouts: {
        value: cloudPhonePolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudPhonePolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
