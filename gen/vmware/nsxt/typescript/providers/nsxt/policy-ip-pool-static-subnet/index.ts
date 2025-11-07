// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyIpPoolStaticSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network address and prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#cidr PolicyIpPoolStaticSubnet#cidr}
  */
  readonly cidr: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#description PolicyIpPoolStaticSubnet#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#display_name PolicyIpPoolStaticSubnet#display_name}
  */
  readonly displayName: string;
  /**
  * The collection of up to 3 DNS servers for the subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#dns_nameservers PolicyIpPoolStaticSubnet#dns_nameservers}
  */
  readonly dnsNameservers?: string[];
  /**
  * DNS suffix for the nameserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#dns_suffix PolicyIpPoolStaticSubnet#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * The default gateway address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#gateway PolicyIpPoolStaticSubnet#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#id PolicyIpPoolStaticSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#nsx_id PolicyIpPoolStaticSubnet#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Policy path to the IP Pool for this Subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#pool_path PolicyIpPoolStaticSubnet#pool_path}
  */
  readonly poolPath: string;
  /**
  * allocation_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#allocation_range PolicyIpPoolStaticSubnet#allocation_range}
  */
  readonly allocationRange: PolicyIpPoolStaticSubnetAllocationRange[] | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#context PolicyIpPoolStaticSubnet#context}
  */
  readonly context?: PolicyIpPoolStaticSubnetContext;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#tag PolicyIpPoolStaticSubnet#tag}
  */
  readonly tag?: PolicyIpPoolStaticSubnetTag[] | cdktf.IResolvable;
}
export interface PolicyIpPoolStaticSubnetAllocationRange {
  /**
  * The end IP Address for the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#end PolicyIpPoolStaticSubnet#end}
  */
  readonly end: string;
  /**
  * The start IP Address for the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#start PolicyIpPoolStaticSubnet#start}
  */
  readonly start: string;
}

export function policyIpPoolStaticSubnetAllocationRangeToTerraform(struct?: PolicyIpPoolStaticSubnetAllocationRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function policyIpPoolStaticSubnetAllocationRangeToHclTerraform(struct?: PolicyIpPoolStaticSubnetAllocationRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyIpPoolStaticSubnetAllocationRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIpPoolStaticSubnetAllocationRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIpPoolStaticSubnetAllocationRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class PolicyIpPoolStaticSubnetAllocationRangeList extends cdktf.ComplexList {
  public internalValue? : PolicyIpPoolStaticSubnetAllocationRange[] | cdktf.IResolvable

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
  public get(index: number): PolicyIpPoolStaticSubnetAllocationRangeOutputReference {
    return new PolicyIpPoolStaticSubnetAllocationRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIpPoolStaticSubnetContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#project_id PolicyIpPoolStaticSubnet#project_id}
  */
  readonly projectId: string;
}

export function policyIpPoolStaticSubnetContextToTerraform(struct?: PolicyIpPoolStaticSubnetContextOutputReference | PolicyIpPoolStaticSubnetContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyIpPoolStaticSubnetContextToHclTerraform(struct?: PolicyIpPoolStaticSubnetContextOutputReference | PolicyIpPoolStaticSubnetContext): any {
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

export class PolicyIpPoolStaticSubnetContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyIpPoolStaticSubnetContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIpPoolStaticSubnetContext | undefined) {
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
export interface PolicyIpPoolStaticSubnetTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#scope PolicyIpPoolStaticSubnet#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#tag PolicyIpPoolStaticSubnet#tag}
  */
  readonly tag?: string;
}

export function policyIpPoolStaticSubnetTagToTerraform(struct?: PolicyIpPoolStaticSubnetTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyIpPoolStaticSubnetTagToHclTerraform(struct?: PolicyIpPoolStaticSubnetTag | cdktf.IResolvable): any {
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

export class PolicyIpPoolStaticSubnetTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIpPoolStaticSubnetTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIpPoolStaticSubnetTag | cdktf.IResolvable | undefined) {
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

export class PolicyIpPoolStaticSubnetTagList extends cdktf.ComplexList {
  public internalValue? : PolicyIpPoolStaticSubnetTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyIpPoolStaticSubnetTagOutputReference {
    return new PolicyIpPoolStaticSubnetTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet nsxt_policy_ip_pool_static_subnet}
*/
export class PolicyIpPoolStaticSubnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_ip_pool_static_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyIpPoolStaticSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyIpPoolStaticSubnet to import
  * @param importFromId The id of the existing PolicyIpPoolStaticSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyIpPoolStaticSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_ip_pool_static_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ip_pool_static_subnet nsxt_policy_ip_pool_static_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyIpPoolStaticSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyIpPoolStaticSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_ip_pool_static_subnet',
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
    this._cidr = config.cidr;
    this._description = config.description;
    this._displayName = config.displayName;
    this._dnsNameservers = config.dnsNameservers;
    this._dnsSuffix = config.dnsSuffix;
    this._gateway = config.gateway;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._poolPath = config.poolPath;
    this._allocationRange.internalValue = config.allocationRange;
    this._context.internalValue = config.context;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
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

  // dns_nameservers - computed: false, optional: true, required: false
  private _dnsNameservers?: string[]; 
  public get dnsNameservers() {
    return this.getListAttribute('dns_nameservers');
  }
  public set dnsNameservers(value: string[]) {
    this._dnsNameservers = value;
  }
  public resetDnsNameservers() {
    this._dnsNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameserversInput() {
    return this._dnsNameservers;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // pool_path - computed: false, optional: false, required: true
  private _poolPath?: string; 
  public get poolPath() {
    return this.getStringAttribute('pool_path');
  }
  public set poolPath(value: string) {
    this._poolPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolPathInput() {
    return this._poolPath;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // allocation_range - computed: false, optional: false, required: true
  private _allocationRange = new PolicyIpPoolStaticSubnetAllocationRangeList(this, "allocation_range", false);
  public get allocationRange() {
    return this._allocationRange;
  }
  public putAllocationRange(value: PolicyIpPoolStaticSubnetAllocationRange[] | cdktf.IResolvable) {
    this._allocationRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationRangeInput() {
    return this._allocationRange.internalValue;
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicyIpPoolStaticSubnetContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyIpPoolStaticSubnetContext) {
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
  private _tag = new PolicyIpPoolStaticSubnetTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyIpPoolStaticSubnetTag[] | cdktf.IResolvable) {
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
      cidr: cdktf.stringToTerraform(this._cidr),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      dns_nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsNameservers),
      dns_suffix: cdktf.stringToTerraform(this._dnsSuffix),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      pool_path: cdktf.stringToTerraform(this._poolPath),
      allocation_range: cdktf.listMapper(policyIpPoolStaticSubnetAllocationRangeToTerraform, true)(this._allocationRange.internalValue),
      context: policyIpPoolStaticSubnetContextToTerraform(this._context.internalValue),
      tag: cdktf.listMapper(policyIpPoolStaticSubnetTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
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
      dns_nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsNameservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_suffix: {
        value: cdktf.stringToHclTerraform(this._dnsSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      pool_path: {
        value: cdktf.stringToHclTerraform(this._poolPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allocation_range: {
        value: cdktf.listMapperHcl(policyIpPoolStaticSubnetAllocationRangeToHclTerraform, true)(this._allocationRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyIpPoolStaticSubnetAllocationRangeList",
      },
      context: {
        value: policyIpPoolStaticSubnetContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyIpPoolStaticSubnetContextList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyIpPoolStaticSubnetTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIpPoolStaticSubnetTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
