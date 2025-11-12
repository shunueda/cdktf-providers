// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer#cx_profile_name ClusterPeer#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * When true, ONTAP automatically generates a passphrase to authenticate cluster peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer#generate_passphrase ClusterPeer#generate_passphrase}
  */
  readonly generatePassphrase?: boolean | cdktf.IResolvable;
  /**
  * Name of the peering relationship or name of the remote peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer#name ClusterPeer#name}
  */
  readonly name?: string;
  /**
  * User generated passphrase for use in authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer#passphrase ClusterPeer#passphrase}
  */
  readonly passphrase?: string;
  /**
  * SVM peering applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer#peer_applications ClusterPeer#peer_applications}
  */
  readonly peerApplications?: string[];
  /**
  * Peer connection profile name, to be accepted from peer side to make the status OK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer#peer_cx_profile_name ClusterPeer#peer_cx_profile_name}
  */
  readonly peerCxProfileName: string;
  /**
  * Remote cluster details for cluster peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer#remote ClusterPeer#remote}
  */
  readonly remote: ClusterPeerRemote;
  /**
  * Source cluster details for cluster peer from remote cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer#source_details ClusterPeer#source_details}
  */
  readonly sourceDetails: ClusterPeerSourceDetails;
}
export interface ClusterPeerRemote {
  /**
  * list of the remote ip addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer#ip_addresses ClusterPeer#ip_addresses}
  */
  readonly ipAddresses: string[];
}

export function clusterPeerRemoteToTerraform(struct?: ClusterPeerRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
  }
}


export function clusterPeerRemoteToHclTerraform(struct?: ClusterPeerRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterPeerRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterPeerRemote | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPeerRemote | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddresses = value.ipAddresses;
    }
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }
}
export interface ClusterPeerSourceDetails {
  /**
  * list of the source ip addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer#ip_addresses ClusterPeer#ip_addresses}
  */
  readonly ipAddresses: string[];
}

export function clusterPeerSourceDetailsToTerraform(struct?: ClusterPeerSourceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
  }
}


export function clusterPeerSourceDetailsToHclTerraform(struct?: ClusterPeerSourceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterPeerSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterPeerSourceDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPeerSourceDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddresses = value.ipAddresses;
    }
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer netapp-ontap_cluster_peer}
*/
export class ClusterPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_cluster_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterPeer to import
  * @param importFromId The id of the existing ClusterPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_cluster_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cluster_peer netapp-ontap_cluster_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterPeerConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_cluster_peer',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._generatePassphrase = config.generatePassphrase;
    this._name = config.name;
    this._passphrase = config.passphrase;
    this._peerApplications = config.peerApplications;
    this._peerCxProfileName = config.peerCxProfileName;
    this._remote.internalValue = config.remote;
    this._sourceDetails.internalValue = config.sourceDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // generate_passphrase - computed: false, optional: true, required: false
  private _generatePassphrase?: boolean | cdktf.IResolvable; 
  public get generatePassphrase() {
    return this.getBooleanAttribute('generate_passphrase');
  }
  public set generatePassphrase(value: boolean | cdktf.IResolvable) {
    this._generatePassphrase = value;
  }
  public resetGeneratePassphrase() {
    this._generatePassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatePassphraseInput() {
    return this._generatePassphrase;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // peer_applications - computed: false, optional: true, required: false
  private _peerApplications?: string[]; 
  public get peerApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('peer_applications'));
  }
  public set peerApplications(value: string[]) {
    this._peerApplications = value;
  }
  public resetPeerApplications() {
    this._peerApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerApplicationsInput() {
    return this._peerApplications;
  }

  // peer_cx_profile_name - computed: false, optional: false, required: true
  private _peerCxProfileName?: string; 
  public get peerCxProfileName() {
    return this.getStringAttribute('peer_cx_profile_name');
  }
  public set peerCxProfileName(value: string) {
    this._peerCxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCxProfileNameInput() {
    return this._peerCxProfileName;
  }

  // peer_id - computed: true, optional: false, required: false
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }

  // remote - computed: false, optional: false, required: true
  private _remote = new ClusterPeerRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: ClusterPeerRemote) {
    this._remote.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }

  // source_details - computed: false, optional: false, required: true
  private _sourceDetails = new ClusterPeerSourceDetailsOutputReference(this, "source_details");
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public putSourceDetails(value: ClusterPeerSourceDetails) {
    this._sourceDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailsInput() {
    return this._sourceDetails.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      generate_passphrase: cdktf.booleanToTerraform(this._generatePassphrase),
      name: cdktf.stringToTerraform(this._name),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      peer_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerApplications),
      peer_cx_profile_name: cdktf.stringToTerraform(this._peerCxProfileName),
      remote: clusterPeerRemoteToTerraform(this._remote.internalValue),
      source_details: clusterPeerSourceDetailsToTerraform(this._sourceDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_passphrase: {
        value: cdktf.booleanToHclTerraform(this._generatePassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerApplications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      peer_cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._peerCxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote: {
        value: clusterPeerRemoteToHclTerraform(this._remote.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterPeerRemote",
      },
      source_details: {
        value: clusterPeerSourceDetailsToHclTerraform(this._sourceDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterPeerSourceDetails",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
