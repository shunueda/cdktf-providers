// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_module_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafModuleStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * ACL module status, 0:closed, 1:opened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_module_status#access_control WafModuleStatus#access_control}
  */
  readonly accessControl: number;
  /**
  * Anti leakage module status, 0:closed, 1:opened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_module_status#anti_leakage WafModuleStatus#anti_leakage}
  */
  readonly antiLeakage?: number;
  /**
  * Anti tamper module status, 0:closed, 1:opened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_module_status#anti_tamper WafModuleStatus#anti_tamper}
  */
  readonly antiTamper?: number;
  /**
  * API security module status, 0:closed, 1:opened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_module_status#api_protection WafModuleStatus#api_protection}
  */
  readonly apiProtection: number;
  /**
  * CC module status, 0:closed, 1:opened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_module_status#cc_protection WafModuleStatus#cc_protection}
  */
  readonly ccProtection: number;
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_module_status#domain WafModuleStatus#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_module_status#id WafModuleStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * WEB security module status, 0:closed, 1:opened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_module_status#web_security WafModuleStatus#web_security}
  */
  readonly webSecurity: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_module_status tencentcloud_waf_module_status}
*/
export class WafModuleStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_module_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafModuleStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafModuleStatus to import
  * @param importFromId The id of the existing WafModuleStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_module_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafModuleStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_module_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/waf_module_status tencentcloud_waf_module_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafModuleStatusConfig
  */
  public constructor(scope: Construct, id: string, config: WafModuleStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_module_status',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControl = config.accessControl;
    this._antiLeakage = config.antiLeakage;
    this._antiTamper = config.antiTamper;
    this._apiProtection = config.apiProtection;
    this._ccProtection = config.ccProtection;
    this._domain = config.domain;
    this._id = config.id;
    this._webSecurity = config.webSecurity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control - computed: false, optional: false, required: true
  private _accessControl?: number; 
  public get accessControl() {
    return this.getNumberAttribute('access_control');
  }
  public set accessControl(value: number) {
    this._accessControl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl;
  }

  // anti_leakage - computed: false, optional: true, required: false
  private _antiLeakage?: number; 
  public get antiLeakage() {
    return this.getNumberAttribute('anti_leakage');
  }
  public set antiLeakage(value: number) {
    this._antiLeakage = value;
  }
  public resetAntiLeakage() {
    this._antiLeakage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiLeakageInput() {
    return this._antiLeakage;
  }

  // anti_tamper - computed: false, optional: true, required: false
  private _antiTamper?: number; 
  public get antiTamper() {
    return this.getNumberAttribute('anti_tamper');
  }
  public set antiTamper(value: number) {
    this._antiTamper = value;
  }
  public resetAntiTamper() {
    this._antiTamper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiTamperInput() {
    return this._antiTamper;
  }

  // api_protection - computed: false, optional: false, required: true
  private _apiProtection?: number; 
  public get apiProtection() {
    return this.getNumberAttribute('api_protection');
  }
  public set apiProtection(value: number) {
    this._apiProtection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProtectionInput() {
    return this._apiProtection;
  }

  // cc_protection - computed: false, optional: false, required: true
  private _ccProtection?: number; 
  public get ccProtection() {
    return this.getNumberAttribute('cc_protection');
  }
  public set ccProtection(value: number) {
    this._ccProtection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ccProtectionInput() {
    return this._ccProtection;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // web_security - computed: false, optional: false, required: true
  private _webSecurity?: number; 
  public get webSecurity() {
    return this.getNumberAttribute('web_security');
  }
  public set webSecurity(value: number) {
    this._webSecurity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webSecurityInput() {
    return this._webSecurity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control: cdktf.numberToTerraform(this._accessControl),
      anti_leakage: cdktf.numberToTerraform(this._antiLeakage),
      anti_tamper: cdktf.numberToTerraform(this._antiTamper),
      api_protection: cdktf.numberToTerraform(this._apiProtection),
      cc_protection: cdktf.numberToTerraform(this._ccProtection),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      web_security: cdktf.numberToTerraform(this._webSecurity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control: {
        value: cdktf.numberToHclTerraform(this._accessControl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      anti_leakage: {
        value: cdktf.numberToHclTerraform(this._antiLeakage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      anti_tamper: {
        value: cdktf.numberToHclTerraform(this._antiTamper),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_protection: {
        value: cdktf.numberToHclTerraform(this._apiProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cc_protection: {
        value: cdktf.numberToHclTerraform(this._ccProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      web_security: {
        value: cdktf.numberToHclTerraform(this._webSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
