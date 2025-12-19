// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateLinkCostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Interval duration in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost#bandwidth_interval SlbTemplateLinkCost#bandwidth_interval}
  */
  readonly bandwidthInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost#id SlbTemplateLinkCost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server Link-Cost Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost#name SlbTemplateLinkCost#name}
  */
  readonly name: string;
  /**
  * Configure overage bandwidth cost on real server (Overage bandwidth cost per Mbpi)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost#overage_bandwidth_cost SlbTemplateLinkCost#overage_bandwidth_cost}
  */
  readonly overageBandwidthCost?: number;
  /**
  * Configure prepaid bandwidth on real server (Prepaid Bandwidth in Mbpi)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost#prepaid_bandwidth SlbTemplateLinkCost#prepaid_bandwidth}
  */
  readonly prepaidBandwidth?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost#user_tag SlbTemplateLinkCost#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost#uuid SlbTemplateLinkCost#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost#sampling_enable SlbTemplateLinkCost#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplateLinkCostSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbTemplateLinkCostSamplingEnable {
  /**
  * 'all': all; 'link_total_fwd_bytes': Total bytes fwd for link; 'interval_fwd_bytes': Link Cost bytes processed in forward direction per interval; 'link_total_conn': Link Cost total connection; 'interval_avg_throughput': Link Cost average throughput per interval; 'interval_max_throughput': Link Cost max throughput per interval;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost#counters1 SlbTemplateLinkCost#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplateLinkCostSamplingEnableToTerraform(struct?: SlbTemplateLinkCostSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplateLinkCostSamplingEnableToHclTerraform(struct?: SlbTemplateLinkCostSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateLinkCostSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateLinkCostSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateLinkCostSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplateLinkCostSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateLinkCostSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateLinkCostSamplingEnableOutputReference {
    return new SlbTemplateLinkCostSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost thunder_slb_template_link_cost}
*/
export class SlbTemplateLinkCost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_link_cost";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateLinkCost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateLinkCost to import
  * @param importFromId The id of the existing SlbTemplateLinkCost that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateLinkCost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_link_cost", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_cost thunder_slb_template_link_cost} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateLinkCostConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateLinkCostConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_link_cost',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidthInterval = config.bandwidthInterval;
    this._id = config.id;
    this._name = config.name;
    this._overageBandwidthCost = config.overageBandwidthCost;
    this._prepaidBandwidth = config.prepaidBandwidth;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_interval - computed: false, optional: true, required: false
  private _bandwidthInterval?: number; 
  public get bandwidthInterval() {
    return this.getNumberAttribute('bandwidth_interval');
  }
  public set bandwidthInterval(value: number) {
    this._bandwidthInterval = value;
  }
  public resetBandwidthInterval() {
    this._bandwidthInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthIntervalInput() {
    return this._bandwidthInterval;
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

  // overage_bandwidth_cost - computed: false, optional: true, required: false
  private _overageBandwidthCost?: number; 
  public get overageBandwidthCost() {
    return this.getNumberAttribute('overage_bandwidth_cost');
  }
  public set overageBandwidthCost(value: number) {
    this._overageBandwidthCost = value;
  }
  public resetOverageBandwidthCost() {
    this._overageBandwidthCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overageBandwidthCostInput() {
    return this._overageBandwidthCost;
  }

  // prepaid_bandwidth - computed: false, optional: true, required: false
  private _prepaidBandwidth?: number; 
  public get prepaidBandwidth() {
    return this.getNumberAttribute('prepaid_bandwidth');
  }
  public set prepaidBandwidth(value: number) {
    this._prepaidBandwidth = value;
  }
  public resetPrepaidBandwidth() {
    this._prepaidBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepaidBandwidthInput() {
    return this._prepaidBandwidth;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplateLinkCostSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplateLinkCostSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_interval: cdktf.numberToTerraform(this._bandwidthInterval),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      overage_bandwidth_cost: cdktf.numberToTerraform(this._overageBandwidthCost),
      prepaid_bandwidth: cdktf.numberToTerraform(this._prepaidBandwidth),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(slbTemplateLinkCostSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_interval: {
        value: cdktf.numberToHclTerraform(this._bandwidthInterval),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overage_bandwidth_cost: {
        value: cdktf.numberToHclTerraform(this._overageBandwidthCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepaid_bandwidth: {
        value: cdktf.numberToHclTerraform(this._prepaidBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      sampling_enable: {
        value: cdktf.listMapperHcl(slbTemplateLinkCostSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateLinkCostSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
