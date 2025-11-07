// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mesh_topology_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MeshTopologyPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mesh_topology_policy_definition#description MeshTopologyPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mesh_topology_policy_definition#name MeshTopologyPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mesh_topology_policy_definition#regions MeshTopologyPolicyDefinition#regions}
  */
  readonly regions: MeshTopologyPolicyDefinitionRegions[] | cdktf.IResolvable;
  /**
  * VPN list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mesh_topology_policy_definition#vpn_list_id MeshTopologyPolicyDefinition#vpn_list_id}
  */
  readonly vpnListId?: string;
  /**
  * VPN list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mesh_topology_policy_definition#vpn_list_version MeshTopologyPolicyDefinition#vpn_list_version}
  */
  readonly vpnListVersion?: number;
}
export interface MeshTopologyPolicyDefinitionRegions {
  /**
  * Region name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mesh_topology_policy_definition#name MeshTopologyPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * Site list IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mesh_topology_policy_definition#site_list_ids MeshTopologyPolicyDefinition#site_list_ids}
  */
  readonly siteListIds?: string[];
  /**
  * Site list versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mesh_topology_policy_definition#site_list_versions MeshTopologyPolicyDefinition#site_list_versions}
  */
  readonly siteListVersions?: string[];
}

export function meshTopologyPolicyDefinitionRegionsToTerraform(struct?: MeshTopologyPolicyDefinitionRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    site_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteListIds),
    site_list_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteListVersions),
  }
}


export function meshTopologyPolicyDefinitionRegionsToHclTerraform(struct?: MeshTopologyPolicyDefinitionRegions | cdktf.IResolvable): any {
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
    site_list_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.siteListIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    site_list_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.siteListVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeshTopologyPolicyDefinitionRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MeshTopologyPolicyDefinitionRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._siteListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteListIds = this._siteListIds;
    }
    if (this._siteListVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteListVersions = this._siteListVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeshTopologyPolicyDefinitionRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._siteListIds = undefined;
      this._siteListVersions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._siteListIds = value.siteListIds;
      this._siteListVersions = value.siteListVersions;
    }
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

  // site_list_ids - computed: false, optional: true, required: false
  private _siteListIds?: string[]; 
  public get siteListIds() {
    return cdktf.Fn.tolist(this.getListAttribute('site_list_ids'));
  }
  public set siteListIds(value: string[]) {
    this._siteListIds = value;
  }
  public resetSiteListIds() {
    this._siteListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteListIdsInput() {
    return this._siteListIds;
  }

  // site_list_versions - computed: false, optional: true, required: false
  private _siteListVersions?: string[]; 
  public get siteListVersions() {
    return this.getListAttribute('site_list_versions');
  }
  public set siteListVersions(value: string[]) {
    this._siteListVersions = value;
  }
  public resetSiteListVersions() {
    this._siteListVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteListVersionsInput() {
    return this._siteListVersions;
  }
}

export class MeshTopologyPolicyDefinitionRegionsList extends cdktf.ComplexList {
  public internalValue? : MeshTopologyPolicyDefinitionRegions[] | cdktf.IResolvable

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
  public get(index: number): MeshTopologyPolicyDefinitionRegionsOutputReference {
    return new MeshTopologyPolicyDefinitionRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mesh_topology_policy_definition sdwan_mesh_topology_policy_definition}
*/
export class MeshTopologyPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_mesh_topology_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MeshTopologyPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MeshTopologyPolicyDefinition to import
  * @param importFromId The id of the existing MeshTopologyPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mesh_topology_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MeshTopologyPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_mesh_topology_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mesh_topology_policy_definition sdwan_mesh_topology_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MeshTopologyPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: MeshTopologyPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_mesh_topology_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
    this._name = config.name;
    this._regions.internalValue = config.regions;
    this._vpnListId = config.vpnListId;
    this._vpnListVersion = config.vpnListVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // regions - computed: false, optional: false, required: true
  private _regions = new MeshTopologyPolicyDefinitionRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
  public putRegions(value: MeshTopologyPolicyDefinitionRegions[] | cdktf.IResolvable) {
    this._regions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpn_list_id - computed: false, optional: true, required: false
  private _vpnListId?: string; 
  public get vpnListId() {
    return this.getStringAttribute('vpn_list_id');
  }
  public set vpnListId(value: string) {
    this._vpnListId = value;
  }
  public resetVpnListId() {
    this._vpnListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnListIdInput() {
    return this._vpnListId;
  }

  // vpn_list_version - computed: false, optional: true, required: false
  private _vpnListVersion?: number; 
  public get vpnListVersion() {
    return this.getNumberAttribute('vpn_list_version');
  }
  public set vpnListVersion(value: number) {
    this._vpnListVersion = value;
  }
  public resetVpnListVersion() {
    this._vpnListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnListVersionInput() {
    return this._vpnListVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      regions: cdktf.listMapper(meshTopologyPolicyDefinitionRegionsToTerraform, false)(this._regions.internalValue),
      vpn_list_id: cdktf.stringToTerraform(this._vpnListId),
      vpn_list_version: cdktf.numberToTerraform(this._vpnListVersion),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(meshTopologyPolicyDefinitionRegionsToHclTerraform, false)(this._regions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MeshTopologyPolicyDefinitionRegionsList",
      },
      vpn_list_id: {
        value: cdktf.stringToHclTerraform(this._vpnListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_list_version: {
        value: cdktf.numberToHclTerraform(this._vpnListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
