// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyEdgeHighAvailabilityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#bfd_allowed_hops PolicyEdgeHighAvailabilityProfile#bfd_allowed_hops}
  */
  readonly bfdAllowedHops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#bfd_declare_dead_multiple PolicyEdgeHighAvailabilityProfile#bfd_declare_dead_multiple}
  */
  readonly bfdDeclareDeadMultiple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#bfd_probe_interval PolicyEdgeHighAvailabilityProfile#bfd_probe_interval}
  */
  readonly bfdProbeInterval?: number;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#description PolicyEdgeHighAvailabilityProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#display_name PolicyEdgeHighAvailabilityProfile#display_name}
  */
  readonly displayName: string;
  /**
  * ID of the enforcement point this Host Transport Node belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#enforcement_point PolicyEdgeHighAvailabilityProfile#enforcement_point}
  */
  readonly enforcementPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#id PolicyEdgeHighAvailabilityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#nsx_id PolicyEdgeHighAvailabilityProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Path to the site this Host Transport Node belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#site_path PolicyEdgeHighAvailabilityProfile#site_path}
  */
  readonly sitePath?: string;
  /**
  * standby_relocation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#standby_relocation_config PolicyEdgeHighAvailabilityProfile#standby_relocation_config}
  */
  readonly standbyRelocationConfig?: PolicyEdgeHighAvailabilityProfileStandbyRelocationConfig;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#tag PolicyEdgeHighAvailabilityProfile#tag}
  */
  readonly tag?: PolicyEdgeHighAvailabilityProfileTag[] | cdktf.IResolvable;
}
export interface PolicyEdgeHighAvailabilityProfileStandbyRelocationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#standby_relocation_threshold PolicyEdgeHighAvailabilityProfile#standby_relocation_threshold}
  */
  readonly standbyRelocationThreshold: number;
}

export function policyEdgeHighAvailabilityProfileStandbyRelocationConfigToTerraform(struct?: PolicyEdgeHighAvailabilityProfileStandbyRelocationConfigOutputReference | PolicyEdgeHighAvailabilityProfileStandbyRelocationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    standby_relocation_threshold: cdktf.numberToTerraform(struct!.standbyRelocationThreshold),
  }
}


export function policyEdgeHighAvailabilityProfileStandbyRelocationConfigToHclTerraform(struct?: PolicyEdgeHighAvailabilityProfileStandbyRelocationConfigOutputReference | PolicyEdgeHighAvailabilityProfileStandbyRelocationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    standby_relocation_threshold: {
      value: cdktf.numberToHclTerraform(struct!.standbyRelocationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeHighAvailabilityProfileStandbyRelocationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyEdgeHighAvailabilityProfileStandbyRelocationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._standbyRelocationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyRelocationThreshold = this._standbyRelocationThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeHighAvailabilityProfileStandbyRelocationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._standbyRelocationThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._standbyRelocationThreshold = value.standbyRelocationThreshold;
    }
  }

  // standby_relocation_threshold - computed: false, optional: false, required: true
  private _standbyRelocationThreshold?: number; 
  public get standbyRelocationThreshold() {
    return this.getNumberAttribute('standby_relocation_threshold');
  }
  public set standbyRelocationThreshold(value: number) {
    this._standbyRelocationThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyRelocationThresholdInput() {
    return this._standbyRelocationThreshold;
  }
}
export interface PolicyEdgeHighAvailabilityProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#scope PolicyEdgeHighAvailabilityProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#tag PolicyEdgeHighAvailabilityProfile#tag}
  */
  readonly tag?: string;
}

export function policyEdgeHighAvailabilityProfileTagToTerraform(struct?: PolicyEdgeHighAvailabilityProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyEdgeHighAvailabilityProfileTagToHclTerraform(struct?: PolicyEdgeHighAvailabilityProfileTag | cdktf.IResolvable): any {
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

export class PolicyEdgeHighAvailabilityProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyEdgeHighAvailabilityProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyEdgeHighAvailabilityProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicyEdgeHighAvailabilityProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyEdgeHighAvailabilityProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyEdgeHighAvailabilityProfileTagOutputReference {
    return new PolicyEdgeHighAvailabilityProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile nsxt_policy_edge_high_availability_profile}
*/
export class PolicyEdgeHighAvailabilityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_edge_high_availability_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyEdgeHighAvailabilityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyEdgeHighAvailabilityProfile to import
  * @param importFromId The id of the existing PolicyEdgeHighAvailabilityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyEdgeHighAvailabilityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_edge_high_availability_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_edge_high_availability_profile nsxt_policy_edge_high_availability_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyEdgeHighAvailabilityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyEdgeHighAvailabilityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_edge_high_availability_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bfdAllowedHops = config.bfdAllowedHops;
    this._bfdDeclareDeadMultiple = config.bfdDeclareDeadMultiple;
    this._bfdProbeInterval = config.bfdProbeInterval;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enforcementPoint = config.enforcementPoint;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._sitePath = config.sitePath;
    this._standbyRelocationConfig.internalValue = config.standbyRelocationConfig;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bfd_allowed_hops - computed: false, optional: true, required: false
  private _bfdAllowedHops?: number; 
  public get bfdAllowedHops() {
    return this.getNumberAttribute('bfd_allowed_hops');
  }
  public set bfdAllowedHops(value: number) {
    this._bfdAllowedHops = value;
  }
  public resetBfdAllowedHops() {
    this._bfdAllowedHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdAllowedHopsInput() {
    return this._bfdAllowedHops;
  }

  // bfd_declare_dead_multiple - computed: false, optional: true, required: false
  private _bfdDeclareDeadMultiple?: number; 
  public get bfdDeclareDeadMultiple() {
    return this.getNumberAttribute('bfd_declare_dead_multiple');
  }
  public set bfdDeclareDeadMultiple(value: number) {
    this._bfdDeclareDeadMultiple = value;
  }
  public resetBfdDeclareDeadMultiple() {
    this._bfdDeclareDeadMultiple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDeclareDeadMultipleInput() {
    return this._bfdDeclareDeadMultiple;
  }

  // bfd_probe_interval - computed: false, optional: true, required: false
  private _bfdProbeInterval?: number; 
  public get bfdProbeInterval() {
    return this.getNumberAttribute('bfd_probe_interval');
  }
  public set bfdProbeInterval(value: number) {
    this._bfdProbeInterval = value;
  }
  public resetBfdProbeInterval() {
    this._bfdProbeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdProbeIntervalInput() {
    return this._bfdProbeInterval;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enforcement_point - computed: false, optional: true, required: false
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

  // standby_relocation_config - computed: false, optional: true, required: false
  private _standbyRelocationConfig = new PolicyEdgeHighAvailabilityProfileStandbyRelocationConfigOutputReference(this, "standby_relocation_config");
  public get standbyRelocationConfig() {
    return this._standbyRelocationConfig;
  }
  public putStandbyRelocationConfig(value: PolicyEdgeHighAvailabilityProfileStandbyRelocationConfig) {
    this._standbyRelocationConfig.internalValue = value;
  }
  public resetStandbyRelocationConfig() {
    this._standbyRelocationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyRelocationConfigInput() {
    return this._standbyRelocationConfig.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyEdgeHighAvailabilityProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyEdgeHighAvailabilityProfileTag[] | cdktf.IResolvable) {
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
      bfd_allowed_hops: cdktf.numberToTerraform(this._bfdAllowedHops),
      bfd_declare_dead_multiple: cdktf.numberToTerraform(this._bfdDeclareDeadMultiple),
      bfd_probe_interval: cdktf.numberToTerraform(this._bfdProbeInterval),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enforcement_point: cdktf.stringToTerraform(this._enforcementPoint),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      site_path: cdktf.stringToTerraform(this._sitePath),
      standby_relocation_config: policyEdgeHighAvailabilityProfileStandbyRelocationConfigToTerraform(this._standbyRelocationConfig.internalValue),
      tag: cdktf.listMapper(policyEdgeHighAvailabilityProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bfd_allowed_hops: {
        value: cdktf.numberToHclTerraform(this._bfdAllowedHops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_declare_dead_multiple: {
        value: cdktf.numberToHclTerraform(this._bfdDeclareDeadMultiple),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_probe_interval: {
        value: cdktf.numberToHclTerraform(this._bfdProbeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      standby_relocation_config: {
        value: policyEdgeHighAvailabilityProfileStandbyRelocationConfigToHclTerraform(this._standbyRelocationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyEdgeHighAvailabilityProfileStandbyRelocationConfigList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyEdgeHighAvailabilityProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyEdgeHighAvailabilityProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
