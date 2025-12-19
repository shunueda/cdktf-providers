// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenSearchAppGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#app_group_name OpenSearchAppGroup#app_group_name}
  */
  readonly appGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#charge_way OpenSearchAppGroup#charge_way}
  */
  readonly chargeWay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#current_version OpenSearchAppGroup#current_version}
  */
  readonly currentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#description OpenSearchAppGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#id OpenSearchAppGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#order_type OpenSearchAppGroup#order_type}
  */
  readonly orderType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#payment_type OpenSearchAppGroup#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#type OpenSearchAppGroup#type}
  */
  readonly type: string;
  /**
  * order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#order OpenSearchAppGroup#order}
  */
  readonly order?: OpenSearchAppGroupOrder[] | cdktf.IResolvable;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#quota OpenSearchAppGroup#quota}
  */
  readonly quota: OpenSearchAppGroupQuota;
}
export interface OpenSearchAppGroupOrder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#auto_renew OpenSearchAppGroup#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#duration OpenSearchAppGroup#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#pricing_cycle OpenSearchAppGroup#pricing_cycle}
  */
  readonly pricingCycle?: string;
}

export function openSearchAppGroupOrderToTerraform(struct?: OpenSearchAppGroupOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_renew: cdktf.booleanToTerraform(struct!.autoRenew),
    duration: cdktf.numberToTerraform(struct!.duration),
    pricing_cycle: cdktf.stringToTerraform(struct!.pricingCycle),
  }
}


export function openSearchAppGroupOrderToHclTerraform(struct?: OpenSearchAppGroupOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_renew: {
      value: cdktf.booleanToHclTerraform(struct!.autoRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pricing_cycle: {
      value: cdktf.stringToHclTerraform(struct!.pricingCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenSearchAppGroupOrderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenSearchAppGroupOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenew = this._autoRenew;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._pricingCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricingCycle = this._pricingCycle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenSearchAppGroupOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRenew = undefined;
      this._duration = undefined;
      this._pricingCycle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRenew = value.autoRenew;
      this._duration = value.duration;
      this._pricingCycle = value.pricingCycle;
    }
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // pricing_cycle - computed: false, optional: true, required: false
  private _pricingCycle?: string; 
  public get pricingCycle() {
    return this.getStringAttribute('pricing_cycle');
  }
  public set pricingCycle(value: string) {
    this._pricingCycle = value;
  }
  public resetPricingCycle() {
    this._pricingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingCycleInput() {
    return this._pricingCycle;
  }
}

export class OpenSearchAppGroupOrderList extends cdktf.ComplexList {
  public internalValue? : OpenSearchAppGroupOrder[] | cdktf.IResolvable

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
  public get(index: number): OpenSearchAppGroupOrderOutputReference {
    return new OpenSearchAppGroupOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenSearchAppGroupQuota {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#compute_resource OpenSearchAppGroup#compute_resource}
  */
  readonly computeResource: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#doc_size OpenSearchAppGroup#doc_size}
  */
  readonly docSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#qps OpenSearchAppGroup#qps}
  */
  readonly qps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#spec OpenSearchAppGroup#spec}
  */
  readonly spec: string;
}

export function openSearchAppGroupQuotaToTerraform(struct?: OpenSearchAppGroupQuotaOutputReference | OpenSearchAppGroupQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_resource: cdktf.numberToTerraform(struct!.computeResource),
    doc_size: cdktf.numberToTerraform(struct!.docSize),
    qps: cdktf.numberToTerraform(struct!.qps),
    spec: cdktf.stringToTerraform(struct!.spec),
  }
}


export function openSearchAppGroupQuotaToHclTerraform(struct?: OpenSearchAppGroupQuotaOutputReference | OpenSearchAppGroupQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_resource: {
      value: cdktf.numberToHclTerraform(struct!.computeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doc_size: {
      value: cdktf.numberToHclTerraform(struct!.docSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qps: {
      value: cdktf.numberToHclTerraform(struct!.qps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenSearchAppGroupQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenSearchAppGroupQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeResource = this._computeResource;
    }
    if (this._docSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.docSize = this._docSize;
    }
    if (this._qps !== undefined) {
      hasAnyValues = true;
      internalValueResult.qps = this._qps;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenSearchAppGroupQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeResource = undefined;
      this._docSize = undefined;
      this._qps = undefined;
      this._spec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeResource = value.computeResource;
      this._docSize = value.docSize;
      this._qps = value.qps;
      this._spec = value.spec;
    }
  }

  // compute_resource - computed: false, optional: false, required: true
  private _computeResource?: number; 
  public get computeResource() {
    return this.getNumberAttribute('compute_resource');
  }
  public set computeResource(value: number) {
    this._computeResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourceInput() {
    return this._computeResource;
  }

  // doc_size - computed: false, optional: false, required: true
  private _docSize?: number; 
  public get docSize() {
    return this.getNumberAttribute('doc_size');
  }
  public set docSize(value: number) {
    this._docSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get docSizeInput() {
    return this._docSize;
  }

  // qps - computed: false, optional: true, required: false
  private _qps?: number; 
  public get qps() {
    return this.getNumberAttribute('qps');
  }
  public set qps(value: number) {
    this._qps = value;
  }
  public resetQps() {
    this._qps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpsInput() {
    return this._qps;
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group alicloud_open_search_app_group}
*/
export class OpenSearchAppGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_open_search_app_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenSearchAppGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenSearchAppGroup to import
  * @param importFromId The id of the existing OpenSearchAppGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenSearchAppGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_open_search_app_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/open_search_app_group alicloud_open_search_app_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenSearchAppGroupConfig
  */
  public constructor(scope: Construct, id: string, config: OpenSearchAppGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_open_search_app_group',
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
    this._appGroupName = config.appGroupName;
    this._chargeWay = config.chargeWay;
    this._currentVersion = config.currentVersion;
    this._description = config.description;
    this._id = config.id;
    this._orderType = config.orderType;
    this._paymentType = config.paymentType;
    this._type = config.type;
    this._order.internalValue = config.order;
    this._quota.internalValue = config.quota;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_group_name - computed: false, optional: false, required: true
  private _appGroupName?: string; 
  public get appGroupName() {
    return this.getStringAttribute('app_group_name');
  }
  public set appGroupName(value: string) {
    this._appGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appGroupNameInput() {
    return this._appGroupName;
  }

  // charge_way - computed: true, optional: true, required: false
  private _chargeWay?: string; 
  public get chargeWay() {
    return this.getStringAttribute('charge_way');
  }
  public set chargeWay(value: string) {
    this._chargeWay = value;
  }
  public resetChargeWay() {
    this._chargeWay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeWayInput() {
    return this._chargeWay;
  }

  // current_version - computed: false, optional: true, required: false
  private _currentVersion?: string; 
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }
  public set currentVersion(value: string) {
    this._currentVersion = value;
  }
  public resetCurrentVersion() {
    this._currentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentVersionInput() {
    return this._currentVersion;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // order_type - computed: true, optional: true, required: false
  private _orderType?: string; 
  public get orderType() {
    return this.getStringAttribute('order_type');
  }
  public set orderType(value: string) {
    this._orderType = value;
  }
  public resetOrderType() {
    this._orderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderTypeInput() {
    return this._orderType;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // order - computed: false, optional: true, required: false
  private _order = new OpenSearchAppGroupOrderList(this, "order", true);
  public get order() {
    return this._order;
  }
  public putOrder(value: OpenSearchAppGroupOrder[] | cdktf.IResolvable) {
    this._order.internalValue = value;
  }
  public resetOrder() {
    this._order.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order.internalValue;
  }

  // quota - computed: false, optional: false, required: true
  private _quota = new OpenSearchAppGroupQuotaOutputReference(this, "quota");
  public get quota() {
    return this._quota;
  }
  public putQuota(value: OpenSearchAppGroupQuota) {
    this._quota.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_group_name: cdktf.stringToTerraform(this._appGroupName),
      charge_way: cdktf.stringToTerraform(this._chargeWay),
      current_version: cdktf.stringToTerraform(this._currentVersion),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      order_type: cdktf.stringToTerraform(this._orderType),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      type: cdktf.stringToTerraform(this._type),
      order: cdktf.listMapper(openSearchAppGroupOrderToTerraform, true)(this._order.internalValue),
      quota: openSearchAppGroupQuotaToTerraform(this._quota.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_group_name: {
        value: cdktf.stringToHclTerraform(this._appGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_way: {
        value: cdktf.stringToHclTerraform(this._chargeWay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      current_version: {
        value: cdktf.stringToHclTerraform(this._currentVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      order_type: {
        value: cdktf.stringToHclTerraform(this._orderType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.listMapperHcl(openSearchAppGroupOrderToHclTerraform, true)(this._order.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenSearchAppGroupOrderList",
      },
      quota: {
        value: openSearchAppGroupQuotaToHclTerraform(this._quota.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenSearchAppGroupQuotaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
