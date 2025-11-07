// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaNetworkOptimizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#grpc EsaNetworkOptimization#grpc}
  */
  readonly grpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#http2_origin EsaNetworkOptimization#http2_origin}
  */
  readonly http2Origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#id EsaNetworkOptimization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#rule EsaNetworkOptimization#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#rule_enable EsaNetworkOptimization#rule_enable}
  */
  readonly ruleEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#rule_name EsaNetworkOptimization#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#sequence EsaNetworkOptimization#sequence}
  */
  readonly sequence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#site_id EsaNetworkOptimization#site_id}
  */
  readonly siteId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#site_version EsaNetworkOptimization#site_version}
  */
  readonly siteVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#smart_routing EsaNetworkOptimization#smart_routing}
  */
  readonly smartRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#upload_max_filesize EsaNetworkOptimization#upload_max_filesize}
  */
  readonly uploadMaxFilesize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#websocket EsaNetworkOptimization#websocket}
  */
  readonly websocket?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#timeouts EsaNetworkOptimization#timeouts}
  */
  readonly timeouts?: EsaNetworkOptimizationTimeouts;
}
export interface EsaNetworkOptimizationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#create EsaNetworkOptimization#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#delete EsaNetworkOptimization#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#update EsaNetworkOptimization#update}
  */
  readonly update?: string;
}

export function esaNetworkOptimizationTimeoutsToTerraform(struct?: EsaNetworkOptimizationTimeouts | cdktf.IResolvable): any {
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


export function esaNetworkOptimizationTimeoutsToHclTerraform(struct?: EsaNetworkOptimizationTimeouts | cdktf.IResolvable): any {
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

export class EsaNetworkOptimizationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaNetworkOptimizationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaNetworkOptimizationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization alicloud_esa_network_optimization}
*/
export class EsaNetworkOptimization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_network_optimization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaNetworkOptimization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaNetworkOptimization to import
  * @param importFromId The id of the existing EsaNetworkOptimization that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaNetworkOptimization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_network_optimization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/esa_network_optimization alicloud_esa_network_optimization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaNetworkOptimizationConfig
  */
  public constructor(scope: Construct, id: string, config: EsaNetworkOptimizationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_network_optimization',
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
    this._grpc = config.grpc;
    this._http2Origin = config.http2Origin;
    this._id = config.id;
    this._rule = config.rule;
    this._ruleEnable = config.ruleEnable;
    this._ruleName = config.ruleName;
    this._sequence = config.sequence;
    this._siteId = config.siteId;
    this._siteVersion = config.siteVersion;
    this._smartRouting = config.smartRouting;
    this._uploadMaxFilesize = config.uploadMaxFilesize;
    this._websocket = config.websocket;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getNumberAttribute('config_id');
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc?: string; 
  public get grpc() {
    return this.getStringAttribute('grpc');
  }
  public set grpc(value: string) {
    this._grpc = value;
  }
  public resetGrpc() {
    this._grpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc;
  }

  // http2_origin - computed: false, optional: true, required: false
  private _http2Origin?: string; 
  public get http2Origin() {
    return this.getStringAttribute('http2_origin');
  }
  public set http2Origin(value: string) {
    this._http2Origin = value;
  }
  public resetHttp2Origin() {
    this._http2Origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2OriginInput() {
    return this._http2Origin;
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

  // smart_routing - computed: false, optional: true, required: false
  private _smartRouting?: string; 
  public get smartRouting() {
    return this.getStringAttribute('smart_routing');
  }
  public set smartRouting(value: string) {
    this._smartRouting = value;
  }
  public resetSmartRouting() {
    this._smartRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartRoutingInput() {
    return this._smartRouting;
  }

  // upload_max_filesize - computed: false, optional: true, required: false
  private _uploadMaxFilesize?: string; 
  public get uploadMaxFilesize() {
    return this.getStringAttribute('upload_max_filesize');
  }
  public set uploadMaxFilesize(value: string) {
    this._uploadMaxFilesize = value;
  }
  public resetUploadMaxFilesize() {
    this._uploadMaxFilesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadMaxFilesizeInput() {
    return this._uploadMaxFilesize;
  }

  // websocket - computed: false, optional: true, required: false
  private _websocket?: string; 
  public get websocket() {
    return this.getStringAttribute('websocket');
  }
  public set websocket(value: string) {
    this._websocket = value;
  }
  public resetWebsocket() {
    this._websocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketInput() {
    return this._websocket;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaNetworkOptimizationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaNetworkOptimizationTimeouts) {
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
      grpc: cdktf.stringToTerraform(this._grpc),
      http2_origin: cdktf.stringToTerraform(this._http2Origin),
      id: cdktf.stringToTerraform(this._id),
      rule: cdktf.stringToTerraform(this._rule),
      rule_enable: cdktf.stringToTerraform(this._ruleEnable),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      sequence: cdktf.numberToTerraform(this._sequence),
      site_id: cdktf.numberToTerraform(this._siteId),
      site_version: cdktf.numberToTerraform(this._siteVersion),
      smart_routing: cdktf.stringToTerraform(this._smartRouting),
      upload_max_filesize: cdktf.stringToTerraform(this._uploadMaxFilesize),
      websocket: cdktf.stringToTerraform(this._websocket),
      timeouts: esaNetworkOptimizationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      grpc: {
        value: cdktf.stringToHclTerraform(this._grpc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2_origin: {
        value: cdktf.stringToHclTerraform(this._http2Origin),
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
      smart_routing: {
        value: cdktf.stringToHclTerraform(this._smartRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_max_filesize: {
        value: cdktf.stringToHclTerraform(this._uploadMaxFilesize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      websocket: {
        value: cdktf.stringToHclTerraform(this._websocket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: esaNetworkOptimizationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaNetworkOptimizationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
