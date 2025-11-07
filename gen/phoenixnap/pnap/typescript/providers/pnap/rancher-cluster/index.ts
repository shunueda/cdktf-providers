// https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RancherClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#description RancherCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#id RancherCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#location RancherCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#name RancherCluster#name}
  */
  readonly name?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#configuration RancherCluster#configuration}
  */
  readonly configuration?: RancherClusterConfiguration;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#node_pools RancherCluster#node_pools}
  */
  readonly nodePools?: RancherClusterNodePools;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#timeouts RancherCluster#timeouts}
  */
  readonly timeouts?: RancherClusterTimeouts;
  /**
  * workload_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#workload_configuration RancherCluster#workload_configuration}
  */
  readonly workloadConfiguration?: RancherClusterWorkloadConfiguration;
}
export interface RancherClusterMetadata {
}

export function rancherClusterMetadataToTerraform(struct?: RancherClusterMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rancherClusterMetadataToHclTerraform(struct?: RancherClusterMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RancherClusterMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RancherClusterMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RancherClusterMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class RancherClusterMetadataList extends cdktf.ComplexList {

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
  public get(index: number): RancherClusterMetadataOutputReference {
    return new RancherClusterMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RancherClusterConfigurationCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#ca_certificate RancherCluster#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#certificate RancherCluster#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#certificate_key RancherCluster#certificate_key}
  */
  readonly certificateKey?: string;
}

export function rancherClusterConfigurationCertificatesToTerraform(struct?: RancherClusterConfigurationCertificatesOutputReference | RancherClusterConfigurationCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_key: cdktf.stringToTerraform(struct!.certificateKey),
  }
}


export function rancherClusterConfigurationCertificatesToHclTerraform(struct?: RancherClusterConfigurationCertificatesOutputReference | RancherClusterConfigurationCertificates): any {
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
    certificate_key: {
      value: cdktf.stringToHclTerraform(struct!.certificateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RancherClusterConfigurationCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RancherClusterConfigurationCertificates | undefined {
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
    if (this._certificateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateKey = this._certificateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RancherClusterConfigurationCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._certificate = undefined;
      this._certificateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._certificate = value.certificate;
      this._certificateKey = value.certificateKey;
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

  // certificate_key - computed: false, optional: true, required: false
  private _certificateKey?: string; 
  public get certificateKey() {
    return this.getStringAttribute('certificate_key');
  }
  public set certificateKey(value: string) {
    this._certificateKey = value;
  }
  public resetCertificateKey() {
    this._certificateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateKeyInput() {
    return this._certificateKey;
  }
}
export interface RancherClusterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#cluster_domain RancherCluster#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#etcd_snapshot_retention RancherCluster#etcd_snapshot_retention}
  */
  readonly etcdSnapshotRetention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#etcd_snapshot_schedule_cron RancherCluster#etcd_snapshot_schedule_cron}
  */
  readonly etcdSnapshotScheduleCron?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#node_taint RancherCluster#node_taint}
  */
  readonly nodeTaint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#tls_san RancherCluster#tls_san}
  */
  readonly tlsSan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#token RancherCluster#token}
  */
  readonly token?: string;
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#certificates RancherCluster#certificates}
  */
  readonly certificates?: RancherClusterConfigurationCertificates;
}

export function rancherClusterConfigurationToTerraform(struct?: RancherClusterConfigurationOutputReference | RancherClusterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_domain: cdktf.stringToTerraform(struct!.clusterDomain),
    etcd_snapshot_retention: cdktf.numberToTerraform(struct!.etcdSnapshotRetention),
    etcd_snapshot_schedule_cron: cdktf.stringToTerraform(struct!.etcdSnapshotScheduleCron),
    node_taint: cdktf.stringToTerraform(struct!.nodeTaint),
    tls_san: cdktf.stringToTerraform(struct!.tlsSan),
    token: cdktf.stringToTerraform(struct!.token),
    certificates: rancherClusterConfigurationCertificatesToTerraform(struct!.certificates),
  }
}


export function rancherClusterConfigurationToHclTerraform(struct?: RancherClusterConfigurationOutputReference | RancherClusterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_domain: {
      value: cdktf.stringToHclTerraform(struct!.clusterDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_snapshot_retention: {
      value: cdktf.numberToHclTerraform(struct!.etcdSnapshotRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    etcd_snapshot_schedule_cron: {
      value: cdktf.stringToHclTerraform(struct!.etcdSnapshotScheduleCron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taint: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_san: {
      value: cdktf.stringToHclTerraform(struct!.tlsSan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificates: {
      value: rancherClusterConfigurationCertificatesToHclTerraform(struct!.certificates),
      isBlock: true,
      type: "list",
      storageClassType: "RancherClusterConfigurationCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RancherClusterConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RancherClusterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDomain = this._clusterDomain;
    }
    if (this._etcdSnapshotRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdSnapshotRetention = this._etcdSnapshotRetention;
    }
    if (this._etcdSnapshotScheduleCron !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdSnapshotScheduleCron = this._etcdSnapshotScheduleCron;
    }
    if (this._nodeTaint !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaint = this._nodeTaint;
    }
    if (this._tlsSan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSan = this._tlsSan;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RancherClusterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterDomain = undefined;
      this._etcdSnapshotRetention = undefined;
      this._etcdSnapshotScheduleCron = undefined;
      this._nodeTaint = undefined;
      this._tlsSan = undefined;
      this._token = undefined;
      this._certificates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterDomain = value.clusterDomain;
      this._etcdSnapshotRetention = value.etcdSnapshotRetention;
      this._etcdSnapshotScheduleCron = value.etcdSnapshotScheduleCron;
      this._nodeTaint = value.nodeTaint;
      this._tlsSan = value.tlsSan;
      this._token = value.token;
      this._certificates.internalValue = value.certificates;
    }
  }

  // cluster_domain - computed: false, optional: true, required: false
  private _clusterDomain?: string; 
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }
  public set clusterDomain(value: string) {
    this._clusterDomain = value;
  }
  public resetClusterDomain() {
    this._clusterDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDomainInput() {
    return this._clusterDomain;
  }

  // etcd_snapshot_retention - computed: false, optional: true, required: false
  private _etcdSnapshotRetention?: number; 
  public get etcdSnapshotRetention() {
    return this.getNumberAttribute('etcd_snapshot_retention');
  }
  public set etcdSnapshotRetention(value: number) {
    this._etcdSnapshotRetention = value;
  }
  public resetEtcdSnapshotRetention() {
    this._etcdSnapshotRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdSnapshotRetentionInput() {
    return this._etcdSnapshotRetention;
  }

  // etcd_snapshot_schedule_cron - computed: false, optional: true, required: false
  private _etcdSnapshotScheduleCron?: string; 
  public get etcdSnapshotScheduleCron() {
    return this.getStringAttribute('etcd_snapshot_schedule_cron');
  }
  public set etcdSnapshotScheduleCron(value: string) {
    this._etcdSnapshotScheduleCron = value;
  }
  public resetEtcdSnapshotScheduleCron() {
    this._etcdSnapshotScheduleCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdSnapshotScheduleCronInput() {
    return this._etcdSnapshotScheduleCron;
  }

  // node_taint - computed: false, optional: true, required: false
  private _nodeTaint?: string; 
  public get nodeTaint() {
    return this.getStringAttribute('node_taint');
  }
  public set nodeTaint(value: string) {
    this._nodeTaint = value;
  }
  public resetNodeTaint() {
    this._nodeTaint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintInput() {
    return this._nodeTaint;
  }

  // tls_san - computed: false, optional: true, required: false
  private _tlsSan?: string; 
  public get tlsSan() {
    return this.getStringAttribute('tls_san');
  }
  public set tlsSan(value: string) {
    this._tlsSan = value;
  }
  public resetTlsSan() {
    this._tlsSan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSanInput() {
    return this._tlsSan;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates = new RancherClusterConfigurationCertificatesOutputReference(this, "certificates");
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: RancherClusterConfigurationCertificates) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }
}
export interface RancherClusterNodePoolsNodes {
}

export function rancherClusterNodePoolsNodesToTerraform(struct?: RancherClusterNodePoolsNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rancherClusterNodePoolsNodesToHclTerraform(struct?: RancherClusterNodePoolsNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RancherClusterNodePoolsNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RancherClusterNodePoolsNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RancherClusterNodePoolsNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
}

export class RancherClusterNodePoolsNodesList extends cdktf.ComplexList {

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
  public get(index: number): RancherClusterNodePoolsNodesOutputReference {
    return new RancherClusterNodePoolsNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RancherClusterNodePoolsSshConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#install_default_keys RancherCluster#install_default_keys}
  */
  readonly installDefaultKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#key_ids RancherCluster#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#keys RancherCluster#keys}
  */
  readonly keys?: string[];
}

export function rancherClusterNodePoolsSshConfigToTerraform(struct?: RancherClusterNodePoolsSshConfigOutputReference | RancherClusterNodePoolsSshConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    install_default_keys: cdktf.booleanToTerraform(struct!.installDefaultKeys),
    key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyIds),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function rancherClusterNodePoolsSshConfigToHclTerraform(struct?: RancherClusterNodePoolsSshConfigOutputReference | RancherClusterNodePoolsSshConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    install_default_keys: {
      value: cdktf.booleanToHclTerraform(struct!.installDefaultKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RancherClusterNodePoolsSshConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RancherClusterNodePoolsSshConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._installDefaultKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.installDefaultKeys = this._installDefaultKeys;
    }
    if (this._keyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIds = this._keyIds;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RancherClusterNodePoolsSshConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._installDefaultKeys = undefined;
      this._keyIds = undefined;
      this._keys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._installDefaultKeys = value.installDefaultKeys;
      this._keyIds = value.keyIds;
      this._keys = value.keys;
    }
  }

  // install_default_keys - computed: false, optional: true, required: false
  private _installDefaultKeys?: boolean | cdktf.IResolvable; 
  public get installDefaultKeys() {
    return this.getBooleanAttribute('install_default_keys');
  }
  public set installDefaultKeys(value: boolean | cdktf.IResolvable) {
    this._installDefaultKeys = value;
  }
  public resetInstallDefaultKeys() {
    this._installDefaultKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installDefaultKeysInput() {
    return this._installDefaultKeys;
  }

  // key_ids - computed: true, optional: true, required: false
  private _keyIds?: string[]; 
  public get keyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('key_ids'));
  }
  public set keyIds(value: string[]) {
    this._keyIds = value;
  }
  public resetKeyIds() {
    this._keyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdsInput() {
    return this._keyIds;
  }

  // keys - computed: true, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return cdktf.Fn.tolist(this.getListAttribute('keys'));
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}
export interface RancherClusterNodePools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#name RancherCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#node_count RancherCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#server_type RancherCluster#server_type}
  */
  readonly serverType?: string;
  /**
  * ssh_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#ssh_config RancherCluster#ssh_config}
  */
  readonly sshConfig?: RancherClusterNodePoolsSshConfig;
}

export function rancherClusterNodePoolsToTerraform(struct?: RancherClusterNodePoolsOutputReference | RancherClusterNodePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    ssh_config: rancherClusterNodePoolsSshConfigToTerraform(struct!.sshConfig),
  }
}


export function rancherClusterNodePoolsToHclTerraform(struct?: RancherClusterNodePoolsOutputReference | RancherClusterNodePools): any {
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
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_config: {
      value: rancherClusterNodePoolsSshConfigToHclTerraform(struct!.sshConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RancherClusterNodePoolsSshConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RancherClusterNodePoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RancherClusterNodePools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._sshConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshConfig = this._sshConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RancherClusterNodePools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._nodeCount = undefined;
      this._serverType = undefined;
      this._sshConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._nodeCount = value.nodeCount;
      this._serverType = value.serverType;
      this._sshConfig.internalValue = value.sshConfig;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new RancherClusterNodePoolsNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // ssh_config - computed: false, optional: true, required: false
  private _sshConfig = new RancherClusterNodePoolsSshConfigOutputReference(this, "ssh_config");
  public get sshConfig() {
    return this._sshConfig;
  }
  public putSshConfig(value: RancherClusterNodePoolsSshConfig) {
    this._sshConfig.internalValue = value;
  }
  public resetSshConfig() {
    this._sshConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshConfigInput() {
    return this._sshConfig.internalValue;
  }
}
export interface RancherClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#create RancherCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#delete RancherCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#update RancherCluster#update}
  */
  readonly update?: string;
}

export function rancherClusterTimeoutsToTerraform(struct?: RancherClusterTimeouts | cdktf.IResolvable): any {
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


export function rancherClusterTimeoutsToHclTerraform(struct?: RancherClusterTimeouts | cdktf.IResolvable): any {
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

export class RancherClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RancherClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RancherClusterTimeouts | cdktf.IResolvable | undefined) {
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

  // create - computed: false, optional: true, required: false
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

  // delete - computed: false, optional: true, required: false
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

  // update - computed: false, optional: true, required: false
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
export interface RancherClusterWorkloadConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#location RancherCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#name RancherCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#server_count RancherCluster#server_count}
  */
  readonly serverCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#server_type RancherCluster#server_type}
  */
  readonly serverType: string;
}

export function rancherClusterWorkloadConfigurationToTerraform(struct?: RancherClusterWorkloadConfigurationOutputReference | RancherClusterWorkloadConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    server_count: cdktf.numberToTerraform(struct!.serverCount),
    server_type: cdktf.stringToTerraform(struct!.serverType),
  }
}


export function rancherClusterWorkloadConfigurationToHclTerraform(struct?: RancherClusterWorkloadConfigurationOutputReference | RancherClusterWorkloadConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    server_count: {
      value: cdktf.numberToHclTerraform(struct!.serverCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RancherClusterWorkloadConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RancherClusterWorkloadConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serverCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCount = this._serverCount;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RancherClusterWorkloadConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._name = undefined;
      this._serverCount = undefined;
      this._serverType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._name = value.name;
      this._serverCount = value.serverCount;
      this._serverType = value.serverType;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // server_count - computed: false, optional: true, required: false
  private _serverCount?: number; 
  public get serverCount() {
    return this.getNumberAttribute('server_count');
  }
  public set serverCount(value: number) {
    this._serverCount = value;
  }
  public resetServerCount() {
    this._serverCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCountInput() {
    return this._serverCount;
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster pnap_rancher_cluster}
*/
export class RancherCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pnap_rancher_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RancherCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RancherCluster to import
  * @param importFromId The id of the existing RancherCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RancherCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pnap_rancher_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/rancher_cluster pnap_rancher_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RancherClusterConfig
  */
  public constructor(scope: Construct, id: string, config: RancherClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'pnap_rancher_cluster',
      terraformGeneratorMetadata: {
        providerName: 'pnap',
        providerVersion: '0.30.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._configuration.internalValue = config.configuration;
    this._nodePools.internalValue = config.nodePools;
    this._timeouts.internalValue = config.timeouts;
    this._workloadConfiguration.internalValue = config.workloadConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
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

  // initial_cluster_version - computed: true, optional: false, required: false
  public get initialClusterVersion() {
    return this.getStringAttribute('initial_cluster_version');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new RancherClusterMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: true, required: false
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

  // status_description - computed: true, optional: false, required: false
  public get statusDescription() {
    return this.getStringAttribute('status_description');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new RancherClusterConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: RancherClusterConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new RancherClusterNodePoolsOutputReference(this, "node_pools");
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: RancherClusterNodePools) {
    this._nodePools.internalValue = value;
  }
  public resetNodePools() {
    this._nodePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RancherClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RancherClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workload_configuration - computed: false, optional: true, required: false
  private _workloadConfiguration = new RancherClusterWorkloadConfigurationOutputReference(this, "workload_configuration");
  public get workloadConfiguration() {
    return this._workloadConfiguration;
  }
  public putWorkloadConfiguration(value: RancherClusterWorkloadConfiguration) {
    this._workloadConfiguration.internalValue = value;
  }
  public resetWorkloadConfiguration() {
    this._workloadConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadConfigurationInput() {
    return this._workloadConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      configuration: rancherClusterConfigurationToTerraform(this._configuration.internalValue),
      node_pools: rancherClusterNodePoolsToTerraform(this._nodePools.internalValue),
      timeouts: rancherClusterTimeoutsToTerraform(this._timeouts.internalValue),
      workload_configuration: rancherClusterWorkloadConfigurationToTerraform(this._workloadConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: rancherClusterConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RancherClusterConfigurationList",
      },
      node_pools: {
        value: rancherClusterNodePoolsToHclTerraform(this._nodePools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RancherClusterNodePoolsList",
      },
      timeouts: {
        value: rancherClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RancherClusterTimeouts",
      },
      workload_configuration: {
        value: rancherClusterWorkloadConfigurationToHclTerraform(this._workloadConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RancherClusterWorkloadConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
