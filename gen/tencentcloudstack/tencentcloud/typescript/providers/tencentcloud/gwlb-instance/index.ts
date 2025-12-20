// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gwlb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GwlbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gwlb_instance#id GwlbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * GWLB instance billing type, which currently supports POSTPAID_BY_HOUR only. The default is POSTPAID_BY_HOUR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gwlb_instance#lb_charge_type GwlbInstance#lb_charge_type}
  */
  readonly lbChargeType?: string;
  /**
  * GWLB instance name. It supports input of 1 to 60 characters. If not filled in, it will be generated automatically by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gwlb_instance#load_balancer_name GwlbInstance#load_balancer_name}
  */
  readonly loadBalancerName?: string;
  /**
  * Subnet ID of the VPC to which the backend target device of the GWLB belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gwlb_instance#subnet_id GwlbInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * ID of the VPC to which the backend target device of the GWLB belongs, such as vpc-12345678. It can be obtained through the DescribeVpcEx interface. If left blank, it defaults to DefaultVPC. This parameter is required when a private network CLB instance is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gwlb_instance#vpc_id GwlbInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gwlb_instance#tags GwlbInstance#tags}
  */
  readonly tags?: GwlbInstanceTags[] | cdktf.IResolvable;
}
export interface GwlbInstanceTags {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gwlb_instance#tag_key GwlbInstance#tag_key}
  */
  readonly tagKey: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gwlb_instance#tag_value GwlbInstance#tag_value}
  */
  readonly tagValue: string;
}

export function gwlbInstanceTagsToTerraform(struct?: GwlbInstanceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function gwlbInstanceTagsToHclTerraform(struct?: GwlbInstanceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GwlbInstanceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GwlbInstanceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GwlbInstanceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class GwlbInstanceTagsList extends cdktf.ComplexList {
  public internalValue? : GwlbInstanceTags[] | cdktf.IResolvable

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
  public get(index: number): GwlbInstanceTagsOutputReference {
    return new GwlbInstanceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gwlb_instance tencentcloud_gwlb_instance}
*/
export class GwlbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gwlb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GwlbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GwlbInstance to import
  * @param importFromId The id of the existing GwlbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gwlb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GwlbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gwlb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/gwlb_instance tencentcloud_gwlb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GwlbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: GwlbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gwlb_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._lbChargeType = config.lbChargeType;
    this._loadBalancerName = config.loadBalancerName;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_protect - computed: true, optional: false, required: false
  public get deleteProtect() {
    return this.getBooleanAttribute('delete_protect');
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

  // isolated_time - computed: true, optional: false, required: false
  public get isolatedTime() {
    return this.getStringAttribute('isolated_time');
  }

  // isolation - computed: true, optional: false, required: false
  public get isolation() {
    return this.getNumberAttribute('isolation');
  }

  // lb_charge_type - computed: true, optional: true, required: false
  private _lbChargeType?: string; 
  public get lbChargeType() {
    return this.getStringAttribute('lb_charge_type');
  }
  public set lbChargeType(value: string) {
    this._lbChargeType = value;
  }
  public resetLbChargeType() {
    this._lbChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbChargeTypeInput() {
    return this._lbChargeType;
  }

  // load_balancer_name - computed: false, optional: true, required: false
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  public resetLoadBalancerName() {
    this._loadBalancerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
  }

  // operate_protect - computed: true, optional: false, required: false
  public get operateProtect() {
    return this.getBooleanAttribute('operate_protect');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // target_group_id - computed: true, optional: false, required: false
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }

  // vips - computed: true, optional: false, required: false
  public get vips() {
    return this.getListAttribute('vips');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new GwlbInstanceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: GwlbInstanceTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lb_charge_type: cdktf.stringToTerraform(this._lbChargeType),
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      tags: cdktf.listMapper(gwlbInstanceTagsToTerraform, true)(this._tags.internalValue),
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
      lb_charge_type: {
        value: cdktf.stringToHclTerraform(this._lbChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_name: {
        value: cdktf.stringToHclTerraform(this._loadBalancerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(gwlbInstanceTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GwlbInstanceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
