// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyIpsecVpnLocalEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy path referencing site certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#certificate_path PolicyIpsecVpnLocalEndpoint#certificate_path}
  */
  readonly certificatePath?: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#description PolicyIpsecVpnLocalEndpoint#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#display_name PolicyIpsecVpnLocalEndpoint#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#id PolicyIpsecVpnLocalEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#local_address PolicyIpsecVpnLocalEndpoint#local_address}
  */
  readonly localAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#local_id PolicyIpsecVpnLocalEndpoint#local_id}
  */
  readonly localId?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#nsx_id PolicyIpsecVpnLocalEndpoint#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Policy path for IPSec VPN service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#service_path PolicyIpsecVpnLocalEndpoint#service_path}
  */
  readonly servicePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#trust_ca_paths PolicyIpsecVpnLocalEndpoint#trust_ca_paths}
  */
  readonly trustCaPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#trust_crl_paths PolicyIpsecVpnLocalEndpoint#trust_crl_paths}
  */
  readonly trustCrlPaths?: string[];
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#tag PolicyIpsecVpnLocalEndpoint#tag}
  */
  readonly tag?: PolicyIpsecVpnLocalEndpointTag[] | cdktf.IResolvable;
}
export interface PolicyIpsecVpnLocalEndpointTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#scope PolicyIpsecVpnLocalEndpoint#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#tag PolicyIpsecVpnLocalEndpoint#tag}
  */
  readonly tag?: string;
}

export function policyIpsecVpnLocalEndpointTagToTerraform(struct?: PolicyIpsecVpnLocalEndpointTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyIpsecVpnLocalEndpointTagToHclTerraform(struct?: PolicyIpsecVpnLocalEndpointTag | cdktf.IResolvable): any {
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

export class PolicyIpsecVpnLocalEndpointTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIpsecVpnLocalEndpointTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIpsecVpnLocalEndpointTag | cdktf.IResolvable | undefined) {
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

export class PolicyIpsecVpnLocalEndpointTagList extends cdktf.ComplexList {
  public internalValue? : PolicyIpsecVpnLocalEndpointTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyIpsecVpnLocalEndpointTagOutputReference {
    return new PolicyIpsecVpnLocalEndpointTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint nsxt_policy_ipsec_vpn_local_endpoint}
*/
export class PolicyIpsecVpnLocalEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_ipsec_vpn_local_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyIpsecVpnLocalEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyIpsecVpnLocalEndpoint to import
  * @param importFromId The id of the existing PolicyIpsecVpnLocalEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyIpsecVpnLocalEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_ipsec_vpn_local_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_local_endpoint nsxt_policy_ipsec_vpn_local_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyIpsecVpnLocalEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyIpsecVpnLocalEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_ipsec_vpn_local_endpoint',
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
    this._certificatePath = config.certificatePath;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._localAddress = config.localAddress;
    this._localId = config.localId;
    this._nsxId = config.nsxId;
    this._servicePath = config.servicePath;
    this._trustCaPaths = config.trustCaPaths;
    this._trustCrlPaths = config.trustCrlPaths;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_path - computed: false, optional: true, required: false
  private _certificatePath?: string; 
  public get certificatePath() {
    return this.getStringAttribute('certificate_path');
  }
  public set certificatePath(value: string) {
    this._certificatePath = value;
  }
  public resetCertificatePath() {
    this._certificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePathInput() {
    return this._certificatePath;
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

  // local_address - computed: false, optional: false, required: true
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
  }

  // local_id - computed: true, optional: true, required: false
  private _localId?: string; 
  public get localId() {
    return this.getStringAttribute('local_id');
  }
  public set localId(value: string) {
    this._localId = value;
  }
  public resetLocalId() {
    this._localId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdInput() {
    return this._localId;
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

  // service_path - computed: false, optional: false, required: true
  private _servicePath?: string; 
  public get servicePath() {
    return this.getStringAttribute('service_path');
  }
  public set servicePath(value: string) {
    this._servicePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePathInput() {
    return this._servicePath;
  }

  // trust_ca_paths - computed: false, optional: true, required: false
  private _trustCaPaths?: string[]; 
  public get trustCaPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('trust_ca_paths'));
  }
  public set trustCaPaths(value: string[]) {
    this._trustCaPaths = value;
  }
  public resetTrustCaPaths() {
    this._trustCaPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustCaPathsInput() {
    return this._trustCaPaths;
  }

  // trust_crl_paths - computed: false, optional: true, required: false
  private _trustCrlPaths?: string[]; 
  public get trustCrlPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('trust_crl_paths'));
  }
  public set trustCrlPaths(value: string[]) {
    this._trustCrlPaths = value;
  }
  public resetTrustCrlPaths() {
    this._trustCrlPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustCrlPathsInput() {
    return this._trustCrlPaths;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyIpsecVpnLocalEndpointTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyIpsecVpnLocalEndpointTag[] | cdktf.IResolvable) {
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
      certificate_path: cdktf.stringToTerraform(this._certificatePath),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      local_address: cdktf.stringToTerraform(this._localAddress),
      local_id: cdktf.stringToTerraform(this._localId),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      service_path: cdktf.stringToTerraform(this._servicePath),
      trust_ca_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trustCaPaths),
      trust_crl_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trustCrlPaths),
      tag: cdktf.listMapper(policyIpsecVpnLocalEndpointTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_path: {
        value: cdktf.stringToHclTerraform(this._certificatePath),
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
      local_address: {
        value: cdktf.stringToHclTerraform(this._localAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_id: {
        value: cdktf.stringToHclTerraform(this._localId),
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
      service_path: {
        value: cdktf.stringToHclTerraform(this._servicePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ca_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trustCaPaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trust_crl_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trustCrlPaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyIpsecVpnLocalEndpointTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIpsecVpnLocalEndpointTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
