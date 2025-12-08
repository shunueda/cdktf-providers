// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionAttackPathSensitiveAssetConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config#id ThreatDetectionAttackPathSensitiveAssetConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * attack_path_asset_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config#attack_path_asset_list ThreatDetectionAttackPathSensitiveAssetConfig#attack_path_asset_list}
  */
  readonly attackPathAssetList: ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config#timeouts ThreatDetectionAttackPathSensitiveAssetConfig#timeouts}
  */
  readonly timeouts?: ThreatDetectionAttackPathSensitiveAssetConfigTimeouts;
}
export interface ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config#asset_sub_type ThreatDetectionAttackPathSensitiveAssetConfig#asset_sub_type}
  */
  readonly assetSubType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config#asset_type ThreatDetectionAttackPathSensitiveAssetConfig#asset_type}
  */
  readonly assetType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config#instance_id ThreatDetectionAttackPathSensitiveAssetConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config#region_id ThreatDetectionAttackPathSensitiveAssetConfig#region_id}
  */
  readonly regionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config#vendor ThreatDetectionAttackPathSensitiveAssetConfig#vendor}
  */
  readonly vendor: number;
}

export function threatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStructToTerraform(struct?: ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_sub_type: cdktf.numberToTerraform(struct!.assetSubType),
    asset_type: cdktf.numberToTerraform(struct!.assetType),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    region_id: cdktf.stringToTerraform(struct!.regionId),
    vendor: cdktf.numberToTerraform(struct!.vendor),
  }
}


export function threatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStructToHclTerraform(struct?: ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_sub_type: {
      value: cdktf.numberToHclTerraform(struct!.assetSubType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asset_type: {
      value: cdktf.numberToHclTerraform(struct!.assetType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.numberToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetSubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetSubType = this._assetSubType;
    }
    if (this._assetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetType = this._assetType;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetSubType = undefined;
      this._assetType = undefined;
      this._instanceId = undefined;
      this._regionId = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetSubType = value.assetSubType;
      this._assetType = value.assetType;
      this._instanceId = value.instanceId;
      this._regionId = value.regionId;
      this._vendor = value.vendor;
    }
  }

  // asset_sub_type - computed: false, optional: false, required: true
  private _assetSubType?: number; 
  public get assetSubType() {
    return this.getNumberAttribute('asset_sub_type');
  }
  public set assetSubType(value: number) {
    this._assetSubType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetSubTypeInput() {
    return this._assetSubType;
  }

  // asset_type - computed: false, optional: false, required: true
  private _assetType?: number; 
  public get assetType() {
    return this.getNumberAttribute('asset_type');
  }
  public set assetType(value: number) {
    this._assetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypeInput() {
    return this._assetType;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // vendor - computed: false, optional: false, required: true
  private _vendor?: number; 
  public get vendor() {
    return this.getNumberAttribute('vendor');
  }
  public set vendor(value: number) {
    this._vendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}

export class ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStructList extends cdktf.ComplexList {
  public internalValue? : ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStruct[] | cdktf.IResolvable

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
  public get(index: number): ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStructOutputReference {
    return new ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThreatDetectionAttackPathSensitiveAssetConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config#create ThreatDetectionAttackPathSensitiveAssetConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config#delete ThreatDetectionAttackPathSensitiveAssetConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config#update ThreatDetectionAttackPathSensitiveAssetConfig#update}
  */
  readonly update?: string;
}

export function threatDetectionAttackPathSensitiveAssetConfigTimeoutsToTerraform(struct?: ThreatDetectionAttackPathSensitiveAssetConfigTimeouts | cdktf.IResolvable): any {
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


export function threatDetectionAttackPathSensitiveAssetConfigTimeoutsToHclTerraform(struct?: ThreatDetectionAttackPathSensitiveAssetConfigTimeouts | cdktf.IResolvable): any {
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

export class ThreatDetectionAttackPathSensitiveAssetConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionAttackPathSensitiveAssetConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThreatDetectionAttackPathSensitiveAssetConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config alicloud_threat_detection_attack_path_sensitive_asset_config}
*/
export class ThreatDetectionAttackPathSensitiveAssetConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_attack_path_sensitive_asset_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionAttackPathSensitiveAssetConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionAttackPathSensitiveAssetConfig to import
  * @param importFromId The id of the existing ThreatDetectionAttackPathSensitiveAssetConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionAttackPathSensitiveAssetConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_attack_path_sensitive_asset_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/threat_detection_attack_path_sensitive_asset_config alicloud_threat_detection_attack_path_sensitive_asset_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionAttackPathSensitiveAssetConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionAttackPathSensitiveAssetConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_attack_path_sensitive_asset_config',
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
    this._id = config.id;
    this._attackPathAssetList.internalValue = config.attackPathAssetList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // attack_path_asset_list - computed: false, optional: false, required: true
  private _attackPathAssetList = new ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStructList(this, "attack_path_asset_list", true);
  public get attackPathAssetList() {
    return this._attackPathAssetList;
  }
  public putAttackPathAssetList(value: ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStruct[] | cdktf.IResolvable) {
    this._attackPathAssetList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackPathAssetListInput() {
    return this._attackPathAssetList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionAttackPathSensitiveAssetConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionAttackPathSensitiveAssetConfigTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      attack_path_asset_list: cdktf.listMapper(threatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStructToTerraform, true)(this._attackPathAssetList.internalValue),
      timeouts: threatDetectionAttackPathSensitiveAssetConfigTimeoutsToTerraform(this._timeouts.internalValue),
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
      attack_path_asset_list: {
        value: cdktf.listMapperHcl(threatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStructToHclTerraform, true)(this._attackPathAssetList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ThreatDetectionAttackPathSensitiveAssetConfigAttackPathAssetListStructList",
      },
      timeouts: {
        value: threatDetectionAttackPathSensitiveAssetConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionAttackPathSensitiveAssetConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
