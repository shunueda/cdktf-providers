// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyTier1GatewayInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#description PolicyTier1GatewayInterface#description}
  */
  readonly description?: string;
  /**
  * Policy path for DHCP relay config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#dhcp_relay_path PolicyTier1GatewayInterface#dhcp_relay_path}
  */
  readonly dhcpRelayPath?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#display_name PolicyTier1GatewayInterface#display_name}
  */
  readonly displayName: string;
  /**
  * Policy path for tier1 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#gateway_path PolicyTier1GatewayInterface#gateway_path}
  */
  readonly gatewayPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#id PolicyTier1GatewayInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path of an IPv6 NDRA profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#ipv6_ndra_profile_path PolicyTier1GatewayInterface#ipv6_ndra_profile_path}
  */
  readonly ipv6NdraProfilePath?: string;
  /**
  * Maximum transmission unit specifies the size of the largest packet that a network protocol can transmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#mtu PolicyTier1GatewayInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#nsx_id PolicyTier1GatewayInterface#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Policy path for connected segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#segment_path PolicyTier1GatewayInterface#segment_path}
  */
  readonly segmentPath: string;
  /**
  * Path of the site the Tier1 edge cluster belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#site_path PolicyTier1GatewayInterface#site_path}
  */
  readonly sitePath?: string;
  /**
  * List of IP addresses and network prefixes for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#subnets PolicyTier1GatewayInterface#subnets}
  */
  readonly subnets: string[];
  /**
  * Unicast Reverse Path Forwarding mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#urpf_mode PolicyTier1GatewayInterface#urpf_mode}
  */
  readonly urpfMode?: string;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#context PolicyTier1GatewayInterface#context}
  */
  readonly context?: PolicyTier1GatewayInterfaceContext;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#tag PolicyTier1GatewayInterface#tag}
  */
  readonly tag?: PolicyTier1GatewayInterfaceTag[] | cdktf.IResolvable;
}
export interface PolicyTier1GatewayInterfaceContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#project_id PolicyTier1GatewayInterface#project_id}
  */
  readonly projectId: string;
}

export function policyTier1GatewayInterfaceContextToTerraform(struct?: PolicyTier1GatewayInterfaceContextOutputReference | PolicyTier1GatewayInterfaceContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyTier1GatewayInterfaceContextToHclTerraform(struct?: PolicyTier1GatewayInterfaceContextOutputReference | PolicyTier1GatewayInterfaceContext): any {
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

export class PolicyTier1GatewayInterfaceContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier1GatewayInterfaceContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier1GatewayInterfaceContext | undefined) {
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
export interface PolicyTier1GatewayInterfaceTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#scope PolicyTier1GatewayInterface#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#tag PolicyTier1GatewayInterface#tag}
  */
  readonly tag?: string;
}

export function policyTier1GatewayInterfaceTagToTerraform(struct?: PolicyTier1GatewayInterfaceTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyTier1GatewayInterfaceTagToHclTerraform(struct?: PolicyTier1GatewayInterfaceTag | cdktf.IResolvable): any {
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

export class PolicyTier1GatewayInterfaceTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier1GatewayInterfaceTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyTier1GatewayInterfaceTag | cdktf.IResolvable | undefined) {
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

export class PolicyTier1GatewayInterfaceTagList extends cdktf.ComplexList {
  public internalValue? : PolicyTier1GatewayInterfaceTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier1GatewayInterfaceTagOutputReference {
    return new PolicyTier1GatewayInterfaceTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface nsxt_policy_tier1_gateway_interface}
*/
export class PolicyTier1GatewayInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_tier1_gateway_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyTier1GatewayInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyTier1GatewayInterface to import
  * @param importFromId The id of the existing PolicyTier1GatewayInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyTier1GatewayInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_tier1_gateway_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier1_gateway_interface nsxt_policy_tier1_gateway_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyTier1GatewayInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyTier1GatewayInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_tier1_gateway_interface',
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
    this._dhcpRelayPath = config.dhcpRelayPath;
    this._displayName = config.displayName;
    this._gatewayPath = config.gatewayPath;
    this._id = config.id;
    this._ipv6NdraProfilePath = config.ipv6NdraProfilePath;
    this._mtu = config.mtu;
    this._nsxId = config.nsxId;
    this._segmentPath = config.segmentPath;
    this._sitePath = config.sitePath;
    this._subnets = config.subnets;
    this._urpfMode = config.urpfMode;
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

  // dhcp_relay_path - computed: false, optional: true, required: false
  private _dhcpRelayPath?: string; 
  public get dhcpRelayPath() {
    return this.getStringAttribute('dhcp_relay_path');
  }
  public set dhcpRelayPath(value: string) {
    this._dhcpRelayPath = value;
  }
  public resetDhcpRelayPath() {
    this._dhcpRelayPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayPathInput() {
    return this._dhcpRelayPath;
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

  // gateway_path - computed: false, optional: false, required: true
  private _gatewayPath?: string; 
  public get gatewayPath() {
    return this.getStringAttribute('gateway_path');
  }
  public set gatewayPath(value: string) {
    this._gatewayPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPathInput() {
    return this._gatewayPath;
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

  // ipv6_ndra_profile_path - computed: true, optional: true, required: false
  private _ipv6NdraProfilePath?: string; 
  public get ipv6NdraProfilePath() {
    return this.getStringAttribute('ipv6_ndra_profile_path');
  }
  public set ipv6NdraProfilePath(value: string) {
    this._ipv6NdraProfilePath = value;
  }
  public resetIpv6NdraProfilePath() {
    this._ipv6NdraProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NdraProfilePathInput() {
    return this._ipv6NdraProfilePath;
  }

  // locale_service_id - computed: true, optional: false, required: false
  public get localeServiceId() {
    return this.getStringAttribute('locale_service_id');
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // segment_path - computed: false, optional: false, required: true
  private _segmentPath?: string; 
  public get segmentPath() {
    return this.getStringAttribute('segment_path');
  }
  public set segmentPath(value: string) {
    this._segmentPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPathInput() {
    return this._segmentPath;
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

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // urpf_mode - computed: false, optional: true, required: false
  private _urpfMode?: string; 
  public get urpfMode() {
    return this.getStringAttribute('urpf_mode');
  }
  public set urpfMode(value: string) {
    this._urpfMode = value;
  }
  public resetUrpfMode() {
    this._urpfMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urpfModeInput() {
    return this._urpfMode;
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicyTier1GatewayInterfaceContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyTier1GatewayInterfaceContext) {
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
  private _tag = new PolicyTier1GatewayInterfaceTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyTier1GatewayInterfaceTag[] | cdktf.IResolvable) {
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
      dhcp_relay_path: cdktf.stringToTerraform(this._dhcpRelayPath),
      display_name: cdktf.stringToTerraform(this._displayName),
      gateway_path: cdktf.stringToTerraform(this._gatewayPath),
      id: cdktf.stringToTerraform(this._id),
      ipv6_ndra_profile_path: cdktf.stringToTerraform(this._ipv6NdraProfilePath),
      mtu: cdktf.numberToTerraform(this._mtu),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      segment_path: cdktf.stringToTerraform(this._segmentPath),
      site_path: cdktf.stringToTerraform(this._sitePath),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
      urpf_mode: cdktf.stringToTerraform(this._urpfMode),
      context: policyTier1GatewayInterfaceContextToTerraform(this._context.internalValue),
      tag: cdktf.listMapper(policyTier1GatewayInterfaceTagToTerraform, true)(this._tag.internalValue),
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
      dhcp_relay_path: {
        value: cdktf.stringToHclTerraform(this._dhcpRelayPath),
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
      gateway_path: {
        value: cdktf.stringToHclTerraform(this._gatewayPath),
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
      ipv6_ndra_profile_path: {
        value: cdktf.stringToHclTerraform(this._ipv6NdraProfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      segment_path: {
        value: cdktf.stringToHclTerraform(this._segmentPath),
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
      subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      urpf_mode: {
        value: cdktf.stringToHclTerraform(this._urpfMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: policyTier1GatewayInterfaceContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier1GatewayInterfaceContextList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyTier1GatewayInterfaceTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyTier1GatewayInterfaceTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
