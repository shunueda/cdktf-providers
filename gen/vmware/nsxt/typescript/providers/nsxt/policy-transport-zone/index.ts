// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyTransportZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#description PolicyTransportZone#description}
  */
  readonly description?: string;
  /**
  * Display name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#display_name PolicyTransportZone#display_name}
  */
  readonly displayName?: string;
  /**
  * ID of the enforcement point this Transport Zone belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#enforcement_point PolicyTransportZone#enforcement_point}
  */
  readonly enforcementPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#id PolicyTransportZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether the transport zone is default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#is_default PolicyTransportZone#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#nsx_id PolicyTransportZone#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Path to the site this Transport Zone belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#site_path PolicyTransportZone#site_path}
  */
  readonly sitePath?: string;
  /**
  * Type of Transport Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#transport_type PolicyTransportZone#transport_type}
  */
  readonly transportType: string;
  /**
  * Names of the switching uplink teaming policies that are supported by this transport zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#uplink_teaming_policy_names PolicyTransportZone#uplink_teaming_policy_names}
  */
  readonly uplinkTeamingPolicyNames?: string[];
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#tag PolicyTransportZone#tag}
  */
  readonly tag?: PolicyTransportZoneTag[] | cdktf.IResolvable;
}
export interface PolicyTransportZoneTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#scope PolicyTransportZone#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#tag PolicyTransportZone#tag}
  */
  readonly tag?: string;
}

export function policyTransportZoneTagToTerraform(struct?: PolicyTransportZoneTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyTransportZoneTagToHclTerraform(struct?: PolicyTransportZoneTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTransportZoneTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTransportZoneTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTransportZoneTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyTransportZoneTagList extends cdktf.ComplexList {
  public internalValue? : PolicyTransportZoneTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyTransportZoneTagOutputReference {
    return new PolicyTransportZoneTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone nsxt_policy_transport_zone}
*/
export class PolicyTransportZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_transport_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyTransportZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyTransportZone to import
  * @param importFromId The id of the existing PolicyTransportZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyTransportZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_transport_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_transport_zone nsxt_policy_transport_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyTransportZoneConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyTransportZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_transport_zone',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
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
    this._enforcementPoint = config.enforcementPoint;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._nsxId = config.nsxId;
    this._sitePath = config.sitePath;
    this._transportType = config.transportType;
    this._uplinkTeamingPolicyNames = config.uplinkTeamingPolicyNames;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enforcement_point - computed: true, optional: true, required: false
  private _enforcementPoint?: string; 
  public get enforcementPoint() {
    return this.getStringAttribute('enforcement_point');
  }
  public set enforcementPoint(value: string) {
    this._enforcementPoint = value;
  }
  public resetEnforcementPoint() {
    this._enforcementPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementPointInput() {
    return this._enforcementPoint;
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

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // realized_id - computed: true, optional: false, required: false
  public get realizedId() {
    return this.getStringAttribute('realized_id');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // site_path - computed: false, optional: true, required: false
  private _sitePath?: string; 
  public get sitePath() {
    return this.getStringAttribute('site_path');
  }
  public set sitePath(value: string) {
    this._sitePath = value;
  }
  public resetSitePath() {
    this._sitePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePathInput() {
    return this._sitePath;
  }

  // transport_type - computed: false, optional: false, required: true
  private _transportType?: string; 
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }
  public set transportType(value: string) {
    this._transportType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTypeInput() {
    return this._transportType;
  }

  // uplink_teaming_policy_names - computed: false, optional: true, required: false
  private _uplinkTeamingPolicyNames?: string[]; 
  public get uplinkTeamingPolicyNames() {
    return this.getListAttribute('uplink_teaming_policy_names');
  }
  public set uplinkTeamingPolicyNames(value: string[]) {
    this._uplinkTeamingPolicyNames = value;
  }
  public resetUplinkTeamingPolicyNames() {
    this._uplinkTeamingPolicyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkTeamingPolicyNamesInput() {
    return this._uplinkTeamingPolicyNames;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyTransportZoneTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyTransportZoneTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enforcement_point: cdktf.stringToTerraform(this._enforcementPoint),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      site_path: cdktf.stringToTerraform(this._sitePath),
      transport_type: cdktf.stringToTerraform(this._transportType),
      uplink_teaming_policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uplinkTeamingPolicyNames),
      tag: cdktf.listMapper(policyTransportZoneTagToTerraform, true)(this._tag.internalValue),
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
      enforcement_point: {
        value: cdktf.stringToHclTerraform(this._enforcementPoint),
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
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_path: {
        value: cdktf.stringToHclTerraform(this._sitePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_type: {
        value: cdktf.stringToHclTerraform(this._transportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uplink_teaming_policy_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uplinkTeamingPolicyNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyTransportZoneTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyTransportZoneTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
