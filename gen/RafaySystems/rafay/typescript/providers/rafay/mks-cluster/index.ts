// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * api version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#api_version MksCluster#api_version}
  */
  readonly apiVersion?: string;
  /**
  * kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#kind MksCluster#kind}
  */
  readonly kind?: string;
  /**
  * metadata of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#metadata MksCluster#metadata}
  */
  readonly metadata: MksClusterMetadata;
  /**
  * cluster specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#spec MksCluster#spec}
  */
  readonly spec: MksClusterSpec;
}
export interface MksClusterMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#annotations MksCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#description MksCluster#description}
  */
  readonly description?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#labels MksCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#name MksCluster#name}
  */
  readonly name: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#project MksCluster#project}
  */
  readonly project: string;
}

export function mksClusterMetadataToTerraform(struct?: MksClusterMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function mksClusterMetadataToHclTerraform(struct?: MksClusterMetadata | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
      this._name = value.name;
      this._project = value.project;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface MksClusterSpecBlueprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#name MksCluster#name}
  */
  readonly name: string;
  /**
  * Version of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#version MksCluster#version}
  */
  readonly version?: string;
}

export function mksClusterSpecBlueprintToTerraform(struct?: MksClusterSpecBlueprint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function mksClusterSpecBlueprintToHclTerraform(struct?: MksClusterSpecBlueprint | cdktf.IResolvable): any {
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

export class MksClusterSpecBlueprintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecBlueprint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecBlueprint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
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

  // version - computed: true, optional: true, required: false
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
export interface MksClusterSpecConfigClusterSsh {
  /**
  * Provide ssh passphrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#passphrase MksCluster#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Provide ssh port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#port MksCluster#port}
  */
  readonly port?: string;
  /**
  * Provide local path to the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#private_key_path MksCluster#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * Provide the ssh username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#username MksCluster#username}
  */
  readonly username?: string;
}

export function mksClusterSpecConfigClusterSshToTerraform(struct?: MksClusterSpecConfigClusterSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    port: cdktf.stringToTerraform(struct!.port),
    private_key_path: cdktf.stringToTerraform(struct!.privateKeyPath),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function mksClusterSpecConfigClusterSshToHclTerraform(struct?: MksClusterSpecConfigClusterSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterSpecConfigClusterSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecConfigClusterSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPath = this._privateKeyPath;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecConfigClusterSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passphrase = undefined;
      this._port = undefined;
      this._privateKeyPath = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passphrase = value.passphrase;
      this._port = value.port;
      this._privateKeyPath = value.privateKeyPath;
      this._username = value.username;
    }
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this.getStringAttribute('private_key_path');
  }
  public set privateKeyPath(value: string) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface MksClusterSpecConfigKubernetesUpgradeParams {
  /**
  * It can be number or percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#worker_concurrency MksCluster#worker_concurrency}
  */
  readonly workerConcurrency: string;
}

export function mksClusterSpecConfigKubernetesUpgradeParamsToTerraform(struct?: MksClusterSpecConfigKubernetesUpgradeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    worker_concurrency: cdktf.stringToTerraform(struct!.workerConcurrency),
  }
}


export function mksClusterSpecConfigKubernetesUpgradeParamsToHclTerraform(struct?: MksClusterSpecConfigKubernetesUpgradeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    worker_concurrency: {
      value: cdktf.stringToHclTerraform(struct!.workerConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterSpecConfigKubernetesUpgradeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecConfigKubernetesUpgradeParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workerConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerConcurrency = this._workerConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecConfigKubernetesUpgradeParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workerConcurrency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workerConcurrency = value.workerConcurrency;
    }
  }

  // worker_concurrency - computed: false, optional: false, required: true
  private _workerConcurrency?: string; 
  public get workerConcurrency() {
    return this.getStringAttribute('worker_concurrency');
  }
  public set workerConcurrency(value: string) {
    this._workerConcurrency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConcurrencyInput() {
    return this._workerConcurrency;
  }
}
export interface MksClusterSpecConfigKubernetesUpgrade {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#params MksCluster#params}
  */
  readonly params: MksClusterSpecConfigKubernetesUpgradeParams;
  /**
  * Kubernetes upgrade strategy for worker nodes and Valid options are: concurrent/sequential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#strategy MksCluster#strategy}
  */
  readonly strategy: string;
}

export function mksClusterSpecConfigKubernetesUpgradeToTerraform(struct?: MksClusterSpecConfigKubernetesUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: mksClusterSpecConfigKubernetesUpgradeParamsToTerraform(struct!.params),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function mksClusterSpecConfigKubernetesUpgradeToHclTerraform(struct?: MksClusterSpecConfigKubernetesUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    params: {
      value: mksClusterSpecConfigKubernetesUpgradeParamsToHclTerraform(struct!.params),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecConfigKubernetesUpgradeParams",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterSpecConfigKubernetesUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecConfigKubernetesUpgrade | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecConfigKubernetesUpgrade | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._params.internalValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._params.internalValue = value.params;
      this._strategy = value.strategy;
    }
  }

  // params - computed: false, optional: false, required: true
  private _params = new MksClusterSpecConfigKubernetesUpgradeParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: MksClusterSpecConfigKubernetesUpgradeParams) {
    this._params.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface MksClusterSpecConfigNetworkCni {
  /**
  * Provide the CNI name, e.g., Calico or Cilium
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#name MksCluster#name}
  */
  readonly name: string;
  /**
  * Provide the CNI version, e.g., 3.26.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#version MksCluster#version}
  */
  readonly version?: string;
}

export function mksClusterSpecConfigNetworkCniToTerraform(struct?: MksClusterSpecConfigNetworkCni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function mksClusterSpecConfigNetworkCniToHclTerraform(struct?: MksClusterSpecConfigNetworkCni | cdktf.IResolvable): any {
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

export class MksClusterSpecConfigNetworkCniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecConfigNetworkCni | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecConfigNetworkCni | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
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
export interface MksClusterSpecConfigNetworkIpv6 {
  /**
  * Kubernetes pod subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#pod_subnet MksCluster#pod_subnet}
  */
  readonly podSubnet?: string;
  /**
  * Kubernetes service subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#service_subnet MksCluster#service_subnet}
  */
  readonly serviceSubnet?: string;
}

export function mksClusterSpecConfigNetworkIpv6ToTerraform(struct?: MksClusterSpecConfigNetworkIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_subnet: cdktf.stringToTerraform(struct!.podSubnet),
    service_subnet: cdktf.stringToTerraform(struct!.serviceSubnet),
  }
}


export function mksClusterSpecConfigNetworkIpv6ToHclTerraform(struct?: MksClusterSpecConfigNetworkIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_subnet: {
      value: cdktf.stringToHclTerraform(struct!.podSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_subnet: {
      value: cdktf.stringToHclTerraform(struct!.serviceSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterSpecConfigNetworkIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecConfigNetworkIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSubnet = this._podSubnet;
    }
    if (this._serviceSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSubnet = this._serviceSubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecConfigNetworkIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podSubnet = undefined;
      this._serviceSubnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podSubnet = value.podSubnet;
      this._serviceSubnet = value.serviceSubnet;
    }
  }

  // pod_subnet - computed: false, optional: true, required: false
  private _podSubnet?: string; 
  public get podSubnet() {
    return this.getStringAttribute('pod_subnet');
  }
  public set podSubnet(value: string) {
    this._podSubnet = value;
  }
  public resetPodSubnet() {
    this._podSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetInput() {
    return this._podSubnet;
  }

  // service_subnet - computed: false, optional: true, required: false
  private _serviceSubnet?: string; 
  public get serviceSubnet() {
    return this.getStringAttribute('service_subnet');
  }
  public set serviceSubnet(value: string) {
    this._serviceSubnet = value;
  }
  public resetServiceSubnet() {
    this._serviceSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSubnetInput() {
    return this._serviceSubnet;
  }
}
export interface MksClusterSpecConfigNetwork {
  /**
  * MKS Cluster CNI Specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#cni MksCluster#cni}
  */
  readonly cni: MksClusterSpecConfigNetworkCni;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#ipv6 MksCluster#ipv6}
  */
  readonly ipv6?: MksClusterSpecConfigNetworkIpv6;
  /**
  * Kubernetes pod subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#pod_subnet MksCluster#pod_subnet}
  */
  readonly podSubnet: string;
  /**
  * Kubernetes service subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#service_subnet MksCluster#service_subnet}
  */
  readonly serviceSubnet: string;
}

export function mksClusterSpecConfigNetworkToTerraform(struct?: MksClusterSpecConfigNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cni: mksClusterSpecConfigNetworkCniToTerraform(struct!.cni),
    ipv6: mksClusterSpecConfigNetworkIpv6ToTerraform(struct!.ipv6),
    pod_subnet: cdktf.stringToTerraform(struct!.podSubnet),
    service_subnet: cdktf.stringToTerraform(struct!.serviceSubnet),
  }
}


export function mksClusterSpecConfigNetworkToHclTerraform(struct?: MksClusterSpecConfigNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cni: {
      value: mksClusterSpecConfigNetworkCniToHclTerraform(struct!.cni),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecConfigNetworkCni",
    },
    ipv6: {
      value: mksClusterSpecConfigNetworkIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecConfigNetworkIpv6",
    },
    pod_subnet: {
      value: cdktf.stringToHclTerraform(struct!.podSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_subnet: {
      value: cdktf.stringToHclTerraform(struct!.serviceSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterSpecConfigNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecConfigNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cni = this._cni?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._podSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSubnet = this._podSubnet;
    }
    if (this._serviceSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSubnet = this._serviceSubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecConfigNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cni.internalValue = undefined;
      this._ipv6.internalValue = undefined;
      this._podSubnet = undefined;
      this._serviceSubnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cni.internalValue = value.cni;
      this._ipv6.internalValue = value.ipv6;
      this._podSubnet = value.podSubnet;
      this._serviceSubnet = value.serviceSubnet;
    }
  }

  // cni - computed: false, optional: false, required: true
  private _cni = new MksClusterSpecConfigNetworkCniOutputReference(this, "cni");
  public get cni() {
    return this._cni;
  }
  public putCni(value: MksClusterSpecConfigNetworkCni) {
    this._cni.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cniInput() {
    return this._cni.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new MksClusterSpecConfigNetworkIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: MksClusterSpecConfigNetworkIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // pod_subnet - computed: false, optional: false, required: true
  private _podSubnet?: string; 
  public get podSubnet() {
    return this.getStringAttribute('pod_subnet');
  }
  public set podSubnet(value: string) {
    this._podSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetInput() {
    return this._podSubnet;
  }

  // service_subnet - computed: false, optional: false, required: true
  private _serviceSubnet?: string; 
  public get serviceSubnet() {
    return this.getStringAttribute('service_subnet');
  }
  public set serviceSubnet(value: string) {
    this._serviceSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSubnetInput() {
    return this._serviceSubnet;
  }
}
export interface MksClusterSpecConfigNodesSsh {
  /**
  * Use this to override node level ssh details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#ip_address MksCluster#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * SSH Passphrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#passphrase MksCluster#passphrase}
  */
  readonly passphrase?: string;
  /**
  * SSH Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#port MksCluster#port}
  */
  readonly port?: string;
  /**
  * Specify Path to SSH private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#private_key_path MksCluster#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * SSH Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#username MksCluster#username}
  */
  readonly username?: string;
}

export function mksClusterSpecConfigNodesSshToTerraform(struct?: MksClusterSpecConfigNodesSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    port: cdktf.stringToTerraform(struct!.port),
    private_key_path: cdktf.stringToTerraform(struct!.privateKeyPath),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function mksClusterSpecConfigNodesSshToHclTerraform(struct?: MksClusterSpecConfigNodesSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterSpecConfigNodesSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecConfigNodesSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPath = this._privateKeyPath;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecConfigNodesSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._passphrase = undefined;
      this._port = undefined;
      this._privateKeyPath = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._passphrase = value.passphrase;
      this._port = value.port;
      this._privateKeyPath = value.privateKeyPath;
      this._username = value.username;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this.getStringAttribute('private_key_path');
  }
  public set privateKeyPath(value: string) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface MksClusterSpecConfigNodesTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#effect MksCluster#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#key MksCluster#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#value MksCluster#value}
  */
  readonly value?: string;
}

export function mksClusterSpecConfigNodesTaintsToTerraform(struct?: MksClusterSpecConfigNodesTaints | cdktf.IResolvable): any {
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


export function mksClusterSpecConfigNodesTaintsToHclTerraform(struct?: MksClusterSpecConfigNodesTaints | cdktf.IResolvable): any {
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

export class MksClusterSpecConfigNodesTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MksClusterSpecConfigNodesTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MksClusterSpecConfigNodesTaints | cdktf.IResolvable | undefined) {
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

export class MksClusterSpecConfigNodesTaintsList extends cdktf.ComplexList {
  public internalValue? : MksClusterSpecConfigNodesTaints[] | cdktf.IResolvable

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
  public get(index: number): MksClusterSpecConfigNodesTaintsOutputReference {
    return new MksClusterSpecConfigNodesTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MksClusterSpecConfigNodes {
  /**
  * System Architecture of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#arch MksCluster#arch}
  */
  readonly arch: string;
  /**
  * Hostname of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#hostname MksCluster#hostname}
  */
  readonly hostname: string;
  /**
  * Interface to be used on the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#interface MksCluster#interface}
  */
  readonly interface?: string;
  /**
  * node kubelet extra args
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#kubelet_extra_args MksCluster#kubelet_extra_args}
  */
  readonly kubeletExtraArgs?: { [key: string]: string };
  /**
  * labels to be added to the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#labels MksCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * OS of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#operating_system MksCluster#operating_system}
  */
  readonly operatingSystem: string;
  /**
  * Private ip address of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#private_ip MksCluster#private_ip}
  */
  readonly privateIp: string;
  /**
  * Valid roles are: 'ControlPlane', 'Worker', 'Storage'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#roles MksCluster#roles}
  */
  readonly roles: string[];
  /**
  * MKS Node SSH definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#ssh MksCluster#ssh}
  */
  readonly ssh?: MksClusterSpecConfigNodesSsh;
  /**
  * taints to be added to the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#taints MksCluster#taints}
  */
  readonly taints?: MksClusterSpecConfigNodesTaints[] | cdktf.IResolvable;
}

export function mksClusterSpecConfigNodesToTerraform(struct?: MksClusterSpecConfigNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    interface: cdktf.stringToTerraform(struct!.interface),
    kubelet_extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubeletExtraArgs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    ssh: mksClusterSpecConfigNodesSshToTerraform(struct!.ssh),
    taints: cdktf.listMapper(mksClusterSpecConfigNodesTaintsToTerraform, false)(struct!.taints),
  }
}


export function mksClusterSpecConfigNodesToHclTerraform(struct?: MksClusterSpecConfigNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubelet_extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubeletExtraArgs),
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
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ssh: {
      value: mksClusterSpecConfigNodesSshToHclTerraform(struct!.ssh),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecConfigNodesSsh",
    },
    taints: {
      value: cdktf.listMapperHcl(mksClusterSpecConfigNodesTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "set",
      storageClassType: "MksClusterSpecConfigNodesTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterSpecConfigNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): MksClusterSpecConfigNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._kubeletExtraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletExtraArgs = this._kubeletExtraArgs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecConfigNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arch = undefined;
      this._hostname = undefined;
      this._interface = undefined;
      this._kubeletExtraArgs = undefined;
      this._labels = undefined;
      this._operatingSystem = undefined;
      this._privateIp = undefined;
      this._roles = undefined;
      this._ssh.internalValue = undefined;
      this._taints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arch = value.arch;
      this._hostname = value.hostname;
      this._interface = value.interface;
      this._kubeletExtraArgs = value.kubeletExtraArgs;
      this._labels = value.labels;
      this._operatingSystem = value.operatingSystem;
      this._privateIp = value.privateIp;
      this._roles = value.roles;
      this._ssh.internalValue = value.ssh;
      this._taints.internalValue = value.taints;
    }
  }

  // arch - computed: false, optional: false, required: true
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // kubelet_extra_args - computed: false, optional: true, required: false
  private _kubeletExtraArgs?: { [key: string]: string }; 
  public get kubeletExtraArgs() {
    return this.getStringMapAttribute('kubelet_extra_args');
  }
  public set kubeletExtraArgs(value: { [key: string]: string }) {
    this._kubeletExtraArgs = value;
  }
  public resetKubeletExtraArgs() {
    this._kubeletExtraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletExtraArgsInput() {
    return this._kubeletExtraArgs;
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

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // private_ip - computed: false, optional: false, required: true
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new MksClusterSpecConfigNodesSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: MksClusterSpecConfigNodesSsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new MksClusterSpecConfigNodesTaintsList(this, "taints", true);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: MksClusterSpecConfigNodesTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}

export class MksClusterSpecConfigNodesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: MksClusterSpecConfigNodes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): MksClusterSpecConfigNodesOutputReference {
    return new MksClusterSpecConfigNodesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface MksClusterSpecConfig {
  /**
  * Auto approves incoming nodes by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#auto_approve_nodes MksCluster#auto_approve_nodes}
  */
  readonly autoApproveNodes?: boolean | cdktf.IResolvable;
  /**
  * SSH config for all the nodes within the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#cluster_ssh MksCluster#cluster_ssh}
  */
  readonly clusterSsh?: MksClusterSpecConfigClusterSsh;
  /**
  * Select this option for preventing scheduling of user workloads on Control Plane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#dedicated_control_plane MksCluster#dedicated_control_plane}
  */
  readonly dedicatedControlPlane?: boolean | cdktf.IResolvable;
  /**
  * Select this option for highly available control plane. Minimum three control plane nodes are required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#high_availability MksCluster#high_availability}
  */
  readonly highAvailability?: boolean | cdktf.IResolvable;
  /**
  * Installer TTL Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#installer_ttl MksCluster#installer_ttl}
  */
  readonly installerTtl?: number;
  /**
  * cluster kubelet extra args
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#kubelet_extra_args MksCluster#kubelet_extra_args}
  */
  readonly kubeletExtraArgs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#kubernetes_upgrade MksCluster#kubernetes_upgrade}
  */
  readonly kubernetesUpgrade?: MksClusterSpecConfigKubernetesUpgrade;
  /**
  * Kubernetes version of the Control Plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#kubernetes_version MksCluster#kubernetes_version}
  */
  readonly kubernetesVersion: string;
  /**
  * The data center location where the cluster nodes will be launched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#location MksCluster#location}
  */
  readonly location?: string;
  /**
  * MKS Cluster Network Specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#network MksCluster#network}
  */
  readonly network: MksClusterSpecConfigNetwork;
  /**
  * holds node configuration for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#nodes MksCluster#nodes}
  */
  readonly nodes: { [key: string]: MksClusterSpecConfigNodes } | cdktf.IResolvable;
  /**
  * Platform version configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#platform_version MksCluster#platform_version}
  */
  readonly platformVersion?: string;
}

export function mksClusterSpecConfigToTerraform(struct?: MksClusterSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_approve_nodes: cdktf.booleanToTerraform(struct!.autoApproveNodes),
    cluster_ssh: mksClusterSpecConfigClusterSshToTerraform(struct!.clusterSsh),
    dedicated_control_plane: cdktf.booleanToTerraform(struct!.dedicatedControlPlane),
    high_availability: cdktf.booleanToTerraform(struct!.highAvailability),
    installer_ttl: cdktf.numberToTerraform(struct!.installerTtl),
    kubelet_extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubeletExtraArgs),
    kubernetes_upgrade: mksClusterSpecConfigKubernetesUpgradeToTerraform(struct!.kubernetesUpgrade),
    kubernetes_version: cdktf.stringToTerraform(struct!.kubernetesVersion),
    location: cdktf.stringToTerraform(struct!.location),
    network: mksClusterSpecConfigNetworkToTerraform(struct!.network),
    nodes: cdktf.hashMapper(mksClusterSpecConfigNodesToTerraform)(struct!.nodes),
    platform_version: cdktf.stringToTerraform(struct!.platformVersion),
  }
}


export function mksClusterSpecConfigToHclTerraform(struct?: MksClusterSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_approve_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.autoApproveNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_ssh: {
      value: mksClusterSpecConfigClusterSshToHclTerraform(struct!.clusterSsh),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecConfigClusterSsh",
    },
    dedicated_control_plane: {
      value: cdktf.booleanToHclTerraform(struct!.dedicatedControlPlane),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    high_availability: {
      value: cdktf.booleanToHclTerraform(struct!.highAvailability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    installer_ttl: {
      value: cdktf.numberToHclTerraform(struct!.installerTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kubelet_extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubeletExtraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kubernetes_upgrade: {
      value: mksClusterSpecConfigKubernetesUpgradeToHclTerraform(struct!.kubernetesUpgrade),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecConfigKubernetesUpgrade",
    },
    kubernetes_version: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: mksClusterSpecConfigNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecConfigNetwork",
    },
    nodes: {
      value: cdktf.hashMapperHcl(mksClusterSpecConfigNodesToHclTerraform)(struct!.nodes),
      isBlock: true,
      type: "map",
      storageClassType: "MksClusterSpecConfigNodesMap",
    },
    platform_version: {
      value: cdktf.stringToHclTerraform(struct!.platformVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterSpecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoApproveNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApproveNodes = this._autoApproveNodes;
    }
    if (this._clusterSsh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSsh = this._clusterSsh?.internalValue;
    }
    if (this._dedicatedControlPlane !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedControlPlane = this._dedicatedControlPlane;
    }
    if (this._highAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailability = this._highAvailability;
    }
    if (this._installerTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.installerTtl = this._installerTtl;
    }
    if (this._kubeletExtraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletExtraArgs = this._kubeletExtraArgs;
    }
    if (this._kubernetesUpgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesUpgrade = this._kubernetesUpgrade?.internalValue;
    }
    if (this._kubernetesVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesVersion = this._kubernetesVersion;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._platformVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformVersion = this._platformVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoApproveNodes = undefined;
      this._clusterSsh.internalValue = undefined;
      this._dedicatedControlPlane = undefined;
      this._highAvailability = undefined;
      this._installerTtl = undefined;
      this._kubeletExtraArgs = undefined;
      this._kubernetesUpgrade.internalValue = undefined;
      this._kubernetesVersion = undefined;
      this._location = undefined;
      this._network.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._platformVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoApproveNodes = value.autoApproveNodes;
      this._clusterSsh.internalValue = value.clusterSsh;
      this._dedicatedControlPlane = value.dedicatedControlPlane;
      this._highAvailability = value.highAvailability;
      this._installerTtl = value.installerTtl;
      this._kubeletExtraArgs = value.kubeletExtraArgs;
      this._kubernetesUpgrade.internalValue = value.kubernetesUpgrade;
      this._kubernetesVersion = value.kubernetesVersion;
      this._location = value.location;
      this._network.internalValue = value.network;
      this._nodes.internalValue = value.nodes;
      this._platformVersion = value.platformVersion;
    }
  }

  // auto_approve_nodes - computed: false, optional: true, required: false
  private _autoApproveNodes?: boolean | cdktf.IResolvable; 
  public get autoApproveNodes() {
    return this.getBooleanAttribute('auto_approve_nodes');
  }
  public set autoApproveNodes(value: boolean | cdktf.IResolvable) {
    this._autoApproveNodes = value;
  }
  public resetAutoApproveNodes() {
    this._autoApproveNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveNodesInput() {
    return this._autoApproveNodes;
  }

  // cluster_ssh - computed: false, optional: true, required: false
  private _clusterSsh = new MksClusterSpecConfigClusterSshOutputReference(this, "cluster_ssh");
  public get clusterSsh() {
    return this._clusterSsh;
  }
  public putClusterSsh(value: MksClusterSpecConfigClusterSsh) {
    this._clusterSsh.internalValue = value;
  }
  public resetClusterSsh() {
    this._clusterSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSshInput() {
    return this._clusterSsh.internalValue;
  }

  // dedicated_control_plane - computed: false, optional: true, required: false
  private _dedicatedControlPlane?: boolean | cdktf.IResolvable; 
  public get dedicatedControlPlane() {
    return this.getBooleanAttribute('dedicated_control_plane');
  }
  public set dedicatedControlPlane(value: boolean | cdktf.IResolvable) {
    this._dedicatedControlPlane = value;
  }
  public resetDedicatedControlPlane() {
    this._dedicatedControlPlane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedControlPlaneInput() {
    return this._dedicatedControlPlane;
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability?: boolean | cdktf.IResolvable; 
  public get highAvailability() {
    return this.getBooleanAttribute('high_availability');
  }
  public set highAvailability(value: boolean | cdktf.IResolvable) {
    this._highAvailability = value;
  }
  public resetHighAvailability() {
    this._highAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability;
  }

  // installer_ttl - computed: true, optional: true, required: false
  private _installerTtl?: number; 
  public get installerTtl() {
    return this.getNumberAttribute('installer_ttl');
  }
  public set installerTtl(value: number) {
    this._installerTtl = value;
  }
  public resetInstallerTtl() {
    this._installerTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installerTtlInput() {
    return this._installerTtl;
  }

  // kubelet_extra_args - computed: false, optional: true, required: false
  private _kubeletExtraArgs?: { [key: string]: string }; 
  public get kubeletExtraArgs() {
    return this.getStringMapAttribute('kubelet_extra_args');
  }
  public set kubeletExtraArgs(value: { [key: string]: string }) {
    this._kubeletExtraArgs = value;
  }
  public resetKubeletExtraArgs() {
    this._kubeletExtraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletExtraArgsInput() {
    return this._kubeletExtraArgs;
  }

  // kubernetes_upgrade - computed: false, optional: true, required: false
  private _kubernetesUpgrade = new MksClusterSpecConfigKubernetesUpgradeOutputReference(this, "kubernetes_upgrade");
  public get kubernetesUpgrade() {
    return this._kubernetesUpgrade;
  }
  public putKubernetesUpgrade(value: MksClusterSpecConfigKubernetesUpgrade) {
    this._kubernetesUpgrade.internalValue = value;
  }
  public resetKubernetesUpgrade() {
    this._kubernetesUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesUpgradeInput() {
    return this._kubernetesUpgrade.internalValue;
  }

  // kubernetes_version - computed: false, optional: false, required: true
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // network - computed: false, optional: false, required: true
  private _network = new MksClusterSpecConfigNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: MksClusterSpecConfigNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new MksClusterSpecConfigNodesMap(this, "nodes");
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: { [key: string]: MksClusterSpecConfigNodes } | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // platform_version - computed: false, optional: true, required: false
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  public resetPlatformVersion() {
    this._platformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
  }
}
export interface MksClusterSpecProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#allow_insecure_bootstrap MksCluster#allow_insecure_bootstrap}
  */
  readonly allowInsecureBootstrap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#bootstrap_ca MksCluster#bootstrap_ca}
  */
  readonly bootstrapCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#enabled MksCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#http_proxy MksCluster#http_proxy}
  */
  readonly httpProxy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#https_proxy MksCluster#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#no_proxy MksCluster#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#proxy_auth MksCluster#proxy_auth}
  */
  readonly proxyAuth?: string;
}

export function mksClusterSpecProxyToTerraform(struct?: MksClusterSpecProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure_bootstrap: cdktf.booleanToTerraform(struct!.allowInsecureBootstrap),
    bootstrap_ca: cdktf.stringToTerraform(struct!.bootstrapCa),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    proxy_auth: cdktf.stringToTerraform(struct!.proxyAuth),
  }
}


export function mksClusterSpecProxyToHclTerraform(struct?: MksClusterSpecProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure_bootstrap: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecureBootstrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bootstrap_ca: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapCa),
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
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_auth: {
      value: cdktf.stringToHclTerraform(struct!.proxyAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterSpecProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecureBootstrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecureBootstrap = this._allowInsecureBootstrap;
    }
    if (this._bootstrapCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapCa = this._bootstrapCa;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._proxyAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAuth = this._proxyAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInsecureBootstrap = undefined;
      this._bootstrapCa = undefined;
      this._enabled = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
      this._proxyAuth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInsecureBootstrap = value.allowInsecureBootstrap;
      this._bootstrapCa = value.bootstrapCa;
      this._enabled = value.enabled;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
      this._proxyAuth = value.proxyAuth;
    }
  }

  // allow_insecure_bootstrap - computed: false, optional: true, required: false
  private _allowInsecureBootstrap?: boolean | cdktf.IResolvable; 
  public get allowInsecureBootstrap() {
    return this.getBooleanAttribute('allow_insecure_bootstrap');
  }
  public set allowInsecureBootstrap(value: boolean | cdktf.IResolvable) {
    this._allowInsecureBootstrap = value;
  }
  public resetAllowInsecureBootstrap() {
    this._allowInsecureBootstrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureBootstrapInput() {
    return this._allowInsecureBootstrap;
  }

  // bootstrap_ca - computed: false, optional: true, required: false
  private _bootstrapCa?: string; 
  public get bootstrapCa() {
    return this.getStringAttribute('bootstrap_ca');
  }
  public set bootstrapCa(value: string) {
    this._bootstrapCa = value;
  }
  public resetBootstrapCa() {
    this._bootstrapCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapCaInput() {
    return this._bootstrapCa;
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

  // http_proxy - computed: false, optional: false, required: true
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // proxy_auth - computed: false, optional: true, required: false
  private _proxyAuth?: string; 
  public get proxyAuth() {
    return this.getStringAttribute('proxy_auth');
  }
  public set proxyAuth(value: string) {
    this._proxyAuth = value;
  }
  public resetProxyAuth() {
    this._proxyAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAuthInput() {
    return this._proxyAuth;
  }
}
export interface MksClusterSpecSharingProjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#name MksCluster#name}
  */
  readonly name: string;
}

export function mksClusterSpecSharingProjectsToTerraform(struct?: MksClusterSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function mksClusterSpecSharingProjectsToHclTerraform(struct?: MksClusterSpecSharingProjects | cdktf.IResolvable): any {
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

export class MksClusterSpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MksClusterSpecSharingProjects | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MksClusterSpecSharingProjects | cdktf.IResolvable | undefined) {
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

export class MksClusterSpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : MksClusterSpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): MksClusterSpecSharingProjectsOutputReference {
    return new MksClusterSpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MksClusterSpecSharing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#enabled MksCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#projects MksCluster#projects}
  */
  readonly projects: MksClusterSpecSharingProjects[] | cdktf.IResolvable;
}

export function mksClusterSpecSharingToTerraform(struct?: MksClusterSpecSharing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(mksClusterSpecSharingProjectsToTerraform, false)(struct!.projects),
  }
}


export function mksClusterSpecSharingToHclTerraform(struct?: MksClusterSpecSharing | cdktf.IResolvable): any {
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
    projects: {
      value: cdktf.listMapperHcl(mksClusterSpecSharingProjectsToHclTerraform, false)(struct!.projects),
      isBlock: true,
      type: "set",
      storageClassType: "MksClusterSpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterSpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecSharing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._projects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecSharing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._projects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._projects.internalValue = value.projects;
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

  // projects - computed: false, optional: false, required: true
  private _projects = new MksClusterSpecSharingProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: MksClusterSpecSharingProjects[] | cdktf.IResolvable) {
    this._projects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }
}
export interface MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#effect MksCluster#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#key MksCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#operator MksCluster#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#toleration_seconds MksCluster#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#value MksCluster#value}
  */
  readonly value?: string;
}

export function mksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerationsToTerraform(struct?: MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerationsToHclTerraform(struct?: MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerations | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerations | cdktf.IResolvable | undefined {
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
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
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
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerationsList extends cdktf.ComplexList {
  public internalValue? : MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerations[] | cdktf.IResolvable

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
  public get(index: number): MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerationsOutputReference {
    return new MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MksClusterSpecSystemComponentsPlacementDaemonSetOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#daemon_set_tolerations MksCluster#daemon_set_tolerations}
  */
  readonly daemonSetTolerations?: MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#node_selection_enabled MksCluster#node_selection_enabled}
  */
  readonly nodeSelectionEnabled?: boolean | cdktf.IResolvable;
}

export function mksClusterSpecSystemComponentsPlacementDaemonSetOverrideToTerraform(struct?: MksClusterSpecSystemComponentsPlacementDaemonSetOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daemon_set_tolerations: cdktf.listMapper(mksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerationsToTerraform, false)(struct!.daemonSetTolerations),
    node_selection_enabled: cdktf.booleanToTerraform(struct!.nodeSelectionEnabled),
  }
}


export function mksClusterSpecSystemComponentsPlacementDaemonSetOverrideToHclTerraform(struct?: MksClusterSpecSystemComponentsPlacementDaemonSetOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daemon_set_tolerations: {
      value: cdktf.listMapperHcl(mksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerationsToHclTerraform, false)(struct!.daemonSetTolerations),
      isBlock: true,
      type: "set",
      storageClassType: "MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerationsList",
    },
    node_selection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.nodeSelectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterSpecSystemComponentsPlacementDaemonSetOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecSystemComponentsPlacementDaemonSetOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daemonSetTolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonSetTolerations = this._daemonSetTolerations?.internalValue;
    }
    if (this._nodeSelectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectionEnabled = this._nodeSelectionEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecSystemComponentsPlacementDaemonSetOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daemonSetTolerations.internalValue = undefined;
      this._nodeSelectionEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daemonSetTolerations.internalValue = value.daemonSetTolerations;
      this._nodeSelectionEnabled = value.nodeSelectionEnabled;
    }
  }

  // daemon_set_tolerations - computed: false, optional: true, required: false
  private _daemonSetTolerations = new MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerationsList(this, "daemon_set_tolerations", true);
  public get daemonSetTolerations() {
    return this._daemonSetTolerations;
  }
  public putDaemonSetTolerations(value: MksClusterSpecSystemComponentsPlacementDaemonSetOverrideDaemonSetTolerations[] | cdktf.IResolvable) {
    this._daemonSetTolerations.internalValue = value;
  }
  public resetDaemonSetTolerations() {
    this._daemonSetTolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonSetTolerationsInput() {
    return this._daemonSetTolerations.internalValue;
  }

  // node_selection_enabled - computed: false, optional: true, required: false
  private _nodeSelectionEnabled?: boolean | cdktf.IResolvable; 
  public get nodeSelectionEnabled() {
    return this.getBooleanAttribute('node_selection_enabled');
  }
  public set nodeSelectionEnabled(value: boolean | cdktf.IResolvable) {
    this._nodeSelectionEnabled = value;
  }
  public resetNodeSelectionEnabled() {
    this._nodeSelectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectionEnabledInput() {
    return this._nodeSelectionEnabled;
  }
}
export interface MksClusterSpecSystemComponentsPlacementTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#effect MksCluster#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#key MksCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#operator MksCluster#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#toleration_seconds MksCluster#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#value MksCluster#value}
  */
  readonly value?: string;
}

export function mksClusterSpecSystemComponentsPlacementTolerationsToTerraform(struct?: MksClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mksClusterSpecSystemComponentsPlacementTolerationsToHclTerraform(struct?: MksClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class MksClusterSpecSystemComponentsPlacementTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MksClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable | undefined {
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
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
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
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class MksClusterSpecSystemComponentsPlacementTolerationsList extends cdktf.ComplexList {
  public internalValue? : MksClusterSpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable

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
  public get(index: number): MksClusterSpecSystemComponentsPlacementTolerationsOutputReference {
    return new MksClusterSpecSystemComponentsPlacementTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MksClusterSpecSystemComponentsPlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#daemon_set_override MksCluster#daemon_set_override}
  */
  readonly daemonSetOverride?: MksClusterSpecSystemComponentsPlacementDaemonSetOverride;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#node_selector MksCluster#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#tolerations MksCluster#tolerations}
  */
  readonly tolerations?: MksClusterSpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable;
}

export function mksClusterSpecSystemComponentsPlacementToTerraform(struct?: MksClusterSpecSystemComponentsPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daemon_set_override: mksClusterSpecSystemComponentsPlacementDaemonSetOverrideToTerraform(struct!.daemonSetOverride),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    tolerations: cdktf.listMapper(mksClusterSpecSystemComponentsPlacementTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function mksClusterSpecSystemComponentsPlacementToHclTerraform(struct?: MksClusterSpecSystemComponentsPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daemon_set_override: {
      value: mksClusterSpecSystemComponentsPlacementDaemonSetOverrideToHclTerraform(struct!.daemonSetOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecSystemComponentsPlacementDaemonSetOverride",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tolerations: {
      value: cdktf.listMapperHcl(mksClusterSpecSystemComponentsPlacementTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "set",
      storageClassType: "MksClusterSpecSystemComponentsPlacementTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterSpecSystemComponentsPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpecSystemComponentsPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daemonSetOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonSetOverride = this._daemonSetOverride?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpecSystemComponentsPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daemonSetOverride.internalValue = undefined;
      this._nodeSelector = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daemonSetOverride.internalValue = value.daemonSetOverride;
      this._nodeSelector = value.nodeSelector;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // daemon_set_override - computed: false, optional: true, required: false
  private _daemonSetOverride = new MksClusterSpecSystemComponentsPlacementDaemonSetOverrideOutputReference(this, "daemon_set_override");
  public get daemonSetOverride() {
    return this._daemonSetOverride;
  }
  public putDaemonSetOverride(value: MksClusterSpecSystemComponentsPlacementDaemonSetOverride) {
    this._daemonSetOverride.internalValue = value;
  }
  public resetDaemonSetOverride() {
    this._daemonSetOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonSetOverrideInput() {
    return this._daemonSetOverride.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new MksClusterSpecSystemComponentsPlacementTolerationsList(this, "tolerations", true);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: MksClusterSpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface MksClusterSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#blueprint MksCluster#blueprint}
  */
  readonly blueprint: MksClusterSpecBlueprint;
  /**
  * The credentials to be used to ssh into the  Clusster Nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#cloud_credentials MksCluster#cloud_credentials}
  */
  readonly cloudCredentials?: string;
  /**
  * MKS V3 cluster specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#config MksCluster#config}
  */
  readonly config: MksClusterSpecConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#proxy MksCluster#proxy}
  */
  readonly proxy?: MksClusterSpecProxy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#sharing MksCluster#sharing}
  */
  readonly sharing?: MksClusterSpecSharing;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#system_components_placement MksCluster#system_components_placement}
  */
  readonly systemComponentsPlacement?: MksClusterSpecSystemComponentsPlacement;
  /**
  * The type of the cluster this spec corresponds to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#type MksCluster#type}
  */
  readonly type?: string;
}

export function mksClusterSpecToTerraform(struct?: MksClusterSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint: mksClusterSpecBlueprintToTerraform(struct!.blueprint),
    cloud_credentials: cdktf.stringToTerraform(struct!.cloudCredentials),
    config: mksClusterSpecConfigToTerraform(struct!.config),
    proxy: mksClusterSpecProxyToTerraform(struct!.proxy),
    sharing: mksClusterSpecSharingToTerraform(struct!.sharing),
    system_components_placement: mksClusterSpecSystemComponentsPlacementToTerraform(struct!.systemComponentsPlacement),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mksClusterSpecToHclTerraform(struct?: MksClusterSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint: {
      value: mksClusterSpecBlueprintToHclTerraform(struct!.blueprint),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecBlueprint",
    },
    cloud_credentials: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: mksClusterSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecConfig",
    },
    proxy: {
      value: mksClusterSpecProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecProxy",
    },
    sharing: {
      value: mksClusterSpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecSharing",
    },
    system_components_placement: {
      value: mksClusterSpecSystemComponentsPlacementToHclTerraform(struct!.systemComponentsPlacement),
      isBlock: true,
      type: "struct",
      storageClassType: "MksClusterSpecSystemComponentsPlacement",
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

export class MksClusterSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprint = this._blueprint?.internalValue;
    }
    if (this._cloudCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentials = this._cloudCredentials;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._sharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing?.internalValue;
    }
    if (this._systemComponentsPlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemComponentsPlacement = this._systemComponentsPlacement?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprint.internalValue = undefined;
      this._cloudCredentials = undefined;
      this._config.internalValue = undefined;
      this._proxy.internalValue = undefined;
      this._sharing.internalValue = undefined;
      this._systemComponentsPlacement.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprint.internalValue = value.blueprint;
      this._cloudCredentials = value.cloudCredentials;
      this._config.internalValue = value.config;
      this._proxy.internalValue = value.proxy;
      this._sharing.internalValue = value.sharing;
      this._systemComponentsPlacement.internalValue = value.systemComponentsPlacement;
      this._type = value.type;
    }
  }

  // blueprint - computed: false, optional: false, required: true
  private _blueprint = new MksClusterSpecBlueprintOutputReference(this, "blueprint");
  public get blueprint() {
    return this._blueprint;
  }
  public putBlueprint(value: MksClusterSpecBlueprint) {
    this._blueprint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint.internalValue;
  }

  // cloud_credentials - computed: false, optional: true, required: false
  private _cloudCredentials?: string; 
  public get cloudCredentials() {
    return this.getStringAttribute('cloud_credentials');
  }
  public set cloudCredentials(value: string) {
    this._cloudCredentials = value;
  }
  public resetCloudCredentials() {
    this._cloudCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialsInput() {
    return this._cloudCredentials;
  }

  // config - computed: false, optional: false, required: true
  private _config = new MksClusterSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: MksClusterSpecConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new MksClusterSpecProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: MksClusterSpecProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing = new MksClusterSpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: MksClusterSpecSharing) {
    this._sharing.internalValue = value;
  }
  public resetSharing() {
    this._sharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing.internalValue;
  }

  // system_components_placement - computed: false, optional: true, required: false
  private _systemComponentsPlacement = new MksClusterSpecSystemComponentsPlacementOutputReference(this, "system_components_placement");
  public get systemComponentsPlacement() {
    return this._systemComponentsPlacement;
  }
  public putSystemComponentsPlacement(value: MksClusterSpecSystemComponentsPlacement) {
    this._systemComponentsPlacement.internalValue = value;
  }
  public resetSystemComponentsPlacement() {
    this._systemComponentsPlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemComponentsPlacementInput() {
    return this._systemComponentsPlacement.internalValue;
  }

  // type - computed: true, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster rafay_mks_cluster}
*/
export class MksCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_mks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MksCluster to import
  * @param importFromId The id of the existing MksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_mks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/mks_cluster rafay_mks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'rafay_mks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.55',
        providerVersionConstraint: '1.1.55'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiVersion = config.apiVersion;
    this._kind = config.kind;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: true, required: false
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

  // kind - computed: true, optional: true, required: false
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

  // metadata - computed: false, optional: false, required: true
  private _metadata = new MksClusterMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: MksClusterMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new MksClusterSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: MksClusterSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_version: cdktf.stringToTerraform(this._apiVersion),
      kind: cdktf.stringToTerraform(this._kind),
      metadata: mksClusterMetadataToTerraform(this._metadata.internalValue),
      spec: mksClusterSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: mksClusterMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MksClusterMetadata",
      },
      spec: {
        value: mksClusterSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MksClusterSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
