// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/banner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BannerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/banner#id Banner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/banner#uuid Banner#uuid}
  */
  readonly uuid?: string;
  /**
  * exec_banner_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/banner#exec_banner_cfg Banner#exec_banner_cfg}
  */
  readonly execBannerCfg?: BannerExecBannerCfg;
  /**
  * login_banner_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/banner#login_banner_cfg Banner#login_banner_cfg}
  */
  readonly loginBannerCfg?: BannerLoginBannerCfg;
}
export interface BannerExecBannerCfg {
  /**
  * Set EXEC process creation banner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/banner#exec Banner#exec}
  */
  readonly exec?: number;
  /**
  * Banner text, string -n is taken as line break of multi-line banner text, use --n for -n, -077 for ? and -011 for tab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/banner#exec_banner Banner#exec_banner}
  */
  readonly execBanner?: string;
}

export function bannerExecBannerCfgToTerraform(struct?: BannerExecBannerCfgOutputReference | BannerExecBannerCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: cdktf.numberToTerraform(struct!.exec),
    exec_banner: cdktf.stringToTerraform(struct!.execBanner),
  }
}


export function bannerExecBannerCfgToHclTerraform(struct?: BannerExecBannerCfgOutputReference | BannerExecBannerCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: cdktf.numberToHclTerraform(struct!.exec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec_banner: {
      value: cdktf.stringToHclTerraform(struct!.execBanner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BannerExecBannerCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BannerExecBannerCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec;
    }
    if (this._execBanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.execBanner = this._execBanner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BannerExecBannerCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exec = undefined;
      this._execBanner = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exec = value.exec;
      this._execBanner = value.execBanner;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: number; 
  public get exec() {
    return this.getNumberAttribute('exec');
  }
  public set exec(value: number) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }

  // exec_banner - computed: false, optional: true, required: false
  private _execBanner?: string; 
  public get execBanner() {
    return this.getStringAttribute('exec_banner');
  }
  public set execBanner(value: string) {
    this._execBanner = value;
  }
  public resetExecBanner() {
    this._execBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execBannerInput() {
    return this._execBanner;
  }
}
export interface BannerLoginBannerCfg {
  /**
  * Set login banner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/banner#login Banner#login}
  */
  readonly login?: number;
  /**
  * Banner text, string -n is taken as line break of multi-line banner text, use --n to indicate -n
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/banner#login_banner Banner#login_banner}
  */
  readonly loginBanner?: string;
}

export function bannerLoginBannerCfgToTerraform(struct?: BannerLoginBannerCfgOutputReference | BannerLoginBannerCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login: cdktf.numberToTerraform(struct!.login),
    login_banner: cdktf.stringToTerraform(struct!.loginBanner),
  }
}


export function bannerLoginBannerCfgToHclTerraform(struct?: BannerLoginBannerCfgOutputReference | BannerLoginBannerCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login: {
      value: cdktf.numberToHclTerraform(struct!.login),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    login_banner: {
      value: cdktf.stringToHclTerraform(struct!.loginBanner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BannerLoginBannerCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BannerLoginBannerCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._login !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login;
    }
    if (this._loginBanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginBanner = this._loginBanner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BannerLoginBannerCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._login = undefined;
      this._loginBanner = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._login = value.login;
      this._loginBanner = value.loginBanner;
    }
  }

  // login - computed: false, optional: true, required: false
  private _login?: number; 
  public get login() {
    return this.getNumberAttribute('login');
  }
  public set login(value: number) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // login_banner - computed: false, optional: true, required: false
  private _loginBanner?: string; 
  public get loginBanner() {
    return this.getStringAttribute('login_banner');
  }
  public set loginBanner(value: string) {
    this._loginBanner = value;
  }
  public resetLoginBanner() {
    this._loginBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginBannerInput() {
    return this._loginBanner;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/banner thunder_banner}
*/
export class Banner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_banner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Banner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Banner to import
  * @param importFromId The id of the existing Banner that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/banner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Banner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_banner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/banner thunder_banner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BannerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BannerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_banner',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._uuid = config.uuid;
    this._execBannerCfg.internalValue = config.execBannerCfg;
    this._loginBannerCfg.internalValue = config.loginBannerCfg;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // exec_banner_cfg - computed: false, optional: true, required: false
  private _execBannerCfg = new BannerExecBannerCfgOutputReference(this, "exec_banner_cfg");
  public get execBannerCfg() {
    return this._execBannerCfg;
  }
  public putExecBannerCfg(value: BannerExecBannerCfg) {
    this._execBannerCfg.internalValue = value;
  }
  public resetExecBannerCfg() {
    this._execBannerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execBannerCfgInput() {
    return this._execBannerCfg.internalValue;
  }

  // login_banner_cfg - computed: false, optional: true, required: false
  private _loginBannerCfg = new BannerLoginBannerCfgOutputReference(this, "login_banner_cfg");
  public get loginBannerCfg() {
    return this._loginBannerCfg;
  }
  public putLoginBannerCfg(value: BannerLoginBannerCfg) {
    this._loginBannerCfg.internalValue = value;
  }
  public resetLoginBannerCfg() {
    this._loginBannerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginBannerCfgInput() {
    return this._loginBannerCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      exec_banner_cfg: bannerExecBannerCfgToTerraform(this._execBannerCfg.internalValue),
      login_banner_cfg: bannerLoginBannerCfgToTerraform(this._loginBannerCfg.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exec_banner_cfg: {
        value: bannerExecBannerCfgToHclTerraform(this._execBannerCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BannerExecBannerCfgList",
      },
      login_banner_cfg: {
        value: bannerLoginBannerCfgToHclTerraform(this._loginBannerCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BannerLoginBannerCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
