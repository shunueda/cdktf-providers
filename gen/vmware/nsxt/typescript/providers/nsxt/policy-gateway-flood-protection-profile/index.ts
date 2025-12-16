// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyGatewayFloodProtectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#description PolicyGatewayFloodProtectionProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#display_name PolicyGatewayFloodProtectionProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Active ICMP connections limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#icmp_active_flow_limit PolicyGatewayFloodProtectionProfile#icmp_active_flow_limit}
  */
  readonly icmpActiveFlowLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#id PolicyGatewayFloodProtectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum limit of active NAT connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#nat_active_conn_limit PolicyGatewayFloodProtectionProfile#nat_active_conn_limit}
  */
  readonly natActiveConnLimit?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#nsx_id PolicyGatewayFloodProtectionProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Timeout after first TN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#other_active_conn_limit PolicyGatewayFloodProtectionProfile#other_active_conn_limit}
  */
  readonly otherActiveConnLimit?: number;
  /**
  * Active half open TCP connections limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#tcp_half_open_conn_limit PolicyGatewayFloodProtectionProfile#tcp_half_open_conn_limit}
  */
  readonly tcpHalfOpenConnLimit?: number;
  /**
  * Active UDP connections limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#udp_active_flow_limit PolicyGatewayFloodProtectionProfile#udp_active_flow_limit}
  */
  readonly udpActiveFlowLimit?: number;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#context PolicyGatewayFloodProtectionProfile#context}
  */
  readonly context?: PolicyGatewayFloodProtectionProfileContext;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#tag PolicyGatewayFloodProtectionProfile#tag}
  */
  readonly tag?: PolicyGatewayFloodProtectionProfileTag[] | cdktf.IResolvable;
}
export interface PolicyGatewayFloodProtectionProfileContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#project_id PolicyGatewayFloodProtectionProfile#project_id}
  */
  readonly projectId: string;
}

export function policyGatewayFloodProtectionProfileContextToTerraform(struct?: PolicyGatewayFloodProtectionProfileContextOutputReference | PolicyGatewayFloodProtectionProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyGatewayFloodProtectionProfileContextToHclTerraform(struct?: PolicyGatewayFloodProtectionProfileContextOutputReference | PolicyGatewayFloodProtectionProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGatewayFloodProtectionProfileContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyGatewayFloodProtectionProfileContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGatewayFloodProtectionProfileContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
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
}
export interface PolicyGatewayFloodProtectionProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#scope PolicyGatewayFloodProtectionProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#tag PolicyGatewayFloodProtectionProfile#tag}
  */
  readonly tag?: string;
}

export function policyGatewayFloodProtectionProfileTagToTerraform(struct?: PolicyGatewayFloodProtectionProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyGatewayFloodProtectionProfileTagToHclTerraform(struct?: PolicyGatewayFloodProtectionProfileTag | cdktf.IResolvable): any {
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

export class PolicyGatewayFloodProtectionProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyGatewayFloodProtectionProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyGatewayFloodProtectionProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicyGatewayFloodProtectionProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyGatewayFloodProtectionProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyGatewayFloodProtectionProfileTagOutputReference {
    return new PolicyGatewayFloodProtectionProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile nsxt_policy_gateway_flood_protection_profile}
*/
export class PolicyGatewayFloodProtectionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_gateway_flood_protection_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyGatewayFloodProtectionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyGatewayFloodProtectionProfile to import
  * @param importFromId The id of the existing PolicyGatewayFloodProtectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyGatewayFloodProtectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_gateway_flood_protection_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_flood_protection_profile nsxt_policy_gateway_flood_protection_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyGatewayFloodProtectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyGatewayFloodProtectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_gateway_flood_protection_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
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
    this._icmpActiveFlowLimit = config.icmpActiveFlowLimit;
    this._id = config.id;
    this._natActiveConnLimit = config.natActiveConnLimit;
    this._nsxId = config.nsxId;
    this._otherActiveConnLimit = config.otherActiveConnLimit;
    this._tcpHalfOpenConnLimit = config.tcpHalfOpenConnLimit;
    this._udpActiveFlowLimit = config.udpActiveFlowLimit;
    this._context.internalValue = config.context;
    this._tag.internalValue = config.tag;
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

  // icmp_active_flow_limit - computed: false, optional: true, required: false
  private _icmpActiveFlowLimit?: number; 
  public get icmpActiveFlowLimit() {
    return this.getNumberAttribute('icmp_active_flow_limit');
  }
  public set icmpActiveFlowLimit(value: number) {
    this._icmpActiveFlowLimit = value;
  }
  public resetIcmpActiveFlowLimit() {
    this._icmpActiveFlowLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpActiveFlowLimitInput() {
    return this._icmpActiveFlowLimit;
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

  // nat_active_conn_limit - computed: true, optional: true, required: false
  private _natActiveConnLimit?: number; 
  public get natActiveConnLimit() {
    return this.getNumberAttribute('nat_active_conn_limit');
  }
  public set natActiveConnLimit(value: number) {
    this._natActiveConnLimit = value;
  }
  public resetNatActiveConnLimit() {
    this._natActiveConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natActiveConnLimitInput() {
    return this._natActiveConnLimit;
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

  // other_active_conn_limit - computed: false, optional: true, required: false
  private _otherActiveConnLimit?: number; 
  public get otherActiveConnLimit() {
    return this.getNumberAttribute('other_active_conn_limit');
  }
  public set otherActiveConnLimit(value: number) {
    this._otherActiveConnLimit = value;
  }
  public resetOtherActiveConnLimit() {
    this._otherActiveConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherActiveConnLimitInput() {
    return this._otherActiveConnLimit;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // tcp_half_open_conn_limit - computed: false, optional: true, required: false
  private _tcpHalfOpenConnLimit?: number; 
  public get tcpHalfOpenConnLimit() {
    return this.getNumberAttribute('tcp_half_open_conn_limit');
  }
  public set tcpHalfOpenConnLimit(value: number) {
    this._tcpHalfOpenConnLimit = value;
  }
  public resetTcpHalfOpenConnLimit() {
    this._tcpHalfOpenConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfOpenConnLimitInput() {
    return this._tcpHalfOpenConnLimit;
  }

  // udp_active_flow_limit - computed: false, optional: true, required: false
  private _udpActiveFlowLimit?: number; 
  public get udpActiveFlowLimit() {
    return this.getNumberAttribute('udp_active_flow_limit');
  }
  public set udpActiveFlowLimit(value: number) {
    this._udpActiveFlowLimit = value;
  }
  public resetUdpActiveFlowLimit() {
    this._udpActiveFlowLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpActiveFlowLimitInput() {
    return this._udpActiveFlowLimit;
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicyGatewayFloodProtectionProfileContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyGatewayFloodProtectionProfileContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyGatewayFloodProtectionProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyGatewayFloodProtectionProfileTag[] | cdktf.IResolvable) {
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
      icmp_active_flow_limit: cdktf.numberToTerraform(this._icmpActiveFlowLimit),
      id: cdktf.stringToTerraform(this._id),
      nat_active_conn_limit: cdktf.numberToTerraform(this._natActiveConnLimit),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      other_active_conn_limit: cdktf.numberToTerraform(this._otherActiveConnLimit),
      tcp_half_open_conn_limit: cdktf.numberToTerraform(this._tcpHalfOpenConnLimit),
      udp_active_flow_limit: cdktf.numberToTerraform(this._udpActiveFlowLimit),
      context: policyGatewayFloodProtectionProfileContextToTerraform(this._context.internalValue),
      tag: cdktf.listMapper(policyGatewayFloodProtectionProfileTagToTerraform, true)(this._tag.internalValue),
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
      icmp_active_flow_limit: {
        value: cdktf.numberToHclTerraform(this._icmpActiveFlowLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_active_conn_limit: {
        value: cdktf.numberToHclTerraform(this._natActiveConnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_active_conn_limit: {
        value: cdktf.numberToHclTerraform(this._otherActiveConnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_half_open_conn_limit: {
        value: cdktf.numberToHclTerraform(this._tcpHalfOpenConnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_active_flow_limit: {
        value: cdktf.numberToHclTerraform(this._udpActiveFlowLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      context: {
        value: policyGatewayFloodProtectionProfileContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyGatewayFloodProtectionProfileContextList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyGatewayFloodProtectionProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyGatewayFloodProtectionProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
