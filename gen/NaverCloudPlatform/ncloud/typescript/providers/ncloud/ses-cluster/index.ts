// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#cluster_name SesCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#login_key_name SesCluster#login_key_name}
  */
  readonly loginKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#os_image_code SesCluster#os_image_code}
  */
  readonly osImageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#vpc_no SesCluster#vpc_no}
  */
  readonly vpcNo: number;
  /**
  * data_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#data_node SesCluster#data_node}
  */
  readonly dataNode: SesClusterDataNode;
  /**
  * manager_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#manager_node SesCluster#manager_node}
  */
  readonly managerNode: SesClusterManagerNode;
  /**
  * master_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#master_node SesCluster#master_node}
  */
  readonly masterNode?: SesClusterMasterNode;
  /**
  * search_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#search_engine SesCluster#search_engine}
  */
  readonly searchEngine: SesClusterSearchEngine;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#timeouts SesCluster#timeouts}
  */
  readonly timeouts?: SesClusterTimeouts;
}
export interface SesClusterClusterNodeListStruct {
}

export function sesClusterClusterNodeListStructToTerraform(struct?: SesClusterClusterNodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sesClusterClusterNodeListStructToHclTerraform(struct?: SesClusterClusterNodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SesClusterClusterNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SesClusterClusterNodeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesClusterClusterNodeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_instance_name - computed: true, optional: false, required: false
  public get computeInstanceName() {
    return this.getStringAttribute('compute_instance_name');
  }

  // compute_instance_no - computed: true, optional: false, required: false
  public get computeInstanceNo() {
    return this.getNumberAttribute('compute_instance_no');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // server_status - computed: true, optional: false, required: false
  public get serverStatus() {
    return this.getStringAttribute('server_status');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}

export class SesClusterClusterNodeListStructList extends cdktf.ComplexList {

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
  public get(index: number): SesClusterClusterNodeListStructOutputReference {
    return new SesClusterClusterNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SesClusterDataNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#count SesCluster#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#product_code SesCluster#product_code}
  */
  readonly productCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#storage_size SesCluster#storage_size}
  */
  readonly storageSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#subnet_no SesCluster#subnet_no}
  */
  readonly subnetNo: number;
}

export function sesClusterDataNodeToTerraform(struct?: SesClusterDataNodeOutputReference | SesClusterDataNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    product_code: cdktf.stringToTerraform(struct!.productCode),
    storage_size: cdktf.numberToTerraform(struct!.storageSize),
    subnet_no: cdktf.numberToTerraform(struct!.subnetNo),
  }
}


export function sesClusterDataNodeToHclTerraform(struct?: SesClusterDataNodeOutputReference | SesClusterDataNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    product_code: {
      value: cdktf.stringToHclTerraform(struct!.productCode),
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
      value: cdktf.numberToHclTerraform(struct!.subnetNo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesClusterDataNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SesClusterDataNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._productCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.productCode = this._productCode;
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

  public set internalValue(value: SesClusterDataNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._productCode = undefined;
      this._storageSize = undefined;
      this._subnetNo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._productCode = value.productCode;
      this._storageSize = value.storageSize;
      this._subnetNo = value.subnetNo;
    }
  }

  // acg_id - computed: true, optional: false, required: false
  public get acgId() {
    return this.getNumberAttribute('acg_id');
  }

  // acg_name - computed: true, optional: false, required: false
  public get acgName() {
    return this.getStringAttribute('acg_name');
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // product_code - computed: false, optional: false, required: true
  private _productCode?: string; 
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string) {
    this._productCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
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
  private _subnetNo?: number; 
  public get subnetNo() {
    return this.getNumberAttribute('subnet_no');
  }
  public set subnetNo(value: number) {
    this._subnetNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoInput() {
    return this._subnetNo;
  }
}
export interface SesClusterManagerNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#count SesCluster#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#is_dual_manager SesCluster#is_dual_manager}
  */
  readonly isDualManager: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#product_code SesCluster#product_code}
  */
  readonly productCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#subnet_no SesCluster#subnet_no}
  */
  readonly subnetNo: number;
}

export function sesClusterManagerNodeToTerraform(struct?: SesClusterManagerNodeOutputReference | SesClusterManagerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    is_dual_manager: cdktf.booleanToTerraform(struct!.isDualManager),
    product_code: cdktf.stringToTerraform(struct!.productCode),
    subnet_no: cdktf.numberToTerraform(struct!.subnetNo),
  }
}


export function sesClusterManagerNodeToHclTerraform(struct?: SesClusterManagerNodeOutputReference | SesClusterManagerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_dual_manager: {
      value: cdktf.booleanToHclTerraform(struct!.isDualManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    product_code: {
      value: cdktf.stringToHclTerraform(struct!.productCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_no: {
      value: cdktf.numberToHclTerraform(struct!.subnetNo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesClusterManagerNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SesClusterManagerNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._isDualManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDualManager = this._isDualManager;
    }
    if (this._productCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.productCode = this._productCode;
    }
    if (this._subnetNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetNo = this._subnetNo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesClusterManagerNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._isDualManager = undefined;
      this._productCode = undefined;
      this._subnetNo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._isDualManager = value.isDualManager;
      this._productCode = value.productCode;
      this._subnetNo = value.subnetNo;
    }
  }

  // acg_id - computed: true, optional: false, required: false
  public get acgId() {
    return this.getNumberAttribute('acg_id');
  }

  // acg_name - computed: true, optional: false, required: false
  public get acgName() {
    return this.getStringAttribute('acg_name');
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // is_dual_manager - computed: false, optional: false, required: true
  private _isDualManager?: boolean | cdktf.IResolvable; 
  public get isDualManager() {
    return this.getBooleanAttribute('is_dual_manager');
  }
  public set isDualManager(value: boolean | cdktf.IResolvable) {
    this._isDualManager = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDualManagerInput() {
    return this._isDualManager;
  }

  // product_code - computed: false, optional: false, required: true
  private _productCode?: string; 
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string) {
    this._productCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
  }

  // subnet_no - computed: false, optional: false, required: true
  private _subnetNo?: number; 
  public get subnetNo() {
    return this.getNumberAttribute('subnet_no');
  }
  public set subnetNo(value: number) {
    this._subnetNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoInput() {
    return this._subnetNo;
  }
}
export interface SesClusterMasterNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#count SesCluster#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#product_code SesCluster#product_code}
  */
  readonly productCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#subnet_no SesCluster#subnet_no}
  */
  readonly subnetNo?: number;
}

export function sesClusterMasterNodeToTerraform(struct?: SesClusterMasterNodeOutputReference | SesClusterMasterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    product_code: cdktf.stringToTerraform(struct!.productCode),
    subnet_no: cdktf.numberToTerraform(struct!.subnetNo),
  }
}


export function sesClusterMasterNodeToHclTerraform(struct?: SesClusterMasterNodeOutputReference | SesClusterMasterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    product_code: {
      value: cdktf.stringToHclTerraform(struct!.productCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_no: {
      value: cdktf.numberToHclTerraform(struct!.subnetNo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesClusterMasterNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SesClusterMasterNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._productCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.productCode = this._productCode;
    }
    if (this._subnetNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetNo = this._subnetNo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesClusterMasterNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._productCode = undefined;
      this._subnetNo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._productCode = value.productCode;
      this._subnetNo = value.subnetNo;
    }
  }

  // acg_id - computed: true, optional: false, required: false
  public get acgId() {
    return this.getNumberAttribute('acg_id');
  }

  // acg_name - computed: true, optional: false, required: false
  public get acgName() {
    return this.getStringAttribute('acg_name');
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // product_code - computed: false, optional: true, required: false
  private _productCode?: string; 
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string) {
    this._productCode = value;
  }
  public resetProductCode() {
    this._productCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
  }

  // subnet_no - computed: false, optional: true, required: false
  private _subnetNo?: number; 
  public get subnetNo() {
    return this.getNumberAttribute('subnet_no');
  }
  public set subnetNo(value: number) {
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
export interface SesClusterSearchEngine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#dashboard_port SesCluster#dashboard_port}
  */
  readonly dashboardPort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#user_name SesCluster#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#user_password SesCluster#user_password}
  */
  readonly userPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#version_code SesCluster#version_code}
  */
  readonly versionCode: string;
}

export function sesClusterSearchEngineToTerraform(struct?: SesClusterSearchEngineOutputReference | SesClusterSearchEngine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_port: cdktf.stringToTerraform(struct!.dashboardPort),
    user_name: cdktf.stringToTerraform(struct!.userName),
    user_password: cdktf.stringToTerraform(struct!.userPassword),
    version_code: cdktf.stringToTerraform(struct!.versionCode),
  }
}


export function sesClusterSearchEngineToHclTerraform(struct?: SesClusterSearchEngineOutputReference | SesClusterSearchEngine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_port: {
      value: cdktf.stringToHclTerraform(struct!.dashboardPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    version_code: {
      value: cdktf.stringToHclTerraform(struct!.versionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesClusterSearchEngineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SesClusterSearchEngine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardPort = this._dashboardPort;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._userPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword;
    }
    if (this._versionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionCode = this._versionCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesClusterSearchEngine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dashboardPort = undefined;
      this._userName = undefined;
      this._userPassword = undefined;
      this._versionCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dashboardPort = value.dashboardPort;
      this._userName = value.userName;
      this._userPassword = value.userPassword;
      this._versionCode = value.versionCode;
    }
  }

  // dashboard_port - computed: false, optional: false, required: true
  private _dashboardPort?: string; 
  public get dashboardPort() {
    return this.getStringAttribute('dashboard_port');
  }
  public set dashboardPort(value: string) {
    this._dashboardPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardPortInput() {
    return this._dashboardPort;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
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

  // version_code - computed: false, optional: false, required: true
  private _versionCode?: string; 
  public get versionCode() {
    return this.getStringAttribute('version_code');
  }
  public set versionCode(value: string) {
    this._versionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionCodeInput() {
    return this._versionCode;
  }
}
export interface SesClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#create SesCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#delete SesCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#update SesCluster#update}
  */
  readonly update?: string;
}

export function sesClusterTimeoutsToTerraform(struct?: SesClusterTimeouts | cdktf.IResolvable): any {
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


export function sesClusterTimeoutsToHclTerraform(struct?: SesClusterTimeouts | cdktf.IResolvable): any {
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

export class SesClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SesClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster ncloud_ses_cluster}
*/
export class SesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_ses_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesCluster to import
  * @param importFromId The id of the existing SesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_ses_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/ses_cluster ncloud_ses_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: SesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_ses_cluster',
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
    this._clusterName = config.clusterName;
    this._loginKeyName = config.loginKeyName;
    this._osImageCode = config.osImageCode;
    this._vpcNo = config.vpcNo;
    this._dataNode.internalValue = config.dataNode;
    this._managerNode.internalValue = config.managerNode;
    this._masterNode.internalValue = config.masterNode;
    this._searchEngine.internalValue = config.searchEngine;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cluster_node_list - computed: true, optional: false, required: false
  private _clusterNodeList = new SesClusterClusterNodeListStructList(this, "cluster_node_list", false);
  public get clusterNodeList() {
    return this._clusterNodeList;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login_key_name - computed: false, optional: false, required: true
  private _loginKeyName?: string; 
  public get loginKeyName() {
    return this.getStringAttribute('login_key_name');
  }
  public set loginKeyName(value: string) {
    this._loginKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginKeyNameInput() {
    return this._loginKeyName;
  }

  // manager_node_instance_no_list - computed: true, optional: false, required: false
  public get managerNodeInstanceNoList() {
    return this.getNumberListAttribute('manager_node_instance_no_list');
  }

  // os_image_code - computed: false, optional: false, required: true
  private _osImageCode?: string; 
  public get osImageCode() {
    return this.getStringAttribute('os_image_code');
  }
  public set osImageCode(value: string) {
    this._osImageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageCodeInput() {
    return this._osImageCode;
  }

  // service_group_instance_no - computed: true, optional: false, required: false
  public get serviceGroupInstanceNo() {
    return this.getStringAttribute('service_group_instance_no');
  }

  // vpc_no - computed: false, optional: false, required: true
  private _vpcNo?: number; 
  public get vpcNo() {
    return this.getNumberAttribute('vpc_no');
  }
  public set vpcNo(value: number) {
    this._vpcNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNoInput() {
    return this._vpcNo;
  }

  // data_node - computed: false, optional: false, required: true
  private _dataNode = new SesClusterDataNodeOutputReference(this, "data_node");
  public get dataNode() {
    return this._dataNode;
  }
  public putDataNode(value: SesClusterDataNode) {
    this._dataNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeInput() {
    return this._dataNode.internalValue;
  }

  // manager_node - computed: false, optional: false, required: true
  private _managerNode = new SesClusterManagerNodeOutputReference(this, "manager_node");
  public get managerNode() {
    return this._managerNode;
  }
  public putManagerNode(value: SesClusterManagerNode) {
    this._managerNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managerNodeInput() {
    return this._managerNode.internalValue;
  }

  // master_node - computed: false, optional: true, required: false
  private _masterNode = new SesClusterMasterNodeOutputReference(this, "master_node");
  public get masterNode() {
    return this._masterNode;
  }
  public putMasterNode(value: SesClusterMasterNode) {
    this._masterNode.internalValue = value;
  }
  public resetMasterNode() {
    this._masterNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeInput() {
    return this._masterNode.internalValue;
  }

  // search_engine - computed: false, optional: false, required: true
  private _searchEngine = new SesClusterSearchEngineOutputReference(this, "search_engine");
  public get searchEngine() {
    return this._searchEngine;
  }
  public putSearchEngine(value: SesClusterSearchEngine) {
    this._searchEngine.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEngineInput() {
    return this._searchEngine.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SesClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SesClusterTimeouts) {
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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      login_key_name: cdktf.stringToTerraform(this._loginKeyName),
      os_image_code: cdktf.stringToTerraform(this._osImageCode),
      vpc_no: cdktf.numberToTerraform(this._vpcNo),
      data_node: sesClusterDataNodeToTerraform(this._dataNode.internalValue),
      manager_node: sesClusterManagerNodeToTerraform(this._managerNode.internalValue),
      master_node: sesClusterMasterNodeToTerraform(this._masterNode.internalValue),
      search_engine: sesClusterSearchEngineToTerraform(this._searchEngine.internalValue),
      timeouts: sesClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_key_name: {
        value: cdktf.stringToHclTerraform(this._loginKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_image_code: {
        value: cdktf.stringToHclTerraform(this._osImageCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_no: {
        value: cdktf.numberToHclTerraform(this._vpcNo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node: {
        value: sesClusterDataNodeToHclTerraform(this._dataNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesClusterDataNodeList",
      },
      manager_node: {
        value: sesClusterManagerNodeToHclTerraform(this._managerNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesClusterManagerNodeList",
      },
      master_node: {
        value: sesClusterMasterNodeToHclTerraform(this._masterNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesClusterMasterNodeList",
      },
      search_engine: {
        value: sesClusterSearchEngineToHclTerraform(this._searchEngine.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesClusterSearchEngineList",
      },
      timeouts: {
        value: sesClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
