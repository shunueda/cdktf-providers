// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapSvmPeersDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#cx_profile_name DataNetappOntapSvmPeersDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#filter DataNetappOntapSvmPeersDataSource#filter}
  */
  readonly filter?: DataNetappOntapSvmPeersDataSourceFilter;
}
export interface DataNetappOntapSvmPeersDataSourceFilterPeerCluster {
  /**
  * name of the peer Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#name DataNetappOntapSvmPeersDataSource#name}
  */
  readonly name?: string;
}

export function dataNetappOntapSvmPeersDataSourceFilterPeerClusterToTerraform(struct?: DataNetappOntapSvmPeersDataSourceFilterPeerCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapSvmPeersDataSourceFilterPeerClusterToHclTerraform(struct?: DataNetappOntapSvmPeersDataSourceFilterPeerCluster | cdktf.IResolvable): any {
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

export class DataNetappOntapSvmPeersDataSourceFilterPeerClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSvmPeersDataSourceFilterPeerCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapSvmPeersDataSourceFilterPeerCluster | cdktf.IResolvable | undefined) {
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
export interface DataNetappOntapSvmPeersDataSourceFilterPeerSvm {
  /**
  * name of the peer SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#name DataNetappOntapSvmPeersDataSource#name}
  */
  readonly name?: string;
}

export function dataNetappOntapSvmPeersDataSourceFilterPeerSvmToTerraform(struct?: DataNetappOntapSvmPeersDataSourceFilterPeerSvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapSvmPeersDataSourceFilterPeerSvmToHclTerraform(struct?: DataNetappOntapSvmPeersDataSourceFilterPeerSvm | cdktf.IResolvable): any {
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

export class DataNetappOntapSvmPeersDataSourceFilterPeerSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSvmPeersDataSourceFilterPeerSvm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapSvmPeersDataSourceFilterPeerSvm | cdktf.IResolvable | undefined) {
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
export interface DataNetappOntapSvmPeersDataSourceFilterPeer {
  /**
  * peer Cluster details for SVMPeer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#cluster DataNetappOntapSvmPeersDataSource#cluster}
  */
  readonly cluster?: DataNetappOntapSvmPeersDataSourceFilterPeerCluster;
  /**
  * peer SVM details for SVMPeer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#svm DataNetappOntapSvmPeersDataSource#svm}
  */
  readonly svm?: DataNetappOntapSvmPeersDataSourceFilterPeerSvm;
}

export function dataNetappOntapSvmPeersDataSourceFilterPeerToTerraform(struct?: DataNetappOntapSvmPeersDataSourceFilterPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: dataNetappOntapSvmPeersDataSourceFilterPeerClusterToTerraform(struct!.cluster),
    svm: dataNetappOntapSvmPeersDataSourceFilterPeerSvmToTerraform(struct!.svm),
  }
}


export function dataNetappOntapSvmPeersDataSourceFilterPeerToHclTerraform(struct?: DataNetappOntapSvmPeersDataSourceFilterPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: dataNetappOntapSvmPeersDataSourceFilterPeerClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSvmPeersDataSourceFilterPeerCluster",
    },
    svm: {
      value: dataNetappOntapSvmPeersDataSourceFilterPeerSvmToHclTerraform(struct!.svm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSvmPeersDataSourceFilterPeerSvm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapSvmPeersDataSourceFilterPeerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSvmPeersDataSourceFilterPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._svm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapSvmPeersDataSourceFilterPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster.internalValue = undefined;
      this._svm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster.internalValue = value.cluster;
      this._svm.internalValue = value.svm;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new DataNetappOntapSvmPeersDataSourceFilterPeerClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: DataNetappOntapSvmPeersDataSourceFilterPeerCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // svm - computed: false, optional: true, required: false
  private _svm = new DataNetappOntapSvmPeersDataSourceFilterPeerSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: DataNetappOntapSvmPeersDataSourceFilterPeerSvm) {
    this._svm.internalValue = value;
  }
  public resetSvm() {
    this._svm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }
}
export interface DataNetappOntapSvmPeersDataSourceFilterSvm {
  /**
  * name of the SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#name DataNetappOntapSvmPeersDataSource#name}
  */
  readonly name?: string;
}

export function dataNetappOntapSvmPeersDataSourceFilterSvmToTerraform(struct?: DataNetappOntapSvmPeersDataSourceFilterSvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapSvmPeersDataSourceFilterSvmToHclTerraform(struct?: DataNetappOntapSvmPeersDataSourceFilterSvm | cdktf.IResolvable): any {
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

export class DataNetappOntapSvmPeersDataSourceFilterSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSvmPeersDataSourceFilterSvm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapSvmPeersDataSourceFilterSvm | cdktf.IResolvable | undefined) {
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
export interface DataNetappOntapSvmPeersDataSourceFilter {
  /**
  * Peer details for SVMPeer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#peer DataNetappOntapSvmPeersDataSource#peer}
  */
  readonly peer?: DataNetappOntapSvmPeersDataSourceFilterPeer;
  /**
  * SVM details for SVMPeer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#svm DataNetappOntapSvmPeersDataSource#svm}
  */
  readonly svm?: DataNetappOntapSvmPeersDataSourceFilterSvm;
}

export function dataNetappOntapSvmPeersDataSourceFilterToTerraform(struct?: DataNetappOntapSvmPeersDataSourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer: dataNetappOntapSvmPeersDataSourceFilterPeerToTerraform(struct!.peer),
    svm: dataNetappOntapSvmPeersDataSourceFilterSvmToTerraform(struct!.svm),
  }
}


export function dataNetappOntapSvmPeersDataSourceFilterToHclTerraform(struct?: DataNetappOntapSvmPeersDataSourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer: {
      value: dataNetappOntapSvmPeersDataSourceFilterPeerToHclTerraform(struct!.peer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSvmPeersDataSourceFilterPeer",
    },
    svm: {
      value: dataNetappOntapSvmPeersDataSourceFilterSvmToHclTerraform(struct!.svm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSvmPeersDataSourceFilterSvm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapSvmPeersDataSourceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSvmPeersDataSourceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer?.internalValue;
    }
    if (this._svm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapSvmPeersDataSourceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peer.internalValue = undefined;
      this._svm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peer.internalValue = value.peer;
      this._svm.internalValue = value.svm;
    }
  }

  // peer - computed: false, optional: true, required: false
  private _peer = new DataNetappOntapSvmPeersDataSourceFilterPeerOutputReference(this, "peer");
  public get peer() {
    return this._peer;
  }
  public putPeer(value: DataNetappOntapSvmPeersDataSourceFilterPeer) {
    this._peer.internalValue = value;
  }
  public resetPeer() {
    this._peer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer.internalValue;
  }

  // svm - computed: false, optional: true, required: false
  private _svm = new DataNetappOntapSvmPeersDataSourceFilterSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: DataNetappOntapSvmPeersDataSourceFilterSvm) {
    this._svm.internalValue = value;
  }
  public resetSvm() {
    this._svm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }
}
export interface DataNetappOntapSvmPeersDataSourceSvmPeersPeerCluster {
}

export function dataNetappOntapSvmPeersDataSourceSvmPeersPeerClusterToTerraform(struct?: DataNetappOntapSvmPeersDataSourceSvmPeersPeerCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapSvmPeersDataSourceSvmPeersPeerClusterToHclTerraform(struct?: DataNetappOntapSvmPeersDataSourceSvmPeersPeerCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapSvmPeersDataSourceSvmPeersPeerClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSvmPeersDataSourceSvmPeersPeerCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapSvmPeersDataSourceSvmPeersPeerCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataNetappOntapSvmPeersDataSourceSvmPeersPeerSvm {
  /**
  * name of the peer SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#name DataNetappOntapSvmPeersDataSource#name}
  */
  readonly name: string;
}

export function dataNetappOntapSvmPeersDataSourceSvmPeersPeerSvmToTerraform(struct?: DataNetappOntapSvmPeersDataSourceSvmPeersPeerSvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapSvmPeersDataSourceSvmPeersPeerSvmToHclTerraform(struct?: DataNetappOntapSvmPeersDataSourceSvmPeersPeerSvm): any {
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

export class DataNetappOntapSvmPeersDataSourceSvmPeersPeerSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSvmPeersDataSourceSvmPeersPeerSvm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapSvmPeersDataSourceSvmPeersPeerSvm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
export interface DataNetappOntapSvmPeersDataSourceSvmPeersPeer {
  /**
  * peer SVM details for SVMPeer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#svm DataNetappOntapSvmPeersDataSource#svm}
  */
  readonly svm: DataNetappOntapSvmPeersDataSourceSvmPeersPeerSvm;
}

export function dataNetappOntapSvmPeersDataSourceSvmPeersPeerToTerraform(struct?: DataNetappOntapSvmPeersDataSourceSvmPeersPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    svm: dataNetappOntapSvmPeersDataSourceSvmPeersPeerSvmToTerraform(struct!.svm),
  }
}


export function dataNetappOntapSvmPeersDataSourceSvmPeersPeerToHclTerraform(struct?: DataNetappOntapSvmPeersDataSourceSvmPeersPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    svm: {
      value: dataNetappOntapSvmPeersDataSourceSvmPeersPeerSvmToHclTerraform(struct!.svm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSvmPeersDataSourceSvmPeersPeerSvm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapSvmPeersDataSourceSvmPeersPeerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSvmPeersDataSourceSvmPeersPeer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._svm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapSvmPeersDataSourceSvmPeersPeer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._svm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._svm.internalValue = value.svm;
    }
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataNetappOntapSvmPeersDataSourceSvmPeersPeerClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // svm - computed: true, optional: false, required: true
  private _svm = new DataNetappOntapSvmPeersDataSourceSvmPeersPeerSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: DataNetappOntapSvmPeersDataSourceSvmPeersPeerSvm) {
    this._svm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }
}
export interface DataNetappOntapSvmPeersDataSourceSvmPeersSvm {
  /**
  * name of the SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#name DataNetappOntapSvmPeersDataSource#name}
  */
  readonly name: string;
}

export function dataNetappOntapSvmPeersDataSourceSvmPeersSvmToTerraform(struct?: DataNetappOntapSvmPeersDataSourceSvmPeersSvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapSvmPeersDataSourceSvmPeersSvmToHclTerraform(struct?: DataNetappOntapSvmPeersDataSourceSvmPeersSvm): any {
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

export class DataNetappOntapSvmPeersDataSourceSvmPeersSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapSvmPeersDataSourceSvmPeersSvm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapSvmPeersDataSourceSvmPeersSvm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
export interface DataNetappOntapSvmPeersDataSourceSvmPeers {
  /**
  * Peer details for SVMPeer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#peer DataNetappOntapSvmPeersDataSource#peer}
  */
  readonly peer: DataNetappOntapSvmPeersDataSourceSvmPeersPeer;
  /**
  * SVM details for SVMPeer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#svm DataNetappOntapSvmPeersDataSource#svm}
  */
  readonly svm: DataNetappOntapSvmPeersDataSourceSvmPeersSvm;
}

export function dataNetappOntapSvmPeersDataSourceSvmPeersToTerraform(struct?: DataNetappOntapSvmPeersDataSourceSvmPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer: dataNetappOntapSvmPeersDataSourceSvmPeersPeerToTerraform(struct!.peer),
    svm: dataNetappOntapSvmPeersDataSourceSvmPeersSvmToTerraform(struct!.svm),
  }
}


export function dataNetappOntapSvmPeersDataSourceSvmPeersToHclTerraform(struct?: DataNetappOntapSvmPeersDataSourceSvmPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer: {
      value: dataNetappOntapSvmPeersDataSourceSvmPeersPeerToHclTerraform(struct!.peer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSvmPeersDataSourceSvmPeersPeer",
    },
    svm: {
      value: dataNetappOntapSvmPeersDataSourceSvmPeersSvmToHclTerraform(struct!.svm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapSvmPeersDataSourceSvmPeersSvm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapSvmPeersDataSourceSvmPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapSvmPeersDataSourceSvmPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer?.internalValue;
    }
    if (this._svm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapSvmPeersDataSourceSvmPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._peer.internalValue = undefined;
      this._svm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._peer.internalValue = value.peer;
      this._svm.internalValue = value.svm;
    }
  }

  // applications - computed: true, optional: false, required: false
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }

  // cx_profile_name - computed: true, optional: false, required: false
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer - computed: true, optional: false, required: true
  private _peer = new DataNetappOntapSvmPeersDataSourceSvmPeersPeerOutputReference(this, "peer");
  public get peer() {
    return this._peer;
  }
  public putPeer(value: DataNetappOntapSvmPeersDataSourceSvmPeersPeer) {
    this._peer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // svm - computed: true, optional: false, required: true
  private _svm = new DataNetappOntapSvmPeersDataSourceSvmPeersSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: DataNetappOntapSvmPeersDataSourceSvmPeersSvm) {
    this._svm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }
}

export class DataNetappOntapSvmPeersDataSourceSvmPeersList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapSvmPeersDataSourceSvmPeers[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapSvmPeersDataSourceSvmPeersOutputReference {
    return new DataNetappOntapSvmPeersDataSourceSvmPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source netapp-ontap_svm_peers_data_source}
*/
export class DataNetappOntapSvmPeersDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_svm_peers_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapSvmPeersDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapSvmPeersDataSource to import
  * @param importFromId The id of the existing DataNetappOntapSvmPeersDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapSvmPeersDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_svm_peers_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/svm_peers_data_source netapp-ontap_svm_peers_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapSvmPeersDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapSvmPeersDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_svm_peers_data_source',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNetappOntapSvmPeersDataSourceFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapSvmPeersDataSourceFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // svm_peers - computed: true, optional: false, required: false
  private _svmPeers = new DataNetappOntapSvmPeersDataSourceSvmPeersList(this, "svm_peers", false);
  public get svmPeers() {
    return this._svmPeers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapSvmPeersDataSourceFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataNetappOntapSvmPeersDataSourceFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapSvmPeersDataSourceFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
