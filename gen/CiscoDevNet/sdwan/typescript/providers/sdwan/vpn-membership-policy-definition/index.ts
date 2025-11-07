// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_membership_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnMembershipPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_membership_policy_definition#description VpnMembershipPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_membership_policy_definition#name VpnMembershipPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_membership_policy_definition#sites VpnMembershipPolicyDefinition#sites}
  */
  readonly sites: VpnMembershipPolicyDefinitionSites[] | cdktf.IResolvable;
}
export interface VpnMembershipPolicyDefinitionSites {
  /**
  * Site list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_membership_policy_definition#site_list_id VpnMembershipPolicyDefinition#site_list_id}
  */
  readonly siteListId?: string;
  /**
  * Site list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_membership_policy_definition#site_list_version VpnMembershipPolicyDefinition#site_list_version}
  */
  readonly siteListVersion?: number;
  /**
  * VPN list IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_membership_policy_definition#vpn_list_ids VpnMembershipPolicyDefinition#vpn_list_ids}
  */
  readonly vpnListIds?: string[];
  /**
  * VPN list versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_membership_policy_definition#vpn_list_versions VpnMembershipPolicyDefinition#vpn_list_versions}
  */
  readonly vpnListVersions?: string[];
}

export function vpnMembershipPolicyDefinitionSitesToTerraform(struct?: VpnMembershipPolicyDefinitionSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_list_id: cdktf.stringToTerraform(struct!.siteListId),
    site_list_version: cdktf.numberToTerraform(struct!.siteListVersion),
    vpn_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpnListIds),
    vpn_list_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpnListVersions),
  }
}


export function vpnMembershipPolicyDefinitionSitesToHclTerraform(struct?: VpnMembershipPolicyDefinitionSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_list_id: {
      value: cdktf.stringToHclTerraform(struct!.siteListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_list_version: {
      value: cdktf.numberToHclTerraform(struct!.siteListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VpnMembershipPolicyDefinitionSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnMembershipPolicyDefinitionSites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteListId = this._siteListId;
    }
    if (this._siteListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteListVersion = this._siteListVersion;
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

  public set internalValue(value: VpnMembershipPolicyDefinitionSites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._siteListId = undefined;
      this._siteListVersion = undefined;
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
      this._siteListId = value.siteListId;
      this._siteListVersion = value.siteListVersion;
      this._vpnListIds = value.vpnListIds;
      this._vpnListVersions = value.vpnListVersions;
    }
  }

  // site_list_id - computed: false, optional: true, required: false
  private _siteListId?: string; 
  public get siteListId() {
    return this.getStringAttribute('site_list_id');
  }
  public set siteListId(value: string) {
    this._siteListId = value;
  }
  public resetSiteListId() {
    this._siteListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteListIdInput() {
    return this._siteListId;
  }

  // site_list_version - computed: false, optional: true, required: false
  private _siteListVersion?: number; 
  public get siteListVersion() {
    return this.getNumberAttribute('site_list_version');
  }
  public set siteListVersion(value: number) {
    this._siteListVersion = value;
  }
  public resetSiteListVersion() {
    this._siteListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteListVersionInput() {
    return this._siteListVersion;
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

export class VpnMembershipPolicyDefinitionSitesList extends cdktf.ComplexList {
  public internalValue? : VpnMembershipPolicyDefinitionSites[] | cdktf.IResolvable

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
  public get(index: number): VpnMembershipPolicyDefinitionSitesOutputReference {
    return new VpnMembershipPolicyDefinitionSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_membership_policy_definition sdwan_vpn_membership_policy_definition}
*/
export class VpnMembershipPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_vpn_membership_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnMembershipPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnMembershipPolicyDefinition to import
  * @param importFromId The id of the existing VpnMembershipPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_membership_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnMembershipPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_vpn_membership_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_membership_policy_definition sdwan_vpn_membership_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnMembershipPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: VpnMembershipPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_vpn_membership_policy_definition',
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
    this._sites.internalValue = config.sites;
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

  // sites - computed: false, optional: false, required: true
  private _sites = new VpnMembershipPolicyDefinitionSitesList(this, "sites", false);
  public get sites() {
    return this._sites;
  }
  public putSites(value: VpnMembershipPolicyDefinitionSites[] | cdktf.IResolvable) {
    this._sites.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sitesInput() {
    return this._sites.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      sites: cdktf.listMapper(vpnMembershipPolicyDefinitionSitesToTerraform, false)(this._sites.internalValue),
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
      sites: {
        value: cdktf.listMapperHcl(vpnMembershipPolicyDefinitionSitesToHclTerraform, false)(this._sites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnMembershipPolicyDefinitionSitesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
