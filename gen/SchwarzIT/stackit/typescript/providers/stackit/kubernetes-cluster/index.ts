// https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Should containers be allowed to run in privileged mode? Default is `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#allow_privileged_containers KubernetesCluster#allow_privileged_containers}
  */
  readonly allowPrivilegedContainers?: boolean | cdktf.IResolvable;
  /**
  * A single extensions block as defined below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#extensions KubernetesCluster#extensions}
  */
  readonly extensions?: KubernetesClusterExtensions;
  /**
  * One or more hibernation block as defined below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#hibernations KubernetesCluster#hibernations}
  */
  readonly hibernations?: KubernetesClusterHibernations[] | cdktf.IResolvable;
  /**
  * The ID of a `stackit_kubernetes_project` resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#kubernetes_project_id KubernetesCluster#kubernetes_project_id}
  */
  readonly kubernetesProjectId?: string;
  /**
  * Kubernetes version. Allowed Options are: `1.25`, `1.26`, or a full version including patch (not recommended).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#kubernetes_version KubernetesCluster#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * A single maintenance block as defined below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#maintenance KubernetesCluster#maintenance}
  */
  readonly maintenance?: KubernetesClusterMaintenance;
  /**
  * Specifies the cluster name (lower case, alphanumeric, hypens allowed, up to 11 chars)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Specifies the ID of the Network the SKE-Nodes should be created in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#network_id KubernetesCluster#network_id}
  */
  readonly networkId?: string;
  /**
  * One or more `node_pool` block as defined below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#node_pools KubernetesCluster#node_pools}
  */
  readonly nodePools?: KubernetesClusterNodePools[] | cdktf.IResolvable;
  /**
  * The project UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#project_id KubernetesCluster#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#timeouts KubernetesCluster#timeouts}
  */
  readonly timeouts?: KubernetesClusterTimeouts;
}
export interface KubernetesClusterExtensionsAcl {
  /**
  * Specify a list of CIDRs to whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#allowed_cidrs KubernetesCluster#allowed_cidrs}
  */
  readonly allowedCidrs?: string[];
  /**
  * Is ACL enabled? Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterExtensionsAclToTerraform(struct?: KubernetesClusterExtensionsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCidrs),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function kubernetesClusterExtensionsAclToHclTerraform(struct?: KubernetesClusterExtensionsAcl | cdktf.IResolvable): any {
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

export class KubernetesClusterExtensionsAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesClusterExtensionsAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterExtensionsAcl | cdktf.IResolvable | undefined) {
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

  // allowed_cidrs - computed: true, optional: true, required: false
  private _allowedCidrs?: string[]; 
  public get allowedCidrs() {
    return this.getListAttribute('allowed_cidrs');
  }
  public set allowedCidrs(value: string[]) {
    this._allowedCidrs = value;
  }
  public resetAllowedCidrs() {
    this._allowedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCidrsInput() {
    return this._allowedCidrs;
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface KubernetesClusterExtensionsArgus {
  /**
  * Instance ID of argus, Required when enabled is set to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#argus_instance_id KubernetesCluster#argus_instance_id}
  */
  readonly argusInstanceId?: string;
  /**
  * Flag to enable/disable argus extensions. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function kubernetesClusterExtensionsArgusToTerraform(struct?: KubernetesClusterExtensionsArgus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argus_instance_id: cdktf.stringToTerraform(struct!.argusInstanceId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function kubernetesClusterExtensionsArgusToHclTerraform(struct?: KubernetesClusterExtensionsArgus | cdktf.IResolvable): any {
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

export class KubernetesClusterExtensionsArgusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesClusterExtensionsArgus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterExtensionsArgus | cdktf.IResolvable | undefined) {
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

  // enabled - computed: true, optional: true, required: false
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
}
export interface KubernetesClusterExtensions {
  /**
  * Cluster access control configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#acl KubernetesCluster#acl}
  */
  readonly acl?: KubernetesClusterExtensionsAcl;
  /**
  * A single argus block as defined below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#argus KubernetesCluster#argus}
  */
  readonly argus?: KubernetesClusterExtensionsArgus;
}

export function kubernetesClusterExtensionsToTerraform(struct?: KubernetesClusterExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: kubernetesClusterExtensionsAclToTerraform(struct!.acl),
    argus: kubernetesClusterExtensionsArgusToTerraform(struct!.argus),
  }
}


export function kubernetesClusterExtensionsToHclTerraform(struct?: KubernetesClusterExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: kubernetesClusterExtensionsAclToHclTerraform(struct!.acl),
      isBlock: true,
      type: "struct",
      storageClassType: "KubernetesClusterExtensionsAcl",
    },
    argus: {
      value: kubernetesClusterExtensionsArgusToHclTerraform(struct!.argus),
      isBlock: true,
      type: "struct",
      storageClassType: "KubernetesClusterExtensionsArgus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterExtensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesClusterExtensions | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl.internalValue = undefined;
      this._argus.internalValue = undefined;
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
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl = new KubernetesClusterExtensionsAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }
  public putAcl(value: KubernetesClusterExtensionsAcl) {
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
  private _argus = new KubernetesClusterExtensionsArgusOutputReference(this, "argus");
  public get argus() {
    return this._argus;
  }
  public putArgus(value: KubernetesClusterExtensionsArgus) {
    this._argus.internalValue = value;
  }
  public resetArgus() {
    this._argus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argusInput() {
    return this._argus.internalValue;
  }
}
export interface KubernetesClusterHibernations {
  /**
  * End time of hibernation, in crontab syntax, i.e. `0 8 * * *` for waking up the cluster at 8am
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#end KubernetesCluster#end}
  */
  readonly end: string;
  /**
  * Start time of cluster hibernation, in crontab syntax, i.e. `0 18 * * *` for starting everyday at 6pm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#start KubernetesCluster#start}
  */
  readonly start: string;
  /**
  * Timezone name corresponding to a file in the IANA Time Zone database. i.e. `Europe/Berlin`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#timezone KubernetesCluster#timezone}
  */
  readonly timezone?: string;
}

export function kubernetesClusterHibernationsToTerraform(struct?: KubernetesClusterHibernations | cdktf.IResolvable): any {
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


export function kubernetesClusterHibernationsToHclTerraform(struct?: KubernetesClusterHibernations | cdktf.IResolvable): any {
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

export class KubernetesClusterHibernationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterHibernations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterHibernations | cdktf.IResolvable | undefined) {
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

  // timezone - computed: false, optional: true, required: false
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

export class KubernetesClusterHibernationsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterHibernations[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterHibernationsOutputReference {
    return new KubernetesClusterHibernationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMaintenance {
  /**
  * Flag to enable/disable auto-updates of the Kubernetes version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#enable_kubernetes_version_updates KubernetesCluster#enable_kubernetes_version_updates}
  */
  readonly enableKubernetesVersionUpdates: boolean | cdktf.IResolvable;
  /**
  * Flag to enable/disable auto-updates of the OS image version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#enable_machine_image_version_updates KubernetesCluster#enable_machine_image_version_updates}
  */
  readonly enableMachineImageVersionUpdates: boolean | cdktf.IResolvable;
  /**
  * RFC3339 Date time for maintenance window end. i.e. `0000-01-01T23:30:00Z`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#end KubernetesCluster#end}
  */
  readonly end: string;
  /**
  * RFC3339 Date time for maintenance window start. i.e. `0000-01-01T23:00:00Z`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#start KubernetesCluster#start}
  */
  readonly start: string;
}

export function kubernetesClusterMaintenanceToTerraform(struct?: KubernetesClusterMaintenance | cdktf.IResolvable): any {
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


export function kubernetesClusterMaintenanceToHclTerraform(struct?: KubernetesClusterMaintenance | cdktf.IResolvable): any {
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

export class KubernetesClusterMaintenanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesClusterMaintenance | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterMaintenance | cdktf.IResolvable | undefined) {
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

  // enable_kubernetes_version_updates - computed: false, optional: false, required: true
  private _enableKubernetesVersionUpdates?: boolean | cdktf.IResolvable; 
  public get enableKubernetesVersionUpdates() {
    return this.getBooleanAttribute('enable_kubernetes_version_updates');
  }
  public set enableKubernetesVersionUpdates(value: boolean | cdktf.IResolvable) {
    this._enableKubernetesVersionUpdates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubernetesVersionUpdatesInput() {
    return this._enableKubernetesVersionUpdates;
  }

  // enable_machine_image_version_updates - computed: false, optional: false, required: true
  private _enableMachineImageVersionUpdates?: boolean | cdktf.IResolvable; 
  public get enableMachineImageVersionUpdates() {
    return this.getBooleanAttribute('enable_machine_image_version_updates');
  }
  public set enableMachineImageVersionUpdates(value: boolean | cdktf.IResolvable) {
    this._enableMachineImageVersionUpdates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMachineImageVersionUpdatesInput() {
    return this._enableMachineImageVersionUpdates;
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
export interface KubernetesClusterNodePoolsTaints {
  /**
  * The taint effect. Only `PreferNoSchedule` is supported at the moment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#effect KubernetesCluster#effect}
  */
  readonly effect: string;
  /**
  * Taint key to be applied to a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#key KubernetesCluster#key}
  */
  readonly key: string;
  /**
  * Taint value corresponding to the taint key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#value KubernetesCluster#value}
  */
  readonly value?: string;
}

export function kubernetesClusterNodePoolsTaintsToTerraform(struct?: KubernetesClusterNodePoolsTaints | cdktf.IResolvable): any {
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


export function kubernetesClusterNodePoolsTaintsToHclTerraform(struct?: KubernetesClusterNodePoolsTaints | cdktf.IResolvable): any {
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

export class KubernetesClusterNodePoolsTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterNodePoolsTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterNodePoolsTaints | cdktf.IResolvable | undefined) {
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

export class KubernetesClusterNodePoolsTaintsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterNodePoolsTaints[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterNodePoolsTaintsOutputReference {
    return new KubernetesClusterNodePoolsTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterNodePools {
  /**
  * Specifies the container runtime. Defaults to `containerd`. Allowed options are `docker`, `containerd`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#container_runtime KubernetesCluster#container_runtime}
  */
  readonly containerRuntime?: string;
  /**
  * Labels to add to each node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The machine type. Accepted options are: `c1.2`, `c1.3`, `c1.4`, `c1.5`, `g1.2`, `g1.3`, `g1.4`, `g1.5`, `m1.2`, `m1.3`, `m1.4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#machine_type KubernetesCluster#machine_type}
  */
  readonly machineType: string;
  /**
  * The maximum number of nodes upgraded simultaneously. Defaults to 1. (Value must be between 1-10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#max_surge KubernetesCluster#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * The maximum number of nodes unavailable during upgraded. Defaults to 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#max_unavailable KubernetesCluster#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Maximum nodes in the pool. Defaults to 2. (Value must be between 1-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#maximum KubernetesCluster#maximum}
  */
  readonly maximum?: number;
  /**
  * Minimum nodes in the pool. Defaults to 1. (Value must be between 1-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#minimum KubernetesCluster#minimum}
  */
  readonly minimum?: number;
  /**
  * Specifies the name of the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * The name of the OS image. Only `flatcar` is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#os_name KubernetesCluster#os_name}
  */
  readonly osName?: string;
  /**
  * The OS image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#os_version KubernetesCluster#os_version}
  */
  readonly osVersion?: string;
  /**
  * Specifies a taint list as defined below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#taints KubernetesCluster#taints}
  */
  readonly taints?: KubernetesClusterNodePoolsTaints[] | cdktf.IResolvable;
  /**
  * The volume size in GB. Default is set to `20`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#volume_size_gb KubernetesCluster#volume_size_gb}
  */
  readonly volumeSizeGb?: number;
  /**
  * Specifies the volume type. Defaults to `storage_premium_perf1`. Available options are `storage_premium_perf0`, `storage_premium_perf1`, `storage_premium_perf2`, `storage_premium_perf4`, `storage_premium_perf6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#volume_type KubernetesCluster#volume_type}
  */
  readonly volumeType?: string;
  /**
  * Specify a list of availability zones. Accepted options are `eu01-m` for metro, or `eu01-1`, `eu01-2`, `eu01-3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#zones KubernetesCluster#zones}
  */
  readonly zones?: string[];
}

export function kubernetesClusterNodePoolsToTerraform(struct?: KubernetesClusterNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_runtime: cdktf.stringToTerraform(struct!.containerRuntime),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    name: cdktf.stringToTerraform(struct!.name),
    os_name: cdktf.stringToTerraform(struct!.osName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
    taints: cdktf.listMapper(kubernetesClusterNodePoolsTaintsToTerraform, false)(struct!.taints),
    volume_size_gb: cdktf.numberToTerraform(struct!.volumeSizeGb),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function kubernetesClusterNodePoolsToHclTerraform(struct?: KubernetesClusterNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_runtime: {
      value: cdktf.stringToHclTerraform(struct!.containerRuntime),
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
    taints: {
      value: cdktf.listMapperHcl(kubernetesClusterNodePoolsTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterNodePoolsTaintsList",
    },
    volume_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.volumeSizeGb),
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

export class KubernetesClusterNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterNodePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRuntime = this._containerRuntime;
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
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._volumeSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeGb = this._volumeSizeGb;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNodePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerRuntime = undefined;
      this._labels = undefined;
      this._machineType = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._name = undefined;
      this._osName = undefined;
      this._osVersion = undefined;
      this._taints.internalValue = undefined;
      this._volumeSizeGb = undefined;
      this._volumeType = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerRuntime = value.containerRuntime;
      this._labels = value.labels;
      this._machineType = value.machineType;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._name = value.name;
      this._osName = value.osName;
      this._osVersion = value.osVersion;
      this._taints.internalValue = value.taints;
      this._volumeSizeGb = value.volumeSizeGb;
      this._volumeType = value.volumeType;
      this._zones = value.zones;
    }
  }

  // container_runtime - computed: true, optional: true, required: false
  private _containerRuntime?: string; 
  public get containerRuntime() {
    return this.getStringAttribute('container_runtime');
  }
  public set containerRuntime(value: string) {
    this._containerRuntime = value;
  }
  public resetContainerRuntime() {
    this._containerRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRuntimeInput() {
    return this._containerRuntime;
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

  // maximum - computed: true, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: true, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
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

  // os_version - computed: true, optional: true, required: false
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

  // taints - computed: false, optional: true, required: false
  private _taints = new KubernetesClusterNodePoolsTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: KubernetesClusterNodePoolsTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // volume_size_gb - computed: true, optional: true, required: false
  private _volumeSizeGb?: number; 
  public get volumeSizeGb() {
    return this.getNumberAttribute('volume_size_gb');
  }
  public set volumeSizeGb(value: number) {
    this._volumeSizeGb = value;
  }
  public resetVolumeSizeGb() {
    this._volumeSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeGbInput() {
    return this._volumeSizeGb;
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

export class KubernetesClusterNodePoolsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterNodePools[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterNodePoolsOutputReference {
    return new KubernetesClusterNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#create KubernetesCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#delete KubernetesCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#update KubernetesCluster#update}
  */
  readonly update?: string;
}

export function kubernetesClusterTimeoutsToTerraform(struct?: KubernetesClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kubernetesClusterTimeoutsToHclTerraform(struct?: KubernetesClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: true, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: true, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: true, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster stackit_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesCluster to import
  * @param importFromId The id of the existing KubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/kubernetes_cluster stackit_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.4',
        providerVersionConstraint: '1.34.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowPrivilegedContainers = config.allowPrivilegedContainers;
    this._extensions.internalValue = config.extensions;
    this._hibernations.internalValue = config.hibernations;
    this._kubernetesProjectId = config.kubernetesProjectId;
    this._kubernetesVersion = config.kubernetesVersion;
    this._maintenance.internalValue = config.maintenance;
    this._name = config.name;
    this._networkId = config.networkId;
    this._nodePools.internalValue = config.nodePools;
    this._projectId = config.projectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_privileged_containers - computed: true, optional: true, required: false
  private _allowPrivilegedContainers?: boolean | cdktf.IResolvable; 
  public get allowPrivilegedContainers() {
    return this.getBooleanAttribute('allow_privileged_containers');
  }
  public set allowPrivilegedContainers(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegedContainers = value;
  }
  public resetAllowPrivilegedContainers() {
    this._allowPrivilegedContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegedContainersInput() {
    return this._allowPrivilegedContainers;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions = new KubernetesClusterExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: KubernetesClusterExtensions) {
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
  private _hibernations = new KubernetesClusterHibernationsList(this, "hibernations", false);
  public get hibernations() {
    return this._hibernations;
  }
  public putHibernations(value: KubernetesClusterHibernations[] | cdktf.IResolvable) {
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

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // kubernetes_project_id - computed: true, optional: true, required: false
  private _kubernetesProjectId?: string; 
  public get kubernetesProjectId() {
    return this.getStringAttribute('kubernetes_project_id');
  }
  public set kubernetesProjectId(value: string) {
    this._kubernetesProjectId = value;
  }
  public resetKubernetesProjectId() {
    this._kubernetesProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesProjectIdInput() {
    return this._kubernetesProjectId;
  }

  // kubernetes_version - computed: true, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // kubernetes_version_used - computed: true, optional: false, required: false
  public get kubernetesVersionUsed() {
    return this.getStringAttribute('kubernetes_version_used');
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance = new KubernetesClusterMaintenanceOutputReference(this, "maintenance");
  public get maintenance() {
    return this._maintenance;
  }
  public putMaintenance(value: KubernetesClusterMaintenance) {
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new KubernetesClusterNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: KubernetesClusterNodePools[] | cdktf.IResolvable) {
    this._nodePools.internalValue = value;
  }
  public resetNodePools() {
    this._nodePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: true, optional: true, required: false
  private _timeouts = new KubernetesClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_privileged_containers: cdktf.booleanToTerraform(this._allowPrivilegedContainers),
      extensions: kubernetesClusterExtensionsToTerraform(this._extensions.internalValue),
      hibernations: cdktf.listMapper(kubernetesClusterHibernationsToTerraform, false)(this._hibernations.internalValue),
      kubernetes_project_id: cdktf.stringToTerraform(this._kubernetesProjectId),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      maintenance: kubernetesClusterMaintenanceToTerraform(this._maintenance.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      node_pools: cdktf.listMapper(kubernetesClusterNodePoolsToTerraform, false)(this._nodePools.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      timeouts: kubernetesClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_privileged_containers: {
        value: cdktf.booleanToHclTerraform(this._allowPrivilegedContainers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extensions: {
        value: kubernetesClusterExtensionsToHclTerraform(this._extensions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesClusterExtensions",
      },
      hibernations: {
        value: cdktf.listMapperHcl(kubernetesClusterHibernationsToHclTerraform, false)(this._hibernations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterHibernationsList",
      },
      kubernetes_project_id: {
        value: cdktf.stringToHclTerraform(this._kubernetesProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance: {
        value: kubernetesClusterMaintenanceToHclTerraform(this._maintenance.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesClusterMaintenance",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_pools: {
        value: cdktf.listMapperHcl(kubernetesClusterNodePoolsToHclTerraform, false)(this._nodePools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterNodePoolsList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: kubernetesClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
