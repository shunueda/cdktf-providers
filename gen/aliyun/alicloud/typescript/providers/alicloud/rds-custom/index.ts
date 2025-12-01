// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsCustomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#amount RdsCustom#amount}
  */
  readonly amount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#auto_pay RdsCustom#auto_pay}
  */
  readonly autoPay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#auto_renew RdsCustom#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#create_extra_param RdsCustom#create_extra_param}
  */
  readonly createExtraParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#create_mode RdsCustom#create_mode}
  */
  readonly createMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#deployment_set_id RdsCustom#deployment_set_id}
  */
  readonly deploymentSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#description RdsCustom#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#direction RdsCustom#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#dry_run RdsCustom#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#force RdsCustom#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#force_stop RdsCustom#force_stop}
  */
  readonly forceStop?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#host_name RdsCustom#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#id RdsCustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#image_id RdsCustom#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#instance_charge_type RdsCustom#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#instance_type RdsCustom#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#internet_charge_type RdsCustom#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#internet_max_bandwidth_out RdsCustom#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#io_optimized RdsCustom#io_optimized}
  */
  readonly ioOptimized?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#key_pair_name RdsCustom#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#password RdsCustom#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#period RdsCustom#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#period_unit RdsCustom#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#resource_group_id RdsCustom#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#security_enhancement_strategy RdsCustom#security_enhancement_strategy}
  */
  readonly securityEnhancementStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#security_group_ids RdsCustom#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#spot_strategy RdsCustom#spot_strategy}
  */
  readonly spotStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#status RdsCustom#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#support_case RdsCustom#support_case}
  */
  readonly supportCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#tags RdsCustom#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#vswitch_id RdsCustom#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#zone_id RdsCustom#zone_id}
  */
  readonly zoneId?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#data_disk RdsCustom#data_disk}
  */
  readonly dataDisk?: RdsCustomDataDisk[] | cdktf.IResolvable;
  /**
  * system_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#system_disk RdsCustom#system_disk}
  */
  readonly systemDisk?: RdsCustomSystemDisk;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#timeouts RdsCustom#timeouts}
  */
  readonly timeouts?: RdsCustomTimeouts;
}
export interface RdsCustomDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#category RdsCustom#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#performance_level RdsCustom#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#size RdsCustom#size}
  */
  readonly size?: number;
}

export function rdsCustomDataDiskToTerraform(struct?: RdsCustomDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    performance_level: cdktf.stringToTerraform(struct!.performanceLevel),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function rdsCustomDataDiskToHclTerraform(struct?: RdsCustomDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_level: {
      value: cdktf.stringToHclTerraform(struct!.performanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsCustomDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdsCustomDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._performanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceLevel = this._performanceLevel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsCustomDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._performanceLevel = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._performanceLevel = value.performanceLevel;
      this._size = value.size;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // performance_level - computed: false, optional: true, required: false
  private _performanceLevel?: string; 
  public get performanceLevel() {
    return this.getStringAttribute('performance_level');
  }
  public set performanceLevel(value: string) {
    this._performanceLevel = value;
  }
  public resetPerformanceLevel() {
    this._performanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceLevelInput() {
    return this._performanceLevel;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class RdsCustomDataDiskList extends cdktf.ComplexList {
  public internalValue? : RdsCustomDataDisk[] | cdktf.IResolvable

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
  public get(index: number): RdsCustomDataDiskOutputReference {
    return new RdsCustomDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsCustomSystemDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#category RdsCustom#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#size RdsCustom#size}
  */
  readonly size?: string;
}

export function rdsCustomSystemDiskToTerraform(struct?: RdsCustomSystemDiskOutputReference | RdsCustomSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function rdsCustomSystemDiskToHclTerraform(struct?: RdsCustomSystemDiskOutputReference | RdsCustomSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsCustomSystemDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsCustomSystemDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsCustomSystemDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category = value.category;
      this._size = value.size;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface RdsCustomTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#create RdsCustom#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#delete RdsCustom#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#update RdsCustom#update}
  */
  readonly update?: string;
}

export function rdsCustomTimeoutsToTerraform(struct?: RdsCustomTimeouts | cdktf.IResolvable): any {
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


export function rdsCustomTimeoutsToHclTerraform(struct?: RdsCustomTimeouts | cdktf.IResolvable): any {
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

export class RdsCustomTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsCustomTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsCustomTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom alicloud_rds_custom}
*/
export class RdsCustom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rds_custom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsCustom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsCustom to import
  * @param importFromId The id of the existing RdsCustom that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsCustom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rds_custom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_custom alicloud_rds_custom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsCustomConfig
  */
  public constructor(scope: Construct, id: string, config: RdsCustomConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rds_custom',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amount = config.amount;
    this._autoPay = config.autoPay;
    this._autoRenew = config.autoRenew;
    this._createExtraParam = config.createExtraParam;
    this._createMode = config.createMode;
    this._deploymentSetId = config.deploymentSetId;
    this._description = config.description;
    this._direction = config.direction;
    this._dryRun = config.dryRun;
    this._force = config.force;
    this._forceStop = config.forceStop;
    this._hostName = config.hostName;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceType = config.instanceType;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._ioOptimized = config.ioOptimized;
    this._keyPairName = config.keyPairName;
    this._password = config.password;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._resourceGroupId = config.resourceGroupId;
    this._securityEnhancementStrategy = config.securityEnhancementStrategy;
    this._securityGroupIds = config.securityGroupIds;
    this._spotStrategy = config.spotStrategy;
    this._status = config.status;
    this._supportCase = config.supportCase;
    this._tags = config.tags;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._dataDisk.internalValue = config.dataDisk;
    this._systemDisk.internalValue = config.systemDisk;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount - computed: false, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // auto_pay - computed: false, optional: true, required: false
  private _autoPay?: boolean | cdktf.IResolvable; 
  public get autoPay() {
    return this.getBooleanAttribute('auto_pay');
  }
  public set autoPay(value: boolean | cdktf.IResolvable) {
    this._autoPay = value;
  }
  public resetAutoPay() {
    this._autoPay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPayInput() {
    return this._autoPay;
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

  // create_extra_param - computed: false, optional: true, required: false
  private _createExtraParam?: string; 
  public get createExtraParam() {
    return this.getStringAttribute('create_extra_param');
  }
  public set createExtraParam(value: string) {
    this._createExtraParam = value;
  }
  public resetCreateExtraParam() {
    this._createExtraParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createExtraParamInput() {
    return this._createExtraParam;
  }

  // create_mode - computed: false, optional: true, required: false
  private _createMode?: string; 
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string) {
    this._createMode = value;
  }
  public resetCreateMode() {
    this._createMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createModeInput() {
    return this._createMode;
  }

  // deployment_set_id - computed: false, optional: true, required: false
  private _deploymentSetId?: string; 
  public get deploymentSetId() {
    return this.getStringAttribute('deployment_set_id');
  }
  public set deploymentSetId(value: string) {
    this._deploymentSetId = value;
  }
  public resetDeploymentSetId() {
    this._deploymentSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentSetIdInput() {
    return this._deploymentSetId;
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

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // force_stop - computed: false, optional: true, required: false
  private _forceStop?: boolean | cdktf.IResolvable; 
  public get forceStop() {
    return this.getBooleanAttribute('force_stop');
  }
  public set forceStop(value: boolean | cdktf.IResolvable) {
    this._forceStop = value;
  }
  public resetForceStop() {
    this._forceStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStopInput() {
    return this._forceStop;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // internet_charge_type - computed: false, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // internet_max_bandwidth_out - computed: false, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // io_optimized - computed: false, optional: true, required: false
  private _ioOptimized?: string; 
  public get ioOptimized() {
    return this.getStringAttribute('io_optimized');
  }
  public set ioOptimized(value: string) {
    this._ioOptimized = value;
  }
  public resetIoOptimized() {
    this._ioOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioOptimizedInput() {
    return this._ioOptimized;
  }

  // key_pair_name - computed: false, optional: true, required: false
  private _keyPairName?: string; 
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }
  public set keyPairName(value: string) {
    this._keyPairName = value;
  }
  public resetKeyPairName() {
    this._keyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairNameInput() {
    return this._keyPairName;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // period_unit - computed: false, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // security_enhancement_strategy - computed: false, optional: true, required: false
  private _securityEnhancementStrategy?: string; 
  public get securityEnhancementStrategy() {
    return this.getStringAttribute('security_enhancement_strategy');
  }
  public set securityEnhancementStrategy(value: string) {
    this._securityEnhancementStrategy = value;
  }
  public resetSecurityEnhancementStrategy() {
    this._securityEnhancementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEnhancementStrategyInput() {
    return this._securityEnhancementStrategy;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // spot_strategy - computed: false, optional: true, required: false
  private _spotStrategy?: string; 
  public get spotStrategy() {
    return this.getStringAttribute('spot_strategy');
  }
  public set spotStrategy(value: string) {
    this._spotStrategy = value;
  }
  public resetSpotStrategy() {
    this._spotStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotStrategyInput() {
    return this._spotStrategy;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // support_case - computed: false, optional: true, required: false
  private _supportCase?: string; 
  public get supportCase() {
    return this.getStringAttribute('support_case');
  }
  public set supportCase(value: string) {
    this._supportCase = value;
  }
  public resetSupportCase() {
    this._supportCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportCaseInput() {
    return this._supportCase;
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

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new RdsCustomDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: RdsCustomDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // system_disk - computed: false, optional: true, required: false
  private _systemDisk = new RdsCustomSystemDiskOutputReference(this, "system_disk");
  public get systemDisk() {
    return this._systemDisk;
  }
  public putSystemDisk(value: RdsCustomSystemDisk) {
    this._systemDisk.internalValue = value;
  }
  public resetSystemDisk() {
    this._systemDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskInput() {
    return this._systemDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsCustomTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsCustomTimeouts) {
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
      amount: cdktf.numberToTerraform(this._amount),
      auto_pay: cdktf.booleanToTerraform(this._autoPay),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      create_extra_param: cdktf.stringToTerraform(this._createExtraParam),
      create_mode: cdktf.stringToTerraform(this._createMode),
      deployment_set_id: cdktf.stringToTerraform(this._deploymentSetId),
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.stringToTerraform(this._direction),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      force: cdktf.booleanToTerraform(this._force),
      force_stop: cdktf.booleanToTerraform(this._forceStop),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      io_optimized: cdktf.stringToTerraform(this._ioOptimized),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      password: cdktf.stringToTerraform(this._password),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_enhancement_strategy: cdktf.stringToTerraform(this._securityEnhancementStrategy),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      spot_strategy: cdktf.stringToTerraform(this._spotStrategy),
      status: cdktf.stringToTerraform(this._status),
      support_case: cdktf.stringToTerraform(this._supportCase),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      data_disk: cdktf.listMapper(rdsCustomDataDiskToTerraform, true)(this._dataDisk.internalValue),
      system_disk: rdsCustomSystemDiskToTerraform(this._systemDisk.internalValue),
      timeouts: rdsCustomTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amount: {
        value: cdktf.numberToHclTerraform(this._amount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_pay: {
        value: cdktf.booleanToHclTerraform(this._autoPay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_extra_param: {
        value: cdktf.stringToHclTerraform(this._createExtraParam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_mode: {
        value: cdktf.stringToHclTerraform(this._createMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_set_id: {
        value: cdktf.stringToHclTerraform(this._deploymentSetId),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_stop: {
        value: cdktf.booleanToHclTerraform(this._forceStop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_max_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      io_optimized: {
        value: cdktf.stringToHclTerraform(this._ioOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair_name: {
        value: cdktf.stringToHclTerraform(this._keyPairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_enhancement_strategy: {
        value: cdktf.stringToHclTerraform(this._securityEnhancementStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      spot_strategy: {
        value: cdktf.stringToHclTerraform(this._spotStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_case: {
        value: cdktf.stringToHclTerraform(this._supportCase),
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
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_disk: {
        value: cdktf.listMapperHcl(rdsCustomDataDiskToHclTerraform, true)(this._dataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsCustomDataDiskList",
      },
      system_disk: {
        value: rdsCustomSystemDiskToHclTerraform(this._systemDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsCustomSystemDiskList",
      },
      timeouts: {
        value: rdsCustomTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsCustomTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
