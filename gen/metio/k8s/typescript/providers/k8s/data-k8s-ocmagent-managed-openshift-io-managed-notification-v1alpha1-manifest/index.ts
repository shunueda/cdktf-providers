// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#metadata DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadata;
  /**
  * ManagedNotificationSpec defines the desired state of ManagedNotification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#spec DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpec;
}
export interface DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#annotations DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#labels DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#name DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#namespace DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotifications {
  /**
  * The body text of the Service Log notification when the alert is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#active_body DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#active_body}
  */
  readonly activeBody: string;
  /**
  * LogType is a categorization property that can be used to group service logs for aggregation and managing notification preferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#log_type DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#log_type}
  */
  readonly logType?: string;
  /**
  * The name of the notification used to associate with an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#name DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * References useful for context or remediation - this could be links to documentation, KB articles, etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#references DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#references}
  */
  readonly references?: string[];
  /**
  * Measured in hours. The minimum time interval that must elapse between active Service Log notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#resend_wait DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#resend_wait}
  */
  readonly resendWait: number;
  /**
  * The body text of the Service Log notification when the alert is resolved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#resolved_body DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#resolved_body}
  */
  readonly resolvedBody?: string;
  /**
  * The severity of the Service Log notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#severity DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#severity}
  */
  readonly severity: string;
  /**
  * The summary line of the Service Log notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#summary DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#summary}
  */
  readonly summary: string;
}

export function dataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotificationsToTerraform(struct?: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_body: cdktf.stringToTerraform(struct!.activeBody),
    log_type: cdktf.stringToTerraform(struct!.logType),
    name: cdktf.stringToTerraform(struct!.name),
    references: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.references),
    resend_wait: cdktf.numberToTerraform(struct!.resendWait),
    resolved_body: cdktf.stringToTerraform(struct!.resolvedBody),
    severity: cdktf.stringToTerraform(struct!.severity),
    summary: cdktf.stringToTerraform(struct!.summary),
  }
}


export function dataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotificationsToHclTerraform(struct?: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_body: {
      value: cdktf.stringToHclTerraform(struct!.activeBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
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
    references: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.references),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resend_wait: {
      value: cdktf.numberToHclTerraform(struct!.resendWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resolved_body: {
      value: cdktf.stringToHclTerraform(struct!.resolvedBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeBody = this._activeBody;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._references !== undefined) {
      hasAnyValues = true;
      internalValueResult.references = this._references;
    }
    if (this._resendWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendWait = this._resendWait;
    }
    if (this._resolvedBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolvedBody = this._resolvedBody;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeBody = undefined;
      this._logType = undefined;
      this._name = undefined;
      this._references = undefined;
      this._resendWait = undefined;
      this._resolvedBody = undefined;
      this._severity = undefined;
      this._summary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeBody = value.activeBody;
      this._logType = value.logType;
      this._name = value.name;
      this._references = value.references;
      this._resendWait = value.resendWait;
      this._resolvedBody = value.resolvedBody;
      this._severity = value.severity;
      this._summary = value.summary;
    }
  }

  // active_body - computed: false, optional: false, required: true
  private _activeBody?: string; 
  public get activeBody() {
    return this.getStringAttribute('active_body');
  }
  public set activeBody(value: string) {
    this._activeBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBodyInput() {
    return this._activeBody;
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
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

  // references - computed: false, optional: true, required: false
  private _references?: string[]; 
  public get references() {
    return this.getListAttribute('references');
  }
  public set references(value: string[]) {
    this._references = value;
  }
  public resetReferences() {
    this._references = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references;
  }

  // resend_wait - computed: false, optional: false, required: true
  private _resendWait?: number; 
  public get resendWait() {
    return this.getNumberAttribute('resend_wait');
  }
  public set resendWait(value: number) {
    this._resendWait = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resendWaitInput() {
    return this._resendWait;
  }

  // resolved_body - computed: false, optional: true, required: false
  private _resolvedBody?: string; 
  public get resolvedBody() {
    return this.getStringAttribute('resolved_body');
  }
  public set resolvedBody(value: string) {
    this._resolvedBody = value;
  }
  public resetResolvedBody() {
    this._resolvedBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedBodyInput() {
    return this._resolvedBody;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }
}

export class DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotificationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotifications[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotificationsOutputReference {
    return new DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpec {
  /**
  * AgentConfig refers to OCM agent config fields separated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#notifications DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest#notifications}
  */
  readonly notifications: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotifications[] | cdktf.IResolvable;
}

export function dataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notifications: cdktf.listMapper(dataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotificationsToTerraform, false)(struct!.notifications),
  }
}


export function dataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notifications: {
      value: cdktf.listMapperHcl(dataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotificationsToHclTerraform, false)(struct!.notifications),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notifications.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notifications.internalValue = value.notifications;
    }
  }

  // notifications - computed: false, optional: false, required: true
  private _notifications = new DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotificationsList(this, "notifications", false);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest k8s_ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest}
*/
export class DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest k8s_ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ocmagent_managed_openshift_io_managed_notification_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOcmagentManagedOpenshiftIoManagedNotificationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
