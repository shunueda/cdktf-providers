// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdwpgInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * cluster password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#admin_password CdwpgInstance#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#id CdwpgInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#instance_name CdwpgInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#product_version CdwpgInstance#product_version}
  */
  readonly productVersion?: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#tags CdwpgInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#user_subnet_id CdwpgInstance#user_subnet_id}
  */
  readonly userSubnetId: string;
  /**
  * private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#user_vpc_id CdwpgInstance#user_vpc_id}
  */
  readonly userVpcId: string;
  /**
  * Availability Zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#zone CdwpgInstance#zone}
  */
  readonly zone: string;
  /**
  * charge_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#charge_properties CdwpgInstance#charge_properties}
  */
  readonly chargeProperties: CdwpgInstanceChargeProperties;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#resources CdwpgInstance#resources}
  */
  readonly resources: CdwpgInstanceResources[] | cdktf.IResolvable;
}
export interface CdwpgInstanceChargeProperties {
  /**
  * Charge type, vaild values: PREPAID, POSTPAID_BY_HOUR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#charge_type CdwpgInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * 0-no automatic renewal,1-automatic renewalNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#renew_flag CdwpgInstance#renew_flag}
  */
  readonly renewFlag: number;
  /**
  * Time RangeNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#time_span CdwpgInstance#time_span}
  */
  readonly timeSpan: number;
  /**
  * Time Unit,Generally h and mNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#time_unit CdwpgInstance#time_unit}
  */
  readonly timeUnit: string;
}

export function cdwpgInstanceChargePropertiesToTerraform(struct?: CdwpgInstanceChargePropertiesOutputReference | CdwpgInstanceChargeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    charge_type: cdktf.stringToTerraform(struct!.chargeType),
    renew_flag: cdktf.numberToTerraform(struct!.renewFlag),
    time_span: cdktf.numberToTerraform(struct!.timeSpan),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function cdwpgInstanceChargePropertiesToHclTerraform(struct?: CdwpgInstanceChargePropertiesOutputReference | CdwpgInstanceChargeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    charge_type: {
      value: cdktf.stringToHclTerraform(struct!.chargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renew_flag: {
      value: cdktf.numberToHclTerraform(struct!.renewFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_span: {
      value: cdktf.numberToHclTerraform(struct!.timeSpan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdwpgInstanceChargePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdwpgInstanceChargeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.chargeType = this._chargeType;
    }
    if (this._renewFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewFlag = this._renewFlag;
    }
    if (this._timeSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSpan = this._timeSpan;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdwpgInstanceChargeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chargeType = undefined;
      this._renewFlag = undefined;
      this._timeSpan = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chargeType = value.chargeType;
      this._renewFlag = value.renewFlag;
      this._timeSpan = value.timeSpan;
      this._timeUnit = value.timeUnit;
    }
  }

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // renew_flag - computed: false, optional: false, required: true
  private _renewFlag?: number; 
  public get renewFlag() {
    return this.getNumberAttribute('renew_flag');
  }
  public set renewFlag(value: number) {
    this._renewFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renewFlagInput() {
    return this._renewFlag;
  }

  // time_span - computed: false, optional: false, required: true
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface CdwpgInstanceResourcesDiskSpec {
  /**
  * disk count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#disk_count CdwpgInstance#disk_count}
  */
  readonly diskCount: number;
  /**
  * disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#disk_size CdwpgInstance#disk_size}
  */
  readonly diskSize: number;
  /**
  * disk type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#disk_type CdwpgInstance#disk_type}
  */
  readonly diskType: string;
}

export function cdwpgInstanceResourcesDiskSpecToTerraform(struct?: CdwpgInstanceResourcesDiskSpecOutputReference | CdwpgInstanceResourcesDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_count: cdktf.numberToTerraform(struct!.diskCount),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
  }
}


export function cdwpgInstanceResourcesDiskSpecToHclTerraform(struct?: CdwpgInstanceResourcesDiskSpecOutputReference | CdwpgInstanceResourcesDiskSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_count: {
      value: cdktf.numberToHclTerraform(struct!.diskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdwpgInstanceResourcesDiskSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdwpgInstanceResourcesDiskSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskCount = this._diskCount;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdwpgInstanceResourcesDiskSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskCount = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskCount = value.diskCount;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
    }
  }

  // disk_count - computed: false, optional: false, required: true
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: false, required: true
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }
}
export interface CdwpgInstanceResources {
  /**
  * resource count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#count CdwpgInstance#count}
  */
  readonly count: number;
  /**
  * resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#spec_name CdwpgInstance#spec_name}
  */
  readonly specName: string;
  /**
  * resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#type CdwpgInstance#type}
  */
  readonly type: string;
  /**
  * disk_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#disk_spec CdwpgInstance#disk_spec}
  */
  readonly diskSpec: CdwpgInstanceResourcesDiskSpec;
}

export function cdwpgInstanceResourcesToTerraform(struct?: CdwpgInstanceResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    spec_name: cdktf.stringToTerraform(struct!.specName),
    type: cdktf.stringToTerraform(struct!.type),
    disk_spec: cdwpgInstanceResourcesDiskSpecToTerraform(struct!.diskSpec),
  }
}


export function cdwpgInstanceResourcesToHclTerraform(struct?: CdwpgInstanceResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_spec: {
      value: cdwpgInstanceResourcesDiskSpecToHclTerraform(struct!.diskSpec),
      isBlock: true,
      type: "list",
      storageClassType: "CdwpgInstanceResourcesDiskSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdwpgInstanceResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdwpgInstanceResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._diskSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSpec = this._diskSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdwpgInstanceResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._specName = undefined;
      this._type = undefined;
      this._diskSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._specName = value.specName;
      this._type = value.type;
      this._diskSpec.internalValue = value.diskSpec;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // spec_name - computed: false, optional: false, required: true
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
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

  // disk_spec - computed: false, optional: false, required: true
  private _diskSpec = new CdwpgInstanceResourcesDiskSpecOutputReference(this, "disk_spec");
  public get diskSpec() {
    return this._diskSpec;
  }
  public putDiskSpec(value: CdwpgInstanceResourcesDiskSpec) {
    this._diskSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSpecInput() {
    return this._diskSpec.internalValue;
  }
}

export class CdwpgInstanceResourcesList extends cdktf.ComplexList {
  public internalValue? : CdwpgInstanceResources[] | cdktf.IResolvable

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
  public get(index: number): CdwpgInstanceResourcesOutputReference {
    return new CdwpgInstanceResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance tencentcloud_cdwpg_instance}
*/
export class CdwpgInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdwpg_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdwpgInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdwpgInstance to import
  * @param importFromId The id of the existing CdwpgInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdwpgInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdwpg_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cdwpg_instance tencentcloud_cdwpg_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdwpgInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CdwpgInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdwpg_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPassword = config.adminPassword;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._productVersion = config.productVersion;
    this._tags = config.tags;
    this._userSubnetId = config.userSubnetId;
    this._userVpcId = config.userVpcId;
    this._zone = config.zone;
    this._chargeProperties.internalValue = config.chargeProperties;
    this._resources.internalValue = config.resources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // product_version - computed: true, optional: true, required: false
  private _productVersion?: string; 
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
  public set productVersion(value: string) {
    this._productVersion = value;
  }
  public resetProductVersion() {
    this._productVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
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

  // user_subnet_id - computed: false, optional: false, required: true
  private _userSubnetId?: string; 
  public get userSubnetId() {
    return this.getStringAttribute('user_subnet_id');
  }
  public set userSubnetId(value: string) {
    this._userSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userSubnetIdInput() {
    return this._userSubnetId;
  }

  // user_vpc_id - computed: false, optional: false, required: true
  private _userVpcId?: string; 
  public get userVpcId() {
    return this.getStringAttribute('user_vpc_id');
  }
  public set userVpcId(value: string) {
    this._userVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userVpcIdInput() {
    return this._userVpcId;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // charge_properties - computed: false, optional: false, required: true
  private _chargeProperties = new CdwpgInstanceChargePropertiesOutputReference(this, "charge_properties");
  public get chargeProperties() {
    return this._chargeProperties;
  }
  public putChargeProperties(value: CdwpgInstanceChargeProperties) {
    this._chargeProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chargePropertiesInput() {
    return this._chargeProperties.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new CdwpgInstanceResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: CdwpgInstanceResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      product_version: cdktf.stringToTerraform(this._productVersion),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_subnet_id: cdktf.stringToTerraform(this._userSubnetId),
      user_vpc_id: cdktf.stringToTerraform(this._userVpcId),
      zone: cdktf.stringToTerraform(this._zone),
      charge_properties: cdwpgInstanceChargePropertiesToTerraform(this._chargeProperties.internalValue),
      resources: cdktf.listMapper(cdwpgInstanceResourcesToTerraform, true)(this._resources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_version: {
        value: cdktf.stringToHclTerraform(this._productVersion),
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
      user_subnet_id: {
        value: cdktf.stringToHclTerraform(this._userSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_vpc_id: {
        value: cdktf.stringToHclTerraform(this._userVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_properties: {
        value: cdwpgInstanceChargePropertiesToHclTerraform(this._chargeProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdwpgInstanceChargePropertiesList",
      },
      resources: {
        value: cdktf.listMapperHcl(cdwpgInstanceResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdwpgInstanceResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
