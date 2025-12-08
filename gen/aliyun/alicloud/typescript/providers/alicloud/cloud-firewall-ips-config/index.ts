// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudFirewallIpsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#basic_rules CloudFirewallIpsConfig#basic_rules}
  */
  readonly basicRules?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#cti_rules CloudFirewallIpsConfig#cti_rules}
  */
  readonly ctiRules?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#id CloudFirewallIpsConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#lang CloudFirewallIpsConfig#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#max_sdl CloudFirewallIpsConfig#max_sdl}
  */
  readonly maxSdl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#patch_rules CloudFirewallIpsConfig#patch_rules}
  */
  readonly patchRules?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#rule_class CloudFirewallIpsConfig#rule_class}
  */
  readonly ruleClass?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#run_mode CloudFirewallIpsConfig#run_mode}
  */
  readonly runMode?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#timeouts CloudFirewallIpsConfig#timeouts}
  */
  readonly timeouts?: CloudFirewallIpsConfigTimeouts;
}
export interface CloudFirewallIpsConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#create CloudFirewallIpsConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#delete CloudFirewallIpsConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#update CloudFirewallIpsConfig#update}
  */
  readonly update?: string;
}

export function cloudFirewallIpsConfigTimeoutsToTerraform(struct?: CloudFirewallIpsConfigTimeouts | cdktf.IResolvable): any {
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


export function cloudFirewallIpsConfigTimeoutsToHclTerraform(struct?: CloudFirewallIpsConfigTimeouts | cdktf.IResolvable): any {
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

export class CloudFirewallIpsConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudFirewallIpsConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudFirewallIpsConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config alicloud_cloud_firewall_ips_config}
*/
export class CloudFirewallIpsConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_ips_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudFirewallIpsConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudFirewallIpsConfig to import
  * @param importFromId The id of the existing CloudFirewallIpsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudFirewallIpsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_ips_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloud_firewall_ips_config alicloud_cloud_firewall_ips_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudFirewallIpsConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudFirewallIpsConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_ips_config',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basicRules = config.basicRules;
    this._ctiRules = config.ctiRules;
    this._id = config.id;
    this._lang = config.lang;
    this._maxSdl = config.maxSdl;
    this._patchRules = config.patchRules;
    this._ruleClass = config.ruleClass;
    this._runMode = config.runMode;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basic_rules - computed: false, optional: true, required: false
  private _basicRules?: number; 
  public get basicRules() {
    return this.getNumberAttribute('basic_rules');
  }
  public set basicRules(value: number) {
    this._basicRules = value;
  }
  public resetBasicRules() {
    this._basicRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicRulesInput() {
    return this._basicRules;
  }

  // cti_rules - computed: false, optional: true, required: false
  private _ctiRules?: number; 
  public get ctiRules() {
    return this.getNumberAttribute('cti_rules');
  }
  public set ctiRules(value: number) {
    this._ctiRules = value;
  }
  public resetCtiRules() {
    this._ctiRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctiRulesInput() {
    return this._ctiRules;
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

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // max_sdl - computed: false, optional: true, required: false
  private _maxSdl?: number; 
  public get maxSdl() {
    return this.getNumberAttribute('max_sdl');
  }
  public set maxSdl(value: number) {
    this._maxSdl = value;
  }
  public resetMaxSdl() {
    this._maxSdl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSdlInput() {
    return this._maxSdl;
  }

  // patch_rules - computed: false, optional: true, required: false
  private _patchRules?: number; 
  public get patchRules() {
    return this.getNumberAttribute('patch_rules');
  }
  public set patchRules(value: number) {
    this._patchRules = value;
  }
  public resetPatchRules() {
    this._patchRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchRulesInput() {
    return this._patchRules;
  }

  // rule_class - computed: false, optional: true, required: false
  private _ruleClass?: number; 
  public get ruleClass() {
    return this.getNumberAttribute('rule_class');
  }
  public set ruleClass(value: number) {
    this._ruleClass = value;
  }
  public resetRuleClass() {
    this._ruleClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleClassInput() {
    return this._ruleClass;
  }

  // run_mode - computed: false, optional: true, required: false
  private _runMode?: number; 
  public get runMode() {
    return this.getNumberAttribute('run_mode');
  }
  public set runMode(value: number) {
    this._runMode = value;
  }
  public resetRunMode() {
    this._runMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runModeInput() {
    return this._runMode;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudFirewallIpsConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudFirewallIpsConfigTimeouts) {
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
      basic_rules: cdktf.numberToTerraform(this._basicRules),
      cti_rules: cdktf.numberToTerraform(this._ctiRules),
      id: cdktf.stringToTerraform(this._id),
      lang: cdktf.stringToTerraform(this._lang),
      max_sdl: cdktf.numberToTerraform(this._maxSdl),
      patch_rules: cdktf.numberToTerraform(this._patchRules),
      rule_class: cdktf.numberToTerraform(this._ruleClass),
      run_mode: cdktf.numberToTerraform(this._runMode),
      timeouts: cloudFirewallIpsConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basic_rules: {
        value: cdktf.numberToHclTerraform(this._basicRules),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cti_rules: {
        value: cdktf.numberToHclTerraform(this._ctiRules),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_sdl: {
        value: cdktf.numberToHclTerraform(this._maxSdl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      patch_rules: {
        value: cdktf.numberToHclTerraform(this._patchRules),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_class: {
        value: cdktf.numberToHclTerraform(this._ruleClass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      run_mode: {
        value: cdktf.numberToHclTerraform(this._runMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: cloudFirewallIpsConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudFirewallIpsConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
