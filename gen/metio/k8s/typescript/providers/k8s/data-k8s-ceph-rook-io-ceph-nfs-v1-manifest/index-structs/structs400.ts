import * as cdktf from 'cdktf';
import { DataK8SCephRookIoCephNfsV1ManifestSpecServerLivenessProbe,
dataK8SCephRookIoCephNfsV1ManifestSpecServerLivenessProbeToTerraform,
dataK8SCephRookIoCephNfsV1ManifestSpecServerLivenessProbeToHclTerraform,
DataK8SCephRookIoCephNfsV1ManifestSpecServerLivenessProbeOutputReference,
DataK8SCephRookIoCephNfsV1ManifestSpecServerPlacement,
dataK8SCephRookIoCephNfsV1ManifestSpecServerPlacementToTerraform,
dataK8SCephRookIoCephNfsV1ManifestSpecServerPlacementToHclTerraform,
DataK8SCephRookIoCephNfsV1ManifestSpecServerPlacementOutputReference,
DataK8SCephRookIoCephNfsV1ManifestSpecServerResources,
dataK8SCephRookIoCephNfsV1ManifestSpecServerResourcesToTerraform,
dataK8SCephRookIoCephNfsV1ManifestSpecServerResourcesToHclTerraform,
DataK8SCephRookIoCephNfsV1ManifestSpecServerResourcesOutputReference,
DataK8SCephRookIoCephNfsV1ManifestSpecRados,
dataK8SCephRookIoCephNfsV1ManifestSpecRadosToTerraform,
dataK8SCephRookIoCephNfsV1ManifestSpecRadosToHclTerraform,
DataK8SCephRookIoCephNfsV1ManifestSpecRadosOutputReference,
DataK8SCephRookIoCephNfsV1ManifestSpecSecurity,
dataK8SCephRookIoCephNfsV1ManifestSpecSecurityToTerraform,
dataK8SCephRookIoCephNfsV1ManifestSpecSecurityToHclTerraform,
DataK8SCephRookIoCephNfsV1ManifestSpecSecurityOutputReference } from './structs0'
export interface DataK8SCephRookIoCephNfsV1ManifestSpecServer {
  /**
  * The number of active Ganesha servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ceph_rook_io_ceph_nfs_v1_manifest#active DataK8SCephRookIoCephNfsV1Manifest#active}
  */
  readonly active: number;
  /**
  * The annotations-related configuration to add/set on each Pod related object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ceph_rook_io_ceph_nfs_v1_manifest#annotations DataK8SCephRookIoCephNfsV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Whether host networking is enabled for the Ganesha server. If not set, the network settings from the cluster CR will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ceph_rook_io_ceph_nfs_v1_manifest#host_network DataK8SCephRookIoCephNfsV1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * The labels-related configuration to add/set on each Pod related object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ceph_rook_io_ceph_nfs_v1_manifest#labels DataK8SCephRookIoCephNfsV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A liveness-probe to verify that Ganesha server has valid run-time state. If LivenessProbe.Disabled is false and LivenessProbe.Probe is nil uses default probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ceph_rook_io_ceph_nfs_v1_manifest#liveness_probe DataK8SCephRookIoCephNfsV1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SCephRookIoCephNfsV1ManifestSpecServerLivenessProbe;
  /**
  * LogLevel set logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ceph_rook_io_ceph_nfs_v1_manifest#log_level DataK8SCephRookIoCephNfsV1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ceph_rook_io_ceph_nfs_v1_manifest#placement DataK8SCephRookIoCephNfsV1Manifest#placement}
  */
  readonly placement?: DataK8SCephRookIoCephNfsV1ManifestSpecServerPlacement;
  /**
  * PriorityClassName sets the priority class on the pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ceph_rook_io_ceph_nfs_v1_manifest#priority_class_name DataK8SCephRookIoCephNfsV1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Resources set resource requests and limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ceph_rook_io_ceph_nfs_v1_manifest#resources DataK8SCephRookIoCephNfsV1Manifest#resources}
  */
  readonly resources?: DataK8SCephRookIoCephNfsV1ManifestSpecServerResources;
}

export function dataK8SCephRookIoCephNfsV1ManifestSpecServerToTerraform(struct?: DataK8SCephRookIoCephNfsV1ManifestSpecServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.numberToTerraform(struct!.active),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    liveness_probe: dataK8SCephRookIoCephNfsV1ManifestSpecServerLivenessProbeToTerraform(struct!.livenessProbe),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    placement: dataK8SCephRookIoCephNfsV1ManifestSpecServerPlacementToTerraform(struct!.placement),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    resources: dataK8SCephRookIoCephNfsV1ManifestSpecServerResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SCephRookIoCephNfsV1ManifestSpecServerToHclTerraform(struct?: DataK8SCephRookIoCephNfsV1ManifestSpecServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.numberToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    liveness_probe: {
      value: dataK8SCephRookIoCephNfsV1ManifestSpecServerLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephNfsV1ManifestSpecServerLivenessProbe",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placement: {
      value: dataK8SCephRookIoCephNfsV1ManifestSpecServerPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephNfsV1ManifestSpecServerPlacement",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SCephRookIoCephNfsV1ManifestSpecServerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephNfsV1ManifestSpecServerResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephNfsV1ManifestSpecServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephNfsV1ManifestSpecServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephNfsV1ManifestSpecServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._annotations = undefined;
      this._hostNetwork = undefined;
      this._labels = undefined;
      this._livenessProbe.internalValue = undefined;
      this._logLevel = undefined;
      this._placement.internalValue = undefined;
      this._priorityClassName = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._annotations = value.annotations;
      this._hostNetwork = value.hostNetwork;
      this._labels = value.labels;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._logLevel = value.logLevel;
      this._placement.internalValue = value.placement;
      this._priorityClassName = value.priorityClassName;
      this._resources.internalValue = value.resources;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: number; 
  public get active() {
    return this.getNumberAttribute('active');
  }
  public set active(value: number) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
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

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SCephRookIoCephNfsV1ManifestSpecServerLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SCephRookIoCephNfsV1ManifestSpecServerLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new DataK8SCephRookIoCephNfsV1ManifestSpecServerPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: DataK8SCephRookIoCephNfsV1ManifestSpecServerPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCephRookIoCephNfsV1ManifestSpecServerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCephRookIoCephNfsV1ManifestSpecServerResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SCephRookIoCephNfsV1ManifestSpec {
  /**
  * RADOS is the Ganesha RADOS specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ceph_rook_io_ceph_nfs_v1_manifest#rados DataK8SCephRookIoCephNfsV1Manifest#rados}
  */
  readonly rados?: DataK8SCephRookIoCephNfsV1ManifestSpecRados;
  /**
  * Security allows specifying security configurations for the NFS cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ceph_rook_io_ceph_nfs_v1_manifest#security DataK8SCephRookIoCephNfsV1Manifest#security}
  */
  readonly security?: DataK8SCephRookIoCephNfsV1ManifestSpecSecurity;
  /**
  * Server is the Ganesha Server specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ceph_rook_io_ceph_nfs_v1_manifest#server DataK8SCephRookIoCephNfsV1Manifest#server}
  */
  readonly server: DataK8SCephRookIoCephNfsV1ManifestSpecServer;
}

export function dataK8SCephRookIoCephNfsV1ManifestSpecToTerraform(struct?: DataK8SCephRookIoCephNfsV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rados: dataK8SCephRookIoCephNfsV1ManifestSpecRadosToTerraform(struct!.rados),
    security: dataK8SCephRookIoCephNfsV1ManifestSpecSecurityToTerraform(struct!.security),
    server: dataK8SCephRookIoCephNfsV1ManifestSpecServerToTerraform(struct!.server),
  }
}


export function dataK8SCephRookIoCephNfsV1ManifestSpecToHclTerraform(struct?: DataK8SCephRookIoCephNfsV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rados: {
      value: dataK8SCephRookIoCephNfsV1ManifestSpecRadosToHclTerraform(struct!.rados),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephNfsV1ManifestSpecRados",
    },
    security: {
      value: dataK8SCephRookIoCephNfsV1ManifestSpecSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephNfsV1ManifestSpecSecurity",
    },
    server: {
      value: dataK8SCephRookIoCephNfsV1ManifestSpecServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephNfsV1ManifestSpecServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephNfsV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephNfsV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rados?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rados = this._rados?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephNfsV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rados.internalValue = undefined;
      this._security.internalValue = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rados.internalValue = value.rados;
      this._security.internalValue = value.security;
      this._server.internalValue = value.server;
    }
  }

  // rados - computed: false, optional: true, required: false
  private _rados = new DataK8SCephRookIoCephNfsV1ManifestSpecRadosOutputReference(this, "rados");
  public get rados() {
    return this._rados;
  }
  public putRados(value: DataK8SCephRookIoCephNfsV1ManifestSpecRados) {
    this._rados.internalValue = value;
  }
  public resetRados() {
    this._rados.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radosInput() {
    return this._rados.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SCephRookIoCephNfsV1ManifestSpecSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SCephRookIoCephNfsV1ManifestSpecSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // server - computed: false, optional: false, required: true
  private _server = new DataK8SCephRookIoCephNfsV1ManifestSpecServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SCephRookIoCephNfsV1ManifestSpecServer) {
    this._server.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
