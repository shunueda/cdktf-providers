import * as cdktf from 'cdktf';
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#annotations DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadataToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadataToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadata | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadata | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthentication {
  /**
  * Mode is the required authentication mode for the allowed traffic, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#mode DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#mode}
  */
  readonly mode: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthenticationToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthenticationToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFields {
  /**
  * Family is a IP address version. Currently, we support 'IPv4' and 'IPv6'. 'IPv4' is set as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#family DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#family}
  */
  readonly family?: string;
  /**
  * Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, 'EchoReply'). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#type DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFieldsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFieldsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._type = value.type;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFieldsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmps {
  /**
  * Fields is a list of ICMP fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#fields DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#fields}
  */
  readonly fields?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFields[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFieldsToTerraform, false)(struct!.fields),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmps[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSet {
  /**
  * CIDR is a CIDR prefix / IP Block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr_group_ref DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr_group_ref}
  */
  readonly cidrGroupRef?: string;
  /**
  * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#except DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSetToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    cidr_group_ref: cdktf.stringToTerraform(struct!.cidrGroupRef),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSetToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.cidrGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._cidrGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrGroupRef = this._cidrGroupRef;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._cidrGroupRef = undefined;
      this._except = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._cidrGroupRef = value.cidrGroupRef;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cidr_group_ref - computed: false, optional: true, required: false
  private _cidrGroupRef?: string; 
  public get cidrGroupRef() {
    return this.getStringAttribute('cidr_group_ref');
  }
  public set cidrGroupRef(value: string) {
    this._cidrGroupRef = value;
  }
  public resetCidrGroupRef() {
    this._cidrGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrGroupRefInput() {
    return this._cidrGroupRef;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSetOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpoints {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNs {
  /**
  * MatchName matches literal DNS names. A trailing '.' is automatically added when missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_name}
  */
  readonly matchName?: string;
  /**
  * MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - '*' matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a '*' as the leftmost character, without a following '.' matches all subdomains as well as the name to the right. A trailing '.' is automatically added when missing. Examples: '*.cilium.io' matches subomains of cilium at that level www.cilium.io and blog.cilium.io match, cilium.io and google.com do not '*cilium.io' matches cilium.io and all subdomains ends with 'cilium.io' except those containing '.' separator, subcilium.io and sub-cilium.io match, www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with 'sub' sub.cilium.io and subdomain.cilium.io match, www.cilium.io, blog.cilium.io, cilium.io and google.com do not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_pattern DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_pattern}
  */
  readonly matchPattern?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_name: cdktf.stringToTerraform(struct!.matchName),
    match_pattern: cdktf.stringToTerraform(struct!.matchPattern),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_name: {
      value: cdktf.stringToHclTerraform(struct!.matchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktf.stringToHclTerraform(struct!.matchPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchName = this._matchName;
    }
    if (this._matchPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchName = undefined;
      this._matchPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchName = value.matchName;
      this._matchPattern = value.matchPattern;
    }
  }

  // match_name - computed: false, optional: true, required: false
  private _matchName?: string; 
  public get matchName() {
    return this.getStringAttribute('match_name');
  }
  public set matchName(value: string) {
    this._matchName = value;
  }
  public resetMatchName() {
    this._matchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNameInput() {
    return this._matchName;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern?: string; 
  public get matchPattern() {
    return this.getStringAttribute('match_pattern');
  }
  public set matchPattern(value: string) {
    this._matchPattern = value;
  }
  public resetMatchPattern() {
    this._matchPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#region DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_ids DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_names DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_names}
  */
  readonly securityGroupsNames?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAwsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    region: cdktf.stringToTerraform(struct!.region),
    security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsIds),
    security_groups_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsNames),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAwsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_groups_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsIds = this._securityGroupsIds;
    }
    if (this._securityGroupsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsNames = this._securityGroupsNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._region = undefined;
      this._securityGroupsIds = undefined;
      this._securityGroupsNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._region = value.region;
      this._securityGroupsIds = value.securityGroupsIds;
      this._securityGroupsNames = value.securityGroupsNames;
    }
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_groups_ids - computed: false, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return this.getListAttribute('security_groups_ids');
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
  }

  // security_groups_names - computed: false, optional: true, required: false
  private _securityGroupsNames?: string[]; 
  public get securityGroupsNames() {
    return this.getListAttribute('security_groups_names');
  }
  public set securityGroupsNames(value: string[]) {
    this._securityGroupsNames = value;
  }
  public resetSecurityGroupsNames() {
    this._securityGroupsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsNamesInput() {
    return this._securityGroupsNames;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroups {
  /**
  * AWSGroup is an structure that can be used to whitelisting information from AWS integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#aws DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#aws}
  */
  readonly aws?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAws;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAwsToTerraform(struct!.aws),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAws",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodes {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfig {
  /**
  * Kind is the resource type being referred to. Defaults to CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig for CiliumNetworkPolicy and CiliumClusterwideNetworkPolicy, respectively. The only case this is currently explicitly needed is when referring to a CiliumClusterwideEnvoyConfig from CiliumNetworkPolicy, as using a namespaced listener from a cluster scoped policy is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#kind DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the resource name of the CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig where the listener is defined in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfigToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfigToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListener {
  /**
  * EnvoyConfig is a reference to the CEC or CCEC resource in which the listener is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#envoy_config DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#envoy_config}
  */
  readonly envoyConfig: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfig;
  /**
  * Name is the name of the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Priority for this Listener that is used when multiple rules would apply different listeners to a policy map entry. Behavior of this is implementation dependent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#priority DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#priority}
  */
  readonly priority?: number;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envoy_config: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfigToTerraform(struct!.envoyConfig),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envoy_config: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfigToHclTerraform(struct!.envoyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfig",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envoyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyConfig = this._envoyConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._envoyConfig.internalValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._envoyConfig.internalValue = value.envoyConfig;
      this._name = value.name;
      this._priority = value.priority;
    }
  }

  // envoy_config - computed: false, optional: false, required: true
  private _envoyConfig = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfigOutputReference(this, "envoy_config");
  public get envoyConfig() {
    return this._envoyConfig;
  }
  public putEnvoyConfig(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerEnvoyConfig) {
    this._envoyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyConfigInput() {
    return this._envoyConfig.internalValue;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecret {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecretToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecretToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTls {
  /**
  * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#certificate DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#private_key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt' - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#secret DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#secret}
  */
  readonly secret: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecret;
  /**
  * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#trusted_ca DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#trusted_ca}
  */
  readonly trustedCa?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    secret: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecretToTerraform(struct!.secret),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecret",
    },
    trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._trustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._privateKey = undefined;
      this._secret.internalValue = undefined;
      this._trustedCa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
      this._secret.internalValue = value.secret;
      this._trustedCa = value.trustedCa;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPorts {
  /**
  * EndPort can only be an L4 port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#end_port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * Port can be an L4 port number, or a name in the form of 'http' or 'http-8080'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#port}
  */
  readonly port: string;
  /**
  * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: 'TCP', 'UDP', 'SCTP', 'ANY' Matching on ICMP is not supported. Named port specified for a container may narrow this down, but may not contradict this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#protocol DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDns {
  /**
  * MatchName matches literal DNS names. A trailing '.' is automatically added when missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_name}
  */
  readonly matchName?: string;
  /**
  * MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - '*' matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a '*' as the leftmost character, without a following '.' matches all subdomains as well as the name to the right. A trailing '.' is automatically added when missing. Examples: '*.cilium.io' matches subomains of cilium at that level www.cilium.io and blog.cilium.io match, cilium.io and google.com do not '*cilium.io' matches cilium.io and all subdomains ends with 'cilium.io' except those containing '.' separator, subcilium.io and sub-cilium.io match, www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with 'sub' sub.cilium.io and subdomain.cilium.io match, www.cilium.io, blog.cilium.io, cilium.io and google.com do not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_pattern DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_pattern}
  */
  readonly matchPattern?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDnsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_name: cdktf.stringToTerraform(struct!.matchName),
    match_pattern: cdktf.stringToTerraform(struct!.matchPattern),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDnsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_name: {
      value: cdktf.stringToHclTerraform(struct!.matchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktf.stringToHclTerraform(struct!.matchPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchName = this._matchName;
    }
    if (this._matchPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchName = undefined;
      this._matchPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchName = value.matchName;
      this._matchPattern = value.matchPattern;
    }
  }

  // match_name - computed: false, optional: true, required: false
  private _matchName?: string; 
  public get matchName() {
    return this.getStringAttribute('match_name');
  }
  public set matchName(value: string) {
    this._matchName = value;
  }
  public resetMatchName() {
    this._matchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNameInput() {
    return this._matchName;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern?: string; 
  public get matchPattern() {
    return this.getStringAttribute('match_pattern');
  }
  public set matchPattern(value: string) {
    this._matchPattern = value;
  }
  public resetMatchPattern() {
    this._matchPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDnsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecret {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecretToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecretToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatches {
  /**
  * Mismatch identifies what to do in case there is no match. The default is to drop the request. Otherwise the overall rule is still considered as matching, but the mismatches are logged in the access log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#mismatch DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#mismatch}
  */
  readonly mismatch?: string;
  /**
  * Name identifies the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no 'Value' specified, the match will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#secret DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#secret}
  */
  readonly secret?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecret;
  /**
  * Value matches the exact value of the header. Can be specified either alone or together with 'Secret'; will be used as the header value if the secret can not be found in the latter case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#value DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mismatch: cdktf.stringToTerraform(struct!.mismatch),
    name: cdktf.stringToTerraform(struct!.name),
    secret: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mismatch: {
      value: cdktf.stringToHclTerraform(struct!.mismatch),
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
    secret: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecret",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatch = this._mismatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mismatch = undefined;
      this._name = undefined;
      this._secret.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mismatch = value.mismatch;
      this._name = value.name;
      this._secret.internalValue = value.secret;
      this._value = value.value;
    }
  }

  // mismatch - computed: false, optional: true, required: false
  private _mismatch?: string; 
  public get mismatch() {
    return this.getStringAttribute('mismatch');
  }
  public set mismatch(value: string) {
    this._mismatch = value;
  }
  public resetMismatch() {
    this._mismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchInput() {
    return this._mismatch;
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

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttp {
  /**
  * HeaderMatches is a list of HTTP headers which must be present and match against the given values. Mismatch field can be used to specify what to do when there is no match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#header_matches DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#header_matches}
  */
  readonly headerMatches?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatches[] | cdktf.IResolvable;
  /**
  * Headers is a list of HTTP headers which must be present in the request. If omitted or empty, requests are allowed regardless of headers present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#headers DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * Host is an extended POSIX regex matched against the host header of a request. Examples: - foo.bar.com will match the host fooXbar.com or foo-bar.com - foo.bar.com will only match the host foo.bar.com If omitted or empty, the value of the host header is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#host DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#host}
  */
  readonly host?: string;
  /**
  * Method is an extended POSIX regex matched against the method of a request, e.g. 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', ... If omitted or empty, all methods are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#method DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#method}
  */
  readonly method?: string;
  /**
  * Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional 'path' part of a URL as defined by RFC 3986. If omitted or empty, all paths are all allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#path DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_matches: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesToTerraform, false)(struct!.headerMatches),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    host: cdktf.stringToTerraform(struct!.host),
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_matches: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesToHclTerraform, false)(struct!.headerMatches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerMatches = this._headerMatches?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerMatches.internalValue = undefined;
      this._headers = undefined;
      this._host = undefined;
      this._method = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerMatches.internalValue = value.headerMatches;
      this._headers = value.headers;
      this._host = value.host;
      this._method = value.method;
      this._path = value.path;
    }
  }

  // header_matches - computed: false, optional: true, required: false
  private _headerMatches = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatchesList(this, "header_matches", false);
  public get headerMatches() {
    return this._headerMatches;
  }
  public putHeaderMatches(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpHeaderMatches[] | cdktf.IResolvable) {
    this._headerMatches.internalValue = value;
  }
  public resetHeaderMatches() {
    this._headerMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerMatchesInput() {
    return this._headerMatches.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttp[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafka {
  /**
  * APIKey is a case-insensitive string matched against the key of a request, e.g. 'produce', 'fetch', 'createtopic', 'deletetopic', et al Reference: https://kafka.apache.org/protocol#protocol_api_keys If omitted or empty, and if Role is not specified, then all keys are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#api_key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#api_key}
  */
  readonly apiKey?: string;
  /**
  * APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer. If omitted or empty, all versions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#api_version DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * ClientID is the client identifier as provided in the request. From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client. If omitted or empty, all client identifiers are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#client_id DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * Role is a case-insensitive string and describes a group of API keys necessary to perform certain higher-level Kafka operations such as 'produce' or 'consume'. A Role automatically expands into all APIKeys required to perform the specified higher-level operation. The following values are supported: - 'produce': Allow producing to the topics specified in the rule - 'consume': Allow consuming from the topics specified in the rule This field is incompatible with the APIKey field, i.e APIKey and Role cannot both be specified in the same rule. If omitted or empty, and if APIKey is not specified, then all keys are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#role DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#role}
  */
  readonly role?: string;
  /**
  * Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected. This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _. Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255. If omitted or empty, all topics are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#topic DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#topic}
  */
  readonly topic?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafkaToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    role: cdktf.stringToTerraform(struct!.role),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafkaToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafkaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiVersion = undefined;
      this._clientId = undefined;
      this._role = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiVersion = value.apiVersion;
      this._clientId = value.clientId;
      this._role = value.role;
      this._topic = value.topic;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafkaList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafka[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafkaOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRules {
  /**
  * DNS-specific rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#dns DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#dns}
  */
  readonly dns?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDns[] | cdktf.IResolvable;
  /**
  * HTTP specific rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#http DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#http}
  */
  readonly http?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttp[] | cdktf.IResolvable;
  /**
  * Kafka-specific rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#kafka DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#kafka}
  */
  readonly kafka?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafka[] | cdktf.IResolvable;
  /**
  * Key-value pair rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#l7 DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#l7}
  */
  readonly l7?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Name of the L7 protocol for which the Key-value pair rules apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#l7proto DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#l7proto}
  */
  readonly l7Proto?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDnsToTerraform, false)(struct!.dns),
    http: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpToTerraform, false)(struct!.http),
    kafka: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafkaToTerraform, false)(struct!.kafka),
    l7: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.l7),
    l7proto: cdktf.stringToTerraform(struct!.l7Proto),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDnsToHclTerraform, false)(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDnsList",
    },
    http: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpToHclTerraform, false)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpList",
    },
    kafka: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafkaToHclTerraform, false)(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafkaList",
    },
    l7: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.l7),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    l7proto: {
      value: cdktf.stringToHclTerraform(struct!.l7Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._l7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7 = this._l7;
    }
    if (this._l7Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7Proto = this._l7Proto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns.internalValue = undefined;
      this._http.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._l7 = undefined;
      this._l7Proto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns.internalValue = value.dns;
      this._http.internalValue = value.http;
      this._kafka.internalValue = value.kafka;
      this._l7 = value.l7;
      this._l7Proto = value.l7Proto;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }
  public putDns(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesDns[] | cdktf.IResolvable) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafkaList(this, "kafka", false);
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesKafka[] | cdktf.IResolvable) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // l7 - computed: false, optional: true, required: false
  private _l7?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get l7() {
    return this.interpolationForAttribute('l7');
  }
  public set l7(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._l7 = value;
  }
  public resetL7() {
    this._l7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7Input() {
    return this._l7;
  }

  // l7proto - computed: false, optional: true, required: false
  private _l7Proto?: string; 
  public get l7Proto() {
    return this.getStringAttribute('l7proto');
  }
  public set l7Proto(value: string) {
    this._l7Proto = value;
  }
  public resetL7Proto() {
    this._l7Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7ProtoInput() {
    return this._l7Proto;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecret {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecretToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecretToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTls {
  /**
  * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#certificate DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#private_key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt' - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#secret DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#secret}
  */
  readonly secret: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecret;
  /**
  * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#trusted_ca DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#trusted_ca}
  */
  readonly trustedCa?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    secret: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecretToTerraform(struct!.secret),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecret",
    },
    trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._trustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._privateKey = undefined;
      this._secret.internalValue = undefined;
      this._trustedCa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
      this._secret.internalValue = value.secret;
      this._trustedCa = value.trustedCa;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPorts {
  /**
  * listener specifies the name of a custom Envoy listener to which this traffic should be redirected to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#listener DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#listener}
  */
  readonly listener?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListener;
  /**
  * OriginatingTLS is the TLS context for the connections originated by the L7 proxy. For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#originating_tls DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#originating_tls}
  */
  readonly originatingTls?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTls;
  /**
  * Ports is a list of L4 port/protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ports}
  */
  readonly ports?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPorts[] | cdktf.IResolvable;
  /**
  * Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#rules DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#rules}
  */
  readonly rules?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRules;
  /**
  * ServerNames is a list of allowed TLS SNI values. If not empty, then TLS must be present and one of the provided SNIs must be indicated in the TLS handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#server_names DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#server_names}
  */
  readonly serverNames?: string[];
  /**
  * TerminatingTLS is the TLS context for the connection terminated by the L7 proxy. For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#terminating_tls DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#terminating_tls}
  */
  readonly terminatingTls?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTls;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerToTerraform(struct!.listener),
    originating_tls: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsToTerraform(struct!.originatingTls),
    ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPortsToTerraform, false)(struct!.ports),
    rules: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesToTerraform(struct!.rules),
    server_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverNames),
    terminating_tls: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsToTerraform(struct!.terminatingTls),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerToHclTerraform(struct!.listener),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListener",
    },
    originating_tls: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsToHclTerraform(struct!.originatingTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTls",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPortsList",
    },
    rules: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesToHclTerraform(struct!.rules),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRules",
    },
    server_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    terminating_tls: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsToHclTerraform(struct!.terminatingTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    if (this._originatingTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originatingTls = this._originatingTls?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._serverNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNames = this._serverNames;
    }
    if (this._terminatingTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminatingTls = this._terminatingTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listener.internalValue = undefined;
      this._originatingTls.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._serverNames = undefined;
      this._terminatingTls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listener.internalValue = value.listener;
      this._originatingTls.internalValue = value.originatingTls;
      this._ports.internalValue = value.ports;
      this._rules.internalValue = value.rules;
      this._serverNames = value.serverNames;
      this._terminatingTls.internalValue = value.terminatingTls;
    }
  }

  // listener - computed: false, optional: true, required: false
  private _listener = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListenerOutputReference(this, "listener");
  public get listener() {
    return this._listener;
  }
  public putListener(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsListener) {
    this._listener.internalValue = value;
  }
  public resetListener() {
    this._listener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // originating_tls - computed: false, optional: true, required: false
  private _originatingTls = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTlsOutputReference(this, "originating_tls");
  public get originatingTls() {
    return this._originatingTls;
  }
  public putOriginatingTls(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOriginatingTls) {
    this._originatingTls.internalValue = value;
  }
  public resetOriginatingTls() {
    this._originatingTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatingTlsInput() {
    return this._originatingTls.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // server_names - computed: false, optional: true, required: false
  private _serverNames?: string[]; 
  public get serverNames() {
    return this.getListAttribute('server_names');
  }
  public set serverNames(value: string[]) {
    this._serverNames = value;
  }
  public resetServerNames() {
    this._serverNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNamesInput() {
    return this._serverNames;
  }

  // terminating_tls - computed: false, optional: true, required: false
  private _terminatingTls = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTlsOutputReference(this, "terminating_tls");
  public get terminatingTls() {
    return this._terminatingTls;
  }
  public putTerminatingTls(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsTerminatingTls) {
    this._terminatingTls.internalValue = value;
  }
  public resetTerminatingTls() {
    this._terminatingTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatingTlsInput() {
    return this._terminatingTls.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequires {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequires | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequires | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequires[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#service_name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._serviceName = value.serviceName;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ServiceSelector is a label selector for k8s services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#selector DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#selector}
  */
  readonly selector: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelector;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._selector.internalValue = value.selector;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServices {
  /**
  * K8sService selects service by name and namespace pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#k8s_service DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#k8s_service}
  */
  readonly k8SService?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SService;
  /**
  * K8sServiceSelector selects services by k8s labels and namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#k8s_service_selector DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#k8s_service_selector}
  */
  readonly k8SServiceSelector?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelector;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    k8s_service: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceToTerraform(struct!.k8SService),
    k8s_service_selector: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorToTerraform(struct!.k8SServiceSelector),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    k8s_service: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceToHclTerraform(struct!.k8SService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SService",
    },
    k8s_service_selector: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorToHclTerraform(struct!.k8SServiceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._k8SService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SService = this._k8SService?.internalValue;
    }
    if (this._k8SServiceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SServiceSelector = this._k8SServiceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._k8SService.internalValue = undefined;
      this._k8SServiceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._k8SService.internalValue = value.k8SService;
      this._k8SServiceSelector.internalValue = value.k8SServiceSelector;
    }
  }

  // k8s_service - computed: false, optional: true, required: false
  private _k8SService = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceOutputReference(this, "k8s_service");
  public get k8SService() {
    return this._k8SService;
  }
  public putK8SService(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SService) {
    this._k8SService.internalValue = value;
  }
  public resetK8SService() {
    this._k8SService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceInput() {
    return this._k8SService.internalValue;
  }

  // k8s_service_selector - computed: false, optional: true, required: false
  private _k8SServiceSelector = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelectorOutputReference(this, "k8s_service_selector");
  public get k8SServiceSelector() {
    return this._k8SServiceSelector;
  }
  public putK8SServiceSelector(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesK8SServiceSelector) {
    this._k8SServiceSelector.internalValue = value;
  }
  public resetK8SServiceSelector() {
    this._k8SServiceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceSelectorInput() {
    return this._k8SServiceSelector.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgress {
  /**
  * Authentication is the required authentication type for the allowed traffic, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#authentication DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#authentication}
  */
  readonly authentication?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthentication;
  /**
  * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is allowed to connect to. Example: Any endpoint with the label 'app=httpd' is allowed to initiate type 8 ICMP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#icmps DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#icmps}
  */
  readonly icmps?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmps[] | cdktf.IResolvable;
  /**
  * ToCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections. Only connections destined for outside of the cluster and not targeting the host will be subject to CIDR rules. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. Example: Any endpoint with the label 'app=database-proxy' is allowed to initiate connections to 10.2.3.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_cidr}
  */
  readonly toCidr?: string[];
  /**
  * ToCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections to in addition to connections which are allowed via ToEndpoints, along with a list of subnets contained within their corresponding IP block to which traffic should not be allowed. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. Example: Any endpoint with the label 'app=database-proxy' is allowed to initiate connections to 10.2.3.0/24 except from IPs in subnet 10.2.3.0/28.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_cidr_set DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_cidr_set}
  */
  readonly toCidrSet?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSet[] | cdktf.IResolvable;
  /**
  * ToEndpoints is a list of endpoints identified by an EndpointSelector to which the endpoints subject to the rule are allowed to communicate. Example: Any endpoint with the label 'role=frontend' can communicate with any endpoint carrying the label 'role=backend'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_endpoints DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_endpoints}
  */
  readonly toEndpoints?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpoints[] | cdktf.IResolvable;
  /**
  * ToEntities is a list of special entities to which the endpoint subject to the rule is allowed to initiate connections. Supported entities are 'world', 'cluster','host','remote-node','kube-apiserver', 'init', 'health','unmanaged' and 'all'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_entities DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_entities}
  */
  readonly toEntities?: string[];
  /**
  * ToFQDN allows whitelisting DNS names in place of IPs. The IPs that result from DNS resolution of 'ToFQDN.MatchName's are added to the same EgressRule object as ToCIDRSet entries, and behave accordingly. Any L4 and L7 rules within this EgressRule will also apply to these IPs. The DNS -> IP mapping is re-resolved periodically from within the cilium-agent, and the IPs in the DNS response are effected in the policy for selected pods as-is (i.e. the list of IPs is not modified in any way). Note: An explicit rule to allow for DNS traffic is needed for the pods, as ToFQDN counts as an egress rule and will enforce egress policy when PolicyEnforcment=default. Note: If the resolved IPs are IPs within the kubernetes cluster, the ToFQDN rule will not apply to that IP. Note: ToFQDN cannot occur in the same policy as other To* rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_fqd_ns DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_fqd_ns}
  */
  readonly toFqdNs?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNs[] | cdktf.IResolvable;
  /**
  * ToGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives: Example: toGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_groups DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_groups}
  */
  readonly toGroups?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroups[] | cdktf.IResolvable;
  /**
  * ToNodes is a list of nodes identified by an EndpointSelector to which endpoints subject to the rule is allowed to communicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_nodes DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_nodes}
  */
  readonly toNodes?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodes[] | cdktf.IResolvable;
  /**
  * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is allowed to connect to. Example: Any endpoint with the label 'role=frontend' is allowed to initiate connections to destination port 8080/tcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_ports}
  */
  readonly toPorts?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPorts[] | cdktf.IResolvable;
  /**
  * ToRequires is a list of additional constraints which must be met in order for the selected endpoints to be able to connect to other endpoints. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching ToEndpoints. Example: Any Endpoint with the label 'team=A' requires any endpoint to which it communicates to also carry the label 'team=A'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_requires DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_requires}
  */
  readonly toRequires?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequires[] | cdktf.IResolvable;
  /**
  * ToServices is a list of services to which the endpoint subject to the rule is allowed to initiate connections. Currently Cilium only supports toServices for K8s services without selectors. Example: Any endpoint with the label 'app=backend-app' is allowed to initiate connections to all cidrs backing the 'external-service' service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_services DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_services}
  */
  readonly toServices?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServices[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthenticationToTerraform(struct!.authentication),
    icmps: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsToTerraform, false)(struct!.icmps),
    to_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.toCidr),
    to_cidr_set: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSetToTerraform, false)(struct!.toCidrSet),
    to_endpoints: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsToTerraform, false)(struct!.toEndpoints),
    to_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.toEntities),
    to_fqd_ns: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNsToTerraform, false)(struct!.toFqdNs),
    to_groups: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsToTerraform, false)(struct!.toGroups),
    to_nodes: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesToTerraform, false)(struct!.toNodes),
    to_ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsToTerraform, false)(struct!.toPorts),
    to_requires: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresToTerraform, false)(struct!.toRequires),
    to_services: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesToTerraform, false)(struct!.toServices),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthentication",
    },
    icmps: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsToHclTerraform, false)(struct!.icmps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsList",
    },
    to_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.toCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    to_cidr_set: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSetToHclTerraform, false)(struct!.toCidrSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSetList",
    },
    to_endpoints: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsToHclTerraform, false)(struct!.toEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsList",
    },
    to_entities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.toEntities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    to_fqd_ns: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNsToHclTerraform, false)(struct!.toFqdNs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNsList",
    },
    to_groups: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsToHclTerraform, false)(struct!.toGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsList",
    },
    to_nodes: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesToHclTerraform, false)(struct!.toNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesList",
    },
    to_ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsToHclTerraform, false)(struct!.toPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsList",
    },
    to_requires: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresToHclTerraform, false)(struct!.toRequires),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresList",
    },
    to_services: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesToHclTerraform, false)(struct!.toServices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._icmps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmps = this._icmps?.internalValue;
    }
    if (this._toCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.toCidr = this._toCidr;
    }
    if (this._toCidrSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toCidrSet = this._toCidrSet?.internalValue;
    }
    if (this._toEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toEndpoints = this._toEndpoints?.internalValue;
    }
    if (this._toEntities !== undefined) {
      hasAnyValues = true;
      internalValueResult.toEntities = this._toEntities;
    }
    if (this._toFqdNs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toFqdNs = this._toFqdNs?.internalValue;
    }
    if (this._toGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toGroups = this._toGroups?.internalValue;
    }
    if (this._toNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toNodes = this._toNodes?.internalValue;
    }
    if (this._toPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPorts = this._toPorts?.internalValue;
    }
    if (this._toRequires?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toRequires = this._toRequires?.internalValue;
    }
    if (this._toServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toServices = this._toServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._icmps.internalValue = undefined;
      this._toCidr = undefined;
      this._toCidrSet.internalValue = undefined;
      this._toEndpoints.internalValue = undefined;
      this._toEntities = undefined;
      this._toFqdNs.internalValue = undefined;
      this._toGroups.internalValue = undefined;
      this._toNodes.internalValue = undefined;
      this._toPorts.internalValue = undefined;
      this._toRequires.internalValue = undefined;
      this._toServices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._icmps.internalValue = value.icmps;
      this._toCidr = value.toCidr;
      this._toCidrSet.internalValue = value.toCidrSet;
      this._toEndpoints.internalValue = value.toEndpoints;
      this._toEntities = value.toEntities;
      this._toFqdNs.internalValue = value.toFqdNs;
      this._toGroups.internalValue = value.toGroups;
      this._toNodes.internalValue = value.toNodes;
      this._toPorts.internalValue = value.toPorts;
      this._toRequires.internalValue = value.toRequires;
      this._toServices.internalValue = value.toServices;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // icmps - computed: false, optional: true, required: false
  private _icmps = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmpsList(this, "icmps", false);
  public get icmps() {
    return this._icmps;
  }
  public putIcmps(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressIcmps[] | cdktf.IResolvable) {
    this._icmps.internalValue = value;
  }
  public resetIcmps() {
    this._icmps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpsInput() {
    return this._icmps.internalValue;
  }

  // to_cidr - computed: false, optional: true, required: false
  private _toCidr?: string[]; 
  public get toCidr() {
    return this.getListAttribute('to_cidr');
  }
  public set toCidr(value: string[]) {
    this._toCidr = value;
  }
  public resetToCidr() {
    this._toCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toCidrInput() {
    return this._toCidr;
  }

  // to_cidr_set - computed: false, optional: true, required: false
  private _toCidrSet = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSetList(this, "to_cidr_set", false);
  public get toCidrSet() {
    return this._toCidrSet;
  }
  public putToCidrSet(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToCidrSet[] | cdktf.IResolvable) {
    this._toCidrSet.internalValue = value;
  }
  public resetToCidrSet() {
    this._toCidrSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toCidrSetInput() {
    return this._toCidrSet.internalValue;
  }

  // to_endpoints - computed: false, optional: true, required: false
  private _toEndpoints = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpointsList(this, "to_endpoints", false);
  public get toEndpoints() {
    return this._toEndpoints;
  }
  public putToEndpoints(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToEndpoints[] | cdktf.IResolvable) {
    this._toEndpoints.internalValue = value;
  }
  public resetToEndpoints() {
    this._toEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toEndpointsInput() {
    return this._toEndpoints.internalValue;
  }

  // to_entities - computed: false, optional: true, required: false
  private _toEntities?: string[]; 
  public get toEntities() {
    return this.getListAttribute('to_entities');
  }
  public set toEntities(value: string[]) {
    this._toEntities = value;
  }
  public resetToEntities() {
    this._toEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toEntitiesInput() {
    return this._toEntities;
  }

  // to_fqd_ns - computed: false, optional: true, required: false
  private _toFqdNs = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNsList(this, "to_fqd_ns", false);
  public get toFqdNs() {
    return this._toFqdNs;
  }
  public putToFqdNs(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToFqdNs[] | cdktf.IResolvable) {
    this._toFqdNs.internalValue = value;
  }
  public resetToFqdNs() {
    this._toFqdNs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toFqdNsInput() {
    return this._toFqdNs.internalValue;
  }

  // to_groups - computed: false, optional: true, required: false
  private _toGroups = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroupsList(this, "to_groups", false);
  public get toGroups() {
    return this._toGroups;
  }
  public putToGroups(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToGroups[] | cdktf.IResolvable) {
    this._toGroups.internalValue = value;
  }
  public resetToGroups() {
    this._toGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toGroupsInput() {
    return this._toGroups.internalValue;
  }

  // to_nodes - computed: false, optional: true, required: false
  private _toNodes = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodesList(this, "to_nodes", false);
  public get toNodes() {
    return this._toNodes;
  }
  public putToNodes(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToNodes[] | cdktf.IResolvable) {
    this._toNodes.internalValue = value;
  }
  public resetToNodes() {
    this._toNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toNodesInput() {
    return this._toNodes.internalValue;
  }

  // to_ports - computed: false, optional: true, required: false
  private _toPorts = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPortsList(this, "to_ports", false);
  public get toPorts() {
    return this._toPorts;
  }
  public putToPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToPorts[] | cdktf.IResolvable) {
    this._toPorts.internalValue = value;
  }
  public resetToPorts() {
    this._toPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortsInput() {
    return this._toPorts.internalValue;
  }

  // to_requires - computed: false, optional: true, required: false
  private _toRequires = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequiresList(this, "to_requires", false);
  public get toRequires() {
    return this._toRequires;
  }
  public putToRequires(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToRequires[] | cdktf.IResolvable) {
    this._toRequires.internalValue = value;
  }
  public resetToRequires() {
    this._toRequires.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toRequiresInput() {
    return this._toRequires.internalValue;
  }

  // to_services - computed: false, optional: true, required: false
  private _toServices = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServicesList(this, "to_services", false);
  public get toServices() {
    return this._toServices;
  }
  public putToServices(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToServices[] | cdktf.IResolvable) {
    this._toServices.internalValue = value;
  }
  public resetToServices() {
    this._toServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toServicesInput() {
    return this._toServices.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFields {
  /**
  * Family is a IP address version. Currently, we support 'IPv4' and 'IPv6'. 'IPv4' is set as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#family DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#family}
  */
  readonly family?: string;
  /**
  * Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, 'EchoReply'). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#type DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFieldsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFieldsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._type = value.type;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFieldsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmps {
  /**
  * Fields is a list of ICMP fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#fields DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#fields}
  */
  readonly fields?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFields[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFieldsToTerraform, false)(struct!.fields),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmps[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSet {
  /**
  * CIDR is a CIDR prefix / IP Block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr_group_ref DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr_group_ref}
  */
  readonly cidrGroupRef?: string;
  /**
  * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#except DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSetToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    cidr_group_ref: cdktf.stringToTerraform(struct!.cidrGroupRef),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSetToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.cidrGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._cidrGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrGroupRef = this._cidrGroupRef;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._cidrGroupRef = undefined;
      this._except = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._cidrGroupRef = value.cidrGroupRef;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cidr_group_ref - computed: false, optional: true, required: false
  private _cidrGroupRef?: string; 
  public get cidrGroupRef() {
    return this.getStringAttribute('cidr_group_ref');
  }
  public set cidrGroupRef(value: string) {
    this._cidrGroupRef = value;
  }
  public resetCidrGroupRef() {
    this._cidrGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrGroupRefInput() {
    return this._cidrGroupRef;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSetOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpoints {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#region DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_ids DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_names DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_names}
  */
  readonly securityGroupsNames?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAwsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    region: cdktf.stringToTerraform(struct!.region),
    security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsIds),
    security_groups_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsNames),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAwsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_groups_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsIds = this._securityGroupsIds;
    }
    if (this._securityGroupsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsNames = this._securityGroupsNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._region = undefined;
      this._securityGroupsIds = undefined;
      this._securityGroupsNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._region = value.region;
      this._securityGroupsIds = value.securityGroupsIds;
      this._securityGroupsNames = value.securityGroupsNames;
    }
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_groups_ids - computed: false, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return this.getListAttribute('security_groups_ids');
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
  }

  // security_groups_names - computed: false, optional: true, required: false
  private _securityGroupsNames?: string[]; 
  public get securityGroupsNames() {
    return this.getListAttribute('security_groups_names');
  }
  public set securityGroupsNames(value: string[]) {
    this._securityGroupsNames = value;
  }
  public resetSecurityGroupsNames() {
    this._securityGroupsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsNamesInput() {
    return this._securityGroupsNames;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroups {
  /**
  * AWSGroup is an structure that can be used to whitelisting information from AWS integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#aws DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#aws}
  */
  readonly aws?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAws;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAwsToTerraform(struct!.aws),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAws",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodes {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPorts {
  /**
  * EndPort can only be an L4 port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#end_port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * Port can be an L4 port number, or a name in the form of 'http' or 'http-8080'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#port}
  */
  readonly port: string;
  /**
  * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: 'TCP', 'UDP', 'SCTP', 'ANY' Matching on ICMP is not supported. Named port specified for a container may narrow this down, but may not contradict this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#protocol DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPorts {
  /**
  * Ports is a list of L4 port/protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ports}
  */
  readonly ports?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPorts[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports.internalValue = value.ports;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequires {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequires | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequires | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequires[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#service_name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._serviceName = value.serviceName;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ServiceSelector is a label selector for k8s services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#selector DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#selector}
  */
  readonly selector: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelector;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._selector.internalValue = value.selector;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServices {
  /**
  * K8sService selects service by name and namespace pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#k8s_service DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#k8s_service}
  */
  readonly k8SService?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SService;
  /**
  * K8sServiceSelector selects services by k8s labels and namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#k8s_service_selector DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#k8s_service_selector}
  */
  readonly k8SServiceSelector?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelector;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    k8s_service: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceToTerraform(struct!.k8SService),
    k8s_service_selector: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorToTerraform(struct!.k8SServiceSelector),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    k8s_service: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceToHclTerraform(struct!.k8SService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SService",
    },
    k8s_service_selector: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorToHclTerraform(struct!.k8SServiceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._k8SService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SService = this._k8SService?.internalValue;
    }
    if (this._k8SServiceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SServiceSelector = this._k8SServiceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._k8SService.internalValue = undefined;
      this._k8SServiceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._k8SService.internalValue = value.k8SService;
      this._k8SServiceSelector.internalValue = value.k8SServiceSelector;
    }
  }

  // k8s_service - computed: false, optional: true, required: false
  private _k8SService = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceOutputReference(this, "k8s_service");
  public get k8SService() {
    return this._k8SService;
  }
  public putK8SService(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SService) {
    this._k8SService.internalValue = value;
  }
  public resetK8SService() {
    this._k8SService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceInput() {
    return this._k8SService.internalValue;
  }

  // k8s_service_selector - computed: false, optional: true, required: false
  private _k8SServiceSelector = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelectorOutputReference(this, "k8s_service_selector");
  public get k8SServiceSelector() {
    return this._k8SServiceSelector;
  }
  public putK8SServiceSelector(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesK8SServiceSelector) {
    this._k8SServiceSelector.internalValue = value;
  }
  public resetK8SServiceSelector() {
    this._k8SServiceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceSelectorInput() {
    return this._k8SServiceSelector.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDeny {
  /**
  * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is not allowed to connect to. Example: Any endpoint with the label 'app=httpd' is not allowed to initiate type 8 ICMP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#icmps DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#icmps}
  */
  readonly icmps?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmps[] | cdktf.IResolvable;
  /**
  * ToCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections. Only connections destined for outside of the cluster and not targeting the host will be subject to CIDR rules. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. Example: Any endpoint with the label 'app=database-proxy' is allowed to initiate connections to 10.2.3.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_cidr}
  */
  readonly toCidr?: string[];
  /**
  * ToCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections to in addition to connections which are allowed via ToEndpoints, along with a list of subnets contained within their corresponding IP block to which traffic should not be allowed. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. Example: Any endpoint with the label 'app=database-proxy' is allowed to initiate connections to 10.2.3.0/24 except from IPs in subnet 10.2.3.0/28.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_cidr_set DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_cidr_set}
  */
  readonly toCidrSet?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSet[] | cdktf.IResolvable;
  /**
  * ToEndpoints is a list of endpoints identified by an EndpointSelector to which the endpoints subject to the rule are allowed to communicate. Example: Any endpoint with the label 'role=frontend' can communicate with any endpoint carrying the label 'role=backend'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_endpoints DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_endpoints}
  */
  readonly toEndpoints?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpoints[] | cdktf.IResolvable;
  /**
  * ToEntities is a list of special entities to which the endpoint subject to the rule is allowed to initiate connections. Supported entities are 'world', 'cluster','host','remote-node','kube-apiserver', 'init', 'health','unmanaged' and 'all'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_entities DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_entities}
  */
  readonly toEntities?: string[];
  /**
  * ToGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives: Example: toGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_groups DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_groups}
  */
  readonly toGroups?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroups[] | cdktf.IResolvable;
  /**
  * ToNodes is a list of nodes identified by an EndpointSelector to which endpoints subject to the rule is allowed to communicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_nodes DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_nodes}
  */
  readonly toNodes?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodes[] | cdktf.IResolvable;
  /**
  * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is not allowed to connect to. Example: Any endpoint with the label 'role=frontend' is not allowed to initiate connections to destination port 8080/tcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_ports}
  */
  readonly toPorts?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPorts[] | cdktf.IResolvable;
  /**
  * ToRequires is a list of additional constraints which must be met in order for the selected endpoints to be able to connect to other endpoints. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching ToEndpoints. Example: Any Endpoint with the label 'team=A' requires any endpoint to which it communicates to also carry the label 'team=A'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_requires DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_requires}
  */
  readonly toRequires?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequires[] | cdktf.IResolvable;
  /**
  * ToServices is a list of services to which the endpoint subject to the rule is allowed to initiate connections. Currently Cilium only supports toServices for K8s services without selectors. Example: Any endpoint with the label 'app=backend-app' is allowed to initiate connections to all cidrs backing the 'external-service' service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_services DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_services}
  */
  readonly toServices?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServices[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmps: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsToTerraform, false)(struct!.icmps),
    to_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.toCidr),
    to_cidr_set: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSetToTerraform, false)(struct!.toCidrSet),
    to_endpoints: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsToTerraform, false)(struct!.toEndpoints),
    to_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.toEntities),
    to_groups: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsToTerraform, false)(struct!.toGroups),
    to_nodes: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesToTerraform, false)(struct!.toNodes),
    to_ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsToTerraform, false)(struct!.toPorts),
    to_requires: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresToTerraform, false)(struct!.toRequires),
    to_services: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesToTerraform, false)(struct!.toServices),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmps: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsToHclTerraform, false)(struct!.icmps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsList",
    },
    to_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.toCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    to_cidr_set: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSetToHclTerraform, false)(struct!.toCidrSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSetList",
    },
    to_endpoints: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsToHclTerraform, false)(struct!.toEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsList",
    },
    to_entities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.toEntities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    to_groups: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsToHclTerraform, false)(struct!.toGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsList",
    },
    to_nodes: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesToHclTerraform, false)(struct!.toNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesList",
    },
    to_ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsToHclTerraform, false)(struct!.toPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsList",
    },
    to_requires: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresToHclTerraform, false)(struct!.toRequires),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresList",
    },
    to_services: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesToHclTerraform, false)(struct!.toServices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDeny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmps = this._icmps?.internalValue;
    }
    if (this._toCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.toCidr = this._toCidr;
    }
    if (this._toCidrSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toCidrSet = this._toCidrSet?.internalValue;
    }
    if (this._toEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toEndpoints = this._toEndpoints?.internalValue;
    }
    if (this._toEntities !== undefined) {
      hasAnyValues = true;
      internalValueResult.toEntities = this._toEntities;
    }
    if (this._toGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toGroups = this._toGroups?.internalValue;
    }
    if (this._toNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toNodes = this._toNodes?.internalValue;
    }
    if (this._toPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPorts = this._toPorts?.internalValue;
    }
    if (this._toRequires?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toRequires = this._toRequires?.internalValue;
    }
    if (this._toServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toServices = this._toServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDeny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmps.internalValue = undefined;
      this._toCidr = undefined;
      this._toCidrSet.internalValue = undefined;
      this._toEndpoints.internalValue = undefined;
      this._toEntities = undefined;
      this._toGroups.internalValue = undefined;
      this._toNodes.internalValue = undefined;
      this._toPorts.internalValue = undefined;
      this._toRequires.internalValue = undefined;
      this._toServices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmps.internalValue = value.icmps;
      this._toCidr = value.toCidr;
      this._toCidrSet.internalValue = value.toCidrSet;
      this._toEndpoints.internalValue = value.toEndpoints;
      this._toEntities = value.toEntities;
      this._toGroups.internalValue = value.toGroups;
      this._toNodes.internalValue = value.toNodes;
      this._toPorts.internalValue = value.toPorts;
      this._toRequires.internalValue = value.toRequires;
      this._toServices.internalValue = value.toServices;
    }
  }

  // icmps - computed: false, optional: true, required: false
  private _icmps = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmpsList(this, "icmps", false);
  public get icmps() {
    return this._icmps;
  }
  public putIcmps(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyIcmps[] | cdktf.IResolvable) {
    this._icmps.internalValue = value;
  }
  public resetIcmps() {
    this._icmps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpsInput() {
    return this._icmps.internalValue;
  }

  // to_cidr - computed: false, optional: true, required: false
  private _toCidr?: string[]; 
  public get toCidr() {
    return this.getListAttribute('to_cidr');
  }
  public set toCidr(value: string[]) {
    this._toCidr = value;
  }
  public resetToCidr() {
    this._toCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toCidrInput() {
    return this._toCidr;
  }

  // to_cidr_set - computed: false, optional: true, required: false
  private _toCidrSet = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSetList(this, "to_cidr_set", false);
  public get toCidrSet() {
    return this._toCidrSet;
  }
  public putToCidrSet(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToCidrSet[] | cdktf.IResolvable) {
    this._toCidrSet.internalValue = value;
  }
  public resetToCidrSet() {
    this._toCidrSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toCidrSetInput() {
    return this._toCidrSet.internalValue;
  }

  // to_endpoints - computed: false, optional: true, required: false
  private _toEndpoints = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpointsList(this, "to_endpoints", false);
  public get toEndpoints() {
    return this._toEndpoints;
  }
  public putToEndpoints(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToEndpoints[] | cdktf.IResolvable) {
    this._toEndpoints.internalValue = value;
  }
  public resetToEndpoints() {
    this._toEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toEndpointsInput() {
    return this._toEndpoints.internalValue;
  }

  // to_entities - computed: false, optional: true, required: false
  private _toEntities?: string[]; 
  public get toEntities() {
    return this.getListAttribute('to_entities');
  }
  public set toEntities(value: string[]) {
    this._toEntities = value;
  }
  public resetToEntities() {
    this._toEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toEntitiesInput() {
    return this._toEntities;
  }

  // to_groups - computed: false, optional: true, required: false
  private _toGroups = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroupsList(this, "to_groups", false);
  public get toGroups() {
    return this._toGroups;
  }
  public putToGroups(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToGroups[] | cdktf.IResolvable) {
    this._toGroups.internalValue = value;
  }
  public resetToGroups() {
    this._toGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toGroupsInput() {
    return this._toGroups.internalValue;
  }

  // to_nodes - computed: false, optional: true, required: false
  private _toNodes = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodesList(this, "to_nodes", false);
  public get toNodes() {
    return this._toNodes;
  }
  public putToNodes(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToNodes[] | cdktf.IResolvable) {
    this._toNodes.internalValue = value;
  }
  public resetToNodes() {
    this._toNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toNodesInput() {
    return this._toNodes.internalValue;
  }

  // to_ports - computed: false, optional: true, required: false
  private _toPorts = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPortsList(this, "to_ports", false);
  public get toPorts() {
    return this._toPorts;
  }
  public putToPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToPorts[] | cdktf.IResolvable) {
    this._toPorts.internalValue = value;
  }
  public resetToPorts() {
    this._toPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortsInput() {
    return this._toPorts.internalValue;
  }

  // to_requires - computed: false, optional: true, required: false
  private _toRequires = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequiresList(this, "to_requires", false);
  public get toRequires() {
    return this._toRequires;
  }
  public putToRequires(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToRequires[] | cdktf.IResolvable) {
    this._toRequires.internalValue = value;
  }
  public resetToRequires() {
    this._toRequires.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toRequiresInput() {
    return this._toRequires.internalValue;
  }

  // to_services - computed: false, optional: true, required: false
  private _toServices = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServicesList(this, "to_services", false);
  public get toServices() {
    return this._toServices;
  }
  public putToServices(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToServices[] | cdktf.IResolvable) {
    this._toServices.internalValue = value;
  }
  public resetToServices() {
    this._toServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toServicesInput() {
    return this._toServices.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDeny[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDeny {
  /**
  * Whether or not the endpoint should have a default-deny rule applied to egress traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#egress DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#egress}
  */
  readonly egress?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the endpoint should have a default-deny rule applied to ingress traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ingress DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ingress}
  */
  readonly ingress?: boolean | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDenyToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress: cdktf.booleanToTerraform(struct!.egress),
    ingress: cdktf.booleanToTerraform(struct!.ingress),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDenyToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress: {
      value: cdktf.booleanToHclTerraform(struct!.egress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingress: {
      value: cdktf.booleanToHclTerraform(struct!.ingress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDeny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egress !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress;
    }
    if (this._ingress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDeny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egress = undefined;
      this._ingress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egress = value.egress;
      this._ingress = value.ingress;
    }
  }

  // egress - computed: false, optional: true, required: false
  private _egress?: boolean | cdktf.IResolvable; 
  public get egress() {
    return this.getBooleanAttribute('egress');
  }
  public set egress(value: boolean | cdktf.IResolvable) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress?: boolean | cdktf.IResolvable; 
  public get ingress() {
    return this.getBooleanAttribute('ingress');
  }
  public set ingress(value: boolean | cdktf.IResolvable) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthentication {
  /**
  * Mode is the required authentication mode for the allowed traffic, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#mode DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#mode}
  */
  readonly mode: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthenticationToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthenticationToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSet {
  /**
  * CIDR is a CIDR prefix / IP Block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr_group_ref DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr_group_ref}
  */
  readonly cidrGroupRef?: string;
  /**
  * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#except DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSetToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    cidr_group_ref: cdktf.stringToTerraform(struct!.cidrGroupRef),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSetToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.cidrGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._cidrGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrGroupRef = this._cidrGroupRef;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._cidrGroupRef = undefined;
      this._except = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._cidrGroupRef = value.cidrGroupRef;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cidr_group_ref - computed: false, optional: true, required: false
  private _cidrGroupRef?: string; 
  public get cidrGroupRef() {
    return this.getStringAttribute('cidr_group_ref');
  }
  public set cidrGroupRef(value: string) {
    this._cidrGroupRef = value;
  }
  public resetCidrGroupRef() {
    this._cidrGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrGroupRefInput() {
    return this._cidrGroupRef;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSetOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpoints {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#region DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_ids DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_names DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_names}
  */
  readonly securityGroupsNames?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAwsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    region: cdktf.stringToTerraform(struct!.region),
    security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsIds),
    security_groups_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsNames),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAwsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_groups_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsIds = this._securityGroupsIds;
    }
    if (this._securityGroupsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsNames = this._securityGroupsNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._region = undefined;
      this._securityGroupsIds = undefined;
      this._securityGroupsNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._region = value.region;
      this._securityGroupsIds = value.securityGroupsIds;
      this._securityGroupsNames = value.securityGroupsNames;
    }
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_groups_ids - computed: false, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return this.getListAttribute('security_groups_ids');
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
  }

  // security_groups_names - computed: false, optional: true, required: false
  private _securityGroupsNames?: string[]; 
  public get securityGroupsNames() {
    return this.getListAttribute('security_groups_names');
  }
  public set securityGroupsNames(value: string[]) {
    this._securityGroupsNames = value;
  }
  public resetSecurityGroupsNames() {
    this._securityGroupsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsNamesInput() {
    return this._securityGroupsNames;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroups {
  /**
  * AWSGroup is an structure that can be used to whitelisting information from AWS integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#aws DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#aws}
  */
  readonly aws?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAws;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAwsToTerraform(struct!.aws),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAws",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodes {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequires {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequires | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequires | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequires[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFields {
  /**
  * Family is a IP address version. Currently, we support 'IPv4' and 'IPv6'. 'IPv4' is set as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#family DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#family}
  */
  readonly family?: string;
  /**
  * Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, 'EchoReply'). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#type DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFieldsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFieldsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._type = value.type;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFieldsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmps {
  /**
  * Fields is a list of ICMP fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#fields DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#fields}
  */
  readonly fields?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFields[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFieldsToTerraform, false)(struct!.fields),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmps[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfig {
  /**
  * Kind is the resource type being referred to. Defaults to CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig for CiliumNetworkPolicy and CiliumClusterwideNetworkPolicy, respectively. The only case this is currently explicitly needed is when referring to a CiliumClusterwideEnvoyConfig from CiliumNetworkPolicy, as using a namespaced listener from a cluster scoped policy is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#kind DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the resource name of the CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig where the listener is defined in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfigToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfigToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListener {
  /**
  * EnvoyConfig is a reference to the CEC or CCEC resource in which the listener is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#envoy_config DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#envoy_config}
  */
  readonly envoyConfig: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfig;
  /**
  * Name is the name of the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Priority for this Listener that is used when multiple rules would apply different listeners to a policy map entry. Behavior of this is implementation dependent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#priority DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#priority}
  */
  readonly priority?: number;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envoy_config: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfigToTerraform(struct!.envoyConfig),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envoy_config: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfigToHclTerraform(struct!.envoyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfig",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envoyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyConfig = this._envoyConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._envoyConfig.internalValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._envoyConfig.internalValue = value.envoyConfig;
      this._name = value.name;
      this._priority = value.priority;
    }
  }

  // envoy_config - computed: false, optional: false, required: true
  private _envoyConfig = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfigOutputReference(this, "envoy_config");
  public get envoyConfig() {
    return this._envoyConfig;
  }
  public putEnvoyConfig(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerEnvoyConfig) {
    this._envoyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyConfigInput() {
    return this._envoyConfig.internalValue;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecret {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecretToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecretToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTls {
  /**
  * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#certificate DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#private_key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt' - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#secret DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#secret}
  */
  readonly secret: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecret;
  /**
  * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#trusted_ca DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#trusted_ca}
  */
  readonly trustedCa?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    secret: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecretToTerraform(struct!.secret),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecret",
    },
    trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._trustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._privateKey = undefined;
      this._secret.internalValue = undefined;
      this._trustedCa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
      this._secret.internalValue = value.secret;
      this._trustedCa = value.trustedCa;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPorts {
  /**
  * EndPort can only be an L4 port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#end_port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * Port can be an L4 port number, or a name in the form of 'http' or 'http-8080'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#port}
  */
  readonly port: string;
  /**
  * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: 'TCP', 'UDP', 'SCTP', 'ANY' Matching on ICMP is not supported. Named port specified for a container may narrow this down, but may not contradict this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#protocol DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDns {
  /**
  * MatchName matches literal DNS names. A trailing '.' is automatically added when missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_name}
  */
  readonly matchName?: string;
  /**
  * MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - '*' matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a '*' as the leftmost character, without a following '.' matches all subdomains as well as the name to the right. A trailing '.' is automatically added when missing. Examples: '*.cilium.io' matches subomains of cilium at that level www.cilium.io and blog.cilium.io match, cilium.io and google.com do not '*cilium.io' matches cilium.io and all subdomains ends with 'cilium.io' except those containing '.' separator, subcilium.io and sub-cilium.io match, www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with 'sub' sub.cilium.io and subdomain.cilium.io match, www.cilium.io, blog.cilium.io, cilium.io and google.com do not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_pattern DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_pattern}
  */
  readonly matchPattern?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDnsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_name: cdktf.stringToTerraform(struct!.matchName),
    match_pattern: cdktf.stringToTerraform(struct!.matchPattern),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDnsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_name: {
      value: cdktf.stringToHclTerraform(struct!.matchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktf.stringToHclTerraform(struct!.matchPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchName = this._matchName;
    }
    if (this._matchPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchName = undefined;
      this._matchPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchName = value.matchName;
      this._matchPattern = value.matchPattern;
    }
  }

  // match_name - computed: false, optional: true, required: false
  private _matchName?: string; 
  public get matchName() {
    return this.getStringAttribute('match_name');
  }
  public set matchName(value: string) {
    this._matchName = value;
  }
  public resetMatchName() {
    this._matchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNameInput() {
    return this._matchName;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern?: string; 
  public get matchPattern() {
    return this.getStringAttribute('match_pattern');
  }
  public set matchPattern(value: string) {
    this._matchPattern = value;
  }
  public resetMatchPattern() {
    this._matchPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDnsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecret {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecretToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecretToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatches {
  /**
  * Mismatch identifies what to do in case there is no match. The default is to drop the request. Otherwise the overall rule is still considered as matching, but the mismatches are logged in the access log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#mismatch DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#mismatch}
  */
  readonly mismatch?: string;
  /**
  * Name identifies the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no 'Value' specified, the match will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#secret DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#secret}
  */
  readonly secret?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecret;
  /**
  * Value matches the exact value of the header. Can be specified either alone or together with 'Secret'; will be used as the header value if the secret can not be found in the latter case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#value DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mismatch: cdktf.stringToTerraform(struct!.mismatch),
    name: cdktf.stringToTerraform(struct!.name),
    secret: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mismatch: {
      value: cdktf.stringToHclTerraform(struct!.mismatch),
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
    secret: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecret",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatch = this._mismatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mismatch = undefined;
      this._name = undefined;
      this._secret.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mismatch = value.mismatch;
      this._name = value.name;
      this._secret.internalValue = value.secret;
      this._value = value.value;
    }
  }

  // mismatch - computed: false, optional: true, required: false
  private _mismatch?: string; 
  public get mismatch() {
    return this.getStringAttribute('mismatch');
  }
  public set mismatch(value: string) {
    this._mismatch = value;
  }
  public resetMismatch() {
    this._mismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchInput() {
    return this._mismatch;
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

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttp {
  /**
  * HeaderMatches is a list of HTTP headers which must be present and match against the given values. Mismatch field can be used to specify what to do when there is no match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#header_matches DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#header_matches}
  */
  readonly headerMatches?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatches[] | cdktf.IResolvable;
  /**
  * Headers is a list of HTTP headers which must be present in the request. If omitted or empty, requests are allowed regardless of headers present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#headers DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * Host is an extended POSIX regex matched against the host header of a request. Examples: - foo.bar.com will match the host fooXbar.com or foo-bar.com - foo.bar.com will only match the host foo.bar.com If omitted or empty, the value of the host header is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#host DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#host}
  */
  readonly host?: string;
  /**
  * Method is an extended POSIX regex matched against the method of a request, e.g. 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', ... If omitted or empty, all methods are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#method DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#method}
  */
  readonly method?: string;
  /**
  * Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional 'path' part of a URL as defined by RFC 3986. If omitted or empty, all paths are all allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#path DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_matches: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesToTerraform, false)(struct!.headerMatches),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    host: cdktf.stringToTerraform(struct!.host),
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_matches: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesToHclTerraform, false)(struct!.headerMatches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerMatches = this._headerMatches?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerMatches.internalValue = undefined;
      this._headers = undefined;
      this._host = undefined;
      this._method = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerMatches.internalValue = value.headerMatches;
      this._headers = value.headers;
      this._host = value.host;
      this._method = value.method;
      this._path = value.path;
    }
  }

  // header_matches - computed: false, optional: true, required: false
  private _headerMatches = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatchesList(this, "header_matches", false);
  public get headerMatches() {
    return this._headerMatches;
  }
  public putHeaderMatches(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpHeaderMatches[] | cdktf.IResolvable) {
    this._headerMatches.internalValue = value;
  }
  public resetHeaderMatches() {
    this._headerMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerMatchesInput() {
    return this._headerMatches.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttp[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafka {
  /**
  * APIKey is a case-insensitive string matched against the key of a request, e.g. 'produce', 'fetch', 'createtopic', 'deletetopic', et al Reference: https://kafka.apache.org/protocol#protocol_api_keys If omitted or empty, and if Role is not specified, then all keys are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#api_key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#api_key}
  */
  readonly apiKey?: string;
  /**
  * APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer. If omitted or empty, all versions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#api_version DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * ClientID is the client identifier as provided in the request. From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client. If omitted or empty, all client identifiers are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#client_id DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * Role is a case-insensitive string and describes a group of API keys necessary to perform certain higher-level Kafka operations such as 'produce' or 'consume'. A Role automatically expands into all APIKeys required to perform the specified higher-level operation. The following values are supported: - 'produce': Allow producing to the topics specified in the rule - 'consume': Allow consuming from the topics specified in the rule This field is incompatible with the APIKey field, i.e APIKey and Role cannot both be specified in the same rule. If omitted or empty, and if APIKey is not specified, then all keys are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#role DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#role}
  */
  readonly role?: string;
  /**
  * Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected. This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _. Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255. If omitted or empty, all topics are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#topic DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#topic}
  */
  readonly topic?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafkaToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    role: cdktf.stringToTerraform(struct!.role),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafkaToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafkaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiVersion = undefined;
      this._clientId = undefined;
      this._role = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiVersion = value.apiVersion;
      this._clientId = value.clientId;
      this._role = value.role;
      this._topic = value.topic;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafkaList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafka[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafkaOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRules {
  /**
  * DNS-specific rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#dns DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#dns}
  */
  readonly dns?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDns[] | cdktf.IResolvable;
  /**
  * HTTP specific rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#http DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#http}
  */
  readonly http?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttp[] | cdktf.IResolvable;
  /**
  * Kafka-specific rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#kafka DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#kafka}
  */
  readonly kafka?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafka[] | cdktf.IResolvable;
  /**
  * Key-value pair rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#l7 DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#l7}
  */
  readonly l7?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Name of the L7 protocol for which the Key-value pair rules apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#l7proto DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#l7proto}
  */
  readonly l7Proto?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDnsToTerraform, false)(struct!.dns),
    http: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpToTerraform, false)(struct!.http),
    kafka: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafkaToTerraform, false)(struct!.kafka),
    l7: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.l7),
    l7proto: cdktf.stringToTerraform(struct!.l7Proto),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDnsToHclTerraform, false)(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDnsList",
    },
    http: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpToHclTerraform, false)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpList",
    },
    kafka: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafkaToHclTerraform, false)(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafkaList",
    },
    l7: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.l7),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    l7proto: {
      value: cdktf.stringToHclTerraform(struct!.l7Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._l7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7 = this._l7;
    }
    if (this._l7Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7Proto = this._l7Proto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns.internalValue = undefined;
      this._http.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._l7 = undefined;
      this._l7Proto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns.internalValue = value.dns;
      this._http.internalValue = value.http;
      this._kafka.internalValue = value.kafka;
      this._l7 = value.l7;
      this._l7Proto = value.l7Proto;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }
  public putDns(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesDns[] | cdktf.IResolvable) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafkaList(this, "kafka", false);
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesKafka[] | cdktf.IResolvable) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // l7 - computed: false, optional: true, required: false
  private _l7?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get l7() {
    return this.interpolationForAttribute('l7');
  }
  public set l7(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._l7 = value;
  }
  public resetL7() {
    this._l7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7Input() {
    return this._l7;
  }

  // l7proto - computed: false, optional: true, required: false
  private _l7Proto?: string; 
  public get l7Proto() {
    return this.getStringAttribute('l7proto');
  }
  public set l7Proto(value: string) {
    this._l7Proto = value;
  }
  public resetL7Proto() {
    this._l7Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7ProtoInput() {
    return this._l7Proto;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecret {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecretToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecretToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTls {
  /**
  * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#certificate DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#private_key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt' - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#secret DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#secret}
  */
  readonly secret: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecret;
  /**
  * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#trusted_ca DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#trusted_ca}
  */
  readonly trustedCa?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    secret: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecretToTerraform(struct!.secret),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecret",
    },
    trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._trustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._privateKey = undefined;
      this._secret.internalValue = undefined;
      this._trustedCa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
      this._secret.internalValue = value.secret;
      this._trustedCa = value.trustedCa;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPorts {
  /**
  * listener specifies the name of a custom Envoy listener to which this traffic should be redirected to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#listener DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#listener}
  */
  readonly listener?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListener;
  /**
  * OriginatingTLS is the TLS context for the connections originated by the L7 proxy. For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#originating_tls DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#originating_tls}
  */
  readonly originatingTls?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTls;
  /**
  * Ports is a list of L4 port/protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ports}
  */
  readonly ports?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPorts[] | cdktf.IResolvable;
  /**
  * Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#rules DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#rules}
  */
  readonly rules?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRules;
  /**
  * ServerNames is a list of allowed TLS SNI values. If not empty, then TLS must be present and one of the provided SNIs must be indicated in the TLS handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#server_names DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#server_names}
  */
  readonly serverNames?: string[];
  /**
  * TerminatingTLS is the TLS context for the connection terminated by the L7 proxy. For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#terminating_tls DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#terminating_tls}
  */
  readonly terminatingTls?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTls;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerToTerraform(struct!.listener),
    originating_tls: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsToTerraform(struct!.originatingTls),
    ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPortsToTerraform, false)(struct!.ports),
    rules: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesToTerraform(struct!.rules),
    server_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverNames),
    terminating_tls: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsToTerraform(struct!.terminatingTls),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerToHclTerraform(struct!.listener),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListener",
    },
    originating_tls: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsToHclTerraform(struct!.originatingTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTls",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPortsList",
    },
    rules: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesToHclTerraform(struct!.rules),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRules",
    },
    server_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    terminating_tls: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsToHclTerraform(struct!.terminatingTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    if (this._originatingTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originatingTls = this._originatingTls?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._serverNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNames = this._serverNames;
    }
    if (this._terminatingTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminatingTls = this._terminatingTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listener.internalValue = undefined;
      this._originatingTls.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._serverNames = undefined;
      this._terminatingTls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listener.internalValue = value.listener;
      this._originatingTls.internalValue = value.originatingTls;
      this._ports.internalValue = value.ports;
      this._rules.internalValue = value.rules;
      this._serverNames = value.serverNames;
      this._terminatingTls.internalValue = value.terminatingTls;
    }
  }

  // listener - computed: false, optional: true, required: false
  private _listener = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListenerOutputReference(this, "listener");
  public get listener() {
    return this._listener;
  }
  public putListener(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsListener) {
    this._listener.internalValue = value;
  }
  public resetListener() {
    this._listener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // originating_tls - computed: false, optional: true, required: false
  private _originatingTls = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTlsOutputReference(this, "originating_tls");
  public get originatingTls() {
    return this._originatingTls;
  }
  public putOriginatingTls(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOriginatingTls) {
    this._originatingTls.internalValue = value;
  }
  public resetOriginatingTls() {
    this._originatingTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatingTlsInput() {
    return this._originatingTls.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // server_names - computed: false, optional: true, required: false
  private _serverNames?: string[]; 
  public get serverNames() {
    return this.getListAttribute('server_names');
  }
  public set serverNames(value: string[]) {
    this._serverNames = value;
  }
  public resetServerNames() {
    this._serverNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNamesInput() {
    return this._serverNames;
  }

  // terminating_tls - computed: false, optional: true, required: false
  private _terminatingTls = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTlsOutputReference(this, "terminating_tls");
  public get terminatingTls() {
    return this._terminatingTls;
  }
  public putTerminatingTls(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsTerminatingTls) {
    this._terminatingTls.internalValue = value;
  }
  public resetTerminatingTls() {
    this._terminatingTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatingTlsInput() {
    return this._terminatingTls.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngress {
  /**
  * Authentication is the required authentication type for the allowed traffic, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#authentication DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#authentication}
  */
  readonly authentication?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthentication;
  /**
  * FromCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from. Only connections which do *not* originate from the cluster or from the local host are subject to CIDR rules. In order to allow in-cluster connectivity, use the FromEndpoints field. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet. Example: Any endpoint with the label 'app=my-legacy-pet' is allowed to receive connections from 10.3.9.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_cidr}
  */
  readonly fromCidr?: string[];
  /**
  * FromCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from in addition to FromEndpoints, along with a list of subnets contained within their corresponding IP block from which traffic should not be allowed. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet. Example: Any endpoint with the label 'app=my-legacy-pet' is allowed to receive connections from 10.0.0.0/8 except from IPs in subnet 10.96.0.0/12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_cidr_set DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_cidr_set}
  */
  readonly fromCidrSet?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSet[] | cdktf.IResolvable;
  /**
  * FromEndpoints is a list of endpoints identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule. Example: Any endpoint with the label 'role=backend' can be consumed by any endpoint carrying the label 'role=frontend'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_endpoints DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_endpoints}
  */
  readonly fromEndpoints?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpoints[] | cdktf.IResolvable;
  /**
  * FromEntities is a list of special entities which the endpoint subject to the rule is allowed to receive connections from. Supported entities are 'world', 'cluster' and 'host'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_entities DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_entities}
  */
  readonly fromEntities?: string[];
  /**
  * FromGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives: Example: FromGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_groups DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_groups}
  */
  readonly fromGroups?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroups[] | cdktf.IResolvable;
  /**
  * FromNodes is a list of nodes identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_nodes DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_nodes}
  */
  readonly fromNodes?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodes[] | cdktf.IResolvable;
  /**
  * FromRequires is a list of additional constraints which must be met in order for the selected endpoints to be reachable. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching FromEndpoints. Example: Any Endpoint with the label 'team=A' requires consuming endpoint to also carry the label 'team=A'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_requires DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_requires}
  */
  readonly fromRequires?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequires[] | cdktf.IResolvable;
  /**
  * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is allowed to receive connections on. Example: Any endpoint with the label 'app=httpd' can only accept incoming type 8 ICMP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#icmps DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#icmps}
  */
  readonly icmps?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmps[] | cdktf.IResolvable;
  /**
  * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is allowed to receive connections on. Example: Any endpoint with the label 'app=httpd' can only accept incoming connections on port 80/tcp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_ports}
  */
  readonly toPorts?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPorts[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthenticationToTerraform(struct!.authentication),
    from_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fromCidr),
    from_cidr_set: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSetToTerraform, false)(struct!.fromCidrSet),
    from_endpoints: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsToTerraform, false)(struct!.fromEndpoints),
    from_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fromEntities),
    from_groups: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsToTerraform, false)(struct!.fromGroups),
    from_nodes: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesToTerraform, false)(struct!.fromNodes),
    from_requires: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresToTerraform, false)(struct!.fromRequires),
    icmps: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsToTerraform, false)(struct!.icmps),
    to_ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsToTerraform, false)(struct!.toPorts),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthentication",
    },
    from_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fromCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_cidr_set: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSetToHclTerraform, false)(struct!.fromCidrSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSetList",
    },
    from_endpoints: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsToHclTerraform, false)(struct!.fromEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsList",
    },
    from_entities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fromEntities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_groups: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsToHclTerraform, false)(struct!.fromGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsList",
    },
    from_nodes: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesToHclTerraform, false)(struct!.fromNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesList",
    },
    from_requires: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresToHclTerraform, false)(struct!.fromRequires),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresList",
    },
    icmps: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsToHclTerraform, false)(struct!.icmps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsList",
    },
    to_ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsToHclTerraform, false)(struct!.toPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._fromCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCidr = this._fromCidr;
    }
    if (this._fromCidrSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCidrSet = this._fromCidrSet?.internalValue;
    }
    if (this._fromEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEndpoints = this._fromEndpoints?.internalValue;
    }
    if (this._fromEntities !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEntities = this._fromEntities;
    }
    if (this._fromGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromGroups = this._fromGroups?.internalValue;
    }
    if (this._fromNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromNodes = this._fromNodes?.internalValue;
    }
    if (this._fromRequires?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromRequires = this._fromRequires?.internalValue;
    }
    if (this._icmps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmps = this._icmps?.internalValue;
    }
    if (this._toPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPorts = this._toPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._fromCidr = undefined;
      this._fromCidrSet.internalValue = undefined;
      this._fromEndpoints.internalValue = undefined;
      this._fromEntities = undefined;
      this._fromGroups.internalValue = undefined;
      this._fromNodes.internalValue = undefined;
      this._fromRequires.internalValue = undefined;
      this._icmps.internalValue = undefined;
      this._toPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._fromCidr = value.fromCidr;
      this._fromCidrSet.internalValue = value.fromCidrSet;
      this._fromEndpoints.internalValue = value.fromEndpoints;
      this._fromEntities = value.fromEntities;
      this._fromGroups.internalValue = value.fromGroups;
      this._fromNodes.internalValue = value.fromNodes;
      this._fromRequires.internalValue = value.fromRequires;
      this._icmps.internalValue = value.icmps;
      this._toPorts.internalValue = value.toPorts;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // from_cidr - computed: false, optional: true, required: false
  private _fromCidr?: string[]; 
  public get fromCidr() {
    return this.getListAttribute('from_cidr');
  }
  public set fromCidr(value: string[]) {
    this._fromCidr = value;
  }
  public resetFromCidr() {
    this._fromCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCidrInput() {
    return this._fromCidr;
  }

  // from_cidr_set - computed: false, optional: true, required: false
  private _fromCidrSet = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSetList(this, "from_cidr_set", false);
  public get fromCidrSet() {
    return this._fromCidrSet;
  }
  public putFromCidrSet(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromCidrSet[] | cdktf.IResolvable) {
    this._fromCidrSet.internalValue = value;
  }
  public resetFromCidrSet() {
    this._fromCidrSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCidrSetInput() {
    return this._fromCidrSet.internalValue;
  }

  // from_endpoints - computed: false, optional: true, required: false
  private _fromEndpoints = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpointsList(this, "from_endpoints", false);
  public get fromEndpoints() {
    return this._fromEndpoints;
  }
  public putFromEndpoints(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromEndpoints[] | cdktf.IResolvable) {
    this._fromEndpoints.internalValue = value;
  }
  public resetFromEndpoints() {
    this._fromEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEndpointsInput() {
    return this._fromEndpoints.internalValue;
  }

  // from_entities - computed: false, optional: true, required: false
  private _fromEntities?: string[]; 
  public get fromEntities() {
    return this.getListAttribute('from_entities');
  }
  public set fromEntities(value: string[]) {
    this._fromEntities = value;
  }
  public resetFromEntities() {
    this._fromEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEntitiesInput() {
    return this._fromEntities;
  }

  // from_groups - computed: false, optional: true, required: false
  private _fromGroups = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroupsList(this, "from_groups", false);
  public get fromGroups() {
    return this._fromGroups;
  }
  public putFromGroups(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromGroups[] | cdktf.IResolvable) {
    this._fromGroups.internalValue = value;
  }
  public resetFromGroups() {
    this._fromGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromGroupsInput() {
    return this._fromGroups.internalValue;
  }

  // from_nodes - computed: false, optional: true, required: false
  private _fromNodes = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodesList(this, "from_nodes", false);
  public get fromNodes() {
    return this._fromNodes;
  }
  public putFromNodes(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromNodes[] | cdktf.IResolvable) {
    this._fromNodes.internalValue = value;
  }
  public resetFromNodes() {
    this._fromNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNodesInput() {
    return this._fromNodes.internalValue;
  }

  // from_requires - computed: false, optional: true, required: false
  private _fromRequires = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequiresList(this, "from_requires", false);
  public get fromRequires() {
    return this._fromRequires;
  }
  public putFromRequires(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressFromRequires[] | cdktf.IResolvable) {
    this._fromRequires.internalValue = value;
  }
  public resetFromRequires() {
    this._fromRequires.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromRequiresInput() {
    return this._fromRequires.internalValue;
  }

  // icmps - computed: false, optional: true, required: false
  private _icmps = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmpsList(this, "icmps", false);
  public get icmps() {
    return this._icmps;
  }
  public putIcmps(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressIcmps[] | cdktf.IResolvable) {
    this._icmps.internalValue = value;
  }
  public resetIcmps() {
    this._icmps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpsInput() {
    return this._icmps.internalValue;
  }

  // to_ports - computed: false, optional: true, required: false
  private _toPorts = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPortsList(this, "to_ports", false);
  public get toPorts() {
    return this._toPorts;
  }
  public putToPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToPorts[] | cdktf.IResolvable) {
    this._toPorts.internalValue = value;
  }
  public resetToPorts() {
    this._toPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortsInput() {
    return this._toPorts.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSet {
  /**
  * CIDR is a CIDR prefix / IP Block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr_group_ref DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr_group_ref}
  */
  readonly cidrGroupRef?: string;
  /**
  * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#except DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSetToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    cidr_group_ref: cdktf.stringToTerraform(struct!.cidrGroupRef),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSetToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.cidrGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._cidrGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrGroupRef = this._cidrGroupRef;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._cidrGroupRef = undefined;
      this._except = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._cidrGroupRef = value.cidrGroupRef;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cidr_group_ref - computed: false, optional: true, required: false
  private _cidrGroupRef?: string; 
  public get cidrGroupRef() {
    return this.getStringAttribute('cidr_group_ref');
  }
  public set cidrGroupRef(value: string) {
    this._cidrGroupRef = value;
  }
  public resetCidrGroupRef() {
    this._cidrGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrGroupRefInput() {
    return this._cidrGroupRef;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSetOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpoints {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#region DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_ids DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_names DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_names}
  */
  readonly securityGroupsNames?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAwsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    region: cdktf.stringToTerraform(struct!.region),
    security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsIds),
    security_groups_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsNames),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAwsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_groups_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsIds = this._securityGroupsIds;
    }
    if (this._securityGroupsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsNames = this._securityGroupsNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._region = undefined;
      this._securityGroupsIds = undefined;
      this._securityGroupsNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._region = value.region;
      this._securityGroupsIds = value.securityGroupsIds;
      this._securityGroupsNames = value.securityGroupsNames;
    }
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_groups_ids - computed: false, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return this.getListAttribute('security_groups_ids');
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
  }

  // security_groups_names - computed: false, optional: true, required: false
  private _securityGroupsNames?: string[]; 
  public get securityGroupsNames() {
    return this.getListAttribute('security_groups_names');
  }
  public set securityGroupsNames(value: string[]) {
    this._securityGroupsNames = value;
  }
  public resetSecurityGroupsNames() {
    this._securityGroupsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsNamesInput() {
    return this._securityGroupsNames;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroups {
  /**
  * AWSGroup is an structure that can be used to whitelisting information from AWS integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#aws DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#aws}
  */
  readonly aws?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAws;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAwsToTerraform(struct!.aws),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAws",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodes {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequires {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequires | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequires | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequires[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFields {
  /**
  * Family is a IP address version. Currently, we support 'IPv4' and 'IPv6'. 'IPv4' is set as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#family DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#family}
  */
  readonly family?: string;
  /**
  * Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, 'EchoReply'). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#type DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFieldsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFieldsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._type = value.type;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFieldsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmps {
  /**
  * Fields is a list of ICMP fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#fields DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#fields}
  */
  readonly fields?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFields[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFieldsToTerraform, false)(struct!.fields),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmps[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPorts {
  /**
  * EndPort can only be an L4 port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#end_port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * Port can be an L4 port number, or a name in the form of 'http' or 'http-8080'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#port}
  */
  readonly port: string;
  /**
  * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: 'TCP', 'UDP', 'SCTP', 'ANY' Matching on ICMP is not supported. Named port specified for a container may narrow this down, but may not contradict this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#protocol DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPorts {
  /**
  * Ports is a list of L4 port/protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ports}
  */
  readonly ports?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPorts[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports.internalValue = value.ports;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDeny {
  /**
  * FromCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from. Only connections which do *not* originate from the cluster or from the local host are subject to CIDR rules. In order to allow in-cluster connectivity, use the FromEndpoints field. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet. Example: Any endpoint with the label 'app=my-legacy-pet' is allowed to receive connections from 10.3.9.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_cidr}
  */
  readonly fromCidr?: string[];
  /**
  * FromCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from in addition to FromEndpoints, along with a list of subnets contained within their corresponding IP block from which traffic should not be allowed. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet. Example: Any endpoint with the label 'app=my-legacy-pet' is allowed to receive connections from 10.0.0.0/8 except from IPs in subnet 10.96.0.0/12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_cidr_set DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_cidr_set}
  */
  readonly fromCidrSet?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSet[] | cdktf.IResolvable;
  /**
  * FromEndpoints is a list of endpoints identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule. Example: Any endpoint with the label 'role=backend' can be consumed by any endpoint carrying the label 'role=frontend'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_endpoints DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_endpoints}
  */
  readonly fromEndpoints?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpoints[] | cdktf.IResolvable;
  /**
  * FromEntities is a list of special entities which the endpoint subject to the rule is allowed to receive connections from. Supported entities are 'world', 'cluster' and 'host'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_entities DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_entities}
  */
  readonly fromEntities?: string[];
  /**
  * FromGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives: Example: FromGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_groups DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_groups}
  */
  readonly fromGroups?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroups[] | cdktf.IResolvable;
  /**
  * FromNodes is a list of nodes identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_nodes DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_nodes}
  */
  readonly fromNodes?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodes[] | cdktf.IResolvable;
  /**
  * FromRequires is a list of additional constraints which must be met in order for the selected endpoints to be reachable. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching FromEndpoints. Example: Any Endpoint with the label 'team=A' requires consuming endpoint to also carry the label 'team=A'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_requires DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_requires}
  */
  readonly fromRequires?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequires[] | cdktf.IResolvable;
  /**
  * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is not allowed to receive connections on. Example: Any endpoint with the label 'app=httpd' can not accept incoming type 8 ICMP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#icmps DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#icmps}
  */
  readonly icmps?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmps[] | cdktf.IResolvable;
  /**
  * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is not allowed to receive connections on. Example: Any endpoint with the label 'app=httpd' can not accept incoming connections on port 80/tcp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_ports}
  */
  readonly toPorts?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPorts[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fromCidr),
    from_cidr_set: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSetToTerraform, false)(struct!.fromCidrSet),
    from_endpoints: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsToTerraform, false)(struct!.fromEndpoints),
    from_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fromEntities),
    from_groups: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsToTerraform, false)(struct!.fromGroups),
    from_nodes: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesToTerraform, false)(struct!.fromNodes),
    from_requires: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresToTerraform, false)(struct!.fromRequires),
    icmps: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsToTerraform, false)(struct!.icmps),
    to_ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsToTerraform, false)(struct!.toPorts),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fromCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_cidr_set: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSetToHclTerraform, false)(struct!.fromCidrSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSetList",
    },
    from_endpoints: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsToHclTerraform, false)(struct!.fromEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsList",
    },
    from_entities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fromEntities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_groups: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsToHclTerraform, false)(struct!.fromGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsList",
    },
    from_nodes: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesToHclTerraform, false)(struct!.fromNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesList",
    },
    from_requires: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresToHclTerraform, false)(struct!.fromRequires),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresList",
    },
    icmps: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsToHclTerraform, false)(struct!.icmps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsList",
    },
    to_ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsToHclTerraform, false)(struct!.toPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDeny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCidr = this._fromCidr;
    }
    if (this._fromCidrSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCidrSet = this._fromCidrSet?.internalValue;
    }
    if (this._fromEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEndpoints = this._fromEndpoints?.internalValue;
    }
    if (this._fromEntities !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEntities = this._fromEntities;
    }
    if (this._fromGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromGroups = this._fromGroups?.internalValue;
    }
    if (this._fromNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromNodes = this._fromNodes?.internalValue;
    }
    if (this._fromRequires?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromRequires = this._fromRequires?.internalValue;
    }
    if (this._icmps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmps = this._icmps?.internalValue;
    }
    if (this._toPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPorts = this._toPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDeny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromCidr = undefined;
      this._fromCidrSet.internalValue = undefined;
      this._fromEndpoints.internalValue = undefined;
      this._fromEntities = undefined;
      this._fromGroups.internalValue = undefined;
      this._fromNodes.internalValue = undefined;
      this._fromRequires.internalValue = undefined;
      this._icmps.internalValue = undefined;
      this._toPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromCidr = value.fromCidr;
      this._fromCidrSet.internalValue = value.fromCidrSet;
      this._fromEndpoints.internalValue = value.fromEndpoints;
      this._fromEntities = value.fromEntities;
      this._fromGroups.internalValue = value.fromGroups;
      this._fromNodes.internalValue = value.fromNodes;
      this._fromRequires.internalValue = value.fromRequires;
      this._icmps.internalValue = value.icmps;
      this._toPorts.internalValue = value.toPorts;
    }
  }

  // from_cidr - computed: false, optional: true, required: false
  private _fromCidr?: string[]; 
  public get fromCidr() {
    return this.getListAttribute('from_cidr');
  }
  public set fromCidr(value: string[]) {
    this._fromCidr = value;
  }
  public resetFromCidr() {
    this._fromCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCidrInput() {
    return this._fromCidr;
  }

  // from_cidr_set - computed: false, optional: true, required: false
  private _fromCidrSet = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSetList(this, "from_cidr_set", false);
  public get fromCidrSet() {
    return this._fromCidrSet;
  }
  public putFromCidrSet(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromCidrSet[] | cdktf.IResolvable) {
    this._fromCidrSet.internalValue = value;
  }
  public resetFromCidrSet() {
    this._fromCidrSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCidrSetInput() {
    return this._fromCidrSet.internalValue;
  }

  // from_endpoints - computed: false, optional: true, required: false
  private _fromEndpoints = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpointsList(this, "from_endpoints", false);
  public get fromEndpoints() {
    return this._fromEndpoints;
  }
  public putFromEndpoints(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromEndpoints[] | cdktf.IResolvable) {
    this._fromEndpoints.internalValue = value;
  }
  public resetFromEndpoints() {
    this._fromEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEndpointsInput() {
    return this._fromEndpoints.internalValue;
  }

  // from_entities - computed: false, optional: true, required: false
  private _fromEntities?: string[]; 
  public get fromEntities() {
    return this.getListAttribute('from_entities');
  }
  public set fromEntities(value: string[]) {
    this._fromEntities = value;
  }
  public resetFromEntities() {
    this._fromEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEntitiesInput() {
    return this._fromEntities;
  }

  // from_groups - computed: false, optional: true, required: false
  private _fromGroups = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroupsList(this, "from_groups", false);
  public get fromGroups() {
    return this._fromGroups;
  }
  public putFromGroups(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromGroups[] | cdktf.IResolvable) {
    this._fromGroups.internalValue = value;
  }
  public resetFromGroups() {
    this._fromGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromGroupsInput() {
    return this._fromGroups.internalValue;
  }

  // from_nodes - computed: false, optional: true, required: false
  private _fromNodes = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodesList(this, "from_nodes", false);
  public get fromNodes() {
    return this._fromNodes;
  }
  public putFromNodes(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromNodes[] | cdktf.IResolvable) {
    this._fromNodes.internalValue = value;
  }
  public resetFromNodes() {
    this._fromNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNodesInput() {
    return this._fromNodes.internalValue;
  }

  // from_requires - computed: false, optional: true, required: false
  private _fromRequires = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequiresList(this, "from_requires", false);
  public get fromRequires() {
    return this._fromRequires;
  }
  public putFromRequires(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyFromRequires[] | cdktf.IResolvable) {
    this._fromRequires.internalValue = value;
  }
  public resetFromRequires() {
    this._fromRequires.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromRequiresInput() {
    return this._fromRequires.internalValue;
  }

  // icmps - computed: false, optional: true, required: false
  private _icmps = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmpsList(this, "icmps", false);
  public get icmps() {
    return this._icmps;
  }
  public putIcmps(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyIcmps[] | cdktf.IResolvable) {
    this._icmps.internalValue = value;
  }
  public resetIcmps() {
    this._icmps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpsInput() {
    return this._icmps.internalValue;
  }

  // to_ports - computed: false, optional: true, required: false
  private _toPorts = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPortsList(this, "to_ports", false);
  public get toPorts() {
    return this._toPorts;
  }
  public putToPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToPorts[] | cdktf.IResolvable) {
    this._toPorts.internalValue = value;
  }
  public resetToPorts() {
    this._toPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortsInput() {
    return this._toPorts.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDeny[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * Source can be one of the above values (e.g.: LabelSourceContainer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#source DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#value DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabelsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabelsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabels | cdktf.IResolvable): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._source = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._source = value.source;
      this._value = value.value;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabelsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabels[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabelsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpec {
  /**
  * Description is a free form string, it can be used by the creator of the rule to store human readable explanation of the purpose of this rule. Rules cannot be identified by comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#description DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#description}
  */
  readonly description?: string;
  /**
  * Egress is a list of EgressRule which are enforced at egress. If omitted or empty, this rule does not apply at egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#egress DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#egress}
  */
  readonly egress?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgress[] | cdktf.IResolvable;
  /**
  * EgressDeny is a list of EgressDenyRule which are enforced at egress. Any rule inserted here will be denied regardless of the allowed egress rules in the 'egress' field. If omitted or empty, this rule does not apply at egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#egress_deny DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#egress_deny}
  */
  readonly egressDeny?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDeny[] | cdktf.IResolvable;
  /**
  * EnableDefaultDeny determines whether this policy configures the subject endpoint(s) to have a default deny mode. If enabled, this causes all traffic not explicitly allowed by a network policy to be dropped. If not specified, the default is true for each traffic direction that has rules, and false otherwise. For example, if a policy only has Ingress or IngressDeny rules, then the default for ingress is true and egress is false. If multiple policies apply to an endpoint, that endpoint's default deny will be enabled if any policy requests it. This is useful for creating broad-based network policies that will not cause endpoints to enter default-deny mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#enable_default_deny DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#enable_default_deny}
  */
  readonly enableDefaultDeny?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDeny;
  /**
  * EndpointSelector selects all endpoints which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#endpoint_selector DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#endpoint_selector}
  */
  readonly endpointSelector?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelector;
  /**
  * Ingress is a list of IngressRule which are enforced at ingress. If omitted or empty, this rule does not apply at ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ingress DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ingress}
  */
  readonly ingress?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngress[] | cdktf.IResolvable;
  /**
  * IngressDeny is a list of IngressDenyRule which are enforced at ingress. Any rule inserted here will be denied regardless of the allowed ingress rules in the 'ingress' field. If omitted or empty, this rule does not apply at ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ingress_deny DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ingress_deny}
  */
  readonly ingressDeny?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDeny[] | cdktf.IResolvable;
  /**
  * Labels is a list of optional strings which can be used to re-identify the rule or to store metadata. It is possible to lookup or delete strings based on labels. Labels are not required to be unique, multiple rules can have overlapping or identical labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#labels}
  */
  readonly labels?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabels[] | cdktf.IResolvable;
  /**
  * NodeSelector selects all nodes which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive. Can only be used in CiliumClusterwideNetworkPolicies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#node_selector DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#node_selector}
  */
  readonly nodeSelector?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelector;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    egress: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToTerraform, false)(struct!.egress),
    egress_deny: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToTerraform, false)(struct!.egressDeny),
    enable_default_deny: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDenyToTerraform(struct!.enableDefaultDeny),
    endpoint_selector: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorToTerraform(struct!.endpointSelector),
    ingress: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToTerraform, false)(struct!.ingress),
    ingress_deny: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToTerraform, false)(struct!.ingressDeny),
    labels: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabelsToTerraform, false)(struct!.labels),
    node_selector: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorToTerraform(struct!.nodeSelector),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressToHclTerraform, false)(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressList",
    },
    egress_deny: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyToHclTerraform, false)(struct!.egressDeny),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyList",
    },
    enable_default_deny: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDenyToHclTerraform(struct!.enableDefaultDeny),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDeny",
    },
    endpoint_selector: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorToHclTerraform(struct!.endpointSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelector",
    },
    ingress: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressList",
    },
    ingress_deny: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyToHclTerraform, false)(struct!.ingressDeny),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyList",
    },
    labels: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabelsToHclTerraform, false)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabelsList",
    },
    node_selector: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._egress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress?.internalValue;
    }
    if (this._egressDeny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressDeny = this._egressDeny?.internalValue;
    }
    if (this._enableDefaultDeny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDefaultDeny = this._enableDefaultDeny?.internalValue;
    }
    if (this._endpointSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSelector = this._endpointSelector?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._ingressDeny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressDeny = this._ingressDeny?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._egress.internalValue = undefined;
      this._egressDeny.internalValue = undefined;
      this._enableDefaultDeny.internalValue = undefined;
      this._endpointSelector.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._ingressDeny.internalValue = undefined;
      this._labels.internalValue = undefined;
      this._nodeSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._egress.internalValue = value.egress;
      this._egressDeny.internalValue = value.egressDeny;
      this._enableDefaultDeny.internalValue = value.enableDefaultDeny;
      this._endpointSelector.internalValue = value.endpointSelector;
      this._ingress.internalValue = value.ingress;
      this._ingressDeny.internalValue = value.ingressDeny;
      this._labels.internalValue = value.labels;
      this._nodeSelector.internalValue = value.nodeSelector;
    }
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

  // egress - computed: false, optional: true, required: false
  private _egress = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgress[] | cdktf.IResolvable) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // egress_deny - computed: false, optional: true, required: false
  private _egressDeny = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDenyList(this, "egress_deny", false);
  public get egressDeny() {
    return this._egressDeny;
  }
  public putEgressDeny(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEgressDeny[] | cdktf.IResolvable) {
    this._egressDeny.internalValue = value;
  }
  public resetEgressDeny() {
    this._egressDeny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressDenyInput() {
    return this._egressDeny.internalValue;
  }

  // enable_default_deny - computed: false, optional: true, required: false
  private _enableDefaultDeny = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDenyOutputReference(this, "enable_default_deny");
  public get enableDefaultDeny() {
    return this._enableDefaultDeny;
  }
  public putEnableDefaultDeny(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEnableDefaultDeny) {
    this._enableDefaultDeny.internalValue = value;
  }
  public resetEnableDefaultDeny() {
    this._enableDefaultDeny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultDenyInput() {
    return this._enableDefaultDeny.internalValue;
  }

  // endpoint_selector - computed: false, optional: true, required: false
  private _endpointSelector = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelectorOutputReference(this, "endpoint_selector");
  public get endpointSelector() {
    return this._endpointSelector;
  }
  public putEndpointSelector(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecEndpointSelector) {
    this._endpointSelector.internalValue = value;
  }
  public resetEndpointSelector() {
    this._endpointSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSelectorInput() {
    return this._endpointSelector.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // ingress_deny - computed: false, optional: true, required: false
  private _ingressDeny = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDenyList(this, "ingress_deny", false);
  public get ingressDeny() {
    return this._ingressDeny;
  }
  public putIngressDeny(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecIngressDeny[] | cdktf.IResolvable) {
    this._ingressDeny.internalValue = value;
  }
  public resetIngressDeny() {
    this._ingressDeny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressDenyInput() {
    return this._ingressDeny.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthentication {
  /**
  * Mode is the required authentication mode for the allowed traffic, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#mode DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#mode}
  */
  readonly mode: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthenticationToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthenticationToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFields {
  /**
  * Family is a IP address version. Currently, we support 'IPv4' and 'IPv6'. 'IPv4' is set as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#family DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#family}
  */
  readonly family?: string;
  /**
  * Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, 'EchoReply'). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#type DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFieldsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFieldsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._type = value.type;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFieldsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmps {
  /**
  * Fields is a list of ICMP fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#fields DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#fields}
  */
  readonly fields?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFields[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFieldsToTerraform, false)(struct!.fields),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmps[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSet {
  /**
  * CIDR is a CIDR prefix / IP Block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr_group_ref DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr_group_ref}
  */
  readonly cidrGroupRef?: string;
  /**
  * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#except DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    cidr_group_ref: cdktf.stringToTerraform(struct!.cidrGroupRef),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.cidrGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._cidrGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrGroupRef = this._cidrGroupRef;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._cidrGroupRef = undefined;
      this._except = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._cidrGroupRef = value.cidrGroupRef;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cidr_group_ref - computed: false, optional: true, required: false
  private _cidrGroupRef?: string; 
  public get cidrGroupRef() {
    return this.getStringAttribute('cidr_group_ref');
  }
  public set cidrGroupRef(value: string) {
    this._cidrGroupRef = value;
  }
  public resetCidrGroupRef() {
    this._cidrGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrGroupRefInput() {
    return this._cidrGroupRef;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpoints {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNs {
  /**
  * MatchName matches literal DNS names. A trailing '.' is automatically added when missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_name}
  */
  readonly matchName?: string;
  /**
  * MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - '*' matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a '*' as the leftmost character, without a following '.' matches all subdomains as well as the name to the right. A trailing '.' is automatically added when missing. Examples: '*.cilium.io' matches subomains of cilium at that level www.cilium.io and blog.cilium.io match, cilium.io and google.com do not '*cilium.io' matches cilium.io and all subdomains ends with 'cilium.io' except those containing '.' separator, subcilium.io and sub-cilium.io match, www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with 'sub' sub.cilium.io and subdomain.cilium.io match, www.cilium.io, blog.cilium.io, cilium.io and google.com do not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_pattern DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_pattern}
  */
  readonly matchPattern?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_name: cdktf.stringToTerraform(struct!.matchName),
    match_pattern: cdktf.stringToTerraform(struct!.matchPattern),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_name: {
      value: cdktf.stringToHclTerraform(struct!.matchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktf.stringToHclTerraform(struct!.matchPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchName = this._matchName;
    }
    if (this._matchPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchName = undefined;
      this._matchPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchName = value.matchName;
      this._matchPattern = value.matchPattern;
    }
  }

  // match_name - computed: false, optional: true, required: false
  private _matchName?: string; 
  public get matchName() {
    return this.getStringAttribute('match_name');
  }
  public set matchName(value: string) {
    this._matchName = value;
  }
  public resetMatchName() {
    this._matchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNameInput() {
    return this._matchName;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern?: string; 
  public get matchPattern() {
    return this.getStringAttribute('match_pattern');
  }
  public set matchPattern(value: string) {
    this._matchPattern = value;
  }
  public resetMatchPattern() {
    this._matchPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#region DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_ids DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_names DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_names}
  */
  readonly securityGroupsNames?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAwsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    region: cdktf.stringToTerraform(struct!.region),
    security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsIds),
    security_groups_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsNames),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAwsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_groups_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsIds = this._securityGroupsIds;
    }
    if (this._securityGroupsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsNames = this._securityGroupsNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._region = undefined;
      this._securityGroupsIds = undefined;
      this._securityGroupsNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._region = value.region;
      this._securityGroupsIds = value.securityGroupsIds;
      this._securityGroupsNames = value.securityGroupsNames;
    }
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_groups_ids - computed: false, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return this.getListAttribute('security_groups_ids');
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
  }

  // security_groups_names - computed: false, optional: true, required: false
  private _securityGroupsNames?: string[]; 
  public get securityGroupsNames() {
    return this.getListAttribute('security_groups_names');
  }
  public set securityGroupsNames(value: string[]) {
    this._securityGroupsNames = value;
  }
  public resetSecurityGroupsNames() {
    this._securityGroupsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsNamesInput() {
    return this._securityGroupsNames;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroups {
  /**
  * AWSGroup is an structure that can be used to whitelisting information from AWS integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#aws DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#aws}
  */
  readonly aws?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAws;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAwsToTerraform(struct!.aws),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAws",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodes {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfig {
  /**
  * Kind is the resource type being referred to. Defaults to CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig for CiliumNetworkPolicy and CiliumClusterwideNetworkPolicy, respectively. The only case this is currently explicitly needed is when referring to a CiliumClusterwideEnvoyConfig from CiliumNetworkPolicy, as using a namespaced listener from a cluster scoped policy is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#kind DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the resource name of the CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig where the listener is defined in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfigToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfigToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListener {
  /**
  * EnvoyConfig is a reference to the CEC or CCEC resource in which the listener is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#envoy_config DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#envoy_config}
  */
  readonly envoyConfig: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfig;
  /**
  * Name is the name of the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Priority for this Listener that is used when multiple rules would apply different listeners to a policy map entry. Behavior of this is implementation dependent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#priority DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#priority}
  */
  readonly priority?: number;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envoy_config: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfigToTerraform(struct!.envoyConfig),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envoy_config: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfigToHclTerraform(struct!.envoyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfig",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envoyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyConfig = this._envoyConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._envoyConfig.internalValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._envoyConfig.internalValue = value.envoyConfig;
      this._name = value.name;
      this._priority = value.priority;
    }
  }

  // envoy_config - computed: false, optional: false, required: true
  private _envoyConfig = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfigOutputReference(this, "envoy_config");
  public get envoyConfig() {
    return this._envoyConfig;
  }
  public putEnvoyConfig(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerEnvoyConfig) {
    this._envoyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyConfigInput() {
    return this._envoyConfig.internalValue;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecret {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecretToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecretToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTls {
  /**
  * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#certificate DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#private_key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt' - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#secret DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#secret}
  */
  readonly secret: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecret;
  /**
  * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#trusted_ca DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#trusted_ca}
  */
  readonly trustedCa?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    secret: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecretToTerraform(struct!.secret),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecret",
    },
    trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._trustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._privateKey = undefined;
      this._secret.internalValue = undefined;
      this._trustedCa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
      this._secret.internalValue = value.secret;
      this._trustedCa = value.trustedCa;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPorts {
  /**
  * EndPort can only be an L4 port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#end_port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * Port can be an L4 port number, or a name in the form of 'http' or 'http-8080'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#port}
  */
  readonly port: string;
  /**
  * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: 'TCP', 'UDP', 'SCTP', 'ANY' Matching on ICMP is not supported. Named port specified for a container may narrow this down, but may not contradict this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#protocol DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDns {
  /**
  * MatchName matches literal DNS names. A trailing '.' is automatically added when missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_name}
  */
  readonly matchName?: string;
  /**
  * MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - '*' matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a '*' as the leftmost character, without a following '.' matches all subdomains as well as the name to the right. A trailing '.' is automatically added when missing. Examples: '*.cilium.io' matches subomains of cilium at that level www.cilium.io and blog.cilium.io match, cilium.io and google.com do not '*cilium.io' matches cilium.io and all subdomains ends with 'cilium.io' except those containing '.' separator, subcilium.io and sub-cilium.io match, www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with 'sub' sub.cilium.io and subdomain.cilium.io match, www.cilium.io, blog.cilium.io, cilium.io and google.com do not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_pattern DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_pattern}
  */
  readonly matchPattern?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_name: cdktf.stringToTerraform(struct!.matchName),
    match_pattern: cdktf.stringToTerraform(struct!.matchPattern),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_name: {
      value: cdktf.stringToHclTerraform(struct!.matchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktf.stringToHclTerraform(struct!.matchPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchName = this._matchName;
    }
    if (this._matchPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchName = undefined;
      this._matchPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchName = value.matchName;
      this._matchPattern = value.matchPattern;
    }
  }

  // match_name - computed: false, optional: true, required: false
  private _matchName?: string; 
  public get matchName() {
    return this.getStringAttribute('match_name');
  }
  public set matchName(value: string) {
    this._matchName = value;
  }
  public resetMatchName() {
    this._matchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNameInput() {
    return this._matchName;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern?: string; 
  public get matchPattern() {
    return this.getStringAttribute('match_pattern');
  }
  public set matchPattern(value: string) {
    this._matchPattern = value;
  }
  public resetMatchPattern() {
    this._matchPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecret {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecretToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecretToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatches {
  /**
  * Mismatch identifies what to do in case there is no match. The default is to drop the request. Otherwise the overall rule is still considered as matching, but the mismatches are logged in the access log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#mismatch DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#mismatch}
  */
  readonly mismatch?: string;
  /**
  * Name identifies the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no 'Value' specified, the match will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#secret DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#secret}
  */
  readonly secret?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecret;
  /**
  * Value matches the exact value of the header. Can be specified either alone or together with 'Secret'; will be used as the header value if the secret can not be found in the latter case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#value DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mismatch: cdktf.stringToTerraform(struct!.mismatch),
    name: cdktf.stringToTerraform(struct!.name),
    secret: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mismatch: {
      value: cdktf.stringToHclTerraform(struct!.mismatch),
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
    secret: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecret",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatch = this._mismatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mismatch = undefined;
      this._name = undefined;
      this._secret.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mismatch = value.mismatch;
      this._name = value.name;
      this._secret.internalValue = value.secret;
      this._value = value.value;
    }
  }

  // mismatch - computed: false, optional: true, required: false
  private _mismatch?: string; 
  public get mismatch() {
    return this.getStringAttribute('mismatch');
  }
  public set mismatch(value: string) {
    this._mismatch = value;
  }
  public resetMismatch() {
    this._mismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchInput() {
    return this._mismatch;
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

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
