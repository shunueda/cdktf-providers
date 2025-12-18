// https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SkeClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A single extensions block as defined below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#extensions SkeCluster#extensions}
  */
  readonly extensions?: SkeClusterExtensions;
  /**
  * One or more hibernation block as defined below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#hibernations SkeCluster#hibernations}
  */
  readonly hibernations?: SkeClusterHibernations[] | cdktf.IResolvable;
  /**
  * The minimum Kubernetes version. This field will be used to set the minimum kubernetes version on creation/update of the cluster. If unset, the latest supported Kubernetes version will be used. SKE automatically updates the cluster Kubernetes version if you have set `maintenance.enable_kubernetes_version_updates` to true or if there is a mandatory update, as described in [General information for Kubernetes & OS updates](https://docs.stackit.cloud/products/runtime/kubernetes-engine/basics/version-updates/). To get the current kubernetes version being used for your cluster, use the read-only `kubernetes_version_used` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#kubernetes_version_min SkeCluster#kubernetes_version_min}
  */
  readonly kubernetesVersionMin?: string;
  /**
  * A single maintenance block as defined below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#maintenance SkeCluster#maintenance}
  */
  readonly maintenance?: SkeClusterMaintenance;
  /**
  * The cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#name SkeCluster#name}
  */
  readonly name: string;
  /**
  * Network block as defined below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#network SkeCluster#network}
  */
  readonly network?: SkeClusterNetwork;
  /**
  * One or more `node_pool` block as defined below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#node_pools SkeCluster#node_pools}
  */
  readonly nodePools: SkeClusterNodePools[] | cdktf.IResolvable;
  /**
  * STACKIT project ID to which the cluster is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#project_id SkeCluster#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#region SkeCluster#region}
  */
  readonly region?: string;
}
export interface SkeClusterExtensionsAcl {
  /**
  * Specify a list of CIDRs to whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#allowed_cidrs SkeCluster#allowed_cidrs}
  */
  readonly allowedCidrs: string[];
  /**
  * Is ACL enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#enabled SkeCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function skeClusterExtensionsAclToTerraform(struct?: SkeClusterExtensionsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCidrs),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function skeClusterExtensionsAclToHclTerraform(struct?: SkeClusterExtensionsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SkeClusterExtensionsAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SkeClusterExtensionsAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCidrs = this._allowedCidrs;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SkeClusterExtensionsAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedCidrs = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedCidrs = value.allowedCidrs;
      this._enabled = value.enabled;
    }
  }

  // allowed_cidrs - computed: false, optional: false, required: true
  private _allowedCidrs?: string[]; 
  public get allowedCidrs() {
    return this.getListAttribute('allowed_cidrs');
  }
  public set allowedCidrs(value: string[]) {
    this._allowedCidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCidrsInput() {
    return this._allowedCidrs;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface SkeClusterExtensionsArgus {
  /**
  * Argus instance ID to choose which Argus instance is used. Required when enabled is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#argus_instance_id SkeCluster#argus_instance_id}
  */
  readonly argusInstanceId?: string;
  /**
  * Flag to enable/disable Argus extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#enabled SkeCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function skeClusterExtensionsArgusToTerraform(struct?: SkeClusterExtensionsArgus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argus_instance_id: cdktf.stringToTerraform(struct!.argusInstanceId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function skeClusterExtensionsArgusToHclTerraform(struct?: SkeClusterExtensionsArgus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    argus_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.argusInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SkeClusterExtensionsArgusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SkeClusterExtensionsArgus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argusInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.argusInstanceId = this._argusInstanceId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SkeClusterExtensionsArgus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argusInstanceId = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argusInstanceId = value.argusInstanceId;
      this._enabled = value.enabled;
    }
  }

  // argus_instance_id - computed: false, optional: true, required: false
  private _argusInstanceId?: string; 
  public get argusInstanceId() {
    return this.getStringAttribute('argus_instance_id');
  }
  public set argusInstanceId(value: string) {
    this._argusInstanceId = value;
  }
  public resetArgusInstanceId() {
    this._argusInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argusInstanceIdInput() {
    return this._argusInstanceId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface SkeClusterExtensionsDns {
  /**
  * Flag to enable/disable DNS extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#enabled SkeCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specify a list of domain filters for externalDNS (e.g., `foo.runs.onstackit.cloud`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#zones SkeCluster#zones}
  */
  readonly zones?: string[];
}

export function skeClusterExtensionsDnsToTerraform(struct?: SkeClusterExtensionsDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function skeClusterExtensionsDnsToHclTerraform(struct?: SkeClusterExtensionsDns | cdktf.IResolvable): any {
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
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SkeClusterExtensionsDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SkeClusterExtensionsDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SkeClusterExtensionsDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._zones = value.zones;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // zones - computed: true, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface SkeClusterExtensionsObservability {
  /**
  * Flag to enable/disable Observability extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#enabled SkeCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Observability instance ID to choose which Observability instance is used. Required when enabled is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#instance_id SkeCluster#instance_id}
  */
  readonly instanceId?: string;
}

export function skeClusterExtensionsObservabilityToTerraform(struct?: SkeClusterExtensionsObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
  }
}


export function skeClusterExtensionsObservabilityToHclTerraform(struct?: SkeClusterExtensionsObservability | cdktf.IResolvable): any {
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
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SkeClusterExtensionsObservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SkeClusterExtensionsObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SkeClusterExtensionsObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._instanceId = value.instanceId;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}
export interface SkeClusterExtensions {
  /**
  * Cluster access control configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#acl SkeCluster#acl}
  */
  readonly acl?: SkeClusterExtensionsAcl;
  /**
  * A single argus block as defined below. This field is deprecated and will be removed 06 January 2026.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#argus SkeCluster#argus}
  */
  readonly argus?: SkeClusterExtensionsArgus;
  /**
  * DNS extension configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#dns SkeCluster#dns}
  */
  readonly dns?: SkeClusterExtensionsDns;
  /**
  * A single observability block as defined below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#observability SkeCluster#observability}
  */
  readonly observability?: SkeClusterExtensionsObservability;
}

export function skeClusterExtensionsToTerraform(struct?: SkeClusterExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: skeClusterExtensionsAclToTerraform(struct!.acl),
    argus: skeClusterExtensionsArgusToTerraform(struct!.argus),
    dns: skeClusterExtensionsDnsToTerraform(struct!.dns),
    observability: skeClusterExtensionsObservabilityToTerraform(struct!.observability),
  }
}


export function skeClusterExtensionsToHclTerraform(struct?: SkeClusterExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: skeClusterExtensionsAclToHclTerraform(struct!.acl),
      isBlock: true,
      type: "struct",
      storageClassType: "SkeClusterExtensionsAcl",
    },
    argus: {
      value: skeClusterExtensionsArgusToHclTerraform(struct!.argus),
      isBlock: true,
      type: "struct",
      storageClassType: "SkeClusterExtensionsArgus",
    },
    dns: {
      value: skeClusterExtensionsDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "struct",
      storageClassType: "SkeClusterExtensionsDns",
    },
    observability: {
      value: skeClusterExtensionsObservabilityToHclTerraform(struct!.observability),
      isBlock: true,
      type: "struct",
      storageClassType: "SkeClusterExtensionsObservability",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SkeClusterExtensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SkeClusterExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl?.internalValue;
    }
    if (this._argus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argus = this._argus?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._observability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.observability = this._observability?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SkeClusterExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl.internalValue = undefined;
      this._argus.internalValue = undefined;
      this._dns.internalValue = undefined;
      this._observability.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl.internalValue = value.acl;
      this._argus.internalValue = value.argus;
      this._dns.internalValue = value.dns;
      this._observability.internalValue = value.observability;
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl = new SkeClusterExtensionsAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }
  public putAcl(value: SkeClusterExtensionsAcl) {
    this._acl.internalValue = value;
  }
  public resetAcl() {
    this._acl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }

  // argus - computed: false, optional: true, required: false
  private _argus = new SkeClusterExtensionsArgusOutputReference(this, "argus");
  public get argus() {
    return this._argus;
  }
  public putArgus(value: SkeClusterExtensionsArgus) {
    this._argus.internalValue = value;
  }
  public resetArgus() {
    this._argus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argusInput() {
    return this._argus.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new SkeClusterExtensionsDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: SkeClusterExtensionsDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // observability - computed: false, optional: true, required: false
  private _observability = new SkeClusterExtensionsObservabilityOutputReference(this, "observability");
  public get observability() {
    return this._observability;
  }
  public putObservability(value: SkeClusterExtensionsObservability) {
    this._observability.internalValue = value;
  }
  public resetObservability() {
    this._observability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityInput() {
    return this._observability.internalValue;
  }
}
export interface SkeClusterHibernations {
  /**
  * End time of hibernation in crontab syntax. E.g. `0 8 * * *` for waking up the cluster at 8am.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#end SkeCluster#end}
  */
  readonly end: string;
  /**
  * Start time of cluster hibernation in crontab syntax. E.g. `0 18 * * *` for starting everyday at 6pm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#start SkeCluster#start}
  */
  readonly start: string;
  /**
  * Timezone name corresponding to a file in the IANA Time Zone database. i.e. `Europe/Berlin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#timezone SkeCluster#timezone}
  */
  readonly timezone?: string;
}

export function skeClusterHibernationsToTerraform(struct?: SkeClusterHibernations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function skeClusterHibernationsToHclTerraform(struct?: SkeClusterHibernations | cdktf.IResolvable): any {
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
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SkeClusterHibernationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SkeClusterHibernations | cdktf.IResolvable | undefined {
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
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SkeClusterHibernations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
      this._timezone = undefined;
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
      this._timezone = value.timezone;
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

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

export class SkeClusterHibernationsList extends cdktf.ComplexList {
  public internalValue? : SkeClusterHibernations[] | cdktf.IResolvable

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
  public get(index: number): SkeClusterHibernationsOutputReference {
    return new SkeClusterHibernationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SkeClusterMaintenance {
  /**
  * Flag to enable/disable auto-updates of the Kubernetes version. Defaults to `true`. SKE automatically updates the cluster Kubernetes version if you have set `maintenance.enable_kubernetes_version_updates` to true or if there is a mandatory update, as described in [General information for Kubernetes & OS updates](https://docs.stackit.cloud/products/runtime/kubernetes-engine/basics/version-updates/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#enable_kubernetes_version_updates SkeCluster#enable_kubernetes_version_updates}
  */
  readonly enableKubernetesVersionUpdates?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable/disable auto-updates of the OS image version. Defaults to `true`. SKE automatically updates the cluster Kubernetes version if you have set `maintenance.enable_kubernetes_version_updates` to true or if there is a mandatory update, as described in [General information for Kubernetes & OS updates](https://docs.stackit.cloud/products/runtime/kubernetes-engine/basics/version-updates/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#enable_machine_image_version_updates SkeCluster#enable_machine_image_version_updates}
  */
  readonly enableMachineImageVersionUpdates?: boolean | cdktf.IResolvable;
  /**
  * Time for maintenance window end. E.g. `01:23:45Z`, `05:00:00+02:00`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#end SkeCluster#end}
  */
  readonly end: string;
  /**
  * Time for maintenance window start. E.g. `01:23:45Z`, `05:00:00+02:00`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#start SkeCluster#start}
  */
  readonly start: string;
}

export function skeClusterMaintenanceToTerraform(struct?: SkeClusterMaintenance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_kubernetes_version_updates: cdktf.booleanToTerraform(struct!.enableKubernetesVersionUpdates),
    enable_machine_image_version_updates: cdktf.booleanToTerraform(struct!.enableMachineImageVersionUpdates),
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function skeClusterMaintenanceToHclTerraform(struct?: SkeClusterMaintenance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_kubernetes_version_updates: {
      value: cdktf.booleanToHclTerraform(struct!.enableKubernetesVersionUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_machine_image_version_updates: {
      value: cdktf.booleanToHclTerraform(struct!.enableMachineImageVersionUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class SkeClusterMaintenanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SkeClusterMaintenance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableKubernetesVersionUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKubernetesVersionUpdates = this._enableKubernetesVersionUpdates;
    }
    if (this._enableMachineImageVersionUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMachineImageVersionUpdates = this._enableMachineImageVersionUpdates;
    }
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

  public set internalValue(value: SkeClusterMaintenance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableKubernetesVersionUpdates = undefined;
      this._enableMachineImageVersionUpdates = undefined;
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
      this._enableKubernetesVersionUpdates = value.enableKubernetesVersionUpdates;
      this._enableMachineImageVersionUpdates = value.enableMachineImageVersionUpdates;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // enable_kubernetes_version_updates - computed: true, optional: true, required: false
  private _enableKubernetesVersionUpdates?: boolean | cdktf.IResolvable; 
  public get enableKubernetesVersionUpdates() {
    return this.getBooleanAttribute('enable_kubernetes_version_updates');
  }
  public set enableKubernetesVersionUpdates(value: boolean | cdktf.IResolvable) {
    this._enableKubernetesVersionUpdates = value;
  }
  public resetEnableKubernetesVersionUpdates() {
    this._enableKubernetesVersionUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubernetesVersionUpdatesInput() {
    return this._enableKubernetesVersionUpdates;
  }

  // enable_machine_image_version_updates - computed: true, optional: true, required: false
  private _enableMachineImageVersionUpdates?: boolean | cdktf.IResolvable; 
  public get enableMachineImageVersionUpdates() {
    return this.getBooleanAttribute('enable_machine_image_version_updates');
  }
  public set enableMachineImageVersionUpdates(value: boolean | cdktf.IResolvable) {
    this._enableMachineImageVersionUpdates = value;
  }
  public resetEnableMachineImageVersionUpdates() {
    this._enableMachineImageVersionUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMachineImageVersionUpdatesInput() {
    return this._enableMachineImageVersionUpdates;
  }

  // end - computed: true, optional: false, required: true
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

  // start - computed: true, optional: false, required: true
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
export interface SkeClusterNetwork {
  /**
  * ID of the STACKIT Network Area (SNA) network into which the cluster will be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#id SkeCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function skeClusterNetworkToTerraform(struct?: SkeClusterNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function skeClusterNetworkToHclTerraform(struct?: SkeClusterNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SkeClusterNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SkeClusterNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SkeClusterNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}
export interface SkeClusterNodePoolsTaints {
  /**
  * The taint effect. E.g `PreferNoSchedule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#effect SkeCluster#effect}
  */
  readonly effect: string;
  /**
  * Taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#key SkeCluster#key}
  */
  readonly key: string;
  /**
  * Taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#value SkeCluster#value}
  */
  readonly value?: string;
}

export function skeClusterNodePoolsTaintsToTerraform(struct?: SkeClusterNodePoolsTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function skeClusterNodePoolsTaintsToHclTerraform(struct?: SkeClusterNodePoolsTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class SkeClusterNodePoolsTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SkeClusterNodePoolsTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SkeClusterNodePoolsTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // value - computed: true, optional: true, required: false
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

export class SkeClusterNodePoolsTaintsList extends cdktf.ComplexList {
  public internalValue? : SkeClusterNodePoolsTaints[] | cdktf.IResolvable

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
  public get(index: number): SkeClusterNodePoolsTaintsOutputReference {
    return new SkeClusterNodePoolsTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SkeClusterNodePools {
  /**
  * Allow system components to run on this node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#allow_system_components SkeCluster#allow_system_components}
  */
  readonly allowSystemComponents?: boolean | cdktf.IResolvable;
  /**
  * Specify a list of availability zones. E.g. `eu01-m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#availability_zones SkeCluster#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Specifies the container runtime. Defaults to `containerd`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#cri SkeCluster#cri}
  */
  readonly cri?: string;
  /**
  * Labels to add to each node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#labels SkeCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#machine_type SkeCluster#machine_type}
  */
  readonly machineType: string;
  /**
  * Maximum number of additional VMs that are created during an update. If set (larger than 0), then it must be at least the amount of zones configured for the nodepool. The `max_surge` and `max_unavailable` fields cannot both be unset at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#max_surge SkeCluster#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * Maximum number of VMs that that can be unavailable during an update. If set (larger than 0), then it must be at least the amount of zones configured for the nodepool. The `max_surge` and `max_unavailable` fields cannot both be unset at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#max_unavailable SkeCluster#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Maximum number of nodes in the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#maximum SkeCluster#maximum}
  */
  readonly maximum: number;
  /**
  * Minimum number of nodes in the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#minimum SkeCluster#minimum}
  */
  readonly minimum: number;
  /**
  * Specifies the name of the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#name SkeCluster#name}
  */
  readonly name: string;
  /**
  * The name of the OS image. Defaults to `flatcar`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#os_name SkeCluster#os_name}
  */
  readonly osName?: string;
  /**
  * This field is deprecated, use `os_version_min` to configure the version and `os_version_used` to get the currently used version instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#os_version SkeCluster#os_version}
  */
  readonly osVersion?: string;
  /**
  * The minimum OS image version. This field will be used to set the minimum OS image version on creation/update of the cluster. If unset, the latest supported OS image version will be used. SKE automatically updates the cluster Kubernetes version if you have set `maintenance.enable_kubernetes_version_updates` to true or if there is a mandatory update, as described in [General information for Kubernetes & OS updates](https://docs.stackit.cloud/products/runtime/kubernetes-engine/basics/version-updates/). To get the current OS image version being used for the node pool, use the read-only `os_version_used` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#os_version_min SkeCluster#os_version_min}
  */
  readonly osVersionMin?: string;
  /**
  * Specifies a taint list as defined below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#taints SkeCluster#taints}
  */
  readonly taints?: SkeClusterNodePoolsTaints[] | cdktf.IResolvable;
  /**
  * The volume size in GB. Defaults to `20`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#volume_size SkeCluster#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Specifies the volume type. Defaults to `storage_premium_perf1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#volume_type SkeCluster#volume_type}
  */
  readonly volumeType?: string;
}

export function skeClusterNodePoolsToTerraform(struct?: SkeClusterNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_system_components: cdktf.booleanToTerraform(struct!.allowSystemComponents),
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    cri: cdktf.stringToTerraform(struct!.cri),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    name: cdktf.stringToTerraform(struct!.name),
    os_name: cdktf.stringToTerraform(struct!.osName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
    os_version_min: cdktf.stringToTerraform(struct!.osVersionMin),
    taints: cdktf.listMapper(skeClusterNodePoolsTaintsToTerraform, false)(struct!.taints),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function skeClusterNodePoolsToHclTerraform(struct?: SkeClusterNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_system_components: {
      value: cdktf.booleanToHclTerraform(struct!.allowSystemComponents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cri: {
      value: cdktf.stringToHclTerraform(struct!.cri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_name: {
      value: cdktf.stringToHclTerraform(struct!.osName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_version: {
      value: cdktf.stringToHclTerraform(struct!.osVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_version_min: {
      value: cdktf.stringToHclTerraform(struct!.osVersionMin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taints: {
      value: cdktf.listMapperHcl(skeClusterNodePoolsTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "SkeClusterNodePoolsTaintsList",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SkeClusterNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SkeClusterNodePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSystemComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSystemComponents = this._allowSystemComponents;
    }
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._cri !== undefined) {
      hasAnyValues = true;
      internalValueResult.cri = this._cri;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._osName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osName = this._osName;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    if (this._osVersionMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersionMin = this._osVersionMin;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SkeClusterNodePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowSystemComponents = undefined;
      this._availabilityZones = undefined;
      this._cri = undefined;
      this._labels = undefined;
      this._machineType = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._name = undefined;
      this._osName = undefined;
      this._osVersion = undefined;
      this._osVersionMin = undefined;
      this._taints.internalValue = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowSystemComponents = value.allowSystemComponents;
      this._availabilityZones = value.availabilityZones;
      this._cri = value.cri;
      this._labels = value.labels;
      this._machineType = value.machineType;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._name = value.name;
      this._osName = value.osName;
      this._osVersion = value.osVersion;
      this._osVersionMin = value.osVersionMin;
      this._taints.internalValue = value.taints;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // allow_system_components - computed: true, optional: true, required: false
  private _allowSystemComponents?: boolean | cdktf.IResolvable; 
  public get allowSystemComponents() {
    return this.getBooleanAttribute('allow_system_components');
  }
  public set allowSystemComponents(value: boolean | cdktf.IResolvable) {
    this._allowSystemComponents = value;
  }
  public resetAllowSystemComponents() {
    this._allowSystemComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSystemComponentsInput() {
    return this._allowSystemComponents;
  }

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // cri - computed: true, optional: true, required: false
  private _cri?: string; 
  public get cri() {
    return this.getStringAttribute('cri');
  }
  public set cri(value: string) {
    this._cri = value;
  }
  public resetCri() {
    this._cri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criInput() {
    return this._cri;
  }

  // labels - computed: true, optional: true, required: false
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

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // max_surge - computed: true, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: true, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // maximum - computed: false, optional: false, required: true
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: false, required: true
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
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

  // os_name - computed: true, optional: true, required: false
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  public resetOsName() {
    this._osName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
  }

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // os_version_min - computed: false, optional: true, required: false
  private _osVersionMin?: string; 
  public get osVersionMin() {
    return this.getStringAttribute('os_version_min');
  }
  public set osVersionMin(value: string) {
    this._osVersionMin = value;
  }
  public resetOsVersionMin() {
    this._osVersionMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionMinInput() {
    return this._osVersionMin;
  }

  // os_version_used - computed: true, optional: false, required: false
  public get osVersionUsed() {
    return this.getStringAttribute('os_version_used');
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new SkeClusterNodePoolsTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: SkeClusterNodePoolsTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // volume_size - computed: true, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class SkeClusterNodePoolsList extends cdktf.ComplexList {
  public internalValue? : SkeClusterNodePools[] | cdktf.IResolvable

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
  public get(index: number): SkeClusterNodePoolsOutputReference {
    return new SkeClusterNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster stackit_ske_cluster}
*/
export class SkeCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_ske_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SkeCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SkeCluster to import
  * @param importFromId The id of the existing SkeCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SkeCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_ske_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/resources/ske_cluster stackit_ske_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SkeClusterConfig
  */
  public constructor(scope: Construct, id: string, config: SkeClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_ske_cluster',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.75.0',
        providerVersionConstraint: '0.75.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extensions.internalValue = config.extensions;
    this._hibernations.internalValue = config.hibernations;
    this._kubernetesVersionMin = config.kubernetesVersionMin;
    this._maintenance.internalValue = config.maintenance;
    this._name = config.name;
    this._network.internalValue = config.network;
    this._nodePools.internalValue = config.nodePools;
    this._projectId = config.projectId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // egress_address_ranges - computed: true, optional: false, required: false
  public get egressAddressRanges() {
    return this.getListAttribute('egress_address_ranges');
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions = new SkeClusterExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: SkeClusterExtensions) {
    this._extensions.internalValue = value;
  }
  public resetExtensions() {
    this._extensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // hibernations - computed: false, optional: true, required: false
  private _hibernations = new SkeClusterHibernationsList(this, "hibernations", false);
  public get hibernations() {
    return this._hibernations;
  }
  public putHibernations(value: SkeClusterHibernations[] | cdktf.IResolvable) {
    this._hibernations.internalValue = value;
  }
  public resetHibernations() {
    this._hibernations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernationsInput() {
    return this._hibernations.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubernetes_version_min - computed: false, optional: true, required: false
  private _kubernetesVersionMin?: string; 
  public get kubernetesVersionMin() {
    return this.getStringAttribute('kubernetes_version_min');
  }
  public set kubernetesVersionMin(value: string) {
    this._kubernetesVersionMin = value;
  }
  public resetKubernetesVersionMin() {
    this._kubernetesVersionMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionMinInput() {
    return this._kubernetesVersionMin;
  }

  // kubernetes_version_used - computed: true, optional: false, required: false
  public get kubernetesVersionUsed() {
    return this.getStringAttribute('kubernetes_version_used');
  }

  // maintenance - computed: true, optional: true, required: false
  private _maintenance = new SkeClusterMaintenanceOutputReference(this, "maintenance");
  public get maintenance() {
    return this._maintenance;
  }
  public putMaintenance(value: SkeClusterMaintenance) {
    this._maintenance.internalValue = value;
  }
  public resetMaintenance() {
    this._maintenance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance.internalValue;
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

  // network - computed: false, optional: true, required: false
  private _network = new SkeClusterNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: SkeClusterNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // node_pools - computed: false, optional: false, required: true
  private _nodePools = new SkeClusterNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: SkeClusterNodePools[] | cdktf.IResolvable) {
    this._nodePools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }

  // pod_address_ranges - computed: true, optional: false, required: false
  public get podAddressRanges() {
    return this.getListAttribute('pod_address_ranges');
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

  // region - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extensions: skeClusterExtensionsToTerraform(this._extensions.internalValue),
      hibernations: cdktf.listMapper(skeClusterHibernationsToTerraform, false)(this._hibernations.internalValue),
      kubernetes_version_min: cdktf.stringToTerraform(this._kubernetesVersionMin),
      maintenance: skeClusterMaintenanceToTerraform(this._maintenance.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network: skeClusterNetworkToTerraform(this._network.internalValue),
      node_pools: cdktf.listMapper(skeClusterNodePoolsToTerraform, false)(this._nodePools.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extensions: {
        value: skeClusterExtensionsToHclTerraform(this._extensions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SkeClusterExtensions",
      },
      hibernations: {
        value: cdktf.listMapperHcl(skeClusterHibernationsToHclTerraform, false)(this._hibernations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SkeClusterHibernationsList",
      },
      kubernetes_version_min: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersionMin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance: {
        value: skeClusterMaintenanceToHclTerraform(this._maintenance.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SkeClusterMaintenance",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: skeClusterNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SkeClusterNetwork",
      },
      node_pools: {
        value: cdktf.listMapperHcl(skeClusterNodePoolsToHclTerraform, false)(this._nodePools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SkeClusterNodePoolsList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
