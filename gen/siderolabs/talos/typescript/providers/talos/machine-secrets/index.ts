// https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/resources/machine_secrets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineSecretsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The version of talos features to use in generated machine configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/resources/machine_secrets#talos_version MachineSecrets#talos_version}
  */
  readonly talosVersion?: string;
}
export interface MachineSecretsClientConfiguration {
}

export function machineSecretsClientConfigurationToTerraform(struct?: MachineSecretsClientConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineSecretsClientConfigurationToHclTerraform(struct?: MachineSecretsClientConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineSecretsClientConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineSecretsClientConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineSecretsClientConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
}
export interface MachineSecretsMachineSecretsCertsEtcd {
}

export function machineSecretsMachineSecretsCertsEtcdToTerraform(struct?: MachineSecretsMachineSecretsCertsEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineSecretsMachineSecretsCertsEtcdToHclTerraform(struct?: MachineSecretsMachineSecretsCertsEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineSecretsMachineSecretsCertsEtcdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineSecretsMachineSecretsCertsEtcd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineSecretsMachineSecretsCertsEtcd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface MachineSecretsMachineSecretsCertsK8S {
}

export function machineSecretsMachineSecretsCertsK8SToTerraform(struct?: MachineSecretsMachineSecretsCertsK8S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineSecretsMachineSecretsCertsK8SToHclTerraform(struct?: MachineSecretsMachineSecretsCertsK8S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineSecretsMachineSecretsCertsK8SOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineSecretsMachineSecretsCertsK8S | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineSecretsMachineSecretsCertsK8S | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface MachineSecretsMachineSecretsCertsK8SAggregator {
}

export function machineSecretsMachineSecretsCertsK8SAggregatorToTerraform(struct?: MachineSecretsMachineSecretsCertsK8SAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineSecretsMachineSecretsCertsK8SAggregatorToHclTerraform(struct?: MachineSecretsMachineSecretsCertsK8SAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineSecretsMachineSecretsCertsK8SAggregatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineSecretsMachineSecretsCertsK8SAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineSecretsMachineSecretsCertsK8SAggregator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface MachineSecretsMachineSecretsCertsK8SServiceaccount {
}

export function machineSecretsMachineSecretsCertsK8SServiceaccountToTerraform(struct?: MachineSecretsMachineSecretsCertsK8SServiceaccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineSecretsMachineSecretsCertsK8SServiceaccountToHclTerraform(struct?: MachineSecretsMachineSecretsCertsK8SServiceaccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineSecretsMachineSecretsCertsK8SServiceaccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineSecretsMachineSecretsCertsK8SServiceaccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineSecretsMachineSecretsCertsK8SServiceaccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface MachineSecretsMachineSecretsCertsOs {
}

export function machineSecretsMachineSecretsCertsOsToTerraform(struct?: MachineSecretsMachineSecretsCertsOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineSecretsMachineSecretsCertsOsToHclTerraform(struct?: MachineSecretsMachineSecretsCertsOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineSecretsMachineSecretsCertsOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineSecretsMachineSecretsCertsOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineSecretsMachineSecretsCertsOs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface MachineSecretsMachineSecretsCerts {
}

export function machineSecretsMachineSecretsCertsToTerraform(struct?: MachineSecretsMachineSecretsCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineSecretsMachineSecretsCertsToHclTerraform(struct?: MachineSecretsMachineSecretsCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineSecretsMachineSecretsCertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineSecretsMachineSecretsCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineSecretsMachineSecretsCerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // etcd - computed: true, optional: false, required: false
  private _etcd = new MachineSecretsMachineSecretsCertsEtcdOutputReference(this, "etcd");
  public get etcd() {
    return this._etcd;
  }

  // k8s - computed: true, optional: false, required: false
  private _k8S = new MachineSecretsMachineSecretsCertsK8SOutputReference(this, "k8s");
  public get k8S() {
    return this._k8S;
  }

  // k8s_aggregator - computed: true, optional: false, required: false
  private _k8SAggregator = new MachineSecretsMachineSecretsCertsK8SAggregatorOutputReference(this, "k8s_aggregator");
  public get k8SAggregator() {
    return this._k8SAggregator;
  }

  // k8s_serviceaccount - computed: true, optional: false, required: false
  private _k8SServiceaccount = new MachineSecretsMachineSecretsCertsK8SServiceaccountOutputReference(this, "k8s_serviceaccount");
  public get k8SServiceaccount() {
    return this._k8SServiceaccount;
  }

  // os - computed: true, optional: false, required: false
  private _os = new MachineSecretsMachineSecretsCertsOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
}
export interface MachineSecretsMachineSecretsCluster {
}

export function machineSecretsMachineSecretsClusterToTerraform(struct?: MachineSecretsMachineSecretsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineSecretsMachineSecretsClusterToHclTerraform(struct?: MachineSecretsMachineSecretsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineSecretsMachineSecretsClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineSecretsMachineSecretsCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineSecretsMachineSecretsCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface MachineSecretsMachineSecretsSecrets {
}

export function machineSecretsMachineSecretsSecretsToTerraform(struct?: MachineSecretsMachineSecretsSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineSecretsMachineSecretsSecretsToHclTerraform(struct?: MachineSecretsMachineSecretsSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineSecretsMachineSecretsSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineSecretsMachineSecretsSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineSecretsMachineSecretsSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aescbc_encryption_secret - computed: true, optional: false, required: false
  public get aescbcEncryptionSecret() {
    return this.getStringAttribute('aescbc_encryption_secret');
  }

  // bootstrap_token - computed: true, optional: false, required: false
  public get bootstrapToken() {
    return this.getStringAttribute('bootstrap_token');
  }

  // secretbox_encryption_secret - computed: true, optional: false, required: false
  public get secretboxEncryptionSecret() {
    return this.getStringAttribute('secretbox_encryption_secret');
  }
}
export interface MachineSecretsMachineSecretsTrustdinfo {
}

export function machineSecretsMachineSecretsTrustdinfoToTerraform(struct?: MachineSecretsMachineSecretsTrustdinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineSecretsMachineSecretsTrustdinfoToHclTerraform(struct?: MachineSecretsMachineSecretsTrustdinfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineSecretsMachineSecretsTrustdinfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineSecretsMachineSecretsTrustdinfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineSecretsMachineSecretsTrustdinfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}
export interface MachineSecretsMachineSecrets {
}

export function machineSecretsMachineSecretsToTerraform(struct?: MachineSecretsMachineSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineSecretsMachineSecretsToHclTerraform(struct?: MachineSecretsMachineSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineSecretsMachineSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineSecretsMachineSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineSecretsMachineSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certs - computed: true, optional: false, required: false
  private _certs = new MachineSecretsMachineSecretsCertsOutputReference(this, "certs");
  public get certs() {
    return this._certs;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new MachineSecretsMachineSecretsClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new MachineSecretsMachineSecretsSecretsOutputReference(this, "secrets");
  public get secrets() {
    return this._secrets;
  }

  // trustdinfo - computed: true, optional: false, required: false
  private _trustdinfo = new MachineSecretsMachineSecretsTrustdinfoOutputReference(this, "trustdinfo");
  public get trustdinfo() {
    return this._trustdinfo;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/resources/machine_secrets talos_machine_secrets}
*/
export class MachineSecrets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "talos_machine_secrets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineSecrets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineSecrets to import
  * @param importFromId The id of the existing MachineSecrets that should be imported. Refer to the {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/resources/machine_secrets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineSecrets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "talos_machine_secrets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/resources/machine_secrets talos_machine_secrets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineSecretsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MachineSecretsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'talos_machine_secrets',
      terraformGeneratorMetadata: {
        providerName: 'talos',
        providerVersion: '0.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._talosVersion = config.talosVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_configuration - computed: true, optional: false, required: false
  private _clientConfiguration = new MachineSecretsClientConfigurationOutputReference(this, "client_configuration");
  public get clientConfiguration() {
    return this._clientConfiguration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machine_secrets - computed: true, optional: false, required: false
  private _machineSecrets = new MachineSecretsMachineSecretsOutputReference(this, "machine_secrets");
  public get machineSecrets() {
    return this._machineSecrets;
  }

  // talos_version - computed: true, optional: true, required: false
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
      talos_version: cdktf.stringToTerraform(this._talosVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
