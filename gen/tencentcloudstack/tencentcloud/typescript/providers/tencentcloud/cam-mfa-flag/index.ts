// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CamMfaFlagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag#id CamMfaFlag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Operate uin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag#op_uin CamMfaFlag#op_uin}
  */
  readonly opUin: number;
  /**
  * action_flag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag#action_flag CamMfaFlag#action_flag}
  */
  readonly actionFlag?: CamMfaFlagActionFlag;
  /**
  * login_flag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag#login_flag CamMfaFlag#login_flag}
  */
  readonly loginFlag?: CamMfaFlagLoginFlag;
}
export interface CamMfaFlagActionFlag {
  /**
  * Phone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag#phone CamMfaFlag#phone}
  */
  readonly phone?: number;
  /**
  * Soft token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag#stoken CamMfaFlag#stoken}
  */
  readonly stoken?: number;
  /**
  * Wechat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag#wechat CamMfaFlag#wechat}
  */
  readonly wechat?: number;
}

export function camMfaFlagActionFlagToTerraform(struct?: CamMfaFlagActionFlagOutputReference | CamMfaFlagActionFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone: cdktf.numberToTerraform(struct!.phone),
    stoken: cdktf.numberToTerraform(struct!.stoken),
    wechat: cdktf.numberToTerraform(struct!.wechat),
  }
}


export function camMfaFlagActionFlagToHclTerraform(struct?: CamMfaFlagActionFlagOutputReference | CamMfaFlagActionFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    phone: {
      value: cdktf.numberToHclTerraform(struct!.phone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stoken: {
      value: cdktf.numberToHclTerraform(struct!.stoken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wechat: {
      value: cdktf.numberToHclTerraform(struct!.wechat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CamMfaFlagActionFlagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CamMfaFlagActionFlag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._stoken !== undefined) {
      hasAnyValues = true;
      internalValueResult.stoken = this._stoken;
    }
    if (this._wechat !== undefined) {
      hasAnyValues = true;
      internalValueResult.wechat = this._wechat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CamMfaFlagActionFlag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._phone = undefined;
      this._stoken = undefined;
      this._wechat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._phone = value.phone;
      this._stoken = value.stoken;
      this._wechat = value.wechat;
    }
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: number; 
  public get phone() {
    return this.getNumberAttribute('phone');
  }
  public set phone(value: number) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // stoken - computed: false, optional: true, required: false
  private _stoken?: number; 
  public get stoken() {
    return this.getNumberAttribute('stoken');
  }
  public set stoken(value: number) {
    this._stoken = value;
  }
  public resetStoken() {
    this._stoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stokenInput() {
    return this._stoken;
  }

  // wechat - computed: false, optional: true, required: false
  private _wechat?: number; 
  public get wechat() {
    return this.getNumberAttribute('wechat');
  }
  public set wechat(value: number) {
    this._wechat = value;
  }
  public resetWechat() {
    this._wechat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wechatInput() {
    return this._wechat;
  }
}
export interface CamMfaFlagLoginFlag {
  /**
  * Phone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag#phone CamMfaFlag#phone}
  */
  readonly phone?: number;
  /**
  * Soft token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag#stoken CamMfaFlag#stoken}
  */
  readonly stoken?: number;
  /**
  * Wechat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag#wechat CamMfaFlag#wechat}
  */
  readonly wechat?: number;
}

export function camMfaFlagLoginFlagToTerraform(struct?: CamMfaFlagLoginFlagOutputReference | CamMfaFlagLoginFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone: cdktf.numberToTerraform(struct!.phone),
    stoken: cdktf.numberToTerraform(struct!.stoken),
    wechat: cdktf.numberToTerraform(struct!.wechat),
  }
}


export function camMfaFlagLoginFlagToHclTerraform(struct?: CamMfaFlagLoginFlagOutputReference | CamMfaFlagLoginFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    phone: {
      value: cdktf.numberToHclTerraform(struct!.phone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stoken: {
      value: cdktf.numberToHclTerraform(struct!.stoken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wechat: {
      value: cdktf.numberToHclTerraform(struct!.wechat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CamMfaFlagLoginFlagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CamMfaFlagLoginFlag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._stoken !== undefined) {
      hasAnyValues = true;
      internalValueResult.stoken = this._stoken;
    }
    if (this._wechat !== undefined) {
      hasAnyValues = true;
      internalValueResult.wechat = this._wechat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CamMfaFlagLoginFlag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._phone = undefined;
      this._stoken = undefined;
      this._wechat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._phone = value.phone;
      this._stoken = value.stoken;
      this._wechat = value.wechat;
    }
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: number; 
  public get phone() {
    return this.getNumberAttribute('phone');
  }
  public set phone(value: number) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // stoken - computed: false, optional: true, required: false
  private _stoken?: number; 
  public get stoken() {
    return this.getNumberAttribute('stoken');
  }
  public set stoken(value: number) {
    this._stoken = value;
  }
  public resetStoken() {
    this._stoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stokenInput() {
    return this._stoken;
  }

  // wechat - computed: false, optional: true, required: false
  private _wechat?: number; 
  public get wechat() {
    return this.getNumberAttribute('wechat');
  }
  public set wechat(value: number) {
    this._wechat = value;
  }
  public resetWechat() {
    this._wechat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wechatInput() {
    return this._wechat;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag tencentcloud_cam_mfa_flag}
*/
export class CamMfaFlag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cam_mfa_flag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CamMfaFlag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CamMfaFlag to import
  * @param importFromId The id of the existing CamMfaFlag that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CamMfaFlag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cam_mfa_flag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cam_mfa_flag tencentcloud_cam_mfa_flag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CamMfaFlagConfig
  */
  public constructor(scope: Construct, id: string, config: CamMfaFlagConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cam_mfa_flag',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._opUin = config.opUin;
    this._actionFlag.internalValue = config.actionFlag;
    this._loginFlag.internalValue = config.loginFlag;
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

  // op_uin - computed: false, optional: false, required: true
  private _opUin?: number; 
  public get opUin() {
    return this.getNumberAttribute('op_uin');
  }
  public set opUin(value: number) {
    this._opUin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opUinInput() {
    return this._opUin;
  }

  // action_flag - computed: false, optional: true, required: false
  private _actionFlag = new CamMfaFlagActionFlagOutputReference(this, "action_flag");
  public get actionFlag() {
    return this._actionFlag;
  }
  public putActionFlag(value: CamMfaFlagActionFlag) {
    this._actionFlag.internalValue = value;
  }
  public resetActionFlag() {
    this._actionFlag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFlagInput() {
    return this._actionFlag.internalValue;
  }

  // login_flag - computed: false, optional: true, required: false
  private _loginFlag = new CamMfaFlagLoginFlagOutputReference(this, "login_flag");
  public get loginFlag() {
    return this._loginFlag;
  }
  public putLoginFlag(value: CamMfaFlagLoginFlag) {
    this._loginFlag.internalValue = value;
  }
  public resetLoginFlag() {
    this._loginFlag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginFlagInput() {
    return this._loginFlag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      op_uin: cdktf.numberToTerraform(this._opUin),
      action_flag: camMfaFlagActionFlagToTerraform(this._actionFlag.internalValue),
      login_flag: camMfaFlagLoginFlagToTerraform(this._loginFlag.internalValue),
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
      op_uin: {
        value: cdktf.numberToHclTerraform(this._opUin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_flag: {
        value: camMfaFlagActionFlagToHclTerraform(this._actionFlag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CamMfaFlagActionFlagList",
      },
      login_flag: {
        value: camMfaFlagLoginFlagToHclTerraform(this._loginFlag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CamMfaFlagLoginFlagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
