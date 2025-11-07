// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaCompressionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#brotli EsaCompressionRule#brotli}
  */
  readonly brotli?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#gzip EsaCompressionRule#gzip}
  */
  readonly gzip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#id EsaCompressionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#rule EsaCompressionRule#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#rule_enable EsaCompressionRule#rule_enable}
  */
  readonly ruleEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#rule_name EsaCompressionRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#sequence EsaCompressionRule#sequence}
  */
  readonly sequence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#site_id EsaCompressionRule#site_id}
  */
  readonly siteId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#site_version EsaCompressionRule#site_version}
  */
  readonly siteVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#zstd EsaCompressionRule#zstd}
  */
  readonly zstd?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#timeouts EsaCompressionRule#timeouts}
  */
  readonly timeouts?: EsaCompressionRuleTimeouts;
}
export interface EsaCompressionRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#create EsaCompressionRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#delete EsaCompressionRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#update EsaCompressionRule#update}
  */
  readonly update?: string;
}

export function esaCompressionRuleTimeoutsToTerraform(struct?: EsaCompressionRuleTimeouts | cdktf.IResolvable): any {
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


export function esaCompressionRuleTimeoutsToHclTerraform(struct?: EsaCompressionRuleTimeouts | cdktf.IResolvable): any {
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

export class EsaCompressionRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaCompressionRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaCompressionRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule alicloud_esa_compression_rule}
*/
export class EsaCompressionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_compression_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaCompressionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaCompressionRule to import
  * @param importFromId The id of the existing EsaCompressionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaCompressionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_compression_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_compression_rule alicloud_esa_compression_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaCompressionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EsaCompressionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_compression_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._brotli = config.brotli;
    this._gzip = config.gzip;
    this._id = config.id;
    this._rule = config.rule;
    this._ruleEnable = config.ruleEnable;
    this._ruleName = config.ruleName;
    this._sequence = config.sequence;
    this._siteId = config.siteId;
    this._siteVersion = config.siteVersion;
    this._zstd = config.zstd;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // brotli - computed: false, optional: true, required: false
  private _brotli?: string; 
  public get brotli() {
    return this.getStringAttribute('brotli');
  }
  public set brotli(value: string) {
    this._brotli = value;
  }
  public resetBrotli() {
    this._brotli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brotliInput() {
    return this._brotli;
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getNumberAttribute('config_id');
  }

  // gzip - computed: false, optional: true, required: false
  private _gzip?: string; 
  public get gzip() {
    return this.getStringAttribute('gzip');
  }
  public set gzip(value: string) {
    this._gzip = value;
  }
  public resetGzip() {
    this._gzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipInput() {
    return this._gzip;
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

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // rule_enable - computed: false, optional: true, required: false
  private _ruleEnable?: string; 
  public get ruleEnable() {
    return this.getStringAttribute('rule_enable');
  }
  public set ruleEnable(value: string) {
    this._ruleEnable = value;
  }
  public resetRuleEnable() {
    this._ruleEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEnableInput() {
    return this._ruleEnable;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // sequence - computed: true, optional: true, required: false
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // site_version - computed: false, optional: true, required: false
  private _siteVersion?: number; 
  public get siteVersion() {
    return this.getNumberAttribute('site_version');
  }
  public set siteVersion(value: number) {
    this._siteVersion = value;
  }
  public resetSiteVersion() {
    this._siteVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteVersionInput() {
    return this._siteVersion;
  }

  // zstd - computed: false, optional: true, required: false
  private _zstd?: string; 
  public get zstd() {
    return this.getStringAttribute('zstd');
  }
  public set zstd(value: string) {
    this._zstd = value;
  }
  public resetZstd() {
    this._zstd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zstdInput() {
    return this._zstd;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaCompressionRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaCompressionRuleTimeouts) {
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
      brotli: cdktf.stringToTerraform(this._brotli),
      gzip: cdktf.stringToTerraform(this._gzip),
      id: cdktf.stringToTerraform(this._id),
      rule: cdktf.stringToTerraform(this._rule),
      rule_enable: cdktf.stringToTerraform(this._ruleEnable),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      sequence: cdktf.numberToTerraform(this._sequence),
      site_id: cdktf.numberToTerraform(this._siteId),
      site_version: cdktf.numberToTerraform(this._siteVersion),
      zstd: cdktf.stringToTerraform(this._zstd),
      timeouts: esaCompressionRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      brotli: {
        value: cdktf.stringToHclTerraform(this._brotli),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gzip: {
        value: cdktf.stringToHclTerraform(this._gzip),
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
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_enable: {
        value: cdktf.stringToHclTerraform(this._ruleEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence: {
        value: cdktf.numberToHclTerraform(this._sequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_version: {
        value: cdktf.numberToHclTerraform(this._siteVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zstd: {
        value: cdktf.stringToHclTerraform(this._zstd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: esaCompressionRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaCompressionRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
