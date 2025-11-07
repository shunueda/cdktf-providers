// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_hostonboarding_ssid_ippool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BusinessSdaHostonboardingSsidIppoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_hostonboarding_ssid_ippool#id BusinessSdaHostonboardingSsidIppool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_hostonboarding_ssid_ippool#parameters BusinessSdaHostonboardingSsidIppool#parameters}
  */
  readonly parameters?: BusinessSdaHostonboardingSsidIppoolParameters[] | cdktf.IResolvable;
}
export interface BusinessSdaHostonboardingSsidIppoolItemSsidDetails {
}

export function businessSdaHostonboardingSsidIppoolItemSsidDetailsToTerraform(struct?: BusinessSdaHostonboardingSsidIppoolItemSsidDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function businessSdaHostonboardingSsidIppoolItemSsidDetailsToHclTerraform(struct?: BusinessSdaHostonboardingSsidIppoolItemSsidDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BusinessSdaHostonboardingSsidIppoolItemSsidDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessSdaHostonboardingSsidIppoolItemSsidDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessSdaHostonboardingSsidIppoolItemSsidDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scalable_group_name - computed: true, optional: false, required: false
  public get scalableGroupName() {
    return this.getStringAttribute('scalable_group_name');
  }
}

export class BusinessSdaHostonboardingSsidIppoolItemSsidDetailsList extends cdktf.ComplexList {

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
  public get(index: number): BusinessSdaHostonboardingSsidIppoolItemSsidDetailsOutputReference {
    return new BusinessSdaHostonboardingSsidIppoolItemSsidDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessSdaHostonboardingSsidIppoolItem {
}

export function businessSdaHostonboardingSsidIppoolItemToTerraform(struct?: BusinessSdaHostonboardingSsidIppoolItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function businessSdaHostonboardingSsidIppoolItemToHclTerraform(struct?: BusinessSdaHostonboardingSsidIppoolItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BusinessSdaHostonboardingSsidIppoolItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessSdaHostonboardingSsidIppoolItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessSdaHostonboardingSsidIppoolItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssid_details - computed: true, optional: false, required: false
  private _ssidDetails = new BusinessSdaHostonboardingSsidIppoolItemSsidDetailsList(this, "ssid_details", false);
  public get ssidDetails() {
    return this._ssidDetails;
  }

  // vlan_name - computed: true, optional: false, required: false
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
}

export class BusinessSdaHostonboardingSsidIppoolItemList extends cdktf.ComplexList {

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
  public get(index: number): BusinessSdaHostonboardingSsidIppoolItemOutputReference {
    return new BusinessSdaHostonboardingSsidIppoolItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessSdaHostonboardingSsidIppoolParameters {
  /**
  * Scalable Group Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_hostonboarding_ssid_ippool#scalable_group_name BusinessSdaHostonboardingSsidIppool#scalable_group_name}
  */
  readonly scalableGroupName?: string;
  /**
  * Site Name Hierarchy
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_hostonboarding_ssid_ippool#site_name_hierarchy BusinessSdaHostonboardingSsidIppool#site_name_hierarchy}
  */
  readonly siteNameHierarchy?: string;
  /**
  * List of SSIDs
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_hostonboarding_ssid_ippool#ssid_names BusinessSdaHostonboardingSsidIppool#ssid_names}
  */
  readonly ssidNames?: string[];
  /**
  * VLAN Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_hostonboarding_ssid_ippool#vlan_name BusinessSdaHostonboardingSsidIppool#vlan_name}
  */
  readonly vlanName?: string;
}

export function businessSdaHostonboardingSsidIppoolParametersToTerraform(struct?: BusinessSdaHostonboardingSsidIppoolParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scalable_group_name: cdktf.stringToTerraform(struct!.scalableGroupName),
    site_name_hierarchy: cdktf.stringToTerraform(struct!.siteNameHierarchy),
    ssid_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ssidNames),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function businessSdaHostonboardingSsidIppoolParametersToHclTerraform(struct?: BusinessSdaHostonboardingSsidIppoolParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scalable_group_name: {
      value: cdktf.stringToHclTerraform(struct!.scalableGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_name_hierarchy: {
      value: cdktf.stringToHclTerraform(struct!.siteNameHierarchy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssid_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ssidNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessSdaHostonboardingSsidIppoolParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessSdaHostonboardingSsidIppoolParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scalableGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalableGroupName = this._scalableGroupName;
    }
    if (this._siteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteNameHierarchy = this._siteNameHierarchy;
    }
    if (this._ssidNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssidNames = this._ssidNames;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessSdaHostonboardingSsidIppoolParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scalableGroupName = undefined;
      this._siteNameHierarchy = undefined;
      this._ssidNames = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scalableGroupName = value.scalableGroupName;
      this._siteNameHierarchy = value.siteNameHierarchy;
      this._ssidNames = value.ssidNames;
      this._vlanName = value.vlanName;
    }
  }

  // scalable_group_name - computed: true, optional: true, required: false
  private _scalableGroupName?: string; 
  public get scalableGroupName() {
    return this.getStringAttribute('scalable_group_name');
  }
  public set scalableGroupName(value: string) {
    this._scalableGroupName = value;
  }
  public resetScalableGroupName() {
    this._scalableGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableGroupNameInput() {
    return this._scalableGroupName;
  }

  // site_name_hierarchy - computed: false, optional: true, required: false
  private _siteNameHierarchy?: string; 
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }
  public set siteNameHierarchy(value: string) {
    this._siteNameHierarchy = value;
  }
  public resetSiteNameHierarchy() {
    this._siteNameHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameHierarchyInput() {
    return this._siteNameHierarchy;
  }

  // ssid_names - computed: true, optional: true, required: false
  private _ssidNames?: string[]; 
  public get ssidNames() {
    return this.getListAttribute('ssid_names');
  }
  public set ssidNames(value: string[]) {
    this._ssidNames = value;
  }
  public resetSsidNames() {
    this._ssidNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidNamesInput() {
    return this._ssidNames;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class BusinessSdaHostonboardingSsidIppoolParametersList extends cdktf.ComplexList {
  public internalValue? : BusinessSdaHostonboardingSsidIppoolParameters[] | cdktf.IResolvable

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
  public get(index: number): BusinessSdaHostonboardingSsidIppoolParametersOutputReference {
    return new BusinessSdaHostonboardingSsidIppoolParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_hostonboarding_ssid_ippool dnacenter_business_sda_hostonboarding_ssid_ippool}
*/
export class BusinessSdaHostonboardingSsidIppool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_business_sda_hostonboarding_ssid_ippool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BusinessSdaHostonboardingSsidIppool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BusinessSdaHostonboardingSsidIppool to import
  * @param importFromId The id of the existing BusinessSdaHostonboardingSsidIppool that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_hostonboarding_ssid_ippool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BusinessSdaHostonboardingSsidIppool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_business_sda_hostonboarding_ssid_ippool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/business_sda_hostonboarding_ssid_ippool dnacenter_business_sda_hostonboarding_ssid_ippool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BusinessSdaHostonboardingSsidIppoolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BusinessSdaHostonboardingSsidIppoolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_business_sda_hostonboarding_ssid_ippool',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new BusinessSdaHostonboardingSsidIppoolItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new BusinessSdaHostonboardingSsidIppoolParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: BusinessSdaHostonboardingSsidIppoolParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(businessSdaHostonboardingSsidIppoolParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(businessSdaHostonboardingSsidIppoolParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BusinessSdaHostonboardingSsidIppoolParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
