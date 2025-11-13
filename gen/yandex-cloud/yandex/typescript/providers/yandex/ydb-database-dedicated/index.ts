// https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface YdbDatabaseDedicatedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether public IP addresses should be assigned to the Yandex Database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#assign_public_ips YdbDatabaseDedicated#assign_public_ips}
  */
  readonly assignPublicIps?: boolean | cdktf.IResolvable;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#deletion_protection YdbDatabaseDedicated#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#description YdbDatabaseDedicated#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#folder_id YdbDatabaseDedicated#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#id YdbDatabaseDedicated#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#labels YdbDatabaseDedicated#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location ID for the Yandex Database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#location_id YdbDatabaseDedicated#location_id}
  */
  readonly locationId?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#name YdbDatabaseDedicated#name}
  */
  readonly name: string;
  /**
  * The `VPC Network ID` of subnets which resource attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#network_id YdbDatabaseDedicated#network_id}
  */
  readonly networkId: string;
  /**
  * The Yandex Database cluster preset. Available presets can be obtained via `yc ydb resource-preset list` command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#resource_preset_id YdbDatabaseDedicated#resource_preset_id}
  */
  readonly resourcePresetId: string;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#security_group_ids YdbDatabaseDedicated#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#sleep_after YdbDatabaseDedicated#sleep_after}
  */
  readonly sleepAfter?: number;
  /**
  * The list of VPC subnets identifiers which resource is attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#subnet_ids YdbDatabaseDedicated#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#location YdbDatabaseDedicated#location}
  */
  readonly location?: YdbDatabaseDedicatedLocation;
  /**
  * scale_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#scale_policy YdbDatabaseDedicated#scale_policy}
  */
  readonly scalePolicy: YdbDatabaseDedicatedScalePolicy;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#storage_config YdbDatabaseDedicated#storage_config}
  */
  readonly storageConfig: YdbDatabaseDedicatedStorageConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#timeouts YdbDatabaseDedicated#timeouts}
  */
  readonly timeouts?: YdbDatabaseDedicatedTimeouts;
}
export interface YdbDatabaseDedicatedLocationRegion {
  /**
  * Region ID for the Yandex Database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#id YdbDatabaseDedicated#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function ydbDatabaseDedicatedLocationRegionToTerraform(struct?: YdbDatabaseDedicatedLocationRegionOutputReference | YdbDatabaseDedicatedLocationRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function ydbDatabaseDedicatedLocationRegionToHclTerraform(struct?: YdbDatabaseDedicatedLocationRegionOutputReference | YdbDatabaseDedicatedLocationRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbDatabaseDedicatedLocationRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedLocationRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedLocationRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface YdbDatabaseDedicatedLocation {
  /**
  * region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#region YdbDatabaseDedicated#region}
  */
  readonly region?: YdbDatabaseDedicatedLocationRegion;
}

export function ydbDatabaseDedicatedLocationToTerraform(struct?: YdbDatabaseDedicatedLocationOutputReference | YdbDatabaseDedicatedLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: ydbDatabaseDedicatedLocationRegionToTerraform(struct!.region),
  }
}


export function ydbDatabaseDedicatedLocationToHclTerraform(struct?: YdbDatabaseDedicatedLocationOutputReference | YdbDatabaseDedicatedLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: ydbDatabaseDedicatedLocationRegionToHclTerraform(struct!.region),
      isBlock: true,
      type: "list",
      storageClassType: "YdbDatabaseDedicatedLocationRegionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbDatabaseDedicatedLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region.internalValue = value.region;
    }
  }

  // region - computed: false, optional: true, required: false
  private _region = new YdbDatabaseDedicatedLocationRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }
  public putRegion(value: YdbDatabaseDedicatedLocationRegion) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }
}
export interface YdbDatabaseDedicatedScalePolicyAutoScaleTargetTracking {
  /**
  * A percentage of database nodes average CPU utilization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#cpu_utilization_percent YdbDatabaseDedicated#cpu_utilization_percent}
  */
  readonly cpuUtilizationPercent: number;
}

export function ydbDatabaseDedicatedScalePolicyAutoScaleTargetTrackingToTerraform(struct?: YdbDatabaseDedicatedScalePolicyAutoScaleTargetTrackingOutputReference | YdbDatabaseDedicatedScalePolicyAutoScaleTargetTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_utilization_percent: cdktf.numberToTerraform(struct!.cpuUtilizationPercent),
  }
}


export function ydbDatabaseDedicatedScalePolicyAutoScaleTargetTrackingToHclTerraform(struct?: YdbDatabaseDedicatedScalePolicyAutoScaleTargetTrackingOutputReference | YdbDatabaseDedicatedScalePolicyAutoScaleTargetTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_utilization_percent: {
      value: cdktf.numberToHclTerraform(struct!.cpuUtilizationPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbDatabaseDedicatedScalePolicyAutoScaleTargetTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedScalePolicyAutoScaleTargetTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuUtilizationPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUtilizationPercent = this._cpuUtilizationPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedScalePolicyAutoScaleTargetTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuUtilizationPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuUtilizationPercent = value.cpuUtilizationPercent;
    }
  }

  // cpu_utilization_percent - computed: false, optional: false, required: true
  private _cpuUtilizationPercent?: number; 
  public get cpuUtilizationPercent() {
    return this.getNumberAttribute('cpu_utilization_percent');
  }
  public set cpuUtilizationPercent(value: number) {
    this._cpuUtilizationPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUtilizationPercentInput() {
    return this._cpuUtilizationPercent;
  }
}
export interface YdbDatabaseDedicatedScalePolicyAutoScale {
  /**
  * Maximum number of nodes to which autoscaling can scale the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#max_size YdbDatabaseDedicated#max_size}
  */
  readonly maxSize: number;
  /**
  * Minimum number of nodes to which autoscaling can scale the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#min_size YdbDatabaseDedicated#min_size}
  */
  readonly minSize: number;
  /**
  * target_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#target_tracking YdbDatabaseDedicated#target_tracking}
  */
  readonly targetTracking: YdbDatabaseDedicatedScalePolicyAutoScaleTargetTracking;
}

export function ydbDatabaseDedicatedScalePolicyAutoScaleToTerraform(struct?: YdbDatabaseDedicatedScalePolicyAutoScaleOutputReference | YdbDatabaseDedicatedScalePolicyAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    target_tracking: ydbDatabaseDedicatedScalePolicyAutoScaleTargetTrackingToTerraform(struct!.targetTracking),
  }
}


export function ydbDatabaseDedicatedScalePolicyAutoScaleToHclTerraform(struct?: YdbDatabaseDedicatedScalePolicyAutoScaleOutputReference | YdbDatabaseDedicatedScalePolicyAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_tracking: {
      value: ydbDatabaseDedicatedScalePolicyAutoScaleTargetTrackingToHclTerraform(struct!.targetTracking),
      isBlock: true,
      type: "list",
      storageClassType: "YdbDatabaseDedicatedScalePolicyAutoScaleTargetTrackingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbDatabaseDedicatedScalePolicyAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedScalePolicyAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._targetTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTracking = this._targetTracking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedScalePolicyAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._targetTracking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._targetTracking.internalValue = value.targetTracking;
    }
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // target_tracking - computed: false, optional: false, required: true
  private _targetTracking = new YdbDatabaseDedicatedScalePolicyAutoScaleTargetTrackingOutputReference(this, "target_tracking");
  public get targetTracking() {
    return this._targetTracking;
  }
  public putTargetTracking(value: YdbDatabaseDedicatedScalePolicyAutoScaleTargetTracking) {
    this._targetTracking.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingInput() {
    return this._targetTracking.internalValue;
  }
}
export interface YdbDatabaseDedicatedScalePolicyFixedScale {
  /**
  * Number of instances for the Yandex Database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#size YdbDatabaseDedicated#size}
  */
  readonly size: number;
}

export function ydbDatabaseDedicatedScalePolicyFixedScaleToTerraform(struct?: YdbDatabaseDedicatedScalePolicyFixedScaleOutputReference | YdbDatabaseDedicatedScalePolicyFixedScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function ydbDatabaseDedicatedScalePolicyFixedScaleToHclTerraform(struct?: YdbDatabaseDedicatedScalePolicyFixedScaleOutputReference | YdbDatabaseDedicatedScalePolicyFixedScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class YdbDatabaseDedicatedScalePolicyFixedScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedScalePolicyFixedScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedScalePolicyFixedScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
    }
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface YdbDatabaseDedicatedScalePolicy {
  /**
  * auto_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#auto_scale YdbDatabaseDedicated#auto_scale}
  */
  readonly autoScale?: YdbDatabaseDedicatedScalePolicyAutoScale;
  /**
  * fixed_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#fixed_scale YdbDatabaseDedicated#fixed_scale}
  */
  readonly fixedScale?: YdbDatabaseDedicatedScalePolicyFixedScale;
}

export function ydbDatabaseDedicatedScalePolicyToTerraform(struct?: YdbDatabaseDedicatedScalePolicyOutputReference | YdbDatabaseDedicatedScalePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scale: ydbDatabaseDedicatedScalePolicyAutoScaleToTerraform(struct!.autoScale),
    fixed_scale: ydbDatabaseDedicatedScalePolicyFixedScaleToTerraform(struct!.fixedScale),
  }
}


export function ydbDatabaseDedicatedScalePolicyToHclTerraform(struct?: YdbDatabaseDedicatedScalePolicyOutputReference | YdbDatabaseDedicatedScalePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scale: {
      value: ydbDatabaseDedicatedScalePolicyAutoScaleToHclTerraform(struct!.autoScale),
      isBlock: true,
      type: "list",
      storageClassType: "YdbDatabaseDedicatedScalePolicyAutoScaleList",
    },
    fixed_scale: {
      value: ydbDatabaseDedicatedScalePolicyFixedScaleToHclTerraform(struct!.fixedScale),
      isBlock: true,
      type: "list",
      storageClassType: "YdbDatabaseDedicatedScalePolicyFixedScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbDatabaseDedicatedScalePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedScalePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScale = this._autoScale?.internalValue;
    }
    if (this._fixedScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedScale = this._fixedScale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedScalePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScale.internalValue = undefined;
      this._fixedScale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScale.internalValue = value.autoScale;
      this._fixedScale.internalValue = value.fixedScale;
    }
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale = new YdbDatabaseDedicatedScalePolicyAutoScaleOutputReference(this, "auto_scale");
  public get autoScale() {
    return this._autoScale;
  }
  public putAutoScale(value: YdbDatabaseDedicatedScalePolicyAutoScale) {
    this._autoScale.internalValue = value;
  }
  public resetAutoScale() {
    this._autoScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale.internalValue;
  }

  // fixed_scale - computed: false, optional: true, required: false
  private _fixedScale = new YdbDatabaseDedicatedScalePolicyFixedScaleOutputReference(this, "fixed_scale");
  public get fixedScale() {
    return this._fixedScale;
  }
  public putFixedScale(value: YdbDatabaseDedicatedScalePolicyFixedScale) {
    this._fixedScale.internalValue = value;
  }
  public resetFixedScale() {
    this._fixedScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedScaleInput() {
    return this._fixedScale.internalValue;
  }
}
export interface YdbDatabaseDedicatedStorageConfig {
  /**
  * Amount of storage groups of selected type for the Yandex Database cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#group_count YdbDatabaseDedicated#group_count}
  */
  readonly groupCount: number;
  /**
  * Storage type ID for the Yandex Database cluster. Available presets can be obtained via `yc ydb storage-type list` command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#storage_type_id YdbDatabaseDedicated#storage_type_id}
  */
  readonly storageTypeId: string;
}

export function ydbDatabaseDedicatedStorageConfigToTerraform(struct?: YdbDatabaseDedicatedStorageConfigOutputReference | YdbDatabaseDedicatedStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_count: cdktf.numberToTerraform(struct!.groupCount),
    storage_type_id: cdktf.stringToTerraform(struct!.storageTypeId),
  }
}


export function ydbDatabaseDedicatedStorageConfigToHclTerraform(struct?: YdbDatabaseDedicatedStorageConfigOutputReference | YdbDatabaseDedicatedStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_count: {
      value: cdktf.numberToHclTerraform(struct!.groupCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_type_id: {
      value: cdktf.stringToHclTerraform(struct!.storageTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbDatabaseDedicatedStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbDatabaseDedicatedStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupCount = this._groupCount;
    }
    if (this._storageTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageTypeId = this._storageTypeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupCount = undefined;
      this._storageTypeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupCount = value.groupCount;
      this._storageTypeId = value.storageTypeId;
    }
  }

  // group_count - computed: false, optional: false, required: true
  private _groupCount?: number; 
  public get groupCount() {
    return this.getNumberAttribute('group_count');
  }
  public set groupCount(value: number) {
    this._groupCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupCountInput() {
    return this._groupCount;
  }

  // storage_type_id - computed: false, optional: false, required: true
  private _storageTypeId?: string; 
  public get storageTypeId() {
    return this.getStringAttribute('storage_type_id');
  }
  public set storageTypeId(value: string) {
    this._storageTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeIdInput() {
    return this._storageTypeId;
  }
}
export interface YdbDatabaseDedicatedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#default YdbDatabaseDedicated#default}
  */
  readonly default?: string;
}

export function ydbDatabaseDedicatedTimeoutsToTerraform(struct?: YdbDatabaseDedicatedTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function ydbDatabaseDedicatedTimeoutsToHclTerraform(struct?: YdbDatabaseDedicatedTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbDatabaseDedicatedTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YdbDatabaseDedicatedTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseDedicatedTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated yandex_ydb_database_dedicated}
*/
export class YdbDatabaseDedicated extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_ydb_database_dedicated";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a YdbDatabaseDedicated resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the YdbDatabaseDedicated to import
  * @param importFromId The id of the existing YdbDatabaseDedicated that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the YdbDatabaseDedicated to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_ydb_database_dedicated", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ydb_database_dedicated yandex_ydb_database_dedicated} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options YdbDatabaseDedicatedConfig
  */
  public constructor(scope: Construct, id: string, config: YdbDatabaseDedicatedConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_ydb_database_dedicated',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.170.0',
        providerVersionConstraint: '0.170.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignPublicIps = config.assignPublicIps;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._locationId = config.locationId;
    this._name = config.name;
    this._networkId = config.networkId;
    this._resourcePresetId = config.resourcePresetId;
    this._securityGroupIds = config.securityGroupIds;
    this._sleepAfter = config.sleepAfter;
    this._subnetIds = config.subnetIds;
    this._location.internalValue = config.location;
    this._scalePolicy.internalValue = config.scalePolicy;
    this._storageConfig.internalValue = config.storageConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assign_public_ips - computed: false, optional: true, required: false
  private _assignPublicIps?: boolean | cdktf.IResolvable; 
  public get assignPublicIps() {
    return this.getBooleanAttribute('assign_public_ips');
  }
  public set assignPublicIps(value: boolean | cdktf.IResolvable) {
    this._assignPublicIps = value;
  }
  public resetAssignPublicIps() {
    this._assignPublicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpsInput() {
    return this._assignPublicIps;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // database_path - computed: true, optional: false, required: false
  public get databasePath() {
    return this.getStringAttribute('database_path');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
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

  // sleep_after - computed: false, optional: true, required: false
  private _sleepAfter?: number; 
  public get sleepAfter() {
    return this.getNumberAttribute('sleep_after');
  }
  public set sleepAfter(value: number) {
    this._sleepAfter = value;
  }
  public resetSleepAfter() {
    this._sleepAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepAfterInput() {
    return this._sleepAfter;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tls_enabled - computed: true, optional: false, required: false
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }

  // ydb_api_endpoint - computed: true, optional: false, required: false
  public get ydbApiEndpoint() {
    return this.getStringAttribute('ydb_api_endpoint');
  }

  // ydb_full_endpoint - computed: true, optional: false, required: false
  public get ydbFullEndpoint() {
    return this.getStringAttribute('ydb_full_endpoint');
  }

  // location - computed: false, optional: true, required: false
  private _location = new YdbDatabaseDedicatedLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: YdbDatabaseDedicatedLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // scale_policy - computed: false, optional: false, required: true
  private _scalePolicy = new YdbDatabaseDedicatedScalePolicyOutputReference(this, "scale_policy");
  public get scalePolicy() {
    return this._scalePolicy;
  }
  public putScalePolicy(value: YdbDatabaseDedicatedScalePolicy) {
    this._scalePolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalePolicyInput() {
    return this._scalePolicy.internalValue;
  }

  // storage_config - computed: false, optional: false, required: true
  private _storageConfig = new YdbDatabaseDedicatedStorageConfigOutputReference(this, "storage_config");
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: YdbDatabaseDedicatedStorageConfig) {
    this._storageConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new YdbDatabaseDedicatedTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: YdbDatabaseDedicatedTimeouts) {
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
      assign_public_ips: cdktf.booleanToTerraform(this._assignPublicIps),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location_id: cdktf.stringToTerraform(this._locationId),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      resource_preset_id: cdktf.stringToTerraform(this._resourcePresetId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      sleep_after: cdktf.numberToTerraform(this._sleepAfter),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      location: ydbDatabaseDedicatedLocationToTerraform(this._location.internalValue),
      scale_policy: ydbDatabaseDedicatedScalePolicyToTerraform(this._scalePolicy.internalValue),
      storage_config: ydbDatabaseDedicatedStorageConfigToTerraform(this._storageConfig.internalValue),
      timeouts: ydbDatabaseDedicatedTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assign_public_ips: {
        value: cdktf.booleanToHclTerraform(this._assignPublicIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location_id: {
        value: cdktf.stringToHclTerraform(this._locationId),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_preset_id: {
        value: cdktf.stringToHclTerraform(this._resourcePresetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sleep_after: {
        value: cdktf.numberToHclTerraform(this._sleepAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      location: {
        value: ydbDatabaseDedicatedLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "YdbDatabaseDedicatedLocationList",
      },
      scale_policy: {
        value: ydbDatabaseDedicatedScalePolicyToHclTerraform(this._scalePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "YdbDatabaseDedicatedScalePolicyList",
      },
      storage_config: {
        value: ydbDatabaseDedicatedStorageConfigToHclTerraform(this._storageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "YdbDatabaseDedicatedStorageConfigList",
      },
      timeouts: {
        value: ydbDatabaseDedicatedTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "YdbDatabaseDedicatedTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
