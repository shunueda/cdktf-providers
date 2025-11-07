// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsipRiskCenterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#id CsipRiskCenter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 0- Full scan, 1- Specify asset scan, 2- Exclude asset scan, 3- Manually fill in the scan. If 1 and 2 are required while task_mode not 1, the Assets field is required. If 3 is required, SelfDefiningAssets is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#scan_asset_type CsipRiskCenter#scan_asset_type}
  */
  readonly scanAssetType: number;
  /**
  * Scan Project. Example: port/poc/weakpass/webcontent/configrisk/exposedserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#scan_item CsipRiskCenter#scan_item}
  */
  readonly scanItem: string[];
  /**
  * Scan plan details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#scan_plan_content CsipRiskCenter#scan_plan_content}
  */
  readonly scanPlanContent?: string;
  /**
  * 0- Periodic task, 1- immediate scan, 2- periodic scan, 3- Custom; 0, 2 and 3 are required for scan_plan_content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#scan_plan_type CsipRiskCenter#scan_plan_type}
  */
  readonly scanPlanType: number;
  /**
  * Ip/domain/url array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#self_defining_assets CsipRiskCenter#self_defining_assets}
  */
  readonly selfDefiningAssets?: string[];
  /**
  * Physical examination mode, 0-standard mode, 1-fast mode, 2-advanced mode, default standard mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#task_mode CsipRiskCenter#task_mode}
  */
  readonly taskMode?: number;
  /**
  * Task Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#task_name CsipRiskCenter#task_name}
  */
  readonly taskName: string;
  /**
  * assets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#assets CsipRiskCenter#assets}
  */
  readonly assets?: CsipRiskCenterAssets[] | cdktf.IResolvable;
  /**
  * task_advance_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#task_advance_cfg CsipRiskCenter#task_advance_cfg}
  */
  readonly taskAdvanceCfg?: CsipRiskCenterTaskAdvanceCfg;
}
export interface CsipRiskCenterAssets {
  /**
  * Multi-cloud asset unique idNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#arn CsipRiskCenter#arn}
  */
  readonly arn?: string;
  /**
  * Ip/ domain name/asset id, database id, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#asset CsipRiskCenter#asset}
  */
  readonly asset?: string;
  /**
  * Asset nameNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#asset_name CsipRiskCenter#asset_name}
  */
  readonly assetName?: string;
  /**
  * Asset classificationNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#asset_type CsipRiskCenter#asset_type}
  */
  readonly assetType?: string;
  /**
  * Asset typeNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#instance_type CsipRiskCenter#instance_type}
  */
  readonly instanceType?: string;
  /**
  * RegionNote: This field may return null, indicating that a valid value cannot be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#region CsipRiskCenter#region}
  */
  readonly region?: string;
}

export function csipRiskCenterAssetsToTerraform(struct?: CsipRiskCenterAssets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    asset: cdktf.stringToTerraform(struct!.asset),
    asset_name: cdktf.stringToTerraform(struct!.assetName),
    asset_type: cdktf.stringToTerraform(struct!.assetType),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function csipRiskCenterAssetsToHclTerraform(struct?: CsipRiskCenterAssets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asset: {
      value: cdktf.stringToHclTerraform(struct!.asset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asset_name: {
      value: cdktf.stringToHclTerraform(struct!.assetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asset_type: {
      value: cdktf.stringToHclTerraform(struct!.assetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsipRiskCenterAssetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsipRiskCenterAssets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._asset !== undefined) {
      hasAnyValues = true;
      internalValueResult.asset = this._asset;
    }
    if (this._assetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetName = this._assetName;
    }
    if (this._assetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetType = this._assetType;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsipRiskCenterAssets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._asset = undefined;
      this._assetName = undefined;
      this._assetType = undefined;
      this._instanceType = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._asset = value.asset;
      this._assetName = value.assetName;
      this._assetType = value.assetType;
      this._instanceType = value.instanceType;
      this._region = value.region;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // asset - computed: false, optional: true, required: false
  private _asset?: string; 
  public get asset() {
    return this.getStringAttribute('asset');
  }
  public set asset(value: string) {
    this._asset = value;
  }
  public resetAsset() {
    this._asset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetInput() {
    return this._asset;
  }

  // asset_name - computed: false, optional: true, required: false
  private _assetName?: string; 
  public get assetName() {
    return this.getStringAttribute('asset_name');
  }
  public set assetName(value: string) {
    this._assetName = value;
  }
  public resetAssetName() {
    this._assetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetNameInput() {
    return this._assetName;
  }

  // asset_type - computed: false, optional: true, required: false
  private _assetType?: string; 
  public get assetType() {
    return this.getStringAttribute('asset_type');
  }
  public set assetType(value: string) {
    this._assetType = value;
  }
  public resetAssetType() {
    this._assetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypeInput() {
    return this._assetType;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class CsipRiskCenterAssetsList extends cdktf.ComplexList {
  public internalValue? : CsipRiskCenterAssets[] | cdktf.IResolvable

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
  public get(index: number): CsipRiskCenterAssetsOutputReference {
    return new CsipRiskCenterAssetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsipRiskCenterTaskAdvanceCfgCfgRisk {
  /**
  * Whether to enable, 0- No, 1- Enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#enable CsipRiskCenter#enable}
  */
  readonly enable: number;
  /**
  * Detection item ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#item_id CsipRiskCenter#item_id}
  */
  readonly itemId: string;
  /**
  * Resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#resource_type CsipRiskCenter#resource_type}
  */
  readonly resourceType: string;
}

export function csipRiskCenterTaskAdvanceCfgCfgRiskToTerraform(struct?: CsipRiskCenterTaskAdvanceCfgCfgRisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    item_id: cdktf.stringToTerraform(struct!.itemId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function csipRiskCenterTaskAdvanceCfgCfgRiskToHclTerraform(struct?: CsipRiskCenterTaskAdvanceCfgCfgRisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    item_id: {
      value: cdktf.stringToHclTerraform(struct!.itemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsipRiskCenterTaskAdvanceCfgCfgRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsipRiskCenterTaskAdvanceCfgCfgRisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._itemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemId = this._itemId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsipRiskCenterTaskAdvanceCfgCfgRisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._itemId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._itemId = value.itemId;
      this._resourceType = value.resourceType;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // item_id - computed: false, optional: false, required: true
  private _itemId?: string; 
  public get itemId() {
    return this.getStringAttribute('item_id');
  }
  public set itemId(value: string) {
    this._itemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemIdInput() {
    return this._itemId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class CsipRiskCenterTaskAdvanceCfgCfgRiskList extends cdktf.ComplexList {
  public internalValue? : CsipRiskCenterTaskAdvanceCfgCfgRisk[] | cdktf.IResolvable

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
  public get(index: number): CsipRiskCenterTaskAdvanceCfgCfgRiskOutputReference {
    return new CsipRiskCenterTaskAdvanceCfgCfgRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsipRiskCenterTaskAdvanceCfgPortRisk {
  /**
  * Detection item type, 0-system defined, 1-user-defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#check_type CsipRiskCenter#check_type}
  */
  readonly checkType: number;
  /**
  * Description of detection items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#detail CsipRiskCenter#detail}
  */
  readonly detail: string;
  /**
  * Whether to enable, 0- No, 1- Enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#enable CsipRiskCenter#enable}
  */
  readonly enable: number;
  /**
  * Port collection, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#port_sets CsipRiskCenter#port_sets}
  */
  readonly portSets: string;
}

export function csipRiskCenterTaskAdvanceCfgPortRiskToTerraform(struct?: CsipRiskCenterTaskAdvanceCfgPortRisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_type: cdktf.numberToTerraform(struct!.checkType),
    detail: cdktf.stringToTerraform(struct!.detail),
    enable: cdktf.numberToTerraform(struct!.enable),
    port_sets: cdktf.stringToTerraform(struct!.portSets),
  }
}


export function csipRiskCenterTaskAdvanceCfgPortRiskToHclTerraform(struct?: CsipRiskCenterTaskAdvanceCfgPortRisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_type: {
      value: cdktf.numberToHclTerraform(struct!.checkType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detail: {
      value: cdktf.stringToHclTerraform(struct!.detail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_sets: {
      value: cdktf.stringToHclTerraform(struct!.portSets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsipRiskCenterTaskAdvanceCfgPortRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsipRiskCenterTaskAdvanceCfgPortRisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkType = this._checkType;
    }
    if (this._detail !== undefined) {
      hasAnyValues = true;
      internalValueResult.detail = this._detail;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._portSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSets = this._portSets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsipRiskCenterTaskAdvanceCfgPortRisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkType = undefined;
      this._detail = undefined;
      this._enable = undefined;
      this._portSets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkType = value.checkType;
      this._detail = value.detail;
      this._enable = value.enable;
      this._portSets = value.portSets;
    }
  }

  // check_type - computed: false, optional: false, required: true
  private _checkType?: number; 
  public get checkType() {
    return this.getNumberAttribute('check_type');
  }
  public set checkType(value: number) {
    this._checkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTypeInput() {
    return this._checkType;
  }

  // detail - computed: false, optional: false, required: true
  private _detail?: string; 
  public get detail() {
    return this.getStringAttribute('detail');
  }
  public set detail(value: string) {
    this._detail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // port_sets - computed: false, optional: false, required: true
  private _portSets?: string; 
  public get portSets() {
    return this.getStringAttribute('port_sets');
  }
  public set portSets(value: string) {
    this._portSets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portSetsInput() {
    return this._portSets;
  }
}

export class CsipRiskCenterTaskAdvanceCfgPortRiskList extends cdktf.ComplexList {
  public internalValue? : CsipRiskCenterTaskAdvanceCfgPortRisk[] | cdktf.IResolvable

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
  public get(index: number): CsipRiskCenterTaskAdvanceCfgPortRiskOutputReference {
    return new CsipRiskCenterTaskAdvanceCfgPortRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsipRiskCenterTaskAdvanceCfgVulRisk {
  /**
  * Whether to enable, 0- No, 1- Enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#enable CsipRiskCenter#enable}
  */
  readonly enable: number;
  /**
  * Risk ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#risk_id CsipRiskCenter#risk_id}
  */
  readonly riskId: string;
}

export function csipRiskCenterTaskAdvanceCfgVulRiskToTerraform(struct?: CsipRiskCenterTaskAdvanceCfgVulRisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    risk_id: cdktf.stringToTerraform(struct!.riskId),
  }
}


export function csipRiskCenterTaskAdvanceCfgVulRiskToHclTerraform(struct?: CsipRiskCenterTaskAdvanceCfgVulRisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    risk_id: {
      value: cdktf.stringToHclTerraform(struct!.riskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsipRiskCenterTaskAdvanceCfgVulRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsipRiskCenterTaskAdvanceCfgVulRisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._riskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.riskId = this._riskId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsipRiskCenterTaskAdvanceCfgVulRisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._riskId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._riskId = value.riskId;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // risk_id - computed: false, optional: false, required: true
  private _riskId?: string; 
  public get riskId() {
    return this.getStringAttribute('risk_id');
  }
  public set riskId(value: string) {
    this._riskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get riskIdInput() {
    return this._riskId;
  }
}

export class CsipRiskCenterTaskAdvanceCfgVulRiskList extends cdktf.ComplexList {
  public internalValue? : CsipRiskCenterTaskAdvanceCfgVulRisk[] | cdktf.IResolvable

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
  public get(index: number): CsipRiskCenterTaskAdvanceCfgVulRiskOutputReference {
    return new CsipRiskCenterTaskAdvanceCfgVulRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsipRiskCenterTaskAdvanceCfgWeakPwdRisk {
  /**
  * Detection item ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#check_item_id CsipRiskCenter#check_item_id}
  */
  readonly checkItemId: number;
  /**
  * Whether to enable, 0- No, 1- Enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#enable CsipRiskCenter#enable}
  */
  readonly enable: number;
}

export function csipRiskCenterTaskAdvanceCfgWeakPwdRiskToTerraform(struct?: CsipRiskCenterTaskAdvanceCfgWeakPwdRisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_item_id: cdktf.numberToTerraform(struct!.checkItemId),
    enable: cdktf.numberToTerraform(struct!.enable),
  }
}


export function csipRiskCenterTaskAdvanceCfgWeakPwdRiskToHclTerraform(struct?: CsipRiskCenterTaskAdvanceCfgWeakPwdRisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_item_id: {
      value: cdktf.numberToHclTerraform(struct!.checkItemId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsipRiskCenterTaskAdvanceCfgWeakPwdRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsipRiskCenterTaskAdvanceCfgWeakPwdRisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkItemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkItemId = this._checkItemId;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsipRiskCenterTaskAdvanceCfgWeakPwdRisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkItemId = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkItemId = value.checkItemId;
      this._enable = value.enable;
    }
  }

  // check_item_id - computed: false, optional: false, required: true
  private _checkItemId?: number; 
  public get checkItemId() {
    return this.getNumberAttribute('check_item_id');
  }
  public set checkItemId(value: number) {
    this._checkItemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkItemIdInput() {
    return this._checkItemId;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}

export class CsipRiskCenterTaskAdvanceCfgWeakPwdRiskList extends cdktf.ComplexList {
  public internalValue? : CsipRiskCenterTaskAdvanceCfgWeakPwdRisk[] | cdktf.IResolvable

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
  public get(index: number): CsipRiskCenterTaskAdvanceCfgWeakPwdRiskOutputReference {
    return new CsipRiskCenterTaskAdvanceCfgWeakPwdRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsipRiskCenterTaskAdvanceCfg {
  /**
  * cfg_risk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#cfg_risk CsipRiskCenter#cfg_risk}
  */
  readonly cfgRisk?: CsipRiskCenterTaskAdvanceCfgCfgRisk[] | cdktf.IResolvable;
  /**
  * port_risk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#port_risk CsipRiskCenter#port_risk}
  */
  readonly portRisk?: CsipRiskCenterTaskAdvanceCfgPortRisk[] | cdktf.IResolvable;
  /**
  * vul_risk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#vul_risk CsipRiskCenter#vul_risk}
  */
  readonly vulRisk?: CsipRiskCenterTaskAdvanceCfgVulRisk[] | cdktf.IResolvable;
  /**
  * weak_pwd_risk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#weak_pwd_risk CsipRiskCenter#weak_pwd_risk}
  */
  readonly weakPwdRisk?: CsipRiskCenterTaskAdvanceCfgWeakPwdRisk[] | cdktf.IResolvable;
}

export function csipRiskCenterTaskAdvanceCfgToTerraform(struct?: CsipRiskCenterTaskAdvanceCfgOutputReference | CsipRiskCenterTaskAdvanceCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cfg_risk: cdktf.listMapper(csipRiskCenterTaskAdvanceCfgCfgRiskToTerraform, true)(struct!.cfgRisk),
    port_risk: cdktf.listMapper(csipRiskCenterTaskAdvanceCfgPortRiskToTerraform, true)(struct!.portRisk),
    vul_risk: cdktf.listMapper(csipRiskCenterTaskAdvanceCfgVulRiskToTerraform, true)(struct!.vulRisk),
    weak_pwd_risk: cdktf.listMapper(csipRiskCenterTaskAdvanceCfgWeakPwdRiskToTerraform, true)(struct!.weakPwdRisk),
  }
}


export function csipRiskCenterTaskAdvanceCfgToHclTerraform(struct?: CsipRiskCenterTaskAdvanceCfgOutputReference | CsipRiskCenterTaskAdvanceCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cfg_risk: {
      value: cdktf.listMapperHcl(csipRiskCenterTaskAdvanceCfgCfgRiskToHclTerraform, true)(struct!.cfgRisk),
      isBlock: true,
      type: "list",
      storageClassType: "CsipRiskCenterTaskAdvanceCfgCfgRiskList",
    },
    port_risk: {
      value: cdktf.listMapperHcl(csipRiskCenterTaskAdvanceCfgPortRiskToHclTerraform, true)(struct!.portRisk),
      isBlock: true,
      type: "list",
      storageClassType: "CsipRiskCenterTaskAdvanceCfgPortRiskList",
    },
    vul_risk: {
      value: cdktf.listMapperHcl(csipRiskCenterTaskAdvanceCfgVulRiskToHclTerraform, true)(struct!.vulRisk),
      isBlock: true,
      type: "list",
      storageClassType: "CsipRiskCenterTaskAdvanceCfgVulRiskList",
    },
    weak_pwd_risk: {
      value: cdktf.listMapperHcl(csipRiskCenterTaskAdvanceCfgWeakPwdRiskToHclTerraform, true)(struct!.weakPwdRisk),
      isBlock: true,
      type: "list",
      storageClassType: "CsipRiskCenterTaskAdvanceCfgWeakPwdRiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsipRiskCenterTaskAdvanceCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsipRiskCenterTaskAdvanceCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfgRisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfgRisk = this._cfgRisk?.internalValue;
    }
    if (this._portRisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRisk = this._portRisk?.internalValue;
    }
    if (this._vulRisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulRisk = this._vulRisk?.internalValue;
    }
    if (this._weakPwdRisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weakPwdRisk = this._weakPwdRisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsipRiskCenterTaskAdvanceCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cfgRisk.internalValue = undefined;
      this._portRisk.internalValue = undefined;
      this._vulRisk.internalValue = undefined;
      this._weakPwdRisk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cfgRisk.internalValue = value.cfgRisk;
      this._portRisk.internalValue = value.portRisk;
      this._vulRisk.internalValue = value.vulRisk;
      this._weakPwdRisk.internalValue = value.weakPwdRisk;
    }
  }

  // cfg_risk - computed: false, optional: true, required: false
  private _cfgRisk = new CsipRiskCenterTaskAdvanceCfgCfgRiskList(this, "cfg_risk", false);
  public get cfgRisk() {
    return this._cfgRisk;
  }
  public putCfgRisk(value: CsipRiskCenterTaskAdvanceCfgCfgRisk[] | cdktf.IResolvable) {
    this._cfgRisk.internalValue = value;
  }
  public resetCfgRisk() {
    this._cfgRisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgRiskInput() {
    return this._cfgRisk.internalValue;
  }

  // port_risk - computed: false, optional: true, required: false
  private _portRisk = new CsipRiskCenterTaskAdvanceCfgPortRiskList(this, "port_risk", false);
  public get portRisk() {
    return this._portRisk;
  }
  public putPortRisk(value: CsipRiskCenterTaskAdvanceCfgPortRisk[] | cdktf.IResolvable) {
    this._portRisk.internalValue = value;
  }
  public resetPortRisk() {
    this._portRisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRiskInput() {
    return this._portRisk.internalValue;
  }

  // vul_risk - computed: false, optional: true, required: false
  private _vulRisk = new CsipRiskCenterTaskAdvanceCfgVulRiskList(this, "vul_risk", false);
  public get vulRisk() {
    return this._vulRisk;
  }
  public putVulRisk(value: CsipRiskCenterTaskAdvanceCfgVulRisk[] | cdktf.IResolvable) {
    this._vulRisk.internalValue = value;
  }
  public resetVulRisk() {
    this._vulRisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulRiskInput() {
    return this._vulRisk.internalValue;
  }

  // weak_pwd_risk - computed: false, optional: true, required: false
  private _weakPwdRisk = new CsipRiskCenterTaskAdvanceCfgWeakPwdRiskList(this, "weak_pwd_risk", false);
  public get weakPwdRisk() {
    return this._weakPwdRisk;
  }
  public putWeakPwdRisk(value: CsipRiskCenterTaskAdvanceCfgWeakPwdRisk[] | cdktf.IResolvable) {
    this._weakPwdRisk.internalValue = value;
  }
  public resetWeakPwdRisk() {
    this._weakPwdRisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weakPwdRiskInput() {
    return this._weakPwdRisk.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center tencentcloud_csip_risk_center}
*/
export class CsipRiskCenter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_csip_risk_center";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsipRiskCenter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsipRiskCenter to import
  * @param importFromId The id of the existing CsipRiskCenter that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsipRiskCenter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_csip_risk_center", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/csip_risk_center tencentcloud_csip_risk_center} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsipRiskCenterConfig
  */
  public constructor(scope: Construct, id: string, config: CsipRiskCenterConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_csip_risk_center',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._scanAssetType = config.scanAssetType;
    this._scanItem = config.scanItem;
    this._scanPlanContent = config.scanPlanContent;
    this._scanPlanType = config.scanPlanType;
    this._selfDefiningAssets = config.selfDefiningAssets;
    this._taskMode = config.taskMode;
    this._taskName = config.taskName;
    this._assets.internalValue = config.assets;
    this._taskAdvanceCfg.internalValue = config.taskAdvanceCfg;
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

  // scan_asset_type - computed: false, optional: false, required: true
  private _scanAssetType?: number; 
  public get scanAssetType() {
    return this.getNumberAttribute('scan_asset_type');
  }
  public set scanAssetType(value: number) {
    this._scanAssetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanAssetTypeInput() {
    return this._scanAssetType;
  }

  // scan_from - computed: true, optional: false, required: false
  public get scanFrom() {
    return this.getStringAttribute('scan_from');
  }

  // scan_item - computed: false, optional: false, required: true
  private _scanItem?: string[]; 
  public get scanItem() {
    return cdktf.Fn.tolist(this.getListAttribute('scan_item'));
  }
  public set scanItem(value: string[]) {
    this._scanItem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanItemInput() {
    return this._scanItem;
  }

  // scan_plan_content - computed: false, optional: true, required: false
  private _scanPlanContent?: string; 
  public get scanPlanContent() {
    return this.getStringAttribute('scan_plan_content');
  }
  public set scanPlanContent(value: string) {
    this._scanPlanContent = value;
  }
  public resetScanPlanContent() {
    this._scanPlanContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanPlanContentInput() {
    return this._scanPlanContent;
  }

  // scan_plan_type - computed: false, optional: false, required: true
  private _scanPlanType?: number; 
  public get scanPlanType() {
    return this.getNumberAttribute('scan_plan_type');
  }
  public set scanPlanType(value: number) {
    this._scanPlanType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanPlanTypeInput() {
    return this._scanPlanType;
  }

  // self_defining_assets - computed: false, optional: true, required: false
  private _selfDefiningAssets?: string[]; 
  public get selfDefiningAssets() {
    return cdktf.Fn.tolist(this.getListAttribute('self_defining_assets'));
  }
  public set selfDefiningAssets(value: string[]) {
    this._selfDefiningAssets = value;
  }
  public resetSelfDefiningAssets() {
    this._selfDefiningAssets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfDefiningAssetsInput() {
    return this._selfDefiningAssets;
  }

  // task_mode - computed: false, optional: true, required: false
  private _taskMode?: number; 
  public get taskMode() {
    return this.getNumberAttribute('task_mode');
  }
  public set taskMode(value: number) {
    this._taskMode = value;
  }
  public resetTaskMode() {
    this._taskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskModeInput() {
    return this._taskMode;
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // assets - computed: false, optional: true, required: false
  private _assets = new CsipRiskCenterAssetsList(this, "assets", false);
  public get assets() {
    return this._assets;
  }
  public putAssets(value: CsipRiskCenterAssets[] | cdktf.IResolvable) {
    this._assets.internalValue = value;
  }
  public resetAssets() {
    this._assets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetsInput() {
    return this._assets.internalValue;
  }

  // task_advance_cfg - computed: false, optional: true, required: false
  private _taskAdvanceCfg = new CsipRiskCenterTaskAdvanceCfgOutputReference(this, "task_advance_cfg");
  public get taskAdvanceCfg() {
    return this._taskAdvanceCfg;
  }
  public putTaskAdvanceCfg(value: CsipRiskCenterTaskAdvanceCfg) {
    this._taskAdvanceCfg.internalValue = value;
  }
  public resetTaskAdvanceCfg() {
    this._taskAdvanceCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAdvanceCfgInput() {
    return this._taskAdvanceCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scan_asset_type: cdktf.numberToTerraform(this._scanAssetType),
      scan_item: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scanItem),
      scan_plan_content: cdktf.stringToTerraform(this._scanPlanContent),
      scan_plan_type: cdktf.numberToTerraform(this._scanPlanType),
      self_defining_assets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selfDefiningAssets),
      task_mode: cdktf.numberToTerraform(this._taskMode),
      task_name: cdktf.stringToTerraform(this._taskName),
      assets: cdktf.listMapper(csipRiskCenterAssetsToTerraform, true)(this._assets.internalValue),
      task_advance_cfg: csipRiskCenterTaskAdvanceCfgToTerraform(this._taskAdvanceCfg.internalValue),
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
      scan_asset_type: {
        value: cdktf.numberToHclTerraform(this._scanAssetType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_item: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scanItem),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scan_plan_content: {
        value: cdktf.stringToHclTerraform(this._scanPlanContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_plan_type: {
        value: cdktf.numberToHclTerraform(this._scanPlanType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      self_defining_assets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selfDefiningAssets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      task_mode: {
        value: cdktf.numberToHclTerraform(this._taskMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assets: {
        value: cdktf.listMapperHcl(csipRiskCenterAssetsToHclTerraform, true)(this._assets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsipRiskCenterAssetsList",
      },
      task_advance_cfg: {
        value: csipRiskCenterTaskAdvanceCfgToHclTerraform(this._taskAdvanceCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsipRiskCenterTaskAdvanceCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
