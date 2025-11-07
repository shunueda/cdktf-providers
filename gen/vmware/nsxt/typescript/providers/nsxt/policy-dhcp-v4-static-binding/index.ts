// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyDhcpV4StaticBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#description PolicyDhcpV4StaticBinding#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#display_name PolicyDhcpV4StaticBinding#display_name}
  */
  readonly displayName: string;
  /**
  * When not specified, gateway address is auto-assigned from segment configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#gateway_address PolicyDhcpV4StaticBinding#gateway_address}
  */
  readonly gatewayAddress?: string;
  /**
  * Hostname to assign to the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#hostname PolicyDhcpV4StaticBinding#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#id PolicyDhcpV4StaticBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP assigned to host. The IP address must belong to the subnetconfigured on segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#ip_address PolicyDhcpV4StaticBinding#ip_address}
  */
  readonly ipAddress: string;
  /**
  * DHCP lease time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#lease_time PolicyDhcpV4StaticBinding#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * MAC address of the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#mac_address PolicyDhcpV4StaticBinding#mac_address}
  */
  readonly macAddress: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#nsx_id PolicyDhcpV4StaticBinding#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * segment path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#segment_path PolicyDhcpV4StaticBinding#segment_path}
  */
  readonly segmentPath: string;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#context PolicyDhcpV4StaticBinding#context}
  */
  readonly context?: PolicyDhcpV4StaticBindingContext;
  /**
  * dhcp_generic_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#dhcp_generic_option PolicyDhcpV4StaticBinding#dhcp_generic_option}
  */
  readonly dhcpGenericOption?: PolicyDhcpV4StaticBindingDhcpGenericOption[] | cdktf.IResolvable;
  /**
  * dhcp_option_121 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#dhcp_option_121 PolicyDhcpV4StaticBinding#dhcp_option_121}
  */
  readonly dhcpOption121?: PolicyDhcpV4StaticBindingDhcpOption121[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#tag PolicyDhcpV4StaticBinding#tag}
  */
  readonly tag?: PolicyDhcpV4StaticBindingTag[] | cdktf.IResolvable;
}
export interface PolicyDhcpV4StaticBindingContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#project_id PolicyDhcpV4StaticBinding#project_id}
  */
  readonly projectId: string;
}

export function policyDhcpV4StaticBindingContextToTerraform(struct?: PolicyDhcpV4StaticBindingContextOutputReference | PolicyDhcpV4StaticBindingContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyDhcpV4StaticBindingContextToHclTerraform(struct?: PolicyDhcpV4StaticBindingContextOutputReference | PolicyDhcpV4StaticBindingContext): any {
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

export class PolicyDhcpV4StaticBindingContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyDhcpV4StaticBindingContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDhcpV4StaticBindingContext | undefined) {
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
export interface PolicyDhcpV4StaticBindingDhcpGenericOption {
  /**
  * DHCP option code, [0-255]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#code PolicyDhcpV4StaticBinding#code}
  */
  readonly code: number;
  /**
  * DHCP option values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#values PolicyDhcpV4StaticBinding#values}
  */
  readonly values: string[];
}

export function policyDhcpV4StaticBindingDhcpGenericOptionToTerraform(struct?: PolicyDhcpV4StaticBindingDhcpGenericOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function policyDhcpV4StaticBindingDhcpGenericOptionToHclTerraform(struct?: PolicyDhcpV4StaticBindingDhcpGenericOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDhcpV4StaticBindingDhcpGenericOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDhcpV4StaticBindingDhcpGenericOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDhcpV4StaticBindingDhcpGenericOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._values = value.values;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class PolicyDhcpV4StaticBindingDhcpGenericOptionList extends cdktf.ComplexList {
  public internalValue? : PolicyDhcpV4StaticBindingDhcpGenericOption[] | cdktf.IResolvable

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
  public get(index: number): PolicyDhcpV4StaticBindingDhcpGenericOptionOutputReference {
    return new PolicyDhcpV4StaticBindingDhcpGenericOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDhcpV4StaticBindingDhcpOption121 {
  /**
  * Destination in cidr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#network PolicyDhcpV4StaticBinding#network}
  */
  readonly network: string;
  /**
  * Next hop IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#next_hop PolicyDhcpV4StaticBinding#next_hop}
  */
  readonly nextHop: string;
}

export function policyDhcpV4StaticBindingDhcpOption121ToTerraform(struct?: PolicyDhcpV4StaticBindingDhcpOption121 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
  }
}


export function policyDhcpV4StaticBindingDhcpOption121ToHclTerraform(struct?: PolicyDhcpV4StaticBindingDhcpOption121 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDhcpV4StaticBindingDhcpOption121OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDhcpV4StaticBindingDhcpOption121 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDhcpV4StaticBindingDhcpOption121 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._nextHop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._nextHop = value.nextHop;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }
}

export class PolicyDhcpV4StaticBindingDhcpOption121List extends cdktf.ComplexList {
  public internalValue? : PolicyDhcpV4StaticBindingDhcpOption121[] | cdktf.IResolvable

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
  public get(index: number): PolicyDhcpV4StaticBindingDhcpOption121OutputReference {
    return new PolicyDhcpV4StaticBindingDhcpOption121OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyDhcpV4StaticBindingTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#scope PolicyDhcpV4StaticBinding#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#tag PolicyDhcpV4StaticBinding#tag}
  */
  readonly tag?: string;
}

export function policyDhcpV4StaticBindingTagToTerraform(struct?: PolicyDhcpV4StaticBindingTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyDhcpV4StaticBindingTagToHclTerraform(struct?: PolicyDhcpV4StaticBindingTag | cdktf.IResolvable): any {
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

export class PolicyDhcpV4StaticBindingTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDhcpV4StaticBindingTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyDhcpV4StaticBindingTag | cdktf.IResolvable | undefined) {
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

export class PolicyDhcpV4StaticBindingTagList extends cdktf.ComplexList {
  public internalValue? : PolicyDhcpV4StaticBindingTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyDhcpV4StaticBindingTagOutputReference {
    return new PolicyDhcpV4StaticBindingTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding nsxt_policy_dhcp_v4_static_binding}
*/
export class PolicyDhcpV4StaticBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_dhcp_v4_static_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyDhcpV4StaticBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyDhcpV4StaticBinding to import
  * @param importFromId The id of the existing PolicyDhcpV4StaticBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyDhcpV4StaticBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_dhcp_v4_static_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_dhcp_v4_static_binding nsxt_policy_dhcp_v4_static_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyDhcpV4StaticBindingConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyDhcpV4StaticBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_dhcp_v4_static_binding',
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
    this._gatewayAddress = config.gatewayAddress;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._leaseTime = config.leaseTime;
    this._macAddress = config.macAddress;
    this._nsxId = config.nsxId;
    this._segmentPath = config.segmentPath;
    this._context.internalValue = config.context;
    this._dhcpGenericOption.internalValue = config.dhcpGenericOption;
    this._dhcpOption121.internalValue = config.dhcpOption121;
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

  // gateway_address - computed: false, optional: true, required: false
  private _gatewayAddress?: string; 
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }
  public set gatewayAddress(value: string) {
    this._gatewayAddress = value;
  }
  public resetGatewayAddress() {
    this._gatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAddressInput() {
    return this._gatewayAddress;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // mac_address - computed: false, optional: false, required: true
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
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

  // context - computed: false, optional: true, required: false
  private _context = new PolicyDhcpV4StaticBindingContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyDhcpV4StaticBindingContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // dhcp_generic_option - computed: false, optional: true, required: false
  private _dhcpGenericOption = new PolicyDhcpV4StaticBindingDhcpGenericOptionList(this, "dhcp_generic_option", false);
  public get dhcpGenericOption() {
    return this._dhcpGenericOption;
  }
  public putDhcpGenericOption(value: PolicyDhcpV4StaticBindingDhcpGenericOption[] | cdktf.IResolvable) {
    this._dhcpGenericOption.internalValue = value;
  }
  public resetDhcpGenericOption() {
    this._dhcpGenericOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpGenericOptionInput() {
    return this._dhcpGenericOption.internalValue;
  }

  // dhcp_option_121 - computed: false, optional: true, required: false
  private _dhcpOption121 = new PolicyDhcpV4StaticBindingDhcpOption121List(this, "dhcp_option_121", false);
  public get dhcpOption121() {
    return this._dhcpOption121;
  }
  public putDhcpOption121(value: PolicyDhcpV4StaticBindingDhcpOption121[] | cdktf.IResolvable) {
    this._dhcpOption121.internalValue = value;
  }
  public resetDhcpOption121() {
    this._dhcpOption121.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption121Input() {
    return this._dhcpOption121.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyDhcpV4StaticBindingTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyDhcpV4StaticBindingTag[] | cdktf.IResolvable) {
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
      gateway_address: cdktf.stringToTerraform(this._gatewayAddress),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      lease_time: cdktf.numberToTerraform(this._leaseTime),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      segment_path: cdktf.stringToTerraform(this._segmentPath),
      context: policyDhcpV4StaticBindingContextToTerraform(this._context.internalValue),
      dhcp_generic_option: cdktf.listMapper(policyDhcpV4StaticBindingDhcpGenericOptionToTerraform, true)(this._dhcpGenericOption.internalValue),
      dhcp_option_121: cdktf.listMapper(policyDhcpV4StaticBindingDhcpOption121ToTerraform, true)(this._dhcpOption121.internalValue),
      tag: cdktf.listMapper(policyDhcpV4StaticBindingTagToTerraform, true)(this._tag.internalValue),
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
      gateway_address: {
        value: cdktf.stringToHclTerraform(this._gatewayAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease_time: {
        value: cdktf.numberToHclTerraform(this._leaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
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
      segment_path: {
        value: cdktf.stringToHclTerraform(this._segmentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: policyDhcpV4StaticBindingContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyDhcpV4StaticBindingContextList",
      },
      dhcp_generic_option: {
        value: cdktf.listMapperHcl(policyDhcpV4StaticBindingDhcpGenericOptionToHclTerraform, true)(this._dhcpGenericOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyDhcpV4StaticBindingDhcpGenericOptionList",
      },
      dhcp_option_121: {
        value: cdktf.listMapperHcl(policyDhcpV4StaticBindingDhcpOption121ToHclTerraform, true)(this._dhcpOption121.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyDhcpV4StaticBindingDhcpOption121List",
      },
      tag: {
        value: cdktf.listMapperHcl(policyDhcpV4StaticBindingTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyDhcpV4StaticBindingTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
