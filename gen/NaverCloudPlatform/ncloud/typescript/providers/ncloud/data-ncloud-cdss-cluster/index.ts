// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudCdssClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#config_group_no DataNcloudCdssCluster#config_group_no}
  */
  readonly configGroupNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#kafka_version_code DataNcloudCdssCluster#kafka_version_code}
  */
  readonly kafkaVersionCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#name DataNcloudCdssCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#os_image DataNcloudCdssCluster#os_image}
  */
  readonly osImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#vpc_no DataNcloudCdssCluster#vpc_no}
  */
  readonly vpcNo?: string;
  /**
  * broker_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#broker_nodes DataNcloudCdssCluster#broker_nodes}
  */
  readonly brokerNodes?: DataNcloudCdssClusterBrokerNodes[] | cdktf.IResolvable;
  /**
  * cmak block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#cmak DataNcloudCdssCluster#cmak}
  */
  readonly cmak?: DataNcloudCdssClusterCmak[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#filter DataNcloudCdssCluster#filter}
  */
  readonly filter?: DataNcloudCdssClusterFilter[] | cdktf.IResolvable;
  /**
  * manager_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#manager_node DataNcloudCdssCluster#manager_node}
  */
  readonly managerNode?: DataNcloudCdssClusterManagerNode[] | cdktf.IResolvable;
}
export interface DataNcloudCdssClusterEndpoints {
}

export function dataNcloudCdssClusterEndpointsToTerraform(struct?: DataNcloudCdssClusterEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudCdssClusterEndpointsToHclTerraform(struct?: DataNcloudCdssClusterEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudCdssClusterEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudCdssClusterEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudCdssClusterEndpoints | undefined) {
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

export class DataNcloudCdssClusterEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudCdssClusterEndpointsOutputReference {
    return new DataNcloudCdssClusterEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudCdssClusterBrokerNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#node_count DataNcloudCdssCluster#node_count}
  */
  readonly nodeCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#node_product_code DataNcloudCdssCluster#node_product_code}
  */
  readonly nodeProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#storage_size DataNcloudCdssCluster#storage_size}
  */
  readonly storageSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#subnet_no DataNcloudCdssCluster#subnet_no}
  */
  readonly subnetNo?: string;
}

export function dataNcloudCdssClusterBrokerNodesToTerraform(struct?: DataNcloudCdssClusterBrokerNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.stringToTerraform(struct!.nodeCount),
    node_product_code: cdktf.stringToTerraform(struct!.nodeProductCode),
    storage_size: cdktf.stringToTerraform(struct!.storageSize),
    subnet_no: cdktf.stringToTerraform(struct!.subnetNo),
  }
}


export function dataNcloudCdssClusterBrokerNodesToHclTerraform(struct?: DataNcloudCdssClusterBrokerNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.stringToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_product_code: {
      value: cdktf.stringToHclTerraform(struct!.nodeProductCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_size: {
      value: cdktf.stringToHclTerraform(struct!.storageSize),
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

export class DataNcloudCdssClusterBrokerNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudCdssClusterBrokerNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DataNcloudCdssClusterBrokerNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeCount = undefined;
      this._nodeProductCode = undefined;
      this._storageSize = undefined;
      this._subnetNo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeCount = value.nodeCount;
      this._nodeProductCode = value.nodeProductCode;
      this._storageSize = value.storageSize;
      this._subnetNo = value.subnetNo;
    }
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: string; 
  public get nodeCount() {
    return this.getStringAttribute('node_count');
  }
  public set nodeCount(value: string) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_product_code - computed: false, optional: true, required: false
  private _nodeProductCode?: string; 
  public get nodeProductCode() {
    return this.getStringAttribute('node_product_code');
  }
  public set nodeProductCode(value: string) {
    this._nodeProductCode = value;
  }
  public resetNodeProductCode() {
    this._nodeProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeProductCodeInput() {
    return this._nodeProductCode;
  }

  // storage_size - computed: false, optional: true, required: false
  private _storageSize?: string; 
  public get storageSize() {
    return this.getStringAttribute('storage_size');
  }
  public set storageSize(value: string) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // subnet_no - computed: false, optional: true, required: false
  private _subnetNo?: string; 
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }
  public set subnetNo(value: string) {
    this._subnetNo = value;
  }
  public resetSubnetNo() {
    this._subnetNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoInput() {
    return this._subnetNo;
  }
}

export class DataNcloudCdssClusterBrokerNodesList extends cdktf.ComplexList {
  public internalValue? : DataNcloudCdssClusterBrokerNodes[] | cdktf.IResolvable

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
  public get(index: number): DataNcloudCdssClusterBrokerNodesOutputReference {
    return new DataNcloudCdssClusterBrokerNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudCdssClusterCmak {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#user_name DataNcloudCdssCluster#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#user_password DataNcloudCdssCluster#user_password}
  */
  readonly userPassword?: string;
}

export function dataNcloudCdssClusterCmakToTerraform(struct?: DataNcloudCdssClusterCmak | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_name: cdktf.stringToTerraform(struct!.userName),
    user_password: cdktf.stringToTerraform(struct!.userPassword),
  }
}


export function dataNcloudCdssClusterCmakToHclTerraform(struct?: DataNcloudCdssClusterCmak | cdktf.IResolvable): any {
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

export class DataNcloudCdssClusterCmakOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudCdssClusterCmak | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DataNcloudCdssClusterCmak | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userName = undefined;
      this._userPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userName = value.userName;
      this._userPassword = value.userPassword;
    }
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_password - computed: false, optional: true, required: false
  private _userPassword?: string; 
  public get userPassword() {
    return this.getStringAttribute('user_password');
  }
  public set userPassword(value: string) {
    this._userPassword = value;
  }
  public resetUserPassword() {
    this._userPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword;
  }
}

export class DataNcloudCdssClusterCmakList extends cdktf.ComplexList {
  public internalValue? : DataNcloudCdssClusterCmak[] | cdktf.IResolvable

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
  public get(index: number): DataNcloudCdssClusterCmakOutputReference {
    return new DataNcloudCdssClusterCmakOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudCdssClusterFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#name DataNcloudCdssCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#regex DataNcloudCdssCluster#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#values DataNcloudCdssCluster#values}
  */
  readonly values: string[];
}

export function dataNcloudCdssClusterFilterToTerraform(struct?: DataNcloudCdssClusterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataNcloudCdssClusterFilterToHclTerraform(struct?: DataNcloudCdssClusterFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNcloudCdssClusterFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudCdssClusterFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudCdssClusterFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataNcloudCdssClusterFilterList extends cdktf.ComplexList {
  public internalValue? : DataNcloudCdssClusterFilter[] | cdktf.IResolvable

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
  public get(index: number): DataNcloudCdssClusterFilterOutputReference {
    return new DataNcloudCdssClusterFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudCdssClusterManagerNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#node_product_code DataNcloudCdssCluster#node_product_code}
  */
  readonly nodeProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#subnet_no DataNcloudCdssCluster#subnet_no}
  */
  readonly subnetNo?: string;
}

export function dataNcloudCdssClusterManagerNodeToTerraform(struct?: DataNcloudCdssClusterManagerNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_product_code: cdktf.stringToTerraform(struct!.nodeProductCode),
    subnet_no: cdktf.stringToTerraform(struct!.subnetNo),
  }
}


export function dataNcloudCdssClusterManagerNodeToHclTerraform(struct?: DataNcloudCdssClusterManagerNode | cdktf.IResolvable): any {
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

export class DataNcloudCdssClusterManagerNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudCdssClusterManagerNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DataNcloudCdssClusterManagerNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeProductCode = undefined;
      this._subnetNo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeProductCode = value.nodeProductCode;
      this._subnetNo = value.subnetNo;
    }
  }

  // node_product_code - computed: false, optional: true, required: false
  private _nodeProductCode?: string; 
  public get nodeProductCode() {
    return this.getStringAttribute('node_product_code');
  }
  public set nodeProductCode(value: string) {
    this._nodeProductCode = value;
  }
  public resetNodeProductCode() {
    this._nodeProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeProductCodeInput() {
    return this._nodeProductCode;
  }

  // subnet_no - computed: false, optional: true, required: false
  private _subnetNo?: string; 
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }
  public set subnetNo(value: string) {
    this._subnetNo = value;
  }
  public resetSubnetNo() {
    this._subnetNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoInput() {
    return this._subnetNo;
  }
}

export class DataNcloudCdssClusterManagerNodeList extends cdktf.ComplexList {
  public internalValue? : DataNcloudCdssClusterManagerNode[] | cdktf.IResolvable

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
  public get(index: number): DataNcloudCdssClusterManagerNodeOutputReference {
    return new DataNcloudCdssClusterManagerNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster ncloud_cdss_cluster}
*/
export class DataNcloudCdssCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_cdss_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudCdssCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudCdssCluster to import
  * @param importFromId The id of the existing DataNcloudCdssCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudCdssCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_cdss_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/cdss_cluster ncloud_cdss_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudCdssClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNcloudCdssClusterConfig = {}) {
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
    this._filter.internalValue = config.filter;
    this._managerNode.internalValue = config.managerNode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_group_no - computed: false, optional: true, required: false
  private _configGroupNo?: string; 
  public get configGroupNo() {
    return this.getStringAttribute('config_group_no');
  }
  public set configGroupNo(value: string) {
    this._configGroupNo = value;
  }
  public resetConfigGroupNo() {
    this._configGroupNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configGroupNoInput() {
    return this._configGroupNo;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataNcloudCdssClusterEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka_version_code - computed: false, optional: true, required: false
  private _kafkaVersionCode?: string; 
  public get kafkaVersionCode() {
    return this.getStringAttribute('kafka_version_code');
  }
  public set kafkaVersionCode(value: string) {
    this._kafkaVersionCode = value;
  }
  public resetKafkaVersionCode() {
    this._kafkaVersionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionCodeInput() {
    return this._kafkaVersionCode;
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

  // os_image - computed: false, optional: true, required: false
  private _osImage?: string; 
  public get osImage() {
    return this.getStringAttribute('os_image');
  }
  public set osImage(value: string) {
    this._osImage = value;
  }
  public resetOsImage() {
    this._osImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageInput() {
    return this._osImage;
  }

  // service_group_instance_no - computed: true, optional: false, required: false
  public get serviceGroupInstanceNo() {
    return this.getStringAttribute('service_group_instance_no');
  }

  // vpc_no - computed: false, optional: true, required: false
  private _vpcNo?: string; 
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }
  public set vpcNo(value: string) {
    this._vpcNo = value;
  }
  public resetVpcNo() {
    this._vpcNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNoInput() {
    return this._vpcNo;
  }

  // broker_nodes - computed: false, optional: true, required: false
  private _brokerNodes = new DataNcloudCdssClusterBrokerNodesList(this, "broker_nodes", false);
  public get brokerNodes() {
    return this._brokerNodes;
  }
  public putBrokerNodes(value: DataNcloudCdssClusterBrokerNodes[] | cdktf.IResolvable) {
    this._brokerNodes.internalValue = value;
  }
  public resetBrokerNodes() {
    this._brokerNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNodesInput() {
    return this._brokerNodes.internalValue;
  }

  // cmak - computed: false, optional: true, required: false
  private _cmak = new DataNcloudCdssClusterCmakList(this, "cmak", false);
  public get cmak() {
    return this._cmak;
  }
  public putCmak(value: DataNcloudCdssClusterCmak[] | cdktf.IResolvable) {
    this._cmak.internalValue = value;
  }
  public resetCmak() {
    this._cmak.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmakInput() {
    return this._cmak.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNcloudCdssClusterFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNcloudCdssClusterFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // manager_node - computed: false, optional: true, required: false
  private _managerNode = new DataNcloudCdssClusterManagerNodeList(this, "manager_node", false);
  public get managerNode() {
    return this._managerNode;
  }
  public putManagerNode(value: DataNcloudCdssClusterManagerNode[] | cdktf.IResolvable) {
    this._managerNode.internalValue = value;
  }
  public resetManagerNode() {
    this._managerNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerNodeInput() {
    return this._managerNode.internalValue;
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
      broker_nodes: cdktf.listMapper(dataNcloudCdssClusterBrokerNodesToTerraform, true)(this._brokerNodes.internalValue),
      cmak: cdktf.listMapper(dataNcloudCdssClusterCmakToTerraform, true)(this._cmak.internalValue),
      filter: cdktf.listMapper(dataNcloudCdssClusterFilterToTerraform, true)(this._filter.internalValue),
      manager_node: cdktf.listMapper(dataNcloudCdssClusterManagerNodeToTerraform, true)(this._managerNode.internalValue),
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
        value: cdktf.listMapperHcl(dataNcloudCdssClusterBrokerNodesToHclTerraform, true)(this._brokerNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNcloudCdssClusterBrokerNodesList",
      },
      cmak: {
        value: cdktf.listMapperHcl(dataNcloudCdssClusterCmakToHclTerraform, true)(this._cmak.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNcloudCdssClusterCmakList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataNcloudCdssClusterFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNcloudCdssClusterFilterList",
      },
      manager_node: {
        value: cdktf.listMapperHcl(dataNcloudCdssClusterManagerNodeToHclTerraform, true)(this._managerNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNcloudCdssClusterManagerNodeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
