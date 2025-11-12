// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgIpPoolV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#metadata DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadata;
  /**
  * IPPoolSpec contains the specification for an IPPool resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#spec DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#annotations DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#labels DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#name DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpip {
  /**
  * When enabled is true, ipip tunneling will be used to deliver packets to destinations within this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#enabled DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The IPIP mode. This can be one of 'always' or 'cross-subnet'. A mode of 'always' will also use IPIP tunneling for routing to destination IP addresses within this pool. A mode of 'cross-subnet' will only use IPIP tunneling when the destination node is on a different subnet to the originating node. The default value (if not specified) is 'always'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#mode DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpipToTerraform(struct?: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpipToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._mode = value.mode;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpec {
  /**
  * AllowedUse controls what the IP pool will be used for. If not specified or empty, defaults to ['Tunnel', 'Workload'] for back-compatibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#allowed_uses DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#allowed_uses}
  */
  readonly allowedUses?: string[];
  /**
  * The block size to use for IP address assignments from this pool. Defaults to 26 for IPv4 and 122 for IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#block_size DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#block_size}
  */
  readonly blockSize?: number;
  /**
  * The pool CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#cidr DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * Disable exporting routes from this IP Pool's CIDR over BGP. [Default: false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#disable_bgp_export DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#disable_bgp_export}
  */
  readonly disableBgpExport?: boolean | cdktf.IResolvable;
  /**
  * When disabled is true, Calico IPAM will not assign addresses from this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#disabled DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Deprecated: this field is only used for APIv1 backwards compatibility. Setting this field is not allowed, this field is for internal use only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#ipip DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#ipip}
  */
  readonly ipip?: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpip;
  /**
  * Contains configuration for IPIP tunneling for this pool. If not specified, then this is defaulted to 'Never' (i.e. IPIP tunneling is disabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#ipip_mode DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#ipip_mode}
  */
  readonly ipipMode?: string;
  /**
  * When natOutgoing is true, packets sent from Calico networked containers in this pool to destinations outside of this pool will be masqueraded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#nat_outgoing DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#nat_outgoing}
  */
  readonly natOutgoing?: boolean | cdktf.IResolvable;
  /**
  * Allows IPPool to allocate for a specific node by label selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#node_selector DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#node_selector}
  */
  readonly nodeSelector?: string;
  /**
  * Contains configuration for VXLAN tunneling for this pool. If not specified, then this is defaulted to 'Never' (i.e. VXLAN tunneling is disabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#vxlan_mode DataK8SCrdProjectcalicoOrgIpPoolV1Manifest#vxlan_mode}
  */
  readonly vxlanMode?: string;
}

export function dataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_uses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUses),
    block_size: cdktf.numberToTerraform(struct!.blockSize),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    disable_bgp_export: cdktf.booleanToTerraform(struct!.disableBgpExport),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    ipip: dataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpipToTerraform(struct!.ipip),
    ipip_mode: cdktf.stringToTerraform(struct!.ipipMode),
    nat_outgoing: cdktf.booleanToTerraform(struct!.natOutgoing),
    node_selector: cdktf.stringToTerraform(struct!.nodeSelector),
    vxlan_mode: cdktf.stringToTerraform(struct!.vxlanMode),
  }
}


export function dataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_uses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    block_size: {
      value: cdktf.numberToHclTerraform(struct!.blockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_bgp_export: {
      value: cdktf.booleanToHclTerraform(struct!.disableBgpExport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipip: {
      value: dataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpipToHclTerraform(struct!.ipip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpip",
    },
    ipip_mode: {
      value: cdktf.stringToHclTerraform(struct!.ipipMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_outgoing: {
      value: cdktf.booleanToHclTerraform(struct!.natOutgoing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_selector: {
      value: cdktf.stringToHclTerraform(struct!.nodeSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vxlan_mode: {
      value: cdktf.stringToHclTerraform(struct!.vxlanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUses = this._allowedUses;
    }
    if (this._blockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSize = this._blockSize;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._disableBgpExport !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBgpExport = this._disableBgpExport;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._ipip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipip = this._ipip?.internalValue;
    }
    if (this._ipipMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipMode = this._ipipMode;
    }
    if (this._natOutgoing !== undefined) {
      hasAnyValues = true;
      internalValueResult.natOutgoing = this._natOutgoing;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._vxlanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vxlanMode = this._vxlanMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedUses = undefined;
      this._blockSize = undefined;
      this._cidr = undefined;
      this._disableBgpExport = undefined;
      this._disabled = undefined;
      this._ipip.internalValue = undefined;
      this._ipipMode = undefined;
      this._natOutgoing = undefined;
      this._nodeSelector = undefined;
      this._vxlanMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedUses = value.allowedUses;
      this._blockSize = value.blockSize;
      this._cidr = value.cidr;
      this._disableBgpExport = value.disableBgpExport;
      this._disabled = value.disabled;
      this._ipip.internalValue = value.ipip;
      this._ipipMode = value.ipipMode;
      this._natOutgoing = value.natOutgoing;
      this._nodeSelector = value.nodeSelector;
      this._vxlanMode = value.vxlanMode;
    }
  }

  // allowed_uses - computed: false, optional: true, required: false
  private _allowedUses?: string[]; 
  public get allowedUses() {
    return this.getListAttribute('allowed_uses');
  }
  public set allowedUses(value: string[]) {
    this._allowedUses = value;
  }
  public resetAllowedUses() {
    this._allowedUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUsesInput() {
    return this._allowedUses;
  }

  // block_size - computed: false, optional: true, required: false
  private _blockSize?: number; 
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }
  public set blockSize(value: number) {
    this._blockSize = value;
  }
  public resetBlockSize() {
    this._blockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInput() {
    return this._blockSize;
  }

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

  // disable_bgp_export - computed: false, optional: true, required: false
  private _disableBgpExport?: boolean | cdktf.IResolvable; 
  public get disableBgpExport() {
    return this.getBooleanAttribute('disable_bgp_export');
  }
  public set disableBgpExport(value: boolean | cdktf.IResolvable) {
    this._disableBgpExport = value;
  }
  public resetDisableBgpExport() {
    this._disableBgpExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBgpExportInput() {
    return this._disableBgpExport;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // ipip - computed: false, optional: true, required: false
  private _ipip = new DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpipOutputReference(this, "ipip");
  public get ipip() {
    return this._ipip;
  }
  public putIpip(value: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecIpip) {
    this._ipip.internalValue = value;
  }
  public resetIpip() {
    this._ipip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipInput() {
    return this._ipip.internalValue;
  }

  // ipip_mode - computed: false, optional: true, required: false
  private _ipipMode?: string; 
  public get ipipMode() {
    return this.getStringAttribute('ipip_mode');
  }
  public set ipipMode(value: string) {
    this._ipipMode = value;
  }
  public resetIpipMode() {
    this._ipipMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipModeInput() {
    return this._ipipMode;
  }

  // nat_outgoing - computed: false, optional: true, required: false
  private _natOutgoing?: boolean | cdktf.IResolvable; 
  public get natOutgoing() {
    return this.getBooleanAttribute('nat_outgoing');
  }
  public set natOutgoing(value: boolean | cdktf.IResolvable) {
    this._natOutgoing = value;
  }
  public resetNatOutgoing() {
    this._natOutgoing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natOutgoingInput() {
    return this._natOutgoing;
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

  // vxlan_mode - computed: false, optional: true, required: false
  private _vxlanMode?: string; 
  public get vxlanMode() {
    return this.getStringAttribute('vxlan_mode');
  }
  public set vxlanMode(value: string) {
    this._vxlanMode = value;
  }
  public resetVxlanMode() {
    this._vxlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanModeInput() {
    return this._vxlanMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest k8s_crd_projectcalico_org_ip_pool_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgIpPoolV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_ip_pool_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgIpPoolV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgIpPoolV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgIpPoolV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgIpPoolV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_ip_pool_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ip_pool_v1_manifest k8s_crd_projectcalico_org_ip_pool_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgIpPoolV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_ip_pool_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpec) {
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
      metadata: dataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgIpPoolV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgIpPoolV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
