// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CentralizedPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of policy definitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#definitions CentralizedPolicy#definitions}
  */
  readonly definitions?: CentralizedPolicyDefinitions[] | cdktf.IResolvable;
  /**
  * The description of the centralized policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#description CentralizedPolicy#description}
  */
  readonly description: string;
  /**
  * The name of the centralized policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#name CentralizedPolicy#name}
  */
  readonly name: string;
}
export interface CentralizedPolicyDefinitionsEntries {
  /**
  * Direction
  *   - Choices: `service`, `tunnel`, `all`, `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#direction CentralizedPolicy#direction}
  */
  readonly direction?: string;
  /**
  * List of region IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#region_ids CentralizedPolicy#region_ids}
  */
  readonly regionIds?: string[];
  /**
  * List of region list IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#region_list_ids CentralizedPolicy#region_list_ids}
  */
  readonly regionListIds?: string[];
  /**
  * List of region list versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#region_list_versions CentralizedPolicy#region_list_versions}
  */
  readonly regionListVersions?: string[];
  /**
  * List of site list IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#site_list_ids CentralizedPolicy#site_list_ids}
  */
  readonly siteListIds?: string[];
  /**
  * List of site list versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#site_list_versions CentralizedPolicy#site_list_versions}
  */
  readonly siteListVersions?: string[];
  /**
  * List of VPN list IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#vpn_list_ids CentralizedPolicy#vpn_list_ids}
  */
  readonly vpnListIds?: string[];
  /**
  * List of VPN list versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#vpn_list_versions CentralizedPolicy#vpn_list_versions}
  */
  readonly vpnListVersions?: string[];
}

export function centralizedPolicyDefinitionsEntriesToTerraform(struct?: CentralizedPolicyDefinitionsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    region_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regionIds),
    region_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regionListIds),
    region_list_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regionListVersions),
    site_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteListIds),
    site_list_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteListVersions),
    vpn_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpnListIds),
    vpn_list_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpnListVersions),
  }
}


export function centralizedPolicyDefinitionsEntriesToHclTerraform(struct?: CentralizedPolicyDefinitionsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regionIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    region_list_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regionListIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    region_list_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regionListVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    vpn_list_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpnListIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpn_list_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpnListVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CentralizedPolicyDefinitionsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CentralizedPolicyDefinitionsEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._regionIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionIds = this._regionIds;
    }
    if (this._regionListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionListIds = this._regionListIds;
    }
    if (this._regionListVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionListVersions = this._regionListVersions;
    }
    if (this._siteListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteListIds = this._siteListIds;
    }
    if (this._siteListVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteListVersions = this._siteListVersions;
    }
    if (this._vpnListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnListIds = this._vpnListIds;
    }
    if (this._vpnListVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnListVersions = this._vpnListVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CentralizedPolicyDefinitionsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._regionIds = undefined;
      this._regionListIds = undefined;
      this._regionListVersions = undefined;
      this._siteListIds = undefined;
      this._siteListVersions = undefined;
      this._vpnListIds = undefined;
      this._vpnListVersions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._regionIds = value.regionIds;
      this._regionListIds = value.regionListIds;
      this._regionListVersions = value.regionListVersions;
      this._siteListIds = value.siteListIds;
      this._siteListVersions = value.siteListVersions;
      this._vpnListIds = value.vpnListIds;
      this._vpnListVersions = value.vpnListVersions;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // region_ids - computed: false, optional: true, required: false
  private _regionIds?: string[]; 
  public get regionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('region_ids'));
  }
  public set regionIds(value: string[]) {
    this._regionIds = value;
  }
  public resetRegionIds() {
    this._regionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdsInput() {
    return this._regionIds;
  }

  // region_list_ids - computed: false, optional: true, required: false
  private _regionListIds?: string[]; 
  public get regionListIds() {
    return cdktf.Fn.tolist(this.getListAttribute('region_list_ids'));
  }
  public set regionListIds(value: string[]) {
    this._regionListIds = value;
  }
  public resetRegionListIds() {
    this._regionListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionListIdsInput() {
    return this._regionListIds;
  }

  // region_list_versions - computed: false, optional: true, required: false
  private _regionListVersions?: string[]; 
  public get regionListVersions() {
    return this.getListAttribute('region_list_versions');
  }
  public set regionListVersions(value: string[]) {
    this._regionListVersions = value;
  }
  public resetRegionListVersions() {
    this._regionListVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionListVersionsInput() {
    return this._regionListVersions;
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

  // vpn_list_ids - computed: false, optional: true, required: false
  private _vpnListIds?: string[]; 
  public get vpnListIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpn_list_ids'));
  }
  public set vpnListIds(value: string[]) {
    this._vpnListIds = value;
  }
  public resetVpnListIds() {
    this._vpnListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnListIdsInput() {
    return this._vpnListIds;
  }

  // vpn_list_versions - computed: false, optional: true, required: false
  private _vpnListVersions?: string[]; 
  public get vpnListVersions() {
    return this.getListAttribute('vpn_list_versions');
  }
  public set vpnListVersions(value: string[]) {
    this._vpnListVersions = value;
  }
  public resetVpnListVersions() {
    this._vpnListVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnListVersionsInput() {
    return this._vpnListVersions;
  }
}

export class CentralizedPolicyDefinitionsEntriesList extends cdktf.ComplexList {
  public internalValue? : CentralizedPolicyDefinitionsEntries[] | cdktf.IResolvable

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
  public get(index: number): CentralizedPolicyDefinitionsEntriesOutputReference {
    return new CentralizedPolicyDefinitionsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CentralizedPolicyDefinitions {
  /**
  * List of entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#entries CentralizedPolicy#entries}
  */
  readonly entries?: CentralizedPolicyDefinitionsEntries[] | cdktf.IResolvable;
  /**
  * Policy definition ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#id CentralizedPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Policy definition type
  *   - Choices: `hubAndSpoke`, `mesh`, `control`, `vpnMembershipGroup`, `appRoute`, `cflowd`, `data`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#type CentralizedPolicy#type}
  */
  readonly type: string;
  /**
  * Policy definition version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#version CentralizedPolicy#version}
  */
  readonly version?: number;
}

export function centralizedPolicyDefinitionsToTerraform(struct?: CentralizedPolicyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entries: cdktf.listMapper(centralizedPolicyDefinitionsEntriesToTerraform, false)(struct!.entries),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function centralizedPolicyDefinitionsToHclTerraform(struct?: CentralizedPolicyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entries: {
      value: cdktf.listMapperHcl(centralizedPolicyDefinitionsEntriesToHclTerraform, false)(struct!.entries),
      isBlock: true,
      type: "set",
      storageClassType: "CentralizedPolicyDefinitionsEntriesList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CentralizedPolicyDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CentralizedPolicyDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CentralizedPolicyDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entries.internalValue = undefined;
      this._id = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entries.internalValue = value.entries;
      this._id = value.id;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new CentralizedPolicyDefinitionsEntriesList(this, "entries", true);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: CentralizedPolicyDefinitionsEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class CentralizedPolicyDefinitionsList extends cdktf.ComplexList {
  public internalValue? : CentralizedPolicyDefinitions[] | cdktf.IResolvable

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
  public get(index: number): CentralizedPolicyDefinitionsOutputReference {
    return new CentralizedPolicyDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy sdwan_centralized_policy}
*/
export class CentralizedPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_centralized_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CentralizedPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CentralizedPolicy to import
  * @param importFromId The id of the existing CentralizedPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CentralizedPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_centralized_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/centralized_policy sdwan_centralized_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CentralizedPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CentralizedPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_centralized_policy',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definitions.internalValue = config.definitions;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definitions - computed: false, optional: true, required: false
  private _definitions = new CentralizedPolicyDefinitionsList(this, "definitions", true);
  public get definitions() {
    return this._definitions;
  }
  public putDefinitions(value: CentralizedPolicyDefinitions[] | cdktf.IResolvable) {
    this._definitions.internalValue = value;
  }
  public resetDefinitions() {
    this._definitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionsInput() {
    return this._definitions.internalValue;
  }

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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definitions: cdktf.listMapper(centralizedPolicyDefinitionsToTerraform, false)(this._definitions.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      definitions: {
        value: cdktf.listMapperHcl(centralizedPolicyDefinitionsToHclTerraform, false)(this._definitions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CentralizedPolicyDefinitionsList",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
