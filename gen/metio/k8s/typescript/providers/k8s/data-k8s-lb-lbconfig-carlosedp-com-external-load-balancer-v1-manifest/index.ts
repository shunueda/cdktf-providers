// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#metadata DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#metadata}
  */
  readonly metadata: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadata;
  /**
  * ExternalLoadBalancerSpec is the spec of a LoadBalancer instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#spec DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#spec}
  */
  readonly spec?: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpec;
}
export interface DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#annotations DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#labels DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#name DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#namespace DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadataToTerraform(struct?: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadataToHclTerraform(struct?: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitor {
  /**
  * MonitorType is the monitor parent type. <monitorType> must be one of 'http', 'https', 'icmp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#monitortype DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#monitortype}
  */
  readonly monitortype: string;
  /**
  * Name is the monitor name, it is set by the controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#name DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Path is the path URL to check for the pool members in the format '/healthz'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#path DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#path}
  */
  readonly path: string;
  /**
  * Port is the port this monitor should check the pool members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#port DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#port}
  */
  readonly port: number;
}

export function dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitorToTerraform(struct?: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitortype: cdktf.stringToTerraform(struct!.monitortype),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitorToHclTerraform(struct?: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitortype: {
      value: cdktf.stringToHclTerraform(struct!.monitortype),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitortype !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitortype = this._monitortype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitortype = undefined;
      this._name = undefined;
      this._path = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitortype = value.monitortype;
      this._name = value.name;
      this._path = value.path;
      this._port = value.port;
    }
  }

  // monitortype - computed: false, optional: false, required: true
  private _monitortype?: string; 
  public get monitortype() {
    return this.getStringAttribute('monitortype');
  }
  public set monitortype(value: string) {
    this._monitortype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitortypeInput() {
    return this._monitortype;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
}
export interface DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProvider {
  /**
  * Creds is the credentials secret holding the 'username' and 'password' keys. Generate with: 'kubectl create secret generic <secret-name> --from-literal=username=<username> --from-literal=password=<password>'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#creds DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#creds}
  */
  readonly creds: string;
  /**
  * Debug is a flag to enable debug on the backend log output. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#debug DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Host is the Load Balancer API IP or Hostname in URL format. Eg. 'http://10.25.10.10'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#host DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#host}
  */
  readonly host: string;
  /**
  * Type is the Load-Balancing method. Defaults to 'round-robin'. Options are: ROUNDROBIN, LEASTCONNECTION, LEASTRESPONSETIME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#lbmethod DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#lbmethod}
  */
  readonly lbmethod?: string;
  /**
  * Partition is the F5 partition to create the Load Balancer instances. Defaults to 'Common'. (F5 BigIP only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#partition DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#partition}
  */
  readonly partition?: string;
  /**
  * Port is the Load Balancer API Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#port DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#port}
  */
  readonly port: number;
  /**
  * ValidateCerts is a flag to validate or not the Load Balancer API certificate. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#validatecerts DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#validatecerts}
  */
  readonly validatecerts?: boolean | cdktf.IResolvable;
  /**
  * Vendor is the backend provider vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#vendor DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#vendor}
  */
  readonly vendor: string;
}

export function dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProviderToTerraform(struct?: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creds: cdktf.stringToTerraform(struct!.creds),
    debug: cdktf.booleanToTerraform(struct!.debug),
    host: cdktf.stringToTerraform(struct!.host),
    lbmethod: cdktf.stringToTerraform(struct!.lbmethod),
    partition: cdktf.stringToTerraform(struct!.partition),
    port: cdktf.numberToTerraform(struct!.port),
    validatecerts: cdktf.booleanToTerraform(struct!.validatecerts),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProviderToHclTerraform(struct?: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creds: {
      value: cdktf.stringToHclTerraform(struct!.creds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lbmethod: {
      value: cdktf.stringToHclTerraform(struct!.lbmethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    validatecerts: {
      value: cdktf.booleanToHclTerraform(struct!.validatecerts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creds !== undefined) {
      hasAnyValues = true;
      internalValueResult.creds = this._creds;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._lbmethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbmethod = this._lbmethod;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._validatecerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.validatecerts = this._validatecerts;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creds = undefined;
      this._debug = undefined;
      this._host = undefined;
      this._lbmethod = undefined;
      this._partition = undefined;
      this._port = undefined;
      this._validatecerts = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creds = value.creds;
      this._debug = value.debug;
      this._host = value.host;
      this._lbmethod = value.lbmethod;
      this._partition = value.partition;
      this._port = value.port;
      this._validatecerts = value.validatecerts;
      this._vendor = value.vendor;
    }
  }

  // creds - computed: false, optional: false, required: true
  private _creds?: string; 
  public get creds() {
    return this.getStringAttribute('creds');
  }
  public set creds(value: string) {
    this._creds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credsInput() {
    return this._creds;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // lbmethod - computed: false, optional: true, required: false
  private _lbmethod?: string; 
  public get lbmethod() {
    return this.getStringAttribute('lbmethod');
  }
  public set lbmethod(value: string) {
    this._lbmethod = value;
  }
  public resetLbmethod() {
    this._lbmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbmethodInput() {
    return this._lbmethod;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
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

  // validatecerts - computed: false, optional: true, required: false
  private _validatecerts?: boolean | cdktf.IResolvable; 
  public get validatecerts() {
    return this.getBooleanAttribute('validatecerts');
  }
  public set validatecerts(value: boolean | cdktf.IResolvable) {
    this._validatecerts = value;
  }
  public resetValidatecerts() {
    this._validatecerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatecertsInput() {
    return this._validatecerts;
  }

  // vendor - computed: false, optional: false, required: true
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}
export interface DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpec {
  /**
  * Monitor is the path and port to monitor the LoadBalancer members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#monitor DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#monitor}
  */
  readonly monitor: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitor;
  /**
  * NodeLabels are the node labels used for router sharding as an alternative to 'type'. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#nodelabels DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#nodelabels}
  */
  readonly nodelabels?: { [key: string]: string };
  /**
  * Ports is the ports exposed by this LoadBalancer instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#ports DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#ports}
  */
  readonly ports: string[];
  /**
  * Provider is the LoadBalancer backend provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#provider DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#provider}
  */
  readonly provider: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProvider;
  /**
  * Type is the node role type (master or infra) for the LoadBalancer instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#type DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Vip is the Virtual IP configured in this LoadBalancer instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#vip DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest#vip}
  */
  readonly vip: string;
}

export function dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecToTerraform(struct?: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor: dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitorToTerraform(struct!.monitor),
    nodelabels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodelabels),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    provider: dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProviderToTerraform(struct!.provider),
    type: cdktf.stringToTerraform(struct!.type),
    vip: cdktf.stringToTerraform(struct!.vip),
  }
}


export function dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecToHclTerraform(struct?: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor: {
      value: dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitor",
    },
    nodelabels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodelabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    provider: {
      value: dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProviderToHclTerraform(struct!.provider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProvider",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip: {
      value: cdktf.stringToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._nodelabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodelabels = this._nodelabels;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitor.internalValue = undefined;
      this._nodelabels = undefined;
      this._ports = undefined;
      this._provider.internalValue = undefined;
      this._type = undefined;
      this._vip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitor.internalValue = value.monitor;
      this._nodelabels = value.nodelabels;
      this._ports = value.ports;
      this._provider.internalValue = value.provider;
      this._type = value.type;
      this._vip = value.vip;
    }
  }

  // monitor - computed: false, optional: false, required: true
  private _monitor = new DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecMonitor) {
    this._monitor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // nodelabels - computed: false, optional: true, required: false
  private _nodelabels?: { [key: string]: string }; 
  public get nodelabels() {
    return this.getStringMapAttribute('nodelabels');
  }
  public set nodelabels(value: { [key: string]: string }) {
    this._nodelabels = value;
  }
  public resetNodelabels() {
    this._nodelabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodelabelsInput() {
    return this._nodelabels;
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // provider - computed: false, optional: false, required: true
  private _provider = new DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProviderOutputReference(this, "provider");
  public get provider() {
    return this._provider;
  }
  public putProvider(value: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecProvider) {
    this._provider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
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

  // vip - computed: false, optional: false, required: true
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest k8s_lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest}
*/
export class DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest to import
  * @param importFromId The id of the existing DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest k8s_lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_lb_lbconfig_carlosedp_com_external_load_balancer_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpec) {
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
      metadata: dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestMetadata",
      },
      spec: {
        value: dataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLbLbconfigCarlosedpComExternalLoadBalancerV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
