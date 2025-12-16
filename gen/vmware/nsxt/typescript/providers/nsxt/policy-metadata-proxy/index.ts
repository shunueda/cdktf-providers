// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyMetadataProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Metadata proxy supported cryptographic protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#crypto_protocols PolicyMetadataProxy#crypto_protocols}
  */
  readonly cryptoProtocols?: string[];
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#description PolicyMetadataProxy#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#display_name PolicyMetadataProxy#display_name}
  */
  readonly displayName: string;
  /**
  * Policy path to Edge Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#edge_cluster_path PolicyMetadataProxy#edge_cluster_path}
  */
  readonly edgeClusterPath: string;
  /**
  * Flag to enable standby relocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#enable_standby_relocation PolicyMetadataProxy#enable_standby_relocation}
  */
  readonly enableStandbyRelocation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#id PolicyMetadataProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#nsx_id PolicyMetadataProxy#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Preferred Edge Paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#preferred_edge_paths PolicyMetadataProxy#preferred_edge_paths}
  */
  readonly preferredEdgePaths?: string[];
  /**
  * Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#secret PolicyMetadataProxy#secret}
  */
  readonly secret: string;
  /**
  * Server Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#server_address PolicyMetadataProxy#server_address}
  */
  readonly serverAddress: string;
  /**
  * Policy paths to Certificate Authority (CA) certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#server_certificates PolicyMetadataProxy#server_certificates}
  */
  readonly serverCertificates?: string[];
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#tag PolicyMetadataProxy#tag}
  */
  readonly tag?: PolicyMetadataProxyTag[] | cdktf.IResolvable;
}
export interface PolicyMetadataProxyTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#scope PolicyMetadataProxy#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#tag PolicyMetadataProxy#tag}
  */
  readonly tag?: string;
}

export function policyMetadataProxyTagToTerraform(struct?: PolicyMetadataProxyTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyMetadataProxyTagToHclTerraform(struct?: PolicyMetadataProxyTag | cdktf.IResolvable): any {
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

export class PolicyMetadataProxyTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyMetadataProxyTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyMetadataProxyTag | cdktf.IResolvable | undefined) {
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

export class PolicyMetadataProxyTagList extends cdktf.ComplexList {
  public internalValue? : PolicyMetadataProxyTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyMetadataProxyTagOutputReference {
    return new PolicyMetadataProxyTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy nsxt_policy_metadata_proxy}
*/
export class PolicyMetadataProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_metadata_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyMetadataProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyMetadataProxy to import
  * @param importFromId The id of the existing PolicyMetadataProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyMetadataProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_metadata_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_metadata_proxy nsxt_policy_metadata_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyMetadataProxyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyMetadataProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_metadata_proxy',
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
    this._cryptoProtocols = config.cryptoProtocols;
    this._description = config.description;
    this._displayName = config.displayName;
    this._edgeClusterPath = config.edgeClusterPath;
    this._enableStandbyRelocation = config.enableStandbyRelocation;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._preferredEdgePaths = config.preferredEdgePaths;
    this._secret = config.secret;
    this._serverAddress = config.serverAddress;
    this._serverCertificates = config.serverCertificates;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crypto_protocols - computed: true, optional: true, required: false
  private _cryptoProtocols?: string[]; 
  public get cryptoProtocols() {
    return this.getListAttribute('crypto_protocols');
  }
  public set cryptoProtocols(value: string[]) {
    this._cryptoProtocols = value;
  }
  public resetCryptoProtocols() {
    this._cryptoProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoProtocolsInput() {
    return this._cryptoProtocols;
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

  // edge_cluster_path - computed: false, optional: false, required: true
  private _edgeClusterPath?: string; 
  public get edgeClusterPath() {
    return this.getStringAttribute('edge_cluster_path');
  }
  public set edgeClusterPath(value: string) {
    this._edgeClusterPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterPathInput() {
    return this._edgeClusterPath;
  }

  // enable_standby_relocation - computed: false, optional: true, required: false
  private _enableStandbyRelocation?: boolean | cdktf.IResolvable; 
  public get enableStandbyRelocation() {
    return this.getBooleanAttribute('enable_standby_relocation');
  }
  public set enableStandbyRelocation(value: boolean | cdktf.IResolvable) {
    this._enableStandbyRelocation = value;
  }
  public resetEnableStandbyRelocation() {
    this._enableStandbyRelocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStandbyRelocationInput() {
    return this._enableStandbyRelocation;
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

  // preferred_edge_paths - computed: false, optional: true, required: false
  private _preferredEdgePaths?: string[]; 
  public get preferredEdgePaths() {
    return this.getListAttribute('preferred_edge_paths');
  }
  public set preferredEdgePaths(value: string[]) {
    this._preferredEdgePaths = value;
  }
  public resetPreferredEdgePaths() {
    this._preferredEdgePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredEdgePathsInput() {
    return this._preferredEdgePaths;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // server_certificates - computed: false, optional: true, required: false
  private _serverCertificates?: string[]; 
  public get serverCertificates() {
    return this.getListAttribute('server_certificates');
  }
  public set serverCertificates(value: string[]) {
    this._serverCertificates = value;
  }
  public resetServerCertificates() {
    this._serverCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificatesInput() {
    return this._serverCertificates;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyMetadataProxyTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyMetadataProxyTag[] | cdktf.IResolvable) {
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
      crypto_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cryptoProtocols),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      edge_cluster_path: cdktf.stringToTerraform(this._edgeClusterPath),
      enable_standby_relocation: cdktf.booleanToTerraform(this._enableStandbyRelocation),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      preferred_edge_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredEdgePaths),
      secret: cdktf.stringToTerraform(this._secret),
      server_address: cdktf.stringToTerraform(this._serverAddress),
      server_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverCertificates),
      tag: cdktf.listMapper(policyMetadataProxyTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crypto_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cryptoProtocols),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      edge_cluster_path: {
        value: cdktf.stringToHclTerraform(this._edgeClusterPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_standby_relocation: {
        value: cdktf.booleanToHclTerraform(this._enableStandbyRelocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      preferred_edge_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredEdgePaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_address: {
        value: cdktf.stringToHclTerraform(this._serverAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyMetadataProxyTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyMetadataProxyTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
