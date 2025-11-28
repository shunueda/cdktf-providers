// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/vdc_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VdcProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/vdc_project#description VdcProject#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/vdc_project#display_name VdcProject#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/vdc_project#id VdcProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/vdc_project#name VdcProject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/vdc_project#vdc_id VdcProject#vdc_id}
  */
  readonly vdcId: string;
}
export interface VdcProjectRegionsCloudInfrasAzs {
}

export function vdcProjectRegionsCloudInfrasAzsToTerraform(struct?: VdcProjectRegionsCloudInfrasAzs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vdcProjectRegionsCloudInfrasAzsToHclTerraform(struct?: VdcProjectRegionsCloudInfrasAzs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VdcProjectRegionsCloudInfrasAzsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VdcProjectRegionsCloudInfrasAzs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdcProjectRegionsCloudInfrasAzs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // az_id - computed: true, optional: false, required: false
  public get azId() {
    return this.getStringAttribute('az_id');
  }

  // az_name - computed: true, optional: false, required: false
  public get azName() {
    return this.getStringAttribute('az_name');
  }

  // az_status - computed: true, optional: false, required: false
  public get azStatus() {
    return this.getStringAttribute('az_status');
  }
}

export class VdcProjectRegionsCloudInfrasAzsList extends cdktf.ComplexList {

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
  public get(index: number): VdcProjectRegionsCloudInfrasAzsOutputReference {
    return new VdcProjectRegionsCloudInfrasAzsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdcProjectRegionsCloudInfrasQuotasAzs {
}

export function vdcProjectRegionsCloudInfrasQuotasAzsToTerraform(struct?: VdcProjectRegionsCloudInfrasQuotasAzs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vdcProjectRegionsCloudInfrasQuotasAzsToHclTerraform(struct?: VdcProjectRegionsCloudInfrasQuotasAzs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VdcProjectRegionsCloudInfrasQuotasAzsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VdcProjectRegionsCloudInfrasQuotasAzs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdcProjectRegionsCloudInfrasQuotasAzs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // az_id - computed: true, optional: false, required: false
  public get azId() {
    return this.getStringAttribute('az_id');
  }

  // az_name - computed: true, optional: false, required: false
  public get azName() {
    return this.getStringAttribute('az_name');
  }

  // az_status - computed: true, optional: false, required: false
  public get azStatus() {
    return this.getStringAttribute('az_status');
  }
}

export class VdcProjectRegionsCloudInfrasQuotasAzsList extends cdktf.ComplexList {

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
  public get(index: number): VdcProjectRegionsCloudInfrasQuotasAzsOutputReference {
    return new VdcProjectRegionsCloudInfrasQuotasAzsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdcProjectRegionsCloudInfrasQuotas {
}

export function vdcProjectRegionsCloudInfrasQuotasToTerraform(struct?: VdcProjectRegionsCloudInfrasQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vdcProjectRegionsCloudInfrasQuotasToHclTerraform(struct?: VdcProjectRegionsCloudInfrasQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VdcProjectRegionsCloudInfrasQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VdcProjectRegionsCloudInfrasQuotas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdcProjectRegionsCloudInfrasQuotas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azs - computed: true, optional: false, required: false
  private _azs = new VdcProjectRegionsCloudInfrasQuotasAzsList(this, "azs", false);
  public get azs() {
    return this._azs;
  }

  // cloud_infra_id - computed: true, optional: false, required: false
  public get cloudInfraId() {
    return this.getStringAttribute('cloud_infra_id');
  }

  // cloud_infra_name - computed: true, optional: false, required: false
  public get cloudInfraName() {
    return this.getStringAttribute('cloud_infra_name');
  }

  // cloud_infra_status - computed: true, optional: false, required: false
  public get cloudInfraStatus() {
    return this.getStringAttribute('cloud_infra_status');
  }

  // cloud_infra_type - computed: true, optional: false, required: false
  public get cloudInfraType() {
    return this.getStringAttribute('cloud_infra_type');
  }
}

export class VdcProjectRegionsCloudInfrasQuotasList extends cdktf.ComplexList {

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
  public get(index: number): VdcProjectRegionsCloudInfrasQuotasOutputReference {
    return new VdcProjectRegionsCloudInfrasQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdcProjectRegionsCloudInfras {
}

export function vdcProjectRegionsCloudInfrasToTerraform(struct?: VdcProjectRegionsCloudInfras): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vdcProjectRegionsCloudInfrasToHclTerraform(struct?: VdcProjectRegionsCloudInfras): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VdcProjectRegionsCloudInfrasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VdcProjectRegionsCloudInfras | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdcProjectRegionsCloudInfras | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azs - computed: true, optional: false, required: false
  private _azs = new VdcProjectRegionsCloudInfrasAzsList(this, "azs", false);
  public get azs() {
    return this._azs;
  }

  // cloud_infra_id - computed: true, optional: false, required: false
  public get cloudInfraId() {
    return this.getStringAttribute('cloud_infra_id');
  }

  // cloud_infra_name - computed: true, optional: false, required: false
  public get cloudInfraName() {
    return this.getStringAttribute('cloud_infra_name');
  }

  // cloud_infra_status - computed: true, optional: false, required: false
  public get cloudInfraStatus() {
    return this.getStringAttribute('cloud_infra_status');
  }

  // cloud_infra_type - computed: true, optional: false, required: false
  public get cloudInfraType() {
    return this.getStringAttribute('cloud_infra_type');
  }

  // quotas - computed: true, optional: false, required: false
  private _quotas = new VdcProjectRegionsCloudInfrasQuotasList(this, "quotas", false);
  public get quotas() {
    return this._quotas;
  }
}

export class VdcProjectRegionsCloudInfrasList extends cdktf.ComplexList {

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
  public get(index: number): VdcProjectRegionsCloudInfrasOutputReference {
    return new VdcProjectRegionsCloudInfrasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VdcProjectRegions {
}

export function vdcProjectRegionsToTerraform(struct?: VdcProjectRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vdcProjectRegionsToHclTerraform(struct?: VdcProjectRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VdcProjectRegionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VdcProjectRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VdcProjectRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_infras - computed: true, optional: false, required: false
  private _cloudInfras = new VdcProjectRegionsCloudInfrasList(this, "cloud_infras", false);
  public get cloudInfras() {
    return this._cloudInfras;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // region_name - computed: true, optional: false, required: false
  private _regionName = new cdktf.StringMap(this, "region_name");
  public get regionName() {
    return this._regionName;
  }

  // region_status - computed: true, optional: false, required: false
  public get regionStatus() {
    return this.getStringAttribute('region_status');
  }

  // region_type - computed: true, optional: false, required: false
  public get regionType() {
    return this.getStringAttribute('region_type');
  }
}

export class VdcProjectRegionsList extends cdktf.ComplexList {

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
  public get(index: number): VdcProjectRegionsOutputReference {
    return new VdcProjectRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/vdc_project hcs_vdc_project}
*/
export class VdcProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_vdc_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VdcProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VdcProject to import
  * @param importFromId The id of the existing VdcProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/vdc_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VdcProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_vdc_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/vdc_project hcs_vdc_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VdcProjectConfig
  */
  public constructor(scope: Construct, id: string, config: VdcProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_vdc_project',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.21',
        providerVersionConstraint: '2.4.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._vdcId = config.vdcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // is_shared - computed: true, optional: false, required: false
  public get isShared() {
    return this.getBooleanAttribute('is_shared');
  }

  // is_support_hws_service - computed: true, optional: false, required: false
  public get isSupportHwsService() {
    return this.getBooleanAttribute('is_support_hws_service');
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

  // regions - computed: true, optional: false, required: false
  private _regions = new VdcProjectRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }

  // vdc_id - computed: false, optional: false, required: true
  private _vdcId?: string; 
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }
  public set vdcId(value: string) {
    this._vdcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcIdInput() {
    return this._vdcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdc_id: cdktf.stringToTerraform(this._vdcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc_id: {
        value: cdktf.stringToHclTerraform(this._vdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
