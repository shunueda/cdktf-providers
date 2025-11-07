// https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtVpcSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#category NsxtVpcSecurityPolicy#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#comments NsxtVpcSecurityPolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#connectivity_preference NsxtVpcSecurityPolicy#connectivity_preference}
  */
  readonly connectivityPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#connectivity_strategy NsxtVpcSecurityPolicy#connectivity_strategy}
  */
  readonly connectivityStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#description NsxtVpcSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#display_name NsxtVpcSecurityPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#id NsxtVpcSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#locked NsxtVpcSecurityPolicy#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#logging_enabled NsxtVpcSecurityPolicy#logging_enabled}
  */
  readonly loggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#nsx_id NsxtVpcSecurityPolicy#nsx_id}
  */
  readonly nsxId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#resource_type NsxtVpcSecurityPolicy#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#scheduler_path NsxtVpcSecurityPolicy#scheduler_path}
  */
  readonly schedulerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#scope NsxtVpcSecurityPolicy#scope}
  */
  readonly scope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#sequence_number NsxtVpcSecurityPolicy#sequence_number}
  */
  readonly sequenceNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#stateful NsxtVpcSecurityPolicy#stateful}
  */
  readonly stateful?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#tcp_strict NsxtVpcSecurityPolicy#tcp_strict}
  */
  readonly tcpStrict?: boolean | cdktf.IResolvable;
  /**
  * application_connectivity_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#application_connectivity_strategy NsxtVpcSecurityPolicy#application_connectivity_strategy}
  */
  readonly applicationConnectivityStrategy?: NsxtVpcSecurityPolicyApplicationConnectivityStrategy[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#tags NsxtVpcSecurityPolicy#tags}
  */
  readonly tags?: NsxtVpcSecurityPolicyTags[] | cdktf.IResolvable;
}
export interface NsxtVpcSecurityPolicyApplicationConnectivityStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#application_connectivity_strategy NsxtVpcSecurityPolicy#application_connectivity_strategy}
  */
  readonly applicationConnectivityStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#logging_enabled NsxtVpcSecurityPolicy#logging_enabled}
  */
  readonly loggingEnabled?: boolean | cdktf.IResolvable;
}

export function nsxtVpcSecurityPolicyApplicationConnectivityStrategyToTerraform(struct?: NsxtVpcSecurityPolicyApplicationConnectivityStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_connectivity_strategy: cdktf.stringToTerraform(struct!.applicationConnectivityStrategy),
    logging_enabled: cdktf.booleanToTerraform(struct!.loggingEnabled),
  }
}


export function nsxtVpcSecurityPolicyApplicationConnectivityStrategyToHclTerraform(struct?: NsxtVpcSecurityPolicyApplicationConnectivityStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_connectivity_strategy: {
      value: cdktf.stringToHclTerraform(struct!.applicationConnectivityStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.loggingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcSecurityPolicyApplicationConnectivityStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtVpcSecurityPolicyApplicationConnectivityStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationConnectivityStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationConnectivityStrategy = this._applicationConnectivityStrategy;
    }
    if (this._loggingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingEnabled = this._loggingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSecurityPolicyApplicationConnectivityStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationConnectivityStrategy = undefined;
      this._loggingEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationConnectivityStrategy = value.applicationConnectivityStrategy;
      this._loggingEnabled = value.loggingEnabled;
    }
  }

  // application_connectivity_strategy - computed: false, optional: false, required: true
  private _applicationConnectivityStrategy?: string; 
  public get applicationConnectivityStrategy() {
    return this.getStringAttribute('application_connectivity_strategy');
  }
  public set applicationConnectivityStrategy(value: string) {
    this._applicationConnectivityStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConnectivityStrategyInput() {
    return this._applicationConnectivityStrategy;
  }

  // logging_enabled - computed: false, optional: true, required: false
  private _loggingEnabled?: boolean | cdktf.IResolvable; 
  public get loggingEnabled() {
    return this.getBooleanAttribute('logging_enabled');
  }
  public set loggingEnabled(value: boolean | cdktf.IResolvable) {
    this._loggingEnabled = value;
  }
  public resetLoggingEnabled() {
    this._loggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingEnabledInput() {
    return this._loggingEnabled;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class NsxtVpcSecurityPolicyApplicationConnectivityStrategyList extends cdktf.ComplexList {
  public internalValue? : NsxtVpcSecurityPolicyApplicationConnectivityStrategy[] | cdktf.IResolvable

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
  public get(index: number): NsxtVpcSecurityPolicyApplicationConnectivityStrategyOutputReference {
    return new NsxtVpcSecurityPolicyApplicationConnectivityStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtVpcSecurityPolicyTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#scope NsxtVpcSecurityPolicy#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#tag NsxtVpcSecurityPolicy#tag}
  */
  readonly tag?: string;
}

export function nsxtVpcSecurityPolicyTagsToTerraform(struct?: NsxtVpcSecurityPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function nsxtVpcSecurityPolicyTagsToHclTerraform(struct?: NsxtVpcSecurityPolicyTags | cdktf.IResolvable): any {
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

export class NsxtVpcSecurityPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtVpcSecurityPolicyTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NsxtVpcSecurityPolicyTags | cdktf.IResolvable | undefined) {
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
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

export class NsxtVpcSecurityPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : NsxtVpcSecurityPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): NsxtVpcSecurityPolicyTagsOutputReference {
    return new NsxtVpcSecurityPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy nsxt_vpc_security_policy}
*/
export class NsxtVpcSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_vpc_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtVpcSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtVpcSecurityPolicy to import
  * @param importFromId The id of the existing NsxtVpcSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtVpcSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_vpc_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_security_policy nsxt_vpc_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtVpcSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtVpcSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_vpc_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'nsxt-virtual-private-cloud',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._comments = config.comments;
    this._connectivityPreference = config.connectivityPreference;
    this._connectivityStrategy = config.connectivityStrategy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._locked = config.locked;
    this._loggingEnabled = config.loggingEnabled;
    this._nsxId = config.nsxId;
    this._resourceType = config.resourceType;
    this._schedulerPath = config.schedulerPath;
    this._scope = config.scope;
    this._sequenceNumber = config.sequenceNumber;
    this._stateful = config.stateful;
    this._tcpStrict = config.tcpStrict;
    this._applicationConnectivityStrategy.internalValue = config.applicationConnectivityStrategy;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('_revision');
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // connectivity_preference - computed: false, optional: true, required: false
  private _connectivityPreference?: string; 
  public get connectivityPreference() {
    return this.getStringAttribute('connectivity_preference');
  }
  public set connectivityPreference(value: string) {
    this._connectivityPreference = value;
  }
  public resetConnectivityPreference() {
    this._connectivityPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityPreferenceInput() {
    return this._connectivityPreference;
  }

  // connectivity_strategy - computed: false, optional: true, required: false
  private _connectivityStrategy?: string; 
  public get connectivityStrategy() {
    return this.getStringAttribute('connectivity_strategy');
  }
  public set connectivityStrategy(value: string) {
    this._connectivityStrategy = value;
  }
  public resetConnectivityStrategy() {
    this._connectivityStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityStrategyInput() {
    return this._connectivityStrategy;
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

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // logging_enabled - computed: false, optional: true, required: false
  private _loggingEnabled?: boolean | cdktf.IResolvable; 
  public get loggingEnabled() {
    return this.getBooleanAttribute('logging_enabled');
  }
  public set loggingEnabled(value: boolean | cdktf.IResolvable) {
    this._loggingEnabled = value;
  }
  public resetLoggingEnabled() {
    this._loggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingEnabledInput() {
    return this._loggingEnabled;
  }

  // nsx_id - computed: false, optional: false, required: true
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // scheduler_path - computed: false, optional: true, required: false
  private _schedulerPath?: string; 
  public get schedulerPath() {
    return this.getStringAttribute('scheduler_path');
  }
  public set schedulerPath(value: string) {
    this._schedulerPath = value;
  }
  public resetSchedulerPath() {
    this._schedulerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerPathInput() {
    return this._schedulerPath;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // sequence_number - computed: false, optional: false, required: true
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }

  // stateful - computed: true, optional: true, required: false
  private _stateful?: boolean | cdktf.IResolvable; 
  public get stateful() {
    return this.getBooleanAttribute('stateful');
  }
  public set stateful(value: boolean | cdktf.IResolvable) {
    this._stateful = value;
  }
  public resetStateful() {
    this._stateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful;
  }

  // tcp_strict - computed: true, optional: true, required: false
  private _tcpStrict?: boolean | cdktf.IResolvable; 
  public get tcpStrict() {
    return this.getBooleanAttribute('tcp_strict');
  }
  public set tcpStrict(value: boolean | cdktf.IResolvable) {
    this._tcpStrict = value;
  }
  public resetTcpStrict() {
    this._tcpStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpStrictInput() {
    return this._tcpStrict;
  }

  // application_connectivity_strategy - computed: false, optional: true, required: false
  private _applicationConnectivityStrategy = new NsxtVpcSecurityPolicyApplicationConnectivityStrategyList(this, "application_connectivity_strategy", false);
  public get applicationConnectivityStrategy() {
    return this._applicationConnectivityStrategy;
  }
  public putApplicationConnectivityStrategy(value: NsxtVpcSecurityPolicyApplicationConnectivityStrategy[] | cdktf.IResolvable) {
    this._applicationConnectivityStrategy.internalValue = value;
  }
  public resetApplicationConnectivityStrategy() {
    this._applicationConnectivityStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConnectivityStrategyInput() {
    return this._applicationConnectivityStrategy.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NsxtVpcSecurityPolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NsxtVpcSecurityPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      comments: cdktf.stringToTerraform(this._comments),
      connectivity_preference: cdktf.stringToTerraform(this._connectivityPreference),
      connectivity_strategy: cdktf.stringToTerraform(this._connectivityStrategy),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      locked: cdktf.booleanToTerraform(this._locked),
      logging_enabled: cdktf.booleanToTerraform(this._loggingEnabled),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      scheduler_path: cdktf.stringToTerraform(this._schedulerPath),
      scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scope),
      sequence_number: cdktf.numberToTerraform(this._sequenceNumber),
      stateful: cdktf.booleanToTerraform(this._stateful),
      tcp_strict: cdktf.booleanToTerraform(this._tcpStrict),
      application_connectivity_strategy: cdktf.listMapper(nsxtVpcSecurityPolicyApplicationConnectivityStrategyToTerraform, true)(this._applicationConnectivityStrategy.internalValue),
      tags: cdktf.listMapper(nsxtVpcSecurityPolicyTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectivity_preference: {
        value: cdktf.stringToHclTerraform(this._connectivityPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectivity_strategy: {
        value: cdktf.stringToHclTerraform(this._connectivityStrategy),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._loggingEnabled),
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
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler_path: {
        value: cdktf.stringToHclTerraform(this._schedulerPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scope),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sequence_number: {
        value: cdktf.numberToHclTerraform(this._sequenceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stateful: {
        value: cdktf.booleanToHclTerraform(this._stateful),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_strict: {
        value: cdktf.booleanToHclTerraform(this._tcpStrict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_connectivity_strategy: {
        value: cdktf.listMapperHcl(nsxtVpcSecurityPolicyApplicationConnectivityStrategyToHclTerraform, true)(this._applicationConnectivityStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtVpcSecurityPolicyApplicationConnectivityStrategyList",
      },
      tags: {
        value: cdktf.listMapperHcl(nsxtVpcSecurityPolicyTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtVpcSecurityPolicyTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
