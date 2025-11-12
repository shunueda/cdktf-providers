// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdssClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#config_group_no CdssCluster#config_group_no}
  */
  readonly configGroupNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#kafka_version_code CdssCluster#kafka_version_code}
  */
  readonly kafkaVersionCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#name CdssCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#os_image CdssCluster#os_image}
  */
  readonly osImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#vpc_no CdssCluster#vpc_no}
  */
  readonly vpcNo: string;
  /**
  * broker_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#broker_nodes CdssCluster#broker_nodes}
  */
  readonly brokerNodes: CdssClusterBrokerNodes;
  /**
  * cmak block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#cmak CdssCluster#cmak}
  */
  readonly cmak: CdssClusterCmak;
  /**
  * manager_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#manager_node CdssCluster#manager_node}
  */
  readonly managerNode: CdssClusterManagerNode;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#timeouts CdssCluster#timeouts}
  */
  readonly timeouts?: CdssClusterTimeouts;
}
export interface CdssClusterEndpoints {
}

export function cdssClusterEndpointsToTerraform(struct?: CdssClusterEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdssClusterEndpointsToHclTerraform(struct?: CdssClusterEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdssClusterEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdssClusterEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdssClusterEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts_private_endpoint_tls - computed: true, optional: false, required: false
  public get hostsPrivateEndpointTls() {
    return this.getListAttribute('hosts_private_endpoint_tls');
  }

  // hosts_public_endpoint_tls - computed: true, optional: false, required: false
  public get hostsPublicEndpointTls() {
    return this.getListAttribute('hosts_public_endpoint_tls');
  }

  // plaintext - computed: true, optional: false, required: false
  public get plaintext() {
    return this.getListAttribute('plaintext');
  }

  // public_endpoint_plaintext - computed: true, optional: false, required: false
  public get publicEndpointPlaintext() {
    return this.getListAttribute('public_endpoint_plaintext');
  }

  // public_endpoint_plaintext_listener_port - computed: true, optional: false, required: false
  public get publicEndpointPlaintextListenerPort() {
    return this.getListAttribute('public_endpoint_plaintext_listener_port');
  }

  // public_endpoint_tls - computed: true, optional: false, required: false
  public get publicEndpointTls() {
    return this.getListAttribute('public_endpoint_tls');
  }

  // public_endpoint_tls_listener_port - computed: true, optional: false, required: false
  public get publicEndpointTlsListenerPort() {
    return this.getListAttribute('public_endpoint_tls_listener_port');
  }

  // tls - computed: true, optional: false, required: false
  public get tls() {
    return this.getListAttribute('tls');
  }

  // zookeeper - computed: true, optional: false, required: false
  public get zookeeper() {
    return this.getListAttribute('zookeeper');
  }
}

export class CdssClusterEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): CdssClusterEndpointsOutputReference {
    return new CdssClusterEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdssClusterBrokerNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#node_count CdssCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#node_product_code CdssCluster#node_product_code}
  */
  readonly nodeProductCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#storage_size CdssCluster#storage_size}
  */
  readonly storageSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#subnet_no CdssCluster#subnet_no}
  */
  readonly subnetNo: string;
}

export function cdssClusterBrokerNodesToTerraform(struct?: CdssClusterBrokerNodesOutputReference | CdssClusterBrokerNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_product_code: cdktf.stringToTerraform(struct!.nodeProductCode),
    storage_size: cdktf.numberToTerraform(struct!.storageSize),
    subnet_no: cdktf.stringToTerraform(struct!.subnetNo),
  }
}


export function cdssClusterBrokerNodesToHclTerraform(struct?: CdssClusterBrokerNodesOutputReference | CdssClusterBrokerNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_product_code: {
      value: cdktf.stringToHclTerraform(struct!.nodeProductCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_size: {
      value: cdktf.numberToHclTerraform(struct!.storageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_no: {
      value: cdktf.stringToHclTerraform(struct!.subnetNo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdssClusterBrokerNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdssClusterBrokerNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeProductCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeProductCode = this._nodeProductCode;
    }
    if (this._storageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSize = this._storageSize;
    }
    if (this._subnetNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetNo = this._subnetNo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdssClusterBrokerNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeCount = undefined;
      this._nodeProductCode = undefined;
      this._storageSize = undefined;
      this._subnetNo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeCount = value.nodeCount;
      this._nodeProductCode = value.nodeProductCode;
      this._storageSize = value.storageSize;
      this._subnetNo = value.subnetNo;
    }
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_product_code - computed: false, optional: false, required: true
  private _nodeProductCode?: string; 
  public get nodeProductCode() {
    return this.getStringAttribute('node_product_code');
  }
  public set nodeProductCode(value: string) {
    this._nodeProductCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeProductCodeInput() {
    return this._nodeProductCode;
  }

  // storage_size - computed: false, optional: false, required: true
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // subnet_no - computed: false, optional: false, required: true
  private _subnetNo?: string; 
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }
  public set subnetNo(value: string) {
    this._subnetNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoInput() {
    return this._subnetNo;
  }
}
export interface CdssClusterCmak {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#user_name CdssCluster#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#user_password CdssCluster#user_password}
  */
  readonly userPassword: string;
}

export function cdssClusterCmakToTerraform(struct?: CdssClusterCmakOutputReference | CdssClusterCmak): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_name: cdktf.stringToTerraform(struct!.userName),
    user_password: cdktf.stringToTerraform(struct!.userPassword),
  }
}


export function cdssClusterCmakToHclTerraform(struct?: CdssClusterCmakOutputReference | CdssClusterCmak): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_password: {
      value: cdktf.stringToHclTerraform(struct!.userPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdssClusterCmakOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdssClusterCmak | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._userPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdssClusterCmak | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userName = undefined;
      this._userPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userName = value.userName;
      this._userPassword = value.userPassword;
    }
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_password - computed: false, optional: false, required: true
  private _userPassword?: string; 
  public get userPassword() {
    return this.getStringAttribute('user_password');
  }
  public set userPassword(value: string) {
    this._userPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword;
  }
}
export interface CdssClusterManagerNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#node_product_code CdssCluster#node_product_code}
  */
  readonly nodeProductCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#subnet_no CdssCluster#subnet_no}
  */
  readonly subnetNo: string;
}

export function cdssClusterManagerNodeToTerraform(struct?: CdssClusterManagerNodeOutputReference | CdssClusterManagerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_product_code: cdktf.stringToTerraform(struct!.nodeProductCode),
    subnet_no: cdktf.stringToTerraform(struct!.subnetNo),
  }
}


export function cdssClusterManagerNodeToHclTerraform(struct?: CdssClusterManagerNodeOutputReference | CdssClusterManagerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_product_code: {
      value: cdktf.stringToHclTerraform(struct!.nodeProductCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_no: {
      value: cdktf.stringToHclTerraform(struct!.subnetNo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdssClusterManagerNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdssClusterManagerNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeProductCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeProductCode = this._nodeProductCode;
    }
    if (this._subnetNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetNo = this._subnetNo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdssClusterManagerNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeProductCode = undefined;
      this._subnetNo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeProductCode = value.nodeProductCode;
      this._subnetNo = value.subnetNo;
    }
  }

  // node_product_code - computed: false, optional: false, required: true
  private _nodeProductCode?: string; 
  public get nodeProductCode() {
    return this.getStringAttribute('node_product_code');
  }
  public set nodeProductCode(value: string) {
    this._nodeProductCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeProductCodeInput() {
    return this._nodeProductCode;
  }

  // subnet_no - computed: false, optional: false, required: true
  private _subnetNo?: string; 
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }
  public set subnetNo(value: string) {
    this._subnetNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoInput() {
    return this._subnetNo;
  }
}
export interface CdssClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#create CdssCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#delete CdssCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#update CdssCluster#update}
  */
  readonly update?: string;
}

export function cdssClusterTimeoutsToTerraform(struct?: CdssClusterTimeouts | cdktf.IResolvable): any {
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


export function cdssClusterTimeoutsToHclTerraform(struct?: CdssClusterTimeouts | cdktf.IResolvable): any {
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

export class CdssClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdssClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdssClusterTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster ncloud_cdss_cluster}
*/
export class CdssCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_cdss_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdssCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdssCluster to import
  * @param importFromId The id of the existing CdssCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdssCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_cdss_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/cdss_cluster ncloud_cdss_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdssClusterConfig
  */
  public constructor(scope: Construct, id: string, config: CdssClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_cdss_cluster',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4',
        providerVersionConstraint: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configGroupNo = config.configGroupNo;
    this._kafkaVersionCode = config.kafkaVersionCode;
    this._name = config.name;
    this._osImage = config.osImage;
    this._vpcNo = config.vpcNo;
    this._brokerNodes.internalValue = config.brokerNodes;
    this._cmak.internalValue = config.cmak;
    this._managerNode.internalValue = config.managerNode;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_group_no - computed: false, optional: false, required: true
  private _configGroupNo?: string; 
  public get configGroupNo() {
    return this.getStringAttribute('config_group_no');
  }
  public set configGroupNo(value: string) {
    this._configGroupNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configGroupNoInput() {
    return this._configGroupNo;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new CdssClusterEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka_version_code - computed: false, optional: false, required: true
  private _kafkaVersionCode?: string; 
  public get kafkaVersionCode() {
    return this.getStringAttribute('kafka_version_code');
  }
  public set kafkaVersionCode(value: string) {
    this._kafkaVersionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionCodeInput() {
    return this._kafkaVersionCode;
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

  // os_image - computed: false, optional: false, required: true
  private _osImage?: string; 
  public get osImage() {
    return this.getStringAttribute('os_image');
  }
  public set osImage(value: string) {
    this._osImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageInput() {
    return this._osImage;
  }

  // vpc_no - computed: false, optional: false, required: true
  private _vpcNo?: string; 
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }
  public set vpcNo(value: string) {
    this._vpcNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNoInput() {
    return this._vpcNo;
  }

  // broker_nodes - computed: false, optional: false, required: true
  private _brokerNodes = new CdssClusterBrokerNodesOutputReference(this, "broker_nodes");
  public get brokerNodes() {
    return this._brokerNodes;
  }
  public putBrokerNodes(value: CdssClusterBrokerNodes) {
    this._brokerNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNodesInput() {
    return this._brokerNodes.internalValue;
  }

  // cmak - computed: false, optional: false, required: true
  private _cmak = new CdssClusterCmakOutputReference(this, "cmak");
  public get cmak() {
    return this._cmak;
  }
  public putCmak(value: CdssClusterCmak) {
    this._cmak.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmakInput() {
    return this._cmak.internalValue;
  }

  // manager_node - computed: false, optional: false, required: true
  private _managerNode = new CdssClusterManagerNodeOutputReference(this, "manager_node");
  public get managerNode() {
    return this._managerNode;
  }
  public putManagerNode(value: CdssClusterManagerNode) {
    this._managerNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managerNodeInput() {
    return this._managerNode.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdssClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdssClusterTimeouts) {
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
      config_group_no: cdktf.stringToTerraform(this._configGroupNo),
      kafka_version_code: cdktf.stringToTerraform(this._kafkaVersionCode),
      name: cdktf.stringToTerraform(this._name),
      os_image: cdktf.stringToTerraform(this._osImage),
      vpc_no: cdktf.stringToTerraform(this._vpcNo),
      broker_nodes: cdssClusterBrokerNodesToTerraform(this._brokerNodes.internalValue),
      cmak: cdssClusterCmakToTerraform(this._cmak.internalValue),
      manager_node: cdssClusterManagerNodeToTerraform(this._managerNode.internalValue),
      timeouts: cdssClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_group_no: {
        value: cdktf.stringToHclTerraform(this._configGroupNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_version_code: {
        value: cdktf.stringToHclTerraform(this._kafkaVersionCode),
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
      os_image: {
        value: cdktf.stringToHclTerraform(this._osImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_no: {
        value: cdktf.stringToHclTerraform(this._vpcNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broker_nodes: {
        value: cdssClusterBrokerNodesToHclTerraform(this._brokerNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdssClusterBrokerNodesList",
      },
      cmak: {
        value: cdssClusterCmakToHclTerraform(this._cmak.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdssClusterCmakList",
      },
      manager_node: {
        value: cdssClusterManagerNodeToHclTerraform(this._managerNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdssClusterManagerNodeList",
      },
      timeouts: {
        value: cdssClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdssClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
