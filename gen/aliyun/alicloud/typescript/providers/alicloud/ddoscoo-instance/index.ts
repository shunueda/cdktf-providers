// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdoscooInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#address_type DdoscooInstance#address_type}
  */
  readonly addressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#bandwidth DdoscooInstance#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#bandwidth_mode DdoscooInstance#bandwidth_mode}
  */
  readonly bandwidthMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#base_bandwidth DdoscooInstance#base_bandwidth}
  */
  readonly baseBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#domain_count DdoscooInstance#domain_count}
  */
  readonly domainCount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#edition_sale DdoscooInstance#edition_sale}
  */
  readonly editionSale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#function_version DdoscooInstance#function_version}
  */
  readonly functionVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#id DdoscooInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#modify_type DdoscooInstance#modify_type}
  */
  readonly modifyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#name DdoscooInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#normal_bandwidth DdoscooInstance#normal_bandwidth}
  */
  readonly normalBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#normal_qps DdoscooInstance#normal_qps}
  */
  readonly normalQps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#period DdoscooInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#port_count DdoscooInstance#port_count}
  */
  readonly portCount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#product_plan DdoscooInstance#product_plan}
  */
  readonly productPlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#product_type DdoscooInstance#product_type}
  */
  readonly productType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#service_bandwidth DdoscooInstance#service_bandwidth}
  */
  readonly serviceBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#tags DdoscooInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#timeouts DdoscooInstance#timeouts}
  */
  readonly timeouts?: DdoscooInstanceTimeouts;
}
export interface DdoscooInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#create DdoscooInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#delete DdoscooInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#update DdoscooInstance#update}
  */
  readonly update?: string;
}

export function ddoscooInstanceTimeoutsToTerraform(struct?: DdoscooInstanceTimeouts | cdktf.IResolvable): any {
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


export function ddoscooInstanceTimeoutsToHclTerraform(struct?: DdoscooInstanceTimeouts | cdktf.IResolvable): any {
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

export class DdoscooInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DdoscooInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdoscooInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance alicloud_ddoscoo_instance}
*/
export class DdoscooInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ddoscoo_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdoscooInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdoscooInstance to import
  * @param importFromId The id of the existing DdoscooInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdoscooInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ddoscoo_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ddoscoo_instance alicloud_ddoscoo_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdoscooInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DdoscooInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ddoscoo_instance',
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
    this._addressType = config.addressType;
    this._bandwidth = config.bandwidth;
    this._bandwidthMode = config.bandwidthMode;
    this._baseBandwidth = config.baseBandwidth;
    this._domainCount = config.domainCount;
    this._editionSale = config.editionSale;
    this._functionVersion = config.functionVersion;
    this._id = config.id;
    this._modifyType = config.modifyType;
    this._name = config.name;
    this._normalBandwidth = config.normalBandwidth;
    this._normalQps = config.normalQps;
    this._period = config.period;
    this._portCount = config.portCount;
    this._productPlan = config.productPlan;
    this._productType = config.productType;
    this._serviceBandwidth = config.serviceBandwidth;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_type - computed: true, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // bandwidth_mode - computed: false, optional: true, required: false
  private _bandwidthMode?: string; 
  public get bandwidthMode() {
    return this.getStringAttribute('bandwidth_mode');
  }
  public set bandwidthMode(value: string) {
    this._bandwidthMode = value;
  }
  public resetBandwidthMode() {
    this._bandwidthMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthModeInput() {
    return this._bandwidthMode;
  }

  // base_bandwidth - computed: true, optional: true, required: false
  private _baseBandwidth?: string; 
  public get baseBandwidth() {
    return this.getStringAttribute('base_bandwidth');
  }
  public set baseBandwidth(value: string) {
    this._baseBandwidth = value;
  }
  public resetBaseBandwidth() {
    this._baseBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseBandwidthInput() {
    return this._baseBandwidth;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // domain_count - computed: false, optional: false, required: true
  private _domainCount?: string; 
  public get domainCount() {
    return this.getStringAttribute('domain_count');
  }
  public set domainCount(value: string) {
    this._domainCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainCountInput() {
    return this._domainCount;
  }

  // edition_sale - computed: true, optional: true, required: false
  private _editionSale?: string; 
  public get editionSale() {
    return this.getStringAttribute('edition_sale');
  }
  public set editionSale(value: string) {
    this._editionSale = value;
  }
  public resetEditionSale() {
    this._editionSale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionSaleInput() {
    return this._editionSale;
  }

  // function_version - computed: true, optional: true, required: false
  private _functionVersion?: string; 
  public get functionVersion() {
    return this.getStringAttribute('function_version');
  }
  public set functionVersion(value: string) {
    this._functionVersion = value;
  }
  public resetFunctionVersion() {
    this._functionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionVersionInput() {
    return this._functionVersion;
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // modify_type - computed: false, optional: true, required: false
  private _modifyType?: string; 
  public get modifyType() {
    return this.getStringAttribute('modify_type');
  }
  public set modifyType(value: string) {
    this._modifyType = value;
  }
  public resetModifyType() {
    this._modifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTypeInput() {
    return this._modifyType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // normal_bandwidth - computed: true, optional: true, required: false
  private _normalBandwidth?: string; 
  public get normalBandwidth() {
    return this.getStringAttribute('normal_bandwidth');
  }
  public set normalBandwidth(value: string) {
    this._normalBandwidth = value;
  }
  public resetNormalBandwidth() {
    this._normalBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalBandwidthInput() {
    return this._normalBandwidth;
  }

  // normal_qps - computed: true, optional: true, required: false
  private _normalQps?: string; 
  public get normalQps() {
    return this.getStringAttribute('normal_qps');
  }
  public set normalQps(value: string) {
    this._normalQps = value;
  }
  public resetNormalQps() {
    this._normalQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalQpsInput() {
    return this._normalQps;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port_count - computed: false, optional: false, required: true
  private _portCount?: string; 
  public get portCount() {
    return this.getStringAttribute('port_count');
  }
  public set portCount(value: string) {
    this._portCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountInput() {
    return this._portCount;
  }

  // product_plan - computed: true, optional: true, required: false
  private _productPlan?: string; 
  public get productPlan() {
    return this.getStringAttribute('product_plan');
  }
  public set productPlan(value: string) {
    this._productPlan = value;
  }
  public resetProductPlan() {
    this._productPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productPlanInput() {
    return this._productPlan;
  }

  // product_type - computed: false, optional: true, required: false
  private _productType?: string; 
  public get productType() {
    return this.getStringAttribute('product_type');
  }
  public set productType(value: string) {
    this._productType = value;
  }
  public resetProductType() {
    this._productType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType;
  }

  // service_bandwidth - computed: true, optional: true, required: false
  private _serviceBandwidth?: string; 
  public get serviceBandwidth() {
    return this.getStringAttribute('service_bandwidth');
  }
  public set serviceBandwidth(value: string) {
    this._serviceBandwidth = value;
  }
  public resetServiceBandwidth() {
    this._serviceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBandwidthInput() {
    return this._serviceBandwidth;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DdoscooInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DdoscooInstanceTimeouts) {
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
      address_type: cdktf.stringToTerraform(this._addressType),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      bandwidth_mode: cdktf.stringToTerraform(this._bandwidthMode),
      base_bandwidth: cdktf.stringToTerraform(this._baseBandwidth),
      domain_count: cdktf.stringToTerraform(this._domainCount),
      edition_sale: cdktf.stringToTerraform(this._editionSale),
      function_version: cdktf.stringToTerraform(this._functionVersion),
      id: cdktf.stringToTerraform(this._id),
      modify_type: cdktf.stringToTerraform(this._modifyType),
      name: cdktf.stringToTerraform(this._name),
      normal_bandwidth: cdktf.stringToTerraform(this._normalBandwidth),
      normal_qps: cdktf.stringToTerraform(this._normalQps),
      period: cdktf.numberToTerraform(this._period),
      port_count: cdktf.stringToTerraform(this._portCount),
      product_plan: cdktf.stringToTerraform(this._productPlan),
      product_type: cdktf.stringToTerraform(this._productType),
      service_bandwidth: cdktf.stringToTerraform(this._serviceBandwidth),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: ddoscooInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_mode: {
        value: cdktf.stringToHclTerraform(this._bandwidthMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_bandwidth: {
        value: cdktf.stringToHclTerraform(this._baseBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_count: {
        value: cdktf.stringToHclTerraform(this._domainCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edition_sale: {
        value: cdktf.stringToHclTerraform(this._editionSale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_version: {
        value: cdktf.stringToHclTerraform(this._functionVersion),
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
      modify_type: {
        value: cdktf.stringToHclTerraform(this._modifyType),
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
      normal_bandwidth: {
        value: cdktf.stringToHclTerraform(this._normalBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      normal_qps: {
        value: cdktf.stringToHclTerraform(this._normalQps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_count: {
        value: cdktf.stringToHclTerraform(this._portCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_plan: {
        value: cdktf.stringToHclTerraform(this._productPlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_type: {
        value: cdktf.stringToHclTerraform(this._productType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_bandwidth: {
        value: cdktf.stringToHclTerraform(this._serviceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: ddoscooInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DdoscooInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
