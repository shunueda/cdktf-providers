// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevopsDeployEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#cluster_id DevopsDeployEnvironment#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#defined_tags DevopsDeployEnvironment#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#deploy_environment_type DevopsDeployEnvironment#deploy_environment_type}
  */
  readonly deployEnvironmentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#description DevopsDeployEnvironment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#display_name DevopsDeployEnvironment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#freeform_tags DevopsDeployEnvironment#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#function_id DevopsDeployEnvironment#function_id}
  */
  readonly functionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#id DevopsDeployEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#project_id DevopsDeployEnvironment#project_id}
  */
  readonly projectId: string;
  /**
  * compute_instance_group_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#compute_instance_group_selectors DevopsDeployEnvironment#compute_instance_group_selectors}
  */
  readonly computeInstanceGroupSelectors?: DevopsDeployEnvironmentComputeInstanceGroupSelectors;
  /**
  * network_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#network_channel DevopsDeployEnvironment#network_channel}
  */
  readonly networkChannel?: DevopsDeployEnvironmentNetworkChannel;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#timeouts DevopsDeployEnvironment#timeouts}
  */
  readonly timeouts?: DevopsDeployEnvironmentTimeouts;
}
export interface DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#compute_instance_ids DevopsDeployEnvironment#compute_instance_ids}
  */
  readonly computeInstanceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#query DevopsDeployEnvironment#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#region DevopsDeployEnvironment#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#selector_type DevopsDeployEnvironment#selector_type}
  */
  readonly selectorType: string;
}

export function devopsDeployEnvironmentComputeInstanceGroupSelectorsItemsToTerraform(struct?: DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.computeInstanceIds),
    query: cdktf.stringToTerraform(struct!.query),
    region: cdktf.stringToTerraform(struct!.region),
    selector_type: cdktf.stringToTerraform(struct!.selectorType),
  }
}


export function devopsDeployEnvironmentComputeInstanceGroupSelectorsItemsToHclTerraform(struct?: DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_instance_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.computeInstanceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
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
    selector_type: {
      value: cdktf.stringToHclTerraform(struct!.selectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeInstanceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeInstanceIds = this._computeInstanceIds;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._selectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorType = this._selectorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeInstanceIds = undefined;
      this._query = undefined;
      this._region = undefined;
      this._selectorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeInstanceIds = value.computeInstanceIds;
      this._query = value.query;
      this._region = value.region;
      this._selectorType = value.selectorType;
    }
  }

  // compute_instance_ids - computed: true, optional: true, required: false
  private _computeInstanceIds?: string[]; 
  public get computeInstanceIds() {
    return this.getListAttribute('compute_instance_ids');
  }
  public set computeInstanceIds(value: string[]) {
    this._computeInstanceIds = value;
  }
  public resetComputeInstanceIds() {
    this._computeInstanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceIdsInput() {
    return this._computeInstanceIds;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // region - computed: true, optional: true, required: false
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

  // selector_type - computed: false, optional: false, required: true
  private _selectorType?: string; 
  public get selectorType() {
    return this.getStringAttribute('selector_type');
  }
  public set selectorType(value: string) {
    this._selectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorTypeInput() {
    return this._selectorType;
  }
}

export class DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList extends cdktf.ComplexList {
  public internalValue? : DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems[] | cdktf.IResolvable

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
  public get(index: number): DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference {
    return new DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeployEnvironmentComputeInstanceGroupSelectors {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#items DevopsDeployEnvironment#items}
  */
  readonly items?: DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems[] | cdktf.IResolvable;
}

export function devopsDeployEnvironmentComputeInstanceGroupSelectorsToTerraform(struct?: DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference | DevopsDeployEnvironmentComputeInstanceGroupSelectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(devopsDeployEnvironmentComputeInstanceGroupSelectorsItemsToTerraform, true)(struct!.items),
  }
}


export function devopsDeployEnvironmentComputeInstanceGroupSelectorsToHclTerraform(struct?: DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference | DevopsDeployEnvironmentComputeInstanceGroupSelectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(devopsDeployEnvironmentComputeInstanceGroupSelectorsItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployEnvironmentComputeInstanceGroupSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployEnvironmentComputeInstanceGroupSelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DevopsDeployEnvironmentNetworkChannel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#network_channel_type DevopsDeployEnvironment#network_channel_type}
  */
  readonly networkChannelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#nsg_ids DevopsDeployEnvironment#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#subnet_id DevopsDeployEnvironment#subnet_id}
  */
  readonly subnetId: string;
}

export function devopsDeployEnvironmentNetworkChannelToTerraform(struct?: DevopsDeployEnvironmentNetworkChannelOutputReference | DevopsDeployEnvironmentNetworkChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_channel_type: cdktf.stringToTerraform(struct!.networkChannelType),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function devopsDeployEnvironmentNetworkChannelToHclTerraform(struct?: DevopsDeployEnvironmentNetworkChannelOutputReference | DevopsDeployEnvironmentNetworkChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_channel_type: {
      value: cdktf.stringToHclTerraform(struct!.networkChannelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployEnvironmentNetworkChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployEnvironmentNetworkChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkChannelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkChannelType = this._networkChannelType;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployEnvironmentNetworkChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkChannelType = undefined;
      this._nsgIds = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkChannelType = value.networkChannelType;
      this._nsgIds = value.nsgIds;
      this._subnetId = value.subnetId;
    }
  }

  // network_channel_type - computed: false, optional: false, required: true
  private _networkChannelType?: string; 
  public get networkChannelType() {
    return this.getStringAttribute('network_channel_type');
  }
  public set networkChannelType(value: string) {
    this._networkChannelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkChannelTypeInput() {
    return this._networkChannelType;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
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
}
export interface DevopsDeployEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#create DevopsDeployEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#delete DevopsDeployEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#update DevopsDeployEnvironment#update}
  */
  readonly update?: string;
}

export function devopsDeployEnvironmentTimeoutsToTerraform(struct?: DevopsDeployEnvironmentTimeouts | cdktf.IResolvable): any {
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


export function devopsDeployEnvironmentTimeoutsToHclTerraform(struct?: DevopsDeployEnvironmentTimeouts | cdktf.IResolvable): any {
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

export class DevopsDeployEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsDeployEnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DevopsDeployEnvironmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment oci_devops_deploy_environment}
*/
export class DevopsDeployEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_deploy_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevopsDeployEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsDeployEnvironment to import
  * @param importFromId The id of the existing DevopsDeployEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsDeployEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_deploy_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/devops_deploy_environment oci_devops_deploy_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsDeployEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsDeployEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_deploy_environment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._definedTags = config.definedTags;
    this._deployEnvironmentType = config.deployEnvironmentType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._functionId = config.functionId;
    this._id = config.id;
    this._projectId = config.projectId;
    this._computeInstanceGroupSelectors.internalValue = config.computeInstanceGroupSelectors;
    this._networkChannel.internalValue = config.networkChannel;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // deploy_environment_type - computed: false, optional: false, required: true
  private _deployEnvironmentType?: string; 
  public get deployEnvironmentType() {
    return this.getStringAttribute('deploy_environment_type');
  }
  public set deployEnvironmentType(value: string) {
    this._deployEnvironmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployEnvironmentTypeInput() {
    return this._deployEnvironmentType;
  }

  // description - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // function_id - computed: true, optional: true, required: false
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  public resetFunctionId() {
    this._functionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // compute_instance_group_selectors - computed: false, optional: true, required: false
  private _computeInstanceGroupSelectors = new DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference(this, "compute_instance_group_selectors");
  public get computeInstanceGroupSelectors() {
    return this._computeInstanceGroupSelectors;
  }
  public putComputeInstanceGroupSelectors(value: DevopsDeployEnvironmentComputeInstanceGroupSelectors) {
    this._computeInstanceGroupSelectors.internalValue = value;
  }
  public resetComputeInstanceGroupSelectors() {
    this._computeInstanceGroupSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceGroupSelectorsInput() {
    return this._computeInstanceGroupSelectors.internalValue;
  }

  // network_channel - computed: false, optional: true, required: false
  private _networkChannel = new DevopsDeployEnvironmentNetworkChannelOutputReference(this, "network_channel");
  public get networkChannel() {
    return this._networkChannel;
  }
  public putNetworkChannel(value: DevopsDeployEnvironmentNetworkChannel) {
    this._networkChannel.internalValue = value;
  }
  public resetNetworkChannel() {
    this._networkChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkChannelInput() {
    return this._networkChannel.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevopsDeployEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevopsDeployEnvironmentTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      deploy_environment_type: cdktf.stringToTerraform(this._deployEnvironmentType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      function_id: cdktf.stringToTerraform(this._functionId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      compute_instance_group_selectors: devopsDeployEnvironmentComputeInstanceGroupSelectorsToTerraform(this._computeInstanceGroupSelectors.internalValue),
      network_channel: devopsDeployEnvironmentNetworkChannelToTerraform(this._networkChannel.internalValue),
      timeouts: devopsDeployEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deploy_environment_type: {
        value: cdktf.stringToHclTerraform(this._deployEnvironmentType),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      function_id: {
        value: cdktf.stringToHclTerraform(this._functionId),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_instance_group_selectors: {
        value: devopsDeployEnvironmentComputeInstanceGroupSelectorsToHclTerraform(this._computeInstanceGroupSelectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployEnvironmentComputeInstanceGroupSelectorsList",
      },
      network_channel: {
        value: devopsDeployEnvironmentNetworkChannelToHclTerraform(this._networkChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployEnvironmentNetworkChannelList",
      },
      timeouts: {
        value: devopsDeployEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevopsDeployEnvironmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
