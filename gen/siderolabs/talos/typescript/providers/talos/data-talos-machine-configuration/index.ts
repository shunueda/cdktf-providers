// https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTalosMachineConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The endpoint of the talos kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#cluster_endpoint DataTalosMachineConfiguration#cluster_endpoint}
  */
  readonly clusterEndpoint: string;
  /**
  * The name of the talos kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#cluster_name DataTalosMachineConfiguration#cluster_name}
  */
  readonly clusterName: string;
  /**
  * The list of config patches to apply to the generated configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#config_patches DataTalosMachineConfiguration#config_patches}
  */
  readonly configPatches?: string[];
  /**
  * Whether to generate documentation for the generated configuration. Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#docs DataTalosMachineConfiguration#docs}
  */
  readonly docs?: boolean | cdktf.IResolvable;
  /**
  * Whether to generate examples for the generated configuration. Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#examples DataTalosMachineConfiguration#examples}
  */
  readonly examples?: boolean | cdktf.IResolvable;
  /**
  * The version of kubernetes to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#kubernetes_version DataTalosMachineConfiguration#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * The secrets for the talos cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#machine_secrets DataTalosMachineConfiguration#machine_secrets}
  */
  readonly machineSecrets: DataTalosMachineConfigurationMachineSecrets;
  /**
  * The type of machine to generate the configuration for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#machine_type DataTalosMachineConfiguration#machine_type}
  */
  readonly machineType: string;
  /**
  * The version of talos features to use in generated machine configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#talos_version DataTalosMachineConfiguration#talos_version}
  */
  readonly talosVersion?: string;
}
export interface DataTalosMachineConfigurationMachineSecretsCertsEtcd {
  /**
  * certificate data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#cert DataTalosMachineConfiguration#cert}
  */
  readonly cert: string;
  /**
  * key data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#key DataTalosMachineConfiguration#key}
  */
  readonly key: string;
}

export function dataTalosMachineConfigurationMachineSecretsCertsEtcdToTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCertsEtcd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataTalosMachineConfigurationMachineSecretsCertsEtcdToHclTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCertsEtcd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosMachineConfigurationMachineSecretsCertsEtcdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosMachineConfigurationMachineSecretsCertsEtcd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosMachineConfigurationMachineSecretsCertsEtcd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._key = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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
}
export interface DataTalosMachineConfigurationMachineSecretsCertsK8S {
  /**
  * certificate data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#cert DataTalosMachineConfiguration#cert}
  */
  readonly cert: string;
  /**
  * key data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#key DataTalosMachineConfiguration#key}
  */
  readonly key: string;
}

export function dataTalosMachineConfigurationMachineSecretsCertsK8SToTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCertsK8S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataTalosMachineConfigurationMachineSecretsCertsK8SToHclTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCertsK8S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosMachineConfigurationMachineSecretsCertsK8SOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosMachineConfigurationMachineSecretsCertsK8S | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosMachineConfigurationMachineSecretsCertsK8S | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._key = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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
}
export interface DataTalosMachineConfigurationMachineSecretsCertsK8SAggregator {
  /**
  * certificate data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#cert DataTalosMachineConfiguration#cert}
  */
  readonly cert: string;
  /**
  * key data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#key DataTalosMachineConfiguration#key}
  */
  readonly key: string;
}

export function dataTalosMachineConfigurationMachineSecretsCertsK8SAggregatorToTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCertsK8SAggregator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataTalosMachineConfigurationMachineSecretsCertsK8SAggregatorToHclTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCertsK8SAggregator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosMachineConfigurationMachineSecretsCertsK8SAggregatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosMachineConfigurationMachineSecretsCertsK8SAggregator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosMachineConfigurationMachineSecretsCertsK8SAggregator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._key = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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
}
export interface DataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccount {
  /**
  * The key for the k8s service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#key DataTalosMachineConfiguration#key}
  */
  readonly key: string;
}

export function dataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccountToTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccountToHclTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccount | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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
}
export interface DataTalosMachineConfigurationMachineSecretsCertsOs {
  /**
  * certificate data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#cert DataTalosMachineConfiguration#cert}
  */
  readonly cert: string;
  /**
  * key data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#key DataTalosMachineConfiguration#key}
  */
  readonly key: string;
}

export function dataTalosMachineConfigurationMachineSecretsCertsOsToTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCertsOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataTalosMachineConfigurationMachineSecretsCertsOsToHclTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCertsOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosMachineConfigurationMachineSecretsCertsOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosMachineConfigurationMachineSecretsCertsOs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosMachineConfigurationMachineSecretsCertsOs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._key = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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
}
export interface DataTalosMachineConfigurationMachineSecretsCerts {
  /**
  * The certificate and key pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#etcd DataTalosMachineConfiguration#etcd}
  */
  readonly etcd: DataTalosMachineConfigurationMachineSecretsCertsEtcd;
  /**
  * The certificate and key pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#k8s DataTalosMachineConfiguration#k8s}
  */
  readonly k8S: DataTalosMachineConfigurationMachineSecretsCertsK8S;
  /**
  * The certificate and key pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#k8s_aggregator DataTalosMachineConfiguration#k8s_aggregator}
  */
  readonly k8SAggregator: DataTalosMachineConfigurationMachineSecretsCertsK8SAggregator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#k8s_serviceaccount DataTalosMachineConfiguration#k8s_serviceaccount}
  */
  readonly k8SServiceaccount: DataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccount;
  /**
  * The certificate and key pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#os DataTalosMachineConfiguration#os}
  */
  readonly os: DataTalosMachineConfigurationMachineSecretsCertsOs;
}

export function dataTalosMachineConfigurationMachineSecretsCertsToTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    etcd: dataTalosMachineConfigurationMachineSecretsCertsEtcdToTerraform(struct!.etcd),
    k8s: dataTalosMachineConfigurationMachineSecretsCertsK8SToTerraform(struct!.k8S),
    k8s_aggregator: dataTalosMachineConfigurationMachineSecretsCertsK8SAggregatorToTerraform(struct!.k8SAggregator),
    k8s_serviceaccount: dataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccountToTerraform(struct!.k8SServiceaccount),
    os: dataTalosMachineConfigurationMachineSecretsCertsOsToTerraform(struct!.os),
  }
}


export function dataTalosMachineConfigurationMachineSecretsCertsToHclTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    etcd: {
      value: dataTalosMachineConfigurationMachineSecretsCertsEtcdToHclTerraform(struct!.etcd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataTalosMachineConfigurationMachineSecretsCertsEtcd",
    },
    k8s: {
      value: dataTalosMachineConfigurationMachineSecretsCertsK8SToHclTerraform(struct!.k8S),
      isBlock: true,
      type: "struct",
      storageClassType: "DataTalosMachineConfigurationMachineSecretsCertsK8S",
    },
    k8s_aggregator: {
      value: dataTalosMachineConfigurationMachineSecretsCertsK8SAggregatorToHclTerraform(struct!.k8SAggregator),
      isBlock: true,
      type: "struct",
      storageClassType: "DataTalosMachineConfigurationMachineSecretsCertsK8SAggregator",
    },
    k8s_serviceaccount: {
      value: dataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccountToHclTerraform(struct!.k8SServiceaccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccount",
    },
    os: {
      value: dataTalosMachineConfigurationMachineSecretsCertsOsToHclTerraform(struct!.os),
      isBlock: true,
      type: "struct",
      storageClassType: "DataTalosMachineConfigurationMachineSecretsCertsOs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosMachineConfigurationMachineSecretsCertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosMachineConfigurationMachineSecretsCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etcd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcd = this._etcd?.internalValue;
    }
    if (this._k8S?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8S = this._k8S?.internalValue;
    }
    if (this._k8SAggregator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SAggregator = this._k8SAggregator?.internalValue;
    }
    if (this._k8SServiceaccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SServiceaccount = this._k8SServiceaccount?.internalValue;
    }
    if (this._os?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosMachineConfigurationMachineSecretsCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._etcd.internalValue = undefined;
      this._k8S.internalValue = undefined;
      this._k8SAggregator.internalValue = undefined;
      this._k8SServiceaccount.internalValue = undefined;
      this._os.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._etcd.internalValue = value.etcd;
      this._k8S.internalValue = value.k8S;
      this._k8SAggregator.internalValue = value.k8SAggregator;
      this._k8SServiceaccount.internalValue = value.k8SServiceaccount;
      this._os.internalValue = value.os;
    }
  }

  // etcd - computed: false, optional: false, required: true
  private _etcd = new DataTalosMachineConfigurationMachineSecretsCertsEtcdOutputReference(this, "etcd");
  public get etcd() {
    return this._etcd;
  }
  public putEtcd(value: DataTalosMachineConfigurationMachineSecretsCertsEtcd) {
    this._etcd.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdInput() {
    return this._etcd.internalValue;
  }

  // k8s - computed: false, optional: false, required: true
  private _k8S = new DataTalosMachineConfigurationMachineSecretsCertsK8SOutputReference(this, "k8s");
  public get k8S() {
    return this._k8S;
  }
  public putK8S(value: DataTalosMachineConfigurationMachineSecretsCertsK8S) {
    this._k8S.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SInput() {
    return this._k8S.internalValue;
  }

  // k8s_aggregator - computed: false, optional: false, required: true
  private _k8SAggregator = new DataTalosMachineConfigurationMachineSecretsCertsK8SAggregatorOutputReference(this, "k8s_aggregator");
  public get k8SAggregator() {
    return this._k8SAggregator;
  }
  public putK8SAggregator(value: DataTalosMachineConfigurationMachineSecretsCertsK8SAggregator) {
    this._k8SAggregator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SAggregatorInput() {
    return this._k8SAggregator.internalValue;
  }

  // k8s_serviceaccount - computed: false, optional: false, required: true
  private _k8SServiceaccount = new DataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccountOutputReference(this, "k8s_serviceaccount");
  public get k8SServiceaccount() {
    return this._k8SServiceaccount;
  }
  public putK8SServiceaccount(value: DataTalosMachineConfigurationMachineSecretsCertsK8SServiceaccount) {
    this._k8SServiceaccount.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceaccountInput() {
    return this._k8SServiceaccount.internalValue;
  }

  // os - computed: false, optional: false, required: true
  private _os = new DataTalosMachineConfigurationMachineSecretsCertsOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: DataTalosMachineConfigurationMachineSecretsCertsOs) {
    this._os.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }
}
export interface DataTalosMachineConfigurationMachineSecretsCluster {
  /**
  * The cluster id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#id DataTalosMachineConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The cluster secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#secret DataTalosMachineConfiguration#secret}
  */
  readonly secret: string;
}

export function dataTalosMachineConfigurationMachineSecretsClusterToTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataTalosMachineConfigurationMachineSecretsClusterToHclTerraform(struct?: DataTalosMachineConfigurationMachineSecretsCluster | cdktf.IResolvable): any {
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
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosMachineConfigurationMachineSecretsClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosMachineConfigurationMachineSecretsCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosMachineConfigurationMachineSecretsCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._secret = value.secret;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DataTalosMachineConfigurationMachineSecretsSecrets {
  /**
  * The aescbc encryption secret for the talos kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#aescbc_encryption_secret DataTalosMachineConfiguration#aescbc_encryption_secret}
  */
  readonly aescbcEncryptionSecret?: string;
  /**
  * The bootstrap token for the talos kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#bootstrap_token DataTalosMachineConfiguration#bootstrap_token}
  */
  readonly bootstrapToken: string;
  /**
  * The secretbox encryption secret for the talos kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#secretbox_encryption_secret DataTalosMachineConfiguration#secretbox_encryption_secret}
  */
  readonly secretboxEncryptionSecret: string;
}

export function dataTalosMachineConfigurationMachineSecretsSecretsToTerraform(struct?: DataTalosMachineConfigurationMachineSecretsSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aescbc_encryption_secret: cdktf.stringToTerraform(struct!.aescbcEncryptionSecret),
    bootstrap_token: cdktf.stringToTerraform(struct!.bootstrapToken),
    secretbox_encryption_secret: cdktf.stringToTerraform(struct!.secretboxEncryptionSecret),
  }
}


export function dataTalosMachineConfigurationMachineSecretsSecretsToHclTerraform(struct?: DataTalosMachineConfigurationMachineSecretsSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aescbc_encryption_secret: {
      value: cdktf.stringToHclTerraform(struct!.aescbcEncryptionSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootstrap_token: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secretbox_encryption_secret: {
      value: cdktf.stringToHclTerraform(struct!.secretboxEncryptionSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosMachineConfigurationMachineSecretsSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosMachineConfigurationMachineSecretsSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aescbcEncryptionSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.aescbcEncryptionSecret = this._aescbcEncryptionSecret;
    }
    if (this._bootstrapToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapToken = this._bootstrapToken;
    }
    if (this._secretboxEncryptionSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretboxEncryptionSecret = this._secretboxEncryptionSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosMachineConfigurationMachineSecretsSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aescbcEncryptionSecret = undefined;
      this._bootstrapToken = undefined;
      this._secretboxEncryptionSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aescbcEncryptionSecret = value.aescbcEncryptionSecret;
      this._bootstrapToken = value.bootstrapToken;
      this._secretboxEncryptionSecret = value.secretboxEncryptionSecret;
    }
  }

  // aescbc_encryption_secret - computed: false, optional: true, required: false
  private _aescbcEncryptionSecret?: string; 
  public get aescbcEncryptionSecret() {
    return this.getStringAttribute('aescbc_encryption_secret');
  }
  public set aescbcEncryptionSecret(value: string) {
    this._aescbcEncryptionSecret = value;
  }
  public resetAescbcEncryptionSecret() {
    this._aescbcEncryptionSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aescbcEncryptionSecretInput() {
    return this._aescbcEncryptionSecret;
  }

  // bootstrap_token - computed: false, optional: false, required: true
  private _bootstrapToken?: string; 
  public get bootstrapToken() {
    return this.getStringAttribute('bootstrap_token');
  }
  public set bootstrapToken(value: string) {
    this._bootstrapToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapTokenInput() {
    return this._bootstrapToken;
  }

  // secretbox_encryption_secret - computed: false, optional: false, required: true
  private _secretboxEncryptionSecret?: string; 
  public get secretboxEncryptionSecret() {
    return this.getStringAttribute('secretbox_encryption_secret');
  }
  public set secretboxEncryptionSecret(value: string) {
    this._secretboxEncryptionSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretboxEncryptionSecretInput() {
    return this._secretboxEncryptionSecret;
  }
}
export interface DataTalosMachineConfigurationMachineSecretsTrustdinfo {
  /**
  * The trustd token for the talos kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#token DataTalosMachineConfiguration#token}
  */
  readonly token: string;
}

export function dataTalosMachineConfigurationMachineSecretsTrustdinfoToTerraform(struct?: DataTalosMachineConfigurationMachineSecretsTrustdinfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function dataTalosMachineConfigurationMachineSecretsTrustdinfoToHclTerraform(struct?: DataTalosMachineConfigurationMachineSecretsTrustdinfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosMachineConfigurationMachineSecretsTrustdinfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosMachineConfigurationMachineSecretsTrustdinfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosMachineConfigurationMachineSecretsTrustdinfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface DataTalosMachineConfigurationMachineSecrets {
  /**
  * The certs for the talos kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#certs DataTalosMachineConfiguration#certs}
  */
  readonly certs: DataTalosMachineConfigurationMachineSecretsCerts;
  /**
  * The cluster secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#cluster DataTalosMachineConfiguration#cluster}
  */
  readonly cluster: DataTalosMachineConfigurationMachineSecretsCluster;
  /**
  * The secrets for the talos kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#secrets DataTalosMachineConfiguration#secrets}
  */
  readonly secrets: DataTalosMachineConfigurationMachineSecretsSecrets;
  /**
  * The trustd info for the talos kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#trustdinfo DataTalosMachineConfiguration#trustdinfo}
  */
  readonly trustdinfo: DataTalosMachineConfigurationMachineSecretsTrustdinfo;
}

export function dataTalosMachineConfigurationMachineSecretsToTerraform(struct?: DataTalosMachineConfigurationMachineSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certs: dataTalosMachineConfigurationMachineSecretsCertsToTerraform(struct!.certs),
    cluster: dataTalosMachineConfigurationMachineSecretsClusterToTerraform(struct!.cluster),
    secrets: dataTalosMachineConfigurationMachineSecretsSecretsToTerraform(struct!.secrets),
    trustdinfo: dataTalosMachineConfigurationMachineSecretsTrustdinfoToTerraform(struct!.trustdinfo),
  }
}


export function dataTalosMachineConfigurationMachineSecretsToHclTerraform(struct?: DataTalosMachineConfigurationMachineSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certs: {
      value: dataTalosMachineConfigurationMachineSecretsCertsToHclTerraform(struct!.certs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataTalosMachineConfigurationMachineSecretsCerts",
    },
    cluster: {
      value: dataTalosMachineConfigurationMachineSecretsClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataTalosMachineConfigurationMachineSecretsCluster",
    },
    secrets: {
      value: dataTalosMachineConfigurationMachineSecretsSecretsToHclTerraform(struct!.secrets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataTalosMachineConfigurationMachineSecretsSecrets",
    },
    trustdinfo: {
      value: dataTalosMachineConfigurationMachineSecretsTrustdinfoToHclTerraform(struct!.trustdinfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataTalosMachineConfigurationMachineSecretsTrustdinfo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosMachineConfigurationMachineSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosMachineConfigurationMachineSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certs = this._certs?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._trustdinfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustdinfo = this._trustdinfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosMachineConfigurationMachineSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certs.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._secrets.internalValue = undefined;
      this._trustdinfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certs.internalValue = value.certs;
      this._cluster.internalValue = value.cluster;
      this._secrets.internalValue = value.secrets;
      this._trustdinfo.internalValue = value.trustdinfo;
    }
  }

  // certs - computed: false, optional: false, required: true
  private _certs = new DataTalosMachineConfigurationMachineSecretsCertsOutputReference(this, "certs");
  public get certs() {
    return this._certs;
  }
  public putCerts(value: DataTalosMachineConfigurationMachineSecretsCerts) {
    this._certs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certsInput() {
    return this._certs.internalValue;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster = new DataTalosMachineConfigurationMachineSecretsClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: DataTalosMachineConfigurationMachineSecretsCluster) {
    this._cluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // secrets - computed: false, optional: false, required: true
  private _secrets = new DataTalosMachineConfigurationMachineSecretsSecretsOutputReference(this, "secrets");
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataTalosMachineConfigurationMachineSecretsSecrets) {
    this._secrets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // trustdinfo - computed: false, optional: false, required: true
  private _trustdinfo = new DataTalosMachineConfigurationMachineSecretsTrustdinfoOutputReference(this, "trustdinfo");
  public get trustdinfo() {
    return this._trustdinfo;
  }
  public putTrustdinfo(value: DataTalosMachineConfigurationMachineSecretsTrustdinfo) {
    this._trustdinfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustdinfoInput() {
    return this._trustdinfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration talos_machine_configuration}
*/
export class DataTalosMachineConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "talos_machine_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTalosMachineConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTalosMachineConfiguration to import
  * @param importFromId The id of the existing DataTalosMachineConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTalosMachineConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "talos_machine_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/machine_configuration talos_machine_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTalosMachineConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataTalosMachineConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'talos_machine_configuration',
      terraformGeneratorMetadata: {
        providerName: 'talos',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterEndpoint = config.clusterEndpoint;
    this._clusterName = config.clusterName;
    this._configPatches = config.configPatches;
    this._docs = config.docs;
    this._examples = config.examples;
    this._kubernetesVersion = config.kubernetesVersion;
    this._machineSecrets.internalValue = config.machineSecrets;
    this._machineType = config.machineType;
    this._talosVersion = config.talosVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_endpoint - computed: false, optional: false, required: true
  private _clusterEndpoint?: string; 
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }
  public set clusterEndpoint(value: string) {
    this._clusterEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointInput() {
    return this._clusterEndpoint;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // config_patches - computed: false, optional: true, required: false
  private _configPatches?: string[]; 
  public get configPatches() {
    return this.getListAttribute('config_patches');
  }
  public set configPatches(value: string[]) {
    this._configPatches = value;
  }
  public resetConfigPatches() {
    this._configPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPatchesInput() {
    return this._configPatches;
  }

  // docs - computed: false, optional: true, required: false
  private _docs?: boolean | cdktf.IResolvable; 
  public get docs() {
    return this.getBooleanAttribute('docs');
  }
  public set docs(value: boolean | cdktf.IResolvable) {
    this._docs = value;
  }
  public resetDocs() {
    this._docs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docsInput() {
    return this._docs;
  }

  // examples - computed: false, optional: true, required: false
  private _examples?: boolean | cdktf.IResolvable; 
  public get examples() {
    return this.getBooleanAttribute('examples');
  }
  public set examples(value: boolean | cdktf.IResolvable) {
    this._examples = value;
  }
  public resetExamples() {
    this._examples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get examplesInput() {
    return this._examples;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubernetes_version - computed: false, optional: true, required: false
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

  // machine_configuration - computed: true, optional: false, required: false
  public get machineConfiguration() {
    return this.getStringAttribute('machine_configuration');
  }

  // machine_secrets - computed: false, optional: false, required: true
  private _machineSecrets = new DataTalosMachineConfigurationMachineSecretsOutputReference(this, "machine_secrets");
  public get machineSecrets() {
    return this._machineSecrets;
  }
  public putMachineSecrets(value: DataTalosMachineConfigurationMachineSecrets) {
    this._machineSecrets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSecretsInput() {
    return this._machineSecrets.internalValue;
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

  // talos_version - computed: false, optional: true, required: false
  private _talosVersion?: string; 
  public get talosVersion() {
    return this.getStringAttribute('talos_version');
  }
  public set talosVersion(value: string) {
    this._talosVersion = value;
  }
  public resetTalosVersion() {
    this._talosVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get talosVersionInput() {
    return this._talosVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_endpoint: cdktf.stringToTerraform(this._clusterEndpoint),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      config_patches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configPatches),
      docs: cdktf.booleanToTerraform(this._docs),
      examples: cdktf.booleanToTerraform(this._examples),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      machine_secrets: dataTalosMachineConfigurationMachineSecretsToTerraform(this._machineSecrets.internalValue),
      machine_type: cdktf.stringToTerraform(this._machineType),
      talos_version: cdktf.stringToTerraform(this._talosVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_endpoint: {
        value: cdktf.stringToHclTerraform(this._clusterEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_patches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configPatches),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      docs: {
        value: cdktf.booleanToHclTerraform(this._docs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      examples: {
        value: cdktf.booleanToHclTerraform(this._examples),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_secrets: {
        value: dataTalosMachineConfigurationMachineSecretsToHclTerraform(this._machineSecrets.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataTalosMachineConfigurationMachineSecrets",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      talos_version: {
        value: cdktf.stringToHclTerraform(this._talosVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
