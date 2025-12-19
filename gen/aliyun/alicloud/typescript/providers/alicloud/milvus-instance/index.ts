// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MilvusInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#auto_backup MilvusInstance#auto_backup}
  */
  readonly autoBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#configuration MilvusInstance#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#db_admin_password MilvusInstance#db_admin_password}
  */
  readonly dbAdminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#db_version MilvusInstance#db_version}
  */
  readonly dbVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#encrypted MilvusInstance#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#ha MilvusInstance#ha}
  */
  readonly ha?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#id MilvusInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#instance_name MilvusInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#kms_key_id MilvusInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#multi_zone_mode MilvusInstance#multi_zone_mode}
  */
  readonly multiZoneMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#payment_duration MilvusInstance#payment_duration}
  */
  readonly paymentDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#payment_duration_unit MilvusInstance#payment_duration_unit}
  */
  readonly paymentDurationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#payment_type MilvusInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#resource_group_id MilvusInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#tags MilvusInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#vpc_id MilvusInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#zone_id MilvusInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * components block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#components MilvusInstance#components}
  */
  readonly components?: MilvusInstanceComponents[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#timeouts MilvusInstance#timeouts}
  */
  readonly timeouts?: MilvusInstanceTimeouts;
  /**
  * vswitch_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#vswitch_ids MilvusInstance#vswitch_ids}
  */
  readonly vswitchIds?: MilvusInstanceVswitchIds[] | cdktf.IResolvable;
}
export interface MilvusInstanceComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#cu_num MilvusInstance#cu_num}
  */
  readonly cuNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#cu_type MilvusInstance#cu_type}
  */
  readonly cuType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#disk_size_type MilvusInstance#disk_size_type}
  */
  readonly diskSizeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#replica MilvusInstance#replica}
  */
  readonly replica: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#type MilvusInstance#type}
  */
  readonly type: string;
}

export function milvusInstanceComponentsToTerraform(struct?: MilvusInstanceComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cu_num: cdktf.numberToTerraform(struct!.cuNum),
    cu_type: cdktf.stringToTerraform(struct!.cuType),
    disk_size_type: cdktf.stringToTerraform(struct!.diskSizeType),
    replica: cdktf.numberToTerraform(struct!.replica),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function milvusInstanceComponentsToHclTerraform(struct?: MilvusInstanceComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cu_num: {
      value: cdktf.numberToHclTerraform(struct!.cuNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cu_type: {
      value: cdktf.stringToHclTerraform(struct!.cuType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_type: {
      value: cdktf.stringToHclTerraform(struct!.diskSizeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica: {
      value: cdktf.numberToHclTerraform(struct!.replica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MilvusInstanceComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MilvusInstanceComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cuNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.cuNum = this._cuNum;
    }
    if (this._cuType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cuType = this._cuType;
    }
    if (this._diskSizeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeType = this._diskSizeType;
    }
    if (this._replica !== undefined) {
      hasAnyValues = true;
      internalValueResult.replica = this._replica;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MilvusInstanceComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cuNum = undefined;
      this._cuType = undefined;
      this._diskSizeType = undefined;
      this._replica = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cuNum = value.cuNum;
      this._cuType = value.cuType;
      this._diskSizeType = value.diskSizeType;
      this._replica = value.replica;
      this._type = value.type;
    }
  }

  // cu_num - computed: false, optional: false, required: true
  private _cuNum?: number; 
  public get cuNum() {
    return this.getNumberAttribute('cu_num');
  }
  public set cuNum(value: number) {
    this._cuNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cuNumInput() {
    return this._cuNum;
  }

  // cu_type - computed: true, optional: true, required: false
  private _cuType?: string; 
  public get cuType() {
    return this.getStringAttribute('cu_type');
  }
  public set cuType(value: string) {
    this._cuType = value;
  }
  public resetCuType() {
    this._cuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cuTypeInput() {
    return this._cuType;
  }

  // disk_size_type - computed: true, optional: true, required: false
  private _diskSizeType?: string; 
  public get diskSizeType() {
    return this.getStringAttribute('disk_size_type');
  }
  public set diskSizeType(value: string) {
    this._diskSizeType = value;
  }
  public resetDiskSizeType() {
    this._diskSizeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeTypeInput() {
    return this._diskSizeType;
  }

  // replica - computed: false, optional: false, required: true
  private _replica?: number; 
  public get replica() {
    return this.getNumberAttribute('replica');
  }
  public set replica(value: number) {
    this._replica = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaInput() {
    return this._replica;
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
}

export class MilvusInstanceComponentsList extends cdktf.ComplexList {
  public internalValue? : MilvusInstanceComponents[] | cdktf.IResolvable

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
  public get(index: number): MilvusInstanceComponentsOutputReference {
    return new MilvusInstanceComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MilvusInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#create MilvusInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#delete MilvusInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#update MilvusInstance#update}
  */
  readonly update?: string;
}

export function milvusInstanceTimeoutsToTerraform(struct?: MilvusInstanceTimeouts | cdktf.IResolvable): any {
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


export function milvusInstanceTimeoutsToHclTerraform(struct?: MilvusInstanceTimeouts | cdktf.IResolvable): any {
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

export class MilvusInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MilvusInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MilvusInstanceTimeouts | cdktf.IResolvable | undefined) {
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
export interface MilvusInstanceVswitchIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#vsw_id MilvusInstance#vsw_id}
  */
  readonly vswId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#zone_id MilvusInstance#zone_id}
  */
  readonly zoneId?: string;
}

export function milvusInstanceVswitchIdsToTerraform(struct?: MilvusInstanceVswitchIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vsw_id: cdktf.stringToTerraform(struct!.vswId),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function milvusInstanceVswitchIdsToHclTerraform(struct?: MilvusInstanceVswitchIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vsw_id: {
      value: cdktf.stringToHclTerraform(struct!.vswId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MilvusInstanceVswitchIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MilvusInstanceVswitchIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vswId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswId = this._vswId;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MilvusInstanceVswitchIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vswId = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vswId = value.vswId;
      this._zoneId = value.zoneId;
    }
  }

  // vsw_id - computed: false, optional: true, required: false
  private _vswId?: string; 
  public get vswId() {
    return this.getStringAttribute('vsw_id');
  }
  public set vswId(value: string) {
    this._vswId = value;
  }
  public resetVswId() {
    this._vswId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswIdInput() {
    return this._vswId;
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
}

export class MilvusInstanceVswitchIdsList extends cdktf.ComplexList {
  public internalValue? : MilvusInstanceVswitchIds[] | cdktf.IResolvable

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
  public get(index: number): MilvusInstanceVswitchIdsOutputReference {
    return new MilvusInstanceVswitchIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance alicloud_milvus_instance}
*/
export class MilvusInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_milvus_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MilvusInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MilvusInstance to import
  * @param importFromId The id of the existing MilvusInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MilvusInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_milvus_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/milvus_instance alicloud_milvus_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MilvusInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MilvusInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_milvus_instance',
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
    this._autoBackup = config.autoBackup;
    this._configuration = config.configuration;
    this._dbAdminPassword = config.dbAdminPassword;
    this._dbVersion = config.dbVersion;
    this._encrypted = config.encrypted;
    this._ha = config.ha;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._kmsKeyId = config.kmsKeyId;
    this._multiZoneMode = config.multiZoneMode;
    this._paymentDuration = config.paymentDuration;
    this._paymentDurationUnit = config.paymentDurationUnit;
    this._paymentType = config.paymentType;
    this._resourceGroupId = config.resourceGroupId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._zoneId = config.zoneId;
    this._components.internalValue = config.components;
    this._timeouts.internalValue = config.timeouts;
    this._vswitchIds.internalValue = config.vswitchIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_backup - computed: true, optional: true, required: false
  private _autoBackup?: boolean | cdktf.IResolvable; 
  public get autoBackup() {
    return this.getBooleanAttribute('auto_backup');
  }
  public set autoBackup(value: boolean | cdktf.IResolvable) {
    this._autoBackup = value;
  }
  public resetAutoBackup() {
    this._autoBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupInput() {
    return this._autoBackup;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_admin_password - computed: false, optional: true, required: false
  private _dbAdminPassword?: string; 
  public get dbAdminPassword() {
    return this.getStringAttribute('db_admin_password');
  }
  public set dbAdminPassword(value: string) {
    this._dbAdminPassword = value;
  }
  public resetDbAdminPassword() {
    this._dbAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbAdminPasswordInput() {
    return this._dbAdminPassword;
  }

  // db_version - computed: false, optional: false, required: true
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // ha - computed: false, optional: true, required: false
  private _ha?: boolean | cdktf.IResolvable; 
  public get ha() {
    return this.getBooleanAttribute('ha');
  }
  public set ha(value: boolean | cdktf.IResolvable) {
    this._ha = value;
  }
  public resetHa() {
    this._ha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInput() {
    return this._ha;
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // multi_zone_mode - computed: false, optional: true, required: false
  private _multiZoneMode?: string; 
  public get multiZoneMode() {
    return this.getStringAttribute('multi_zone_mode');
  }
  public set multiZoneMode(value: string) {
    this._multiZoneMode = value;
  }
  public resetMultiZoneMode() {
    this._multiZoneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneModeInput() {
    return this._multiZoneMode;
  }

  // payment_duration - computed: false, optional: true, required: false
  private _paymentDuration?: number; 
  public get paymentDuration() {
    return this.getNumberAttribute('payment_duration');
  }
  public set paymentDuration(value: number) {
    this._paymentDuration = value;
  }
  public resetPaymentDuration() {
    this._paymentDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentDurationInput() {
    return this._paymentDuration;
  }

  // payment_duration_unit - computed: false, optional: true, required: false
  private _paymentDurationUnit?: string; 
  public get paymentDurationUnit() {
    return this.getStringAttribute('payment_duration_unit');
  }
  public set paymentDurationUnit(value: string) {
    this._paymentDurationUnit = value;
  }
  public resetPaymentDurationUnit() {
    this._paymentDurationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentDurationUnitInput() {
    return this._paymentDurationUnit;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // components - computed: false, optional: true, required: false
  private _components = new MilvusInstanceComponentsList(this, "components", true);
  public get components() {
    return this._components;
  }
  public putComponents(value: MilvusInstanceComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MilvusInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MilvusInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vswitch_ids - computed: false, optional: true, required: false
  private _vswitchIds = new MilvusInstanceVswitchIdsList(this, "vswitch_ids", false);
  public get vswitchIds() {
    return this._vswitchIds;
  }
  public putVswitchIds(value: MilvusInstanceVswitchIds[] | cdktf.IResolvable) {
    this._vswitchIds.internalValue = value;
  }
  public resetVswitchIds() {
    this._vswitchIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_backup: cdktf.booleanToTerraform(this._autoBackup),
      configuration: cdktf.stringToTerraform(this._configuration),
      db_admin_password: cdktf.stringToTerraform(this._dbAdminPassword),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      ha: cdktf.booleanToTerraform(this._ha),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      multi_zone_mode: cdktf.stringToTerraform(this._multiZoneMode),
      payment_duration: cdktf.numberToTerraform(this._paymentDuration),
      payment_duration_unit: cdktf.stringToTerraform(this._paymentDurationUnit),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      components: cdktf.listMapper(milvusInstanceComponentsToTerraform, true)(this._components.internalValue),
      timeouts: milvusInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      vswitch_ids: cdktf.listMapper(milvusInstanceVswitchIdsToTerraform, true)(this._vswitchIds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_backup: {
        value: cdktf.booleanToHclTerraform(this._autoBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_admin_password: {
        value: cdktf.stringToHclTerraform(this._dbAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ha: {
        value: cdktf.booleanToHclTerraform(this._ha),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_zone_mode: {
        value: cdktf.stringToHclTerraform(this._multiZoneMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_duration: {
        value: cdktf.numberToHclTerraform(this._paymentDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      payment_duration_unit: {
        value: cdktf.stringToHclTerraform(this._paymentDurationUnit),
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
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
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
      components: {
        value: cdktf.listMapperHcl(milvusInstanceComponentsToHclTerraform, true)(this._components.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MilvusInstanceComponentsList",
      },
      timeouts: {
        value: milvusInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MilvusInstanceTimeouts",
      },
      vswitch_ids: {
        value: cdktf.listMapperHcl(milvusInstanceVswitchIdsToHclTerraform, true)(this._vswitchIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MilvusInstanceVswitchIdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
