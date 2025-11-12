// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteMeshGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#annotations SiteMeshGroup#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#description SiteMeshGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#disable SiteMeshGroup#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#id SiteMeshGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#labels SiteMeshGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#name SiteMeshGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#namespace SiteMeshGroup#namespace}
  */
  readonly namespace: string;
  /**
  * full_mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#full_mesh SiteMeshGroup#full_mesh}
  */
  readonly fullMesh?: SiteMeshGroupFullMesh;
  /**
  * hub_mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#hub_mesh SiteMeshGroup#hub_mesh}
  */
  readonly hubMesh?: SiteMeshGroupHubMesh;
  /**
  * spoke_mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#spoke_mesh SiteMeshGroup#spoke_mesh}
  */
  readonly spokeMesh?: SiteMeshGroupSpokeMesh;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#virtual_site SiteMeshGroup#virtual_site}
  */
  readonly virtualSite?: SiteMeshGroupVirtualSite[] | cdktf.IResolvable;
}
export interface SiteMeshGroupFullMesh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#control_and_data_plane_mesh SiteMeshGroup#control_and_data_plane_mesh}
  */
  readonly controlAndDataPlaneMesh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#data_plane_mesh SiteMeshGroup#data_plane_mesh}
  */
  readonly dataPlaneMesh?: boolean | cdktf.IResolvable;
}

export function siteMeshGroupFullMeshToTerraform(struct?: SiteMeshGroupFullMeshOutputReference | SiteMeshGroupFullMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_and_data_plane_mesh: cdktf.booleanToTerraform(struct!.controlAndDataPlaneMesh),
    data_plane_mesh: cdktf.booleanToTerraform(struct!.dataPlaneMesh),
  }
}


export function siteMeshGroupFullMeshToHclTerraform(struct?: SiteMeshGroupFullMeshOutputReference | SiteMeshGroupFullMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_and_data_plane_mesh: {
      value: cdktf.booleanToHclTerraform(struct!.controlAndDataPlaneMesh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_plane_mesh: {
      value: cdktf.booleanToHclTerraform(struct!.dataPlaneMesh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteMeshGroupFullMeshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteMeshGroupFullMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlAndDataPlaneMesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlAndDataPlaneMesh = this._controlAndDataPlaneMesh;
    }
    if (this._dataPlaneMesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPlaneMesh = this._dataPlaneMesh;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteMeshGroupFullMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlAndDataPlaneMesh = undefined;
      this._dataPlaneMesh = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlAndDataPlaneMesh = value.controlAndDataPlaneMesh;
      this._dataPlaneMesh = value.dataPlaneMesh;
    }
  }

  // control_and_data_plane_mesh - computed: false, optional: true, required: false
  private _controlAndDataPlaneMesh?: boolean | cdktf.IResolvable; 
  public get controlAndDataPlaneMesh() {
    return this.getBooleanAttribute('control_and_data_plane_mesh');
  }
  public set controlAndDataPlaneMesh(value: boolean | cdktf.IResolvable) {
    this._controlAndDataPlaneMesh = value;
  }
  public resetControlAndDataPlaneMesh() {
    this._controlAndDataPlaneMesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlAndDataPlaneMeshInput() {
    return this._controlAndDataPlaneMesh;
  }

  // data_plane_mesh - computed: false, optional: true, required: false
  private _dataPlaneMesh?: boolean | cdktf.IResolvable; 
  public get dataPlaneMesh() {
    return this.getBooleanAttribute('data_plane_mesh');
  }
  public set dataPlaneMesh(value: boolean | cdktf.IResolvable) {
    this._dataPlaneMesh = value;
  }
  public resetDataPlaneMesh() {
    this._dataPlaneMesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPlaneMeshInput() {
    return this._dataPlaneMesh;
  }
}
export interface SiteMeshGroupHubMesh {
}

export function siteMeshGroupHubMeshToTerraform(struct?: SiteMeshGroupHubMeshOutputReference | SiteMeshGroupHubMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function siteMeshGroupHubMeshToHclTerraform(struct?: SiteMeshGroupHubMeshOutputReference | SiteMeshGroupHubMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SiteMeshGroupHubMeshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteMeshGroupHubMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteMeshGroupHubMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SiteMeshGroupSpokeMeshHubMeshGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#name SiteMeshGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#namespace SiteMeshGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#tenant SiteMeshGroup#tenant}
  */
  readonly tenant?: string;
}

export function siteMeshGroupSpokeMeshHubMeshGroupToTerraform(struct?: SiteMeshGroupSpokeMeshHubMeshGroupOutputReference | SiteMeshGroupSpokeMeshHubMeshGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function siteMeshGroupSpokeMeshHubMeshGroupToHclTerraform(struct?: SiteMeshGroupSpokeMeshHubMeshGroupOutputReference | SiteMeshGroupSpokeMeshHubMeshGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteMeshGroupSpokeMeshHubMeshGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteMeshGroupSpokeMeshHubMeshGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteMeshGroupSpokeMeshHubMeshGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface SiteMeshGroupSpokeMesh {
  /**
  * hub_mesh_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#hub_mesh_group SiteMeshGroup#hub_mesh_group}
  */
  readonly hubMeshGroup: SiteMeshGroupSpokeMeshHubMeshGroup;
}

export function siteMeshGroupSpokeMeshToTerraform(struct?: SiteMeshGroupSpokeMeshOutputReference | SiteMeshGroupSpokeMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hub_mesh_group: siteMeshGroupSpokeMeshHubMeshGroupToTerraform(struct!.hubMeshGroup),
  }
}


export function siteMeshGroupSpokeMeshToHclTerraform(struct?: SiteMeshGroupSpokeMeshOutputReference | SiteMeshGroupSpokeMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hub_mesh_group: {
      value: siteMeshGroupSpokeMeshHubMeshGroupToHclTerraform(struct!.hubMeshGroup),
      isBlock: true,
      type: "list",
      storageClassType: "SiteMeshGroupSpokeMeshHubMeshGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteMeshGroupSpokeMeshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteMeshGroupSpokeMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubMeshGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubMeshGroup = this._hubMeshGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteMeshGroupSpokeMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hubMeshGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hubMeshGroup.internalValue = value.hubMeshGroup;
    }
  }

  // hub_mesh_group - computed: false, optional: false, required: true
  private _hubMeshGroup = new SiteMeshGroupSpokeMeshHubMeshGroupOutputReference(this, "hub_mesh_group");
  public get hubMeshGroup() {
    return this._hubMeshGroup;
  }
  public putHubMeshGroup(value: SiteMeshGroupSpokeMeshHubMeshGroup) {
    this._hubMeshGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubMeshGroupInput() {
    return this._hubMeshGroup.internalValue;
  }
}
export interface SiteMeshGroupVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#name SiteMeshGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#namespace SiteMeshGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#tenant SiteMeshGroup#tenant}
  */
  readonly tenant?: string;
}

export function siteMeshGroupVirtualSiteToTerraform(struct?: SiteMeshGroupVirtualSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function siteMeshGroupVirtualSiteToHclTerraform(struct?: SiteMeshGroupVirtualSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteMeshGroupVirtualSiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteMeshGroupVirtualSite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteMeshGroupVirtualSite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class SiteMeshGroupVirtualSiteList extends cdktf.ComplexList {
  public internalValue? : SiteMeshGroupVirtualSite[] | cdktf.IResolvable

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
  public get(index: number): SiteMeshGroupVirtualSiteOutputReference {
    return new SiteMeshGroupVirtualSiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group volterra_site_mesh_group}
*/
export class SiteMeshGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_site_mesh_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteMeshGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteMeshGroup to import
  * @param importFromId The id of the existing SiteMeshGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteMeshGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_site_mesh_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/site_mesh_group volterra_site_mesh_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteMeshGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SiteMeshGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_site_mesh_group',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._fullMesh.internalValue = config.fullMesh;
    this._hubMesh.internalValue = config.hubMesh;
    this._spokeMesh.internalValue = config.spokeMesh;
    this._virtualSite.internalValue = config.virtualSite;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // full_mesh - computed: false, optional: true, required: false
  private _fullMesh = new SiteMeshGroupFullMeshOutputReference(this, "full_mesh");
  public get fullMesh() {
    return this._fullMesh;
  }
  public putFullMesh(value: SiteMeshGroupFullMesh) {
    this._fullMesh.internalValue = value;
  }
  public resetFullMesh() {
    this._fullMesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullMeshInput() {
    return this._fullMesh.internalValue;
  }

  // hub_mesh - computed: false, optional: true, required: false
  private _hubMesh = new SiteMeshGroupHubMeshOutputReference(this, "hub_mesh");
  public get hubMesh() {
    return this._hubMesh;
  }
  public putHubMesh(value: SiteMeshGroupHubMesh) {
    this._hubMesh.internalValue = value;
  }
  public resetHubMesh() {
    this._hubMesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubMeshInput() {
    return this._hubMesh.internalValue;
  }

  // spoke_mesh - computed: false, optional: true, required: false
  private _spokeMesh = new SiteMeshGroupSpokeMeshOutputReference(this, "spoke_mesh");
  public get spokeMesh() {
    return this._spokeMesh;
  }
  public putSpokeMesh(value: SiteMeshGroupSpokeMesh) {
    this._spokeMesh.internalValue = value;
  }
  public resetSpokeMesh() {
    this._spokeMesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeMeshInput() {
    return this._spokeMesh.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new SiteMeshGroupVirtualSiteList(this, "virtual_site", false);
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: SiteMeshGroupVirtualSite[] | cdktf.IResolvable) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      full_mesh: siteMeshGroupFullMeshToTerraform(this._fullMesh.internalValue),
      hub_mesh: siteMeshGroupHubMeshToTerraform(this._hubMesh.internalValue),
      spoke_mesh: siteMeshGroupSpokeMeshToTerraform(this._spokeMesh.internalValue),
      virtual_site: cdktf.listMapper(siteMeshGroupVirtualSiteToTerraform, true)(this._virtualSite.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_mesh: {
        value: siteMeshGroupFullMeshToHclTerraform(this._fullMesh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteMeshGroupFullMeshList",
      },
      hub_mesh: {
        value: siteMeshGroupHubMeshToHclTerraform(this._hubMesh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteMeshGroupHubMeshList",
      },
      spoke_mesh: {
        value: siteMeshGroupSpokeMeshToHclTerraform(this._spokeMesh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteMeshGroupSpokeMeshList",
      },
      virtual_site: {
        value: cdktf.listMapperHcl(siteMeshGroupVirtualSiteToHclTerraform, true)(this._virtualSite.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteMeshGroupVirtualSiteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
