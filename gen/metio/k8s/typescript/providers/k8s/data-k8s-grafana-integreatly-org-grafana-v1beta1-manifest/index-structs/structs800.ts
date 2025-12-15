import * as cdktf from 'cdktf';
import { DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecClient,
dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecClientToTerraform,
dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecClientToHclTerraform,
DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecClientOutputReference } from './structs0'
import { DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecDeployment,
dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecDeploymentToTerraform,
dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecDeploymentToHclTerraform,
DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecDeploymentOutputReference,
DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecExternal,
dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecExternalToTerraform,
dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecExternalToHclTerraform,
DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecExternalOutputReference,
DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecIngress,
dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecIngressToTerraform,
dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecIngressToHclTerraform,
DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecIngressOutputReference,
DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecJsonnet,
dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecJsonnetToTerraform,
dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecJsonnetToHclTerraform,
DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecJsonnetOutputReference,
DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPersistentVolumeClaim,
dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPersistentVolumeClaimToTerraform,
dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPersistentVolumeClaimToHclTerraform,
DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPersistentVolumeClaimOutputReference } from './structs400'
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#home_dashboard_uid DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#home_dashboard_uid}
  */
  readonly homeDashboardUid?: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferencesToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    home_dashboard_uid: cdktf.stringToTerraform(struct!.homeDashboardUid),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferencesToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    home_dashboard_uid: {
      value: cdktf.stringToHclTerraform(struct!.homeDashboardUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._homeDashboardUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeDashboardUid = this._homeDashboardUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._homeDashboardUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._homeDashboardUid = value.homeDashboardUid;
    }
  }

  // home_dashboard_uid - computed: false, optional: true, required: false
  private _homeDashboardUid?: string; 
  public get homeDashboardUid() {
    return this.getStringAttribute('home_dashboard_uid');
  }
  public set homeDashboardUid(value: string) {
    this._homeDashboardUid = value;
  }
  public resetHomeDashboardUid() {
    this._homeDashboardUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDashboardUidInput() {
    return this._homeDashboardUid;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#annotations DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#labels DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadataToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadataToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackends {
  /**
  * The kind of target that the route is referring to. Currently, only 'Service' is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#kind DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name of the service/target that is being referred to. e.g. name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * weight as an integer between 0 and 256, default 100, that specifies the target's relative weight against other target reference objects. 0 suppresses requests to this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#weight DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackendsToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackendsToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackends | cdktf.IResolvable): any {
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackends | cdktf.IResolvable | undefined {
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
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._weight = undefined;
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
      this._weight = value.weight;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
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

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackendsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackends[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackendsOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPort {
  /**
  * The target port on pods selected by the service this route points to. If this is a string, it will be looked up as a named port in the target endpoints port list. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#target_port DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#target_port}
  */
  readonly targetPort: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPortToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_port: cdktf.stringToTerraform(struct!.targetPort),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPortToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_port: {
      value: cdktf.stringToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetPort = value.targetPort;
    }
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: string; 
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
  public set targetPort(value: string) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTls {
  /**
  * caCertificate provides the cert authority certificate contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#ca_certificate DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * certificate provides certificate contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#certificate DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * destinationCACertificate provides the contents of the ca certificate of the final destination. When using reencrypt termination this file should be provided in order to have routers use it for health checks on the secure connection. If this field is not specified, the router may provide its own destination CA and perform hostname validation using the short service name (service.namespace.svc), which allows infrastructure generated certificates to automatically verify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#destination_ca_certificate DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#destination_ca_certificate}
  */
  readonly destinationCaCertificate?: string;
  /**
  * insecureEdgeTerminationPolicy indicates the desired behavior for insecure connections to a route. While each router may make its own decisions on which ports to expose, this is normally port 80. * Allow - traffic is sent to the server on the insecure port (default) * Disable - no traffic is allowed on the insecure port. * Redirect - clients are redirected to the secure port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#insecure_edge_termination_policy DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#insecure_edge_termination_policy}
  */
  readonly insecureEdgeTerminationPolicy?: string;
  /**
  * key provides key file contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * termination indicates termination type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#termination DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#termination}
  */
  readonly termination: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTlsToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    destination_ca_certificate: cdktf.stringToTerraform(struct!.destinationCaCertificate),
    insecure_edge_termination_policy: cdktf.stringToTerraform(struct!.insecureEdgeTerminationPolicy),
    key: cdktf.stringToTerraform(struct!.key),
    termination: cdktf.stringToTerraform(struct!.termination),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTlsToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.destinationCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_edge_termination_policy: {
      value: cdktf.stringToHclTerraform(struct!.insecureEdgeTerminationPolicy),
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
    termination: {
      value: cdktf.stringToHclTerraform(struct!.termination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._destinationCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCaCertificate = this._destinationCaCertificate;
    }
    if (this._insecureEdgeTerminationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureEdgeTerminationPolicy = this._insecureEdgeTerminationPolicy;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._termination !== undefined) {
      hasAnyValues = true;
      internalValueResult.termination = this._termination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
      this._certificate = undefined;
      this._destinationCaCertificate = undefined;
      this._insecureEdgeTerminationPolicy = undefined;
      this._key = undefined;
      this._termination = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
      this._certificate = value.certificate;
      this._destinationCaCertificate = value.destinationCaCertificate;
      this._insecureEdgeTerminationPolicy = value.insecureEdgeTerminationPolicy;
      this._key = value.key;
      this._termination = value.termination;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
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

  // destination_ca_certificate - computed: false, optional: true, required: false
  private _destinationCaCertificate?: string; 
  public get destinationCaCertificate() {
    return this.getStringAttribute('destination_ca_certificate');
  }
  public set destinationCaCertificate(value: string) {
    this._destinationCaCertificate = value;
  }
  public resetDestinationCaCertificate() {
    this._destinationCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCaCertificateInput() {
    return this._destinationCaCertificate;
  }

  // insecure_edge_termination_policy - computed: false, optional: true, required: false
  private _insecureEdgeTerminationPolicy?: string; 
  public get insecureEdgeTerminationPolicy() {
    return this.getStringAttribute('insecure_edge_termination_policy');
  }
  public set insecureEdgeTerminationPolicy(value: string) {
    this._insecureEdgeTerminationPolicy = value;
  }
  public resetInsecureEdgeTerminationPolicy() {
    this._insecureEdgeTerminationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureEdgeTerminationPolicyInput() {
    return this._insecureEdgeTerminationPolicy;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // termination - computed: false, optional: false, required: true
  private _termination?: string; 
  public get termination() {
    return this.getStringAttribute('termination');
  }
  public set termination(value: string) {
    this._termination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationInput() {
    return this._termination;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTo {
  /**
  * The kind of target that the route is referring to. Currently, only 'Service' is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#kind DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name of the service/target that is being referred to. e.g. name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * weight as an integer between 0 and 256, default 100, that specifies the target's relative weight against other target reference objects. 0 suppresses requests to this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#weight DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecToToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecToToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTo | cdktf.IResolvable): any {
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTo | cdktf.IResolvable | undefined {
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
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._weight = undefined;
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
      this._weight = value.weight;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
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

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#alternate_backends DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#alternate_backends}
  */
  readonly alternateBackends?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackends[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#host DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#path DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * RoutePort defines a port mapping from a router to an endpoint in the service endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#port DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#port}
  */
  readonly port?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPort;
  /**
  * TLSConfig defines config used to secure a route and provide termination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#tls DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTls;
  /**
  * RouteTargetReference specifies the target that resolve into endpoints. Only the 'Service' kind is allowed. Use 'weight' field to emphasize one over others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#to DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#to}
  */
  readonly to?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTo;
  /**
  * WildcardPolicyType indicates the type of wildcard support needed by routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#wildcard_policy DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#wildcard_policy}
  */
  readonly wildcardPolicy?: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_backends: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackendsToTerraform, false)(struct!.alternateBackends),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPortToTerraform(struct!.port),
    tls: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTlsToTerraform(struct!.tls),
    to: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecToToTerraform(struct!.to),
    wildcard_policy: cdktf.stringToTerraform(struct!.wildcardPolicy),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternate_backends: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackendsToHclTerraform, false)(struct!.alternateBackends),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackendsList",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    port: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPort",
    },
    tls: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTls",
    },
    to: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecToToHclTerraform(struct!.to),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTo",
    },
    wildcard_policy: {
      value: cdktf.stringToHclTerraform(struct!.wildcardPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateBackends?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateBackends = this._alternateBackends?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    if (this._wildcardPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcardPolicy = this._wildcardPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternateBackends.internalValue = undefined;
      this._host = undefined;
      this._path = undefined;
      this._port.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._to.internalValue = undefined;
      this._wildcardPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternateBackends.internalValue = value.alternateBackends;
      this._host = value.host;
      this._path = value.path;
      this._port.internalValue = value.port;
      this._tls.internalValue = value.tls;
      this._to.internalValue = value.to;
      this._wildcardPolicy = value.wildcardPolicy;
    }
  }

  // alternate_backends - computed: false, optional: true, required: false
  private _alternateBackends = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackendsList(this, "alternate_backends", false);
  public get alternateBackends() {
    return this._alternateBackends;
  }
  public putAlternateBackends(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecAlternateBackends[] | cdktf.IResolvable) {
    this._alternateBackends.internalValue = value;
  }
  public resetAlternateBackends() {
    this._alternateBackends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateBackendsInput() {
    return this._alternateBackends.internalValue;
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

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }

  // wildcard_policy - computed: false, optional: true, required: false
  private _wildcardPolicy?: string; 
  public get wildcardPolicy() {
    return this.getStringAttribute('wildcard_policy');
  }
  public set wildcardPolicy(value: string) {
    this._wildcardPolicy = value;
  }
  public resetWildcardPolicy() {
    this._wildcardPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardPolicyInput() {
    return this._wildcardPolicy;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRoute {
  /**
  * ObjectMeta contains only a [subset of the fields included in k8s.io/apimachinery/pkg/apis/meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#metadata DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#spec DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpec;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadataToTerraform(struct!.metadata),
    spec: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecToTerraform(struct!.spec),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadata",
    },
    spec: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#annotations DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#labels DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadataToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadataToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPorts {
  /**
  * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either: * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names). * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 prior knowledge over cleartext as described in https://www.rfc-editor.org/rfc/rfc9113.html#name-starting-http-2-with-prior- * 'kubernetes.io/ws' - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455 * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#app_protocol DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#app_protocol}
  */
  readonly appProtocol?: string;
  /**
  * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * The port on each node on which this service is exposed when type is NodePort or LoadBalancer. Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail. If not specified, a port will be allocated if this Service requires one. If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#node_port DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#node_port}
  */
  readonly nodePort?: number;
  /**
  * The port that will be exposed by this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#port DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * The IP protocol for this port. Supports 'TCP', 'UDP', and 'SCTP'. Default is TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#protocol DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#target_port DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#target_port}
  */
  readonly targetPort?: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPortsToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_protocol: cdktf.stringToTerraform(struct!.appProtocol),
    name: cdktf.stringToTerraform(struct!.name),
    node_port: cdktf.numberToTerraform(struct!.nodePort),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.stringToTerraform(struct!.targetPort),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPortsToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_protocol: {
      value: cdktf.stringToHclTerraform(struct!.appProtocol),
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
    node_port: {
      value: cdktf.numberToHclTerraform(struct!.nodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.stringToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProtocol = this._appProtocol;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePort = this._nodePort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appProtocol = undefined;
      this._name = undefined;
      this._nodePort = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appProtocol = value.appProtocol;
      this._name = value.name;
      this._nodePort = value.nodePort;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
    }
  }

  // app_protocol - computed: false, optional: true, required: false
  private _appProtocol?: string; 
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }
  public set appProtocol(value: string) {
    this._appProtocol = value;
  }
  public resetAppProtocol() {
    this._appProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolInput() {
    return this._appProtocol;
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

  // node_port - computed: false, optional: true, required: false
  private _nodePort?: number; 
  public get nodePort() {
    return this.getNumberAttribute('node_port');
  }
  public set nodePort(value: number) {
    this._nodePort = value;
  }
  public resetNodePort() {
    this._nodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortInput() {
    return this._nodePort;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
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

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: string; 
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
  public set targetPort(value: string) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPortsOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp {
  /**
  * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == 'ClientIP'. Default value is 10800(for 3 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#timeout_seconds DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIpToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIpToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfig {
  /**
  * clientIP contains the configurations of Client IP based session affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#client_ip DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#client_ip}
  */
  readonly clientIp?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIpToTerraform(struct!.clientIp),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIpToHclTerraform(struct!.clientIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = value.clientIp;
    }
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIpOutputReference(this, "client_ip");
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpec {
  /**
  * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer. Default is 'true'. It may be set to 'false' if the cluster load-balancer does not rely on NodePorts. If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#allocate_load_balancer_node_ports DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#allocate_load_balancer_node_ports}
  */
  readonly allocateLoadBalancerNodePorts?: boolean | cdktf.IResolvable;
  /**
  * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above). Valid values are 'None', empty string (''), or a valid IP address. Setting this to 'None' makes a 'headless service' (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. If this field is not specified, it will be initialized from the clusterIP field. If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value. This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#cluster_i_ps DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#cluster_i_ps}
  */
  readonly clusterIPs?: string[];
  /**
  * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above). Valid values are 'None', empty string (''), or a valid IP address. Setting this to 'None' makes a 'headless service' (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#cluster_ip DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#cluster_ip}
  */
  readonly clusterIp?: string;
  /**
  * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service. These IPs are not managed by Kubernetes. The user is responsible for ensuring that traffic arrives at a node with this IP. A common example is external load-balancers that are not part of the Kubernetes system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#external_i_ps DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#external_i_ps}
  */
  readonly externalIPs?: string[];
  /**
  * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved. Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires 'type' to be 'ExternalName'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#external_name DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#external_name}
  */
  readonly externalName?: string;
  /**
  * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's 'externally-facing' addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to 'Local', the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, 'Cluster', uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get 'Cluster' semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#external_traffic_policy DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used. If not specified, a value will be automatically allocated. External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not. If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#health_check_node_port DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#health_check_node_port}
  */
  readonly healthCheckNodePort?: number;
  /**
  * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to 'Local', the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, 'Cluster', uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#internal_traffic_policy DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#internal_traffic_policy}
  */
  readonly internalTrafficPolicy?: string;
  /**
  * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are 'IPv4' and 'IPv6'. This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to 'headless' services. This field will be wiped when updating a Service to type ExternalName. This field may hold a maximum of two entries (dual-stack families, in either order). These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#ip_families DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#ip_families}
  */
  readonly ipFamilies?: string[];
  /**
  * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be 'SingleStack' (a single IP family), 'PreferDualStack' (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or 'RequireDualStack' (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#ip_family_policy DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#ip_family_policy}
  */
  readonly ipFamilyPolicy?: string;
  /**
  * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. 'internal-vip' or 'example.com/internal-vip'. Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#load_balancer_class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#load_balancer_class}
  */
  readonly loadBalancerClass?: string;
  /**
  * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#load_balancer_ip DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#load_balancer_ip}
  */
  readonly loadBalancerIp?: string;
  /**
  * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature.' More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#load_balancer_source_ranges DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#load_balancer_source_ranges}
  */
  readonly loadBalancerSourceRanges?: string[];
  /**
  * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#ports DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#ports}
  */
  readonly ports?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPorts[] | cdktf.IResolvable;
  /**
  * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered 'ready' even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#publish_not_ready_addresses DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#publish_not_ready_addresses}
  */
  readonly publishNotReadyAddresses?: boolean | cdktf.IResolvable;
  /**
  * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#selector DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#selector}
  */
  readonly selector?: { [key: string]: string };
  /**
  * Supports 'ClientIP' and 'None'. Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#session_affinity DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * sessionAffinityConfig contains the configurations of session affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#session_affinity_config DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#session_affinity_config}
  */
  readonly sessionAffinityConfig?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfig;
  /**
  * TrafficDistribution offers a way to express preferences for how traffic is distributed to Service endpoints. Implementations can use this field as a hint, but are not required to guarantee strict adherence. If the field is not set, the implementation will apply its default routing strategy. If set to 'PreferClose', implementations should prioritize endpoints that are topologically close (e.g., same zone). This is an alpha field and requires enabling ServiceTrafficDistribution feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#traffic_distribution DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#traffic_distribution}
  */
  readonly trafficDistribution?: string;
  /**
  * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. 'ClusterIP' allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is 'None', no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. 'NodePort' builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. 'LoadBalancer' builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. 'ExternalName' aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#type DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate_load_balancer_node_ports: cdktf.booleanToTerraform(struct!.allocateLoadBalancerNodePorts),
    cluster_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterIPs),
    cluster_ip: cdktf.stringToTerraform(struct!.clusterIp),
    external_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalIPs),
    external_name: cdktf.stringToTerraform(struct!.externalName),
    external_traffic_policy: cdktf.stringToTerraform(struct!.externalTrafficPolicy),
    health_check_node_port: cdktf.numberToTerraform(struct!.healthCheckNodePort),
    internal_traffic_policy: cdktf.stringToTerraform(struct!.internalTrafficPolicy),
    ip_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFamilies),
    ip_family_policy: cdktf.stringToTerraform(struct!.ipFamilyPolicy),
    load_balancer_class: cdktf.stringToTerraform(struct!.loadBalancerClass),
    load_balancer_ip: cdktf.stringToTerraform(struct!.loadBalancerIp),
    load_balancer_source_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerSourceRanges),
    ports: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPortsToTerraform, false)(struct!.ports),
    publish_not_ready_addresses: cdktf.booleanToTerraform(struct!.publishNotReadyAddresses),
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
    session_affinity: cdktf.stringToTerraform(struct!.sessionAffinity),
    session_affinity_config: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigToTerraform(struct!.sessionAffinityConfig),
    traffic_distribution: cdktf.stringToTerraform(struct!.trafficDistribution),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate_load_balancer_node_ports: {
      value: cdktf.booleanToHclTerraform(struct!.allocateLoadBalancerNodePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_ip: {
      value: cdktf.stringToHclTerraform(struct!.clusterIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_name: {
      value: cdktf.stringToHclTerraform(struct!.externalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.externalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_node_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.internalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_families: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFamilies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_family_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipFamilyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_class: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_ip: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_source_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadBalancerSourceRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPortsList",
    },
    publish_not_ready_addresses: {
      value: cdktf.booleanToHclTerraform(struct!.publishNotReadyAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    session_affinity: {
      value: cdktf.stringToHclTerraform(struct!.sessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_affinity_config: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigToHclTerraform(struct!.sessionAffinityConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfig",
    },
    traffic_distribution: {
      value: cdktf.stringToHclTerraform(struct!.trafficDistribution),
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocateLoadBalancerNodePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocateLoadBalancerNodePorts = this._allocateLoadBalancerNodePorts;
    }
    if (this._clusterIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIPs = this._clusterIPs;
    }
    if (this._clusterIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIp = this._clusterIp;
    }
    if (this._externalIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIPs = this._externalIPs;
    }
    if (this._externalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalName = this._externalName;
    }
    if (this._externalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTrafficPolicy = this._externalTrafficPolicy;
    }
    if (this._healthCheckNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckNodePort = this._healthCheckNodePort;
    }
    if (this._internalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalTrafficPolicy = this._internalTrafficPolicy;
    }
    if (this._ipFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamilies = this._ipFamilies;
    }
    if (this._ipFamilyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamilyPolicy = this._ipFamilyPolicy;
    }
    if (this._loadBalancerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerClass = this._loadBalancerClass;
    }
    if (this._loadBalancerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerIp = this._loadBalancerIp;
    }
    if (this._loadBalancerSourceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSourceRanges = this._loadBalancerSourceRanges;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._publishNotReadyAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishNotReadyAddresses = this._publishNotReadyAddresses;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._sessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity;
    }
    if (this._sessionAffinityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityConfig = this._sessionAffinityConfig?.internalValue;
    }
    if (this._trafficDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficDistribution = this._trafficDistribution;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocateLoadBalancerNodePorts = undefined;
      this._clusterIPs = undefined;
      this._clusterIp = undefined;
      this._externalIPs = undefined;
      this._externalName = undefined;
      this._externalTrafficPolicy = undefined;
      this._healthCheckNodePort = undefined;
      this._internalTrafficPolicy = undefined;
      this._ipFamilies = undefined;
      this._ipFamilyPolicy = undefined;
      this._loadBalancerClass = undefined;
      this._loadBalancerIp = undefined;
      this._loadBalancerSourceRanges = undefined;
      this._ports.internalValue = undefined;
      this._publishNotReadyAddresses = undefined;
      this._selector = undefined;
      this._sessionAffinity = undefined;
      this._sessionAffinityConfig.internalValue = undefined;
      this._trafficDistribution = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocateLoadBalancerNodePorts = value.allocateLoadBalancerNodePorts;
      this._clusterIPs = value.clusterIPs;
      this._clusterIp = value.clusterIp;
      this._externalIPs = value.externalIPs;
      this._externalName = value.externalName;
      this._externalTrafficPolicy = value.externalTrafficPolicy;
      this._healthCheckNodePort = value.healthCheckNodePort;
      this._internalTrafficPolicy = value.internalTrafficPolicy;
      this._ipFamilies = value.ipFamilies;
      this._ipFamilyPolicy = value.ipFamilyPolicy;
      this._loadBalancerClass = value.loadBalancerClass;
      this._loadBalancerIp = value.loadBalancerIp;
      this._loadBalancerSourceRanges = value.loadBalancerSourceRanges;
      this._ports.internalValue = value.ports;
      this._publishNotReadyAddresses = value.publishNotReadyAddresses;
      this._selector = value.selector;
      this._sessionAffinity = value.sessionAffinity;
      this._sessionAffinityConfig.internalValue = value.sessionAffinityConfig;
      this._trafficDistribution = value.trafficDistribution;
      this._type = value.type;
    }
  }

  // allocate_load_balancer_node_ports - computed: false, optional: true, required: false
  private _allocateLoadBalancerNodePorts?: boolean | cdktf.IResolvable; 
  public get allocateLoadBalancerNodePorts() {
    return this.getBooleanAttribute('allocate_load_balancer_node_ports');
  }
  public set allocateLoadBalancerNodePorts(value: boolean | cdktf.IResolvable) {
    this._allocateLoadBalancerNodePorts = value;
  }
  public resetAllocateLoadBalancerNodePorts() {
    this._allocateLoadBalancerNodePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateLoadBalancerNodePortsInput() {
    return this._allocateLoadBalancerNodePorts;
  }

  // cluster_i_ps - computed: false, optional: true, required: false
  private _clusterIPs?: string[]; 
  public get clusterIPs() {
    return this.getListAttribute('cluster_i_ps');
  }
  public set clusterIPs(value: string[]) {
    this._clusterIPs = value;
  }
  public resetClusterIPs() {
    this._clusterIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIPsInput() {
    return this._clusterIPs;
  }

  // cluster_ip - computed: false, optional: true, required: false
  private _clusterIp?: string; 
  public get clusterIp() {
    return this.getStringAttribute('cluster_ip');
  }
  public set clusterIp(value: string) {
    this._clusterIp = value;
  }
  public resetClusterIp() {
    this._clusterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpInput() {
    return this._clusterIp;
  }

  // external_i_ps - computed: false, optional: true, required: false
  private _externalIPs?: string[]; 
  public get externalIPs() {
    return this.getListAttribute('external_i_ps');
  }
  public set externalIPs(value: string[]) {
    this._externalIPs = value;
  }
  public resetExternalIPs() {
    this._externalIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIPsInput() {
    return this._externalIPs;
  }

  // external_name - computed: false, optional: true, required: false
  private _externalName?: string; 
  public get externalName() {
    return this.getStringAttribute('external_name');
  }
  public set externalName(value: string) {
    this._externalName = value;
  }
  public resetExternalName() {
    this._externalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNameInput() {
    return this._externalName;
  }

  // external_traffic_policy - computed: false, optional: true, required: false
  private _externalTrafficPolicy?: string; 
  public get externalTrafficPolicy() {
    return this.getStringAttribute('external_traffic_policy');
  }
  public set externalTrafficPolicy(value: string) {
    this._externalTrafficPolicy = value;
  }
  public resetExternalTrafficPolicy() {
    this._externalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTrafficPolicyInput() {
    return this._externalTrafficPolicy;
  }

  // health_check_node_port - computed: false, optional: true, required: false
  private _healthCheckNodePort?: number; 
  public get healthCheckNodePort() {
    return this.getNumberAttribute('health_check_node_port');
  }
  public set healthCheckNodePort(value: number) {
    this._healthCheckNodePort = value;
  }
  public resetHealthCheckNodePort() {
    this._healthCheckNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckNodePortInput() {
    return this._healthCheckNodePort;
  }

  // internal_traffic_policy - computed: false, optional: true, required: false
  private _internalTrafficPolicy?: string; 
  public get internalTrafficPolicy() {
    return this.getStringAttribute('internal_traffic_policy');
  }
  public set internalTrafficPolicy(value: string) {
    this._internalTrafficPolicy = value;
  }
  public resetInternalTrafficPolicy() {
    this._internalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalTrafficPolicyInput() {
    return this._internalTrafficPolicy;
  }

  // ip_families - computed: false, optional: true, required: false
  private _ipFamilies?: string[]; 
  public get ipFamilies() {
    return this.getListAttribute('ip_families');
  }
  public set ipFamilies(value: string[]) {
    this._ipFamilies = value;
  }
  public resetIpFamilies() {
    this._ipFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamiliesInput() {
    return this._ipFamilies;
  }

  // ip_family_policy - computed: false, optional: true, required: false
  private _ipFamilyPolicy?: string; 
  public get ipFamilyPolicy() {
    return this.getStringAttribute('ip_family_policy');
  }
  public set ipFamilyPolicy(value: string) {
    this._ipFamilyPolicy = value;
  }
  public resetIpFamilyPolicy() {
    this._ipFamilyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyPolicyInput() {
    return this._ipFamilyPolicy;
  }

  // load_balancer_class - computed: false, optional: true, required: false
  private _loadBalancerClass?: string; 
  public get loadBalancerClass() {
    return this.getStringAttribute('load_balancer_class');
  }
  public set loadBalancerClass(value: string) {
    this._loadBalancerClass = value;
  }
  public resetLoadBalancerClass() {
    this._loadBalancerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerClassInput() {
    return this._loadBalancerClass;
  }

  // load_balancer_ip - computed: false, optional: true, required: false
  private _loadBalancerIp?: string; 
  public get loadBalancerIp() {
    return this.getStringAttribute('load_balancer_ip');
  }
  public set loadBalancerIp(value: string) {
    this._loadBalancerIp = value;
  }
  public resetLoadBalancerIp() {
    this._loadBalancerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIpInput() {
    return this._loadBalancerIp;
  }

  // load_balancer_source_ranges - computed: false, optional: true, required: false
  private _loadBalancerSourceRanges?: string[]; 
  public get loadBalancerSourceRanges() {
    return this.getListAttribute('load_balancer_source_ranges');
  }
  public set loadBalancerSourceRanges(value: string[]) {
    this._loadBalancerSourceRanges = value;
  }
  public resetLoadBalancerSourceRanges() {
    this._loadBalancerSourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSourceRangesInput() {
    return this._loadBalancerSourceRanges;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // publish_not_ready_addresses - computed: false, optional: true, required: false
  private _publishNotReadyAddresses?: boolean | cdktf.IResolvable; 
  public get publishNotReadyAddresses() {
    return this.getBooleanAttribute('publish_not_ready_addresses');
  }
  public set publishNotReadyAddresses(value: boolean | cdktf.IResolvable) {
    this._publishNotReadyAddresses = value;
  }
  public resetPublishNotReadyAddresses() {
    this._publishNotReadyAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishNotReadyAddressesInput() {
    return this._publishNotReadyAddresses;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // session_affinity_config - computed: false, optional: true, required: false
  private _sessionAffinityConfig = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfigOutputReference(this, "session_affinity_config");
  public get sessionAffinityConfig() {
    return this._sessionAffinityConfig;
  }
  public putSessionAffinityConfig(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecSessionAffinityConfig) {
    this._sessionAffinityConfig.internalValue = value;
  }
  public resetSessionAffinityConfig() {
    this._sessionAffinityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityConfigInput() {
    return this._sessionAffinityConfig.internalValue;
  }

  // traffic_distribution - computed: false, optional: true, required: false
  private _trafficDistribution?: string; 
  public get trafficDistribution() {
    return this.getStringAttribute('traffic_distribution');
  }
  public set trafficDistribution(value: string) {
    this._trafficDistribution = value;
  }
  public resetTrafficDistribution() {
    this._trafficDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDistributionInput() {
    return this._trafficDistribution;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecService {
  /**
  * ObjectMeta contains only a [subset of the fields included in k8s.io/apimachinery/pkg/apis/meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#metadata DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadata;
  /**
  * ServiceSpec describes the attributes that a user creates on a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#spec DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpec;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadataToTerraform(struct!.metadata),
    spec: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecToTerraform(struct!.spec),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadata",
    },
    spec: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecretsToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecretsToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecrets | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecretsOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#annotations DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#labels DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadataToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadataToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecrets {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#api_version DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#field_path DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#kind DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#namespace DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#resource_version DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#uid DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecretsToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecretsToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecretsOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#automount_service_account_token DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#image_pull_secrets DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecrets[] | cdktf.IResolvable;
  /**
  * ObjectMeta contains only a [subset of the fields included in k8s.io/apimachinery/pkg/apis/meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#metadata DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#secrets DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#secrets}
  */
  readonly secrets?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecrets[] | cdktf.IResolvable;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    image_pull_secrets: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    metadata: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadataToTerraform(struct!.metadata),
    secrets: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecretsToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automount_service_account_token: {
      value: cdktf.booleanToHclTerraform(struct!.automountServiceAccountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecretsList",
    },
    metadata: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadata",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automountServiceAccountToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.automountServiceAccountToken = this._automountServiceAccountToken;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automountServiceAccountToken = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._secrets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automountServiceAccountToken = value.automountServiceAccountToken;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._metadata.internalValue = value.metadata;
      this._secrets.internalValue = value.secrets;
    }
  }

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean | cdktf.IResolvable; 
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }
  public set automountServiceAccountToken(value: boolean | cdktf.IResolvable) {
    this._automountServiceAccountToken = value;
  }
  public resetAutomountServiceAccountToken() {
    this._automountServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountServiceAccountTokenInput() {
    return this._automountServiceAccountToken;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpec {
  /**
  * Client defines how the grafana-operator talks to the grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#client DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#client}
  */
  readonly client?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecClient;
  /**
  * Config defines how your grafana ini file should looks like.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#config DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Deployment sets how the deployment object should look like with your grafana instance, contains a number of defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#deployment DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#deployment}
  */
  readonly deployment?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecDeployment;
  /**
  * External enables you to configure external grafana instances that is not managed by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#external DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#external}
  */
  readonly external?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecExternal;
  /**
  * Ingress sets how the ingress object should look like with your grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#ingress DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#ingress}
  */
  readonly ingress?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecIngress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#jsonnet DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#jsonnet}
  */
  readonly jsonnet?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecJsonnet;
  /**
  * PersistentVolumeClaim creates a PVC if you need to attach one to your grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#persistent_volume_claim DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPersistentVolumeClaim;
  /**
  * Preferences holds the Grafana Preferences settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#preferences DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#preferences}
  */
  readonly preferences?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferences;
  /**
  * Route sets how the ingress object should look like with your grafana instance, this only works in Openshift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#route DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#route}
  */
  readonly route?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRoute;
  /**
  * Service sets how the service object should look like with your grafana instance, contains a number of defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#service DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#service}
  */
  readonly service?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecService;
  /**
  * ServiceAccount sets how the ServiceAccount object should look like with your grafana instance, contains a number of defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#service_account DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#service_account}
  */
  readonly serviceAccount?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccount;
  /**
  * Version specifies the version of Grafana to use for this deployment. It follows the same format as the docker.io/grafana/grafana tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/grafana_integreatly_org_grafana_v1beta1_manifest#version DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecClientToTerraform(struct!.client),
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    deployment: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecDeploymentToTerraform(struct!.deployment),
    external: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecExternalToTerraform(struct!.external),
    ingress: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecIngressToTerraform(struct!.ingress),
    jsonnet: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecJsonnetToTerraform(struct!.jsonnet),
    persistent_volume_claim: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    preferences: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferencesToTerraform(struct!.preferences),
    route: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteToTerraform(struct!.route),
    service: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceToTerraform(struct!.service),
    service_account: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountToTerraform(struct!.serviceAccount),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecClientToHclTerraform(struct!.client),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecClient",
    },
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deployment: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecDeployment",
    },
    external: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecExternal",
    },
    ingress: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecIngress",
    },
    jsonnet: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecJsonnet",
    },
    persistent_volume_claim: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPersistentVolumeClaim",
    },
    preferences: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferencesToHclTerraform(struct!.preferences),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferences",
    },
    route: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRoute",
    },
    service: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecService",
    },
    service_account: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccount",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._preferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferences = this._preferences?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client.internalValue = undefined;
      this._config = undefined;
      this._deployment.internalValue = undefined;
      this._external.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._jsonnet.internalValue = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._preferences.internalValue = undefined;
      this._route.internalValue = undefined;
      this._service.internalValue = undefined;
      this._serviceAccount.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client.internalValue = value.client;
      this._config = value.config;
      this._deployment.internalValue = value.deployment;
      this._external.internalValue = value.external;
      this._ingress.internalValue = value.ingress;
      this._jsonnet.internalValue = value.jsonnet;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._preferences.internalValue = value.preferences;
      this._route.internalValue = value.route;
      this._service.internalValue = value.service;
      this._serviceAccount.internalValue = value.serviceAccount;
      this._version = value.version;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
  public putClient(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecClient) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // preferences - computed: false, optional: true, required: false
  private _preferences = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferencesOutputReference(this, "preferences");
  public get preferences() {
    return this._preferences;
  }
  public putPreferences(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecPreferences) {
    this._preferences.internalValue = value;
  }
  public resetPreferences() {
    this._preferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferencesInput() {
    return this._preferences.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DataK8SGrafanaIntegreatlyOrgGrafanaV1Beta1ManifestSpecServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
