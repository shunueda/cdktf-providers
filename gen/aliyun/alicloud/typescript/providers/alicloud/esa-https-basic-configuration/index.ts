// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaHttpsBasicConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#ciphersuite EsaHttpsBasicConfiguration#ciphersuite}
  */
  readonly ciphersuite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#ciphersuite_group EsaHttpsBasicConfiguration#ciphersuite_group}
  */
  readonly ciphersuiteGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#http2 EsaHttpsBasicConfiguration#http2}
  */
  readonly http2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#http3 EsaHttpsBasicConfiguration#http3}
  */
  readonly http3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#https EsaHttpsBasicConfiguration#https}
  */
  readonly https?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#id EsaHttpsBasicConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#ocsp_stapling EsaHttpsBasicConfiguration#ocsp_stapling}
  */
  readonly ocspStapling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#rule EsaHttpsBasicConfiguration#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#rule_enable EsaHttpsBasicConfiguration#rule_enable}
  */
  readonly ruleEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#rule_name EsaHttpsBasicConfiguration#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#sequence EsaHttpsBasicConfiguration#sequence}
  */
  readonly sequence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#site_id EsaHttpsBasicConfiguration#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#tls10 EsaHttpsBasicConfiguration#tls10}
  */
  readonly tls10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#tls11 EsaHttpsBasicConfiguration#tls11}
  */
  readonly tls11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#tls12 EsaHttpsBasicConfiguration#tls12}
  */
  readonly tls12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#tls13 EsaHttpsBasicConfiguration#tls13}
  */
  readonly tls13?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#timeouts EsaHttpsBasicConfiguration#timeouts}
  */
  readonly timeouts?: EsaHttpsBasicConfigurationTimeouts;
}
export interface EsaHttpsBasicConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#create EsaHttpsBasicConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#delete EsaHttpsBasicConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#update EsaHttpsBasicConfiguration#update}
  */
  readonly update?: string;
}

export function esaHttpsBasicConfigurationTimeoutsToTerraform(struct?: EsaHttpsBasicConfigurationTimeouts | cdktf.IResolvable): any {
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


export function esaHttpsBasicConfigurationTimeoutsToHclTerraform(struct?: EsaHttpsBasicConfigurationTimeouts | cdktf.IResolvable): any {
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

export class EsaHttpsBasicConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaHttpsBasicConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaHttpsBasicConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration alicloud_esa_https_basic_configuration}
*/
export class EsaHttpsBasicConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_https_basic_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaHttpsBasicConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaHttpsBasicConfiguration to import
  * @param importFromId The id of the existing EsaHttpsBasicConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaHttpsBasicConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_https_basic_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_https_basic_configuration alicloud_esa_https_basic_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaHttpsBasicConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: EsaHttpsBasicConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_https_basic_configuration',
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
    this._ciphersuite = config.ciphersuite;
    this._ciphersuiteGroup = config.ciphersuiteGroup;
    this._http2 = config.http2;
    this._http3 = config.http3;
    this._https = config.https;
    this._id = config.id;
    this._ocspStapling = config.ocspStapling;
    this._rule = config.rule;
    this._ruleEnable = config.ruleEnable;
    this._ruleName = config.ruleName;
    this._sequence = config.sequence;
    this._siteId = config.siteId;
    this._tls10 = config.tls10;
    this._tls11 = config.tls11;
    this._tls12 = config.tls12;
    this._tls13 = config.tls13;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ciphersuite - computed: false, optional: true, required: false
  private _ciphersuite?: string; 
  public get ciphersuite() {
    return this.getStringAttribute('ciphersuite');
  }
  public set ciphersuite(value: string) {
    this._ciphersuite = value;
  }
  public resetCiphersuite() {
    this._ciphersuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersuiteInput() {
    return this._ciphersuite;
  }

  // ciphersuite_group - computed: false, optional: true, required: false
  private _ciphersuiteGroup?: string; 
  public get ciphersuiteGroup() {
    return this.getStringAttribute('ciphersuite_group');
  }
  public set ciphersuiteGroup(value: string) {
    this._ciphersuiteGroup = value;
  }
  public resetCiphersuiteGroup() {
    this._ciphersuiteGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersuiteGroupInput() {
    return this._ciphersuiteGroup;
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getNumberAttribute('config_id');
  }

  // http2 - computed: false, optional: true, required: false
  private _http2?: string; 
  public get http2() {
    return this.getStringAttribute('http2');
  }
  public set http2(value: string) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // http3 - computed: false, optional: true, required: false
  private _http3?: string; 
  public get http3() {
    return this.getStringAttribute('http3');
  }
  public set http3(value: string) {
    this._http3 = value;
  }
  public resetHttp3() {
    this._http3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http3Input() {
    return this._http3;
  }

  // https - computed: false, optional: true, required: false
  private _https?: string; 
  public get https() {
    return this.getStringAttribute('https');
  }
  public set https(value: string) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
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

  // ocsp_stapling - computed: false, optional: true, required: false
  private _ocspStapling?: string; 
  public get ocspStapling() {
    return this.getStringAttribute('ocsp_stapling');
  }
  public set ocspStapling(value: string) {
    this._ocspStapling = value;
  }
  public resetOcspStapling() {
    this._ocspStapling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplingInput() {
    return this._ocspStapling;
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
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // tls10 - computed: false, optional: true, required: false
  private _tls10?: string; 
  public get tls10() {
    return this.getStringAttribute('tls10');
  }
  public set tls10(value: string) {
    this._tls10 = value;
  }
  public resetTls10() {
    this._tls10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls10Input() {
    return this._tls10;
  }

  // tls11 - computed: false, optional: true, required: false
  private _tls11?: string; 
  public get tls11() {
    return this.getStringAttribute('tls11');
  }
  public set tls11(value: string) {
    this._tls11 = value;
  }
  public resetTls11() {
    this._tls11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls11Input() {
    return this._tls11;
  }

  // tls12 - computed: false, optional: true, required: false
  private _tls12?: string; 
  public get tls12() {
    return this.getStringAttribute('tls12');
  }
  public set tls12(value: string) {
    this._tls12 = value;
  }
  public resetTls12() {
    this._tls12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12Input() {
    return this._tls12;
  }

  // tls13 - computed: false, optional: true, required: false
  private _tls13?: string; 
  public get tls13() {
    return this.getStringAttribute('tls13');
  }
  public set tls13(value: string) {
    this._tls13 = value;
  }
  public resetTls13() {
    this._tls13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Input() {
    return this._tls13;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaHttpsBasicConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaHttpsBasicConfigurationTimeouts) {
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
      ciphersuite: cdktf.stringToTerraform(this._ciphersuite),
      ciphersuite_group: cdktf.stringToTerraform(this._ciphersuiteGroup),
      http2: cdktf.stringToTerraform(this._http2),
      http3: cdktf.stringToTerraform(this._http3),
      https: cdktf.stringToTerraform(this._https),
      id: cdktf.stringToTerraform(this._id),
      ocsp_stapling: cdktf.stringToTerraform(this._ocspStapling),
      rule: cdktf.stringToTerraform(this._rule),
      rule_enable: cdktf.stringToTerraform(this._ruleEnable),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      sequence: cdktf.numberToTerraform(this._sequence),
      site_id: cdktf.stringToTerraform(this._siteId),
      tls10: cdktf.stringToTerraform(this._tls10),
      tls11: cdktf.stringToTerraform(this._tls11),
      tls12: cdktf.stringToTerraform(this._tls12),
      tls13: cdktf.stringToTerraform(this._tls13),
      timeouts: esaHttpsBasicConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ciphersuite: {
        value: cdktf.stringToHclTerraform(this._ciphersuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciphersuite_group: {
        value: cdktf.stringToHclTerraform(this._ciphersuiteGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2: {
        value: cdktf.stringToHclTerraform(this._http2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http3: {
        value: cdktf.stringToHclTerraform(this._http3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https: {
        value: cdktf.stringToHclTerraform(this._https),
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
      ocsp_stapling: {
        value: cdktf.stringToHclTerraform(this._ocspStapling),
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
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls10: {
        value: cdktf.stringToHclTerraform(this._tls10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls11: {
        value: cdktf.stringToHclTerraform(this._tls11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls12: {
        value: cdktf.stringToHclTerraform(this._tls12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls13: {
        value: cdktf.stringToHclTerraform(this._tls13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: esaHttpsBasicConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaHttpsBasicConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
