// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#metadata DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadata;
  /**
  * BGPPeerSpec contains the specification for a BGPPeer resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#spec DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#annotations DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#labels DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#name DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#key DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#name DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#optional DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRefToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRefToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPassword {
  /**
  * Selects a key of a secret in the node pod's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#secret_key_ref DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRef;
}

export function dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpec {
  /**
  * The AS Number of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#as_number DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#as_number}
  */
  readonly asNumber?: number;
  /**
  * The ordered set of BGPFilters applied on this BGP peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#filters DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#filters}
  */
  readonly filters?: string[];
  /**
  * Option to keep the original nexthop field when routes are sent to a BGP Peer. Setting 'true' configures the selected BGP Peers node to use the 'next hop keep;' instead of 'next hop self;'(default) in the specific branch of the Node on 'bird.cfg'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#keep_original_next_hop DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#keep_original_next_hop}
  */
  readonly keepOriginalNextHop?: boolean | cdktf.IResolvable;
  /**
  * Time to allow for software restart. When specified, this is configured as the graceful restart timeout. When not specified, the BIRD default of 120s is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#max_restart_time DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#max_restart_time}
  */
  readonly maxRestartTime?: string;
  /**
  * The node name identifying the Calico node instance that is targeted by this peer. If this is not set, and no nodeSelector is specified, then this BGP peer selects all nodes in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#node DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Selector for the nodes that should have this peering. When this is set, the Node field must be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#node_selector DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#node_selector}
  */
  readonly nodeSelector?: string;
  /**
  * Maximum number of local AS numbers that are allowed in the AS path for received routes. This removes BGP loop prevention and should only be used if absolutely necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#num_allowed_local_as_numbers DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#num_allowed_local_as_numbers}
  */
  readonly numAllowedLocalAsNumbers?: number;
  /**
  * Optional BGP password for the peerings generated by this BGPPeer resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#password DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#password}
  */
  readonly password?: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPassword;
  /**
  * The IP address of the peer followed by an optional port number to peer with. If port number is given, format should be '[<IPv6>]:port' or '<IPv4>:<port>' for IPv4. If optional port number is not set, and this peer IP and ASNumber belongs to a calico/node with ListenPort set in BGPConfiguration, then we use that port to peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#peer_ip DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * Selector for the remote nodes to peer with. When this is set, the PeerIP and ASNumber fields must be empty. For each peering between the local node and selected remote nodes, we configure an IPv4 peering if both ends have NodeBGPSpec.IPv4Address specified, and an IPv6 peering if both ends have NodeBGPSpec.IPv6Address specified. The remote AS number comes from the remote node's NodeBGPSpec.ASNumber, or the global default if that is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#peer_selector DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#peer_selector}
  */
  readonly peerSelector?: string;
  /**
  * Add an exact, i.e. /32, static route toward peer IP in order to prevent route flapping. ReachableBy contains the address of the gateway which peer can be reached by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#reachable_by DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#reachable_by}
  */
  readonly reachableBy?: string;
  /**
  * Specifies whether and how to configure a source address for the peerings generated by this BGPPeer resource. Default value 'UseNodeIP' means to configure the node IP as the source address. 'None' means not to configure a source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#source_address DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * TTLSecurity enables the generalized TTL security mechanism (GTSM) which protects against spoofed packets by ignoring received packets with a smaller than expected TTL value. The provided value is the number of hops (edges) between the peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#ttl_security DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest#ttl_security}
  */
  readonly ttlSecurity?: number;
}

export function dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    keep_original_next_hop: cdktf.booleanToTerraform(struct!.keepOriginalNextHop),
    max_restart_time: cdktf.stringToTerraform(struct!.maxRestartTime),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    node_selector: cdktf.stringToTerraform(struct!.nodeSelector),
    num_allowed_local_as_numbers: cdktf.numberToTerraform(struct!.numAllowedLocalAsNumbers),
    password: dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordToTerraform(struct!.password),
    peer_ip: cdktf.stringToTerraform(struct!.peerIp),
    peer_selector: cdktf.stringToTerraform(struct!.peerSelector),
    reachable_by: cdktf.stringToTerraform(struct!.reachableBy),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    ttl_security: cdktf.numberToTerraform(struct!.ttlSecurity),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keep_original_next_hop: {
      value: cdktf.booleanToHclTerraform(struct!.keepOriginalNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_restart_time: {
      value: cdktf.stringToHclTerraform(struct!.maxRestartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.stringToHclTerraform(struct!.nodeSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_allowed_local_as_numbers: {
      value: cdktf.numberToHclTerraform(struct!.numAllowedLocalAsNumbers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPassword",
    },
    peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_selector: {
      value: cdktf.stringToHclTerraform(struct!.peerSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reachable_by: {
      value: cdktf.stringToHclTerraform(struct!.reachableBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl_security: {
      value: cdktf.numberToHclTerraform(struct!.ttlSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._keepOriginalNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepOriginalNextHop = this._keepOriginalNextHop;
    }
    if (this._maxRestartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRestartTime = this._maxRestartTime;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._numAllowedLocalAsNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numAllowedLocalAsNumbers = this._numAllowedLocalAsNumbers;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._peerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp = this._peerIp;
    }
    if (this._peerSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSelector = this._peerSelector;
    }
    if (this._reachableBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableBy = this._reachableBy;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._ttlSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSecurity = this._ttlSecurity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asNumber = undefined;
      this._filters = undefined;
      this._keepOriginalNextHop = undefined;
      this._maxRestartTime = undefined;
      this._node = undefined;
      this._nodeSelector = undefined;
      this._numAllowedLocalAsNumbers = undefined;
      this._password.internalValue = undefined;
      this._peerIp = undefined;
      this._peerSelector = undefined;
      this._reachableBy = undefined;
      this._sourceAddress = undefined;
      this._ttlSecurity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asNumber = value.asNumber;
      this._filters = value.filters;
      this._keepOriginalNextHop = value.keepOriginalNextHop;
      this._maxRestartTime = value.maxRestartTime;
      this._node = value.nodeAttribute;
      this._nodeSelector = value.nodeSelector;
      this._numAllowedLocalAsNumbers = value.numAllowedLocalAsNumbers;
      this._password.internalValue = value.password;
      this._peerIp = value.peerIp;
      this._peerSelector = value.peerSelector;
      this._reachableBy = value.reachableBy;
      this._sourceAddress = value.sourceAddress;
      this._ttlSecurity = value.ttlSecurity;
    }
  }

  // as_number - computed: false, optional: true, required: false
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // keep_original_next_hop - computed: false, optional: true, required: false
  private _keepOriginalNextHop?: boolean | cdktf.IResolvable; 
  public get keepOriginalNextHop() {
    return this.getBooleanAttribute('keep_original_next_hop');
  }
  public set keepOriginalNextHop(value: boolean | cdktf.IResolvable) {
    this._keepOriginalNextHop = value;
  }
  public resetKeepOriginalNextHop() {
    this._keepOriginalNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepOriginalNextHopInput() {
    return this._keepOriginalNextHop;
  }

  // max_restart_time - computed: false, optional: true, required: false
  private _maxRestartTime?: string; 
  public get maxRestartTime() {
    return this.getStringAttribute('max_restart_time');
  }
  public set maxRestartTime(value: string) {
    this._maxRestartTime = value;
  }
  public resetMaxRestartTime() {
    this._maxRestartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRestartTimeInput() {
    return this._maxRestartTime;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: string; 
  public get nodeSelector() {
    return this.getStringAttribute('node_selector');
  }
  public set nodeSelector(value: string) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // num_allowed_local_as_numbers - computed: false, optional: true, required: false
  private _numAllowedLocalAsNumbers?: number; 
  public get numAllowedLocalAsNumbers() {
    return this.getNumberAttribute('num_allowed_local_as_numbers');
  }
  public set numAllowedLocalAsNumbers(value: number) {
    this._numAllowedLocalAsNumbers = value;
  }
  public resetNumAllowedLocalAsNumbers() {
    this._numAllowedLocalAsNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numAllowedLocalAsNumbersInput() {
    return this._numAllowedLocalAsNumbers;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // peer_ip - computed: false, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // peer_selector - computed: false, optional: true, required: false
  private _peerSelector?: string; 
  public get peerSelector() {
    return this.getStringAttribute('peer_selector');
  }
  public set peerSelector(value: string) {
    this._peerSelector = value;
  }
  public resetPeerSelector() {
    this._peerSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSelectorInput() {
    return this._peerSelector;
  }

  // reachable_by - computed: false, optional: true, required: false
  private _reachableBy?: string; 
  public get reachableBy() {
    return this.getStringAttribute('reachable_by');
  }
  public set reachableBy(value: string) {
    this._reachableBy = value;
  }
  public resetReachableBy() {
    this._reachableBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableByInput() {
    return this._reachableBy;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // ttl_security - computed: false, optional: true, required: false
  private _ttlSecurity?: number; 
  public get ttlSecurity() {
    return this.getNumberAttribute('ttl_security');
  }
  public set ttlSecurity(value: number) {
    this._ttlSecurity = value;
  }
  public resetTtlSecurity() {
    this._ttlSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecurityInput() {
    return this._ttlSecurity;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest k8s_crd_projectcalico_org_bgp_peer_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_bgp_peer_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgBgpPeerV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_bgp_peer_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/crd_projectcalico_org_bgp_peer_v1_manifest k8s_crd_projectcalico_org_bgp_peer_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_bgp_peer_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgBgpPeerV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
